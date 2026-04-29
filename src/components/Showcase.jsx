import "../styles/Showcase.css";
import img1 from "../assets/img/image-8.webp";
import img2 from "../assets/img/image-9.webp";

export default function Showcase() {
  return (
    <section className="showcase">
      {/* TOP (cards grandes) */}
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

      {/* BOTTOM (cards pequenos) */}
      <div className="showcase-bottom">
        <div className="small-card">
          <div className="icon">🍴</div>
          <h3>Especiais do Dia</h3>
          <p>
            Lançamentos limitados curados pelo Chef que desafiam os limites da
            arquitetura do hambúrguer.
          </p>
        </div>

        <div className="small-card">
          <div className="icon">🚚</div>
          <h3>Entrega Expressa</h3>
          <p>
            Da nossa grelha para sua porta em menos de 30 minutos. Fresco, quente e
            perfeitamente intacto.
          </p>
        </div>

        <div className="small-card">
          <div className="icon">🍺</div>
          <h3>Harmonização</h3>
          <p>
            Seleção curada de cervejas artesanais locais e refrigerantes retrô para
            complementar sua refeição.
          </p>
        </div>
      </div>
    </section>
  );
}