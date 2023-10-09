/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from 'next/image';
import "../scss/fiancaille/fab.scss";
import "../scss/page.scss";
import { useRouter } from "next/navigation";
import Button from "../../app/components/common/button";
//$ ON POURRA PEUT ETRE DEPLACER LA DATA DANS UN FICHIER SEUL

export default function Fiancaille() {

  const router = useRouter()
  const Fiancaille: () => void = () => {
    console.log("to mariage");
    router.push("/fiancaille&mariage/fiancaille");
  }
  const Alliance: () => void = () => {
    console.log("to alliances");
    router.push("/fiancaille&mariage/alliances");
  }
  return (
    <main id="MainContent">
      {/* <Button text={"Découvrir"} onClick={Fiancaille} /> */}
      <section className="section1"></section>
      <section className="section-rings">
        <div className="separation">
          <div className="line"></div>
          <h2>Fiançailles</h2>
          <div className="line"></div>
        </div>
        <div className="ring-list">
          <div className='MariageB'>
            <Image src="/img/bg_bagueMariage.png" alt="" height={500} width={500} />
            <h2>Fiançaille</h2>
            <p>Une bague de fiançailles Oberon se distingue par sa beauté.</p>
            <Button text={"Découvrir"} onClick={Fiancaille} />
          </div>
          <div className='AllianceB'>
            <Image src="/img/fiancaille.png" alt="" height={500} width={500} />
            <h2>Alliance</h2>
            <p>Alliances conçues pour célébrer l'amour et l'engagement de toute une vie.</p>
            <Button text={"Découvrir"} onClick={Alliance} />
          </div>
        </div>
        <section className="bijouxMariageOthers">
          <div className='bijouxMariageOthersImg'></div>
          <div className='BijouxDesc'>

            <h2>Bijoux de mariage</h2>
            <p>Des créations en diamants à couper le souffle destinés illuminer vos journées les plus importante de votre vie.</p>
            <Button text={"Découvrir"} onClick={Fiancaille} />
          </div>
        </section>
      </section>
    </main>
  );
}
