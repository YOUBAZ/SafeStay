#!/bin/bash

# SafeStay - Start Development Environment
# This script starts the web application

echo "🚀 Starting SafeStay Development Environment..."
echo ""

# Check if Node.js is available
if ! command -v node &> /dev/null; then
    echo "❌ Error: Node.js is not found in PATH"
    echo ""
    echo "Please add Node.js to your PATH:"
    echo "export PATH=\$PATH:\"/c/Program Files/nodejs\""
    echo ""
    echo "Or run: source ~/.bashrc (if you've already added it)"
    exit 1
fi

# Check if npm is available
if ! command -v npm &> /dev/null; then
    echo "❌ Error: npm is not found in PATH"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

# Check if node_modules exists in web app
if [ ! -d "apps/web/node_modules" ]; then
    echo "📦 Installing dependencies for the first time..."
    echo "This may take a few minutes..."
    echo ""
    
    cd apps/web
    npm install
    
    if [ $? -ne 0 ]; then
        echo "❌ Failed to install dependencies"
        exit 1
    fi
    
    cd ../..
    echo ""
    echo "✅ Dependencies installed successfully!"
    echo ""
fi

# Start the web application
echo "🌐 Starting web application..."
echo "The app will be available at: http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop the server"
echo "----------------------------------------"
echo ""

cd apps/web
npm run dev
