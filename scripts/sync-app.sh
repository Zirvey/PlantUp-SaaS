#!/usr/bin/env bash
# Rebuild the embedded product demo from the PlantUp source repo.
set -euo pipefail

SRC="${PLANTUP_SRC:-$HOME/Project/biomark-web}"
DEST="$(cd "$(dirname "$0")/.." && pwd)"

if [[ ! -d "$SRC" ]]; then
  echo "Source not found: $SRC"
  echo "Set PLANTUP_SRC to your PlantUp checkout."
  exit 1
fi

echo "Building frontend in $SRC (relative base for /app/ demo) …"
(cd "$SRC" && npx vite build --base ./)

echo "Syncing dist → $DEST/app …"
rm -rf "$DEST/app"
cp -R "$SRC/dist" "$DEST/app"

echo "Done. Preview: python3 -m http.server 8080 (from $DEST)"
