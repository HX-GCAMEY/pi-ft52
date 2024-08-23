import Image from "next/image";
import {fetchProductById} from "@/lib/server/fetchProducts";
import AddToCart from "@/components/AddToCart";

async function ProductDetail({params}: {params: {productId: string}}) {
  const product = await fetchProductById(params.productId);
  return (
    <div>
      <h1>{product?.name}</h1>
      <Image src={product.image} alt={product?.name} width={300} height={300} />
      <p>{product?.description}</p>
      <p>$ {product?.price}</p>
      <AddToCart id={product.id} />
    </div>
  );
}

export default ProductDetail;
