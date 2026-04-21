import ResourceDetail from "../../../components/single/ResourceDetail";
import { ResourcesData } from "../../data";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return ResourcesData.map((data) => ({
    slug: data.slug,
  }));
}

export default function ResourcePage({ params }) {
  const { slug } = params;
  const data = ResourcesData.find((item) => item.slug === slug);

  if (!data) {
    notFound();
  }

  return <ResourceDetail data={data} />;
}
