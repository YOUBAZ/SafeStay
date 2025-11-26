# Contributing to SafeStay

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Docker and Docker Compose
- Git

### Initial Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd SafeStay\ MVP
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install
   
   # Install web app dependencies
   cd apps/web
   npm install
   
   # Install API dependencies
   cd ../api
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start the development environment**
   ```bash
   # Start databases with Docker
   docker-compose up -d
   
   # Run the web app
   cd apps/web
   npm run dev
   
   # In another terminal, run the API
   cd apps/api
   npm run dev
   ```

## Project Structure

```
SafeStay MVP/
├── apps/
│   ├── web/          # Next.js frontend application
│   ├── api/          # Express.js backend API
│   └── admin/        # Admin dashboard
├── packages/
│   ├── database/     # Database schemas and migrations
│   └── shared/       # Shared utilities and types
├── docker/           # Docker configuration files
└── docs/            # Project documentation
```

## Development Workflow

1. Create a new branch for your feature
2. Make your changes
3. Test your changes locally
4. Commit with descriptive messages
5. Push and create a pull request

## Code Style

- Follow TypeScript best practices
- Use ESLint and Prettier for code formatting
- Write meaningful commit messages

## Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage
```
