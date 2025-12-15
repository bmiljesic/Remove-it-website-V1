import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, User, Phone } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/animations";

const featuredPosts = [
  {
    title: "The Complete Guide to Commercial Junk Removal",
    excerpt: "Everything you need to know about planning and executing a successful commercial cleanout project.",
    category: "Guides",
    date: "Dec 10, 2024",
    readTime: "8 min read",
    slug: "complete-guide-commercial-junk-removal",
  },
  {
    title: "5 Signs Your Office Needs a Cleanout",
    excerpt: "Is clutter affecting your workplace productivity? Here are the telltale signs it's time for a professional cleanout.",
    category: "Tips",
    date: "Dec 5, 2024",
    readTime: "5 min read",
    slug: "signs-office-needs-cleanout",
  },
  {
    title: "Sustainable Junk Disposal: What Happens to Your Items",
    excerpt: "Learn about our eco-friendly disposal practices and how we minimize landfill waste.",
    category: "Sustainability",
    date: "Nov 28, 2024",
    readTime: "6 min read",
    slug: "sustainable-junk-disposal",
  },
];

const recentPosts = [
  {
    title: "Construction Site Cleanup Best Practices",
    category: "Construction",
    date: "Nov 20, 2024",
    slug: "construction-site-cleanup-best-practices",
  },
  {
    title: "How to Prepare for an Office Move",
    category: "Moving",
    date: "Nov 15, 2024",
    slug: "prepare-office-move",
  },
  {
    title: "Warehouse Cleanout Checklist",
    category: "Warehouses",
    date: "Nov 10, 2024",
    slug: "warehouse-cleanout-checklist",
  },
  {
    title: "Property Manager's Guide to Tenant Turnovers",
    category: "Property Management",
    date: "Nov 5, 2024",
    slug: "tenant-turnover-guide",
  },
  {
    title: "Recycling vs. Disposal: Making the Right Choice",
    category: "Sustainability",
    date: "Oct 30, 2024",
    slug: "recycling-vs-disposal",
  },
  {
    title: "Commercial Equipment Removal: What to Expect",
    category: "Equipment",
    date: "Oct 25, 2024",
    slug: "commercial-equipment-removal",
  },
];

const categories = [
  { name: "Guides", count: 12 },
  { name: "Tips", count: 18 },
  { name: "Sustainability", count: 8 },
  { name: "Construction", count: 6 },
  { name: "Property Management", count: 10 },
  { name: "Industry News", count: 5 },
];

export default function Blog() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-hero">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollReveal>
              <div className="max-w-3xl">
                <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                  Resources & Insights
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Commercial Removal Blog
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Expert tips, guides, and insights to help you manage your commercial 
                  space more efficiently. Stay informed with the latest in junk removal.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-foreground mb-8">Featured Articles</h2>
            </ScrollReveal>
            
            <StaggerContainer 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              staggerDelay={0.1}
            >
              {featuredPosts.map((post) => (
                <StaggerItem key={post.slug}>
                  <article className="group h-full rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                    <div className="aspect-video bg-muted relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20" />
                      <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-accent text-primary-foreground text-xs font-semibold">
                        {post.category}
                      </span>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {post.excerpt}
                      </p>
                      <span className="inline-flex items-center text-accent font-semibold group-hover:gap-2 transition-all">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </span>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Recent Posts & Sidebar */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Recent Posts */}
              <div className="lg:col-span-2">
                <ScrollReveal>
                  <h2 className="text-2xl font-bold text-foreground mb-8">Recent Articles</h2>
                </ScrollReveal>
                <StaggerContainer className="space-y-6" staggerDelay={0.08}>
                  {recentPosts.map((post) => (
                    <StaggerItem key={post.slug}>
                      <article className="group flex gap-6 p-6 rounded-xl bg-card border border-border hover:border-accent/50 transition-all duration-300">
                        <div className="w-24 h-24 rounded-lg bg-muted flex-shrink-0 overflow-hidden">
                          <div className="w-full h-full bg-gradient-to-br from-accent/20 to-primary/20" />
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                            {post.category}
                          </span>
                          <h3 className="text-lg font-bold text-foreground mt-1 mb-2 group-hover:text-accent transition-colors">
                            {post.title}
                          </h3>
                          <span className="text-sm text-muted-foreground">{post.date}</span>
                        </div>
                      </article>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>

              {/* Sidebar */}
              <div>
                <ScrollReveal delay={0.2}>
                  <div className="sticky top-28 space-y-8">
                    {/* Categories */}
                    <div className="p-6 rounded-2xl bg-card border border-border">
                      <h3 className="text-lg font-bold text-foreground mb-4">Categories</h3>
                      <ul className="space-y-3">
                        {categories.map((category) => (
                          <li key={category.name}>
                            <a
                              href="#"
                              className="flex items-center justify-between text-muted-foreground hover:text-foreground transition-colors"
                            >
                              <span>{category.name}</span>
                              <span className="text-sm bg-muted px-2 py-0.5 rounded">
                                {category.count}
                              </span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <div className="p-6 rounded-2xl bg-primary text-primary-foreground">
                      <h3 className="text-lg font-bold mb-2">Need Junk Removed?</h3>
                      <p className="text-sm text-primary-foreground/70 mb-4">
                        Get a free, no-obligation quote for your commercial removal project.
                      </p>
                      <Button variant="cta" size="sm" className="w-full" asChild>
                        <Link to="/contact">Get Free Quote</Link>
                      </Button>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Stay Updated
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest tips, guides, and industry insights 
                delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 h-12 px-4 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <Button variant="cta" size="lg">
                  Subscribe
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
