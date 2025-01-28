import prisma from "@/lib/prisma";


// const prisma = new PrismaClient();

const categories = [
  {
    name: 'Furniture',
    description: 'Crafted with a wide range of woods',
  },
  {
    name: 'Art',
    description: 'Handmade art pieces',
  },
  {
    name: 'Lighting',
    description: 'Live your life with ambient lighting',
  },
  {
    name: 'Kitchen and Dining',
    description: 'Cook and dine with style',
  },
  {
    name: 'Accessories',
    description: 'Complete your look with our accessories',
  },
  {
    name: 'Gifts',
    description: 'Surprise your loved ones with our gifts',
  },
];

const products = [
  {
    name: 'Wooden Chair',
    description: 'Comfortable wooden chair',
    price: 49.99,
    categoryName: 'Furniture',
  },
  {
    name: 'Abstract Painting',
    description: 'Beautiful abstract painting',
    price: 199.99,
    categoryName: 'Art',
  },
  {
    name: 'Table Lamp',
    description: 'Stylish table lamp',
    price: 29.99,
    categoryName: 'Lighting',
  },
  {
    name: 'Dinner Set',
    description: 'Elegant dinner set',
    price: 99.99,
    categoryName: 'Kitchen and Dining',
  },
  {
    name: 'Leather Wallet',
    description: 'Premium leather wallet',
    price: 39.99,
    categoryName: 'Accessories',
  },
  {
    name: 'Gift Box',
    description: 'Beautifully wrapped gift box',
    price: 19.99,
    categoryName: 'Gifts',
  },
];

async function main() {
  // Create categories
  for (const category of categories) {
    await prisma.category.create({
      data: category,
    });
  }

  // Create products
  for (const product of products) {
    const category = await prisma.category.findUnique({
      where: { name: product.categoryName },
    });

    if (category) {
      await prisma.product.create({
        data: {
          name: product.name,
          description: product.description,
          price: product.price,
          stock: 100, // Default stock value
          imageUrl: 'default-image-url', // Default image URL
          categoryId: category.id,
        },
      });
    }
  }

  console.log('Database has been seeded.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });