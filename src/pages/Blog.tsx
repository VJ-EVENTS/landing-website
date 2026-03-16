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
  {
    slug: "complete-guide-destination-wedding-corbett",
    title: "How to Plan a Destination Wedding in Corbett",
    excerpt:
      "A complete step-by-step guide — how to pick a resort, plan functions, manage guests, and keep it within budget.",
    image: corbettImg,
    date: "March 10, 2026",
  },
  {
    slug: "best-wedding-resorts-jim-corbett",
    title: "Best Wedding Resorts in Jim Corbett",
    excerpt:
      "A list of the best resorts in Jim Corbett for weddings — with room prices, capacity, and what makes them special.",
    image: corbettImg,
    date: "March 5, 2026",
  },
  {
    slug: "cost-destination-wedding-corbett",
    title: "How Much Does a Corbett Wedding Cost?",
    excerpt:
      "A simple breakdown of destination wedding costs in Jim Corbett — food, decor, venue, DJ, and how to save money.",
    image: decorImg,
    date: "February 28, 2026",
  },
  {
    slug: "top-wedding-decor-trends-resort-weddings",
    title: "Wedding Decor Ideas for Resort Weddings",
    excerpt:
      "Latest decor trends that work great for outdoor and resort weddings in 2026.",
    image: lightingImg,
    date: "February 20, 2026",
  },
  {
    slug: "things-guests-can-do-corbett-wedding",
    title: "What Can Guests Do at a Corbett Wedding?",
    excerpt:
      "Fun activities for your wedding guests — jungle safari, river walks, bonfire nights, and more.",
    image: safariImg,
    date: "February 15, 2026",
  },
  {
    slug: "top-10-wedding-planner-corbett",
    title: "Top Wedding Planners in Jim Corbett",
    excerpt:
      "A list of the best wedding planners in Jim Corbett if you're looking to plan a destination wedding here.",
    image: cocktailImg,
    date: "February 10, 2026",
  },
  {
    slug: "corbett-national-park-history",
    title: "About Jim Corbett National Park",
    excerpt:
      "The history of Jim Corbett National Park — India's first national park and now a popular wedding destination.",
    image: safariImg,
    date: "February 5, 2026",
  },
  {
    slug: "top-hotels-ramnagar",
    title: "Best Hotels in Ramnagar for Wedding Guests",
    excerpt:
      "Where should your wedding guests stay in Ramnagar? Here are the best hotels near Jim Corbett.",
    image: corbettImg,
    date: "January 30, 2026",
  },
];

const Blog = () => {
  return (
    <Layout>
      <SEOHead
        title="Wedding Blog"
        description="Tips, guides, and ideas for your destination wedding in Jim Corbett. Read about costs, best resorts, decor trends, and guest activities."
        keywords="destination wedding tips corbett, jim corbett wedding guide, wedding cost corbett blog, best resort for wedding corbett"
      />

      <section className="relative py-24 lg:py-32 bg-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">
              Insights & Tips
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
              Wedding Blog
            </h1>
            <p className="text-primary-foreground/70 text-lg">
              Helpful tips, guides, and ideas for planning your wedding in Jim
              Corbett.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card rounded-lg border border-border overflow-hidden group hover:shadow-xl transition-shadow"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="p-6">
                  <p className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </p>
                  <h2 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-gold transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <span className="text-gold text-sm font-semibold flex items-center gap-1">
                    Read More <ArrowRight className="h-4 w-4" />
                  </span>
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
