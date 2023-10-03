/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";

import Button from "./components/common/button";
import "./scss/page.scss";

const btnConsole1: () => void = () => {
  console.log("btn-decouvrir section 2");
}


export default function Home() {
  return (
    <main id="MainContent">
      <section className="home"></section>
      <section className="section2">
        <div className="separation">
          <div className="line"></div>
          <h2>BAGUE EN DIAMENT | FIANÇAILLES</h2>
          <div className="line"></div>
        </div>
        <h1 className="h1">L'ÉCLAT D'AMOUR</h1>
        <div className="description">
          <p className="description1">
            Une bague de fiançailles en diamant avec halo brille de mille feux
            dans la lumière. Le diamant central, de taille ronde <br />
            brillante, est entouré d'un halo de petits diamants qui lui
            <br /> confèrent une allure encore plus éblouissante.
          </p>
          <p className="description2">
            Et si vous aussi, vous trouviez l'amour qui vous éblouira ?
          </p>
          <Button text={"Découvrir"} onClick={btnConsole1} />
        </div>
      </section>
      <section className="section3"></section>
      <section className="section4">
        <div className="separation">
          <div className="line"></div>
          <h2>BAGUE EN SAPHIR ET DIAMANT | FIANÇAILLES</h2>
          <div className="line"></div>
        </div>
        <h1 className="h1">L'AMOUR ÉTERNEL</h1>
        <div className="description">
          <p className="description1">
            Une bague de fiançailles en saphir et diamant brille de mille <br />
            feux dans la lumière. Le saphir ovale est de couleur bleu vif et de
            <br />
            pureté VS2. Le diamant rond brillant est de couleur G et de <br />
            pureté SI1.
          </p>
          <p className="description2">
            Révélez votre amour avec une bague de fiançailles en saphir et
            diamant.
          </p>
          <Button text={"Découvrir"} onClick={btnConsole1} />
        </div>
      </section>
      <section className="section5">
        <h1>
          L'AMOUR DANS L'UNIVERS <br />
          D'OBERON
        </h1>
        <p className="desc-section5">
          L’amour est une magie qui nous unit tous. Il est la force qui nous
          fait rêver et nous donne envie de <br /> vivre. L'amour est éternel,
          il nous transcende et nous rend meilleurs.
        </p>
        <div className="bagues">
          <div>
            <img src="/img/bagueSection5.png" alt="" />
            <h2>Bagues de fiançailles</h2>
            <p>
              Célébrez ce moment unique dans votre vie avec une bague de
              fiançailles en diamant Oberon , précieux symbole du véritable
              amour.
            </p>
          </div>
          <div>
            <img src="/img/bg2Section5.png" alt="" />
            <h2>Alliances</h2>
            <p>
              Célébrons à jamais et ensemble ce moment avec une alliance en
              diamant Oberon, évoquant votre grande histoire d’amour.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
