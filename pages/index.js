import ProductGrid from "@/components/product-grid";
import getPageData from "@/lib/get-page-data";
import getAllProducts from "@/lib/get-all-products";
import Hero from "@/components/hero";

function IndexPage({ products }) {
  return (
    <>
      <Hero />
      <ProductGrid products={products} />
    </>
  );
}

export async function getStaticProps({ locale }) {
  const pageData = await getPageData({ locale });
  const { products } = await getAllProducts({ locale });

  return {
    props: { ...pageData, products },
  };
}

export default IndexPage;
