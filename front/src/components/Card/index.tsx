import Image from "next/image";
import {IProductCardProps} from "@/interfaces/Interfaces";
import Link from "next/link";

function ProductCard({product}: IProductCardProps) {
  return (
    <Link
      className="flex flex-col items-center text-center bg-white border border-gray-200 rounded-lg shadow-md md:flex-row  md:max-w-xl hover:bg-gray-100 "
      href={`/detail/${product.id}`}
    >
      <div className="relative object-contain w-24 h-24 rounded-t-lg md:h-48 md:w-48 md:rounded-none md:rounded-s-lg">
        <Image
          src={product.image}
          alt={product.name}
          fill={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={true}
        />
      </div>
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {product.name}
        </h2>
        <p className="mb-3 font-normal text-gray-700">$ {product.price}</p>
      </div>
    </Link>
  );
}

export default ProductCard;
