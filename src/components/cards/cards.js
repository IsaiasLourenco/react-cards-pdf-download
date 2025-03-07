import { jsPDF } from "jspdf";
import Card from "../card/card";
import Button from "../button/button";

const cardsTitle = [ 
  'A primeira profecia da Bíblia', 
  'Qual é o tema da Bíblia?', 
  'O que acontecerá no futuro?', 
  'Como devemos tratar os outros?', 
  'Como saber se uma organização religiosa está te enganando ao invés de te conduzir a Deus?', 
  'As pessoas serão recompensadas pela maneira que agem hoje?' 
];
const cardsSub = [ 
  'Já ouviu falar de profecias? Sabe qual foi a primeira?', 
  'O que é o Reino de Deus?', 
  'Qual será o futuro da humanidade?', 
  'Se alguém é mal comigo, devo pagar na mesma moeda?', 
  'Existem maneiras de saber se estamos sendo enganados?', 
  'Como saber quem será punido ou recompensado?' 
];
const cardsSub2 = [ 
  'Gênesis 3:15', 
  'Mateus 6:9,10', 
  'Apocalipse 21:3,4', 
  'Filipenses 2:3', 
  'Mateus 7:16-20 ', 
  'Salmos 37:9-11' 
];
const cardsParagraph = [ 
  'E porei inimizade entre você e a mulher, e entre o seu descendente e o descendente dela. Este esmagará a sua cabeça, e você ferirá o calcanhar dele.', 
  '“Portanto, orem do seguinte modo: Pai nosso, que estás nos céus, santificado seja o teu nome. Venha o teu Reino. Seja feita a tua vontade, como no céu, assim também na terra.”', 
  'Então ouvi uma voz alta do trono dizer: “Veja! A tenda de Deus está com a humanidade; ele residirá com eles, e eles serão o seu povo. O próprio Deus estará com eles. Ele enxugará dos seus olhos toda lágrima, e não haverá mais morte, nem haverá mais tristeza, nem choro, nem dor. As coisas anteriores já passaram.”', 
  'Não façam nada por rivalidadec nem por presunção; mas, com humildade, considerem os outros superiores a vocês.', 
  'Do mesmo modo, toda árvore boa produz fruto bom, mas toda árvore ruim produz fruto imprestável. A árvore boa não pode dar fruto imprestável, nem pode a árvore ruim produzir fruto bom. Toda árvore que não produz fruto bom é cortada e lançada no fogo. Realmente, então, pelos seus frutos vocês reconhecerão esses homens.', 
  'Pois os maus serão eliminados, mas os que esperam em Jeová possuirão a terra. Apenas mais um pouco, e os maus deixarão de existir; Você olhará para onde estavam,E eles não estarão lá. Mas os mansos possuirão a terra, e terão grande alegria na abundância de paz.' 
];

// Novo array com os textos exclusivos para o "Saiba Mais"
const saibaMaisText = [
  "A primeira profecia da Bíblia fala sobre uma promessa de Deus para resolver o problema do pecado e da morte. Essa promessa, ou essa semente, é o seu próprio filho Jesus Cristo, que veio nos salvar dando a sua própria vida em troca do nosso futuro, e agora é o Rei do Reino de Deus no céu desde 1914!",
  "A Bíblia tem um tema central: o Reino de Deus, que trará bênçãos para toda a humanidade. Esse reino fará isso através do seu Rei Jesus Cristo, que deu uma pequena demonstração do seu poder, no Primeiro Século, quando em forma humana, curou doentes, ressucitou mortos, e até fez a natureza se acalmar através da ordem emitida pela sua voz!",
  "O futuro da humanidade está ligado ao cumprimento das promessas divinas de um mundo sem sofrimento. Isso se dará através das ações do Reino de Deus e do seu Rei Jesus Cristo!",
  "Tratar os outros com amor e respeito é um princípio ensinado na Bíblia e essencial para uma vida feliz. Não só com respeito, mas com humildade e modéstia, qualidades amadas por Jeová Deus!",
  "Podemos identificar se uma organização religiosa é verdadeira observando seus frutos e ensinamentos. Além de seus frutos, mais do que ser local, ela deve ser uma organização mundial, com uma família unida que fala uma língua só, a língua pura, e é guiada pela nuvem de orientações, nunca deixando ensinamemntos humanos adentrarem seus princípios religiosos!",
  "As ações das pessoas hoje determinarão seu futuro conforme os princípios estabelecidos por Jeová. Tudo será retribuído a partir do que se faz hoje e no seu passado!"
];

// Função para gerar e baixar o PDF do card
const handleDownload = (title, sub, sub2, paragraph) => {
  const doc = new jsPDF();
  doc.setFontSize(16);
  doc.text(title, 10, 20);
  doc.setFontSize(12);
  doc.text(sub, 10, 40);
  doc.text(sub2, 10, 50);
  doc.text(paragraph, 10, 70, { maxWidth: 180 }); // Quebra de linha automática

  doc.save(`${title}.pdf`); // Nome do arquivo
};

// Função para mostrar mais informações
const handleSaibaMais = (index) => {
  alert(saibaMaisText[index]); // Agora ele pega o texto correto do array saibaMaisText
};

const Cards = () => {
  return (
    <div>
      <div className="cards-container">
        {cardsTitle.map((cardTitle, index) => {
          return (
            <Card key={index}>
              <h3>{cardTitle}</h3>
              <h4>{cardsSub[index]}</h4>
              <h4>{cardsSub2[index]}</h4>
              <p>{cardsParagraph[index]}</p>

              {/* Botões com funções */}
              <Button 
                Text="Download" 
                onClick={() => handleDownload(cardTitle, cardsSub[index], cardsSub2[index], cardsParagraph[index])} 
              />
              <Button 
                Text="Saiba Mais" 
                onClick={() => handleSaibaMais(index)} 
              />
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
