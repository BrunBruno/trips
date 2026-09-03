from pathlib import Path
from PIL import Image, ImageOps
import sys

if len(sys.argv) != 2:
    print("Usage: python thumbnails.py <folder>")
    sys.exit(1)

folder_name = sys.argv[1]

full_folder = Path(__file__).parent / "public" / folder_name / "full"

thumbnail_folder = Path(__file__).parent / "public" / folder_name / "thumbnail"
thumbnail_folder.mkdir(parents=True, exist_ok=True)

extensions = {".jpg", ".jpeg", ".png", ".webp"}

files = sorted(
    file
    for file in full_folder.iterdir()
    if file.is_file() and file.suffix.lower() in extensions
)

for file in files:
    output = thumbnail_folder / file.name

    with Image.open(file) as image:
        image = ImageOps.exif_transpose(image)

        image.thumbnail((800, 800), Image.Resampling.LANCZOS)

        if image.mode in ("RGBA", "LA", "P"):
            background = Image.new("RGB", image.size, "white")
            if image.mode == "P":
                image = image.convert("RGBA")
            background.paste(image, mask=image.getchannel("A"))
            image = background
        else:
            image = image.convert("RGB")

        image.save(
            output,
            "JPEG",
            quality=75,
            optimize=True,
        )

        print(f"{file.name} -> {output}")

print(f"\nCreated {len(files)} thumbnails.")