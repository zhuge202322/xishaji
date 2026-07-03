import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductPage } from "@/components/ProductPage";
import { products } from "@/data/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return {};
  }

  return {
    title: `${product.title} | VICMACH`,
    description: product.intro,
    openGraph: {
      title: `${product.title} | VICMACH`,
      description: product.intro,
      images: [product.heroImage]
    }
  };
}

export default async function SolutionPage({ params }: PageProps) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return <ProductPage product={product} />;
}
