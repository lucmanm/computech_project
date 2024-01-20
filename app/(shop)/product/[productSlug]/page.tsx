import { getProductType } from "@/lib/actions/getProduct";
import { TProduct } from "@/types/type";
import ProductCard from "../../_components/ProductCard";
import NoResults from "../../_components/no-result";

export const revalidate = 0;

const ProductTypePage = async ({
  params,
  searchParams,
}: {
  params: { productSlug: string };
  searchParams: string;
}) => {

  // decode params to return to originalstring
  const decodedUrl = decodeURIComponent(params.productSlug).replace(/\\s+/g,"");

  // fetch product slug with params of brand product category
  const productBySlug: TProduct[] = await getProductType({
    brand: searchParams,
    productSlug: decodedUrl,
  });

  return (
    <>
      {productBySlug.length === 0 ? (
        <NoResults />
      ) : (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-4">
          {productBySlug.map((data, index) => (
            <ProductCard key={index} productData={data} />
          ))}
        </div>
      )}
    </>
  );
};

export default ProductTypePage;
