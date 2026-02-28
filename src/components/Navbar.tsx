import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import crownIcon from "/mountain.jpg";

const navLinks = ["Products", "Services", "About", "Process", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollTo = (id: string) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const productItems = ["ThinkWizer"];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-[100] glass"
    >
     <div className="max-w-7xl mx-auto px-6 py-4 md:px-4 md:pt-12 md:pb-4 flex items-center justify-between">
      
        <div
          style={{
            fontSize: "30px",
            color: "hsl(156, 47%, 28%)",
            fontFamily: "DM Serif Text, serif",
            fontWeight: 400,
            fontStyle: "normal",
            display: "flex",
            flexDirection: "column",
            alignItems: "center", // 👈 THIS centers icon horizontally
            textAlign: "center",
          }}
        >
          <img
            src={crownIcon}
            alt="empiry crown"
            className="w-24 h-6"
            style={{ marginBottom: "-4px" }} // small spacing between icon and text
          />

          <div
            style={{
              fontFamily: "Sonsie One, system-ui",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "18px",
            }}
          >
            McFayer
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            if (link === "Products") {
              return (
                <div key={link} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setOpen((prev) => !prev)}
                    className="flex text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link}
                    <ChevronDown
                      size={16}
                      className={`self-end ml-1 transition-transform duration-200 ${
                        open ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {open && (
                    <div className="absolute top-full mt-2 w-40 bg-white border rounded-md shadow-md z-50">
                      {productItems.map((item) => (
                        <button
                          key={item}
                          onClick={() => {
                            scrollTo(item);
                            setOpen(false);
                          }}
                          className="block w-full text-left px-4 py-2 text-sm hover:bg-muted"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link}
              </button>
            );
          })}
          <button
            onClick={() => scrollTo("Contact")}
            className="bg-gradient-primary text-primary-foreground text-sm font-medium px-5 py-2 rounded-lg hover:opacity-90 transition-opacity"
          >
            Get Started
          </button>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden px-6 pb-4 flex flex-col gap-3"
        >
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
            >
              {link}
            </button>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
