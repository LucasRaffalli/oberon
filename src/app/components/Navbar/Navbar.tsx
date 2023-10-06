"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import "../../scss/components/navbar.scss";
import MenuBurgerIcon from "public/svg/burger.svg"
import MenuBurgerCrossIcon from "public/svg/burgerCross.svg";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [activeMenu, setActiveMenu] = useState(null);
  const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);

  const sousMenus: { [key: string]: JSX.Element } = {
    fiancaille: <FiancailleSousMenu />,
    service: <ServiceSousMenu />,
    creation: <CreationSousMenu />,
    nouveau: <NouveauSousMenu />
  };

  function FiancailleSousMenu() {
    return (
      <div className="SubMenuGlobal">
        <div className="SubMenuInner">
          <h3>Fiançailles & Mariages</h3>
          <Link href="" >Bague de mariage</Link>
          <Link href="" >Alliance</Link>
        </div>
        <img src="/img/bagueSection5.png" alt="test" />
      </div>
    );
  }

  function ServiceSousMenu() {
    return (
      <div>
        <h3>Service Oberon</h3>
        <p>Point de ventre</p>
        {/* <p>blabla</p> */}
        {/* <p>blabla</p> */}
      </div>
    );
  }

  function CreationSousMenu() {
    return (
      <div>
        <h3>Découvrez nos creations </h3>
        <p>Contenu du sous-menu pour creation...</p>
      </div>
    );
  }

  function NouveauSousMenu() {
    return (
      <div>
        <h3>Découvrez nos nouvelle collections </h3>
        <p>Contenu du sous-menu pour les nouveaux...</p>
      </div>
    );
  }

  const handleMenuEnter = (menu: any) => {
    setActiveMenu(menu);
    setIsSubMenuVisible(true);
    console.log(sousMenus[menu]);
  };

  const handleMenuLeave = () => {
    setActiveMenu(null);
    setIsSubMenuVisible(false);
  };


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const desiredScrollPosition = 100; // Replace with your desired scroll position

      setIsScrolled(scrollPosition >= desiredScrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const handleBurgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="topNav">
        <div className={`nav-icon burger ${isMenuOpen ? "open" : ""}`} onClick={handleBurgerClick}>
          {isMenuOpen ? <MenuBurgerCrossIcon className="SvgIcon" /> : <MenuBurgerIcon />}
        </div>
        <h1> <Link href="/"> OBERON</Link></h1>
        <div className="nav-icon map">Icone de localisation</div>
      </div>

      <div className={`bottomNav ${isMenuOpen ? "open" : ""}`}>
        <div
          className={`menu-item ${activeMenu === "fiancaille&mariage" ? "active" : ""}`}
          onMouseEnter={() => handleMenuEnter("fiancaille")}

        >
          <Link href="/fiancaille&mariage">Fiançailles & Mariages</Link>
        </div>


        <div
          className={`menu-item ${activeMenu === "creation" ? "active" : ""}`}
          onMouseEnter={() => handleMenuEnter("creation")}

        >
          <Link href="/creation">Nos créations</Link>
        </div>

        <div
          className={`menu-item ${activeMenu === "creation" ? "active" : ""}`}
          onMouseEnter={() => handleMenuEnter("service")}

        >
          <Link href="/services">Services</Link>
        </div>

        <div
          className={`menu-item ${activeMenu === "nouveau" ? "active" : ""}`}
          onMouseEnter={() => handleMenuEnter("nouveau")}

        >
          <Link href="/nouveau">À découvrir</Link>
        </div>

      </div>

      {isSubMenuVisible && activeMenu && (
        <div className="subMenu" onMouseEnter={() => setIsSubMenuVisible(true)} onMouseLeave={handleMenuLeave}>
          {sousMenus[activeMenu]}
        </div>
      )}
    </section>


  );
}
