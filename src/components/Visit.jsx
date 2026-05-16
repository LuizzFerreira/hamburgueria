import { Link } from "react-router-dom";
import "../styles/Visit.css";
import img1 from "../assets/img/image-1.webp";

export default function Visit() {
  return (
    <section className="visit">
      <div>
        <div className="visit-content">
          <span className="tag">VISITE-NOS</span>
          <h2>Seu Lugar Favorito</h2>
          <p>
Viva a experiência SNACK com hambúrgueres artesanais, qualidade e sabor em cada detalhe.
          </p>
          <div className="info">
            <div>
              <span>📍</span>
              <p>Rua Brasília, 112 - Centro, Apuí - AM</p>
            </div>
            <div>
              <span>⏰</span>
              <p>Seg-Dom: 11:00 - 00:00</p>
            </div>
          </div>
          <Link to="/location">
            <button className="btn">Como Chegar</button>
          </Link>
        </div>
        <img className="visit-image" src={img1} alt="SNACK Logo" />
      </div>
    </section>
  );
}