let imagemAtual = 0;

function mostrarImagem(index) {
  const imagens = document.querySelectorAll(".carrossel-img");
  imagens.forEach((img) => img.classList.remove("active"));
  imagens[index].classList.add("active");
}

function iniciarCarrossel() {
  const imagens = document.querySelectorAll(".carrossel-img");
  setInterval(() => {
    imagemAtual = (imagemAtual + 1) % imagens.length;
    mostrarImagem(imagemAtual);
  }, 3000); // Troca a cada 3 segundos
}

document.addEventListener("DOMContentLoaded", iniciarCarrossel);

const textos = {
  pt: {
    headerTitle: "Meu Portfólio",
    nav: ["Início", "Sobre", "Projetos", "Habilidades", "Contato"],
    heroTitle: "Olá, Eu sou a Sara Kozoski",
    heroSubtitle: "Estudante e Desenvolvedora Back-End",
    // heroText: "Crio experiências digitais com foco em design, performance e usabilidade.",
    sobreTitle: "",
    sobreText:
    ' No Brasil eu estudava no Instituto Federal Catarinense - Campus Araquari onde eu fazia o ensino médio integrado ao curso técnico de informatica para a internet onde aprendi a programar em diversas linguagens como <span class="linguagem">HTML</span>, <span class="linguagem">CSS</span>, <span class="linguagem">JavaScript</span>, <span class="linguagem">Vue.js</span>, <span class="linguagem">MySQL</span> e <span class="linguagem">React</span>, onde descobri que prefiro ser desenvolvedora back-end e fiz vários projetos ao longo dos 2 anos, participei de um projeto extra classe onde ensinamos robótica para crianças e também onde eu tinha um projeto de automação de hortas residenciais para auxiliar as pessoas que não tem tempo de cuidar de suas hortas e também poder melhorar a assertividade na quantidade de umidade e nutrientes que o solo deve ter em plantações pequenas. ',
    sobreTitle2: "Sobre Mim",
    sobreText2:'Me chamo Sara Kozoski, nasci no ano de 2008 atualmente tenho 16 anos, Sou brasileira nascida na cidade de Curitiba,PR e atualmente moro na Itália na cidade de Luserna San Giovanni,TO. Moro com meus pais (Moroni e Vanessa} e  com meu irmão mais novo (Guilherme), Sou atleta de Tênis de Mesa pratico o esporte a 3 anos,',
    projetosTitle: "Projetos em Destaque",
    habilidadesTitle: "Habilidades",
    contatoTitle: "Contato",
    inputNome: "Seu nome",
    inputEmail: "Seu e-mail",
    inputMsg: "Sua mensagem...",
    enviar: "Enviar",
    footer: "© 2025 Sara Kozoski — Todos os direitos reservados.",
  },
  en: {
    headerTitle: "My Portfolio",
    nav: ["Home", "About", "Projects", "Skills", "Contact"],
    heroTitle: "Hi, I'm Sara Kozoski",
    heroSubtitle: "Student and Back-End Developer",
    // heroText: "I create digital experiences focused on design, performance, and usability.",
    sobreTitle: "",
    sobreText:
      ' In Brazil, I studied at the Federal Institute of Santa Catarina - Araquari Campus, where I took a high school integrated with a technical course in Internet Informatics. There, I learned to program in several languages like <span class="linguagem">HTML</span>, <span class="linguagem">CSS</span>, <span class="linguagem">JavaScript</span>, <span class="linguagem">Vue.js</span>, <span class="linguagem">MySQL</span> and <span class="linguagem">React</span>. I discovered that I prefer to be a back-end developer and did several projects over two years. I also participated in an extracurricular project where we taught robotics to children and developed an automated home garden project to help people who dont have time to take care of their gardens and to improve the accuracy of moisture and nutrients in small plantations.',
    sobreTitle2: "About Me",
    sobreText2: "My name is Sara Kozoski. I was born in 2008, and I am currently 16 years old. I am Brazilian, born in Curitiba, PR, and currently live in Italy, in the city of Luserna San Giovanni, TO. I live with my parents (Moroni and Vanessa) and my younger brother (Guilherme). I am a table tennis athlete and have been practicing the sport for 3 years.",
    projetosTitle: "Featured Projects",
    habilidadesTitle: "Skills",
    contatoTitle: "Contact",
    inputNome: "Your name",
    inputEmail: "Your email",
    inputMsg: "Your message...",
    enviar: "Send",
    footer: "© 2025 Sara Kozoski — All rights reserved.",
  },
  
  it: {
    headerTitle: "Il Mio Portfolio",
    nav: ["Home", "Chi Sono", "Progetti", "Competenze", "Contatto"],
    heroTitle: "Ciao, Sono Sara Kozoski",
    heroSubtitle: "Studentessa e Sviluppatrice Back-End",
    // heroText: "Creo esperienze digitali con attenzione al design, alle prestazioni e all'usabilità.",
    sobreTitle: "",
    sobreText:
      ' In Brasile ho studiato all’Istituto Federale Catarinense - Campus Araquari, dove ho frequentato il liceo integrato con un corso tecnico in informatica per il web. Lì ho imparato a programmare in diversi linguaggi come <span class="linguagem">HTML</span>, <span class="linguagem">CSS</span>, <span class="linguagem">JavaScript</span>, <span class="linguagem">Vue.js</span>, <span class="linguagem">MySQL</span> e <span class="linguagem">React</span>. Ho scoperto di preferire lo sviluppo back-end e ho realizzato diversi progetti in due anni. Ho partecipato a un progetto extracurricolare dove insegnavamo robotica ai bambini e ho lavorato a un progetto di automazione degli orti domestici per aiutare chi non ha tempo di curare il proprio orto e per migliorare la precisione nell’umidità e nei nutrienti necessari in piccole coltivazioni.',
    sobreTitle2: "Chi Sono",
    sobreText2: "Mi chiamo Sara Kozoski, sono nata nel 2008 e attualmente ho 16 anni. Sono brasiliana, nata a Curitiba, PR, e attualmente vivo in Italia nella città di Luserna San Giovanni, TO. Vivo con i miei genitori (Moroni e Vanessa) e con mio fratello minore (Guilherme). Sono un’atleta di tennis tavolo e pratico questo sport da 3 anni.",
    projetosTitle: "Progetti in Evidenza",
    habilidadesTitle: "Competenze",
    contatoTitle: "Contatto",
    inputNome: "Il tuo nome",
    inputEmail: "La tua email",
    inputMsg: "Il tuo messaggio...",
    enviar: "Invia",
    footer: "© 2025 Sara Kozoski — Tutti i diritti riservati.",
  },  
};

// Função para atualizar o conteúdo da página
function atualizarIdioma(idioma) {
  const t = textos[idioma];
  document.getElementById("header-title").textContent = t.headerTitle;
  document.getElementById("nav-inicio").textContent = t.nav[0];
  document.getElementById("nav-sobre").textContent = t.nav[1];
  document.getElementById("nav-projetos").textContent = t.nav[2];
  document.getElementById("nav-habilidades").textContent = t.nav[3];
  document.getElementById("nav-contato").textContent = t.nav[4];
  document.getElementById("hero-title").textContent = t.heroTitle;
  document.getElementById("hero-subtitle").textContent = t.heroSubtitle;
  document.getElementById("hero-text").textContent = t.heroText;
  document.getElementById("sobre-title").textContent = t.sobreTitle;
  document.getElementById("sobre-text").innerHTML = t.sobreText;
  document.getElementById("sobre-title2").textContent = t.sobreTitle2;
  document.getElementById("sobre-text2").textContent = t.sobreText2;
  document.getElementById("projetos-title").textContent = t.projetosTitle;
  document.getElementById("habilidades-title").textContent = t.habilidadesTitle;
  document.getElementById("contato-title").textContent = t.contatoTitle;
  document.getElementById("input-nome").placeholder = t.inputNome;
  document.getElementById("input-email").placeholder = t.inputEmail;
  document.getElementById("input-msg").placeholder = t.inputMsg;
  document.getElementById("enviar-button").textContent = t.enviar;
  document.getElementById("footer-text").textContent = t.footer;
}

// Detecta a mudança de idioma
document
  .getElementById("language-selector")
  .addEventListener("change", function (event) {
    atualizarIdioma(event.target.value);
  });

// Inicializa com o idioma português
atualizarIdioma("it");
