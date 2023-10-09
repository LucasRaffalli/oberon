"use client";

import Image from 'next/image';
import "../../scss/fiancaille/bijoux.scss";
import "../../scss/page.scss";

//$ ON POURRA PEUT ETRE DEPLACER LA DATA DANS UN FICHIER SEUL
const ringsData = [
  {
    id: 1,
    name: "Bague 1",
    price: 1000,
    image: "img/bagueSection5.png",
  },
  {
    id: 2,
    name: "Bague 2",
    price: 1500,
    image: "img/bagueSection5.png",
  },
  {
    id: 3,
    name: "Bague 3",
    price: 1500,
    image: "img/bagueSection5.png",
  },
  {
    id: 4,
    name: "Bague 4",
    price: 1500,
    image: "img/bagueSection5.png",
  },
  {
    id: 5,
    name: "Bague 5",
    price: 1500,
    image: "img/bagueSection5.png",
  },
  {
    id: 6,
    name: "Bague 6",
    price: 1500,
    image: "img/bagueSection5.png",
  },
  {
    id: 7,
    name: "Bague 7",
    price: 1500,
    image: "img/bagueSection5.png",
  },
  {
    id: 8,
    name: "Bague 8",
    price: 1500,
    image: "img/bagueSection5.png",
  },
  {
    id: 9,
    name: "Bague 9",
    price: 1500,
    image: "img/bagueSection5.png",
  },
  {
    id: 10,
    name: "Bague 10",
    price: 1500,
    image: "img/bagueSection5.png",
  },
];

export default function bijoux() {
  return (
    <main id="MainContent">
      <section className="section1"></section>
      <section className="section-rings">
        <h1 className="h1">Fiançailles</h1>
        <div className="ring-list">
          {ringsData.map((ring) => (
            <div key={ring.id} className="ring-item">
              <img src={ring.image} alt={ring.name} width={300} height={300} />
              <h2>{ring.name}</h2>
              <p>Prix : {ring.price} $</p>
              <button className="component-Button">Découvir</button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
