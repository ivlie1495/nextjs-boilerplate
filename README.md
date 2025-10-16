# My SaaS Apps

A modern full-stack SaaS application built with Next.js, Prisma ORM, PostgreSQL, and shadcn/ui.

## Tech Stack

- **Framework**: Next.js 15.5 (App Router with Turbopack) + TypeScript 5
- **Database**: PostgreSQL with Prisma ORM v6.17
- **UI Components**: shadcn/ui (Radix UI) + Tailwind CSS v4
- **Form Handling**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Package Manager**: Bun 1.3+

## Current Setup

This project is configured with:

- ✅ shadcn/ui components (Avatar, Checkbox, Dialog, Dropdown, Label, Select, Separator, Slot, Tabs, Tooltip)
- ✅ Prisma ORM with PostgreSQL database
- ✅ Complete database schema with User, Profile, and Post models
- ✅ Database seeding setup with test data
- ✅ Tailwind CSS v4 with PostCSS
- ✅ TypeScript for type safety
- ✅ ESLint for code quality
- ✅ Form validation with React Hook Form + Zod

## Prerequisites

- Node.js 18+ or Bun 1.3+
- PostgreSQL database (local or cloud)
- Bun package manager (recommended) or npm/pnpm

## Getting Started

### 1. Install Dependencies

```bash
bun install
```

### 2. Environment Setup

Create a `.env` file in the root directory:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/database_name?schema=public"
```

Replace with your PostgreSQL credentials. For cloud databases, use the connection string provided by your hosting service.

### 3. Initialize Database

Generate the Prisma Client and push the schema:

```bash
# Generate Prisma Client
bun db:generate

# Push schema to database (creates tables)
bun db:push

# Seed database with test data
bun db:seed
```

**Alternative**: Use migrations for production:

```bash
bun db:migrate  # Create and apply migration
```

### 4. Run Development Server

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## Project Structure

```
my-saas-apps/
├── app/
│   ├── layout.tsx                 # Root layout with Tailwind
│   ├── page.tsx                   # Home page
│   └── globals.css                # Global styles + Tailwind
├── components/
│   └── ui/                        # shadcn/ui components
├── lib/
│   ├── prisma.ts                  # Prisma client singleton
│   └── utils.ts                   # Utility functions (cn, etc.)
├── prisma/
│   ├── schema.prisma              # Database schema (User, Profile, Post)
│   └── seed.ts                    # Database seeding script
├── .env                           # Environment variables (DATABASE_URL)
├── tailwind.config.ts             # Tailwind CSS configuration
├── components.json                # shadcn/ui configuration
└── package.json                   # Project dependencies & scripts
```

## Database Schema

The Prisma schema includes the following models with UUID primary keys:

### User Model
```prisma
model User {
  id        String   @id @default(uuid()) @db.Uuid
  email     String   @unique
  name      String?
  password  String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  posts     Post[]
  profile   Profile?
}
```

### Profile Model
```prisma
model Profile {
  id        String   @id @default(uuid()) @db.Uuid
  bio       String?
  avatar    String?
  userId    String   @unique @db.Uuid
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

### Post Model
```prisma
model Post {
  id        String   @id @default(uuid()) @db.Uuid
  title     String
  content   String?
  published Boolean  @default(false)
  authorId  String   @db.Uuid
  author    User     @relation(fields: [authorId], references: [id], onDelete: Cascade)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## UI Components

This project uses **shadcn/ui** components built on Radix UI primitives:

- **Avatar**: User profile pictures and initials
- **Checkbox**: Form checkboxes with custom styling
- **Dialog**: Modal dialogs and pop-ups
- **Dropdown Menu**: Context menus and dropdown lists
- **Label**: Form labels with accessibility
- **Select**: Custom select dropdowns
- **Separator**: Visual dividers
- **Tabs**: Tabbed interfaces
- **Tooltip**: Contextual help tooltips

All components are fully customizable with Tailwind CSS.

## Useful Commands

### Development

```bash
bun dev              # Start development server with Turbopack
bun build            # Build for production with Turbopack
bun start            # Start production server
bun lint             # Run ESLint
bun format           # Format code with Prettier
```

### Database Commands

```bash
bun db:generate      # Generate Prisma Client
bun db:push          # Push schema to database (no migrations)
bun db:migrate       # Create and run migrations
bun db:studio        # Open Prisma Studio (visual editor)
bun db:seed          # Seed database with test data
```

### Adding shadcn/ui Components

```bash
bunx shadcn@latest add button      # Add Button component
bunx shadcn@latest add card        # Add Card component
bunx shadcn@latest add input       # Add Input component
bunx shadcn@latest add form        # Add Form component
# See all components: https://ui.shadcn.com/docs/components
```

### Manual Prisma Commands

```bash
bunx prisma studio           # Open Prisma Studio
bunx prisma generate         # Generate Prisma Client
bunx prisma migrate dev      # Create and apply migrations
bunx prisma migrate reset    # Reset database (development only)
bunx prisma db push          # Push schema changes without migrations
bunx prisma validate         # Validate schema file
```

## Database Connection

Configure your database in the `.env` file:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/database_name?schema=public"
```

**Cloud Database Examples:**

```bash
# Supabase
DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres"

# Railway
DATABASE_URL="postgresql://postgres:[PASSWORD]@[HOST]:5432/railway"

# Neon
DATABASE_URL="postgresql://[USER]:[PASSWORD]@[HOST]/[DATABASE]?sslmode=require"
```

## Troubleshooting

### Database Connection Issues

**Error: Authentication failed**
- Verify your `DATABASE_URL` credentials in `.env`
- Ensure PostgreSQL is running: `pg_isready` (local) or check cloud dashboard
- Test connection: `bunx prisma validate`

**Error: Database does not exist**
- Create the database first: `createdb database_name`
- Or use `bun db:push` which creates tables automatically

### Prisma Client Not Found

```bash
bun db:generate  # Generate Prisma Client
```

### Migration Conflicts

If you see migration drift errors in development:

```bash
bun db:push           # Push schema without migrations (dev only)
# OR
bunx prisma migrate reset  # Reset and reapply migrations (dev only)
bun db:migrate
```

### TypeScript Errors

```bash
bun build            # Build and check for errors
```

### Turbopack Issues

If you encounter issues with Turbopack:

```bash
bun dev              # Try without --turbopack flag manually
# Or edit package.json scripts to remove --turbopack
```

## Next Steps

Consider adding:

- **Authentication**: NextAuth.js or Clerk for user authentication
- **API Routes**: RESTful or tRPC endpoints in `app/api/`
- **More Models**: Extend `prisma/schema.prisma` with additional models
- **Forms**: Create forms with React Hook Form + Zod validation
- **Email**: Email sending with Resend or SendGrid
- **File Uploads**: Image uploads with UploadThing or Cloudinary
- **Payments**: Stripe integration for subscriptions
- **Testing**: Jest + React Testing Library
- **CI/CD**: GitHub Actions for automated testing and deployment

## Learn More

### Core Technologies
- [Next.js Documentation](https://nextjs.org/docs) - React framework
- [Prisma Documentation](https://www.prisma.io/docs) - Database ORM
- [PostgreSQL Documentation](https://www.postgresql.org/docs/) - Database
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - Type safety

### UI & Styling
- [shadcn/ui Documentation](https://ui.shadcn.com/) - UI components
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Styling
- [Radix UI Documentation](https://www.radix-ui.com/) - UI primitives
- [Lucide Icons](https://lucide.dev/) - Icon library

### Tools
- [Bun Documentation](https://bun.sh/docs) - JavaScript runtime & package manager
- [React Hook Form](https://react-hook-form.com/) - Form handling
- [Zod Documentation](https://zod.dev/) - Schema validation

## Adding shadcn/ui Components

You can add any shadcn/ui component to your project:

```bash
bunx shadcn@latest add [component-name]
```

Browse all available components at [ui.shadcn.com](https://ui.shadcn.com/docs/components)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new):

1. Push your code to GitHub
2. Import your repository to Vercel
3. Add environment variables (DATABASE_URL)
4. Deploy

### Recommended Database Hosting

- **[Supabase](https://supabase.com/)** - Free PostgreSQL with generous limits
- **[Neon](https://neon.tech/)** - Serverless PostgreSQL with branching
- **[Railway](https://railway.app/)** - Simple PostgreSQL deployment
- **[Vercel Postgres](https://vercel.com/storage/postgres)** - Integrated with Vercel

### Deployment Checklist

- [ ] Set `DATABASE_URL` in Vercel environment variables
- [ ] Run `bun db:push` or `bun db:migrate` to set up production database
- [ ] Test the deployment with `vercel --prod`
- [ ] Set up custom domain (optional)
- [ ] Enable automatic deployments from main branch

## License

MIT
