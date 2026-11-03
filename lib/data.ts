export type Statement = { text: string; truth: boolean; why: string };

export const myths: Statement[] = [
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

export const questions: Statement[] = [
  { text: "O HPV é um vírus.", truth: true, why: "HPV é a sigla de Papilomavírus Humano." },
  { text: "Só meninas podem contrair HPV.", truth: false, why: "Meninos e meninas podem contrair HPV." },
  { text: "A vacina é uma forma de prevenir o HPV.", truth: true, why: "A vacina é a principal forma de prevenção contra o HPV." },
  { text: "A vacinação contra o HPV é gratuita pelo SUS.", truth: true, why: "Ela está disponível sem custo nas UBS e, em campanhas, nas escolas." },
  { text: "Abraços e convívio social transmitem HPV.", truth: false, why: "Abraços e convívio social não transmitem HPV." },
  { text: "A infecção pelo HPV pode não causar sintomas.", truth: true, why: "Na maioria das vezes não há sintomas, e a pessoa nem sabe que tem o vírus." },
  { text: "O melhor momento para se vacinar é depois do contato com o HPV.", truth: false, why: "Vacinar antes do possível contato é o ideal." },
  { text: "Alguns tipos de HPV podem causar câncer.", truth: true, why: "Os tipos de alto risco, como 16 e 18, estão ligados ao câncer do colo do útero e a outros cânceres." },
  { text: "HPV é uma bactéria.", truth: false, why: "HPV é vírus, não bactéria." },
  { text: "A vacina contra o HPV é indicada apenas para meninas.", truth: false, why: "A vacina também é indicada para meninos." },
  { text: "Quem tem HPV sempre desenvolve câncer.", truth: false, why: "Ter HPV não significa desenvolver câncer. Na maioria dos casos, o organismo elimina o vírus." },
  { text: "A vacina previne doenças relacionadas ao HPV.", truth: true, why: "Ela protege contra verrugas genitais e cânceres ligados ao vírus." },
  { text: "O HPV pode ser transmitido mesmo sem sintomas.", truth: true, why: "Quem tem o vírus pode transmiti-lo mesmo sem perceber nenhum sinal." },
  { text: "A prevenção contra o HPV só começa na vida adulta.", truth: false, why: "A prevenção começa antes da vida adulta." },
  { text: "Vacinar-se é um cuidado com a saúde.", truth: true, why: "Vacinação é cuidado com a saúde." },
];

export const sources = [
  { label: "Ministério da Saúde: Vacinação contra HPV", href: "https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/h/hpv" },
  { label: "INCA: Vacina contra HPV", href: "https://www.gov.br/inca/pt-br/assuntos/cancer/prevencao/hpv" },
  { label: "OMS: Human papillomavirus", href: "https://www.who.int/news-room/fact-sheets/detail/cervical-cancer" },
];
