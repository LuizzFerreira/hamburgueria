import { useLocation } from "react-router-dom";
import { useEffect, useRef, useState, useMemo } from "react";
import "../styles/Menu.css";
import img1 from "../assets/img/image-12.webp";

const MENU_DATA = [
  {
    category: "Novidades",
    items: [
      {
        name: "Milano Burger",
        price: "R$ 30,00",
        desc: "2 hambúrguer, 2 fatias de queijo provolone, Cebola roxa, Alface e tomate",
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1772071454197blob_600.webp",
        link: "https://pedido.anota.ai/product/697276ac0a40b3ff822188b4/0/snack-burguer-."
      },
      {
        name: "oklahoma",
        price: "R$ 32,00",
        desc: "Pão brioche, alface, tomate, 1 hambúrguer 130g, 2 fatias de queijo provolone, cebola caramelizada, bacon, maionese caseira.",
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1769136530318blob_600.webp",
        link: "https://pedido.anota.ai/product/69727b4b1309f567f2df0143/0/snack-burguer-."
      },
      {
        name: "Insane burguer",
        price: "R$ 28,00",
        desc: "Pão brioche, alface, tomate, 1 hambúrguer 130g, 2 fatias de queijo provolone, bacon caramelizado, maionese caseira.",
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1769135657501blob_600.webp",
        link: "https://pedido.anota.ai/product/69727824a96eeb581ff9d569/0/snack-burguer-."
      },
      {
        name: "Porção de Fritas com Costela desfiada e Creme de queijo",
        price: "R$ 38,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1763940849657blob_600.webp",
        link: "https://pedido.anota.ai/product/692399f39f20b53d92d4413d/0/snack-burguer-."
      }
    ]
  },
  {
    category: "Promoção",
    items: [
      {
        name: "2 BATIDAS DE AÇAÍ PROMOCIONAIS",
        price: "R$ 20,00",
        desc: "Cabores Disponíveis: Chocolate - Paçoca - Dorella - Amendoims - Creme Ninho - Brigadeiro de Maracuja",
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1775686419883blob_600.webp",
        link: "https://pedido.anota.ai/product/69d6d3158edce5734ad57cee/0/snack-burguer-."
      }
    ]
  },
    {
    category: "Porções",
    items: [
      {
        name: "Batata, Mussarela E Bacon",
        price: "R$ 38,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747812732456blob_600.webp",
        link: "https://pedido.anota.ai/product/682cdda8a9d46608b8b5118b/0/snack-burguer-."
      },
      {
        name: "Meia porção de Batata, mussarela e bacon",
        price: "R$ 19,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747852024754blob_600.webp",
        link: "https://pedido.anota.ai/product/682e1afaccb056af7946da98/0/snack-burguer-."
      },
      {
        name: "Batata, Calabresa e cheddar",
        price: "R$ 43,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1771885942158blob_600.webp",
        link: "https://pedido.anota.ai/product/682cdda8a9d46608b8b5118c/0/snack-burguer-."
      },
      {
        name: "Meia porção de batata, calabresa e cheddar",
        price: "R$ 21,50",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1771885942158blob_600.webp",
        link: "https://pedido.anota.ai/product/682e1a584beeac365b101f81/0/snack-burguer-."
      },
      {
        name: "Batata, Calabresa, bacon e cheddar",
        price: "R$ 50,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1769664923482blob_600.webp",
        link: "https://pedido.anota.ai/product/682cdda8a9d46608b8b5118e/0/snack-burguer-."
      },
      {
        name: "Meia porção de batata, calabresa, cheddar e bacon",
        price: "R$ 25,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747852150725blob_600.webp",
        link: "https://pedido.anota.ai/product/682e1b78d18cee3d39193009/0/snack-burguer-."
      },
      {
        name: "Picanha assada na brasa",
        price: "R$ 80,00",
        desc: "Acompanha mandioca cozida.",
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747852584627blob_600.webp",
        link: "https://pedido.anota.ai/product/682cdda8a9d46608b8b51194/0/snack-burguer-."
      },
      {
        name: "Meia porção de picanha na brasa",
        price: "R$ 40,00",
        desc: "Acompanha mandioca cozida.",
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747852584627blob_600.webp",
        link: "https://pedido.anota.ai/product/682e1d2a2ea686f9169a6cfc/0/snack-burguer-."
      },
      {
        name: "Coxinha empanada",
        price: "R$ 55,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747812980060blob_600.webp",
        link: "https://pedido.anota.ai/product/682cdda8a9d46608b8b5118f/0/snack-burguer-."
      },
      {
        name: "Meia porção de coxinha empanada",
        price: "R$ 27,50",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747852243102blob_600.webp",
        link: "https://pedido.anota.ai/product/682e1bd43391633547b6416a/0/snack-burguer-."
      },
      {
        name: "Filé de peito empanado",
        price: "R$ 50,00",
        desc: null,
        img: img1,
        link: "https://pedido.anota.ai/product/682cdda8a9d46608b8b51190/0/snack-burguer-."
      },
      {
        name: "Meia porção de filé de peito empanado",
        price: "R$ 25,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747852741952blob_600.webp",
        link: "https://pedido.anota.ai/product/682e1c7accb056af7947091b/0/snack-burguer-."
      },
      {
        name: "Calabresa acebolada",
        price: "R$ 43,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747813013259blob_600.webp",
        link: "https://pedido.anota.ai/product/682cdda8a9d46608b8b5118d/0/snack-burguer-."
      },
      {
        name: "Meia porção de calabresa acebolada",
        price: "R$ 21,50",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747852501215blob_600.webp",
        link: "https://pedido.anota.ai/product/682e1cd64beeac365b10c55c/0/snack-burguer-."
      },
      {
        name: "Batata frita G",
        price: "R$ 30,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747812936520blob_600.webp",
        link: "https://pedido.anota.ai/product/682cdda8a9d46608b8b51193/0/snack-burguer-."
      },
      {
        name: "Batata frita M",
        price: "R$ 27,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747812936520blob_600.webp",
        link: "https://pedido.anota.ai/product/682cdda8a9d46608b8b51192/0/snack-burguer-."
      },
      {
        name: "Batata frita P",
        price: "R$ 21,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747812936520blob_600.webp",
        link: "https://pedido.anota.ai/product/682cdda8a9d46608b8b51191/0/snack-burguer-."
      }
    ]
  },
  {
    category: "Lanches",
    items: [
      {
        name: "Juicy Burguer",
        price: "R$ 18,00",
        desc: "Pão brioche, hambúrguer, alface, tomate, cheddar e molho picante com barbecue.",
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747812501256blob_600.webp",
        link: "https://pedido.anota.ai/product/682cdda8a9d46608b8b51175/0/snack-burguer-."
      },
      {
        name: "Sensorial",
        price: "R$ 20,00",
        desc: "Pão brioche, alface, tomate, hambúrguer, creme cheddar, molho levemente picante, cebola roxa defumada e barbecue.",
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747812593409blob_600.webp",
        link: "https://pedido.anota.ai/product/682cdda8a9d46608b8b5117a/0/snack-burguer-."
      },
      {
        name: "X-burguer",
        price: "R$ 23,00",
        desc: "Pão brioche, hambúrguer, barbecue, alface, tomate, ovo, mussarela, cheddar e molho.",
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747812488057blob_600.webp",
        link: "https://pedido.anota.ai/product/682cdda8a9d46608b8b51176/0/snack-burguer-."
      },
      {
        name: "Griff Costela",
        price: "R$ 26,00",
        desc: "Pão brioche, alface, tomate, queijo cheddar, hambúrguer de costela, cebola defumada na brasa, ovo e mussarela.",
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747812444504blob_600.webp",
        link: "https://pedido.anota.ai/product/682cdda8a9d46608b8b51178/0/snack-burguer-."
      },
      {
        name: "Classic Burguer",
        price: "R$ 30,00",
        desc: "Pão brioche, hambúrguer, alface, tomate, cheddar, ovo, mussarela, bacon, banana, barbecue e molho.",
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747812541224blob_600.webp",
        link: "https://pedido.anota.ai/product/682cdda8a9d46608b8b51179/0/snack-burguer-."
      },
      {
        name: "Snack",
        price: "R$ 26,00",
        desc: "Pão brioche, alface, tomate, hambúrguer, ovo, mussarela, barbecue, cebola caramelizada e queijo.",
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747810247911blob_600.webp",
        link: "https://pedido.anota.ai/product/682cdda8a9d46608b8b5117c/0/snack-burguer-."
      },
      {
        name: "Snack Frango",
        price: "R$ 23,00",
        desc: "Pão brioche, alface, tomate, batata palha, filé de frango empanado, ovo, mussarela e molho.",
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747812464720blob_600.webp",
        link: "https://pedido.anota.ai/product/682cdda8a9d46608b8b51177/0/snack-burguer-."
      },
      {
        name: "Monster Burguer",
        price: "R$ 34,00",
        desc: "Pão brioche, alface, tomate, 2 hambúrgueres, bacon, creme cheddar, 3 ovos, 3 fatias de mussarela, molho e cebola.",
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747812520480blob_600.webp",
        link: "https://pedido.anota.ai/product/682cdda8a9d46608b8b51184/0/snack-burguer-."
      },
      {
        name: "Super Monster",
        price: "R$ 56,00",
        desc: "3 camadas de pão brioche, 3 hambúrgueres, banana, alface, tomate, 3 ovos, 3 fatias de mussarela, 2 camadas de bacon e molho.",
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747812558654blob_600.webp",
        link: "https://pedido.anota.ai/product/682cdda8a9d46608b8b51185/0/snack-burguer-."
      },
      {
        name: "Picanha Burguer",
        price: "R$ 30,00",
        desc: "Pão brioche, tomate, tiras de picanha, alface, cebola, mussarela, barbecue e molho.",
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747810776766blob_600.webp",
        link: "https://pedido.anota.ai/product/682cdda8a9d46608b8b5117f/0/snack-burguer-."
      },
      {
        name: "Snack Cuiabano",
        price: "R$ 30,00",
        desc: "Pão brioche, cheddar, bacon, hambúrguer de linguiça cuiabana e cebola defumada na brasa.",
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747810401530blob_600.webp",
        link: "https://pedido.anota.ai/product/682cdda8a9d46608b8b5117d/0/snack-burguer-."
      },
      {
        name: "Duplo Smash",
        price: "R$ 30,00",
        desc: "Pão brioche, 2 hambúrgueres, alface, tomate, cebola crispy, 2 fatias de mussarela, barbecue e molho.",
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747810998375blob_600.webp",
        link: "https://pedido.anota.ai/product/682cdda8a9d46608b8b51181/0/snack-burguer-."
      },
      {
        name: "Colony Burguer",
        price: "R$ 30,00",
        desc: "Pão brioche, alface, tomate, 2 hambúrgueres, queijo cheddar e cebola caramelizada no vinho.",
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747810896983blob_600.webp",
        link: "https://pedido.anota.ai/product/682cdda8a9d46608b8b51180/0/snack-burguer-."
      },
      {
        name: "Filé Burguer",
        price: "R$ 33,00",
        desc: "Pão brioche, alface, tomate, tiras de filé mignon, cebola defumada, mussarela, barbecue e molho.",
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747812611554blob_600.webp",
        link: "https://pedido.anota.ai/product/682cdda8a9d46608b8b51183/0/snack-burguer-."
      },
      {
        name: "Toscana Burguer",
        price: "R$ 24,00",
        desc: "Pão brioche, alface, linguiça toscana na brasa, tomate, ovo, mussarela, cebola, barbecue e molho.",
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747810487380blob.webp",
        link: "https://pedido.anota.ai/product/EXEMPLO"
      },
      {
        name: "Durack",
        price: "R$ 33,00",
        desc: "Pão brioche, alface, tomate, hambúrguer, banana, mel, queijo coalho.",
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747811149889blob.webp",
        link: "https://pedido.anota.ai/product/EXEMPLO"
      }
    ]
  }
];

export default function Menu() {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const searchTerm = queryParams.get("search")?.toLowerCase() || "";
  
  const [currentIndex, setCurrentIndex] = useState(-1);
  const matchRefs = useRef([]);

  // Encontra todos os itens que dão match
  const matches = useMemo(() => {
    const found = [];
    if (!searchTerm) return found;

    MENU_DATA.forEach((section, sIdx) => {
      section.items.forEach((item, iIdx) => {
        if (
          item.name.toLowerCase().includes(searchTerm) ||
          (item.desc && item.desc.toLowerCase().includes(searchTerm))
        ) {
          found.push({ sIdx, iIdx });
        }
      });
    });
    return found;
  }, [searchTerm]);

  // Resetar índice quando a busca mudar
  useEffect(() => {
    if (matches.length > 0) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(-1);
    }
  }, [searchTerm]);

  // Scroll suave para o item atual
  useEffect(() => {
    if (matches.length > 0 && matchRefs.current[currentIndex]) {
      matchRefs.current[currentIndex].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [currentIndex, matches]);

  const nextMatch = () => {
    setCurrentIndex((prev) => (prev + 1) % matches.length);
  };

  const prevMatch = () => {
    setCurrentIndex((prev) => (prev - 1 + matches.length) % matches.length);
  };

  return (
    <section className="menu-page">
      <header className="menu-header">
        <span className="tag">NOSSA ARTE</span>
        <h1>O Manifesto do Sabor</h1>
        <p>Cada ingrediente é selecionado localmente, cada hambúrguer é moldado à mão.</p>
        
        {searchTerm && (
          <div className="search-controls">
            <p className="search-results-text">
              Mostrando resultados para: <strong>{searchTerm}</strong>
            </p>
            
            {matches.length > 0 ? (
              <div className="navigation-box">
                <button onClick={prevMatch} className="nav-btn">⬅</button>
                <span className="counter">
                  {currentIndex + 1} de {matches.length}
                </span>
                <button onClick={nextMatch} className="nav-btn">➡</button>
              </div>
            ) : (
              <p>Nenhum item encontrado.</p>
            )}
          </div>
        )}
      </header>

      <div className="menu-container">
        {MENU_DATA.map((section, sIdx) => (
          <div key={sIdx} className="menu-section">
            <h2 className="section-title">{section.category}</h2>
            <div className="menu-grid">
              {section.items.map((item, iIdx) => {
                const matchIndex = matches.findIndex(
                  (m) => m.sIdx === sIdx && m.iIdx === iIdx
                );
                const isMatch = matchIndex !== -1;
                const isActive = isMatch && matchIndex === currentIndex;

                return (
                  <div 
                    key={iIdx} 
                    ref={(el) => {
                      if (isMatch) matchRefs.current[matchIndex] = el;
                    }}
                    className={`menu-item ${isMatch ? "highlight" : ""} ${isActive ? "active-match" : ""}`}
                  >
                    <div 
                      className="item-image" 
                      style={{ backgroundImage: `url(${item.img})` }}
                    />
                    <div className="item-info">
                      <div className="item-header">
                        <h3>{item.name}</h3>
                        <span className="price">{item.price}</span>
                      </div>
                      <p>{item.desc}</p>
                      <a href={item.link} target="_blank" rel="noreferrer" className="add-btn">
                        ADICIONAR AO PEDIDO
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/** 
 * EXEMPLO DE CSS PARA Menu.css:
 * 
 * .highlight {
 *   border: 2px solid rgba(255, 193, 7, 0.3);
 *   transition: all 0.3s ease;
 * }
 * 
 * .active-match {
 *   border: 2px solid #ffc107;
 *   box-shadow: 0 0 15px rgba(255, 193, 7, 0.5);
 *   transform: scale(1.02);
 *   z-index: 10;
 * }
 * 
 * .navigation-box {
 *   display: flex;
 *   align-items: center;
 *   gap: 15px;
 *   margin-top: 10px;
 *   justify-content: center;
 * }
 * 
 * .nav-btn {
 *   background: #ffc107;
 *   border: none;
 *   padding: 5px 15px;
 *   border-radius: 4px;
 *   cursor: pointer;
 *   font-weight: bold;
 * }
 */

/** 
 * EXEMPLO DE CSS PARA Menu.css:
 * 
 * .highlight {
 *   border: 2px solid rgba(255, 193, 7, 0.3);
 *   transition: all 0.3s ease;
 * }
 * 
 * .active-match {
 *   border: 2px solid #ffc107;
 *   box-shadow: 0 0 15px rgba(255, 193, 7, 0.5);
 *   transform: scale(1.02);
 *   z-index: 10;
 * }
 * 
 * .navigation-box {
 *   display: flex;
 *   align-items: center;
 *   gap: 15px;
 *   margin-top: 10px;
 *   justify-content: center;
 * }
 * 
 * .nav-btn {
 *   background: #ffc107;
 *   border: none;
 *   padding: 5px 15px;
 *   border-radius: 4px;
 *   cursor: pointer;
 *   font-weight: bold;
 * }
 */
