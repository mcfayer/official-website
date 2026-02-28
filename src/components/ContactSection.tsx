import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    if (!name.trim()) return alert("Name is required");
    if (!email.trim()) return alert("Email is required");
    if (!subject.trim()) return alert("Subject is required");
    if (!message.trim()) return alert("Message is required");

    // 👉 Call your API here
    console.log("Form Data:", formData);
    fetch("http://localhost:8000/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response?.json())
      .then((data) => {
        console.log("Success:", data);
        setSubmitted(true);
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Failed to send message");
      });
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-medium text-primary">
              Get In Touch
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 mb-6">
              Let's Build
              <br />
              <span className="text-gradient">Something Great</span>
            </h2>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              Ready to transform your IT infrastructure? Reach out and let's
              discuss how we can help.
            </p>

            <div className="space-y-6">
              {[
                { icon: Mail, text: "hello@mcfayer.com" },
                { icon: Phone, text: "+1 (555) 123-4567" },
                { icon: MapPin, text: "Berlin, Germany" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="text-primary" size={18} />
                  </div>
                  <span className="text-secondary-foreground">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* {submitted ? (
              <div className="bg-gradient-card rounded-xl border border-border p-10 text-center shadow-card h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Mail className="text-accent" size={28} />
                </div>
                <h3 className="font-heading text-2xl font-semibold mb-2">
                  Message Sent!
                </h3>
                <p className="text-muted-foreground">
                  We'll get back to you within 24 hours.
                </p>
              </div>
            ) : ( */}
              <form
                onSubmit={handleSubmit}
                className="bg-gradient-card rounded-xl border border-border p-8 shadow-card space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block">
                      Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">
                    Subject
                  </label>
                  <input
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project inquiry"
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm"
                  />
                </div>

                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-primary text-primary-foreground font-medium py-3.5 rounded-lg hover:opacity-90 transition-opacity text-sm"
                >
                  Send Message
                </button>
              </form>
            {/* )} */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;