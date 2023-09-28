"use client"
import Image from 'next/image'
import '../../scss/components/navbar.scss'
import React, { useEffect, useState } from 'react';
export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const desiredScrollPosition = 0.005; // Replace with your desired scroll position

            setIsScrolled(scrollPosition >= desiredScrollPosition);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <nav className={isScrolled ? 'scrolled' : ''}>
            OBERON
        </nav>
    )
}
