import mountainIcon from "/mountain.jpg";

const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
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
                   src={mountainIcon}
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
       
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} McFayer Pvt. Ltd. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
