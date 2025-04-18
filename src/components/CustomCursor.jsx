import gsap from "gsap";
import { useEffect } from "react";

const CustomCursor = () => {
  useEffect(() => {
    gsap.set(".ball", { xPercent: -50, yPercent: -50 });
    const targets = gsap.utils.toArray(".ball");
    window.addEventListener("mousemove", (e) => {
      gsap.to(targets, {
        duration: 2.5,
        x: e.clientX + window.scrollX,
        y: e.clientY + window.scrollY,
        scale: (i) => 1 - i * 0.3,
        rotation: (i) => (i + 1) * 10,
        ease: "back.out", 
        overwrite: "auto",
        stagger: 0.02,
        boxShadow: "0 0 20px #ffffff",
        backgroundColor: () => `#ffffff`,
      });
    });
    return () => {
      window.removeEventListener("mousemove", () => { });
    };
  }, []);
  return (
    <div>
      {" "}
      <div className="ball z-50 bg-red-600 w-6 h-6 fixed top-0 left-0 rounded-full"></div>
      <div className="ball z-50 bg-red-600 w-6 h-6 fixed top-0 left-0 rounded-full"></div>
      <div className="ball z-50 bg-red-600 w-6 h-6 fixed top-0 left-0 rounded-full"></div>
      <div className="ball z-50 bg-red-600 w-6 h-6 fixed top-0 left-0 rounded-full"></div>
      <div className="ball z-50 bg-red-600 w-6 h-6 fixed top-0 left-0 rounded-full"></div>
    </div>
  );
};

export default CustomCursor;
