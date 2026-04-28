import { useState } from "react";
import "../styles/Gallery.css";
import img1 from "../assets/img/image-15.webp";
import img2 from "../assets/img/image-1.webp";
import img3 from "../assets/img/image-4.webp";
import img4 from "../assets/img/image-14.webp";
import img5 from "../assets/img/image-11.webp";
import img6 from "../assets/img/image-10.webp";
import img7 from "../assets/img/image-5.webp";

const images = [
  { src: img1, category: "burgers" },
  { src: img2, category: "people" },
  { src: img3, category: "burgers" },
  { src: img4, category: "atmosphere" },
  { src: img5, category: "burgers" },
  { src: img6, category: "burgers" },
  { src: img7, category: "atmosphere" },
];

export default function Gallery() {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? images
      : images.filter((img) => img.category === filter);

  return (
    <section className="Gallery">
      {/* HEADER */}
      <div className="Gallery-header">
        <h1>A ARTE DO SABOR</h1>
        <p>
          Uma jornada visual pela nossa cozinha, nossas criações e a comunidade que faz da SNACK um ponto de referência.
        </p>

        <div className="filters">
          <button onClick={() => setFilter("all")}>Tudo</button>
          <button onClick={() => setFilter("burgers")}>Os Burguers</button>
          <button onClick={() => setFilter("atmosphere")}>Ambiente</button>
          <button onClick={() => setFilter("people")}>Nossa Gente</button>
        </div>
      </div>

      {/* GRID */}
      <div className="Gallery-grid">
        {filtered.map((img, i) => (
          <div
            key={i}
            className="Gallery-item"
            style={{ backgroundImage: `url(${img.src})` }}
          />
        ))}
      </div>

      {/* CTA FINAL */}
      <div className="Gallery-cta">
        <h2>PRONTO PARA A EXPERIÊNCIA REAL?</h2>
        <div className="buttons">
          <button className="primary">Visite-nos</button>
          <button className="secondary">Peça Online</button>
        </div>
      </div>
    </section>
  );
}