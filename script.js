/* =====================================================
   DADOS  (fatos conferidos no Projeto Portinari, MASP,
   Wikipédia e Outras Palavras — veja o rodapé do site)
   ===================================================== */
const works = [
  { id: "cafe", title: "Café", year: "1935", tag: "Trabalho rural",
    tech: "Óleo sobre tela", size: "130 × 195 cm", where: "Museu Nacional de Belas Artes, Rio de Janeiro",
    colors: ["#b4532a", "#5b7a4a", "#d9a441", "#7a4a2a"],
    story: [
      "A tela ficou pronta em 1935 e teve uma trajetória rápida: ainda naquele ano o governo federal a comprou do artista, por intermédio do ministro da Educação, Gustavo Capanema. É por isso que ela pertence hoje ao Museu Nacional de Belas Artes.",
      "No mesmo ano, Café recebeu uma segunda menção honrosa no Carnegie Institute, em Pittsburgh (EUA). Foi o primeiro prêmio de Portinari fora do Brasil, e ajudou a torná-lo conhecido internacionalmente.",
      "A cena é uma colheita: carregadores levam sacas, um feitor dirige o trabalho e uma mulher descalça aparece sentada em primeiro plano. As cores dominantes são tons de terra, ocre e verde."
    ],
    think: "Por que o artista colocaria uma mulher descalça e sentada bem na frente da cena, em vez de focar só em quem carrega as sacas?",
    q: { q: "Qual foi o prêmio que Café recebeu em 1935?", o: ["Medalha de ouro em Paris", "Menção honrosa no Carnegie Institute (EUA)", "Prêmio Nobel de Arte", "Grande prêmio da Bienal de São Paulo"], a: 1, e: "Foi a segunda menção honrosa do Carnegie Institute, em Pittsburgh, o primeiro prêmio do artista fora do Brasil." } },

  { id: "retirantes", title: "Retirantes", year: "1944", tag: "Denúncia social",
    tech: "Óleo sobre tela", size: "190 × 180 cm", where: "MASP, São Paulo",
    colors: ["#7d6b57", "#c9b79c", "#3b3028", "#8f5a3c"],
    story: [
      "Retirantes faz parte de um ciclo de cinco telas pintadas entre 1944 e 1945, logo depois da Série Bíblica. Elas mostram a migração de sertanejos que fogem da seca no Nordeste.",
      "O ciclo foi mostrado em Paris, em 1946. Dois anos depois, o diretor do MASP, Pietro Maria Bardi, viu as telas no ateliê do artista e convenceu o empresário Assis Chateaubriand a comprar três delas. Chateaubriand doou as obras ao museu, que guarda três das cinco até hoje."
    ],
    think: "Portinari pintou o Nordeste vivendo no Sudeste. Como a pintura pode fazer alguém sentir uma realidade que nunca viveu?",
    q: { q: "Quantas telas formam o ciclo dos retirantes (1944–1945)?", o: ["Duas", "Três", "Cinco", "Dez"], a: 2, e: "São cinco telas, e o MASP guarda três delas." } },

  { id: "crianca-morta", title: "Criança Morta", year: "1944", tag: "Denúncia social",
    tech: "Óleo sobre tela", size: "—", where: "MASP, São Paulo",
    colors: ["#1f3b57", "#9c8f86", "#5a3825", "#c9b79c"],
    story: [
      "Criança Morta pertence ao mesmo ciclo de Retirantes e é uma das obras mais comoventes do artista. Ela foi pintada depois de uma fase religiosa de Portinari, a Série Bíblica, e leva para a pintura o drama da fome e da seca.",
      "Repare na composição: a criança morta é carregada por adultos magros, com ossos aparentes e lágrimas enormes, em uma paisagem vazia e sob um céu azul-escuro. O arranjo lembra imagens religiosas clássicas de luto, como a Pietà."
    ],
    think: "As lágrimas aqui são exageradas de propósito. Que efeito esse exagero causa em quem olha?",
    q: { q: "O ciclo de Retirantes e Criança Morta foi pintado depois de qual série?", o: ["Série Bíblica", "Série Café", "Série Guerra", "Série Pampulha"], a: 0, e: "Segundo o MASP, o ciclo seguiu a Série Bíblica." } },

  { id: "meninos", title: "Meninos de Brodowski", year: "1946", tag: "Infância",
    tech: "Principalmente óleo sobre cartão", size: "Série de cerca de 20 obras", where: "Pintada em Brodowski (SP)",
    colors: ["#d9a441", "#2f5d7c", "#b4532a", "#f1e6d3"],
    story: [
      "Em janeiro e fevereiro de 1946, Portinari voltou à sua cidade natal e passou dois meses pintando crianças de Brodowski. O resultado foi uma série de cerca de 20 obras.",
      "Ele trabalhou principalmente com tinta a óleo sobre cartão, o que criou desafios técnicos: o óleo não pode ser corrigido depois de aplicado. Por isso o artista descreveu o processo como uma improvisação, comparando-o à têmpera, ao afresco e à gravura."
    ],
    think: "Depois de tantas obras sobre fome e guerra, o que muda no clima de uma série dedicada a brincadeiras de criança?",
    q: { q: "Quanto tempo Portinari ficou em Brodowski pintando a série de 1946?", o: ["Dois meses (janeiro e fevereiro)", "Dois anos", "Duas semanas", "Um único dia"], a: 0, e: "Ele passou janeiro e fevereiro de 1946 em Brodowski." } },

  { id: "biblioteca", title: "Murais da Biblioteca do Congresso", year: "1941", tag: "Murais",
    tech: "Têmpera (quatro murais)", size: "—", where: "Biblioteca do Congresso, Washington (EUA)",
    colors: ["#2f5d7c", "#d9a441", "#5b7a4a", "#f1e6d3"],
    story: [
      "Em 1940, o poeta Archibald MacLeish, diretor da Biblioteca do Congresso dos Estados Unidos, convidou Portinari para criar uma obra emblemática da arte latino-americana. No ano seguinte, o artista viajou aos EUA para pintar os murais.",
      "São quatro murais em têmpera, feitos para a Hispanic Foundation. Eles tratam de momentos da colonização, como o descobrimento, o desbravamento da floresta, a catequese e a descoberta do ouro, dando destaque a trabalhadores, indígenas e figuras populares.",
      "Em 1941, Portinari escreveu a um amigo que aquela era a sua obra-prima até então, o melhor trabalho que havia feito."
    ],
    think: "Por que um país estrangeiro encomendaria uma obra sobre a história da América Latina a um artista brasileiro?",
    q: { q: "Quem convidou Portinari para pintar os murais da Biblioteca do Congresso?", o: ["Oscar Niemeyer", "Archibald MacLeish", "Assis Chateaubriand", "Gustavo Capanema"], a: 1, e: "O poeta Archibald MacLeish, então diretor da Biblioteca do Congresso, fez o convite em 1940." } },

  { id: "guerra-paz", title: "Guerra e Paz", year: "1952–1956", tag: "Painéis da ONU",
    tech: "Painéis a óleo, cerca de 14 m × 10 m cada", size: "Dois painéis", where: "Sede da ONU, Nova York (EUA)",
    colors: ["#2b1d14", "#b4532a", "#2f5d7c", "#d9a441"],
    story: [
      "Os painéis foram inaugurados em 6 de setembro de 1957, no Hall dos Delegados da sede da ONU, em uma cerimônia discreta. Um dos maiores trabalhos da carreira de Portinari teve a ausência do próprio autor.",
      "O motivo foi político. Portinari era declaradamente comunista e, em plena era do macartismo, a perseguição a supostos comunistas nos Estados Unidos, não conseguiu entrar no país. O governo brasileiro chegou a sugerir que ele pedisse o visto aqui, mas ele queria um convite oficial de Washington, que nunca veio.",
      "Assim, a obra que fala de paz entre os povos foi vista pela primeira vez na ONU sem o seu criador."
    ],
    think: "Uma obra sobre paz e união entre as nações teve seu autor barrado por razões políticas. Que ironia há nisso?",
    q: { q: "Por que Portinari não esteve na inauguração de Guerra e Paz?", o: ["Estava doente demais para viajar", "Não conseguiu entrar nos EUA por ser comunista", "Não foi convidado pelo governo brasileiro", "Preferiu ficar em Brodowski"], a: 1, e: "Em plena era do macartismo, ele não conseguiu entrar nos Estados Unidos." } },

  { id: "pampulha", title: "Igreja de São Francisco de Assis", year: "1943–1944", tag: "Arte sacra moderna",
    tech: "Painéis, mural e azulejos", size: "14 painéis da Via-Sacra", where: "Pampulha, Belo Horizonte (MG)",
    colors: ["#2f5d7c", "#f1e6d3", "#d9a441", "#5a3825"],
    story: [
      "A igreja foi concluída em 1943, por iniciativa de Juscelino Kubitschek, então prefeito de Belo Horizonte, com projeto de Oscar Niemeyer. Portinari pintou 14 painéis da Via-Sacra no interior, painéis figurativos na parte externa e o mural atrás do altar de São Francisco.",
      "O resultado era moderno demais para a Igreja da época. O arcebispo Dom Antônio dos Santos Cabral considerou o templo impróprio para fins religiosos e, por cerca de 14 anos, não houve cultos católicos no local.",
      "A igreja só foi consagrada em abril de 1959. Em 2016, o Conjunto Moderno da Pampulha recebeu o título de Patrimônio Mundial da UNESCO."
    ],
    think: "O que torna uma obra “moderna demais” para uma instituição tradicional? Isso ainda acontece hoje?",
    q: { q: "Em que ano a Igreja da Pampulha foi finalmente consagrada?", o: ["1943", "1950", "1959", "1962"], a: 2, e: "Concluída em 1943, ela só foi consagrada em abril de 1959." } }
];

const curios = [
  ["🏛️", "Café foi comprado no mesmo ano", "Pintado em 1935, Café foi adquirido pelo governo federal naquele mesmo ano, pelo ministro Gustavo Capanema."],
  ["🏠", "A casa onde ele cresceu virou museu", "O Museu Casa de Portinari, em Brodowski, abriu em 14 de março de 1970 e guarda 656 objetos, entre obras e pertences da família."],
  ["🖼️", "Murais na parede de casa", "Na casa de Brodowski, Portinari pintou murais direto nas paredes e na pequena Capela da Nonna, usando afresco e têmpera."],
  ["📚", "“Minha obra-prima”", "Em 1941, ele escreveu a um amigo que os murais da Biblioteca do Congresso, nos EUA, eram o melhor trabalho que tinha feito até então."],
  ["🇫🇷", "Retirantes em Paris", "O ciclo dos retirantes foi exibido em Paris em 1946, dois anos antes de o MASP comprar três das telas."],
  ["🚫", "O artista barrado", "Guerra e Paz foi inaugurado na ONU em 1957, mas Portinari não conseguiu entrar nos EUA para ver a cerimônia."],
  ["⛪", "Igreja sem missa", "A Igreja da Pampulha ficou cerca de 14 anos sem cultos, porque a arquitetura e a arte foram consideradas modernas demais."],
  ["🌍", "Patrimônio da humanidade", "Em 2016, o Conjunto Moderno da Pampulha, onde está a igreja com painéis de Portinari, virou Patrimônio Mundial da UNESCO."]
];

const placesData = [
  ["Rio de Janeiro", "Museu Nacional de Belas Artes", "Aqui fica Café (1935), adquirida pelo governo federal no ano em que foi pintada."],
  ["São Paulo", "MASP", "O museu guarda três das cinco telas do ciclo dos retirantes, entre elas Retirantes e Criança Morta."],
  ["Belo Horizonte", "Igreja da Pampulha", "Painéis, Via-Sacra e mural do altar, no Conjunto Moderno da Pampulha (Patrimônio Mundial)."],
  ["Brodowski (SP)", "Museu Casa de Portinari", "A casa de infância, com murais em afresco e têmpera pintados pelo próprio artista."],
  ["Nova York (EUA)", "Sede da ONU", "Guerra e Paz, no Hall dos Delegados. As visitas seguem as regras da organização."],
  ["Washington (EUA)", "Biblioteca do Congresso", "Quatro murais em têmpera pintados em 1941 para a Hispanic Foundation."]
];

const gloss = [
  ["Afresco", "Pintura feita sobre a parede ainda úmida, de modo que a tinta fica integrada a ela."],
  ["Têmpera", "Tinta feita com pigmento misturado a uma substância aglutinante, como a gema de ovo. Muito usada em murais."],
  ["Óleo sobre cartão", "Pintura a óleo feita sobre um suporte de cartão, mais rígido e barato que a tela."],
  ["Suporte", "Material sobre o qual se pinta: tela, cartão, madeira, papel ou parede."],
  ["Série ou ciclo", "Conjunto de obras ligadas por um mesmo tema, como o ciclo dos retirantes."],
  ["Menção honrosa", "Distinção dada em concursos e exposições a obras de destaque, abaixo do prêmio principal."],
  ["Via-Sacra", "Sequência de 14 cenas que representam o caminho de Jesus até a crucificação."],
  ["Pietà", "Imagem religiosa clássica de uma mãe com o filho morto nos braços."],
  ["Macartismo", "Perseguição a supostos comunistas nos Estados Unidos, nos anos 1950."],
  ["Consagrar", "Realizar a cerimônia que autoriza o uso de uma igreja para cultos."],
  ["Patrimônio Mundial", "Título dado pela UNESCO a lugares de valor excepcional para toda a humanidade."],
  ["Retirante", "Pessoa que deixa sua região por causa da seca, da fome ou da falta de trabalho."]
];

const quizData = [
  { q: "Quem comprou a tela Café em 1935 em nome do governo federal?", o: ["Gustavo Capanema", "Assis Chateaubriand", "Juscelino Kubitschek", "Archibald MacLeish"], a: 0, e: "A compra foi feita por intermédio do ministro da Educação, Gustavo Capanema." },
  { q: "Quem convenceu Chateaubriand a comprar três telas do ciclo dos retirantes?", o: ["Oscar Niemeyer", "Pietro Maria Bardi", "Lúcio Costa", "Juscelino Kubitschek"], a: 1, e: "O diretor do MASP, Pietro Maria Bardi, viu as telas no ateliê em 1948." },
  { q: "Em qual cidade o ciclo dos retirantes foi exibido em 1946?", o: ["Roma", "Paris", "Londres", "Madri"], a: 1, e: "As telas foram mostradas em Paris em 1946." },
  { q: "Em 1946, quanto tempo Portinari ficou em Brodowski para pintar as crianças?", o: ["Dois meses", "Dois anos", "Duas semanas", "Um dia"], a: 0, e: "Ele esteve lá em janeiro e fevereiro." },
  { q: "Qual técnica Portinari usou nos murais da Biblioteca do Congresso?", o: ["Aquarela", "Têmpera", "Gravura", "Pastel"], a: 1, e: "São quatro murais em têmpera." },
  { q: "Em que ano Guerra e Paz foi inaugurado na ONU?", o: ["1952", "1956", "1957", "1962"], a: 2, e: "A inauguração foi em 6 de setembro de 1957. Os painéis foram pintados entre 1952 e 1956." },
  { q: "Por que Portinari não foi à inauguração de Guerra e Paz?", o: ["Não gostava de viajar", "Não conseguiu entrar nos EUA por ser comunista", "Estava preso", "A ONU não o convidou"], a: 1, e: "Em plena era do macartismo, ele não conseguiu entrar nos Estados Unidos." },
  { q: "Quantos painéis da Via-Sacra Portinari pintou na Igreja da Pampulha?", o: ["7", "10", "14", "21"], a: 2, e: "São 14 painéis, número tradicional das estações da Via-Sacra." },
  { q: "Em que ano a Igreja da Pampulha foi consagrada?", o: ["1943", "1950", "1959", "1962"], a: 2, e: "Só em abril de 1959, depois de anos de resistência da Igreja." },
  { q: "Onde fica o Museu Casa de Portinari?", o: ["Rio de Janeiro", "Belo Horizonte", "Brodowski", "Paris"], a: 2, e: "Em Brodowski (SP), na casa onde ele viveu na infância." },
  { q: "O que o título de Patrimônio Mundial de 2016 reconheceu?", o: ["O Palácio Capanema", "O Conjunto Moderno da Pampulha", "O MASP", "O Museu Casa de Portinari"], a: 1, e: "A UNESCO reconheceu o Conjunto Moderno da Pampulha, que inclui a igreja." },
  { q: "Depois de qual série foi pintado o ciclo dos retirantes?", o: ["Série Bíblica", "Série Café", "Série Pampulha", "Série Guerra"], a: 0, e: "Segundo o MASP, ele seguiu a Série Bíblica." }
];

const orderEvents = [
  ["Nasce em Brodowski", 1903],
  ["Ganha o Prêmio de Viagem e vai à Europa", 1928],
  ["Café recebe menção honrosa no Carnegie Institute", 1935],
  ["Pinta os murais da Biblioteca do Congresso, nos EUA", 1941],
  ["Pinta o ciclo dos retirantes", 1944],
  ["Guerra e Paz é inaugurado na ONU", 1957],
  ["Morre no Rio de Janeiro", 1962]
];

const tfData = [
  ["Portinari esteve presente na inauguração de Guerra e Paz, na ONU.", false, "Ele não conseguiu entrar nos EUA, em plena era do macartismo."],
  ["A Igreja da Pampulha ficou anos sem ser consagrada por causa de sua arte e arquitetura modernas.", true, "O arcebispo da época a considerou imprópria para fins religiosos. Ela foi consagrada em 1959."],
  ["O Museu Casa de Portinari fica no Rio de Janeiro.", false, "Fica em Brodowski, no interior de São Paulo."],
  ["A série Meninos de Brodowski foi pintada em 1946, na própria cidade.", true, "Ele passou janeiro e fevereiro de 1946 lá."],
  ["O quadro Café foi comprado pelo governo federal ainda em 1935.", true, "A compra foi feita pelo ministro Gustavo Capanema."],
  ["O MASP possui as cinco telas do ciclo dos retirantes.", false, "O museu tem três das cinco."],
  ["Os murais da Biblioteca do Congresso foram feitos em têmpera.", true, "São quatro murais em têmpera, de 1941."],
  ["Quem convidou Portinari para os murais da Biblioteca do Congresso foi um poeta.", true, "Archibald MacLeish, poeta e diretor da Biblioteca."]
];

const memPairs = [
  ["Café", "Museu Nacional de Belas Artes (RJ)"],
  ["Retirantes", "MASP (São Paulo)"],
  ["Guerra e Paz", "Sede da ONU (Nova York)"],
  ["Igreja de São Francisco", "Pampulha (Belo Horizonte)"],
  ["Murais de 1941", "Biblioteca do Congresso (EUA)"],
  ["Meninos de Brodowski", "Pintados em Brodowski (SP)"]
];

const guessData = [
  { id: "cafe", clues: ["O governo federal comprou esta obra no mesmo ano em que ela foi pintada.", "Ela recebeu uma menção honrosa em Pittsburgh, nos EUA.", "A cena mostra carregadores de sacas e um feitor numa colheita."] },
  { id: "meninos", clues: ["Foi produzida em 1946, em apenas dois meses.", "Foi pintada na cidade natal do artista.", "Usa principalmente óleo sobre cartão e reúne cerca de 20 obras."] },
  { id: "biblioteca", clues: ["Foi pintada em 1941, depois do convite de um poeta.", "São quatro murais feitos em têmpera.", "Ficam em uma biblioteca nos Estados Unidos."] },
  { id: "guerra-paz", clues: ["Foi inaugurada em 6 de setembro de 1957.", "O artista não pôde ir à cerimônia.", "São dois painéis enormes, de cerca de 14 m por 10 m cada."] },
  { id: "pampulha", clues: ["Foi concluída em 1943, por iniciativa de um prefeito.", "Tem 14 painéis da Via-Sacra.", "Ficou anos sem cultos e hoje faz parte de um Patrimônio Mundial."] }
];

/* =====================================================
   UTILIDADES
   ===================================================== */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const shuffle = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const byId = id => works.find(w => w.id === id);

function artHTML(w, caption = true) {
  const sizes = [170, 120, 95, 70];
  const pos = [["-30px", "auto", "auto", "-20px"], ["auto", "-25px", "-30px", "auto"], ["34px", "38%", "auto", "auto"], ["auto", "18%", "14px", "auto"]];
  const blobs = w.colors.map((c, i) => `<span class="blob" style="width:${sizes[i]}px;height:${sizes[i]}px;background:${c};top:${pos[i][0]};right:${pos[i][1]};bottom:${pos[i][2]};left:${pos[i][3]};opacity:.92"></span>`).join("");
  return `<div style="position:absolute;inset:0;background:${w.colors[3]}55">${blobs}</div>
    <img src="img/${w.id}.jpg" alt="${w.title}" loading="lazy" onload="const c=this.parentElement.querySelector('figcaption');if(c)c.remove()" onerror="this.remove()">
    ${caption ? '<figcaption>Ilustração abstrata · veja a obra real no Projeto Portinari</figcaption>' : ''}`;
}

/* menu, progresso, revelar */
$("#menuBtn").onclick = () => { const o = $("#nav").classList.toggle("open"); $("#menuBtn").setAttribute("aria-expanded", o); };
$$("#nav a").forEach(a => a.addEventListener("click", () => $("#nav").classList.remove("open")));
window.addEventListener("scroll", () => {
  const h = document.documentElement;
  $("#progress").style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight) * 100) + "%";
  $("#toTop").classList.toggle("show", h.scrollTop > 600);
});
$("#toTop").onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .12 });
$$(".reveal").forEach(el => io.observe(el));

/* =====================================================
   HISTÓRIAS DAS OBRAS
   ===================================================== */
let cur = 0;
const tabs = $("#workTabs"), story = $("#story");
works.forEach((w, i) => {
  const b = document.createElement("button");
  b.className = "tab"; b.setAttribute("role", "tab");
  b.innerHTML = `<i style="background:linear-gradient(135deg,${w.colors[0]},${w.colors[2]})"></i>${w.title}`;
  b.onclick = () => showWork(i, true);
  tabs.appendChild(b);
});

function showWork(i, scroll) {
  cur = i; const w = works[i];
  $$(".tab", tabs).forEach((t, k) => { t.classList.toggle("on", k === i); t.setAttribute("aria-selected", k === i); });
  story.style.animation = "none"; story.offsetHeight; story.style.animation = "";
  story.innerHTML = `
    <figure class="art">${artHTML(w)}</figure>
    <div>
      <span class="chip">${w.tag}</span>
      <h3>${w.title}</h3>
      <div class="ficha"><span><b>Ano:</b> ${w.year}</span><span><b>Técnica:</b> ${w.tech}</span><span><b>Tamanho:</b> ${w.size}</span><span><b>Onde está:</b> ${w.where}</span></div>
      ${w.story.map(p => `<p>${p}</p>`).join("")}
      <div class="think"><b>Para pensar:</b> ${w.think}</div>
      <div class="mini-ch"><h4>Mini desafio</h4><p>${w.q.q}</p><div id="mcOpts"></div><div id="mcExp"></div></div>
      <div class="story-nav">
        <button class="btn small ghost" id="prevW" ${i === 0 ? "disabled style='opacity:.3'" : ""}>← Anterior</button>
        <button class="btn small ghost" id="nextW" ${i === works.length - 1 ? "disabled style='opacity:.3'" : ""}>Próxima →</button>
      </div>
    </div>`;
  w.q.o.forEach((t, k) => {
    const b = document.createElement("button"); b.className = "opt"; b.textContent = t;
    b.onclick = () => {
      $$("#mcOpts .opt").forEach((x, n) => { x.disabled = true; if (n === w.q.a) x.classList.add("ok"); });
      if (k !== w.q.a) b.classList.add("no");
      $("#mcExp").innerHTML = `<div class="explain">${k === w.q.a ? "✅ Correto! " : "❌ Quase! "}${w.q.e}</div>`;
    };
    $("#mcOpts").appendChild(b);
  });
  $("#prevW").onclick = () => i > 0 && showWork(i - 1, true);
  $("#nextW").onclick = () => i < works.length - 1 && showWork(i + 1, true);
  if (scroll) $("#historias").scrollIntoView({ behavior: "smooth", block: "start" });
}
showWork(0, false);

/* =====================================================
   CURIOSIDADES
   ===================================================== */
const fl = $("#flips");
curios.forEach(c => {
  const b = document.createElement("button"); b.className = "flip";
  b.innerHTML = `<div class="in"><div class="f"><span>${c[0]}</span><b>${c[1]}</b></div><div class="b">${c[2]}</div></div>`;
  b.onclick = () => b.classList.toggle("on");
  fl.appendChild(b);
});

/* ONDE VER */
$("#places").innerHTML = placesData.map(p => `<div class="place"><small>${p[0]}</small><h3>${p[1]}</h3><p class="what">${p[2]}</p></div>`).join("");

/* GLOSSÁRIO */
function renderGlo(q = "") {
  const r = gloss.filter(g => (g[0] + " " + g[1]).toLowerCase().includes(q.toLowerCase()));
  $("#glo").innerHTML = r.map(g => `<div><b>${g[0]}</b><p>${g[1]}</p></div>`).join("") || "<p>Nenhum termo encontrado.</p>";
}
$("#gloSearch").addEventListener("input", e => renderGlo(e.target.value));
renderGlo();

/* =====================================================
   DESAFIOS: medalhas e abas
   ===================================================== */
const badgeDefs = [["quiz", "🏆 Quiz"], ["order", "⏳ Linha do tempo"], ["tf", "✔️ Verdadeiro ou falso"], ["mem", "🧠 Memória"], ["guess", "🔎 Adivinhe a obra"]];
let done = {};
try { done = JSON.parse(localStorage.getItem("portinari-done") || "{}"); } catch (e) {}
function renderBadges() {
  $("#badges").innerHTML = badgeDefs.map(b => `<span class="badge ${done[b[0]] ? "on" : ""}">${b[1]}</span>`).join("");
}
function markDone(k) {
  done[k] = true; try { localStorage.setItem("portinari-done", JSON.stringify(done)); } catch (e) {}
  renderBadges();
}
renderBadges();

$$("#chNav button").forEach(b => b.onclick = () => {
  $$("#chNav button").forEach(x => x.classList.toggle("on", x === b));
  $$(".panel").forEach(p => p.classList.add("hidden"));
  $("#ch-" + b.dataset.ch).classList.remove("hidden");
});

/* ---------- QUIZ ---------- */
const qb = $("#quizBox"); let qList = [], qi = 0, score = 0;
function startQuiz() {
  qList = shuffle(quizData).slice(0, 10).map(q => {
    const correct = q.o[q.a]; const opts = shuffle(q.o);
    return { ...q, o: opts, a: opts.indexOf(correct) };
  });
  qi = 0; score = 0; renderQuiz();
}
function renderQuiz() {
  if (qi >= qList.length) {
    const msg = score >= 9 ? "Você é especialista em Portinari! 🎨" : score >= 6 ? "Muito bem! Já conhece bastante." : "Releia as histórias e tente de novo!";
    qb.innerHTML = `<div class="result"><div class="big">${score}/${qList.length}</div><p>${msg}</p><br><button class="btn" id="qAgain">Jogar de novo</button></div>`;
    $("#qAgain").onclick = startQuiz; markDone("quiz"); return;
  }
  const q = qList[qi];
  qb.innerHTML = `<div class="q-top"><span>Pergunta ${qi + 1} de ${qList.length}</span><span>Acertos: ${score}</span></div>
    <div class="bar"><i style="width:${qi / qList.length * 100}%"></i></div><h3>${q.q}</h3><div id="qo"></div><div id="qe"></div>`;
  q.o.forEach((t, k) => {
    const b = document.createElement("button"); b.className = "opt"; b.textContent = t;
    b.onclick = () => {
      $$("#qo .opt").forEach((x, n) => { x.disabled = true; if (n === q.a) x.classList.add("ok"); });
      if (k === q.a) score++; else b.classList.add("no");
      $("#qe").innerHTML = `<div class="explain">${k === q.a ? "✅ Correto! " : "❌ Não foi dessa vez. "}${q.e}</div><button class="btn small" id="qn">${qi === qList.length - 1 ? "Ver resultado" : "Próxima"}</button>`;
      $("#qn").onclick = () => { qi++; renderQuiz(); };
    };
    $("#qo").appendChild(b);
  });
}
startQuiz();

/* ---------- LINHA DO TEMPO (ordenar) ---------- */
let nextIdx = 0, orderSorted = [];
function startOrder() {
  orderSorted = [...orderEvents].sort((a, b) => a[1] - b[1]);
  nextIdx = 0; $("#orderSlots").innerHTML = ""; $("#orderMsg").textContent = ""; $("#orderMsg").style.color = "";
  const list = $("#orderList"); list.innerHTML = "";
  shuffle(orderEvents).forEach(ev => {
    const b = document.createElement("button"); b.className = "chipbtn"; b.textContent = ev[0];
    b.onclick = () => {
      if (ev === orderSorted[nextIdx] || ev[1] === orderSorted[nextIdx][1]) {
        b.classList.add("used");
        const s = document.createElement("div"); s.className = "slot"; s.innerHTML = `<b>${ev[1]}</b>${ev[0]}`;
        $("#orderSlots").appendChild(s); nextIdx++;
        if (nextIdx === orderSorted.length) { $("#orderMsg").textContent = "🎉 Perfeito! A linha do tempo está completa."; markDone("order"); }
      } else {
        b.classList.remove("wrong"); b.offsetHeight; b.classList.add("wrong");
        $("#orderMsg").style.color = "var(--bad)"; $("#orderMsg").textContent = "Ainda não é esse. Pense no que veio antes.";
        setTimeout(() => { if (nextIdx < orderSorted.length) $("#orderMsg").textContent = ""; }, 1400);
      }
    };
    list.appendChild(b);
  });
}
$("#orderReset").onclick = startOrder; startOrder();

/* ---------- VERDADEIRO OU FALSO ---------- */
const tb = $("#tfBox"); let ti = 0, ts = 0, tList = [];
function startTF() { tList = shuffle(tfData); ti = 0; ts = 0; renderTF(); }
function renderTF() {
  if (ti >= tList.length) {
    tb.innerHTML = `<div class="result"><div class="big">${ts}/${tList.length}</div><p>${ts >= 7 ? "Excelente!" : "Boa tentativa! Releia as histórias."}</p><br><button class="btn" id="tfAgain">Jogar de novo</button></div>`;
    $("#tfAgain").onclick = startTF; markDone("tf"); return;
  }
  const t = tList[ti];
  tb.innerHTML = `<div class="q-top"><span>Afirmação ${ti + 1} de ${tList.length}</span><span>Acertos: ${ts}</span></div>
    <div class="bar"><i style="width:${ti / tList.length * 100}%"></i></div><h3>${t[0]}</h3>
    <div class="tf-btns"><button class="opt" data-v="1">Verdadeiro</button><button class="opt" data-v="0">Falso</button></div><div id="te"></div>`;
  $$(".tf-btns .opt").forEach(b => b.onclick = () => {
    const ans = b.dataset.v === "1";
    $$(".tf-btns .opt").forEach(x => { x.disabled = true; if ((x.dataset.v === "1") === t[1]) x.classList.add("ok"); });
    if (ans === t[1]) ts++; else b.classList.add("no");
    $("#te").innerHTML = `<div class="explain">${ans === t[1] ? "✅ Certo! " : "❌ Não é bem assim. "}${t[2]}</div><button class="btn small" id="tn">${ti === tList.length - 1 ? "Ver resultado" : "Próxima"}</button>`;
    $("#tn").onclick = () => { ti++; renderTF(); };
  });
}
startTF();

/* ---------- MEMÓRIA ---------- */
const mg = $("#memGrid"); let first = null, lock = false, moves = 0, found = 0;
function startMem() {
  mg.innerHTML = ""; first = null; lock = false; moves = 0; found = 0;
  $("#moves").textContent = 0; $("#pairs").textContent = 0; $("#memMsg").textContent = "";
  const cards = [];
  memPairs.forEach((p, i) => cards.push({ k: i, t: p[0], type: "obra" }, { k: i, t: p[1], type: "tema" }));
  shuffle(cards).forEach(c => {
    const el = document.createElement("button");
    el.className = "card " + c.type; el.setAttribute("aria-label", "Carta virada para baixo");
    el.innerHTML = `<div class="in"><div class="face front">?</div><div class="face back">${c.t}</div></div>`;
    el.onclick = () => {
      if (lock || el.classList.contains("flip") || el.classList.contains("done")) return;
      el.classList.add("flip");
      if (!first) { first = { el, c }; return; }
      moves++; $("#moves").textContent = moves;
      if (first.c.k === c.k && first.c.type !== c.type) {
        first.el.classList.add("done"); el.classList.add("done");
        first.el.classList.remove("flip"); el.classList.remove("flip");
        found++; $("#pairs").textContent = found; first = null;
        if (found === memPairs.length) { $("#memMsg").textContent = `🎉 Parabéns! Você terminou em ${moves} jogadas.`; markDone("mem"); }
      } else {
        lock = true; const f = first.el; first = null;
        setTimeout(() => { f.classList.remove("flip"); el.classList.remove("flip"); lock = false; }, 900);
      }
    };
    mg.appendChild(el);
  });
}
$("#memReset").onclick = startMem; startMem();

/* ---------- ADIVINHE A OBRA ---------- */
const gb = $("#guessBox"); let gi = 0, gScore = 0, gClue = 1, gList = [];
function startGuess() { gList = shuffle(guessData); gi = 0; gScore = 0; renderGuess(); }
function renderGuess() {
  if (gi >= gList.length) {
    const max = gList.length * 3;
    gb.innerHTML = `<div class="result"><div class="big">${gScore}/${max}</div><p>Quanto menos pistas você usa, mais pontos ganha.</p><br><button class="btn" id="gAgain">Jogar de novo</button></div>`;
    $("#gAgain").onclick = startGuess; markDone("guess"); return;
  }
  gClue = 1; drawGuess();
}
function drawGuess() {
  const g = gList[gi];
  gb.innerHTML = `<div class="q-top"><span>Obra ${gi + 1} de ${gList.length}</span><span>Pontos: ${gScore}</span></div>
    <div class="bar"><i style="width:${gi / gList.length * 100}%"></i></div>
    <h3>Que obra é esta?</h3>
    <ol class="clues">${g.clues.slice(0, gClue).map(c => `<li>${c}</li>`).join("")}</ol>
    ${gClue < 3 ? '<button class="btn small ghost" id="moreClue">Mostrar outra pista (vale menos)</button>' : ""}
    <div class="guess-opts" id="gOpts"></div><div id="gExp"></div>`;
  shuffle(guessData).forEach(o => {
    const w = byId(o.id); const b = document.createElement("button"); b.className = "opt"; b.textContent = w.title; b.dataset.id = o.id;
    b.onclick = () => {
      const ok = o.id === g.id; const pts = 4 - gClue;
      $$("#gOpts .opt").forEach(x => { x.disabled = true; if (x.dataset.id === g.id) x.classList.add("ok"); });
      if (ok) gScore += pts; else b.classList.add("no");
      const mc = $("#moreClue"); if (mc) mc.remove();
      $("#gExp").innerHTML = `<div class="explain">${ok ? `✅ Acertou! +${pts} ponto${pts > 1 ? "s" : ""}.` : `❌ A resposta era <b>${byId(g.id).title}</b>.`}</div><button class="btn small" id="gn">${gi === gList.length - 1 ? "Ver resultado" : "Próxima obra"}</button>`;
      $("#gn").onclick = () => { gi++; renderGuess(); };
    };
    $("#gOpts").appendChild(b);
  });
  const mc = $("#moreClue"); if (mc) mc.onclick = () => { gClue++; drawGuess(); };
}
startGuess();