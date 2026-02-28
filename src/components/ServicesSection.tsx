import { motion } from "framer-motion";
import { Cloud, Code, Shield, Database, Monitor, Headphones } from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Migration, optimization, and management of cloud infrastructure on AWS, Azure, and GCP.",
  },
  {
    icon: Code,
    title: "Custom Development",
    description: "Full-stack web and mobile applications built with modern frameworks and best practices.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security audits, threat monitoring, and compliance management.",
  },
  {
    icon: Database,
    title: "Data & Analytics",
    description: "Business intelligence, data warehousing, and real-time analytics pipelines.",
  },
  {
    icon: Monitor,
    title: "IT Consulting",
    description: "Strategic technology roadmaps aligned with your business goals and growth plans.",
  },
  {
    icon: Headphones,
    title: "Managed Services",
    description: "24/7 infrastructure monitoring, maintenance, and technical support.",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-24 md:py-32 relative">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-sm font-medium text-primary">What We Do</span>
        <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3">
          Our <span className="text-gradient">Services</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-gradient-card rounded-xl p-7 border border-border hover:border-primary/30 transition-colors group shadow-card"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:shadow-glow transition-shadow">
              <service.icon className="text-primary" size={22} />
            </div>
            <h3 className="font-heading text-lg font-semibold mb-2">{service.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
