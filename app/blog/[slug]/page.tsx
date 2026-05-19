import { notFound } from "next/navigation";
import { Bug, Calendar, User, ArrowLeft, BookOpen } from "lucide-react";
import Link from "next/link";
import { blogPosts } from "@/lib/data";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | BlueAnts`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | BlueAnts`,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Bug className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl text-foreground">BlueAnts</span>
          </Link>
          <Link
            href="/#blog"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Volver al blog</span>
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-gray dark:prose-invert max-w-none">
          <div className="mb-8">
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-secondary">
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString("es-MX", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1">
                <User className="h-4 w-4" />
                {post.author}
              </span>
            </div>
            <h1 className="text-4xl font-bold text-foreground leading-tight mb-4">
              {post.title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {post.excerpt}
            </p>
          </div>

          <div className="aspect-video bg-secondary rounded-2xl flex items-center justify-center mb-10">
            <BookOpen className="h-24 w-24 text-primary/30" />
          </div>

          <div className="text-foreground leading-relaxed space-y-4 max-w-none [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-3 [&_p]:text-base [&_p]:leading-7">
            {post.content.split("\n\n").map((paragraph, i) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={i} className="text-2xl font-bold mt-8 mb-4">
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              if (paragraph.startsWith("### ")) {
                return (
                  <h3 key={i} className="text-xl font-semibold mt-6 mb-3">
                    {paragraph.replace("### ", "")}
                  </h3>
                );
              }
              return (
                <p key={i} className="text-base leading-7">
                  {paragraph}
                </p>
              );
            })}
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <Link
              href="/#blog"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver al blog
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
}
