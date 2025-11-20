import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const candidates = await prisma.candidate.findMany();
    console.log('Candidates found:', candidates);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
