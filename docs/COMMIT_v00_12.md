# Commit for GitHub

## Commit name
v00.12 — rebuild PLA Standard cards from original PLASKO data

## Commit description
PLASKO SPB shop v00.12 test 260709

Changes:
- Rebuilt PLA Standard catalog cards using the saved original PLASKO page from 260709.zip.
- Transferred product name, color, description, diameter, weight, tolerance, retail price and wholesale price 1:1 from the original page.
- Matched product photos to the uploaded PLA_ST image files.
- Added the “Золотистый” card using color visualization because the saved original page does not contain a separate image file for it.
- Kept the original PLASKO logo with SPB suffix.
- Kept the homepage minimal: it starts directly with the catalog.
- Built as a self-contained static index.html to avoid missing external CSS/JS during GitHub upload.
- No command line actions required; upload the contents of the version folder through the GitHub web interface.
