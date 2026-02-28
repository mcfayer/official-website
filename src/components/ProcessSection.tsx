import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Discovery", description: "We analyze your needs, goals, and current infrastructure to define the project scope." },
  { num: "02", title: "Strategy", description: "Our architects design a tailored solution with clear milestones and deliverables." },
  { num: "03", title: "Build", description: "Agile development with regular demos, code reviews, and quality assurance." },
  { num: "04", title: "Launch & Support", description: "Smooth deployment followed by ongoing monitoring, optimization, and support." },
];

const ProcessSection = () => (
  <section id="process" className="py-24 md:py-32 relative">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-sm font-medium text-primary">How We Work</span>
        <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3">
          Our <span className="text-gradient">Process</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative bg-gradient-card rounded-xl p-7 border border-border shadow-card"
          >
            <span className="font-heading text-5xl font-bold text-primary/10">{step.num}</span>
            <h3 className="font-heading text-lg font-semibold mt-3 mb-2">{step.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
