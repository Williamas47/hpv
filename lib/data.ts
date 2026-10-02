export type Myth = { text: string; truth: boolean; why: string };
export type Question = { q: string; options: string[]; answer: number; why: string };

export const myths: Myth[] = [
  { text: "A vacina do HPV é só para meninas.", truth: false, why: "Meninos também devem se vacinar. A vacina protege contra verrugas genitais e cânceres de pênis, ânus e garganta." },
  { text: "A vacina do HPV previne vários tipos de câncer.", truth: true, why: "Principalmente o câncer do colo do útero, mas também vulva, vagina, pênis, ânus e orofaringe." },
  { text: "A vacina deixa a pessoa infértil.", truth: false, why: "Não há evidência científica disso. Milhões de doses já foram aplicadas no mundo com segurança." },
  { text: "Quem tomou a vacina não precisa usar preservativo.", truth: false, why: "A vacina não protege contra todos os tipos de HPV nem contra outras ISTs, como HIV e sífilis. O preservativo continua necessário." },
  { text: "O HPV só passa por relação sexual com penetração.", truth: false, why: "O contato pele a pele na região genital já pode transmitir o vírus. Por isso o preservativo reduz o risco, mas não o elimina." },
  { text: "A vacinação leva o adolescente a iniciar a vida sexual mais cedo.", truth: false, why: "Estudos não mostram essa relação. A vacina é mais eficaz justamente antes da primeira relação sexual." },
  { text: "A vacina é gratuita no SUS.", truth: true, why: "Está no calendário nacional de vacinação, sem custo, nas unidades básicas de saúde e em muitas escolas." },
  { text: "Quem já teve contato com o HPV não tem benefício em se vacinar.", truth: false, why: "A vacina não trata infecção existente, mas pode proteger contra outros tipos do vírus que a pessoa ainda não teve." },
  { text: "Muitas pessoas têm HPV e não sabem.", truth: true, why: "Na maioria das vezes não há sintomas, e o organismo elimina o vírus sozinho. Quando isso não ocorre, podem surgir lesões." },
  { text: "Quem se vacinou não precisa fazer o exame preventivo (Papanicolau) no futuro.", truth: false, why: "A vacina não cobre todos os tipos de HPV. Quem tem colo do útero deve fazer o exame na vida adulta." },
];

export const questions: Question[] = [
  { q: "Qual é a faixa etária da vacinação de rotina contra o HPV no SUS?", options: ["9 a 14 anos", "18 a 25 anos", "Só depois dos 30"], answer: 0, why: "A vacinação de rotina é de 9 a 14 anos, em dose única. Quem não foi vacinado e já passou dessa idade deve consultar a UBS." },
  { q: "Quantas doses são necessárias para o público de 9 a 14 anos?", options: ["Uma", "Três", "Uma por ano, para sempre"], answer: 0, why: "O Ministério da Saúde adotou o esquema de dose única, que já oferece boa proteção." },
  { q: "HPV é a sigla de…", options: ["Herpes Pele Viral", "Papilomavírus Humano", "Hepatite Pulmonar Viral"], answer: 1, why: "Papilomavírus Humano. Existem mais de 200 tipos, e alguns causam câncer." },
  { q: "Quando a vacina é mais eficaz?", options: ["Depois de ter HPV", "Antes do contato com o vírus", "Só quando há sintomas"], answer: 1, why: "Ela é preventiva: o ideal é vacinar-se antes de qualquer exposição ao vírus." },
  { q: "Onde é possível se vacinar?", options: ["Só em hospital particular", "Na UBS (posto de saúde) ou na escola", "Só com receita médica"], answer: 1, why: "A vacina é gratuita nas UBS e, em campanhas, nas escolas. Não é necessária receita médica." },
];

export const sources = [
  { label: "Ministério da Saúde: Vacinação contra HPV", href: "https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/h/hpv" },
  { label: "INCA: Vacina contra HPV", href: "https://www.gov.br/inca/pt-br/assuntos/cancer/prevencao/hpv" },
  { label: "OMS: Human papillomavirus", href: "https://www.who.int/news-room/fact-sheets/detail/cervical-cancer" },
];
