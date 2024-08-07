import Link from "next/link";
import ProductDetails from "../_lib/data";
export interface PD {
  id: number;
  productName: string;
}
export default function Product() {
  const data: PD[] = ProductDetails;
  return (
    <div className="bg-blue-300">
      <ol>
        {data.map((product) => (
          <li key={product.id}>
            <Link
              className="flex justify-center  text-black font-semibold py-2 mb-2 hover:bg-slate-500 "
              href={`/products/${product.id}`}
            >
              {" "}
              <p>Products: {product.productName}</p>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
