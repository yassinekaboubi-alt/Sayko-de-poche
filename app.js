/* Sayko de poche — v2.12
   App 100 % locale : aucune donnée ne quitte le téléphone. */
'use strict';

/* =====================================================================
   1. CONTENU
   ===================================================================== */
const DOMAINS = {
  fond: 'Fondations', rel: 'Relationnel & leadership', psy: 'Psychologie & neuromarketing',
  vente: 'Vente', offre: 'Offre & copywriting', nego: 'Négociation', mkt: 'Marketing & acquisition',
  test: 'Tester une idée', fin: 'Finance & gestion', jur: 'Juridique & fiscal', plan: 'Dossier de lancement'
};
const QUARTERS = [
  { t: 'T1 · Les bases', d: 'Comprendre comment marche un business et comment fonctionnent les gens.' },
  { t: 'T2 · Convaincre', d: 'Vendre, construire une offre, négocier.' },
  { t: 'T3 · Attirer des clients', d: 'Marketing, acquisition, et valider une idée sans capital.' },
  { t: 'T4 · Structurer', d: 'Chiffres, statut juridique, fiscalité, et ton dossier de lancement.' }
];
const MONTHS = [
  { n: 1, dom: 'fond', title: 'Comment marche un business',
    why: "C'est la carte d'ensemble : tout ce que tu apprendras ensuite viendra s'accrocher dessus.",
    res: [{ t: 'Le Personal MBA — Josh Kaufman', w: 'Livre (FR). Médiathèque ou livre audio.' },
          { t: 'GDIY — Matthieu Stefani', w: "Podcast. Choisis 4 épisodes d'entrepreneurs partis de zéro." }],
    acq: ["Expliquer les 5 fonctions d'un business : créer de la valeur, marketing, vente, livraison, finance",
          'Calculer une marge brute et une marge nette',
          "Distinguer chiffre d'affaires, bénéfice et trésorerie",
          "Décrire le modèle économique d'un commerce que je connais",
          'Résumer en 5 lignes les 3 idées du livre qui me servent le plus'],
    ex: "Analyse Mister Pizza comme un business : d'où vient l'argent, où il part, ce qui fait revenir les clients. Estime le prix de revient d'une pizza." },
  { n: 2, dom: 'rel', title: 'Relationnel & leadership',
    why: "Tu passes responsable d'équipe : c'est le moment idéal pour pratiquer sur le terrain.",
    res: [{ t: 'Comment se faire des amis — Dale Carnegie', w: 'Livre (FR). Médiathèque.' },
          { t: 'Le Manager Minute — Ken Blanchard', w: 'Livre court (FR). Se lit en une soirée.' },
          { t: 'Le Gratin — Pauline Laigneau', w: 'Podcast. Épisodes sur le management et la relation client.' }],
    acq: ["Pratiquer l'écoute active et la reformulation",
          'Faire un recadrage bienveillant et factuel',
          "Fixer un objectif clair et mesurable à quelqu'un de mon équipe",
          'Féliciter sur un fait précis, au moment où il se produit',
          'Retenir les prénoms et les détails des gens que je rencontre'],
    ex: "Chaque semaine, applique une technique de Carnegie ou de Blanchard avec ton équipe en gare et note ce qui a marché." },
  { n: 3, dom: 'psy', title: 'Psychologie & neuromarketing',
    why: 'Comprendre pourquoi les gens achètent, avant d\'apprendre à vendre.',
    res: [{ t: 'Influence et manipulation — Robert Cialdini', w: 'Livre (FR). La référence de la persuasion.' },
          { t: 'Système 1 / Système 2 — Daniel Kahneman', w: 'Livre (FR). Dense : lis les parties 1 et 4 en priorité.' },
          { t: 'Neuromarketing — Renvoisé & Morin', w: "Livre. Comment le cerveau prend une décision d'achat." }],
    acq: ['Reconnaître les principes de Cialdini : réciprocité, engagement, preuve sociale, autorité, sympathie, rareté',
          "Expliquer les biais d'ancrage, d'aversion à la perte et de cadrage",
          'Repérer ces leviers dans 5 pubs ou pages de vente',
          'Savoir où passe la frontière entre persuasion et manipulation'],
    ex: 'Prends 5 pubs TikTok ou Instagram et note, pour chacune, le levier psychologique utilisé et à qui elle parle.' },
  { n: 4, dom: 'vente', title: 'Vendre',
    why: 'La compétence qui fait vivre un business dès le premier jour.',
    res: [{ t: 'SPIN Selling — Neil Rackham', w: 'Livre (EN, ou résumés en FR). La vente par les questions.' },
          { t: "Chaîne YouTube d'Alex Hormozi", w: 'YouTube, sous-titres FR. Vidéos sur la vente et le closing.' }],
    acq: ['Mener une découverte du besoin avec des questions ouvertes (Situation, Problème, Implication, Nécessité)',
          'Répondre aux objections « c\'est trop cher », « je vais réfléchir », « pas maintenant »',
          'Présenter un bénéfice plutôt qu\'une caractéristique',
          'Proposer clairement la vente à la fin d\'un échange',
          'Conclure une vente réelle, même petite'],
    ex: 'Vends quelque chose pour de vrai : un objet sur Leboncoin, un service, peu importe. Débriefe : qu\'est-ce qui a déclenché le oui ?' },
  { n: 5, dom: 'offre', title: 'Offre & copywriting',
    why: 'Une bonne offre se vend presque toute seule.',
    res: [{ t: 'Offres à 100 millions $ — Alex Hormozi', w: "Livre (FR). L'équation de la valeur." },
          { t: "The Copywriter's Handbook — Robert Bly", w: 'Livre (EN). Les bases du texte qui vend.' }],
    acq: ["Utiliser l'équation de la valeur pour améliorer une offre",
          'Écrire une accroche qui parle du problème du client',
          'Rédiger une page de vente simple : problème, solution, preuve, offre, appel à l\'action',
          'Ajouter garantie, bonus et urgence de façon honnête',
          'Réécrire une offre existante pour la rendre plus forte'],
    ex: "Rédige l'offre complète d'un de tes projets comme si tu la lançais demain, puis fais-la lire à 2 personnes." },
  { n: 6, dom: 'nego', title: 'Négocier',
    why: 'Fournisseurs, loyer, partenaires : chaque point gagné est du bénéfice net.',
    res: [{ t: 'Ne coupez jamais la poire en deux — Chris Voss', w: 'Livre (FR). La négociation par un ex-négociateur du FBI.' },
          { t: 'Comment réussir une négociation — Fisher & Ury', w: 'Livre (FR). La méthode de Harvard.' }],
    acq: ['Préparer ma solution de repli (MESORE) avant de négocier',
          'Utiliser le miroir, l\'étiquetage et les questions calibrées',
          'Séparer la personne du problème, les intérêts des positions',
          'Ne jamais faire de concession sans contrepartie',
          'Mener une vraie négociation et en faire le bilan'],
    ex: 'Négocie quelque chose de réel : un prix, un abonnement, un loyer, un fournisseur. Note ta préparation et le résultat.' },
  { n: 7, dom: 'mkt', title: 'Les bases du marketing',
    why: 'Savoir à qui tu parles, et pourquoi on te choisirait toi.',
    res: [{ t: 'This Is Marketing — Seth Godin', w: 'Livre (existe en FR). Le marketing centré sur les gens.' },
          { t: 'HubSpot Academy — Inbound Marketing', w: 'Cours gratuit en ligne, avec certificat (academy.hubspot.com).' }],
    acq: ['Définir un client idéal précis pour un projet',
          'Formuler mon positionnement en une phrase',
          'Écrire une proposition de valeur claire',
          'Analyser 3 concurrents : prix, message, points faibles',
          'Obtenir le certificat HubSpot Inbound'],
    ex: 'Rédige la fiche client idéal et le positionnement de ton projet le plus avancé.' },
  { n: 8, dom: 'mkt', title: 'Acquérir des clients',
    why: "Transformer l'attention en clients, chiffres à l'appui.",
    res: [{ t: 'Google Ateliers Numériques', w: 'Formations gratuites en marketing digital, avec certificat.' },
          { t: 'Meta Blueprint', w: 'Cours gratuits sur la publicité Facebook et Instagram.' },
          { t: 'My First Million', w: "Podcast (EN). Des idées d'acquisition et de business." }],
    acq: ["Dessiner un tunnel d'acquisition : attention, intérêt, achat, fidélité",
          "Calculer un coût d'acquisition client (CAC)",
          'Calculer un taux de conversion à chaque étape du tunnel',
          'Calculer la valeur vie client et la comparer au CAC',
          'Choisir 1 ou 2 canaux adaptés à un projet'],
    ex: "Construis un petit tableau de suivi (CAC, conversion, valeur vie client) pour un projet, avec des chiffres réalistes. C'est aussi un exercice de data analyst." },
  { n: 9, dom: 'test', title: 'Tester une idée sans capital',
    why: 'Valider avant d\'investir, c\'est la meilleure protection de ton argent.',
    res: [{ t: 'The Mom Test — Rob Fitzpatrick', w: 'Livre court (EN). Interroger des clients sans se mentir.' },
          { t: 'Lean Startup — Eric Ries', w: 'Livre (FR). Construire, mesurer, apprendre.' }],
    acq: ['Poser des questions sur ce que les gens ont fait, pas sur ce qu\'ils feraient',
          'Mener 10 entretiens avec de vrais clients potentiels',
          'Définir le plus petit test possible d\'une idée',
          'Fixer à l\'avance le résultat qui valide ou invalide le test',
          'Décider sur des faits : continuer, ajuster ou abandonner'],
    ex: 'Choisis un projet, fais 10 entretiens, puis lance un mini-test à moins de 50 € (page d\'attente, précommande, annonce).' },
  { n: 10, dom: 'fin', title: 'Finance & gestion',
    why: 'Beaucoup de business rentables meurent faute de trésorerie.',
    res: [{ t: 'Bpifrance Création — fiches gestion et prévisionnel', w: 'Gratuit en ligne (bpifrance-creation.fr).' },
          { t: 'La comptabilité pour les Nuls', w: 'Livre (FR). Médiathèque.' }],
    acq: ['Lire un compte de résultat et un bilan simples',
          'Faire un plan de trésorerie sur 12 mois',
          'Calculer un seuil de rentabilité',
          'Séparer charges fixes et charges variables',
          'Construire un prévisionnel sur 3 ans pour un projet'],
    ex: 'Fais le prévisionnel complet (3 ans) et le plan de trésorerie (12 mois) de ton projet prioritaire.' },
  { n: 11, dom: 'jur', title: 'Juridique & fiscal',
    why: 'Choisir la bonne structure et te rémunérer intelligemment, légalement.',
    res: [{ t: 'Bpifrance Création — statuts juridiques', w: 'Gratuit en ligne, avec comparateur.' },
          { t: 'URSSAF — portail auto-entrepreneur', w: 'autoentrepreneur.urssaf.fr' },
          { t: 'service-public.fr et impots.gouv.fr', w: 'Sources officielles, gratuites.' },
          { t: 'CCI Nice Côte d\'Azur — « 5 jours pour entreprendre »', w: 'Formation en présentiel, à réserver à l\'avance.' }],
    acq: ['Comparer micro-entreprise, EURL, SASU et SAS',
          "Expliquer la différence entre impôt sur le revenu (IR) et impôt sur les sociétés (IS)",
          'Comparer salaire et dividendes, statut TNS et assimilé salarié',
          'Comprendre la franchise en base de TVA',
          'Savoir à quoi sert une holding et à partir de quand elle devient utile',
          'Vérifier ce que mon contrat de travail permet pour une activité à côté'],
    ex: 'Pour chacun de tes projets, note la structure qui te semble adaptée et pourquoi. Le moment venu, fais valider par un expert-comptable.' },
  { n: 12, dom: 'plan', title: 'Dossier de lancement',
    why: 'Tout assembler pour être prêt le jour où tu te lances.',
    res: [{ t: 'Bpifrance Création — modèle de business plan', w: 'Gratuit en ligne.' },
          { t: 'Tes notes des 11 mois précédents', w: 'Dans chaque mois de cet onglet.' }],
    acq: ['Rédiger le business plan de mon projet prioritaire',
          'Chiffrer précisément le capital de départ nécessaire',
          'Lister mes 90 premiers jours après le lancement',
          'Présenter mon projet en 2 minutes, sans notes'],
    ex: 'Pitche ton projet à 3 personnes de confiance et note toutes leurs questions : ce sont les trous de ton dossier.' }
];

/* 50 mots parmi les plus fréquents du Coran : [arabe, sens, racine] */
const WORDS = [
  ['اللَّه', 'Allah (Dieu)', ''], ['رَبّ', 'Seigneur', 'ر ب ب'], ['قَالَ', 'il a dit', 'ق و ل'], ['قُلْ', 'dis !', 'ق و ل'],
  ['كَانَ', 'il était', 'ك و ن'], ['الَّذِينَ', 'ceux qui', ''], ['مِنْ', 'de, parmi', ''], ['فِي', 'dans', ''],
  ['عَلَىٰ', 'sur', ''], ['إِلَىٰ', 'vers', ''], ['لَا', 'non, ne… pas', ''], ['مَا', 'ce que ; ne… pas', ''],
  ['إِنَّ', 'certes', ''], ['يَا', 'ô', ''], ['هُوَ', 'il, lui', ''], ['أَنْتَ', 'tu, toi', ''], ['نَحْنُ', 'nous', ''],
  ['يَوْم', 'jour', 'ي و م'], ['أَرْض', 'terre', 'أ ر ض'], ['سَمَاء', 'ciel', 'س م و'], ['نَاس', 'les gens', 'ن و س'],
  ['قَوْم', 'peuple', 'ق و م'], ['آمَنَ', 'il a cru', 'أ م ن'], ['كَفَرَ', 'il a mécru', 'ك ف ر'],
  ['عَمِلَ', 'il a œuvré', 'ع م ل'], ['عَلِمَ', 'il a su', 'ع ل م'], ['كِتَاب', 'livre, Écriture', 'ك ت ب'],
  ['آيَة', 'signe, verset', 'أ ي ي'], ['رَحْمَة', 'miséricorde', 'ر ح م'], ['قَلْب', 'cœur', 'ق ل ب'],
  ['نَفْس', 'âme, soi-même', 'ن ف س'], ['حَقّ', 'vérité, droit', 'ح ق ق'], ['هُدًى', 'guidée', 'ه د ي'],
  ['صَلَاة', 'prière', 'ص ل و'], ['جَنَّة', 'jardin, paradis', 'ج ن ن'], ['نَار', 'feu', 'ن و ر'],
  ['عَذَاب', 'châtiment', 'ع ذ ب'], ['رَسُول', 'messager', 'ر س ل'], ['شَيْء', 'chose', 'ش ي أ'],
  ['كُلّ', 'tout, chaque', 'ك ل ل'], ['عَبْد', 'serviteur', 'ع ب د'], ['ذِكْر', 'rappel, évocation', 'ذ ك ر'],
  ['دِين', 'religion ; rétribution', 'د ي ن'], ['سَبِيل', 'chemin, voie', 'س ب ل'], ['خَيْر', 'bien ; meilleur', 'خ ي ر'],
  ['رَزَقَ', 'il a pourvu', 'ر ز ق'], ['صَبْر', 'patience', 'ص ب ر'], ['عَظِيم', 'immense', 'ع ظ م'],
  ['عَلِيم', 'Omniscient', 'ع ل م'], ['رَحِيم', 'Très Miséricordieux', 'ر ح م']
];

/* Al-Fatiha, mot à mot (rasm uthmani, lecture Hafs) */
const FATIHA = [
  [['بِسْمِ', 'au nom de'], ['ٱللَّهِ', 'Allah'], ['ٱلرَّحْمَٰنِ', 'le Tout Miséricordieux'], ['ٱلرَّحِيمِ', 'le Très Miséricordieux']],
  [['ٱلْحَمْدُ', 'la louange'], ['لِلَّهِ', 'à Allah'], ['رَبِّ', 'Seigneur'], ['ٱلْعَٰلَمِينَ', 'des mondes']],
  [['ٱلرَّحْمَٰنِ', 'le Tout Miséricordieux'], ['ٱلرَّحِيمِ', 'le Très Miséricordieux']],
  [['مَٰلِكِ', 'Maître'], ['يَوْمِ', 'du jour'], ['ٱلدِّينِ', 'de la rétribution']],
  [['إِيَّاكَ', "c'est Toi (seul)"], ['نَعْبُدُ', 'nous adorons'], ['وَإِيَّاكَ', "et c'est Toi (seul)"], ['نَسْتَعِينُ', 'dont nous implorons le secours']],
  [['ٱهْدِنَا', 'guide-nous'], ['ٱلصِّرَٰطَ', 'le chemin'], ['ٱلْمُسْتَقِيمَ', 'droit']],
  [['صِرَٰطَ', 'le chemin'], ['ٱلَّذِينَ', 'de ceux'], ['أَنْعَمْتَ', 'Tu as comblé (de bienfaits)'], ['عَلَيْهِمْ', 'sur eux'],
   ['غَيْرِ', 'non pas'], ['ٱلْمَغْضُوبِ', 'ceux qui ont encouru la colère'], ['عَلَيْهِمْ', 'contre eux'], ['وَلَا', 'ni'], ['ٱلضَّآلِّينَ', 'les égarés']]
];

const AR_STEPS = [
  { t: 'T1 · Lecture fluide et vocabulaire', items: [
    'Suivre les modules de Tajwid Institut sans en sauter',
    'Lire 1 page du Coran par jour à voix haute',
    'Maîtriser les 50 mots du quiz',
    'Comprendre Al-Fatiha mot à mot'] },
  { t: 'T2 · Bases de grammaire', items: [
    "Distinguer nom, verbe et particule (ism, fi'l, harf)",
    'Comprendre le principe des racines à 3 lettres',
    'Connaître les pronoms personnels et possessifs',
    'Conjuguer un verbe au passé (mâdî) et au présent (mudâri\')'] },
  { t: "T3 · Sourates courtes du Juz 'Amma", items: [
    'Comprendre mot à mot les sourates que je récite en prière',
    "Comprendre le sens global de 10 sourates du Juz 'Amma",
    'Reconnaître les mots fréquents en écoutant une récitation'] },
  { t: 'T4 · Comprendre ce que je récite', items: [
    'Comprendre tout ce que je récite dans mes prières',
    'Lire un verset inconnu et en deviner le sens général',
    'Distinguer phrase nominale et phrase verbale'] }
];

/* Al-Fatiha + Juz 'Amma : [numéro, translittération, nom arabe] */
const SOURATES = [
  [1, 'Al-Fatiha', 'الفاتحة'], [114, 'An-Nas', 'الناس'], [113, 'Al-Falaq', 'الفلق'], [112, 'Al-Ikhlas', 'الإخلاص'],
  [111, 'Al-Masad', 'المسد'], [110, 'An-Nasr', 'النصر'], [109, 'Al-Kafirun', 'الكافرون'], [108, 'Al-Kawthar', 'الكوثر'],
  [107, "Al-Ma'un", 'الماعون'], [106, 'Quraysh', 'قريش'], [105, 'Al-Fil', 'الفيل'], [104, 'Al-Humaza', 'الهمزة'],
  [103, "Al-'Asr", 'العصر'], [102, 'At-Takathur', 'التكاثر'], [101, "Al-Qari'a", 'القارعة'], [100, "Al-'Adiyat", 'العاديات'],
  [99, 'Az-Zalzala', 'الزلزلة'], [98, 'Al-Bayyina', 'البينة'], [97, 'Al-Qadr', 'القدر'], [96, "Al-'Alaq", 'العلق'],
  [95, 'At-Tin', 'التين'], [94, 'Ash-Sharh', 'الشرح'], [93, 'Ad-Duha', 'الضحى'], [92, 'Al-Layl', 'الليل'],
  [91, 'Ash-Shams', 'الشمس'], [90, 'Al-Balad', 'البلد'], [89, 'Al-Fajr', 'الفجر'], [88, 'Al-Ghashiya', 'الغاشية'],
  [87, "Al-A'la", 'الأعلى'], [86, 'At-Tariq', 'الطارق'], [85, 'Al-Buruj', 'البروج'], [84, 'Al-Inshiqaq', 'الانشقاق'],
  [83, 'Al-Mutaffifin', 'المطففين'], [82, 'Al-Infitar', 'الانفطار'], [81, 'At-Takwir', 'التكوير'], [80, "'Abasa", 'عبس'],
  [79, "An-Nazi'at", 'النازعات'], [78, "An-Naba'", 'النبأ']
];
/* Ordre de l'ancienne app « Prépa Sayko » (pour la migration) */
const OLD_SOURATES = ['Al-Fatiha', 'An-Nas', 'Al-Falaq', 'Al-Ikhlas', 'Al-Masad', 'An-Nasr', 'Al-Kafirun', 'Al-Kawthar', "Al-Ma'un", 'Quraysh', 'Al-Fil', 'Al-Humaza', "Al-'Asr", 'At-Takathur', "Al-Qari'a", "Al-'Adiyat"];

const ROUTINE = [
  [30, 'Audio', 'Pendant les trajets : le podcast ou le livre audio du mois.'],
  [30, 'Lecture active', 'Le livre du mois, avec 3 idées notées dans le Parcours.'],
  [20, 'Arabe', 'Un module Tajwid Institut ou une page lue, puis le quiz.'],
  [10, 'Pratique', "Un pas concret sur l'exercice du mois."]
];

const EMP = { gare: 'Gare', pizza: 'Mister Pizza' };

/* =====================================================================
   2. OUTILS
   ===================================================================== */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const pad = n => String(n).padStart(2, '0');
const iso = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const parseDate = s => { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d); };
const todayISO = () => iso(new Date());
const addDays = (d, n) => { const x = new Date(d); x.setDate(x.getDate() + n); return x; };
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
const toMin = t => { const [h, m] = (t || '0:0').split(':').map(Number); return h * 60 + (m || 0); };
const reduceMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

/* 450 min → « 7 h 30 » */
function fmtH(min) {
  const neg = min < 0; min = Math.round(Math.abs(min));
  const s = `${Math.floor(min / 60)} h ${pad(min % 60)}`;
  return neg ? '−' + s : s;
}
/* 450 min → « 7,50 » (format fiche de paie) */
const fmtDec = min => (min / 60).toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const fmtEur = v => v.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' });
/* « 151,67 », « 151.67 », « 151h40 », « 151:40 » → minutes */
function parseHours(str) {
  if (str == null) return null;
  const s = String(str).trim().replace(/\s/g, '').toLowerCase();
  if (!s) return null;
  let m = s.match(/^(\d+)[h:](\d{1,2})?$/);
  if (m) return Number(m[1]) * 60 + Number(m[2] || 0);
  const v = Number(s.replace(',', '.'));
  return Number.isFinite(v) ? Math.round(v * 60) : null;
}
const MONTH_FMT = new Intl.DateTimeFormat('fr-FR', { month: 'long', year: 'numeric' });
const DAY_SHORT = new Intl.DateTimeFormat('fr-FR', { weekday: 'short' });
const DAY_LONG = new Intl.DateTimeFormat('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });
const DAY_MONTH = new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'short' });
const monthLabel = ym => MONTH_FMT.format(parseDate(ym + '-01'));
const mondayOf = d => { const x = new Date(d); x.setHours(0, 0, 0, 0); x.setDate(x.getDate() - ((x.getDay() + 6) % 7)); return x; };

/* Jours fériés en France métropolitaine */
function easter(y) {
  const a = y % 19, b = Math.floor(y / 100), c = y % 100, d = Math.floor(b / 4), e = b % 4,
    f = Math.floor((b + 8) / 25), g = Math.floor((b - f + 1) / 3), h = (19 * a + b - d - g + 15) % 30,
    i = Math.floor(c / 4), k = c % 4, l = (32 + 2 * e + 2 * i - h - k) % 7, m = Math.floor((a + 11 * h + 22 * l) / 451),
    month = Math.floor((h + l - 7 * m + 114) / 31), day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(y, month - 1, day);
}
const holidayCache = {};
function holidays(y) {
  if (holidayCache[y]) return holidayCache[y];
  const e = easter(y), o = {};
  [['01-01', "Jour de l'an"], ['05-01', 'Fête du Travail'], ['05-08', 'Victoire 1945'], ['07-14', 'Fête nationale'],
   ['08-15', 'Assomption'], ['11-01', 'Toussaint'], ['11-11', 'Armistice'], ['12-25', 'Noël']].forEach(([md, n]) => { o[`${y}-${md}`] = n; });
  o[iso(addDays(e, 1))] = 'Lundi de Pâques';
  o[iso(addDays(e, 39))] = 'Ascension';
  o[iso(addDays(e, 50))] = 'Lundi de Pentecôte';
  return (holidayCache[y] = o);
}
const holidayName = dateStr => holidays(Number(dateStr.slice(0, 4)))[dateStr] || null;

/* =====================================================================
   3. DONNÉES (IndexedDB, avec copie de secours dans localStorage)
   ===================================================================== */
const DB_NAME = 'sayko-de-poche', STORE = 'kv', LS_KEY = 'sayko-de-poche-state';
function nextFullMonth() { const d = new Date(); if (d.getDate() > 1) d.setMonth(d.getMonth() + 1, 1); return iso(d).slice(0, 7); }
function defaultSettings() {
  return {
    v: 2, nightStart: '21:00', nightEnd: '06:00', pas: 0,
    base: { gare: 150, pizza: 80 },            // Gare : base du compteur · Pizza : simple repère pour l'anneau
    counterStart: nextFullMonth(),             // mois où démarre le compteur d'heures de la Gare
    counterInit: '',                           // solde de départ du compteur (h, peut être négatif)
    threshold: { gare: 35, pizza: '' },        // alerte hebdo (vide = désactivée)
    rate: { gare: '', pizza: '' },             // taux horaire brut
    cotis: { gare: 22, pizza: 22 },            // % de cotisations salariales (brut → net)
    maj: { gare: { extra: 25, night: 0, sunday: 0, holiday: 0 }, pizza: { extra: 10, night: 0, sunday: 0, holiday: 0 } }
  };
}
function defaults() {
  return {
    v: 1, start: todayISO(),
    checks: {}, notes: {}, words: {}, hideFatiha: false, tajwid: { done: 0, total: 0 }, sourates: {},
    days: {},
    shifts: [], payslips: {},
    blocks: {}, seen: {}, money: defaultMoney(), faith: defaultFaith(), unlocks: {}, biz: { projects: [] }, body: defaultBody(), nour: { log: {}, seen: '' }, zc: null, flux: { seen: {}, saved: [], day: { d: '', n: 0, q: 0, r: 0 }, used: false },
    settings: defaultSettings(),
    ideas: [], lastExport: null, createdAt: Date.now(), updatedAt: 0
  };
}
function normalize(s) {
  const d = defaults();
  const out = Object.assign(d, s || {});
  const src = (s && s.settings) || {}, ds = defaultSettings();
  // Migration v1 → v2 : le seuil hebdo de Mister Pizza passe en « désactivé », les bases mensuelles arrivent.
  if (s && s.settings && !src.v && src.threshold && Number(src.threshold.pizza) === 35) src.threshold.pizza = '';
  out.settings = Object.assign(ds, src, { v: 2 });
  ['threshold', 'rate', 'base', 'cotis'].forEach(k => { out.settings[k] = Object.assign({}, ds[k], src[k] || {}); });
  out.settings.maj = { gare: Object.assign({}, ds.maj.gare, (src.maj || {}).gare || {}), pizza: Object.assign({}, ds.maj.pizza, (src.maj || {}).pizza || {}) };
  out.tajwid = Object.assign({ done: 0, total: 0 }, out.tajwid || {});
  ['checks', 'notes', 'words', 'sourates', 'days', 'payslips', 'blocks', 'seen'].forEach(k => { if (typeof out[k] !== 'object' || !out[k] || Array.isArray(out[k])) out[k] = {}; });
  ['shifts', 'ideas'].forEach(k => { if (!Array.isArray(out[k])) out[k] = []; });
  const dm = defaultMoney(), sm = (s && s.money) || {};
  out.money = Object.assign(dm, sm);
  ['incomes', 'fixed', 'envelopes', 'pots', 'tx'].forEach(k => { if (!Array.isArray(out.money[k])) out.money[k] = dm[k]; });
  if (typeof out.money.months !== 'object' || !out.money.months) out.money.months = {};
  if (!Array.isArray(out.money.investments)) out.money.investments = [];
  out.money.debt = Object.assign({ total: '2000', start: '', monthly: '' }, sm.debt || {});
  if (out.money.safetyGoal == null || out.money.safetyGoal === '') out.money.safetyGoal = '4000';
  if (typeof out.money.auto !== 'boolean') out.money.auto = true;
  if (out.money.life == null) out.money.life = '';
  out.money.pots.forEach(p => { if (p.safety && String(p.target || '').trim() === '') p.target = String(out.money.safetyGoal); });
  const df = defaultFaith(), sf = (s && s.faith) || {};
  out.faith = { habits: Array.isArray(sf.habits) && sf.habits.length ? sf.habits : df.habits, log: sf.log && typeof sf.log === 'object' ? sf.log : {}, pt: sf.pt && typeof sf.pt === 'object' ? sf.pt : undefined };
  out.unlocks = (s && s.unlocks && typeof s.unlocks === 'object') ? s.unlocks : {};
  out.biz = { projects: s && s.biz && Array.isArray(s.biz.projects) ? s.biz.projects : [] };
  out.body = normalizeBody(s && s.body);
  out.nour = { log: s && s.nour && s.nour.log && typeof s.nour.log === 'object' ? s.nour.log : {}, seen: (s && s.nour && s.nour.seen) || '' };
  { const sf = (s && s.flux) || {}; out.flux = { seen: sf.seen && typeof sf.seen === 'object' ? sf.seen : {}, saved: Array.isArray(sf.saved) ? sf.saved : [], day: sf.day && typeof sf.day === 'object' ? sf.day : { d: '', n: 0, q: 0, r: 0 }, used: !!sf.used }; }
  out.zc = s && s.zc && s.zc.c && s.zc.s && s.zc.i ? s.zc : null;
  return out;
}
let dbp = null;
function idb() {
  if (dbp) return dbp;
  dbp = new Promise((res, rej) => {
    if (!('indexedDB' in window)) return rej(new Error('no idb'));
    const r = indexedDB.open(DB_NAME, 1);
    r.onupgradeneeded = () => r.result.createObjectStore(STORE);
    r.onsuccess = () => res(r.result);
    r.onerror = () => rej(r.error);
  });
  return dbp;
}
async function idbGet(key) {
  const db = await idb();
  return new Promise((res, rej) => { const t = db.transaction(STORE).objectStore(STORE).get(key); t.onsuccess = () => res(t.result); t.onerror = () => rej(t.error); });
}
async function idbSet(key, val) {
  const db = await idb();
  return new Promise((res, rej) => { const tx = db.transaction(STORE, 'readwrite'); tx.objectStore(STORE).put(val, key); tx.oncomplete = () => res(); tx.onerror = () => rej(tx.error); });
}
async function loadState() {
  let s = null;
  try { s = await idbGet('state'); } catch (e) { /* IndexedDB indisponible */ }
  if (!s) { try { const raw = localStorage.getItem(LS_KEY); if (raw) s = JSON.parse(raw); } catch (e) {} }
  return normalize(s);
}
let S = defaults();
let saveTimer = null;
function save(now) {
  S.updatedAt = Date.now();
  clearTimeout(saveTimer);
  const run = () => {
    const snap = JSON.parse(JSON.stringify(S));
    idbSet('state', snap).catch(() => {});
    try { localStorage.setItem(LS_KEY, JSON.stringify(snap)); } catch (e) {}
  };
  if (now) run(); else saveTimer = setTimeout(run, 250);
}
document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden' && saveTimer) { clearTimeout(saveTimer); save(true); } });
async function askPersist() {
  try { if (navigator.storage && navigator.storage.persist && !(await navigator.storage.persisted())) await navigator.storage.persist(); } catch (e) {}
}

/* =====================================================================
   4. CALCULS — HEURES
   ===================================================================== */
function span(sh) {
  const s = parseDate(sh.date); const [h1, m1] = sh.start.split(':').map(Number); s.setHours(h1, m1, 0, 0);
  const e = parseDate(sh.date); const [h2, m2] = sh.end.split(':').map(Number); e.setHours(h2, m2, 0, 0);
  if (e <= s) e.setDate(e.getDate() + 1); // service qui passe minuit
  return [s, e];
}
const overlap = (a0, a1, b0, b1) => Math.max(0, Math.min(a1, b1) - Math.max(a0, b0));
function calc(sh, settings = S.settings) {
  const [s, e] = span(sh);
  const spanMin = Math.round((e - s) / 60000);
  const worked = Math.max(0, spanMin - (Number(sh.pause) || 0));
  const ratio = spanMin ? worked / spanMin : 0;
  const ns = toMin(settings.nightStart), ne = toMin(settings.nightEnd);
  let night = 0, sunday = 0;
  for (let d = addDays(parseDate(sh.date), -1); d <= e; d = addDays(d, 1)) {
    const w0 = new Date(d); w0.setHours(0, ns, 0, 0);
    const w1 = new Date(d); w1.setHours(0, ne, 0, 0); if (ne <= ns) w1.setDate(w1.getDate() + 1);
    night += overlap(s, e, w0, w1);
    if (d.getDay() === 0) { const n = addDays(d, 1); sunday += overlap(s, e, d, n); }
  }
  night = Math.round(night / 60000 * ratio);
  sunday = Math.round(sunday / 60000 * ratio);
  return { worked, night, sunday, holiday: sh.ferie ? worked : 0, overnight: e.getDate() !== s.getDate() };
}
function sumShifts(list) {
  const t = { worked: 0, night: 0, sunday: 0, holiday: 0, n: list.length };
  list.forEach(sh => { const c = calc(sh); t.worked += c.worked; t.night += c.night; t.sunday += c.sunday; t.holiday += c.holiday; });
  return t;
}
const shiftsIn = (ym, emp) => S.shifts.filter(x => x.date.startsWith(ym) && (!emp || x.emp === emp));
function shiftsWeek(monday, emp) {
  const a = iso(monday), b = iso(addDays(monday, 6));
  return S.shifts.filter(x => x.date >= a && x.date <= b && (!emp || x.emp === emp));
}
const sortShifts = list => list.slice().sort((a, b) => (b.date + b.start).localeCompare(a.date + a.start));

/* =====================================================================
   5. CALCULS — PARCOURS, ARABE, ROUTINE
   ===================================================================== */
function currentMonth() {
  const s = parseDate(S.start), n = new Date();
  let m = (n.getFullYear() - s.getFullYear()) * 12 + (n.getMonth() - s.getMonth()) + (n.getDate() >= s.getDate() ? 1 : 0);
  return Math.min(12, Math.max(1, m));
}
const modDone = m => m.acq.filter((_, i) => S.checks[`m${m.n}-${i}`]).length;
const modPct = m => modDone(m) / m.acq.length;
function globalPct() { let t = 0, d = 0; MONTHS.forEach(m => { t += m.acq.length; d += modDone(m); }); return Math.round(d / t * 100); }
const wordsKnown = () => WORDS.filter((_, i) => (S.words[i] || 0) >= 3).length;
function streak() {
  let c = 0, d = new Date();
  if (!S.days[iso(d)]) d = addDays(d, -1);
  while (S.days[iso(d)]) { c++; d = addDays(d, -1); }
  return c;
}
function bestStreak() {
  const ks = Object.keys(S.days).filter(k => S.days[k]).sort(); let best = 0, cur = 0, prev = null;
  ks.forEach(k => { cur = prev && iso(addDays(parseDate(prev), 1)) === k ? cur + 1 : 1; best = Math.max(best, cur); prev = k; });
  return best;
}


/* =====================================================================
   6. ARGENT (brut → net → dans ta poche)
   ===================================================================== */
const numv = v => { const n = Number(String(v ?? '').replace(',', '.')); return Number.isFinite(n) ? n : 0; };
function money(emp, t) {
  const st = S.settings, rate = numv(st.rate[emp]);
  if (!rate) return null;
  const maj = st.maj[emp] || {};
  // Gare : mensualisé, les heures en plus vont au compteur (pas payées) → on paie la base.
  // Mister Pizza : payé à l'heure, toutes les heures du mois au même taux.
  const paid = emp === 'gare' && numv(st.base.gare) ? numv(st.base.gare) * 60 : t.worked;
  const brut = paid / 60 * rate + (t.night * numv(maj.night) + t.sunday * numv(maj.sunday) + t.holiday * numv(maj.holiday)) / 100 / 60 * rate;
  const net = brut * (1 - numv(st.cotis[emp]) / 100);
  return { brut, net, poche: net * (1 - numv(st.pas) / 100) };
}
/* « -12h30 », « +8 », « 4,5 » → minutes */
function parseSigned(v) { const str = String(v ?? '').trim().replace(/\s/g, ''); if (!str) return 0; const neg = /^[-−]/.test(str); const m = parseHours(str.replace(/^[-+−]/, '')); return m == null ? 0 : (neg ? -m : m); }
const fmtSigned = m => (m > 0 ? '+' : m < 0 ? '−' : '') + fmtH(Math.abs(m));
/* Compteur d'heures de la Gare (heures en plus stockées, rattrapées en repos) */
function gareCounter() {
  const st = S.settings, base = numv(st.base.gare) * 60; if (!base) return null;
  const cur = todayISO().slice(0, 7), start = st.counterStart || cur;
  const months = [];
  let bal = parseSigned(st.counterInit);
  for (let d = parseDate(start + '-01'); iso(d).slice(0, 7) < cur; d.setMonth(d.getMonth() + 1)) {
    const ym = iso(d).slice(0, 7), w = sumShifts(shiftsIn(ym, 'gare')).worked;
    bal += w - base; months.push({ ym, w, diff: w - base, bal });
  }
  const w = sumShifts(shiftsIn(cur, 'gare')).worked;
  return { started: start <= cur, start, init: parseSigned(st.counterInit), closed: bal, months, cur: { ym: cur, w, diff: w - base }, base };
}
const eur0 = v => v.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 });

/* =====================================================================
   7. OUTILS D'INTERFACE
   ===================================================================== */
const ICON = {
  gear: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>',
  idea: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.4 1 1.1 1 1.8V16h5v-.3c0-.7.4-1.4 1-1.8A6 6 0 0 0 12 3z"/></svg>',
  info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><circle cx="12" cy="12" r="8.5"/><path d="M12 11v5M12 8h.01"/></svg>',
  prev: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>',
  next: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>',
  chev: '<svg class="chev" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>',
  warn: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9v4M12 17h.01"/><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/></svg>',
  tick: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3.5 8.5l3 3 6-7"/></svg>',
  fstar: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" aria-hidden="true"><path d="M12 2.5c.9 5.2 2.3 6.6 7.5 7.5-5.2.9-6.6 2.3-7.5 7.5-.9-5.2-2.3-6.6-7.5-7.5 5.2-.9 6.6-2.3 7.5-7.5z"/><path d="M19 16.5c.3 1.6.8 2.1 2.4 2.4-1.6.3-2.1.8-2.4 2.4-.3-1.6-.8-2.1-2.4-2.4 1.6-.3 2.1-.8 2.4-2.4z"/></svg>',
  fcopy: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="8.5" y="8.5" width="12" height="12" rx="2.5"/><path d="M15.5 8.5V6a2.5 2.5 0 0 0-2.5-2.5H6A2.5 2.5 0 0 0 3.5 6v7A2.5 2.5 0 0 0 6 15.5h2.5"/></svg>',
  fclose: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>'
};
/* Mini-icônes des planètes (chemins 24×24) */
const GLYPH = {
  parcours: '<circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-dasharray="3 2.4"/><circle cx="12" cy="4" r="2.4" fill="currentColor"/>',
  foi: '<path d="M15.5 4.5a8 8 0 1 0 4 12.5 6.5 6.5 0 1 1-4-12.5z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>',
  arabe: '<path d="M12 6.5C10 5 7 4.5 3.5 5v13c3.5-.5 6.5 0 8.5 1.5 2-1.5 5-2 8.5-1.5V5C17 4.5 14 5 12 6.5zM12 6.5v13" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>',
  routine: '<path d="M12 3.5a8.5 8.5 0 1 1-8.5 8.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M8.5 12l2.5 2.5 4.5-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
  argent: '<rect x="3.5" y="6" width="17" height="12.5" rx="2.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M15.5 12.25h2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M6 6l8.5-2.5 1 2.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>',
  heures: '<circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12 7.5V12l3 2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
  corps: '<path d="M6.5 12h11" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><rect x="3.8" y="7.8" width="3.2" height="8.4" rx="1.2" fill="none" stroke="currentColor" stroke-width="1.8"/><rect x="17" y="7.8" width="3.2" height="8.4" rx="1.2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M2 10.5v3M22 10.5v3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
  business: '<rect x="3.5" y="7.5" width="17" height="12" rx="2.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M9 7.5V6a3 3 0 0 1 6 0v1.5M3.5 12.5h17" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>',
  flux: '<path d="M12 3c.7 4.3 1.9 5.5 6.2 6.2-4.3.7-5.5 1.9-6.2 6.2-.7-4.3-1.9-5.5-6.2-6.2C10.1 8.5 11.3 7.3 12 3z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M6 19.5h12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
  lock: '<rect x="5" y="10.5" width="14" height="10" rx="2.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M8.5 10.5V7.5a3.5 3.5 0 0 1 7 0v3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
  orbite: '<circle cx="12" cy="12" r="3.4" fill="currentColor"/><ellipse cx="12" cy="12" rx="9.8" ry="4.3" transform="rotate(-25 12 12)" fill="none" stroke="currentColor" stroke-width="1.8"/>'
};
/* Géométrie : 0° = en haut, sens des aiguilles d'une montre */
const polar = (r, deg) => { const a = (deg - 90) * Math.PI / 180; return [r * Math.cos(a), r * Math.sin(a)]; };
function arc(r, a0, a1) {
  let sweep = a1 - a0; if (sweep <= 0) sweep += 360; sweep = Math.min(sweep, 359.99);
  const [x0, y0] = polar(r, a0), [x1, y1] = polar(r, a0 + sweep);
  return `M${x0.toFixed(2)} ${y0.toFixed(2)}A${r} ${r} 0 ${sweep > 180 ? 1 : 0} 1 ${x1.toFixed(2)} ${y1.toFixed(2)}`;
}
const ringDash = (r, p) => { const c = 2 * Math.PI * r; return `stroke-dasharray="${c.toFixed(1)}" stroke-dashoffset="${(c * (1 - Math.max(0, Math.min(1, p)))).toFixed(1)}"`; };
function tween(dur, fn, done) {
  if (reduceMotion()) { fn(1); done && done(); return; }
  const t0 = performance.now();
  const step = now => { const k = Math.min(1, (now - t0) / dur); fn(1 - Math.pow(1 - k, 3)); if (k < 1) requestAnimationFrame(step); else done && done(); };
  requestAnimationFrame(step);
}

const COACH = {
  orbite: ['Ton système', 'Chaque planète est un module, son anneau doré montre où tu en es. Touche une planète pour y aller, fais tourner le système du doigt. Touche le soleil pour ouvrir le Flux. Partout dans l\'app, le noyau doré en bas ouvre la roue des modules : touche-le, ou appuie et glisse vers un module.'],
  parcours: ['12 mois pour te former au business', 'Fais glisser l\'anneau ou touche une lune pour choisir un mois. Chaque mois se fait dans l\'ordre :', ['Écoute et lis les ressources', 'Coche les acquis quand tu les maîtrises', 'Fais l\'exercice pratique', 'Note ce que tu retiens']],
  arabe: ['Comprendre le sens de ce que tu récites', 'Quelques minutes de quiz par jour suffisent. Chaque étoile de la constellation est un mot : elle brille quand il est maîtrisé (3 bonnes réponses).'],
  routine: ['Ta 1 h 30 quotidienne', 'L\'anneau est découpé en 4 blocs. Touche un bloc quand il est fait : les 4 faits, la journée est validée et ta série continue.'],
  budget: ['Ta méthode', 'Elle tient en 3 temps :', ['Tu te paies d\'abord : ton épargne part en début de mois', 'Tes charges fixes sont mises de côté', 'Le reste est à toi, avec un budget par jour qui s\'ajuste à chaque dépense. Les enveloppes freinent les catégories où ça file vite.']],
  dhikr: ['Ton dhikr, librement', 'Choisis ta formule, ou ajoute la tienne, puis touche le cercle à chaque dhikr. Une vibration à chaque 33. Pas d\'objectif : ta régularité rapporte le plus (ton premier 33 de la journée, et ta série), puis la longueur d\'une séance, puis ton total. Compter trop vite ne compte pas plus.'],
  foi: ['Ta régularité', 'Coche chaque prière faite à l\'heure sur le chemin du soleil, et tes autres habitudes en dessous. Atteindre 90 % sur 30 jours est une des deux clés de l\'onglet Business.'],
  business: ['Pourquoi c\'est verrouillé', 'Pour que l\'app reflète honnêtement tes priorités : d\'abord les compétences et la constance, ensuite le business. Chaque volet affiche ce qu\'il te reste.'],
  businessOn: ['Ton atelier', 'Un projet = un nom, une étape, et une prochaine action concrète. Rien de plus pour l\'instant.'],
  corps: ['Construire, étape par étape', 'Tu repars de l\'arrêt : 12 séances de Réveil à la maison ouvrent la salle, 36 séances de Forge ouvrent la Sculpture. Pendant une séance, touche ✓ à chaque série : le repos se lance tout seul et l\'app te dit quand monter la charge.'],
  nutri: ['Ton carburant', 'Pour prendre du muscle : un léger surplus de calories et assez de protéines. Touche un aliment quand tu le manges, la jauge se remplit. Pèse-toi une fois par semaine : l\'app ajuste ta cible si tu prends trop vite ou trop lentement.'],
  soin: ['Réparer et entretenir', 'Le muscle se construit pendant le sommeil. Note tes nuits, calcule ton heure de coucher, et garde un œil sur la fitra : chaque jauge se vide en 40 jours.'],
  heures: ['Vérifier ta paie', 'Fais glisser les deux poignées du cadran pour ton début et ta fin (la zone sombre, c\'est la nuit). L\'app cumule tes heures du mois, tes heures de nuit et du dimanche, et le compteur d\'heures stockées de la Gare.']
};
function coach(key) {
  if (S.seen[key]) return '';
  const c = COACH[key];
  return `<div class="coach" data-coach="${key}"><b>${c[0]}.</b> ${c[1]}${c[2] ? `<ol>${c[2].map(x => `<li>${x}</li>`).join('')}</ol>` : ''}<br><button data-seen="${key}">J'ai compris</button></div>`;
}
function pageHead(title, sub, key) {
  return `<header class="top"><div><h1>${title}</h1>${sub ? `<p>${sub}</p>` : ''}</div>
    <div class="top-actions">
      ${key && S.seen[key] ? `<button class="icon-btn" data-unseen="${key}" aria-label="Revoir l'explication">${ICON.info}</button>` : ''}
      <button class="icon-btn" data-open="ideas" aria-label="Mes idées">${ICON.idea}</button>
      <button class="icon-btn" data-open="settings" aria-label="Réglages et sauvegarde">${ICON.gear}</button>
    </div></header>${key ? coach(key) : ''}`;
}
const checkbox = (key, label, attr = 'data-chk', on = S.checks[key]) =>
  `<label class="check"><input type="checkbox" ${attr}="${esc(key)}" ${on ? 'checked' : ''}><span class="box">${ICON.tick}</span><span class="txt">${label}</span></label>`;

let toastTimer = null;
function toast(msg, action, fn, ms = 4000) {
  const t = $('#toast'), b = $('button', t);
  $('.msg', t).textContent = msg;
  b.hidden = !action; b.textContent = action || ''; b.onclick = () => { hideToast(); fn && fn(); };
  t.classList.add('on'); clearTimeout(toastTimer); toastTimer = setTimeout(hideToast, ms);
}
function hideToast() { $('#toast').classList.remove('on'); }
function haptic() { try { navigator.vibrate && navigator.vibrate(8); } catch (e) {} }
async function deliverFile(name, text, type) {
  const blob = new Blob([text], { type });
  try {
    const file = new File([blob], name, { type });
    if (navigator.canShare && navigator.canShare({ files: [file] }) && /iPhone|iPad|Android/i.test(navigator.userAgent)) { await navigator.share({ files: [file], title: name }); return true; }
  } catch (e) { if (e && e.name === 'AbortError') return false; }
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = name; document.body.appendChild(a); a.click();
  setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
  return true;
}
/* Petit indicateur circulaire (liste « Aujourd'hui ») */
const miniOrb = (p, key, mint) => `<svg class="mini-orb" viewBox="-20 -20 40 40" aria-hidden="true"><circle r="16" fill="none" stroke="var(--raise)" stroke-width="3"/><circle r="16" fill="none" stroke="var(--${mint ? 'mint' : 'gold'})" stroke-width="3" stroke-linecap="round" transform="rotate(-90)" ${ringDash(16, p)}/><svg x="-8" y="-8" width="16" height="16" viewBox="0 0 24 24" style="color:var(--ink-2)">${GLYPH[key]}</svg></svg>`;

/* =====================================================================
   8. ORBITE (accueil)
   ===================================================================== */
const PLANETS = [
  { key: 'routine', name: 'Routine', r: 66, speed: 9, phase: 210 },
  { key: 'foi', name: 'Foi', r: 98, speed: 6, phase: 330, mint: true },
  { key: 'corps', name: 'Corps', r: 98, speed: 6, phase: 150 },
  { key: 'argent', name: 'Argent', r: 130, speed: 4, phase: 70 },
  { key: 'parcours', name: 'Parcours', r: 160, speed: 2.4, phase: 150 },
  { key: 'business', name: 'Business', r: 160, speed: 2.4, phase: 330 }
];
const todayBlocks = () => (S.blocks[todayISO()] || [0, 0, 0, 0]).filter(Boolean).length;
const baseTotal = () => (numv(S.settings.base.gare) + numv(S.settings.base.pizza)) * 60 || 1;
function planetValue(k) {
  const ym = todayISO().slice(0, 7);
  if (k === 'argent') {
    if (isSetUp()) { const b = budgetOf(ym); return [b.free > 0 ? Math.max(0, b.reste) / b.free : 0, eur0(b.reste)]; }
    const w0 = sumShifts(shiftsIn(ym)).worked; return [w0 / baseTotal(), fmtH(w0)];
  }
  if (k === 'parcours') return [globalPct() / 100, `${globalPct()} %`];
  if (k === 'foi') { const sc = faithScore(); return [sc.pct / FAITH_GOAL, `${Math.round(sc.pct * 100)} % / 30 j`]; }
  if (k === 'routine') { const d = S.days[todayISO()] ? 4 : todayBlocks(); return [d / 4, `${d}/4 blocs`]; }
  if (k === 'corps') { const ph = phaseOf(S.body.phase), n = weekSessions().length; return [n / ph.perWeek, `${n}/${ph.perWeek} séances`]; }
  if (k === 'business') {
    if (S.unlocks.business) { const n = S.biz.projects.length; return [1, `${n} projet${n > 1 ? 's' : ''}`]; }
    const st = bizStatus(), d = st.skills.reduce((m, x) => m + x.d, 0), t = st.skills.reduce((m, x) => m + x.t, 0) || 1;
    return [.5 * d / t + .5 * Math.min(1, st.faith.pct / FAITH_GOAL), 'Verrouillé'];
  }
  const w = sumShifts(shiftsIn(ym)).worked; return [w / baseTotal(), fmtH(w)];
}
function vOrbite() {
  const now = new Date(), h = now.getHours();
  const hello = h < 5 ? 'Bonne nuit' : h < 18 ? 'Bonjour' : 'Bonsoir';
  // Étoiles déterministes (même ciel à chaque ouverture)
  let seed = 7, stars = '';
  const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
  for (let i = 0; i < 46; i++) { const x = rnd() * 420 - 210, y = rnd() * 420 - 210, r = rnd() * 1.1 + .3; stars += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r.toFixed(2)}" fill="var(--muted)" opacity="${(rnd() * .5 + .15).toFixed(2)}"/>`; }
  const planets = PLANETS.map(p => {
    const [v, lbl] = planetValue(p.key);
    const locked = p.key === 'business' && !S.unlocks.business;
    return `<g class="planet ${p.mint ? 'mint' : ''} ${locked ? 'locked' : ''}" data-planet="${p.key}" role="button" tabindex="0" aria-label="${p.name} : ${lbl}">
      <circle r="34" fill="transparent"/>
      <circle class="trk" r="26"/><circle class="prog" r="26" transform="rotate(-90)" ${ringDash(26, v)}/>
      <circle class="body" r="20"/>
      <svg x="-10" y="-10" width="20" height="20" viewBox="0 0 24 24" class="ic">${locked ? GLYPH.lock : GLYPH[p.key]}</svg>
      <text class="lbl" y="44">${p.name}</text><text class="val" y="57">${lbl}</text></g>`;
  }).join('');
  const wk = sumShifts(shiftsWeek(mondayOf(now))).worked, cm = currentMonth(), cur = MONTHS[cm - 1];
  const tb = S.days[todayISO()] ? 4 : todayBlocks();
  return `${pageHead(`${hello}, <em>Yassine</em>`, DAY_LONG.format(now).replace(/^./, c => c.toUpperCase()), 'orbite')}
  <div class="orbit-stage" id="stage">
    <svg viewBox="-210 -215 420 440" aria-label="Système de tes 6 modules">
      <defs><radialGradient id="sunGlow"><stop offset="0" stop-color="var(--gold)" stop-opacity=".55"/><stop offset=".45" stop-color="var(--gold)" stop-opacity=".12"/><stop offset="1" stop-color="var(--gold)" stop-opacity="0"/></radialGradient></defs>
      ${stars}
      ${PLANETS.map(p => `<circle class="orbit-ring" r="${p.r}"/>`).join('')}
      <circle r="${(56 + 44 * sunLevel()).toFixed(0)}" fill="url(#sunGlow)" id="sunGlowC" style="opacity:${(.35 + .65 * sunLevel()).toFixed(2)};transition:r .8s,opacity .8s"/>
      <circle class="sun-core" id="sunCore" r="34" style="opacity:${(.55 + .45 * Math.min(1, sunLevel() * 1.6)).toFixed(2)};transition:opacity .8s"/>
      <text y="-2" text-anchor="middle" style="font:400 30px var(--serif);fill:var(--gold-ink)">${now.getDate()}</text>
      <text y="16" text-anchor="middle" style="font-size:9px;font-weight:700;letter-spacing:.12em;fill:var(--gold-ink);opacity:.75">${DAY_SHORT.format(now).replace('.', '').toUpperCase()}</text>
      <circle data-sun r="40" fill="transparent" role="button" tabindex="0" aria-label="Ouvrir le Flux" style="cursor:pointer"/>
      <text id="sunNour" y="58" text-anchor="middle" style="font-size:10.5px;font-weight:700;letter-spacing:.06em;fill:var(--gold)">✦ ${nourDay()}</text>
      <g id="planets">${planets}</g>
    </svg>
  </div>
  ${yesterdayCard()}${atStake()}
  <section style="margin-top:18px">
    <h2>Aujourd'hui</h2>
    <div class="today-list">
      ${(() => { const d = S.flux.day.d === todayISO() ? S.flux.day.n : 0; return `<button class="today-item" data-goto="flux">${miniOrb(Math.min(1, d / 5), 'flux')}<span><b>${d >= 5 ? 'Esprit nourri aujourd\'hui' : 'Flux · 5 cartes pour ton esprit'}</b><span class="s">${d ? `${d} carte${d > 1 ? 's' : ''} lue${d > 1 ? 's' : ''} aujourd'hui` : 'Coran, business, savoir, psychologie'}</span></span>${ICON.chev}</button>`; })()}
      ${isSetUp() ? (() => { const bb = budgetOf(todayISO().slice(0, 7)), dd = bb.daysLeft ? bb.reste / bb.daysLeft : 0; return `<button class="today-item" data-goto="budget">${miniOrb(bb.free > 0 ? Math.max(0, bb.reste) / bb.free : 0, 'argent')}<span><b>${bb.reste > 0 ? `${eur0(dd)} à dépenser aujourd'hui` : 'Budget du mois épuisé'}</b><span class="s">Reste ${eur0(bb.reste)} ce mois</span></span>${ICON.chev}</button>`; })() : ''}
      <button class="today-item" data-goto="heures">${miniOrb(planetValue('heures')[0], 'heures')}<span><b>${wk ? `${fmtH(wk)} cette semaine` : 'Aucun service cette semaine'}</b><span class="s">Noter un service</span></span>${ICON.chev}</button>
      <button class="today-item" data-goto="routine">${miniOrb(tb / 4, 'routine')}<span><b>${tb === 4 ? 'Routine faite' : `${tb} bloc${tb > 1 ? 's' : ''} sur 4`}</b><span class="s">${streak()} jour${streak() > 1 ? 's' : ''} d'affilée</span></span>${ICON.chev}</button>
      ${(() => { const ph = phaseOf(S.body.phase), n = weekSessions().length, t = bodyTargets(), fd = foodDay();
        const b = S.body.active ? 'Séance en cours' : n >= ph.perWeek ? 'Séances de la semaine faites' : isFastDay() ? 'Jour de jeûne · repos' : `Séance ${nextTpl(ph)} · ${ph.name}`;
        return `<button class="today-item" data-goto="corps">${miniOrb(n / ph.perWeek, 'corps')}<span><b>${b}</b><span class="s">${t ? `Protéines ${fd.p} / ${t.prot} g aujourd'hui` : `${n}/${ph.perWeek} séances cette semaine`}</span></span>${ICON.chev}</button>`; })()}
      <button class="today-item" data-goto="parcours">${miniOrb(modPct(cur), 'parcours')}<span><b>Mois ${cm} · ${esc(cur.title)}</b><span class="s">${modDone(cur)} acquis sur ${cur.acq.length}</span></span>${ICON.chev}</button>
      ${(() => { const n = S.faith.habits.length, dn = dayDone(todayISO()); return `<button class="today-item" data-goto="habitudes">${miniOrb(n ? dn / n : 0, 'foi', true)}<span><b>${dn === n ? 'Habitudes du jour complètes' : `${dn} habitude${dn > 1 ? 's' : ''} sur ${n} aujourd'hui`}</b><span class="s">${(() => { const pn = prayerNow(), nx = nextPrayer(); return pn && !(S.faith.log[pn.k] || {})[pn.id] ? `${PNAMES[pn.id]} en cours · reste ${leftTxt(pn.end - new Date())}` : nx ? `Prochaine : ${PNAMES[nx.id]} à ${hm(nx.start)}` : `Régularité ${Math.round(faithScore().pct * 100)} % sur 30 jours`; })()}</span></span>${ICON.chev}</button>`; })()}
      ${(() => { const td = dkDay(), st = dkStreak(); return `<button class="today-item" data-goto="dhikr">${miniOrb(Math.min(1, td / 33), 'foi', true)}<span><b>${td >= 33 ? `Dhikr · ${td} aujourd'hui` : 'Dhikr · ton premier 33'}</b><span class="s">${st ? `${st} jour${st > 1 ? 's' : ''} d'affilée` : dkF(dk().cur)[2]}</span></span>${ICON.chev}</button>`; })()}
      ${(() => { const s = hairDays('soin'), c = hairDays('coupe'); const due = s != null && s >= 7 ? 'soin' : c != null && c >= 70 ? 'coupe' : null; if (!due) return ''; return `<button class="today-item" data-goto="soin">${miniOrb(0, 'corps')}<span><b>${due === 'soin' ? 'Jour de soin des cheveux' : 'Pointes à couper'}</b><span class="s">${due === 'soin' ? `Dernier soin il y a ${s} jours` : `Dernière coupe il y a ${Math.round(c / 7)} semaines`}</span></span>${ICON.chev}</button>`; })()}
      <button class="today-item" data-goto="arabe">${miniOrb(wordsKnown() / WORDS.length, 'arabe', true)}<span><b>Réviser 5 mots</b><span class="s">${wordsKnown()} mots maîtrisés sur ${WORDS.length}</span></span>${ICON.chev}</button>
    </div>
  </section>`;
}
/* Animation du système + rotation au doigt avec inertie */
const orb = { raf: 0, t0: 0, spin: 0, vel: 0, drag: null, last: 0 };
function startOrbit() {
  stopOrbit();
  const g = $('#planets'); if (!g) return;
  const nodes = PLANETS.map(p => $(`[data-planet="${p.key}"]`, g));
  const still = reduceMotion();
  orb.t0 = performance.now() - (orb.elapsed || 0); orb.last = performance.now();
  const frame = now => {
    const dt = Math.min(50, now - orb.last) / 1000; orb.last = now;
    if (!orb.drag && Math.abs(orb.vel) > 0.01) { orb.spin += orb.vel * dt; orb.vel *= Math.pow(0.04, dt); }
    orb.elapsed = still ? 0 : now - orb.t0;
    const t = orb.elapsed / 1000;
    PLANETS.forEach((p, i) => {
      const a = p.phase + (still ? 0 : p.speed * t) + orb.spin * (70 / p.r);
      const [x, y] = polar(p.r, a);
      nodes[i].setAttribute('transform', `translate(${x.toFixed(2)} ${y.toFixed(2)})`);
    });
    orb.raf = requestAnimationFrame(frame);
  };
  orb.raf = requestAnimationFrame(frame);
  const stage = $('#stage');
  stage.addEventListener('pointerdown', e => { orb.drag = { x: e.clientX, y: e.clientY, moved: false, t: performance.now() }; orb.vel = 0; });
  stage.addEventListener('pointermove', e => {
    const d = orb.drag; if (!d) return;
    const dx = e.clientX - d.x; if (Math.abs(dx) > 6 || Math.abs(e.clientY - d.y) > 6) d.moved = true;
    if (Math.abs(dx) > Math.abs(e.clientY - d.y)) { orb.spin += dx * 0.6; const dt = Math.max(1, performance.now() - d.t); orb.vel = dx * 0.6 / dt * 1000; }
    d.x = e.clientX; d.y = e.clientY; d.t = performance.now();
  });
  const end = e => {
    const d = orb.drag; orb.drag = null;
    if (d && !d.moved) { const p = e.target.closest && e.target.closest('[data-planet]'); if (p) go(p.dataset.planet); else if (e.target.closest && e.target.closest('[data-sun]')) go('flux'); }
  };
  stage.addEventListener('pointerup', end); stage.addEventListener('pointercancel', () => { orb.drag = null; });
}
function stopOrbit() { cancelAnimationFrame(orb.raf); orb.raf = 0; }

/* =====================================================================
   9. PARCOURS — l'année en orbite
   ===================================================================== */
const P = { sel: null, rot: 0 };
function vParcours() {
  const cm = currentMonth();
  if (P.sel == null) P.sel = cm;
  P.rot = -(P.sel - 1) * 30;
  const R = 118;
  const quarters = [0, 1, 2, 3].map(q => {
    const a0 = q * 90 - 13, a1 = q * 90 + 73, [lx, ly] = polar(150, q * 90 + 30);
    return `<path d="${arc(150, a0, a1)}" fill="none" stroke="var(--orbit)" stroke-width="1.2" stroke-linecap="round"/>
      <g class="qc" data-cx="${lx.toFixed(2)}" data-cy="${ly.toFixed(2)}"><rect x="${(lx - 13).toFixed(2)}" y="${(ly - 9).toFixed(2)}" width="26" height="18" rx="9" fill="var(--bg)"/><text class="qlabel" x="${lx.toFixed(2)}" y="${ly.toFixed(2)}">T${q + 1}</text></g>`;
  }).join('');
  const moons = MONTHS.map(m => {
    const [x, y] = polar(R, (m.n - 1) * 30);
    return `<g class="moon ${m.n === P.sel ? 'sel' : ''} ${m.n === cm ? 'now' : ''}" data-moon="${m.n}" role="button" tabindex="0" aria-label="Mois ${m.n} : ${esc(m.title)}" transform="translate(${x.toFixed(2)} ${y.toFixed(2)})">
      <circle r="26" fill="transparent"/>${m.n === cm ? '<circle class="halo" r="27"/>' : ''}
      <circle class="mt" r="22"/><circle class="mp" r="22" transform="rotate(-90)" ${ringDash(22, modPct(m))}/>
      <circle class="mb" r="${m.n === P.sel ? 18 : 16}"/>
      <text class="mn">${m.n}</text></g>`;
  }).join('');
  return `${pageHead('Parcours', `<span id="psub">Mois ${cm} sur 12 · ${globalPct()} % des acquis</span>`, 'parcours')}
  <div class="dial-wrap" id="pdial">
    <svg viewBox="-172 -172 344 344" aria-label="Les 12 mois du parcours">
      <circle r="${R}" fill="none" stroke="var(--orbit)" stroke-width="1"/>
      <circle r="84" fill="var(--gold-soft)" opacity=".55"/>
      <g id="ring" transform="rotate(${P.rot})">${quarters}${moons}</g>
    </svg>
    <div class="dial-center" id="pcenter"></div>
  </div>
  <div class="dial-nav">
    <button class="btn sm quiet" data-pstep="-1" aria-label="Mois précédent">${ICON.prev}</button>
    <button class="btn sm ghost" id="pnow" ${P.sel === cm ? 'hidden' : ''}>Revenir au mois ${cm}</button>
    <button class="btn sm quiet" data-pstep="1" aria-label="Mois suivant">${ICON.next}</button>
  </div>
  <div id="mcard"></div>
  <section><h2>Par compétence</h2>
    <div class="stats-line" style="margin-bottom:18px"><div><b class="num" id="gpct">${globalPct()} %</b><span>des acquis</span></div><div><b class="num" id="mdone">${MONTHS.filter(m => modPct(m) === 1).length}</b><span>mois bouclés</span></div></div>
    <div class="skills">${Object.keys(DOMAINS).map(k => `<div class="skill" data-skill="${k}"><span>${DOMAINS[k]}${BIZ_DOMAINS.includes(k) ? ' <span class="pill gold" style="margin-left:4px">clé Business</span>' : ''}</span><span class="small muted num" data-skill-n></span><div class="bar"><i style="width:0"></i></div></div>`).join('')}</div>
  </section>`;
}
function counterRotate() {
  const r = P.rot;
  $$('#ring .moon').forEach(g => { const t = g.querySelector('text'); t.setAttribute('transform', `rotate(${-r})`); });
  $$('#ring .qc').forEach(g => g.setAttribute('transform', `rotate(${-r} ${g.dataset.cx} ${g.dataset.cy})`));
}
function pCenter() {
  const m = MONTHS[P.sel - 1], el = $('#pcenter'); if (!el) return;
  el.innerHTML = `<p class="eyebrow">Mois ${m.n} · T${Math.ceil(m.n / 3)}</p><p class="big num">${Math.round(modPct(m) * 100)}<span style="font-size:1.5rem"> %</span></p><p class="t">${esc(m.title)}</p>`;
}
function pCard(animate) {
  const m = MONTHS[P.sel - 1], el = $('#mcard'); if (!el) return;
  const done = modDone(m), note = S.notes[m.n] || '';
  el.innerHTML = `<div class="month-card">
    <p class="eyebrow">${DOMAINS[m.dom]}${m.n === currentMonth() ? ' · <span style="color:var(--mint)">en cours</span>' : ''}</p>
    <h2 style="margin:8px 0 0">${esc(m.title)}</h2>
    <p class="why">${esc(m.why)}</p>
    <div class="steps">
      <div class="step"><span class="sn">1</span><div><h3>Écouter et lire</h3><ul class="res">${m.res.map(r => `<li><b>${esc(r.t)}</b><span>${esc(r.w)}</span></li>`).join('')}</ul></div></div>
      <div class="step ${done === m.acq.length ? 'ok' : ''}" id="step2"><span class="sn">2</span><div><h3>Valider les acquis <span id="acqn">${done}/${m.acq.length}</span></h3><div class="checks">${m.acq.map((a, i) => checkbox(`m${m.n}-${i}`, esc(a))).join('')}</div></div></div>
      <div class="step"><span class="sn">3</span><div><h3>Mettre en pratique</h3><div class="exercise"><p>${esc(m.ex)}</p></div></div></div>
      <div class="step ${note.trim() ? 'ok' : ''}" id="step4"><span class="sn">4</span><div><h3><label for="note-${m.n}">Noter ce que tu retiens</label></h3><textarea id="note-${m.n}" data-note="${m.n}" style="margin-top:10px" placeholder="Idées clés, déclics, ce que tu veux appliquer…">${esc(note)}</textarea></div></div>
    </div></div>`;
  if (animate && !reduceMotion()) { el.firstElementChild.style.animation = 'rise .45s var(--ease) both'; }
}
function refreshParcours() {
  if (!$('#ring')) return;
  MONTHS.forEach(m => { const c = $(`[data-moon="${m.n}"] .mp`); if (c) { const C = 2 * Math.PI * 22; c.setAttribute('stroke-dashoffset', (C * (1 - modPct(m))).toFixed(1)); } });
  pCenter();
  const m = MONTHS[P.sel - 1], d = modDone(m);
  if ($('#acqn')) { $('#acqn').textContent = `${d}/${m.acq.length}`; $('#step2').classList.toggle('ok', d === m.acq.length); }
  $('#psub').textContent = `Mois ${currentMonth()} sur 12 · ${globalPct()} % des acquis`;
  $('#gpct').textContent = `${globalPct()} %`; $('#mdone').textContent = MONTHS.filter(x => modPct(x) === 1).length;
  Object.keys(DOMAINS).forEach(k => {
    let t = 0, dd = 0; MONTHS.filter(x => x.dom === k).forEach(x => { t += x.acq.length; dd += modDone(x); });
    const el = $(`[data-skill="${k}"]`); if (!el) return;
    $('[data-skill-n]', el).textContent = `${dd}/${t}`; $('.bar i', el).style.width = `${t ? dd / t * 100 : 0}%`;
  });
}
function selectMonth(n) {
  n = ((n - 1 + 12) % 12) + 1;
  if (n === P.sel) return;
  const from = P.rot; let to = -(n - 1) * 30;
  while (to - from > 180) to -= 360; while (to - from < -180) to += 360;
  $$('#ring .moon').forEach(g => { const on = Number(g.dataset.moon) === n; g.classList.toggle('sel', on); g.querySelector('.mb').setAttribute('r', on ? 18 : 16); });
  P.sel = n; haptic();
  $('#pnow').hidden = n === currentMonth();
  pCenter(); pCard(true);
  tween(550, k => { P.rot = from + (to - from) * k; $('#ring').setAttribute('transform', `rotate(${P.rot})`); counterRotate(); });
}
function bindParcours() {
  counterRotate(); pCenter(); pCard(false);
  requestAnimationFrame(() => requestAnimationFrame(refreshParcours));
  const wrap = $('#pdial'); let sw = null;
  wrap.addEventListener('pointerdown', e => { sw = { x: e.clientX, y: e.clientY }; });
  wrap.addEventListener('pointerup', e => {
    if (!sw) return; const dx = e.clientX - sw.x, dy = e.clientY - sw.y; sw = null;
    if (Math.abs(dx) > 36 && Math.abs(dx) > Math.abs(dy)) { selectMonth(P.sel + (dx < 0 ? 1 : -1)); return; }
    if (Math.abs(dx) < 8 && Math.abs(dy) < 8) { const m = e.target.closest('[data-moon]'); if (m) selectMonth(Number(m.dataset.moon)); }
  });
}

/* =====================================================================
   10. ARABE & CORAN
   ===================================================================== */
let quiz = null; const session = { ok: 0, n: 0 };
const currentQuarter = () => Math.min(3, Math.floor((currentMonth() - 1) / 3));
function constellation() {
  return WORDS.map((w, i) => {
    const r = 13.6 * Math.sqrt(i + 0.6), a = i * 137.508, [x, y] = polar(r, a), sc = Math.min(3, S.words[i] || 0);
    const on = sc >= 3;
    return `<circle class="star" data-star="${i}" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(2.4 + sc * 1.25).toFixed(2)}" fill="var(--${on ? 'mint' : 'gold'})" opacity="${on ? 1 : (0.22 + sc * 0.22).toFixed(2)}" ${on ? 'style="filter:drop-shadow(0 0 4px var(--mint))"' : ''}/>`;
  }).join('');
}
function vArabe() {
  const t = S.tajwid, cq = currentQuarter(), nS = SOURATES.filter(s => S.sourates[s[1]]).length;
  const fat = FATIHA.map((v, vi) => `<div class="verse"><span class="vn">Verset ${vi + 1}</span><div class="words">${v.map(w => `<button class="w" data-fw><span class="a" lang="ar">${w[0]}</span><span class="f">${esc(w[1])}</span></button>`).join('')}</div></div>`).join('');
  const steps = AR_STEPS.map((s, si) => `<div class="qtr ${si === cq ? 'cur' : ''}" style="margin-top:${si ? 18 : 0}px"><p class="eyebrow" ${si === cq ? 'style="color:var(--gold)"' : ''}>${si === cq ? 'Maintenant · ' : ''}${s.t}</p><div class="checks">${s.items.map((it, i) => checkbox(`ar${si}-${i}`, esc(it))).join('')}</div></div>`).join('');
  return `${foiTop('arabe')}
  <div class="constel">
    <svg viewBox="-112 -104 224 208" id="constel" aria-label="${wordsKnown()} mots maîtrisés sur ${WORDS.length}">${constellation()}</svg>
    <p class="constel-tip" id="ctip"></p>
  </div>
  <div class="row between" style="margin-top:6px"><p class="eyebrow">Constellation de vocabulaire</p><p class="small num"><b id="wk" style="font:400 1.5rem var(--serif);color:var(--mint)">${wordsKnown()}</b><span class="muted"> / ${WORDS.length} mots</span></p></div>
  <section style="margin-top:22px">
    <div class="quiz"><div class="qcard" id="quiz" aria-live="polite"></div></div>
    <p class="hint">Les mots que tu connais le moins reviennent plus souvent.</p>
  </section>
  <section>
    <div class="row between" style="margin-bottom:4px"><h2 style="margin:0">Al-Fatiha</h2><button class="btn sm quiet" id="toggleFat" aria-pressed="${S.hideFatiha}">${S.hideFatiha ? 'Montrer le sens' : 'Cacher le sens'}</button></div>
    <p class="hint" id="fatHint" style="margin:0 0 10px">${S.hideFatiha ? 'Touche un mot pour révéler sa traduction.' : 'Mot à mot. Cache le sens pour te tester.'}</p>
    <div id="fatiha" class="${S.hideFatiha ? 'hide' : ''}">${fat}</div>
  </section>
  <section>
    <h2>Tajwid Institut</h2>
    <div class="counter"><div><p class="big num" id="tajDone">${t.done}<small> / ${t.total || '—'}</small></p><p class="small muted">modules terminés</p></div>
      <div class="stepper"><button data-taj="-1" aria-label="Retirer un module">−</button><button data-taj="1" aria-label="Ajouter un module terminé">+</button></div></div>
    <div class="bar" style="margin-top:14px"><i id="tajBar" style="width:${t.total ? Math.min(100, t.done / t.total * 100) : 0}%"></i></div>
    <div class="group" style="margin-top:14px"><div class="cell"><label for="tajTotal">Nombre total de modules</label><input type="number" inputmode="numeric" min="0" id="tajTotal" value="${t.total || ''}" placeholder="à renseigner"></div></div>
  </section>
  <section><h2>L'année d'arabe</h2>${steps}</section>
  <section>
    <div class="row between" style="margin-bottom:6px"><h2 style="margin:0">Sourates comprises</h2><span class="small muted num" id="sourN">${nS} / ${SOURATES.length}</span></div>
    <p class="hint" style="margin:0 0 6px">Coche une sourate quand tu en comprends le sens en la récitant.</p>
    <div class="sour checks">${SOURATES.map(s => `<label class="check"><input type="checkbox" data-sour="${esc(s[1])}" ${S.sourates[s[1]] ? 'checked' : ''}><span class="box">${ICON.tick}</span><span class="sn">${s[0]}</span><span class="txt">${esc(s[1])}</span><span class="ar" lang="ar">${s[2]}</span></label>`).join('')}</div>
  </section>`;
}
function pickWord() {
  const weights = WORDS.map((_, i) => { const sc = S.words[i] || 0; return sc >= 3 ? 0.4 : 4 - sc; });
  const prev = quiz && quiz.idx;
  let r = Math.random() * weights.reduce((a, b) => a + b, 0), idx = 0;
  for (; idx < weights.length; idx++) { r -= weights[idx]; if (r <= 0) break; }
  idx = Math.min(idx, WORDS.length - 1);
  if (idx === prev) idx = (idx + 1 + Math.floor(Math.random() * (WORDS.length - 1))) % WORDS.length;
  return idx;
}
function nextQuiz(anim) {
  const idx = pickWord();
  const others = WORDS.map((_, i) => i).filter(i => i !== idx && WORDS[i][1] !== WORDS[idx][1]).sort(() => Math.random() - 0.5).slice(0, 3);
  quiz = { idx, opts: [idx, ...others].sort(() => Math.random() - 0.5), answered: false };
  const el = $('#quiz');
  if (anim && el && !reduceMotion()) { el.classList.add('out'); setTimeout(() => { el.classList.remove('out'); drawQuiz(); el.classList.remove('in'); void el.offsetWidth; el.classList.add('in'); }, 220); }
  else drawQuiz();
}
function drawQuiz() {
  const el = $('#quiz'); if (!el || !quiz) return;
  const w = WORDS[quiz.idx], sc = Math.min(3, S.words[quiz.idx] || 0);
  el.innerHTML = `<div class="word" lang="ar">${w[0]}</div>
    <div class="root">${w[2] ? `racine <span class="ar" lang="ar">${w[2]}</span>` : 'mot-outil'}</div>
    <div class="opts">${quiz.opts.map(o => `<button class="opt" data-q="${o}">${esc(WORDS[o][1])}</button>`).join('')}</div>
    <div class="quiz-foot"><span class="num">Session ${session.ok}/${session.n}</span>
      <span class="mastery" aria-label="Maîtrise : ${sc} sur 3">${[0, 1, 2].map(i => `<i class="${i < sc ? 'on' : ''}"></i>`).join('')}</span>
      <span id="qnext" style="min-width:96px;text-align:right"></span></div>`;
}
function answerQuiz(btn) {
  if (!quiz || quiz.answered) return;
  quiz.answered = true;
  const pick = Number(btn.dataset.q), ok = pick === quiz.idx;
  session.n++;
  if (ok) { session.ok++; S.words[quiz.idx] = (S.words[quiz.idx] || 0) + 1; haptic(); if (S.words[quiz.idx] === 3) reward(2, { msg: ['Mot maîtrisé', `${WORDS[quiz.idx][0]} · ${WORDS[quiz.idx][1]}`] }); }
  else S.words[quiz.idx] = Math.max(0, (S.words[quiz.idx] || 0) - 1);
  save();
  $$('.opt').forEach(b => { const v = Number(b.dataset.q); b.classList.add(v === quiz.idx ? 'good' : v === pick ? 'bad' : 'dim'); b.disabled = true; });
  if (!ok && !reduceMotion()) btn.classList.add('shake');
  const sc = Math.min(3, S.words[quiz.idx] || 0);
  $$('.mastery i').forEach((i, k) => i.classList.toggle('on', k < sc));
  $('#qnext').innerHTML = `<button class="btn sm" id="qgo">Suivant</button>`;
  $('#wk').textContent = wordsKnown();
  $('#constel').innerHTML = constellation();
  const star = $(`[data-star="${quiz.idx}"]`); if (star && !reduceMotion()) star.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.8)' }, { transform: 'scale(1)' }], { duration: 600, easing: 'ease-out', transformOrigin: 'center', transformBox: 'fill-box' });
  showStar(quiz.idx);
  $('#qgo').focus({ preventScroll: true });
}
function showStar(i) {
  const w = WORDS[i], sc = Math.min(3, S.words[i] || 0);
  $('#ctip').innerHTML = `<span class="ar" lang="ar" style="font-size:1.25rem">${w[0]}</span> · ${esc(w[1])} · <span class="num">${sc}/3</span>`;
}

/* =====================================================================
   11. ROUTINE — l'anneau des 4 blocs
   ===================================================================== */
function dayBlocks(k) { return S.days[k] && !S.blocks[k] ? [1, 1, 1, 1] : (S.blocks[k] || [0, 0, 0, 0]); }
function vRoutine() {
  const k = todayISO(), bl = dayBlocks(k), n = bl.filter(Boolean).length, st = streak();
  let a = 0; const GAP = 3, total = ROUTINE.reduce((s, r) => s + r[0], 0);
  const segs = ROUTINE.map((r, i) => {
    const span = r[0] / total * 360, a0 = a + GAP / 2, a1 = a + span - GAP / 2, mid = a + span / 2; a += span;
    const [lx, ly] = polar(118, mid);
    return `<path class="seg-arc ${bl[i] ? 'on' : ''}" data-block="${i}" d="${arc(118, a0, a1)}" role="button" tabindex="0" aria-pressed="${!!bl[i]}" aria-label="${r[1]}, ${r[0]} minutes"/>
      <text class="seg-lbl ${bl[i] ? 'on' : ''}" x="${lx.toFixed(1)}" y="${ly.toFixed(1)}">${r[0]}′</text>`;
  }).join('');
  const start = addDays(mondayOf(new Date()), -21); let cells = '';
  for (let i = 0; i < 28; i++) {
    const d = addDays(start, i), key = iso(d), future = key > k, b = dayBlocks(key), p = S.days[key] ? 100 : b.filter(Boolean).length * 25;
    cells += `<button class="day ${S.days[key] ? 'on' : ''} ${key === k ? 'today' : ''}" data-day="${key}" ${future ? 'disabled' : ''} style="--p:${p}" aria-pressed="${!!S.days[key]}" aria-label="${DAY_LONG.format(d)}${S.days[key] ? ', routine faite' : ''}"><i></i><span>${d.getDate()}</span></button>`;
  }
  const last28 = Array.from({ length: 28 }, (_, i) => iso(addDays(new Date(), -i))).filter(x => S.days[x]).length;
  return `${pageHead('Routine', '1 h 30 par jour, calée sur tes deux emplois.', 'routine')}
  <div class="ring-wrap ${n === 4 ? 'complete' : ''}" id="ringWrap">
    <svg viewBox="-150 -150 300 300" aria-label="Blocs de la routine du jour">${segs}</svg>
    <div class="ring-center">${n === 4
      ? `<div><p class="big" style="color:var(--gold)">${st}<span style="font-size:1.5rem"> j</span></p><p>Journée validée · série en cours</p></div>`
      : `<div><p class="big num">${n}<span style="font-size:1.5rem;color:var(--muted)">/4</span></p><p>blocs faits aujourd'hui</p></div>`}</div>
  </div>
  <div class="blocks">${ROUTINE.map((r, i) => `<button class="block ${bl[i] ? 'on' : ''}" data-block="${i}" aria-pressed="${!!bl[i]}"><b>${r[0]} min</b><span><h3>${r[1]}</h3><span class="small muted">${r[2]}</span></span><span class="dotc">${ICON.tick}</span></button>`).join('')}</div>
  <p class="hint">Un jour chargé ? Garde au moins l'audio et l'arabe.</p>
  <section>
    <div class="stats-line"><div><b class="num">${st}</b><span>jours d'affilée</span></div><div><b class="num">${bestStreak()}</b><span>record</span></div><div><b class="num">${last28}/28</b><span>sur 4 semaines</span></div></div>
  </section>
  <section style="margin-top:28px">
    <div class="cal">${['L', 'M', 'M', 'J', 'V', 'S', 'D'].map(x => `<span class="dh">${x}</span>`).join('')}${cells}</div>
    <p class="hint">Touche un jour passé pour le valider ou l'annuler en entier.</p>
  </section>`;
}
function toggleBlock(i) {
  const k = todayISO(), bl = dayBlocks(k).slice();
  bl[i] = bl[i] ? 0 : 1; S.blocks[k] = bl;
  const all = bl.every(Boolean), was = !!S.days[k];
  if (all) S.days[k] = true; else delete S.days[k];
  save(); askPersist(); if (bl[i]) haptic();
  render();
  if (!bl[i]) { unreward(1 + (was ? 4 : 0)); return; }
  if (all && !was) reward(5, { big: true, msg: [`Routine validée · ${streak()} jour${streak() > 1 ? 's' : ''} d'affilée`, 'Une journée de plus sur la bonne trajectoire.'] });
  else reward(1);
}

/* =====================================================================
   12. HEURES — cadran 24 h, argent, vérification de paie
   ===================================================================== */
const H = { month: todayISO().slice(0, 7), filter: 'all', form: null };
function lastShift(emp) { return sortShifts(S.shifts.filter(x => !emp || x.emp === emp))[0] || null; }
function freshForm(emp) {
  const e = emp || (lastShift() || {}).emp || 'gare', l = lastShift(e), d = todayISO();
  return { emp: e, date: d, start: l ? l.start : (e === 'gare' ? '06:00' : '18:30'), end: l ? l.end : (e === 'gare' ? '13:00' : '23:00'), pause: l ? Number(l.pause) || 0 : 0, ferie: !!holidayName(d), note: '' };
}
const m2deg = m => m / 1440 * 360;
const hhmm = m => `${pad(Math.floor(m / 60) % 24)}:${pad(m % 60)}`;
function vDial() {
  const R = 118, ns = toMin(S.settings.nightStart), ne = toMin(S.settings.nightEnd);
  let ticks = '', labels = '';
  for (let h = 0; h < 24; h++) {
    const [x0, y0] = polar(137, h * 15), [x1, y1] = polar(h % 3 ? 141 : 144, h * 15);
    ticks += `<line class="tick" x1="${x0.toFixed(1)}" y1="${y0.toFixed(1)}" x2="${x1.toFixed(1)}" y2="${y1.toFixed(1)}"/>`;
    if (h % 3 === 0) { const [lx, ly] = polar(88, h * 15); labels += `<text class="hl" x="${lx.toFixed(1)}" y="${ly.toFixed(1)}">${pad(h)}</text>`; }
  }
  return `<div class="tdial" id="tdial">
    <svg viewBox="-160 -160 320 320" id="tdialSvg" aria-label="Cadran des heures">
      <circle class="trk" r="${R}"/>
      <path class="night" d="${arc(R, m2deg(ns), m2deg(ne))}"/>
      ${ticks}${labels}
      <path class="shift-arc" id="shiftArc" d=""/>
      <g class="handle start" id="hStart" data-h="start" role="slider" tabindex="0" aria-label="Heure de début" aria-valuemin="0" aria-valuemax="1435"><circle class="hit" r="26"/><circle class="hb" r="16"/><path d="M-3 -5 L5 0 L-3 5Z" fill="var(--gold-ink)"/></g>
      <g class="handle end" id="hEnd" data-h="end" role="slider" tabindex="0" aria-label="Heure de fin" aria-valuemin="0" aria-valuemax="1435"><circle class="hit" r="26"/><circle class="hb" r="16"/><rect x="-4" y="-4" width="8" height="8" rx="1.5" fill="var(--gold)"/></g>
    </svg>
    <div class="tdial-center"><div><p class="big num" id="tdur"></p><p id="tsub"></p></div></div>
  </div>`;
}
function updateDial() {
  const f = H.form, R = 118; if (!$('#tdial')) return;
  const s = toMin(f.start), e = toMin(f.end);
  $('#shiftArc').setAttribute('d', s === e ? '' : arc(R, m2deg(s), m2deg(e)));
  [['#hStart', s], ['#hEnd', e]].forEach(([id, m]) => {
    const [x, y] = polar(R, m2deg(m)), g = $(id);
    g.setAttribute('transform', `translate(${x.toFixed(2)} ${y.toFixed(2)})`);
    g.setAttribute('aria-valuenow', m); g.setAttribute('aria-valuetext', hhmm(m));
  });
  const c = calc(f);
  $('#tdur').textContent = fmtH(c.worked);
  const extra = [c.night ? `${fmtH(c.night)} de nuit` : '', c.sunday ? `${fmtH(c.sunday)} dimanche` : ''].filter(Boolean).join(' · ');
  $('#tsub').textContent = extra || (c.overnight ? 'passe minuit' : `${f.start} → ${f.end}`);
  if ($('#fStart').value !== f.start) $('#fStart').value = f.start;
  if ($('#fEnd').value !== f.end) $('#fEnd').value = f.end;
}
function bindDial() {
  const svg = $('#tdialSvg'); if (!svg) return;
  let which = null, lastQ = null;
  const toMinutes = ev => {
    const b = svg.getBoundingClientRect(), dx = ev.clientX - (b.left + b.width / 2), dy = ev.clientY - (b.top + b.height / 2);
    let deg = Math.atan2(dx, -dy) * 180 / Math.PI; if (deg < 0) deg += 360;
    return (Math.round(deg / 360 * 1440 / 5) * 5) % 1440;
  };
  $$('.handle', svg).forEach(h => {
    h.addEventListener('pointerdown', ev => { ev.preventDefault(); which = h.dataset.h; h.setPointerCapture(ev.pointerId); h.classList.add('drag'); });
    h.addEventListener('pointermove', ev => {
      if (which !== h.dataset.h) return;
      const m = toMinutes(ev); H.form[which] = hhmm(m); updateDial();
      const q = Math.floor(m / 15); if (q !== lastQ) { lastQ = q; haptic(); }
    });
    const up = () => { which = null; h.classList.remove('drag'); };
    h.addEventListener('pointerup', up); h.addEventListener('pointercancel', up);
    h.addEventListener('keydown', ev => {
      const step = { ArrowUp: 5, ArrowRight: 5, ArrowDown: -5, ArrowLeft: -5, PageUp: 60, PageDown: -60 }[ev.key]; if (!step) return;
      ev.preventDefault(); const k = h.dataset.h; H.form[k] = hhmm((toMin(H.form[k]) + step + 1440) % 1440); updateDial();
    });
  });
  updateDial();
}
function pocketBlock() {
  const ym = todayISO().slice(0, 7);
  const t = { gare: sumShifts(shiftsIn(ym, 'gare')), pizza: sumShifts(shiftsIn(ym, 'pizza')) };
  const baseG = numv(S.settings.base.gare) * 60, bg = baseG || 1, bp = Math.max(numv(S.settings.base.pizza) * 60 || 4800, t.pizza.worked);
  const diff = t.gare.worked - baseG;
  return `<div class="pocket">
    <svg viewBox="-68 -68 136 136" aria-label="Heures du mois">
      <circle r="58" fill="none" stroke="var(--raise)" stroke-width="9"/><circle r="58" fill="none" stroke="var(--gold)" stroke-width="9" stroke-linecap="round" transform="rotate(-90)" ${ringDash(58, t.gare.worked / bg)}/>
      <circle r="44" fill="none" stroke="var(--raise)" stroke-width="9"/><circle r="44" fill="none" stroke="var(--mint)" stroke-width="9" stroke-linecap="round" transform="rotate(-90)" ${ringDash(44, t.pizza.worked / bp)}/>
    </svg>
    <div>
      <p class="eyebrow">Heures · ${monthLabel(ym).split(' ')[0]}</p>
      <p class="big num" style="color:var(--ink)">${fmtH(t.gare.worked + t.pizza.worked)}</p>
      <div class="lines">
        <span><i class="legend" style="background:var(--gold)"></i>Gare <b>${fmtH(t.gare.worked)}</b>${baseG ? ` / ${String(numv(S.settings.base.gare)).replace('.', ',')} h` : ''}</span>
        <span><i class="legend" style="background:var(--mint)"></i>Mister Pizza <b>${fmtH(t.pizza.worked)}</b></span>
      </div>
    </div>
  </div>`;
}
function counterBlock() {
  const c = gareCounter(); if (!c) return '';
  const startLbl = monthLabel(c.start);
  if (!c.started) return `<section style="margin-top:30px"><p class="eyebrow"><span class="edot gare" style="margin-right:6px"></span>Compteur Gare</p>
    <p style="font:400 2.5rem/1.1 var(--serif);margin-top:6px" class="num">${fmtSigned(c.init)}</p>
    <p class="small muted">Démarre le 1er ${startLbl}. Chaque mois, les heures au-delà de ${numv(S.settings.base.gare)} h s'ajoutent, celles en dessous (repos de rattrapage) se retirent.</p>
    ${c.init ? '' : '<button class="btn sm ghost" data-open="settings" style="margin-top:12px">Entrer mon solde actuel</button>'}</section>`;
  const prevLbl = c.months.length ? `fin ${monthLabel(c.months[c.months.length - 1].ym).split(' ')[0]}` : 'au départ';
  const proj = c.closed + c.cur.diff;
  const col = c.closed < 0 ? 'var(--danger)' : 'var(--gold)';
  return `<section style="margin-top:30px">
    <p class="eyebrow"><span class="edot gare" style="margin-right:6px"></span>Compteur Gare · heures stockées</p>
    <div class="row between" style="align-items:flex-end;margin-top:6px">
      <div><p style="font:400 3rem/1 var(--serif);color:${col}" class="num">${fmtSigned(c.closed)}</p><p class="small muted">${c.closed < 0 ? 'à rattraper' : 'à récupérer en repos'} · ${prevLbl}</p></div>
      <div style="text-align:right"><p class="small muted">${monthLabel(c.cur.ym).split(' ')[0]} en cours</p><p class="num" style="font-weight:600">${fmtH(c.cur.w)} / ${numv(S.settings.base.gare)} h</p><p class="small muted num">fin de mois si tu t'arrêtes là : ${fmtSigned(proj)}</p></div>
    </div>
    ${c.months.length ? `<details style="margin-top:12px"><summary class="small" style="color:var(--gold);font-weight:650;min-height:44px;display:flex;align-items:center;cursor:pointer">Détail par mois</summary>
      <div class="weeks">${c.init ? `<div class="wk"><span>Solde de départ</span><b class="num">${fmtSigned(c.init)}</b></div>` : ''}${c.months.map(m => `<div class="wk"><span style="text-transform:capitalize">${monthLabel(m.ym)}</span><b class="num">${fmtSigned(m.bal)}</b><small>${fmtH(m.w)} travaillées · ${fmtSigned(m.diff)}</small></div>`).join('')}</div></details>` : ''}
  </section>`;
}
function vHeures() {
  if (!H.form) H.form = freshForm();
  const f = H.form, mon = mondayOf(new Date()), wk = sumShifts(shiftsWeek(mon));
  const overs = Object.keys(EMP).filter(k => numv(S.settings.threshold[k]) > 0 && sumShifts(shiftsWeek(mon, k)).worked > numv(S.settings.threshold[k]) * 60);
  const backupDays = S.lastExport ? Math.floor((Date.now() - S.lastExport) / 864e5) : null;
  const needBackup = S.shifts.length >= 3 && (backupDays === null || backupDays >= 14);
  const hol = holidayName(f.date);
  return `${argentTop('heures')}
  ${pocketBlock()}
  ${counterBlock()}
  <section id="entry" style="margin-top:36px">
    <h2>Noter un service</h2>
    <div class="seg" role="group" aria-label="Employeur">${Object.keys(EMP).map(k => `<button data-emp="${k}" aria-pressed="${f.emp === k}"><span class="dot"></span>${EMP[k]}</button>`).join('')}</div>
    ${vDial()}
    <div class="time-chips">
      <label class="time-chip"><span>Début</span><input type="time" id="fStart" value="${f.start}"></label>
      <label class="time-chip"><span>Fin</span><input type="time" id="fEnd" value="${f.end}"></label>
    </div>
    <div class="group" style="margin-top:12px" id="formGroup">
      <div class="cell"><label for="fDate">Date</label><input type="date" id="fDate" value="${f.date}"></div>
      <div class="cell"><span class="lbl" id="pauseLbl">Pause</span><div class="stepper" role="group" aria-labelledby="pauseLbl"><button data-pause="-15" aria-label="Moins 15 minutes">−</button><output id="fPause" class="num">${f.pause} min</output><button data-pause="15" aria-label="Plus 15 minutes">+</button></div></div>
      <div class="cell"><label for="fFerie">Jour férié<span class="small muted" id="ferieName" style="display:block">${hol ? esc(hol) : ''}</span></label><span class="switch"><input type="checkbox" id="fFerie" ${f.ferie ? 'checked' : ''}><span></span></span></div>
      <div class="cell"><input type="text" class="full" id="fNote" value="${esc(f.note)}" placeholder="Note (facultatif)" aria-label="Note" autocomplete="off"></div>
    </div>
    <div class="form-actions">
      <button class="btn" id="saveShift">Enregistrer</button>
      <button class="btn quiet" id="dupShift" ${S.shifts.length ? '' : 'disabled'}>Dupliquer le dernier</button>
    </div>
  </section>
  <section>
    <p class="eyebrow">Cette semaine · du ${DAY_MONTH.format(mon)} au ${DAY_MONTH.format(addDays(mon, 6))}</p>
    <div class="row between" style="margin-top:6px;align-items:baseline"><p style="font:400 2.5rem/1 var(--serif)" class="num">${fmtH(wk.worked)}</p>
      <p class="small muted num" style="text-align:right">${Object.keys(EMP).map(k => `${EMP[k]} ${fmtH(sumShifts(shiftsWeek(mon, k)).worked)}`).join('<br>')}</p></div>
    ${overs.length ? `<div class="alert">${ICON.warn}<span>Seuil hebdo dépassé chez ${overs.map(k => EMP[k]).join(' et ')}. Vérifie que ces heures sup apparaissent sur ta fiche de paie.</span></div>` : ''}
  </section>
  <section id="month">${vMonth()}</section>
  ${vArchive()}
  ${needBackup ? `<div class="nudge"><span>${backupDays === null ? "Tu n'as encore jamais sauvegardé tes données." : `Dernière sauvegarde il y a ${backupDays} jours.`}</span><button class="btn sm quiet" data-export>Sauvegarder</button></div>` : ''}`;
}
function vArchive() {
  const months = [...new Set(S.shifts.map(x => x.date.slice(0, 7)))].sort().reverse();
  if (months.length < 1) return '';
  const c = gareCounter(), bal = {}; if (c) c.months.forEach(m => { bal[m.ym] = m.bal; });
  const base = numv(S.settings.base.gare) * 60;
  return `<section><h2>Archive des compteurs</h2>
    <div class="archive">${months.map(ym => { const g = sumShifts(shiftsIn(ym, 'gare')), pz = sumShifts(shiftsIn(ym, 'pizza'));
      return `<button class="arow" data-arch="${ym}"><span class="am">${monthLabel(ym)}</span>
        <span class="ac"><small>Gare</small><b class="num">${fmtH(g.worked)}</b>${base && g.n ? `<small class="num" style="color:var(--${g.worked >= base ? 'gold' : 'muted'})">${fmtSigned(g.worked - base)}</small>` : ''}</span>
        <span class="ac"><small>Compteur</small><b class="num">${bal[ym] != null ? fmtSigned(bal[ym]) : ym === todayISO().slice(0, 7) ? '<span class="muted" style="font-weight:500">en cours</span>' : '—'}</b></span>
        <span class="ac"><small>Pizza</small><b class="num">${fmtH(pz.worked)}</b></span></button>`; }).join('')}</div>
    <p class="hint">Compteur = solde de tes heures stockées à la Gare à la fin du mois. Touche un mois pour voir son détail.</p></section>`;
}
function vMonth() {
  const ym = H.month, st = S.settings;
  const blocks = Object.keys(EMP).map(k => {
    const t = sumShifts(shiftsIn(ym, k)), base = numv(st.base[k]) * 60, mo = money(k, t);
    const slip = S.payslips[`${ym}|${k}`], slipMin = slip != null && slip !== '' ? parseHours(slip) : null;
    let gap = '';
    if (slipMin != null) {
      const diff = slipMin - t.worked;
      gap = Math.abs(diff) < 1 ? `<span class="pill mint">Ça correspond</span>` : diff < 0 ? `<span class="pill danger num">Il te manque ${fmtH(-diff)}</span>` : `<span class="pill gold num">+${fmtH(diff)} sur la fiche</span>`;
    }
    const baseLine = k === 'gare' && base ? (t.worked >= base ? `<span class="pill gold num">${fmtSigned(t.worked - base)} vers ton compteur</span>` : `<span class="small muted num">Base ${numv(st.base[k])} h · ${fmtSigned(t.worked - base)}</span>`) : '<span class="small muted">Total du mois</span>';
    return `<div class="emp-block">
      <div class="head"><h3 class="row" style="gap:8px"><span class="edot ${k}"></span>${EMP[k]}</h3><b class="num">${fmtH(t.worked)}</b></div>
      <div class="row between" style="margin-top:6px;flex-wrap:wrap">${baseLine}<span class="small muted num">${fmtDec(t.worked)} h · ${t.n} service${t.n > 1 ? 's' : ''}</span></div>
      <div class="kv"><div>Nuit<b>${fmtH(t.night)}</b></div><div>Dimanche<b>${fmtH(t.sunday)}</b></div><div>Férié<b>${fmtH(t.holiday)}</b></div></div>
      <div class="payslip"><label for="slip-${k}">Heures sur ta fiche de paie</label><input id="slip-${k}" data-slip="${k}" inputmode="decimal" placeholder="ex. ${numv(st.base[k]) || '151,67'}" value="${esc(slip ?? '')}"><span>${gap}</span></div>
    </div>`;
  }).join('');
  const tot = sumShifts(shiftsIn(ym));
  const first = parseDate(ym + '-01'), last = new Date(first.getFullYear(), first.getMonth() + 1, 0);
  let weeks = '';
  for (let m = mondayOf(first); m <= last; m = addDays(m, 7)) {
    const all = sumShifts(shiftsWeek(m)); if (!all.n) continue;
    const parts = Object.keys(EMP).map(k => { const w = sumShifts(shiftsWeek(m, k)).worked; return w ? `${EMP[k]} ${fmtH(w)}` : ''; }).filter(Boolean).join(' · ');
    const over = Object.keys(EMP).filter(k => numv(st.threshold[k]) > 0 && sumShifts(shiftsWeek(m, k)).worked > numv(st.threshold[k]) * 60);
    weeks += `<div class="wk"><span>Du ${DAY_MONTH.format(m)} au ${DAY_MONTH.format(addDays(m, 6))}</span><b class="num">${fmtH(all.worked)}</b><small>${parts}${over.length ? ` <span class="pill warn">Seuil dépassé</span>` : ''}</small></div>`;
  }
  const list = sortShifts(shiftsIn(ym, H.filter === 'all' ? null : H.filter));
  const rows = list.map(sh => {
    const c = calc(sh), d = parseDate(sh.date);
    const tags = [c.night ? `<span class="pill">Nuit ${fmtH(c.night)}</span>` : '', c.sunday ? `<span class="pill">Dim. ${fmtH(c.sunday)}</span>` : '', sh.ferie ? '<span class="pill gold">Férié</span>' : ''].join('');
    return `<button class="shift" data-edit="${sh.id}"><span class="d"><b>${d.getDate()}</b><span>${DAY_SHORT.format(d).replace('.', '')}</span></span>
      <span><span class="who"><span class="edot ${sh.emp}"></span>${EMP[sh.emp]}</span><span class="when">${sh.start} → ${sh.end}${Number(sh.pause) ? ` · pause ${sh.pause} min` : ''}</span>${sh.note ? `<span class="when">${esc(sh.note)}</span>` : ''}${tags ? `<span class="tags">${tags}</span>` : ''}</span>
      <span class="dur">${fmtH(c.worked)}</span></button>`;
  }).join('');
  return `<div class="month-nav"><h2>${monthLabel(ym)}</h2><div class="row" style="gap:0">
      <button class="icon-btn" data-mnav="-1" aria-label="Mois précédent">${ICON.prev}</button>
      <button class="icon-btn" data-mnav="1" aria-label="Mois suivant" ${ym >= todayISO().slice(0, 7) ? 'disabled style="opacity:.3"' : ''}>${ICON.next}</button></div></div>
    <p class="small muted num" style="margin:-4px 0 6px">Total ${fmtH(tot.worked)} (${fmtDec(tot.worked)} h) · ${tot.n} service${tot.n > 1 ? 's' : ''}</p>
    ${blocks}
    <p class="hint">Compare ces totaux avec ta fiche de paie. Nuit, dimanche et férié t'aident à vérifier les majorations.</p>
    ${weeks ? `<h3 style="margin:30px 0 8px">Semaines</h3><div class="weeks">${weeks}</div>` : ''}
    <div class="row between" style="margin:30px 0 10px"><h3>Historique</h3><button class="btn sm ghost" id="csv" ${tot.n ? '' : 'disabled'}>Exporter en CSV</button></div>
    <div class="filters" role="group" aria-label="Filtrer par employeur">
      <button class="chip" data-filter="all" aria-pressed="${H.filter === 'all'}">Tous</button>
      ${Object.keys(EMP).map(k => `<button class="chip" data-filter="${k}" aria-pressed="${H.filter === k}">${EMP[k]}</button>`).join('')}
    </div>
    <div>${rows || `<p class="empty">Aucun service noté en ${monthLabel(ym)}.</p>`}</div>`;
}
function readForm() {
  const f = H.form; if (!$('#fDate')) return f;
  f.date = $('#fDate').value || todayISO(); f.start = $('#fStart').value || f.start; f.end = $('#fEnd').value || f.end;
  f.ferie = $('#fFerie').checked; f.note = $('#fNote').value.trim();
  return f;
}
function saveShift() {
  const f = readForm();
  if (f.start === f.end) { toast('Le début et la fin sont identiques.'); return; }
  const sh = { id: uid(), emp: f.emp, date: f.date, start: f.start, end: f.end, pause: Number(f.pause) || 0, ferie: !!f.ferie, note: f.note, created: Date.now() };
  S.shifts.push(sh); save(); askPersist(); haptic();
  H.month = sh.date.slice(0, 7); H.form = freshForm(sh.emp);
  render();
  toast(`${EMP[sh.emp]} · ${fmtH(calc(sh).worked)} enregistré`, 'Annuler', () => { S.shifts = S.shifts.filter(x => x.id !== sh.id); save(); render(); });
}
function dupLast() {
  const l = lastShift(); if (!l) return;
  const d = $('#fDate').value || todayISO();
  H.form = { emp: l.emp, date: d, start: l.start, end: l.end, pause: Number(l.pause) || 0, ferie: !!holidayName(d), note: l.note || '' };
  render();
  const g = $('#tdial'); if (g && !reduceMotion()) { g.classList.remove('flash'); void g.offsetWidth; g.classList.add('flash'); }
  toast('Dernier service repris. Vérifie la date, puis enregistre.');
}
function exportCSV() {
  const ym = H.month, list = shiftsIn(ym).slice().sort((a, b) => (a.date + a.start).localeCompare(b.date + b.start));
  const n = v => (v / 60).toFixed(2).replace('.', ','), q = s => `"${String(s ?? '').replace(/"/g, '""')}"`, hm = v => fmtH(v).replace(' h ', ':');
  const lines = [['Date', 'Jour', 'Employeur', 'Début', 'Fin', 'Pause (min)', 'Heures (décimal)', 'Heures (h:min)', 'Dont nuit', 'Dont dimanche', 'Férié', 'Note'].join(';')];
  list.forEach(sh => { const c = calc(sh), d = parseDate(sh.date);
    lines.push([sh.date.split('-').reverse().join('/'), DAY_SHORT.format(d).replace('.', ''), EMP[sh.emp], sh.start, sh.end, sh.pause || 0, n(c.worked), hm(c.worked), n(c.night), n(c.sunday), sh.ferie ? 'oui' : 'non', q(sh.note)].join(';')); });
  lines.push('');
  Object.keys(EMP).forEach(k => { const t = sumShifts(shiftsIn(ym, k)); if (t.n) lines.push([`Total ${EMP[k]}`, '', '', '', '', '', n(t.worked), hm(t.worked), n(t.night), n(t.sunday), n(t.holiday), ''].join(';')); });
  const t = sumShifts(list); lines.push(['Total', '', '', '', '', '', n(t.worked), hm(t.worked), n(t.night), n(t.sunday), n(t.holiday), ''].join(';'));
  deliverFile(`heures-${ym}.csv`, '﻿' + lines.join('\r\n'), 'text/csv;charset=utf-8');
}
function openShift(id) {
  const sh = S.shifts.find(x => x.id === id); if (!sh) return;
  const body = $('#shiftSheetBody');
  body.innerHTML = `<div class="grab"></div>
    <div class="sheet-top"><button class="link-btn" data-close style="text-align:left">Annuler</button><h2 id="shiftSheetTitle">Modifier</h2><button class="link-btn" id="eSave" style="text-align:right">OK</button></div>
    <div class="seg" role="group" aria-label="Employeur">${Object.keys(EMP).map(k => `<button data-eemp="${k}" aria-pressed="${sh.emp === k}"><span class="dot"></span>${EMP[k]}</button>`).join('')}</div>
    <div class="group" style="margin-top:12px">
      <div class="cell"><label for="eDate">Date</label><input type="date" id="eDate" value="${sh.date}"></div>
      <div class="cell"><label for="eStart">Début</label><input type="time" id="eStart" value="${sh.start}"></div>
      <div class="cell"><label for="eEnd">Fin</label><input type="time" id="eEnd" value="${sh.end}"></div>
      <div class="cell"><label for="ePause">Pause</label><input type="number" inputmode="numeric" min="0" step="5" id="ePause" value="${Number(sh.pause) || 0}"><span class="unit">min</span></div>
      <div class="cell"><label for="eFerie">Jour férié</label><span class="switch"><input type="checkbox" id="eFerie" ${sh.ferie ? 'checked' : ''}><span></span></span></div>
      <div class="cell"><input type="text" class="full" id="eNote" value="${esc(sh.note || '')}" placeholder="Note (facultatif)" aria-label="Note"></div>
    </div>
    <button class="btn danger block" style="margin-top:22px" id="eDel">Supprimer ce service</button>`;
  body.dataset.id = id;
  $('#shiftSheet').showModal();
}
function commitShiftEdit() {
  const id = $('#shiftSheetBody').dataset.id, sh = S.shifts.find(x => x.id === id); if (!sh) return;
  const st = $('#eStart').value, en = $('#eEnd').value;
  if (!st || !en || st === en) { toast('Vérifie les heures de début et de fin.'); return; }
  sh.emp = $('[data-eemp][aria-pressed="true"]').dataset.eemp; sh.date = $('#eDate').value || sh.date; sh.start = st; sh.end = en;
  sh.pause = Math.max(0, Number($('#ePause').value) || 0); sh.ferie = $('#eFerie').checked; sh.note = $('#eNote').value.trim();
  save(); $('#shiftSheet').close(); render(); toast('Service modifié');
}
function deleteShift() {
  const id = $('#shiftSheetBody').dataset.id, i = S.shifts.findIndex(x => x.id === id); if (i < 0) return;
  const [removed] = S.shifts.splice(i, 1);
  save(); $('#shiftSheet').close(); render();
  toast('Service supprimé', 'Annuler', () => { S.shifts.push(removed); save(); render(); }, 6000);
}


/* =====================================================================
   12 bis. ARGENT — budget « reste à vivre » + enveloppes + cagnottes
   Méthode : 1) on se paie d'abord (épargne), 2) on met de côté les
   charges fixes, 3) le reste se dépense librement, avec un budget par
   jour qui s'ajuste à chaque dépense. Les enveloppes limitent les
   catégories où l'argent file vite.
   ===================================================================== */
const CATS = [
  ['courses', 'Courses'], ['resto', 'Restos & snacks'], ['transport', 'Essence & transport'], ['sorties', 'Sorties & loisirs'],
  ['shopping', 'Shopping'], ['maison', 'Maison'], ['sante', 'Santé'], ['abos', 'Abonnements'], ['cadeaux', 'Cadeaux & dons'],
  ['formation', 'Livres & formation'], ['divers', 'Divers']
];
const catName = id => (CATS.find(c => c[0] === id) || [id, 'Divers'])[1];
const INC_CATS = [['salaire', 'Salaire'], ['virement', 'Virement reçu'], ['vente', 'Vente'], ['rembours', 'Remboursement'], ['autre', 'Autre rentrée']];
const incName = id => (INC_CATS.find(c => c[0] === id) || [id, 'Rentrée'])[1];
function defaultMoney() {
  return {
    incomes: [
      { id: 'inc-gare', label: 'Salaire Gare', amount: '', day: 31, src: 'gare' },
      { id: 'inc-pizza', label: 'Salaire Mister Pizza', amount: '', day: 5, src: 'pizza' },
      { id: 'inc-femme', label: 'Virement de ma femme', amount: '', day: 1, src: '' }
    ],
    fixed: [
      { id: 'fx-loyer', label: 'Loyer', amount: '', day: 5 },
      { id: 'fx-energie', label: 'Électricité & gaz', amount: '', day: 10 },
      { id: 'fx-internet', label: 'Internet & téléphone', amount: '', day: 12 },
      { id: 'fx-assurance', label: 'Assurances', amount: '', day: 15 }
    ],
    envelopes: [{ id: 'env-courses', cat: 'courses', limit: '' }, { id: 'env-resto', cat: 'resto', limit: '' }, { id: 'env-transport', cat: 'transport', limit: '' }],
    pots: [{ id: 'pot-secu', name: 'Épargne de sécurité', target: '4000', start: '', monthly: '', deadline: '', safety: true }],
    debt: { total: '2000', start: '', monthly: '' }, safetyGoal: '4000', investments: [], auto: true, life: '',
    tx: [], months: {}
  };
}
const eur2 = v => v.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' });
const A = { open: new Set(), view: 'heures', month: todayISO().slice(0, 7), kind: 'exp', cat: 'courses', catFilter: 'all' };
try { const v = localStorage.getItem('sdp-argent-view'); if (v === 'budget' || v === 'heures') A.view = v; } catch (e) {}
const prevMonth = ym => { const d = parseDate(ym + '-01'); d.setMonth(d.getMonth() - 1); return iso(d).slice(0, 7); };
const daysIn = ym => { const d = parseDate(ym + '-01'); return new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate(); };

function expectedIncome(inc) {
  // Plus aucune prévision depuis les heures : seul un montant fixe saisi sert d'« attendu ».
  return { v: String(inc.amount).trim() !== '' ? numv(inc.amount) : 0, est: false };
}
const txIn = (ym, kind) => S.money.tx.filter(t => t.date.startsWith(ym) && (!kind || t.kind === kind));
function potBalance(p, upTo) {
  let b = numv(p.start);
  S.money.tx.forEach(t => { if (t.pot === p.id && (!upTo || t.date.slice(0, 7) <= upTo)) b += t.kind === 'save' ? numv(t.amount) : t.kind === 'withdraw' ? -numv(t.amount) : 0; });
  return b;
}
/* ----- Plan automatique : combien pour la dette et l'épargne ce mois-ci ----- */
const STARTER_CUSHION = 1000, PLAN_MARGIN = 0.10;
function lifeBudget(ym) {
  if (String(S.money.life).trim() !== '') return { v: numv(S.money.life), src: 'manuel' };
  const env = S.money.envelopes.reduce((a, e) => a + numv(e.limit), 0), hist = avgSpend(ym);
  if (!env && !hist) return { v: 0, src: 'inconnu' };
  return hist > env ? { v: Math.round(hist), src: 'historique' } : { v: env, src: 'enveloppes' };
}
/* Budget de vie laissé vide : l'app partage elle-même ce qui reste après les charges
   en trois parts (toi, remboursement, épargne), selon la phase. Arrondi à 10 € ;
   les arrondis et ce qui dépasse un plafond reviennent à la part « pour toi ». */
const SPLIT = { 1: [.30, .35, .35], 2: [.30, .55, .15], 3: [.35, 0, .65], 4: [.40, 0, .60] };
const partsMode = () => String(S.money.life).trim() === '';
function splitPlan(ym, incTotal, fixTotal, carry) {
  const M = S.money, others = M.pots.filter(p => !p.safety).reduce((a, p) => a + numv(p.monthly), 0);
  const remDebt = Math.max(0, numv(M.debt.total) - debtRepaid(prevMonth(ym)));
  const sp = M.pots.find(p => p.safety), safeBal = sp ? potBalance(sp, prevMonth(ym)) : 0;
  const safeNeed = Math.max(0, (numv(M.safetyGoal) || 4000) - safeBal);
  const avail = incTotal + carry - fixTotal - others;
  const phase = remDebt > 0 && safeBal < STARTER_CUSHION ? 1 : remDebt > 0 ? 2 : safeNeed > 0 ? 3 : 4;
  const [, rd, rs] = SPLIT[phase], base = Math.max(0, avail), r10 = v => Math.floor(v / 10) * 10;
  let debt = Math.min(remDebt, r10(base * rd)), safety = Math.min(phase === 4 ? Infinity : safeNeed, r10(base * rs));
  const spare = r10(base * rd) - debt; if (spare > 0 && safety < safeNeed) safety += Math.min(spare, safeNeed - safety);
  const toi = Math.max(0, avail - debt - safety);
  return { ok: true, auto: true, parts: true, avail, surplus: debt + safety, debt, safety, toi, extra: 0, phase: avail <= 0 ? 0 : phase, life: { v: toi, src: 'part' }, others, remDebt, safeBal };
}
function autoPlan(ym, incTotal, fixTotal, carry = 0) {
  const M = S.money, L = lifeBudget(ym);
  if (!(incTotal > 0)) return { ok: false, why: 'revenus', life: L };
  if (partsMode()) return splitPlan(ym, incTotal, fixTotal, carry);
  if (!(L.v > 0)) return { ok: false, why: 'vie', life: L };
  const others = M.pots.filter(p => !p.safety).reduce((a, p) => a + numv(p.monthly), 0);
  const remDebt = Math.max(0, numv(M.debt.total) - debtRepaid(prevMonth(ym)));
  const sp = M.pots.find(p => p.safety), safeBal = sp ? potBalance(sp, prevMonth(ym)) : 0;
  const safeNeed = Math.max(0, (numv(M.safetyGoal) || 4000) - safeBal);
  const avail = incTotal + carry - fixTotal - L.v - others;
  const surplus = Math.max(0, Math.floor(avail * (1 - PLAN_MARGIN) / 10) * 10);
  let phase, ratio;
  if (remDebt > 0 && safeBal < STARTER_CUSHION) { phase = 1; ratio = 0.5; }
  else if (remDebt > 0) { phase = 2; ratio = 0.8; }
  else if (safeNeed > 0) { phase = 3; ratio = 0; }
  else { phase = 4; ratio = 0; }
  let debt = Math.min(remDebt, Math.floor(surplus * ratio / 10) * 10), safety = Math.min(safeNeed, surplus - debt);
  let left = surplus - debt - safety;
  if (left > 0 && debt < remDebt) { const add = Math.min(left, remDebt - debt); debt += add; left -= add; }
  if (left > 0 && safety < safeNeed) { const add = Math.min(left, safeNeed - safety); safety += add; left -= add; }
  return { ok: true, auto: true, avail, surplus, debt, safety, extra: left, phase: surplus <= 0 ? 0 : phase, life: L, others, remDebt, safeBal };
}
function planFor(ym, incTotal, fixTotal, carry = 0) {
  const a = autoPlan(ym, incTotal, fixTotal, carry), o = (S.money.months[ym] || {}).plan;
  if (o && (o.debt !== '' || o.safety !== '')) return { ...a, ok: true, auto: false, debt: o.debt !== '' ? numv(o.debt) : (a.debt || 0), safety: o.safety !== '' ? numv(o.safety) : (a.safety || 0) };
  return a;
}
const PHASE_TXT = [
  'Ce mois-ci, tes revenus couvrent tout juste tes charges et ton budget de vie. Rien n\'est réservé : chaque euro remboursé ou épargné est un bonus.',
  'Tant que ton épargne de sécurité est sous 1 000 €, le surplus est partagé moitié-moitié : tu rembourses tout en te construisant un premier coussin.',
  'Premier coussin atteint : 80 % du surplus va à la dette pour t\'en libérer vite, 20 % continue vers ton objectif de sécurité.',
  'Dette soldée : tout le surplus part vers ton épargne de sécurité.',
  'Fondations posées : ce qui reste peut aller à l\'investissement.'
];
function vPlanCard(b) {
  if (!S.money.auto) return '';
  const P = b.plan, ym = A.month;
  if (!P.ok) return `<div class="plan-card"><p class="eyebrow">Plan du mois</p><p style="margin-top:8px">${P.why === 'revenus' ? 'Le plan se calcule dès que tu saisis un revenu reçu pour ce mois (dans « Revenus reçus », juste en dessous). Il se réajuste à chaque nouvelle rentrée.' : 'Indique ton <b>budget de vie</b> (courses, essence, sorties…) ou des plafonds d\'enveloppes : l\'app doit savoir ce qu\'il te faut pour vivre avant de répartir le reste.'}</p><button class="btn sm ghost" ${P.why === 'revenus' ? 'data-openinc' : 'data-bsetup'} style="margin-top:12px">${P.why === 'revenus' ? 'Saisir un revenu reçu' : 'Compléter mon mois type'}</button></div>`;
  const o = (S.money.months[ym] || {}).plan, edited = !P.auto;
  if (P.parts) {
    const pc = SPLIT[P.phase] || [0, 0, 0], toi = Math.max(0, P.avail - P.debt - P.safety);
    const why = ['Tes revenus couvrent tout juste tes charges : rien n\'est réservé ce mois-ci. Chaque euro remboursé ou épargné est un bonus.',
      'Tant que ton épargne est sous 1 000 €, l\'app garde 30 % pour toi et partage le reste moitié-moitié entre la dette et l\'épargne.',
      'Premier coussin atteint : 30 % pour toi, 55 % pour la dette pour t\'en libérer vite, 15 % d\'épargne.',
      'Dette soldée : 35 % pour toi, 65 % vers ton épargne de sécurité.',
      'Fondations posées : 40 % pour toi, 60 % à épargner ou investir.'][P.phase];
    return `<div class="plan-card">
    <p class="eyebrow">Plan du mois · ${edited ? 'modifié par toi' : 'calculé par l\'app'}</p>
    <p class="small muted" style="margin:6px 0 0">Après tes charges, il reste <b class="num" style="color:var(--ink)">${eur0(Math.max(0, P.avail))}</b> à partager.</p>
    <div class="plan-split three">
      <div><span>Pour toi</span><b class="num">${eur0(toi)}</b><small>${P.phase ? `${Math.round(toi / Math.max(1, P.avail) * 100)} %` : ''}</small></div>
      <div><span>Remboursement</span><b class="num">${eur0(P.debt)}</b><small>${P.remDebt ? `reste ${eur0(P.remDebt)}` : 'soldé'}</small></div>
      <div><span>Épargne</span><b class="num">${eur0(P.safety)}</b></div>
    </div>
    <p class="small" style="margin-top:8px">${why} « Pour toi » couvre tes sorties et tes achats : c'est ton reste à vivre ci-dessous. Le plan se réajuste à chaque revenu reçu.</p>
    ${edited && P.debt + P.safety > Math.max(0, P.avail) ? `<div class="alert" style="margin-top:10px">${ICON.warn}<span>Ton plan dépasse ce qui reste après tes charges de ${eur0(P.debt + P.safety - Math.max(0, P.avail))}.</span></div>` : ''}
    <div id="planEdit"></div>
    <div class="row" style="margin-top:12px;flex-wrap:wrap">${edited ? '<button class="btn sm quiet" data-planreset>Revenir au calcul auto</button>' : ''}<button class="btn sm ghost" data-planedit>Modifier ce mois</button></div>
  </div>`;
  }
  return `<div class="plan-card">
    <div class="row between"><p class="eyebrow">Plan du mois · ${edited ? 'modifié par toi' : 'calculé par l\'app'}</p></div>
    <div class="plan-split">
      <div><span>Dette</span><b class="num">${eur0(P.debt)}</b></div>
      <div><span>Épargne de sécurité</span><b class="num">${eur0(P.safety)}</b></div>
    </div>
    <p class="small muted">Disponible après charges fixes et budget de vie (${eur0(P.life.v)}${P.life.src === 'historique' ? ', ta moyenne des 3 derniers mois' : P.life.src === 'enveloppes' ? ', tes enveloppes' : ''}) : ${eur0(Math.max(0, P.avail))}. L'app en répartit 90 % et te laisse 10 % de marge${P.extra ? `, plus ${eur0(P.extra)} non affectés` : ''}.</p>
    <p class="small" style="margin-top:8px">${PHASE_TXT[P.phase]} Le plan se réajuste à chaque revenu reçu.</p>
    ${edited && P.debt + P.safety > Math.max(0, P.avail) ? `<div class="alert" style="margin-top:10px">${ICON.warn}<span>Ton plan dépasse ton disponible de ${eur0(P.debt + P.safety - Math.max(0, P.avail))} : ce sera pris sur ton budget de vie.</span></div>` : ''}
    <div id="planEdit"></div>
    <div class="row" style="margin-top:12px;flex-wrap:wrap">${edited ? '<button class="btn sm quiet" data-planreset>Revenir au calcul auto</button>' : ''}<button class="btn sm ghost" data-planedit>Modifier ce mois</button></div>
  </div>`;
}
function budgetOf(ym) {
  const M = S.money, st = M.months[ym] || {};
  const incomes = M.incomes.map(i => { const e = expectedIncome(i), rec = st.inc && st.inc[i.id] != null ? numv(st.inc[i.id]) : null; return { ...i, exp: e.v, rec, val: rec != null ? rec : 0 }; });
  const extraInc = txIn(ym, 'inc').reduce((a, t) => a + numv(t.amount), 0), fromPots = txIn(ym, 'withdraw').reduce((a, t) => a + numv(t.amount), 0);
  const incTotal = incomes.reduce((a, i) => a + i.val, 0) + extraInc + fromPots;
  const fixed = M.fixed.map(f => ({ ...f, val: numv(f.amount), paid: !!(st.paid && st.paid[f.id]) }));
  const fixTotal = fixed.reduce((a, f) => a + f.val, 0);
  const carry = st.carry != null && st.carry !== '' ? numv(st.carry) : 0;
  const P = M.auto ? planFor(ym, incTotal, fixTotal, carry) : null;
  const pots = M.pots.map(p => { const done = txIn(ym, 'save').filter(t => t.pot === p.id).reduce((a, t) => a + numv(t.amount), 0), plan = P && p.safety ? (P.ok ? P.safety : 0) : numv(p.monthly); return { ...p, done, plan, val: Math.max(plan, done), bal: potBalance(p) }; });
  const invested = txIn(ym, 'invest').reduce((a, t) => a + numv(t.amount), 0);
  const saveTotal = pots.reduce((a, p) => a + p.val, 0) + invested;
  const dTot = numv(M.debt.total), remStart = Math.max(0, dTot - debtRepaid(prevMonth(ym)));
  const dDone = txIn(ym, 'debt').reduce((a, t) => a + numv(t.amount), 0), dPlan = Math.min(P ? (P.ok ? P.debt : 0) : numv(M.debt.monthly), remStart);
  const debt = { plan: dPlan, done: dDone, val: Math.max(dPlan, dDone), remStart };
  const free = carry + incTotal - fixTotal - saveTotal - debt.val;
  const exps = txIn(ym, 'exp'), spent = exps.reduce((a, t) => a + numv(t.amount), 0);
  const byCat = {}; exps.forEach(t => { byCat[t.cat] = (byCat[t.cat] || 0) + numv(t.amount); });
  const cur = todayISO().slice(0, 7), dim = daysIn(ym), today = new Date().getDate();
  const daysLeft = ym === cur ? dim - today + 1 : ym > cur ? dim : 0;
  const elapsed = ym === cur ? (today - 1) / dim : ym < cur ? 1 : 0;
  const reste = free - spent;
  return { plan: P, carry, incomes, extraInc, fromPots, incTotal, fixed, fixTotal, pots, saveTotal, invested, debt, free, spent, byCat, reste, daysLeft, elapsed, dim, exps, envelopes: M.envelopes.map(e => ({ ...e, lim: numv(e.limit), sp: byCat[e.cat] || 0 })) };
}
const isSetUp = () => S.money.incomes.some(i => String(i.amount).trim() !== '') || S.money.fixed.some(f => numv(f.amount) > 0) || Object.values(S.money.months).some(m => m.inc && Object.keys(m.inc).length);

function argentTop(view) {
  const sub = view === 'budget' ? 'Tu te paies d\'abord, le reste est à toi.' : 'Chaque heure notée, chaque compteur à jour.';
  return `${pageHead('Argent', sub, view === 'budget' ? 'budget' : 'heures')}
  <div class="seg" role="group" aria-label="Section" style="margin-top:20px">
    <button data-aview="budget" aria-pressed="${view === 'budget'}"><span class="dot"></span>Budget</button>
    <button data-aview="heures" aria-pressed="${view === 'heures'}"><span class="dot"></span>Heures</button>
  </div>`;
}
function budgetRing(b) {
  const spentP = b.free > 0 ? b.spent / b.free : (b.spent > 0 ? 1 : 0), over = spentP > b.elapsed + 0.08;
  return `<svg viewBox="-68 -68 136 136" aria-label="Temps écoulé et budget dépensé">
    <circle r="58" fill="none" stroke="var(--raise)" stroke-width="6"/><circle r="58" fill="none" stroke="var(--muted)" stroke-width="6" stroke-linecap="round" transform="rotate(-90)" ${ringDash(58, b.elapsed)} opacity=".6"/>
    <circle r="45" fill="none" stroke="var(--raise)" stroke-width="11"/><circle r="45" fill="none" stroke="var(--${spentP > 1 ? 'danger' : over ? 'warn' : 'gold'})" stroke-width="11" stroke-linecap="round" transform="rotate(-90)" ${ringDash(45, spentP)}/>
    <text y="-4" text-anchor="middle" style="font:400 22px var(--serif);fill:var(--ink)">${Math.round(Math.min(spentP, 9.99) * 100)} %</text>
    <text y="14" text-anchor="middle" style="font-size:8.5px;font-weight:700;letter-spacing:.1em;fill:var(--muted)">DÉPENSÉ</text>
  </svg>`;
}
function vBudget() {
  const ym = A.month, b = budgetOf(ym), cur = todayISO().slice(0, 7), isCur = ym === cur;
  const daily = b.daysLeft ? b.reste / b.daysLeft : 0;
  const spentP = b.free > 0 ? b.spent / b.free : 0;
  const pace = b.elapsed > 0.05 ? b.spent / Math.max(1, Math.round(b.elapsed * b.dim)) : 0;
  const projEnd = isCur && pace ? b.free - (b.spent + pace * b.daysLeft) : null;
  let status = '';
  if (b.reste < 0) status = `<span class="pill danger">Budget dépassé de ${eur0(-b.reste)}</span>`;
  else if (isCur && spentP > b.elapsed + 0.08) status = '<span class="pill warn">Tu dépenses plus vite que le temps passe</span>';
  else if (isCur && b.spent) status = '<span class="pill mint">Dans les clous</span>';

  const setup = isSetUp() ? '' : `<div class="coach" style="background:var(--surface)"><b>Commence par ton mois type.</b> Indique tes revenus, tes charges fixes et ce que tu veux épargner : l'app calcule ensuite ce que tu peux dépenser chaque jour.<br><button data-bsetup>Configurer mon mois type</button></div>`;

  const kinds = [['exp', 'Dépense'], ['inc', 'Rentrée']];
  const chips = (A.kind === 'exp' ? CATS : INC_CATS).map(([id, n]) => `<button class="chip" data-bcat="${id}" aria-pressed="${A.cat === id}">${n}</button>`).join('');

  const envs = b.envelopes.filter(e => e.lim > 0);
  const unalloc = b.free - envs.reduce((a, e) => a + e.lim, 0);
  const envRows = envs.map(e => {
    const p = e.sp / e.lim, st = p > 1 ? 'danger' : p > 0.8 ? 'warn' : 'gold';
    return `<div class="env"><div class="row between"><span>${catName(e.cat)}</span><span class="num small"><b>${eur0(Math.max(0, e.lim - e.sp))}</b> <span class="muted">restants sur ${eur0(e.lim)}</span></span></div>
      <div class="bar"><i style="width:${Math.min(100, p * 100)}%;background:var(--${st})"></i></div>${p > 1 ? `<p class="small" style="color:var(--danger);margin-top:4px">Dépassée de ${eur0(e.sp - e.lim)}</p>` : ''}</div>`;
  }).join('');

  const pots = b.pots.filter(p => p.name);
  const potRows = pots.map(p => {
    const tgt = numv(p.target) || (p.safety ? 3 * (b.fixTotal + (avgSpend() || 0)) : 0);
    const prog = tgt ? p.bal / tgt : 0;
    let eta = '';
    if (tgt && p.bal < tgt && p.plan > 0) { const n = Math.ceil((tgt - p.bal) / p.plan), d = parseDate(ym + '-01'); d.setMonth(d.getMonth() + n); eta = `atteint vers ${monthLabel(iso(d).slice(0, 7))}`; }
    if (tgt && p.bal >= tgt) eta = 'objectif atteint';
    let need = '';
    if (tgt && p.deadline && p.bal < tgt) { const m = Math.max(1, (parseDate(p.deadline + '-01').getFullYear() - parseDate(ym + '-01').getFullYear()) * 12 + parseDate(p.deadline + '-01').getMonth() - parseDate(ym + '-01').getMonth()); need = ` · il faut ${eur0((tgt - p.bal) / m)}/mois pour ${monthLabel(p.deadline)}`; }
    const done = p.plan > 0 && p.done >= p.plan;
    return `<div class="pot">
      <svg viewBox="-24 -24 48 48" class="pot-ring" aria-hidden="true"><circle r="19" fill="none" stroke="var(--raise)" stroke-width="5"/><circle r="19" fill="none" stroke="var(--mint)" stroke-width="5" stroke-linecap="round" transform="rotate(-90)" ${ringDash(19, prog)}/></svg>
      <div class="grow"><b>${esc(p.name)}</b><p class="small muted num">${eur0(p.bal)}${tgt ? ` sur ${eur0(tgt)}${p.safety && !numv(p.target) ? ' (3 mois de dépenses)' : ''}` : ''}</p>${eta || need ? `<p class="small muted">${eta}${need}</p>` : ''}</div>
      <div style="display:grid;gap:6px;justify-items:end">${p.plan > 0 ? (done ? '<span class="pill mint">Versé</span>' : `<button class="btn sm" data-psave="${p.id}">Verser ${eur0(p.plan - p.done)}</button>`) : ''}<button class="btn sm quiet" data-psave="${p.id}" data-custom="1">${p.plan > 0 ? 'Autre montant' : 'Verser'}</button></div>
    </div>`;
  }).join('');

  const list = b.exps.concat(txIn(ym, 'inc'), txIn(ym, 'save'), txIn(ym, 'withdraw'), txIn(ym, 'debt'), txIn(ym, 'invest')).filter(t => A.catFilter === 'all' || t.cat === A.catFilter).sort((x, y) => (y.date + (y.created || 0)).localeCompare(x.date + (x.created || 0)));
  const txRows = list.map(t => {
    const d = parseDate(t.date), neg = ['exp', 'save', 'debt', 'invest'].includes(t.kind);
    const lbl = t.kind === 'exp' ? catName(t.cat) : t.kind === 'inc' ? incName(t.cat) : t.kind === 'debt' ? 'Remboursement de la dette' : t.kind === 'invest' ? `Investissement · ${esc((S.money.investments.find(i => i.id === t.inv) || {}).name || '')}` : t.kind === 'save' ? `Épargne · ${esc((S.money.pots.find(p => p.id === t.pot) || {}).name || '')}` : `Retrait · ${esc((S.money.pots.find(p => p.id === t.pot) || {}).name || '')}`;
    return `<button class="shift" data-tx="${t.id}"><span class="d"><b>${d.getDate()}</b><span>${DAY_SHORT.format(d).replace('.', '')}</span></span>
      <span><span class="who">${lbl}</span>${t.note ? `<span class="when">${esc(t.note)}</span>` : ''}</span>
      <span class="dur" style="color:${neg ? 'var(--ink)' : 'var(--mint)'}">${neg ? '−' : '+'}${eur2(numv(t.amount))}</span></button>`;
  }).join('');
  const usedCats = [...new Set(b.exps.map(t => t.cat))];

  return `${argentTop('budget')}
  ${setup}
  <div class="month-nav" style="margin-top:26px"><p class="eyebrow" style="text-transform:uppercase">${monthLabel(ym)}</p><div class="row" style="gap:0">
    <button class="icon-btn" data-bnav="-1" aria-label="Mois précédent">${ICON.prev}</button>
    <button class="icon-btn" data-bnav="1" aria-label="Mois suivant" ${ym >= cur ? 'disabled style="opacity:.3"' : ''}>${ICON.next}</button></div></div>
  <div class="pocket" style="margin-top:0">
    ${budgetRing(b)}
    <div>
      <p class="eyebrow">${isCur ? 'Reste à dépenser' : b.reste >= 0 ? 'Reste en fin de mois' : 'Dépassement'}</p>
      <p class="big num" style="${b.reste < 0 ? 'color:var(--danger)' : ''}">${eur0(b.reste)}</p>
      ${isCur && b.reste > 0 ? `<p class="small" style="margin-top:6px">soit <b class="num">${eur0(daily)}</b> par jour pendant ${b.daysLeft} jour${b.daysLeft > 1 ? 's' : ''}</p>` : ''}
      <div style="margin-top:8px">${status}</div>
    </div>
  </div>
  ${projEnd != null && b.spent > 0 ? `<p class="hint">À ce rythme (${eur0(pace)} par jour), tu finiras le mois à <b style="color:var(--${projEnd < 0 ? 'danger' : 'mint'})">${projEnd < 0 ? '−' : '+'}${eur0(Math.abs(projEnd))}</b>.</p>` : ''}

  ${isCur ? `<section style="margin-top:30px" id="quick">
    <div class="seg" role="group" aria-label="Type">${kinds.map(([k, n]) => `<button data-bkind="${k}" aria-pressed="${A.kind === k}"><span class="dot"></span>${n}</button>`).join('')}</div>
    <label class="amount"><input id="bAmount" type="text" inputmode="decimal" placeholder="0" autocomplete="off" aria-label="Montant en euros"><span>€</span></label>
    <div class="chips">${chips}</div>
    <div class="group" style="margin-top:12px">
      <div class="cell"><input type="text" class="full" id="bNote" placeholder="Note (facultatif)" aria-label="Note" autocomplete="off"></div>
      <div class="cell"><label for="bDate">Date</label><input type="date" id="bDate" value="${todayISO()}"></div>
    </div>
    <button class="btn block" id="bAdd" style="margin-top:12px">Ajouter</button>
  </section>` : ''}

  <section>
    <h2>Ton mois en une ligne</h2>
    <div class="flow">
      <details data-flow="carry" ${A.open.has('carry') ? 'open' : ''}><summary><span>Solde de départ</span><b class="num" style="color:var(--${b.carry < 0 ? 'danger' : b.carry > 0 ? 'mint' : 'muted'})">${b.carry < 0 ? '−' : b.carry > 0 ? '+' : ''}${eur0(Math.abs(b.carry))}</b></summary>
        <div class="flow-in">
          <div class="frow"><label class="check" style="padding:6px 0;min-height:44px"><input type="checkbox" data-carryneg ${b.carry < 0 || (S.money.months[ym] || {}).carryNeg ? 'checked' : ''}><span class="box">${ICON.tick}</span><span class="txt">À découvert<span class="small muted" style="display:block">coche si ton compte est dans le rouge</span></span></label><input class="famt num" id="carryAmt" data-carry inputmode="decimal" value="${b.carry ? String(Math.abs(b.carry)).replace('.', ',') : ''}" placeholder="0" aria-label="Solde de départ"></div>
          <p class="hint">Le solde de ton compte courant avant les revenus de ce mois. Un découvert est couvert en premier par tes rentrées, sans compter comme une charge fixe, et ne revient pas le mois suivant.</p>
        </div></details>
      <details id="incDetails" data-flow="inc" ${A.open.has('inc') ? 'open' : ''}><summary><span>Revenus reçus</span><b class="num" style="color:var(--mint)">+${eur0(b.incTotal)}</b></summary>
        <div class="flow-in">${b.incomes.map(i => `<div class="frow"><label class="check" style="padding:6px 0;min-height:44px"><input type="checkbox" data-increc="${i.id}" ${i.rec != null ? 'checked' : ''}><span class="box">${ICON.tick}</span><span class="txt">${esc(i.label)}<span class="small muted" style="display:block">${i.rec != null ? 'reçu' : i.exp ? `attendu : ${eur0(i.exp)}, vers le ${i.day}` : `à saisir quand il arrive (vers le ${i.day})`}</span></span></label><input class="famt num" id="inc-${i.id}" data-incval="${i.id}" inputmode="decimal" value="${i.rec != null ? String(Math.round(i.rec * 100) / 100).replace('.', ',') : ''}" placeholder="${i.exp ? String(i.exp).replace('.', ',') : 'reçu'}" aria-label="Montant reçu ${esc(i.label)}"></div>`).join('')}
        ${b.extraInc ? `<div class="frow"><span class="small">Rentrées ponctuelles</span><b class="num small">+${eur0(b.extraInc)}</b></div>` : ''}${b.fromPots ? `<div class="frow"><span class="small">Retiré de l'épargne</span><b class="num small">+${eur0(b.fromPots)}</b></div>` : ''}
        <p class="hint">Seul l'argent vraiment reçu compte. Saisis chaque salaire dans le mois où tu vas le dépenser : le salaire de septembre, reçu fin septembre ou début octobre, va dans le budget d'octobre.</p></div></details>
      ${b.debt.val || numv(S.money.debt.total) > debtRepaid() ? `<details data-flow="debt" ${A.open.has('debt') ? 'open' : ''}><summary><span>Dette (d'abord)</span><b class="num">−${eur0(b.debt.val)}</b></summary><div class="flow-in"><div class="frow"><span>Remboursé ce mois</span><span class="num small">${eur0(b.debt.done)}${b.debt.plan ? ` / ${eur0(b.debt.plan)}` : ''}</span></div>${b.debt.plan ? '' : '<p class="hint">Fixe une mensualité dans ton mois type pour la réserver chaque mois.</p>'}</div></details>` : ''}
      <details data-flow="save" ${A.open.has('save') ? 'open' : ''}><summary><span>Épargne (tu te paies d'abord)</span><b class="num">−${eur0(b.saveTotal)}</b></summary>
        <div class="flow-in">${b.pots.filter(p => p.name).map(p => `<div class="frow"><span>${esc(p.name)}</span><span class="num small">${p.plan ? `${eur0(p.done)} / ${eur0(p.plan)}` : eur0(p.done)}</span></div>`).join('') || '<p class="hint">Aucune cagnotte pour l\'instant.</p>'}${b.invested ? `<div class="frow"><span>Investissements</span><span class="num small">${eur0(b.invested)}</span></div>` : ''}</div></details>
      <details data-flow="fix" ${A.open.has('fix') ? 'open' : ''}><summary><span>Charges fixes</span><b class="num">−${eur0(b.fixTotal)}</b></summary>
        <div class="flow-in">${b.fixed.map(f => `<div class="frow"><label class="check" style="padding:6px 0;min-height:44px"><input type="checkbox" data-fpaid="${f.id}" ${f.paid ? 'checked' : ''}><span class="box">${ICON.tick}</span><span class="txt">${esc(f.label)}<span class="small muted" style="display:block">${f.paid ? 'payé' : `le ${f.day}`}</span></span></label><b class="num small">${f.val ? eur0(f.val) : '<span class="muted">à renseigner</span>'}</b></div>`).join('')}</div></details>
      <div class="frow total"><span>Budget libre</span><b class="num">${eur0(b.free)}</b></div>
      <div class="frow"><span>Dépensé</span><b class="num">−${eur0(b.spent)}</b></div>
      <div class="frow total"><span>Reste</span><b class="num" style="color:var(--${b.reste < 0 ? 'danger' : 'gold'})">${eur0(b.reste)}</b></div>
    </div>
    <button class="btn sm ghost" data-bsetup style="margin-top:14px">Modifier mon mois type</button>
  </section>

  ${envRows ? `<section><h2>Enveloppes</h2><div class="envs">${envRows}</div>
    ${unalloc < 0 ? `<div class="alert">${ICON.warn}<span>Tes enveloppes (${eur0(b.free - unalloc)}) dépassent ton budget libre (${eur0(b.free)}). Baisse un plafond dans ton mois type.</span></div>` : `<p class="hint">Hors enveloppes, il te reste ${eur0(Math.max(0, unalloc - Object.keys(b.byCat).filter(c => !envs.some(e => e.cat === c)).reduce((a, c) => a + b.byCat[c], 0)))} pour tout le reste.</p>`}</section>` : ''}

  ${potRows ? `<section><h2>Épargne</h2><div class="pots">${potRows}</div><div id="potCustom"></div></section>` : ''}

  ${vFoundations(b)}

  ${insights(b, ym)}

  <section>
    <div class="row between" style="margin-bottom:10px"><h2 style="margin:0">Mouvements</h2><button class="btn sm ghost" id="bCsv" ${list.length ? '' : 'disabled'}>CSV</button></div>
    ${usedCats.length > 1 ? `<div class="filters"><button class="chip" data-bfilter="all" aria-pressed="${A.catFilter === 'all'}">Tout</button>${usedCats.map(c => `<button class="chip" data-bfilter="${c}" aria-pressed="${A.catFilter === c}">${catName(c)}</button>`).join('')}</div>` : ''}
    <div>${txRows || `<p class="empty">Aucun mouvement en ${monthLabel(ym)}.</p>`}</div>
  </section>`;
}
function avgSpend(from) {
  const ms = [1, 2, 3].map(k => { let ym = from || A.month; for (let i = 0; i < k; i++) ym = prevMonth(ym); return txIn(ym, 'exp').reduce((a, t) => a + numv(t.amount), 0); }).filter(Boolean);
  return ms.length ? ms.reduce((a, b) => a + b, 0) / ms.length : 0;
}
function insights(b, ym) {
  const out = [];
  if (b.incTotal > 0) {
    const rate = b.saveTotal / b.incTotal;
    out.push(`<b>${Math.round(rate * 100)} %</b> de tes revenus vont à l'épargne ce mois-ci.${rate < 0.1 ? ' Vise au moins 10 %, même en commençant petit.' : rate >= 0.2 ? ' Excellent rythme.' : ''}`);
  }
  const small = b.exps.filter(t => numv(t.amount) < 10);
  if (small.length >= 5) out.push(`<b>${small.length} petites dépenses</b> de moins de 10 € font <b>${eur0(small.reduce((a, t) => a + numv(t.amount), 0))}</b> au total. C'est souvent là que le budget fuit.`);
  const prev = budgetOf(prevMonth(ym));
  if (prev.spent > 0 && b.spent > 0) {
    let best = null;
    Object.keys(b.byCat).forEach(c => { const d = b.byCat[c] - (prev.byCat[c] || 0); if (!best || d > best.d) best = { c, d }; });
    if (best && best.d > 20) out.push(`<b>${catName(best.c)}</b> : ${eur0(best.d)} de plus que le mois dernier.`);
  }
  const top = Object.entries(b.byCat).sort((x, y) => y[1] - x[1])[0];
  if (top && b.spent > 0) out.push(`Ton premier poste de dépense : <b>${catName(top[0])}</b>, ${Math.round(top[1] / b.spent * 100)} % de tes dépenses.`);
  const upcoming = b.fixed.filter(f => !f.paid && f.val && Number(f.day) >= new Date().getDate()).sort((x, y) => x.day - y.day)[0];
  if (ym === todayISO().slice(0, 7) && upcoming) out.push(`Prochaine charge : <b>${esc(upcoming.label)}</b>, ${eur0(upcoming.val)} le ${upcoming.day}.`);
  if (!out.length) return '';
  return `<section><h2>À retenir</h2><ul class="insights">${out.map(x => `<li>${x}</li>`).join('')}</ul></section>`;
}
function addTx() {
  const amt = numv($('#bAmount').value.replace(/\s/g, ''));
  if (!(amt > 0)) { toast('Entre un montant.'); $('#bAmount').focus(); return; }
  const t = { id: uid(), kind: A.kind, amount: Math.round(amt * 100) / 100, cat: A.cat, date: $('#bDate').value || todayISO(), note: $('#bNote').value.trim(), created: Date.now() };
  S.money.tx.push(t); save(); askPersist(); haptic();
  render();
  toast(`${t.kind === 'exp' ? '−' : '+'}${eur2(t.amount)} · ${t.kind === 'exp' ? catName(t.cat) : incName(t.cat)}`, 'Annuler', () => { S.money.tx = S.money.tx.filter(x => x.id !== t.id); save(); render(); });
}
function potSave(id, custom) {
  const p = S.money.pots.find(x => x.id === id); if (!p) return;
  const b = budgetOf(A.month), pp = b.pots.find(x => x.id === id);
  if (custom || !(pp.plan - pp.done > 0)) {
    $('#potCustom').innerHTML = `<div class="confirm"><p class="small">Combien verser sur « ${esc(p.name)} » ?</p><div class="row" style="margin-top:10px"><input id="potAmt" inputmode="decimal" class="famt num" style="flex:1;text-align:left" placeholder="Montant"><button class="btn sm" data-potok="${id}">Verser</button><button class="btn sm quiet" data-potwd="${id}">Retirer</button></div></div>`;
    $('#potAmt').focus(); return;
  }
  commitPot(id, pp.plan - pp.done, 'save');
}
function commitPot(id, amount, kind) {
  if (!(amount > 0)) { toast('Entre un montant.'); return; }
  const t = { id: uid(), kind, amount: Math.round(amount * 100) / 100, pot: id, cat: kind, date: A.month === todayISO().slice(0, 7) ? todayISO() : A.month + '-01', note: '', created: Date.now() };
  S.money.tx.push(t); save(); haptic(); render();
  if (kind === 'save') reward(4, { msg: [`Épargne · ${eur2(t.amount)}`, 'Tu te paies d\'abord. C\'est comme ça qu\'on construit.'] });
  else toast(`Retiré ${eur2(t.amount)}`, 'Annuler', () => { S.money.tx = S.money.tx.filter(x => x.id !== t.id); save(); render(); });
}
function commitKind(kind, amount, inv) {
  if (!(amount > 0)) { toast('Entre un montant.'); return; }
  const t = { id: uid(), kind, amount: Math.round(amount * 100) / 100, cat: kind, inv, date: A.month === todayISO().slice(0, 7) ? todayISO() : A.month + '-01', note: '', created: Date.now() };
  S.money.tx.push(t); save(); haptic(); render();
  reward(kind === 'debt' ? 5 : 3, { big: kind === 'debt', msg: [kind === 'debt' ? `Remboursé · ${eur2(t.amount)}` : `Investi · ${eur2(t.amount)}`, kind === 'debt' ? 'Une dette en moins, un poids en moins.' : 'Ton argent travaille pour toi.'] });
}
function openTx(id) {
  const t = S.money.tx.find(x => x.id === id); if (!t) return;
  const cats = t.kind === 'exp' ? CATS : t.kind === 'inc' ? INC_CATS : null;
  const body = $('#shiftSheetBody');
  body.innerHTML = `<div class="grab"></div>
    <div class="sheet-top"><button class="link-btn" data-close style="text-align:left">Annuler</button><h2 id="shiftSheetTitle">Modifier</h2><button class="link-btn" id="txSave" style="text-align:right">OK</button></div>
    <label class="amount"><input id="txAmt" type="text" inputmode="decimal" value="${String(t.amount).replace('.', ',')}" aria-label="Montant"><span>€</span></label>
    ${cats ? `<div class="chips">${cats.map(([k, n]) => `<button class="chip" data-txcat="${k}" aria-pressed="${t.cat === k}">${n}</button>`).join('')}</div>` : ''}
    <div class="group" style="margin-top:12px">
      <div class="cell"><input type="text" class="full" id="txNote" value="${esc(t.note || '')}" placeholder="Note (facultatif)" aria-label="Note"></div>
      <div class="cell"><label for="txDate">Date</label><input type="date" id="txDate" value="${t.date}"></div>
    </div>
    <button class="btn danger block" style="margin-top:22px" id="txDel">Supprimer</button>`;
  body.dataset.tx = id;
  $('#shiftSheet').showModal();
}
function exportBudgetCSV() {
  const ym = A.month, rows = S.money.tx.filter(t => t.date.startsWith(ym)).sort((a, b) => a.date.localeCompare(b.date));
  const q = s => `"${String(s ?? '').replace(/"/g, '""')}"`;
  const kindLbl = { exp: 'Dépense', inc: 'Rentrée', save: 'Épargne', withdraw: 'Retrait épargne', debt: 'Remboursement dette', invest: 'Investissement' };
  const lines = [['Date', 'Type', 'Catégorie', 'Montant', 'Note'].join(';')];
  rows.forEach(t => lines.push([t.date.split('-').reverse().join('/'), kindLbl[t.kind], t.kind === 'exp' ? catName(t.cat) : t.kind === 'inc' ? incName(t.cat) : ((S.money.pots.find(p => p.id === t.pot) || {}).name || ''), String((['exp', 'save', 'debt', 'invest'].includes(t.kind) ? -1 : 1) * numv(t.amount)).replace('.', ','), q(t.note)].join(';')));
  deliverFile(`budget-${ym}.csv`, '﻿' + lines.join('\r\n'), 'text/csv;charset=utf-8');
}

/* Feuille « Mon mois type » */
function openBudgetSetup() {
  const M = S.money;
  const row = (list, it, fields) => `<div class="srow">${fields.map(([k, ph, mode, w]) => mode === 'cat'
    ? `<select data-mset="${list}.${it.id}.${k}" aria-label="Catégorie" style="flex:${w}">${CATS.map(([id, n]) => `<option value="${id}" ${it[k] === id ? 'selected' : ''}>${n}</option>`).join('')}</select>`
    : mode === 'month' ? `<input type="month" data-mset="${list}.${it.id}.${k}" value="${esc(it[k] || '')}" aria-label="${ph}" style="flex:${w}">`
      : `<input data-mset="${list}.${it.id}.${k}" value="${esc(String(it[k] ?? '').replace('.', ','))}" placeholder="${ph}" aria-label="${ph}" ${mode === 'num' ? 'inputmode="decimal"' : ''} style="flex:${w}">`).join('')}
    <button class="icon-btn" data-mdel="${list}.${it.id}" aria-label="Supprimer"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div>`;
  const hintInc = i => i.src ? '<p class="hint" style="margin:-4px 0 8px">Salaire variable : laisse le montant vide, tu saisiras chaque mois ce que tu as vraiment reçu.</p>' : '';
  $('#ideasBody').innerHTML = `<div class="grab"></div>
    <div class="sheet-top"><span style="width:60px"></span><h2 id="ideasTitle">Mon mois type</h2><button class="link-btn" data-close style="text-align:right">OK</button></div>
    <p class="small muted">Ce qui revient chaque mois. L'app s'en sert pour calculer ton reste à dépenser.</p>
    <p class="gt">Revenus · montant fixe attendu (facultatif) et jour d'arrivée</p>
    ${M.incomes.map(i => row('incomes', i, [['label', 'Nom', 'text', 3], ['amount', '€', 'num', 1.3], ['day', 'Jour', 'num', .8]]) + hintInc(i)).join('')}
    <button class="btn sm quiet" data-madd="incomes">+ Ajouter un revenu</button>
    <p class="gt">Charges fixes · montant et jour de prélèvement</p>
    ${M.fixed.map(f => row('fixed', f, [['label', 'Nom', 'text', 3], ['amount', '€', 'num', 1.3], ['day', 'Jour', 'num', .8]])).join('')}
    <button class="btn sm quiet" data-madd="fixed">+ Ajouter une charge</button>
    <p class="gt">Plan automatique</p>
    <div class="group"><div class="cell"><label for="mAuto">Laisser l'app calculer la dette et l'épargne de sécurité chaque mois</label><span class="switch"><input type="checkbox" id="mAuto" ${M.auto ? 'checked' : ''}><span></span></span></div>
      <div class="cell"><label for="mLife">Budget de vie mensuel<span class="small muted" style="display:block">${String(M.life || '').trim() === '' ? 'Laisse vide : l\'app partage elle-même ce qui reste entre toi, la dette et l\'épargne.' : 'Montant fixe pour vivre ; vide-le pour revenir au partage automatique.'}</span></label><input class="r" id="mLife" inputmode="decimal" value="${esc(String(M.life || '').replace('.', ','))}" placeholder="auto"><span class="unit">€</span></div></div>
    <p class="hint">Avec le plan automatique, l'app garde ton budget de vie, puis répartit 90 % du reste entre la dette et l'épargne selon tes priorités. Tu peux corriger chaque mois.</p>
    <p class="gt">Dette · montant total, déjà remboursé${M.auto ? '' : ', mensualité'}</p>
    <div class="srow"><input data-dset="total" inputmode="decimal" value="${esc(String(M.debt.total || '').replace('.', ','))}" placeholder="Total €" aria-label="Montant total de la dette" style="flex:1"><input data-dset="start" inputmode="decimal" value="${esc(String(M.debt.start || '').replace('.', ','))}" placeholder="Déjà remboursé €" aria-label="Déjà remboursé" style="flex:1">${M.auto ? '' : `<input data-dset="monthly" inputmode="decimal" value="${esc(String(M.debt.monthly || '').replace('.', ','))}" placeholder="€/mois" aria-label="Mensualité" style="flex:.8">`}</div>
    <p class="hint" style="margin-top:0">${M.auto ? 'Le montant mensuel est calculé par le plan automatique.' : 'La mensualité est réservée en priorité chaque mois, avant l\'épargne.'}</p>
    <p class="gt">Objectif d'épargne de sécurité</p>
    <div class="srow"><input data-sgoal inputmode="decimal" value="${esc(String(M.safetyGoal || '').replace('.', ','))}" placeholder="4000" aria-label="Objectif de sécurité" style="flex:1"><span class="unit">€</span></div>
    <p class="gt">Cagnottes · objectif, déjà épargné, versement mensuel</p>
    ${M.pots.map(p => row('pots', p, [['name', 'Nom', 'text', 2.4], ['target', 'Objectif €', 'num', 1.3], ['start', 'Déjà €', 'num', 1.1], ['monthly', '€/mois', 'num', 1.1]])
      + `<div class="srow" style="margin-top:-4px"><span class="small muted" style="flex:1">Date cible (facultatif)</span><input type="month" data-mset="pots.${p.id}.deadline" value="${esc(p.deadline || '')}" aria-label="Date cible" style="flex:1.4"></div>`).join('')}
    <p class="hint">L'épargne de sécurité est ta protection en cas d'imprévu. Elle fait partie des conditions pour débloquer l'investissement.${M.auto ? ' Son versement mensuel est calculé par le plan automatique : le champ €/mois ne sert que pour tes autres cagnottes.' : ''}</p>
    <button class="btn sm quiet" data-madd="pots">+ Nouvelle cagnotte</button>
    <p class="gt">Enveloppes · plafond mensuel par catégorie</p>
    ${M.envelopes.map(e => row('envelopes', e, [['cat', 'Catégorie', 'cat', 2.4], ['limit', 'Plafond €', 'num', 1.3]])).join('')}
    <button class="btn sm quiet" data-madd="envelopes">+ Ajouter une enveloppe</button>
    <p class="hint" style="margin-top:20px">Garde les enveloppes pour 2 à 4 catégories où l'argent file vite. Le reste se pilote avec ton budget par jour.</p>`;
  const d = $('#ideasSheet'); if (!d.open) d.showModal();
  d.dataset.mode = 'bsetup';
}
function mset(path, value) {
  const [list, id, key] = path.split('.'), it = S.money[list].find(x => x.id === id); if (!it) return;
  it[key] = ['amount', 'target', 'start', 'monthly', 'limit'].includes(key) ? value.trim().replace(/\s/g, '').replace(',', '.') : key === 'day' ? Math.min(31, Math.max(1, parseInt(value, 10) || 1)) : value;
  save();
}


/* =====================================================================
   12 ter. FONDATIONS & DÉBLOCAGES
   - Investissement (onglet Argent) : dette 100 % remboursée + épargne de sécurité ≥ objectif.
   - Business (onglet) : 6 compétences clés acquises + régularité de foi ≥ 90 % sur 30 jours.
   Déblocage définitif : une fois atteint, la date est enregistrée dans S.unlocks.
   ===================================================================== */
const PRAYERS = [['fajr', 'Fajr', 'الفجر'], ['dhuhr', 'Dhuhr', 'الظهر'], ['asr', 'Asr', 'العصر'], ['maghrib', 'Maghrib', 'المغرب'], ['isha', 'Isha', 'العشاء']];
function defaultFaith() {
  return { habits: [['fajr', 'Fajr'], ['dhuhr', 'Dhuhr'], ['asr', 'Asr'], ['maghrib', 'Maghrib'], ['isha', 'Isha']].map(p => ({ id: p[0], name: `${p[1]} à l'heure`, prayer: true })).concat([{ id: 'coran', name: 'Lecture du Coran' }]), log: {} };
}
const FAITH_GOAL = 0.9, FAITH_DAYS = 30;
const F = { view: 'habitudes', day: todayISO() };
try { const v = localStorage.getItem('sdp-foi-view'); if (v === 'habitudes' || v === 'arabe' || v === 'dhikr') F.view = v; } catch (e) {}
const dayDone = k => { const d = S.faith.log[k] || {}; return S.faith.habits.filter(h => d[h.id] && d[h.id] !== 'x').length; };
const dayW = k => { const d = S.faith.log[k] || {}; return S.faith.habits.reduce((m, h) => m + (h.prayer ? pWeight(d[h.id]) : d[h.id] ? 1 : 0), 0); };
/* Régularité sur 30 jours : la journée en cours ne compte que lorsqu'elle est complète. */
function faithScore() {
  const hs = S.faith.habits, n = hs.length; if (!n) return { pct: 0, tracked: 0, done: 0, need: 0, total: 0 };
  const todayFull = dayDone(todayISO()) === n, off = todayFull ? 0 : 1;
  let done = 0, tracked = 0;
  for (let i = off; i < off + FAITH_DAYS; i++) { const k = iso(addDays(new Date(), -i)), c = dayDone(k); done += dayW(k); if (c) tracked++; }
  const total = n * FAITH_DAYS;
  return { pct: done / total, tracked, done, total, need: Math.max(0, Math.ceil(FAITH_GOAL * total - done)) };
}

const BIZ_DOMAINS = ['rel', 'psy', 'vente', 'nego', 'mkt', 'jur'];
const BIZ_LABEL = { rel: 'Relationnel & leadership', psy: 'Psychologie & neuromarketing', vente: 'Vente', nego: 'Négociation', mkt: 'Marketing & acquisition client', jur: 'Juridique & fiscal' };
function bizStatus() {
  const skills = BIZ_DOMAINS.map(k => { let t = 0, d = 0; MONTHS.filter(m => m.dom === k).forEach(m => { t += m.acq.length; d += modDone(m); }); return { k, t, d, months: MONTHS.filter(m => m.dom === k).map(m => m.n) }; });
  const f = faithScore(), skillsOk = skills.every(s => s.d === s.t);
  return { skills, skillsOk, faith: f, faithOk: f.pct >= FAITH_GOAL, ok: skillsOk && f.pct >= FAITH_GOAL, left: skills.reduce((a, s) => a + s.t - s.d, 0) };
}
function debtRepaid(upTo) { let r = numv(S.money.debt.start); S.money.tx.forEach(t => { if (t.kind === 'debt' && (!upTo || t.date.slice(0, 7) <= upTo)) r += numv(t.amount); }); return r; }
function investStatus() {
  const total = numv(S.money.debt.total), repaid = Math.min(total, debtRepaid());
  const pot = S.money.pots.find(p => p.safety), goal = numv(S.money.safetyGoal) || 4000, safety = pot ? potBalance(pot) : 0;
  const debtOk = total <= 0 || repaid >= total, safeOk = safety >= goal;
  return { total, repaid, debtOk, debtP: total ? repaid / total : 1, goal, safety, safeOk, safeP: Math.min(1, safety / goal), ok: debtOk && safeOk };
}
function checkUnlocks() {
  if (!S.unlocks.invest && investStatus().ok) { S.unlocks.invest = todayISO(); save(); setTimeout(() => toast('Investissement débloqué. Tes fondations sont posées.'), 400); }
  if (!S.unlocks.business && bizStatus().ok) { S.unlocks.business = todayISO(); save(); setTimeout(() => toast('Onglet Business débloqué. Bravo.'), S.unlocks.invest === todayISO() ? 4600 : 400); }
  checkBodyUnlocks();
}
const lockIcon = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><rect x="5" y="10.5" width="14" height="10" rx="2.5"/><path d="M8.5 10.5V7.5a3.5 3.5 0 0 1 7 0v3"/></svg>';
const condRow = (ok, title, p, detail) => `<div class="cond ${ok ? 'ok' : ''}">
  <div class="row between"><h3>${ok ? '<span class="cond-ok">' + ICON.tick + '</span>' : ''}${title}</h3><span class="num small ${ok ? '' : 'muted'}">${Math.round(Math.min(1, p) * 100)} %</span></div>
  <div class="bar"><i style="width:${Math.min(100, p * 100)}%;${ok ? 'background:var(--mint)' : ''}"></i></div>
  <p class="small muted" style="margin-top:6px">${detail}</p></div>`;

/* ----- Onglet Argent : fondations + investissement ----- */
function vFoundations(b) {
  const s = investStatus(), d = S.money.debt;
  const remain = Math.max(0, s.total - s.repaid);
  const debtDetail = s.debtOk ? 'Remboursée. Une chose de moins sur les épaules.' : `${eur0(s.repaid)} remboursés sur ${eur0(s.total)} · reste ${eur0(remain)}${b.debt.plan > 0 ? ` · fin prévue vers ${monthLabel((() => { const x = new Date(); x.setMonth(x.getMonth() + Math.ceil(remain / b.debt.plan) - 1); return iso(x).slice(0, 7); })())}` : ''}`;
  const safeDetail = s.safeOk ? 'Objectif atteint.' : `${eur0(s.safety)} sur ${eur0(s.goal)} · reste ${eur0(s.goal - s.safety)}`;
  const thisMonthDebt = b.debt;
  const debtBtn = !s.debtOk ? (thisMonthDebt.plan > 0 && thisMonthDebt.done >= thisMonthDebt.plan ? '<span class="pill mint">Remboursé ce mois</span>' : `<button class="btn sm" data-debtpay>${thisMonthDebt.plan > thisMonthDebt.done ? `Rembourser ${eur0(thisMonthDebt.plan - thisMonthDebt.done)}` : 'Rembourser'}</button>`) : '';
  const unlocked = !!S.unlocks.invest;
  return `<section>
    <h2>Fondations</h2>
    ${vPlanCard(b)}
    ${condRow(s.debtOk, 'Dette remboursée', s.debtP, debtDetail)}
    ${debtBtn ? `<div class="row" style="margin:-4px 0 18px;flex-wrap:wrap">${debtBtn}<button class="btn sm quiet" data-debtcustom>Autre montant</button></div>` : ''}
    ${condRow(s.safeOk, 'Épargne de sécurité', s.safeP, safeDetail)}
    <div id="debtCustom"></div>
  </section>
  <section>
    <div class="row between" style="margin-bottom:14px"><h2 style="margin:0">Investissement</h2>${unlocked ? '' : `<span class="pill">${lockIcon.replace('width="18" height="18"', 'width="13" height="13"')} Verrouillé</span>`}</div>
    ${unlocked ? vInvest() : `<div class="locked-card">
      <p>Débloqué une fois la dette remboursée et l'épargne de sécurité atteinte.</p>
      <div class="row" style="gap:18px;margin-top:12px">
        <div><b class="num">${Math.round((1 - s.debtP) * 100)} %</b><span>de dette restante</span></div>
        <div><b class="num">${Math.round((1 - s.safeP) * 100)} %</b><span>d'épargne à constituer</span></div>
      </div>
      <p class="hint">Investir avec une dette ou sans matelas, c'est risquer de devoir revendre au pire moment.</p>
    </div>`}
  </section>`;
}
function invBalance(i) { let v = numv(i.start); S.money.tx.forEach(t => { if (t.kind === 'invest' && t.inv === i.id) v += numv(t.amount); }); return v; }
function vInvest() {
  const inv = S.money.investments;
  const rows = inv.map(i => { const put = invBalance(i), val = String(i.value).trim() !== '' ? numv(i.value) : put, g = val - put;
    return `<div class="pot"><span class="inv-type">${i.type === 'or' ? 'Or' : i.type === 'etf' ? 'ETF' : '•'}</span>
      <div class="grow"><b>${esc(i.name || 'Sans nom')}</b><p class="small muted num">${eur0(put)} investis · valeur ${eur0(val)} <span style="color:var(--${g >= 0 ? 'mint' : 'danger'})">${g >= 0 ? '+' : '−'}${eur0(Math.abs(g))}</span></p></div>
      <button class="btn sm quiet" data-invest="${i.id}">Investir</button></div>`; }).join('');
  const tp = inv.reduce((a, i) => a + invBalance(i), 0), tv = inv.reduce((a, i) => a + (String(i.value).trim() !== '' ? numv(i.value) : invBalance(i)), 0);
  return `<p class="small muted">Débloqué le ${new Date(S.unlocks.invest).toLocaleDateString('fr-FR')}. Tes fondations sont posées.</p>
    ${inv.length ? `<div class="stats-line" style="margin:14px 0 6px"><div><b class="num">${eur0(tv)}</b><span>valeur actuelle</span></div><div><b class="num" style="color:var(--${tv - tp >= 0 ? 'mint' : 'danger'})">${tv - tp >= 0 ? '+' : '−'}${eur0(Math.abs(tv - tp))}</b><span>plus ou moins-value</span></div></div>` : ''}
    <div class="pots">${rows || '<p class="empty">Aucune ligne pour l\'instant.</p>'}</div><div id="invCustom"></div>
    <button class="btn sm ghost" data-invsetup style="margin-top:12px">Gérer mes lignes (ETF halal, or…)</button>
    <p class="hint">Mets à jour la valeur actuelle de temps en temps depuis ton courtier. L'app ne se connecte à rien.</p>`;
}
function openInvestSetup() {
  const row = i => `<div class="srow"><input data-iset="${i.id}.name" value="${esc(i.name)}" placeholder="Nom (ex. ETF MSCI World Islamic)" aria-label="Nom" style="flex:2.6">
    <select data-iset="${i.id}.type" aria-label="Type" style="flex:1"><option value="etf" ${i.type === 'etf' ? 'selected' : ''}>ETF</option><option value="or" ${i.type === 'or' ? 'selected' : ''}>Or</option><option value="autre" ${i.type === 'autre' ? 'selected' : ''}>Autre</option></select>
    <button class="icon-btn" data-invdel="${i.id}" aria-label="Supprimer"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div>
    <div class="srow" style="margin-top:-2px"><input data-iset="${i.id}.start" inputmode="decimal" value="${esc(String(i.start || '').replace('.', ','))}" placeholder="Déjà investi €" aria-label="Déjà investi" style="flex:1"><input data-iset="${i.id}.value" inputmode="decimal" value="${esc(String(i.value || '').replace('.', ','))}" placeholder="Valeur actuelle €" aria-label="Valeur actuelle" style="flex:1"></div>`;
  $('#ideasBody').innerHTML = `<div class="grab"></div><div class="sheet-top"><span style="width:60px"></span><h2 id="ideasTitle">Investissements</h2><button class="link-btn" data-close style="text-align:right">OK</button></div>
    ${S.money.investments.map(row).join('<div style="height:10px"></div>')}
    <button class="btn sm quiet" data-invadd style="margin-top:12px">+ Ajouter une ligne</button>`;
  const d = $('#ideasSheet'); if (!d.open) d.showModal(); d.dataset.mode = 'bsetup';
}

/* ----- Onglet Foi : habitudes ----- */
function foiTop(view) {
  return `${pageHead('Foi', view === 'arabe' ? 'Le sens de ce que tu lis. Tajwid Institut s\'occupe de la lecture.' : view === 'dhikr' ? 'C\'est par l\'évocation d\'Allah que les cœurs s\'apaisent.' : 'La régularité avant tout. Chaque prière à l\'heure compte.', view === 'arabe' ? 'arabe' : view === 'dhikr' ? 'dhikr' : 'foi')}
  <div class="seg" role="group" aria-label="Section" style="margin-top:20px">
    <button data-fview="habitudes" aria-pressed="${view === 'habitudes'}"><span class="dot"></span>Habitudes</button>
    <button data-fview="arabe" aria-pressed="${view === 'arabe'}"><span class="dot"></span>Arabe</button>
    <button data-fview="dhikr" aria-pressed="${view === 'dhikr'}"><span class="dot"></span>Dhikr</button>
  </div>`;
}
function vHabits() {
  const k = F.day, d = S.faith.log[k] || {}, isToday = k === todayISO();
  const sc = faithScore(), ok = sc.pct >= FAITH_GOAL;
  // Chemin du soleil : Fajr à l'aube, Dhuhr au zénith, Asr, Maghrib au couchant, Isha dans la nuit.
  const ANG = { fajr: 196, dhuhr: 94, asr: 46, maghrib: 6, isha: -34 }, R = 136;
  const prayers = S.faith.habits.filter(h => h.prayer && ANG[h.id] != null);
  const nodes = prayers.map(h => { const a = ANG[h.id] * Math.PI / 180, x = R * Math.cos(a), y = -R * Math.sin(a), p = PRAYERS.find(q => q[0] === h.id);
    const v = pv(d[h.id]), pt = ptDay(k).win[h.id];
    return `<button class="prayer ${v && v !== 'x' ? 'on' : ''} ${v ? 'w-' + v : ''}" data-prayer="${h.id}" aria-label="${esc(PNAMES[h.id])} ${hm(pt[0])}${v ? ', ' + PWAY[v][0] : ''}" style="left:${((x + 180) / 360 * 100).toFixed(2)}%;top:${((y + 160) / 250 * 100).toFixed(2)}%"><span class="ar" lang="ar">${p[2]}</span><small>${hm(pt[0]).replace(' h ', ':')}</small>${v ? `<i class="pbadge">${PICON(v, 12)}</i>` : ''}</button>`; }).join('');
  const pn = isToday ? prayerNow() : null, nx = isToday && !pn ? nextPrayer() : null;
  const pnLine = pn ? (d[pn.id] && pn.k === k ? `${PNAMES[pn.id]} validée · prochaine à ${hm(nextPrayer().start)}` : `<b>${PNAMES[pn.id]}</b> en cours · se termine à ${hm(pn.end)}, dans ${leftTxt(pn.end - new Date())}`) : nx ? `Prochaine prière : <b>${PNAMES[nx.id]}</b> à ${hm(nx.start)}` : '';
  const ym = k.slice(0, 7); let cm = 0, cg = 0, cs = 0, cr = 0, cx = 0; Object.keys(S.faith.log).filter(x => x.startsWith(ym)).forEach(x => { const dd = S.faith.log[x]; ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'].forEach(id => { const w = pv(dd[id]); if (w === 'm') cm++; else if (w === 'g') cg++; else if (w === 's') cs++; else if (w === 'r') cr++; else if (w === 'x') cx++; }); });
  let fs = 0; for (let i = (pWeight((S.faith.log[todayISO()] || {}).fajr) === 1 ? 0 : 1); i < 400; i++) { if (pWeight((S.faith.log[iso(addDays(new Date(), -i))] || {}).fajr) === 1) fs++; else break; }
  const others = S.faith.habits.filter(h => !(h.prayer && ANG[h.id] != null));
  const nDone = dayDone(k), n = S.faith.habits.length;
  const start = addDays(new Date(), -(FAITH_DAYS - 1));
  let cells = '';
  for (let i = 0; i < FAITH_DAYS; i++) { const dd = addDays(start, i), kk = iso(dd), c = dayDone(kk); cells += `<button class="day ${c === n ? 'on' : ''} ${kk === k ? 'today' : ''}" data-fday="${kk}" style="--p:${n ? c / n * 100 : 0}" aria-label="${DAY_LONG.format(dd)} : ${c} sur ${n}"><i></i><span>${dd.getDate()}</span></button>`; }
  const dayLbl = isToday ? "Aujourd'hui" : DAY_LONG.format(parseDate(k));
  return `${foiTop('habitudes')}
  <div class="month-nav" style="margin-top:24px"><p class="eyebrow" style="text-transform:uppercase">${dayLbl}</p><div class="row" style="gap:0">
    <button class="icon-btn" data-fstep="-1" aria-label="Jour précédent" ${k <= iso(start) ? 'disabled style="opacity:.3"' : ''}>${ICON.prev}</button>
    <button class="icon-btn" data-fstep="1" aria-label="Jour suivant" ${isToday ? 'disabled style="opacity:.3"' : ''}>${ICON.next}</button></div></div>
  ${pnLine ? `<p class="pnow ${pn && !(d[pn.id] && pn.k === k) && pn.end - new Date() < 45 * 60000 ? 'hot' : ''}">${pnLine}</p>` : ''}
  <div class="sunpath">
    <svg viewBox="-180 -160 360 250" aria-hidden="true">
      <path d="M-170 0 L170 0" stroke="var(--line)" stroke-width="1"/><text x="-170" y="-6" style="font-size:8px;font-weight:700;letter-spacing:.14em;fill:var(--muted)">HORIZON</text>
      <path d="${`M${(-R).toFixed(1)} 0 A${R} ${R} 0 0 1 ${R} 0`}" fill="none" stroke="var(--orbit)" stroke-width="1.2" stroke-dasharray="3 5"/>
      <text x="0" y="-40" text-anchor="middle" style="font:400 44px var(--serif);fill:var(--gold)">${nDone}<tspan style="font-size:20px;fill:var(--muted)">/${n}</tspan></text>
      <text x="0" y="-18" text-anchor="middle" style="font-size:9px;font-weight:700;letter-spacing:.14em;fill:var(--muted)">HABITUDES</text>
    </svg>
    ${nodes}
  </div>
  <p class="hint" style="text-align:center;margin-top:34px">Touche une prière pour dire comment tu l'as faite.</p>
  ${others.length ? `<div class="checks" style="margin-top:6px">${others.map(h => checkbox(h.id, esc(h.name), 'data-habitc', !!d[h.id])).join('')}</div>` : ''}
  <section>
    <p class="eyebrow">Tes prières · ${MONTH_FMT.format(parseDate(k))}</p>
    <div class="pstats">${[['m', cm], ['g', cg], ['s', cs], ['r', cr], ['x', cx]].map(([w, c]) => `<div class="w-${w}"><i>${PICON(w, 16)}</i><b class="num">${c}</b><span>${PWAY[w][0]}</span></div>`).join('')}</div>
    <p class="small" style="margin-top:12px">${fs ? `<b style="color:var(--gold)">${fs} jour${fs > 1 ? 's' : ''}</b> d'affilée avec Fajr à l'heure.` : 'Fajr à l\'heure demain : la série commence là.'}</p>
  </section>
  <section>
    <div class="row between" style="align-items:flex-end"><div><p class="eyebrow">Régularité · 30 derniers jours</p><p class="num" style="font:400 3.25rem/1.05 var(--serif);color:var(--${ok ? 'mint' : 'gold'});margin-top:4px">${Math.round(sc.pct * 100)} %</p></div>
      <p class="small muted" style="text-align:right">objectif ${Math.round(FAITH_GOAL * 100)} %<br>${sc.tracked}/${FAITH_DAYS} jours suivis</p></div>
    <div class="bar goal" style="margin-top:12px"><i style="width:${Math.min(100, sc.pct * 100)}%;${ok ? 'background:var(--mint)' : ''}"></i><span style="left:${FAITH_GOAL * 100}%"></span></div>
    <p class="small ${ok ? '' : 'muted'}" style="margin-top:10px">${ok ? 'Quota atteint. Garde ce cap.' : `Il te manque ${sc.need} coche${sc.need > 1 ? 's' : ''} sur la période pour atteindre ${Math.round(FAITH_GOAL * 100)} %.`}</p>
    <div class="cal cal10" style="margin-top:18px">${cells}</div>
    <p class="hint">Touche un jour pour le corriger. La journée en cours compte dès que tout est coché.</p>
    <button class="btn sm ghost" data-fsetup style="margin-top:12px">Modifier mes habitudes</button>
  </section>`;
}
function openFaithSetup() {
  $('#ideasBody').innerHTML = `<div class="grab"></div><div class="sheet-top"><span style="width:60px"></span><h2 id="ideasTitle">Mes habitudes</h2><button class="link-btn" data-close style="text-align:right">OK</button></div>
    <p class="small muted">Toutes ces habitudes comptent dans ta régularité. Les 5 prières restent sur le chemin du soleil.</p>
    <div style="margin-top:14px">${S.faith.habits.map(h => `<div class="srow"><input data-hset="${h.id}" value="${esc(h.name)}" aria-label="Nom de l'habitude" style="flex:1" ${h.prayer ? 'readonly' : ''}>${h.prayer ? '<span class="pill" style="flex:none">Prière</span>' : `<button class="icon-btn" data-hdel="${h.id}" aria-label="Supprimer"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg></button>`}</div>`).join('')}</div>
    <div class="srow" style="margin-top:14px"><input id="hNew" placeholder="Ex. Adhkar du matin" aria-label="Nouvelle habitude" style="flex:1"><button class="btn sm" data-hadd>Ajouter</button></div>
    <p class="gt">Horaires de ta mosquée</p>
    <p class="small muted" style="margin:0 4px 10px">Calculés pour Cannes. Ajuste chaque prière à la minute pour coller aux horaires de ta mosquée.</p>
    <div class="group">${(() => { const t = ptDay(todayISO()), o = ptConf().off; return ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'].map(id => `<div class="cell"><span class="lbl">${PNAMES[id]}</span><button class="icon-btn" data-poff="${id}.-1" aria-label="Une minute plus tôt">−</button><b class="num" style="min-width:4.2em;text-align:center">${hm(t[id])}</b><button class="icon-btn" data-poff="${id}.1" aria-label="Une minute plus tard">+</button><span class="small muted num" style="min-width:3em;text-align:right">${o[id] ? (o[id] > 0 ? '+' : '') + o[id] + ' min' : ''}</span></div>`).join(''); })()}</div>
    <p class="hint">Fin de chaque prière : Fajr au lever du soleil, Dhuhr à Asr, Asr à Maghrib, Maghrib à Isha, Isha au milieu de la nuit (${hm(ptDay(todayISO()).midnight)} ce soir).</p>`;
  const d = $('#ideasSheet'); if (!d.open) d.showModal(); d.dataset.mode = 'bsetup';
}
/* ----- Prières : horaires, façon de prier, rappels -----
   Horaires calculés dans le téléphone (formules de PrayTimes.org), réglés par défaut sur Cannes, angle 12°
   pour Fajr et Isha, Asr standard, puis ajustés à la minute pour coller à la mosquée (S.faith.pt.off).
   Fenêtres : Fajr → lever du soleil, Dhuhr → Asr, Asr → Maghrib, Maghrib → Isha, Isha → milieu de la nuit.
   Journal : S.faith.log[date][prière] = 'm' mosquée · 'g' en groupe · 's' seul à l'heure · 'r' rattrapée · 'x' manquée
   (true, l'ancien format, vaut 's'). Régularité : m/g/s = 1, r = 0,5, x = 0. */
const PWAY = {
  m: ['À la mosquée', '<path d="M4 20h16M6 20v-7a6 6 0 0 1 12 0v7M12 7V3.5M10 20v-3.5a2 2 0 0 1 4 0V20"/>'],
  g: ['En groupe', '<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.4"/><path d="M3 20c0-3.5 2.7-6 6-6s6 2.5 6 6M15.5 14.3c3 0 5.5 2.2 5.5 5.7"/>'],
  s: ['Seul, à l\'heure', '<circle cx="12" cy="8" r="3.5"/><path d="M5 20c0-4 3-7 7-7s7 3 7 7"/>'],
  r: ['Rattrapée', '<path d="M4.5 12a7.5 7.5 0 1 0 2.3-5.4"/><path d="M4 4v4.5h4.5"/>'],
  x: ['Manquée', '<path d="M6 6l12 12M18 6L6 18"/>']
};
const PSHORT = { m: 'Mosquée', g: 'Groupe', s: 'Seul', r: 'Rattrapée' };
const PICON = (k, sz = 20) => `<svg viewBox="0 0 24 24" width="${sz}" height="${sz}" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${PWAY[k][1]}</svg>`;
const pv = v => v === true ? 's' : v;
const pWeight = v => { v = pv(v); return v === 'm' || v === 'g' || v === 's' ? 1 : v === 'r' ? 0.5 : 0; };
const PNAMES = { fajr: 'Fajr', dhuhr: 'Dhuhr', asr: 'Asr', maghrib: 'Maghrib', isha: 'Isha' };
function ptConf() { const p = S.faith.pt = S.faith.pt || {}; p.lat = p.lat ?? 43.5528; p.lon = p.lon ?? 7.0174; p.fa = p.fa ?? 12; p.ia = p.ia ?? 12; p.off = Object.assign({ fajr: 0, dhuhr: 0, asr: 0, maghrib: 0, isha: 0 }, p.off || {}); if (!p.since) p.since = Date.now(); return p; }
/* Calcul astronomique (PrayTimes.org, Hamid Zarrabi-Nezhad) */
const PT = (() => {
  const dtr = d => d * Math.PI / 180, rtd = r => r * 180 / Math.PI;
  const sin = d => Math.sin(dtr(d)), cos = d => Math.cos(dtr(d)), tan = d => Math.tan(dtr(d));
  const asin = x => rtd(Math.asin(x)), acos = x => rtd(Math.acos(x)), atan2 = (y, x) => rtd(Math.atan2(y, x)), acot = x => rtd(Math.atan(1 / x));
  const fix = (a, b) => { a = a - b * Math.floor(a / b); return a < 0 ? a + b : a; };
  function sun(jd) {
    const D = jd - 2451545.0, g = fix(357.529 + 0.98560028 * D, 360), q = fix(280.459 + 0.98564736 * D, 360);
    const L = fix(q + 1.915 * sin(g) + 0.020 * sin(2 * g), 360), e = 23.439 - 0.00000036 * D;
    const RA = atan2(cos(e) * sin(L), cos(L)) / 15;
    return { eqt: q / 15 - fix(RA, 24), decl: asin(sin(e) * sin(L)) };
  }
  function julian(y, m, d) { if (m <= 2) { y -= 1; m += 12; } const A = Math.floor(y / 100), B = 2 - A + Math.floor(A / 4); return Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + d + B - 1524.5; }
  return function (date, lat, lon, fa, ia) {
    const y = date.getFullYear(), mo = date.getMonth() + 1, d = date.getDate();
    const tz = -new Date(y, mo - 1, d, 12).getTimezoneOffset() / 60, jd = julian(y, mo, d) - lon / (15 * 24);
    const noon = t => fix(12 - sun(jd + t).eqt, 24);
    const angle = (a, t, ccw) => { const s = sun(jd + t), T = acos((-sin(a) - sin(s.decl) * sin(lat)) / (cos(s.decl) * cos(lat))) / 15, n = noon(t); return n + (ccw ? -T : T); };
    const asr = (f, t) => { const s = sun(jd + t); return angle(-acot(f + tan(Math.abs(lat - s.decl))), t); };
    let t = { fajr: 5, sunrise: 6, dhuhr: 12, asr: 13, sunset: 18, isha: 18 };
    for (let i = 0; i < 2; i++) {
      const p = k => t[k] / 24;
      t = { fajr: angle(fa, p('fajr'), true), sunrise: angle(0.833, p('sunrise'), true), dhuhr: noon(p('dhuhr')), asr: asr(1, p('asr')), sunset: angle(0.833, p('sunset')), isha: angle(ia, p('isha')) };
    }
    const adj = h => h + tz - lon / 15;
    return { fajr: adj(t.fajr), sunrise: adj(t.sunrise), dhuhr: adj(t.dhuhr), asr: adj(t.asr), maghrib: adj(t.sunset), isha: adj(t.isha) };
  };
})();
const ptCache = {};
/* Horaires d'un jour (objets Date), fenêtres comprises */
function ptDay(k) {
  const c = ptConf(), key = k + JSON.stringify(c.off) + c.fa + c.ia + c.lat;
  if (ptCache[key]) return ptCache[key];
  const d0 = parseDate(k), h = PT(d0, c.lat, c.lon, c.fa, c.ia), hn = PT(addDays(d0, 1), c.lat, c.lon, c.fa, c.ia);
  const at = (hours, min = 0) => new Date(d0.getTime() + Math.round((hours * 60 + min)) * 60000);
  const r = { fajr: at(h.fajr, c.off.fajr), sunrise: at(h.sunrise), dhuhr: at(h.dhuhr, c.off.dhuhr), asr: at(h.asr, c.off.asr), maghrib: at(h.maghrib, c.off.maghrib), isha: at(h.isha, c.off.isha) };
  r.midnight = at(h.maghrib + ((hn.fajr + 24) - h.maghrib) / 2);
  r.win = { fajr: [r.fajr, r.sunrise], dhuhr: [r.dhuhr, r.asr], asr: [r.asr, r.maghrib], maghrib: [r.maghrib, r.isha], isha: [r.isha, r.midnight] };
  return (ptCache[key] = r);
}
const hm = d => `${d.getHours()} h ${pad(d.getMinutes())}`;
const leftTxt = ms => { const m = Math.max(1, Math.round(ms / 60000)); return m >= 60 ? `${Math.floor(m / 60)} h ${pad(m % 60)}` : `${m} min`; };
/* La prière en cours (aujourd'hui ou Isha d'hier après minuit) */
function prayerNow(now = new Date()) {
  for (const k of [todayISO(), iso(addDays(now, -1))]) {
    const t = ptDay(k);
    for (const id of Object.keys(t.win)) { const [a, b] = t.win[id]; if (now >= a && now < b) return { k, id, end: b, start: a }; }
  }
  return null;
}
function nextPrayer(now = new Date()) {
  for (const k of [todayISO(), iso(addDays(now, 1))]) { const t = ptDay(k); for (const id of Object.keys(t.win)) if (t.win[id][0] > now) return { k, id, start: t.win[id][0] }; }
  return null;
}
const prayerTracked = id => S.faith.habits.some(h => h.id === id && h.prayer);
/* Prières dont le temps est passé sans validation (depuis l'activation du suivi) */
function missedPrayers() {
  const now = new Date(), since = ptConf().since, out = [];
  for (const k of [iso(addDays(now, -1)), todayISO()]) {
    const t = ptDay(k), d = S.faith.log[k] || {};
    Object.keys(t.win).forEach(id => { const [a, b] = t.win[id]; if (prayerTracked(id) && b < now && a.getTime() >= since && !d[id]) out.push({ k, id, start: a }); });
  }
  return out;
}
function prayerPts(id, v) { v = pv(v); const late = id === 'fajr' || id === 'isha'; return v === 'm' ? (late ? 12 : 6) : v === 'g' ? (late ? 8 : 4) : v === 's' ? 2 : v === 'r' ? 1 : 0; }
function setPrayer(k, id, v) {
  const d = S.faith.log[k] = S.faith.log[k] || {}, prev = d[id], n = S.faith.habits.length;
  const wasFull = dayDone(k) === n, today = k === todayISO() || k === iso(addDays(new Date(), -1));
  if (v) d[id] = v; else delete d[id];
  if (!Object.keys(d).length) delete S.faith.log[k];
  const full = dayDone(k) === n;
  save(); askPersist();
  if (today && prev && pv(prev) !== 'x') unreward(prayerPts(id, prev) + (wasFull && !full ? 5 : 0));
  if (today && prev === 'x') nourAdd(5);
  if (!v) { render(); return; }
  if (v === 'x') { nourAdd(-5); save(); refreshSun(); thud(); try { navigator.vibrate && navigator.vibrate(250); } catch (e) {} return; }
  if (!today) { render(); return; }
  const late = id === 'fajr' || id === 'isha', pts = prayerPts(id, v) + (full && !wasFull ? 5 : 0);
  const msg = v === 'm' ? [late ? `${PNAMES[id]} à la mosquée` : 'À la mosquée', late ? 'Celui qui prie Isha en groupe, c\'est comme s\'il avait veillé la moitié de la nuit ; et s\'il prie aussi Fajr en groupe, comme s\'il avait prié toute la nuit.' : 'La prière en groupe vaut vingt-sept fois celle faite seul.', late ? 'Muslim' : 'Bukhari']
    : v === 'g' ? ['En groupe', 'La prière en groupe vaut vingt-sept fois celle faite seul.', 'Bukhari']
    : v === 'r' ? ['Rattrapée', 'Tu as tenu, c\'est ce qui compte. La prochaine, à l\'heure, in sha Allah.']
    : full && !wasFull ? ['Journée de foi complète', 'Qu\'Allah l\'accepte. Les actes les plus aimés sont les plus réguliers.'] : null;
  render();
  reward(pts, { big: v === 'm' || (v === 'g' && late) || (full && !wasFull), msg, noBonus: v === 'r' });
}
/* Choix de la façon de prier : bulle au-dessus de la prière */
function openPrayerPick(btn) {
  closePrayerPick();
  const id = btn.dataset.prayer, k = F.day, cur = (S.faith.log[k] || {})[id], t = ptDay(k), now = new Date();
  if (k === todayISO() && t.win[id][0] > now) { toast(`Pas encore l'heure : ${PNAMES[id]} commence à ${hm(t.win[id][0])}.`); return; }
  const wrap = btn.parentElement, pop = document.createElement('div');
  pop.className = 'ppick'; pop.setAttribute('role', 'dialog'); pop.setAttribute('aria-label', `${PNAMES[id]} : comment l'as-tu faite ?`);
  pop.innerHTML = `<div class="ppick-o">${['m', 'g', 's', 'r'].map(v => `<button data-pway="${v}" data-pid="${id}" aria-pressed="${pv(cur) === v}">${PICON(v, 18).replace('stroke-width="1.8"', 'stroke-width="1.4"')}<span>${PSHORT[v]}</span></button>`).join('')}</div>${cur ? `<button class="ppick-x" data-pway="" data-pid="${id}">Retirer</button>` : ''}`;
  wrap.appendChild(pop);
  const W = wrap.clientWidth, bx = btn.offsetLeft, by = btn.offsetTop, pw = pop.offsetWidth, ph = pop.offsetHeight;
  const left = Math.max(0, Math.min(W - pw, bx - pw / 2)), below = by - 40 - ph < -60;
  pop.style.left = `${left}px`;
  pop.style.top = `${below ? by + 40 : by - 40 - ph}px`;
  pop.style.setProperty('--cx', `${Math.max(22, Math.min(pw - 22, bx - left))}px`);
  if (below) pop.classList.add('below');
  requestAnimationFrame(() => pop.classList.add('on'));
}
function closePrayerPick() { $$('.ppick').forEach(p => p.remove()); }
/* Écran des prières non validées (le poids après) */
function missedOverlay() {
  if ($('#missed') || tab === 'z' || tab === 'flux') return;
  const list = missedPrayers(); if (!list.length) return;
  const el = document.createElement('div'); el.id = 'missed'; el.className = 'missed';
  const day = k => k === todayISO() ? 'aujourd\'hui' : 'hier';
  el.innerHTML = `<div class="in"><p class="eyebrow" style="color:#7E8F88">Prières non validées</p><h2>${list.length === 1 ? 'Une prière attend ta réponse.' : `${list.length} prières attendent ta réponse.`}</h2>
    <p class="small" style="color:#9DB0A8">Leur temps est passé sans que tu les valides. Sois honnête : c'est toi que ça sert.</p>
    ${list.map(p => `<div class="mrow" data-mk="${p.k}" data-mid="${p.id}"><p><b>${PNAMES[p.id]}</b> · ${day(p.k)}, ${hm(p.start)}</p><div class="mch">${['m', 'g', 's', 'r', 'x'].map(v => `<button data-mway="${v}">${PICON(v, 18)}<span>${PWAY[v][0]}</span></button>`).join('')}</div></div>`).join('')}
    <button class="btn block" data-mdone style="margin-top:22px">Plus tard</button></div>`;
  document.body.appendChild(el); thud();
}

function toggleHabit(id) {
  const k = F.day, d = S.faith.log[k] = S.faith.log[k] || {};
  const on = !d[id], h = S.faith.habits.find(x => x.id === id), pts = h && h.prayer ? 2 : 1;
  if (d[id]) delete d[id]; else { d[id] = true; haptic(); }
  if (!Object.keys(d).length) delete S.faith.log[k];
  save(); askPersist(); render();
  const full = dayDone(k) === S.faith.habits.length;
  if (k !== todayISO()) { if (full && on) toast('Journée complète.'); return; }
  if (!on) { unreward(pts + (dayDone(k) === S.faith.habits.length - 1 ? 5 : 0)); return; }
  if (full) reward(pts + 5, { big: true, msg: ['Journée de foi complète', 'Qu\'Allah l\'accepte. Les actes les plus aimés sont les plus réguliers.'] });
  else reward(pts);
}

/* ----- Onglet Business ----- */
const STAGES = ['Idée', 'Validation', 'Lancement', 'En activité'];
function vBusiness() {
  const st = bizStatus();
  if (!S.unlocks.business) {
    const skillRows = st.skills.map(s => condRow(s.d === s.t, BIZ_LABEL[s.k], s.t ? s.d / s.t : 0, s.d === s.t ? 'Acquis.' : `${s.t - s.d} acquis restant${s.t - s.d > 1 ? 's' : ''} · mois ${s.months.join(', ')} du parcours`)).join('');
    const f = st.faith;
    return `${pageHead('Business', 'S\'ouvre quand les fondations sont posées.', 'business')}
    <div class="locked-hero">
      <span class="lock-big">${lockIcon.replace('width="18" height="18"', 'width="34" height="34"')}</span>
      <p>Cet onglet se déverrouille quand tes <b>6 compétences clés</b> sont acquises et que ta <b>régularité de foi</b> atteint ${Math.round(FAITH_GOAL * 100)} % sur 30 jours.</p>
      <div class="row" style="gap:22px;margin-top:14px;justify-content:center">
        <div><b class="num">${st.left}</b><span>acquis restants</span></div>
        <div><b class="num">${Math.round(f.pct * 100)} %</b><span>régularité (objectif ${Math.round(FAITH_GOAL * 100)})</span></div>
      </div>
    </div>
    <section><div class="row between" style="margin-bottom:14px"><h2 style="margin:0">Compétences clés</h2>${st.skillsOk ? '<span class="pill mint">Validé</span>' : ''}</div>${skillRows}
      <button class="btn sm ghost" data-goto="parcours">Ouvrir le parcours</button></section>
    <section><div class="row between" style="margin-bottom:14px"><h2 style="margin:0">Foi</h2>${st.faithOk ? '<span class="pill mint">Validé</span>' : ''}</div>
      ${condRow(st.faithOk, 'Régularité sur 30 jours', f.pct / FAITH_GOAL, st.faithOk ? 'Quota atteint.' : `${Math.round(f.pct * 100)} % aujourd'hui · il manque ${f.need} coche${f.need > 1 ? 's' : ''} · ${f.tracked}/${FAITH_DAYS} jours suivis`)}
      <button class="btn sm ghost" data-goto="foi">Ouvrir le tracker</button></section>`;
  }
  const P2 = S.biz.projects;
  const warn = [];
  if (!st.faithOk) warn.push(`ta régularité de foi est à ${Math.round(st.faith.pct * 100)} %`);
  return `${pageHead('Business', `Débloqué le ${new Date(S.unlocks.business).toLocaleDateString('fr-FR')}. À toi de construire.`, 'businessOn')}
    ${warn.length ? `<div class="alert">${ICON.warn}<span>Garde tes fondations : ${warn.join(', ')}.</span></div>` : ''}
    <section><h2>Mes projets</h2>
      ${P2.map(p => `<div class="proj">
        <input class="proj-name" data-pset="${p.id}.name" value="${esc(p.name)}" placeholder="Nom du projet" aria-label="Nom du projet">
        <div class="chips" style="margin-top:8px">${STAGES.map((s, i) => `<button class="chip" data-pstage="${p.id}.${i}" aria-pressed="${p.stage === i}">${s}</button>`).join('')}</div>
        <input class="proj-next" data-pset="${p.id}.next" value="${esc(p.next || '')}" placeholder="Prochaine action concrète" aria-label="Prochaine action">
        <button class="link-btn small" data-pdel="${p.id}" style="color:var(--muted);min-width:0;padding:0">Supprimer</button></div>`).join('') || '<p class="empty">Aucun projet pour l\'instant.</p>'}
      <button class="btn block" data-padd style="margin-top:14px">+ Nouveau projet</button>
      <p class="hint">Un projet avance d'une étape quand il a une prochaine action claire. Valide avant d'investir (mois 9 du parcours).</p></section>`;
}

/* =====================================================================
   12 quater. CORPS — entraînement, nutrition, soin & sommeil
   Repères (sources dans NOTES.md) :
   - Prise de muscle propre : +0,25 à 0,5 % du poids par semaine (Iraki et al. 2019).
   - Protéines : ~1,6 g/kg suffit à la plupart, jusqu'à 2,2 g/kg (Morton et al. 2018) → cible 1,8 g/kg, en 4 prises.
   - Volume : ~10 séries par muscle et par semaine pour démarrer (Schoenfeld et al. 2017).
   - Sommeil : une nuit blanche réduit la synthèse des protéines musculaires d'environ 18 % (Lamon et al. 2021).
   - Mémoire musculaire : le muscle revient vite, tendons et articulations plus lentement → 4 semaines de reprise.
   - Fitra : ongles, moustache, aisselles, pubis, pas plus de 40 nuits (Muslim 258).
   ===================================================================== */
const EX = {
  // Maison, poids du corps
  squat_pdc: { n: 'Squat', cue: 'Pieds largeur d\'épaules, hanches sous les genoux, dos neutre.', v: ['Squat', 'Squat tempo (3 s en descente)', 'Squat pause (2 s en bas)'] },
  pompes: { n: 'Pompes', cue: 'Corps gainé, coudes à 45°, poitrine à 2 cm du sol.', v: ['Pompes inclinées (mains sur une table)', 'Pompes classiques', 'Pompes pieds surélevés', 'Pompes archer'] },
  row_table: { n: 'Rowing sous une table', cue: 'Allongé sous une table solide, tire ta poitrine vers le bord, omoplates serrées.', v: ['Rowing table, genoux pliés', 'Rowing table, jambes tendues', 'Rowing table, pieds surélevés'] },
  fentes: { n: 'Fentes arrière', cue: 'Grand pas en arrière, genou avant au-dessus de la cheville. Reps par jambe.', v: ['Fentes arrière', 'Fentes arrière tempo', 'Squat bulgare (pied sur une chaise)'] },
  planche: { n: 'Planche', cue: 'Coudes sous les épaules, fessiers serrés, respire.', sec: true },
  pont: { n: 'Pont fessier', cue: 'Pousse dans les talons, serre les fessiers 1 s en haut.', v: ['Pont fessier', 'Pont fessier une jambe'] },
  pike: { n: 'Pompes piquées', cue: 'Hanches hautes en V, la tête descend entre les mains : ce sont tes épaules qui travaillent.', v: ['Pompes piquées', 'Pompes piquées pieds surélevés'] },
  superman: { n: 'Superman en Y', cue: 'À plat ventre, bras en Y, décolle poitrine et bras, 2 s de pause.' },
  deadbug: { n: 'Dead bug', cue: 'Dos plaqué au sol, bras et jambe opposés s\'allongent lentement.' },
  // Salle
  squat: { n: 'Squat barre', cue: 'Barre sur les trapèzes, gainé, descends au moins à la parallèle.', kg: true, alt: 'ou presse à cuisses' },
  bench: { n: 'Développé couché', cue: 'Omoplates serrées, barre au bas des pectoraux, pieds ancrés.', kg: true },
  rowb: { n: 'Rowing buste penché', cue: 'Dos plat à 45°, tire vers le nombril.', kg: true, alt: 'ou rowing à la machine' },
  lat: { n: 'Élévations latérales', cue: 'Haltères légers, monte jusqu\'à hauteur d\'épaules.', kg: true },
  curl: { n: 'Curl biceps', cue: 'Coudes fixes, descente contrôlée.', kg: true },
  rdl: { n: 'Soulevé de terre roumain', cue: 'Genoux à peine fléchis, pousse les hanches en arrière, barre contre les cuisses.', kg: true },
  ohp: { n: 'Développé militaire haltères', cue: 'Gainé, pousse au-dessus de la tête sans cambrer.', kg: true },
  pulldown: { n: 'Tirage vertical', cue: 'Barre vers le haut de la poitrine, coudes vers les hanches.', kg: true, alt: 'ou tractions assistées' },
  lunge: { n: 'Fentes marchées haltères', cue: 'Grands pas, buste droit. Reps par jambe.', kg: true },
  tri: { n: 'Extension triceps à la poulie', cue: 'Coudes collés au corps, extension complète.', kg: true },
  calf: { n: 'Mollets debout', cue: 'Amplitude complète, 1 s en haut, 1 s en bas.', kg: true },
  incl: { n: 'Développé incliné haltères', cue: 'Banc à 30°, descends jusqu\'à l\'étirement des pectoraux.', kg: true },
  pullup: { n: 'Tractions', cue: 'Menton au-dessus de la barre. Lest en kg, ou assistance en kg négatifs.', kg: true },
  dips: { n: 'Dips', cue: 'Buste légèrement penché, descends jusqu\'à 90° aux coudes.', kg: true },
  row1: { n: 'Rowing haltère un bras', cue: 'Main et genou sur le banc, tire vers la hanche.', kg: true },
  face: { n: 'Face pull', cue: 'Corde à hauteur des yeux, tire vers le front, coudes hauts.', kg: true },
  hammer: { n: 'Curl marteau', cue: 'Prise neutre, coudes fixes.', kg: true },
  ohtri: { n: 'Extension triceps au-dessus de la tête', cue: 'Coudes serrés, grand étirement en bas.', kg: true },
  press: { n: 'Presse à cuisses', cue: 'Bas du dos collé au dossier, descends profond.', kg: true },
  legcurl: { n: 'Leg curl', cue: 'Descente contrôlée sur 2 s.', kg: true },
  deadlift: { n: 'Soulevé de terre', cue: 'Barre contre les tibias, dos plat, pousse le sol.', kg: true },
  bulg: { n: 'Squat bulgare haltères', cue: 'Pied arrière sur le banc, genou avant stable. Reps par jambe.', kg: true },
  legext: { n: 'Leg extension', cue: '1 s de contraction en haut.', kg: true },
  hipthrust: { n: 'Hip thrust', cue: 'Dos contre le banc, menton rentré, verrouille les fessiers en haut.', kg: true },
  raises: { n: 'Relevés de jambes suspendu', cue: 'Sans élan, enroule le bassin.' }
};
/* Programme : [exercice, séries, reps min, reps max (ou secondes), repos en s] */
const PROG = [
  { id: 1, name: 'Réveil', where: 'Maison · poids du corps', perWeek: 3,
    why: 'Tes muscles reviennent vite (mémoire musculaire), tes tendons et articulations beaucoup plus lentement. 4 semaines pour retrouver la technique et le rythme de 3 séances, sans te blesser.',
    tpl: { A: [['squat_pdc', 3, 12, 20, 60], ['pompes', 3, 6, 15, 90], ['row_table', 3, 6, 12, 90], ['fentes', 2, 8, 12, 60], ['planche', 3, 20, 45, 45]],
           B: [['pont', 3, 12, 20, 60], ['pike', 3, 6, 12, 90], ['row_table', 3, 6, 12, 90], ['fentes', 3, 8, 12, 60], ['superman', 2, 10, 15, 45], ['deadbug', 2, 8, 12, 45]] } },
  { id: 2, name: 'Forge', where: 'Salle · corps entier', perWeek: 3,
    why: 'Chaque muscle travaillé 3 fois par semaine, avec des charges qui montent dès que tu atteins le haut de la fourchette. C\'est ici que se construit l\'essentiel.',
    tpl: { A: [['squat', 3, 6, 10, 150], ['bench', 3, 6, 10, 150], ['rowb', 3, 8, 12, 120], ['lat', 3, 12, 20, 60], ['curl', 2, 10, 15, 60], ['planche', 2, 30, 60, 45]],
           B: [['rdl', 3, 8, 12, 150], ['ohp', 3, 8, 12, 120], ['pulldown', 3, 8, 12, 120], ['lunge', 2, 10, 12, 90], ['tri', 2, 10, 15, 60], ['calf', 3, 10, 15, 60]] } },
  { id: 3, name: 'Sculpture', where: 'Salle · haut / bas', perWeek: 4,
    why: 'Plus de volume par muscle, réparti sur 4 séances. Pour quand ta base est solide et que tes charges montent moins vite.',
    tpl: { 'Haut A': [['bench', 4, 6, 10, 150], ['rowb', 4, 8, 10, 120], ['incl', 3, 8, 12, 90], ['pulldown', 3, 8, 12, 90], ['lat', 3, 12, 20, 60], ['curl', 2, 10, 15, 60], ['tri', 2, 10, 15, 60]],
           'Bas A': [['squat', 4, 6, 10, 180], ['rdl', 3, 8, 10, 150], ['press', 3, 10, 15, 90], ['legcurl', 3, 10, 15, 60], ['calf', 3, 10, 15, 60], ['planche', 2, 30, 60, 45]],
           'Haut B': [['ohp', 4, 6, 10, 150], ['pullup', 4, 6, 10, 150], ['dips', 3, 8, 12, 90], ['row1', 3, 8, 12, 90], ['face', 3, 12, 20, 60], ['hammer', 2, 10, 15, 60], ['ohtri', 2, 10, 15, 60]],
           'Bas B': [['deadlift', 3, 4, 6, 180], ['bulg', 3, 8, 12, 90], ['hipthrust', 3, 8, 12, 90], ['legext', 3, 12, 15, 60], ['calf', 3, 10, 15, 60], ['raises', 3, 8, 15, 60]] } }
];
const UNLOCK = { 2: { from: 1, need: 12 }, 3: { from: 2, need: 36 } };
const FOODS = [['Œufs ×3', 19], ['Poulet 150 g', 45], ['Steak haché 5 % 125 g', 26], ['Thon, 1 boîte', 28], ['Skyr 150 g', 15], ['Fromage blanc 200 g', 15], ['Lentilles cuites 200 g', 18], ['Lait 250 ml', 8],
  ['Sardines, 1 boîte', 22], ['Poisson blanc 150 g', 30], ['Pois chiches cuits 200 g', 16], ['Flocons d\'avoine 80 g', 10], ['Whey, 1 dose', 24], ['Amandes 30 g', 6]];
const FITRA = [['ongles', 'Ongles'], ['moustache', 'Moustache'], ['aisselles', 'Aisselles'], ['pubis', 'Poils intimes']];
const FITRA_MAX = 40;
const C = { view: 'entrainement', edit: false, allFoods: false };
try { const v = localStorage.getItem('sdp-corps-view'); if (['entrainement', 'nutrition', 'soin'].includes(v)) C.view = v; } catch (e) {}
function setCView(v) { C.view = v; try { localStorage.setItem('sdp-corps-view', v); } catch (e) {} }

function defaultBody() {
  return {
    phase: 1, gym: false, unlocks: {}, sessions: [], active: null, level: {},
    profile: { weight: '', height: '', age: '24', fast: false, adj: 0, adjAt: '' },
    food: {}, fcount: {}, weights: [], sleep: {}, wake: '04:30',
    care: { list: [{ id: 'dents-m', name: 'Dents le matin' }, { id: 'dents-s', name: 'Dents le soir + fil dentaire' }, { id: 'douche', name: 'Douche' }, { id: 'visage', name: 'Visage : nettoyant + crème' }], log: {} },
    fitra: {}, ghusl: {}
  };
}
function normalizeBody(sb) {
  const d = defaultBody(); sb = sb && typeof sb === 'object' ? sb : {};
  const b = Object.assign(d, sb);
  b.profile = Object.assign(defaultBody().profile, sb.profile || {});
  b.care = { list: sb.care && Array.isArray(sb.care.list) && sb.care.list.length ? sb.care.list : d.care.list, log: sb.care && sb.care.log && typeof sb.care.log === 'object' ? sb.care.log : {} };
  ['unlocks', 'level', 'food', 'fcount', 'sleep', 'nap', 'fitra', 'ghusl'].forEach(k => { if (!b[k] || typeof b[k] !== 'object' || Array.isArray(b[k])) b[k] = {}; });
  ['sessions', 'weights'].forEach(k => { if (!Array.isArray(b[k])) b[k] = []; });
  if (![1, 2, 3].includes(b.phase)) b.phase = 1;
  return b;
}

/* ----- Calculs ----- */
const phaseOf = id => PROG.find(p => p.id === id) || PROG[0];
const kgTxt = w => `${String(Math.round(w * 100) / 100).replace('.', ',')} kg`;
const unitOf = id => EX[id].sec ? 's' : 'reps';
const exName = id => { const e = EX[id]; return e.v ? e.v[Math.min(S.body.level[id] || 0, e.v.length - 1)] : e.n; };
const fmtClock = m => { m = ((Math.round(m) % 1440) + 1440) % 1440; return `${Math.floor(m / 60)} h ${pad(m % 60)}`; };
const fmtDur = m => `${Math.floor(m / 60)} h${m % 60 ? ' ' + pad(m % 60) : ''}`;
function weekSessions(d = new Date()) { const a = iso(mondayOf(d)), b = iso(addDays(mondayOf(d), 6)); return S.body.sessions.filter(s => s.date >= a && s.date <= b); }
const phaseCount = id => S.body.sessions.filter(s => s.phase === id).length;
function nextTpl(ph) { const keys = Object.keys(ph.tpl), last = S.body.sessions.filter(s => s.phase === ph.id).slice(-1)[0]; return last ? keys[(keys.indexOf(last.tpl) + 1) % keys.length] : keys[0]; }
function phaseStatus(id) {
  if (id === 1 || S.body.unlocks[id]) return { open: true, p: 1 };
  const u = UNLOCK[id], n = phaseCount(u.from);
  return { open: false, n, need: u.need, gymOk: id !== 2 || S.body.gym, p: Math.min(1, n / u.need) };
}
function checkBodyUnlocks() {
  [2, 3].forEach(id => {
    if (S.body.unlocks[id]) return;
    const u = UNLOCK[id];
    if (phaseCount(u.from) >= u.need && (id !== 2 || S.body.gym)) { S.body.unlocks[id] = todayISO(); save(); setTimeout(() => toast(`Étape ${phaseOf(id).name} débloquée. Choisis-la sur ta piste.`), 600); }
  });
}
const isFastDay = (k = todayISO()) => !!S.body.profile.fast && [1, 4].includes(parseDate(k).getDay());
/* Dernière perf sur cet exercice (même variante) */
function lastPerf(id) {
  const lvl = S.body.level[id] || 0;
  for (let i = S.body.sessions.length - 1; i >= 0; i--) {
    const s = S.body.sessions[i];
    if (s.sets[id] && s.sets[id].length && (!EX[id].v || ((s.v || {})[id] || 0) === lvl)) return s.sets[id];
  }
  return null;
}
/* Double progression : on monte la charge quand toutes les séries atteignent le haut de la fourchette */
function suggest(id, sets, lo, hi) {
  const e = EX[id], u = e.sec ? ' s' : '', lp = lastPerf(id);
  if (!lp) return { r: lo, w: '', txt: e.kg ? 'Première fois : prends une charge avec laquelle tu t\'arrêtes à 2 reps de l\'échec.' : `Vise ${lo} à ${hi}${u || ' reps'} par série, en gardant 1 ou 2 reps en réserve.` };
  const w = e.kg ? Math.max(...lp.map(x => numv(x.w))) : '';
  const perf = `Dernière fois : ${lp.map(x => x.r).join(' · ')}${u}${e.kg && w ? ` à ${kgTxt(w)}` : ''}.`;
  if (lp.length >= sets && lp.every(x => x.r >= hi)) {
    if (e.kg) return { r: lo, w: w + 2.5, up: true, txt: `${perf} Haut de fourchette partout : monte à ${kgTxt(w + 2.5)} et repars à ${lo}.` };
    if (e.v && (S.body.level[id] || 0) < e.v.length - 1) return { r: hi, w: '', up: true, txt: `${perf} Haut de fourchette partout : passe à la variante plus dure avec ›.` };
    return { r: hi, w: '', txt: `${perf} Au plafond : ralentis la descente (3 s) pour garder l'effort.` };
  }
  return { r: Math.min(hi, lp[0].r), w, txt: `${perf} Bats au moins une série.` };
}
function estMinutes(tpl) { return Math.round(5 + tpl.reduce((m, [, s, , , rest]) => m + s * (45 + rest) / 60, 0)); }

/* Nutrition : Mifflin-St Jeor × 1,55 (deux emplois debout + 3 séances) + 300 kcal */
function sortedWeights() { return S.body.weights.slice().sort((a, b) => (a.date < b.date ? -1 : 1)); }
function bodyWeight() { const ws = sortedWeights(); return ws.length ? numv(ws[ws.length - 1].kg) : numv(S.body.profile.weight); }
function bodyTargets() {
  const pr = S.body.profile, w = bodyWeight(), h = numv(pr.height), a = numv(pr.age) || 24;
  if (!w || !h) return null;
  const bmr = 10 * w + 6.25 * h - 5 * a + 5, tdee = bmr * 1.55;
  return { w, kcal: Math.round((tdee + 300 + numv(pr.adj)) / 50) * 50, maint: Math.round(tdee / 50) * 50, prot: Math.round(w * 1.8 / 5) * 5, lo: w * 0.0025, hi: w * 0.005, water: Math.max(8, Math.round(w * 35 / 250)) };
}
const foodDay = (k = todayISO()) => S.body.food[k] || { p: 0, water: 0, log: [] };
function weightVerdict(t) {
  const ws = sortedWeights(); if (ws.length < 2) return null;
  const last = ws[ws.length - 1], from = iso(addDays(parseDate(last.date), -28)), pts = ws.filter(w => w.date >= from);
  if (pts.length < 2) return null;
  const xs = pts.map(p => (parseDate(p.date) - parseDate(pts[0].date)) / 864e5), ys = pts.map(p => numv(p.kg));
  if (xs[xs.length - 1] < 10) return { wait: true };
  const mx = xs.reduce((a, b) => a + b) / xs.length, my = ys.reduce((a, b) => a + b) / ys.length;
  let num = 0, den = 0; xs.forEach((x, i) => { num += (x - mx) * (ys[i] - my); den += (x - mx) ** 2; });
  const rate = den ? num / den * 7 : 0;
  return { rate, st: rate < t.lo ? 'slow' : rate > t.hi ? 'fast' : 'ok' };
}

/* ----- En-tête Corps ----- */
function corpsTop(view) {
  return `${pageHead('Corps', 'Un esprit sain dans un corps sain.', { entrainement: 'corps', nutrition: 'nutri', soin: 'soin' }[view])}
  <div class="seg seg3" role="group" aria-label="Section" style="margin-top:20px">
    <button data-cview="entrainement" aria-pressed="${view === 'entrainement'}">Entraînement</button>
    <button data-cview="nutrition" aria-pressed="${view === 'nutrition'}">Nutrition</button>
    <button data-cview="soin" aria-pressed="${view === 'soin'}">Soin</button>
  </div>`;
}

/* ----- Entraînement ----- */
function phaseTrack() {
  const xs = [34, 165, 296], cur = S.body.phase;
  const st = PROG.map(p => phaseStatus(p.id));
  const segs = [0, 1].map(i => {
    const p = st[i + 1].p, x0 = xs[i] + 26, x1 = xs[i + 1] - 26;
    return `<line x1="${x0}" y1="36" x2="${x1}" y2="36" stroke="var(--line)" stroke-width="4" stroke-linecap="round"/>
      <line x1="${x0}" y1="36" x2="${(x0 + (x1 - x0) * p).toFixed(1)}" y2="36" stroke="var(--gold)" stroke-width="4" stroke-linecap="round"/>`;
  }).join('');
  const nodes = PROG.map((p, i) => {
    const s = st[i], on = p.id === cur;
    return `<g class="pnode" data-phase="${p.id}" transform="translate(${xs[i]} 36)" role="button" tabindex="0" aria-label="Étape ${p.id}, ${p.name}${s.open ? '' : ', verrouillée'}${on ? ', en cours' : ''}">
      <circle r="34" fill="transparent"/>
      ${on ? '<circle r="31" fill="var(--glow)"/>' : ''}
      <circle class="pb" r="24" fill="${on ? 'var(--gold)' : 'var(--surface)'}" stroke="${s.open ? 'var(--gold)' : 'var(--orbit)'}" stroke-width="2"/>
      ${s.open ? `<text y="1" text-anchor="middle" dominant-baseline="central" style="font:400 22px var(--serif);fill:${on ? 'var(--gold-ink)' : 'var(--gold)'}">${p.id}</text>`
        : `<svg x="-9" y="-9" width="18" height="18" viewBox="0 0 24 24" style="color:var(--muted)">${GLYPH.lock}</svg>`}
      <text y="46" text-anchor="middle" style="font-size:12px;font-weight:700;fill:${on ? 'var(--gold)' : 'var(--ink-2)'}">${p.name}</text>
      <text y="61" text-anchor="middle" style="font-size:9.5px;fill:var(--muted)">${p.where.split(' · ')[0]}</text></g>`;
  }).join('');
  return `<div class="ptrack"><svg viewBox="0 0 330 104" aria-label="Tes 3 étapes">${segs}${nodes}</svg></div>`;
}
function unlockBlock(ph) {
  const nxt = PROG.find(p => p.id === ph.id + 1); if (!nxt) return '';
  const s = phaseStatus(nxt.id);
  if (s.open) return S.body.phase === ph.id ? `<div class="alert" style="background:var(--mint-soft);color:var(--mint)">${ICON.tick.replace('<svg', '<svg style="stroke:currentColor;stroke-width:2.5;fill:none"')}<span>L'étape ${nxt.name} est ouverte. Touche-la sur la piste quand tu es prêt.</span></div>` : '';
  let h = `<p class="eyebrow" style="margin-top:18px">Pour ouvrir ${nxt.name}</p>`;
  h += condRow(s.n >= s.need, `${s.need} séances de ${ph.name}`, s.n / s.need, s.n >= s.need ? 'Fait.' : `${s.n} sur ${s.need} · encore ${s.need - s.n}`);
  if (nxt.id === 2) h += `<label class="cell tap gymrow"><span class="lbl">Je suis inscrit à la salle</span><span class="switch"><input type="checkbox" id="gymSw" ${S.body.gym ? 'checked' : ''}><span></span></span></label>
    <p class="hint">La salle se mérite : 12 séances à la maison d'abord. Tu ne paies l'abonnement qu'une fois l'habitude installée.</p>`;
  return h;
}
function spark(vals, w = 84, h = 26) {
  if (vals.length < 2) return '';
  const mn = Math.min(...vals), mx = Math.max(...vals), rg = mx - mn || 1;
  const pts = vals.map((v, i) => `${(i / (vals.length - 1) * (w - 6) + 3).toFixed(1)},${(h - 3 - (v - mn) / rg * (h - 6)).toFixed(1)}`);
  const [lx, ly] = pts[pts.length - 1].split(',');
  return `<svg viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" aria-hidden="true"><polyline points="${pts.join(' ')}" fill="none" stroke="var(--gold)" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/><circle cx="${lx}" cy="${ly}" r="2.6" fill="var(--gold)"/></svg>`;
}
function progressRows(ph) {
  const ids = [...new Set(Object.values(ph.tpl).flat().map(x => x[0]))];
  const rows = ids.map(id => {
    const e = EX[id], lvl = S.body.level[id] || 0;
    const vals = S.body.sessions.filter(s => s.sets[id] && (!e.v || ((s.v || {})[id] || 0) === lvl))
      .map(s => e.kg ? Math.max(...s.sets[id].map(x => numv(x.w))) : Math.max(...s.sets[id].map(x => x.r))).slice(-10);
    if (!vals.length) return '';
    const last = vals[vals.length - 1];
    return `<div class="prog-row"><span class="grow">${esc(exName(id))}</span><b class="num">${e.kg ? kgTxt(last) : `${last} ${e.sec ? 's' : 'reps'}`}</b>${spark(vals) || '<span></span>'}</div>`;
  }).join('');
  return rows ? `<section><h2>Tes progrès</h2><p class="small muted" style="margin:-8px 0 8px">${ph.id === 1 ? 'Meilleure série de chaque exercice, séance après séance.' : 'Charge de travail, séance après séance.'}</p>${rows}</section>` : '';
}
function vTraining() {
  if (S.body.active) return vSession();
  const ph = phaseOf(S.body.phase), wk = weekSessions(), n = wk.length, per = ph.perWeek;
  const key = nextTpl(ph), tpl = ph.tpl[key], mon = mondayOf(new Date()), today = todayISO();
  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((l, i) => {
    const k = iso(addDays(mon, i)), did = wk.some(s => s.date === k);
    return `<span class="${did ? 'on' : ''} ${k === today ? 'today' : ''} ${isFastDay(k) ? 'fast' : ''}"><i>${did ? ICON.tick : ''}</i>${l}</span>`;
  }).join('');
  const recent = S.body.sessions.slice(-3).reverse();
  return `${corpsTop('entrainement')}
  <figure class="hadith"><p class="ar" lang="ar" dir="rtl">الْمُؤْمِنُ الْقَوِيُّ خَيْرٌ وَأَحَبُّ إِلَى اللَّهِ مِنَ الْمُؤْمِنِ الضَّعِيفِ</p>
    <figcaption>« Le croyant fort est meilleur et plus aimé d'Allah que le croyant faible, et en chacun il y a du bien. » Muslim</figcaption></figure>
  ${phaseTrack()}
  <div class="phase-card"><p class="eyebrow">Étape ${ph.id} · ${ph.where} · ${per} séances / semaine</p><h3>${ph.name}</h3><p class="small" style="color:var(--ink-2);margin:0">${ph.why}</p>${unlockBlock(ph)}</div>
  <section>
    <div class="row between" style="align-items:flex-end"><h2 style="margin:0">Cette semaine</h2><p class="num" style="font:400 2.25rem/1 var(--serif);margin:0;color:var(--${n >= per ? 'mint' : 'gold'})">${n}<span style="font-size:1.1rem;color:var(--muted)">/${per}</span></p></div>
    <div class="wk">${days}</div>
    ${S.body.profile.fast ? '<p class="hint"><span class="fdot"></span> jours de jeûne (lundi, jeudi) : repos, ou séance légère après l\'iftar.</p>' : ''}
    ${isFastDay() ? `<div class="alert">${ICON.warn}<span>Jour de jeûne. Mieux vaut te reposer, ou t'entraîner après l'iftar, une fois hydraté et nourri.</span></div>` : ''}
    <div class="next-card">
      <p class="eyebrow">${n >= per ? 'Objectif de la semaine atteint' : 'Prochaine séance'}</p>
      <h3>Séance ${key}</h3>
      <p class="small muted" style="margin:0">≈ ${estMinutes(tpl)} min · ${tpl.length} exercices · échauffement compris</p>
      <ul class="ex-prev">${tpl.map(([id, s, lo, hi]) => `<li><span>${esc(exName(id))}</span><b>${s} × ${lo}–${hi}${EX[id].sec ? ' s' : ''}</b></li>`).join('')}</ul>
      <button class="btn block" data-cstart>Commencer la séance</button>
      ${n >= per ? '<p class="hint">Le muscle grandit pendant le repos. Une séance de plus reste possible si tu es frais.</p>' : ''}
    </div>
  </section>
  ${progressRows(ph)}
  ${recent.length ? `<section><h2>Dernières séances</h2>${recent.map(s => `<div class="prog-row"><span class="grow">${DAY_LONG.format(parseDate(s.date))}</span><b>${esc(phaseOf(s.phase).name)} · ${esc(s.tpl)}</b><span class="small muted" style="text-align:right">${s.min || '—'} min</span></div>`).join('')}</section>` : ''}`;
}
function sessLine() {
  const a = S.body.active, ph = phaseOf(a.phase), tpl = ph.tpl[a.tpl] || [];
  const tot = tpl.reduce((m, x) => m + x[1], 0), dn = Object.values(a.sets).reduce((m, arr) => m + (arr || []).filter(Boolean).length, 0);
  return `${Math.max(0, Math.round((Date.now() - a.start) / 60000))} min · ${dn}/${tot} séries`;
}
function vSession() {
  const a = S.body.active, ph = phaseOf(a.phase), tpl = ph.tpl[a.tpl] || [];
  const cards = tpl.map(([id, sets, lo, hi, rest], ei) => {
    const e = EX[id], lvl = S.body.level[id] || 0, sg = suggest(id, sets, lo, hi), done = a.sets[id] || [];
    let prevW = sg.w;
    const rows = Array.from({ length: sets }, (_, i) => {
      const d = done[i]; if (d && e.kg) prevW = d.w;
      const wv = d ? d.w : prevW;
      return `<div class="set-row ${e.kg ? '' : 'bw'} ${d ? 'done' : ''}"><span class="set-n">${i + 1}</span>
        <label class="set-f"><input inputmode="numeric" id="r-${id}-${i}" value="${d ? d.r : ''}" placeholder="${sg.r}" aria-label="Série ${i + 1}, ${e.sec ? 'secondes' : 'répétitions'}" ${d ? 'disabled' : ''}><span>${e.sec ? 's' : 'reps'}</span></label>
        ${e.kg ? `<label class="set-f"><input inputmode="decimal" id="w-${id}-${i}" value="${wv === '' || wv == null ? '' : String(wv).replace('.', ',')}" placeholder="—" aria-label="Série ${i + 1}, charge" ${d ? 'disabled' : ''}><span>kg</span></label>` : ''}
        <button class="set-ok" data-set="${id}.${i}" aria-pressed="${!!d}" aria-label="Série ${i + 1} ${d ? 'faite, toucher pour annuler' : 'faite'}">${ICON.tick}</button></div>`;
    }).join('');
    const nDone = done.filter(Boolean).length;
    return `<article class="ex-card ${nDone >= sets ? 'complete' : ''}">
      <div class="row between" style="align-items:flex-start"><div class="grow"><p class="eyebrow">${ei + 1}/${tpl.length} · ${sets} × ${lo}–${hi} ${e.sec ? 's' : 'reps'} · repos ${rest >= 60 ? `${Math.floor(rest / 60)} min${rest % 60 ? ' ' + rest % 60 : ''}` : rest + ' s'}</p><h3 class="ex-name">${esc(exName(id))}</h3></div>
      ${e.v ? `<div class="lvl"><button data-lvl="${id}.-1" aria-label="Variante plus facile" ${lvl === 0 ? 'disabled' : ''}>‹</button><button data-lvl="${id}.1" aria-label="Variante plus dure" ${lvl >= e.v.length - 1 ? 'disabled' : ''}>›</button></div>` : ''}</div>
      <p class="small muted" style="margin:0">${e.cue}${e.alt ? ` <i>(${e.alt})</i>` : ''}</p>
      <p class="sugg ${sg.up ? 'up' : ''}">${sg.txt}</p>
      ${rows}</article>`;
  }).join('');
  return `<header class="top"><div><p class="eyebrow">${ph.name} · séance en cours</p><h1>Séance <em>${esc(a.tpl)}</em></h1><p id="sessEl" class="num">${sessLine()}</p></div></header>
  <details class="warm"><summary>Échauffement · 5 min</summary><p>30 s de jumping jacks, 10 rotations d'épaules, 10 squats lents, 10 pompes faciles. Puis, pour le premier exercice, 1 ou 2 séries légères.</p></details>
  ${cards}
  <button class="btn block" data-cfinish style="margin-top:22px">Terminer la séance</button>
  <button class="btn block quiet" data-cabort style="margin-top:10px">Abandonner</button>
  <p class="hint">Touche ✓ quand une série est faite : si tu n'as rien tapé, le chiffre grisé est retenu et le repos se lance. Tes notes sont gardées même si tu quittes l'app.</p>`;
}
function startSession() {
  const ph = phaseOf(S.body.phase);
  S.body.active = { phase: ph.id, tpl: nextTpl(ph), start: Date.now(), sets: {}, v: {} };
  save(); audioUnlock(); render(true); window.scrollTo(0, 0);
}
function doSet(id, i) {
  const a = S.body.active; if (!a) return;
  const arr = a.sets[id] = a.sets[id] || [];
  if (arr[i]) { arr[i] = null; while (arr.length && !arr[arr.length - 1]) arr.pop(); save(); render(); return; }
  const rIn = $(`#r-${id}-${i}`), wIn = $(`#w-${id}-${i}`);
  const r = parseInt((rIn.value || rIn.placeholder || '').replace(/\D/g, ''), 10) || 0;
  if (!r) { toast('Indique ce que tu as fait.'); rIn.focus(); return; }
  const w = wIn ? numv((wIn.value || '').replace(/\s/g, '').replace(',', '.')) : '';
  arr[i] = { r, w }; a.v[id] = S.body.level[id] || 0;
  audioUnlock(); save(); reward(1);
  const tplRow = (phaseOf(a.phase).tpl[a.tpl] || []).find(x => x[0] === id);
  const sy = window.scrollY; render(); window.scrollTo(0, sy);
  const allDone = (phaseOf(a.phase).tpl[a.tpl] || []).every(([x, s]) => (a.sets[x] || []).filter(Boolean).length >= s);
  if (allDone) { stopRest(); toast('Tout est fait. Termine ta séance.'); } else if (tplRow) startRest(tplRow[4]);
}
function finishSession() {
  const a = S.body.active; if (!a) return;
  const sets = {}; let n = 0;
  Object.keys(a.sets).forEach(id => { const arr = (a.sets[id] || []).filter(Boolean); if (arr.length) { sets[id] = arr; n += arr.length; } });
  stopRest();
  if (!n) { S.body.active = null; save(); render(); toast('Séance fermée : aucune série notée.'); return; }
  S.body.sessions.push({ id: uid(), date: iso(new Date(a.start)), phase: a.phase, tpl: a.tpl, sets, v: a.v || {}, min: Math.max(1, Math.round((Date.now() - a.start) / 60000)) });
  S.body.active = null; save(); askPersist(); checkUnlocks(); render(true); window.scrollTo(0, 0);
  const per = phaseOf(S.body.phase).perWeek, w = weekSessions().length;
  reward(8, { big: true, msg: [w >= per ? `Semaine bouclée · ${w}/${per}` : `Séance enregistrée · ${w}/${per}`, 'Le croyant fort est meilleur et plus aimé d\'Allah que le croyant faible.', 'Muslim'] });
}

/* Minuteur de repos (hors de #app pour survivre aux rendus) */
const RT = { end: 0, total: 0, iv: 0, hide: 0 };
let actx = null;
function audioUnlock() { try { actx = actx || new (window.AudioContext || window.webkitAudioContext)(); if (actx.state === 'suspended') actx.resume(); } catch (e) {} }
function beep() {
  const c = actx; if (!c) return;
  try { [0, .24].forEach(t => { const o = c.createOscillator(), g = c.createGain(); o.frequency.value = 880; g.gain.setValueAtTime(.0001, c.currentTime + t); g.gain.exponentialRampToValueAtTime(.3, c.currentTime + t + .02); g.gain.exponentialRampToValueAtTime(.0001, c.currentTime + t + .2); o.connect(g).connect(c.destination); o.start(c.currentTime + t); o.stop(c.currentTime + t + .22); }); } catch (e) {}
}
function restEl() {
  let el = $('#rest');
  if (!el) {
    el = document.createElement('div'); el.id = 'rest'; el.className = 'rest'; el.setAttribute('role', 'timer'); el.setAttribute('aria-live', 'off');
    el.innerHTML = `<svg viewBox="-22 -22 44 44" aria-hidden="true"><circle r="18" class="trk"/><circle r="18" class="prg" transform="rotate(-90)"/></svg><span class="rl"><small>Repos</small><b class="num"></b></span><button data-rest="15">+15 s</button><button data-rest="0">Passer</button>`;
    document.body.appendChild(el);
  }
  return el;
}
function startRest(sec) {
  const el = restEl(); clearTimeout(RT.hide); clearInterval(RT.iv);
  RT.total = sec; RT.end = Date.now() + sec * 1000; el.classList.remove('end'); el.classList.add('on');
  const c = 2 * Math.PI * 18, prg = $('.prg', el); prg.style.strokeDasharray = c.toFixed(1);
  const tick = () => {
    const left = Math.max(0, RT.end - Date.now()), s = Math.ceil(left / 1000);
    $('b', el).textContent = `${Math.floor(s / 60)}:${pad(s % 60)}`; $('small', el).textContent = 'Repos';
    prg.style.strokeDashoffset = (c * (1 - left / (RT.total * 1000))).toFixed(1);
    if (left <= 0) {
      clearInterval(RT.iv); RT.iv = 0; el.classList.add('end'); $('small', el).textContent = 'À toi'; $('b', el).textContent = 'Go';
      beep(); try { navigator.vibrate && navigator.vibrate([200, 100, 200]); } catch (e) {}
      RT.hide = setTimeout(() => el.classList.remove('on'), 3500);
    }
  };
  tick(); RT.iv = setInterval(tick, 250);
}
function stopRest() { clearInterval(RT.iv); RT.iv = 0; clearTimeout(RT.hide); const el = $('#rest'); if (el) el.classList.remove('on'); }

/* ----- Nutrition ----- */
function calibForm() {
  const pr = S.body.profile;
  return `<section style="margin-top:26px"><h2>${C.edit ? 'Mon profil' : 'Ton carburant'}</h2>
    ${C.edit ? '' : '<p class="small muted" style="margin:-6px 0 14px">Trois chiffres et l\'app calcule tes calories, tes protéines et ton rythme de prise de poids.</p>'}
    <div class="group">
      <div class="cell"><label for="cbW">Poids</label><input id="cbW" class="r" inputmode="decimal" value="${esc(bodyWeight() || '')}" placeholder="70"><span class="unit">kg</span></div>
      <div class="cell"><label for="cbH">Taille</label><input id="cbH" class="r" inputmode="numeric" value="${esc(pr.height)}" placeholder="178"><span class="unit">cm</span></div>
      <div class="cell"><label for="cbA">Âge</label><input id="cbA" class="r" inputmode="numeric" value="${esc(pr.age)}"><span class="unit">ans</span></div>
      <label class="cell tap"><span class="lbl">Je jeûne le lundi et le jeudi</span><span class="switch"><input type="checkbox" id="cbF" ${pr.fast ? 'checked' : ''}><span></span></span></label>
    </div>
    <button class="btn block" data-cbody style="margin-top:14px">${C.edit ? 'Enregistrer' : 'Calculer'}</button>
    ${C.edit ? '<button class="btn block quiet" data-cbodyx style="margin-top:10px">Annuler</button>' : ''}</section>`;
}
function weightChart(t) {
  const ws = sortedWeights().slice(-16); if (!ws.length) return '';
  const d0 = parseDate(ws[0].date), w0 = numv(ws[0].kg);
  const dx = w => (parseDate(w.date) - d0) / 864e5, lastX = Math.max(14, dx(ws[ws.length - 1]) + 7);
  const band = x => [w0 + t.lo * x / 7, w0 + t.hi * x / 7];
  const ys = ws.map(w => numv(w.kg)).concat([w0, band(lastX)[1]]);
  const mn = Math.floor(Math.min(...ys) - .5), mx = Math.ceil(Math.max(...ys) + .5);
  const W = 320, H = 150, L = 34, R = 8, T = 10, B = 24;
  const X = x => L + x / lastX * (W - L - R), Y = v => T + (mx - v) / (mx - mn) * (H - T - B);
  const poly = `${X(0)},${Y(band(0)[1])} ${X(lastX)},${Y(band(lastX)[1])} ${X(lastX)},${Y(band(lastX)[0])} ${X(0)},${Y(band(0)[0])}`;
  const pts = ws.map(w => `${X(dx(w)).toFixed(1)},${Y(numv(w.kg)).toFixed(1)}`);
  return `<div class="wchart"><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Courbe de poids">
    <polygon points="${poly}" fill="var(--gold-soft)" opacity=".9"/>
    <text x="${W - R}" y="${Y(band(lastX)[1]) - 4}" text-anchor="end" style="font-size:9px;font-weight:700;letter-spacing:.08em;fill:var(--gold)">COULOIR</text>
    <line x1="${L}" y1="${H - B}" x2="${W - R}" y2="${H - B}" stroke="var(--line)"/>
    <text x="${L - 6}" y="${Y(mx) + 4}" text-anchor="end" style="font-size:10px;fill:var(--muted)">${mx}</text>
    <text x="${L - 6}" y="${Y(mn) + 4}" text-anchor="end" style="font-size:10px;fill:var(--muted)">${mn}</text>
    <text x="${L}" y="${H - 8}" style="font-size:10px;fill:var(--muted)">${DAY_MONTH.format(d0)}</text>
    <text x="${X(dx(ws[ws.length - 1]))}" y="${H - 8}" text-anchor="middle" style="font-size:10px;fill:var(--muted)">${DAY_MONTH.format(parseDate(ws[ws.length - 1].date))}</text>
    ${pts.length > 1 ? `<polyline points="${pts.join(' ')}" fill="none" stroke="var(--gold)" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"/>` : ''}
    ${pts.map((p, i) => { const [x, y] = p.split(','); return `<circle cx="${x}" cy="${y}" r="${i === pts.length - 1 ? 4.5 : 3}" fill="${i === pts.length - 1 ? 'var(--gold)' : 'var(--surface)'}" stroke="var(--gold)" stroke-width="2"/>`; }).join('')}
  </svg></div>`;
}
function vNutrition() {
  const t = bodyTargets();
  if (!t || C.edit) return `${corpsTop('nutrition')}${calibForm()}`;
  const day = foodDay(), p = day.p, pr = S.body.profile, R = 100, circ = 2 * Math.PI * R, full = p >= t.prot;
  const ticks = [1, 2, 3].map(q => { const [x0, y0] = polar(R - 13, q * 90), [x1, y1] = polar(R + 13, q * 90); return `<line x1="${x0.toFixed(1)}" y1="${y0.toFixed(1)}" x2="${x1.toFixed(1)}" y2="${y1.toFixed(1)}" stroke="var(--bg)" stroke-width="3"/>`; }).join('');
  const order = FOODS.map((f, i) => [f, i]).sort((a, b) => (S.body.fcount[b[0][0]] || 0) - (S.body.fcount[a[0][0]] || 0) || a[1] - b[1]).map(x => x[0]);
  const shown = C.allFoods ? order : order.slice(0, 8);
  const drops = Array.from({ length: t.water }, (_, i) => `<button class="drop ${i < day.water ? 'on' : ''}" data-water="${i + 1}" aria-label="${i + 1} verre${i ? 's' : ''}"><svg viewBox="0 0 24 28" aria-hidden="true"><path d="M12 2C8 8 4.5 12.5 4.5 17.5a7.5 7.5 0 0 0 15 0C19.5 12.5 16 8 12 2z"/></svg></button>`).join('');
  const v = weightVerdict(t), canAdj = !pr.adjAt || (parseDate(todayISO()) - parseDate(pr.adjAt)) / 864e5 >= 14;
  let verdict = '<p class="hint">Pèse-toi une fois par semaine, le même jour, le matin à jeun. Il faut 2 pesées à 10 jours d\'écart pour juger ton rythme.</p>';
  if (v && v.wait) verdict = '<p class="hint">Encore quelques jours : l\'app juge ton rythme sur au moins 10 jours de pesées.</p>';
  else if (v) {
    const r = `${v.rate >= 0 ? '+' : '−'}${String(Math.abs(Math.round(v.rate * 100) / 100)).replace('.', ',')} kg / semaine`;
    if (v.st === 'ok') verdict = `<div class="alert" style="background:var(--mint-soft);color:var(--mint)">${ICON.info}<span><b>${r}</b> : pile dans le couloir. Ne change rien.</span></div>`;
    else verdict = `<div class="alert">${ICON.warn}<span><b>${r}</b> : ${v.st === 'slow' ? 'trop lent pour construire. Ajoute environ 150 kcal par jour, par exemple une banane et une poignée d\'amandes.' : 'trop rapide, tu risques de stocker surtout du gras. Retire environ 150 kcal par jour, par exemple un peu de féculents au dîner.'}</span></div>
      ${canAdj ? `<button class="btn sm ghost" data-kadj="${v.st === 'slow' ? 150 : -150}" style="margin-top:10px">Appliquer ${v.st === 'slow' ? '+' : '−'}150 kcal à ma cible</button>` : '<p class="hint">Ajustement récent : laisse 2 semaines avant de juger à nouveau.</p>'}`;
  }
  const lastW = sortedWeights().slice(-1)[0];
  return `${corpsTop('nutrition')}
  ${isFastDay() ? `<div class="alert" style="background:var(--mint-soft);color:var(--mint)">${ICON.info}<span><b>Jour de jeûne.</b> Protéines en 3 temps : au suhoor (œufs, skyr, flocons ≈ 45 g), à l'iftar après les dattes et l'eau (un vrai repas ≈ 50 g), puis avant de dormir (fromage blanc).</span></div>` : ''}
  <div class="fuel">
    <svg viewBox="-130 -130 260 260" aria-hidden="true">
      <circle r="${R}" fill="none" stroke="var(--raise)" stroke-width="18"/>
      <circle r="${R}" fill="none" stroke="var(--${full ? 'mint' : 'gold'})" stroke-width="18" stroke-linecap="round" transform="rotate(-90)" ${ringDash(R, p / t.prot)} style="transition:stroke-dashoffset .7s var(--ease)"/>
      ${ticks}
    </svg>
    <div class="fuel-c"><div><b class="num" style="color:var(--${full ? 'mint' : 'ink'})">${p}</b><span>sur ${t.prot} g de protéines</span><br><span>4 prises de ${Math.round(t.prot / 4 / 5) * 5} g environ</span></div></div>
  </div>
  <div class="foods">${shown.map(([n, g]) => `<button class="food" data-food="${esc(n)}"><span>${esc(n)}</span><b>+${g}</b></button>`).join('')}</div>
  <div class="row" style="margin-top:10px;gap:8px">
    <button class="btn sm quiet" data-fall style="flex:1">${C.allFoods ? 'Moins' : 'Tout voir'}</button>
    <input id="fCustom" inputmode="numeric" class="famt num" placeholder="+ g" aria-label="Protéines en grammes" style="width:84px;text-align:center">
    <button class="btn sm" data-fcustom>Ajouter</button>
  </div>
  ${day.log.length ? `<div class="flog">${day.log.map((l, i) => `<button data-fdel="${i}" aria-label="Retirer ${esc(l[0])}">${esc(l[0])} · ${l[1]} g <span aria-hidden="true">×</span></button>`).join('')}</div>` : ''}
  <section>
    <div class="row between" style="align-items:flex-end"><h2 style="margin:0">Eau</h2><p class="small muted" style="margin:0">${day.water} / ${t.water} verres · ${String(t.water * .25).replace('.', ',')} L</p></div>
    <div class="drops">${drops}</div>
    <p class="hint">Un verre de plus par heure d'entraînement. À la gare, garde une gourde avec toi.</p>
  </section>
  <section>
    <div class="row between" style="margin-bottom:14px"><h2 style="margin:0">Ta cible</h2><button class="link-btn" data-cedit>Profil</button></div>
    <div class="kpis">
      <div class="kpi"><b class="num">${t.kcal.toLocaleString('fr-FR')}</b><span>kcal par jour${numv(pr.adj) ? ` (ajusté ${numv(pr.adj) > 0 ? '+' : ''}${pr.adj})` : ''}</span></div>
      <div class="kpi"><b class="num">${t.prot} g</b><span>protéines (1,8 g/kg)</span></div>
      <div class="kpi"><b class="num">${t.maint.toLocaleString('fr-FR')}</b><span>kcal pour maintenir ton poids</span></div>
      <div class="kpi"><b class="num">+${String(Math.round(t.lo * 4.3 * 10) / 10).replace('.', ',')} à ${String(Math.round(t.hi * 4.3 * 10) / 10).replace('.', ',')}</b><span>kg par mois visés</span></div>
    </div>
    <p class="hint">Les calories sont une estimation de départ. C'est la balance qui dit la vérité : l'app ajuste à partir de tes pesées.</p>
  </section>
  <section>
    <h2>Pesée</h2>
    ${weightChart(t)}
    <div class="row" style="margin-top:12px;gap:8px"><input id="wIn" inputmode="decimal" class="famt num" placeholder="${lastW ? String(lastW.kg).replace('.', ',') : 'kg'}" aria-label="Poids du jour en kg" style="flex:1;text-align:left"><button class="btn sm" data-wsave>Enregistrer</button></div>
    ${verdict}
    ${lastW ? `<button class="link-btn small" data-wdel style="color:var(--muted);min-width:0;padding:0;margin-top:6px">Supprimer la dernière pesée (${DAY_MONTH.format(parseDate(lastW.date))})</button>` : ''}
  </section>
  <section>
    <h2>L'assiette</h2>
    <div class="plate">
      <svg viewBox="-60 -60 120 120" aria-hidden="true">
        <circle r="56" fill="var(--surface)" stroke="var(--line)" stroke-width="2"/><circle r="44" fill="none" stroke="var(--line)" stroke-width="1"/>
        <path d="M0 0 L0 -44 A44 44 0 0 1 38.1 22 Z" fill="var(--gold)" opacity=".85"/>
        <path d="M0 0 L38.1 22 A44 44 0 0 1 -38.1 22 Z" fill="var(--mint)" opacity=".75"/>
        <path d="M0 0 L-38.1 22 A44 44 0 0 1 0 -44 Z" fill="var(--warn)" opacity=".55"/>
      </svg>
      <ul class="plate-l"><li><i style="background:var(--gold)"></i><span><b>Protéines</b> · une à deux paumes</span></li><li><i style="background:var(--mint)"></i><span><b>Légumes</b> · un à deux poings</span></li><li><i style="background:var(--warn);opacity:.7"></i><span><b>Féculents</b> · un à deux poings (riz, pâtes, pain, pommes de terre)</span></li><li><i style="background:var(--line)"></i><span>+ un pouce d'huile d'olive, d'avocat ou d'oléagineux</span></li></ul>
    </div>
    <p class="hint">« Un tiers pour la nourriture, un tiers pour la boisson, un tiers pour le souffle » (Tirmidhi). Pour prendre du muscle sans te gaver : 4 repas raisonnables plutôt que 3 énormes.</p>
  </section>`;
}
function addFood(label, g) {
  const k = todayISO(), d = S.body.food[k] = S.body.food[k] || { p: 0, water: 0, log: [] };
  d.log.push([label, g]); d.p = d.log.reduce((m, x) => m + x[1], 0);
  if (FOODS.some(f => f[0] === label)) S.body.fcount[label] = (S.body.fcount[label] || 0) + 1;
  save(); askPersist(); haptic(); const sy = window.scrollY; render(); window.scrollTo(0, sy);
  const t = bodyTargets();
  if (t && d.p >= t.prot && d.p - g < t.prot) reward(4, { big: true, msg: [`Protéines atteintes · ${d.p} g`, 'Ton corps a de quoi construire aujourd\'hui.'] });
  else toast(`+${g} g de protéines`, 'Annuler', () => { d.log.pop(); d.p = d.log.reduce((m, x) => m + x[1], 0); save(); render(); });
}

/* ----- Soin & sommeil ----- */
const sleepTot = k => (S.body.sleep[k] || 0) + ((S.body.nap || {})[k] || 0);
function sleepBars() {
  const W = 320, H = 150, T = 18, B = 26, max = 600, bw = 30, L0 = 26, gap = (W - L0 - 7 * bw) / 6;
  const Y = m => T + (1 - Math.min(m, max) / max) * (H - T - B);
  let h = `<line x1="${L0 - 4}" y1="${Y(420)}" x2="${W}" y2="${Y(420)}" stroke="var(--mint)" stroke-dasharray="4 4" stroke-width="1.2"/><text x="0" y="${Y(420) + 3.5}" style="font-size:10px;font-weight:700;fill:var(--mint)">7 h</text>`;
  for (let i = 6; i >= 0; i--) {
    const d = addDays(new Date(), -i), k = iso(d), n0 = S.body.sleep[k] || 0, nap = (S.body.nap || {})[k] || 0, m = n0 + nap, x = L0 + (6 - i) * (bw + gap);
    h += m ? `${n0 ? `<rect x="${x.toFixed(1)}" y="${Y(n0).toFixed(1)}" width="${bw}" height="${(H - B - Y(n0)).toFixed(1)}" rx="8" fill="var(--${m >= 420 ? 'gold' : 'warn'})" opacity="${i ? .75 : 1}"/>` : ''}${nap ? `<rect x="${x.toFixed(1)}" y="${Y(m).toFixed(1)}" width="${bw}" height="${(Y(n0) - Y(m) - (n0 ? 2 : 0)).toFixed(1)}" rx="8" fill="var(--mint)" opacity="${i ? .75 : 1}"/>` : ''}<text x="${(x + bw / 2).toFixed(1)}" y="${(Y(m) - 5).toFixed(1)}" text-anchor="middle" style="font-size:10px;font-weight:700;fill:var(--ink-2)">${Math.floor(m / 60)}h${m % 60 ? pad(m % 60) : ''}</text>`
      : `<circle cx="${(x + bw / 2).toFixed(1)}" cy="${H - B - 6}" r="3" fill="var(--line)"/>`;
    h += `<text x="${(x + bw / 2).toFixed(1)}" y="${H - 8}" text-anchor="middle" style="font-size:10px;font-weight:${i ? 600 : 800};fill:var(--${i ? 'muted' : 'gold'})">${i ? DAY_SHORT.format(d).replace('.', '') : 'nuit'}</text>`;
  }
  return `<div class="sbars"><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Sommeil des 7 dernières nuits">${h}</svg></div>`;
}
function fitraRing(id, name) {
  const hist = S.body.fitra[id] || [], last = hist[hist.length - 1];
  const days = last ? Math.round((parseDate(todayISO()) - parseDate(last)) / 864e5) : null;
  const left = days == null ? 0 : Math.max(0, 1 - days / FITRA_MAX);
  const col = days == null || days >= FITRA_MAX ? 'danger' : days >= 30 ? 'warn' : 'gold';
  return `<button class="fit" data-fitra="${id}" aria-label="${name} : ${days == null ? 'jamais noté' : days === 0 ? 'fait aujourd\'hui' : `il y a ${days} jours`}. Toucher quand c'est fait.">
    <svg viewBox="-34 -34 68 68" aria-hidden="true"><circle r="28" fill="none" stroke="var(--${days != null && days >= FITRA_MAX ? 'danger-soft' : 'raise'})" stroke-width="6"/><circle r="28" fill="none" stroke="var(--${col})" stroke-width="6" stroke-linecap="round" transform="rotate(-90)" ${ringDash(28, left)}/>
      <text y="${days == null ? 5 : 2}" text-anchor="middle" style="font:400 ${days == null ? 18 : 20}px var(--serif);fill:var(--ink)">${days == null ? '—' : days}</text>${days == null ? '' : '<text y="14" text-anchor="middle" style="font-size:7.5px;font-weight:700;letter-spacing:.08em;fill:var(--muted)">JOURS</text>'}</svg>
    ${name}<small>${days == null ? 'à noter' : days >= FITRA_MAX ? 'à faire' : `reste ${FITRA_MAX - days} j`}</small></button>`;
}
function vSoin() {
  const k = todayISO(), m = S.body.sleep[k], nap = (S.body.nap || {})[k] || 0, tot = sleepTot(k), logged = Array.from({ length: 7 }, (_, i) => sleepTot(iso(addDays(new Date(), -i)))).filter(Boolean);
  const avg = logged.length ? Math.round(logged.reduce((a, b) => a + b) / logged.length) : 0;
  const wake = toMin(S.body.wake || '04:30'), bed5 = wake - 450 - 15, bed4 = wake - 360 - 15;
  const care = S.body.care, cl = care.log[k] || {}, cn = care.list.filter(c => cl[c.id]).length;
  const fri = iso(addDays(mondayOf(new Date()), 4));
  return `${corpsTop('soin')}
  <section style="margin-top:26px">
    <div class="row between" style="align-items:flex-end"><h2 style="margin:0">Sommeil</h2><p class="small muted" style="margin:0;text-align:right">${logged.length ? `moyenne ${fmtDur(avg)}` : 'objectif 7 à 9 h'}</p></div>
    ${sleepBars()}
    <p class="eyebrow" style="margin-top:14px">Cette nuit</p>
    <div class="row" style="margin-top:8px;gap:8px">
      <button class="icon-btn" data-sleep="-15" aria-label="Moins 15 minutes" style="background:var(--surface)">−</button>
      <p class="num" style="flex:1;text-align:center;margin:0;font:400 2.25rem/1 var(--serif);color:var(--${!m ? 'muted' : m >= 420 ? 'gold' : 'warn'})">${m ? fmtDur(m) : '—'}</p>
      <button class="icon-btn" data-sleep="15" aria-label="Plus 15 minutes" style="background:var(--surface)">+</button>
    </div>
    <div class="chips" style="justify-content:center">${[300, 360, 420, 480, 540].map(v => `<button class="chip" data-sleep="=${v}" aria-pressed="${m === v}">${v / 60} h</button>`).join('')}</div>
    <p class="eyebrow" style="margin-top:18px">Sieste aujourd'hui</p>
    <div class="chips">${[[0, 'Aucune'], [20, '20 min'], [30, '30 min'], [60, '1 h'], [90, '1 h 30']].map(([v, l]) => `<button class="chip" data-nap="${v}" aria-pressed="${nap === v}">${l}</button>`).join('')}</div>
    ${nap || m ? `<p class="small" style="margin:12px 0 0">Total sur la journée : <b class="num" style="color:var(--${tot >= 420 ? 'gold' : 'warn'})">${fmtDur(tot)}</b>${nap ? ` <span class="muted">(nuit ${m ? fmtDur(m) : '—'} + sieste ${fmtDur(nap)})</span>` : ''}</p>` : ''}
    <p class="hint">Le matin, note ta nuit. Si tu fais une sieste dans la journée, ajoute-la : elle s'empile en vert sur la barre du jour. Soir de Mister Pizza puis gare ? Une sieste de 20 à 30 min, ou de 90 min (un cycle complet), évite de te réveiller en plein sommeil profond.</p>
    ${avg && avg < 420 ? `<div class="alert">${ICON.warn}<span>Moins de 7 h en moyenne : le muscle se construit surtout la nuit. Une seule nuit blanche fait chuter d'environ 18 % la fabrication de muscle le lendemain. Après la gare, une sieste de 20 min aide.</span></div>` : ''}
  </section>
  <section>
    <h2>Heure de coucher</h2>
    <div class="bed">
      <div class="row between"><label for="bedWake" class="small muted">Lever demain</label><input type="time" id="bedWake" value="${esc(S.body.wake || '04:30')}" class="num" style="border:0;background:var(--raise);border-radius:12px;min-height:44px;padding:0 12px;color:var(--ink)"></div>
      <div class="chips"><button class="chip" data-wake="04:30" aria-pressed="${S.body.wake === '04:30'}">Gare · 4 h 30</button><button class="chip" data-wake="07:30" aria-pressed="${S.body.wake === '07:30'}">Repos · 7 h 30</button></div>
      <p class="eyebrow" style="margin-top:18px">Au lit à</p><b class="num">${fmtClock(bed5)}</b>
      <p class="small muted" style="margin:6px 0 0">5 cycles de 90 min (7 h 30) + 15 min pour t'endormir. Soir de Mister Pizza ? Vise au moins <b style="font:inherit;color:var(--ink)">${fmtClock(bed4)}</b> (4 cycles, 6 h) et fais une sieste le lendemain.</p>
    </div>
  </section>
  <section>
    <div class="row between" style="align-items:flex-end;margin-bottom:6px"><h2 style="margin:0">Hygiène du jour</h2><p class="small muted" style="margin:0">${cn}/${care.list.length}</p></div>
    <div class="checks">${care.list.map(c => checkbox(c.id, esc(c.name), 'data-care', !!cl[c.id])).join('')}${checkbox('ghusl', 'Ghusl du vendredi <span class="small muted">· cette semaine</span>', 'data-ghusl', !!S.body.ghusl[fri])}</div>
    <button class="btn sm ghost" data-caresetup style="margin-top:8px">Modifier la liste</button>
  </section>
  <section>
    <h2>La fitra</h2>
    <p class="small muted" style="margin:-8px 0 0">Ongles, moustache, aisselles, poils intimes : pas plus de 40 nuits (Muslim). Chaque jauge se vide avec le temps. Touche-la quand c'est fait.</p>
    <div class="fitra">${FITRA.map(([id, n]) => fitraRing(id, n)).join('')}</div>
  </section>
  ${hairBlock()}`;
}
function openCareSetup() {
  $('#ideasBody').innerHTML = `<div class="grab"></div><div class="sheet-top"><span style="width:60px"></span><h2 id="ideasTitle">Hygiène du jour</h2><button class="link-btn" data-close style="text-align:right">OK</button></div>
    <p class="small muted">Ce que tu veux cocher chaque jour. La liste repart à zéro chaque matin.</p>
    <div style="margin-top:14px">${S.body.care.list.map(c => `<div class="srow"><input data-cset="${c.id}" value="${esc(c.name)}" aria-label="Nom" style="flex:1"><button class="icon-btn" data-cdel="${c.id}" aria-label="Supprimer"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div>`).join('')}</div>
    <div class="srow" style="margin-top:14px"><input id="cNew" placeholder="Ex. Siwak, parfum, crème solaire" aria-label="Nouvel élément" style="flex:1"><button class="btn sm" data-cadd>Ajouter</button></div>`;
  const d = $('#ideasSheet'); if (!d.open) d.showModal(); d.dataset.mode = 'bsetup';
}

/* =====================================================================
   12 quinquies. LUMIÈRE — renforcement sur toute l'app
   - Chaque bonne action allume de la lumière (✦) : son doux, éclat doré, vibration.
   - Récompense variable : de temps en temps (≈ 1 fois sur 8), une « pépite » double la lumière
     et apporte une parole. L'imprévu est ce qui fait le plus réagir la dopamine
     (erreur de prédiction de la récompense, Schultz).
   - Tension avant : le soir, l'orbite montre ce qui s'éteint à minuit (aversion à la perte).
   - Poids après : le bilan de la veille s'assombrit quand la journée a été vide, et le soleil
     de l'orbite brille selon ta lumière du jour. Jamais d'humiliation : un cap, tout de suite.
   ===================================================================== */
const GEMS = [
  ['Les actes les plus aimés d\'Allah sont les plus réguliers, même s\'ils sont peu nombreux.', 'Bukhari, Muslim'],
  ['Certes, avec la difficulté vient la facilité.', 'Coran 94:6'],
  ['Allah ne change pas l\'état d\'un peuple tant qu\'il ne change pas ce qui est en lui-même.', 'Coran 13:11'],
  ['Le fort n\'est pas celui qui terrasse les autres. Le fort est celui qui se maîtrise.', 'Bukhari'],
  ['Ceux qui luttent pour Notre cause, Nous les guiderons sur Nos chemins.', 'Coran 29:69'],
  ['Quiconque craint Allah, Il lui donnera une issue, et le nourrira d\'où il ne s\'y attend pas.', 'Coran 65:2-3'],
  ['Profite de ta jeunesse avant ta vieillesse, de ta santé avant ta maladie, de ton temps libre avant ton occupation.', 'Hakim'],
  ['Allah aime, lorsque l\'un de vous accomplit une chose, qu\'il l\'accomplisse avec excellence.', 'Bayhaqi'],
  ['Le croyant fort est meilleur et plus aimé d\'Allah que le croyant faible.', 'Muslim'],
  ['Chaque fois que tu tiens, tu rends la fois suivante plus facile.', 'Sayko']
];
const NOTES5 = [523.25, 587.33, 659.25, 783.99, 880, 1046.5];
let lastPt = null;
document.addEventListener('pointerdown', e => { lastPt = { x: e.clientX, y: e.clientY }; }, true);
function tone(freq, t0, dur, gain, type = 'sine', glideTo) {
  const c = actx; if (!c) return;
  try {
    const o = c.createOscillator(), g = c.createGain(), t = c.currentTime + t0;
    o.type = type; o.frequency.setValueAtTime(freq, t); if (glideTo) o.frequency.exponentialRampToValueAtTime(glideTo, t + dur);
    g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(gain, t + .015); g.gain.exponentialRampToValueAtTime(.0001, t + dur);
    o.connect(g).connect(c.destination); o.start(t); o.stop(t + dur + .02);
  } catch (e) {}
}
function chime(big) {
  audioUnlock();
  const i = Math.floor(Math.random() * 3), n = big ? [NOTES5[i], NOTES5[i + 2], NOTES5[i + 3]] : [NOTES5[i + 1], NOTES5[i + 3]];
  n.forEach((f, k) => tone(f, k * .085, big ? .55 : .35, big ? .11 : .07));
}
function thud() { audioUnlock(); tone(130, 0, .9, .22, 'triangle', 55); tone(98, .05, 1.1, .12, 'sine', 49); }
function burst(n, label, big) {
  if (reduceMotion()) { if (label) floatTxt(label, big); return; }
  const p = lastPt || { x: innerWidth / 2, y: innerHeight / 2 };
  const layer = document.createElement('div'); layer.className = 'fx'; layer.style.left = p.x + 'px'; layer.style.top = p.y + 'px';
  for (let i = 0; i < n; i++) {
    const a = Math.random() * Math.PI * 2, d = (big ? 70 : 38) + Math.random() * (big ? 90 : 40), s = document.createElement('i');
    s.style.setProperty('--dx', (Math.cos(a) * d).toFixed(0) + 'px'); s.style.setProperty('--dy', (Math.sin(a) * d - 20).toFixed(0) + 'px');
    s.style.setProperty('--s', (.5 + Math.random() * (big ? 1.1 : .7)).toFixed(2)); s.style.animationDelay = (Math.random() * 60).toFixed(0) + 'ms';
    layer.appendChild(s);
  }
  document.body.appendChild(layer); setTimeout(() => layer.remove(), 1100);
  if (label) floatTxt(label, big);
}
function floatTxt(label, big) {
  const p = lastPt || { x: innerWidth / 2, y: innerHeight / 2 }, t = document.createElement('b');
  t.className = 'fx-t' + (big ? ' big' : ''); t.textContent = label; t.style.left = Math.min(innerWidth - 40, Math.max(40, p.x)) + 'px'; t.style.top = p.y + 'px';
  document.body.appendChild(t); setTimeout(() => t.remove(), 1300);
}
function gemCard(title, text, src) {
  let el = $('#gem'); if (!el) { el = document.createElement('div'); el.id = 'gem'; el.className = 'gem'; el.setAttribute('role', 'status'); document.body.appendChild(el); }
  el.innerHTML = `<p class="gem-t">✦ ${title}</p><p class="gem-q">${text}</p>${src ? `<p class="gem-s">${src}</p>` : ''}`;
  el.classList.remove('on'); void el.offsetWidth; el.classList.add('on');
  clearTimeout(el._t); el._t = setTimeout(() => el.classList.remove('on'), 5200);
  el.onclick = () => el.classList.remove('on');
}
const nourDay = (k = todayISO()) => (S.nour.log[k] || 0);
function nourAdd(pts, k = todayISO()) { S.nour.log[k] = Math.max(0, nourDay(k) + pts); if (!S.nour.log[k]) delete S.nour.log[k]; }
function nourAvg(days = 14) { let t = 0, n = 0; for (let i = 1; i <= days; i++) { const v = S.nour.log[iso(addDays(new Date(), -i))]; if (v != null) { t += v; n++; } } return n ? t / n : 0; }
/* Récompense : pts de lumière. opts.big = moment fort, opts.msg = [titre, texte]. */
function reward(pts, opts = {}) {
  const bonus = !opts.big && !opts.noBonus && Math.random() < .125;
  const got = bonus ? pts * 2 : pts;
  nourAdd(got); save();
  try { navigator.vibrate && navigator.vibrate(opts.big || bonus ? [12, 40, 18] : 10); } catch (e) {}
  chime(opts.big || bonus); burst(opts.big ? 28 : bonus ? 20 : 11, `+${got} ✦`, opts.big || bonus);
  if (bonus) { const g = GEMS[Math.floor(Math.random() * GEMS.length)]; gemCard('Pépite · lumière doublée', g[0], g[1]); }
  else if (opts.msg) gemCard(opts.msg[0], opts.msg[1], opts.msg[2]);
  refreshSun();
}
function unreward(pts) { nourAdd(-pts); save(); refreshSun(); }
function refreshSun() {
  const g = $('#sunGlowC'); if (!g) return;
  const v = sunLevel(); g.setAttribute('r', (56 + 44 * v).toFixed(0)); g.style.opacity = (.35 + .65 * v).toFixed(2);
  const c = $('#sunCore'); if (c) c.style.opacity = (.55 + .45 * Math.min(1, v * 1.6)).toFixed(2);
  const n = $('#sunNour'); if (n) n.textContent = `✦ ${nourDay()}`;
}
function sunLevel() { const avg = Math.max(15, nourAvg()); return Math.min(1, nourDay() / avg); }

/* Bilan de la veille (orbite) : lumineux ou lourd. */
function yesterdayCard() {
  const y = iso(addDays(new Date(), -1));
  if (S.nour.seen === todayISO() || y < S.start) return '';
  const pts = nourDay(y), avg = nourAvg(14), d = S.faith.log[y] || {}, pr = PRAYERS.filter(p => d[p[0]]).length;
  const lost = [];
  const y2 = iso(addDays(new Date(), -2));
  if (!S.days[y] && S.days[y2]) { let n = 0; for (let i = 2; i < 400 && S.days[iso(addDays(new Date(), -i))]; i++) n++; if (n >= 2) lost.push(`ta série de routine de ${n} jours s'est arrêtée`); }
  const heavy = pts === 0 || (avg >= 10 && pts < avg * .35) || lost.length;
  const bits = [`${pr}/5 prières à l'heure`, S.days[y] ? 'routine faite' : 'routine non faite', S.body.sessions.some(s => s.date === y) ? 'séance faite' : ''].filter(Boolean).join(' · ');
  return `<div class="yday ${heavy ? 'heavy' : ''}">
    <div class="row between"><p class="eyebrow">Hier</p><button class="link-btn small" data-ydone style="min-width:0;padding:0">OK</button></div>
    <p class="yday-n num">✦ ${pts}</p>
    <p class="small" style="margin:4px 0 0">${heavy
      ? `${pts === 0 ? 'Ta lumière est restée éteinte.' : 'Ta lumière est restée faible.'}${lost.length ? ' Et ' + lost.join(', ') + '.' : ''} Un jour vide rend le suivant plus facile à gâcher. Allume une seule chose maintenant.`
      : pts >= avg ? `Au-dessus de ta moyenne (✦ ${Math.round(avg)}). Garde ce rythme.` : `Moyenne des 14 derniers jours : ✦ ${Math.round(avg)}.`}</p>
    <p class="small muted" style="margin:6px 0 0">${bits}</p>
    ${heavy ? '<button class="btn sm" data-goto="routine" style="margin-top:12px">Allumer : un bloc de routine</button>' : ''}
  </div>`;
}
/* Tension du soir : ce qui s'éteint à minuit. */
function atStake() {
  const h = new Date().getHours(), k = todayISO(), items = [], st = streak();
  const pn = prayerNow(); if (pn && prayerTracked(pn.id) && !(S.faith.log[pn.k] || {})[pn.id] && pn.end - new Date() < 60 * 60000) items.push(['habitudes', `${PNAMES[pn.id]} se termine à ${hm(pn.end)}`, `${leftTxt(pn.end - new Date())}`]);
  if (h < 19) return items.length ? `<div class="stake"><p class="eyebrow" style="color:var(--warn)">Maintenant</p>${items.map(i => `<button class="stake-i" data-goto="${i[0]}"><span>${i[1]}</span><b class="num">${i[2]}</b></button>`).join('')}</div>` : '';
  if (!S.days[k] && st > 0) items.push(['routine', `Ta série de routine (${st} j) s'éteint à minuit`, `${todayBlocks()}/4 blocs`]);
  const n = S.faith.habits.length, dn = dayDone(k); if (dn < n) items.push(['habitudes', `Journée de foi incomplète`, `${dn}/${n}`]);
  const t = bodyTargets(); if (t && foodDay().p < t.prot) items.push(['nutrition', 'Protéines pas encore atteintes', `${foodDay().p}/${t.prot} g`]);
  if (!items.length) return '';
  return `<div class="stake"><p class="eyebrow" style="color:var(--warn)">Avant minuit</p>${items.map(i => `<button class="stake-i" data-goto="${i[0]}"><span>${i[1]}</span><b class="num">${i[2]}</b></button>`).join('')}</div>`;
}

/* ----- Chiffrement local (AES-GCM, clé PBKDF2) ----- */
const Z_BOOT = '0c346fa2690cf9ce91d2989746b5f4d02822bdc7ff8c1adc235932960481bc40';
const b64 = u8 => btoa(String.fromCharCode(...u8)), ub64 = s => Uint8Array.from(atob(s), c => c.charCodeAt(0));
async function sha(txt) { const h = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(txt)); return [...new Uint8Array(h)].map(x => x.toString(16).padStart(2, '0')).join(''); }
async function zKey(code, salt) {
  const base = await crypto.subtle.importKey('raw', new TextEncoder().encode(code), 'PBKDF2', false, ['deriveKey']);
  return crypto.subtle.deriveKey({ name: 'PBKDF2', salt, iterations: 310000, hash: 'SHA-256' }, base, { name: 'AES-GCM', length: 256 }, false, ['encrypt', 'decrypt']);
}
async function zSeal(key, salt, obj) {
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const ct = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, new TextEncoder().encode(JSON.stringify(obj)));
  return { s: b64(salt), i: b64(iv), c: b64(new Uint8Array(ct)) };
}
async function zOpen(key, z) { const pt = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: ub64(z.i) }, key, ub64(z.c)); return JSON.parse(new TextDecoder().decode(pt)); }
function zLoad() { if (!window.__z) (new Function(new TextDecoder().decode(ub64(Z_MOD))))(); return window.__z; }
/* Vérification d'un texte saisi. */
async function zTry(v) {
  if (!v || v.length > 64 || /\n/.test(v) || !window.crypto || !crypto.subtle) return false;
  try {
    if (S.zc && S.zc.c) {
      const key = await zKey(v, ub64(S.zc.s)); const data = await zOpen(key, S.zc);
      zLoad().open(key, ub64(S.zc.s), data); return true;
    }
  } catch (e) { /* mauvais code : c'est une idée normale */ }
  try { if ((await sha('sdp·' + v)) === Z_BOOT) { zLoad().setup(); return true; } } catch (e) {}
  return false;
}
function zLock() { if (window.__z) window.__z.lock(); }

/* =====================================================================
   12 sexies. FLUX
   ===================================================================== */
/* ----- Contenu du Flux -----
   Coran : texte arabe othmani (quranenc, via le paquet quran-json), sens rendu en français par nos soins
   (ce n'est pas une traduction officielle), explication courte inspirée des commentaires classiques.
   Business : les idées clés des livres du parcours, reformulées (aucune citation longue).
   [id, ...] : les id ne changent jamais (historique des cartes vues et gardées). */
const FX_CORAN = [
  ['c1', '94:5-6', 'Ash-Sharh', 'Certes, avec la difficulté vient une facilité. Oui, avec la difficulté vient une facilité.', 'La répétition est voulue. Les commentateurs relèvent que « la difficulté » est dite avec l\'article (une seule), et « une facilité » sans article, deux fois : une seule épreuve ne vaincra pas deux facilités. La facilité n\'arrive pas après, elle est « avec ».'],
  ['c2', '2:286', 'Al-Baqara', 'Allah n\'impose à aucune âme plus que ce qu\'elle peut porter. À elle ce qu\'elle a acquis de bien, contre elle ce qu\'elle a acquis de mal…', 'Si une épreuve est devant toi, c\'est qu\'elle est à ta mesure. Le verset se termine par des invocations que le Prophète ﷺ recommandait de réciter le soir : les deux derniers versets d\'Al-Baqara suffisent à celui qui les lit la nuit (Bukhari).'],
  ['c3', '13:11', 'Ar-Ra\'d', 'Allah ne change pas l\'état d\'un peuple tant que ses membres ne changent pas ce qui est en eux-mêmes.', 'Le changement extérieur suit le changement intérieur. C\'est une loi divine : attendre que les circonstances changent sans rien changer en soi, c\'est inverser l\'ordre.'],
  ['c4', '13:28', 'Ar-Ra\'d', 'Ceux qui ont cru, et dont les cœurs se tranquillisent au rappel d\'Allah. N\'est-ce point par le rappel d\'Allah que les cœurs se tranquillisent ?', 'Le cœur cherche la paix partout : écrans, bruit, distractions. Le verset désigne la seule source qui l\'apaise vraiment. Le dhikr n\'est pas une formule vide, c\'est un retour.'],
  ['c5', '65:2-3', 'At-Talaq', '… Quiconque craint Allah, Il lui donnera une issue, et lui accordera sa subsistance par des voies qu\'il ne soupçonne pas. Et quiconque place sa confiance en Allah, Il lui suffit.', 'Deux promesses liées à la taqwa : une porte de sortie, et une subsistance inattendue. La confiance (tawakkul) n\'exclut pas l\'effort : elle vient après lui.'],
  ['c6', '29:69', 'Al-\'Ankabut', 'Et ceux qui luttent pour Notre cause, Nous les guiderons certes sur Nos chemins. Allah est vraiment avec les bienfaisants.', 'La guidance récompense l\'effort : on ne reçoit pas le chemin avant de marcher, on le reçoit en marchant. C\'est un verset de l\'effort sur soi-même.'],
  ['c7', '39:53', 'Az-Zumar', 'Dis : « Ô Mes serviteurs qui avez commis des excès à votre propre détriment, ne désespérez pas de la miséricorde d\'Allah. Allah pardonne tous les péchés. »', 'Plusieurs compagnons le considéraient comme l\'un des versets qui donnent le plus d\'espoir. Il s\'adresse précisément à ceux qui ont trop fauté : tant que la porte du repentir est ouverte, le désespoir est lui-même une erreur.'],
  ['c8', '2:152', 'Al-Baqara', 'Souvenez-vous de Moi, Je Me souviendrai de vous. Soyez-Moi reconnaissants et ne soyez pas ingrats.', 'Une relation, pas une transaction : ton rappel attire Son rappel. Un hadith qudsi le prolonge : « Si Mon serviteur Me mentionne en lui-même, Je le mentionne en Moi-même. »'],
  ['c9', '2:153', 'Al-Baqara', 'Ô vous qui avez cru, cherchez secours dans la patience et la prière. Allah est avec les patients.', 'Deux outils, pas un : la patience (tenir) et la prière (se ressourcer). Quand quelque chose le préoccupait, le Prophète ﷺ se hâtait vers la prière.'],
  ['c10', '3:139', 'Al \'Imran', 'Ne faiblissez pas et ne vous affligez pas, alors que vous êtes les supérieurs, si vous êtes croyants.', 'Révélé après la défaite d\'Uhud. Un échec n\'annule pas la valeur : il ne faut ni se laisser abattre ni s\'enfermer dans la tristesse.'],
  ['c11', '24:30', 'An-Nur', 'Dis aux croyants de baisser leurs regards et de préserver leur chasteté. C\'est plus pur pour eux. Allah est parfaitement informé de ce qu\'ils font.', 'Le regard vient en premier, avant la chasteté : c\'est la porte. Les savants notent que protéger ses yeux est une prévention, pas une punition : « plus pur pour eux ».'],
  ['c12', '49:13', 'Al-Hujurat', 'Ô hommes, Nous vous avons créés d\'un mâle et d\'une femelle, et Nous avons fait de vous des peuples et des tribus pour que vous vous connaissiez. Le plus noble d\'entre vous auprès d\'Allah est le plus pieux.', 'La diversité a un but : se connaître, pas se dominer. La seule hiérarchie qui compte est invisible : la piété, que seul Allah mesure.'],
  ['c13', '3:159', 'Al \'Imran', 'C\'est par une miséricorde d\'Allah que tu as été doux envers eux. Si tu avais été rude et dur de cœur, ils se seraient dispersés autour de toi. Pardonne-leur, demande pardon pour eux, et consulte-les dans les affaires…', 'Une leçon de leadership révélée juste après Uhud, où des compagnons avaient désobéi. Réponse : douceur, pardon, et consultation. Un chef dur fait fuir, même quand il a raison.'],
  ['c14', '16:125', 'An-Nahl', 'Appelle au sentier de ton Seigneur par la sagesse et la bonne exhortation, et discute avec eux de la meilleure manière.', 'Trois niveaux : la sagesse (le bon moment, le bon mot), l\'exhortation qui touche le cœur, et le débat courtois. Convaincre n\'est jamais écraser.'],
  ['c15', '17:36', 'Al-Isra\'', 'Ne poursuis pas ce dont tu n\'as aucune connaissance. L\'ouïe, la vue et le cœur : de tout cela, on sera interrogé.', 'L\'esprit critique est un devoir. Ce que tu écoutes, regardes et laisses entrer dans ton cœur, tu en répondras. Un verset à garder en tête avant chaque scroll.'],
  ['c16', '49:6', 'Al-Hujurat', 'Ô vous qui avez cru, si un pervers vous apporte une nouvelle, vérifiez-en la teneur, de crainte de porter atteinte à des gens par ignorance et de regretter ensuite ce que vous avez fait.', 'Le principe de la vérification, quatorze siècles avant les « fake news ». Une information non vérifiée peut détruire des gens, et le regret vient toujours après.'],
  ['c17', '2:275', 'Al-Baqara', '… Allah a rendu licite le commerce et illicite l\'usure (riba)…', 'Le verset répond à ceux qui disaient : « le commerce, c\'est comme l\'usure ». Non : le commerce partage le risque et crée de la valeur, l\'usure fait payer le temps sans risque. D\'où l\'importance de chercher des financements sans intérêt.'],
  ['c18', '83:1-3', 'Al-Mutaffifin', 'Malheur aux fraudeurs, qui, lorsqu\'ils achètent aux gens, exigent la pleine mesure, et qui, lorsqu\'eux-mêmes leur mesurent ou leur pèsent, leur causent perte.', 'Selon Ibn Abbas, révélé à l\'arrivée du Prophète ﷺ à Médine, où certains commerçants trichaient sur les poids. Deux poids, deux mesures : exigeant pour soi, léger pour les autres. En business, c\'est la ruine de la confiance.'],
  ['c19', '62:10', 'Al-Jumu\'a', 'Puis quand la prière est achevée, dispersez-vous sur terre, recherchez la grâce d\'Allah, et invoquez beaucoup Allah afin que vous réussissiez.', 'Après la prière du vendredi, retour au travail : l\'islam ne sépare pas la mosquée et le marché. Chercher sa subsistance est une « grâce » à rechercher, avec le rappel en fond.'],
  ['c20', '4:29', 'An-Nisa\'', 'Ô vous qui avez cru, ne dévorez pas mutuellement vos biens illicitement, sauf s\'il s\'agit d\'un commerce fait par consentement mutuel entre vous. Et ne vous tuez pas vous-mêmes…', 'La règle d\'or du commerce : le consentement réel des deux parties. Pas de pression, pas de tromperie, pas de clause cachée.'],
  ['c21', '25:67', 'Al-Furqan', 'Ceux qui, lorsqu\'ils dépensent, ne sont ni prodigues ni avares, mais se tiennent au juste milieu.', 'Le budget coranique en une phrase : ni gaspillage, ni avarice. Le juste milieu est une discipline, pas une moyenne tiède.'],
  ['c22', '103:1-3', 'Al-\'Asr', 'Par le temps ! L\'homme est certes en perdition, sauf ceux qui croient, font de bonnes œuvres, s\'enjoignent mutuellement la vérité et s\'enjoignent mutuellement l\'endurance.', 'L\'imam Ash-Shafi\'i disait que si les gens méditaient seulement cette sourate, elle leur suffirait. Le temps passe de toute façon : il est soit investi, soit perdu.'],
  ['c23', '20:114', 'Ta-Ha', '… Et dis : « Mon Seigneur, accroît ma science. »', 'La seule chose dont Allah ordonne au Prophète ﷺ de demander davantage : la science. Une invocation courte à faire avant chaque lecture.'],
  ['c24', '96:1-2', 'Al-\'Alaq', 'Lis, au nom de ton Seigneur qui a créé, qui a créé l\'homme d\'une adhérence.', 'Les tout premiers versets révélés, dans la grotte de Hira. Le premier mot adressé à l\'humanité par ce message est « Lis ». L\'islam commence par le savoir.'],
  ['c25', '39:9', 'Az-Zumar', '… Dis : « Sont-ils égaux, ceux qui savent et ceux qui ne savent pas ? » Seuls les doués d\'intelligence réfléchissent.', 'Une question qui n\'attend pas de réponse. Le savoir élève, et le verset lie l\'intelligence à la réflexion, pas à l\'accumulation.'],
  ['c26', '2:216', 'Al-Baqara', '… Il se peut que vous ayez de l\'aversion pour une chose alors qu\'elle est un bien pour vous, et il se peut que vous aimiez une chose alors qu\'elle est mauvaise pour vous. Allah sait, alors que vous ne savez pas.', 'Nos goûts ne sont pas des boussoles fiables. Ce qui coûte à court terme (l\'effort, la discipline) est souvent le bien, et ce qui plaît tout de suite, parfois le piège.'],
  ['c27', '3:200', 'Al \'Imran', 'Ô vous qui avez cru, soyez endurants, incitez-vous à l\'endurance, luttez constamment, et craignez Allah afin que vous réussissiez.', 'Dernier verset de la sourate : quatre étapes vers la réussite. La patience personnelle, puis la rivaliser en patience avec les autres, puis la constance sur la durée, et la piété comme socle.'],
  ['c28', '8:46', 'Al-Anfal', 'Obéissez à Allah et à Son messager, et ne vous disputez pas, sinon vous fléchirez et perdrez votre force. Et soyez endurants.', 'Une équipe divisée perd sa « force » (littéralement son vent). Valable pour une armée, une famille, une équipe en gare ou une entreprise.'],
  ['c29', '31:18-19', 'Luqman', 'Ne détourne pas ton visage des hommes par orgueil, et ne marche pas sur terre avec arrogance… Sois modeste dans ta démarche, et baisse ta voix.', 'Les conseils de Luqman à son fils touchent au langage du corps : le visage, la démarche, la voix. La noblesse se voit avant de s\'entendre.'],
  ['c30', '2:186', 'Al-Baqara', 'Et quand Mes serviteurs t\'interrogent sur Moi, Je suis tout proche : Je réponds à l\'appel de celui qui M\'invoque quand il M\'invoque…', 'Ailleurs dans le Coran, les questions reçoivent « Dis : … ». Ici, Allah répond directement, sans intermédiaire : même dans la forme, la proximité.'],
  ['c31', '50:16', 'Qaf', 'Nous avons effectivement créé l\'homme et Nous savons ce que son âme lui suggère, et Nous sommes plus près de lui que sa veine jugulaire.', 'Ce que tu te dis intérieurement est connu. Une conscience qui aide à la maîtrise de soi quand personne ne regarde.'],
  ['c32', '18:23-24', 'Al-Kahf', 'Et ne dis jamais à propos d\'une chose : « Je la ferai sûrement demain », sans ajouter : « Si Allah le veut. »', 'Planifier, oui ; se croire maître de demain, non. Le « in sha Allah » n\'est pas une excuse pour ne pas faire, c\'est l\'humilité de celui qui prévoit.'],
  ['c33', '53:39', 'An-Najm', 'Et qu\'en vérité, l\'homme n\'obtient que le fruit de ses efforts.', 'Personne ne portera le fardeau d\'un autre, et personne ne récoltera à ta place. Simple, et exigeant.'],
  ['c34', '61:2-3', 'As-Saff', 'Ô vous qui avez cru, pourquoi dites-vous ce que vous ne faites pas ? C\'est une grande abomination auprès d\'Allah que de dire ce que vous ne faites pas.', 'L\'écart entre la parole et l\'acte. Moins annoncer, plus faire : c\'est aussi le meilleur conseil de productivité qui soit.'],
  ['c35', '67:2', 'Al-Mulk', 'Celui qui a créé la mort et la vie afin de vous éprouver, pour savoir qui de vous est le meilleur en œuvre…', 'Le verset dit « le meilleur en œuvre », pas « le plus nombreux en œuvres ». Fudayl ibn \'Iyad l\'expliquait par : la plus sincère et la plus juste. La qualité avant la quantité.'],
  ['c36', '3:190-191', 'Al \'Imran', 'Dans la création des cieux et de la terre, et dans l\'alternance de la nuit et du jour, il y a certes des signes pour les doués d\'intelligence, qui, debout, assis ou couchés, invoquent Allah et méditent sur la création…', 'Aïcha raconte que le Prophète ﷺ pleura toute une nuit à la révélation de ces versets. Regarder le ciel, étudier la nature : une adoration quand le cœur y est.'],
  ['c37', '2:201', 'Al-Baqara', '… « Seigneur, accorde-nous une belle part ici-bas et une belle part dans l\'au-delà, et protège-nous du châtiment du Feu. »', 'L\'invocation que le Prophète ﷺ faisait le plus souvent (Bukhari). Elle ne rejette pas ce monde : elle demande le bien des deux.'],
  ['c38', '30:21', 'Ar-Rum', 'Parmi Ses signes, Il a créé de vous, pour vous, des épouses pour que vous viviez en tranquillité avec elles, et Il a mis entre vous affection et miséricorde…', 'Deux mots pour le couple : mawadda (l\'affection, l\'amour actif) et rahma (la miséricorde, qui reste quand l\'élan faiblit). Le mariage est présenté comme un signe divin.'],
  ['c39', '14:7', 'Ibrahim', 'Et lorsque votre Seigneur proclama : « Si vous êtes reconnaissants, très certainement J\'augmenterai Mes bienfaits pour vous. »', 'La gratitude n\'est pas qu\'un sentiment : c\'est une cause d\'augmentation. Compter ce qu\'on a avant ce qui manque.'],
  ['c40', '93:3-5', 'Ad-Duha', 'Ton Seigneur ne t\'a ni abandonné ni détesté. La vie dernière t\'est certes meilleure que la vie présente. Ton Seigneur t\'accordera certes Ses faveurs, et alors tu seras satisfait.', 'Révélée après une pause de la révélation qui avait peiné le Prophète ﷺ, et dont ses ennemis se moquaient. Le silence n\'est pas l\'abandon.'],
  ['c41', '51:56', 'Adh-Dhariyat', 'Je n\'ai créé les djinns et les hommes que pour qu\'ils M\'adorent.', 'La raison d\'être en une phrase. L\'adoration, selon les savants, englobe tout acte fait pour Allah : le travail honnête, le sport, le soin de sa famille compris.'],
  ['c42', '88:17-20', 'Al-Ghashiya', 'Ne regardent-ils donc pas les chameaux, comment ils ont été créés, et le ciel, comment il est élevé, et les montagnes, comment elles sont dressées, et la terre, comment elle est nivelée ?', 'Quatre regards pour quelqu\'un du désert : l\'animal, le ciel, la montagne, la terre. La foi commence souvent par un regard attentif sur ce qu\'on croit déjà connaître.'],
  ['c43', '21:30', 'Al-Anbiya\'', 'Ceux qui ont mécru n\'ont-ils pas vu que les cieux et la terre formaient une masse compacte ? Ensuite Nous les avons séparés et avons fait de l\'eau toute chose vivante…', 'Un appel à observer l\'origine des choses et le rôle de l\'eau dans la vie. Les savants invitent à la prudence : le Coran est un livre de guidance, pas un manuel scientifique, même s\'il invite sans cesse à étudier la nature.'],
  ['c44', '25:74', 'Al-Furqan', '… « Seigneur, donne-nous, en nos épouses et nos descendants, la joie des yeux, et fais de nous un guide pour les pieux. »', 'Une invocation de couple : demander que son foyer soit une source de fraîcheur pour le regard, et viser haut, être un exemple.'],
  ['c45', '2:45', 'Al-Baqara', 'Et cherchez secours dans l\'endurance et la prière : certes, la prière est une lourde obligation, sauf pour les humbles.', 'La prière est lourde pour qui la vit comme une corvée, légère pour qui y trouve son repos. « Repose-nous par elle, ô Bilal », disait le Prophète ﷺ.']
];
const FX_HADITH = [
  ['h1', 'Les actes ne valent que par les intentions, et chacun n\'aura que ce qu\'il a eu l\'intention de faire.', 'Bukhari 1, Muslim 1907', 'Le premier hadith de Sahih Al-Bukhari. La même action peut être une adoration ou rien du tout, selon l\'intention. Renouvelle-la : même ta séance de sport peut compter.'],
  ['h2', 'Aucun de vous ne sera vraiment croyant tant qu\'il n\'aimera pas pour son frère ce qu\'il aime pour lui-même.', 'Bukhari 13, Muslim 45', 'Le test de l\'égo : se réjouir sincèrement de la réussite des autres. En business, c\'est aussi la base d\'une réputation qui dure.'],
  ['h3', 'Le fort n\'est pas celui qui terrasse les autres à la lutte. Le fort est celui qui se maîtrise lorsqu\'il est en colère.', 'Bukhari 6114, Muslim 2609', 'Pour un judoka, la leçon est claire : la vraie prise, c\'est sur soi-même.'],
  ['h4', 'Que celui qui croit en Allah et au Jour dernier dise du bien ou se taise.', 'Bukhari 6018, Muslim 47', 'Un filtre à trois secondes avant chaque parole, et chaque commentaire en ligne.'],
  ['h5', 'Fait partie de l\'excellence de l\'islam d\'une personne le fait de délaisser ce qui ne la concerne pas.', 'Tirmidhi 2317', 'Le hadith anti-scroll par excellence. Tout ce qui ne te concerne pas prend du temps à ce qui te concerne.'],
  ['h6', 'Il y a deux bienfaits dont beaucoup de gens sont lésés : la santé et le temps libre.', 'Bukhari 6412', 'Lésés, comme dans une mauvaise affaire : on les échange contre presque rien. Tu as les deux en ce moment.'],
  ['h7', 'Les actes les plus aimés d\'Allah sont ceux qui sont les plus réguliers, même s\'ils sont peu nombreux.', 'Bukhari 6464, Muslim 783', 'La constance bat l\'intensité. Tout le principe de cette app.'],
  ['h8', 'Le croyant fort est meilleur et plus aimé d\'Allah que le croyant faible, et en chacun il y a du bien. Attache-toi à ce qui t\'est profitable, demande l\'aide d\'Allah et ne baisse pas les bras.', 'Muslim 2664', 'Trois consignes : viser l\'utile, s\'appuyer sur Allah, ne pas abandonner. La suite du hadith met en garde contre le « si seulement j\'avais… ».'],
  ['h9', 'Allah ne regarde ni vos corps ni vos apparences, mais Il regarde vos cœurs et vos actes.', 'Muslim 2564', 'Le physique se travaille, mais ce qui est regardé, c\'est l\'intérieur et ce que tu en fais.'],
  ['h10', 'Ton sourire à ton frère est une aumône.', 'Tirmidhi 1956', 'L\'aumône la moins chère et la plus rapide. En gare, avec les voyageurs, elle est à portée de main toute la journée.'],
  ['h11', 'Le commerçant véridique et digne de confiance sera avec les prophètes, les véridiques et les martyrs.', 'Tirmidhi 1209', 'Le rang le plus élevé promis à un commerçant, à deux conditions : dire vrai et respecter ce qu\'on lui confie.'],
  ['h12', 'Celui qui nous trompe n\'est pas des nôtres.', 'Muslim 102', 'Dit au marché, devant un tas de nourriture dont le dessus était sec et le dessous mouillé. Cacher un défaut, c\'est tromper.'],
  ['h13', 'Qu\'Allah fasse miséricorde à un homme facile lorsqu\'il vend, lorsqu\'il achète et lorsqu\'il réclame son dû.', 'Bukhari 2076', 'La souplesse en affaires attire la miséricorde. Être dur sur les principes, facile dans la manière.'],
  ['h14', 'Personne n\'a jamais mangé de meilleure nourriture que celle issue du travail de ses mains.', 'Bukhari 2072', 'Le hadith cite l\'exemple de Dawud, prophète et roi, qui vivait du travail de ses mains. Aucun travail honnête n\'est petit.'],
  ['h15', 'Attache-la, puis place ta confiance en Allah.', 'Tirmidhi 2517', 'Réponse à un homme qui demandait s\'il devait attacher sa chamelle ou s\'en remettre à Allah. Les deux : l\'effort, puis la confiance.'],
  ['h16', 'La purification est la moitié de la foi.', 'Muslim 223', 'La propreté du corps prépare celle du cœur. L\'hygiène fait partie de la religion, pas seulement du confort.'],
  ['h17', 'Profite de cinq choses avant cinq autres : ta jeunesse avant ta vieillesse, ta santé avant ta maladie, ta richesse avant ta pauvreté, ton temps libre avant ton occupation, et ta vie avant ta mort.', 'Rapporté par al-Hakim', 'Tu es dans la fenêtre des cinq. C\'est maintenant que tout se construit.'],
  ['h18', 'Le meilleur d\'entre vous est celui qui apprend le Coran et l\'enseigne.', 'Bukhari 5027', 'Apprendre ne suffit pas : transmettre fait partie de l\'excellence.'],
  ['h19', 'Quiconque emprunte un chemin à la recherche d\'une science, Allah lui facilite par cela un chemin vers le Paradis.', 'Muslim 2699', 'Chaque carte de savoir que tu lis ici peut être un pas sur ce chemin, avec la bonne intention.'],
  ['h20', 'Le meilleur d\'entre vous est le meilleur envers sa famille, et je suis le meilleur d\'entre vous envers ma famille.', 'Tirmidhi 3895', 'Le vrai caractère se voit à la maison, là où l\'on n\'a rien à prouver.'],
  ['h21', 'Un homme dit au Prophète ﷺ : « Conseille-moi. » Il répondit : « Ne te mets pas en colère. » L\'homme répéta sa demande plusieurs fois, et il répondait : « Ne te mets pas en colère. »', 'Bukhari 6116', 'Un seul conseil, répété : la colère ouvre la porte à la plupart des regrets.'],
  ['h22', 'La religion est facilité. Personne ne la rendra difficile sans qu\'elle ne le vainque. Visez la justesse, rapprochez-vous-en, et réjouissez-vous.', 'Bukhari 39', 'Contre le tout ou rien : mieux vaut un peu, juste et durable, qu\'un excès qui s\'effondre.'],
  ['h23', 'Sois dans ce monde comme un étranger, ou comme un voyageur de passage.', 'Bukhari 6416', 'Le voyageur ne s\'attache pas à la gare où il attend son train. Il sait où il va.'],
  ['h24', 'La bonté, c\'est le bon caractère. Et le péché, c\'est ce qui trouble ton âme et que tu détesterais que les gens découvrent.', 'Muslim 2553', 'Une boussole intérieure : si tu ne voudrais pas que ça se sache, c\'est un signal.'],
  ['h25', 'La pudeur fait partie de la foi.', 'Bukhari 24, Muslim 36', 'Al-haya\' : une retenue qui protège, devant les gens et devant Allah.'],
  ['h26', 'Le fils d\'Adam ne remplit pas de récipient pire que son ventre. Quelques bouchées suffisent pour tenir son dos droit. S\'il faut plus : un tiers pour sa nourriture, un tiers pour sa boisson, un tiers pour son souffle.', 'Tirmidhi 2380', 'Une règle de nutrition d\'une étonnante modernité : manger à sa faim, pas jusqu\'à l\'excès.'],
  ['h27', 'Craignez Allah où que vous soyez, faites suivre une mauvaise action d\'une bonne qui l\'effacera, et comportez-vous avec les gens avec un bon caractère.', 'Tirmidhi 1987', 'Trois directions : Allah, soi-même, les autres. Et une méthode après un faux pas : enchaîner tout de suite par un bien.']
];
/* Business : [id, livre ou thème, mois du parcours (0 = général), titre, texte, à appliquer] */
const FX_BIZ = [
  ['b1', 'Le Personal MBA', 1, 'Tout business fait 5 choses', 'Créer quelque chose de valeur, attirer l\'attention (marketing), convaincre d\'acheter (vente), livrer ce qui a été promis, et gagner assez pour continuer (finance). Si une des cinq manque, l\'entreprise s\'arrête.', 'Prends Mister Pizza et trouve ses 5 fonctions.'],
  ['b2', 'Le Personal MBA', 1, 'La valeur perçue', 'Les gens n\'achètent pas ce qu\'une chose vaut, mais ce qu\'ils croient qu\'elle vaut pour eux. Le même produit peut valoir 5 € ou 50 € selon le contexte et la présentation.', 'Observe un produit cher près de chez toi : qu\'est-ce qui justifie son prix aux yeux du client ?'],
  ['b3', 'Le Personal MBA', 1, 'Le goulot d\'étranglement', 'Un système ne va jamais plus vite que son maillon le plus lent. Améliorer autre chose que ce maillon ne sert presque à rien.', 'Chez Mister Pizza, quel est le goulot un vendredi soir : le four, la préparation, la livraison ?'],
  ['b4', 'Finance', 1, 'Chiffre d\'affaires ≠ bénéfice ≠ trésorerie', 'Le chiffre d\'affaires, c\'est tout ce qui entre. Le bénéfice, ce qui reste une fois toutes les charges payées. La trésorerie, l\'argent réellement disponible aujourd\'hui. Une entreprise rentable peut mourir faute de trésorerie.', 'Calcule ces trois chiffres pour ton propre mois.'],
  ['b5', 'Finance', 1, 'Marge brute et marge nette', 'Marge brute = prix de vente − coût direct du produit. Marge nette = ce qui reste après toutes les charges (loyer, salaires, impôts…). Une belle marge brute peut cacher une marge nette nulle.', 'Estime le coût des ingrédients d\'une pizza et sa marge brute.'],
  ['b6', 'Finance', 10, 'Le point mort', 'Le chiffre d\'affaires à partir duquel toutes les charges sont couvertes. En dessous, chaque mois coûte de l\'argent. Au-dessus, chaque vente rapporte vraiment.', 'Pour un projet imaginaire : charges fixes ÷ marge par vente = nombre de ventes pour être à l\'équilibre.'],
  ['b7', 'Finance', 10, 'CAC et LTV', 'Le coût pour acquérir un client (CAC) doit rester bien inférieur à ce que ce client rapporte sur toute sa relation avec toi (LTV). On vise souvent une LTV au moins trois fois supérieure.', 'Combien un client fidèle rapporte-t-il à Mister Pizza sur un an ?'],
  ['b8', 'Stratégie', 0, 'La loi de Pareto', 'Souvent, environ 20 % des causes produisent 80 % des effets : 20 % des clients font l\'essentiel du chiffre, 20 % des tâches donnent l\'essentiel du résultat. Ce n\'est pas une loi exacte, c\'est une invitation à chercher l\'essentiel.', 'Quelles 2 actions de ta semaine ont produit le plus de résultats ?'],
  ['b9', 'Comment se faire des amis — Carnegie', 2, 'Le prénom est une musique', 'Pour chacun, son prénom est le son le plus agréable qui soit. S\'en souvenir et l\'utiliser, c\'est dire « tu comptes ».', 'Retiens et utilise le prénom de chaque personne rencontrée aujourd\'hui.'],
  ['b10', 'Comment se faire des amis — Carnegie', 2, 'Parle de ce qui l\'intéresse, lui', 'Le moyen le plus sûr de toucher quelqu\'un est de parler de ce qui compte pour lui. On s\'intéresse davantage à son propre mal de dents qu\'à une catastrophe à l\'autre bout du monde.', 'Pose une question sur la passion de quelqu\'un et écoute vraiment.'],
  ['b11', 'Comment se faire des amis — Carnegie', 2, 'Critiquer ne sert à rien', 'La critique met l\'autre sur la défensive et le pousse à se justifier. Carnegie conseille de comprendre avant de juger, et de commencer par ce qui va bien.', 'Avant tout reproche en équipe, commence par un point positif réel.'],
  ['b12', 'Comment se faire des amis — Carnegie', 2, 'Admets vite tes torts', 'Reconnaître rapidement une erreur, avant qu\'on te la reproche, désarme l\'autre et renforce ton autorité au lieu de l\'affaiblir.', 'La prochaine erreur que tu fais : dis-le toi-même, en premier.'],
  ['b13', 'Le Manager Minute — Blanchard', 2, 'L\'objectif minute', 'Un objectif doit tenir sur une page et se relire en une minute. Si ton équipier ne peut pas dire en une phrase ce qu\'on attend de lui, l\'objectif n\'est pas clair.', 'Écris l\'objectif d\'un de tes agents en une phrase mesurable.'],
  ['b14', 'Le Manager Minute — Blanchard', 2, 'Surprendre en train de bien faire', 'Au lieu de guetter les erreurs, guette ce qui est bien fait, et félicite tout de suite, précisément. Le comportement félicité se répète.', 'Félicite quelqu\'un aujourd\'hui sur un fait précis, au moment où il se produit.'],
  ['b15', 'Le Manager Minute — Blanchard', 2, 'Le recadrage minute', 'Recadrer vite, sur le comportement et pas sur la personne, puis rappeler qu\'on la tient en estime. Court, factuel, sans rancune.', 'Prépare ta phrase : « Ce que tu as fait… », « Ce que ça a provoqué… », « Je sais que tu vaux mieux. »'],
  ['b16', 'Influence — Cialdini', 3, 'La réciprocité', 'Nous nous sentons obligés de rendre ce qu\'on nous donne. D\'où les échantillons gratuits, et la force d\'un service rendu sans rien attendre.', 'Repère un « cadeau » commercial reçu cette semaine : qu\'attendait-il de toi ?'],
  ['b17', 'Influence — Cialdini', 3, 'La rareté', 'Ce qui semble rare ou sur le point de disparaître paraît plus précieux. « Plus que 2 en stock », « offre jusqu\'à minuit » : la peur de perdre pousse à agir.', 'La prochaine fois qu\'on te presse d\'acheter, attends 24 h.'],
  ['b18', 'Influence — Cialdini', 3, 'La preuve sociale', 'Dans le doute, on fait comme les autres. Les avis, les files d\'attente et les « déjà 10 000 clients » jouent sur ce réflexe.', 'Regarde comment un restaurant plein attire plus de monde qu\'un restaurant vide.'],
  ['b19', 'Influence — Cialdini', 3, 'L\'engagement', 'Une fois qu\'on a dit oui à une petite chose, on veut rester cohérent et on dit plus facilement oui à la suite. Le « pied dans la porte ».', 'Utilise-le pour toi : un tout petit engagement écrit rend le grand plus facile.'],
  ['b20', 'Système 1 / Système 2 — Kahneman', 3, 'Deux vitesses de pensée', 'Le système 1 est rapide, automatique, émotionnel. Le système 2 est lent, réfléchi, fatigant. La plupart de nos décisions viennent du premier, même quand on croit utiliser le second.', 'Avant une décision importante, compte jusqu\'à 10 : laisse le système 2 arriver.'],
  ['b21', 'Système 1 / Système 2 — Kahneman', 3, 'L\'ancrage', 'Le premier chiffre entendu influence tous les jugements suivants, même s\'il est absurde. En négociation, celui qui annonce le premier chiffre pose souvent l\'ancre.', 'Remarque les « prix barrés » : ils sont là pour ancrer.'],
  ['b22', 'Système 1 / Système 2 — Kahneman', 3, 'L\'aversion à la perte', 'Perdre 100 € fait environ deux fois plus mal que gagner 100 € ne fait plaisir. D\'où la force des messages du type « ne perdez pas… ».', 'C\'est ce principe que l\'app utilise quand elle te montre ta série en jeu.'],
  ['b23', 'Neuromarketing — Renvoisé & Morin', 3, 'Le contraste', 'Le cerveau décide plus vite quand il voit un avant/après, un avec/sans. Les auteurs en font l\'un de leurs six leviers de persuasion (avec l\'égocentrisme, le concret, le début et la fin, le visuel et l\'émotion).', 'Présente ta prochaine idée en « sans ça… / avec ça… ».'],
  ['b24', 'SPIN Selling — Rackham', 4, 'Les 4 questions SPIN', 'Situation (le contexte), Problème (ce qui coince), Implication (ce que ça coûte), Need-payoff (ce que la solution apporterait). Le client se convainc lui-même en répondant.', 'Entraîne-toi sur un ami : 2 questions de chaque type.'],
  ['b25', 'SPIN Selling — Rackham', 4, 'Poser l\'implication', 'Dans les grosses ventes, ce qui fait la différence n\'est pas de présenter le produit, mais de faire mesurer au client le coût de son problème. Un problème sans conséquence ne s\'achète pas.', 'Pose la question : « Et si ça continue, qu\'est-ce que ça te coûte ? »'],
  ['b26', 'Offres à 100 millions $ — Hormozi', 5, 'L\'équation de la valeur', 'La valeur perçue monte avec le résultat rêvé et la probabilité perçue d\'y arriver. Elle baisse avec le délai et l\'effort demandés. Augmente le haut, réduis le bas.', 'Pour une offre imaginaire, trouve un moyen de réduire le délai ou l\'effort.'],
  ['b27', 'Offres à 100 millions $ — Hormozi', 5, 'Une offre qu\'on se sent bête de refuser', 'Au lieu de baisser le prix, empile de la valeur : bonus, garantie, rapidité, accompagnement. L\'objectif est que refuser paraisse absurde.', 'Liste 3 bonus possibles pour un service que tu pourrais vendre.'],
  ['b28', 'Offres à 100 millions $ — Hormozi', 5, 'La garantie inverse le risque', 'Une garantie forte transfère le risque du client vers le vendeur. Elle rassure, et en pratique peu de clients honnêtes l\'utilisent.', 'Quelle garantie pourrais-tu offrir sans te mettre en danger ?'],
  ['b29', 'Ne coupez jamais la poire en deux — Voss', 6, 'Le miroir', 'Répéter les 1 à 3 derniers mots de l\'autre, sur un ton interrogatif. Il développe presque toujours, et se sent écouté.', 'Essaie-le une fois aujourd\'hui, naturellement.'],
  ['b30', 'Ne coupez jamais la poire en deux — Voss', 6, 'L\'étiquetage', 'Nommer l\'émotion de l\'autre : « On dirait que ça te frustre… ». Une émotion nommée perd de sa force, et la personne se sent comprise.', 'Quand quelqu\'un s\'énerve, commence par « On dirait que… ».'],
  ['b31', 'Ne coupez jamais la poire en deux — Voss', 6, 'Les questions calibrées', 'Des questions en « comment » ou « qu\'est-ce que » : « Comment suis-je censé faire ça ? » L\'autre se met à résoudre ton problème à ta place.', 'Remplace un « non » sec par « Comment je pourrais faire ça ? ».'],
  ['b32', 'Comment réussir une négociation — Fisher & Ury', 6, 'Intérêts, pas positions', 'La position, c\'est ce que l\'autre réclame. L\'intérêt, c\'est pourquoi il le réclame. Deux positions opposées cachent souvent des intérêts compatibles.', 'Face à une demande, demande-toi : « Qu\'est-ce qu\'il veut vraiment obtenir ? »'],
  ['b33', 'Comment réussir une négociation — Fisher & Ury', 6, 'Ta meilleure solution de repli', 'La MESORE (BATNA en anglais) : ce que tu feras si l\'accord échoue. Plus elle est bonne, plus tu es fort. Ne négocie jamais sans la connaître.', 'Avant ta prochaine négociation (salaire, loyer…), écris ta MESORE.'],
  ['b34', 'This Is Marketing — Godin', 7, 'Le plus petit marché viable', 'Au lieu de viser tout le monde, vise le plus petit groupe de gens qui ont vraiment besoin de toi. Mieux vaut être indispensable pour peu que moyen pour tous.', 'Décris en une phrase le client idéal d\'un projet que tu as en tête.'],
  ['b35', 'This Is Marketing — Godin', 7, '« Les gens comme nous… »', 'On achète pour appartenir : « les gens comme nous font des choses comme ça ». Le marketing efficace parle d\'identité, pas seulement de caractéristiques.', 'Quelle identité ton produit préféré te fait-il ressentir ?'],
  ['b36', 'The Mom Test — Fitzpatrick', 9, 'Ne parle pas de ton idée', 'Si tu présentes ton idée, les gens seront polis et te mentiront. Parle plutôt de leur vie, de leurs problèmes, de ce qu\'ils font déjà.', 'Interroge quelqu\'un sur un problème sans jamais citer ta solution.'],
  ['b37', 'The Mom Test — Fitzpatrick', 9, 'Le passé plutôt que le futur', '« Tu l\'achèterais ? » ne vaut rien. « La dernière fois que ça t\'est arrivé, qu\'as-tu fait ? » vaut de l\'or. Les faits passés ne mentent pas, les promesses si.', 'Transforme une question « tu ferais… » en « la dernière fois… ».'],
  ['b38', 'The Mom Test — Fitzpatrick', 9, 'Seul l\'engagement compte', 'Un compliment n\'est pas une donnée. Ce qui compte, c\'est ce que la personne est prête à donner : du temps, de l\'argent, ou sa réputation (te présenter à quelqu\'un).', 'Demande un petit engagement concret plutôt qu\'un avis.'],
  ['b39', 'Lean Startup — Ries', 9, 'Le produit minimum viable', 'La plus petite version qui permet d\'apprendre quelque chose de vrai auprès de vrais clients. Pas un produit bâclé : une expérience.', 'Quel serait le test le plus simple pour vérifier une de tes idées cette semaine ?'],
  ['b40', 'Lean Startup — Ries', 9, 'Construire, mesurer, apprendre', 'Le but n\'est pas de construire, mais d\'apprendre le plus vite possible. Chaque cycle doit répondre à une question précise.', 'Écris la question que ton prochain projet doit trancher.'],
  ['b41', 'Lean Startup — Ries', 9, 'Les métriques de vanité', 'Les chiffres qui font plaisir (vues, abonnés) mais ne disent rien de la santé du projet. Préfère les chiffres qui mènent à une décision (taux de retour, ventes répétées).', 'Sur tes réseaux, quel chiffre mesure vraiment quelque chose ?'],
  ['b42', 'Juridique & fiscal', 11, 'Micro-entreprise : attention aux marges', 'En micro, les cotisations sont calculées sur le chiffre d\'affaires, pas sur le bénéfice. Une activité avec beaucoup de frais peut donc rapporter moins que prévu.', 'Pour une idée d\'activité, estime tes frais en % du chiffre d\'affaires.'],
  ['b43', 'Stratégie', 0, 'Le coût d\'opportunité', 'Chaque choix a un prix caché : ce que tu aurais pu faire à la place. Une heure de scroll coûte une heure de lecture, de sport ou de repos.', 'Quelle est la meilleure chose que tu pourrais faire de la prochaine heure ?'],
  ['b44', 'Stratégie', 0, 'Les intérêts composés… de compétences', 'Un petit progrès régulier s\'accumule comme des intérêts : 1 % de mieux chaque jour change tout en un an. Pas besoin de riba pour profiter de l\'effet composé : il marche aussi sur le savoir.', 'Quelle compétence veux-tu améliorer d\'1 % aujourd\'hui ?'],
  ['b45', 'Relation client', 0, 'La règle du pic et de la fin', 'Un client se souvient surtout du meilleur moment et de la fin de son expérience. Soigner la fin (au revoir, petit geste, suivi) vaut souvent plus que tout le reste.', 'En gare, soigne la fin de chaque prise en charge.']
];
/* Science & culture : [id, cat, accroche, texte] */
const FX_SCI = [
  ['s1', 'sci', 'Ton cerveau pèse 2 % de ton corps', 'Et il consomme environ 20 % de ton énergie au repos. Penser coûte cher : c\'est pour ça que le cerveau adore les automatismes.'],
  ['s2', 'sci', '86 milliards', 'C\'est l\'estimation du nombre de neurones dans un cerveau humain (Azevedo, 2009). Chacun peut former des milliers de connexions.'],
  ['s3', 'sci', 'Ce qui s\'active ensemble se relie', 'Quand deux neurones s\'activent en même temps, leur connexion se renforce (Hebb, 1949). Chaque répétition d\'une habitude, bonne ou mauvaise, la grave un peu plus.'],
  ['s4', 'sci', '8 minutes et 20 secondes', 'Le temps que met la lumière du Soleil pour arriver jusqu\'à toi. Le Soleil que tu vois est celui d\'il y a 8 minutes.'],
  ['s5', 'sci', 'Les 6 dernières secondes', 'Si l\'histoire de la Terre tenait en 24 heures, Homo sapiens n\'apparaîtrait qu\'aux 6 dernières secondes avant minuit.'],
  ['s6', 'sci', '2 mètres d\'ADN', 'Déroulé, l\'ADN d\'une seule de tes cellules mesurerait environ 2 mètres. Il tient dans un noyau de quelques millièmes de millimètre.'],
  ['s7', 'sci', 'Autant de bactéries que de cellules', 'On a longtemps dit « 10 bactéries pour 1 cellule humaine ». Une étude de 2016 (Sender et al.) a corrigé : le rapport est proche de 1 pour 1.'],
  ['s8', 'sci', '100 000 battements', 'Ton cœur bat environ 100 000 fois par jour, sans que tu y penses une seule fois.'],
  ['s9', 'sci', 'La dopamine, c\'est l\'envie', 'La dopamine est surtout liée à l\'anticipation et à l\'envie (« wanting »), plus qu\'au plaisir lui-même (Berridge). C\'est pourquoi on peut vouloir quelque chose sans l\'apprécier vraiment.'],
  ['s10', 'sci', '66 jours, en moyenne', 'Dans l\'étude de Lally (2010), une nouvelle habitude devenait automatique en 66 jours en moyenne, de 18 à 254 selon les gens et les habitudes. Rater un jour ne cassait pas le processus.'],
  ['s11', 'sci', 'Un jour plus long qu\'une année', 'Sur Vénus, un jour (243 jours terrestres) dure plus longtemps qu\'une année (225 jours terrestres).'],
  ['s12', 'sci', 'La Lune s\'éloigne', 'Environ 3,8 cm par an : c\'est ce que mesurent les lasers renvoyés par les réflecteurs posés par les missions Apollo.'],
  ['s13', 'sci', 'Une cuillère d\'étoile', 'Une cuillère à café de matière d\'étoile à neutrons pèserait environ un milliard de tonnes sur Terre.'],
  ['s14', 'sci', 'L\'eau bout à 70 °C', 'Au sommet de l\'Everest, la pression est si basse que l\'eau bout vers 70 °C. Impossible d\'y cuire correctement des pâtes.'],
  ['s15', 'sci', 'Se tester plutôt que relire', 'Se forcer à retrouver une information (comme dans un quiz) la fixe bien mieux que la relire (Roediger & Karpicke, 2006). C\'est l\'effet de test.'],
  ['s16', 'sci', 'La courbe de l\'oubli', 'Sans révision, on oublie une grande partie d\'une nouvelle information en quelques jours (Ebbinghaus, 1885). Chaque rappel espacé la ralentit.'],
  ['s17', 'sci', 'Le sommeil trie tes souvenirs', 'Pendant le sommeil, le cerveau rejoue et consolide ce que tu as appris dans la journée. Apprendre puis dormir, c\'est apprendre deux fois.'],
  ['s18', 'sci', '4 éléments à la fois', 'Ta mémoire de travail ne garde qu\'environ 4 éléments en même temps (Cowan). D\'où l\'intérêt de noter plutôt que de tout retenir.'],
  ['s19', 'sci', 'Marcher après manger', 'Quelques minutes de marche après un repas réduisent le pic de sucre dans le sang, selon plusieurs études. Une vieille habitude de digestion, validée.'],
  ['s20', 'sci', 'Les requins sont plus vieux que les arbres', 'Les premiers requins sont apparus il y a environ 450 millions d\'années ; les premiers arbres, vers 385 millions d\'années.'],
  ['s21', 'sci', 'La peau, ton plus grand organe', 'Elle couvre près de 2 m² chez l\'adulte et se renouvelle en permanence.'],
  ['s22', 'sci', 'Trois cœurs et du sang bleu', 'La pieuvre a trois cœurs, et son sang est bleu grâce à une protéine à base de cuivre (l\'hémocyanine).'],
  ['s23', 'sci', 'La bonne fatigue', 'Le muscle ne grandit pas pendant l\'effort mais pendant la récupération, à condition de manger assez de protéines et de dormir.'],
  ['s24', 'sci', 'Le téléphone posé à côté', 'Une étude de 2017 (Ward et al.) suggère que la simple présence du smartphone sur la table réduit la capacité d\'attention disponible, même éteint. Mets-le dans une autre pièce pour travailler.'],
  ['k1', 'cult', 'La plus ancienne université', 'Al-Qarawiyyin, à Fès, fondée en 859 par une femme, Fatima al-Fihri, est considérée comme la plus ancienne université encore en activité.'],
  ['k2', 'cult', 'Algorithme', 'Le mot vient du nom d\'al-Khwarizmi, mathématicien de Bagdad (IXe siècle). Et « algèbre » vient d\'al-jabr, dans le titre de son traité.'],
  ['k3', 'cult', 'Le père de la méthode expérimentale', 'Ibn al-Haytham (Alhazen), au XIe siècle, expliqua que la vision vient de la lumière qui entre dans l\'œil, et vérifia ses idées par l\'expérience. Son Livre d\'optique a influencé la science européenne.'],
  ['k4', 'cult', 'Ibn Khaldun, avant la sociologie', 'Dans sa Muqaddima (1377), il analyse la naissance et la chute des dynasties par la cohésion sociale (\'asabiyya). Beaucoup le voient comme un précurseur de la sociologie et de l\'économie.'],
  ['k5', 'cult', 'Le Canon d\'Avicenne', 'Le Canon de la médecine d\'Ibn Sina a servi de manuel dans les universités européennes pendant des siècles.'],
  ['k6', 'cult', 'Des chiffres indiens', 'Nos chiffres « arabes » sont nés en Inde. Ils ont été transmis à l\'Europe par le monde arabe, notamment grâce à al-Khwarizmi.'],
  ['k7', 'cult', 'Le café des soufis', 'Les premières traces fiables du café comme boisson viennent des monastères soufis du Yémen, au XVe siècle, où il aidait à veiller pour les prières de nuit.'],
  ['k8', 'cult', 'L\'homme qui fit chuter l\'or', 'En 1324, Mansa Musa, roi du Mali, passa par Le Caire en pèlerinage avec tant d\'or qu\'il en fit chuter le cours pendant des années.'],
  ['k9', 'cult', 'Des mots arabes en français', 'Sucre (sukkar), magasin (makhazin), chiffre (sifr), hasard (az-zahr, le dé), café (qahwa), algèbre (al-jabr)… Des centaines de mots français viennent de l\'arabe.'],
  ['k10', 'cult', 'Cléopâtre et la Lune', 'Cléopâtre a vécu plus près de nous (premier pas sur la Lune en 1969) que de la construction de la grande pyramide de Gizeh.'],
  ['k11', 'cult', 'Oxford et les Aztèques', 'On enseignait déjà à Oxford vers 1096. Tenochtitlan, capitale aztèque, n\'a été fondée qu\'en 1325.'],
  ['k12', 'cult', 'Napoléon n\'était pas petit', 'Il mesurait environ 1,69 m, dans la moyenne de son époque. La légende vient de la propagande britannique et d\'une confusion entre pouces français et anglais.'],
  ['k13', 'cult', 'La tour Eiffel grandit l\'été', 'Avec la chaleur, le fer se dilate : son sommet peut gagner une quinzaine de centimètres.'],
  ['k14', 'cult', '12 fuseaux horaires', 'Grâce à ses territoires d\'outre-mer, la France est le pays qui compte le plus de fuseaux horaires au monde.'],
  ['k15', 'cult', 'Cannes, 1939', 'Le premier Festival de Cannes devait se tenir en septembre 1939. La guerre l\'annula : la première édition eut lieu en 1946.'],
  ['k16', 'cult', 'Nice, française depuis 1860', 'Nice et la Savoie ont été rattachées à la France en 1860, par le traité de Turin.'],
  ['k17', 'cult', 'Ibn Battuta, 120 000 km', 'Au XIVe siècle, ce voyageur de Tanger a parcouru environ 120 000 km en près de 30 ans, du Maroc à la Chine.'],
  ['k18', 'cult', 'Saladin à Jérusalem', 'En 1187, Salah ad-Din reprit Jérusalem et épargna la population, un contraste frappant avec le massacre de 1099. Même ses ennemis louaient sa générosité.'],
  ['k19', 'cult', 'Le zéro', 'Le mathématicien indien Brahmagupta a donné des règles de calcul avec le zéro dès 628. Le mot « zéro » vient de l\'arabe sifr, le vide.'],
  ['k20', 'cult', 'L\'écriture a 5 000 ans', 'L\'écriture cunéiforme est apparue à Sumer (Irak actuel) vers 3200 av. J.-C., d\'abord pour tenir… des comptes.'],
  ['k21', 'cult', 'Pas visible depuis l\'espace', 'La Grande Muraille de Chine ne se voit pas à l\'œil nu depuis l\'orbite : elle est très longue mais trop étroite.'],
  ['k22', 'cult', 'Cordoue, capitale du savoir', 'Au Xe siècle, Cordoue était l\'une des plus grandes villes d\'Europe, avec des rues éclairées et, selon les chroniques, une bibliothèque de centaines de milliers de volumes.']
];
/* Psychologie : [id, titre, texte, à observer] */
const FX_PSY = [
  ['p1', 'L\'effet Barnum', 'En 1949, Forer donna à ses étudiants un même « profil personnalisé » vague. Ils le notèrent 4,3 sur 5 en moyenne pour sa justesse. On se reconnaît dans les phrases générales : c\'est la base de la lecture à froid.', 'Repère une phrase d\'horoscope qui pourrait convenir à tout le monde.'],
  ['p2', 'La lecture à froid', 'Les « médiums » combinent phrases générales, questions déguisées et lecture des réactions. Chaque hochement de tête les guide. Patrick Jane dans The Mentalist en montre les ficelles.', 'En conversation, observe les micro-réactions quand tu dis quelque chose de juste.'],
  ['p3', 'Le vrai sourire', 'Un sourire sincère plisse le coin des yeux (sourire de Duchenne). Un sourire de politesse ne mobilise souvent que la bouche.', 'Aujourd\'hui, regarde les yeux des gens quand ils sourient.'],
  ['p4', 'Mentir ne fait pas regarder à gauche', 'Aucun signe unique ne trahit le mensonge : ni les yeux, ni le fait de se toucher le nez. Les méta-analyses montrent que nous détectons le mensonge à peine mieux que le hasard.', 'Méfie-toi de ceux qui prétendent lire les mensonges en un regard.'],
  ['p5', 'L\'effet de halo', 'Une seule qualité visible (beauté, assurance, tenue) colore tout le reste du jugement. On prête plus d\'intelligence à quelqu\'un de bien habillé.', 'Ta tenue au travail parle avant toi.'],
  ['p6', 'La simple exposition', 'Plus on voit quelque chose, plus on tend à l\'apprécier (Zajonc, 1968). La familiarité crée la sympathie, et la publicité le sait.', 'Remarque une musique que tu as fini par aimer à force de l\'entendre.'],
  ['p7', 'L\'effet Benjamin Franklin', 'Demander un petit service à quelqu\'un le rend souvent plus bienveillant envers toi : pour rester cohérent, il se dit qu\'il doit t\'apprécier.', 'Demande un petit conseil à quelqu\'un avec qui le contact est froid.'],
  ['p8', 'L\'effet projecteur', 'On surestime beaucoup à quel point les autres remarquent nos erreurs. Dans une expérience (Gilovich, 2000), des étudiants avec un t-shirt gênant pensaient que la moitié du groupe l\'avait vu ; environ un quart seulement l\'avait remarqué.', 'Ta dernière gaffe, presque personne ne s\'en souvient.'],
  ['p9', 'Le biais de confirmation', 'On cherche, on retient et on croit surtout ce qui confirme ce qu\'on pense déjà. Même les gens intelligents : ils sont juste meilleurs pour se justifier.', 'Cherche un argument solide contre une de tes convictions.'],
  ['p10', 'Le biais de négativité', 'Un reproche pèse plus lourd que plusieurs compliments. Le cerveau est réglé pour repérer les menaces en priorité.', 'Chez ton équipe, compense chaque remarque négative par plusieurs retours positifs sincères.'],
  ['p11', 'Parler de soi fait plaisir', 'Parler de soi active les circuits de la récompense du cerveau (Tamir & Mitchell, 2012). Les gens aiment ceux qui les font parler d\'eux.', 'Dans ta prochaine conversation, parle 30 % et écoute 70 %.'],
  ['p12', 'L\'effet caméléon', 'On imite inconsciemment la posture et les gestes de ceux qu\'on apprécie, et on apprécie davantage ceux qui nous imitent subtilement (Chartrand & Bargh, 1999).', 'Observe deux amis qui discutent : leurs postures se ressemblent-elles ?'],
  ['p13', 'Le nombre de Dunbar', 'Notre cerveau ne pourrait entretenir qu\'environ 150 relations stables. Au-delà, on connaît des visages, pas des personnes.', 'Qui sont les 5 personnes les plus proches de toi ? Ils te façonnent.'],
  ['p14', 'Les pieds parlent', 'Selon Joe Navarro, ancien agent du FBI, les pieds orientés vers la sortie indiquent souvent l\'envie de partir. À lire comme un indice, jamais comme une preuve.', 'En pleine discussion, jette un œil discret aux pieds de ton interlocuteur.'],
  ['p15', 'Dunning-Kruger', 'Les débutants ont tendance à surestimer leur niveau, faute de savoir ce qu\'ils ignorent. Plus on apprend, plus on mesure l\'étendue de ce qu\'on ne sait pas.', 'Dans quel domaine te crois-tu meilleur que tu ne l\'es ?'],
  ['p16', 'Trop de choix tue le choix', 'Dans une expérience célèbre, un stand de 24 confitures attirait plus de monde qu\'un stand de 6, mais vendait beaucoup moins. L\'effet varie selon les études, mais simplifier le choix aide souvent à décider.', 'Propose 2 ou 3 options, pas 10.'],
  ['p17', 'L\'effet gaffe', 'Une personne compétente qui commet une petite maladresse devient plus sympathique (Aronson, 1966). La perfection éloigne, l\'humanité rapproche.', 'Ose montrer une petite faiblesse devant ton équipe.'],
  ['p18', '100 millisecondes', 'Il suffit d\'environ un dixième de seconde pour se faire une première impression d\'un visage (Willis & Todorov, 2006). Plus de temps renforce surtout la confiance dans ce premier jugement.', 'Soigne tes premières secondes : regard, sourire, poignée de main.'],
  ['p19', 'La porte au nez', 'Demander d\'abord quelque chose d\'énorme, qui sera refusé, rend la vraie demande (plus petite) plus facile à accepter.', 'Repère cette technique la prochaine fois qu\'on te vend quelque chose.'],
  ['p20', 'L\'illusion de transparence', 'On croit que nos émotions se lisent sur notre visage bien plus qu\'en réalité. Ton stress avant un oral se voit beaucoup moins que tu ne le penses.', 'Avant de parler en public, rappelle-toi : ils ne voient pas ton cœur battre.'],
  ['p21', 'Le silence qui fait parler', 'Après une question, la plupart des gens ne supportent pas un silence de quelques secondes et se mettent à en dire plus. Les enquêteurs et les bons négociateurs l\'utilisent.', 'Après ta prochaine question, attends 3 secondes de plus.'],
  ['p22', 'L\'effet Pygmalion', 'Les attentes d\'un chef ou d\'un professeur influencent les performances de ceux qu\'il encadre. L\'effet est réel, mais plus modeste que ne le suggérait l\'étude originale de 1968.', 'Dis à un équipier que tu le crois capable d\'un défi précis.'],
  ['p23', 'La règle du pic et de la fin', 'On juge une expérience surtout sur son moment le plus intense et sur sa fin, pas sur sa durée totale (Kahneman).', 'Termine ta journée sur une bonne action : c\'est d\'elle que tu te souviendras.'],
  ['p24', 'L\'intention d\'implémentation', 'Dire « si X arrive, alors je fais Y » augmente nettement les chances de passer à l\'acte. Le cerveau prépare la réponse à l\'avance.', 'Écris un « si… alors… » pour ton moment le plus difficile de la journée.']
];
/* Quiz : [id, question, [choix], index de la bonne réponse, explication] */
const FX_QUIZ = [
  ['q1', 'Combien de sourates compte le Coran ?', ['99', '114', '124'], 1, '114 sourates, de longueurs très différentes.'],
  ['q2', 'Quelle est la plus longue sourate du Coran ?', ['Al-Baqara', 'Al \'Imran', 'Yusuf'], 0, 'Al-Baqara, avec 286 versets. La plus courte est Al-Kawthar, 3 versets.'],
  ['q3', 'Quel est le premier mot révélé du Coran ?', ['Bismillah', 'Qul (Dis)', 'Iqra (Lis)'], 2, '« Iqra », dans la grotte de Hira : sourate Al-\'Alaq.'],
  ['q4', 'D\'où vient le mot « algorithme » ?', ['Du grec algos', 'D\'al-Khwarizmi', 'Du latin algor'], 1, 'Du nom du mathématicien al-Khwarizmi, à Bagdad au IXe siècle.'],
  ['q5', 'Qui a fondé l\'université al-Qarawiyyin ?', ['Fatima al-Fihri', 'Harun ar-Rashid', 'Ibn Rushd'], 0, 'Fatima al-Fihri, à Fès, en 859.'],
  ['q6', 'Sur quelle planète un jour dure-t-il plus qu\'une année ?', ['Mars', 'Vénus', 'Jupiter'], 1, 'Vénus : 243 jours terrestres pour tourner sur elle-même, 225 pour faire le tour du Soleil.'],
  ['q7', 'Combien d\'os compte le squelette d\'un adulte ?', ['186', '206', '256'], 1, '206. Un bébé en a davantage : certains fusionnent en grandissant.'],
  ['q8', 'Marge brute =', ['Prix − coût direct du produit', 'Bénéfice après impôts', 'Chiffre d\'affaires total'], 0, 'La marge nette, elle, retire aussi toutes les autres charges.'],
  ['q9', 'Dans SPIN Selling, le « I » signifie :', ['Information', 'Implication', 'Intérêt'], 1, 'Implication : faire mesurer au client ce que son problème lui coûte.'],
  ['q10', '« Plus que 2 en stock ! » joue sur quel principe de Cialdini ?', ['La réciprocité', 'La rareté', 'L\'autorité'], 1, 'La rareté : ce qui risque de manquer paraît plus précieux.'],
  ['q11', 'Répéter les derniers mots de l\'autre s\'appelle, chez Chris Voss :', ['Le miroir', 'L\'ancrage', 'Le recadrage'], 0, 'Le miroir. L\'autre développe, et se sent écouté.'],
  ['q12', 'La MESORE, en négociation, c\'est :', ['Ton prix de départ', 'Ta meilleure solution si l\'accord échoue', 'La concession finale'], 1, 'Meilleure Solution de Rechange. Plus elle est bonne, plus tu es fort.'],
  ['q13', 'Selon The Mom Test, quelle réponse vaut le plus ?', ['« Super idée ! »', '« Je l\'achèterais sûrement »', '« Je te paie un acompte maintenant »'], 2, 'Un engagement (argent, temps, réputation) vaut plus que tous les compliments.'],
  ['q14', 'Un vrai sourire se reconnaît surtout :', ['Aux dents visibles', 'Au plissement des yeux', 'À sa durée'], 1, 'Le sourire de Duchenne mobilise les muscles autour des yeux.'],
  ['q15', 'Combien de temps en moyenne pour qu\'une habitude devienne automatique (Lally, 2010) ?', ['21 jours', '66 jours', '6 mois'], 1, '66 jours en moyenne, de 18 à 254 selon les personnes. Les « 21 jours » sont un mythe.'],
  ['q16', 'Qui a écrit la Muqaddima ?', ['Ibn Battuta', 'Ibn Khaldun', 'Ibn Sina'], 1, 'Ibn Khaldun, en 1377.'],
  ['q17', 'En quelle année Salah ad-Din reprend-il Jérusalem ?', ['1099', '1187', '1492'], 1, '1187. 1099 est l\'année de la prise par les croisés, 1492 celle de la chute de Grenade.'],
  ['q18', 'Où le café est-il devenu une boisson ?', ['En Italie', 'Au Brésil', 'Au Yémen'], 2, 'Au Yémen, au XVe siècle, dans les cercles soufis.'],
  ['q19', 'Quelle part de ton énergie ton cerveau consomme-t-il au repos ?', ['5 %', '20 %', '50 %'], 1, 'Environ 20 %, pour 2 % du poids du corps.'],
  ['q20', 'Le point mort, c\'est :', ['Le mois le plus calme', 'Le chiffre d\'affaires qui couvre toutes les charges', 'La faillite'], 1, 'Au-dessus du point mort, chaque vente rapporte vraiment.'],
  ['q21', 'Combien de temps met la lumière du Soleil pour nous atteindre ?', ['8 secondes', '8 minutes', '8 heures'], 1, 'Environ 8 minutes et 20 secondes.'],
  ['q22', 'Quel verset parle de « l\'homme n\'obtient que le fruit de ses efforts » ?', ['An-Najm 53:39', 'Al-Fatiha 1:5', 'Al-Ikhlas 112:1'], 0, 'Sourate An-Najm, verset 39.'],
  ['q23', 'Selon le hadith, quels sont les deux bienfaits dont beaucoup sont lésés ?', ['L\'argent et la famille', 'La santé et le temps libre', 'La jeunesse et la beauté'], 1, 'La santé et le temps libre (Bukhari).'],
  ['q24', 'L\'équation de la valeur d\'Hormozi augmente quand…', ['Le délai augmente', 'L\'effort diminue', 'Le prix baisse'], 1, 'Moins d\'effort et moins de délai, plus de résultat et plus de certitude.']
];
/* Vrai ou faux : [id, affirmation, vrai ?, explication] */
const FX_VF = [
  ['v1', 'La Grande Muraille de Chine est visible à l\'œil nu depuis l\'espace.', false, 'Faux : trop étroite pour être vue à l\'œil nu depuis l\'orbite.'],
  ['v2', 'On n\'utilise que 10 % de son cerveau.', false, 'Faux : l\'imagerie montre que toutes les zones servent, à des moments différents.'],
  ['v3', 'Les requins existaient avant les arbres.', true, 'Vrai : environ 450 millions d\'années contre 385 millions.'],
  ['v4', 'On enseignait à Oxford avant la fondation de la capitale aztèque.', true, 'Vrai : vers 1096 contre 1325.'],
  ['v5', 'Regarder en haut à gauche trahit un mensonge.', false, 'Faux : aucune étude ne confirme ce signe. Aucun geste unique ne trahit le mensonge.'],
  ['v6', 'Le poisson rouge a une mémoire de 3 secondes.', false, 'Faux : il peut retenir des informations pendant des mois.'],
  ['v7', 'Le mot « sucre » vient de l\'arabe.', true, 'Vrai : de sukkar.'],
  ['v8', 'Chiffre d\'affaires et bénéfice, c\'est la même chose.', false, 'Faux : le bénéfice, c\'est ce qui reste après toutes les charges.'],
  ['v9', 'Le sucre rend les enfants hyperactifs.', false, 'Faux : les études en double aveugle ne montrent pas d\'effet. Ce sont surtout les attentes des parents qui changent.'],
  ['v10', 'Ton cœur bat environ 100 000 fois par jour.', true, 'Vrai : environ 70 battements par minute × 1 440 minutes.'],
  ['v11', 'Napoléon était petit pour son époque.', false, 'Faux : environ 1,69 m, dans la moyenne.'],
  ['v12', 'La France est le pays qui compte le plus de fuseaux horaires.', true, 'Vrai : 12, grâce à ses territoires d\'outre-mer.'],
  ['v13', 'Il faut 21 jours pour prendre une habitude.', false, 'Faux : 66 jours en moyenne dans l\'étude de Lally, avec de grandes différences selon les gens.'],
  ['v14', 'Rater un jour ruine la formation d\'une habitude.', false, 'Faux : dans l\'étude de Lally, un oubli ponctuel ne changeait presque rien. Ce qui compte, c\'est de reprendre.']
];

const FX_AR = {"c1": "فَإِنَّ مَعَ ٱلۡعُسۡرِ يُسۡرًا ﴿٥﴾ إِنَّ مَعَ ٱلۡعُسۡرِ يُسۡرٗا ﴿٦﴾", "c2": "لَا يُكَلِّفُ ٱللَّهُ نَفۡسًا إِلَّا وُسۡعَهَاۚ لَهَا مَا كَسَبَتۡ وَعَلَيۡهَا مَا ٱكۡتَسَبَتۡۗ رَبَّنَا لَا تُؤَاخِذۡنَآ إِن نَّسِينَآ أَوۡ أَخۡطَأۡنَاۚ رَبَّنَا وَلَا تَحۡمِلۡ عَلَيۡنَآ إِصۡرٗا كَمَا حَمَلۡتَهُۥ عَلَى ٱلَّذِينَ مِن قَبۡلِنَاۚ رَبَّنَا وَلَا تُحَمِّلۡنَا مَا لَا طَاقَةَ لَنَا بِهِۦۖ وَٱعۡفُ عَنَّا وَٱغۡفِرۡ لَنَا وَٱرۡحَمۡنَآۚ أَنتَ مَوۡلَىٰنَا فَٱنصُرۡنَا عَلَى ٱلۡقَوۡمِ ٱلۡكَٰفِرِينَ ﴿٢٨٦﴾", "c3": "لَهُۥ مُعَقِّبَٰتٞ مِّنۢ بَيۡنِ يَدَيۡهِ وَمِنۡ خَلۡفِهِۦ يَحۡفَظُونَهُۥ مِنۡ أَمۡرِ ٱللَّهِۗ إِنَّ ٱللَّهَ لَا يُغَيِّرُ مَا بِقَوۡمٍ حَتَّىٰ يُغَيِّرُواْ مَا بِأَنفُسِهِمۡۗ وَإِذَآ أَرَادَ ٱللَّهُ بِقَوۡمٖ سُوٓءٗا فَلَا مَرَدَّ لَهُۥۚ وَمَا لَهُم مِّن دُونِهِۦ مِن وَالٍ ﴿١١﴾", "c4": "ٱلَّذِينَ ءَامَنُواْ وَتَطۡمَئِنُّ قُلُوبُهُم بِذِكۡرِ ٱللَّهِۗ أَلَا بِذِكۡرِ ٱللَّهِ تَطۡمَئِنُّ ٱلۡقُلُوبُ ﴿٢٨﴾", "c5": "فَإِذَا بَلَغۡنَ أَجَلَهُنَّ فَأَمۡسِكُوهُنَّ بِمَعۡرُوفٍ أَوۡ فَارِقُوهُنَّ بِمَعۡرُوفٖ وَأَشۡهِدُواْ ذَوَيۡ عَدۡلٖ مِّنكُمۡ وَأَقِيمُواْ ٱلشَّهَٰدَةَ لِلَّهِۚ ذَٰلِكُمۡ يُوعَظُ بِهِۦ مَن كَانَ يُؤۡمِنُ بِٱللَّهِ وَٱلۡيَوۡمِ ٱلۡأٓخِرِۚ وَمَن يَتَّقِ ٱللَّهَ يَجۡعَل لَّهُۥ مَخۡرَجٗا ﴿٢﴾ وَيَرۡزُقۡهُ مِنۡ حَيۡثُ لَا يَحۡتَسِبُۚ وَمَن يَتَوَكَّلۡ عَلَى ٱللَّهِ فَهُوَ حَسۡبُهُۥٓۚ إِنَّ ٱللَّهَ بَٰلِغُ أَمۡرِهِۦۚ قَدۡ جَعَلَ ٱللَّهُ لِكُلِّ شَيۡءٖ قَدۡرٗا ﴿٣﴾", "c6": "وَٱلَّذِينَ جَٰهَدُواْ فِينَا لَنَهۡدِيَنَّهُمۡ سُبُلَنَاۚ وَإِنَّ ٱللَّهَ لَمَعَ ٱلۡمُحۡسِنِينَ ﴿٦٩﴾", "c7": "۞قُلۡ يَٰعِبَادِيَ ٱلَّذِينَ أَسۡرَفُواْ عَلَىٰٓ أَنفُسِهِمۡ لَا تَقۡنَطُواْ مِن رَّحۡمَةِ ٱللَّهِۚ إِنَّ ٱللَّهَ يَغۡفِرُ ٱلذُّنُوبَ جَمِيعًاۚ إِنَّهُۥ هُوَ ٱلۡغَفُورُ ٱلرَّحِيمُ ﴿٥٣﴾", "c8": "فَٱذۡكُرُونِيٓ أَذۡكُرۡكُمۡ وَٱشۡكُرُواْ لِي وَلَا تَكۡفُرُونِ ﴿١٥٢﴾", "c9": "يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ ٱسۡتَعِينُواْ بِٱلصَّبۡرِ وَٱلصَّلَوٰةِۚ إِنَّ ٱللَّهَ مَعَ ٱلصَّـٰبِرِينَ ﴿١٥٣﴾", "c10": "وَلَا تَهِنُواْ وَلَا تَحۡزَنُواْ وَأَنتُمُ ٱلۡأَعۡلَوۡنَ إِن كُنتُم مُّؤۡمِنِينَ ﴿١٣٩﴾", "c11": "قُل لِّلۡمُؤۡمِنِينَ يَغُضُّواْ مِنۡ أَبۡصَٰرِهِمۡ وَيَحۡفَظُواْ فُرُوجَهُمۡۚ ذَٰلِكَ أَزۡكَىٰ لَهُمۡۚ إِنَّ ٱللَّهَ خَبِيرُۢ بِمَا يَصۡنَعُونَ ﴿٣٠﴾", "c12": "يَـٰٓأَيُّهَا ٱلنَّاسُ إِنَّا خَلَقۡنَٰكُم مِّن ذَكَرٖ وَأُنثَىٰ وَجَعَلۡنَٰكُمۡ شُعُوبٗا وَقَبَآئِلَ لِتَعَارَفُوٓاْۚ إِنَّ أَكۡرَمَكُمۡ عِندَ ٱللَّهِ أَتۡقَىٰكُمۡۚ إِنَّ ٱللَّهَ عَلِيمٌ خَبِيرٞ ﴿١٣﴾", "c13": "فَبِمَا رَحۡمَةٖ مِّنَ ٱللَّهِ لِنتَ لَهُمۡۖ وَلَوۡ كُنتَ فَظًّا غَلِيظَ ٱلۡقَلۡبِ لَٱنفَضُّواْ مِنۡ حَوۡلِكَۖ فَٱعۡفُ عَنۡهُمۡ وَٱسۡتَغۡفِرۡ لَهُمۡ وَشَاوِرۡهُمۡ فِي ٱلۡأَمۡرِۖ فَإِذَا عَزَمۡتَ فَتَوَكَّلۡ عَلَى ٱللَّهِۚ إِنَّ ٱللَّهَ يُحِبُّ ٱلۡمُتَوَكِّلِينَ ﴿١٥٩﴾", "c14": "ٱدۡعُ إِلَىٰ سَبِيلِ رَبِّكَ بِٱلۡحِكۡمَةِ وَٱلۡمَوۡعِظَةِ ٱلۡحَسَنَةِۖ وَجَٰدِلۡهُم بِٱلَّتِي هِيَ أَحۡسَنُۚ إِنَّ رَبَّكَ هُوَ أَعۡلَمُ بِمَن ضَلَّ عَن سَبِيلِهِۦ وَهُوَ أَعۡلَمُ بِٱلۡمُهۡتَدِينَ ﴿١٢٥﴾", "c15": "وَلَا تَقۡفُ مَا لَيۡسَ لَكَ بِهِۦ عِلۡمٌۚ إِنَّ ٱلسَّمۡعَ وَٱلۡبَصَرَ وَٱلۡفُؤَادَ كُلُّ أُوْلَـٰٓئِكَ كَانَ عَنۡهُ مَسۡـُٔولٗا ﴿٣٦﴾", "c16": "يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوٓاْ إِن جَآءَكُمۡ فَاسِقُۢ بِنَبَإٖ فَتَبَيَّنُوٓاْ أَن تُصِيبُواْ قَوۡمَۢا بِجَهَٰلَةٖ فَتُصۡبِحُواْ عَلَىٰ مَا فَعَلۡتُمۡ نَٰدِمِينَ ﴿٦﴾", "c17": "ٱلَّذِينَ يَأۡكُلُونَ ٱلرِّبَوٰاْ لَا يَقُومُونَ إِلَّا كَمَا يَقُومُ ٱلَّذِي يَتَخَبَّطُهُ ٱلشَّيۡطَٰنُ مِنَ ٱلۡمَسِّۚ ذَٰلِكَ بِأَنَّهُمۡ قَالُوٓاْ إِنَّمَا ٱلۡبَيۡعُ مِثۡلُ ٱلرِّبَوٰاْۗ وَأَحَلَّ ٱللَّهُ ٱلۡبَيۡعَ وَحَرَّمَ ٱلرِّبَوٰاْۚ فَمَن جَآءَهُۥ مَوۡعِظَةٞ مِّن رَّبِّهِۦ فَٱنتَهَىٰ فَلَهُۥ مَا سَلَفَ وَأَمۡرُهُۥٓ إِلَى ٱللَّهِۖ وَمَنۡ عَادَ فَأُوْلَـٰٓئِكَ أَصۡحَٰبُ ٱلنَّارِۖ هُمۡ فِيهَا خَٰلِدُونَ ﴿٢٧٥﴾", "c18": "وَيۡلٞ لِّلۡمُطَفِّفِينَ ﴿١﴾ ٱلَّذِينَ إِذَا ٱكۡتَالُواْ عَلَى ٱلنَّاسِ يَسۡتَوۡفُونَ ﴿٢﴾ وَإِذَا كَالُوهُمۡ أَو وَّزَنُوهُمۡ يُخۡسِرُونَ ﴿٣﴾", "c19": "فَإِذَا قُضِيَتِ ٱلصَّلَوٰةُ فَٱنتَشِرُواْ فِي ٱلۡأَرۡضِ وَٱبۡتَغُواْ مِن فَضۡلِ ٱللَّهِ وَٱذۡكُرُواْ ٱللَّهَ كَثِيرٗا لَّعَلَّكُمۡ تُفۡلِحُونَ ﴿١٠﴾", "c20": "يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ لَا تَأۡكُلُوٓاْ أَمۡوَٰلَكُم بَيۡنَكُم بِٱلۡبَٰطِلِ إِلَّآ أَن تَكُونَ تِجَٰرَةً عَن تَرَاضٖ مِّنكُمۡۚ وَلَا تَقۡتُلُوٓاْ أَنفُسَكُمۡۚ إِنَّ ٱللَّهَ كَانَ بِكُمۡ رَحِيمٗا ﴿٢٩﴾", "c21": "وَٱلَّذِينَ إِذَآ أَنفَقُواْ لَمۡ يُسۡرِفُواْ وَلَمۡ يَقۡتُرُواْ وَكَانَ بَيۡنَ ذَٰلِكَ قَوَامٗا ﴿٦٧﴾", "c22": "وَٱلۡعَصۡرِ ﴿١﴾ إِنَّ ٱلۡإِنسَٰنَ لَفِي خُسۡرٍ ﴿٢﴾ إِلَّا ٱلَّذِينَ ءَامَنُواْ وَعَمِلُواْ ٱلصَّـٰلِحَٰتِ وَتَوَاصَوۡاْ بِٱلۡحَقِّ وَتَوَاصَوۡاْ بِٱلصَّبۡرِ ﴿٣﴾", "c23": "فَتَعَٰلَى ٱللَّهُ ٱلۡمَلِكُ ٱلۡحَقُّۗ وَلَا تَعۡجَلۡ بِٱلۡقُرۡءَانِ مِن قَبۡلِ أَن يُقۡضَىٰٓ إِلَيۡكَ وَحۡيُهُۥۖ وَقُل رَّبِّ زِدۡنِي عِلۡمٗا ﴿١١٤﴾", "c24": "ٱقۡرَأۡ بِٱسۡمِ رَبِّكَ ٱلَّذِي خَلَقَ ﴿١﴾ خَلَقَ ٱلۡإِنسَٰنَ مِنۡ عَلَقٍ ﴿٢﴾", "c25": "أَمَّنۡ هُوَ قَٰنِتٌ ءَانَآءَ ٱلَّيۡلِ سَاجِدٗا وَقَآئِمٗا يَحۡذَرُ ٱلۡأٓخِرَةَ وَيَرۡجُواْ رَحۡمَةَ رَبِّهِۦۗ قُلۡ هَلۡ يَسۡتَوِي ٱلَّذِينَ يَعۡلَمُونَ وَٱلَّذِينَ لَا يَعۡلَمُونَۗ إِنَّمَا يَتَذَكَّرُ أُوْلُواْ ٱلۡأَلۡبَٰبِ ﴿٩﴾", "c26": "كُتِبَ عَلَيۡكُمُ ٱلۡقِتَالُ وَهُوَ كُرۡهٞ لَّكُمۡۖ وَعَسَىٰٓ أَن تَكۡرَهُواْ شَيۡـٔٗا وَهُوَ خَيۡرٞ لَّكُمۡۖ وَعَسَىٰٓ أَن تُحِبُّواْ شَيۡـٔٗا وَهُوَ شَرّٞ لَّكُمۡۚ وَٱللَّهُ يَعۡلَمُ وَأَنتُمۡ لَا تَعۡلَمُونَ ﴿٢١٦﴾", "c27": "يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ ٱصۡبِرُواْ وَصَابِرُواْ وَرَابِطُواْ وَٱتَّقُواْ ٱللَّهَ لَعَلَّكُمۡ تُفۡلِحُونَ ﴿٢٠٠﴾", "c28": "وَأَطِيعُواْ ٱللَّهَ وَرَسُولَهُۥ وَلَا تَنَٰزَعُواْ فَتَفۡشَلُواْ وَتَذۡهَبَ رِيحُكُمۡۖ وَٱصۡبِرُوٓاْۚ إِنَّ ٱللَّهَ مَعَ ٱلصَّـٰبِرِينَ ﴿٤٦﴾", "c29": "وَلَا تُصَعِّرۡ خَدَّكَ لِلنَّاسِ وَلَا تَمۡشِ فِي ٱلۡأَرۡضِ مَرَحًاۖ إِنَّ ٱللَّهَ لَا يُحِبُّ كُلَّ مُخۡتَالٖ فَخُورٖ ﴿١٨﴾ وَٱقۡصِدۡ فِي مَشۡيِكَ وَٱغۡضُضۡ مِن صَوۡتِكَۚ إِنَّ أَنكَرَ ٱلۡأَصۡوَٰتِ لَصَوۡتُ ٱلۡحَمِيرِ ﴿١٩﴾", "c30": "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌۖ أُجِيبُ دَعۡوَةَ ٱلدَّاعِ إِذَا دَعَانِۖ فَلۡيَسۡتَجِيبُواْ لِي وَلۡيُؤۡمِنُواْ بِي لَعَلَّهُمۡ يَرۡشُدُونَ ﴿١٨٦﴾", "c31": "وَلَقَدۡ خَلَقۡنَا ٱلۡإِنسَٰنَ وَنَعۡلَمُ مَا تُوَسۡوِسُ بِهِۦ نَفۡسُهُۥۖ وَنَحۡنُ أَقۡرَبُ إِلَيۡهِ مِنۡ حَبۡلِ ٱلۡوَرِيدِ ﴿١٦﴾", "c32": "وَلَا تَقُولَنَّ لِشَاْيۡءٍ إِنِّي فَاعِلٞ ذَٰلِكَ غَدًا ﴿٢٣﴾ إِلَّآ أَن يَشَآءَ ٱللَّهُۚ وَٱذۡكُر رَّبَّكَ إِذَا نَسِيتَ وَقُلۡ عَسَىٰٓ أَن يَهۡدِيَنِ رَبِّي لِأَقۡرَبَ مِنۡ هَٰذَا رَشَدٗا ﴿٢٤﴾", "c33": "وَأَن لَّيۡسَ لِلۡإِنسَٰنِ إِلَّا مَا سَعَىٰ ﴿٣٩﴾", "c34": "يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ لِمَ تَقُولُونَ مَا لَا تَفۡعَلُونَ ﴿٢﴾ كَبُرَ مَقۡتًا عِندَ ٱللَّهِ أَن تَقُولُواْ مَا لَا تَفۡعَلُونَ ﴿٣﴾", "c35": "ٱلَّذِي خَلَقَ ٱلۡمَوۡتَ وَٱلۡحَيَوٰةَ لِيَبۡلُوَكُمۡ أَيُّكُمۡ أَحۡسَنُ عَمَلٗاۚ وَهُوَ ٱلۡعَزِيزُ ٱلۡغَفُورُ ﴿٢﴾", "c36": "إِنَّ فِي خَلۡقِ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِ وَٱخۡتِلَٰفِ ٱلَّيۡلِ وَٱلنَّهَارِ لَأٓيَٰتٖ لِّأُوْلِي ٱلۡأَلۡبَٰبِ ﴿١٩٠﴾ ٱلَّذِينَ يَذۡكُرُونَ ٱللَّهَ قِيَٰمٗا وَقُعُودٗا وَعَلَىٰ جُنُوبِهِمۡ وَيَتَفَكَّرُونَ فِي خَلۡقِ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِ رَبَّنَا مَا خَلَقۡتَ هَٰذَا بَٰطِلٗا سُبۡحَٰنَكَ فَقِنَا عَذَابَ ٱلنَّارِ ﴿١٩١﴾", "c37": "وَمِنۡهُم مَّن يَقُولُ رَبَّنَآ ءَاتِنَا فِي ٱلدُّنۡيَا حَسَنَةٗ وَفِي ٱلۡأٓخِرَةِ حَسَنَةٗ وَقِنَا عَذَابَ ٱلنَّارِ ﴿٢٠١﴾", "c38": "وَمِنۡ ءَايَٰتِهِۦٓ أَنۡ خَلَقَ لَكُم مِّنۡ أَنفُسِكُمۡ أَزۡوَٰجٗا لِّتَسۡكُنُوٓاْ إِلَيۡهَا وَجَعَلَ بَيۡنَكُم مَّوَدَّةٗ وَرَحۡمَةًۚ إِنَّ فِي ذَٰلِكَ لَأٓيَٰتٖ لِّقَوۡمٖ يَتَفَكَّرُونَ ﴿٢١﴾", "c39": "وَإِذۡ تَأَذَّنَ رَبُّكُمۡ لَئِن شَكَرۡتُمۡ لَأَزِيدَنَّكُمۡۖ وَلَئِن كَفَرۡتُمۡ إِنَّ عَذَابِي لَشَدِيدٞ ﴿٧﴾", "c40": "مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ ﴿٣﴾ وَلَلۡأٓخِرَةُ خَيۡرٞ لَّكَ مِنَ ٱلۡأُولَىٰ ﴿٤﴾ وَلَسَوۡفَ يُعۡطِيكَ رَبُّكَ فَتَرۡضَىٰٓ ﴿٥﴾", "c41": "وَمَا خَلَقۡتُ ٱلۡجِنَّ وَٱلۡإِنسَ إِلَّا لِيَعۡبُدُونِ ﴿٥٦﴾", "c42": "أَفَلَا يَنظُرُونَ إِلَى ٱلۡإِبِلِ كَيۡفَ خُلِقَتۡ ﴿١٧﴾ وَإِلَى ٱلسَّمَآءِ كَيۡفَ رُفِعَتۡ ﴿١٨﴾ وَإِلَى ٱلۡجِبَالِ كَيۡفَ نُصِبَتۡ ﴿١٩﴾ وَإِلَى ٱلۡأَرۡضِ كَيۡفَ سُطِحَتۡ ﴿٢٠﴾", "c43": "أَوَلَمۡ يَرَ ٱلَّذِينَ كَفَرُوٓاْ أَنَّ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضَ كَانَتَا رَتۡقٗا فَفَتَقۡنَٰهُمَاۖ وَجَعَلۡنَا مِنَ ٱلۡمَآءِ كُلَّ شَيۡءٍ حَيٍّۚ أَفَلَا يُؤۡمِنُونَ ﴿٣٠﴾", "c44": "وَٱلَّذِينَ يَقُولُونَ رَبَّنَا هَبۡ لَنَا مِنۡ أَزۡوَٰجِنَا وَذُرِّيَّـٰتِنَا قُرَّةَ أَعۡيُنٖ وَٱجۡعَلۡنَا لِلۡمُتَّقِينَ إِمَامًا ﴿٧٤﴾", "c45": "وَٱسۡتَعِينُواْ بِٱلصَّبۡرِ وَٱلصَّلَوٰةِۚ وَإِنَّهَا لَكَبِيرَةٌ إِلَّا عَلَى ٱلۡخَٰشِعِينَ ﴿٤٥﴾"};
/* ----- Récits & sagesse (pilier Foi) ----- */
/* Récits des prophètes et de la sîra : [id, personnage, titre, récit, leçon, source] */
const FX_RECIT = [
  ['r1', 'Yusuf', '« Pas de reproche contre vous aujourd\'hui »', 'Ses frères l\'avaient jeté dans un puits. Des années plus tard, devenu ministre d\'Égypte, il les voit arriver affamés, à sa merci. Il se fait reconnaître, et ses premiers mots sont : « Pas de reproche contre vous aujourd\'hui. Qu\'Allah vous pardonne. »', 'Le pardon au moment où l\'on a tout pouvoir est la forme la plus haute de la force.', 'Coran 12:92'],
  ['r2', 'Ibrahim', 'Le feu devint fraîcheur', 'Pour avoir brisé les idoles, Ibrahim est jeté dans un immense brasier. Allah ordonne : « Ô feu, sois fraîcheur et salut pour Ibrahim. » Il en ressort indemne.', 'Celui qui se tient à la vérité quand tout le monde s\'y oppose n\'est jamais seul.', 'Coran 21:68-69'],
  ['r3', 'Musa', '« Mon Seigneur est avec moi »', 'Devant eux la mer, derrière eux l\'armée de Pharaon. Ses compagnons s\'écrient : « Nous allons être rattrapés ! » Musa répond : « Jamais ! Mon Seigneur est avec moi, Il va me guider. » La mer s\'ouvre.', 'La certitude parle avant de voir la solution.', 'Coran 26:61-63'],
  ['r4', 'Yunus', 'L\'invocation dans les ténèbres', 'Avalé par le poisson, dans trois ténèbres (la nuit, la mer, le ventre), Yunus invoque : « Il n\'y a de divinité que Toi. Gloire à Toi. J\'ai été parmi les injustes. » Il est sauvé.', 'Le Prophète ﷺ a dit qu\'aucun musulman n\'invoque par ces mots sans être exaucé (Tirmidhi 3505). Reconnaître sa faute ouvre la porte.', 'Coran 21:87-88'],
  ['r5', 'Ayyub', 'La patience d\'Ayyub', 'Il perd ses biens, ses enfants, sa santé, pendant des années. Sa plainte tient en une phrase : « Le mal m\'a touché, et Tu es le plus miséricordieux des miséricordieux. » Allah lui rend tout, et le double.', 'Se plaindre à Allah n\'est pas un manque de patience. Se plaindre d\'Allah, si.', 'Coran 21:83-84'],
  ['r6', 'Le Prophète ﷺ', 'À Taïf', 'Chassé de Taïf à coups de pierres, les pieds en sang, il reçoit la visite de l\'ange des montagnes, prêt à écraser la ville. Il refuse : « J\'espère qu\'Allah fera sortir de leurs descendants des gens qui adoreront Allah seul. »', 'Même blessé, il pense à l\'avenir de ceux qui l\'ont blessé.', 'Bukhari 3231'],
  ['r7', 'Le Prophète ﷺ et Abu Bakr', 'La grotte de Thawr', 'Pendant l\'Hégire, les poursuivants arrivent devant la grotte. Abu Bakr murmure : « S\'ils regardent à leurs pieds, ils nous verront. » Le Prophète ﷺ répond : « Que penses-tu de deux dont Allah est le troisième ? »', 'La peur regarde les pieds de l\'ennemi. La foi regarde plus haut.', 'Bukhari 3653, Coran 9:40'],
  ['r8', 'Le Prophète ﷺ', 'La Pierre noire et le manteau', 'Avant la prophétie, les tribus de La Mecque manquent de s\'entretuer pour l\'honneur de replacer la Pierre noire. Muhammad ﷺ, surnommé « al-Amin », pose la pierre sur un manteau et fait porter chaque coin par un chef de tribu.', 'Une solution où chacun gagne vaut mieux qu\'une victoire. De la négociation de haut niveau.', 'Sîra d\'Ibn Hisham'],
  ['r9', 'Khadija', 'Une femme d\'affaires', 'Khadija dirigeait un commerce prospère entre La Mecque et le Cham. Elle confia une caravane à Muhammad ﷺ, et son honnêteté et ses résultats la convainquirent de lui proposer le mariage.', 'Sa réputation l\'a précédé : l\'honnêteté est le meilleur des CV.', 'Sîra d\'Ibn Hisham'],
  ['r10', 'Sulayman', 'La fourmi qui prévient les siennes', 'Une fourmi voit arriver l\'armée de Sulayman : « Ô fourmis, entrez dans vos demeures, que Sulayman et ses armées ne vous écrasent pas sans s\'en rendre compte. » Sulayman sourit, et remercie Allah.', 'Une fourmi pense à son groupe et excuse d\'avance ceux qui pourraient l\'écraser. Et un roi l\'écoute.', 'Coran 27:18-19'],
  ['r11', 'Nuh', '950 ans', 'Nuh appela son peuple pendant 950 ans, de jour comme de nuit, en public et en privé. Très peu le suivirent. Il ne cessa jamais.', 'On ne juge pas un effort à ses résultats immédiats. On te demande d\'appeler, pas de convaincre.', 'Coran 29:14, 71:5-9'],
  ['r12', 'Maryam', 'Secoue le tronc', 'Seule, épuisée, en plein accouchement, Maryam reçoit cet ordre : « Secoue vers toi le tronc du palmier, il fera tomber sur toi des dattes fraîches. » Une femme épuisée ne peut pas secouer un palmier.', 'Les savants en tirent une leçon : Allah pouvait faire tomber les dattes sans elle, mais Il lui demande un geste. L\'effort, même symbolique, précède le secours.', 'Coran 19:25'],
  ['r13', 'Musa et al-Khidr', 'Ce que tu ne comprends pas encore', 'Al-Khidr perce une barque, tue un garçon, répare un mur sans salaire. Musa proteste à chaque fois. Puis vient l\'explication : chaque acte cachait un bien que Musa ne pouvait pas voir.', 'Ce qui te semble une perte aujourd\'hui peut être une protection. La patience avec ce qu\'on ne comprend pas encore.', 'Coran 18:65-82'],
  ['r14', 'Bilal', '« Ahad, Ahad »', 'Esclave torturé sous une pierre brûlante en plein soleil de La Mecque pour renier sa foi, Bilal ne répétait qu\'un mot : « Ahad, Ahad » (Un, Un). Il devint le premier muezzin de l\'islam.', 'Celui qu\'on voulait écraser est devenu la voix qui appelle à la prière depuis quatorze siècles.', 'Sîra'],
  ['r15', 'Abd ar-Rahman ibn \'Awf', '« Indique-moi le marché »', 'Arrivé à Médine sans rien, on lui propose la moitié des biens d\'un Ansar. Il répond : « Qu\'Allah bénisse tes biens et ta famille. Indique-moi plutôt le marché. » Il devint l\'un des plus riches compagnons, et l\'un des plus généreux.', 'Refuser la facilité pour construire soi-même. L\'esprit d\'entreprise au cœur de la sunna.', 'Bukhari 2048'],
  ['r16', '\'Uthman ibn \'Affan', 'Le puits de Ruma', 'À Médine, un puits appartenait à un homme qui vendait son eau. \'Uthman l\'acheta et le rendit gratuit pour tous les musulmans, après que le Prophète ﷺ eut promis le Paradis à celui qui le ferait.', 'L\'argent bien placé ne dort pas : il sert, et son effet continue après toi (sadaqa jariya).', 'Tirmidhi 3703'],
  ['r17', 'Le Prophète ﷺ', 'Au service des siens', 'On demanda à Aïcha ce que faisait le Prophète ﷺ chez lui. Elle répondit : « Il était au service de sa famille, et quand venait l\'heure de la prière, il sortait prier. »', 'Le plus grand des hommes recousait ses vêtements et aidait à la maison.', 'Bukhari 676'],
  ['r18', 'Le Prophète ﷺ', 'La conquête de La Mecque', 'Il entre victorieux dans la ville qui l\'avait chassé et persécuté, la tête baissée d\'humilité. Face à ses anciens ennemis, la sîra rapporte qu\'il déclara une amnistie générale.', 'Le vrai triomphe se fait sans revanche.', 'Sîra d\'Ibn Hisham']
];
/* Faits du Coran : [id, titre, texte] */
const FX_FAIT = [
  ['f1', 'La seule femme nommée', 'Maryam est la seule femme citée par son nom dans le Coran, plus souvent que dans l\'Évangile, et une sourate entière porte son nom.'],
  ['f2', 'Sans basmala', 'At-Tawba est la seule sourate qui ne commence pas par « Bismillah ». Mais An-Naml en contient deux : au début, et dans la lettre de Sulayman (27:30). Le compte reste à 114.'],
  ['f3', '23 ans', 'Le Coran n\'a pas été révélé d\'un coup, mais par passages, sur environ 23 ans, souvent en réponse à des événements précis.'],
  ['f4', 'Le plus grand verset', 'Le Prophète ﷺ a désigné Ayat al-Kursi (2:255) comme le plus grand verset du Coran (Muslim 810).'],
  ['f5', 'Le plus long verset parle… de contrats', 'Le plus long verset du Coran (2:282) explique comment mettre par écrit une dette, avec des témoins. La mise par écrit des engagements est un ordre divin.'],
  ['f6', 'Un tiers du Coran', 'Le Prophète ﷺ a dit que la sourate Al-Ikhlas équivaut à un tiers du Coran (Bukhari 5013), car elle résume l\'unicité d\'Allah.'],
  ['f7', 'Le prophète le plus cité', 'Musa est le prophète dont le nom revient le plus souvent dans le Coran, plus de 130 fois. Son histoire sert de modèle au Prophète ﷺ face aux épreuves.'],
  ['f8', 'Muhammad, 4 fois', 'Le nom « Muhammad » n\'apparaît que 4 fois dans le Coran, et « Ahmad » une fois. Allah s\'adresse surtout à lui par « Ô Prophète » ou « Ô Messager ».'],
  ['f9', 'De la mémoire au livre', 'Le Coran était mémorisé par des centaines de compagnons. Après la mort de nombreux mémorisateurs, Abu Bakr le fit réunir en un seul recueil ; \'Uthman en fit ensuite diffuser des copies de référence.'],
  ['f10', '17 fois par jour, au minimum', 'Al-Fatiha est récitée au moins 17 fois par jour : une fois par rak\'a des cinq prières obligatoires.'],
  ['f11', '30 parties pour 30 jours', 'Le Coran est divisé en 30 juz\', pour pouvoir le lire en entier en un mois, à raison d\'un juz\' par jour.'],
  ['f12', 'Le premier et le dernier', 'Les premiers versets révélés sont « Lis ! » (96:1-5). Selon Ibn Abbas, le dernier est « Et craignez un jour où vous serez ramenés vers Allah… » (2:281).']
];
/* Paroles de savants : [id, auteur, parole, contexte] */
const FX_SAVANT = [
  ['w1', 'Ibn al-Qayyim', 'Repousse la pensée. Si tu ne le fais pas, elle deviendra une idée. Repousse l\'idée, sinon elle deviendra un désir. Combats le désir, sinon il deviendra une résolution. Si tu ne l\'arrêtes pas, elle deviendra un acte, et si tu ne le compenses pas par son contraire, il deviendra une habitude.', 'Tiré d\'al-Fawa\'id. Il décrit, sept siècles avant les neurosciences, comment une habitude se construit : il est plus facile de couper au début de la chaîne.'],
  ['w2', 'Ibn al-Qayyim', 'Perdre son temps est pire que la mort, car la perte de temps te coupe d\'Allah et de l\'au-delà, tandis que la mort ne te coupe que de ce monde et de ses gens.', 'Al-Fawa\'id. À relire avant de se lancer dans un scroll sans fin.'],
  ['w3', 'Hasan al-Basri', 'Ô fils d\'Adam, tu n\'es qu\'un ensemble de jours. Chaque fois qu\'un jour s\'en va, une partie de toi s\'en va.', 'Grand savant de Bassora, élevé dans la maison d\'Umm Salama, épouse du Prophète ﷺ.'],
  ['w4', '\'Umar ibn al-Khattab', 'Faites votre propre bilan avant qu\'on ne vous le demande, et pesez vos actes avant qu\'ils ne soient pesés.', 'L\'origine du bilan quotidien (muhasaba). Ton bilan d\'hier, sur l\'orbite, en est une forme.'],
  ['w5', '\'Ali ibn Abi Talib', 'Ce monde s\'en va en tournant le dos, et l\'au-delà arrive en faisant face. Chacun a ses enfants : soyez des enfants de l\'au-delà. Aujourd\'hui il y a des actes sans jugement, et demain un jugement sans actes.', 'Rapporté par Al-Bukhari, livre des cœurs attendris (ar-Riqaq).'],
  ['w6', 'Ibn Taymiyya', 'Que peuvent me faire mes ennemis ? Mon paradis et mon jardin sont dans ma poitrine. Ma prison est une retraite, ma mise à mort un martyre, et mon exil un voyage.', 'Dit en prison, où il mourut. Rapporté par son élève Ibn al-Qayyim. La liberté intérieure ne dépend pas des murs.'],
  ['w7', 'Ibn Taymiyya', 'Il y a dans ce monde un paradis : celui qui n\'y entre pas n\'entrera pas au paradis de l\'au-delà.', 'Il parlait de la douceur de la foi et du rappel d\'Allah, que l\'on goûte dès cette vie.'],
  ['w8', 'Yahya ibn Abi Kathir', 'La science ne s\'acquiert pas avec le repos du corps.', 'Cité par l\'imam Muslim dans son Sahih, au milieu des hadiths sur les horaires de prière, comme pour s\'excuser de l\'effort demandé au lecteur.'],
  ['w9', 'Imam Ahmad', 'Avec l\'encrier, jusqu\'à la tombe.', 'Réponse de l\'imam Ahmad, déjà célèbre et âgé, à qui l\'on demandait pourquoi il continuait à étudier. Apprendre ne s\'arrête jamais.'],
  ['w10', 'Al-Ghazali', 'La science sans action est folie, et l\'action sans science est vaine.', 'Tiré de sa lettre « Ô mon enfant » (Ayyuha al-walad), écrite à un élève.'],
  ['w11', 'Sufyan ath-Thawri', 'Je n\'ai jamais rien traité de plus difficile que mon intention, car elle se retourne sans cesse contre moi.', 'Même les plus grands savants devaient renouveler leur intention encore et encore.'],
  ['w12', 'Abdullah ibn al-Mubarak', 'Combien de petites actions deviennent grandes par l\'intention, et combien de grandes actions deviennent petites par l\'intention.', 'Savant, commerçant et combattant, il finançait les études de nombreux savants avec ses bénéfices.'],
  ['w13', '\'Umar ibn \'Abd al-\'Aziz', 'La nuit et le jour agissent sur toi : agis donc en eux.', 'Calife réputé pour sa justice, il réforma l\'État en deux ans et demi seulement.'],
  ['w14', 'Fudayl ibn \'Iyad', 'Délaisser une action à cause des gens, c\'est de l\'ostentation. Agir pour les gens, c\'est de l\'association. La sincérité, c\'est qu\'Allah te préserve des deux.', 'Ancien brigand devenu l\'un des plus grands ascètes, après avoir entendu un verset en escaladant un mur.'],
  ['w15', '\'Abdullah ibn Mas\'ud', 'Je déteste voir un homme oisif, qui ne travaille ni pour ce monde ni pour l\'au-delà.', 'L\'un des plus grands savants du Coran parmi les compagnons.']
];
/* Poèmes classiques : [id, auteur, arabe (vers séparés par |), sens, contexte] */
const FX_POEME = [
  ['o1', 'Imam Ash-Shafi\'i', 'شَكَوْتُ إِلَى وَكِيعٍ سُوءَ حِفْظِي … فَأَرْشَدَنِي إِلَى تَرْكِ المَعَاصِي|وَأَخْبَرَنِي بِأَنَّ العِلْمَ نُورٌ … وَنُورُ اللهِ لَا يُهْدَى لِعَاصِي', 'Je me suis plaint à Waki\' de ma mauvaise mémoire : il m\'a conseillé de délaisser les péchés. Il m\'a appris que la science est une lumière, et que la lumière d\'Allah n\'est pas offerte à celui qui désobéit.', 'Waki\' ibn al-Jarrah était l\'un de ses maîtres. La clarté de l\'esprit est liée à la pureté du cœur.'],
  ['o2', 'Imam Ash-Shafi\'i', 'نَعِيبُ زَمَانَنَا وَالعَيْبُ فِينَا … وَمَا لِزَمَانِنَا عَيْبٌ سِوَانَا', 'Nous accusons notre époque, alors que le défaut est en nous. Notre époque n\'a d\'autre défaut que nous-mêmes.', 'Avant de blâmer les circonstances, regarder ce qu\'on peut changer en soi.'],
  ['o3', 'Imam Ash-Shafi\'i', 'وَلَرُبَّ نَازِلَةٍ يَضِيقُ لَهَا الفَتَى … ذَرْعًا وَعِنْدَ اللهِ مِنْهَا المَخْرَجُ|ضَاقَتْ فَلَمَّا اسْتَحْكَمَتْ حَلَقَاتُهَا … فُرِجَتْ وَكُنْتُ أَظُنُّهَا لَا تُفْرَجُ', 'Que de malheurs face auxquels un jeune homme se sent à bout, alors qu\'auprès d\'Allah se trouve l\'issue. La situation s\'est resserrée, et quand ses anneaux se sont serrés au maximum, elle s\'est dénouée, alors que je la croyais sans issue.', 'Le moment le plus serré précède souvent le déblocage.'],
  ['o4', 'Imam Ash-Shafi\'i', 'دَعِ الأَيَّامَ تَفْعَلُ مَا تَشَاءُ … وَطِبْ نَفْسًا إِذَا حَكَمَ القَضَاءُ', 'Laisse les jours faire ce qu\'ils veulent, et garde l\'âme sereine quand le décret s\'accomplit.', 'Début d\'un de ses poèmes les plus célèbres sur l\'acceptation du destin.'],
  ['o5', 'Imam Ash-Shafi\'i', 'تَغَرَّبْ عَنِ الأَوْطَانِ فِي طَلَبِ العُلَا … وَسَافِرْ فَفِي الأَسْفَارِ خَمْسُ فَوَائِدِ', 'Éloigne-toi de ta terre natale en quête d\'élévation, et voyage : les voyages ont cinq bienfaits.', 'Il les énumère ensuite : chasser le souci, gagner sa vie, la science, les bonnes manières, et la compagnie d\'hommes de valeur.'],
  ['o6', 'Al-Busiri, la Burda', 'وَالنَّفْسُ كَالطِّفْلِ إِنْ تُهْمِلْهُ شَبَّ عَلَى … حُبِّ الرَّضَاعِ وَإِنْ تَفْطِمْهُ يَنْفَطِمِ', 'L\'âme est comme l\'enfant : si tu la laisses faire, elle grandit en aimant la tétée ; mais si tu la sèvres, elle se sèvre.', 'Tiré du poème le plus récité à la louange du Prophète ﷺ (XIIIe siècle). Une habitude n\'est pas une fatalité : l\'âme s\'habitue aussi au sevrage.'],
  ['o7', 'Attribué à \'Ali ibn Abi Talib', 'دَوَاؤُكَ فِيكَ وَمَا تُبْصِرُ … وَدَاؤُكَ مِنْكَ وَمَا تَشْعُرُ', 'Ton remède est en toi, et tu ne le vois pas. Ton mal vient de toi, et tu ne le sens pas.', 'Vers du diwan attribué à \'Ali. L\'attribution est discutée, le sens reste juste.'],
  ['o8', 'Ibn al-Wardi', 'اطْلُبِ العِلْمَ وَلَا تَكْسَلْ فَمَا … أَبْعَدَ الخَيْرَ عَلَى أَهْلِ الكَسَلْ', 'Recherche la science et ne sois pas paresseux : que le bien est loin des gens de la paresse !', 'Tiré de sa Lamiyya, un long poème de conseils à son fils (XIVe siècle).']
];
/* Le Coran invite à observer : [id, référence, sourate, sens, ce qu'on sait aujourd'hui] */
const FX_OBS = [
  ['x1', '23:12-14', 'Al-Mu\'minun', 'Nous avons créé l\'homme d\'un extrait d\'argile, puis Nous en avons fait une goutte dans un reposoir solide, puis Nous avons fait de la goutte une adhérence, de l\'adhérence un morceau de chair, du morceau de chair des os, et Nous avons revêtu les os de chair…', 'L\'embryologie décrit elle aussi un développement par étapes successives. Beaucoup de lecteurs y voient une correspondance ; d\'autres rappellent que le verset parle d\'abord de la puissance créatrice, pas de manuel médical.'],
  ['x2', '78:6-7', 'An-Naba\'', 'N\'avons-Nous pas fait de la terre une couche, et des montagnes des piquets ?', 'Les géologues savent que les montagnes ont des « racines » : la croûte y est plus épaisse et s\'enfonce profondément sous le relief (l\'isostasie). L\'image du piquet reste une invitation à observer, pas une thèse géologique.'],
  ['x3', '24:45', 'An-Nur', 'Et Allah a créé d\'eau tout animal. Certains rampent sur le ventre, d\'autres marchent sur deux pattes, d\'autres sur quatre…', 'Toute vie connue dépend de l\'eau, qui compose la majeure partie des cellules. C\'est pour cela qu\'on cherche d\'abord de l\'eau quand on cherche la vie ailleurs.'],
  ['x4', '51:47', 'Adh-Dhariyat', 'Le ciel, Nous l\'avons construit par Notre puissance, et Nous l\'étendons constamment.', 'Depuis les travaux de Hubble (1929), on sait que l\'univers est en expansion. Des savants anciens comprenaient le verset autrement (« Nous sommes largement capables »). Les deux lectures existent.'],
  ['x5', '55:19-20', 'Ar-Rahman', 'Il a laissé les deux mers se rencontrer ; entre elles, une barrière qu\'elles ne dépassent pas.', 'Là où des eaux de salinité ou de température différentes se rencontrent (comme au détroit de Gibraltar), elles se mélangent très lentement et forment des zones de transition visibles.'],
  ['x6', '36:40', 'Ya-Sin', 'Le soleil ne peut rattraper la lune, ni la nuit devancer le jour ; et chacun vogue dans une orbite.', 'Chaque astre suit une trajectoire précise, calculable des siècles à l\'avance : c\'est ce qui permet de prévoir les éclipses et les horaires de prière.'],
  ['x7', '16:68-69', 'An-Nahl', 'Ton Seigneur a inspiré aux abeilles : « Prenez des demeures dans les montagnes, les arbres et ce que les hommes construisent… » De leur ventre sort une boisson aux couleurs variées, dans laquelle il y a une guérison pour les gens.', 'Le miel a des propriétés antibactériennes reconnues, et des miels médicaux sont utilisés à l\'hôpital pour soigner certaines plaies.'],
  ['x8', '57:25', 'Al-Hadid', '… Et Nous avons fait descendre le fer, dans lequel il y a une force redoutable et des utilités pour les gens…', 'Le fer ne se forme pas sur Terre : il est fabriqué au cœur des étoiles massives et dispersé lors de leur explosion, avant d\'arriver sur les planètes. Le verset emploie le verbe « faire descendre ».']
];
FX_QUIZ.push(
  ['q25', 'Quelle est la seule femme nommée dans le Coran ?', ['Khadija', 'Maryam', 'Asiya'], 1, 'Maryam, qui a même une sourate à son nom.'],
  ['q26', 'Quelle sourate ne commence pas par « Bismillah » ?', ['At-Tawba', 'Al-Fatiha', 'Al-Kahf'], 0, 'At-Tawba. An-Naml, elle, en contient deux.'],
  ['q27', 'Qui a dit « Indique-moi le marché » en arrivant à Médine ?', ['Abu Bakr', 'Abd ar-Rahman ibn \'Awf', 'Bilal'], 1, 'Abd ar-Rahman ibn \'Awf, qui refusa la moitié des biens qu\'on lui offrait pour commercer lui-même.'],
  ['q28', 'Quel prophète est le plus cité dans le Coran ?', ['Ibrahim', 'Isa', 'Musa'], 2, 'Musa, plus de 130 fois.'],
  ['q29', 'Que dit Yunus dans le ventre du poisson ?', ['« Hasbiya Allah »', '« Il n\'y a de divinité que Toi, gloire à Toi, j\'ai été parmi les injustes »', '« Rabbi zidni \'ilma »'], 1, 'L\'invocation de Yunus (21:87), qui ne laisse jamais sans réponse.'],
  ['q30', 'Combien de fois au minimum récites-tu Al-Fatiha par jour ?', ['5', '17', '34'], 1, '17 : une fois par rak\'a des prières obligatoires.']
);
Object.assign(FX_AR, {"x1": "وَلَقَدۡ خَلَقۡنَا ٱلۡإِنسَٰنَ مِن سُلَٰلَةٖ مِّن طِينٖ ﴿١٢﴾ ثُمَّ جَعَلۡنَٰهُ نُطۡفَةٗ فِي قَرَارٖ مَّكِينٖ ﴿١٣﴾ ثُمَّ خَلَقۡنَا ٱلنُّطۡفَةَ عَلَقَةٗ فَخَلَقۡنَا ٱلۡعَلَقَةَ مُضۡغَةٗ فَخَلَقۡنَا ٱلۡمُضۡغَةَ عِظَٰمٗا فَكَسَوۡنَا ٱلۡعِظَٰمَ لَحۡمٗا ثُمَّ أَنشَأۡنَٰهُ خَلۡقًا ءَاخَرَۚ فَتَبَارَكَ ٱللَّهُ أَحۡسَنُ ٱلۡخَٰلِقِينَ ﴿١٤﴾", "x2": "أَلَمۡ نَجۡعَلِ ٱلۡأَرۡضَ مِهَٰدٗا ﴿٦﴾ وَٱلۡجِبَالَ أَوۡتَادٗا ﴿٧﴾", "x3": "وَٱللَّهُ خَلَقَ كُلَّ دَآبَّةٖ مِّن مَّآءٖۖ فَمِنۡهُم مَّن يَمۡشِي عَلَىٰ بَطۡنِهِۦ وَمِنۡهُم مَّن يَمۡشِي عَلَىٰ رِجۡلَيۡنِ وَمِنۡهُم مَّن يَمۡشِي عَلَىٰٓ أَرۡبَعٖۚ يَخۡلُقُ ٱللَّهُ مَا يَشَآءُۚ إِنَّ ٱللَّهَ عَلَىٰ كُلِّ شَيۡءٖ قَدِيرٞ ﴿٤٥﴾", "x4": "وَٱلسَّمَآءَ بَنَيۡنَٰهَا بِأَيۡيْدٖ وَإِنَّا لَمُوسِعُونَ ﴿٤٧﴾", "x5": "مَرَجَ ٱلۡبَحۡرَيۡنِ يَلۡتَقِيَانِ ﴿١٩﴾ بَيۡنَهُمَا بَرۡزَخٞ لَّا يَبۡغِيَانِ ﴿٢٠﴾", "x6": "لَا ٱلشَّمۡسُ يَنۢبَغِي لَهَآ أَن تُدۡرِكَ ٱلۡقَمَرَ وَلَا ٱلَّيۡلُ سَابِقُ ٱلنَّهَارِۚ وَكُلّٞ فِي فَلَكٖ يَسۡبَحُونَ ﴿٤٠﴾", "x7": "وَأَوۡحَىٰ رَبُّكَ إِلَى ٱلنَّحۡلِ أَنِ ٱتَّخِذِي مِنَ ٱلۡجِبَالِ بُيُوتٗا وَمِنَ ٱلشَّجَرِ وَمِمَّا يَعۡرِشُونَ ﴿٦٨﴾ ثُمَّ كُلِي مِن كُلِّ ٱلثَّمَرَٰتِ فَٱسۡلُكِي سُبُلَ رَبِّكِ ذُلُلٗاۚ يَخۡرُجُ مِنۢ بُطُونِهَا شَرَابٞ مُّخۡتَلِفٌ أَلۡوَٰنُهُۥ فِيهِ شِفَآءٞ لِّلنَّاسِۚ إِنَّ فِي ذَٰلِكَ لَأٓيَةٗ لِّقَوۡمٖ يَتَفَكَّرُونَ ﴿٦٩﴾", "x8": "لَقَدۡ أَرۡسَلۡنَا رُسُلَنَا بِٱلۡبَيِّنَٰتِ وَأَنزَلۡنَا مَعَهُمُ ٱلۡكِتَٰبَ وَٱلۡمِيزَانَ لِيَقُومَ ٱلنَّاسُ بِٱلۡقِسۡطِۖ وَأَنزَلۡنَا ٱلۡحَدِيدَ فِيهِ بَأۡسٞ شَدِيدٞ وَمَنَٰفِعُ لِلنَّاسِ وَلِيَعۡلَمَ ٱللَّهُ مَن يَنصُرُهُۥ وَرُسُلَهُۥ بِٱلۡغَيۡبِۚ إِنَّ ٱللَّهَ قَوِيٌّ عَزِيزٞ ﴿٢٥﴾"});

/* ----- Flux : le fil qui remplace le scroll -----
   Défilement plein écran aimanté, une carte à la fois. 4 piliers équilibrés (foi, business, savoir, psychologie),
   une carte interactive toutes les 4 (quiz, vrai/faux, mot arabe), une carte « pause » toutes les 15.
   Les cartes jamais vues passent en premier ; le business du mois en cours est favorisé. */
const FXC = {
  coran: { bg: ['#14402F', '#06110D'], ac: '#E9C46A', lbl: 'Coran', shape: 'star' },
  hadith: { bg: ['#2A2A17', '#080C08'], ac: '#F0D9A0', lbl: 'Hadith', shape: 'orb' },
  biz: { bg: ['#10263A', '#050A10'], ac: '#8CC4FF', lbl: 'Business', shape: 'node' },
  sci: { bg: ['#141C3C', '#04060E'], ac: '#9DB8FF', lbl: 'Science', shape: 'atom' },
  cult: { bg: ['#34230F', '#0B0805'], ac: '#EBB978', lbl: 'Culture', shape: 'spark' },
  psy: { bg: ['#2B1734', '#09050B'], ac: '#D6A8F2', lbl: 'Psychologie', shape: 'ring' },
  quiz: { bg: ['#0F3029', '#040C0A'], ac: '#5ED3A8', lbl: 'Quiz', shape: 'spark' },
  vf: { bg: ['#12302E', '#040C0B'], ac: '#5ED3A8', lbl: 'Vrai ou faux', shape: 'ring' },
  ar: { bg: ['#1C2E14', '#070B05'], ac: '#C9E08A', lbl: 'Arabe du Coran', shape: 'star' },
  me: { bg: ['#123A2E', '#050F0B'], ac: '#E9C46A', lbl: 'Toi', shape: 'orb' },
  pause: { bg: ['#33290E', '#0B0904'], ac: '#F5D98E', lbl: 'Pause', shape: 'orb' },
  recit: { bg: ['#3A2912', '#0C0805'], ac: '#F2C98A', lbl: 'Récit', shape: 'spark' },
  fait: { bg: ['#0F3A33', '#040D0B'], ac: '#7FE0C8', lbl: 'Le savais-tu ?', shape: 'star' },
  savant: { bg: ['#1B2336', '#05070C'], ac: '#E6D3A3', lbl: 'Parole de savant', shape: 'orb' },
  poeme: { bg: ['#381423', '#0C0508'], ac: '#F0B7C4', lbl: 'Poésie', shape: 'star' },
  obs: { bg: ['#0E2E3A', '#03090C'], ac: '#8FD8E8', lbl: 'Le Coran invite à observer', shape: 'atom' }
};
const FX_ALL = {};
FX_CORAN.forEach(([id, ref, sura, fr, ex]) => { FX_ALL[id] = { id, t: 'coran', ref, sura, fr, ex, ar: FX_AR[id] }; });
FX_HADITH.forEach(([id, fr, src, ex]) => { FX_ALL[id] = { id, t: 'hadith', fr, src, ex }; });
FX_BIZ.forEach(([id, book, m, title, text, act]) => { FX_ALL[id] = { id, t: 'biz', book, m, title, text, act }; });
FX_SCI.forEach(([id, cat, title, text]) => { FX_ALL[id] = { id, t: cat, title, text }; });
FX_PSY.forEach(([id, title, text, act]) => { FX_ALL[id] = { id, t: 'psy', title, text, act }; });
FX_QUIZ.forEach(([id, q, opts, ok, ex]) => { FX_ALL[id] = { id, t: 'quiz', q, opts, ok, ex }; });
FX_VF.forEach(([id, q, ok, ex]) => { FX_ALL[id] = { id, t: 'vf', q, ok, ex }; });
FX_RECIT.forEach(([id, who, title, text, lesson, src]) => { FX_ALL[id] = { id, t: 'recit', who, title, text, lesson, src }; });
FX_FAIT.forEach(([id, title, text]) => { FX_ALL[id] = { id, t: 'fait', title, text }; });
FX_SAVANT.forEach(([id, by, q, ex]) => { FX_ALL[id] = { id, t: 'savant', by, q, ex }; });
FX_POEME.forEach(([id, by, ar, fr, ex]) => { FX_ALL[id] = { id, t: 'poeme', by, ar, fr, ex }; });
FX_OBS.forEach(([id, ref, sura, fr, sci]) => { FX_ALL[id] = { id, t: 'obs', ref, sura, fr, sci, ar: FX_AR[id] }; });
const FOI_W = [['coran', .24], ['hadith', .18], ['recit', .2], ['savant', .14], ['fait', .1], ['poeme', .07], ['obs', .07]];
function foiType() { let r = Math.random(); for (const [t, w] of FOI_W) { if ((r -= w) < 0) return t; } return 'coran'; }
const FX_POOL = t => Object.values(FX_ALL).filter(c => c.t === t);
const FXS = { n: 0, cards: [], order: [], io: null, cur: null, t0: 0, read: new Set(), tap: 0 };

function fluxDay() { const k = todayISO(); if (S.flux.day.d !== k) S.flux.day = { d: k, n: 0, q: 0, r: 0 }; return S.flux.day; }
function fxPick(type) {
  const inSess = new Set(FXS.cards.map(c => c.id));
  let pool = FX_POOL(type).filter(c => !inSess.has(c.id));
  if (!pool.length) pool = FX_POOL(type);
  const unseen = pool.filter(c => !S.flux.seen[c.id]);
  let cands = unseen.length ? unseen : pool.slice().sort((a, b) => S.flux.seen[a.id] - S.flux.seen[b.id]).slice(0, Math.max(3, Math.ceil(pool.length * .3)));
  if (type === 'biz') { const m = currentMonth(), w = cands.flatMap(c => (c.m === m || c.m === m + 1) ? [c, c, c] : [c]); cands = w; }
  return cands[Math.floor(Math.random() * cands.length)];
}
function fxMe() {
  const opts = [];
  const cm = currentMonth(), cur = MONTHS[cm - 1], left = cur.acq.length - modDone(cur);
  if (left) opts.push({ title: `Mois ${cm} · ${cur.title}`, text: `Il te reste ${left} acquis sur ${cur.acq.length} ce mois-ci. Une carte de moins, un acquis de plus ?`, go: 'parcours', btn: 'Ouvrir le parcours' });
  const st = streak(); if (st >= 2) opts.push({ title: `${st} jours de routine d'affilée`, text: 'Chaque jour qui passe rend le suivant plus facile. Ne casse pas la chaîne ce soir.', go: 'routine', btn: 'Voir ma routine' });
  const ph = phaseOf(S.body.phase), n = weekSessions().length; if (n < ph.perWeek) opts.push({ title: `${n}/${ph.perWeek} séances cette semaine`, text: `La prochaine, c'est la séance ${nextTpl(ph)} (${ph.name}). Le corps suit ce que l'esprit décide.`, go: 'entrainement', btn: 'Voir la séance' });
  const pts = nourDay(); opts.push({ title: `✦ ${pts} de lumière aujourd'hui`, text: pts >= nourAvg() ? 'Tu es au-dessus de ta moyenne. Continue sur cette lancée.' : `Ta moyenne est de ✦ ${Math.round(nourAvg())}. Il reste de la journée pour allumer quelque chose.`, go: 'orbite', btn: 'Revenir à l\'orbite' });
  const o = opts[Math.floor(Math.random() * opts.length)];
  return { id: 'me' + uid(), t: 'me', ...o };
}
function fxPause() {
  const k = todayISO(), n = S.faith.habits.length, dn = dayDone(k);
  let a;
  if (dn < n) a = { text: `Tu as coché ${dn} habitude${dn > 1 ? 's' : ''} de foi sur ${n} aujourd'hui.`, go: 'habitudes', btn: 'Ouvrir mes habitudes' };
  else if (!S.days[k]) a = { text: `Ta routine en est à ${todayBlocks()}/4 blocs. Un bloc, maintenant ?`, go: 'routine', btn: 'Faire un bloc' };
  else if (weekSessions().length < phaseOf(S.body.phase).perWeek && !isFastDay()) a = { text: 'Ta séance de la semaine t\'attend. 30 minutes suffisent.', go: 'entrainement', btn: 'Lancer la séance' };
  else a = { text: 'Tout est fait pour aujourd\'hui. Pose le téléphone, marche 10 minutes ou parle à quelqu\'un.', go: 'orbite', btn: 'Retour à l\'orbite' };
  return { id: 'pz' + uid(), t: 'pause', ...a };
}
function fxNext() {
  FXS.n++;
  const i = FXS.n;
  if (i % 15 === 0) return fxPause();
  if (i % 4 === 0) { const r = Math.random(); if (r < .25) { const w = Math.floor(Math.random() * WORDS.length); return { id: 'ar' + w + '-' + uid(), t: 'ar', w }; } return fxPick(r < .65 ? 'quiz' : 'vf'); }
  if (i % 11 === 0) return fxMe();
  if (!FXS.order.length) FXS.order = ['foi', 'biz', 'savoir', 'psy'].sort(() => Math.random() - .5);
  const p = FXS.order.shift();
  if (p === 'foi') return fxPick(foiType());
  if (p === 'savoir') return fxPick(Math.random() < .5 ? 'sci' : 'cult');
  return fxPick(p);
}
/* Éléments flottants, positions déterministes par carte */
function fxFloat(c) {
  const conf = FXC[c.t]; let seed = [...c.id].reduce((a, ch) => a + ch.charCodeAt(0) * 7, 13);
  const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
  const SH = {
    star: '<svg viewBox="-10 -10 20 20"><rect x="-6" y="-6" width="12" height="12"/><rect x="-6" y="-6" width="12" height="12" transform="rotate(45)"/></svg>',
    orb: '<i class="orb"></i>',
    node: '<svg viewBox="-10 -10 20 20"><circle r="2.2"/><path d="M0 0L8 -5M0 0L-6 7"/><circle cx="8" cy="-5" r="1.4"/><circle cx="-6" cy="7" r="1.4"/></svg>',
    atom: '<svg viewBox="-10 -10 20 20"><circle r="1.8"/><ellipse rx="8.5" ry="3.2"/><ellipse rx="8.5" ry="3.2" transform="rotate(60)"/><ellipse rx="8.5" ry="3.2" transform="rotate(-60)"/></svg>',
    spark: '<svg viewBox="-10 -10 20 20"><path d="M0-9C.8-2 2-.8 9 0 2 .8.8 2 0 9-.8 2-2 .8-9 0-2-.8-.8-2 0-9Z"/></svg>',
    ring: '<svg viewBox="-10 -10 20 20"><circle r="8"/><circle r="4.5"/></svg>'
  };
  let h = '';
  for (let k = 0; k < 9; k++) {
    const s = 14 + rnd() * 46, x = rnd() * 100, y = rnd() * 100, d = 14 + rnd() * 16, dl = -rnd() * 20, o = .1 + rnd() * .22, dx = (rnd() - .5) * 60, dy = -20 - rnd() * 50, rot = (rnd() - .5) * 180;
    h += `<span style="left:${x.toFixed(1)}%;top:${y.toFixed(1)}%;width:${s.toFixed(0)}px;height:${s.toFixed(0)}px;opacity:${o.toFixed(2)};--dx:${dx.toFixed(0)}px;--dy:${dy.toFixed(0)}px;--r:${rot.toFixed(0)}deg;animation-duration:${d.toFixed(1)}s;animation-delay:${dl.toFixed(1)}s">${SH[conf.shape]}</span>`;
  }
  return `<div class="fl" aria-hidden="true">${h}</div>`;
}
const fxWords = (txt, base = 0, cap = 36) => esc(txt).split(/(\s+)/).map((w, i) => /^\s+$/.test(w) ? w : `<span class="fw" style="--i:${Math.min(cap, base + i / 2)}">${w}</span>`).join('');
function fxCard(c) {
  const conf = FXC[c.t], saved = S.flux.saved.includes(c.id), savable = !['me', 'pause', 'ar'].includes(c.t) && !/^(me|pz)/.test(c.id);
  let body = '';
  if (c.t === 'coran') {
    const len = (c.ar || '').length, sz = len > 330 ? 's' : len > 180 ? 'm' : 'l';
    body = `<p class="fk">Coran · ${esc(c.sura)} ${c.ref}</p>
      <p class="far ${sz}" lang="ar" dir="rtl">${fxWords(c.ar || '', 0, 30)}</p>
      <p class="ffr">${fxWords(c.fr, 8)}</p>
      <button class="fexp" data-fexp>Comprendre</button><div class="fex"><p>${esc(c.ex)}</p></div>
      <p class="fnote">Sens rendu en français, pas une traduction officielle.</p>`;
  } else if (c.t === 'hadith') {
    body = `<p class="fk">Hadith</p><p class="fq">« ${fxWords(c.fr)} »</p><p class="fsrc">${esc(c.src)}</p>
      <button class="fexp" data-fexp>Méditer</button><div class="fex"><p>${esc(c.ex)}</p></div>`;
  } else if (c.t === 'recit') {
    body = `<p class="fk">Récit · ${esc(c.who)}</p><h2 class="ft">${fxWords(c.title)}</h2><p class="fb">${esc(c.text)}</p>
      <div class="fdo"><small>Leçon</small>${esc(c.lesson)}</div><p class="fsrc">${esc(c.src)}</p>`;
  } else if (c.t === 'fait') {
    body = `<p class="fk">Le savais-tu ? · Coran</p><h2 class="ft big">${fxWords(c.title)}</h2><p class="fb">${esc(c.text)}</p>`;
  } else if (c.t === 'savant') {
    body = `<p class="fk">Parole de savant</p><p class="fq">« ${fxWords(c.q)} »</p><p class="fsrc">${esc(c.by)}</p>
      <button class="fexp" data-fexp>Contexte</button><div class="fex"><p>${esc(c.ex)}</p></div>`;
  } else if (c.t === 'poeme') {
    body = `<p class="fk">Poésie · ${esc(c.by)}</p><div class="fpoem" lang="ar" dir="rtl">${c.ar.split('|').map(l => `<p>${l.split(' … ').map(h => `<span>${fxWords(h, 0, 20)}</span>`).join('')}</p>`).join('')}</div>
      <p class="ffr">${fxWords(c.fr, 6)}</p><button class="fexp" data-fexp>Contexte</button><div class="fex"><p>${esc(c.ex)}</p></div>`;
  } else if (c.t === 'obs') {
    const len = (c.ar || '').length, sz = len > 330 ? 's' : len > 180 ? 'm' : 'l';
    body = `<p class="fk">Le Coran invite à observer · ${esc(c.sura)} ${c.ref}</p><p class="far ${sz}" lang="ar" dir="rtl">${fxWords(c.ar || '', 0, 30)}</p>
      <p class="ffr">${fxWords(c.fr, 8)}</p><div class="fdo"><small>Ce qu'on sait aujourd'hui</small>${esc(c.sci)}</div>
      <p class="fnote">Le Coran est un livre de guidance : ces rapprochements sont des pistes de réflexion, pas des preuves.</p>`;
  } else if (c.t === 'biz') {
    body = `<p class="fk">Business · ${esc(c.book)}${c.m ? ` · mois ${c.m}` : ''}</p><h2 class="ft">${fxWords(c.title)}</h2><p class="fb">${esc(c.text)}</p>
      <div class="fdo"><small>À faire</small>${esc(c.act)}</div>`;
  } else if (c.t === 'sci' || c.t === 'cult') {
    body = `<p class="fk">${conf.lbl}</p><h2 class="ft big">${fxWords(c.title)}</h2><p class="fb">${esc(c.text)}</p>`;
  } else if (c.t === 'psy') {
    body = `<p class="fk">Psychologie humaine</p><h2 class="ft">${fxWords(c.title)}</h2><p class="fb">${esc(c.text)}</p><div class="fdo"><small>Observe</small>${esc(c.act)}</div>`;
  } else if (c.t === 'quiz') {
    body = `<p class="fk">Quiz</p><h2 class="ft">${fxWords(c.q)}</h2><div class="fopts">${c.opts.map((o, i) => `<button class="fopt" data-fq="${i}">${esc(o)}</button>`).join('')}</div><div class="fans"></div>`;
  } else if (c.t === 'vf') {
    body = `<p class="fk">Vrai ou faux ?</p><h2 class="ft">${fxWords(c.q)}</h2><div class="fvf"><button class="fopt" data-fv="1">Vrai</button><button class="fopt" data-fv="0">Faux</button></div><div class="fans"></div>`;
  } else if (c.t === 'ar') {
    const w = WORDS[c.w], sc = Math.min(3, S.words[c.w] || 0);
    body = `<p class="fk">Arabe du Coran · ${sc}/3</p><p class="farw" lang="ar" dir="rtl">${w[0]}</p><p class="fb" style="text-align:center">Tu connais le sens de ce mot ?</p>
      <div class="fans ar" hidden><p class="ft" style="text-align:center">${esc(w[1])}</p><p class="fb" style="text-align:center">Racine <span lang="ar" dir="rtl" style="font-family:var(--ar);font-size:1.3em">${w[2]}</span></p></div>
      <div class="fvf" data-fars><button class="fopt" data-far="reveal">Révéler</button></div>`;
  } else if (c.t === 'me') {
    body = `<p class="fk">Toi</p><h2 class="ft">${fxWords(c.title)}</h2><p class="fb">${esc(c.text)}</p><button class="btn" data-goto="${c.go}" style="margin-top:22px">${c.btn}</button>`;
  } else if (c.t === 'pause') {
    body = `<p class="fk">Pause · ${FXS.n} cartes</p><h2 class="ft big">${fxWords('Ton esprit est nourri. Et maintenant ?')}</h2><p class="fb">${esc(c.text)}</p>
      <button class="btn block" data-goto="${c.go}" style="margin-top:22px">${c.btn}</button><button class="btn block fcont" data-fnext style="margin-top:10px">Continuer le fil</button>`;
  }
  return `<article class="fc fc-${c.t}" data-fid="${c.id}" style="--bg1:${conf.bg[0]};--bg2:${conf.bg[1]};--ac:${conf.ac}">
    ${fxFloat(c)}<div class="fcin">${body}</div>
    ${savable ? `<div class="frail"><button data-fsave aria-pressed="${saved}" aria-label="Garder">${ICON.fstar}<span>${saved ? 'Gardé' : 'Garder'}</span></button><button data-fcopy aria-label="Copier">${ICON.fcopy}<span>Copier</span></button></div>` : ''}
  </article>`;
}
function vFlux() {
  FXS.n = 0; FXS.cards = []; FXS.order = []; FXS.read = new Set();
  for (let i = 0; i < 6; i++) FXS.cards.push(fxNext());
  const first = !S.flux.used;
  return `<div class="feed" id="feed">${FXS.cards.map(fxCard).join('')}</div>
    <div class="fhead"><div><p class="fh-t">Flux</p><div class="fprog" id="fprog">${Array.from({ length: 15 }, () => '<i></i>').join('')}</div></div>
      <div class="row" style="gap:2px"><button class="icon-btn" data-fsaved aria-label="Mes cartes gardées">${ICON.fstar}</button><button class="icon-btn" data-goto="orbite" aria-label="Fermer">${ICON.fclose}</button></div></div>
    ${first ? '<div class="fhint" id="fhint"><span>Glisse vers le haut</span><small>Touche deux fois une carte pour la garder</small></div>' : ''}`;
}
function fxCardOf(el) { return FXS.cards.find(c => c.id === el.dataset.fid); }
function bindFlux() {
  const feed = $('#feed'); if (!feed) return;
  if (FXS.io) FXS.io.disconnect();
  FXS.io = new IntersectionObserver(ents => ents.forEach(en => {
    const el = en.target;
    if (en.isIntersecting && en.intersectionRatio >= .6) {
      el.classList.add('in'); FXS.cur = el; FXS.t0 = performance.now();
      const c = fxCardOf(el); if (c && FX_ALL[c.id]) { S.flux.seen[c.id] = Date.now(); }
      const idx = [...feed.children].indexOf(el);
      $$('#fprog i').forEach((b, k) => b.classList.toggle('on', k <= (idx % 15)));
      if (idx >= feed.children.length - 3) fxAppend(5);
      if (idx > 0) { const h = $('#fhint'); if (h) { h.remove(); S.flux.used = true; } }
    } else if (!en.isIntersecting || en.intersectionRatio < .3) {
      if (el === FXS.cur && performance.now() - FXS.t0 > 2500 && !FXS.read.has(el.dataset.fid)) fxRead(el.dataset.fid);
      el.classList.remove('in');
    }
  }), { root: feed, threshold: [0, .3, .6] });
  [...feed.children].forEach(el => FXS.io.observe(el));
}
function fxAppend(n) {
  const feed = $('#feed'); if (!feed) return;
  for (let i = 0; i < n; i++) { const c = fxNext(); FXS.cards.push(c); feed.insertAdjacentHTML('beforeend', fxCard(c)); FXS.io.observe(feed.lastElementChild); }
}
function fxRead(id) {
  FXS.read.add(id); const d = fluxDay(); d.n++; save();
  if (d.n === 5 && !d.r) { d.r = 1; lastPt = { x: innerWidth / 2, y: innerHeight * .3 }; reward(3, { noBonus: true, msg: ['Rituel du jour', '5 cartes pour nourrir ton esprit plutôt que le vider.'] }); }
}
function fxSave(el) {
  const art = el.closest('.fc'), id = art.dataset.fid; if (!FX_ALL[id]) return;
  const i = S.flux.saved.indexOf(id), b = $('[data-fsave]', art);
  if (i >= 0) { S.flux.saved.splice(i, 1); if (b) { b.setAttribute('aria-pressed', 'false'); $('span', b).textContent = 'Garder'; } toast('Retiré de tes cartes'); }
  else { S.flux.saved.push(id); if (b) { b.setAttribute('aria-pressed', 'true'); $('span', b).textContent = 'Gardé'; } burst(14, '✦', false); chime(false); haptic(); }
  save();
}
function fxText(c) {
  if (c.t === 'coran') return `${c.ar}\n\n${c.fr}\n— Coran, ${c.sura} ${c.ref}`;
  if (c.t === 'hadith') return `« ${c.fr} »\n— ${c.src}`;
  if (c.t === 'quiz' || c.t === 'vf') return `${c.q}\n${c.ex}`;
  if (c.t === 'savant') return `« ${c.q} »\n— ${c.by}`;
  if (c.t === 'poeme') return `${c.ar.replace(/\|/g, '\n')}\n\n${c.fr}\n— ${c.by}`;
  if (c.t === 'obs') return `${c.ar}\n\n${c.fr}\n— Coran, ${c.sura} ${c.ref}\n\n${c.sci}`;
  if (c.t === 'recit') return `${c.title}\n\n${c.text}\n\n${c.lesson}\n— ${c.src}`;
  return `${c.title}\n\n${c.text}${c.book ? `\n— ${c.book}` : ''}`;
}
function openSaved() {
  const list = S.flux.saved.map(id => FX_ALL[id]).filter(Boolean).reverse();
  $('#ideasBody').innerHTML = `<div class="grab"></div><div class="sheet-top"><span style="width:60px"></span><h2 id="ideasTitle">Gardées</h2><button class="link-btn" data-close style="text-align:right">OK</button></div>
    ${list.length ? list.map(c => `<div class="idea"><p><span class="eyebrow" style="display:block;margin-bottom:4px">${FXC[c.t].lbl}${c.ref ? ' · ' + c.ref : c.src ? ' · ' + esc(c.src) : c.book ? ' · ' + esc(c.book) : c.by ? ' · ' + esc(c.by) : ''}</span>${esc(c.title || c.fr || c.q)}${c.text ? `<time>${esc(c.text)}</time>` : c.ex && c.t !== 'coran' && c.t !== 'hadith' ? '' : ''}</p><button class="icon-btn" data-funsave="${c.id}" aria-label="Retirer"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div>`).join('') : '<p class="empty">Touche deux fois une carte, ou ✦, pour la garder ici.</p>'}`;
  const d = $('#ideasSheet'); if (!d.open) d.showModal();
}
function fxAnswer(btn) {
  const art = btn.closest('.fc'), c = fxCardOf(art); if (!c || art.dataset.done) return;
  art.dataset.done = '1';
  const ok = c.t === 'quiz' ? Number(btn.dataset.fq) === c.ok : (btn.dataset.fv === '1') === c.ok;
  $$('.fopt', art).forEach(b => { const good = c.t === 'quiz' ? Number(b.dataset.fq) === c.ok : (b.dataset.fv === '1') === c.ok; b.classList.add(good ? 'good' : b === btn ? 'bad' : 'dim'); b.disabled = true; });
  const ans = $('.fans', art); ans.innerHTML = `<p class="fres">${ok ? 'Bien vu.' : 'Raté.'}</p><p class="fb">${esc(c.ex)}</p>`; ans.classList.add('on');
  if (ok) { const d = fluxDay(); if (d.q < 6) { d.q++; reward(1, { noBonus: true }); } else { haptic(); burst(10, '', false); } }
  else if (!reduceMotion()) btn.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(-7px)' }, { transform: 'translateX(7px)' }, { transform: 'translateX(0)' }], { duration: 280 });
}
function fxArabic(btn) {
  const art = btn.closest('.fc'), c = fxCardOf(art); if (!c) return;
  const act = btn.dataset.far;
  if (act === 'reveal') { $('.fans', art).hidden = false; $('.fans', art).classList.add('on'); $('[data-fars]', art).innerHTML = '<button class="fopt" data-far="knew">Je savais</button><button class="fopt" data-far="again">À revoir</button>'; return; }
  const knew = act === 'knew';
  S.words[c.w] = knew ? (S.words[c.w] || 0) + 1 : Math.max(0, (S.words[c.w] || 0) - 1); save();
  $('[data-fars]', art).innerHTML = `<p class="fres" style="width:100%;text-align:center">${knew ? `Maîtrise ${Math.min(3, S.words[c.w])}/3` : 'Il reviendra bientôt.'}</p>`;
  if (knew) { if (S.words[c.w] === 3) reward(2, { msg: ['Mot maîtrisé', `${WORDS[c.w][0]} · ${WORDS[c.w][1]}`] }); else { const d = fluxDay(); if (d.q < 6) { d.q++; reward(1, { noBonus: true }); } } }
}

/* =====================================================================
   13. RÉGLAGES, SAUVEGARDE, IMPORT
   ===================================================================== */
function getPath(o, p) { return p.split('.').reduce((a, k) => (a == null ? a : a[k]), o); }
function setPath(o, p, v) { const ks = p.split('.'), last = ks.pop(); ks.reduce((a, k) => (a[k] = a[k] || {}), o)[last] = v; }
const numCell = (path, label, unit, ph = '') => `<div class="cell"><label for="set-${path}">${label}</label><input class="r" type="text" inputmode="decimal" id="set-${path}" data-set="${path}" value="${esc(String(getPath(S.settings, path) ?? '').replace('.', ','))}" placeholder="${ph}"><span class="unit">${unit}</span></div>`;
function openSettings() {
  const st = S.settings;
  const backup = S.lastExport ? new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' }).format(new Date(S.lastExport)) : 'jamais';
  const empGroup = k => `<p class="gt"><span class="edot ${k}" style="margin-right:6px"></span>${EMP[k]}</p>
    <div class="group">
      ${k === 'gare' ? numCell('base.gare', 'Base mensuelle', 'h') : ''}
      ${numCell(`threshold.${k}`, 'Alerte hebdo au-delà de', 'h', 'aucune')}
    </div>
    ${k === 'gare' ? `<p class="gt">Compteur d'heures · Gare</p>
    <div class="group">
      <div class="cell"><label for="set-counterInit">Solde de départ</label><input class="r" type="text" id="set-counterInit" data-set="counterInit" value="${esc(S.settings.counterInit || '')}" placeholder="ex. 12h30 ou -4"><span class="unit">h</span></div>
      <div class="cell"><label for="set-counterStart">Démarre en</label><input type="month" id="set-counterStart" data-set="counterStart" value="${esc(S.settings.counterStart || '')}"></div>
    </div>
    <p class="hint">Chaque mois, tes heures au-delà de la base s'ajoutent au compteur, et celles en dessous (repos de rattrapage) se retirent. Mets en solde de départ celui de ta fiche de paie, avec un « - » s'il est négatif.</p>` : ''}`;
  $('#settingsBody').innerHTML = `<div class="grab"></div>
    <div class="sheet-top"><span style="width:60px"></span><h2 id="settingsTitle">Réglages</h2><button class="link-btn" data-close style="text-align:right">OK</button></div>
    <p class="gt">Sauvegarde</p>
    <div class="group">
      <button class="cell tap" data-export><span class="lbl">Exporter mes données</span><span class="small muted">${backup}</span>${ICON.chev}</button>
      <button class="cell tap" id="importBtn"><span class="lbl">Importer une sauvegarde</span>${ICON.chev}</button>
    </div>
    <p class="hint">Tout reste sur ce téléphone. Exporte une fois par semaine et range le fichier dans Fichiers ou iCloud Drive. <span id="persistInfo"></span></p>
    <div id="importConfirm"></div>
    ${empGroup('gare')}
    ${empGroup('pizza')}
    <p class="gt">Heures de nuit</p>
    <div class="group">
      <div class="cell"><label for="sNs">Début de la nuit</label><input type="time" id="sNs" value="${st.nightStart}"></div>
      <div class="cell"><label for="sNe">Fin de la nuit</label><input type="time" id="sNe" value="${st.nightEnd}"></div>
    </div>
    <p class="hint">21 h – 6 h par défaut. Adapte à ton contrat si besoin.</p>
    <p class="gt">Parcours</p>
    <div class="group"><div class="cell"><label for="sStart">Date de début</label><input type="date" id="sStart" value="${S.start}"></div></div>
    <p class="hint">Sert à calculer le mois en cours. Tes cases cochées sont conservées si tu la changes.</p>
    <p class="hint" style="margin-top:30px;text-align:center">Sayko de poche · v2.15 · fonctionne hors ligne</p>`;
  $('#settingsSheet').showModal();
  if (navigator.storage && navigator.storage.persisted) navigator.storage.persisted().then(p => { const el = $('#persistInfo'); if (el && p) el.textContent = 'Stockage protégé contre le nettoyage automatique.'; }).catch(() => {});
}
async function exportData() {
  const payload = { app: 'sayko-de-poche', version: 2, exportedAt: new Date().toISOString(), data: S };
  const ok = await deliverFile(`sayko-de-poche-${todayISO()}.json`, JSON.stringify(payload, null, 2), 'application/json');
  if (ok) { S.lastExport = Date.now(); save(true); toast('Sauvegarde exportée'); if (tab === 'argent') render(); if ($('#settingsSheet').open) openSettings(); }
}
let pendingImport = null;
function handleImport(text) {
  let j; try { j = JSON.parse(text); } catch (e) { showImport(null, 'Ce fichier n\'est pas un JSON lisible.'); return; }
  if (j && j.app === 'sayko-de-poche' && j.data) {
    const d = normalize(j.data); pendingImport = { mode: 'replace', data: d };
    showImport(`Sauvegarde du ${new Date(j.exportedAt).toLocaleDateString('fr-FR')} : ${d.shifts.length} services, ${Object.keys(d.checks).length} acquis cochés, ${Object.keys(d.days).length} jours de routine, ${d.ideas.length} idées. Elle remplacera les données actuelles.`);
  } else if (j && typeof j === 'object' && ('checks' in j || 'days' in j) && 'start' in j) {
    pendingImport = { mode: 'prepa', data: j };
    showImport(`Données de « Prépa Sayko » : ${Object.keys(j.checks || {}).length} acquis cochés, ${Object.keys(j.days || {}).length} jours de routine. Elles seront ajoutées à tes données actuelles (tes heures ne sont pas touchées).`);
  } else showImport(null, "Format non reconnu. Si c'est un export de l'ancienne Sayko de poche, garde ce fichier : la conversion sera ajoutée quand ton PC sera relié.");
}
function showImport(msg, err) {
  const el = $('#importConfirm'); if (!el) return;
  el.innerHTML = err ? `<div class="alert danger">${ICON.warn}<span>${esc(err)}</span></div>`
    : `<div class="confirm"><p class="small">${esc(msg)}</p><div class="row" style="margin-top:12px"><button class="btn sm grow" id="impYes">Importer</button><button class="btn sm quiet" id="impNo">Annuler</button></div></div>`;
}
async function applyImport() {
  if (!pendingImport) return;
  const before = JSON.parse(JSON.stringify(S));
  try { await idbSet('backup-before-import', before); } catch (e) {}
  if (pendingImport.mode === 'replace') S = pendingImport.data;
  else {
    const j = pendingImport.data;
    Object.assign(S.checks, j.checks || {});
    Object.keys(j.notes || {}).forEach(k => { if (j.notes[k] && !S.notes[k]) S.notes[k] = j.notes[k]; });
    Object.assign(S.days, j.days || {});
    Object.keys(j.words || {}).forEach(k => { S.words[k] = Math.max(S.words[k] || 0, j.words[k] || 0); });
    Object.keys(j.sourates || {}).forEach(k => { const name = OLD_SOURATES[Number(k)]; if (name && j.sourates[k]) S.sourates[name] = true; });
    if (j.tajwid) S.tajwid = { done: Math.max(S.tajwid.done, j.tajwid.done || 0), total: S.tajwid.total || j.tajwid.total || 0 };
    if (j.start) S.start = j.start;
  }
  pendingImport = null; save(true);
  $('#settingsSheet').close(); H.form = null; P.sel = null; render();
  toast('Import terminé', 'Annuler', () => { S = normalize(before); save(true); render(); }, 8000);
}

/* =====================================================================
   14. IDÉES
   ===================================================================== */
function openIdeas() {
  const list = S.ideas.slice().sort((a, b) => b.created - a.created);
  $('#ideasBody').innerHTML = `<div class="grab"></div>
    <div class="sheet-top"><span style="width:60px"></span><h2 id="ideasTitle">Idées</h2><button class="link-btn" data-close style="text-align:right">OK</button></div>
    <textarea id="ideaText" placeholder="Note une idée, tu la trieras plus tard…" style="min-height:90px"></textarea>
    <div class="row" style="margin-top:10px"><button class="btn grow" id="ideaAdd">Ajouter</button>${list.length ? '<button class="btn quiet" id="ideaCopy">Tout copier</button>' : ''}</div>
    <div style="margin-top:18px">${list.map(i => `<div class="idea"><p>${esc(i.text)}<time>${new Date(i.created).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}</time></p><button class="icon-btn" data-idel="${i.id}" aria-label="Supprimer cette idée"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div>`).join('') || '<p class="empty">Aucune idée pour l\'instant.</p>'}</div>`;
  const d = $('#ideasSheet'); if (!d.open) d.showModal();
}

/* ----- Cheveux : bouclés, mèches décolorées ----- */
const HAIR_WASH = [
  ['violet', 'Shampoing violet', '2 à 5 minutes, pas plus : il neutralise le jaune des mèches. Plus longtemps, il dessèche et peut teinter.'],
  ['apres', 'Après-shampoing', 'Démêle aux doigts ou au peigne large pendant qu\'il est posé. Rince à l\'eau tiède ou fraîche : l\'eau chaude ternit la couleur.'],
  ['masque', 'Masque', 'Cheveux secs et rêches : masque hydratant. Cheveux mous, élastiques ou qui cassent : masque réparateur (protéines). En cas de doute, alterne une semaine sur deux.'],
  ['leavein', 'Soin sans rinçage', 'Sur cheveux encore mouillés, avant de les sécher : il garde l\'hydratation et définit les boucles.'],
  ['sechage', 'Séchage doux', 'Presse avec une serviette microfibre ou un t-shirt, sans frotter. Diffuseur à air tiède, ou à l\'air libre.']
];
const HAIR_DAY = [['refresh', 'Rafraîchir les boucles : un peu d\'eau et de soin sans rinçage'], ['huile', 'Une goutte d\'huile sur les pointes'], ['nuit', 'Protéger la nuit : taie en satin ou bonnet']];
const HAIR_TIPS = [
  ['Pousse et volume', 'Les cheveux poussent d\'environ 1 cm par mois, depuis le cuir chevelu : aucun produit ne les fait pousser plus vite. Ce qui fait gagner de la longueur, c\'est d\'éviter la casse : couper les pointes abîmées toutes les 8 à 12 semaines, ne jamais brosser à sec, bien dormir, et des protéines, du fer et du zinc dans l\'assiette. Pour le volume des boucles : ne pas les brosser une fois sèches, sécher au diffuseur en commençant par les racines.'],
  ['La couleur des mèches', 'Le soleil, le chlore, le sel et l\'eau très chaude ternissent et jaunissent la décoloration. Casquette au soleil, rinçage à l\'eau claire après la mer ou la piscine, eau tiède au lavage, et le shampoing violet une fois par semaine seulement.'],
  ['La chaleur', 'Les mèches décolorées sont déjà fragilisées. Protecteur thermique avant toute chaleur, diffuseur à air tiède, et le moins possible de lisseur ou de fer à boucler.'],
  ['Les gestes à éviter', 'Frotter avec une serviette éponge, brosser à sec, attacher serré sur cheveux mouillés, dormir sur une taie en coton, et redécolorer des longueurs déjà décolorées. Pour une retouche, un coiffeur ne décolore que la repousse.']
];
function hairS() { const h = S.body.hair = S.body.hair && typeof S.body.hair === 'object' ? S.body.hair : {}; ['log', 'wk', 'day'].forEach(k => { if (!h[k] || typeof h[k] !== 'object') h[k] = {}; }); return h; }
const hairDays = id => { const l = hairS().log[id] || [], x = l[l.length - 1]; return x ? Math.round((parseDate(todayISO()) - parseDate(x)) / 864e5) : null; };
function hairRing(id, name, max) {
  const days = hairDays(id), left = days == null ? 0 : Math.max(0, 1 - days / max), col = days == null || days >= max ? 'warn' : 'gold';
  return `<button class="fit" data-hairg="${id}" aria-label="${name} : ${days == null ? 'jamais noté' : days === 0 ? 'fait aujourd\'hui' : `il y a ${days} jours`}. Toucher quand c'est fait.">
    <svg viewBox="-34 -34 68 68" aria-hidden="true"><circle r="28" fill="none" stroke="var(--raise)" stroke-width="6"/><circle r="28" fill="none" stroke="var(--${col})" stroke-width="6" stroke-linecap="round" transform="rotate(-90)" ${ringDash(28, left)}/>
      <text y="${days == null ? 5 : 2}" text-anchor="middle" style="font:400 ${days == null ? 18 : 20}px var(--serif);fill:var(--ink)">${days == null ? '—' : days}</text>${days == null ? '' : '<text y="14" text-anchor="middle" style="font-size:7.5px;font-weight:700;letter-spacing:.08em;fill:var(--muted)">JOURS</text>'}</svg>
    ${name}<small>${days == null ? 'à noter' : days >= max ? 'c\'est le moment' : `dans ${max - days} j`}</small></button>`;
}
function hairBlock() {
  const h = hairS(), wk = iso(mondayOf(new Date())), w = h.wk[wk] || {}, k = todayISO(), d = h.day[k] || {};
  const wn = HAIR_WASH.filter(x => w[x[0]]).length, dn = HAIR_DAY.filter(x => d[x[0]]).length;
  return `<section>
    <div class="row between" style="align-items:flex-end;margin-bottom:6px"><h2 style="margin:0">Mes cheveux</h2><p class="small muted" style="margin:0">bouclés, mèches décolorées</p></div>
    <div class="fitra">${hairRing('soin', 'Jour de soin', 7)}${hairRing('coupe', 'Pointes', 70)}</div>
    <p class="eyebrow" style="margin-top:18px">Jour de soin · une fois par semaine <span class="num" style="float:right;letter-spacing:0">${wn}/${HAIR_WASH.length}</span></p>
    <div class="checks">${HAIR_WASH.map(([id, t, s]) => `<label class="check"><input type="checkbox" data-hairw="${id}" ${w[id] ? 'checked' : ''}><span class="box">${ICON.tick}</span><span class="txt">${t}<span class="small muted" style="display:block">${s}</span></span></label>`).join('')}</div>
    <p class="eyebrow" style="margin-top:18px">Chaque jour <span class="num" style="float:right;letter-spacing:0">${dn}/${HAIR_DAY.length}</span></p>
    <div class="checks">${HAIR_DAY.map(([id, t]) => checkbox('hd-' + id, t, 'data-haird', !!d[id])).join('')}</div>
    ${HAIR_TIPS.map(([t, s]) => `<details class="hadv"><summary>${t}</summary><p class="small">${s}</p></details>`).join('')}
    <p class="hint">La jauge « Pointes » se remet à zéro quand tu passes chez le coiffeur : vise toutes les 8 à 12 semaines.</p>
  </section>`;
}
function hairClick(t) {
  const el = t.closest('[data-hairg]'); if (!el) return false;
  const id = el.dataset.hairg, h = hairS(), l = h.log[id] = h.log[id] || [], k = todayISO();
  if (l[l.length - 1] === k) { l.pop(); save(); render(); unreward(id === 'coupe' ? 4 : 2); toast('Annulé'); return true; }
  l.push(k); if (l.length > 12) l.shift(); save(); const sy = window.scrollY; render(); window.scrollTo(0, sy);
  reward(id === 'coupe' ? 4 : 2, id === 'coupe' ? { msg: ['Pointes coupées', 'Moins de casse, plus de longueur qui tient.'] } : {}); return true;
}
function hairChange(t) {
  const h = hairS();
  if (t.dataset.hairw) {
    const wk = iso(mondayOf(new Date())), w = h.wk[wk] = h.wk[wk] || {}, was = HAIR_WASH.every(x => w[x[0]]);
    if (t.checked) w[t.dataset.hairw] = true; else delete w[t.dataset.hairw];
    const full = HAIR_WASH.every(x => w[x[0]]), l = h.log.soin = h.log.soin || [], k = todayISO();
    if (full && !was && l[l.length - 1] !== k) l.push(k);
    if (!full && was && l[l.length - 1] === k) l.pop();
    save(); const sy = window.scrollY; render(); window.scrollTo(0, sy);
    if (t.checked) reward(full && !was ? 6 : 1, { msg: full && !was ? ['Jour de soin complet', 'Tes boucles et tes mèches te disent merci. Prochain rendez-vous dans une semaine.'] : null }); else unreward(1);
    return true;
  }
  if (t.dataset.haird) {
    const id = t.dataset.haird.slice(3), k = todayISO(), d = h.day[k] = h.day[k] || {}, was = HAIR_DAY.every(x => d[x[0]]);
    if (t.checked) d[id] = true; else delete d[id];
    const full = HAIR_DAY.every(x => d[x[0]]);
    save(); if (t.checked) reward(full && !was ? 3 : 1); else unreward(1);
    return true;
  }
  return false;
}

/* =====================================================================
   DHIKR — compteur libre, sans objectif imposé
   Lumière : régularité d'abord (premier 33 du jour + série), puis longueur
   de la séance (100, 300, 1 000), puis total par formule (1 000, 10 000,
   100 000), et un rythme posé (touchers à moins de 180 ms ignorés).
   ===================================================================== */
const DHK = [
  ['subhan', 'سُبْحَانَ اللَّهِ', 'SubhanAllah', 'Gloire à Allah'],
  ['hamd', 'الْحَمْدُ لِلَّهِ', 'Alhamdulillah', 'Louange à Allah'],
  ['akbar', 'اللَّهُ أَكْبَرُ', 'Allahu akbar', 'Allah est le plus grand'],
  ['tahlil', 'لَا إِلَٰهَ إِلَّا اللَّهُ', 'La ilaha illa Allah', 'Nulle divinité en dehors d\'Allah'],
  ['istighfar', 'أَسْتَغْفِرُ اللَّهَ', 'Astaghfirullah', 'Je demande pardon à Allah'],
  ['salawat', 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ', 'Allahumma salli ʿala Muhammad', 'Ô Allah, prie sur Muhammad ﷺ'],
  ['hawqala', 'لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ', 'La hawla wa la quwwata illa billah', 'Il n\'y a de force ni de puissance que par Allah'],
  ['bihamdihi', 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ', 'SubhanAllahi wa bihamdihi', 'Gloire et louange à Allah']
];
const DKS = { n: 0, id: null, last: 0, start: 0, paid: {}, fast: 0, t: null, form: false };
function dk() { const d = S.dhikr = S.dhikr && typeof S.dhikr === 'object' ? S.dhikr : {}; d.cur = d.cur || 'subhan'; ['custom'].forEach(k => { if (!Array.isArray(d[k])) d[k] = []; }); ['days', 'total', 'ms', 'rg'].forEach(k => { if (!d[k] || typeof d[k] !== 'object') d[k] = {}; }); return d; }
const dkList = () => DHK.concat(dk().custom.map(c => [c.id, c.ar || '', c.tr, c.fr || '', true]));
const dkF = id => dkList().find(f => f[0] === id) || DHK[0];
const dkDay = (k = todayISO()) => Object.values(dk().days[k] || {}).reduce((a, b) => a + b, 0);
function dkStreak() { let n = 0; for (let i = dkDay() >= 33 ? 0 : 1; i < 800; i++) { if (dkDay(iso(addDays(new Date(), -i))) >= 33) n++; else break; } return n; }
function vDhikr() {
  const d = dk(), f = dkF(d.cur), k = todayISO(), st = dkStreak(), td = dkDay(k);
  const sess = DKS.id === d.cur && Date.now() - DKS.last < 600000 ? DKS.n : 0;
  const tot = Object.entries(d.total).filter(([, n]) => n).sort((a, b) => b[1] - a[1]).slice(0, 5);
  return `${foiTop('dhikr')}
  <div class="dkchips" role="group" aria-label="Formule">${dkList().map(x => `<button class="chip" data-dkf="${x[0]}" aria-pressed="${x[0] === d.cur}">${esc(x[2])}</button>`).join('')}<button class="chip" data-dkadd aria-pressed="${DKS.form}">+ Ma formule</button></div>
  ${DKS.form ? `<div class="dkform"><input id="dkTr" placeholder="Phonétique (obligatoire)"><input id="dkAr" placeholder="En arabe (facultatif)" dir="rtl" lang="ar"><input id="dkFr" placeholder="Sens (facultatif)"><button class="btn sm" data-dksave>Ajouter</button></div>` : ''}
  <div class="dkf">${f[1] ? `<p class="ar" lang="ar" dir="rtl">${f[1]}</p>` : ''}<p class="dktr">${esc(f[2])}</p>${f[3] ? `<p class="small muted">${esc(f[3])}</p>` : ''}</div>
  <button class="dktap" id="dkTap" aria-label="Compter un ${esc(f[2])}">
    <svg viewBox="-60 -60 120 120" aria-hidden="true"><circle r="52" fill="none" stroke="var(--raise)" stroke-width="5"/><circle id="dkRing" r="52" fill="none" stroke="var(--gold)" stroke-width="5" stroke-linecap="round" transform="rotate(-90)" ${ringDash(52, (sess % 33) / 33)}/></svg>
    <span><b id="dkN" class="num">${sess}</b><small id="dkC">${sess ? `${Math.floor(sess / 33)} × 33` : 'Touche pour compter'}</small></span>
  </button>
  <div class="dkstats"><div><b class="num" id="dkD">${td}</b><span>aujourd'hui</span></div><div><b class="num">${st}</b><span>jour${st > 1 ? 's' : ''} d'affilée</span></div><div><b class="num" id="dkT">${(d.total[d.cur] || 0).toLocaleString('fr-FR')}</b><span>au total</span></div></div>
  <div class="row" style="justify-content:center;gap:18px;margin-top:6px"><button class="link-btn small" data-dkreset>Nouvelle séance</button>${f[4] ? `<button class="link-btn small" data-dkdel="${f[0]}" style="color:var(--muted)">Supprimer cette formule</button>` : ''}</div>
  <p class="hint" style="text-align:center">Chaque 33 allume ✦ 1. Ton premier 33 de la journée rapporte le plus : c'est la régularité qui compte.</p>
  ${tot.length ? `<section><h2>Tes totaux</h2><div class="group">${tot.map(([id, n]) => { const nx = [1000, 10000, 100000].find(m => n < m); return `<div class="cell"><span class="lbl">${esc(dkF(id)[2])}</span><span class="small muted num">${n.toLocaleString('fr-FR')}${nx ? ` · prochain palier ${nx.toLocaleString('fr-FR')}` : ''}</span></div>`; }).join('')}</div></section>` : ''}`;
}
function dkPaint() {
  const d = dk(), n = DKS.n, r = $('#dkRing');
  const set = (id, v) => { const e = $(id); if (e) e.textContent = v; };
  set('#dkN', n); set('#dkC', n ? `${Math.floor(n / 33)} × 33` : 'Touche pour compter'); set('#dkD', dkDay()); set('#dkT', (d.total[d.cur] || 0).toLocaleString('fr-FR'));
  if (r) { const c = 2 * Math.PI * 52; r.style.strokeDasharray = c; r.style.strokeDashoffset = c * (1 - (n % 33) / 33); }
}
function dkTap(e) {
  if (e) e.preventDefault();
  const d = dk(), now = Date.now(), k = todayISO();
  if (now - DKS.last < 180) return;
  if (DKS.id !== d.cur || now - DKS.last > 600000) Object.assign(DKS, { n: 0, id: d.cur, start: now, paid: {}, fast: 0 });
  if (DKS.last && now - DKS.last < 350) DKS.fast++;
  DKS.last = now; DKS.n++;
  const day = d.days[k] = d.days[k] || {}; day[d.cur] = (day[d.cur] || 0) + 1; d.total[d.cur] = (d.total[d.cur] || 0) + 1;
  const n = DKS.n, tot = d.total[d.cur], el = $('#dkTap');
  if (el && !reduceMotion()) { el.classList.remove('hit'); void el.offsetWidth; el.classList.add('hit'); }
  dkPaint();
  clearTimeout(DKS.t); DKS.t = setTimeout(() => save(), 900);
  if (el) { const b = el.getBoundingClientRect(); lastPt = { x: b.left + b.width / 2, y: b.top + b.height / 2 }; }
  /* 2. Longueur de la séance (100, 300, 1 000 : pas des multiples de 33, donc vérifiés d'abord) */
  const S3 = { 100: 3, 300: 6, 1000: 12 };
  if (S3[n] && !DKS.paid[n]) { DKS.paid[n] = 1; const calm = (DKS.fast / n) < .25; save(); try { navigator.vibrate && navigator.vibrate([18, 50, 18, 50, 18]); } catch (x) {} reward(S3[n] + (calm ? 1 : 0), { big: n >= 300, noBonus: true, msg: n >= 300 ? [`${n} dans une même séance`, 'Celui qui dit « SubhanAllahi wa bihamdihi » cent fois par jour, ses péchés lui sont effacés, même s\'ils sont comme l\'écume de la mer.', 'Bukhari 6405'] : calm ? ['Un rythme posé', 'Cent, sans te presser. C\'est la présence qui compte.'] : null }); return; }
  /* 3. Total par formule */
  const M = { 1000: 5, 10000: 10, 100000: 20 };
  if (M[tot] && !d.ms[d.cur + ':' + tot]) { d.ms[d.cur + ':' + tot] = 1; save(); reward(M[tot], { big: tot >= 10000, noBonus: true, msg: [`${tot.toLocaleString('fr-FR')} ${dkF(d.cur)[2]}`, 'N\'est-ce point par l\'évocation d\'Allah que les cœurs se tranquillisent ?', 'Coran 13:28'] }); return; }
  if (n % 33) { try { navigator.vibrate && navigator.vibrate(6); } catch (x) {} return; }
  try { navigator.vibrate && navigator.vibrate([18, 50, 18]); } catch (x) {}
  /* 1. Régularité : le premier 33 de la journée */
  if (dkDay(k) >= 33 && !d.rg[k]) {
    d.rg[k] = 1; const st = dkStreak(), big = [3, 7, 14, 30, 40, 100, 365].includes(st);
    save(); reward(3 + Math.min(st - 1, 7), { big, noBonus: true, msg: big ? [`${st} jours de dhikr d'affilée`, 'Les actes les plus aimés d\'Allah sont les plus réguliers, même s\'ils sont peu nombreux.', 'Bukhari 6464, Muslim 783'] : st > 1 ? ['Ta série continue', `${st} jours d'affilée. Ton premier 33 est fait.`] : null });
    return;
  }
  /* sinon, la petite lumière de chaque 33 */
  nourAdd(1); save(); refreshSun(); burst(6, '+1 ✦', false); chime(false);
}
function dkClick(t) {
  const c = s => t.closest(s); let el; const d = dk();
  if ((el = c('[data-dkf]'))) { d.cur = el.dataset.dkf; DKS.form = false; save(); render(); return true; }
  if (c('[data-dkadd]')) { DKS.form = !DKS.form; render(); setTimeout(() => { const i = $('#dkTr'); i && i.focus(); }, 50); return true; }
  if (c('[data-dksave]')) { const tr = ($('#dkTr').value || '').trim(); if (!tr) { toast('Écris au moins la phonétique.'); return true; } const id = 'c' + uid(); d.custom.push({ id, tr: tr.slice(0, 80), ar: ($('#dkAr').value || '').trim().slice(0, 120), fr: ($('#dkFr').value || '').trim().slice(0, 120) }); d.cur = id; DKS.form = false; save(); render(); return true; }
  if ((el = c('[data-dkdel]'))) { const id = el.dataset.dkdel; d.custom = d.custom.filter(x => x.id !== id); d.cur = 'subhan'; save(); render(); return true; }
  if (c('[data-dkreset]')) { Object.assign(DKS, { n: 0, id: d.cur, last: 0, paid: {}, fast: 0 }); render(); return true; }
  return false;
}

/* =====================================================================
   15. RENDU & NAVIGATION
   ===================================================================== */
const TABS = ['orbite', 'flux', 'parcours', 'foi', 'corps', 'routine', 'argent', 'business'];
const CVIEWS = ['entrainement', 'nutrition', 'soin'];
let tab = 'orbite', missedDismissed = false;
function render(animate) {
  const app = $('#app');
  stopOrbit();
  app.className = animate ? 'view' : '';
  checkUnlocks();
  document.documentElement.classList.toggle('flux-on', tab === 'flux');
  if (tab !== 'flux' && FXS.io) { FXS.io.disconnect(); FXS.io = null; }
  app.innerHTML = { orbite: vOrbite, flux: vFlux, parcours: vParcours, foi: () => F.view === 'arabe' ? vArabe() : F.view === 'dhikr' ? vDhikr() : vHabits(), corps: () => C.view === 'nutrition' ? vNutrition() : C.view === 'soin' ? vSoin() : vTraining(), routine: vRoutine, argent: () => A.view === 'heures' ? vHeures() : vBudget(), business: vBusiness, z: () => window.__z ? window.__z.view() : vOrbite() }[tab]();
  coreGlyph();
  if (tab === 'orbite') startOrbit();
  if ((tab === 'orbite' || tab === 'foi') && !missedDismissed) setTimeout(missedOverlay, 700);
  if (tab === 'flux') bindFlux();
  if (tab === 'parcours') bindParcours();
  if (tab === 'foi' && F.view === 'arabe') { if (quiz && !quiz.answered) drawQuiz(); else nextQuiz(); }
  if (tab === 'foi' && F.view === 'dhikr') { const b = $('#dkTap'); if (b) b.addEventListener('pointerdown', dkTap); }
  if (tab === 'argent' && A.view === 'heures') bindDial();
}
function setAView(v) { A.view = v; try { localStorage.setItem('sdp-argent-view', v); } catch (e) {} }
function setFView(v) { F.view = v; try { localStorage.setItem('sdp-foi-view', v); } catch (e) {} }
function go(t) {
  if (tab === 'z') zLock();
  if (CVIEWS.includes(t)) { setCView(t); if (tab === 'corps') { render(); window.scrollTo(0, 0); return; } t = 'corps'; }
  if (t === 'arabe' || t === 'habitudes' || t === 'dhikr') { setFView(t); if (tab === 'foi') { render(); window.scrollTo(0, 0); return; } t = 'foi'; }
  if (t === 'heures' || t === 'budget') { if (tab === 'argent' && A.view === 'heures' && $('#fDate')) readForm(); setAView(t); if (tab === 'argent') { render(); window.scrollTo(0, 0); return; } t = 'argent'; }
  if (!TABS.includes(t)) return;
  if (t === tab) { window.scrollTo({ top: 0, behavior: reduceMotion() ? 'auto' : 'smooth' }); return; }
  if (tab === 'argent' && A.view === 'heures' && $('#fDate')) readForm();
  tab = t;
  try { localStorage.setItem('sdp-tab', t); } catch (e) {}
  history.replaceState(null, '', '#' + t);
  const swap = () => { render(true); window.scrollTo(0, 0); };
  if (document.startViewTransition && !reduceMotion()) document.startViewTransition(swap); else swap();
}

/* ----- Navigation : le noyau et sa roue -----
   Toucher le noyau : la roue s'ouvre, on touche un module.
   Appuyer et glisser : on vise un module et on relâche pour y aller.
   Appui long, ou toucher le noyau quand la roue est ouverte : retour à l'orbite. */
const NAV = [['foi', 'Foi'], ['corps', 'Corps'], ['routine', 'Routine'], ['flux', 'Flux'], ['parcours', 'Parcours'], ['argent', 'Argent'], ['business', 'Business']];
const NAV_A0 = -80, NAV_SPAN = 160;
const W8 = { open: false, hi: null, press: null, lp: 0 };
const navAngle = i => NAV_A0 + NAV_SPAN / (NAV.length - 1) * i;
function coreGlyph() { $('#coreIc').innerHTML = GLYPH[tab === 'orbite' ? 'orbite' : tab] || GLYPH.orbite; }
function buildWheel() {
  const R = Math.max(112, Math.min(150, innerWidth / 2 - 38));
  $('#wheelItems').innerHTML = NAV.map(([k, n], i) => {
    const [x, y] = polar(R, navAngle(i)), locked = k === 'business' && !S.unlocks.business;
    return `<button class="w-item ${k === tab ? 'cur' : ''} ${locked ? 'locked' : ''}" data-nav="${k}" style="--x:${x.toFixed(1)}px;--y:${y.toFixed(1)}px;--i:${i}" aria-label="${n}${locked ? ', verrouillé' : ''}${k === tab ? ', ouvert' : ''}"><svg viewBox="0 0 24 24" aria-hidden="true">${locked ? GLYPH.lock : GLYPH[k]}</svg><span class="w-lbl">${n}</span></button>`;
  }).join('');
  $('#wheelHint').textContent = tab === 'orbite' ? 'Où va-t-on ?' : 'Noyau : orbite';
}
function openWheel() {
  if (W8.open) return;
  buildWheel(); const w = $('#wheel'); w.hidden = false; W8.open = true;
  requestAnimationFrame(() => requestAnimationFrame(() => w.classList.add('open')));
  $('#core').setAttribute('aria-expanded', 'true'); haptic();
}
function closeWheel() {
  if (!W8.open) return;
  const w = $('#wheel'); w.classList.remove('open'); W8.open = false; W8.hi = null;
  $('#core').setAttribute('aria-expanded', 'false');
  setTimeout(() => { if (!W8.open) w.hidden = true; }, reduceMotion() ? 0 : 280);
}
function highlight(k) {
  if (W8.hi === k) return; W8.hi = k;
  $$('.w-item').forEach(b => b.classList.toggle('hi', b.dataset.nav === k));
  $('#wheelHint').textContent = k ? NAV.find(n => n[0] === k)[1] : (tab === 'orbite' ? 'Où va-t-on ?' : 'Noyau : orbite');
  if (k) haptic();
}
(function bindCore() {
  const core = $('#core');
  core.addEventListener('pointerdown', e => {
    if (e.button > 0) return;
    e.preventDefault();
    const r = core.getBoundingClientRect();
    W8.press = { x: e.clientX, y: e.clientY, cx: r.left + r.width / 2, cy: r.top + r.height / 2, moved: false, wasOpen: W8.open };
    try { core.setPointerCapture(e.pointerId); } catch (err) {}
    if (!W8.open) openWheel();
    clearTimeout(W8.lp);
    W8.lp = setTimeout(() => { const p = W8.press; if (p && !p.moved) { W8.press = null; closeWheel(); go('orbite'); } }, 520);
  });
  core.addEventListener('pointermove', e => {
    const p = W8.press; if (!p) return;
    if (!p.moved && Math.hypot(e.clientX - p.x, e.clientY - p.y) > 12) { p.moved = true; clearTimeout(W8.lp); }
    if (!p.moved) return;
    const dx = e.clientX - p.cx, dy = e.clientY - p.cy;
    if (Math.hypot(dx, dy) < 56) { highlight(null); return; }
    const ang = Math.atan2(dx, -dy) * 180 / Math.PI;
    let best = null, bd = 999;
    NAV.forEach(([k], i) => { const d = Math.abs(navAngle(i) - ang); if (d < bd) { bd = d; best = k; } });
    highlight(bd < 28 ? best : null);
  });
  core.addEventListener('pointerup', () => {
    clearTimeout(W8.lp); const p = W8.press; W8.press = null; if (!p) return;
    if (p.moved) { const k = W8.hi; if (k) { closeWheel(); go(k); } return; }
    if (p.wasOpen) { closeWheel(); go('orbite'); }
  });
  core.addEventListener('pointercancel', () => { clearTimeout(W8.lp); W8.press = null; });
  core.addEventListener('contextmenu', e => e.preventDefault());
  // Clavier et lecteurs d'écran (pas de pointeur)
  core.addEventListener('click', e => { if (e.detail !== 0) return; if (W8.open) closeWheel(); else { openWheel(); const f = $('.w-item'); if (f) setTimeout(() => f.focus(), 60); } });
  $('#wheel').addEventListener('click', e => {
    const b = e.target.closest('[data-nav]');
    if (b) { const k = b.dataset.nav; closeWheel(); go(k); return; }
    if (!e.target.closest('#core')) closeWheel();
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && W8.open) { closeWheel(); core.focus(); } });
})();
setInterval(() => { const el = $('#sessEl'); if (el && S.body.active) el.textContent = sessLine(); }, 15000);

document.addEventListener('click', e => {
  const t = e.target, c = sel => t.closest(sel);
  let el;
  if (dkClick(t)) return;
  if (hairClick(t)) return;
  if ((el = c('[data-open]'))) { el.dataset.open === 'settings' ? openSettings() : openIdeas(); return; }
  // Foi
  if ((el = c('[data-fview]'))) { go(el.dataset.fview); return; }
  if ((el = c('[data-fstep]'))) { F.day = iso(addDays(parseDate(F.day), Number(el.dataset.fstep))); render(); return; }
  if ((el = c('[data-fday]'))) { F.day = el.dataset.fday; render(); return; }
  if ((el = c('[data-habit]'))) { toggleHabit(el.dataset.habit); return; }
  if ((el = c('[data-prayer]'))) { if (c('.ppick')) return; openPrayerPick(el); return; }
  if ((el = c('[data-pway]'))) { const id = el.dataset.pid, v = el.dataset.pway; closePrayerPick(); setPrayer(F.day, id, v || null); return; }
  if (!c('.ppick') && $('.ppick')) closePrayerPick();
  if ((el = c('[data-mway]'))) {
    const row = el.closest('.mrow'), v = el.dataset.mway; if (row.dataset.done) return;
    row.dataset.done = '1'; $$('button', row).forEach(b => { b.disabled = true; b.classList.toggle('on', b === el); });
    setPrayer(row.dataset.mk, row.dataset.mid, v);
    if ($$('.mrow').every(r => r.dataset.done)) { const b = $('[data-mdone]'); if (b) b.textContent = 'Continuer'; }
    return;
  }
  if (c('[data-mdone]')) { const m = $('#missed'); if (m) { m.classList.add('out'); setTimeout(() => m.remove(), 300); } if ($$('.mrow').some(r => !r.dataset.done)) missedDismissed = true; return; }
  if ((el = c('[data-poff]'))) { const [id, dlt] = el.dataset.poff.split('.'), o = ptConf().off; o[id] = (o[id] || 0) + Number(dlt === '-1' ? -1 : 1); save(); openFaithSetup(); return; }
  if (c('[data-fsetup]')) { openFaithSetup(); return; }
  if (c('[data-hadd]')) { const v = $('#hNew').value.trim(); if (!v) return; S.faith.habits.push({ id: 'h-' + uid(), name: v }); save(); openFaithSetup(); return; }
  if ((el = c('[data-hdel]'))) { S.faith.habits = S.faith.habits.filter(h => h.id !== el.dataset.hdel); save(); openFaithSetup(); return; }
  // Fondations & investissement
  if (c('[data-debtpay]')) {
    const b = budgetOf(A.month), left = b.debt.plan - b.debt.done;
    if (left > 0) { commitKind('debt', left); return; }
    $('#debtCustom').innerHTML = `<div class="confirm"><p class="small">Combien rembourses-tu ?</p><div class="row" style="margin-top:10px"><input id="debtAmt" inputmode="decimal" class="famt num" style="flex:1;text-align:left" placeholder="Montant"><button class="btn sm" data-debtok>Valider</button></div></div>`; $('#debtAmt').focus(); return;
  }
  if (c('[data-openinc]')) { const d = $('#incDetails'); if (d) { d.open = true; A.open.add('inc'); d.scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth', block: 'start' }); const f = d.querySelector('[data-incval]'); if (f) setTimeout(() => f.focus(), 350); } return; }
  if (c('[data-debtcustom]')) { $('#debtCustom').innerHTML = `<div class="confirm"><p class="small">Combien as-tu remboursé ?</p><div class="row" style="margin-top:10px"><input id="debtAmt" inputmode="decimal" class="famt num" style="flex:1;text-align:left" placeholder="Montant"><button class="btn sm" data-debtok>Valider</button></div></div>`; $('#debtAmt').focus(); return; }
  if (c('[data-planedit]')) {
    const b = budgetOf(A.month);
    $('#planEdit').innerHTML = `<div class="srow" style="margin-top:12px"><input id="plDebt" inputmode="decimal" value="${b.plan.debt}" placeholder="Dette €" aria-label="Dette ce mois" style="flex:1"><input id="plSafe" inputmode="decimal" value="${b.plan.safety}" placeholder="Épargne €" aria-label="Épargne ce mois" style="flex:1"><button class="btn sm" data-plansave>OK</button></div><p class="hint" style="margin-top:0">Ne vaut que pour ${monthLabel(A.month)}. Le mois prochain, l'app recalcule en tenant compte de ce que tu as vraiment versé.</p>`;
    $('#plDebt').focus(); return;
  }
  if (c('[data-plansave]')) {
    const st = S.money.months[A.month] = S.money.months[A.month] || {};
    st.plan = { debt: $('#plDebt').value.trim().replace(/\s/g, '').replace(',', '.'), safety: $('#plSafe').value.trim().replace(/\s/g, '').replace(',', '.') };
    save(); render(); toast('Plan du mois modifié'); return;
  }
  if (c('[data-planreset]')) { const st = S.money.months[A.month]; if (st) delete st.plan; save(); render(); toast('Retour au calcul automatique'); return; }
  if (c('[data-debtok]')) { commitKind('debt', numv($('#debtAmt').value.replace(/\s/g, ''))); return; }
  if ((el = c('[data-invest]'))) { $('#invCustom').innerHTML = `<div class="confirm"><p class="small">Montant investi aujourd'hui</p><div class="row" style="margin-top:10px"><input id="invAmt" inputmode="decimal" class="famt num" style="flex:1;text-align:left" placeholder="Montant"><button class="btn sm" data-invok="${el.dataset.invest}">Valider</button></div></div>`; $('#invAmt').focus(); return; }
  if ((el = c('[data-invok]'))) { commitKind('invest', numv($('#invAmt').value.replace(/\s/g, '')), el.dataset.invok); return; }
  if (c('[data-invsetup]')) { openInvestSetup(); return; }
  if (c('[data-invadd]')) { S.money.investments.push({ id: 'inv-' + uid(), name: '', type: 'etf', start: '', value: '' }); save(); openInvestSetup(); return; }
  if ((el = c('[data-invdel]'))) { S.money.investments = S.money.investments.filter(i => i.id !== el.dataset.invdel); save(); openInvestSetup(); return; }
  // Flux
  if (tab === 'flux') {
    if ((el = c('[data-fexp]'))) { const x = el.nextElementSibling; x.classList.toggle('on'); el.textContent = x.classList.contains('on') ? 'Refermer' : (el.closest('.fc-hadith') ? 'Méditer' : 'Comprendre'); return; }
    if ((el = c('[data-fsave]'))) { lastPt = lastPt || null; fxSave(el); return; }
    if ((el = c('[data-fcopy]'))) { const cc = fxCardOf(el.closest('.fc')); if (cc) (navigator.clipboard ? navigator.clipboard.writeText(fxText(cc)) : Promise.reject()).then(() => toast('Copié')).catch(() => toast('Copie impossible sur cet appareil.')); return; }
    if (c('[data-fsaved]')) { openSaved(); return; }
    if ((el = c('[data-fq],[data-fv]'))) { fxAnswer(el); return; }
    if ((el = c('[data-far]'))) { fxArabic(el); return; }
    if (c('[data-fnext]')) { const f = $('#feed'); f.scrollBy({ top: f.clientHeight, behavior: reduceMotion() ? 'auto' : 'smooth' }); return; }
    if ((el = c('.fc')) && !c('button,a,input')) { const now = Date.now(); if (FXS.tap && now - FXS.tap < 330 && FXS.tapEl === el) { FXS.tap = 0; fxSave(el); } else { FXS.tap = now; FXS.tapEl = el; } return; }
  }
  if ((el = c('[data-funsave]'))) { S.flux.saved = S.flux.saved.filter(x => x !== el.dataset.funsave); save(); openSaved(); const b = $(`.fc[data-fid="${el.dataset.funsave}"] [data-fsave]`); if (b) { b.setAttribute('aria-pressed', 'false'); $('span', b).textContent = 'Garder'; } return; }
  // Corps
  if ((el = c('[data-cview]'))) { go(el.dataset.cview); return; }
  if ((el = c('[data-phase]'))) {
    const id = Number(el.dataset.phase), st = phaseStatus(id);
    if (st.open) { if (S.body.phase !== id) { S.body.phase = id; save(); haptic(); render(); toast(`Étape ${phaseOf(id).name} choisie`); } return; }
    toast(`${phaseOf(id).name} : ${st.need - st.n > 0 ? `encore ${st.need - st.n} séance${st.need - st.n > 1 ? 's' : ''} de ${phaseOf(UNLOCK[id].from).name}` : ''}${id === 2 && !S.body.gym ? `${st.need - st.n > 0 ? ' et ' : ''}l'inscription à la salle` : ''}.`); return;
  }
  if (c('[data-cstart]')) { startSession(); return; }
  if ((el = c('[data-set]'))) { const [id, i] = el.dataset.set.split('.'); doSet(id, Number(i)); return; }
  if ((el = c('[data-lvl]'))) { const [id, d] = el.dataset.lvl.split('.'), e = EX[id]; S.body.level[id] = Math.max(0, Math.min(e.v.length - 1, (S.body.level[id] || 0) + Number(d))); save(); haptic(); const sy = window.scrollY; render(); window.scrollTo(0, sy); return; }
  if (c('[data-cfinish]')) { finishSession(); return; }
  if (c('[data-cabort]')) { toast('Abandonner cette séance ?', 'Oui', () => { stopRest(); S.body.active = null; save(); render(); window.scrollTo(0, 0); }, 6000); return; }
  if ((el = c('[data-rest]'))) { const v = Number(el.dataset.rest); if (!v) stopRest(); else { RT.end += v * 1000; RT.total += v; } return; }
  if (c('[data-cbody]')) {
    const w = numv($('#cbW').value.replace(/\s/g, '')), h = numv($('#cbH').value.replace(/\s/g, '')), a = numv($('#cbA').value);
    if (!(w > 30 && w < 250) || !(h > 120 && h < 230)) { toast('Indique un poids et une taille valides.'); return; }
    const pr = S.body.profile; pr.height = String(h); pr.age = String(a || 24); pr.fast = $('#cbF').checked;
    if (!S.body.weights.length || Math.abs(bodyWeight() - w) > .01) { const k = todayISO(); S.body.weights = S.body.weights.filter(x => x.date !== k); S.body.weights.push({ date: k, kg: w }); }
    pr.weight = String(w); C.edit = false; save(); askPersist(); render(); window.scrollTo(0, 0); toast('Cible calculée'); return;
  }
  if (c('[data-cbodyx]')) { C.edit = false; render(); return; }
  if (c('[data-cedit]')) { C.edit = true; render(); window.scrollTo(0, 0); return; }
  if ((el = c('[data-food]'))) { const f = FOODS.find(x => x[0] === el.dataset.food); if (f) addFood(f[0], f[1]); return; }
  if (c('[data-fcustom]')) { const g = Math.round(numv($('#fCustom').value.replace(/\s/g, ''))); if (!(g > 0 && g < 300)) { toast('Indique des grammes de protéines.'); return; } addFood('Autre', g); return; }
  if (c('[data-fall]')) { C.allFoods = !C.allFoods; const sy = window.scrollY; render(); window.scrollTo(0, sy); return; }
  if ((el = c('[data-fdel]'))) { const d = S.body.food[todayISO()]; if (!d) return; const i = Number(el.dataset.fdel), [r] = d.log.splice(i, 1); d.p = d.log.reduce((m, x) => m + x[1], 0); save(); const sy = window.scrollY; render(); window.scrollTo(0, sy); toast(`${r[0]} retiré`, 'Annuler', () => { d.log.splice(i, 0, r); d.p = d.log.reduce((m, x) => m + x[1], 0); save(); render(); }); return; }
  if ((el = c('[data-water]'))) { const k = todayISO(), d = S.body.food[k] = S.body.food[k] || { p: 0, water: 0, log: [] }, n = Number(el.dataset.water); const before = d.water; d.water = d.water === n ? n - 1 : n; save(); haptic(); const sy = window.scrollY; render(); window.scrollTo(0, sy); const tw = (bodyTargets() || { water: 8 }).water; if (before < tw && d.water >= tw) reward(2, { msg: ['Hydratation complète', 'Bien joué.'] }); else if (before >= tw && d.water < tw) unreward(2); return; }
  if (c('[data-wsave]')) {
    const w = numv($('#wIn').value.replace(/\s/g, '')); if (!(w > 30 && w < 250)) { toast('Indique ton poids en kg.'); return; }
    const k = todayISO(); S.body.weights = S.body.weights.filter(x => x.date !== k); S.body.weights.push({ date: k, kg: w }); S.body.profile.weight = String(w);
    save(); askPersist(); haptic(); render(); toast('Pesée enregistrée'); return;
  }
  if (c('[data-wdel]')) { const ws = sortedWeights(), l = ws[ws.length - 1]; if (!l) return; S.body.weights = S.body.weights.filter(x => x !== l); save(); render(); toast('Pesée supprimée', 'Annuler', () => { S.body.weights.push(l); save(); render(); }); return; }
  if ((el = c('[data-kadj]'))) { const pr = S.body.profile; pr.adj = numv(pr.adj) + Number(el.dataset.kadj); pr.adjAt = todayISO(); save(); render(); toast(`Cible ajustée : ${bodyTargets().kcal.toLocaleString('fr-FR')} kcal`); return; }
  if ((el = c('[data-sleep]'))) {
    const k = todayISO(), v = el.dataset.sleep, cur = S.body.sleep[k] || 420;
    const was = sleepTot(k);
    S.body.sleep[k] = v[0] === '=' ? Number(v.slice(1)) : Math.max(60, Math.min(720, cur + (S.body.sleep[k] ? Number(v) : 0)));
    save(); haptic();
    const now = sleepTot(k); if (was < 420 && now >= 420) reward(2); else if (was >= 420 && now < 420) unreward(2); const sy = window.scrollY; render(); window.scrollTo(0, sy); return;
  }
  if ((el = c('[data-nap]'))) {
    const k = todayISO(), was = sleepTot(k), v = Number(el.dataset.nap);
    S.body.nap = S.body.nap || {}; if (v) S.body.nap[k] = v; else delete S.body.nap[k];
    save(); haptic();
    const now = sleepTot(k); if (was < 420 && now >= 420) reward(2); else if (was >= 420 && now < 420) unreward(2); const sy = window.scrollY; render(); window.scrollTo(0, sy); return;
  }
  if ((el = c('[data-wake]'))) { S.body.wake = el.dataset.wake; save(); const sy = window.scrollY; render(); window.scrollTo(0, sy); return; }
  if ((el = c('[data-fitra]'))) {
    const id = el.dataset.fitra, h = S.body.fitra[id] = S.body.fitra[id] || [], k = todayISO();
    if (h[h.length - 1] === k) { h.pop(); save(); render(); unreward(2); toast('Annulé'); return; }
    h.push(k); if (h.length > 8) h.shift(); save(); const sy = window.scrollY; render(); window.scrollTo(0, sy);
    reward(2); return;
  }
  if (c('[data-caresetup]')) { openCareSetup(); return; }
  if (c('[data-cadd]')) { const v = $('#cNew').value.trim(); if (!v) return; S.body.care.list.push({ id: 'c-' + uid(), name: v }); save(); openCareSetup(); return; }
  if ((el = c('[data-cdel]'))) { S.body.care.list = S.body.care.list.filter(x => x.id !== el.dataset.cdel); save(); openCareSetup(); return; }
  // Business
  if (c('[data-padd]')) { S.biz.projects.push({ id: 'p-' + uid(), name: '', stage: 0, next: '' }); save(); render(); const ins = $$('.proj-name'); if (ins.length) ins[ins.length - 1].focus(); return; }
  if ((el = c('[data-pdel]'))) { const i = S.biz.projects.findIndex(p => p.id === el.dataset.pdel); const [r] = S.biz.projects.splice(i, 1); save(); render(); toast('Projet supprimé', 'Annuler', () => { S.biz.projects.splice(i, 0, r); save(); render(); }); return; }
  if ((el = c('[data-pstage]'))) { const [id, st] = el.dataset.pstage.split('.'); const p = S.biz.projects.find(x => x.id === id); if (p) { p.stage = Number(st); save(); haptic(); render(); } return; }
  // Argent · budget
  if ((el = c('[data-aview]'))) { go(el.dataset.aview); return; }
  if (c('[data-bsetup]')) { openBudgetSetup(); return; }
  if ((el = c('[data-bnav]'))) { const d = parseDate(A.month + '-01'); d.setMonth(d.getMonth() + Number(el.dataset.bnav)); A.month = iso(d).slice(0, 7); A.catFilter = 'all'; render(); return; }
  if ((el = c('[data-bkind]'))) { A.kind = el.dataset.bkind; A.cat = A.kind === 'exp' ? 'courses' : 'virement'; const v = $('#bAmount').value; render(); $('#bAmount').value = v; return; }
  if ((el = c('[data-bcat]'))) { A.cat = el.dataset.bcat; $$('[data-bcat]').forEach(b => b.setAttribute('aria-pressed', String(b === el))); haptic(); return; }
  if (c('#bAdd')) { addTx(); return; }
  if ((el = c('[data-psave]'))) { potSave(el.dataset.psave, !!el.dataset.custom); return; }
  if ((el = c('[data-potok]'))) { commitPot(el.dataset.potok, numv($('#potAmt').value.replace(/\s/g, '')), 'save'); return; }
  if ((el = c('[data-potwd]'))) { commitPot(el.dataset.potwd, numv($('#potAmt').value.replace(/\s/g, '')), 'withdraw'); return; }
  if ((el = c('[data-tx]'))) { openTx(el.dataset.tx); return; }
  if ((el = c('[data-txcat]'))) { $$('[data-txcat]').forEach(b => b.setAttribute('aria-pressed', String(b === el))); return; }
  if (c('#txSave')) {
    const t = S.money.tx.find(x => x.id === $('#shiftSheetBody').dataset.tx); if (!t) return;
    const a = numv($('#txAmt').value.replace(/\s/g, '')); if (!(a > 0)) { toast('Entre un montant.'); return; }
    t.amount = Math.round(a * 100) / 100; const cb = $('[data-txcat][aria-pressed="true"]'); if (cb) t.cat = cb.dataset.txcat;
    t.note = $('#txNote').value.trim(); t.date = $('#txDate').value || t.date; save(); $('#shiftSheet').close(); render(); toast('Mouvement modifié'); return;
  }
  if (c('#txDel')) {
    const i = S.money.tx.findIndex(x => x.id === $('#shiftSheetBody').dataset.tx); if (i < 0) return;
    const [r] = S.money.tx.splice(i, 1); save(); $('#shiftSheet').close(); render();
    toast('Mouvement supprimé', 'Annuler', () => { S.money.tx.push(r); save(); render(); }, 6000); return;
  }
  if (c('#bCsv')) { exportBudgetCSV(); return; }
  if ((el = c('[data-bfilter]'))) { A.catFilter = el.dataset.bfilter; render(); return; }
  if ((el = c('[data-madd]'))) {
    const l = el.dataset.madd, id = l.slice(0, 3) + '-' + uid();
    S.money[l].push(l === 'incomes' ? { id, label: '', amount: '', day: 1, src: '' } : l === 'fixed' ? { id, label: '', amount: '', day: 1 } : l === 'pots' ? { id, name: '', target: '', start: '', monthly: '', deadline: '' } : { id, cat: 'sorties', limit: '' });
    save(); openBudgetSetup(); const inputs = $$(`[data-mset^="${l}.${id}."]`); if (inputs[0]) inputs[0].focus(); return;
  }
  if ((el = c('[data-mdel]'))) { const [l, id] = el.dataset.mdel.split('.'); S.money[l] = S.money[l].filter(x => x.id !== id); save(); openBudgetSetup(); return; }
  if (c('[data-close]')) { c('dialog').close(); return; }
  if (c('[data-export]')) { exportData(); return; }
  if (c('#importBtn')) { $('#importFile').click(); return; }
  if (c('#impYes')) { applyImport(); return; }
  if (c('#impNo')) { pendingImport = null; $('#importConfirm').innerHTML = ''; return; }
  if ((el = c('[data-seen]'))) { S.seen[el.dataset.seen] = true; save(); const box = c('.coach'); box.style.transition = 'opacity .25s,transform .25s'; box.style.opacity = 0; box.style.transform = 'translateY(-6px)'; setTimeout(() => render(), reduceMotion() ? 0 : 250); return; }
  if ((el = c('[data-unseen]'))) { delete S.seen[el.dataset.unseen]; save(); render(); return; }
  if (c('[data-ydone]')) { S.nour.seen = todayISO(); save(); const y = c('.yday'); y.style.transition = 'opacity .25s'; y.style.opacity = 0; setTimeout(() => render(), reduceMotion() ? 0 : 250); return; }
  if ((el = c('[data-goto]'))) { go(el.dataset.goto); return; }
  if ((el = c('[data-calib]'))) {
    const k = el.dataset.calib, b = numv($(`#cb-${k}`).value.replace(/\s/g, '')), n = numv($(`#cn-${k}`).value.replace(/\s/g, ''));
    if (!b || !n || n >= b) { toast('Indique un brut et un net valides.'); return; }
    S.settings.cotis[k] = Math.round((1 - n / b) * 1000) / 10; save(); openSettings(); if (tab === 'argent') render();
    toast(`Cotisations ${EMP[k]} : ${String(S.settings.cotis[k]).replace('.', ',')} %`); return;
  }
  // Parcours
  if ((el = c('[data-pstep]'))) { selectMonth(P.sel + Number(el.dataset.pstep)); return; }
  if (c('#pnow')) { selectMonth(currentMonth()); return; }
  // Arabe
  if ((el = c('[data-q]'))) { answerQuiz(el); return; }
  if (c('#qgo')) { nextQuiz(true); return; }
  if ((el = c('[data-star]'))) { showStar(Number(el.dataset.star)); return; }
  if ((el = c('[data-fw]'))) { if ($('#fatiha').classList.contains('hide')) { el.classList.toggle('shown'); haptic(); } return; }
  if (c('#toggleFat')) { S.hideFatiha = !S.hideFatiha; save(); $('#fatiha').classList.toggle('hide', S.hideFatiha); $$('.w.shown').forEach(w => w.classList.remove('shown')); const b = $('#toggleFat'); b.textContent = S.hideFatiha ? 'Montrer le sens' : 'Cacher le sens'; b.setAttribute('aria-pressed', S.hideFatiha); $('#fatHint').textContent = S.hideFatiha ? 'Touche un mot pour révéler sa traduction.' : 'Mot à mot. Cache le sens pour te tester.'; return; }
  if ((el = c('[data-taj]'))) {
    const tj = S.tajwid; tj.done = Math.max(0, tj.done + Number(el.dataset.taj)); if (tj.total) tj.done = Math.min(tj.done, tj.total);
    save(); haptic(); $('#tajDone').innerHTML = `${tj.done}<small> / ${tj.total || '—'}</small>`; $('#tajBar').style.width = `${tj.total ? Math.min(100, tj.done / tj.total * 100) : 0}%`; return;
  }
  // Routine
  if ((el = c('[data-block]'))) { toggleBlock(Number(el.dataset.block)); return; }
  if ((el = c('[data-day]'))) { const k = el.dataset.day; if (S.days[k]) { delete S.days[k]; S.blocks[k] = [0, 0, 0, 0]; } else { S.days[k] = true; S.blocks[k] = [1, 1, 1, 1]; haptic(); } save(); render(); return; }
  // Heures
  if ((el = c('[data-emp]'))) { readForm(); const l = lastShift(el.dataset.emp); H.form.emp = el.dataset.emp; if (l) { H.form.start = l.start; H.form.end = l.end; H.form.pause = Number(l.pause) || 0; } else { const fr = freshForm(el.dataset.emp); H.form.start = fr.start; H.form.end = fr.end; } $$('[data-emp]').forEach(b => b.setAttribute('aria-pressed', String(b === el))); updateDial(); $('#fPause').textContent = `${H.form.pause} min`; haptic(); return; }
  if ((el = c('[data-pause]'))) { H.form.pause = Math.max(0, (Number(H.form.pause) || 0) + Number(el.dataset.pause)); $('#fPause').textContent = `${H.form.pause} min`; updateDial(); return; }
  if (c('#saveShift')) { saveShift(); return; }
  if (c('#dupShift')) { dupLast(); return; }
  if ((el = c('[data-arch]'))) { H.month = el.dataset.arch; $('#month').innerHTML = vMonth(); $('#month').scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth', block: 'start' }); return; }
  if ((el = c('[data-mnav]'))) { const d = parseDate(H.month + '-01'); d.setMonth(d.getMonth() + Number(el.dataset.mnav)); H.month = iso(d).slice(0, 7); $('#month').innerHTML = vMonth(); return; }
  if ((el = c('[data-filter]'))) { H.filter = el.dataset.filter; $('#month').innerHTML = vMonth(); return; }
  if (c('#csv')) { exportCSV(); return; }
  if ((el = c('[data-edit]'))) { openShift(el.dataset.edit); return; }
  if ((el = c('[data-eemp]'))) { $$('[data-eemp]').forEach(b => b.setAttribute('aria-pressed', String(b === el))); return; }
  if (c('#eSave')) { commitShiftEdit(); return; }
  if (c('#eDel')) { deleteShift(); return; }
  // Idées
  if (c('#ideaAdd')) {
    const v = $('#ideaText').value.trim(); if (!v) return;
    const btn = $('#ideaAdd'); btn.disabled = true;
    (/\s/.test(v) ? Promise.resolve(false) : zTry(v)).then(ok => {
      btn.disabled = false;
      if (ok) { $('#ideaText').value = ''; if ($('#ideasSheet').open && $('#ideasSheet').dataset.mode !== 'z') $('#ideasSheet').close(); return; }
      S.ideas.push({ id: uid(), text: v, created: Date.now() }); save(); haptic(); openIdeas(); $('#ideaText').focus();
    });
    return;
  }
  if ((el = c('[data-idel]'))) { const i = S.ideas.findIndex(x => x.id === el.dataset.idel); const [r] = S.ideas.splice(i, 1); save(); openIdeas(); toast('Idée supprimée', 'Annuler', () => { S.ideas.push(r); save(); if ($('#ideasSheet').open) openIdeas(); }); return; }
  if (c('#ideaCopy')) {
    const txt = S.ideas.slice().sort((a, b) => a.created - b.created).map(i => `- ${i.text}`).join('\n');
    (navigator.clipboard ? navigator.clipboard.writeText(txt) : Promise.reject()).then(() => toast('Idées copiées')).catch(() => toast('Copie impossible sur cet appareil.'));
  }
});
document.addEventListener('keydown', e => {
  const t = e.target;
  if ((e.key === 'Enter' || e.key === ' ') && t.matches && t.matches('[data-planet],[data-moon],.seg-arc,[data-phase],[data-sun]')) {
    e.preventDefault();
    if (t.hasAttribute('data-sun')) { go('flux'); return; }
    if (t.dataset.phase) { t.dispatchEvent(new MouseEvent('click', { bubbles: true })); return; }
    if (t.dataset.planet) go(t.dataset.planet); else if (t.dataset.moon) selectMonth(Number(t.dataset.moon)); else toggleBlock(Number(t.dataset.block));
  }
  if (e.key === 'Enter' && t.id === 'fNote') { e.preventDefault(); saveShift(); }
  if (e.key === 'Enter' && (t.id === 'bAmount' || t.id === 'bNote')) { e.preventDefault(); addTx(); }
});
document.addEventListener('change', e => {
  const t = e.target;
  if (hairChange(t)) return;
  if (t.dataset.chk) {
    if (t.checked) S.checks[t.dataset.chk] = true; else delete S.checks[t.dataset.chk];
    save(); askPersist(); refreshParcours(); if (t.checked) reward(3); else unreward(3); return;
  }
  if (t.dataset.increc) {
    const ym = A.month, st = S.money.months[ym] = S.money.months[ym] || {}; st.inc = st.inc || {};
    if (t.checked) { const i = S.money.incomes.find(x => x.id === t.dataset.increc), e = expectedIncome(i).v; if (!e) { t.checked = false; const inp = $('#inc-' + i.id); if (inp) inp.focus(); toast('Tape le montant reçu à droite.'); return; } st.inc[i.id] = Math.round(e * 100) / 100; haptic(); } else delete st.inc[t.dataset.increc];
    save(); render(); return;
  }
  if (t.hasAttribute && (t.hasAttribute('data-carry') || t.hasAttribute('data-carryneg'))) {
    const st = S.money.months[A.month] = S.money.months[A.month] || {};
    const neg = $('[data-carryneg]').checked, v = numv(($('#carryAmt').value || '').replace(/\s/g, '').replace('-', ''));
    st.carryNeg = neg; st.carry = v ? String(neg ? -v : v) : '';
    save(); render(); return;
  }
  if (t.dataset.incval) {
    const ym = A.month, st = S.money.months[ym] = S.money.months[ym] || {}; st.inc = st.inc || {};
    const v = t.value.trim(); if (v === '') delete st.inc[t.dataset.incval]; else st.inc[t.dataset.incval] = numv(v.replace(/\s/g, ''));
    save(); render(); return;
  }
  if (t.dataset.fpaid) { const st = S.money.months[A.month] = S.money.months[A.month] || {}; st.paid = st.paid || {}; if (t.checked) { st.paid[t.dataset.fpaid] = true; haptic(); } else delete st.paid[t.dataset.fpaid]; save(); render(); return; }
  if (t.dataset.mset) { mset(t.dataset.mset, t.value); return; }
  if (t.id === 'mAuto') { S.money.auto = t.checked; save(); openBudgetSetup(); return; }
  if (t.id === 'mLife') { S.money.life = t.value.trim().replace(/\s/g, '').replace(',', '.'); save(); openBudgetSetup(); return; }
  if (t.dataset.habitc) { toggleHabit(t.dataset.habitc); return; }
  if (t.dataset.care) {
    const k = todayISO(), l = S.body.care.log[k] = S.body.care.log[k] || {}, wasAll = S.body.care.list.every(x => l[x.id]);
    if (t.checked) l[t.dataset.care] = true; else delete l[t.dataset.care];
    if (!Object.keys(l).length) delete S.body.care.log[k]; save(); render();
    const cl = S.body.care.log[k] || {}, all = S.body.care.list.every(x => cl[x.id]);
    if (t.checked) { if (all) reward(4, { msg: ['Hygiène du jour complète', 'La propreté est la moitié de la foi. (Muslim)'] }); else reward(1); } else unreward(1 + (wasAll ? 3 : 0));
    return;
  }
  if (t.dataset.ghusl) { const fri = iso(addDays(mondayOf(new Date()), 4)); if (t.checked) { S.body.ghusl[fri] = true; } else delete S.body.ghusl[fri]; save(); render(); if (t.checked) reward(3); else unreward(3); return; }
  if (t.dataset.cset) { const x = S.body.care.list.find(y => y.id === t.dataset.cset); if (x && t.value.trim()) { x.name = t.value.trim(); save(); } return; }
  if (t.id === 'gymSw') { S.body.gym = t.checked; save(); render(); if (t.checked) toast('Noté. La salle s\'ouvre après tes 12 séances de Réveil.'); return; }
  if (t.id === 'bedWake' && t.value) { S.body.wake = t.value; save(); const sy = window.scrollY; render(); window.scrollTo(0, sy); return; }
  if (t.dataset.hset) { const h = S.faith.habits.find(x => x.id === t.dataset.hset); if (h && t.value.trim()) { h.name = t.value.trim(); save(); } return; }
  if (t.dataset.dset) { S.money.debt[t.dataset.dset] = t.value.trim().replace(/\s/g, '').replace(',', '.'); save(); return; }
  if (t.hasAttribute && t.hasAttribute('data-sgoal')) { S.money.safetyGoal = t.value.trim().replace(/\s/g, '').replace(',', '.') || '4000'; const p = S.money.pots.find(x => x.safety); if (p) p.target = S.money.safetyGoal; save(); return; }
  if (t.dataset.iset) { const [id, k] = t.dataset.iset.split('.'), i = S.money.investments.find(x => x.id === id); if (i) { i[k] = k === 'name' || k === 'type' ? t.value : t.value.trim().replace(/\s/g, '').replace(',', '.'); save(); } return; }
  if (t.dataset.pset) { const [id, k] = t.dataset.pset.split('.'), p = S.biz.projects.find(x => x.id === id); if (p) { p[k] = t.value; save(); } return; }
  if (t.dataset.sour) { if (t.checked) S.sourates[t.dataset.sour] = true; else delete S.sourates[t.dataset.sour]; save(); if (t.checked) haptic(); $('#sourN').textContent = `${SOURATES.filter(s => S.sourates[s[1]]).length} / ${SOURATES.length}`; return; }
  if (t.id === 'tajTotal') { S.tajwid.total = Math.max(0, parseInt(t.value, 10) || 0); if (S.tajwid.total) S.tajwid.done = Math.min(S.tajwid.done, S.tajwid.total); save(); render(); return; }
  if (t.id === 'fDate') { const h = holidayName(t.value); $('#fFerie').checked = !!h; $('#ferieName').textContent = h || ''; readForm(); updateDial(); return; }
  if (t.id === 'fStart' || t.id === 'fEnd') { if (t.value) { H.form[t.id === 'fStart' ? 'start' : 'end'] = t.value; updateDial(); } return; }
  if (t.dataset.slip) {
    const k = `${H.month}|${t.dataset.slip}`, v = t.value.trim();
    if (v && parseHours(v) == null) { toast('Écris les heures comme 151,67 ou 151h40.'); return; }
    if (v) S.payslips[k] = v; else delete S.payslips[k];
    save(); $('#month').innerHTML = vMonth(); return;
  }
  if (t.dataset.set) { const raw = t.value.trim(); setPath(S.settings, t.dataset.set, /^counter/.test(t.dataset.set) ? raw : raw.replace(',', '.')); save(); if (tab === 'argent' || tab === 'orbite') render(); return; }
  if (t.id === 'sNs' && t.value) { S.settings.nightStart = t.value; save(); if (tab === 'argent') render(); return; }
  if (t.id === 'sNe' && t.value) { S.settings.nightEnd = t.value; save(); if (tab === 'argent') render(); return; }
  if (t.id === 'sStart' && t.value) { S.start = t.value; P.sel = null; save(); render(); return; }
  if (t.id === 'importFile' && t.files[0]) { const r = new FileReader(); r.onload = () => handleImport(r.result); r.readAsText(t.files[0]); t.value = ''; }
});
let noteTimer = null;
document.addEventListener('input', e => {
  const t = e.target;
  if (t.dataset.note) { S.notes[t.dataset.note] = t.value; clearTimeout(noteTimer); noteTimer = setTimeout(save, 400); const s4 = $('#step4'); if (s4) s4.classList.toggle('ok', !!t.value.trim()); return; }
  if ((t.id === 'fStart' || t.id === 'fEnd') && t.value) { H.form[t.id === 'fStart' ? 'start' : 'end'] = t.value; updateDial(); }
});
$$('dialog.sheet').forEach(d => d.addEventListener('click', e => { if (e.target === d) d.close(); }));
document.addEventListener('toggle', e => { const d = e.target; if (d.dataset && d.dataset.flow) { if (d.open) A.open.add(d.dataset.flow); else A.open.delete(d.dataset.flow); } }, true);
$('#ideasSheet').addEventListener('close', () => { if ($('#ideasSheet').dataset.mode === 'bsetup') { delete $('#ideasSheet').dataset.mode; render(); } });
let lastDay = todayISO();
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') { stopOrbit(); if (tab === 'z') { zLock(); tab = 'orbite'; render(); } return; }
  missedDismissed = false; if (tab === 'orbite' || tab === 'foi') setTimeout(missedOverlay, 700);
  if (todayISO() !== lastDay) { lastDay = todayISO(); H.form = null; H.month = todayISO().slice(0, 7); A.month = H.month; P.sel = null; render(); }
  else if (tab === 'orbite') startOrbit();
});
window.addEventListener('resize', () => { if (W8.open) buildWheel(); });

/* =====================================================================
   16. DÉMARRAGE
   ===================================================================== */
(function intro() {
  const el = document.getElementById('intro'); if (!el) return;
  const done = () => { if (el.parentNode) el.remove(); };
  el.addEventListener('click', () => { el.classList.add('skip'); setTimeout(done, 320); });
  el.addEventListener('animationend', e => { if (e.animationName === 'iout') done(); });
  setTimeout(done, 3200);
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) done();
})();
(async function boot() {
  S = await loadState();
  save(true);
  let t = location.hash.slice(1);
  if (t === 'arabe' || t === 'habitudes' || t === 'dhikr') { setFView(t); t = 'foi'; }
  if (t === 'heures' || t === 'budget') { setAView(t); t = 'argent'; }
  if (CVIEWS.includes(t)) { setCView(t); t = 'corps'; }
  if (!TABS.includes(t)) { try { t = localStorage.getItem('sdp-tab'); } catch (e) {} }
  if (t === 'heures' || t === 'budget') { setAView(t); t = 'argent'; }
  tab = TABS.includes(t) ? t : 'orbite';
  render(true);
  if ('serviceWorker' in navigator && location.protocol !== 'file:') {
    navigator.serviceWorker.register('sw.js').then(reg => {
      reg.addEventListener('updatefound', () => {
        const nw = reg.installing;
        nw && nw.addEventListener('statechange', () => {
          if (nw.state === 'installed' && navigator.serviceWorker.controller) toast('Nouvelle version disponible', 'Recharger', () => nw.postMessage('skipWaiting'), 15000);
        });
      });
    }).catch(() => {});
    let reloaded = false; const hadController = !!navigator.serviceWorker.controller;
    navigator.serviceWorker.addEventListener('controllerchange', () => { if (hadController && !reloaded) { reloaded = true; save(true); location.reload(); } });
  }
})();
window.__sdp = { bodyTargets, weightVerdict, suggest, weekSessions, phaseStatus, calc, sumShifts, money, gareCounter, budgetOf, autoPlan, A, faithScore, bizStatus, investStatus, parseHours, fmtH, holidayName, save, get S() { return S; } };
const Z_MOD = 'LyogRXNwYWNlIHByaXbDqSDigJQgY2hhcmfDqSBzZXVsZW1lbnQgYXByw6hzIGxlIGJvbiBjb2RlLiBUb3V0IGVzdCBjaGlmZnLDqSBkYW5zIFMuemMuICovCihmdW5jdGlvbiAoKSB7CiAgY29uc3QgWiA9IHsga2V5OiBudWxsLCBzYWx0OiBudWxsLCBkOiBudWxsLCB2aWV3OiAnbWFpbicsIGhpZDogbnVsbCwgdXJnZTogbnVsbCwgcmVsOiBudWxsLCBkaDogbnVsbCB9OwogIGNvbnN0IE1TID0gWzEsIDMsIDcsIDE0LCAyMSwgMzAsIDQwLCA2MCwgOTAsIDE4MCwgMzY1XTsKICBjb25zdCBUUklHID0gW1snZW5udWknLCAnRW5udWknXSwgWydzdHJlc3MnLCAnU3RyZXNzJ10sIFsnc29saXR1ZGUnLCAnU29saXR1ZGUnXSwgWydmYXRpZ3VlJywgJ0ZhdGlndWUnXSwgWydvY2Nhc2lvbicsICdPY2Nhc2lvbiddLCBbJ3Njcm9sbCcsICdTY3JvbGwnXSwgWydhdXRyZScsICdBdXRyZSddXTsKICBjb25zdCBQTEFOU19CID0gW1snSmUgbVwnZW5udWllLCBzZXVsIMOgIGxhIG1haXNvbicsICdKZSBzb3JzIG1hcmNoZXIgMTAgbWludXRlcyBvdSBqZSBsYW5jZSB1bmUgc8OpYW5jZSBDb3JwcyddLCBbJ0plIHN1aXMgYXUgbGl0IGF2ZWMgbGUgdMOpbMOpcGhvbmUnLCAnSmUgbGUgcG9zZSBob3JzIGRlIGxhIGNoYW1icmUgZXQgamUgbGlzIGRldXggcGFnZXMnXSwgWydKZSByZW50cmUgZHUgdHJhdmFpbCBzdHJlc3PDqSBvdSBmYXRpZ3XDqScsICdEb3VjaGUsIGFibHV0aW9ucywgcHVpcyAxMCBtaW51dGVzIGRlIENvcmFuIG91IGRlIGRoaWtyJ10sIFsnVW4gc2Nyb2xsIGNvbW1lbmNlIMOgIGTDqXJhcGVyJywgJ0plIGZlcm1lIGxcJ2FwcGxpLCBqZSBtZSBsw6h2ZSwgamUgY2hhbmdlIGRlIHBpw6hjZSddLCBbJ0xcJ29jY2FzaW9uIHNlIHByw6lzZW50ZScsICdKXCdvdXZyZSDCqyBKXCdhaSB1bmUgZW52aWUgwrsgZXQgamUgbGFuY2UgbGEgdmFndWUnXV07CiAgY29uc3QgUExBTlNfTiA9IFtbJ0plIHNvcnMgZHUgdHJhdmFpbCcsICdVbiBjaGV3aW5nLWd1bSBvdSB1biBncmFuZCB2ZXJyZSBkXCdlYXUgw6AgbGEgcGxhY2UnXSwgWydKZSBtXCdlbm51aWUnLCAnNSBtaW51dGVzIGRlIG1hcmNoZSA6IGxcJ2VudmllIHBhc3NlIGVuIDMgw6AgNSBtaW51dGVzJ10sIFsnSmUgZmluaXMgdW4gcmVwYXMnLCAnSmUgbWUgbMOodmUgdG91dCBkZSBzdWl0ZSBldCBqZSBtZSBicm9zc2UgbGVzIGRlbnRzJ10sIFsnT24gbVwnZW4gcHJvcG9zZSB1bmUnLCAnwqsgTm9uIG1lcmNpLCBqXCdhcnLDqnRlLiDCuyBQcsOpcGFyw6kgw6AgbFwnYXZhbmNlLCBjXCdlc3QgcGx1cyBmYWNpbGUnXV07CiAgY29uc3QgQkFSX0IgPSBbWydmaWx0cmUnLCAnRmlsdHJlIGFjdGl2w6kgc3VyIGxcJ2lQaG9uZScsICdSw6lnbGFnZXMg4oaSIFRlbXBzIGRcJ8OpY3JhbiDihpIgQ29udGVudSBldCBjb25maWRlbnRpYWxpdMOpIOKGkiBSZXN0cmljdGlvbnMgZGUgY29udGVudSDihpIgQ29udGVudSB3ZWIg4oaSIExpbWl0ZXIgbGVzIHNpdGVzIHBvdXIgYWR1bHRlcy4nXSwgWydjb2RlJywgJ0NvZGUgVGVtcHMgZFwnw6ljcmFuIGNvbmZpw6kgw6AgcXVlbHF1XCd1biBkZSBjb25maWFuY2UnLCAnVHUgbmUgcGV1eCBwbHVzIHJldGlyZXIgbGUgZmlsdHJlIHN1ciB1biBjb3VwIGRlIHTDqnRlLiddLCBbJ2NoYW1icmUnLCAnVMOpbMOpcGhvbmUgcXVpIGRvcnQgaG9ycyBkZSBsYSBjaGFtYnJlJywgJ1VuIHZyYWkgcsOpdmVpbCBwb3VyIGxlIG1hdGluLiddLCBbJ2NvdWV0dGUnLCAnSmFtYWlzIGRlIHTDqWzDqXBob25lIHNvdXMgbGEgY291ZXR0ZSBuaSBhdXggdG9pbGV0dGVzJywgJyddLCBbJ2FwcHMnLCAnQ29tcHRlcyBldCBhcHBsaXMgcXVpIGTDqWNsZW5jaGVudCA6IHN1cHByaW3DqXMgb3UgbWFzcXXDqXMnLCAnJ10sIFsncG9ydGUnLCAnU2V1bCDDoCBsYSBtYWlzb24gOiBwb3J0ZSBvdXZlcnRlLCBqYW1haXMgYWxsb25nw6kgw6AgdHJhw65uZXInLCAnJ11dOwogIGNvbnN0IEJBUl9OID0gW1snc3RvY2snLCAnQXVjdW5lIHB1ZmYgZW4gcsOpc2VydmUgw6AgbGEgbWFpc29uJywgJyddLCBbJ2FjaGF0JywgJ1BsdXMgZFwnYWNoYXQgYXV0b21hdGlxdWUgOiBqZSBub3RlIGF2YW50IGRcJ2FjaGV0ZXInLCAnJ10sIFsnbGlldXgnLCAnSlwnw6l2aXRlIGxlcyBwYXVzZXMgYXZlYyBjZXV4IHF1aSB2YXBvdGVudCcsICcnXV07CiAgY29uc3QgQUNUX0IgPSBbWydsZXZlJywgJ0plIG1lIGzDqHZlIGV0IGplIGNoYW5nZSBkZSBwacOoY2UnXSwgWyd3dWR1JywgJ0plIGZhaXMgbWVzIGFibHV0aW9ucyddLCBbJ3BvbXBlcycsICcyMCBwb21wZXMgb3UgMzAgc3F1YXRzJ10sIFsndGVsJywgJ1TDqWzDqXBob25lIHBvc8OpIGRhbnMgdW5lIGF1dHJlIHBpw6hjZSddLCBbJ2RoaWtyJywgJ0RoaWtyIDogMzMgw5cgMyddLCBbJ21zZycsICdKXCfDqWNyaXMgw6AgcXVlbHF1XCd1biddXTsKICBjb25zdCBBQ1RfTiA9IFtbJ2VhdScsICdVbiBncmFuZCB2ZXJyZSBkXCdlYXUnXSwgWydtYXJjaGUnLCAnNSBtaW51dGVzIGRlIG1hcmNoZSddLCBbJ2dvbW1lJywgJ1VuIGNoZXdpbmctZ3VtJ10sIFsnZGhpa3InLCAnRGhpa3IgOiAzMyDDlyAzJ10sIFsnbGV2ZScsICdKZSBjaGFuZ2UgZGUgcGnDqGNlJ11dOwogIGNvbnN0IERISUtSID0gW1sn2LPZj9io2ZLYrdmO2KfZhtmOINin2YTZhNmO2ZHZh9mQJywgJ1N1YmhhbkFsbGFoJ10sIFsn2KfZhNmS2K3ZjtmF2ZLYr9mPINmE2ZDZhNmO2ZHZh9mQJywgJ0FsaGFtZHVsaWxsYWgnXSwgWyfYp9mE2YTZjtmR2YfZjyDYo9mO2YPZktio2Y7YsdmPJywgJ0FsbGFodSBha2JhciddXTsKICBjb25zdCBEQVkgPSA4NjRlNTsKCiAgLyogLS0tLS0tLS0tLSBzdHlsZXMgKGluamVjdMOpcyBwb3VyIG5lIHJpZW4gbGFpc3NlciBkYW5zIGluZGV4Lmh0bWwpIC0tLS0tLS0tLS0gKi8KICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd6c3QnKSkgewogICAgY29uc3Qgc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpOyBzdC5pZCA9ICd6c3QnOwogICAgc3QudGV4dENvbnRlbnQgPSBgCi56aHttYXJnaW4tdG9wOjRweH0KLnpoZXJve3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6Z3JpZDtwbGFjZS1pdGVtczpjZW50ZXI7bWFyZ2luLXRvcDoxOHB4fQouemhlcm8+c3Zne3dpZHRoOm1pbigyNzBweCw3NHZ3KTtoZWlnaHQ6YXV0bztvdmVyZmxvdzp2aXNpYmxlO2Rpc3BsYXk6YmxvY2t9Ci56aGN7cG9zaXRpb246YWJzb2x1dGU7aW5zZXQ6MDtkaXNwbGF5OmdyaWQ7cGxhY2UtaXRlbXM6Y2VudGVyO3RleHQtYWxpZ246Y2VudGVyO3BvaW50ZXItZXZlbnRzOm5vbmV9Ci56aGMgYntkaXNwbGF5OmJsb2NrO2ZvbnQ6NDAwIDQuNXJlbS8xIHZhcigtLXNlcmlmKX0KLnpoYyBzcGFue2ZvbnQtc2l6ZTouODEyNXJlbTtjb2xvcjp2YXIoLS1tdXRlZCl9Ci56dGlja3tmb250OjQwMCAxLjI1cmVtLzEuMiB2YXIoLS1zZXJpZik7Y29sb3I6dmFyKC0taW5rLTIpO2ZvbnQtdmFyaWFudC1udW1lcmljOnRhYnVsYXItbnVtc30KLnpzb3N7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2dhcDoxMHB4O3dpZHRoOjEwMCU7bWluLWhlaWdodDo2NHB4O21hcmdpbi10b3A6MjBweDtib3JkZXItcmFkaXVzOjIycHg7YmFja2dyb3VuZDp2YXIoLS1nb2xkKTtjb2xvcjp2YXIoLS1nb2xkLWluayk7Zm9udC13ZWlnaHQ6NzAwO2ZvbnQtc2l6ZToxLjA2MjVyZW07Ym94LXNoYWRvdzowIDAgMCAwIHZhcigtLWdsb3cpO2FuaW1hdGlvbjp6cHVsc2UgMi42cyBlYXNlLW91dCBpbmZpbml0ZX0KQGtleWZyYW1lcyB6cHVsc2V7MCV7Ym94LXNoYWRvdzowIDAgMCAwIHZhcigtLWdsb3cpfTcwJXtib3gtc2hhZG93OjAgMCAwIDE2cHggdHJhbnNwYXJlbnR9MTAwJXtib3gtc2hhZG93OjAgMCAwIDAgdHJhbnNwYXJlbnR9fQouem1zPnN2Z3t3aWR0aDoxMDAlO2hlaWdodDphdXRvO2Rpc3BsYXk6YmxvY2s7b3ZlcmZsb3c6dmlzaWJsZX0KLnpjYXJke21hcmdpbi10b3A6MTJweDtwYWRkaW5nOjE2cHg7Ym9yZGVyLXJhZGl1czp2YXIoLS1yKTtiYWNrZ3JvdW5kOnZhcigtLXN1cmZhY2UpfQouenBsYW57ZGlzcGxheTpncmlkO2dyaWQtdGVtcGxhdGUtY29sdW1uczptaW5tYXgoMCwxZnIpIG1pbm1heCgwLDFmcikgMzZweDtnYXA6NnB4O21hcmdpbi1ib3R0b206OHB4fQouenBsYW4gaW5wdXR7bWluLXdpZHRoOjA7bWluLWhlaWdodDo0NHB4O2JvcmRlcjowO2JvcmRlci1yYWRpdXM6MTJweDtiYWNrZ3JvdW5kOnZhcigtLXN1cmZhY2UpO3BhZGRpbmc6MCAxMHB4O2NvbG9yOnZhcigtLWluayk7Zm9udC1zaXplOi44NzVyZW19Ci56cGxhbiBpbnB1dDpmb2N1c3tvdXRsaW5lOjJweCBzb2xpZCB2YXIoLS1nb2xkKX0KLnpwbGFuIC5pY29uLWJ0bnt3aWR0aDozNnB4fQouemlme2Rpc3BsYXk6Z3JpZDtnYXA6OHB4fQouemlmIGRpdntwYWRkaW5nOjEycHggMTRweDtib3JkZXItcmFkaXVzOjE0cHg7YmFja2dyb3VuZDp2YXIoLS1zdXJmYWNlKTtmb250LXNpemU6LjkzNzVyZW07bGluZS1oZWlnaHQ6MS40fQouemlmIHNtYWxse2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOi42ODc1cmVtO2ZvbnQtd2VpZ2h0OjcwMDtsZXR0ZXItc3BhY2luZzouMWVtO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtjb2xvcjp2YXIoLS1tdXRlZCl9Ci56aWYgYntjb2xvcjp2YXIoLS1nb2xkKTtmb250LXdlaWdodDo2NTB9Ci56ZGlhbD5zdmd7d2lkdGg6bWluKDI1MHB4LDcwdncpO2hlaWdodDphdXRvO2Rpc3BsYXk6YmxvY2s7bWFyZ2luOjAgYXV0bztvdmVyZmxvdzp2aXNpYmxlfQouenRye2Rpc3BsYXk6Z3JpZDtncmlkLXRlbXBsYXRlLWNvbHVtbnM6OTBweCBtaW5tYXgoMCwxZnIpIDI4cHg7Z2FwOjEwcHg7YWxpZ24taXRlbXM6Y2VudGVyO2ZvbnQtc2l6ZTouODc1cmVtO21hcmdpbi10b3A6OHB4fQouenRyIC5iYXJ7aGVpZ2h0OjhweH0KLnprcGlze2Rpc3BsYXk6Z3JpZDtncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KDMsbWlubWF4KDAsMWZyKSk7Z2FwOjhweDttYXJnaW4tdG9wOjE0cHh9Ci56a3BpcyBkaXZ7cGFkZGluZzoxMnB4O2JvcmRlci1yYWRpdXM6MTRweDtiYWNrZ3JvdW5kOnZhcigtLXN1cmZhY2UpO3RleHQtYWxpZ246Y2VudGVyfQouemtwaXMgYntkaXNwbGF5OmJsb2NrO2ZvbnQ6NDAwIDEuNzVyZW0vMS4xIHZhcigtLXNlcmlmKX0KLnprcGlzIHNwYW57Zm9udC1zaXplOi42ODc1cmVtO2NvbG9yOnZhcigtLW11dGVkKTtsaW5lLWhlaWdodDoxLjI1O2Rpc3BsYXk6YmxvY2t9Ci56dXJnZXtwb3NpdGlvbjpmaXhlZDtpbnNldDowO3otaW5kZXg6MzM7YmFja2dyb3VuZDp2YXIoLS1iZyk7b3ZlcmZsb3c6YXV0bztwYWRkaW5nOmNhbGModmFyKC0tc2F0KSArIDE4cHgpIDIwcHggY2FsYyh2YXIoLS1zYWIpICsgMTIwcHgpO2FuaW1hdGlvbjp6aW4gLjM1cyB2YXIoLS1lYXNlKX0KLnp1cmdlIC5pbnttYXgtd2lkdGg6NTIwcHg7bWFyZ2luOjAgYXV0b30KQGtleWZyYW1lcyB6aW57ZnJvbXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlKC45OCl9fQouenN0YWtle2ZvbnQ6NDAwIDIuNHJlbS8xLjEgdmFyKC0tc2VyaWYpO2NvbG9yOnZhcigtLWdvbGQpO2ZvbnQtdmFyaWFudC1udW1lcmljOnRhYnVsYXItbnVtczttYXJnaW46NHB4IDAgMH0KLnp3YXZle3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6Z3JpZDtwbGFjZS1pdGVtczpjZW50ZXI7bWFyZ2luOjIycHggMCA4cHh9Ci56d2F2ZT5zdmd7d2lkdGg6bWluKDI1MHB4LDcwdncpO2hlaWdodDphdXRvO292ZXJmbG93OnZpc2libGV9Ci56YnJlYXRoe3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjExOHB4O2hlaWdodDoxMThweDtib3JkZXItcmFkaXVzOjUwJTtiYWNrZ3JvdW5kOnJhZGlhbC1ncmFkaWVudChjaXJjbGUsdmFyKC0tZ2xvdyksdHJhbnNwYXJlbnQgNzAlKTtib3gtc2hhZG93Omluc2V0IDAgMCAwIDEuNXB4IHZhcigtLWdvbGQpO2FuaW1hdGlvbjp6YnIgMTBzIGVhc2UtaW4tb3V0IGluZmluaXRlfQpAa2V5ZnJhbWVzIHpicnswJXt0cmFuc2Zvcm06c2NhbGUoLjcyKX00MCV7dHJhbnNmb3JtOnNjYWxlKDEuMTIpfTEwMCV7dHJhbnNmb3JtOnNjYWxlKC43Mil9fQouendje3Bvc2l0aW9uOmFic29sdXRlO2luc2V0OjA7ZGlzcGxheTpncmlkO3BsYWNlLWl0ZW1zOmNlbnRlcjt0ZXh0LWFsaWduOmNlbnRlcjtwb2ludGVyLWV2ZW50czpub25lfQouendjIGJ7ZGlzcGxheTpibG9jaztmb250OjQwMCAyLjVyZW0vMSB2YXIoLS1zZXJpZik7Zm9udC12YXJpYW50LW51bWVyaWM6dGFidWxhci1udW1zfQouendjIHNwYW57Zm9udC1zaXplOi44MTI1cmVtO2NvbG9yOnZhcigtLW11dGVkKX0KLnphY3Rze2Rpc3BsYXk6Z3JpZDtncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KDIsbWlubWF4KDAsMWZyKSk7Z2FwOjhweDttYXJnaW4tdG9wOjE0cHh9Ci56YWN0e21pbi1oZWlnaHQ6NThweDtwYWRkaW5nOjEwcHggMTJweDtib3JkZXItcmFkaXVzOjE0cHg7YmFja2dyb3VuZDp2YXIoLS1zdXJmYWNlKTt0ZXh0LWFsaWduOmxlZnQ7Zm9udC1zaXplOi44NzVyZW07bGluZS1oZWlnaHQ6MS4zO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7Z2FwOjEwcHg7dHJhbnNpdGlvbjpiYWNrZ3JvdW5kIC4ycyx0cmFuc2Zvcm0gLjE1cyB2YXIoLS1zcHJpbmcpfQouemFjdCBpe2ZsZXg6bm9uZTt3aWR0aDoyMnB4O2hlaWdodDoyMnB4O2JvcmRlci1yYWRpdXM6NTAlO2JveC1zaGFkb3c6aW5zZXQgMCAwIDAgMS41cHggdmFyKC0tb3JiaXQpO2Rpc3BsYXk6Z3JpZDtwbGFjZS1pdGVtczpjZW50ZXJ9Ci56YWN0IGkgc3Zne3dpZHRoOjEycHg7aGVpZ2h0OjEycHg7c3Ryb2tlOnZhcigtLWdvbGQtaW5rKTtzdHJva2Utd2lkdGg6MztmaWxsOm5vbmU7b3BhY2l0eTowfQouemFjdC5vbntiYWNrZ3JvdW5kOnZhcigtLWdvbGQtc29mdCl9Ci56YWN0Lm9uIGl7YmFja2dyb3VuZDp2YXIoLS1nb2xkKTtib3gtc2hhZG93Om5vbmV9Ci56YWN0Lm9uIGkgc3Zne29wYWNpdHk6MX0KLnphY3Q6YWN0aXZle3RyYW5zZm9ybTpzY2FsZSguOTUpfQouemRoe2Rpc3BsYXk6Z3JpZDtwbGFjZS1pdGVtczpjZW50ZXI7bWFyZ2luLXRvcDoxMnB4fQouemRoIGJ1dHRvbnt3aWR0aDoxODBweDtoZWlnaHQ6MTgwcHg7Ym9yZGVyLXJhZGl1czo1MCU7YmFja2dyb3VuZDp2YXIoLS1zdXJmYWNlKTtib3gtc2hhZG93Omluc2V0IDAgMCAwIDJweCB2YXIoLS1nb2xkKTtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2dhcDo0cHg7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjFzfQouemRoIGJ1dHRvbjphY3RpdmV7dHJhbnNmb3JtOnNjYWxlKC45NSl9Ci56ZGggLmFye2ZvbnQ6NDAwIDEuNnJlbS8xLjUgdmFyKC0tYXIpfQouemRoIGJ7Zm9udDo0MDAgMi4yNXJlbS8xIHZhcigtLXNlcmlmKTtjb2xvcjp2YXIoLS1nb2xkKX0KLnpyZWFzb25ze2xpc3Qtc3R5bGU6bm9uZTttYXJnaW46MTBweCAwIDA7cGFkZGluZzowO2Rpc3BsYXk6Z3JpZDtnYXA6NnB4fQouenJlYXNvbnMgbGl7cGFkZGluZzoxMHB4IDE0cHg7Ym9yZGVyLXJhZGl1czoxMnB4O2JhY2tncm91bmQ6dmFyKC0tZ29sZC1zb2Z0KTtmb250LXNpemU6LjkzNzVyZW19Ci56ZGFya3twb3NpdGlvbjpmaXhlZDtpbnNldDowO3otaW5kZXg6MzQ7YmFja2dyb3VuZDojMDMwODA2O2NvbG9yOiNDOUQ2RDA7b3ZlcmZsb3c6YXV0bztwYWRkaW5nOmNhbGModmFyKC0tc2F0KSArIDMwcHgpIDIycHggY2FsYyh2YXIoLS1zYWIpICsgMTIwcHgpO2FuaW1hdGlvbjp6ZmFkZSAuOXMgZWFzZSBib3RofQouemRhcmsgLmlue21heC13aWR0aDo1MjBweDttYXJnaW46MCBhdXRvfQpAa2V5ZnJhbWVzIHpmYWRle2Zyb217b3BhY2l0eTowfX0KLnpkYXJrIGgye2NvbG9yOiNFRUYzRUZ9Ci56ZGFyayAubnVtLWJpZ3tmb250OjQwMCA1cmVtLzEgdmFyKC0tc2VyaWYpO2NvbG9yOiM2QjdBNzQ7Zm9udC12YXJpYW50LW51bWVyaWM6dGFidWxhci1udW1zO3RleHQtYWxpZ246Y2VudGVyO21hcmdpbjoxMHB4IDAgMH0KLnpkYXJrIC5tdXRlZCwuemRhcmsgLnNtYWxsLm11dGVke2NvbG9yOiM3RThGODh9Ci56ZGFyayAuY2hpcHtiYWNrZ3JvdW5kOiMxMzIwMUI7Y29sb3I6I0M5RDZEMH0KLnpkYXJrIC5jaGlwW2FyaWEtcHJlc3NlZD0idHJ1ZSJde2JhY2tncm91bmQ6I0U5QzQ2QTtjb2xvcjojMUExNDA1fQouemRhcmsgdGV4dGFyZWF7YmFja2dyb3VuZDojMEMxNjEyO2NvbG9yOiNFRUYzRUZ9Ci56Z3Bze2Rpc3BsYXk6Z3JpZDtnYXA6OHB4fQouemRrdHtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2FsaWduLWl0ZW1zOmNlbnRlcjtnYXA6NHB4O3dpZHRoOjEwMCU7bWFyZ2luLXRvcDoxMHB4O3BhZGRpbmc6MThweCAxMnB4O2JvcmRlci1yYWRpdXM6MThweDtiYWNrZ3JvdW5kOnZhcigtLXJhaXNlKTt0b3VjaC1hY3Rpb246bWFuaXB1bGF0aW9uOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lfQouemRrdCAuYXJ7Zm9udDo0MDAgMS41cmVtLzEuNiB2YXIoLS1hcik7Y29sb3I6dmFyKC0tZ29sZCk7dGV4dC1hbGlnbjpjZW50ZXJ9Ci56ZGt0IGJ7Zm9udDo0MDAgM3JlbS8xIHZhcigtLXNlcmlmKX0KLnpka3Q6YWN0aXZle3RyYW5zZm9ybTpzY2FsZSguOTgpfQouemdwYntkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2dhcDoxMnB4O3dpZHRoOjEwMCU7cGFkZGluZzoxMnB4IDE0cHg7Ym9yZGVyLXJhZGl1czoxNHB4O2JhY2tncm91bmQ6dmFyKC0tcmFpc2UpO3RleHQtYWxpZ246bGVmdDtmb250LXdlaWdodDo2MDA7bWluLWhlaWdodDo1MnB4fQouemdwYiBpe2ZsZXg6bm9uZTt3aWR0aDoyNHB4O2hlaWdodDoyNHB4O2JvcmRlci1yYWRpdXM6NTAlO2Rpc3BsYXk6Z3JpZDtwbGFjZS1pdGVtczpjZW50ZXI7Ym94LXNoYWRvdzppbnNldCAwIDAgMCAycHggdmFyKC0tb3JiaXQpfQouemdwYiBpIHN2Z3t3aWR0aDoxM3B4O2hlaWdodDoxM3B4O3N0cm9rZTp0cmFuc3BhcmVudDtzdHJva2Utd2lkdGg6MztmaWxsOm5vbmV9Ci56Z3BiLm9uIGl7YmFja2dyb3VuZDp2YXIoLS1taW50KTtib3gtc2hhZG93Om5vbmV9LnpncGIub24gaSBzdmd7c3Ryb2tlOnZhcigtLXN1cmZhY2UpfQouemdwYjpkaXNhYmxlZHtvcGFjaXR5Oi40NX0KLnpncGx7ZGlzcGxheTpncmlkO2dhcDo2cHg7bWFyZ2luLXRvcDo4cHh9Ci56Z3BsPmRpdntkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2dhcDoxMHB4O3BhZGRpbmc6OHB4IDEycHg7Ym9yZGVyLXJhZGl1czoxMnB4O2JhY2tncm91bmQ6dmFyKC0tcmFpc2UpfQouemRhcmsgLnpxe21hcmdpbi10b3A6MjJweDtwYWRkaW5nOjE0cHggMTZweDtib3JkZXItcmFkaXVzOjE2cHg7YmFja2dyb3VuZDojMEMxNjEyO2NvbG9yOiNDOUQ2RDA7Zm9udC1zaXplOi45Mzc1cmVtO2xpbmUtaGVpZ2h0OjEuNX0KLnpkYXJrIC5idG4ucXVpZXR7YmFja2dyb3VuZDojMTMyMDFCO2NvbG9yOiNFRUYzRUZ9Ci56Ymlne2Rpc3BsYXk6Z3JpZDtwbGFjZS1pdGVtczpjZW50ZXI7bWFyZ2luLXRvcDoxOHB4fQouemJpZyBidXR0b257d2lkdGg6MTcwcHg7aGVpZ2h0OjE3MHB4O2JvcmRlci1yYWRpdXM6NTAlO2JhY2tncm91bmQ6dmFyKC0tc3VyZmFjZSk7Ym94LXNoYWRvdzppbnNldCAwIDAgMCAycHggdmFyKC0tb3JiaXQpO2ZvbnQ6NDAwIDMuMjVyZW0vMSB2YXIoLS1zZXJpZik7Y29sb3I6dmFyKC0taW5rKTt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMTJzIHZhcigtLXNwcmluZyl9Ci56YmlnIGJ1dHRvbjphY3RpdmV7dHJhbnNmb3JtOnNjYWxlKC45Myl9Ci56YmFycz5zdmd7d2lkdGg6MTAwJTtoZWlnaHQ6YXV0bztkaXNwbGF5OmJsb2NrO292ZXJmbG93OnZpc2libGV9Ci56cnVsZXJ7ZGlzcGxheTpncmlkO2dyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoMTEsbWlubWF4KDAsMWZyKSk7Z2FwOjRweDttYXJnaW4tdG9wOjEwcHh9Ci56cnVsZXIgYnV0dG9ue21pbi1oZWlnaHQ6NDBweDtib3JkZXItcmFkaXVzOjEwcHg7YmFja2dyb3VuZDp2YXIoLS1zdXJmYWNlKTtmb250LXdlaWdodDo3MDA7Zm9udC1zaXplOi44NzVyZW07Y29sb3I6dmFyKC0taW5rLTIpfQouenJ1bGVyIGJ1dHRvblthcmlhLXByZXNzZWQ9InRydWUiXXtiYWNrZ3JvdW5kOnZhcigtLWdvbGQpO2NvbG9yOnZhcigtLWdvbGQtaW5rKX0KLnpzZXQgaW5wdXR7d2lkdGg6MTAwJX0KYDsKICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3QpOwogIH0KCiAgLyogLS0tLS0tLS0tLSBvdXRpbHMgLS0tLS0tLS0tLSAqLwogIGNvbnN0IEggPSAoKSA9PiBaLmQuaGFiaXRzLmZpbmQoaCA9PiBoLmlkID09PSBaLmhpZCkgfHwgWi5kLmhhYml0c1swXTsKICBjb25zdCBub3cgPSAoKSA9PiBEYXRlLm5vdygpOwogIGNvbnN0IGRheXMgPSBoID0+IE1hdGgubWF4KDAsIChub3coKSAtIGguc3RhcnQpIC8gREFZKTsKICBjb25zdCB0d28gPSBuID0+IFN0cmluZyhuKS5wYWRTdGFydCgyLCAnMCcpOwogIGZ1bmN0aW9uIGR1cihtcykgeyBjb25zdCBzID0gTWF0aC5mbG9vcihtcyAvIDEwMDApLCBkID0gTWF0aC5mbG9vcihzIC8gODY0MDApOyByZXR1cm4gYCR7ZH0gaiAke3R3byhNYXRoLmZsb29yKHMgJSA4NjQwMCAvIDM2MDApKX06JHt0d28oTWF0aC5mbG9vcihzICUgMzYwMCAvIDYwKSl9OiR7dHdvKHMgJSA2MCl9YDsgfQogIGNvbnN0IG5leHRNcyA9IGQgPT4gTVMuZmluZChtID0+IG0gPiBkKSB8fCBudWxsOwogIGNvbnN0IHByZXZNcyA9IGQgPT4gWzAsIC4uLk1TXS5maWx0ZXIobSA9PiBtIDw9IGQpLnBvcCgpOwogIGFzeW5jIGZ1bmN0aW9uIHBlcnNpc3QoKSB7IGlmICghWi5rZXkpIHJldHVybjsgUy56YyA9IGF3YWl0IHpTZWFsKFoua2V5LCBaLnNhbHQsIFouZCk7IHNhdmUodHJ1ZSk7IH0KICBjb25zdCBpY28gPSAocCwgc3ogPSAyMCkgPT4gYDxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iJHtzen0iIGhlaWdodD0iJHtzen0iIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBhcmlhLWhpZGRlbj0idHJ1ZSI+JHtwfTwvc3ZnPmA7CiAgY29uc3QgTE9DSyA9IGljbygnPHJlY3QgeD0iNSIgeT0iMTAuNSIgd2lkdGg9IjE0IiBoZWlnaHQ9IjEwIiByeD0iMi41Ii8+PHBhdGggZD0iTTguNSAxMC41VjcuNWEzLjUgMy41IDAgMCAxIDcgMHYzIi8+Jyk7CiAgY29uc3QgWCA9IGljbygnPHBhdGggZD0iTTYgNmwxMiAxMk0xOCA2TDYgMTgiLz4nLCAxOCk7CiAgZnVuY3Rpb24gbmV3SGFiaXQobmFtZSwgbW9kZSwgbmljLCBzdGFydCkgewogICAgcmV0dXJuIHsgaWQ6ICdoJyArIHVpZCgpLCBuYW1lLCBtb2RlLCBuaWMsIHN0YXJ0OiBzdGFydCB8fCBub3coKSwgYmVzdDogMCwgcmVsYXBzZXM6IFtdLCB1cmdlczogW10sIGxvZzogW10sIHJlYWR5OiBbXSwgcmVhc29uczogW10sIHBsYW5zOiAobmljID8gUExBTlNfTiA6IFBMQU5TX0IpLm1hcChwID0+IHAuc2xpY2UoKSksIGJhcjoge30sIG1zOiB7fSwgbGFzdENsZWFuOiAnJywgcHJpY2U6ICcnLCBwZXI6ICcnIH07CiAgfQoKICAvKiAtLS0tLS0tLS0tIHLDqWNvbXBlbnNlcyBwcm9wcmVzIMOgIGwnZXNwYWNlIC0tLS0tLS0tLS0gKi8KICBmdW5jdGlvbiBkYWlseUNoZWNrKCkgewogICAgY29uc3QgayA9IHRvZGF5SVNPKCk7IGxldCBjaGFuZ2VkID0gZmFsc2U7CiAgICBaLmQuaGFiaXRzLmZpbHRlcihoID0+IGgubW9kZSA9PT0gJ3N0b3AnKS5mb3JFYWNoKGggPT4gewogICAgICBjb25zdCBkID0gZGF5cyhoKTsKICAgICAgY29uc3QgZnJlc2ggPSBNUy5maWx0ZXIobSA9PiBkID49IG0gJiYgIWgubXNbbV0pOyBmcmVzaC5mb3JFYWNoKG0gPT4geyBoLm1zW21dID0gMTsgfSk7CiAgICAgIGNvbnN0IHRvcCA9IGZyZXNoW2ZyZXNoLmxlbmd0aCAtIDFdLCBjbGVhbiA9IGQgPj0gMSAmJiBoLmxhc3RDbGVhbiAhPT0gazsKICAgICAgaWYgKGNsZWFuKSBoLmxhc3RDbGVhbiA9IGs7CiAgICAgIGlmIChmcmVzaC5sZW5ndGggfHwgY2xlYW4pIGNoYW5nZWQgPSB0cnVlOwogICAgICBpZiAodG9wKSBzZXRUaW1lb3V0KCgpID0+IHsgbGFzdFB0ID0geyB4OiBpbm5lcldpZHRoIC8gMiwgeTogaW5uZXJIZWlnaHQgKiAuMzUgfTsgcmV3YXJkKHRvcCA+PSAzMCA/IDMwIDogdG9wID49IDcgPyAxNSA6IDgsIHsgYmlnOiB0cnVlLCBtc2c6IFtgUGFsaWVyICR7dG9wfSBqb3VyJHt0b3AgPiAxID8gJ3MnIDogJyd9YCwgdG9wID49IDQwID8gJ1F1YXJhbnRlIGpvdXJzIDogbGUgdGVtcHMgcXVcJ2lsIGZhdXQsIGRpdC1vbiwgcG91ciBxdVwndW4gw6l0YXQgZGV2aWVubmUgdW5lIG5hdHVyZS4gVHUgeSBlcy4nIDogJ1R1IHZpZW5zIGRcJ2FsbHVtZXIgdW5lIG5vdXZlbGxlIMOpdG9pbGUuIFJlZ2FyZGUgbGUgY2hlbWluIHBhcmNvdXJ1LiddIH0pOyB9LCA3MDApOwogICAgICBlbHNlIGlmIChjbGVhbikgc2V0VGltZW91dCgoKSA9PiB7IGxhc3RQdCA9IHsgeDogaW5uZXJXaWR0aCAvIDIsIHk6IGlubmVySGVpZ2h0ICogLjM1IH07IHJld2FyZCg0LCB7IG1zZzogWydVbiBqb3VyIGRlIHBsdXMnLCBgJHtlc2MoaC5uYW1lKX0gOiAke01hdGguZmxvb3IoZCl9IGpvdXJzIHRlbnVzLiBDaGFxdWUgam91ciByZW5mb3JjZSBsZSBjaGVtaW4gcXVlIHR1IGNvbnN0cnVpcy5gXSB9KTsgfSwgNzAwKTsKICAgICAgaC5iZXN0ID0gTWF0aC5tYXgoaC5iZXN0IHx8IDAsIG5vdygpIC0gaC5zdGFydCk7CiAgICB9KTsKICAgIGlmIChjaGFuZ2VkKSBwZXJzaXN0KCk7CiAgfQoKICAvKiAtLS0tLS0tLS0tIHZ1ZXMgLS0tLS0tLS0tLSAqLwogIGZ1bmN0aW9uIGhlYWQoKSB7CiAgICByZXR1cm4gYDxoZWFkZXIgY2xhc3M9InRvcCI+PGRpdj48cCBjbGFzcz0iZXllYnJvdyI+RXNwYWNlIHByaXbDqTwvcD48aDE+SmloYWQgPGVtPmFuLW5hZnM8L2VtPjwvaDE+PHA+TGUgY29tYmF0IGNvbnRyZSBzb2ktbcOqbWUuIEljaSwgcGVyc29ubmUgZCdhdXRyZSBuJ2VudHJlLjwvcD48L2Rpdj4KICAgICAgPGRpdiBjbGFzcz0idG9wLWFjdGlvbnMiPjxidXR0b24gY2xhc3M9Imljb24tYnRuIiBkYXRhLXpsb2NrIGFyaWEtbGFiZWw9IlZlcnJvdWlsbGVyIj4ke0xPQ0t9PC9idXR0b24+PC9kaXY+PC9oZWFkZXI+YDsKICB9CiAgZnVuY3Rpb24gdGFicygpIHsKICAgIGlmIChaLmQuaGFiaXRzLmxlbmd0aCA8IDIpIHJldHVybiAnJzsKICAgIHJldHVybiBgPGRpdiBjbGFzcz0ic2VnIiByb2xlPSJncm91cCIgc3R5bGU9Im1hcmdpbi10b3A6MjBweCI+JHtaLmQuaGFiaXRzLm1hcChoID0+IGA8YnV0dG9uIGRhdGEtemg9IiR7aC5pZH0iIGFyaWEtcHJlc3NlZD0iJHtoLmlkID09PSBIKCkuaWR9Ij4ke2VzYyhoLm5hbWUgfHwgJ1NhbnMgbm9tJyl9PC9idXR0b24+YCkuam9pbignJyl9PC9kaXY+YDsKICB9CiAgZnVuY3Rpb24gaGVybyhoKSB7CiAgICBjb25zdCBkID0gZGF5cyhoKSwgbnggPSBuZXh0TXMoZCksIHB2ID0gcHJldk1zKGQpLCBwID0gbnggPyAoZCAtIHB2KSAvIChueCAtIHB2KSA6IDEsIFIgPSAxMDA7CiAgICByZXR1cm4gYDxkaXYgY2xhc3M9InpoZXJvIj48c3ZnIHZpZXdCb3g9Ii0xMzAgLTEzMCAyNjAgMjYwIiBhcmlhLWhpZGRlbj0idHJ1ZSI+CiAgICAgIDxjaXJjbGUgcj0iJHtSfSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ2YXIoLS1yYWlzZSkiIHN0cm9rZS13aWR0aD0iMTYiLz4KICAgICAgPGNpcmNsZSByPSIke1J9IiBmaWxsPSJub25lIiBzdHJva2U9InZhcigtLWdvbGQpIiBzdHJva2Utd2lkdGg9IjE2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHRyYW5zZm9ybT0icm90YXRlKC05MCkiICR7cmluZ0Rhc2goUiwgcCl9IHN0eWxlPSJmaWx0ZXI6ZHJvcC1zaGFkb3coMCAwIDEwcHggdmFyKC0tZ2xvdykpIi8+PC9zdmc+CiAgICAgIDxkaXYgY2xhc3M9InpoYyI+PGRpdj48YiBjbGFzcz0ibnVtIj4ke01hdGguZmxvb3IoZCl9PC9iPjxzcGFuPmpvdXIke01hdGguZmxvb3IoZCkgPiAxID8gJ3MnIDogJyd9IHRlbnUke01hdGguZmxvb3IoZCkgPiAxID8gJ3MnIDogJyd9PC9zcGFuPjxwIGNsYXNzPSJ6dGljayIgaWQ9InpUaWNrIj4ke2R1cihub3coKSAtIGguc3RhcnQpLnNwbGl0KCcgJykuc2xpY2UoMikuam9pbignICcpfTwvcD48c3Bhbj4ke254ID8gYHByb2NoYWluZSDDqXRvaWxlIDogJHtueH0gamAgOiAnYXUtZGVsw6AgZGVzIMOpdG9pbGVzJ308L3NwYW4+PC9kaXY+PC9kaXY+PC9kaXY+YDsKICB9CiAgZnVuY3Rpb24gc3RhcnMoaCkgewogICAgY29uc3QgZCA9IGRheXMoaCksIFcgPSAzMzAsIHB0cyA9IE1TLm1hcCgobSwgaSkgPT4geyBjb25zdCB4ID0gMTQgKyBpICogKFcgLSAyOCkgLyAoTVMubGVuZ3RoIC0gMSksIHkgPSA0MCAtIE1hdGguc2luKGkgLyAoTVMubGVuZ3RoIC0gMSkgKiBNYXRoLlBJKSAqIDI2OyByZXR1cm4gW3gsIHksIG1dOyB9KTsKICAgIGNvbnN0IG54ID0gbmV4dE1zKGQpOwogICAgcmV0dXJuIGA8ZGl2IGNsYXNzPSJ6bXMiPjxzdmcgdmlld0JveD0iMCAwICR7V30gNzQiIHJvbGU9ImltZyIgYXJpYS1sYWJlbD0iUGFsaWVycyI+CiAgICAgIDxwb2x5bGluZSBwb2ludHM9IiR7cHRzLm1hcChwID0+IHAuc2xpY2UoMCwgMikuam9pbignLCcpKS5qb2luKCcgJyl9IiBmaWxsPSJub25lIiBzdHJva2U9InZhcigtLW9yYml0KSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtZGFzaGFycmF5PSIyIDQiLz4KICAgICAgJHtwdHMubWFwKChbeCwgeSwgbV0pID0+IHsgY29uc3Qgb24gPSBkID49IG0sIG54dCA9IG0gPT09IG54OyByZXR1cm4gYDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKCR7eC50b0ZpeGVkKDEpfSAke3kudG9GaXhlZCgxKX0pIj4ke29uID8gJzxjaXJjbGUgcj0iMTAiIGZpbGw9InZhcigtLWdsb3cpIi8+JyA6ICcnfTxjaXJjbGUgcj0iJHtvbiA/IDUuNSA6IDR9IiBmaWxsPSIke29uID8gJ3ZhcigtLWdvbGQpJyA6ICd2YXIoLS1zdXJmYWNlKSd9IiBzdHJva2U9IiR7b24gfHwgbnh0ID8gJ3ZhcigtLWdvbGQpJyA6ICd2YXIoLS1vcmJpdCknfSIgc3Ryb2tlLXdpZHRoPSIke254dCA/IDIgOiAxLjJ9Ij4ke254dCA/ICc8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjQ7Njs0IiBkdXI9IjJzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPicgOiAnJ308L2NpcmNsZT48dGV4dCB5PSIyMiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3R5bGU9ImZvbnQtc2l6ZTo5LjVweDtmb250LXdlaWdodDo3MDA7ZmlsbDp2YXIoLS0ke29uID8gJ2dvbGQnIDogJ211dGVkJ30pIj4ke219PC90ZXh0PjwvZz5gOyB9KS5qb2luKCcnKX0KICAgIDwvc3ZnPjwvZGl2PmA7CiAgfQogIGZ1bmN0aW9uIGRpYWwoaCkgewogICAgY29uc3QgUiA9IDc4LCBldiA9IGgubW9kZSA9PT0gJ3dhdGNoJyA/IGgubG9nLnNsaWNlKC0yMDApLm1hcCh0ID0+IFt0LCAnZ29sZCddKSA6IGgudXJnZXMuc2xpY2UoLTE1MCkubWFwKHUgPT4gW3UudCwgdS53b24gPyAnZ29sZCcgOiAnZGFuZ2VyJ10pLmNvbmNhdChoLnJlbGFwc2VzLnNsaWNlKC04MCkubWFwKHIgPT4gW3IudCwgJ2RhbmdlciddKSk7CiAgICBjb25zdCBjbnQgPSBBcnJheSgyNCkuZmlsbCgwKTsgZXYuZm9yRWFjaCgoW3RdKSA9PiBjbnRbbmV3IERhdGUodCkuZ2V0SG91cnMoKV0rKyk7CiAgICBjb25zdCB0b3AgPSBjbnQuaW5kZXhPZihNYXRoLm1heCguLi5jbnQpKTsKICAgIGxldCBzZWVkID0gMzsgY29uc3Qgcm5kID0gKCkgPT4gKHNlZWQgPSAoc2VlZCAqIDkzMDEgKyA0OTI5NykgJSAyMzMyODApIC8gMjMzMjgwOwogICAgY29uc3QgZG90cyA9IGV2Lm1hcCgoW3QsIGNdKSA9PiB7IGNvbnN0IGR0ID0gbmV3IERhdGUodCksIGEgPSAoZHQuZ2V0SG91cnMoKSArIGR0LmdldE1pbnV0ZXMoKSAvIDYwKSAqIDE1LCBbeCwgeV0gPSBwb2xhcihSIC0gMTQgKyBybmQoKSAqIDI4LCBhKTsgcmV0dXJuIGA8Y2lyY2xlIGN4PSIke3gudG9GaXhlZCgxKX0iIGN5PSIke3kudG9GaXhlZCgxKX0iIHI9IjMuMiIgZmlsbD0idmFyKC0tJHtjfSkiIG9wYWNpdHk9Ii44NSIvPmA7IH0pLmpvaW4oJycpOwogICAgY29uc3QgdGlja3MgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiAyNCB9LCAoXywgaSkgPT4geyBjb25zdCBbeDAsIHkwXSA9IHBvbGFyKFIgKyAyMCwgaSAqIDE1KSwgW3gxLCB5MV0gPSBwb2xhcihSICsgKGkgJSA2ID8gMjQgOiAyOCksIGkgKiAxNSk7IHJldHVybiBgPGxpbmUgeDE9IiR7eDAudG9GaXhlZCgxKX0iIHkxPSIke3kwLnRvRml4ZWQoMSl9IiB4Mj0iJHt4MS50b0ZpeGVkKDEpfSIgeTI9IiR7eTEudG9GaXhlZCgxKX0iIHN0cm9rZT0idmFyKC0tbXV0ZWQpIiBzdHJva2Utd2lkdGg9IiR7aSAlIDYgPyAxIDogMS42fSIvPmA7IH0pLmpvaW4oJycpOwogICAgY29uc3QgbGJsID0gWzAsIDYsIDEyLCAxOF0ubWFwKGhoID0+IHsgY29uc3QgW3gsIHldID0gcG9sYXIoUiArIDQwLCBoaCAqIDE1KTsgcmV0dXJuIGA8dGV4dCB4PSIke3gudG9GaXhlZCgxKX0iIHk9IiR7KHkgKyA0KS50b0ZpeGVkKDEpfSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3R5bGU9ImZvbnQtc2l6ZToxMHB4O2ZvbnQtd2VpZ2h0OjcwMDtmaWxsOnZhcigtLW11dGVkKSI+JHtoaH0gaDwvdGV4dD5gOyB9KS5qb2luKCcnKTsKICAgIHJldHVybiBgPGRpdiBjbGFzcz0iemRpYWwiPjxzdmcgdmlld0JveD0iLTEzMCAtMTMwIDI2MCAyNjAiIHJvbGU9ImltZyIgYXJpYS1sYWJlbD0iSGV1cmVzIGRlcyBlbnZpZXMiPgogICAgICA8Y2lyY2xlIHI9IiR7Un0iIGZpbGw9Im5vbmUiIHN0cm9rZT0idmFyKC0tcmFpc2UpIiBzdHJva2Utd2lkdGg9IjMwIi8+JHt0aWNrc30ke2xibH0ke2RvdHN9CiAgICAgIDx0ZXh0IHk9Ii00IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHlsZT0iZm9udDo0MDAgMjZweCB2YXIoLS1zZXJpZik7ZmlsbDp2YXIoLS1pbmspIj4ke2V2Lmxlbmd0aCA/IGAke3RvcH0gaGAgOiAn4oCUJ308L3RleHQ+CiAgICAgIDx0ZXh0IHk9IjE0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHlsZT0iZm9udC1zaXplOjlweDtmb250LXdlaWdodDo3MDA7bGV0dGVyLXNwYWNpbmc6LjFlbTtmaWxsOnZhcigtLW11dGVkKSI+JHtldi5sZW5ndGggPyAnSEVVUkUgw4AgUklTUVVFJyA6ICdQQVMgRU5DT1JFIERFIERPTk7DiUVTJ308L3RleHQ+PC9zdmc+PC9kaXY+YDsKICB9CiAgZnVuY3Rpb24gdHJpZ2dlcnMoaCkgewogICAgY29uc3QgYyA9IHt9OyBoLnVyZ2VzLmNvbmNhdChoLnJlbGFwc2VzKS5mb3JFYWNoKHUgPT4geyBpZiAodS50cmlnKSBjW3UudHJpZ10gPSAoY1t1LnRyaWddIHx8IDApICsgMTsgfSk7CiAgICBjb25zdCBhcnIgPSBUUklHLm1hcCgoW2ssIG5dKSA9PiBbbiwgY1trXSB8fCAwXSkuZmlsdGVyKHggPT4geFsxXSkuc29ydCgoYSwgYikgPT4gYlsxXSAtIGFbMV0pOwogICAgaWYgKCFhcnIubGVuZ3RoKSByZXR1cm4gJyc7CiAgICBjb25zdCBteCA9IGFyclswXVsxXTsKICAgIHJldHVybiBgPHAgY2xhc3M9ImV5ZWJyb3ciIHN0eWxlPSJtYXJnaW4tdG9wOjE4cHgiPkTDqWNsZW5jaGV1cnM8L3A+JHthcnIubWFwKChbbiwgdl0pID0+IGA8ZGl2IGNsYXNzPSJ6dHIiPjxzcGFuPiR7bn08L3NwYW4+PGRpdiBjbGFzcz0iYmFyIj48aSBzdHlsZT0id2lkdGg6JHt2IC8gbXggKiAxMDB9JSI+PC9pPjwvZGl2PjxiIGNsYXNzPSJudW0iPiR7dn08L2I+PC9kaXY+YCkuam9pbignJyl9YDsKICB9CiAgZnVuY3Rpb24gcGxhbnNCbG9jayhoKSB7CiAgICByZXR1cm4gYDxzZWN0aW9uPjxkaXYgY2xhc3M9InJvdyBiZXR3ZWVuIiBzdHlsZT0ibWFyZ2luLWJvdHRvbToxMnB4Ij48aDIgc3R5bGU9Im1hcmdpbjowIj5TaeKApiBhbG9yc+KApjwvaDI+PGJ1dHRvbiBjbGFzcz0ibGluay1idG4iIGRhdGEtemVkaXQ9InBsYW5zIj5Nb2RpZmllcjwvYnV0dG9uPjwvZGl2PgogICAgICA8cCBjbGFzcz0ic21hbGwgbXV0ZWQiIHN0eWxlPSJtYXJnaW46LTRweCAwIDEycHgiPkTDqWNpZMOpIMOgIGZyb2lkLCBhcHBsaXF1w6kgw6AgY2hhdWQuIFByw6lwYXJlciBzYSByw6lwb25zZSDDoCBsJ2F2YW5jZSBkb3VibGUgbGVzIGNoYW5jZXMgZGUgcyd5IHRlbmlyLjwvcD4KICAgICAgPGRpdiBjbGFzcz0iemlmIj4ke2gucGxhbnMubWFwKHAgPT4gYDxkaXY+PHNtYWxsPlNpPC9zbWFsbD4ke2VzYyhwWzBdKX08YnI+PHNtYWxsIHN0eWxlPSJtYXJnaW4tdG9wOjZweCI+QWxvcnM8L3NtYWxsPjxiPiR7ZXNjKHBbMV0pfTwvYj48L2Rpdj5gKS5qb2luKCcnKSB8fCAnPHAgY2xhc3M9ImVtcHR5Ij5BdWN1biBwbGFuLjwvcD4nfTwvZGl2Pjwvc2VjdGlvbj5gOwogIH0KICBmdW5jdGlvbiByZWFzb25zQmxvY2soaCkgewogICAgcmV0dXJuIGA8c2VjdGlvbj48ZGl2IGNsYXNzPSJyb3cgYmV0d2VlbiIgc3R5bGU9Im1hcmdpbi1ib3R0b206MTJweCI+PGgyIHN0eWxlPSJtYXJnaW46MCI+TWVzIHJhaXNvbnM8L2gyPjxidXR0b24gY2xhc3M9ImxpbmstYnRuIiBkYXRhLXplZGl0PSJyZWFzb25zIj5Nb2RpZmllcjwvYnV0dG9uPjwvZGl2PgogICAgICAke2gucmVhc29ucy5sZW5ndGggPyBgPHVsIGNsYXNzPSJ6cmVhc29ucyI+JHtoLnJlYXNvbnMubWFwKHIgPT4gYDxsaT4ke2VzYyhyKX08L2xpPmApLmpvaW4oJycpfTwvdWw+YCA6ICc8cCBjbGFzcz0ic21hbGwgbXV0ZWQiPsOJY3JpcyBwb3VycXVvaSB0dSBhcnLDqnRlcywgYXZlYyB0ZXMgbW90cy4gRWxsZXMgc1wnYWZmaWNoZXJvbnQgYXUgbW9tZW50IG/DuSBsXCdlbnZpZSBtb250ZS48L3A+PGJ1dHRvbiBjbGFzcz0iYnRuIHNtIGdob3N0IiBkYXRhLXplZGl0PSJyZWFzb25zIiBzdHlsZT0ibWFyZ2luLXRvcDoxMHB4Ij7DiWNyaXJlIG1lcyByYWlzb25zPC9idXR0b24+J308L3NlY3Rpb24+YDsKICB9CiAgZnVuY3Rpb24gYmFycmllcnMoaCkgewogICAgY29uc3QgbGlzdCA9IGgubmljID8gQkFSX04gOiBCQVJfQiwgbiA9IGxpc3QuZmlsdGVyKGIgPT4gaC5iYXJbYlswXV0pLmxlbmd0aDsKICAgIHJldHVybiBgPHNlY3Rpb24+PGRpdiBjbGFzcz0icm93IGJldHdlZW4iIHN0eWxlPSJhbGlnbi1pdGVtczpmbGV4LWVuZCI+PGgyIHN0eWxlPSJtYXJnaW46MCI+QmFycmnDqHJlczwvaDI+PHAgY2xhc3M9InNtYWxsIG11dGVkIiBzdHlsZT0ibWFyZ2luOjAiPiR7bn0vJHtsaXN0Lmxlbmd0aH08L3A+PC9kaXY+CiAgICAgIDxwIGNsYXNzPSJzbWFsbCBtdXRlZCIgc3R5bGU9Im1hcmdpbjo2cHggMCA0cHgiPlRhIHZvbG9udMOpIGVzdCBwbHVzIGZhaWJsZSBhdSBtYXV2YWlzIG1vbWVudC4gTGVzIGJhcnJpw6hyZXMgdHJhdmFpbGxlbnQgw6Agc2EgcGxhY2UuPC9wPgogICAgICA8ZGl2IGNsYXNzPSJjaGVja3MiPiR7bGlzdC5tYXAoYiA9PiBgPGxhYmVsIGNsYXNzPSJjaGVjayI+PGlucHV0IHR5cGU9ImNoZWNrYm94IiBkYXRhLXpiYXI9IiR7YlswXX0iICR7aC5iYXJbYlswXV0gPyAnY2hlY2tlZCcgOiAnJ30+PHNwYW4gY2xhc3M9ImJveCI+JHtJQ09OLnRpY2t9PC9zcGFuPjxzcGFuIGNsYXNzPSJ0eHQiPiR7YlsxXX0ke2JbMl0gPyBgPGJyPjxzcGFuIGNsYXNzPSJzbWFsbCBtdXRlZCI+JHtiWzJdfTwvc3Bhbj5gIDogJyd9PC9zcGFuPjwvbGFiZWw+YCkuam9pbignJyl9PC9kaXY+PC9zZWN0aW9uPmA7CiAgfQogIGZ1bmN0aW9uIHN0YXRzKGgpIHsKICAgIGNvbnN0IHdvbiA9IGgudXJnZXMuZmlsdGVyKHUgPT4gdS53b24pLmxlbmd0aCwgd2sgPSBoLnJlbGFwc2VzLmZpbHRlcihyID0+IG5vdygpIC0gci50IDwgNyAqIERBWSkubGVuZ3RoOwogICAgY29uc3QgdG90ID0gaC5yZWxhcHNlcy5sZW5ndGg7CiAgICByZXR1cm4gYDxzZWN0aW9uPjxoMj5DZSBxdWUgZGlzZW50IHRlcyBkb25uw6llczwvaDI+CiAgICAgIDxkaXYgY2xhc3M9InprcGlzIj48ZGl2PjxiIGNsYXNzPSJudW0iPiR7d29ufTwvYj48c3Bhbj5lbnZpZXMgdmFpbmN1ZXM8L3NwYW4+PC9kaXY+PGRpdj48YiBjbGFzcz0ibnVtIj4ke01hdGguZmxvb3IoKE1hdGgubWF4KGguYmVzdCB8fCAwLCBub3coKSAtIGguc3RhcnQpKSAvIERBWSl9PC9iPjxzcGFuPmpvdXJzLCB0b24gcmVjb3JkPC9zcGFuPjwvZGl2PjxkaXY+PGIgY2xhc3M9Im51bSI+JHt0b3R9PC9iPjxzcGFuPnJlY2h1dGVzIG5vdMOpZXM8L3NwYW4+PC9kaXY+PC9kaXY+CiAgICAgICR7ZGlhbChoKX0ke3RyaWdnZXJzKGgpfQogICAgICAke3drID49IDMgPyBgPGRpdiBjbGFzcz0iYWxlcnQiIHN0eWxlPSJtYXJnaW4tdG9wOjE4cHgiPiR7SUNPTi5pbmZvfTxzcGFuPiR7d2t9IHJlY2h1dGVzIGVuIDcgam91cnMuIENlIG4nZXN0IHBhcyB1biBtYW5xdWUgZGUgdm9sb250w6kgOiBjJ2VzdCBsZSBzaWduZSBxdSdpbCBmYXV0IHBsdXMgZGUgYmFycmnDqHJlcywgb3UgZGUgbCdhaWRlLiBFbiBwYXJsZXIgw6AgdW4gbcOpZGVjaW4gb3Ugw6AgdW4gcHN5Y2hvbG9ndWUgbidhIHJpZW4gZGUgaG9udGV1eCwgYydlc3QgdW4gbW95ZW4gZGUgcGx1cyBwb3VyIGdhZ25lci48L3NwYW4+PC9kaXY+YCA6ICcnfTwvc2VjdGlvbj5gOwogIH0KICBmdW5jdGlvbiB2U3RvcChoKSB7CiAgICByZXR1cm4gYCR7Z3BDYXJkKGgpfSR7aGVybyhoKX0KICAgICAgPGJ1dHRvbiBjbGFzcz0ienNvcyIgZGF0YS16dXJnZT4ke2ljbygnPHBhdGggZD0iTTEyIDNjMiAzIDUgNS41IDUgOS41YTUgNSAwIDAgMS0xMCAwYzAtMiAxLTMuNSAyLTQuNSAwIDIgMSAzIDIgMyAwLTMtMS01IDEtOHoiLz4nLCAyMil9IEonYWkgdW5lIGVudmllPC9idXR0b24+CiAgICAgIDxwIGNsYXNzPSJoaW50IiBzdHlsZT0idGV4dC1hbGlnbjpjZW50ZXIiPlRvdWNoZS1sZSBkw6hzIHF1ZSDDp2EgbW9udGUuIFBhcyBhcHLDqHMuPC9wPgogICAgICA8c2VjdGlvbj48aDI+VGVzIMOpdG9pbGVzPC9oMj4ke3N0YXJzKGgpfTwvc2VjdGlvbj4KICAgICAgJHtyZWFzb25zQmxvY2soaCl9JHtwbGFuc0Jsb2NrKGgpfSR7YmFycmllcnMoaCl9JHtzdGF0cyhoKX0KICAgICAgJHtoLm5pYyA/IGA8c2VjdGlvbj48ZGl2IGNsYXNzPSJ6Y2FyZCI+PHAgY2xhc3M9InNtYWxsIiBzdHlsZT0ibWFyZ2luOjAiPlVuZSBlbnZpZSBkZSBuaWNvdGluZSBkdXJlIGVuIGfDqW7DqXJhbCA8Yj4zIMOgIDUgbWludXRlczwvYj4uIExlcyBzdWJzdGl0dXRzIChwYXRjaHMsIGdvbW1lcykgYWlkZW50IHZyYWltZW50IDogdG9uIHBoYXJtYWNpZW4gcGV1dCB0ZSBjb25zZWlsbGVyLiBMZSA8Yj4zOSA4OTwvYj4gKFRhYmFjIEluZm8gU2VydmljZSkgdCdhY2NvbXBhZ25lIGdyYXR1aXRlbWVudC48L3A+PC9kaXY+PC9zZWN0aW9uPmAgOiAnJ30KICAgICAgPGJ1dHRvbiBjbGFzcz0iYnRuIGJsb2NrIHF1aWV0IiBkYXRhLXpyZWwgc3R5bGU9Im1hcmdpbi10b3A6MzRweCI+SidhaSByZWNodXTDqTwvYnV0dG9uPgogICAgICA8cCBjbGFzcz0iaGludCIgc3R5bGU9InRleHQtYWxpZ246Y2VudGVyIj5Ib25uw6p0ZXTDqSBkJ2Fib3JkIDogdW5lIHPDqXJpZSBmYXVzc2UgbmUgdCdhcHByZW5kIHJpZW4uPC9wPmA7CiAgfQogIGZ1bmN0aW9uIHZXYXRjaChoKSB7CiAgICBjb25zdCBrID0gdG9kYXlJU08oKSwgdG9kYXkgPSBoLmxvZy5maWx0ZXIodCA9PiBpc28obmV3IERhdGUodCkpID09PSBrKS5sZW5ndGg7CiAgICBjb25zdCBXID0gMzIwLCBIaCA9IDEyMCwgQiA9IDIyLCBidyA9IDMwLCBnYXAgPSAoVyAtIDcgKiBidykgLyA2OyBjb25zdCBjb3VudHMgPSBbXTsKICAgIGZvciAobGV0IGkgPSA2OyBpID49IDA7IGktLSkgeyBjb25zdCBkayA9IGlzbyhhZGREYXlzKG5ldyBEYXRlKCksIC1pKSk7IGNvdW50cy5wdXNoKFthZGREYXlzKG5ldyBEYXRlKCksIC1pKSwgaC5sb2cuZmlsdGVyKHQgPT4gaXNvKG5ldyBEYXRlKHQpKSA9PT0gZGspLmxlbmd0aF0pOyB9CiAgICBjb25zdCBteCA9IE1hdGgubWF4KDMsIC4uLmNvdW50cy5tYXAoYyA9PiBjWzFdKSk7CiAgICBjb25zdCBiYXJzID0gY291bnRzLm1hcCgoW2QsIHZdLCBpKSA9PiB7IGNvbnN0IHggPSBpICogKGJ3ICsgZ2FwKSwgaGggPSB2IC8gbXggKiAoSGggLSBCIC0gMTYpLCB5ID0gSGggLSBCIC0gaGg7IHJldHVybiBgJHt2ID8gYDxyZWN0IHg9IiR7eC50b0ZpeGVkKDEpfSIgeT0iJHt5LnRvRml4ZWQoMSl9IiB3aWR0aD0iJHtid30iIGhlaWdodD0iJHtoaC50b0ZpeGVkKDEpfSIgcng9IjgiIGZpbGw9InZhcigtLWdvbGQpIiBvcGFjaXR5PSIke2kgPT09IDYgPyAxIDogLjZ9Ii8+PHRleHQgeD0iJHsoeCArIGJ3IC8gMikudG9GaXhlZCgxKX0iIHk9IiR7KHkgLSA1KS50b0ZpeGVkKDEpfSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3R5bGU9ImZvbnQtc2l6ZToxMHB4O2ZvbnQtd2VpZ2h0OjcwMDtmaWxsOnZhcigtLWluay0yKSI+JHt2fTwvdGV4dD5gIDogYDxjaXJjbGUgY3g9IiR7KHggKyBidyAvIDIpLnRvRml4ZWQoMSl9IiBjeT0iJHtIaCAtIEIgLSA1fSIgcj0iMyIgZmlsbD0idmFyKC0tbGluZSkiLz5gfTx0ZXh0IHg9IiR7KHggKyBidyAvIDIpLnRvRml4ZWQoMSl9IiB5PSIke0hoIC0gNn0iIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0eWxlPSJmb250LXNpemU6MTBweDtmb250LXdlaWdodDo2MDA7ZmlsbDp2YXIoLS1tdXRlZCkiPiR7aSA9PT0gNiA/ICdhdWouJyA6IERBWV9TSE9SVC5mb3JtYXQoZCkucmVwbGFjZSgnLicsICcnKX08L3RleHQ+YDsgfSkuam9pbignJyk7CiAgICBjb25zdCBwcmljZSA9IG51bXYoaC5wcmljZSksIHBlciA9IG51bXYoaC5wZXIpLCBtb250aCA9IHByaWNlICYmIHBlciA/IHByaWNlICogMzAgLyBwZXIgOiAwOwogICAgY29uc3QgbGFzdFIgPSBoLnJlYWR5W2gucmVhZHkubGVuZ3RoIC0gMV07CiAgICByZXR1cm4gYDxkaXYgY2xhc3M9InpjYXJkIiBzdHlsZT0ibWFyZ2luLXRvcDoyMHB4Ij48cCBjbGFzcz0ic21hbGwiIHN0eWxlPSJtYXJnaW46MCI+TW9kZSA8Yj5vYnNlcnZhdGlvbjwvYj4gOiB0dSBuZSB0J2ltcG9zZXMgcmllbi4gVHUgbm90ZXMsIHNpbXBsZW1lbnQuIExlIGpvdXIgb8O5IHR1IGTDqWNpZGVzIGQnYXJyw6p0ZXIsIHR1IGNvbm5hw650cmFzIHRlcyBoZXVyZXMsIHRlcyBkw6ljbGVuY2hldXJzIGV0IGNlIHF1ZSDDp2EgdGUgY2/Du3RlLjwvcD48L2Rpdj4KICAgICAgPGRpdiBjbGFzcz0iemJpZyI+PGJ1dHRvbiBkYXRhLXpsb2cgYXJpYS1sYWJlbD0iTm90ZXIgdW5lIHByaXNlIj48c3BhbiBjbGFzcz0ibnVtIj4ke3RvZGF5fTwvc3Bhbj48L2J1dHRvbj48L2Rpdj4KICAgICAgPHAgY2xhc3M9ImhpbnQiIHN0eWxlPSJ0ZXh0LWFsaWduOmNlbnRlciI+VG91Y2hlIGxlIGNlcmNsZSDDoCBjaGFxdWUgcHJpc2UuICR7aC5sb2cubGVuZ3RoID8gJzxidXR0b24gY2xhc3M9ImxpbmstYnRuIHNtYWxsIiBkYXRhLXp1bmxvZyBzdHlsZT0ibWluLXdpZHRoOjA7cGFkZGluZzowIDRweCI+QW5udWxlciBsYSBkZXJuacOocmU8L2J1dHRvbj4nIDogJyd9PC9wPgogICAgICA8c2VjdGlvbj48aDI+NyBkZXJuaWVycyBqb3VyczwvaDI+PGRpdiBjbGFzcz0iemJhcnMiPjxzdmcgdmlld0JveD0iMCAwICR7V30gJHtIaH0iIGFyaWEtaGlkZGVuPSJ0cnVlIj4ke2JhcnN9PC9zdmc+PC9kaXY+PC9zZWN0aW9uPgogICAgICA8c2VjdGlvbj48aDI+Q2UgcXVlIMOnYSBjb8O7dGU8L2gyPgogICAgICAgIDxkaXYgY2xhc3M9Imdyb3VwIj48ZGl2IGNsYXNzPSJjZWxsIj48bGFiZWwgZm9yPSJ6cHIiPlByaXggZCd1bmUgdW5pdMOpPC9sYWJlbD48aW5wdXQgaWQ9InpwciIgY2xhc3M9InIiIGlucHV0bW9kZT0iZGVjaW1hbCIgZGF0YS16c2V0PSJwcmljZSIgdmFsdWU9IiR7ZXNjKGgucHJpY2UpfSIgcGxhY2Vob2xkZXI9IjAiPjxzcGFuIGNsYXNzPSJ1bml0Ij7igqw8L3NwYW4+PC9kaXY+CiAgICAgICAgPGRpdiBjbGFzcz0iY2VsbCI+PGxhYmVsIGZvcj0ienBlIj5FbGxlIG1lIGR1cmU8L2xhYmVsPjxpbnB1dCBpZD0ienBlIiBjbGFzcz0iciIgaW5wdXRtb2RlPSJkZWNpbWFsIiBkYXRhLXpzZXQ9InBlciIgdmFsdWU9IiR7ZXNjKGgucGVyKX0iIHBsYWNlaG9sZGVyPSIwIj48c3BhbiBjbGFzcz0idW5pdCI+am91cnM8L3NwYW4+PC9kaXY+PC9kaXY+CiAgICAgICAgJHttb250aCA/IGA8ZGl2IGNsYXNzPSJ6a3BpcyI+PGRpdj48YiBjbGFzcz0ibnVtIj4ke01hdGgucm91bmQobW9udGgpfSDigqw8L2I+PHNwYW4+cGFyIG1vaXM8L3NwYW4+PC9kaXY+PGRpdj48YiBjbGFzcz0ibnVtIj4ke01hdGgucm91bmQobW9udGggKiAxMil9IOKCrDwvYj48c3Bhbj5wYXIgYW48L3NwYW4+PC9kaXY+PGRpdj48YiBjbGFzcz0ibnVtIj4ke01hdGgucm91bmQobW9udGggKiAxMiAvIChudW12KFMubW9uZXkuc2FmZXR5R29hbCkgfHwgNDAwMCkgKiAxMDApfSAlPC9iPjxzcGFuPmRlIHRvbiDDqXBhcmduZSBkZSBzw6ljdXJpdMOpLCBjaGFxdWUgYW5uw6llPC9zcGFuPjwvZGl2PjwvZGl2PmAgOiAnJ30KICAgICAgPC9zZWN0aW9uPgogICAgICA8c2VjdGlvbj48aDI+RXMtdHUgcHLDqnQgPzwvaDI+PHAgY2xhc3M9InNtYWxsIG11dGVkIiBzdHlsZT0ibWFyZ2luOi04cHggMCAwIj5TdXIgMTAsIMOgIHF1ZWwgcG9pbnQgdGUgc2Vucy10dSBwcsOqdCDDoCBhcnLDqnRlciA/IFLDqXBvbmRzIHVuZSBmb2lzIHBhciBzZW1haW5lLCBzYW5zIHRlIGp1Z2VyLjwvcD4KICAgICAgICA8ZGl2IGNsYXNzPSJ6cnVsZXIiPiR7QXJyYXkuZnJvbSh7IGxlbmd0aDogMTEgfSwgKF8sIGkpID0+IGA8YnV0dG9uIGRhdGEtenJlYWR5PSIke2l9IiBhcmlhLXByZXNzZWQ9IiR7bGFzdFIgJiYgbGFzdFIudiA9PT0gaSAmJiBsYXN0Ui5kID09PSB0b2RheUlTTygpfSI+JHtpfTwvYnV0dG9uPmApLmpvaW4oJycpfTwvZGl2PgogICAgICAgICR7bGFzdFIgPyBgPHAgY2xhc3M9InNtYWxsIiBzdHlsZT0ibWFyZ2luLXRvcDoxMnB4Ij5EZXJuacOocmUgcsOpcG9uc2UgOiA8Yj4ke2xhc3RSLnZ9LzEwPC9iPiR7bGFzdFIudiA+IDAgPyBgLiBQb3VycXVvaSAke2xhc3RSLnZ9IGV0IHBhcyAke01hdGgubWF4KDAsIGxhc3RSLnYgLSAyKX0gPyBDZSBxdWkgdGUgZmFpdCBkaXJlIMOnYSwgYydlc3QgZMOpasOgIHVuZSByYWlzb24gZCdhcnLDqnRlci5gIDogJyd9PC9wPmAgOiAnJ30KICAgICAgICAke2gucmVhZHkubGVuZ3RoID4gMSA/IGA8cCBjbGFzcz0ic21hbGwgbXV0ZWQiIHN0eWxlPSJtYXJnaW4tdG9wOjRweCI+w4l2b2x1dGlvbiA6ICR7aC5yZWFkeS5zbGljZSgtNikubWFwKHIgPT4gci52KS5qb2luKCcg4oaSICcpfTwvcD5gIDogJyd9CiAgICAgIDwvc2VjdGlvbj4KICAgICAgJHtkaWFsKGgpLnJlcGxhY2UoJ0hFVVJFIMOAIFJJU1FVRScsICdIRVVSRSBMQSBQTFVTIEZSw4lRVUVOVEUnKX0KICAgICAgPGJ1dHRvbiBjbGFzcz0iYnRuIGJsb2NrIiBkYXRhLXpyZWFkeS1nbyBzdHlsZT0ibWFyZ2luLXRvcDozMHB4Ij5KZSBzdWlzIHByw6p0IMOgIGFycsOqdGVyPC9idXR0b24+CiAgICAgIDxwIGNsYXNzPSJoaW50IiBzdHlsZT0idGV4dC1hbGlnbjpjZW50ZXIiPkxlIGpvdXIgb8O5IHR1IHRvdWNoZXMgY2UgYm91dG9uLCB0YSBzw6lyaWUgZMOpbWFycmUsIGF2ZWMgbGEgdmFndWUsIGxlcyBwbGFucyBldCBsZXMgYmFycmnDqHJlcy48L3A+YDsKICB9CiAgZnVuY3Rpb24gdlVyZ2UoaCkgewogICAgY29uc3QgdSA9IFoudXJnZSwgdG90YWwgPSB1LmxlbiAqIDYwMDAwLCBsZWZ0ID0gTWF0aC5tYXgoMCwgdG90YWwgLSAobm93KCkgLSB1LnQwKSksIFIgPSAxMDA7CiAgICBjb25zdCBhY3RzID0gaC5uaWMgPyBBQ1RfTiA6IEFDVF9COwogICAgcmV0dXJuIGA8ZGl2IGNsYXNzPSJ6dXJnZSIgaWQ9InpVcmdlIj48ZGl2IGNsYXNzPSJpbiI+CiAgICAgIDxwIGNsYXNzPSJleWVicm93Ij5FbiBqZXUgc2kgdHUgY8OoZGVzPC9wPgogICAgICA8cCBjbGFzcz0ienN0YWtlIiBpZD0ielN0YWtlIj4ke2gubW9kZSA9PT0gJ3N0b3AnID8gZHVyKG5vdygpIC0gaC5zdGFydCkgOiAnJ308L3A+CiAgICAgIDxwIGNsYXNzPSJzbWFsbCBtdXRlZCIgc3R5bGU9Im1hcmdpbjo0cHggMCAwIj4rIHRhIGx1bWnDqHJlIGR1IGpvdXIgKOKcpiAke25vdXJEYXkoKX0pIGV0ICR7T2JqZWN0LmtleXMoaC5tcykubGVuZ3RofSDDqXRvaWxlJHtPYmplY3Qua2V5cyhoLm1zKS5sZW5ndGggPiAxID8gJ3MnIDogJyd9IGFsbHVtw6llJHtPYmplY3Qua2V5cyhoLm1zKS5sZW5ndGggPiAxID8gJ3MnIDogJyd9LjwvcD4KICAgICAgPGRpdiBjbGFzcz0iendhdmUiPjxzdmcgdmlld0JveD0iLTEzMCAtMTMwIDI2MCAyNjAiIGFyaWEtaGlkZGVuPSJ0cnVlIj48Y2lyY2xlIHI9IiR7Un0iIGZpbGw9Im5vbmUiIHN0cm9rZT0idmFyKC0tcmFpc2UpIiBzdHJva2Utd2lkdGg9IjEwIi8+PGNpcmNsZSBpZD0ieldhdmVDIiByPSIke1J9IiBmaWxsPSJub25lIiBzdHJva2U9InZhcigtLWdvbGQpIiBzdHJva2Utd2lkdGg9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHRyYW5zZm9ybT0icm90YXRlKC05MCkiICR7cmluZ0Rhc2goUiwgbGVmdCAvIHRvdGFsKX0vPjwvc3ZnPgogICAgICAgIDxkaXYgY2xhc3M9InpicmVhdGgiPjwvZGl2PjxkaXYgY2xhc3M9Inp3YyI+PGRpdj48YiBpZD0iekxlZnQiPiR7TWF0aC5mbG9vcihsZWZ0IC8gNjAwMDApfToke3R3byhNYXRoLmZsb29yKGxlZnQgJSA2MDAwMCAvIDEwMDApKX08L2I+PHNwYW4gaWQ9InpCciI+SW5zcGlyZeKApjwvc3Bhbj48L2Rpdj48L2Rpdj48L2Rpdj4KICAgICAgPHAgY2xhc3M9InNtYWxsIiBzdHlsZT0idGV4dC1hbGlnbjpjZW50ZXI7bWFyZ2luOjAiPlVuZSBlbnZpZSBtb250ZSwgY3VsbWluZSwgcHVpcyByZWRlc2NlbmQuIFR1IG4nYXMgcGFzIMOgIGxhIGNvbWJhdHRyZSA6IHN1cmZlLWxhICR7dS5sZW59IG1pbnV0ZXMsIGVuIHJlc3BpcmFudCBhdmVjIGxlIGNlcmNsZS48L3A+CiAgICAgICR7dS50cmlnID8gJycgOiBgPHAgY2xhc3M9ImV5ZWJyb3ciIHN0eWxlPSJtYXJnaW4tdG9wOjIycHgiPlF1J2VzdC1jZSBxdWkgdGUgcG91c3NlID88L3A+PGRpdiBjbGFzcz0iY2hpcHMiPiR7VFJJRy5tYXAoKFtrLCBuXSkgPT4gYDxidXR0b24gY2xhc3M9ImNoaXAiIGRhdGEtenRyaWc9IiR7a30iPiR7bn08L2J1dHRvbj5gKS5qb2luKCcnKX08L2Rpdj5gfQogICAgICA8cCBjbGFzcz0iZXllYnJvdyIgc3R5bGU9Im1hcmdpbi10b3A6MjJweCI+RmFpcyBhdSBtb2lucyB1bmUgY2hvc2UsIG1haW50ZW5hbnQ8L3A+CiAgICAgIDxkaXYgY2xhc3M9InphY3RzIj4ke2FjdHMubWFwKChbaywgbl0pID0+IGA8YnV0dG9uIGNsYXNzPSJ6YWN0ICR7dS5kb25lW2tdID8gJ29uJyA6ICcnfSIgZGF0YS16YWN0PSIke2t9Ij48aT4ke0lDT04udGlja308L2k+PHNwYW4+JHtufTwvc3Bhbj48L2J1dHRvbj5gKS5qb2luKCcnKX08L2Rpdj4KICAgICAgJHtaLmRoID8gZGhpa3JCb3goKSA6ICcnfQogICAgICAke2gucmVhc29ucy5sZW5ndGggPyBgPHAgY2xhc3M9ImV5ZWJyb3ciIHN0eWxlPSJtYXJnaW4tdG9wOjIycHgiPlRlcyByYWlzb25zPC9wPjx1bCBjbGFzcz0ienJlYXNvbnMiPiR7aC5yZWFzb25zLm1hcChyID0+IGA8bGk+JHtlc2Mocil9PC9saT5gKS5qb2luKCcnKX08L3VsPmAgOiAnJ30KICAgICAgJHtoLnBsYW5zLmxlbmd0aCA/IGA8cCBjbGFzcz0iZXllYnJvdyIgc3R5bGU9Im1hcmdpbi10b3A6MjJweCI+VG9uIHBsYW48L3A+PGRpdiBjbGFzcz0iemlmIj4ke2gucGxhbnMuZmlsdGVyKHAgPT4gIXUudHJpZyB8fCB0cnVlKS5zbGljZSgwLCAzKS5tYXAocCA9PiBgPGRpdj48c21hbGw+U2k8L3NtYWxsPiR7ZXNjKHBbMF0pfTxicj48c21hbGwgc3R5bGU9Im1hcmdpbi10b3A6NnB4Ij5BbG9yczwvc21hbGw+PGI+JHtlc2MocFsxXSl9PC9iPjwvZGl2PmApLmpvaW4oJycpfTwvZGl2PmAgOiAnJ30KICAgICAgPGJ1dHRvbiBjbGFzcz0iYnRuIGJsb2NrIiBkYXRhLXp3b24gc3R5bGU9Im1hcmdpbi10b3A6MjZweCI+TCdlbnZpZSBlc3QgcGFzc8OpZTwvYnV0dG9uPgogICAgICA8YnV0dG9uIGNsYXNzPSJidG4gYmxvY2sgcXVpZXQiIGRhdGEtemdhdmUgc3R5bGU9Im1hcmdpbi10b3A6MTBweCI+SidhaSBjw6lkw6k8L2J1dHRvbj4KICAgIDwvZGl2PjwvZGl2PmA7CiAgfQogIC8qIC0tLS0tLS0tLS0gR2h1c2wgZW4gYXR0ZW50ZSAoYXUgdHJhdmFpbCwgcGFzIGRlIGRvdWNoZSBwb3NzaWJsZSkgLS0tLS0tLS0tLSAqLwogIGZ1bmN0aW9uIGdwSW5mbygpIHsKICAgIHJldHVybiBgPGRpdiBjbGFzcz0ienEiIHN0eWxlPSJ0ZXh0LWFsaWduOmxlZnQiPgogICAgICA8Yj5DZSBxdWkgZXN0IHBvc3NpYmxlIHRvdXQgZGUgc3VpdGU8L2I+PGJyPgogICAgICBMZSByZXBlbnRpciBuJ2F0dGVuZCBwYXMgbGUgZ2h1c2wgOiByZWdyZXR0ZXIsIGFycsOqdGVyLCBkw6ljaWRlciBkZSBuZSBwYXMgcmVjb21tZW5jZXIuIEMnZXN0IHZhbGFibGUgbWFpbnRlbmFudCwgbMOgIG/DuSB0dSBlcy4gTGUgZGhpa3IgZXQgbCdpc3RpZ2hmYXIgc29udCBwZXJtaXMuIFNldWxlcyBsYSBwcmnDqHJlIChldCwgcG91ciBsYSBtYWpvcml0w6kgZGVzIHNhdmFudHMsIGxhIHLDqWNpdGF0aW9uIGR1IENvcmFuKSBhdHRlbmRlbnQgbGEgcHVyaWZpY2F0aW9uLiBUYSBub3V2ZWxsZSBzw6lyaWUgcGV1dCBkw6ltYXJyZXIgbWFpbnRlbmFudC48YnI+PGJyPgogICAgICA8Yj5MZXMgcHJpw6hyZXMgZCdpY2kgbMOgLCBsZXMgYXZpczwvYj48YnI+CiAgICAgIFBvdXIgbGEgbWFqb3JpdMOpIGRlcyBzYXZhbnRzLCBsZSBnaHVzbCBlc3Qgb2JsaWdhdG9pcmUgYXZhbnQgZGUgcHJpZXIgOiBjaGVyY2hlIHVuIG1veWVuIGRlIGxlIGZhaXJlLCBtw6ptZSBicmVmIChsJ2ludGVudGlvbiwgbCdlYXUgc3VyIHRvdXQgbGUgY29ycHMsIHNlIHJpbmNlciBsYSBib3VjaGUgZXQgbGUgbmV6KS4gU2kgYydlc3QgdnJhaW1lbnQgaW1wb3NzaWJsZSBhdmFudCBsYSBmaW4gZHUgdGVtcHMgZCd1bmUgcHJpw6hyZSwgY2VydGFpbnMgKGRvbnQgbCfDqWNvbGUgbWFsaWtpdGUgZXQgSWJuIFRheW1peXlhKSBhdXRvcmlzZW50IGxlIHRheWFtbXVtIHBvdXIgbmUgcGFzIGxhaXNzZXIgcGFzc2VyIGwnaGV1cmUuIEQnYXV0cmVzIGRpc2VudCBkZSBmYWlyZSBsZSBnaHVzbCBkw6hzIHF1ZSBwb3NzaWJsZSBldCBkZSByYXR0cmFwZXIgYXVzc2l0w7R0LiBTaSB0dSBwZXV4LCBkZW1hbmRlIMOgIHVuZSBwZXJzb25uZSBkZSBzYXZvaXIgZGUgY29uZmlhbmNlLjxicj48YnI+CiAgICAgIDxzcGFuIHN0eWxlPSJjb2xvcjojN0U4Rjg4Ij5Ub3VjaGUgwqsgSmUgcmVwYXJzIG1haW50ZW5hbnQgwrsgOiBsJ2VzcGFjZSBnYXJkZSB1biBnaHVzbCBlbiBhdHRlbnRlIGV0LCBkw6hzIHF1ZSB0dSByZXZpZW5zLCB0ZSBsaXN0ZSBsZXMgcHJpw6hyZXMgw6AgcmF0dHJhcGVyLjwvc3Bhbj48L2Rpdj5gOwogIH0KICAvKiBQcmnDqHJlcyBkb250IGxlIHRlbXBzIHMnZXN0IHRlcm1pbsOpIGRlcHVpcyBsYSByZWNodXRlIChqdXNxdSdhdSBnaHVzbCwgb3UgbWFpbnRlbmFudCkuICovCiAgZnVuY3Rpb24gZ3BQcmF5ZXJzKGcpIHsKICAgIGNvbnN0IGZyb20gPSBnLnQsIHRvID0gZy5nIHx8IG5vdygpLCBvdXQgPSBbXTsKICAgIGZvciAobGV0IGQgPSBpc28obmV3IERhdGUoZnJvbSkpLCBpID0gMDsgZCA8PSB0b2RheUlTTygpICYmIGkgPCA0OyBkID0gaXNvKGFkZERheXMocGFyc2VEYXRlKGQpLCAxKSksIGkrKykgewogICAgICBjb25zdCB3ID0gcHREYXkoZCkud2luOwogICAgICBPYmplY3Qua2V5cyh3KS5mb3JFYWNoKGlkID0+IHsgY29uc3QgZW5kID0gK3dbaWRdWzFdOyBpZiAocHJheWVyVHJhY2tlZChpZCkgJiYgZW5kID4gZnJvbSAmJiBlbmQgPD0gdG8pIG91dC5wdXNoKHsgazogZCwgaWQsIHY6IChTLmZhaXRoLmxvZ1tkXSB8fCB7fSlbaWRdIH0pOyB9KTsKICAgIH0KICAgIHJldHVybiBvdXQ7CiAgfQogIGNvbnN0IFBESCA9IFtbJ2lzdGlnaGZhcicsICfYo9mO2LPZktiq2Y7YutmS2YHZkNix2Y8g2KfZhNmE2Y7ZkdmH2Y4nLCAnQXN0YWdoZmlydWxsYWgnXSwgWyd0YXdiYScsICfYo9mO2LPZktiq2Y7YutmS2YHZkNix2Y8g2KfZhNmE2Y7ZkdmH2Y4g2YjZjtij2Y7YqtmP2YjYqNmPINil2ZDZhNmO2YrZktmH2ZAnLCAnQXN0YWdoZmlydWxsYWhhIHdhIGF0dWJ1IGlsYXloJ10sIFsneXVudXMnLCAn2YTZjtinINil2ZDZhNmO2bDZh9mOINil2ZDZhNmO2ZHYpyDYo9mO2YbZktiq2Y4g2LPZj9io2ZLYrdmO2KfZhtmO2YPZjiDYpdmQ2YbZkNmR2Yog2YPZj9mG2ZLYqtmPINmF2ZDZhtmOINin2YTYuNmO2ZHYp9mE2ZDZhdmQ2YrZhtmOJywgJ0xhIGlsYWhhIGlsbGEgYW50YSwgc3ViaGFuYWthLCBpbm5pIGt1bnR1IG1pbmEgZGgtZGhhbGltaW4nXSwgWydiaWhhbWRpaGknLCAn2LPZj9io2ZLYrdmO2KfZhtmOINin2YTZhNmO2ZHZh9mQINmI2Y7YqNmQ2K3ZjtmF2ZLYr9mQ2YfZkCcsICdTdWJoYW5BbGxhaGkgd2EgYmloYW1kaWhpJ11dOwogIGNvbnN0IFpEID0geyBuOiAwLCBsYXN0OiAwLCB0OiBudWxsIH07CiAgLyogQ29tcHRldXIgZGlzY3JldCA6IHNlcyBjb21wdGVzIHJlc3RlbnQgZGFucyBsJ2VzcGFjZSAoWi5kLmRoKSwgamFtYWlzIGRhbnMgbGEgbHVtacOocmUgbmkgbGVzIHRvdGF1eCBkZSBsJ2FwcC4gKi8KICBmdW5jdGlvbiB6ZGgoKSB7IGNvbnN0IGQgPSBaLmQuZGggPSBaLmQuZGggfHwgeyBjdXI6ICdpc3RpZ2hmYXInLCB0b3RhbDoge30gfTsgZC50b3RhbCA9IGQudG90YWwgfHwge307IHJldHVybiBkOyB9CiAgZnVuY3Rpb24gemRoQm94KCkgewogICAgY29uc3QgZCA9IHpkaCgpLCBmID0gUERILmZpbmQoeCA9PiB4WzBdID09PSBkLmN1cikgfHwgUERIWzBdOwogICAgcmV0dXJuIGA8cCBjbGFzcz0iZXllYnJvdyIgc3R5bGU9Im1hcmdpbi10b3A6MTZweCI+RW4gYXR0ZW5kYW50LCBsZSBkaGlrcjwvcD4KICAgICAgPGRpdiBjbGFzcz0iY2hpcHMiIHN0eWxlPSJtYXJnaW4tdG9wOjZweCI+JHtQREgubWFwKHggPT4gYDxidXR0b24gY2xhc3M9ImNoaXAiIGRhdGEtemRrZj0iJHt4WzBdfSIgYXJpYS1wcmVzc2VkPSIke3hbMF0gPT09IGQuY3VyfSI+JHt4WzJdLnNwbGl0KCcsJylbMF19PC9idXR0b24+YCkuam9pbignJyl9PC9kaXY+CiAgICAgIDxidXR0b24gY2xhc3M9Inpka3QiIGRhdGEtemRrIGFyaWEtbGFiZWw9IkNvbXB0ZXIiPjxzcGFuIGNsYXNzPSJhciIgbGFuZz0iYXIiIGRpcj0icnRsIj4ke2ZbMV19PC9zcGFuPjxiIGNsYXNzPSJudW0iIGlkPSJ6ZGtOIj4ke1pELm59PC9iPjxzbWFsbCBjbGFzcz0ibXV0ZWQiIGlkPSJ6ZGtUIj4keyhkLnRvdGFsW2QuY3VyXSB8fCAwKS50b0xvY2FsZVN0cmluZygnZnItRlInKX0gYXUgdG90YWwsIGljaSBzZXVsZW1lbnQ8L3NtYWxsPjwvYnV0dG9uPgogICAgICAke2QuY3VyID09PSAneXVudXMnID8gJzxwIGNsYXNzPSJzbWFsbCBtdXRlZCIgc3R5bGU9Im1hcmdpbjo4cHggMCAwIj5MXCdpbnZvY2F0aW9uIGRlIFl1bnVzIGRhbnMgbGUgdmVudHJlIGRlIGxhIGJhbGVpbmUgKENvcmFuIDIxOjg3KS4gwqsgQXVjdW4gbXVzdWxtYW4gbmUgbFwnaW52b3F1ZSBwb3VyIHF1ZWxxdWUgY2hvc2Ugc2FucyBxdVwnQWxsYWggbmUgbHVpIHLDqXBvbmRlLiDCuyAoVGlybWlkaGkgMzUwNSk8L3A+JyA6ICcnfWA7CiAgfQogIGZ1bmN0aW9uIHpka1RhcCgpIHsKICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7IGlmIChub3cgLSBaRC5sYXN0IDwgMTgwKSByZXR1cm47IFpELmxhc3QgPSBub3c7CiAgICBjb25zdCBkID0gemRoKCk7IFpELm4rKzsgZC50b3RhbFtkLmN1cl0gPSAoZC50b3RhbFtkLmN1cl0gfHwgMCkgKyAxOwogICAgY29uc3QgbiA9ICQoJyN6ZGtOJyksIHQgPSAkKCcjemRrVCcpOyBpZiAobikgbi50ZXh0Q29udGVudCA9IFpELm47IGlmICh0KSB0LnRleHRDb250ZW50ID0gYCR7ZC50b3RhbFtkLmN1cl0udG9Mb2NhbGVTdHJpbmcoJ2ZyLUZSJyl9IGF1IHRvdGFsLCBpY2kgc2V1bGVtZW50YDsKICAgIHRyeSB7IG5hdmlnYXRvci52aWJyYXRlICYmIG5hdmlnYXRvci52aWJyYXRlKFpELm4gJSAzMyA/IDYgOiBbMTgsIDUwLCAxOF0pOyB9IGNhdGNoIChlKSB7fQogICAgaWYgKFpELm4gJSAxMDAgPT09IDApIHRvYXN0KGAke1pELm59LiBBbGxhaCBhaW1lIGNldXggcXVpIHJldmllbm5lbnQgdmVycyBMdWkuYCwgbnVsbCwgbnVsbCwgMzUwMCk7CiAgICBjbGVhclRpbWVvdXQoWkQudCk7IFpELnQgPSBzZXRUaW1lb3V0KCgpID0+IHBlcnNpc3QoKSwgMTUwMCk7CiAgfQogIGZ1bmN0aW9uIGdwQ2FyZChoKSB7CiAgICBjb25zdCBnID0gaC5ncDsgaWYgKCFnKSByZXR1cm4gJyc7CiAgICBjb25zdCBwcyA9IGdwUHJheWVycyhnKSwgbGVmdCA9IHBzLmZpbHRlcihwID0+ICFwLnYgfHwgcC52ID09PSAneCcpLmxlbmd0aDsKICAgIGNvbnN0IHNpbmNlID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ2ZyLUZSJywgeyB3ZWVrZGF5OiAnbG9uZycsIGhvdXI6ICcyLWRpZ2l0JywgbWludXRlOiAnMi1kaWdpdCcgfSkuZm9ybWF0KG5ldyBEYXRlKGcudCkpOwogICAgcmV0dXJuIGA8c2VjdGlvbiBzdHlsZT0ibWFyZ2luLXRvcDoxOHB4Ij48ZGl2IGNsYXNzPSJ6Y2FyZCB6Z3AiPgogICAgICA8cCBjbGFzcz0iZXllYnJvdyIgc3R5bGU9Im1hcmdpbjowIj5HaHVzbCBlbiBhdHRlbnRlPC9wPgogICAgICA8cCBjbGFzcz0ic21hbGwgbXV0ZWQiIHN0eWxlPSJtYXJnaW46NHB4IDAgMTJweCI+RGVwdWlzICR7c2luY2V9LiBUYSBzw6lyaWUsIGVsbGUsIGEgZMOpasOgIHJlcHJpcy48L3A+CiAgICAgIDxkaXYgY2xhc3M9InpncHMiPgogICAgICAgIDxidXR0b24gY2xhc3M9InpncGIgJHtnLmcgPyAnb24nIDogJyd9IiBkYXRhLXpncGc+PGk+JHtJQ09OLnRpY2t9PC9pPjxzcGFuPkdodXNsIGZhaXQ8L3NwYW4+PC9idXR0b24+CiAgICAgICAgPGJ1dHRvbiBjbGFzcz0iemdwYiAke2cuciA/ICdvbicgOiAnJ30iIGRhdGEtemdwciAke2cuZyA/ICcnIDogJ2Rpc2FibGVkJ30+PGk+JHtJQ09OLnRpY2t9PC9pPjxzcGFuPkRldXggcmFrJ2F0cyBkZSByZXBlbnRpcjwvc3Bhbj48L2J1dHRvbj4KICAgICAgPC9kaXY+CiAgICAgICR7cHMubGVuZ3RoID8gYDxwIGNsYXNzPSJleWVicm93IiBzdHlsZT0ibWFyZ2luLXRvcDoxNnB4Ij5QcmnDqHJlcyDDoCByYXR0cmFwZXI8L3A+CiAgICAgICAgPGRpdiBjbGFzcz0iemdwbCI+JHtwcy5tYXAocCA9PiBgPGRpdj48c3Bhbj4ke1BOQU1FU1twLmlkXX0gPHNtYWxsIGNsYXNzPSJtdXRlZCI+JHtwLmsgPT09IHRvZGF5SVNPKCkgPyAnYXVqb3VyZFwnaHVpJyA6IERBWV9MT05HLmZvcm1hdChwYXJzZURhdGUocC5rKSl9PC9zbWFsbD48L3NwYW4+JHtwLnYgJiYgcC52ICE9PSAneCcgPyBgPGIgY2xhc3M9InNtYWxsIiBzdHlsZT0iY29sb3I6dmFyKC0tbWludCkiPm5vdMOpZTwvYj5gIDogYDxidXR0b24gY2xhc3M9ImJ0biBzbSIgZGF0YS16Z3BwPSIke3Aua318JHtwLmlkfSIgJHtnLmcgPyAnJyA6ICdkaXNhYmxlZCd9PlJhdHRyYXDDqWU8L2J1dHRvbj5gfTwvZGl2PmApLmpvaW4oJycpfTwvZGl2PgogICAgICAgIDxwIGNsYXNzPSJoaW50IiBzdHlsZT0ibWFyZ2luLXRvcDo4cHgiPiR7Zy5nID8gJ1JhdHRyYXBlLWxlcyBtYWludGVuYW50LCBkYW5zIGxcJ29yZHJlLicgOiAnRWxsZXMgc2UgZMOpYmxvcXVlbnQgYXByw6hzIGxlIGdodXNsLid9IFNpIHR1IGVuIGFzIHByacOpIHVuZSBhdmVjIGxlIHRheWFtbXVtLCBub3RlLWxhIG5vcm1hbGVtZW50IGRhbnMgRm9pLjwvcD5gIDogJzxwIGNsYXNzPSJzbWFsbCBtdXRlZCIgc3R5bGU9Im1hcmdpbjoxNHB4IDAgMCI+QXVjdW5lIHByacOocmUgblwnZXN0IHBhc3PDqWUgZGVwdWlzLiBGYWlzIGxlIGdodXNsIGF2YW50IGxhIHByb2NoYWluZS48L3A+J30KICAgICAgJHtnLmcgPyAnJyA6IHpkaEJveCgpfQogICAgICAke2cuZyAmJiAhbGVmdCA/ICc8YnV0dG9uIGNsYXNzPSJidG4gYmxvY2siIGRhdGEtemdweD0iMSIgc3R5bGU9Im1hcmdpbi10b3A6MTRweCI+Q1wnZXN0IGZhaXQsIEFsaGFtZHVsaWxsYWg8L2J1dHRvbj4nIDogJzxidXR0b24gY2xhc3M9ImxpbmstYnRuIHNtYWxsIiBkYXRhLXpncHg9IjAiIHN0eWxlPSJtYXJnaW4tdG9wOjEycHgiPlJldGlyZXIgY2UgcmFwcGVsPC9idXR0b24+J30KICAgIDwvZGl2Pjwvc2VjdGlvbj5gOwogIH0KICBmdW5jdGlvbiBkaGlrckJveCgpIHsKICAgIGNvbnN0IFtpLCBuXSA9IFouZGgsIHcgPSBESElLUltpXTsKICAgIHJldHVybiBgPGRpdiBjbGFzcz0iemRoIj48YnV0dG9uIGRhdGEtemRoIGFyaWEtbGFiZWw9IiR7d1sxXX0sICR7bn0gc3VyIDMzIj48c3BhbiBjbGFzcz0iYXIiIGxhbmc9ImFyIiBkaXI9InJ0bCI+JHt3WzBdfTwvc3Bhbj48c3BhbiBjbGFzcz0ic21hbGwgbXV0ZWQiPiR7d1sxXX08L3NwYW4+PGIgY2xhc3M9Im51bSI+JHtufTxzcGFuIHN0eWxlPSJmb250LXNpemU6MXJlbTtjb2xvcjp2YXIoLS1tdXRlZCkiPi8zMzwvc3Bhbj48L2I+PC9idXR0b24+PC9kaXY+YDsKICB9CiAgZnVuY3Rpb24gdlJlbGFwc2UoaCkgewogICAgY29uc3QgciA9IFoucmVsLCBkID0gTWF0aC5mbG9vcihkYXlzKGgpKTsKICAgIGNvbnN0IGxpc3QgPSBoLm5pYyA/IEJBUl9OIDogQkFSX0IsIG9mZiA9IGxpc3QuZmlsdGVyKGIgPT4gIWguYmFyW2JbMF1dKTsKICAgIHJldHVybiBgPGRpdiBjbGFzcz0iemRhcmsiIGlkPSJ6RGFyayI+PGRpdiBjbGFzcz0iaW4iPgogICAgICA8cCBjbGFzcz0iZXllYnJvdyIgc3R5bGU9ImNvbG9yOiM3RThGODgiPlPDqXJpZSB0ZXJtaW7DqWU8L3A+CiAgICAgIDxwIGNsYXNzPSJudW0tYmlnIiBpZD0iekRvd24iPiR7ZH08L3A+CiAgICAgIDxwIHN0eWxlPSJ0ZXh0LWFsaWduOmNlbnRlcjttYXJnaW46NnB4IDAgMDtjb2xvcjojN0U4Rjg4Ij5qb3VyJHtkID4gMSA/ICdzJyA6ICcnfS4gQyfDqXRhaXQgdG9uIGNoZW1pbi48L3A+CiAgICAgIDxoMiBzdHlsZT0ibWFyZ2luLXRvcDozMHB4Ij5UYSBsdW1pw6hyZSBiYWlzc2UuIFRhIHZhbGV1ciwgbm9uLjwvaDI+CiAgICAgIDxwIGNsYXNzPSJzbWFsbCBtdXRlZCI+4oiSMTUg4pymIGF1am91cmQnaHVpLiBDZSBxdWkgY29tcHRlIG1haW50ZW5hbnQsIGNlIHNvbnQgbGVzIDEwIHByb2NoYWluZXMgbWludXRlcyA6IGMnZXN0IHNvdXZlbnQgbMOgIHF1J3VuZSByZWNodXRlIGVuIGVudHJhw65uZSB1bmUgZGV1eGnDqG1lLjwvcD4KICAgICAgPGRpdiBjbGFzcz0ienEiPsKrIFRvdXMgbGVzIGZpbHMgZCdBZGFtIGNvbW1ldHRlbnQgZGVzIGZhdXRlcywgZXQgbGVzIG1laWxsZXVycyBkZXMgZmF1dGlmcyBzb250IGNldXggcXVpIHNlIHJlcGVudGVudC4gwrs8YnI+PHNwYW4gY2xhc3M9InNtYWxsIG11dGVkIj5UaXJtaWRoaTwvc3Bhbj48L2Rpdj4KICAgICAgPHAgY2xhc3M9ImV5ZWJyb3ciIHN0eWxlPSJtYXJnaW4tdG9wOjI0cHg7Y29sb3I6IzdFOEY4OCI+QyfDqXRhaXQgcXVhbmQgPzwvcD4KICAgICAgPGRpdiBjbGFzcz0iY2hpcHMiPiR7W1snMCcsICfDgCBsXCdpbnN0YW50J10sIFsnMycsICdQbHVzIHTDtHQgYXVqb3VyZFwnaHVpJ10sIFsnMTInLCAnSGllciBzb2lyJ11dLm1hcCgoW3YsIG5dKSA9PiBgPGJ1dHRvbiBjbGFzcz0iY2hpcCIgZGF0YS16d2hlbj0iJHt2fSIgYXJpYS1wcmVzc2VkPSIke3Iud2hlbiA9PT0gdn0iPiR7bn08L2J1dHRvbj5gKS5qb2luKCcnKX08L2Rpdj4KICAgICAgPHAgY2xhc3M9ImV5ZWJyb3ciIHN0eWxlPSJtYXJnaW4tdG9wOjIwcHg7Y29sb3I6IzdFOEY4OCI+UXUnZXN0LWNlIHF1aSBsJ2EgZMOpY2xlbmNow6kgPzwvcD4KICAgICAgPGRpdiBjbGFzcz0iY2hpcHMiPiR7VFJJRy5tYXAoKFtrLCBuXSkgPT4gYDxidXR0b24gY2xhc3M9ImNoaXAiIGRhdGEtenJ0cmlnPSIke2t9IiBhcmlhLXByZXNzZWQ9IiR7ci50cmlnID09PSBrfSI+JHtufTwvYnV0dG9uPmApLmpvaW4oJycpfTwvZGl2PgogICAgICAke29mZi5sZW5ndGggPyBgPHAgY2xhc3M9ImV5ZWJyb3ciIHN0eWxlPSJtYXJnaW4tdG9wOjIwcHg7Y29sb3I6IzdFOEY4OCI+VW5lIGJhcnJpw6hyZSDDoCBwb3NlciBhdWpvdXJkJ2h1aTwvcD48ZGl2IGNsYXNzPSJjaGlwcyI+JHtvZmYubWFwKGIgPT4gYDxidXR0b24gY2xhc3M9ImNoaXAiIGRhdGEtenJiYXI9IiR7YlswXX0iIGFyaWEtcHJlc3NlZD0iJHshIXIuYmFyc1tiWzBdXX0iPiR7YlsxXX08L2J1dHRvbj5gKS5qb2luKCcnKX08L2Rpdj5gIDogJyd9CiAgICAgIDxwIGNsYXNzPSJleWVicm93IiBzdHlsZT0ibWFyZ2luLXRvcDoyMHB4O2NvbG9yOiM3RThGODgiPkNlIHF1ZSB0dSByZXRpZW5zIChmYWN1bHRhdGlmKTwvcD4KICAgICAgPHRleHRhcmVhIGlkPSJ6Tm90ZSIgcGxhY2Vob2xkZXI9IkNlIHF1aSBzJ2VzdCBwYXNzw6kganVzdGUgYXZhbnTigKYiIHN0eWxlPSJtaW4taGVpZ2h0OjgwcHg7bWFyZ2luLXRvcDo4cHgiPjwvdGV4dGFyZWE+CiAgICAgIDxkaXYgY2xhc3M9InpxIj5TaSB0dSBsZSBzb3VoYWl0ZXMgOiBmYWlzIGxlIGdodXNsLCBwcmllIGRldXggcmFrJ2F0cyBkZSByZXBlbnRpciwgcHVpcyByZXByZW5kcy4gTGEgcG9ydGUgbmUgc2UgZmVybWUgcGFzLjwvZGl2PgogICAgICAke3IuZ3AgPyBncEluZm8oKSA6ICc8YnV0dG9uIGNsYXNzPSJidG4gYmxvY2sgcXVpZXQiIGRhdGEtemdwIHN0eWxlPSJtYXJnaW4tdG9wOjEycHgiPkplIG5lIHBldXggcGFzIGZhaXJlIGxlIGdodXNsIG1haW50ZW5hbnQ8L2J1dHRvbj4nfQogICAgICA8YnV0dG9uIGNsYXNzPSJidG4gYmxvY2siIGRhdGEtenJlc3RhcnQgc3R5bGU9Im1hcmdpbi10b3A6MjJweCI+SmUgcmVwYXJzIG1haW50ZW5hbnQ8L2J1dHRvbj4KICAgICAgPGJ1dHRvbiBjbGFzcz0iYnRuIGJsb2NrIHF1aWV0IiBkYXRhLXpyZWx4IHN0eWxlPSJtYXJnaW4tdG9wOjEwcHgiPkFubnVsZXIsIGplIG4nYWkgcGFzIHJlY2h1dMOpPC9idXR0b24+CiAgICA8L2Rpdj48L2Rpdj5gOwogIH0KICBmdW5jdGlvbiB2U2V0dXAoKSB7CiAgICBjb25zdCBleGlzdHMgPSAhIShTLnpjICYmIFMuemMuYyk7CiAgICByZXR1cm4gYDxoZWFkZXIgY2xhc3M9InRvcCI+PGRpdj48cCBjbGFzcz0iZXllYnJvdyI+RXNwYWNlIHByaXbDqTwvcD48aDE+Q3LDqWVyIHRvbiA8ZW0+ZXNwYWNlPC9lbT48L2gxPjxwPkludmlzaWJsZSBkYW5zIGwnYXBwLiBDaGlmZnLDqSBhdmVjIHRvbiBjb2RlIDogc2FucyBsdWksIHBlcnNvbm5lIG5lIHBldXQgbGUgbGlyZS48L3A+PC9kaXY+PC9oZWFkZXI+CiAgICAgICR7ZXhpc3RzID8gYDxkaXYgY2xhc3M9ImFsZXJ0IGRhbmdlciI+JHtJQ09OLndhcm59PHNwYW4+VW4gZXNwYWNlIGV4aXN0ZSBkw6lqw6AuIEVuIGNyw6llciB1biBub3V2ZWF1IGVmZmFjZXJhIGwnYW5jaWVuIHBvdXIgdG91am91cnMuPC9zcGFuPjwvZGl2PmAgOiAnJ30KICAgICAgPHNlY3Rpb24gc3R5bGU9Im1hcmdpbi10b3A6MjZweCIgY2xhc3M9InpzZXQiPjxoMj5Ub24gY29kZTwvaDI+CiAgICAgICAgPGRpdiBjbGFzcz0iZ3JvdXAiPjxkaXYgY2xhc3M9ImNlbGwiPjxsYWJlbCBmb3I9InpjMSI+Q29kZTwvbGFiZWw+PGlucHV0IGlkPSJ6YzEiIHR5cGU9InBhc3N3b3JkIiBjbGFzcz0iciIgc3R5bGU9IndpZHRoOjllbTttYXgtd2lkdGg6NjAlIiBhdXRvY29tcGxldGU9Im9mZiIgYXV0b2NhcGl0YWxpemU9Im9mZiI+PC9kaXY+CiAgICAgICAgPGRpdiBjbGFzcz0iY2VsbCI+PGxhYmVsIGZvcj0iemMyIj5Db25maXJtZXI8L2xhYmVsPjxpbnB1dCBpZD0iemMyIiB0eXBlPSJwYXNzd29yZCIgY2xhc3M9InIiIHN0eWxlPSJ3aWR0aDo5ZW07bWF4LXdpZHRoOjYwJSIgYXV0b2NvbXBsZXRlPSJvZmYiIGF1dG9jYXBpdGFsaXplPSJvZmYiPjwvZGl2PjwvZGl2PgogICAgICAgIDxwIGNsYXNzPSJoaW50Ij42IGNhcmFjdMOocmVzIG1pbmltdW0sIHNhbnMgZXNwYWNlLiBQb3VyIG91dnJpciBsJ2VzcGFjZSA6IG91dnJlIElkw6llcyAobCdhbXBvdWxlKSwgdGFwZSB0b24gY29kZSwgcHVpcyBBam91dGVyLiBTaSB0dSBsJ291YmxpZXMsIHBlcnNvbm5lIG5lIHBvdXJyYSByb3V2cmlyIGNldCBlc3BhY2UsIHBhcyBtw6ptZSB0b2kuPC9wPjwvc2VjdGlvbj4KICAgICAgPHNlY3Rpb24+PGgyPkNlIHF1ZSB0dSBhcnLDqnRlcyBtYWludGVuYW50PC9oMj4KICAgICAgICA8ZGl2IGNsYXNzPSJncm91cCI+PGRpdiBjbGFzcz0iY2VsbCI+PGxhYmVsIGZvcj0iem4xIj5Ob208L2xhYmVsPjxpbnB1dCBpZD0iem4xIiBjbGFzcz0iciIgc3R5bGU9IndpZHRoOjEwZW07bWF4LXdpZHRoOjYwJSIgcGxhY2Vob2xkZXI9IlZpc2libGUgaWNpIHNldWxlbWVudCI+PC9kaXY+CiAgICAgICAgPGRpdiBjbGFzcz0iY2VsbCI+PGxhYmVsIGZvcj0iemQxIj5EZXJuacOocmUgZm9pczwvbGFiZWw+PGlucHV0IGlkPSJ6ZDEiIHR5cGU9ImRhdGV0aW1lLWxvY2FsIiB2YWx1ZT0iJHtuZXcgRGF0ZShub3coKSAtIG5ldyBEYXRlKCkuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwMDAwKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDE2KX0iIHN0eWxlPSJtYXgtd2lkdGg6NjIlO2JvcmRlcjowO2JhY2tncm91bmQ6dmFyKC0tcmFpc2UpO2JvcmRlci1yYWRpdXM6MTBweDtjb2xvcjp2YXIoLS1pbmspO21pbi1oZWlnaHQ6NDBweDtwYWRkaW5nOjAgOHB4O2ZvbnQ6aW5oZXJpdDtmb250LXNpemU6Ljg3NXJlbSI+PC9kaXY+PC9kaXY+PC9zZWN0aW9uPgogICAgICA8c2VjdGlvbj48aDI+Q2UgcXVlIHR1IG9ic2VydmVzIGQnYWJvcmQ8L2gyPgogICAgICAgIDxkaXYgY2xhc3M9Imdyb3VwIj48ZGl2IGNsYXNzPSJjZWxsIj48bGFiZWwgZm9yPSJ6bjIiPk5vbTwvbGFiZWw+PGlucHV0IGlkPSJ6bjIiIGNsYXNzPSJyIiBzdHlsZT0id2lkdGg6MTBlbTttYXgtd2lkdGg6NjAlIiBwbGFjZWhvbGRlcj0iTGFpc3NlIHZpZGUgc2kgcmllbiI+PC9kaXY+CiAgICAgICAgPGxhYmVsIGNsYXNzPSJjZWxsIHRhcCI+PHNwYW4gY2xhc3M9ImxibCI+Qydlc3QgZGUgbGEgbmljb3RpbmU8L3NwYW4+PHNwYW4gY2xhc3M9InN3aXRjaCI+PGlucHV0IHR5cGU9ImNoZWNrYm94IiBpZD0iem4ybiIgY2hlY2tlZD48c3Bhbj48L3NwYW4+PC9zcGFuPjwvbGFiZWw+PC9kaXY+CiAgICAgICAgPHAgY2xhc3M9ImhpbnQiPkVuIG9ic2VydmF0aW9uLCB0dSBub3RlcyBzZXVsZW1lbnQuIFR1IHBhc3NlcyBlbiBhcnLDqnQgbGUgam91ciBvw7kgdHUgdGUgc2VucyBwcsOqdC48L3A+PC9zZWN0aW9uPgogICAgICA8YnV0dG9uIGNsYXNzPSJidG4gYmxvY2siIGRhdGEtemNyZWF0ZSBzdHlsZT0ibWFyZ2luLXRvcDoyNnB4Ij5DcsOpZXIgZXQgY2hpZmZyZXI8L2J1dHRvbj4KICAgICAgPGJ1dHRvbiBjbGFzcz0iYnRuIGJsb2NrIHF1aWV0IiBkYXRhLXpsb2NrIHN0eWxlPSJtYXJnaW4tdG9wOjEwcHgiPkFubnVsZXI8L2J1dHRvbj5gOwogIH0KICBmdW5jdGlvbiBvcGVuRWRpdChraW5kKSB7CiAgICBjb25zdCBoID0gSCgpOwogICAgY29uc3QgYm9keSA9IGtpbmQgPT09ICdyZWFzb25zJwogICAgICA/IGA8cCBjbGFzcz0ic21hbGwgbXV0ZWQiPlVuZSByYWlzb24gcGFyIGxpZ25lLiBMZXMgdGllbm5lcywgcGFzIGNlbGxlcyBkZXMgYXV0cmVzLjwvcD48dGV4dGFyZWEgaWQ9InpFZCIgc3R5bGU9Im1pbi1oZWlnaHQ6MTgwcHg7bWFyZ2luLXRvcDoxMnB4IiBwbGFjZWhvbGRlcj0iUG91ciBBbGxhaCYjMTA7UG91ciBtb24gY291cGxlJiMxMDtQb3VyIG1vbiDDqW5lcmdpZSBldCBtYSBjbGFydMOpJiMxMDtQb3VyIGxlIHDDqHJlIHF1ZSBqZSB2ZXV4IMOqdHJlIj4ke2VzYyhoLnJlYXNvbnMuam9pbignXG4nKSl9PC90ZXh0YXJlYT5gCiAgICAgIDogYDxwIGNsYXNzPSJzbWFsbCBtdXRlZCI+U2kgW3NpdHVhdGlvbl0sIGFsb3JzIFtjZSBxdWUgamUgZmFpc10uIENvdXJ0LCBjb25jcmV0LCBmYWlzYWJsZSBlbiAxMCBzZWNvbmRlcy48L3A+PGRpdiBzdHlsZT0ibWFyZ2luLXRvcDoxMnB4Ij4ke2gucGxhbnMubWFwKChwLCBpKSA9PiBgPGRpdiBjbGFzcz0ienBsYW4iPjxpbnB1dCBkYXRhLXpwPSIke2l9LjAiIHZhbHVlPSIke2VzYyhwWzBdKX0iIGFyaWEtbGFiZWw9IlNpIj48aW5wdXQgZGF0YS16cD0iJHtpfS4xIiB2YWx1ZT0iJHtlc2MocFsxXSl9IiBhcmlhLWxhYmVsPSJBbG9ycyI+PGJ1dHRvbiBjbGFzcz0iaWNvbi1idG4iIGRhdGEtenBkZWw9IiR7aX0iIGFyaWEtbGFiZWw9IlN1cHByaW1lciI+JHtYfTwvYnV0dG9uPjwvZGl2PmApLmpvaW4oJycpfTwvZGl2PjxidXR0b24gY2xhc3M9ImJ0biBzbSBnaG9zdCIgZGF0YS16cGFkZD4rIFVuIHBsYW48L2J1dHRvbj5gOwogICAgJCgnI2lkZWFzQm9keScpLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPSJncmFiIj48L2Rpdj48ZGl2IGNsYXNzPSJzaGVldC10b3AiPjxzcGFuIHN0eWxlPSJ3aWR0aDo2MHB4Ij48L3NwYW4+PGgyIGlkPSJpZGVhc1RpdGxlIj4ke2tpbmQgPT09ICdyZWFzb25zJyA/ICdNZXMgcmFpc29ucycgOiAnU2nigKYgYWxvcnPigKYnfTwvaDI+PGJ1dHRvbiBjbGFzcz0ibGluay1idG4iIGRhdGEtemVkb2s9IiR7a2luZH0iIHN0eWxlPSJ0ZXh0LWFsaWduOnJpZ2h0Ij5PSzwvYnV0dG9uPjwvZGl2PiR7Ym9keX1gOwogICAgY29uc3QgZCA9ICQoJyNpZGVhc1NoZWV0Jyk7IGlmICghZC5vcGVuKSBkLnNob3dNb2RhbCgpOyBkLmRhdGFzZXQubW9kZSA9ICd6JzsKICB9CiAgZnVuY3Rpb24gdmlldygpIHsKICAgIGlmICghWi5kKSByZXR1cm4gdlNldHVwKCk7CiAgICBjb25zdCBoID0gSCgpOwogICAgbGV0IGh0bWwgPSBgJHtoZWFkKCl9JHt0YWJzKCl9PGRpdiBjbGFzcz0iemgiPiR7aC5tb2RlID09PSAnc3RvcCcgPyB2U3RvcChoKSA6IHZXYXRjaChoKX08L2Rpdj5gOwogICAgaWYgKFoudmlldyA9PT0gJ3VyZ2UnICYmIFoudXJnZSkgaHRtbCArPSB2VXJnZShoKTsKICAgIGlmIChaLnZpZXcgPT09ICdyZWxhcHNlJyAmJiBaLnJlbCkgaHRtbCArPSB2UmVsYXBzZShoKTsKICAgIHJldHVybiBodG1sOwogIH0KICBmdW5jdGlvbiBzaG93KCkgeyB0YWIgPSAneic7IHJlbmRlcih0cnVlKTsgd2luZG93LnNjcm9sbFRvKDAsIDApOyB9CiAgZnVuY3Rpb24gcmVyZW5kZXIoKSB7IGNvbnN0IHN5ID0gd2luZG93LnNjcm9sbFksIHV5ID0gJCgnI3pVcmdlJykgPyAkKCcjelVyZ2UnKS5zY3JvbGxUb3AgOiAwLCBkeSA9ICQoJyN6RGFyaycpID8gJCgnI3pEYXJrJykuc2Nyb2xsVG9wIDogMDsgcmVuZGVyKCk7IHdpbmRvdy5zY3JvbGxUbygwLCBzeSk7IGlmICgkKCcjelVyZ2UnKSkgJCgnI3pVcmdlJykuc2Nyb2xsVG9wID0gdXk7IGlmICgkKCcjekRhcmsnKSkgJCgnI3pEYXJrJykuc2Nyb2xsVG9wID0gZHk7IH0KCiAgLyogLS0tLS0tLS0tLSBtaW51dGVyaWUgKGNvbXB0ZXVycyB2aXZhbnRzLCB2YWd1ZSwgcmVzcGlyYXRpb24pIC0tLS0tLS0tLS0gKi8KICBsZXQgaXYgPSAwOwogIGZ1bmN0aW9uIHRpY2tTdGFydCgpIHsKICAgIGNsZWFySW50ZXJ2YWwoaXYpOwogICAgaXYgPSBzZXRJbnRlcnZhbCgoKSA9PiB7CiAgICAgIGlmICh0YWIgIT09ICd6JyB8fCAhWi5kKSB7IGNsZWFySW50ZXJ2YWwoaXYpOyByZXR1cm47IH0KICAgICAgY29uc3QgaCA9IEgoKTsgaWYgKCFoKSByZXR1cm47CiAgICAgIGNvbnN0IHQgPSAkKCcjelRpY2snKTsgaWYgKHQgJiYgaC5tb2RlID09PSAnc3RvcCcpIHQudGV4dENvbnRlbnQgPSBkdXIobm93KCkgLSBoLnN0YXJ0KS5zcGxpdCgnICcpLnNsaWNlKDIpLmpvaW4oJyAnKTsKICAgICAgY29uc3QgcyA9ICQoJyN6U3Rha2UnKTsgaWYgKHMgJiYgaC5tb2RlID09PSAnc3RvcCcpIHMudGV4dENvbnRlbnQgPSBkdXIobm93KCkgLSBoLnN0YXJ0KTsKICAgICAgaWYgKFoudXJnZSAmJiAkKCcjekxlZnQnKSkgewogICAgICAgIGNvbnN0IHRvdGFsID0gWi51cmdlLmxlbiAqIDYwMDAwLCBlbCA9IG5vdygpIC0gWi51cmdlLnQwLCBsZWZ0ID0gTWF0aC5tYXgoMCwgdG90YWwgLSBlbCk7CiAgICAgICAgJCgnI3pMZWZ0JykudGV4dENvbnRlbnQgPSBgJHtNYXRoLmZsb29yKGxlZnQgLyA2MDAwMCl9OiR7dHdvKE1hdGguZmxvb3IobGVmdCAlIDYwMDAwIC8gMTAwMCkpfWA7CiAgICAgICAgY29uc3QgYyA9ICQoJyN6V2F2ZUMnKSwgUiA9IDEwMCwgQyA9IDIgKiBNYXRoLlBJICogUjsgaWYgKGMpIGMuc2V0QXR0cmlidXRlKCdzdHJva2UtZGFzaG9mZnNldCcsIChDICogKDEgLSBsZWZ0IC8gdG90YWwpKS50b0ZpeGVkKDEpKTsKICAgICAgICBjb25zdCBwaCA9IChlbCAvIDEwMDApICUgMTA7ICQoJyN6QnInKS50ZXh0Q29udGVudCA9IGxlZnQgPD0gMCA/ICdMYSB2YWd1ZSBlc3QgcGFzc8OpZScgOiBwaCA8IDQgPyAnSW5zcGlyZeKApicgOiAnRXhwaXJl4oCmJzsKICAgICAgICBpZiAobGVmdCA8PSAwICYmICFaLnVyZ2UucmFuZykgeyBaLnVyZ2UucmFuZyA9IDE7IGNoaW1lKHRydWUpOyB0cnkgeyBuYXZpZ2F0b3IudmlicmF0ZSAmJiBuYXZpZ2F0b3IudmlicmF0ZShbMjAsIDYwLCAyMF0pOyB9IGNhdGNoIChlKSB7fSB9CiAgICAgIH0KICAgIH0sIDI1MCk7CiAgfQoKICAvKiAtLS0tLS0tLS0tIGFjdGlvbnMgLS0tLS0tLS0tLSAqLwogIGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZSgpIHsKICAgIGNvbnN0IGMxID0gJCgnI3pjMScpLnZhbHVlLCBjMiA9ICQoJyN6YzInKS52YWx1ZSwgbjEgPSAkKCcjem4xJykudmFsdWUudHJpbSgpLCBuMiA9ICQoJyN6bjInKS52YWx1ZS50cmltKCk7CiAgICBpZiAoYzEubGVuZ3RoIDwgNiB8fCAvXHMvLnRlc3QoYzEpKSB7IHRvYXN0KCdDb2RlIDogNiBjYXJhY3TDqHJlcyBtaW5pbXVtLCBzYW5zIGVzcGFjZS4nKTsgcmV0dXJuOyB9CiAgICBpZiAoYzEgIT09IGMyKSB7IHRvYXN0KCdMZXMgZGV1eCBjb2RlcyBuZSBzb250IHBhcyBpZGVudGlxdWVzLicpOyByZXR1cm47IH0KICAgIGlmICghbjEpIHsgdG9hc3QoJ0Rvbm5lIHVuIG5vbSDDoCBjZSBxdWUgdHUgYXJyw6p0ZXMuJyk7IHJldHVybjsgfQogICAgY29uc3QgZDEgPSAkKCcjemQxJykudmFsdWUgPyBuZXcgRGF0ZSgkKCcjemQxJykudmFsdWUpLmdldFRpbWUoKSA6IG5vdygpOwogICAgY29uc3QgaGFiaXRzID0gW25ld0hhYml0KG4xLCAnc3RvcCcsIGZhbHNlLCBNYXRoLm1pbihub3coKSwgZDEpKV07CiAgICBpZiAobjIpIGhhYml0cy5wdXNoKG5ld0hhYml0KG4yLCAnd2F0Y2gnLCAkKCcjem4ybicpLmNoZWNrZWQsIG5vdygpKSk7CiAgICBaLnNhbHQgPSBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KDE2KSk7IFoua2V5ID0gYXdhaXQgektleShjMSwgWi5zYWx0KTsKICAgIFouZCA9IHsgdjogMSwgaGFiaXRzLCBjcmVhdGVkOiBub3coKSB9OyBaLmhpZCA9IGhhYml0c1swXS5pZDsgWi52aWV3ID0gJ21haW4nOwogICAgYXdhaXQgcGVyc2lzdCgpOyBhc2tQZXJzaXN0KCk7IHNob3coKTsgdGlja1N0YXJ0KCk7IGRhaWx5Q2hlY2soKTsKICAgIHRvYXN0KCdFc3BhY2UgY3LDqcOpIGV0IGNoaWZmcsOpLiBUb24gY29kZSBsXCdvdXZyZSBkZXB1aXMgSWTDqWVzLicsIG51bGwsIG51bGwsIDYwMDApOwogIH0KICBmdW5jdGlvbiBzdGFydFVyZ2UoKSB7IGNvbnN0IGggPSBIKCk7IFoudXJnZSA9IHsgdDA6IG5vdygpLCBsZW46IGgubmljID8gNSA6IDEwLCB0cmlnOiAnJywgZG9uZToge30gfTsgWi52aWV3ID0gJ3VyZ2UnOyBaLmRoID0gbnVsbDsgYXVkaW9VbmxvY2soKTsgcmVyZW5kZXIoKTsgfQogIGZ1bmN0aW9uIGVuZFVyZ2Uod29uKSB7CiAgICBjb25zdCBoID0gSCgpLCB1ID0gWi51cmdlOyBpZiAoIXUpIHJldHVybjsKICAgIGgudXJnZXMucHVzaCh7IHQ6IHUudDAsIHRyaWc6IHUudHJpZywgd29uLCBkdXI6IE1hdGgucm91bmQoKG5vdygpIC0gdS50MCkgLyAxMDAwKSB9KTsKICAgIGNvbnN0IHRyaWcgPSB1LnRyaWc7IFoudXJnZSA9IG51bGw7IFouZGggPSBudWxsOwogICAgaWYgKHdvbikgewogICAgICBaLnZpZXcgPSAnbWFpbic7IHBlcnNpc3QoKTsgcmVyZW5kZXIoKTsgd2luZG93LnNjcm9sbFRvKDAsIDApOwogICAgICBjb25zdCBuID0gaC51cmdlcy5maWx0ZXIoeCA9PiB4LndvbikubGVuZ3RoOwogICAgICBsYXN0UHQgPSB7IHg6IGlubmVyV2lkdGggLyAyLCB5OiBpbm5lckhlaWdodCAqIC40IH07CiAgICAgIGNvbnN0IGcgPSBHRU1TW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIEdFTVMubGVuZ3RoKV07CiAgICAgIHJld2FyZCgxMCwgeyBiaWc6IHRydWUsIG1zZzogW2BFbnZpZSB2YWluY3VlIMK3ICR7bn0ke24gPT09IDEgPyAncmUnIDogJ2UnfWAsIE1hdGgucmFuZG9tKCkgPCAuNSA/ICdUdSB2aWVucyBkZSBwcm91dmVyIMOgIHRvbiBjZXJ2ZWF1IHF1ZSBsXCdlbnZpZSBwYXNzZSBzYW5zIGPDqWRlci4gTGEgcHJvY2hhaW5lIHNlcmEgdW4gcGV1IHBsdXMgZmFpYmxlLicgOiBnWzBdLCBNYXRoLnJhbmRvbSgpIDwgLjUgPyAnJyA6IGdbMV1dIH0pOwogICAgfSBlbHNlIHN0YXJ0UmVsYXBzZSh0cmlnKTsKICB9CiAgZnVuY3Rpb24gc3RhcnRSZWxhcHNlKHRyaWcpIHsKICAgIGNvbnN0IGdtID0gJCgnI2dlbScpOyBpZiAoZ20pIGdtLmNsYXNzTGlzdC5yZW1vdmUoJ29uJyk7CiAgICBaLnZpZXcgPSAncmVsYXBzZSc7IFoucmVsID0geyB3aGVuOiAnMCcsIHRyaWc6IHRyaWcgfHwgJycsIGJhcnM6IHt9IH07IFoudXJnZSA9IG51bGw7CiAgICByZXJlbmRlcigpOyB0aHVkKCk7IHRyeSB7IG5hdmlnYXRvci52aWJyYXRlICYmIG5hdmlnYXRvci52aWJyYXRlKFszMDBdKTsgfSBjYXRjaCAoZSkge30KICAgIGNvbnN0IGVsID0gJCgnI3pEb3duJyksIGZyb20gPSBNYXRoLmZsb29yKGRheXMoSCgpKSk7CiAgICBpZiAoZWwgJiYgZnJvbSA+IDAgJiYgIXJlZHVjZU1vdGlvbigpKSB7IGNvbnN0IHQwID0gcGVyZm9ybWFuY2Uubm93KCk7IGNvbnN0IHN0ID0gdCA9PiB7IGNvbnN0IGsgPSBNYXRoLm1pbigxLCAodCAtIHQwKSAvIDE4MDApOyBlbC50ZXh0Q29udGVudCA9IE1hdGgucm91bmQoZnJvbSAqICgxIC0gayAqIGspKTsgaWYgKGsgPCAxKSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3QpOyB9OyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3QpOyB9CiAgICBlbHNlIGlmIChlbCkgZWwudGV4dENvbnRlbnQgPSAnMCc7CiAgfQogIGZ1bmN0aW9uIHJlc3RhcnQoKSB7CiAgICBjb25zdCBoID0gSCgpLCByID0gWi5yZWwsIHQgPSBub3coKSAtIE51bWJlcihyLndoZW4pICogMzYwMDAwMDsKICAgIGguYmVzdCA9IE1hdGgubWF4KGguYmVzdCB8fCAwLCB0IC0gaC5zdGFydCk7CiAgICBoLnJlbGFwc2VzLnB1c2goeyB0LCB0cmlnOiByLnRyaWcsIG5vdGU6ICgkKCcjek5vdGUnKS52YWx1ZSB8fCAnJykudHJpbSgpLnNsaWNlKDAsIDUwMCksIHN0cmVhazogTWF0aC5tYXgoMCwgdCAtIGguc3RhcnQpIH0pOwogICAgT2JqZWN0LmtleXMoci5iYXJzKS5mb3JFYWNoKGsgPT4geyBoLmJhcltrXSA9IHRydWU7IH0pOwogICAgaC5zdGFydCA9IHQ7IGgubXMgPSB7fTsgaC5sYXN0Q2xlYW4gPSB0b2RheUlTTygpOwogICAgaWYgKHIuZ3ApIGguZ3AgPSB7IHQgfTsgCiAgICBub3VyQWRkKC0xNSk7IFoudmlldyA9ICdtYWluJzsgWi5yZWwgPSBudWxsOyBwZXJzaXN0KCk7IHJlcmVuZGVyKCk7IHdpbmRvdy5zY3JvbGxUbygwLCAwKTsgcmVmcmVzaFN1bigpOwogICAgdG9hc3QoaC5ncCA/ICdOb3V2ZWxsZSBzw6lyaWUgbGFuY8OpZS4gTGUgZ2h1c2wgdFwnYXR0ZW5kIGVuIGhhdXQgZGUgdG9uIGVzcGFjZSwgYXZlYyB0ZXMgcHJpw6hyZXMgw6AgcmF0dHJhcGVyLicgOiAnTm91dmVsbGUgc8OpcmllIGxhbmPDqWUuIExlcyAxMCBwcm9jaGFpbmVzIG1pbnV0ZXMgY29tcHRlbnQgOiBib3VnZSwgc29ycyBkZSBsYSBwacOoY2UuJywgbnVsbCwgbnVsbCwgNzAwMCk7CiAgfQoKICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gewogICAgaWYgKHRhYiAhPT0gJ3onKSByZXR1cm47CiAgICBjb25zdCB0ID0gZS50YXJnZXQsIGMgPSBzID0+IHQuY2xvc2VzdChzKTsgbGV0IGVsOwogICAgaWYgKGMoJ1tkYXRhLXpsb2NrXScpKSB7IGxvY2soKTsgZ28oJ29yYml0ZScpOyByZXR1cm47IH0KICAgIGlmIChjKCdbZGF0YS16Y3JlYXRlXScpKSB7IGNyZWF0ZSgpOyByZXR1cm47IH0KICAgIGlmICghWi5kKSByZXR1cm47CiAgICBjb25zdCBoID0gSCgpOwogICAgaWYgKChlbCA9IGMoJ1tkYXRhLXpoXScpKSkgeyBaLmhpZCA9IGVsLmRhdGFzZXQuemg7IHJlcmVuZGVyKCk7IHJldHVybjsgfQogICAgaWYgKGMoJ1tkYXRhLXp1cmdlXScpKSB7IHN0YXJ0VXJnZSgpOyByZXR1cm47IH0KICAgIGlmICgoZWwgPSBjKCdbZGF0YS16dHJpZ10nKSkpIHsgWi51cmdlLnRyaWcgPSBlbC5kYXRhc2V0Lnp0cmlnOyBoYXB0aWMoKTsgcmVyZW5kZXIoKTsgcmV0dXJuOyB9CiAgICBpZiAoKGVsID0gYygnW2RhdGEtemFjdF0nKSkpIHsKICAgICAgY29uc3QgayA9IGVsLmRhdGFzZXQuemFjdDsKICAgICAgaWYgKGsgPT09ICdkaGlrcicpIHsgWi5kaCA9IFouZGggfHwgWzAsIDBdOyBaLnVyZ2UuZG9uZS5kaGlrciA9IHRydWU7IHJlcmVuZGVyKCk7IGNvbnN0IGIgPSAkKCcuemRoJyk7IGlmIChiKSBiLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnLCBibG9jazogJ2NlbnRlcicgfSk7IHJldHVybjsgfQogICAgICBpZiAoIVoudXJnZS5kb25lW2tdKSB7IFoudXJnZS5kb25lW2tdID0gdHJ1ZTsgcmV3YXJkKDEsIHsgbm9Cb251czogdHJ1ZSB9KTsgfSBlbHNlIGRlbGV0ZSBaLnVyZ2UuZG9uZVtrXTsKICAgICAgcmVyZW5kZXIoKTsgcmV0dXJuOwogICAgfQogICAgaWYgKGMoJ1tkYXRhLXpkaF0nKSkgewogICAgICBjb25zdCBkID0gWi5kaDsgZFsxXSsrOyBoYXB0aWMoKTsKICAgICAgaWYgKGRbMV0gPj0gMzMpIHsgZFswXSsrOyBkWzFdID0gMDsgY2hpbWUoZmFsc2UpOyBpZiAoZFswXSA+PSAzKSB7IFouZGggPSBudWxsOyByZXdhcmQoMywgeyBtc2c6IFsnRGhpa3IgY29tcGxldCcsICdMZXMgY8WTdXJzIHNlIHRyYW5xdWlsbGlzZW50IHBhciBsZSByYXBwZWwgZFwnQWxsYWguIChDb3JhbiAxMzoyOCknXSB9KTsgcmVyZW5kZXIoKTsgcmV0dXJuOyB9IH0KICAgICAgY29uc3QgYiA9ICQoJy56ZGgnKTsgaWYgKGIpIGIub3V0ZXJIVE1MID0gZGhpa3JCb3goKTsgcmV0dXJuOwogICAgfQogICAgaWYgKGMoJ1tkYXRhLXp3b25dJykpIHsgZW5kVXJnZSh0cnVlKTsgcmV0dXJuOyB9CiAgICBpZiAoYygnW2RhdGEtemdhdmVdJykpIHsgZW5kVXJnZShmYWxzZSk7IHJldHVybjsgfQogICAgaWYgKGMoJ1tkYXRhLXpyZWxdJykpIHsgc3RhcnRSZWxhcHNlKCk7IHJldHVybjsgfQogICAgaWYgKChlbCA9IGMoJ1tkYXRhLXp3aGVuXScpKSkgeyBaLnJlbC53aGVuID0gZWwuZGF0YXNldC56d2hlbjsgcmVyZW5kZXIoKTsgcmV0dXJuOyB9CiAgICBpZiAoKGVsID0gYygnW2RhdGEtenJ0cmlnXScpKSkgeyBaLnJlbC50cmlnID0gZWwuZGF0YXNldC56cnRyaWc7IHJlcmVuZGVyKCk7IHJldHVybjsgfQogICAgaWYgKChlbCA9IGMoJ1tkYXRhLXpyYmFyXScpKSkgeyBjb25zdCBrID0gZWwuZGF0YXNldC56cmJhcjsgaWYgKFoucmVsLmJhcnNba10pIGRlbGV0ZSBaLnJlbC5iYXJzW2tdOyBlbHNlIFoucmVsLmJhcnNba10gPSAxOyBjb25zdCBuID0gJCgnI3pOb3RlJykudmFsdWU7IHJlcmVuZGVyKCk7ICQoJyN6Tm90ZScpLnZhbHVlID0gbjsgcmV0dXJuOyB9CiAgICBpZiAoYygnW2RhdGEtenJlc3RhcnRdJykpIHsgcmVzdGFydCgpOyByZXR1cm47IH0KICAgIGlmIChjKCdbZGF0YS16Z3BdJykpIHsgWi5yZWwuZ3AgPSB0cnVlOyByZXJlbmRlcigpOyByZXR1cm47IH0KICAgIGlmIChjKCdbZGF0YS16ZGtdJykpIHsgemRrVGFwKCk7IHJldHVybjsgfQogICAgaWYgKChlbCA9IGMoJ1tkYXRhLXpka2ZdJykpKSB7IHpkaCgpLmN1ciA9IGVsLmRhdGFzZXQuemRrZjsgWkQubiA9IDA7IHBlcnNpc3QoKTsgcmVyZW5kZXIoKTsgcmV0dXJuOyB9CiAgICBpZiAoYygnW2RhdGEtemdwZ10nKSkgeyBjb25zdCBnID0gSCgpLmdwOyBpZiAoIWcpIHJldHVybjsgaWYgKGcuZykgeyBkZWxldGUgZy5nOyBkZWxldGUgZy5yOyBwZXJzaXN0KCk7IHJlcmVuZGVyKCk7IHVucmV3YXJkKDMpOyByZXR1cm47IH0gZy5nID0gbm93KCk7IHBlcnNpc3QoKTsgcmVyZW5kZXIoKTsgcmV3YXJkKDMsIHsgbXNnOiBbJ0dodXNsIGZhaXQnLCAnQWxsYWggYWltZSBjZXV4IHF1aSBzZSByZXBlbnRlbnQgZXQgY2V1eCBxdWkgc2UgcHVyaWZpZW50LicsICdDb3JhbiAyOjIyMiddIH0pOyByZXR1cm47IH0KICAgIGlmIChjKCdbZGF0YS16Z3ByXScpKSB7IGNvbnN0IGcgPSBIKCkuZ3A7IGlmICghZyB8fCAhZy5nKSByZXR1cm47IGcuciA9ICFnLnI7IHBlcnNpc3QoKTsgcmVyZW5kZXIoKTsgZy5yID8gcmV3YXJkKDMsIHsgbXNnOiBbJ0RldXggcmFrXCdhdHMgZGUgcmVwZW50aXInLCAnTnVsIG5lIGNvbW1ldCB1biBww6ljaMOpIHB1aXMgc2UgcHVyaWZpZSwgcHJpZSBkZXV4IHJha1wnYXRzIGV0IGRlbWFuZGUgcGFyZG9uIMOgIEFsbGFoLCBzYW5zIHF1XCdBbGxhaCBuZSBsdWkgcGFyZG9ubmUuJywgJ0FidSBEYXd1ZCAxNTIxLCBUaXJtaWRoaSA0MDYnXSB9KSA6IHVucmV3YXJkKDMpOyByZXR1cm47IH0KICAgIGlmICgoZWwgPSBjKCdbZGF0YS16Z3BwXScpKSkgeyBjb25zdCBbaywgaWRdID0gZWwuZGF0YXNldC56Z3BwLnNwbGl0KCd8Jyk7IHNldFByYXllcihrLCBpZCwgJ3InKTsgcmVyZW5kZXIoKTsgcmV0dXJuOyB9CiAgICBpZiAoKGVsID0gYygnW2RhdGEtemdweF0nKSkpIHsgY29uc3QgZG9uZSA9IGVsLmRhdGFzZXQuemdweCA9PT0gJzEnOyBkZWxldGUgSCgpLmdwOyBwZXJzaXN0KCk7IHJlcmVuZGVyKCk7IGlmIChkb25lKSByZXdhcmQoNSwgeyBiaWc6IHRydWUsIG1zZzogWydUb3V0IGVzdCByYXR0cmFww6knLCAnUXVcJ0FsbGFoIGFjY2VwdGUgdG9uIHJlcGVudGlyIGV0IHRlcyBwcmnDqHJlcy4nXSB9KTsgcmV0dXJuOyB9CiAgICBpZiAoYygnW2RhdGEtenJlbHhdJykpIHsgWi52aWV3ID0gJ21haW4nOyBaLnJlbCA9IG51bGw7IHJlcmVuZGVyKCk7IHJldHVybjsgfQogICAgaWYgKGMoJ1tkYXRhLXpsb2ddJykpIHsgaC5sb2cucHVzaChub3coKSk7IGlmIChoLmxvZy5sZW5ndGggPiAzMDAwKSBoLmxvZy5zaGlmdCgpOyBwZXJzaXN0KCk7IGhhcHRpYygpOyByZXJlbmRlcigpOyByZXR1cm47IH0KICAgIGlmIChjKCdbZGF0YS16dW5sb2ddJykpIHsgaC5sb2cucG9wKCk7IHBlcnNpc3QoKTsgcmVyZW5kZXIoKTsgdG9hc3QoJ0Rlcm5pw6hyZSBwcmlzZSBhbm51bMOpZScpOyByZXR1cm47IH0KICAgIGlmICgoZWwgPSBjKCdbZGF0YS16cmVhZHldJykpKSB7IGNvbnN0IHYgPSBOdW1iZXIoZWwuZGF0YXNldC56cmVhZHkpLCBrID0gdG9kYXlJU08oKTsgaC5yZWFkeSA9IGgucmVhZHkuZmlsdGVyKHIgPT4gci5kICE9PSBrKTsgaC5yZWFkeS5wdXNoKHsgZDogaywgdiB9KTsgcGVyc2lzdCgpOyBoYXB0aWMoKTsgcmVyZW5kZXIoKTsgcmV0dXJuOyB9CiAgICBpZiAoYygnW2RhdGEtenJlYWR5LWdvXScpKSB7CiAgICAgIHRvYXN0KCdUYSBzw6lyaWUgZMOpbWFycmUgbWFpbnRlbmFudC4gUHLDqnQgPycsICdPdWknLCAoKSA9PiB7IGgubW9kZSA9ICdzdG9wJzsgaC5zdGFydCA9IG5vdygpOyBoLm1zID0ge307IGgucGxhbnMgPSBQTEFOU19OLm1hcChwID0+IHAuc2xpY2UoKSkuY29uY2F0KGgucGxhbnMuZmlsdGVyKHAgPT4gIVBMQU5TX04uc29tZShxID0+IHFbMF0gPT09IHBbMF0pKSkuc2xpY2UoMCwgNik7IHBlcnNpc3QoKTsgcmVyZW5kZXIoKTsgd2luZG93LnNjcm9sbFRvKDAsIDApOyByZXdhcmQoMTAsIHsgYmlnOiB0cnVlLCBtc2c6IFsnRMOpY2lzaW9uIHByaXNlJywgJ0xlIHBsdXMgZHVyIG5cJ2VzdCBwYXMgZFwnYXJyw6p0ZXIsIGNcJ2VzdCBkZSBkw6ljaWRlci4gQ1wnZXN0IGZhaXQuJ10gfSk7IH0sIDcwMDApOyByZXR1cm47CiAgICB9CiAgICBpZiAoKGVsID0gYygnW2RhdGEtemVkaXRdJykpKSB7IG9wZW5FZGl0KGVsLmRhdGFzZXQuemVkaXQpOyByZXR1cm47IH0KICAgIGlmIChjKCdbZGF0YS16cGFkZF0nKSkgeyBoLnBsYW5zLnB1c2goWycnLCAnJ10pOyBvcGVuRWRpdCgncGxhbnMnKTsgY29uc3QgaW5zID0gJCQoJ1tkYXRhLXpwXScpOyBpZiAoaW5zLmxlbmd0aCkgaW5zW2lucy5sZW5ndGggLSAyXS5mb2N1cygpOyByZXR1cm47IH0KICAgIGlmICgoZWwgPSBjKCdbZGF0YS16cGRlbF0nKSkpIHsgaC5wbGFucy5zcGxpY2UoTnVtYmVyKGVsLmRhdGFzZXQuenBkZWwpLCAxKTsgcGVyc2lzdCgpOyBvcGVuRWRpdCgncGxhbnMnKTsgcmV0dXJuOyB9CiAgICBpZiAoKGVsID0gYygnW2RhdGEtemVkb2tdJykpKSB7CiAgICAgIGlmIChlbC5kYXRhc2V0LnplZG9rID09PSAncmVhc29ucycpIGgucmVhc29ucyA9ICQoJyN6RWQnKS52YWx1ZS5zcGxpdCgnXG4nKS5tYXAoeCA9PiB4LnRyaW0oKSkuZmlsdGVyKEJvb2xlYW4pLnNsaWNlKDAsIDEyKTsKICAgICAgZWxzZSBoLnBsYW5zID0gaC5wbGFucy5maWx0ZXIocCA9PiBwWzBdLnRyaW0oKSB8fCBwWzFdLnRyaW0oKSk7CiAgICAgIHBlcnNpc3QoKTsgJCgnI2lkZWFzU2hlZXQnKS5jbG9zZSgpOyByZXJlbmRlcigpOyByZXR1cm47CiAgICB9CiAgfSk7CiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7CiAgICBpZiAodGFiICE9PSAneicgfHwgIVouZCkgcmV0dXJuOwogICAgY29uc3QgdCA9IGUudGFyZ2V0LCBoID0gSCgpOwogICAgaWYgKHQuZGF0YXNldC56YmFyKSB7IGlmICh0LmNoZWNrZWQpIHsgaC5iYXJbdC5kYXRhc2V0LnpiYXJdID0gdHJ1ZTsgcmV3YXJkKDMpOyB9IGVsc2UgZGVsZXRlIGguYmFyW3QuZGF0YXNldC56YmFyXTsgcGVyc2lzdCgpOyByZXJlbmRlcigpOyByZXR1cm47IH0KICAgIGlmICh0LmRhdGFzZXQuenApIHsgY29uc3QgW2ksIGpdID0gdC5kYXRhc2V0LnpwLnNwbGl0KCcuJykubWFwKE51bWJlcik7IGlmIChoLnBsYW5zW2ldKSB7IGgucGxhbnNbaV1bal0gPSB0LnZhbHVlLnRyaW0oKTsgcGVyc2lzdCgpOyB9IHJldHVybjsgfQogICAgaWYgKHQuZGF0YXNldC56c2V0KSB7IGhbdC5kYXRhc2V0LnpzZXRdID0gdC52YWx1ZS50cmltKCkucmVwbGFjZSgnLCcsICcuJyk7IHBlcnNpc3QoKTsgcmVyZW5kZXIoKTsgcmV0dXJuOyB9CiAgfSk7CgogIGZ1bmN0aW9uIGxvY2soKSB7CiAgICBjbGVhckludGVydmFsKGl2KTsgWi5rZXkgPSBudWxsOyBaLnNhbHQgPSBudWxsOyBaLmQgPSBudWxsOyBaLnVyZ2UgPSBudWxsOyBaLnJlbCA9IG51bGw7IFouZGggPSBudWxsOyBaLnZpZXcgPSAnbWFpbic7CiAgICBjb25zdCBzID0gJCgnI2lkZWFzU2hlZXQnKTsgaWYgKHMgJiYgcy5vcGVuICYmIHMuZGF0YXNldC5tb2RlID09PSAneicpIHsgcy5jbG9zZSgpOyBkZWxldGUgcy5kYXRhc2V0Lm1vZGU7IH0KICB9CiAgd2luZG93Ll9feiA9IHsKICAgIG9wZW4oa2V5LCBzYWx0LCBkYXRhKSB7IFoua2V5ID0ga2V5OyBaLnNhbHQgPSBzYWx0OyBaLmQgPSBkYXRhOyBaLnZpZXcgPSAnbWFpbic7IFouaGlkID0gKGRhdGEuaGFiaXRzWzBdIHx8IHt9KS5pZDsgc2hvdygpOyB0aWNrU3RhcnQoKTsgZGFpbHlDaGVjaygpOyB9LAogICAgc2V0dXAoKSB7IFoua2V5ID0gbnVsbDsgWi5kID0gbnVsbDsgc2hvdygpOyB9LAogICAgbG9jaywgdmlldywKICAgIGFjdGl2ZTogKCkgPT4gISFaLmQKICB9Owp9KSgpOwo=';
