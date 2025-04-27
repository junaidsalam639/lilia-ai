import gsap from "gsap";
import { useEffect } from "react";

const CustomCursor = () => {
  useEffect(() => {
    gsap.set(".ball", { xPercent: -50, yPercent: -50 });

    const targets = gsap.utils.toArray(".ball");

    const handleMouseMove = (e) => {
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
        backgroundColor: () => `#F0002A`,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="ball z-50 bg-[#F0002A] w-6 h-6 fixed top-0 left-0 rounded-full pointer-events-none"
        ></div>
      ))}
    </div>
  );
};

export default CustomCursor;
