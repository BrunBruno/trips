
import re
from pathlib import Path
from collections import defaultdict

# ================= CONFIG =================

PUBLIC_DIR = Path("public")
SRC_DIR = Path("src")
DATA_FILE = SRC_DIR / "data.tsx"

IMAGE_EXTENSIONS = {".jpg", ".jpeg"}

# ==========================================


def remove_comments(code):
    """Remove JS/TS comments while preserving strings."""
    pattern = r"""
        ("(?:\\.|[^"\\])*")
        |('(?:\\.|[^'\\])*')
        |(`(?:\\.|[^`\\])*`)
        |(/\*[\s\S]*?\*/)
        |(//[^\n]*)
    """

    def replace(match):
        if match.group(1) or match.group(2) or match.group(3):
            return match.group(0)
        return " " * len(match.group(0))

    return re.sub(pattern, replace, code, flags=re.VERBOSE)


def read_file(path):
    return remove_comments(path.read_text(encoding="utf-8"))


def extract_balanced(text, start, opening, closing):
    """Extract content enclosed by matching brackets."""
    depth = 0
    quote = None
    escaped = False

    for i in range(start, len(text)):
        char = text[i]

        if quote:
            if escaped:
                escaped = False
            elif char == "\\":
                escaped = True
            elif char == quote:
                quote = None
            continue

        if char in ("'", '"', "`"):
            quote = char
        elif char == opening:
            depth += 1
        elif char == closing:
            depth -= 1
            if depth == 0:
                return text[start + 1:i]

    return ""



def extract_array(text, variable):
    """Extract exported array, correctly handling TypeScript array types."""

    # Find exported variable declaration
    match = re.search(
        rf'\bexport\s+const\s+{re.escape(variable)}\b',
        text
    )

    if not match:
        print(f"    DEBUG: declaration not found: {variable}")
        return ""

    # Find assignment AFTER the variable declaration
    equal_pos = text.find("=", match.end())

    if equal_pos == -1:
        print(f"    DEBUG: assignment not found: {variable}")
        return ""

    # Find opening bracket AFTER assignment.
    # This avoids matching MyHistory[] in the type declaration.
    start = equal_pos + 1

    while start < len(text) and text[start].isspace():
        start += 1

    if start >= len(text) or text[start] != "[":
        print(f"    DEBUG: array opening bracket not found: {variable}")
        return ""

    content = extract_balanced(text, start, "[", "]")

    if not content:
        print(f"    DEBUG: array extraction failed: {variable}")
        return ""

    return content



def extract_imports(data):
    imports = {}

    pattern = re.compile(
        r'import\s*\{([\s\S]*?)\}\s*from\s*["\']([^"\']+)["\']'
    )

    for match in pattern.finditer(data):
        names, source = match.groups()

        if not source.startswith("./history/"):
            continue

        stem = Path(source).name

        # Search actual file instead of assuming extension
        candidates = list(SRC_DIR.joinpath("history").glob(stem + ".*"))

        history_path = next(
            (p for p in candidates if p.suffix in {".ts", ".tsx"}),
            None
        )

        if not history_path:
            print(f"⚠️ Import file not found: {source}")
            continue

        for item in names.split(","):
            item = item.strip()

            if not item:
                continue

            parts = re.split(r"\s+as\s+", item)
            original = parts[0].strip()
            alias = parts[-1].strip()

            if original.endswith("_HISTORY"):
                imports[alias] = history_path

    return imports


def extract_country_records(data):
    """Extract active country objects from countries array."""

    match = re.search(
        r'\bconst\s+countries\s*(?::[^=]+)?=\s*\[',
        data
    )

    if not match:
        print("ERROR: countries declaration not found")
        return []

    # Regex ends exactly at the opening array bracket
    start = match.end() - 1

    content = extract_balanced(data, start, "[", "]")

    if not content:
        print("ERROR: countries array is empty or invalid")
        return []

    records = []
    depth = 0
    object_start = None
    quote = None
    escaped = False

    for i, char in enumerate(content):

        if quote:
            if escaped:
                escaped = False
            elif char == "\\":
                escaped = True
            elif char == quote:
                quote = None
            continue

        if char in ("'", '"', "`"):
            quote = char

        elif char == "{":
            if depth == 0:
                object_start = i
            depth += 1

        elif char == "}":
            depth -= 1

            if depth == 0 and object_start is not None:
                records.append(content[object_start:i + 1])
                object_start = None

    return records

def get_used_images(history_content):
    """Extract image numbers used in a history array."""
    used = set()

    # images: [1, 2, 3]
    # imgs: [1, 2, 3]
    for match in re.finditer(
        r'\b(?:images|imgs)\s*:\s*\[([\s\S]*?)\]',
        history_content
    ):
        used.update(
            int(n) for n in re.findall(r'\b\d+\b', match.group(1))
        )

    # img: 14
    for match in re.finditer(
        r'\bimg\s*:\s*(\d+)',
        history_content
    ):
        used.add(int(match.group(1)))

    return used


def get_public_images():
    """Find numbered images in all public/*/img folders."""
    images = defaultdict(set)

    for img_dir in PUBLIC_DIR.rglob("img"):
        if not img_dir.is_dir():
            continue

        folder = img_dir.parent.name

        for file in img_dir.iterdir():
            if file.suffix.lower() not in IMAGE_EXTENSIONS:
                continue

            match = re.fullmatch(r"(\d+)", file.stem)

            if match:
                images[folder].add(int(match.group(1)))

    return images


def main():
    print("\n========== IMAGE CHECK ==========\n")

    data = read_file(DATA_FILE)

    imports = extract_imports(data)
    records = extract_country_records(data)
    available = get_public_images()

    print(f"Imports found: {len(imports)}")
    print(f"Country records found: {len(records)}")
    print(f"Public image folders found: {len(available)}")

    print("\nImported histories:")
    for name, path in imports.items():
        print(f"  {name} -> {path}")

    print("\nCountry folders:")
    for record in records:
        folder = re.search(r'\bfolder\s*:\s*["\']([^"\']+)', record)
        history = re.search(r'\bhistory\s*:\s*(\w+)', record)

        if folder:
            print(
                f"  {folder.group(1)} -> "
                f"{history.group(1) if history else 'NO HISTORY'}"
            )

    results = {}
    skipped = []

    for record in records:
        folder_match = re.search(
            r'\bfolder\s*:\s*["\']([^"\']+)["\']',
            record
        )

        history_match = re.search(
            r'\bhistory\s*:\s*(\w+)',
            record
        )

        if not folder_match:
            continue

        folder = folder_match.group(1)

        if not history_match:
            skipped.append(folder)
            continue

        history_name = history_match.group(1)
        history_path = imports.get(history_name)

        if not history_path or not history_path.exists():
            print(f"⚠️ {folder}: cannot find {history_name}")
            continue

        history_content = read_file(history_path)
        history_array = extract_array(history_content, history_name)

        if not history_array:
            print(f"⚠️ {folder}: cannot read {history_name}")
            continue

        results[folder] = get_used_images(history_array)

    total_unused = 0
    total_missing = 0

    for folder, used in sorted(results.items()):
        public_images = available.get(folder, set())

        unused = sorted(public_images - used)
        missing = sorted(used - public_images)

        if not unused and not missing:
            print(f"✓ {folder}: OK ({len(used)} images)")
            continue

        print(f"\n📁 {folder}/img")

        if unused:
            total_unused += len(unused)
            print(f"  UNUSED ({len(unused)}):")
            print("  " + ", ".join(f"{n:03}.jpg" for n in unused))

        if missing:
            total_missing += len(missing)
            print(f"  MISSING ({len(missing)}):")
            print("  " + ", ".join(f"{n:03}.jpg" for n in missing))

    # Folders not registered in data.tsx
    registered = {
        re.search(
            r'\bfolder\s*:\s*["\']([^"\']+)["\']',
            record
        ).group(1)
        for record in records
        if re.search(r'\bfolder\s*:\s*["\']([^"\']+)["\']', record)
    }

    unregistered = sorted(set(available) - registered)

    if unregistered:
        print("\n⚠️ FOLDERS NOT REGISTERED IN data.tsx:")
        for folder in unregistered:
            print(f"  - {folder}")

    if skipped:
        print("\nℹ️ FOLDERS WITHOUT HISTORY (skipped):")
        for folder in sorted(skipped):
            print(f"  - {folder}")

    print("\n========== SUMMARY ==========")
    print(f"Checked folders: {len(results)}")
    print(f"Unused images:   {total_unused}")
    print(f"Missing images:  {total_missing}")

    if total_unused == 0 and total_missing == 0:
        print("\n✓ All checked images are correct!")


if __name__ == "__main__":
    main()
