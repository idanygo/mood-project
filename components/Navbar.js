import Link from "next/link";
import NavItem from "@/components/NavItem";
import { useState, useEffect, useRef } from "react";

const menuList = [
  {
    text: "HOME",
    href: "/",
  },
  {
    text: "ABOUT",
    href: "/about",
  },
  {
    text: "ALL EXERCISES ",
    href: "/mixed",
  },
];

const Navbar = () => {
  //Changes nav color when scrolling below 115px
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 115) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);

    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  const [navActive, setNavActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  //IDA LÄGG KOMMENTAR OM USEREF
  let menuRef = useRef();

  // Closes the menu when clicking outside of it on mobile
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setNavActive(false);
      }
    };

    window.addEventListener("mousedown", handler);

    return () => {
      window.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <header>
      <nav className={color ? "nav navBg" : "nav"} ref={menuRef}>
        <Link href={"/"} onClick={() => setActiveIndex(0)}>
          <h1 className="logo">MoodMate</h1>
        </Link>
        <div onClick={() => setNavActive(!navActive)} className="nav__menuBar">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menuList`}>
          {menuList.map((menu, index) => {
            return (
              <div
                onClick={() => {
                  setActiveIndex(index);
                  setNavActive(false);
                }}
                key={menu.text}
              >
                <NavItem active={activeIndex === index} {...menu} />
              </div>
            );
          })}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
