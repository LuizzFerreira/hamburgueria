import "../styles/About.css";

import ImgAbout from "../assets/img/image-17.webp";

export default function QuemSomos() {
  return (
    <section className="qs-section">
      <div className="qs-container">

        <div className="qs-left">
          <img src={ImgAbout} alt="Quem somos LGTec" />
        </div>

        <div className="qs-right">
          <h4>NOSSA HISTÓRIA</h4>

          <h2>
            Uma nova fase da <span>Snack Burguer</span>
          </h2>

          <p>
            Em 08 de maio de 2023, iniciamos uma nova etapa na história da Snack Burguer. 
            Após mais de dois anos atuando exclusivamente com delivery, demos um grande passo 
            com a inauguração do nosso primeiro ponto físico.
          </p>

          <p>
            Esse momento marcou não apenas uma conquista, mas a realização de um sonho construído 
            com dedicação, aprendizado e evolução constante. Cada cliente que esteve presente nesse dia — 
            e todos que ainda farão parte dessa trajetória — são essenciais para o nosso crescimento.
          </p>

          <p>
            Seguimos com o compromisso de melhorar a cada dia, oferecendo qualidade, experiência 
            e sabor em cada pedido.
          </p>

          <p className="qs-highlight">
            Gratidão a Deus e a todos os nossos clientes. Vocês são a base de tudo 🙌🏼
          </p>

        </div>

      </div>
    </section>
  );
}