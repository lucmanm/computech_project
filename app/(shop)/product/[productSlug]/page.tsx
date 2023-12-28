import { getProductType } from "@/lib/actions/getProduct";
import { Suspense } from "react";
import Loading from "./_components/loading";
import { TProduct } from "@/types/type";
import ProductCard from "../../_components/ProductCard";
import NoResults from "../../_components/no-result";

export const revalidate = 0;

const ProductTypePage = async ({params}: {params: { productSlug: string };
}) => {
  // decode params to return to originalstring
  const decodedUrl = decodeURIComponent(params.productSlug).replace(/\\s+/g, '')
  const productBySlug: TProduct[] = await getProductType(decodedUrl);
  return (
    <>
      {productBySlug.length === 0 ? (
        <NoResults />
      ) : (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-4">
          {productBySlug.map((data, index) => (
            <Suspense key={index} fallback={<Loading />}>
              <ProductCard productData={data} />
            </Suspense>
          ))}
        </div>
      )}
    </>
  );
};

export default ProductTypePage;
