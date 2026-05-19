import { Calendar, User, ArrowRight, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { blogPosts } from "@/lib/data";

export function BlogSection() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <BookOpen className="h-4 w-4" />
            <span>Blog y Guías</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Aprende sobre el Mundo de las Hormigas
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Guías, tutoriales y artículos sobre cuidado de hormigas, mantenimiento de hormigueros
            y todo lo que necesitas saber para ser un experto mirmecólogo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="block">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow group h-full">
                <div className="aspect-video bg-secondary flex items-center justify-center relative overflow-hidden">
                  <BookOpen className="h-12 w-12 text-primary/30 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3 flex-wrap">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString("es-MX", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {post.author}
                    </span>
                    <span className="text-sm text-primary font-medium inline-flex items-center gap-1 group-hover:underline">
                      Leer más <ArrowRight className="h-3 w-3 ml-1" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
