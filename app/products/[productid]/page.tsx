import ProductDetails from "@/app/_lib/data"


export default function ProductID({params}:{params:{productid:string}}){
    const productid = parseInt(params.productid,10)

    const product = ProductDetails.find((p)=> p.id === productid)
    
    
    if (!product) {
        return <div className="justify-center size-full flex pt-40 bg-slate-300 min-h-screen text-4xl">Product not found</div>;
      }
    
      return (
        <div className="bg-slate-300 min-h-screen">
         
          <div className="justify-center size-full grid grid-row-3 gap-4 pt-40">
          <h1 className="font-bold text-4xl">Product Details</h1>

            
          <p className="text-rose-800 text-2xl font-semibold">ID: {product.id}</p>
          <p className="text-rose-800 text-2xl font-semibold">Name: {product.productName}</p>
          <p className="text-rose-800 text-2xl font-semibold">Name: {product.productDetails}</p>
          
          </div>
          
        </div>
      );
}