"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, ChevronDown, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [openMobile, setOpenMobile] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // ✅ Toggle Dark Mode + persist in localStorage
  const toggleDark = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  // ✅ Initialize theme on page load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "/" },
    {
      name: "Services",
      dropdown: [
        { name: "Cleaning", href: "/services/cleaning" },
        { name: "Office Care", href: "/services/office" },
        { name: "Home Maintenance", href: "/services/home" },
      ],
    },
    { name: "About Us", href: "/about" },
    { name: "Support", href: "/support" },
  ];

  const highlightLinks = ["About Us", "Support"];

  return (
    <motion.nav
      animate={{
        paddingTop: scrolled ? "0.5rem" : "1.2rem",
        paddingBottom: scrolled ? "0.5rem" : "1.2rem",
        backdropFilter: "blur(20px)",
      }}
      className="sticky top-0 z-50 w-full backdrop-blur-xl transition-all"
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative">
        {/* LEFT SIDE (Desktop Menu) */}
        <div className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            const isHighlight = highlightLinks.includes(item.name);

            // DROPDOWN ITEM
            if (item.dropdown) {
              return (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    className={`
                      px-4 py-2 font-medium flex items-center gap-1 
                      text-emerald-600 dark:text-gray-300
                      hover:text-emerald-700 dark:hover:text-white
                      relative group
                    `}
                  >
                    {item.name}
                    <ChevronDown size={18} className="mt-[2px]" />
                    {/* underline */}
                    <span
                      className="
                        after:content-[''] after:absolute after:left-1/2 after:-bottom-1
                        after:w-0 after:h-[2px] after:bg-emerald-600 dark:after:bg-emerald-600
                        after:transition-all after:duration-300 after:-translate-x-1/2
                        group-hover:after:w-full
                      "
                    />
                  </button>
                  {/* DROPDOWN MENU */}
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="
                          absolute top-full left-0 mt-2 w-48 rounded-xl 
                          bg-white/70 dark:bg-black/50 backdrop-blur-xl 
                          shadow-xl border border-white/30 dark:border-white/10
                          overflow-hidden
                        "
                      >
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="
                              block px-4 py-3 text-sm text-emerald-600 dark:text-gray-300
                              hover:bg-white/40 dark:hover:bg-white/10 
                              transition
                            "
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            // NORMAL LINK
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  px-4 py-2 font-medium relative transition-all
                  ${
                    isActive
                      ? "bg-white dark:bg-white/20 rounded-full text-emerald-600 dark:text-white"
                      : isHighlight
                      ? "text-emerald-600 dark:text-emerald-300 hover:text-emerald-600 dark:hover:text-emerald-500"
                      : "text-emerald-600 dark:text-gray-300 hover:text-emerald-700 dark:hover:text-white"
                  }
                `}
              >
                <span
                  className={`
                    after:content-[''] after:absolute after:left-1/2 after:-bottom-1
                    after:w-0 after:h-[2px]
                    ${
                      isHighlight
                        ? "after:bg-emerald-600 dark:after:bg-emerald-300 hover:after:bg-emerald-600 dark:hover:after:bg-emerald-500"
                        : "after:bg-emerald-600 dark:after:bg-emerald-600"
                    }
                    after:transition-all after:duration-300 after:-translate-x-1/2
                    hover:after:w-full
                    ${isActive ? "after:w-full" : ""}
                  `}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>

        {/* LOGO */}
        <div className="left-1/2 -translate-x-1/2 hidden md:flex">
          <img
            src="https://cdn-icons-png.flaticon.com/128/2514/2514330.png"
            alt="Logo"
            className="w-[40md:flex items-center gap-4">
          {/* DARK MODE TOGGLE */}
          <button
            onClick={toggleDark}
            className={`
              p-2 rounded-full transition-all duration-300 shadow-md
              flex items-center justify-center
              ${darkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-emerald-600 hover:bg-emerald-500"}
            `}
          >
            {darkMode ? <Moon size={20} className="text-white" /> : <Sun size={20} className="text-white" />}
          </button>

          {/* CONTACT US */}
          <Link
            href="/contact"
            className="relativext-black p-2 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-45"/>
              <ArrowUpRight size={18} />
            </span>
            <span className="relative z-10">Contact Us</span>
            <div
              className="
                absolute inset-0 rounded-full bg-white/10 opacity-0 
                group-hover:opacity-100 blur-xl transition duration-300
              "
            ></div>
          </Link>
        </div>

        {/* MOBILE MENU BTN */}
        <button
          onClick={() => setOpenMobile(!openMobile)}
          className="md:hidden text-black dark:text-white"
        >
          {openMobile ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {openMobile && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden px-6 pb-4 pt-2 space-y-3 bg-white/60 dark:bg-black/40 backdrop-blur-xl"
          >
            {menuItems.map((item) =>
              item.dropdown ? (
                <div key={item.name}>
                  <p className="text-emerald-600 dark:text-gray-300 font-medium">{item.name}</p>
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      className="block px-4 py-2 ml-2 text-emerald-600 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-white/10 rounded-lg"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block w-full px-4 py-2 rounded-lg text-lg text-emerald-600 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-white/10 transition"
                >
                  {item.name}
                </Link>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}