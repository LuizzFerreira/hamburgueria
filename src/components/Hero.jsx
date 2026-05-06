import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Hero.css";
import img1 from "../assets/img/image-10.webp";
import img5 from "../assets/img/image-7.webp";
import img3 from "../assets/img/image-11.webp";
import img4 from "../assets/img/image-12.webp";
import img2 from "../assets/img/image-16.webp";

const images = [img1, img2, img3, img4, img5];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div
        className="slider"
        style={{
          transform: `translateX(-${index * 100}%)`,
        }}
      >
        {images.map((img, i) => (
          <div
            className="slide"
            key={i}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      <div className="overlay" />

      <div className="hero-content">
        <span className="tag">Seu Jantar tem que ter...</span>

        <h1>
          Snack <span>Burguer</span>
        </h1>

        <p>Faça seu pedido pelo nosso link ou venha nos visitar...</p>

        <div className="buttons">
          <a href="https://pedido.anota.ai" target="_blank" rel="noreferrer">
            <button className="primary">Peça Agora</button>
          </a>
          <Link to="/menu">
            <button className="secondary">Ver Cardápio</button>
          </Link>
        </div>
      </div>
    </section>
  );
}