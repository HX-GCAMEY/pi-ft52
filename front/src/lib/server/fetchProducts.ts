import {IProduct} from "@/interfaces/Interfaces";

export async function fetchProducts() {
  try {
    const response = await fetch("https://pi-ft52.onrender.com/products", {
      next: {revalidate: 1800},
    });
    const products = await response.json();
    return products;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchProductById(id: string): Promise<IProduct> {
  const response = await fetch(`https://pi-ft52.onrender.com/products/${id}`);
  const product = await response.json();
  return product;
}
