import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <div className="footer-left">
          <h2>SNACK</h2>
          <p>© 2024 Snack Artisanal Burgers. Todos os direitos reservados.</p>
        </div>
        <div className="footer-center">
          <a href="#">Política de Privacidade</a>
          <a href="#">Termos de Serviço</a>
          <a href="#">Kit de Imprensa</a>
        </div>
      </div>
    </footer>
  );
}