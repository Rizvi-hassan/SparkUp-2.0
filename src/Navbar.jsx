import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
// import TopNavbar from "./TopNavbar"; // Reference your existing TopNavbar
// import { NavLink } from "react-router-dom";

export default function Navbar () {
  const [showBottomNavbar, setShowBottomNavbar] = useState(true);
  const isDesktop = window.innerWidth >= 1024; // Detect if it's a desktop

  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY > 50;
      setShowBottomNavbar(shouldShow);
    };

    if (isDesktop) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isDesktop]);

  return (
    <>
      {/* Top Navbar */}
      {/* <TopNavbar /> */}

      {/* Bottom Navbar */}
      {isDesktop ? (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={
            showBottomNavbar ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }
          }
          transition={{ duration: 0.5 }}
          className="fixed top-[15px] w-full z-50 "
        >
          <SlideTabs />
        </motion.div>
      ) : (
        <motion.div className="fixed bottom-5 w-full z-50">
          <SlideTabs />
        </motion.div>
      )}
    </>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <div className="relative lg:mx-auto mx-4 flex justify-center p-1 glass-effect">
      <ul
        onMouseLeave={() => {
          setPosition((prev) => ({
            ...prev,
            opacity: 1,
          }));
        }}
        className="relative flex lg:w-300 sm:h-15 lg:h-15 p-1 shadow-lg backdrop-blur-md"
        style={{
          borderWidth: "0px",
          borderRadius: "10px",
          background: "rgba(255, 255, 255, 0.1)", // Glassy effect
          boxShadow: "0px 4px 20px rgba(255, 148, 17, 0.49)",
          backdropFilter: "blur(10px)",
        }}
      >
        {["Home", "Members", "Events", "About Us"].map(
          (tab, index) => (
            <Tab
              key={index}
              setPosition={setPosition}
              to={tab === "Home" ? "/" : `/${tab.replace(" ", "")}`}
            >
              {tab}
            </Tab>
          )
        )}
      </ul>
    </div>
  );
};

const Tab = ({ children, setPosition, to }) => {
  const ref = useRef(null);


  return (
    <li
      className="relative z-10 block cursor-pointer px-2 text-[15px] uppercase text-[#ffffff] font-semibold hover:text-[#131010] hover:font-bold sm:px-4 sm:py-2 sm:text-sm md:px-5 md:py-3 md:text-base justify-between lg:mx-24 "
    >
        {children}
      {/* <NavLink to={to}>{children}</NavLink> */}
    </li>
  );
};