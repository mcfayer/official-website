import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const reasons = [
  "Certified engineers across AWS, Azure & GCP",
  "Agile delivery with transparent communication",
  "Proven track record with Fortune 500 clients",
  "End-to-end project ownership & accountability",
  "Security-first approach in every solution",
  "Scalable architectures built for growth",
];

const AboutSection = () => (
  <section id="about" className="py-24 md:py-32 relative">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-medium text-primary">Why McFayer</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 mb-6">
            Technology That
            <br />
            <span className="text-gradient">Delivers Results</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            With over a decade of experience, McFayer has helped businesses of all sizes
            transform their IT operations. We combine deep technical expertise with a
            relentless focus on business outcomes.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((reason) => (
              <div key={reason} className="flex items-start gap-3">
                <CheckCircle className="text-accent mt-0.5 shrink-0" size={18} />
                <span className="text-sm text-secondary-foreground">{reason}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-gradient-card rounded-2xl border border-border p-10 shadow-card">
            <div className="grid grid-cols-2 gap-8">
              {[
                { value: "10+", label: "Years of Experience" },
                { value: "150+", label: "Team Members" },
                { value: "98%", label: "Client Retention" },
                { value: "35+", label: "Countries Served" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-heading text-4xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -z-10 inset-0 bg-primary/5 blur-[60px] rounded-full" />
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
