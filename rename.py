import os
import sys

# Pobranie podfolderu z argumentu
if len(sys.argv) < 2:
    print("Użycie: python rename.py folder/subfolder")
    sys.exit(1)

subfolder = sys.argv[1]
folder_path = os.path.join("public", subfolder)

suffix_to_remove = "-removebg-preview"

if not os.path.isdir(folder_path):
    print(f"Błąd: Folder '{folder_path}' nie istnieje!")
    sys.exit(1)

counter = 0

for filename in os.listdir(folder_path):
    name, ext = os.path.splitext(filename)

    if name.endswith(suffix_to_remove):
        new_name = name[:-len(suffix_to_remove)] + ext

        old_file = os.path.join(folder_path, filename)
        new_file = os.path.join(folder_path, new_name)

        if os.path.exists(new_file):
            print(f"Pominięto (plik już istnieje): {new_name}")
            continue

        os.rename(old_file, new_file)
        print(f"Zmieniono: {filename} -> {new_name}")
        counter += 1

print(f"\nOperacja zakończona. Zmieniono nazwę {counter} plików.")