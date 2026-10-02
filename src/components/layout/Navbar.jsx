import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "../../data/navLinks";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import { scrollToSection } from "../../utils/scrollTo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrolled = useScrollPosition(20);
  const activeSection = useScrollSpy(navItems.map((i) => i.id));

  const handleNavClick = (e, href) => {
    e.preventDefault();
    scrollToSection(href);
    setIsOpen(false);
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        className={`
          fixed top-0 left-0 w-full z-50
          transition-all duration-300
          ${
            scrolled
              ? "bg-gray-950/95 backdrop-blur-md py-3 shadow-lg shadow-blue-600/20"
              : "bg-linear-to-b from-gray-950/50 bg-gray-900 to-transparent py-4 sm:py-5"
          }
        `}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8">
            {/* ================= LOGO ================= */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="
                text-xl sm:text-2xl
                font-bold text-white
                hover:text-blue-400
                transition-colors
                tracking-wide
              "
            >
              Portfolio<span className="text-blue-500">.</span>
            </a>

            {/* ================= DESKTOP NAV ================= */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;

                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`
                      flex items-center gap-2
                      px-3 xl:px-4 py-2
                      rounded-lg
                      text-sm font-medium
                      transition-all duration-300
                      ${
                        isActive
                          ? "text-blue-300 bg-blue-900/40 border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.15)]"
                          : "text-gray-300 hover:text-white hover:bg-white/10 border border-transparent"
                      }
                    `}
                  >
                    <Icon size={17} />
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </div>

            {/* ================= MOBILE BUTTON ================= */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="
                lg:hidden
                p-2 sm:p-2.5
                rounded-lg
                text-gray-300
                hover:text-white
                hover:bg-white/10
                transition-colors
              "
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`
          fixed inset-0 z-40 lg:hidden
          transition-all duration-300
          ${
            isOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          }
        `}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`
            absolute
            top-0 right-0
            h-full
            w-[80%] max-w-sm
            bg-gray-900
            border-l border-white/10
            shadow-2xl
            transform
            transition-transform duration-300
            ${isOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          {/* Mobile Header */}
          <div className="flex items-center justify-between px-5 py-5 border-b border-white/10">
            <span className="text-lg font-bold text-white">
              Menu<span className="text-blue-500">.</span>
            </span>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="
                p-2
                rounded-lg
                text-gray-400
                hover:text-white
                hover:bg-white/10
                transition
              "
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          {/* Mobile Links */}
          <div className="flex flex-col p-5 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`
                    flex items-center gap-3
                    px-4 py-3
                    rounded-xl
                    text-sm sm:text-base
                    font-medium
                    transition-all duration-200
                    ${
                      isActive
                        ? "text-blue-400 bg-blue-500/20 border border-blue-500/20"
                        : "text-gray-400 hover:text-white hover:bg-white/5 border border-transparent"
                    }
                  `}
                >
                  <Icon size={19} />

                  <span>{item.label}</span>

                  {isActive && (
                    <span
                      className="
                        ml-auto
                        w-2 h-2
                        rounded-full
                        bg-blue-500
                        shadow-[0_0_8px_rgba(59,130,246,0.8)]
                      "
                    />
                  )}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
