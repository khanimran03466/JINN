import ResourceDetail from "../../../components/single/ResourceDetail";
import { ResourcesData } from "../../data";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return ResourcesData.map((data) => ({
    slug: data.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = ResourcesData.find((item) => item.slug === slug);
  
  if (!data) {
    return {
      title: "Resource Not Found",
    };
  }

  return {
    title: data.title,
    description: data.description || `Read about ${data.title} on DJINN.`,
  };
}

export default async function ResourcePage({ params }) {
  const { slug } = await params;
  const data = ResourcesData.find((item) => item.slug === slug);

  if (!data) {
    notFound();
  }

  return <ResourceDetail data={data} />;
}
