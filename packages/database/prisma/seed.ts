import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Seeding database...');

    // Create universities
    const universities = await Promise.all([
        prisma.university.create({
            data: {
                name: 'Cairo University',
                nameAr: 'جامعة القاهرة',
                governorate: 'Giza',
                city: 'Giza',
                latitude: 30.0254,
                longitude: 31.2097,
                website: 'https://cu.edu.eg',
            },
        }),
        prisma.university.create({
            data: {
                name: 'Ain Shams University',
                nameAr: 'جامعة عين شمس',
                governorate: 'Cairo',
                city: 'Abbassia',
                latitude: 30.0737,
                longitude: 31.2810,
                website: 'https://www.asu.edu.eg',
            },
        }),
        prisma.university.create({
            data: {
                name: 'Alexandria University',
                nameAr: 'جامعة الإسكندرية',
                governorate: 'Alexandria',
                city: 'Alexandria',
                latitude: 31.2089,
                longitude: 29.9187,
                website: 'https://alexu.edu.eg',
            },
        }),
    ]);

    console.log(`✅ Created ${universities.length} universities`);

    // Create admin user
    const adminUser = await prisma.user.create({
        data: {
            email: 'admin@safestay.com',
            phone: '+201000000000',
            passwordHash: '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewY5RZWaT9nY9mqW', // password: admin123
            role: 'admin',
            firstName: 'Admin',
            lastName: 'SafeStay',
            isEmailVerified: true,
            isPhoneVerified: true,
        },
    });

    console.log('✅ Created admin user');
    console.log('   Email: admin@safestay.com');
    console.log('   Password: admin123');

    console.log('\\n🎉 Seeding completed successfully!');
    console.log('\\n📝 Next steps:');
    console.log('   1. Start the development server: npm run dev');
    console.log('   2. Access the app at http://localhost:3000');
    console.log('   3. Login with admin credentials above');
}

main()
    .catch((e) => {
        console.error('❌ Error seeding database:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
