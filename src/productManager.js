const ProductManager = require('./src/productManager');
const path = require('path');
const productManager = new ProductManager('./data/products.json');
async function exampleUsage() {
  const product1 = await productManager.addProduct({
    title: 'Plant 1',
    description: 'Beautiful indoor plant',
    price: 29.99,
    thumbnail: path.join(__dirname, 'images', 'img1.webp'),
    code: 'PLT001',
    stock: 10,
  });

  const product2 = await productManager.addProduct({
    title: 'Plant 2',
    description: 'Exotic outdoor plant',
    price: 39.99,
    thumbnail: path.join(__dirname, 'images', 'img2.webp'),
    code: 'PLT002',
    stock: 15,
  });

  const product3 = await productManager.addProduct({
    title: 'Plant 3',
    description: 'Succulent plant',
    price: 19.99,
    thumbnail: path.join(__dirname, 'images', 'img3.webp'),
    code: 'PLT003',
    stock: 20,
  });

  const product4 = await productManager.addProduct({
    title: 'Plant 4',
    description: 'Colorful flowers',
    price: 49.99,
    thumbnail: path.join(__dirname, 'images', 'img4.jpg'),
    code: 'PLT004',
    stock: 12,
  });

  console.log('Added Products:', product1, product2, product3, product4);
  const allProducts = await productManager.getProducts();
  console.log('All Products:', allProducts);
  const productId = 1; 
  const productById = await productManager.getProductById(productId);
  console.log('Product by ID:', productById);
  const updatedProduct = await productManager.updateProduct(productId, {
    title: 'Updated Plant 1',
    price: 39.99,
  });
  console.log('Updated Product:', updatedProduct);

}

exampleUsage();
