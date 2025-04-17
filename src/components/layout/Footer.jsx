import { Link } from "react-router"

const Footer = () => {
  return (
    <footer className="w-full border-t bg-red-600">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0 mx-auto">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 text-red-600"
          >
            <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
            <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
          </svg>
          <p className="text-center text-sm leading-loose text-white md:text-left">
            &copy; {new Date().getFullYear()} Lilia AI. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          <a href="#" className="text-sm font-medium text-white transition-colors hover:text-red-600">
            Home
          </a>
          <a href="#founders" className="text-sm font-medium text-white transition-colors hover:text-red-600">
            Founders
          </a>
          <a href="#contact" className="text-sm font-medium text-white transition-colors hover:text-red-600">
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
