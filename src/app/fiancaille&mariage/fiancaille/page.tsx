"use client";

import Image from 'next/image';
import "../../scss/fiancaille/fiancaille.scss";
import "../../scss/page.scss";
//$ ON POURRA PEUT ETRE DEPLACER LA DATA DANS UN FICHIER SEUL
const ringsData = [
  {
    id: 1,
    name: "Bague 1",
    image: "/img/bague4/Bague4.png",
  },
  {
    id: 2,
    name: "Bague 2",
    image: "/img/bague2/Bague2.png",
  },
  {
    id: 3,
    name: "Bague 3",
    image: "/img/bague1/Bague1_1.png",
  },



];

export default function fiancaille() {
  return (
    <main id="MainContent">
      <section className="section1"></section>
      <section className="section-rings">
      <div className="separation">
          <div className="line"></div>
          <h2>Fiançailles</h2>
          <div className="line"></div>
        </div>
        <div className="ring-list">
          {ringsData.map((ring) => (
            <div key={ring.id} className="ring-item">
              <img src={ring.image} alt={ring.name} width={300} height={300} />
              <h2 className='nameRing'>{ring.name}</h2>
              {/* <button className="component-Button">Découvir</button> */}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
