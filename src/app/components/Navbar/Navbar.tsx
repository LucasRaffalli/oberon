"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import "../../scss/components/navbar.scss";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          {isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        </div>
        <h1>OBERON</h1>
        <div className="nav-icon map">Icone de localisation</div>
      </div>
      <div className={`bottomNav ${isMenuOpen ? "open" : ""}`}>
        <Link href={"fiancaille"} >Fiançailles</Link>
        <Link href={"mariage"}>Mariages</Link>
        <Link href={"creation"}>Nos créations</Link>
        <Link href={"nouveau"}>À découvrir</Link>

      </div>
    </section>
  );
}
