import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import decorImg from "@/assets/decor-setup.jpg";
import corbettImg from "@/assets/corbett-venue.jpg";
import cocktailImg from "@/assets/cocktail-bar.jpg";
import lightingImg from "@/assets/lighting-design.jpg";
import safariImg from "@/assets/jungle-safari.jpg";

const posts = [
  { slug: "complete-guide-destination-wedding-corbett", title: "Complete Guide to Destination Wedding in Corbett", excerpt: "Everything you need to know about planning a destination wedding in Jim Corbett National Park—from venue selection to guest activities.", image: corbettImg, date: "March 10, 2026" },
  { slug: "best-wedding-resorts-jim-corbett", title: "Best Wedding Resorts in Jim Corbett", excerpt: "Discover the top luxury resorts in Jim Corbett that are perfect for hosting your dream destination wedding.", image: corbettImg, date: "March 5, 2026" },
  { slug: "cost-destination-wedding-corbett", title: "Cost of Destination Wedding in Corbett", excerpt: "A detailed breakdown of destination wedding costs in Jim Corbett—budgets, packages, and money-saving tips.", image: decorImg, date: "February 28, 2026" },
  { slug: "top-wedding-decor-trends-resort-weddings", title: "Top Wedding Decor Trends for Resort Weddings", excerpt: "The latest wedding decoration trends perfect for resort and outdoor weddings in 2026.", image: lightingImg, date: "February 20, 2026" },
  { slug: "things-guests-can-do-corbett-wedding", title: "Things Guests Can Do During a Corbett Wedding", excerpt: "Fun activities and experiences your wedding guests can enjoy during a destination wedding in Jim Corbett.", image: safariImg, date: "February 15, 2026" },
  { slug: "top-10-wedding-planner-corbett", title: "Top 10 Wedding Planners in Corbett", excerpt: "A curated list of the best wedding planners in Jim Corbett for your destination wedding.", image: cocktailImg, date: "February 10, 2026" },
  { slug: "corbett-national-park-history", title: "Corbett National Park History", excerpt: "The fascinating history of Jim Corbett National Park—India's first national park and a wedding destination.", image: safariImg, date: "February 5, 2026" },
  { slug: "top-hotels-ramnagar", title: "Top Hotels in Ramnagar", excerpt: "The best hotels and resorts in Ramnagar near Jim Corbett for wedding guests and family stays.", image: corbettImg, date: "January 30, 2026" },
];

const Blog = () => {
  return (
    <Layout>
      <SEOHead
        title="Wedding Blog"
        description="Read our blog for destination wedding tips, Jim Corbett wedding guides, decor trends, venue recommendations, and expert advice from VJ Events."
        keywords="wedding blog corbett, destination wedding tips, jim corbett wedding guide"
      />

      <section className="relative py-24 lg:py-32 bg-primary">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">Insights & Tips</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">Wedding Blog</h1>
            <p className="text-primary-foreground/70 text-lg">Expert tips, guides, and inspiration for your destination wedding in Jim Corbett.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <motion.article key={post.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-card rounded-lg border border-border overflow-hidden group hover:shadow-xl transition-shadow">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="p-6">
                  <p className="flex items-center gap-2 text-xs text-muted-foreground mb-3"><Calendar className="h-3 w-3" />{post.date}</p>
                  <h2 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-gold transition-colors">{post.title}</h2>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                  <span className="text-gold text-sm font-semibold flex items-center gap-1">Read More <ArrowRight className="h-4 w-4" /></span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
