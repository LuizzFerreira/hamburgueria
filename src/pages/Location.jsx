import "../styles/Location.css";
import img1 from "../assets/img/image-5.webp";
import img2 from "../assets/img/image-10.webp";

export default function Location() {
  return (
    <section className="location-page">
      {/* HEADER */}
      <div className="location-header">
        <span className="tag">ONDE ESTAMOS</span>
        <h1>Hambúrgueres Artesanais no Coração da Cidade</h1>
        <p>
          Localizada no vibrante centro da cidade, a SNACK traz o artesanato
          culinário para a experiência clássica de uma hamburgueria.
        </p>
      </div>

      {/* GRID PRINCIPAL */}
      <div className="location-grid">
        {/* MAPA */}
        <div className="map">
          <iframe
            title="SNACK Location"
            src="https://www.google.com/maps?q=Rua%20Bras%C3%ADlia%2C%20112%20Centro%20Apu%C3%AD%20AM%2069265-000&output=embed"
            allowFullScreen
            loading="lazy"
          ></iframe>

          <div className="map-overlay">
            <h3>Nossa Sede</h3>
            <p>Rua Brasília, 112 - Centro, Apuí - AM</p>
          </div>
        </div>

        {/* SIDE INFO */}
        <div className="side">
          <div className="card">
            <h3>Contato</h3>
            <p>📞 +55 (97) 98416 - 0533</p>
          </div>

          <div className="card">
            <h3>Horário de Funcionamento</h3>

            <div className="hours">
              <p><strong>Seg:</strong> 14:00 - 00:00</p>
              <p><strong>Ter:</strong> Fechado</p>
              <p><strong>Qua:</strong> 14:00 - 00:00</p>
              <p><strong>Qui:</strong> 14:00 - 00:00</p>
              <p><strong>Sex:</strong> 14:00 - 00:00</p>
              <p><strong>Sáb:</strong> 14:00 - 00:00</p>
              <p><strong>Dom:</strong> 14:00 - 00:00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery FINAL */}
      <div className="location-bottom">
        <div className="img img1" style={{ backgroundImage: `url(${img1})` }} />
        <div className="img img2" style={{ backgroundImage: `url(${img2})` }} />

        <div className="follow">
          <h3>Siga o Sabor</h3>
          <p>Junte-se à nossa comunidade para novidades e promoções diárias.</p>

          <div className="icons">
            <span>🔗</span>
            <span>📸</span>
            <span>🐦</span>
          </div>

          <button>FAÇA PARTE DO CLUBE SNACK</button>
        </div>
      </div>
    </section>
  );
}