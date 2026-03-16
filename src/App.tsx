import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Analytics } from "@vercel/analytics/react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import DestinationWeddings from "./pages/DestinationWeddings";
import Gallery from "./pages/Gallery";
import Venues from "./pages/Venues";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import ThingsToDo from "./pages/ThingsToDo";
import Packages from "./pages/Packages";
import EventDetail from "./pages/EventDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route
              path="/destination-weddings"
              element={<DestinationWeddings />}
            />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/venues" element={<Venues />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/things-to-do" element={<ThingsToDo />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/events/:slug" element={<EventDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Analytics />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
