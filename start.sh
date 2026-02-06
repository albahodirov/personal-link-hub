#!/bin/bash

# Define local node path
LOCAL_NODE_DIR="$(pwd)/node-v20.11.0-darwin-arm64/bin"

# Add to PATH
export PATH="$LOCAL_NODE_DIR:$PATH"

# Create local cache dir if not exists
mkdir -p .npm-cache

echo "Using local Node.js: $(node -v)"

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ] || [ ! -f "node_modules/.bin/next" ]; then
    echo "📦 Installing dependencies (using local cache)..."
    # We use --cache to point to local folder
    # We use --no-audit to speed up and avoid registry calls
    npm install --cache "$(pwd)/.npm-cache" --no-audit
fi

# Start the app
echo "🚀 Starting Personal Link Hub..."
./node_modules/.bin/next dev
