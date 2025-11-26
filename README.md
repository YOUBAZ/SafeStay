<<<<<<< HEAD
# SafeStay
=======
# SafeStay Platform

SafeStay is a two-sided marketplace platform connecting Egyptian students with verified, safe housing near universities.

## 🏗️ Project Structure

```
safestay/
├── apps/
│   ├── web/                 # Student-facing Next.js app
│   ├── owner-portal/        # Property owner Next.js app
│   ├── admin-panel/         # Admin dashboard
│   └── api/                 # Express.js backend API
├── packages/
│   ├── ui/                  # Shared React components
│   ├── database/            # Prisma + Mongoose schemas
│   ├── types/               # Shared TypeScript types
│   ├── utils/               # Shared utilities
│   └── config/              # Shared configurations
├── docker/                  # Docker configurations
└── docs/                    # Documentation
```

## 🚀 Quick Start

### Prerequisites

- Node.js >= 20.0.0
- npm >= 10.0.0
- Docker & Docker Compose
- PostgreSQL 15+
- MongoDB 7+
- Redis 7+

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd safestay
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Start Docker services (PostgreSQL, MongoDB, Redis)
```bash
npm run docker:up
```

5. Run database migrations
```bash
npm run db:migrate
```

6. Seed the database (optional)
```bash
npm run db:seed
```

7. Start development servers
```bash
npm run dev
```

## 📦 Available Scripts

- `npm run dev` - Start all development servers
- `npm run dev:web` - Start student web app only
- `npm run dev:owner` - Start owner portal only
- `npm run dev:admin` - Start admin panel only
- `npm run dev:api` - Start API server only
- `npm run build` - Build all apps
- `npm run test` - Run tests
- `npm run lint` - Lint code
- `npm run docker:up` - Start Docker services
- `npm run docker:down` - Stop Docker services
- `npm run db:migrate` - Run database migrations
- `npm run db:seed` - Seed database

## 🌐 Applications

- **Student Web App**: http://localhost:3000
- **Owner Portal**: http://localhost:3001
- **Admin Panel**: http://localhost:3002
- **API Server**: http://localhost:4000

## 🛠️ Technology Stack

### Frontend
- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Zustand (State Management)
- React Query (Server State)

### Backend
- Node.js 20
- Express.js
- TypeScript
- Prisma (PostgreSQL ORM)
- Mongoose (MongoDB ODM)
- Socket.io (Real-time)

### Databases
- PostgreSQL 15 (Primary)
- MongoDB 7 (Chat, Logs)
- Redis 7 (Cache, Sessions)

### DevOps
- Docker & Docker Compose
- GitHub Actions (CI/CD)
- ESLint & Prettier

## 📚 Documentation

- [Implementation Plan](./docs/implementation-plan.md)
- [Database Schema](./docs/database-schema.md)
- [API Documentation](./docs/api-docs.md)
- [Wireframes](./docs/wireframes.md)

## 🤝 Contributing

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📄 License

This project is proprietary and confidential.

## 👥 Team

SafeStay Development Team

---

**Built with ❤️ for Egyptian Students**
>>>>>>> 8a4a6d2 (feat: Initial project setup including web application, API, database, Docker configurations, and comprehensive documentation.)
