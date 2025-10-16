import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Start seeding...')

  // Create a test user
  const user = await prisma.user.upsert({
    where: { email: 'test@example.com' },
    update: {},
    create: {
      email: 'test@example.com',
      name: 'Test User',
      password: 'hashedpassword123', // In production, use proper password hashing
      profile: {
        create: {
          bio: 'This is a test user profile',
          avatar: 'https://github.com/shadcn.png',
        },
      },
      posts: {
        create: [
          {
            title: 'First Post',
            content: 'This is my first post using Prisma with UUID!',
            published: true,
          },
          {
            title: 'Draft Post',
            content: 'This is a draft post',
            published: false,
          },
        ],
      },
    },
  })

  console.log('✅ Created user:', user)
  console.log('🌱 Seeding finished.')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error('❌ Seeding failed:', e)
    await prisma.$disconnect()
    process.exit(1)
  })
