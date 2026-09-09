from pathlib import Path
from PIL import Image, ImageOps

PUBLIC_DIR = Path("public")

COVER_MAX_SIZE = 2400
THUMB_MAX_SIZE = 600

COVER_QUALITY = 92
THUMB_QUALITY = 85


for folder in PUBLIC_DIR.iterdir():
    if not folder.is_dir():
        continue

    cover = folder / "cover.jpg"
    thumbnail = folder / "thumbnail.jpg"

    if not cover.exists():
        print(f"[SKIP] Brak cover.jpg: {folder}")
        continue

    try:
       

        with Image.open(cover) as img:
            img = ImageOps.exif_transpose(img)

            original_size = img.size

            img.thumbnail(
                (COVER_MAX_SIZE, COVER_MAX_SIZE),
                Image.Resampling.LANCZOS
            )

            if img.mode != "RGB":
                img = img.convert("RGB")

            img.save(
                cover,
                "JPEG",
                quality=COVER_QUALITY,
                optimize=True,
                progressive=True,
            )

            print(
                f"[COVER] {folder.name}: "
                f"{original_size} -> {img.size}"
            )


        with Image.open(cover) as img:
            img.thumbnail(
                (THUMB_MAX_SIZE, THUMB_MAX_SIZE),
                Image.Resampling.LANCZOS
            )

            if img.mode != "RGB":
                img = img.convert("RGB")

            img.save(
                thumbnail,
                "JPEG",
                quality=THUMB_QUALITY,
                optimize=True,
                progressive=True,
            )

            print(
                f"[THUMB] {folder.name}: "
                f"-> {img.size}"
            )

    except Exception as e:
        print(f"[ERROR] {folder}: {e}")


print("\nGotowe!")