import Link from "next/link";
import NavItem from "@/components/NavItem";
import { useState } from "react";

const menuList = [
  {
    text: "HOME",
    href: "/",
  },
  {
    text: "ABOUT",
    href: "/stressed",
  },
  {
    text: "CONTACT",
    href: "/tired",
  },
];

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <header>
      <nav className="nav">
        <Link href={"/"} onClick={() => setActiveIndex(0)}>
          <h1 class="logo">MoodMate</h1>
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
