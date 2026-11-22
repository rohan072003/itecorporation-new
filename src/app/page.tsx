import { LandingPage } from "@/components/LandingPage";
import { PRODUCTS_LIST } from "@/data/itecData";

export default function Home() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.itec-exports.com";

  const productListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "ITEC Industrial Electrical Equipment & Power Electronics Portfolio",
    description: "15 key industrial equipment product lines engineered and exported from Pune, India.",
    itemListElement: PRODUCTS_LIST.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.name,
        category: product.category,
        description: product.shortDesc,
        image: `${siteUrl}${product.image}`,
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productListJsonLd) }}
      />
      <LandingPage />
    </>
  );
}
