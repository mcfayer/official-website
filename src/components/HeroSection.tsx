import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SphereBackground from "./ui/spherebackground";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      id="hero-section"
      style={{marginTop:"35px"}}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(210 100% 55%) 1px, transparent 1px), linear-gradient(90deg, hsl(210 100% 55%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-accent/10 blur-[100px]" />

      <div className="relative max-w-7xl mx-auto pt-6 w-full grid lg:grid-cols-2 items-center gap-12">
        
        {/* LEFT SIDE - TEXT CONTENT */}
        <div className="text-left">
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-sm font-medium text-primary border border-primary/20 rounded-full px-4 py-1.5 mb-8">
              Enterprise IT Solutions
            </span>
          </motion.div> */}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6 tracking-tight"
          >
            We Build the
            <br />
            <span className="text-primary">Digital Future</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10"
          >
            From cloud infrastructure to custom software development, we deliver
            scalable IT solutions that drive business growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={scrollToContact}
              className="bg-gradient-primary text-primary-foreground font-medium px-8 py-3.5 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-base"
            >
              Start Your Project <ArrowRight size={18} />
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border border-border text-foreground font-medium px-8 py-3.5 rounded-lg hover:bg-secondary transition-colors text-base"
            >
              Our Services
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl"
          >
            {[
              { value: "200+", label: "Projects Delivered" },
              { value: "50+", label: "Enterprise Clients" },
              { value: "99.9%", label: "Uptime SLA" },
              { value: "24/7", label: "Support" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-heading text-3xl font-bold text-gradient">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT SIDE - 3D SPHERE */}
        <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full">
          <SphereBackground />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;