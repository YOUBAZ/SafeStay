# SafeStay Platform - Complete Setup Guide

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

### Required Software

1. **Node.js** (v20 or higher)
   - Download from: https://nodejs.org/
   - Verify installation: `node --version`

2. **npm** (v10 or higher) - comes with Node.js
   - Verify installation: `npm --version`

3. **Docker Desktop**
   - Download from: https://www.docker.com/products/docker-desktop
   - Required for running PostgreSQL, MongoDB, and Redis

4. **Git**
   - Download from: https://git-scm.com/
   - For version control

### Recommended Tools

- **VS Code** with extensions:
  - ESLint
  - Prettier
  - Prisma
  - Tailwind CSS IntelliSense
- **Postman** or **Insomnia** for API testing
- **pgAdmin** (comes with Docker setup) for database management

---

## 🚀 Step-by-Step Setup

### Step 1: Install Dependencies

Navigate to the project root and install all dependencies:

```bash
cd "E:\SafeStay\SafeStay MVP"
npm install
```

This will install dependencies for all workspaces (apps and packages).

### Step 2: Set Up Environment Variables

Copy the example environment file:

```bash
copy .env.example .env
```

Edit `.env` and update the following critical values:

```env
# Change these in production!
JWT_ACCESS_SECRET=your-super-secret-access-token-key-change-in-production
JWT_REFRESH_SECRET=your-super-secret-refresh-token-key-change-in-production
COOKIE_SECRET=your-super-secret-cookie-key-change-in-production
ENCRYPTION_KEY=your-32-character-encryption-key-change-in-production

# Payment gateways (get from providers)
PAYMOB_API_KEY=your-paymob-api-key
PAYMOB_SECRET_KEY=your-paymob-secret-key
```

For development, the default database credentials are fine.

### Step 3: Start Docker Services

Start PostgreSQL, MongoDB, and Redis:

```bash
npm run docker:up
```

Wait for all services to be healthy. You can check status:

```bash
docker ps
```

You should see:
- `safestay-postgres` (Port 5432)
- `safestay-mongodb` (Port 27017)
- `safestay-redis` (Port 6379)
- `safestay-pgadmin` (Port 5050)
- `safestay-mongo-express` (Port 8081)

### Step 4: Run Database Migrations

Generate Prisma client and run migrations:

```bash
cd packages/database
npm run generate
npm run migrate
```

This will:
1. Generate the Prisma Client
2. Create all database tables in PostgreSQL

### Step 5: Seed the Database (Optional)

To populate the database with sample data:

```bash
cd packages/database
npm run seed
```

This will create:
- Sample universities
- Demo properties
- Test users (students, owners, admin)

### Step 6: Start Development Servers

From the project root:

```bash
# Start all apps
npm run dev

# OR start individually:
npm run dev:web       # Student web app (port 3000)
npm run dev:owner     # Owner portal (port 3001)
npm run dev:admin     # Admin panel (port 3002)
npm run dev:api       # Backend API (port 4000)
```

---

## 🌐 Access Points

Once everything is running, you can access:

### Applications
- **Student Web App**: http://localhost:3000
- **Owner Portal**: http://localhost:3001 (to be created)
- **Admin Panel**: http://localhost:3002 (to be created)
- **API Server**: http://localhost:4000
- **API Health Check**: http://localhost:4000/health

### Database Management
- **pgAdmin** (PostgreSQL): http://localhost:5050
  - Email: admin@safestay.local
  - Password: admin
- **Mongo Express** (MongoDB): http://localhost:8081
  - Username: admin
  - Password: admin

---

## 📂 Project Structure

```
E:\SafeStay\SafeStay MVP\
├── apps/
│   ├── web/                    # ✅ Student web app (Next.js)
│   │   ├── src/
│   │   │   ├── app/           # App router pages
│   │   │   ├── components/    # React components
│   │   │   └── lib/           # Utilities
│   │   ├── package.json
│   │   └── next.config.js
│   │
│   ├── owner-portal/          # 🔄 Property owner portal (Next.js)
│   ├── admin-panel/           # 🔄 Admin dashboard (Next.js)
│   │
│   └── api/                   # ✅ Backend API (Express + TypeScript)
│       ├── src/
│       │   ├── controllers/   # Route handlers
│       │   ├── middleware/    # Express middleware
│       │   ├── routes/        # API routes
│       │   ├── services/      # Business logic
│       │   ├── utils/         # Utilities
│       │   └── index.ts       # Entry point
│       └── package.json
│
├── packages/
│   ├── database/              # ✅ Prisma schema & migrations
│   │   ├── prisma/
│   │   │   ├── schema.prisma  # Database schema
│   │   │   ├── migrations/    # Migration files
│   │   │   └── seed.ts        # Seed script
│   │   └── package.json
│   │
│   ├── ui/                    # 🔄 Shared UI components
│   ├── types/                 # 🔄 Shared TypeScript types
│   ├── utils/                 # 🔄 Shared utilities
│   └── config/                # 🔄 Shared configurations
│
├── docker/
│   ├── postgres/              # PostgreSQL initialization
│   └── mongodb/               # MongoDB initialization
│
├── docs/                      # 📚 Documentation
│
├── docker-compose.yml         # ✅ Docker services config
├── package.json               # ✅ Root package.json
├── .env.example               # ✅ Environment variables template
└── README.md                  # ✅ Project README
```

Legend:
- ✅ = Complete
- 🔄 = To be implemented
- 📚 = Documentation

---

## 🔧 Development Workflow

### Making Database Changes

1. Update `packages/database/prisma/schema.prisma`
2. Create migration:
   ```bash
   cd packages/database
   npm run migrate
   ```
3. Migration will be applied automatically

### Adding New API Routes

1. Create route file in `apps/api/src/routes/`
2. Import and use in `apps/api/src/index.ts`
3. Test with Postman/Insomnia

### Creating New Components

1. Add components in `apps/web/src/components/`
2. Follow naming convention: `ComponentName.tsx`
3. Export from index files for easier imports

---

## 🧪 Testing

### Run Tests

```bash
# Run all tests
npm run test

# Run tests for specific app
cd apps/api
npm test
```

### Manual API Testing

Use the following test endpoints:

```bash
# Health check
curl http://localhost:4000/health

# Test property search (will return empty initially)
curl http://localhost:4000/api/properties

# Test authentication (placeholder)
curl -X POST http://localhost:4000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password"}'
```

---

## 📝 Next Steps

### Phase 3: Core Infrastructure (Next)

1. **Authentication System**
   - JWT token generation
   - Password hashing
   - Session management
   - Role-based access control

2. **Database Operations**
   - CRUD operations for all models
   - Search and filtering logic
   - Pagination
   - Data validation

3. **File Upload**
   - S3 or Cloudinary integration
   - Image optimization
   - Secure file handling

### Phase 4: MVP Features

1. **Student Side**
   - User registration
   - Property search with filters
   - Property details page
   - Booking flow
   - Payment integration

2. **Owner Side**
   - Owner registration
   - Property listing management
   - Booking approvals
   - Payment tracking

3. **Admin Side**
   - Verification dashboard
   - User management
   - Dispute resolution
   - Analytics

---

## 🐛 Troubleshooting

### Docker Issues

**Problem**: Docker containers won't start
```bash
# Check Docker status
docker ps -a

# View logs
docker logs safestay-postgres
docker logs safestay-mongodb

# Restart containers
npm run docker:down
npm run docker:up
```

**Problem**: Port already in use
```bash
# Find process using port 5432 (PostgreSQL)
netstat -ano | findstr :5432

# Kill the process (replace PID)
taskkill /PID <PID> /F
```

### Prisma Issues

**Problem**: Prisma client out of sync
```bash
cd packages/database
npm run generate
```

**Problem**: Migration failed
```bash
# Reset database (WARNING: Deletes all data)
npm run migrate:reset
```

### Node Modules Issues

**Problem**: Dependency conflicts
```bash
# Clean install
rm -rf node_modules
rm package-lock.json
npm install
```

---

## 🔒 Security Checklist

Before deploying to production:

- [ ] Change all default passwords in `.env`
- [ ] Generate strong JWT secrets
- [ ] Enable HTTPS/TLS
- [ ] Set up proper CORS origins
- [ ] Configure rate limiting
- [ ] Enable database backups
- [ ] Set up error monitoring (Sentry)
- [ ] Configure environment-specific settings
- [ ] Review and update security headers
- [ ] Enable database encryption at rest

---

## 📚 Additional Resources

- [Prisma Documentation](https://www.prisma.io/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Express.js Documentation](https://expressjs.com/)
- [Docker Documentation](https://docs.docker.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

---

## 🤝 Getting Help

If you encounter issues:

1. Check the troubleshooting section above
2. Review the error logs
3. Consult the documentation
4. Search for the error message online

---

## ⚠️ Important Notes

### Development vs Production

**Current setup is for DEVELOPMENT ONLY!**

Production deployment requires:
- Proper environment variables
- SSL certificates
- Production-grade database hosting
- CDN for static assets
- Load balancing
- Monitoring and logging
- Backup strategy
- CI/CD pipeline

### Database Passwords

The default database passwords are:
- PostgreSQL: `safestay_dev_password`
- MongoDB: `safestay_dev_password`
- Redis: `safestay_dev_password`

**These MUST be changed for production!**

---

**Setup Complete! 🎉**

You're now ready to start developing the SafeStay platform!
