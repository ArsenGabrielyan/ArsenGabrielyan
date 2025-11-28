#!/bin/bash

CHANGED_FILES=$(git diff --name-only HEAD~1 HEAD)

if [ -z "$CHANGED_FILES" ]; then
  exit 0
fi

ONLY_README_CHANGED=true
for file in $CHANGED_FILES; do
  if [[ "$file" != "README.md" ]]; then
    ONLY_README_CHANGED=false
    break
  fi
done

if [ "$ONLY_README_CHANGED" = true ]; then
  echo "🟡 Skipping build because only README.md changed."
  exit 1
fi

if [ "$VERCEL_ENV" == "production" ]; then
  echo "🛑 Skipping build because VERCEL_ENV=production."
  exit 1
fi

exit 0