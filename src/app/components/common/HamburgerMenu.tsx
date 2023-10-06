import Image from 'next/image'
import '../../scss/components/hamburger.scss'
import React, { useState } from 'react';

function BurgerButton() {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <>

            <input type="checkbox" role="button" aria-label="Display the menu" className="menu" />
        </>
    )
}

export default BurgerButton;