#!/bin/bash

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${GREEN}🚀 Setting up Personal Link Hub...${NC}"

# 1. Check/Install Node.js
if ! command -v node &> /dev/null; then
    echo "📦 Node.js not found. Attempting to install via Homebrew..."
    
    # Try to fix permissions if needed (will ask for password if run interactively, or fail)
    if [ ! -w "/opt/homebrew/Cellar" ]; then
        echo -e "${RED}⚠️  Homebrew directory permissions need fixing.${NC}"
        echo "Attempting to take ownership (you may be asked for your password)..."
        sudo chown -R $(whoami) /opt/homebrew/Cellar /opt/homebrew/var/homebrew
    fi

    if command -v brew &> /dev/null; then
        brew install node
    else
        echo -e "${RED}❌ Homebrew not found. Please install Node.js manually: https://nodejs.org/${NC}"
        exit 1
    fi
fi

# Check if node install was successful
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Failed to detect Node.js. Please install it manually.${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Node.js is ready: $(node -v)${NC}"

# 2. Check for Profile Image
if [ ! -f "public/profile.png" ]; then
    echo "⚠️  Profile image not found in public/. Checking artifact..."
    # Attempt to copy again if missing
    cp "/Users/albahodirov/.gemini/antigravity/brain/97101edb-7455-413d-9b60-1583ff9fd640/profile_avatar_1770149296746.png" "public/profile.png"
fi

# 3. Install Dependencies
echo "📦 Installing dependencies..."
# We use 'npm install' with the packages specificed to ensure they are added to package.json if missing, 
# but since package.json exists, just 'npm install' is usually better.
# However, to be safe and ensure everything is fresh:
npm install

# 4. Start Server
echo -e "${GREEN}🚀 Starting Development Server at http://localhost:3000${NC}"
npm run dev
