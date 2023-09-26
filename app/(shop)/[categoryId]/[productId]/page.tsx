import { getProductById } from "@/lib/actions/getProduct";
import Info from "../../components/info";
import Gallery from "@/components/gallery";
import { Product } from "@/types/table-types";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: {
    productId: string;
    categoryId: string;
  };
}

export async function generateMetadata({params: { productId ,categoryId }}: ProductPageProps) {
  const product: Promise<Product> = await  getProductById(productId, categoryId);
  const productData = await product

  return {
    title: productData.model.toUpperCase(),
    description: productData.description
  }
}

const ProductPage: React.FC<ProductPageProps> = async ({
  params: { productId, categoryId },
}) => {
  const product = await getProductById(productId, categoryId);

  if (!product) notFound();

  return (
    <div>
      <div className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col md:grid md:grid-cols-3">
          <Gallery images={product.images} />
          <div className="col-span-2 mt-10 sm:mt-16 md:mt-0 md:px-4">
            <Info data={product} />
          </div>
        </div>
        <hr className="my-10" />
        Product List Ralated Featuered
        {/* <ProductList title="Related Items" items={suggestedProducts} /> */}
      </div>
    </div>
  );
};

export default ProductPage;

// export async function generateStaticParams({params: { productId ,categoryId }}: ProductPageProps) {
//   const product: Promise<Product[]> =   getProductById(productId, categoryId);
//   const productData = await product

//     return productData.map(product => ({
//     categoryId: product.categoryId.toString()
//   }));
// }


// export async function generateStaticParams({params}: { params:{ productId: string; categoryId: string}}) {
//   const {categoryId, productId} =  params
//   const product: Promise<Product[]> = await  getProductById(productId, categoryId);
//   const productData = await product
  
//   if(!productData || productData === null) notFound()

//   return productData.map(product => ({
//     productId: product.id,
//     categoryId: product.categoryId
//   }));
// }