import { Link } from "react-router"

const Footer = () => {
  return (
    <footer className="w-full border-t bg-[#F0002A]">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0 mx-auto px-4">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-white md:text-left">
            &copy; {new Date().getFullYear()} Lilia AI. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          <a href="#" className="text-sm font-medium text-white transition-colors hover:text-[#F0002A]">
            Home
          </a>
          <a href="#founders" className="text-sm font-medium text-white transition-colors hover:text-[#F0002A]">
            Founders
          </a>
          <a href="#contact" className="text-sm font-medium text-white transition-colors hover:text-[#F0002A]">
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
