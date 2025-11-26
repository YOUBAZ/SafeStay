# Step-by-Step Guide: Running SafeStay Application

## Prerequisites Check

Before you start, ensure Node.js and npm are installed in your Git Bash terminal.

### Test if Node.js is available in Git Bash:
```bash
node --version
npm --version
```

If these commands don't work, you need to add Node.js to your Git Bash PATH.

---

## Option A: If Node.js is NOT in Git Bash PATH

You need to add Node.js to your PATH. Here's how:

1. **Find your Node.js installation path**
   - Usually: `C:\Program Files\nodejs\` or `C:\Program Files (x86)\nodejs\`

2. **Add to Git Bash PATH temporarily**
   ```bash
   export PATH=$PATH:"/c/Program Files/nodejs"
   ```

3. **Verify it works**
   ```bash
   node --version
   npm --version
   ```

4. **Make it permanent** (optional)
   - Add the export command to `~/.bashrc`:
   ```bash
   echo 'export PATH=$PATH:"/c/Program Files/nodejs"' >> ~/.bashrc
   source ~/.bashrc
   ```

---

## Step-by-Step: Running the Application

### Step 1: Open Git Bash Terminal
- Right-click in your project folder
- Select "Git Bash Here"
- Or open Git Bash and navigate to: `cd /e/SafeStay/SafeStay\ MVP`

### Step 2: Install Dependencies (First Time Only)

```bash
# Navigate to the root directory
cd /e/SafeStay/SafeStay\ MVP

# Install root dependencies
npm install

# Install web app dependencies
cd apps/web
npm install

# Go back to root
cd ../..
```

### Step 3: Set Up Environment Variables (First Time Only)

```bash
# Copy the example environment file
cp .env.example .env

# Edit the .env file with your preferred text editor
# For example, using nano:
nano .env
```

### Step 4: Start the Databases (Using Docker)

```bash
# From the root directory
cd /e/SafeStay/SafeStay\ MVP

# Start Docker containers
docker-compose up -d

# Verify containers are running
docker-compose ps
```

### Step 5: Start the Web Application

```bash
# Navigate to the web app directory
cd /e/SafeStay/SafeStay\ MVP/apps/web

# Start the development server
npm run dev
```

The web app should now be running at: **http://localhost:3000**

### Step 6: Start the API Server (Optional - In a New Terminal)

If you need the backend API running:

```bash
# Open a new Git Bash terminal
# Navigate to the API directory
cd /e/SafeStay/SafeStay\ MVP/apps/api

# Start the API development server
npm run dev
```

The API should be running at: **http://localhost:4000**

---

## Common Issues and Solutions

### Issue 1: "npm: command not found"
**Solution:** Node.js is not in your PATH. Follow "Option A" above.

### Issue 2: "Module not found" errors
**Solution:** Dependencies not installed. Run:
```bash
cd /e/SafeStay/SafeStay\ MVP/apps/web
npm install
```

### Issue 3: "Port already in use"
**Solution:** Another process is using port 3000. Either:
- Kill the process using that port, or
- Use a different port:
```bash
PORT=3001 npm run dev
```

### Issue 4: Docker containers won't start
**Solution:**
```bash
# Stop all containers
docker-compose down

# Remove volumes and restart
docker-compose down -v
docker-compose up -d
```

---

## Quick Start Commands (After First Setup)

Once everything is set up, you only need:

```bash
# Terminal 1: Start databases
cd /e/SafeStay/SafeStay\ MVP
docker-compose up -d

# Terminal 2: Start web app
cd /e/SafeStay/SafeStay\ MVP/apps/web
npm run dev

# Terminal 3 (optional): Start API
cd /e/SafeStay/SafeStay\ MVP/apps/api
npm run dev
```

---

## Stopping the Application

```bash
# Stop the web app: Press Ctrl+C in the terminal running npm run dev

# Stop Docker containers:
cd /e/SafeStay/SafeStay\ MVP
docker-compose down
```

---

## Git Setup Complete! ✅

Your Git repository is now initialized. To create your first commit:

```bash
cd /e/SafeStay/SafeStay\ MVP

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: SafeStay MVP project setup"

# Optional: Add remote repository
git remote add origin <your-github-repo-url>
git branch -M main
git push -u origin main
```
