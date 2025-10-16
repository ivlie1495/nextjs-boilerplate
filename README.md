# My SaaS Apps

A modern full-stack web application built with Next.js, Prisma ORM, PostgreSQL, and Material UI.

## Tech Stack

- **Framework**: Next.js 15 (App Router) with TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **UI Library**: Material UI (MUI) v7
- **Styling**: Emotion (CSS-in-JS)
- **Package Manager**: npm

## Current Setup

This project is configured with:

- ✅ Material UI theme with custom styling
- ✅ Prisma ORM with PostgreSQL
- ✅ Database schema with Note model
- ✅ Professional app layout with AppBar and responsive Container
- ✅ TypeScript for type safety
- ✅ ESLint for code quality

## Prerequisites

- Node.js 18+ installed
- PostgreSQL database running
- npm package manager

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Database Setup

Your `.env` file is already configured with:

```env
DATABASE_URL="postgresql://myapp:myapp-password@localhost:5432/myapp?schema=public"
```

Make sure your PostgreSQL database is running and accessible with these credentials.

### 3. Initialize Database

Generate the Prisma Client and run migrations:

```bash
# Generate Prisma Client
npx prisma generate

# Run database migrations
npx prisma migrate dev --name init
```

**Note**: If you encounter migration conflicts and this is a development database, you can reset it:

```bash
npx prisma migrate reset
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## Project Structure

```
my-saas-apps/
├── app/
│   ├── layout.tsx                 # Root layout with MUI theme & AppBar
│   ├── page.tsx                   # Home page
│   ├── theme.ts                   # Material UI theme configuration
│   └── globals.css                # Global styles
├── lib/
│   └── prisma.ts                  # Prisma client singleton
├── prisma/
│   └── schema.prisma              # Database schema
├── .env                           # Environment variables (DATABASE_URL)
├── .env.example                   # Example environment variables
└── package.json                   # Project dependencies
```

## Database Schema

The Prisma schema includes a `Note` model:

```prisma
model Note {
  id        String   @id @default(uuid())
  title     String
  content   String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## Material UI Theme

Custom theme features:

- **Primary Color**: Blue (#1976d2)
- **Secondary Color**: Purple (#9c27b0)
- **Border Radius**: 12px (rounded corners)
- **Typography**: Custom font weights and sizes
- **Components**: Styled Cards with hover effects, Buttons with no text transform

## Useful Commands

### Development

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
```

### Prisma Commands

```bash
npx prisma studio           # Open Prisma Studio (visual database editor)
npx prisma generate         # Generate Prisma Client
npx prisma migrate dev      # Create and apply migrations
npx prisma migrate reset    # Reset database (development only)
npx prisma db push          # Push schema changes without migrations
```

## Database Connection

Your database connection is configured in `.env`:

```env
DATABASE_URL="postgresql://myapp:myapp-password@localhost:5432/myapp?schema=public"
```

To connect to a different database, update this URL with your credentials.

## Troubleshooting

### Database Connection Issues

- Ensure PostgreSQL is running: `pg_isready`
- Verify credentials in `.env` match your database
- Check if the database exists: `psql -l`

### Prisma Client Not Found

```bash
npx prisma generate
```

### Migration Conflicts

If you see migration drift errors:

```bash
npx prisma migrate reset    # Development only!
npx prisma migrate dev
```

### TypeScript Errors

```bash
npm run build --verbose
```

## Next Steps

Consider adding:

- API routes in `app/api/` for CRUD operations
- Additional pages for your application
- Authentication (NextAuth.js)
- More database models in `prisma/schema.prisma`
- Environment variable validation (Zod)

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Material UI Documentation](https://mui.com/material-ui/getting-started/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new):

1. Push your code to GitHub
2. Import your repository to Vercel
3. Add environment variables (DATABASE_URL)
4. Deploy

For database hosting, consider:

- [Supabase](https://supabase.com/) - Free PostgreSQL
- [Railway](https://railway.app/) - Easy PostgreSQL setup
- [Neon](https://neon.tech/) - Serverless PostgreSQL

## License

MIT
