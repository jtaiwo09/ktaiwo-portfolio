import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import CaseStudyDetail from "@/components/sections/CaseStudyDetail";

interface Params {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return { title: "Case study not found" };

  const title = `${project.name} Case Study · ${project.industry}`;
  const url = `/work/${project.slug}`;

  return {
    title,
    description: project.tagline,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: project.tagline,
      url,
      type: "article",
      ...(project.image ? { images: [{ url: project.image }] } : {}),
    },
  };
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return <CaseStudyDetail project={project} />;
}
