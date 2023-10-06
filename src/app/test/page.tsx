"use client"

import Image from 'next/image'
import '../scss/test/test.scss'
import { useState } from 'react'
import Button from '../components/common/button'
import HamburgerMenu from '../components/common/HamburgerMenu'



export default function test() {


    return (
        <main id='MainContent'>
            <section className='testpage'>
                <h1>test page</h1>
                <HamburgerMenu/>
            </section>
        </main>
    )
}
