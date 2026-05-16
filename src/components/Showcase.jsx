import { useState, useEffect, useCallback } from "react";
import "../styles/Showcase.css";
import img1 from "../assets/img/image-8.webp";
import img2 from "../assets/img/image-9.webp";
import img3 from "../assets/img/image-30.webp";
import img4 from "../assets/img/image-31.webp";
import img5 from "../assets/img/image-32.webp";

const cards = [
  {
    img: img3,
    title: "Especiais do Dia",
    text: "Combinações especiais preparadas para surpreender em cada detalhe.",
  },
  {
    img: img4,
    title: "Entrega Expressa",
    text: "Seu pedido chegando fresco, quente e pronto para aproveitar.",
  },
  {
    img: img5,
    title: "Harmonização",
    text: "Bebidas selecionadas para completar sua experiência SNACK.",
  },
];

export default function Showcase() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (index) => {
      if (animating) return;
      setAnimating(true);
      setCurrent((index + cards.length) % cards.length);
      setTimeout(() => setAnimating(false), 400);
    },
    [animating]
  );

  useEffect(() => {
    const timer = setInterval(() => goTo(current + 1), 3500);
    return () => clearInterval(timer);
  }, [current, goTo]);

  return (
    <section className="showcase">
      <div className="showcase-top">
        <div className="big-card left">
          <img className="img-back" src={img1} alt="SNACK Logo" />
          <div className="overlay" />
          <div className="content">
            <span>ARTESANAL</span>
            <h2>Origem Selecionada</h2>
            <p>
              Uma curadoria rigorosa de ingredientes que transforma nossa tábua em uma experiência única de sabores autênticos e texturas irresistíveis."
            </p>
          </div>
        </div>

        <div className="big-card right">
          <img className="img-back img-back-bottom" src={img2} alt="SNACK Logo" />
          <div className="overlay" />
          <div className="content">
            <span>ACOMPANHAMENTOS</span>
            <h2>Desejo Trufado</h2>
            <p>
              Uma explosão de texturas. Mergulhe no nosso blend trufado, finalizado com frutas frescas e o toque do chef.
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM — grid no desktop, carrossel no mobile */}
      <div className="showcase-bottom">
        {cards.map((card, i) => (
          <div className="small-card" key={i}>
            <img className="icon" src={card.img} alt="SNACK" />
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>
        ))}
      </div>

      <div className="carousel-wrapper">
        <button className="carousel-btn" onClick={() => goTo(current - 1)}>&#8249;</button>
        <div className="carousel-track">
          <div className={`small-card carousel-card ${animating ? "fade" : ""}`}>
            <img className="icon" src={cards[current].img} alt="SNACK" />
            <h3>{cards[current].title}</h3>
            <p>{cards[current].text}</p>
          </div>
        </div>
        <button className="carousel-btn" onClick={() => goTo(current + 1)}>&#8250;</button>
        <div className="carousel-dots">
          {cards.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === current ? "active" : ""}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}