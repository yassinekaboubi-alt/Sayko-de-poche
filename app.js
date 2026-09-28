/* Sayko de poche — v2.8
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
    blocks: {}, seen: {}, money: defaultMoney(), faith: defaultFaith(), unlocks: {}, biz: { projects: [] }, body: defaultBody(), nour: { log: {}, seen: '' }, zc: null,
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
  out.faith = { habits: Array.isArray(sf.habits) && sf.habits.length ? sf.habits : df.habits, log: sf.log && typeof sf.log === 'object' ? sf.log : {} };
  out.unlocks = (s && s.unlocks && typeof s.unlocks === 'object') ? s.unlocks : {};
  out.biz = { projects: s && s.biz && Array.isArray(s.biz.projects) ? s.biz.projects : [] };
  out.body = normalizeBody(s && s.body);
  out.nour = { log: s && s.nour && s.nour.log && typeof s.nour.log === 'object' ? s.nour.log : {}, seen: (s && s.nour && s.nour.seen) || '' };
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
  tick: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3.5 8.5l3 3 6-7"/></svg>'
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
  orbite: ['Ton système', 'Chaque planète est un module, son anneau doré montre où tu en es. Touche une planète pour y aller, fais tourner le système du doigt. Partout dans l\'app, le noyau doré en bas ouvre la roue des modules : touche-le, ou appuie et glisse vers un module.'],
  parcours: ['12 mois pour te former au business', 'Fais glisser l\'anneau ou touche une lune pour choisir un mois. Chaque mois se fait dans l\'ordre :', ['Écoute et lis les ressources', 'Coche les acquis quand tu les maîtrises', 'Fais l\'exercice pratique', 'Note ce que tu retiens']],
  arabe: ['Comprendre le sens de ce que tu récites', 'Quelques minutes de quiz par jour suffisent. Chaque étoile de la constellation est un mot : elle brille quand il est maîtrisé (3 bonnes réponses).'],
  routine: ['Ta 1 h 30 quotidienne', 'L\'anneau est découpé en 4 blocs. Touche un bloc quand il est fait : les 4 faits, la journée est validée et ta série continue.'],
  budget: ['Ta méthode', 'Elle tient en 3 temps :', ['Tu te paies d\'abord : ton épargne part en début de mois', 'Tes charges fixes sont mises de côté', 'Le reste est à toi, avec un budget par jour qui s\'ajuste à chaque dépense. Les enveloppes freinent les catégories où ça file vite.']],
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
      <text id="sunNour" y="58" text-anchor="middle" style="font-size:10.5px;font-weight:700;letter-spacing:.06em;fill:var(--gold)">✦ ${nourDay()}</text>
      <g id="planets">${planets}</g>
    </svg>
  </div>
  ${yesterdayCard()}${atStake()}
  <section style="margin-top:18px">
    <h2>Aujourd'hui</h2>
    <div class="today-list">
      ${isSetUp() ? (() => { const bb = budgetOf(todayISO().slice(0, 7)), dd = bb.daysLeft ? bb.reste / bb.daysLeft : 0; return `<button class="today-item" data-goto="budget">${miniOrb(bb.free > 0 ? Math.max(0, bb.reste) / bb.free : 0, 'argent')}<span><b>${bb.reste > 0 ? `${eur0(dd)} à dépenser aujourd'hui` : 'Budget du mois épuisé'}</b><span class="s">Reste ${eur0(bb.reste)} ce mois</span></span>${ICON.chev}</button>`; })() : ''}
      <button class="today-item" data-goto="heures">${miniOrb(planetValue('heures')[0], 'heures')}<span><b>${wk ? `${fmtH(wk)} cette semaine` : 'Aucun service cette semaine'}</b><span class="s">Noter un service</span></span>${ICON.chev}</button>
      <button class="today-item" data-goto="routine">${miniOrb(tb / 4, 'routine')}<span><b>${tb === 4 ? 'Routine faite' : `${tb} bloc${tb > 1 ? 's' : ''} sur 4`}</b><span class="s">${streak()} jour${streak() > 1 ? 's' : ''} d'affilée</span></span>${ICON.chev}</button>
      ${(() => { const ph = phaseOf(S.body.phase), n = weekSessions().length, t = bodyTargets(), fd = foodDay();
        const b = S.body.active ? 'Séance en cours' : n >= ph.perWeek ? 'Séances de la semaine faites' : isFastDay() ? 'Jour de jeûne · repos' : `Séance ${nextTpl(ph)} · ${ph.name}`;
        return `<button class="today-item" data-goto="corps">${miniOrb(n / ph.perWeek, 'corps')}<span><b>${b}</b><span class="s">${t ? `Protéines ${fd.p} / ${t.prot} g aujourd'hui` : `${n}/${ph.perWeek} séances cette semaine`}</span></span>${ICON.chev}</button>`; })()}
      <button class="today-item" data-goto="parcours">${miniOrb(modPct(cur), 'parcours')}<span><b>Mois ${cm} · ${esc(cur.title)}</b><span class="s">${modDone(cur)} acquis sur ${cur.acq.length}</span></span>${ICON.chev}</button>
      ${(() => { const n = S.faith.habits.length, dn = dayDone(todayISO()); return `<button class="today-item" data-goto="habitudes">${miniOrb(n ? dn / n : 0, 'foi', true)}<span><b>${dn === n ? 'Habitudes du jour complètes' : `${dn} habitude${dn > 1 ? 's' : ''} sur ${n} aujourd'hui`}</b><span class="s">Régularité ${Math.round(faithScore().pct * 100)} % sur 30 jours</span></span>${ICON.chev}</button>`; })()}
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
    if (d && !d.moved) { const p = e.target.closest && e.target.closest('[data-planet]'); if (p) go(p.dataset.planet); }
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
function autoPlan(ym, incTotal, fixTotal, carry = 0) {
  const M = S.money, L = lifeBudget(ym);
  if (!(incTotal > 0)) return { ok: false, why: 'revenus', life: L };
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
      <div class="cell"><label for="mLife">Budget de vie mensuel<span class="small muted" style="display:block">courses, essence, sorties… ${(() => { const L = lifeBudget(A.month); return L.src === 'manuel' ? '' : L.v ? `(auto : ${eur0(L.v)})` : '(à renseigner)'; })()}</span></label><input class="r" id="mLife" inputmode="decimal" value="${esc(String(M.life || '').replace('.', ','))}" placeholder="auto"><span class="unit">€</span></div></div>
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
try { const v = localStorage.getItem('sdp-foi-view'); if (v === 'habitudes' || v === 'arabe') F.view = v; } catch (e) {}
const dayDone = k => { const d = S.faith.log[k] || {}; return S.faith.habits.filter(h => d[h.id]).length; };
/* Régularité sur 30 jours : la journée en cours ne compte que lorsqu'elle est complète. */
function faithScore() {
  const hs = S.faith.habits, n = hs.length; if (!n) return { pct: 0, tracked: 0, done: 0, need: 0, total: 0 };
  const todayFull = dayDone(todayISO()) === n, off = todayFull ? 0 : 1;
  let done = 0, tracked = 0;
  for (let i = off; i < off + FAITH_DAYS; i++) { const k = iso(addDays(new Date(), -i)), c = dayDone(k); done += c; if (c) tracked++; }
  const total = n * FAITH_DAYS;
  return { pct: done / total, tracked, done, total, need: Math.max(0, Math.ceil(FAITH_GOAL * total) - done) };
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
  return `${pageHead('Foi', view === 'arabe' ? 'Le sens de ce que tu lis. Tajwid Institut s\'occupe de la lecture.' : 'La régularité avant tout. Chaque prière à l\'heure compte.', view === 'arabe' ? 'arabe' : 'foi')}
  <div class="seg" role="group" aria-label="Section" style="margin-top:20px">
    <button data-fview="habitudes" aria-pressed="${view === 'habitudes'}"><span class="dot"></span>Habitudes</button>
    <button data-fview="arabe" aria-pressed="${view === 'arabe'}"><span class="dot"></span>Arabe & Coran</button>
  </div>`;
}
function vHabits() {
  const k = F.day, d = S.faith.log[k] || {}, isToday = k === todayISO();
  const sc = faithScore(), ok = sc.pct >= FAITH_GOAL;
  // Chemin du soleil : Fajr à l'aube, Dhuhr au zénith, Asr, Maghrib au couchant, Isha dans la nuit.
  const ANG = { fajr: 196, dhuhr: 94, asr: 46, maghrib: 6, isha: -34 }, R = 136;
  const prayers = S.faith.habits.filter(h => h.prayer && ANG[h.id] != null);
  const nodes = prayers.map(h => { const a = ANG[h.id] * Math.PI / 180, x = R * Math.cos(a), y = -R * Math.sin(a), p = PRAYERS.find(q => q[0] === h.id);
    return `<button class="prayer ${d[h.id] ? 'on' : ''}" data-habit="${h.id}" aria-pressed="${!!d[h.id]}" aria-label="${esc(h.name)}" style="left:${((x + 180) / 360 * 100).toFixed(2)}%;top:${((y + 160) / 250 * 100).toFixed(2)}%"><span class="ar" lang="ar">${p[2]}</span><small>${p[1]}</small></button>`; }).join('');
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
  <div class="sunpath">
    <svg viewBox="-180 -160 360 250" aria-hidden="true">
      <path d="M-170 0 L170 0" stroke="var(--line)" stroke-width="1"/><text x="-170" y="-6" style="font-size:8px;font-weight:700;letter-spacing:.14em;fill:var(--muted)">HORIZON</text>
      <path d="${`M${(-R).toFixed(1)} 0 A${R} ${R} 0 0 1 ${R} 0`}" fill="none" stroke="var(--orbit)" stroke-width="1.2" stroke-dasharray="3 5"/>
      <text x="0" y="-40" text-anchor="middle" style="font:400 44px var(--serif);fill:var(--gold)">${nDone}<tspan style="font-size:20px;fill:var(--muted)">/${n}</tspan></text>
      <text x="0" y="-18" text-anchor="middle" style="font-size:9px;font-weight:700;letter-spacing:.14em;fill:var(--muted)">HABITUDES</text>
    </svg>
    ${nodes}
  </div>
  ${others.length ? `<div class="checks" style="margin-top:6px">${others.map(h => checkbox(h.id, esc(h.name), 'data-habitc', !!d[h.id])).join('')}</div>` : ''}
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
    <div class="srow" style="margin-top:14px"><input id="hNew" placeholder="Ex. Adhkar du matin" aria-label="Nouvelle habitude" style="flex:1"><button class="btn sm" data-hadd>Ajouter</button></div>`;
  const d = $('#ideasSheet'); if (!d.open) d.showModal(); d.dataset.mode = 'bsetup';
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
  ['unlocks', 'level', 'food', 'fcount', 'sleep', 'fitra', 'ghusl'].forEach(k => { if (!b[k] || typeof b[k] !== 'object' || Array.isArray(b[k])) b[k] = {}; });
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
function sleepBars() {
  const W = 320, H = 150, T = 18, B = 26, max = 600, bw = 30, L0 = 26, gap = (W - L0 - 7 * bw) / 6;
  const Y = m => T + (1 - Math.min(m, max) / max) * (H - T - B);
  let h = `<line x1="${L0 - 4}" y1="${Y(420)}" x2="${W}" y2="${Y(420)}" stroke="var(--mint)" stroke-dasharray="4 4" stroke-width="1.2"/><text x="0" y="${Y(420) + 3.5}" style="font-size:10px;font-weight:700;fill:var(--mint)">7 h</text>`;
  for (let i = 6; i >= 0; i--) {
    const d = addDays(new Date(), -i), k = iso(d), m = S.body.sleep[k], x = L0 + (6 - i) * (bw + gap);
    h += m ? `<rect x="${x.toFixed(1)}" y="${Y(m).toFixed(1)}" width="${bw}" height="${(H - B - Y(m)).toFixed(1)}" rx="8" fill="var(--${m >= 420 ? 'gold' : 'warn'})" opacity="${i ? .75 : 1}"/><text x="${(x + bw / 2).toFixed(1)}" y="${(Y(m) - 5).toFixed(1)}" text-anchor="middle" style="font-size:10px;font-weight:700;fill:var(--ink-2)">${Math.floor(m / 60)}h${m % 60 ? pad(m % 60) : ''}</text>`
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
  const k = todayISO(), m = S.body.sleep[k], logged = Array.from({ length: 7 }, (_, i) => S.body.sleep[iso(addDays(new Date(), -i))]).filter(Boolean);
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
  </section>`;
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
  const h = new Date().getHours(); if (h < 19) return '';
  const k = todayISO(), items = [], st = streak();
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
    <p class="hint" style="margin-top:30px;text-align:center">Sayko de poche · v2.6 · fonctionne hors ligne</p>`;
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

/* =====================================================================
   15. RENDU & NAVIGATION
   ===================================================================== */
const TABS = ['orbite', 'parcours', 'foi', 'corps', 'routine', 'argent', 'business'];
const CVIEWS = ['entrainement', 'nutrition', 'soin'];
let tab = 'orbite';
function render(animate) {
  const app = $('#app');
  stopOrbit();
  app.className = animate ? 'view' : '';
  checkUnlocks();
  app.innerHTML = { orbite: vOrbite, parcours: vParcours, foi: () => F.view === 'arabe' ? vArabe() : vHabits(), corps: () => C.view === 'nutrition' ? vNutrition() : C.view === 'soin' ? vSoin() : vTraining(), routine: vRoutine, argent: () => A.view === 'heures' ? vHeures() : vBudget(), business: vBusiness, z: () => window.__z ? window.__z.view() : vOrbite() }[tab]();
  coreGlyph();
  if (tab === 'orbite') startOrbit();
  if (tab === 'parcours') bindParcours();
  if (tab === 'foi' && F.view === 'arabe') { if (quiz && !quiz.answered) drawQuiz(); else nextQuiz(); }
  if (tab === 'argent' && A.view === 'heures') bindDial();
}
function setAView(v) { A.view = v; try { localStorage.setItem('sdp-argent-view', v); } catch (e) {} }
function setFView(v) { F.view = v; try { localStorage.setItem('sdp-foi-view', v); } catch (e) {} }
function go(t) {
  if (tab === 'z') zLock();
  if (CVIEWS.includes(t)) { setCView(t); if (tab === 'corps') { render(); window.scrollTo(0, 0); return; } t = 'corps'; }
  if (t === 'arabe' || t === 'habitudes') { setFView(t); if (tab === 'foi') { render(); window.scrollTo(0, 0); return; } t = 'foi'; }
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
const NAV = [['foi', 'Foi'], ['corps', 'Corps'], ['routine', 'Routine'], ['parcours', 'Parcours'], ['argent', 'Argent'], ['business', 'Business']];
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
  if ((el = c('[data-open]'))) { el.dataset.open === 'settings' ? openSettings() : openIdeas(); return; }
  // Foi
  if ((el = c('[data-fview]'))) { go(el.dataset.fview); return; }
  if ((el = c('[data-fstep]'))) { F.day = iso(addDays(parseDate(F.day), Number(el.dataset.fstep))); render(); return; }
  if ((el = c('[data-fday]'))) { F.day = el.dataset.fday; render(); return; }
  if ((el = c('[data-habit]'))) { toggleHabit(el.dataset.habit); return; }
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
    const was = S.body.sleep[k] || 0;
    S.body.sleep[k] = v[0] === '=' ? Number(v.slice(1)) : Math.max(60, Math.min(720, cur + (S.body.sleep[k] ? Number(v) : 0)));
    save(); haptic();
    if (was < 420 && S.body.sleep[k] >= 420) reward(2); else if (was >= 420 && S.body.sleep[k] < 420) unreward(2); const sy = window.scrollY; render(); window.scrollTo(0, sy); return;
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
  if ((e.key === 'Enter' || e.key === ' ') && t.matches && t.matches('[data-planet],[data-moon],.seg-arc,[data-phase]')) {
    e.preventDefault();
    if (t.dataset.phase) { t.dispatchEvent(new MouseEvent('click', { bubbles: true })); return; }
    if (t.dataset.planet) go(t.dataset.planet); else if (t.dataset.moon) selectMonth(Number(t.dataset.moon)); else toggleBlock(Number(t.dataset.block));
  }
  if (e.key === 'Enter' && t.id === 'fNote') { e.preventDefault(); saveShift(); }
  if (e.key === 'Enter' && (t.id === 'bAmount' || t.id === 'bNote')) { e.preventDefault(); addTx(); }
});
document.addEventListener('change', e => {
  const t = e.target;
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
  if (todayISO() !== lastDay) { lastDay = todayISO(); H.form = null; H.month = todayISO().slice(0, 7); A.month = H.month; P.sel = null; render(); }
  else if (tab === 'orbite') startOrbit();
});
window.addEventListener('resize', () => { if (W8.open) buildWheel(); });

/* =====================================================================
   16. DÉMARRAGE
   ===================================================================== */
(async function boot() {
  S = await loadState();
  save(true);
  let t = location.hash.slice(1);
  if (t === 'arabe' || t === 'habitudes') { setFView(t); t = 'foi'; }
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
const Z_MOD = 'LyogRXNwYWNlIHByaXbDqSDigJQgY2hhcmfDqSBzZXVsZW1lbnQgYXByw6hzIGxlIGJvbiBjb2RlLiBUb3V0IGVzdCBjaGlmZnLDqSBkYW5zIFMuemMuICovCihmdW5jdGlvbiAoKSB7CiAgY29uc3QgWiA9IHsga2V5OiBudWxsLCBzYWx0OiBudWxsLCBkOiBudWxsLCB2aWV3OiAnbWFpbicsIGhpZDogbnVsbCwgdXJnZTogbnVsbCwgcmVsOiBudWxsLCBkaDogbnVsbCB9OwogIGNvbnN0IE1TID0gWzEsIDMsIDcsIDE0LCAyMSwgMzAsIDQwLCA2MCwgOTAsIDE4MCwgMzY1XTsKICBjb25zdCBUUklHID0gW1snZW5udWknLCAnRW5udWknXSwgWydzdHJlc3MnLCAnU3RyZXNzJ10sIFsnc29saXR1ZGUnLCAnU29saXR1ZGUnXSwgWydmYXRpZ3VlJywgJ0ZhdGlndWUnXSwgWydvY2Nhc2lvbicsICdPY2Nhc2lvbiddLCBbJ3Njcm9sbCcsICdTY3JvbGwnXSwgWydhdXRyZScsICdBdXRyZSddXTsKICBjb25zdCBQTEFOU19CID0gW1snSmUgbVwnZW5udWllLCBzZXVsIMOgIGxhIG1haXNvbicsICdKZSBzb3JzIG1hcmNoZXIgMTAgbWludXRlcyBvdSBqZSBsYW5jZSB1bmUgc8OpYW5jZSBDb3JwcyddLCBbJ0plIHN1aXMgYXUgbGl0IGF2ZWMgbGUgdMOpbMOpcGhvbmUnLCAnSmUgbGUgcG9zZSBob3JzIGRlIGxhIGNoYW1icmUgZXQgamUgbGlzIGRldXggcGFnZXMnXSwgWydKZSByZW50cmUgZHUgdHJhdmFpbCBzdHJlc3PDqSBvdSBmYXRpZ3XDqScsICdEb3VjaGUsIGFibHV0aW9ucywgcHVpcyAxMCBtaW51dGVzIGRlIENvcmFuIG91IGRlIGRoaWtyJ10sIFsnVW4gc2Nyb2xsIGNvbW1lbmNlIMOgIGTDqXJhcGVyJywgJ0plIGZlcm1lIGxcJ2FwcGxpLCBqZSBtZSBsw6h2ZSwgamUgY2hhbmdlIGRlIHBpw6hjZSddLCBbJ0xcJ29jY2FzaW9uIHNlIHByw6lzZW50ZScsICdKXCdvdXZyZSDCqyBKXCdhaSB1bmUgZW52aWUgwrsgZXQgamUgbGFuY2UgbGEgdmFndWUnXV07CiAgY29uc3QgUExBTlNfTiA9IFtbJ0plIHNvcnMgZHUgdHJhdmFpbCcsICdVbiBjaGV3aW5nLWd1bSBvdSB1biBncmFuZCB2ZXJyZSBkXCdlYXUgw6AgbGEgcGxhY2UnXSwgWydKZSBtXCdlbm51aWUnLCAnNSBtaW51dGVzIGRlIG1hcmNoZSA6IGxcJ2VudmllIHBhc3NlIGVuIDMgw6AgNSBtaW51dGVzJ10sIFsnSmUgZmluaXMgdW4gcmVwYXMnLCAnSmUgbWUgbMOodmUgdG91dCBkZSBzdWl0ZSBldCBqZSBtZSBicm9zc2UgbGVzIGRlbnRzJ10sIFsnT24gbVwnZW4gcHJvcG9zZSB1bmUnLCAnwqsgTm9uIG1lcmNpLCBqXCdhcnLDqnRlLiDCuyBQcsOpcGFyw6kgw6AgbFwnYXZhbmNlLCBjXCdlc3QgcGx1cyBmYWNpbGUnXV07CiAgY29uc3QgQkFSX0IgPSBbWydmaWx0cmUnLCAnRmlsdHJlIGFjdGl2w6kgc3VyIGxcJ2lQaG9uZScsICdSw6lnbGFnZXMg4oaSIFRlbXBzIGRcJ8OpY3JhbiDihpIgQ29udGVudSBldCBjb25maWRlbnRpYWxpdMOpIOKGkiBSZXN0cmljdGlvbnMgZGUgY29udGVudSDihpIgQ29udGVudSB3ZWIg4oaSIExpbWl0ZXIgbGVzIHNpdGVzIHBvdXIgYWR1bHRlcy4nXSwgWydjb2RlJywgJ0NvZGUgVGVtcHMgZFwnw6ljcmFuIGNvbmZpw6kgw6AgcXVlbHF1XCd1biBkZSBjb25maWFuY2UnLCAnVHUgbmUgcGV1eCBwbHVzIHJldGlyZXIgbGUgZmlsdHJlIHN1ciB1biBjb3VwIGRlIHTDqnRlLiddLCBbJ2NoYW1icmUnLCAnVMOpbMOpcGhvbmUgcXVpIGRvcnQgaG9ycyBkZSBsYSBjaGFtYnJlJywgJ1VuIHZyYWkgcsOpdmVpbCBwb3VyIGxlIG1hdGluLiddLCBbJ2NvdWV0dGUnLCAnSmFtYWlzIGRlIHTDqWzDqXBob25lIHNvdXMgbGEgY291ZXR0ZSBuaSBhdXggdG9pbGV0dGVzJywgJyddLCBbJ2FwcHMnLCAnQ29tcHRlcyBldCBhcHBsaXMgcXVpIGTDqWNsZW5jaGVudCA6IHN1cHByaW3DqXMgb3UgbWFzcXXDqXMnLCAnJ10sIFsncG9ydGUnLCAnU2V1bCDDoCBsYSBtYWlzb24gOiBwb3J0ZSBvdXZlcnRlLCBqYW1haXMgYWxsb25nw6kgw6AgdHJhw65uZXInLCAnJ11dOwogIGNvbnN0IEJBUl9OID0gW1snc3RvY2snLCAnQXVjdW5lIHB1ZmYgZW4gcsOpc2VydmUgw6AgbGEgbWFpc29uJywgJyddLCBbJ2FjaGF0JywgJ1BsdXMgZFwnYWNoYXQgYXV0b21hdGlxdWUgOiBqZSBub3RlIGF2YW50IGRcJ2FjaGV0ZXInLCAnJ10sIFsnbGlldXgnLCAnSlwnw6l2aXRlIGxlcyBwYXVzZXMgYXZlYyBjZXV4IHF1aSB2YXBvdGVudCcsICcnXV07CiAgY29uc3QgQUNUX0IgPSBbWydsZXZlJywgJ0plIG1lIGzDqHZlIGV0IGplIGNoYW5nZSBkZSBwacOoY2UnXSwgWyd3dWR1JywgJ0plIGZhaXMgbWVzIGFibHV0aW9ucyddLCBbJ3BvbXBlcycsICcyMCBwb21wZXMgb3UgMzAgc3F1YXRzJ10sIFsndGVsJywgJ1TDqWzDqXBob25lIHBvc8OpIGRhbnMgdW5lIGF1dHJlIHBpw6hjZSddLCBbJ2RoaWtyJywgJ0RoaWtyIDogMzMgw5cgMyddLCBbJ21zZycsICdKXCfDqWNyaXMgw6AgcXVlbHF1XCd1biddXTsKICBjb25zdCBBQ1RfTiA9IFtbJ2VhdScsICdVbiBncmFuZCB2ZXJyZSBkXCdlYXUnXSwgWydtYXJjaGUnLCAnNSBtaW51dGVzIGRlIG1hcmNoZSddLCBbJ2dvbW1lJywgJ1VuIGNoZXdpbmctZ3VtJ10sIFsnZGhpa3InLCAnRGhpa3IgOiAzMyDDlyAzJ10sIFsnbGV2ZScsICdKZSBjaGFuZ2UgZGUgcGnDqGNlJ11dOwogIGNvbnN0IERISUtSID0gW1sn2LPZj9io2ZLYrdmO2KfZhtmOINin2YTZhNmO2ZHZh9mQJywgJ1N1YmhhbkFsbGFoJ10sIFsn2KfZhNmS2K3ZjtmF2ZLYr9mPINmE2ZDZhNmO2ZHZh9mQJywgJ0FsaGFtZHVsaWxsYWgnXSwgWyfYp9mE2YTZjtmR2YfZjyDYo9mO2YPZktio2Y7YsdmPJywgJ0FsbGFodSBha2JhciddXTsKICBjb25zdCBEQVkgPSA4NjRlNTsKCiAgLyogLS0tLS0tLS0tLSBzdHlsZXMgKGluamVjdMOpcyBwb3VyIG5lIHJpZW4gbGFpc3NlciBkYW5zIGluZGV4Lmh0bWwpIC0tLS0tLS0tLS0gKi8KICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd6c3QnKSkgewogICAgY29uc3Qgc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpOyBzdC5pZCA9ICd6c3QnOwogICAgc3QudGV4dENvbnRlbnQgPSBgCi56aHttYXJnaW4tdG9wOjRweH0KLnpoZXJve3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6Z3JpZDtwbGFjZS1pdGVtczpjZW50ZXI7bWFyZ2luLXRvcDoxOHB4fQouemhlcm8+c3Zne3dpZHRoOm1pbigyNzBweCw3NHZ3KTtoZWlnaHQ6YXV0bztvdmVyZmxvdzp2aXNpYmxlO2Rpc3BsYXk6YmxvY2t9Ci56aGN7cG9zaXRpb246YWJzb2x1dGU7aW5zZXQ6MDtkaXNwbGF5OmdyaWQ7cGxhY2UtaXRlbXM6Y2VudGVyO3RleHQtYWxpZ246Y2VudGVyO3BvaW50ZXItZXZlbnRzOm5vbmV9Ci56aGMgYntkaXNwbGF5OmJsb2NrO2ZvbnQ6NDAwIDQuNXJlbS8xIHZhcigtLXNlcmlmKX0KLnpoYyBzcGFue2ZvbnQtc2l6ZTouODEyNXJlbTtjb2xvcjp2YXIoLS1tdXRlZCl9Ci56dGlja3tmb250OjQwMCAxLjI1cmVtLzEuMiB2YXIoLS1zZXJpZik7Y29sb3I6dmFyKC0taW5rLTIpO2ZvbnQtdmFyaWFudC1udW1lcmljOnRhYnVsYXItbnVtc30KLnpzb3N7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2dhcDoxMHB4O3dpZHRoOjEwMCU7bWluLWhlaWdodDo2NHB4O21hcmdpbi10b3A6MjBweDtib3JkZXItcmFkaXVzOjIycHg7YmFja2dyb3VuZDp2YXIoLS1nb2xkKTtjb2xvcjp2YXIoLS1nb2xkLWluayk7Zm9udC13ZWlnaHQ6NzAwO2ZvbnQtc2l6ZToxLjA2MjVyZW07Ym94LXNoYWRvdzowIDAgMCAwIHZhcigtLWdsb3cpO2FuaW1hdGlvbjp6cHVsc2UgMi42cyBlYXNlLW91dCBpbmZpbml0ZX0KQGtleWZyYW1lcyB6cHVsc2V7MCV7Ym94LXNoYWRvdzowIDAgMCAwIHZhcigtLWdsb3cpfTcwJXtib3gtc2hhZG93OjAgMCAwIDE2cHggdHJhbnNwYXJlbnR9MTAwJXtib3gtc2hhZG93OjAgMCAwIDAgdHJhbnNwYXJlbnR9fQouem1zPnN2Z3t3aWR0aDoxMDAlO2hlaWdodDphdXRvO2Rpc3BsYXk6YmxvY2s7b3ZlcmZsb3c6dmlzaWJsZX0KLnpjYXJke21hcmdpbi10b3A6MTJweDtwYWRkaW5nOjE2cHg7Ym9yZGVyLXJhZGl1czp2YXIoLS1yKTtiYWNrZ3JvdW5kOnZhcigtLXN1cmZhY2UpfQouenBsYW57ZGlzcGxheTpncmlkO2dyaWQtdGVtcGxhdGUtY29sdW1uczptaW5tYXgoMCwxZnIpIG1pbm1heCgwLDFmcikgMzZweDtnYXA6NnB4O21hcmdpbi1ib3R0b206OHB4fQouenBsYW4gaW5wdXR7bWluLXdpZHRoOjA7bWluLWhlaWdodDo0NHB4O2JvcmRlcjowO2JvcmRlci1yYWRpdXM6MTJweDtiYWNrZ3JvdW5kOnZhcigtLXN1cmZhY2UpO3BhZGRpbmc6MCAxMHB4O2NvbG9yOnZhcigtLWluayk7Zm9udC1zaXplOi44NzVyZW19Ci56cGxhbiBpbnB1dDpmb2N1c3tvdXRsaW5lOjJweCBzb2xpZCB2YXIoLS1nb2xkKX0KLnpwbGFuIC5pY29uLWJ0bnt3aWR0aDozNnB4fQouemlme2Rpc3BsYXk6Z3JpZDtnYXA6OHB4fQouemlmIGRpdntwYWRkaW5nOjEycHggMTRweDtib3JkZXItcmFkaXVzOjE0cHg7YmFja2dyb3VuZDp2YXIoLS1zdXJmYWNlKTtmb250LXNpemU6LjkzNzVyZW07bGluZS1oZWlnaHQ6MS40fQouemlmIHNtYWxse2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOi42ODc1cmVtO2ZvbnQtd2VpZ2h0OjcwMDtsZXR0ZXItc3BhY2luZzouMWVtO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtjb2xvcjp2YXIoLS1tdXRlZCl9Ci56aWYgYntjb2xvcjp2YXIoLS1nb2xkKTtmb250LXdlaWdodDo2NTB9Ci56ZGlhbD5zdmd7d2lkdGg6bWluKDI1MHB4LDcwdncpO2hlaWdodDphdXRvO2Rpc3BsYXk6YmxvY2s7bWFyZ2luOjAgYXV0bztvdmVyZmxvdzp2aXNpYmxlfQouenRye2Rpc3BsYXk6Z3JpZDtncmlkLXRlbXBsYXRlLWNvbHVtbnM6OTBweCBtaW5tYXgoMCwxZnIpIDI4cHg7Z2FwOjEwcHg7YWxpZ24taXRlbXM6Y2VudGVyO2ZvbnQtc2l6ZTouODc1cmVtO21hcmdpbi10b3A6OHB4fQouenRyIC5iYXJ7aGVpZ2h0OjhweH0KLnprcGlze2Rpc3BsYXk6Z3JpZDtncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KDMsbWlubWF4KDAsMWZyKSk7Z2FwOjhweDttYXJnaW4tdG9wOjE0cHh9Ci56a3BpcyBkaXZ7cGFkZGluZzoxMnB4O2JvcmRlci1yYWRpdXM6MTRweDtiYWNrZ3JvdW5kOnZhcigtLXN1cmZhY2UpO3RleHQtYWxpZ246Y2VudGVyfQouemtwaXMgYntkaXNwbGF5OmJsb2NrO2ZvbnQ6NDAwIDEuNzVyZW0vMS4xIHZhcigtLXNlcmlmKX0KLnprcGlzIHNwYW57Zm9udC1zaXplOi42ODc1cmVtO2NvbG9yOnZhcigtLW11dGVkKTtsaW5lLWhlaWdodDoxLjI1O2Rpc3BsYXk6YmxvY2t9Ci56dXJnZXtwb3NpdGlvbjpmaXhlZDtpbnNldDowO3otaW5kZXg6MzM7YmFja2dyb3VuZDp2YXIoLS1iZyk7b3ZlcmZsb3c6YXV0bztwYWRkaW5nOmNhbGModmFyKC0tc2F0KSArIDE4cHgpIDIwcHggY2FsYyh2YXIoLS1zYWIpICsgMTIwcHgpO2FuaW1hdGlvbjp6aW4gLjM1cyB2YXIoLS1lYXNlKX0KLnp1cmdlIC5pbnttYXgtd2lkdGg6NTIwcHg7bWFyZ2luOjAgYXV0b30KQGtleWZyYW1lcyB6aW57ZnJvbXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlKC45OCl9fQouenN0YWtle2ZvbnQ6NDAwIDIuNHJlbS8xLjEgdmFyKC0tc2VyaWYpO2NvbG9yOnZhcigtLWdvbGQpO2ZvbnQtdmFyaWFudC1udW1lcmljOnRhYnVsYXItbnVtczttYXJnaW46NHB4IDAgMH0KLnp3YXZle3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6Z3JpZDtwbGFjZS1pdGVtczpjZW50ZXI7bWFyZ2luOjIycHggMCA4cHh9Ci56d2F2ZT5zdmd7d2lkdGg6bWluKDI1MHB4LDcwdncpO2hlaWdodDphdXRvO292ZXJmbG93OnZpc2libGV9Ci56YnJlYXRoe3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjExOHB4O2hlaWdodDoxMThweDtib3JkZXItcmFkaXVzOjUwJTtiYWNrZ3JvdW5kOnJhZGlhbC1ncmFkaWVudChjaXJjbGUsdmFyKC0tZ2xvdyksdHJhbnNwYXJlbnQgNzAlKTtib3gtc2hhZG93Omluc2V0IDAgMCAwIDEuNXB4IHZhcigtLWdvbGQpO2FuaW1hdGlvbjp6YnIgMTBzIGVhc2UtaW4tb3V0IGluZmluaXRlfQpAa2V5ZnJhbWVzIHpicnswJXt0cmFuc2Zvcm06c2NhbGUoLjcyKX00MCV7dHJhbnNmb3JtOnNjYWxlKDEuMTIpfTEwMCV7dHJhbnNmb3JtOnNjYWxlKC43Mil9fQouendje3Bvc2l0aW9uOmFic29sdXRlO2luc2V0OjA7ZGlzcGxheTpncmlkO3BsYWNlLWl0ZW1zOmNlbnRlcjt0ZXh0LWFsaWduOmNlbnRlcjtwb2ludGVyLWV2ZW50czpub25lfQouendjIGJ7ZGlzcGxheTpibG9jaztmb250OjQwMCAyLjVyZW0vMSB2YXIoLS1zZXJpZik7Zm9udC12YXJpYW50LW51bWVyaWM6dGFidWxhci1udW1zfQouendjIHNwYW57Zm9udC1zaXplOi44MTI1cmVtO2NvbG9yOnZhcigtLW11dGVkKX0KLnphY3Rze2Rpc3BsYXk6Z3JpZDtncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KDIsbWlubWF4KDAsMWZyKSk7Z2FwOjhweDttYXJnaW4tdG9wOjE0cHh9Ci56YWN0e21pbi1oZWlnaHQ6NThweDtwYWRkaW5nOjEwcHggMTJweDtib3JkZXItcmFkaXVzOjE0cHg7YmFja2dyb3VuZDp2YXIoLS1zdXJmYWNlKTt0ZXh0LWFsaWduOmxlZnQ7Zm9udC1zaXplOi44NzVyZW07bGluZS1oZWlnaHQ6MS4zO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7Z2FwOjEwcHg7dHJhbnNpdGlvbjpiYWNrZ3JvdW5kIC4ycyx0cmFuc2Zvcm0gLjE1cyB2YXIoLS1zcHJpbmcpfQouemFjdCBpe2ZsZXg6bm9uZTt3aWR0aDoyMnB4O2hlaWdodDoyMnB4O2JvcmRlci1yYWRpdXM6NTAlO2JveC1zaGFkb3c6aW5zZXQgMCAwIDAgMS41cHggdmFyKC0tb3JiaXQpO2Rpc3BsYXk6Z3JpZDtwbGFjZS1pdGVtczpjZW50ZXJ9Ci56YWN0IGkgc3Zne3dpZHRoOjEycHg7aGVpZ2h0OjEycHg7c3Ryb2tlOnZhcigtLWdvbGQtaW5rKTtzdHJva2Utd2lkdGg6MztmaWxsOm5vbmU7b3BhY2l0eTowfQouemFjdC5vbntiYWNrZ3JvdW5kOnZhcigtLWdvbGQtc29mdCl9Ci56YWN0Lm9uIGl7YmFja2dyb3VuZDp2YXIoLS1nb2xkKTtib3gtc2hhZG93Om5vbmV9Ci56YWN0Lm9uIGkgc3Zne29wYWNpdHk6MX0KLnphY3Q6YWN0aXZle3RyYW5zZm9ybTpzY2FsZSguOTUpfQouemRoe2Rpc3BsYXk6Z3JpZDtwbGFjZS1pdGVtczpjZW50ZXI7bWFyZ2luLXRvcDoxMnB4fQouemRoIGJ1dHRvbnt3aWR0aDoxODBweDtoZWlnaHQ6MTgwcHg7Ym9yZGVyLXJhZGl1czo1MCU7YmFja2dyb3VuZDp2YXIoLS1zdXJmYWNlKTtib3gtc2hhZG93Omluc2V0IDAgMCAwIDJweCB2YXIoLS1nb2xkKTtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2dhcDo0cHg7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjFzfQouemRoIGJ1dHRvbjphY3RpdmV7dHJhbnNmb3JtOnNjYWxlKC45NSl9Ci56ZGggLmFye2ZvbnQ6NDAwIDEuNnJlbS8xLjUgdmFyKC0tYXIpfQouemRoIGJ7Zm9udDo0MDAgMi4yNXJlbS8xIHZhcigtLXNlcmlmKTtjb2xvcjp2YXIoLS1nb2xkKX0KLnpyZWFzb25ze2xpc3Qtc3R5bGU6bm9uZTttYXJnaW46MTBweCAwIDA7cGFkZGluZzowO2Rpc3BsYXk6Z3JpZDtnYXA6NnB4fQouenJlYXNvbnMgbGl7cGFkZGluZzoxMHB4IDE0cHg7Ym9yZGVyLXJhZGl1czoxMnB4O2JhY2tncm91bmQ6dmFyKC0tZ29sZC1zb2Z0KTtmb250LXNpemU6LjkzNzVyZW19Ci56ZGFya3twb3NpdGlvbjpmaXhlZDtpbnNldDowO3otaW5kZXg6MzQ7YmFja2dyb3VuZDojMDMwODA2O2NvbG9yOiNDOUQ2RDA7b3ZlcmZsb3c6YXV0bztwYWRkaW5nOmNhbGModmFyKC0tc2F0KSArIDMwcHgpIDIycHggY2FsYyh2YXIoLS1zYWIpICsgMTIwcHgpO2FuaW1hdGlvbjp6ZmFkZSAuOXMgZWFzZSBib3RofQouemRhcmsgLmlue21heC13aWR0aDo1MjBweDttYXJnaW46MCBhdXRvfQpAa2V5ZnJhbWVzIHpmYWRle2Zyb217b3BhY2l0eTowfX0KLnpkYXJrIGgye2NvbG9yOiNFRUYzRUZ9Ci56ZGFyayAubnVtLWJpZ3tmb250OjQwMCA1cmVtLzEgdmFyKC0tc2VyaWYpO2NvbG9yOiM2QjdBNzQ7Zm9udC12YXJpYW50LW51bWVyaWM6dGFidWxhci1udW1zO3RleHQtYWxpZ246Y2VudGVyO21hcmdpbjoxMHB4IDAgMH0KLnpkYXJrIC5tdXRlZCwuemRhcmsgLnNtYWxsLm11dGVke2NvbG9yOiM3RThGODh9Ci56ZGFyayAuY2hpcHtiYWNrZ3JvdW5kOiMxMzIwMUI7Y29sb3I6I0M5RDZEMH0KLnpkYXJrIC5jaGlwW2FyaWEtcHJlc3NlZD0idHJ1ZSJde2JhY2tncm91bmQ6I0U5QzQ2QTtjb2xvcjojMUExNDA1fQouemRhcmsgdGV4dGFyZWF7YmFja2dyb3VuZDojMEMxNjEyO2NvbG9yOiNFRUYzRUZ9Ci56ZGFyayAuenF7bWFyZ2luLXRvcDoyMnB4O3BhZGRpbmc6MTRweCAxNnB4O2JvcmRlci1yYWRpdXM6MTZweDtiYWNrZ3JvdW5kOiMwQzE2MTI7Y29sb3I6I0M5RDZEMDtmb250LXNpemU6LjkzNzVyZW07bGluZS1oZWlnaHQ6MS41fQouemRhcmsgLmJ0bi5xdWlldHtiYWNrZ3JvdW5kOiMxMzIwMUI7Y29sb3I6I0VFRjNFRn0KLnpiaWd7ZGlzcGxheTpncmlkO3BsYWNlLWl0ZW1zOmNlbnRlcjttYXJnaW4tdG9wOjE4cHh9Ci56YmlnIGJ1dHRvbnt3aWR0aDoxNzBweDtoZWlnaHQ6MTcwcHg7Ym9yZGVyLXJhZGl1czo1MCU7YmFja2dyb3VuZDp2YXIoLS1zdXJmYWNlKTtib3gtc2hhZG93Omluc2V0IDAgMCAwIDJweCB2YXIoLS1vcmJpdCk7Zm9udDo0MDAgMy4yNXJlbS8xIHZhcigtLXNlcmlmKTtjb2xvcjp2YXIoLS1pbmspO3RyYW5zaXRpb246dHJhbnNmb3JtIC4xMnMgdmFyKC0tc3ByaW5nKX0KLnpiaWcgYnV0dG9uOmFjdGl2ZXt0cmFuc2Zvcm06c2NhbGUoLjkzKX0KLnpiYXJzPnN2Z3t3aWR0aDoxMDAlO2hlaWdodDphdXRvO2Rpc3BsYXk6YmxvY2s7b3ZlcmZsb3c6dmlzaWJsZX0KLnpydWxlcntkaXNwbGF5OmdyaWQ7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdCgxMSxtaW5tYXgoMCwxZnIpKTtnYXA6NHB4O21hcmdpbi10b3A6MTBweH0KLnpydWxlciBidXR0b257bWluLWhlaWdodDo0MHB4O2JvcmRlci1yYWRpdXM6MTBweDtiYWNrZ3JvdW5kOnZhcigtLXN1cmZhY2UpO2ZvbnQtd2VpZ2h0OjcwMDtmb250LXNpemU6Ljg3NXJlbTtjb2xvcjp2YXIoLS1pbmstMil9Ci56cnVsZXIgYnV0dG9uW2FyaWEtcHJlc3NlZD0idHJ1ZSJde2JhY2tncm91bmQ6dmFyKC0tZ29sZCk7Y29sb3I6dmFyKC0tZ29sZC1pbmspfQouenNldCBpbnB1dHt3aWR0aDoxMDAlfQpgOwogICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdCk7CiAgfQoKICAvKiAtLS0tLS0tLS0tIG91dGlscyAtLS0tLS0tLS0tICovCiAgY29uc3QgSCA9ICgpID0+IFouZC5oYWJpdHMuZmluZChoID0+IGguaWQgPT09IFouaGlkKSB8fCBaLmQuaGFiaXRzWzBdOwogIGNvbnN0IG5vdyA9ICgpID0+IERhdGUubm93KCk7CiAgY29uc3QgZGF5cyA9IGggPT4gTWF0aC5tYXgoMCwgKG5vdygpIC0gaC5zdGFydCkgLyBEQVkpOwogIGNvbnN0IHR3byA9IG4gPT4gU3RyaW5nKG4pLnBhZFN0YXJ0KDIsICcwJyk7CiAgZnVuY3Rpb24gZHVyKG1zKSB7IGNvbnN0IHMgPSBNYXRoLmZsb29yKG1zIC8gMTAwMCksIGQgPSBNYXRoLmZsb29yKHMgLyA4NjQwMCk7IHJldHVybiBgJHtkfSBqICR7dHdvKE1hdGguZmxvb3IocyAlIDg2NDAwIC8gMzYwMCkpfToke3R3byhNYXRoLmZsb29yKHMgJSAzNjAwIC8gNjApKX06JHt0d28ocyAlIDYwKX1gOyB9CiAgY29uc3QgbmV4dE1zID0gZCA9PiBNUy5maW5kKG0gPT4gbSA+IGQpIHx8IG51bGw7CiAgY29uc3QgcHJldk1zID0gZCA9PiBbMCwgLi4uTVNdLmZpbHRlcihtID0+IG0gPD0gZCkucG9wKCk7CiAgYXN5bmMgZnVuY3Rpb24gcGVyc2lzdCgpIHsgaWYgKCFaLmtleSkgcmV0dXJuOyBTLnpjID0gYXdhaXQgelNlYWwoWi5rZXksIFouc2FsdCwgWi5kKTsgc2F2ZSh0cnVlKTsgfQogIGNvbnN0IGljbyA9IChwLCBzeiA9IDIwKSA9PiBgPHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIke3N6fSIgaGVpZ2h0PSIke3N6fSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGFyaWEtaGlkZGVuPSJ0cnVlIj4ke3B9PC9zdmc+YDsKICBjb25zdCBMT0NLID0gaWNvKCc8cmVjdCB4PSI1IiB5PSIxMC41IiB3aWR0aD0iMTQiIGhlaWdodD0iMTAiIHJ4PSIyLjUiLz48cGF0aCBkPSJNOC41IDEwLjVWNy41YTMuNSAzLjUgMCAwIDEgNyAwdjMiLz4nKTsKICBjb25zdCBYID0gaWNvKCc8cGF0aCBkPSJNNiA2bDEyIDEyTTE4IDZMNiAxOCIvPicsIDE4KTsKICBmdW5jdGlvbiBuZXdIYWJpdChuYW1lLCBtb2RlLCBuaWMsIHN0YXJ0KSB7CiAgICByZXR1cm4geyBpZDogJ2gnICsgdWlkKCksIG5hbWUsIG1vZGUsIG5pYywgc3RhcnQ6IHN0YXJ0IHx8IG5vdygpLCBiZXN0OiAwLCByZWxhcHNlczogW10sIHVyZ2VzOiBbXSwgbG9nOiBbXSwgcmVhZHk6IFtdLCByZWFzb25zOiBbXSwgcGxhbnM6IChuaWMgPyBQTEFOU19OIDogUExBTlNfQikubWFwKHAgPT4gcC5zbGljZSgpKSwgYmFyOiB7fSwgbXM6IHt9LCBsYXN0Q2xlYW46ICcnLCBwcmljZTogJycsIHBlcjogJycgfTsKICB9CgogIC8qIC0tLS0tLS0tLS0gcsOpY29tcGVuc2VzIHByb3ByZXMgw6AgbCdlc3BhY2UgLS0tLS0tLS0tLSAqLwogIGZ1bmN0aW9uIGRhaWx5Q2hlY2soKSB7CiAgICBjb25zdCBrID0gdG9kYXlJU08oKTsgbGV0IGNoYW5nZWQgPSBmYWxzZTsKICAgIFouZC5oYWJpdHMuZmlsdGVyKGggPT4gaC5tb2RlID09PSAnc3RvcCcpLmZvckVhY2goaCA9PiB7CiAgICAgIGNvbnN0IGQgPSBkYXlzKGgpOwogICAgICBjb25zdCBmcmVzaCA9IE1TLmZpbHRlcihtID0+IGQgPj0gbSAmJiAhaC5tc1ttXSk7IGZyZXNoLmZvckVhY2gobSA9PiB7IGgubXNbbV0gPSAxOyB9KTsKICAgICAgY29uc3QgdG9wID0gZnJlc2hbZnJlc2gubGVuZ3RoIC0gMV0sIGNsZWFuID0gZCA+PSAxICYmIGgubGFzdENsZWFuICE9PSBrOwogICAgICBpZiAoY2xlYW4pIGgubGFzdENsZWFuID0gazsKICAgICAgaWYgKGZyZXNoLmxlbmd0aCB8fCBjbGVhbikgY2hhbmdlZCA9IHRydWU7CiAgICAgIGlmICh0b3ApIHNldFRpbWVvdXQoKCkgPT4geyBsYXN0UHQgPSB7IHg6IGlubmVyV2lkdGggLyAyLCB5OiBpbm5lckhlaWdodCAqIC4zNSB9OyByZXdhcmQodG9wID49IDMwID8gMzAgOiB0b3AgPj0gNyA/IDE1IDogOCwgeyBiaWc6IHRydWUsIG1zZzogW2BQYWxpZXIgJHt0b3B9IGpvdXIke3RvcCA+IDEgPyAncycgOiAnJ31gLCB0b3AgPj0gNDAgPyAnUXVhcmFudGUgam91cnMgOiBsZSB0ZW1wcyBxdVwnaWwgZmF1dCwgZGl0LW9uLCBwb3VyIHF1XCd1biDDqXRhdCBkZXZpZW5uZSB1bmUgbmF0dXJlLiBUdSB5IGVzLicgOiAnVHUgdmllbnMgZFwnYWxsdW1lciB1bmUgbm91dmVsbGUgw6l0b2lsZS4gUmVnYXJkZSBsZSBjaGVtaW4gcGFyY291cnUuJ10gfSk7IH0sIDcwMCk7CiAgICAgIGVsc2UgaWYgKGNsZWFuKSBzZXRUaW1lb3V0KCgpID0+IHsgbGFzdFB0ID0geyB4OiBpbm5lcldpZHRoIC8gMiwgeTogaW5uZXJIZWlnaHQgKiAuMzUgfTsgcmV3YXJkKDQsIHsgbXNnOiBbJ1VuIGpvdXIgZGUgcGx1cycsIGAke2VzYyhoLm5hbWUpfSA6ICR7TWF0aC5mbG9vcihkKX0gam91cnMgdGVudXMuIENoYXF1ZSBqb3VyIHJlbmZvcmNlIGxlIGNoZW1pbiBxdWUgdHUgY29uc3RydWlzLmBdIH0pOyB9LCA3MDApOwogICAgICBoLmJlc3QgPSBNYXRoLm1heChoLmJlc3QgfHwgMCwgbm93KCkgLSBoLnN0YXJ0KTsKICAgIH0pOwogICAgaWYgKGNoYW5nZWQpIHBlcnNpc3QoKTsKICB9CgogIC8qIC0tLS0tLS0tLS0gdnVlcyAtLS0tLS0tLS0tICovCiAgZnVuY3Rpb24gaGVhZCgpIHsKICAgIHJldHVybiBgPGhlYWRlciBjbGFzcz0idG9wIj48ZGl2PjxwIGNsYXNzPSJleWVicm93Ij5Fc3BhY2UgcHJpdsOpPC9wPjxoMT5KaWhhZCA8ZW0+YW4tbmFmczwvZW0+PC9oMT48cD5MZSBjb21iYXQgY29udHJlIHNvaS1tw6ptZS4gSWNpLCBwZXJzb25uZSBkJ2F1dHJlIG4nZW50cmUuPC9wPjwvZGl2PgogICAgICA8ZGl2IGNsYXNzPSJ0b3AtYWN0aW9ucyI+PGJ1dHRvbiBjbGFzcz0iaWNvbi1idG4iIGRhdGEtemxvY2sgYXJpYS1sYWJlbD0iVmVycm91aWxsZXIiPiR7TE9DS308L2J1dHRvbj48L2Rpdj48L2hlYWRlcj5gOwogIH0KICBmdW5jdGlvbiB0YWJzKCkgewogICAgaWYgKFouZC5oYWJpdHMubGVuZ3RoIDwgMikgcmV0dXJuICcnOwogICAgcmV0dXJuIGA8ZGl2IGNsYXNzPSJzZWciIHJvbGU9Imdyb3VwIiBzdHlsZT0ibWFyZ2luLXRvcDoyMHB4Ij4ke1ouZC5oYWJpdHMubWFwKGggPT4gYDxidXR0b24gZGF0YS16aD0iJHtoLmlkfSIgYXJpYS1wcmVzc2VkPSIke2guaWQgPT09IEgoKS5pZH0iPiR7ZXNjKGgubmFtZSB8fCAnU2FucyBub20nKX08L2J1dHRvbj5gKS5qb2luKCcnKX08L2Rpdj5gOwogIH0KICBmdW5jdGlvbiBoZXJvKGgpIHsKICAgIGNvbnN0IGQgPSBkYXlzKGgpLCBueCA9IG5leHRNcyhkKSwgcHYgPSBwcmV2TXMoZCksIHAgPSBueCA/IChkIC0gcHYpIC8gKG54IC0gcHYpIDogMSwgUiA9IDEwMDsKICAgIHJldHVybiBgPGRpdiBjbGFzcz0iemhlcm8iPjxzdmcgdmlld0JveD0iLTEzMCAtMTMwIDI2MCAyNjAiIGFyaWEtaGlkZGVuPSJ0cnVlIj4KICAgICAgPGNpcmNsZSByPSIke1J9IiBmaWxsPSJub25lIiBzdHJva2U9InZhcigtLXJhaXNlKSIgc3Ryb2tlLXdpZHRoPSIxNiIvPgogICAgICA8Y2lyY2xlIHI9IiR7Un0iIGZpbGw9Im5vbmUiIHN0cm9rZT0idmFyKC0tZ29sZCkiIHN0cm9rZS13aWR0aD0iMTYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwKSIgJHtyaW5nRGFzaChSLCBwKX0gc3R5bGU9ImZpbHRlcjpkcm9wLXNoYWRvdygwIDAgMTBweCB2YXIoLS1nbG93KSkiLz48L3N2Zz4KICAgICAgPGRpdiBjbGFzcz0iemhjIj48ZGl2PjxiIGNsYXNzPSJudW0iPiR7TWF0aC5mbG9vcihkKX08L2I+PHNwYW4+am91ciR7TWF0aC5mbG9vcihkKSA+IDEgPyAncycgOiAnJ30gdGVudSR7TWF0aC5mbG9vcihkKSA+IDEgPyAncycgOiAnJ308L3NwYW4+PHAgY2xhc3M9Inp0aWNrIiBpZD0ielRpY2siPiR7ZHVyKG5vdygpIC0gaC5zdGFydCkuc3BsaXQoJyAnKS5zbGljZSgyKS5qb2luKCcgJyl9PC9wPjxzcGFuPiR7bnggPyBgcHJvY2hhaW5lIMOpdG9pbGUgOiAke254fSBqYCA6ICdhdS1kZWzDoCBkZXMgw6l0b2lsZXMnfTwvc3Bhbj48L2Rpdj48L2Rpdj48L2Rpdj5gOwogIH0KICBmdW5jdGlvbiBzdGFycyhoKSB7CiAgICBjb25zdCBkID0gZGF5cyhoKSwgVyA9IDMzMCwgcHRzID0gTVMubWFwKChtLCBpKSA9PiB7IGNvbnN0IHggPSAxNCArIGkgKiAoVyAtIDI4KSAvIChNUy5sZW5ndGggLSAxKSwgeSA9IDQwIC0gTWF0aC5zaW4oaSAvIChNUy5sZW5ndGggLSAxKSAqIE1hdGguUEkpICogMjY7IHJldHVybiBbeCwgeSwgbV07IH0pOwogICAgY29uc3QgbnggPSBuZXh0TXMoZCk7CiAgICByZXR1cm4gYDxkaXYgY2xhc3M9InptcyI+PHN2ZyB2aWV3Qm94PSIwIDAgJHtXfSA3NCIgcm9sZT0iaW1nIiBhcmlhLWxhYmVsPSJQYWxpZXJzIj4KICAgICAgPHBvbHlsaW5lIHBvaW50cz0iJHtwdHMubWFwKHAgPT4gcC5zbGljZSgwLCAyKS5qb2luKCcsJykpLmpvaW4oJyAnKX0iIGZpbGw9Im5vbmUiIHN0cm9rZT0idmFyKC0tb3JiaXQpIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1kYXNoYXJyYXk9IjIgNCIvPgogICAgICAke3B0cy5tYXAoKFt4LCB5LCBtXSkgPT4geyBjb25zdCBvbiA9IGQgPj0gbSwgbnh0ID0gbSA9PT0gbng7IHJldHVybiBgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoJHt4LnRvRml4ZWQoMSl9ICR7eS50b0ZpeGVkKDEpfSkiPiR7b24gPyAnPGNpcmNsZSByPSIxMCIgZmlsbD0idmFyKC0tZ2xvdykiLz4nIDogJyd9PGNpcmNsZSByPSIke29uID8gNS41IDogNH0iIGZpbGw9IiR7b24gPyAndmFyKC0tZ29sZCknIDogJ3ZhcigtLXN1cmZhY2UpJ30iIHN0cm9rZT0iJHtvbiB8fCBueHQgPyAndmFyKC0tZ29sZCknIDogJ3ZhcigtLW9yYml0KSd9IiBzdHJva2Utd2lkdGg9IiR7bnh0ID8gMiA6IDEuMn0iPiR7bnh0ID8gJzxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iNDs2OzQiIGR1cj0iMnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+JyA6ICcnfTwvY2lyY2xlPjx0ZXh0IHk9IjIyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHlsZT0iZm9udC1zaXplOjkuNXB4O2ZvbnQtd2VpZ2h0OjcwMDtmaWxsOnZhcigtLSR7b24gPyAnZ29sZCcgOiAnbXV0ZWQnfSkiPiR7bX08L3RleHQ+PC9nPmA7IH0pLmpvaW4oJycpfQogICAgPC9zdmc+PC9kaXY+YDsKICB9CiAgZnVuY3Rpb24gZGlhbChoKSB7CiAgICBjb25zdCBSID0gNzgsIGV2ID0gaC5tb2RlID09PSAnd2F0Y2gnID8gaC5sb2cuc2xpY2UoLTIwMCkubWFwKHQgPT4gW3QsICdnb2xkJ10pIDogaC51cmdlcy5zbGljZSgtMTUwKS5tYXAodSA9PiBbdS50LCB1LndvbiA/ICdnb2xkJyA6ICdkYW5nZXInXSkuY29uY2F0KGgucmVsYXBzZXMuc2xpY2UoLTgwKS5tYXAociA9PiBbci50LCAnZGFuZ2VyJ10pKTsKICAgIGNvbnN0IGNudCA9IEFycmF5KDI0KS5maWxsKDApOyBldi5mb3JFYWNoKChbdF0pID0+IGNudFtuZXcgRGF0ZSh0KS5nZXRIb3VycygpXSsrKTsKICAgIGNvbnN0IHRvcCA9IGNudC5pbmRleE9mKE1hdGgubWF4KC4uLmNudCkpOwogICAgbGV0IHNlZWQgPSAzOyBjb25zdCBybmQgPSAoKSA9PiAoc2VlZCA9IChzZWVkICogOTMwMSArIDQ5Mjk3KSAlIDIzMzI4MCkgLyAyMzMyODA7CiAgICBjb25zdCBkb3RzID0gZXYubWFwKChbdCwgY10pID0+IHsgY29uc3QgZHQgPSBuZXcgRGF0ZSh0KSwgYSA9IChkdC5nZXRIb3VycygpICsgZHQuZ2V0TWludXRlcygpIC8gNjApICogMTUsIFt4LCB5XSA9IHBvbGFyKFIgLSAxNCArIHJuZCgpICogMjgsIGEpOyByZXR1cm4gYDxjaXJjbGUgY3g9IiR7eC50b0ZpeGVkKDEpfSIgY3k9IiR7eS50b0ZpeGVkKDEpfSIgcj0iMy4yIiBmaWxsPSJ2YXIoLS0ke2N9KSIgb3BhY2l0eT0iLjg1Ii8+YDsgfSkuam9pbignJyk7CiAgICBjb25zdCB0aWNrcyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDI0IH0sIChfLCBpKSA9PiB7IGNvbnN0IFt4MCwgeTBdID0gcG9sYXIoUiArIDIwLCBpICogMTUpLCBbeDEsIHkxXSA9IHBvbGFyKFIgKyAoaSAlIDYgPyAyNCA6IDI4KSwgaSAqIDE1KTsgcmV0dXJuIGA8bGluZSB4MT0iJHt4MC50b0ZpeGVkKDEpfSIgeTE9IiR7eTAudG9GaXhlZCgxKX0iIHgyPSIke3gxLnRvRml4ZWQoMSl9IiB5Mj0iJHt5MS50b0ZpeGVkKDEpfSIgc3Ryb2tlPSJ2YXIoLS1tdXRlZCkiIHN0cm9rZS13aWR0aD0iJHtpICUgNiA/IDEgOiAxLjZ9Ii8+YDsgfSkuam9pbignJyk7CiAgICBjb25zdCBsYmwgPSBbMCwgNiwgMTIsIDE4XS5tYXAoaGggPT4geyBjb25zdCBbeCwgeV0gPSBwb2xhcihSICsgNDAsIGhoICogMTUpOyByZXR1cm4gYDx0ZXh0IHg9IiR7eC50b0ZpeGVkKDEpfSIgeT0iJHsoeSArIDQpLnRvRml4ZWQoMSl9IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHlsZT0iZm9udC1zaXplOjEwcHg7Zm9udC13ZWlnaHQ6NzAwO2ZpbGw6dmFyKC0tbXV0ZWQpIj4ke2hofSBoPC90ZXh0PmA7IH0pLmpvaW4oJycpOwogICAgcmV0dXJuIGA8ZGl2IGNsYXNzPSJ6ZGlhbCI+PHN2ZyB2aWV3Qm94PSItMTMwIC0xMzAgMjYwIDI2MCIgcm9sZT0iaW1nIiBhcmlhLWxhYmVsPSJIZXVyZXMgZGVzIGVudmllcyI+CiAgICAgIDxjaXJjbGUgcj0iJHtSfSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ2YXIoLS1yYWlzZSkiIHN0cm9rZS13aWR0aD0iMzAiLz4ke3RpY2tzfSR7bGJsfSR7ZG90c30KICAgICAgPHRleHQgeT0iLTQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0eWxlPSJmb250OjQwMCAyNnB4IHZhcigtLXNlcmlmKTtmaWxsOnZhcigtLWluaykiPiR7ZXYubGVuZ3RoID8gYCR7dG9wfSBoYCA6ICfigJQnfTwvdGV4dD4KICAgICAgPHRleHQgeT0iMTQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0eWxlPSJmb250LXNpemU6OXB4O2ZvbnQtd2VpZ2h0OjcwMDtsZXR0ZXItc3BhY2luZzouMWVtO2ZpbGw6dmFyKC0tbXV0ZWQpIj4ke2V2Lmxlbmd0aCA/ICdIRVVSRSDDgCBSSVNRVUUnIDogJ1BBUyBFTkNPUkUgREUgRE9OTsOJRVMnfTwvdGV4dD48L3N2Zz48L2Rpdj5gOwogIH0KICBmdW5jdGlvbiB0cmlnZ2VycyhoKSB7CiAgICBjb25zdCBjID0ge307IGgudXJnZXMuY29uY2F0KGgucmVsYXBzZXMpLmZvckVhY2godSA9PiB7IGlmICh1LnRyaWcpIGNbdS50cmlnXSA9IChjW3UudHJpZ10gfHwgMCkgKyAxOyB9KTsKICAgIGNvbnN0IGFyciA9IFRSSUcubWFwKChbaywgbl0pID0+IFtuLCBjW2tdIHx8IDBdKS5maWx0ZXIoeCA9PiB4WzFdKS5zb3J0KChhLCBiKSA9PiBiWzFdIC0gYVsxXSk7CiAgICBpZiAoIWFyci5sZW5ndGgpIHJldHVybiAnJzsKICAgIGNvbnN0IG14ID0gYXJyWzBdWzFdOwogICAgcmV0dXJuIGA8cCBjbGFzcz0iZXllYnJvdyIgc3R5bGU9Im1hcmdpbi10b3A6MThweCI+RMOpY2xlbmNoZXVyczwvcD4ke2Fyci5tYXAoKFtuLCB2XSkgPT4gYDxkaXYgY2xhc3M9Inp0ciI+PHNwYW4+JHtufTwvc3Bhbj48ZGl2IGNsYXNzPSJiYXIiPjxpIHN0eWxlPSJ3aWR0aDoke3YgLyBteCAqIDEwMH0lIj48L2k+PC9kaXY+PGIgY2xhc3M9Im51bSI+JHt2fTwvYj48L2Rpdj5gKS5qb2luKCcnKX1gOwogIH0KICBmdW5jdGlvbiBwbGFuc0Jsb2NrKGgpIHsKICAgIHJldHVybiBgPHNlY3Rpb24+PGRpdiBjbGFzcz0icm93IGJldHdlZW4iIHN0eWxlPSJtYXJnaW4tYm90dG9tOjEycHgiPjxoMiBzdHlsZT0ibWFyZ2luOjAiPlNp4oCmIGFsb3Jz4oCmPC9oMj48YnV0dG9uIGNsYXNzPSJsaW5rLWJ0biIgZGF0YS16ZWRpdD0icGxhbnMiPk1vZGlmaWVyPC9idXR0b24+PC9kaXY+CiAgICAgIDxwIGNsYXNzPSJzbWFsbCBtdXRlZCIgc3R5bGU9Im1hcmdpbjotNHB4IDAgMTJweCI+RMOpY2lkw6kgw6AgZnJvaWQsIGFwcGxpcXXDqSDDoCBjaGF1ZC4gUHLDqXBhcmVyIHNhIHLDqXBvbnNlIMOgIGwnYXZhbmNlIGRvdWJsZSBsZXMgY2hhbmNlcyBkZSBzJ3kgdGVuaXIuPC9wPgogICAgICA8ZGl2IGNsYXNzPSJ6aWYiPiR7aC5wbGFucy5tYXAocCA9PiBgPGRpdj48c21hbGw+U2k8L3NtYWxsPiR7ZXNjKHBbMF0pfTxicj48c21hbGwgc3R5bGU9Im1hcmdpbi10b3A6NnB4Ij5BbG9yczwvc21hbGw+PGI+JHtlc2MocFsxXSl9PC9iPjwvZGl2PmApLmpvaW4oJycpIHx8ICc8cCBjbGFzcz0iZW1wdHkiPkF1Y3VuIHBsYW4uPC9wPid9PC9kaXY+PC9zZWN0aW9uPmA7CiAgfQogIGZ1bmN0aW9uIHJlYXNvbnNCbG9jayhoKSB7CiAgICByZXR1cm4gYDxzZWN0aW9uPjxkaXYgY2xhc3M9InJvdyBiZXR3ZWVuIiBzdHlsZT0ibWFyZ2luLWJvdHRvbToxMnB4Ij48aDIgc3R5bGU9Im1hcmdpbjowIj5NZXMgcmFpc29uczwvaDI+PGJ1dHRvbiBjbGFzcz0ibGluay1idG4iIGRhdGEtemVkaXQ9InJlYXNvbnMiPk1vZGlmaWVyPC9idXR0b24+PC9kaXY+CiAgICAgICR7aC5yZWFzb25zLmxlbmd0aCA/IGA8dWwgY2xhc3M9InpyZWFzb25zIj4ke2gucmVhc29ucy5tYXAociA9PiBgPGxpPiR7ZXNjKHIpfTwvbGk+YCkuam9pbignJyl9PC91bD5gIDogJzxwIGNsYXNzPSJzbWFsbCBtdXRlZCI+w4ljcmlzIHBvdXJxdW9pIHR1IGFycsOqdGVzLCBhdmVjIHRlcyBtb3RzLiBFbGxlcyBzXCdhZmZpY2hlcm9udCBhdSBtb21lbnQgb8O5IGxcJ2VudmllIG1vbnRlLjwvcD48YnV0dG9uIGNsYXNzPSJidG4gc20gZ2hvc3QiIGRhdGEtemVkaXQ9InJlYXNvbnMiIHN0eWxlPSJtYXJnaW4tdG9wOjEwcHgiPsOJY3JpcmUgbWVzIHJhaXNvbnM8L2J1dHRvbj4nfTwvc2VjdGlvbj5gOwogIH0KICBmdW5jdGlvbiBiYXJyaWVycyhoKSB7CiAgICBjb25zdCBsaXN0ID0gaC5uaWMgPyBCQVJfTiA6IEJBUl9CLCBuID0gbGlzdC5maWx0ZXIoYiA9PiBoLmJhcltiWzBdXSkubGVuZ3RoOwogICAgcmV0dXJuIGA8c2VjdGlvbj48ZGl2IGNsYXNzPSJyb3cgYmV0d2VlbiIgc3R5bGU9ImFsaWduLWl0ZW1zOmZsZXgtZW5kIj48aDIgc3R5bGU9Im1hcmdpbjowIj5CYXJyacOocmVzPC9oMj48cCBjbGFzcz0ic21hbGwgbXV0ZWQiIHN0eWxlPSJtYXJnaW46MCI+JHtufS8ke2xpc3QubGVuZ3RofTwvcD48L2Rpdj4KICAgICAgPHAgY2xhc3M9InNtYWxsIG11dGVkIiBzdHlsZT0ibWFyZ2luOjZweCAwIDRweCI+VGEgdm9sb250w6kgZXN0IHBsdXMgZmFpYmxlIGF1IG1hdXZhaXMgbW9tZW50LiBMZXMgYmFycmnDqHJlcyB0cmF2YWlsbGVudCDDoCBzYSBwbGFjZS48L3A+CiAgICAgIDxkaXYgY2xhc3M9ImNoZWNrcyI+JHtsaXN0Lm1hcChiID0+IGA8bGFiZWwgY2xhc3M9ImNoZWNrIj48aW5wdXQgdHlwZT0iY2hlY2tib3giIGRhdGEtemJhcj0iJHtiWzBdfSIgJHtoLmJhcltiWzBdXSA/ICdjaGVja2VkJyA6ICcnfT48c3BhbiBjbGFzcz0iYm94Ij4ke0lDT04udGlja308L3NwYW4+PHNwYW4gY2xhc3M9InR4dCI+JHtiWzFdfSR7YlsyXSA/IGA8YnI+PHNwYW4gY2xhc3M9InNtYWxsIG11dGVkIj4ke2JbMl19PC9zcGFuPmAgOiAnJ308L3NwYW4+PC9sYWJlbD5gKS5qb2luKCcnKX08L2Rpdj48L3NlY3Rpb24+YDsKICB9CiAgZnVuY3Rpb24gc3RhdHMoaCkgewogICAgY29uc3Qgd29uID0gaC51cmdlcy5maWx0ZXIodSA9PiB1LndvbikubGVuZ3RoLCB3ayA9IGgucmVsYXBzZXMuZmlsdGVyKHIgPT4gbm93KCkgLSByLnQgPCA3ICogREFZKS5sZW5ndGg7CiAgICBjb25zdCB0b3QgPSBoLnJlbGFwc2VzLmxlbmd0aDsKICAgIHJldHVybiBgPHNlY3Rpb24+PGgyPkNlIHF1ZSBkaXNlbnQgdGVzIGRvbm7DqWVzPC9oMj4KICAgICAgPGRpdiBjbGFzcz0iemtwaXMiPjxkaXY+PGIgY2xhc3M9Im51bSI+JHt3b259PC9iPjxzcGFuPmVudmllcyB2YWluY3Vlczwvc3Bhbj48L2Rpdj48ZGl2PjxiIGNsYXNzPSJudW0iPiR7TWF0aC5mbG9vcigoTWF0aC5tYXgoaC5iZXN0IHx8IDAsIG5vdygpIC0gaC5zdGFydCkpIC8gREFZKX08L2I+PHNwYW4+am91cnMsIHRvbiByZWNvcmQ8L3NwYW4+PC9kaXY+PGRpdj48YiBjbGFzcz0ibnVtIj4ke3RvdH08L2I+PHNwYW4+cmVjaHV0ZXMgbm90w6llczwvc3Bhbj48L2Rpdj48L2Rpdj4KICAgICAgJHtkaWFsKGgpfSR7dHJpZ2dlcnMoaCl9CiAgICAgICR7d2sgPj0gMyA/IGA8ZGl2IGNsYXNzPSJhbGVydCIgc3R5bGU9Im1hcmdpbi10b3A6MThweCI+JHtJQ09OLmluZm99PHNwYW4+JHt3a30gcmVjaHV0ZXMgZW4gNyBqb3Vycy4gQ2Ugbidlc3QgcGFzIHVuIG1hbnF1ZSBkZSB2b2xvbnTDqSA6IGMnZXN0IGxlIHNpZ25lIHF1J2lsIGZhdXQgcGx1cyBkZSBiYXJyacOocmVzLCBvdSBkZSBsJ2FpZGUuIEVuIHBhcmxlciDDoCB1biBtw6lkZWNpbiBvdSDDoCB1biBwc3ljaG9sb2d1ZSBuJ2EgcmllbiBkZSBob250ZXV4LCBjJ2VzdCB1biBtb3llbiBkZSBwbHVzIHBvdXIgZ2FnbmVyLjwvc3Bhbj48L2Rpdj5gIDogJyd9PC9zZWN0aW9uPmA7CiAgfQogIGZ1bmN0aW9uIHZTdG9wKGgpIHsKICAgIHJldHVybiBgJHtoZXJvKGgpfQogICAgICA8YnV0dG9uIGNsYXNzPSJ6c29zIiBkYXRhLXp1cmdlPiR7aWNvKCc8cGF0aCBkPSJNMTIgM2MyIDMgNSA1LjUgNSA5LjVhNSA1IDAgMCAxLTEwIDBjMC0yIDEtMy41IDItNC41IDAgMiAxIDMgMiAzIDAtMy0xLTUgMS04eiIvPicsIDIyKX0gSidhaSB1bmUgZW52aWU8L2J1dHRvbj4KICAgICAgPHAgY2xhc3M9ImhpbnQiIHN0eWxlPSJ0ZXh0LWFsaWduOmNlbnRlciI+VG91Y2hlLWxlIGTDqHMgcXVlIMOnYSBtb250ZS4gUGFzIGFwcsOocy48L3A+CiAgICAgIDxzZWN0aW9uPjxoMj5UZXMgw6l0b2lsZXM8L2gyPiR7c3RhcnMoaCl9PC9zZWN0aW9uPgogICAgICAke3JlYXNvbnNCbG9jayhoKX0ke3BsYW5zQmxvY2soaCl9JHtiYXJyaWVycyhoKX0ke3N0YXRzKGgpfQogICAgICAke2gubmljID8gYDxzZWN0aW9uPjxkaXYgY2xhc3M9InpjYXJkIj48cCBjbGFzcz0ic21hbGwiIHN0eWxlPSJtYXJnaW46MCI+VW5lIGVudmllIGRlIG5pY290aW5lIGR1cmUgZW4gZ8OpbsOpcmFsIDxiPjMgw6AgNSBtaW51dGVzPC9iPi4gTGVzIHN1YnN0aXR1dHMgKHBhdGNocywgZ29tbWVzKSBhaWRlbnQgdnJhaW1lbnQgOiB0b24gcGhhcm1hY2llbiBwZXV0IHRlIGNvbnNlaWxsZXIuIExlIDxiPjM5IDg5PC9iPiAoVGFiYWMgSW5mbyBTZXJ2aWNlKSB0J2FjY29tcGFnbmUgZ3JhdHVpdGVtZW50LjwvcD48L2Rpdj48L3NlY3Rpb24+YCA6ICcnfQogICAgICA8YnV0dG9uIGNsYXNzPSJidG4gYmxvY2sgcXVpZXQiIGRhdGEtenJlbCBzdHlsZT0ibWFyZ2luLXRvcDozNHB4Ij5KJ2FpIHJlY2h1dMOpPC9idXR0b24+CiAgICAgIDxwIGNsYXNzPSJoaW50IiBzdHlsZT0idGV4dC1hbGlnbjpjZW50ZXIiPkhvbm7DqnRldMOpIGQnYWJvcmQgOiB1bmUgc8OpcmllIGZhdXNzZSBuZSB0J2FwcHJlbmQgcmllbi48L3A+YDsKICB9CiAgZnVuY3Rpb24gdldhdGNoKGgpIHsKICAgIGNvbnN0IGsgPSB0b2RheUlTTygpLCB0b2RheSA9IGgubG9nLmZpbHRlcih0ID0+IGlzbyhuZXcgRGF0ZSh0KSkgPT09IGspLmxlbmd0aDsKICAgIGNvbnN0IFcgPSAzMjAsIEhoID0gMTIwLCBCID0gMjIsIGJ3ID0gMzAsIGdhcCA9IChXIC0gNyAqIGJ3KSAvIDY7IGNvbnN0IGNvdW50cyA9IFtdOwogICAgZm9yIChsZXQgaSA9IDY7IGkgPj0gMDsgaS0tKSB7IGNvbnN0IGRrID0gaXNvKGFkZERheXMobmV3IERhdGUoKSwgLWkpKTsgY291bnRzLnB1c2goW2FkZERheXMobmV3IERhdGUoKSwgLWkpLCBoLmxvZy5maWx0ZXIodCA9PiBpc28obmV3IERhdGUodCkpID09PSBkaykubGVuZ3RoXSk7IH0KICAgIGNvbnN0IG14ID0gTWF0aC5tYXgoMywgLi4uY291bnRzLm1hcChjID0+IGNbMV0pKTsKICAgIGNvbnN0IGJhcnMgPSBjb3VudHMubWFwKChbZCwgdl0sIGkpID0+IHsgY29uc3QgeCA9IGkgKiAoYncgKyBnYXApLCBoaCA9IHYgLyBteCAqIChIaCAtIEIgLSAxNiksIHkgPSBIaCAtIEIgLSBoaDsgcmV0dXJuIGAke3YgPyBgPHJlY3QgeD0iJHt4LnRvRml4ZWQoMSl9IiB5PSIke3kudG9GaXhlZCgxKX0iIHdpZHRoPSIke2J3fSIgaGVpZ2h0PSIke2hoLnRvRml4ZWQoMSl9IiByeD0iOCIgZmlsbD0idmFyKC0tZ29sZCkiIG9wYWNpdHk9IiR7aSA9PT0gNiA/IDEgOiAuNn0iLz48dGV4dCB4PSIkeyh4ICsgYncgLyAyKS50b0ZpeGVkKDEpfSIgeT0iJHsoeSAtIDUpLnRvRml4ZWQoMSl9IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHlsZT0iZm9udC1zaXplOjEwcHg7Zm9udC13ZWlnaHQ6NzAwO2ZpbGw6dmFyKC0taW5rLTIpIj4ke3Z9PC90ZXh0PmAgOiBgPGNpcmNsZSBjeD0iJHsoeCArIGJ3IC8gMikudG9GaXhlZCgxKX0iIGN5PSIke0hoIC0gQiAtIDV9IiByPSIzIiBmaWxsPSJ2YXIoLS1saW5lKSIvPmB9PHRleHQgeD0iJHsoeCArIGJ3IC8gMikudG9GaXhlZCgxKX0iIHk9IiR7SGggLSA2fSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3R5bGU9ImZvbnQtc2l6ZToxMHB4O2ZvbnQtd2VpZ2h0OjYwMDtmaWxsOnZhcigtLW11dGVkKSI+JHtpID09PSA2ID8gJ2F1ai4nIDogREFZX1NIT1JULmZvcm1hdChkKS5yZXBsYWNlKCcuJywgJycpfTwvdGV4dD5gOyB9KS5qb2luKCcnKTsKICAgIGNvbnN0IHByaWNlID0gbnVtdihoLnByaWNlKSwgcGVyID0gbnVtdihoLnBlciksIG1vbnRoID0gcHJpY2UgJiYgcGVyID8gcHJpY2UgKiAzMCAvIHBlciA6IDA7CiAgICBjb25zdCBsYXN0UiA9IGgucmVhZHlbaC5yZWFkeS5sZW5ndGggLSAxXTsKICAgIHJldHVybiBgPGRpdiBjbGFzcz0iemNhcmQiIHN0eWxlPSJtYXJnaW4tdG9wOjIwcHgiPjxwIGNsYXNzPSJzbWFsbCIgc3R5bGU9Im1hcmdpbjowIj5Nb2RlIDxiPm9ic2VydmF0aW9uPC9iPiA6IHR1IG5lIHQnaW1wb3NlcyByaWVuLiBUdSBub3Rlcywgc2ltcGxlbWVudC4gTGUgam91ciBvw7kgdHUgZMOpY2lkZXMgZCdhcnLDqnRlciwgdHUgY29ubmHDrnRyYXMgdGVzIGhldXJlcywgdGVzIGTDqWNsZW5jaGV1cnMgZXQgY2UgcXVlIMOnYSB0ZSBjb8O7dGUuPC9wPjwvZGl2PgogICAgICA8ZGl2IGNsYXNzPSJ6YmlnIj48YnV0dG9uIGRhdGEtemxvZyBhcmlhLWxhYmVsPSJOb3RlciB1bmUgcHJpc2UiPjxzcGFuIGNsYXNzPSJudW0iPiR7dG9kYXl9PC9zcGFuPjwvYnV0dG9uPjwvZGl2PgogICAgICA8cCBjbGFzcz0iaGludCIgc3R5bGU9InRleHQtYWxpZ246Y2VudGVyIj5Ub3VjaGUgbGUgY2VyY2xlIMOgIGNoYXF1ZSBwcmlzZS4gJHtoLmxvZy5sZW5ndGggPyAnPGJ1dHRvbiBjbGFzcz0ibGluay1idG4gc21hbGwiIGRhdGEtenVubG9nIHN0eWxlPSJtaW4td2lkdGg6MDtwYWRkaW5nOjAgNHB4Ij5Bbm51bGVyIGxhIGRlcm5pw6hyZTwvYnV0dG9uPicgOiAnJ308L3A+CiAgICAgIDxzZWN0aW9uPjxoMj43IGRlcm5pZXJzIGpvdXJzPC9oMj48ZGl2IGNsYXNzPSJ6YmFycyI+PHN2ZyB2aWV3Qm94PSIwIDAgJHtXfSAke0hofSIgYXJpYS1oaWRkZW49InRydWUiPiR7YmFyc308L3N2Zz48L2Rpdj48L3NlY3Rpb24+CiAgICAgIDxzZWN0aW9uPjxoMj5DZSBxdWUgw6dhIGNvw7t0ZTwvaDI+CiAgICAgICAgPGRpdiBjbGFzcz0iZ3JvdXAiPjxkaXYgY2xhc3M9ImNlbGwiPjxsYWJlbCBmb3I9InpwciI+UHJpeCBkJ3VuZSB1bml0w6k8L2xhYmVsPjxpbnB1dCBpZD0ienByIiBjbGFzcz0iciIgaW5wdXRtb2RlPSJkZWNpbWFsIiBkYXRhLXpzZXQ9InByaWNlIiB2YWx1ZT0iJHtlc2MoaC5wcmljZSl9IiBwbGFjZWhvbGRlcj0iMCI+PHNwYW4gY2xhc3M9InVuaXQiPuKCrDwvc3Bhbj48L2Rpdj4KICAgICAgICA8ZGl2IGNsYXNzPSJjZWxsIj48bGFiZWwgZm9yPSJ6cGUiPkVsbGUgbWUgZHVyZTwvbGFiZWw+PGlucHV0IGlkPSJ6cGUiIGNsYXNzPSJyIiBpbnB1dG1vZGU9ImRlY2ltYWwiIGRhdGEtenNldD0icGVyIiB2YWx1ZT0iJHtlc2MoaC5wZXIpfSIgcGxhY2Vob2xkZXI9IjAiPjxzcGFuIGNsYXNzPSJ1bml0Ij5qb3Vyczwvc3Bhbj48L2Rpdj48L2Rpdj4KICAgICAgICAke21vbnRoID8gYDxkaXYgY2xhc3M9InprcGlzIj48ZGl2PjxiIGNsYXNzPSJudW0iPiR7TWF0aC5yb3VuZChtb250aCl9IOKCrDwvYj48c3Bhbj5wYXIgbW9pczwvc3Bhbj48L2Rpdj48ZGl2PjxiIGNsYXNzPSJudW0iPiR7TWF0aC5yb3VuZChtb250aCAqIDEyKX0g4oKsPC9iPjxzcGFuPnBhciBhbjwvc3Bhbj48L2Rpdj48ZGl2PjxiIGNsYXNzPSJudW0iPiR7TWF0aC5yb3VuZChtb250aCAqIDEyIC8gKG51bXYoUy5tb25leS5zYWZldHlHb2FsKSB8fCA0MDAwKSAqIDEwMCl9ICU8L2I+PHNwYW4+ZGUgdG9uIMOpcGFyZ25lIGRlIHPDqWN1cml0w6ksIGNoYXF1ZSBhbm7DqWU8L3NwYW4+PC9kaXY+PC9kaXY+YCA6ICcnfQogICAgICA8L3NlY3Rpb24+CiAgICAgIDxzZWN0aW9uPjxoMj5Fcy10dSBwcsOqdCA/PC9oMj48cCBjbGFzcz0ic21hbGwgbXV0ZWQiIHN0eWxlPSJtYXJnaW46LThweCAwIDAiPlN1ciAxMCwgw6AgcXVlbCBwb2ludCB0ZSBzZW5zLXR1IHByw6p0IMOgIGFycsOqdGVyID8gUsOpcG9uZHMgdW5lIGZvaXMgcGFyIHNlbWFpbmUsIHNhbnMgdGUganVnZXIuPC9wPgogICAgICAgIDxkaXYgY2xhc3M9InpydWxlciI+JHtBcnJheS5mcm9tKHsgbGVuZ3RoOiAxMSB9LCAoXywgaSkgPT4gYDxidXR0b24gZGF0YS16cmVhZHk9IiR7aX0iIGFyaWEtcHJlc3NlZD0iJHtsYXN0UiAmJiBsYXN0Ui52ID09PSBpICYmIGxhc3RSLmQgPT09IHRvZGF5SVNPKCl9Ij4ke2l9PC9idXR0b24+YCkuam9pbignJyl9PC9kaXY+CiAgICAgICAgJHtsYXN0UiA/IGA8cCBjbGFzcz0ic21hbGwiIHN0eWxlPSJtYXJnaW4tdG9wOjEycHgiPkRlcm5pw6hyZSByw6lwb25zZSA6IDxiPiR7bGFzdFIudn0vMTA8L2I+JHtsYXN0Ui52ID4gMCA/IGAuIFBvdXJxdW9pICR7bGFzdFIudn0gZXQgcGFzICR7TWF0aC5tYXgoMCwgbGFzdFIudiAtIDIpfSA/IENlIHF1aSB0ZSBmYWl0IGRpcmUgw6dhLCBjJ2VzdCBkw6lqw6AgdW5lIHJhaXNvbiBkJ2FycsOqdGVyLmAgOiAnJ308L3A+YCA6ICcnfQogICAgICAgICR7aC5yZWFkeS5sZW5ndGggPiAxID8gYDxwIGNsYXNzPSJzbWFsbCBtdXRlZCIgc3R5bGU9Im1hcmdpbi10b3A6NHB4Ij7DiXZvbHV0aW9uIDogJHtoLnJlYWR5LnNsaWNlKC02KS5tYXAociA9PiByLnYpLmpvaW4oJyDihpIgJyl9PC9wPmAgOiAnJ30KICAgICAgPC9zZWN0aW9uPgogICAgICAke2RpYWwoaCkucmVwbGFjZSgnSEVVUkUgw4AgUklTUVVFJywgJ0hFVVJFIExBIFBMVVMgRlLDiVFVRU5URScpfQogICAgICA8YnV0dG9uIGNsYXNzPSJidG4gYmxvY2siIGRhdGEtenJlYWR5LWdvIHN0eWxlPSJtYXJnaW4tdG9wOjMwcHgiPkplIHN1aXMgcHLDqnQgw6AgYXJyw6p0ZXI8L2J1dHRvbj4KICAgICAgPHAgY2xhc3M9ImhpbnQiIHN0eWxlPSJ0ZXh0LWFsaWduOmNlbnRlciI+TGUgam91ciBvw7kgdHUgdG91Y2hlcyBjZSBib3V0b24sIHRhIHPDqXJpZSBkw6ltYXJyZSwgYXZlYyBsYSB2YWd1ZSwgbGVzIHBsYW5zIGV0IGxlcyBiYXJyacOocmVzLjwvcD5gOwogIH0KICBmdW5jdGlvbiB2VXJnZShoKSB7CiAgICBjb25zdCB1ID0gWi51cmdlLCB0b3RhbCA9IHUubGVuICogNjAwMDAsIGxlZnQgPSBNYXRoLm1heCgwLCB0b3RhbCAtIChub3coKSAtIHUudDApKSwgUiA9IDEwMDsKICAgIGNvbnN0IGFjdHMgPSBoLm5pYyA/IEFDVF9OIDogQUNUX0I7CiAgICByZXR1cm4gYDxkaXYgY2xhc3M9Inp1cmdlIiBpZD0ielVyZ2UiPjxkaXYgY2xhc3M9ImluIj4KICAgICAgPHAgY2xhc3M9ImV5ZWJyb3ciPkVuIGpldSBzaSB0dSBjw6hkZXM8L3A+CiAgICAgIDxwIGNsYXNzPSJ6c3Rha2UiIGlkPSJ6U3Rha2UiPiR7aC5tb2RlID09PSAnc3RvcCcgPyBkdXIobm93KCkgLSBoLnN0YXJ0KSA6ICcnfTwvcD4KICAgICAgPHAgY2xhc3M9InNtYWxsIG11dGVkIiBzdHlsZT0ibWFyZ2luOjRweCAwIDAiPisgdGEgbHVtacOocmUgZHUgam91ciAo4pymICR7bm91ckRheSgpfSkgZXQgJHtPYmplY3Qua2V5cyhoLm1zKS5sZW5ndGh9IMOpdG9pbGUke09iamVjdC5rZXlzKGgubXMpLmxlbmd0aCA+IDEgPyAncycgOiAnJ30gYWxsdW3DqWUke09iamVjdC5rZXlzKGgubXMpLmxlbmd0aCA+IDEgPyAncycgOiAnJ30uPC9wPgogICAgICA8ZGl2IGNsYXNzPSJ6d2F2ZSI+PHN2ZyB2aWV3Qm94PSItMTMwIC0xMzAgMjYwIDI2MCIgYXJpYS1oaWRkZW49InRydWUiPjxjaXJjbGUgcj0iJHtSfSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ2YXIoLS1yYWlzZSkiIHN0cm9rZS13aWR0aD0iMTAiLz48Y2lyY2xlIGlkPSJ6V2F2ZUMiIHI9IiR7Un0iIGZpbGw9Im5vbmUiIHN0cm9rZT0idmFyKC0tZ29sZCkiIHN0cm9rZS13aWR0aD0iMTAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwKSIgJHtyaW5nRGFzaChSLCBsZWZ0IC8gdG90YWwpfS8+PC9zdmc+CiAgICAgICAgPGRpdiBjbGFzcz0iemJyZWF0aCI+PC9kaXY+PGRpdiBjbGFzcz0iendjIj48ZGl2PjxiIGlkPSJ6TGVmdCI+JHtNYXRoLmZsb29yKGxlZnQgLyA2MDAwMCl9OiR7dHdvKE1hdGguZmxvb3IobGVmdCAlIDYwMDAwIC8gMTAwMCkpfTwvYj48c3BhbiBpZD0iekJyIj5JbnNwaXJl4oCmPC9zcGFuPjwvZGl2PjwvZGl2PjwvZGl2PgogICAgICA8cCBjbGFzcz0ic21hbGwiIHN0eWxlPSJ0ZXh0LWFsaWduOmNlbnRlcjttYXJnaW46MCI+VW5lIGVudmllIG1vbnRlLCBjdWxtaW5lLCBwdWlzIHJlZGVzY2VuZC4gVHUgbidhcyBwYXMgw6AgbGEgY29tYmF0dHJlIDogc3VyZmUtbGEgJHt1Lmxlbn0gbWludXRlcywgZW4gcmVzcGlyYW50IGF2ZWMgbGUgY2VyY2xlLjwvcD4KICAgICAgJHt1LnRyaWcgPyAnJyA6IGA8cCBjbGFzcz0iZXllYnJvdyIgc3R5bGU9Im1hcmdpbi10b3A6MjJweCI+UXUnZXN0LWNlIHF1aSB0ZSBwb3Vzc2UgPzwvcD48ZGl2IGNsYXNzPSJjaGlwcyI+JHtUUklHLm1hcCgoW2ssIG5dKSA9PiBgPGJ1dHRvbiBjbGFzcz0iY2hpcCIgZGF0YS16dHJpZz0iJHtrfSI+JHtufTwvYnV0dG9uPmApLmpvaW4oJycpfTwvZGl2PmB9CiAgICAgIDxwIGNsYXNzPSJleWVicm93IiBzdHlsZT0ibWFyZ2luLXRvcDoyMnB4Ij5GYWlzIGF1IG1vaW5zIHVuZSBjaG9zZSwgbWFpbnRlbmFudDwvcD4KICAgICAgPGRpdiBjbGFzcz0iemFjdHMiPiR7YWN0cy5tYXAoKFtrLCBuXSkgPT4gYDxidXR0b24gY2xhc3M9InphY3QgJHt1LmRvbmVba10gPyAnb24nIDogJyd9IiBkYXRhLXphY3Q9IiR7a30iPjxpPiR7SUNPTi50aWNrfTwvaT48c3Bhbj4ke259PC9zcGFuPjwvYnV0dG9uPmApLmpvaW4oJycpfTwvZGl2PgogICAgICAke1ouZGggPyBkaGlrckJveCgpIDogJyd9CiAgICAgICR7aC5yZWFzb25zLmxlbmd0aCA/IGA8cCBjbGFzcz0iZXllYnJvdyIgc3R5bGU9Im1hcmdpbi10b3A6MjJweCI+VGVzIHJhaXNvbnM8L3A+PHVsIGNsYXNzPSJ6cmVhc29ucyI+JHtoLnJlYXNvbnMubWFwKHIgPT4gYDxsaT4ke2VzYyhyKX08L2xpPmApLmpvaW4oJycpfTwvdWw+YCA6ICcnfQogICAgICAke2gucGxhbnMubGVuZ3RoID8gYDxwIGNsYXNzPSJleWVicm93IiBzdHlsZT0ibWFyZ2luLXRvcDoyMnB4Ij5Ub24gcGxhbjwvcD48ZGl2IGNsYXNzPSJ6aWYiPiR7aC5wbGFucy5maWx0ZXIocCA9PiAhdS50cmlnIHx8IHRydWUpLnNsaWNlKDAsIDMpLm1hcChwID0+IGA8ZGl2PjxzbWFsbD5TaTwvc21hbGw+JHtlc2MocFswXSl9PGJyPjxzbWFsbCBzdHlsZT0ibWFyZ2luLXRvcDo2cHgiPkFsb3JzPC9zbWFsbD48Yj4ke2VzYyhwWzFdKX08L2I+PC9kaXY+YCkuam9pbignJyl9PC9kaXY+YCA6ICcnfQogICAgICA8YnV0dG9uIGNsYXNzPSJidG4gYmxvY2siIGRhdGEtendvbiBzdHlsZT0ibWFyZ2luLXRvcDoyNnB4Ij5MJ2VudmllIGVzdCBwYXNzw6llPC9idXR0b24+CiAgICAgIDxidXR0b24gY2xhc3M9ImJ0biBibG9jayBxdWlldCIgZGF0YS16Z2F2ZSBzdHlsZT0ibWFyZ2luLXRvcDoxMHB4Ij5KJ2FpIGPDqWTDqTwvYnV0dG9uPgogICAgPC9kaXY+PC9kaXY+YDsKICB9CiAgZnVuY3Rpb24gZGhpa3JCb3goKSB7CiAgICBjb25zdCBbaSwgbl0gPSBaLmRoLCB3ID0gREhJS1JbaV07CiAgICByZXR1cm4gYDxkaXYgY2xhc3M9InpkaCI+PGJ1dHRvbiBkYXRhLXpkaCBhcmlhLWxhYmVsPSIke3dbMV19LCAke259IHN1ciAzMyI+PHNwYW4gY2xhc3M9ImFyIiBsYW5nPSJhciIgZGlyPSJydGwiPiR7d1swXX08L3NwYW4+PHNwYW4gY2xhc3M9InNtYWxsIG11dGVkIj4ke3dbMV19PC9zcGFuPjxiIGNsYXNzPSJudW0iPiR7bn08c3BhbiBzdHlsZT0iZm9udC1zaXplOjFyZW07Y29sb3I6dmFyKC0tbXV0ZWQpIj4vMzM8L3NwYW4+PC9iPjwvYnV0dG9uPjwvZGl2PmA7CiAgfQogIGZ1bmN0aW9uIHZSZWxhcHNlKGgpIHsKICAgIGNvbnN0IHIgPSBaLnJlbCwgZCA9IE1hdGguZmxvb3IoZGF5cyhoKSk7CiAgICBjb25zdCBsaXN0ID0gaC5uaWMgPyBCQVJfTiA6IEJBUl9CLCBvZmYgPSBsaXN0LmZpbHRlcihiID0+ICFoLmJhcltiWzBdXSk7CiAgICByZXR1cm4gYDxkaXYgY2xhc3M9InpkYXJrIiBpZD0iekRhcmsiPjxkaXYgY2xhc3M9ImluIj4KICAgICAgPHAgY2xhc3M9ImV5ZWJyb3ciIHN0eWxlPSJjb2xvcjojN0U4Rjg4Ij5Tw6lyaWUgdGVybWluw6llPC9wPgogICAgICA8cCBjbGFzcz0ibnVtLWJpZyIgaWQ9InpEb3duIj4ke2R9PC9wPgogICAgICA8cCBzdHlsZT0idGV4dC1hbGlnbjpjZW50ZXI7bWFyZ2luOjZweCAwIDA7Y29sb3I6IzdFOEY4OCI+am91ciR7ZCA+IDEgPyAncycgOiAnJ30uIEMnw6l0YWl0IHRvbiBjaGVtaW4uPC9wPgogICAgICA8aDIgc3R5bGU9Im1hcmdpbi10b3A6MzBweCI+VGEgbHVtacOocmUgYmFpc3NlLiBUYSB2YWxldXIsIG5vbi48L2gyPgogICAgICA8cCBjbGFzcz0ic21hbGwgbXV0ZWQiPuKIkjE1IOKcpiBhdWpvdXJkJ2h1aS4gQ2UgcXVpIGNvbXB0ZSBtYWludGVuYW50LCBjZSBzb250IGxlcyAxMCBwcm9jaGFpbmVzIG1pbnV0ZXMgOiBjJ2VzdCBzb3V2ZW50IGzDoCBxdSd1bmUgcmVjaHV0ZSBlbiBlbnRyYcOubmUgdW5lIGRldXhpw6htZS48L3A+CiAgICAgIDxkaXYgY2xhc3M9InpxIj7CqyBUb3VzIGxlcyBmaWxzIGQnQWRhbSBjb21tZXR0ZW50IGRlcyBmYXV0ZXMsIGV0IGxlcyBtZWlsbGV1cnMgZGVzIGZhdXRpZnMgc29udCBjZXV4IHF1aSBzZSByZXBlbnRlbnQuIMK7PGJyPjxzcGFuIGNsYXNzPSJzbWFsbCBtdXRlZCI+VGlybWlkaGk8L3NwYW4+PC9kaXY+CiAgICAgIDxwIGNsYXNzPSJleWVicm93IiBzdHlsZT0ibWFyZ2luLXRvcDoyNHB4O2NvbG9yOiM3RThGODgiPkMnw6l0YWl0IHF1YW5kID88L3A+CiAgICAgIDxkaXYgY2xhc3M9ImNoaXBzIj4ke1tbJzAnLCAnw4AgbFwnaW5zdGFudCddLCBbJzMnLCAnUGx1cyB0w7R0IGF1am91cmRcJ2h1aSddLCBbJzEyJywgJ0hpZXIgc29pciddXS5tYXAoKFt2LCBuXSkgPT4gYDxidXR0b24gY2xhc3M9ImNoaXAiIGRhdGEtendoZW49IiR7dn0iIGFyaWEtcHJlc3NlZD0iJHtyLndoZW4gPT09IHZ9Ij4ke259PC9idXR0b24+YCkuam9pbignJyl9PC9kaXY+CiAgICAgIDxwIGNsYXNzPSJleWVicm93IiBzdHlsZT0ibWFyZ2luLXRvcDoyMHB4O2NvbG9yOiM3RThGODgiPlF1J2VzdC1jZSBxdWkgbCdhIGTDqWNsZW5jaMOpID88L3A+CiAgICAgIDxkaXYgY2xhc3M9ImNoaXBzIj4ke1RSSUcubWFwKChbaywgbl0pID0+IGA8YnV0dG9uIGNsYXNzPSJjaGlwIiBkYXRhLXpydHJpZz0iJHtrfSIgYXJpYS1wcmVzc2VkPSIke3IudHJpZyA9PT0ga30iPiR7bn08L2J1dHRvbj5gKS5qb2luKCcnKX08L2Rpdj4KICAgICAgJHtvZmYubGVuZ3RoID8gYDxwIGNsYXNzPSJleWVicm93IiBzdHlsZT0ibWFyZ2luLXRvcDoyMHB4O2NvbG9yOiM3RThGODgiPlVuZSBiYXJyacOocmUgw6AgcG9zZXIgYXVqb3VyZCdodWk8L3A+PGRpdiBjbGFzcz0iY2hpcHMiPiR7b2ZmLm1hcChiID0+IGA8YnV0dG9uIGNsYXNzPSJjaGlwIiBkYXRhLXpyYmFyPSIke2JbMF19IiBhcmlhLXByZXNzZWQ9IiR7ISFyLmJhcnNbYlswXV19Ij4ke2JbMV19PC9idXR0b24+YCkuam9pbignJyl9PC9kaXY+YCA6ICcnfQogICAgICA8cCBjbGFzcz0iZXllYnJvdyIgc3R5bGU9Im1hcmdpbi10b3A6MjBweDtjb2xvcjojN0U4Rjg4Ij5DZSBxdWUgdHUgcmV0aWVucyAoZmFjdWx0YXRpZik8L3A+CiAgICAgIDx0ZXh0YXJlYSBpZD0iek5vdGUiIHBsYWNlaG9sZGVyPSJDZSBxdWkgcydlc3QgcGFzc8OpIGp1c3RlIGF2YW504oCmIiBzdHlsZT0ibWluLWhlaWdodDo4MHB4O21hcmdpbi10b3A6OHB4Ij48L3RleHRhcmVhPgogICAgICA8ZGl2IGNsYXNzPSJ6cSI+U2kgdHUgbGUgc291aGFpdGVzIDogZmFpcyBsZSBnaHVzbCwgcHJpZSBkZXV4IHJhaydhdHMgZGUgcmVwZW50aXIsIHB1aXMgcmVwcmVuZHMuIExhIHBvcnRlIG5lIHNlIGZlcm1lIHBhcy48L2Rpdj4KICAgICAgPGJ1dHRvbiBjbGFzcz0iYnRuIGJsb2NrIiBkYXRhLXpyZXN0YXJ0IHN0eWxlPSJtYXJnaW4tdG9wOjIycHgiPkplIHJlcGFycyBtYWludGVuYW50PC9idXR0b24+CiAgICAgIDxidXR0b24gY2xhc3M9ImJ0biBibG9jayBxdWlldCIgZGF0YS16cmVseCBzdHlsZT0ibWFyZ2luLXRvcDoxMHB4Ij5Bbm51bGVyLCBqZSBuJ2FpIHBhcyByZWNodXTDqTwvYnV0dG9uPgogICAgPC9kaXY+PC9kaXY+YDsKICB9CiAgZnVuY3Rpb24gdlNldHVwKCkgewogICAgY29uc3QgZXhpc3RzID0gISEoUy56YyAmJiBTLnpjLmMpOwogICAgcmV0dXJuIGA8aGVhZGVyIGNsYXNzPSJ0b3AiPjxkaXY+PHAgY2xhc3M9ImV5ZWJyb3ciPkVzcGFjZSBwcml2w6k8L3A+PGgxPkNyw6llciB0b24gPGVtPmVzcGFjZTwvZW0+PC9oMT48cD5JbnZpc2libGUgZGFucyBsJ2FwcC4gQ2hpZmZyw6kgYXZlYyB0b24gY29kZSA6IHNhbnMgbHVpLCBwZXJzb25uZSBuZSBwZXV0IGxlIGxpcmUuPC9wPjwvZGl2PjwvaGVhZGVyPgogICAgICAke2V4aXN0cyA/IGA8ZGl2IGNsYXNzPSJhbGVydCBkYW5nZXIiPiR7SUNPTi53YXJufTxzcGFuPlVuIGVzcGFjZSBleGlzdGUgZMOpasOgLiBFbiBjcsOpZXIgdW4gbm91dmVhdSBlZmZhY2VyYSBsJ2FuY2llbiBwb3VyIHRvdWpvdXJzLjwvc3Bhbj48L2Rpdj5gIDogJyd9CiAgICAgIDxzZWN0aW9uIHN0eWxlPSJtYXJnaW4tdG9wOjI2cHgiIGNsYXNzPSJ6c2V0Ij48aDI+VG9uIGNvZGU8L2gyPgogICAgICAgIDxkaXYgY2xhc3M9Imdyb3VwIj48ZGl2IGNsYXNzPSJjZWxsIj48bGFiZWwgZm9yPSJ6YzEiPkNvZGU8L2xhYmVsPjxpbnB1dCBpZD0iemMxIiB0eXBlPSJwYXNzd29yZCIgY2xhc3M9InIiIHN0eWxlPSJ3aWR0aDo5ZW07bWF4LXdpZHRoOjYwJSIgYXV0b2NvbXBsZXRlPSJvZmYiIGF1dG9jYXBpdGFsaXplPSJvZmYiPjwvZGl2PgogICAgICAgIDxkaXYgY2xhc3M9ImNlbGwiPjxsYWJlbCBmb3I9InpjMiI+Q29uZmlybWVyPC9sYWJlbD48aW5wdXQgaWQ9InpjMiIgdHlwZT0icGFzc3dvcmQiIGNsYXNzPSJyIiBzdHlsZT0id2lkdGg6OWVtO21heC13aWR0aDo2MCUiIGF1dG9jb21wbGV0ZT0ib2ZmIiBhdXRvY2FwaXRhbGl6ZT0ib2ZmIj48L2Rpdj48L2Rpdj4KICAgICAgICA8cCBjbGFzcz0iaGludCI+NiBjYXJhY3TDqHJlcyBtaW5pbXVtLCBzYW5zIGVzcGFjZS4gUG91ciBvdXZyaXIgbCdlc3BhY2UgOiBvdXZyZSBJZMOpZXMgKGwnYW1wb3VsZSksIHRhcGUgdG9uIGNvZGUsIHB1aXMgQWpvdXRlci4gU2kgdHUgbCdvdWJsaWVzLCBwZXJzb25uZSBuZSBwb3VycmEgcm91dnJpciBjZXQgZXNwYWNlLCBwYXMgbcOqbWUgdG9pLjwvcD48L3NlY3Rpb24+CiAgICAgIDxzZWN0aW9uPjxoMj5DZSBxdWUgdHUgYXJyw6p0ZXMgbWFpbnRlbmFudDwvaDI+CiAgICAgICAgPGRpdiBjbGFzcz0iZ3JvdXAiPjxkaXYgY2xhc3M9ImNlbGwiPjxsYWJlbCBmb3I9InpuMSI+Tm9tPC9sYWJlbD48aW5wdXQgaWQ9InpuMSIgY2xhc3M9InIiIHN0eWxlPSJ3aWR0aDoxMGVtO21heC13aWR0aDo2MCUiIHBsYWNlaG9sZGVyPSJWaXNpYmxlIGljaSBzZXVsZW1lbnQiPjwvZGl2PgogICAgICAgIDxkaXYgY2xhc3M9ImNlbGwiPjxsYWJlbCBmb3I9InpkMSI+RGVybmnDqHJlIGZvaXM8L2xhYmVsPjxpbnB1dCBpZD0iemQxIiB0eXBlPSJkYXRldGltZS1sb2NhbCIgdmFsdWU9IiR7bmV3IERhdGUobm93KCkgLSBuZXcgRGF0ZSgpLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxNil9IiBzdHlsZT0ibWF4LXdpZHRoOjYyJTtib3JkZXI6MDtiYWNrZ3JvdW5kOnZhcigtLXJhaXNlKTtib3JkZXItcmFkaXVzOjEwcHg7Y29sb3I6dmFyKC0taW5rKTttaW4taGVpZ2h0OjQwcHg7cGFkZGluZzowIDhweDtmb250OmluaGVyaXQ7Zm9udC1zaXplOi44NzVyZW0iPjwvZGl2PjwvZGl2Pjwvc2VjdGlvbj4KICAgICAgPHNlY3Rpb24+PGgyPkNlIHF1ZSB0dSBvYnNlcnZlcyBkJ2Fib3JkPC9oMj4KICAgICAgICA8ZGl2IGNsYXNzPSJncm91cCI+PGRpdiBjbGFzcz0iY2VsbCI+PGxhYmVsIGZvcj0iem4yIj5Ob208L2xhYmVsPjxpbnB1dCBpZD0iem4yIiBjbGFzcz0iciIgc3R5bGU9IndpZHRoOjEwZW07bWF4LXdpZHRoOjYwJSIgcGxhY2Vob2xkZXI9IkxhaXNzZSB2aWRlIHNpIHJpZW4iPjwvZGl2PgogICAgICAgIDxsYWJlbCBjbGFzcz0iY2VsbCB0YXAiPjxzcGFuIGNsYXNzPSJsYmwiPkMnZXN0IGRlIGxhIG5pY290aW5lPC9zcGFuPjxzcGFuIGNsYXNzPSJzd2l0Y2giPjxpbnB1dCB0eXBlPSJjaGVja2JveCIgaWQ9InpuMm4iIGNoZWNrZWQ+PHNwYW4+PC9zcGFuPjwvc3Bhbj48L2xhYmVsPjwvZGl2PgogICAgICAgIDxwIGNsYXNzPSJoaW50Ij5FbiBvYnNlcnZhdGlvbiwgdHUgbm90ZXMgc2V1bGVtZW50LiBUdSBwYXNzZXMgZW4gYXJyw6p0IGxlIGpvdXIgb8O5IHR1IHRlIHNlbnMgcHLDqnQuPC9wPjwvc2VjdGlvbj4KICAgICAgPGJ1dHRvbiBjbGFzcz0iYnRuIGJsb2NrIiBkYXRhLXpjcmVhdGUgc3R5bGU9Im1hcmdpbi10b3A6MjZweCI+Q3LDqWVyIGV0IGNoaWZmcmVyPC9idXR0b24+CiAgICAgIDxidXR0b24gY2xhc3M9ImJ0biBibG9jayBxdWlldCIgZGF0YS16bG9jayBzdHlsZT0ibWFyZ2luLXRvcDoxMHB4Ij5Bbm51bGVyPC9idXR0b24+YDsKICB9CiAgZnVuY3Rpb24gb3BlbkVkaXQoa2luZCkgewogICAgY29uc3QgaCA9IEgoKTsKICAgIGNvbnN0IGJvZHkgPSBraW5kID09PSAncmVhc29ucycKICAgICAgPyBgPHAgY2xhc3M9InNtYWxsIG11dGVkIj5VbmUgcmFpc29uIHBhciBsaWduZS4gTGVzIHRpZW5uZXMsIHBhcyBjZWxsZXMgZGVzIGF1dHJlcy48L3A+PHRleHRhcmVhIGlkPSJ6RWQiIHN0eWxlPSJtaW4taGVpZ2h0OjE4MHB4O21hcmdpbi10b3A6MTJweCIgcGxhY2Vob2xkZXI9IlBvdXIgQWxsYWgmIzEwO1BvdXIgbW9uIGNvdXBsZSYjMTA7UG91ciBtb24gw6luZXJnaWUgZXQgbWEgY2xhcnTDqSYjMTA7UG91ciBsZSBww6hyZSBxdWUgamUgdmV1eCDDqnRyZSI+JHtlc2MoaC5yZWFzb25zLmpvaW4oJ1xuJykpfTwvdGV4dGFyZWE+YAogICAgICA6IGA8cCBjbGFzcz0ic21hbGwgbXV0ZWQiPlNpIFtzaXR1YXRpb25dLCBhbG9ycyBbY2UgcXVlIGplIGZhaXNdLiBDb3VydCwgY29uY3JldCwgZmFpc2FibGUgZW4gMTAgc2Vjb25kZXMuPC9wPjxkaXYgc3R5bGU9Im1hcmdpbi10b3A6MTJweCI+JHtoLnBsYW5zLm1hcCgocCwgaSkgPT4gYDxkaXYgY2xhc3M9InpwbGFuIj48aW5wdXQgZGF0YS16cD0iJHtpfS4wIiB2YWx1ZT0iJHtlc2MocFswXSl9IiBhcmlhLWxhYmVsPSJTaSI+PGlucHV0IGRhdGEtenA9IiR7aX0uMSIgdmFsdWU9IiR7ZXNjKHBbMV0pfSIgYXJpYS1sYWJlbD0iQWxvcnMiPjxidXR0b24gY2xhc3M9Imljb24tYnRuIiBkYXRhLXpwZGVsPSIke2l9IiBhcmlhLWxhYmVsPSJTdXBwcmltZXIiPiR7WH08L2J1dHRvbj48L2Rpdj5gKS5qb2luKCcnKX08L2Rpdj48YnV0dG9uIGNsYXNzPSJidG4gc20gZ2hvc3QiIGRhdGEtenBhZGQ+KyBVbiBwbGFuPC9idXR0b24+YDsKICAgICQoJyNpZGVhc0JvZHknKS5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz0iZ3JhYiI+PC9kaXY+PGRpdiBjbGFzcz0ic2hlZXQtdG9wIj48c3BhbiBzdHlsZT0id2lkdGg6NjBweCI+PC9zcGFuPjxoMiBpZD0iaWRlYXNUaXRsZSI+JHtraW5kID09PSAncmVhc29ucycgPyAnTWVzIHJhaXNvbnMnIDogJ1Np4oCmIGFsb3Jz4oCmJ308L2gyPjxidXR0b24gY2xhc3M9ImxpbmstYnRuIiBkYXRhLXplZG9rPSIke2tpbmR9IiBzdHlsZT0idGV4dC1hbGlnbjpyaWdodCI+T0s8L2J1dHRvbj48L2Rpdj4ke2JvZHl9YDsKICAgIGNvbnN0IGQgPSAkKCcjaWRlYXNTaGVldCcpOyBpZiAoIWQub3BlbikgZC5zaG93TW9kYWwoKTsgZC5kYXRhc2V0Lm1vZGUgPSAneic7CiAgfQogIGZ1bmN0aW9uIHZpZXcoKSB7CiAgICBpZiAoIVouZCkgcmV0dXJuIHZTZXR1cCgpOwogICAgY29uc3QgaCA9IEgoKTsKICAgIGxldCBodG1sID0gYCR7aGVhZCgpfSR7dGFicygpfTxkaXYgY2xhc3M9InpoIj4ke2gubW9kZSA9PT0gJ3N0b3AnID8gdlN0b3AoaCkgOiB2V2F0Y2goaCl9PC9kaXY+YDsKICAgIGlmIChaLnZpZXcgPT09ICd1cmdlJyAmJiBaLnVyZ2UpIGh0bWwgKz0gdlVyZ2UoaCk7CiAgICBpZiAoWi52aWV3ID09PSAncmVsYXBzZScgJiYgWi5yZWwpIGh0bWwgKz0gdlJlbGFwc2UoaCk7CiAgICByZXR1cm4gaHRtbDsKICB9CiAgZnVuY3Rpb24gc2hvdygpIHsgdGFiID0gJ3onOyByZW5kZXIodHJ1ZSk7IHdpbmRvdy5zY3JvbGxUbygwLCAwKTsgfQogIGZ1bmN0aW9uIHJlcmVuZGVyKCkgeyBjb25zdCBzeSA9IHdpbmRvdy5zY3JvbGxZLCB1eSA9ICQoJyN6VXJnZScpID8gJCgnI3pVcmdlJykuc2Nyb2xsVG9wIDogMCwgZHkgPSAkKCcjekRhcmsnKSA/ICQoJyN6RGFyaycpLnNjcm9sbFRvcCA6IDA7IHJlbmRlcigpOyB3aW5kb3cuc2Nyb2xsVG8oMCwgc3kpOyBpZiAoJCgnI3pVcmdlJykpICQoJyN6VXJnZScpLnNjcm9sbFRvcCA9IHV5OyBpZiAoJCgnI3pEYXJrJykpICQoJyN6RGFyaycpLnNjcm9sbFRvcCA9IGR5OyB9CgogIC8qIC0tLS0tLS0tLS0gbWludXRlcmllIChjb21wdGV1cnMgdml2YW50cywgdmFndWUsIHJlc3BpcmF0aW9uKSAtLS0tLS0tLS0tICovCiAgbGV0IGl2ID0gMDsKICBmdW5jdGlvbiB0aWNrU3RhcnQoKSB7CiAgICBjbGVhckludGVydmFsKGl2KTsKICAgIGl2ID0gc2V0SW50ZXJ2YWwoKCkgPT4gewogICAgICBpZiAodGFiICE9PSAneicgfHwgIVouZCkgeyBjbGVhckludGVydmFsKGl2KTsgcmV0dXJuOyB9CiAgICAgIGNvbnN0IGggPSBIKCk7IGlmICghaCkgcmV0dXJuOwogICAgICBjb25zdCB0ID0gJCgnI3pUaWNrJyk7IGlmICh0ICYmIGgubW9kZSA9PT0gJ3N0b3AnKSB0LnRleHRDb250ZW50ID0gZHVyKG5vdygpIC0gaC5zdGFydCkuc3BsaXQoJyAnKS5zbGljZSgyKS5qb2luKCcgJyk7CiAgICAgIGNvbnN0IHMgPSAkKCcjelN0YWtlJyk7IGlmIChzICYmIGgubW9kZSA9PT0gJ3N0b3AnKSBzLnRleHRDb250ZW50ID0gZHVyKG5vdygpIC0gaC5zdGFydCk7CiAgICAgIGlmIChaLnVyZ2UgJiYgJCgnI3pMZWZ0JykpIHsKICAgICAgICBjb25zdCB0b3RhbCA9IFoudXJnZS5sZW4gKiA2MDAwMCwgZWwgPSBub3coKSAtIFoudXJnZS50MCwgbGVmdCA9IE1hdGgubWF4KDAsIHRvdGFsIC0gZWwpOwogICAgICAgICQoJyN6TGVmdCcpLnRleHRDb250ZW50ID0gYCR7TWF0aC5mbG9vcihsZWZ0IC8gNjAwMDApfToke3R3byhNYXRoLmZsb29yKGxlZnQgJSA2MDAwMCAvIDEwMDApKX1gOwogICAgICAgIGNvbnN0IGMgPSAkKCcjeldhdmVDJyksIFIgPSAxMDAsIEMgPSAyICogTWF0aC5QSSAqIFI7IGlmIChjKSBjLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWRhc2hvZmZzZXQnLCAoQyAqICgxIC0gbGVmdCAvIHRvdGFsKSkudG9GaXhlZCgxKSk7CiAgICAgICAgY29uc3QgcGggPSAoZWwgLyAxMDAwKSAlIDEwOyAkKCcjekJyJykudGV4dENvbnRlbnQgPSBsZWZ0IDw9IDAgPyAnTGEgdmFndWUgZXN0IHBhc3PDqWUnIDogcGggPCA0ID8gJ0luc3BpcmXigKYnIDogJ0V4cGlyZeKApic7CiAgICAgICAgaWYgKGxlZnQgPD0gMCAmJiAhWi51cmdlLnJhbmcpIHsgWi51cmdlLnJhbmcgPSAxOyBjaGltZSh0cnVlKTsgdHJ5IHsgbmF2aWdhdG9yLnZpYnJhdGUgJiYgbmF2aWdhdG9yLnZpYnJhdGUoWzIwLCA2MCwgMjBdKTsgfSBjYXRjaCAoZSkge30gfQogICAgICB9CiAgICB9LCAyNTApOwogIH0KCiAgLyogLS0tLS0tLS0tLSBhY3Rpb25zIC0tLS0tLS0tLS0gKi8KICBhc3luYyBmdW5jdGlvbiBjcmVhdGUoKSB7CiAgICBjb25zdCBjMSA9ICQoJyN6YzEnKS52YWx1ZSwgYzIgPSAkKCcjemMyJykudmFsdWUsIG4xID0gJCgnI3puMScpLnZhbHVlLnRyaW0oKSwgbjIgPSAkKCcjem4yJykudmFsdWUudHJpbSgpOwogICAgaWYgKGMxLmxlbmd0aCA8IDYgfHwgL1xzLy50ZXN0KGMxKSkgeyB0b2FzdCgnQ29kZSA6IDYgY2FyYWN0w6hyZXMgbWluaW11bSwgc2FucyBlc3BhY2UuJyk7IHJldHVybjsgfQogICAgaWYgKGMxICE9PSBjMikgeyB0b2FzdCgnTGVzIGRldXggY29kZXMgbmUgc29udCBwYXMgaWRlbnRpcXVlcy4nKTsgcmV0dXJuOyB9CiAgICBpZiAoIW4xKSB7IHRvYXN0KCdEb25uZSB1biBub20gw6AgY2UgcXVlIHR1IGFycsOqdGVzLicpOyByZXR1cm47IH0KICAgIGNvbnN0IGQxID0gJCgnI3pkMScpLnZhbHVlID8gbmV3IERhdGUoJCgnI3pkMScpLnZhbHVlKS5nZXRUaW1lKCkgOiBub3coKTsKICAgIGNvbnN0IGhhYml0cyA9IFtuZXdIYWJpdChuMSwgJ3N0b3AnLCBmYWxzZSwgTWF0aC5taW4obm93KCksIGQxKSldOwogICAgaWYgKG4yKSBoYWJpdHMucHVzaChuZXdIYWJpdChuMiwgJ3dhdGNoJywgJCgnI3puMm4nKS5jaGVja2VkLCBub3coKSkpOwogICAgWi5zYWx0ID0gY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheSgxNikpOyBaLmtleSA9IGF3YWl0IHpLZXkoYzEsIFouc2FsdCk7CiAgICBaLmQgPSB7IHY6IDEsIGhhYml0cywgY3JlYXRlZDogbm93KCkgfTsgWi5oaWQgPSBoYWJpdHNbMF0uaWQ7IFoudmlldyA9ICdtYWluJzsKICAgIGF3YWl0IHBlcnNpc3QoKTsgYXNrUGVyc2lzdCgpOyBzaG93KCk7IHRpY2tTdGFydCgpOyBkYWlseUNoZWNrKCk7CiAgICB0b2FzdCgnRXNwYWNlIGNyw6nDqSBldCBjaGlmZnLDqS4gVG9uIGNvZGUgbFwnb3V2cmUgZGVwdWlzIElkw6llcy4nLCBudWxsLCBudWxsLCA2MDAwKTsKICB9CiAgZnVuY3Rpb24gc3RhcnRVcmdlKCkgeyBjb25zdCBoID0gSCgpOyBaLnVyZ2UgPSB7IHQwOiBub3coKSwgbGVuOiBoLm5pYyA/IDUgOiAxMCwgdHJpZzogJycsIGRvbmU6IHt9IH07IFoudmlldyA9ICd1cmdlJzsgWi5kaCA9IG51bGw7IGF1ZGlvVW5sb2NrKCk7IHJlcmVuZGVyKCk7IH0KICBmdW5jdGlvbiBlbmRVcmdlKHdvbikgewogICAgY29uc3QgaCA9IEgoKSwgdSA9IFoudXJnZTsgaWYgKCF1KSByZXR1cm47CiAgICBoLnVyZ2VzLnB1c2goeyB0OiB1LnQwLCB0cmlnOiB1LnRyaWcsIHdvbiwgZHVyOiBNYXRoLnJvdW5kKChub3coKSAtIHUudDApIC8gMTAwMCkgfSk7CiAgICBjb25zdCB0cmlnID0gdS50cmlnOyBaLnVyZ2UgPSBudWxsOyBaLmRoID0gbnVsbDsKICAgIGlmICh3b24pIHsKICAgICAgWi52aWV3ID0gJ21haW4nOyBwZXJzaXN0KCk7IHJlcmVuZGVyKCk7IHdpbmRvdy5zY3JvbGxUbygwLCAwKTsKICAgICAgY29uc3QgbiA9IGgudXJnZXMuZmlsdGVyKHggPT4geC53b24pLmxlbmd0aDsKICAgICAgbGFzdFB0ID0geyB4OiBpbm5lcldpZHRoIC8gMiwgeTogaW5uZXJIZWlnaHQgKiAuNCB9OwogICAgICBjb25zdCBnID0gR0VNU1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBHRU1TLmxlbmd0aCldOwogICAgICByZXdhcmQoMTAsIHsgYmlnOiB0cnVlLCBtc2c6IFtgRW52aWUgdmFpbmN1ZSDCtyAke259JHtuID09PSAxID8gJ3JlJyA6ICdlJ31gLCBNYXRoLnJhbmRvbSgpIDwgLjUgPyAnVHUgdmllbnMgZGUgcHJvdXZlciDDoCB0b24gY2VydmVhdSBxdWUgbFwnZW52aWUgcGFzc2Ugc2FucyBjw6lkZXIuIExhIHByb2NoYWluZSBzZXJhIHVuIHBldSBwbHVzIGZhaWJsZS4nIDogZ1swXSwgTWF0aC5yYW5kb20oKSA8IC41ID8gJycgOiBnWzFdXSB9KTsKICAgIH0gZWxzZSBzdGFydFJlbGFwc2UodHJpZyk7CiAgfQogIGZ1bmN0aW9uIHN0YXJ0UmVsYXBzZSh0cmlnKSB7CiAgICBjb25zdCBnbSA9ICQoJyNnZW0nKTsgaWYgKGdtKSBnbS5jbGFzc0xpc3QucmVtb3ZlKCdvbicpOwogICAgWi52aWV3ID0gJ3JlbGFwc2UnOyBaLnJlbCA9IHsgd2hlbjogJzAnLCB0cmlnOiB0cmlnIHx8ICcnLCBiYXJzOiB7fSB9OyBaLnVyZ2UgPSBudWxsOwogICAgcmVyZW5kZXIoKTsgdGh1ZCgpOyB0cnkgeyBuYXZpZ2F0b3IudmlicmF0ZSAmJiBuYXZpZ2F0b3IudmlicmF0ZShbMzAwXSk7IH0gY2F0Y2ggKGUpIHt9CiAgICBjb25zdCBlbCA9ICQoJyN6RG93bicpLCBmcm9tID0gTWF0aC5mbG9vcihkYXlzKEgoKSkpOwogICAgaWYgKGVsICYmIGZyb20gPiAwICYmICFyZWR1Y2VNb3Rpb24oKSkgeyBjb25zdCB0MCA9IHBlcmZvcm1hbmNlLm5vdygpOyBjb25zdCBzdCA9IHQgPT4geyBjb25zdCBrID0gTWF0aC5taW4oMSwgKHQgLSB0MCkgLyAxODAwKTsgZWwudGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKGZyb20gKiAoMSAtIGsgKiBrKSk7IGlmIChrIDwgMSkgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0KTsgfTsgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0KTsgfQogICAgZWxzZSBpZiAoZWwpIGVsLnRleHRDb250ZW50ID0gJzAnOwogIH0KICBmdW5jdGlvbiByZXN0YXJ0KCkgewogICAgY29uc3QgaCA9IEgoKSwgciA9IFoucmVsLCB0ID0gbm93KCkgLSBOdW1iZXIoci53aGVuKSAqIDM2MDAwMDA7CiAgICBoLmJlc3QgPSBNYXRoLm1heChoLmJlc3QgfHwgMCwgdCAtIGguc3RhcnQpOwogICAgaC5yZWxhcHNlcy5wdXNoKHsgdCwgdHJpZzogci50cmlnLCBub3RlOiAoJCgnI3pOb3RlJykudmFsdWUgfHwgJycpLnRyaW0oKS5zbGljZSgwLCA1MDApLCBzdHJlYWs6IE1hdGgubWF4KDAsIHQgLSBoLnN0YXJ0KSB9KTsKICAgIE9iamVjdC5rZXlzKHIuYmFycykuZm9yRWFjaChrID0+IHsgaC5iYXJba10gPSB0cnVlOyB9KTsKICAgIGguc3RhcnQgPSB0OyBoLm1zID0ge307IGgubGFzdENsZWFuID0gdG9kYXlJU08oKTsKICAgIG5vdXJBZGQoLTE1KTsgWi52aWV3ID0gJ21haW4nOyBaLnJlbCA9IG51bGw7IHBlcnNpc3QoKTsgcmVyZW5kZXIoKTsgd2luZG93LnNjcm9sbFRvKDAsIDApOyByZWZyZXNoU3VuKCk7CiAgICB0b2FzdCgnTm91dmVsbGUgc8OpcmllIGxhbmPDqWUuIExlcyAxMCBwcm9jaGFpbmVzIG1pbnV0ZXMgY29tcHRlbnQgOiBib3VnZSwgc29ycyBkZSBsYSBwacOoY2UuJywgbnVsbCwgbnVsbCwgNzAwMCk7CiAgfQoKICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gewogICAgaWYgKHRhYiAhPT0gJ3onKSByZXR1cm47CiAgICBjb25zdCB0ID0gZS50YXJnZXQsIGMgPSBzID0+IHQuY2xvc2VzdChzKTsgbGV0IGVsOwogICAgaWYgKGMoJ1tkYXRhLXpsb2NrXScpKSB7IGxvY2soKTsgZ28oJ29yYml0ZScpOyByZXR1cm47IH0KICAgIGlmIChjKCdbZGF0YS16Y3JlYXRlXScpKSB7IGNyZWF0ZSgpOyByZXR1cm47IH0KICAgIGlmICghWi5kKSByZXR1cm47CiAgICBjb25zdCBoID0gSCgpOwogICAgaWYgKChlbCA9IGMoJ1tkYXRhLXpoXScpKSkgeyBaLmhpZCA9IGVsLmRhdGFzZXQuemg7IHJlcmVuZGVyKCk7IHJldHVybjsgfQogICAgaWYgKGMoJ1tkYXRhLXp1cmdlXScpKSB7IHN0YXJ0VXJnZSgpOyByZXR1cm47IH0KICAgIGlmICgoZWwgPSBjKCdbZGF0YS16dHJpZ10nKSkpIHsgWi51cmdlLnRyaWcgPSBlbC5kYXRhc2V0Lnp0cmlnOyBoYXB0aWMoKTsgcmVyZW5kZXIoKTsgcmV0dXJuOyB9CiAgICBpZiAoKGVsID0gYygnW2RhdGEtemFjdF0nKSkpIHsKICAgICAgY29uc3QgayA9IGVsLmRhdGFzZXQuemFjdDsKICAgICAgaWYgKGsgPT09ICdkaGlrcicpIHsgWi5kaCA9IFouZGggfHwgWzAsIDBdOyBaLnVyZ2UuZG9uZS5kaGlrciA9IHRydWU7IHJlcmVuZGVyKCk7IGNvbnN0IGIgPSAkKCcuemRoJyk7IGlmIChiKSBiLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnLCBibG9jazogJ2NlbnRlcicgfSk7IHJldHVybjsgfQogICAgICBpZiAoIVoudXJnZS5kb25lW2tdKSB7IFoudXJnZS5kb25lW2tdID0gdHJ1ZTsgcmV3YXJkKDEsIHsgbm9Cb251czogdHJ1ZSB9KTsgfSBlbHNlIGRlbGV0ZSBaLnVyZ2UuZG9uZVtrXTsKICAgICAgcmVyZW5kZXIoKTsgcmV0dXJuOwogICAgfQogICAgaWYgKGMoJ1tkYXRhLXpkaF0nKSkgewogICAgICBjb25zdCBkID0gWi5kaDsgZFsxXSsrOyBoYXB0aWMoKTsKICAgICAgaWYgKGRbMV0gPj0gMzMpIHsgZFswXSsrOyBkWzFdID0gMDsgY2hpbWUoZmFsc2UpOyBpZiAoZFswXSA+PSAzKSB7IFouZGggPSBudWxsOyByZXdhcmQoMywgeyBtc2c6IFsnRGhpa3IgY29tcGxldCcsICdMZXMgY8WTdXJzIHNlIHRyYW5xdWlsbGlzZW50IHBhciBsZSByYXBwZWwgZFwnQWxsYWguIChDb3JhbiAxMzoyOCknXSB9KTsgcmVyZW5kZXIoKTsgcmV0dXJuOyB9IH0KICAgICAgY29uc3QgYiA9ICQoJy56ZGgnKTsgaWYgKGIpIGIub3V0ZXJIVE1MID0gZGhpa3JCb3goKTsgcmV0dXJuOwogICAgfQogICAgaWYgKGMoJ1tkYXRhLXp3b25dJykpIHsgZW5kVXJnZSh0cnVlKTsgcmV0dXJuOyB9CiAgICBpZiAoYygnW2RhdGEtemdhdmVdJykpIHsgZW5kVXJnZShmYWxzZSk7IHJldHVybjsgfQogICAgaWYgKGMoJ1tkYXRhLXpyZWxdJykpIHsgc3RhcnRSZWxhcHNlKCk7IHJldHVybjsgfQogICAgaWYgKChlbCA9IGMoJ1tkYXRhLXp3aGVuXScpKSkgeyBaLnJlbC53aGVuID0gZWwuZGF0YXNldC56d2hlbjsgcmVyZW5kZXIoKTsgcmV0dXJuOyB9CiAgICBpZiAoKGVsID0gYygnW2RhdGEtenJ0cmlnXScpKSkgeyBaLnJlbC50cmlnID0gZWwuZGF0YXNldC56cnRyaWc7IHJlcmVuZGVyKCk7IHJldHVybjsgfQogICAgaWYgKChlbCA9IGMoJ1tkYXRhLXpyYmFyXScpKSkgeyBjb25zdCBrID0gZWwuZGF0YXNldC56cmJhcjsgaWYgKFoucmVsLmJhcnNba10pIGRlbGV0ZSBaLnJlbC5iYXJzW2tdOyBlbHNlIFoucmVsLmJhcnNba10gPSAxOyBjb25zdCBuID0gJCgnI3pOb3RlJykudmFsdWU7IHJlcmVuZGVyKCk7ICQoJyN6Tm90ZScpLnZhbHVlID0gbjsgcmV0dXJuOyB9CiAgICBpZiAoYygnW2RhdGEtenJlc3RhcnRdJykpIHsgcmVzdGFydCgpOyByZXR1cm47IH0KICAgIGlmIChjKCdbZGF0YS16cmVseF0nKSkgeyBaLnZpZXcgPSAnbWFpbic7IFoucmVsID0gbnVsbDsgcmVyZW5kZXIoKTsgcmV0dXJuOyB9CiAgICBpZiAoYygnW2RhdGEtemxvZ10nKSkgeyBoLmxvZy5wdXNoKG5vdygpKTsgaWYgKGgubG9nLmxlbmd0aCA+IDMwMDApIGgubG9nLnNoaWZ0KCk7IHBlcnNpc3QoKTsgaGFwdGljKCk7IHJlcmVuZGVyKCk7IHJldHVybjsgfQogICAgaWYgKGMoJ1tkYXRhLXp1bmxvZ10nKSkgeyBoLmxvZy5wb3AoKTsgcGVyc2lzdCgpOyByZXJlbmRlcigpOyB0b2FzdCgnRGVybmnDqHJlIHByaXNlIGFubnVsw6llJyk7IHJldHVybjsgfQogICAgaWYgKChlbCA9IGMoJ1tkYXRhLXpyZWFkeV0nKSkpIHsgY29uc3QgdiA9IE51bWJlcihlbC5kYXRhc2V0LnpyZWFkeSksIGsgPSB0b2RheUlTTygpOyBoLnJlYWR5ID0gaC5yZWFkeS5maWx0ZXIociA9PiByLmQgIT09IGspOyBoLnJlYWR5LnB1c2goeyBkOiBrLCB2IH0pOyBwZXJzaXN0KCk7IGhhcHRpYygpOyByZXJlbmRlcigpOyByZXR1cm47IH0KICAgIGlmIChjKCdbZGF0YS16cmVhZHktZ29dJykpIHsKICAgICAgdG9hc3QoJ1RhIHPDqXJpZSBkw6ltYXJyZSBtYWludGVuYW50LiBQcsOqdCA/JywgJ091aScsICgpID0+IHsgaC5tb2RlID0gJ3N0b3AnOyBoLnN0YXJ0ID0gbm93KCk7IGgubXMgPSB7fTsgaC5wbGFucyA9IFBMQU5TX04ubWFwKHAgPT4gcC5zbGljZSgpKS5jb25jYXQoaC5wbGFucy5maWx0ZXIocCA9PiAhUExBTlNfTi5zb21lKHEgPT4gcVswXSA9PT0gcFswXSkpKS5zbGljZSgwLCA2KTsgcGVyc2lzdCgpOyByZXJlbmRlcigpOyB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7IHJld2FyZCgxMCwgeyBiaWc6IHRydWUsIG1zZzogWydEw6ljaXNpb24gcHJpc2UnLCAnTGUgcGx1cyBkdXIgblwnZXN0IHBhcyBkXCdhcnLDqnRlciwgY1wnZXN0IGRlIGTDqWNpZGVyLiBDXCdlc3QgZmFpdC4nXSB9KTsgfSwgNzAwMCk7IHJldHVybjsKICAgIH0KICAgIGlmICgoZWwgPSBjKCdbZGF0YS16ZWRpdF0nKSkpIHsgb3BlbkVkaXQoZWwuZGF0YXNldC56ZWRpdCk7IHJldHVybjsgfQogICAgaWYgKGMoJ1tkYXRhLXpwYWRkXScpKSB7IGgucGxhbnMucHVzaChbJycsICcnXSk7IG9wZW5FZGl0KCdwbGFucycpOyBjb25zdCBpbnMgPSAkJCgnW2RhdGEtenBdJyk7IGlmIChpbnMubGVuZ3RoKSBpbnNbaW5zLmxlbmd0aCAtIDJdLmZvY3VzKCk7IHJldHVybjsgfQogICAgaWYgKChlbCA9IGMoJ1tkYXRhLXpwZGVsXScpKSkgeyBoLnBsYW5zLnNwbGljZShOdW1iZXIoZWwuZGF0YXNldC56cGRlbCksIDEpOyBwZXJzaXN0KCk7IG9wZW5FZGl0KCdwbGFucycpOyByZXR1cm47IH0KICAgIGlmICgoZWwgPSBjKCdbZGF0YS16ZWRva10nKSkpIHsKICAgICAgaWYgKGVsLmRhdGFzZXQuemVkb2sgPT09ICdyZWFzb25zJykgaC5yZWFzb25zID0gJCgnI3pFZCcpLnZhbHVlLnNwbGl0KCdcbicpLm1hcCh4ID0+IHgudHJpbSgpKS5maWx0ZXIoQm9vbGVhbikuc2xpY2UoMCwgMTIpOwogICAgICBlbHNlIGgucGxhbnMgPSBoLnBsYW5zLmZpbHRlcihwID0+IHBbMF0udHJpbSgpIHx8IHBbMV0udHJpbSgpKTsKICAgICAgcGVyc2lzdCgpOyAkKCcjaWRlYXNTaGVldCcpLmNsb3NlKCk7IHJlcmVuZGVyKCk7IHJldHVybjsKICAgIH0KICB9KTsKICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHsKICAgIGlmICh0YWIgIT09ICd6JyB8fCAhWi5kKSByZXR1cm47CiAgICBjb25zdCB0ID0gZS50YXJnZXQsIGggPSBIKCk7CiAgICBpZiAodC5kYXRhc2V0LnpiYXIpIHsgaWYgKHQuY2hlY2tlZCkgeyBoLmJhclt0LmRhdGFzZXQuemJhcl0gPSB0cnVlOyByZXdhcmQoMyk7IH0gZWxzZSBkZWxldGUgaC5iYXJbdC5kYXRhc2V0LnpiYXJdOyBwZXJzaXN0KCk7IHJlcmVuZGVyKCk7IHJldHVybjsgfQogICAgaWYgKHQuZGF0YXNldC56cCkgeyBjb25zdCBbaSwgal0gPSB0LmRhdGFzZXQuenAuc3BsaXQoJy4nKS5tYXAoTnVtYmVyKTsgaWYgKGgucGxhbnNbaV0pIHsgaC5wbGFuc1tpXVtqXSA9IHQudmFsdWUudHJpbSgpOyBwZXJzaXN0KCk7IH0gcmV0dXJuOyB9CiAgICBpZiAodC5kYXRhc2V0LnpzZXQpIHsgaFt0LmRhdGFzZXQuenNldF0gPSB0LnZhbHVlLnRyaW0oKS5yZXBsYWNlKCcsJywgJy4nKTsgcGVyc2lzdCgpOyByZXJlbmRlcigpOyByZXR1cm47IH0KICB9KTsKCiAgZnVuY3Rpb24gbG9jaygpIHsKICAgIGNsZWFySW50ZXJ2YWwoaXYpOyBaLmtleSA9IG51bGw7IFouc2FsdCA9IG51bGw7IFouZCA9IG51bGw7IFoudXJnZSA9IG51bGw7IFoucmVsID0gbnVsbDsgWi5kaCA9IG51bGw7IFoudmlldyA9ICdtYWluJzsKICAgIGNvbnN0IHMgPSAkKCcjaWRlYXNTaGVldCcpOyBpZiAocyAmJiBzLm9wZW4gJiYgcy5kYXRhc2V0Lm1vZGUgPT09ICd6JykgeyBzLmNsb3NlKCk7IGRlbGV0ZSBzLmRhdGFzZXQubW9kZTsgfQogIH0KICB3aW5kb3cuX196ID0gewogICAgb3BlbihrZXksIHNhbHQsIGRhdGEpIHsgWi5rZXkgPSBrZXk7IFouc2FsdCA9IHNhbHQ7IFouZCA9IGRhdGE7IFoudmlldyA9ICdtYWluJzsgWi5oaWQgPSAoZGF0YS5oYWJpdHNbMF0gfHwge30pLmlkOyBzaG93KCk7IHRpY2tTdGFydCgpOyBkYWlseUNoZWNrKCk7IH0sCiAgICBzZXR1cCgpIHsgWi5rZXkgPSBudWxsOyBaLmQgPSBudWxsOyBzaG93KCk7IH0sCiAgICBsb2NrLCB2aWV3LAogICAgYWN0aXZlOiAoKSA9PiAhIVouZAogIH07Cn0pKCk7Cg==';
