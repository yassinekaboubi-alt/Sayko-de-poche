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
  fheart: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><path d="M12 20.5s-7.5-4.6-9.2-9.4C1.6 7.8 3.7 4.5 7.1 4.5c2 0 3.6 1.1 4.9 2.9 1.3-1.8 2.9-2.9 4.9-2.9 3.4 0 5.5 3.3 4.3 6.6-1.7 4.8-9.2 9.4-9.2 9.4z"/></svg>',
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
  zakat: ['Ta zakat', 'Renseigne le cours de l\'or (ou de l\'argent), ce que tu as sur tes comptes et en espèces : ton épargne et ta dette sont reprises du budget. L\'app compare ton patrimoine net au nisab, lance le compte de l\'année lunaire dès que tu le dépasses, et te dit quand ta zakat est due et combien.'],
  coeur: ['Les compétences du cœur', 'La Duʿa avance marche par marche : une phrase à toi après une invocation connue, puis ta journée, puis tes demandes, puis le rendez-vous. Tu peux écrire dans ton carnet, avec des débuts de phrase pour t\'aider. Huit compétences du croyant : tawakkul, duʿa, ihsan, hilm, sabr, shukr, ikhlas, muhasaba. Choisis-en une, en commençant par le tawakkul. Trois paliers : Comprendre (la leçon et ses sources), Pratiquer (7 jours de pratique concrète), Ancrer (21 jours au total et deux réponses écrites). Une compétence ancrée s\'entretient : continue de la pratiquer.'],
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
  { key: 'arabe', name: 'Arabe', r: 66, speed: 9, phase: 30 },
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
/* =====================================================================
   GALAXIE — l'accueil de Yassine. Le soleil = la Foi (il brille avec tes
   prières du jour). Chaque module est une planète qui évolue avec tes actes :
   Roche → Eau → Océans → Vie → Civilisation (lumières des villes + anneau d'or).
   Le décor (Voie lactée, nébuleuses, étoiles filantes, comète) est peint une
   fois dans #galaxy, fixe derrière toute l'app.
   ===================================================================== */
const GSTAGE = ['Roche', 'Eau', 'Océans', 'Vie', 'Civilisation'];
/* Chaque planète porte le nom d'une étoile au nom arabe, révélé lettre par lettre à mesure qu'elle s'éveille. */
const GNAME = { foi: ['Suhail', 'Canopus, l\'étoile qui guidait les voyageurs arabes dans le désert'], business: ['Altaïr', 'de an-nasr at-tâ\'ir, l\'aigle qui vole'], corps: ['Hamal', 'de al-ḥamal, le bélier : la force'], argent: ['Alnilam', 'de an-nizâm, le collier de perles'], parcours: ['Achernar', 'de âkhir an-nahr, la fin du fleuve'], arabe: ['Fomalhaut', 'de fam al-hût, la bouche du poisson'], routine: ['Deneb', 'de dhanab, la queue du cygne'] };
const GSIZE = { foi: 30, business: 26, corps: 24, argent: 24, parcours: 22, arabe: 20, routine: 19 };
const GPAL = { foi: ['#C6F7E0', '#1F9E6E', '#04261A'], business: ['#F6E2B0', '#C08A3E', '#2A1606'], corps: ['#F7B79A', '#B9472E', '#2A0A05'], argent: ['#FFF1C8', '#D4A84A', '#2E1E06'], parcours: ['#E6F6FF', '#6FA8D6', '#0B1E33'], arabe: ['#E2D6FF', '#6A57C9', '#120A2E'], routine: ['#B5EAF2', '#22709A', '#03111C'] };
const GGROW = { foi: [9, 90, 300, 800], arabe: [5, 30, 80, 150], routine: [3, 20, 60, 150], corps: [1, 10, 30, 80], argent: [5, 40, 120, 300], parcours: [5, 25, 50, 90] };
function gValue(k) {
  if (k === 'arabe') return wordsKnown();
  if (k === 'foi') { let n = 0; Object.values(S.faith.log || {}).forEach(d => Object.values(d || {}).forEach(v => { if (v && v !== 'x') n++; })); return n; }
  if (k === 'routine') return Object.keys(S.days || {}).length;
  if (k === 'corps') return S.body.sessions.length;
  if (k === 'argent') return S.money.tx.length;
  if (k === 'parcours') return globalPct();
  return 0;
}
function gFrac(k) {
  if (k === 'business') return S.unlocks.business ? Math.min(1, .5 + (S.biz.projects || []).length / 12) : 0;
  const t = GGROW[k], v = gValue(k); let st = 0; while (st < 4 && v >= t[st]) st++;
  const lo = st ? t[st - 1] : 0, hi = st < 4 ? t[st] : null; return st >= 4 ? 1 : (st + (v - lo) / (hi - lo)) / 4;
}
function gNameSvg(k, y) {
  const [nm] = GNAME[k], f = gFrac(k), n = f >= 1 ? nm.length : Math.max(1, Math.floor(nm.length * f));
  return `<text class="gval" y="${y}"><tspan>${nm.slice(0, n)}</tspan><tspan class="ghid">${'·'.repeat(nm.length - n)}</tspan></text>`;
}
function gStage(k) {
  if (k === 'business') return S.unlocks.business ? Math.min(4, 2 + Math.floor((S.biz.projects || []).length / 3)) : 0;
  const t = GGROW[k], v = gValue(k); let st = 0; while (st < 4 && v >= t[st]) st++; return st;
}
const faithToday = () => { const n = S.faith.habits.length; return n ? dayDone(todayISO()) / n : 0; };
function planetSvg(k, st, R) {
  const pal = GPAL[k] || GPAL.routine, id = st >= 2 ? `gp-${k}` : `pg${st}`;
  let s = `<circle r="${R + 8}" fill="url(#gatm-${k})" opacity="${st >= 2 ? .95 : .3}"/><circle r="${R}" fill="url(#${id})"/>`;
  if (st <= 1) s += `<g fill="#000" opacity=".22"><circle cx="${-R * .3}" cy="${-R * .2}" r="${R * .18}"/><circle cx="${R * .25}" cy="${R * .3}" r="${R * .12}"/><circle cx="${R * .35}" cy="${-R * .35}" r="${R * .08}"/></g>`;
  if (st === 1) s += `<g fill="${pal[1]}" opacity=".7"><ellipse cx="${-R * .2}" cy="${R * .35}" rx="${R * .35}" ry="${R * .16}"/><ellipse cx="${R * .3}" cy="${-R * .1}" rx="${R * .2}" ry="${R * .1}"/></g>`;
  if (st >= 2 && (k === 'business' || k === 'argent')) s += `<g fill="none" stroke="${pal[0]}" stroke-opacity=".35" stroke-width="${(R * .12).toFixed(1)}">${[-.5, -.15, .2, .5].map(t => `<path d="M${-R} ${(R * t).toFixed(1)}q${R} ${(R * .12).toFixed(1)} ${2 * R} 0"/>`).join('')}</g>`;
  if (st >= 3) { const land = k === 'corps' ? '#D9894E' : k === 'argent' ? '#F3D9A4' : k === 'arabe' ? '#9F8CF0' : k === 'parcours' ? '#FFFFFF' : '#3FA36A';
    s += `<g fill="${land}" opacity=".88"><path d="M${-R * .6} ${-R * .2}q${R * .3} ${-R * .4} ${R * .6} ${-R * .1}q${R * .1} ${R * .3} ${-R * .2} ${R * .4}q${-R * .3} ${R * .1} ${-R * .4} ${-R * .3}z"/><path d="M${R * .1} ${R * .2}q${R * .3} ${-R * .2} ${R * .5} 0q0 ${R * .3} ${-R * .3} ${R * .4}q${-R * .2} 0 ${-R * .2} ${-R * .4}z"/></g>`; }
  if (st >= 2 && k !== 'business') s += `<g fill="none" stroke="#FFFFFF" stroke-opacity=".5" stroke-width="${(R * .08).toFixed(1)}" stroke-linecap="round"><path d="M${-R * .7} ${-R * .45}q${R * .4} ${-R * .15} ${R * .8} 0"/><path d="M${-R * .2} ${R * .55}q${R * .4} ${-R * .12} ${R * .75} ${-R * .05}"/></g>`;
  s += `<circle r="${R}" fill="url(#term)"/>`;
  if (st >= 4) {
    s += `<g fill="#FFD27A">${[[.45, .3], [.55, .05], [.3, .5], [.6, .38], [.42, .62], [.2, .7]].map(([x, y]) => `<circle cx="${(R * x).toFixed(1)}" cy="${(R * y).toFixed(1)}" r="${(R * .055).toFixed(1)}"/>`).join('')}</g>`;
    if (k === 'foi') s += `<ellipse rx="${R * 1.6}" ry="${R * .4}" fill="none" stroke="#E8C27A" stroke-width="${(R * .1).toFixed(1)}" opacity=".9" transform="rotate(-18)"/><ellipse rx="${R * 1.85}" ry="${R * .48}" fill="none" stroke="#7FE6C0" stroke-width="${(R * .04).toFixed(1)}" opacity=".7" transform="rotate(-18)"/>`;
    else if (k === 'business' || k === 'argent') s += `<ellipse rx="${R * 1.75}" ry="${R * .42}" fill="none" stroke="#E8C27A" stroke-width="${(R * .14).toFixed(1)}" opacity=".85" transform="rotate(-14)"/><ellipse rx="${R * 1.75}" ry="${R * .42}" fill="none" stroke="#FFF4D6" stroke-width="${(R * .04).toFixed(1)}" opacity=".7" transform="rotate(-14)"/>`;
    else if (k === 'corps') s += `<circle cx="${R * 1.5}" cy="${-R * .6}" r="${R * .18}" fill="#C9B9A6"/><circle cx="${-R * 1.4}" cy="${R * .5}" r="${R * .12}" fill="#A89A88"/>`;
    else if (k === 'arabe') s += `<path d="M${R * 1.3} ${-R * 1.1}a${R * .32} ${R * .32} 0 1 0 ${R * .24} ${R * .5}a${R * .26} ${R * .26} 0 1 1 ${-R * .24} ${-R * .5}z" fill="#F3D9A4"/>`;
    else if (k === 'parcours') s += `<ellipse rx="${R * 1.6}" ry="${R * .36}" fill="none" stroke="#E6F6FF" stroke-width="${(R * .08).toFixed(1)}" opacity=".7" transform="rotate(10)"/>`;
  }
  return s;
}
const GDEFS = `<defs>
  <radialGradient id="pg0" cx=".35" cy=".35"><stop offset="0" stop-color="#CBB9A6"/><stop offset=".6" stop-color="#6E5A4C"/><stop offset="1" stop-color="#1A120D"/></radialGradient>
  <radialGradient id="pg1" cx=".35" cy=".35"><stop offset="0" stop-color="#BFB2A0"/><stop offset=".6" stop-color="#5E5650"/><stop offset="1" stop-color="#151210"/></radialGradient>
  <radialGradient id="pg2" cx=".35" cy=".35"><stop offset="0" stop-color="#9CD3F5"/><stop offset=".55" stop-color="#2B6CB0"/><stop offset="1" stop-color="#06122A"/></radialGradient>
  <radialGradient id="pg3" cx=".35" cy=".35"><stop offset="0" stop-color="#A8E0F2"/><stop offset=".55" stop-color="#2A7AA8"/><stop offset="1" stop-color="#051624"/></radialGradient>
  <radialGradient id="pg4" cx=".35" cy=".35"><stop offset="0" stop-color="#B5EAF2"/><stop offset=".55" stop-color="#22709A"/><stop offset="1" stop-color="#03111C"/></radialGradient>
  <radialGradient id="term" cx=".25" cy=".25" r=".95"><stop offset=".55" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".75"/></radialGradient>
  ${[0, 1, 2, 3, 4].map(i => `<radialGradient id="atm${i}"><stop offset=".72" stop-color="${i >= 2 ? '#7FD6FF' : '#C9B9A6'}" stop-opacity="${i >= 2 ? .45 : .2}"/><stop offset="1" stop-color="${i >= 2 ? '#7FD6FF' : '#C9B9A6'}" stop-opacity="0"/></radialGradient>`).join('')}
  ${Object.entries(GPAL).map(([k, p]) => `<radialGradient id="gp-${k}" cx=".35" cy=".35"><stop offset="0" stop-color="${p[0]}"/><stop offset=".55" stop-color="${p[1]}"/><stop offset="1" stop-color="${p[2]}"/></radialGradient><radialGradient id="gatm-${k}"><stop offset=".7" stop-color="${p[0]}" stop-opacity=".45"/><stop offset="1" stop-color="${p[0]}" stop-opacity="0"/></radialGradient>`).join('')}
  <radialGradient id="gSun"><stop offset="0" stop-color="#FFFFFF"/><stop offset=".18" stop-color="#FFF4D6"/><stop offset=".4" stop-color="#F3D9A4" stop-opacity=".7"/><stop offset=".7" stop-color="#E8C27A" stop-opacity=".18"/><stop offset="1" stop-color="#E8C27A" stop-opacity="0"/></radialGradient>
</defs>`;
const GPL = { arabe: 20, routine: 21, corps: 24, argent: 26, parcours: 22, business: 25 };
function vGalaxy(hello, now) {
  const L = sunLevel(), sunR = 26 + 10 * L, glow = 100 + 70 * L, K = 1.08, RY = .74;
  const planets = PLANETS.map(p => {
    const v = p.key === 'arabe' ? wordsKnown() / WORDS.length : planetValue(p.key)[0], st = gStage(p.key), locked = p.key === 'business' && !S.unlocks.business, R = GSIZE[p.key] || 20;
    return `<g class="gplanet ${locked ? 'locked' : ''}" data-planet="${p.key}" role="button" tabindex="0" aria-label="${p.name} : ${GNAME[p.key][0]}, ${GSTAGE[st]}">
      <circle r="${R + 18}" fill="transparent"/>${planetSvg(p.key, st, R)}
      <circle class="gprog" r="${R + 6}" transform="rotate(-90)" ${ringDash(R + 6, v)}/>
      ${locked ? `<svg x="-8" y="-8" width="16" height="16" viewBox="0 0 24 24" style="color:#E8C27A">${GLYPH.lock}</svg>` : ''}
      <text class="glbl" y="${R + 22}">${p.name}</text>${locked ? `<text class="gval" y="${R + 35}">Verrouillé</text>` : gNameSvg(p.key, R + 35)}</g>`;
  }).join('');
  const radii = [...new Set(PLANETS.map(p => p.r))];
  return `${pageHead(`${hello}, <em>Yassine</em>`, DAY_LONG.format(now).replace(/^./, c => c.toUpperCase()), 'orbite')}
  <div class="orbit-stage gal" id="stage"><svg viewBox="-205 -205 410 410" aria-label="Ta galaxie : chaque planète est un module, le soleil ouvre le Flux">
    ${GDEFS}
    ${radii.map(r => `<ellipse class="gorb" rx="${((r + 18) * K).toFixed(0)}" ry="${((r + 18) * K * RY).toFixed(0)}"/>`).join('')}
    <g id="planetsBack"></g>
    <circle r="${glow.toFixed(0)}" fill="url(#gSun)" class="gsunglow"/>
    <circle r="${sunR.toFixed(1)}" fill="#FFF8E6" class="gsun"/>
    <circle data-sun r="40" fill="transparent" role="button" tabindex="0" aria-label="Ouvrir le Flux" style="cursor:pointer"/>
    <text id="sunNour" y="${(sunR + 16).toFixed(0)}" text-anchor="middle" style="font-size:10.5px;font-weight:700;letter-spacing:.06em;fill:#E8C27A" pointer-events="none">✦ ${nourDay()}</text>
    <g id="planets">${planets}</g>
  </svg></div>`;
}
let GAL_W = 0, GAL_H = 0;
function ensureGalaxy() {
  let g = document.getElementById('galaxy');
  if (!g) {
    g = document.createElement('div'); g.id = 'galaxy'; g.setAttribute('aria-hidden', 'true');
    g.innerHTML = `<canvas></canvas><svg class="galfx" viewBox="0 0 400 900" preserveAspectRatio="xMidYMid slice">
      ${[[60, 80, 0], [250, 40, 6], [330, 210, 13], [120, 300, 21]].map(([x, y, dl]) => `<g class="gshoot" style="animation-delay:${dl}s"><line x1="${x}" y1="${y}" x2="${x - 70}" y2="${y + 26}" stroke="url(#gsh)" stroke-width="1.6" stroke-linecap="round"/></g>`).join('')}
      <defs><linearGradient id="gsh" x1="1" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFF8E6"/><stop offset="1" stop-color="#FFF8E6" stop-opacity="0"/></linearGradient>
        <radialGradient id="gcom"><stop offset="0" stop-color="#E6FFF6"/><stop offset=".4" stop-color="#8FE3C8" stop-opacity=".6"/><stop offset="1" stop-color="#8FE3C8" stop-opacity="0"/></radialGradient>
        <linearGradient id="gtail" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#8FE3C8" stop-opacity="0"/><stop offset="1" stop-color="#C9F5E6" stop-opacity=".55"/></linearGradient></defs>
      <g class="gcomet"><path d="M-120 -6L0 0L-120 6Z" fill="url(#gtail)"/><circle r="5" fill="url(#gcom)"/><circle r="1.8" fill="#FFFFFF"/></g>
      ${Array.from({ length: 26 }, (_, i) => `<circle class="gtw" cx="${(i * 97) % 400}" cy="${(i * 211) % 900}" r="${i % 5 ? 1 : 1.6}" fill="#FFF4D6" style="animation-delay:-${(i * .37).toFixed(2)}s"/>`).join('')}
    </svg>`;
    document.body.prepend(g);
    window.addEventListener('resize', () => paintGalaxy(true));
  }
  paintGalaxy(false);
}
function paintGalaxy(force) {
  const g = document.getElementById('galaxy'); if (!g) return;
  const W = innerWidth, H = innerHeight; if (!force && W === GAL_W && Math.abs(H - GAL_H) < 120) return; GAL_W = W; GAL_H = H;
  const c = g.querySelector('canvas'), d = Math.min(2, devicePixelRatio || 1); c.width = W * d; c.height = H * d; const x = c.getContext('2d'); x.scale(d, d);
  let seed = 7; const r = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
  x.fillStyle = '#020407'; x.fillRect(0, 0, W, H);
  const neb = (cx, cy, rad, col, a) => { const gr = x.createRadialGradient(cx, cy, 0, cx, cy, rad); gr.addColorStop(0, `rgba(${col},${a})`); gr.addColorStop(1, `rgba(${col},0)`); x.fillStyle = gr; x.beginPath(); x.arc(cx, cy, rad, 0, 7); x.fill(); };
  x.save(); x.translate(W / 2, H * .36); x.rotate(-.5);
  for (let i = 0; i < 80; i++) neb((r() - .5) * W * 1.7, (r() - .5) * 100, 40 + r() * 130, i % 3 ? '40,140,100' : '232,194,122', .05 + r() * .06);
  for (let i = 0; i < 260; i++) { x.fillStyle = `rgba(255,248,230,${.15 + r() * .5})`; x.beginPath(); x.arc((r() - .5) * W * 1.6, (r() - .5) * 70, r() * .9, 0, 7); x.fill(); }
  x.restore();
  neb(W * .12, H * .78, 200, '30,90,140', .2); neb(W * .92, H * .18, 170, '80,40,110', .16); neb(W * .7, H * .62, 150, '40,140,100', .1);
  for (let i = 0; i < 1100; i++) { const s = r(); x.fillStyle = `rgba(255,${235 + r() * 20 | 0},${200 + r() * 55 | 0},${.18 + s * .8})`; x.beginPath(); x.arc(r() * W, r() * H, s < .975 ? s * .9 : 1.7, 0, 7); x.fill(); }
  for (let i = 0; i < 14; i++) { const px = r() * W, py = r() * H, gr = x.createRadialGradient(px, py, 0, px, py, 5); gr.addColorStop(0, 'rgba(255,250,235,.9)'); gr.addColorStop(1, 'rgba(255,250,235,0)'); x.fillStyle = gr; x.beginPath(); x.arc(px, py, 5, 0, 7); x.fill(); }
}
function checkGalaxy() {
  const g = S.galaxy = S.galaxy && typeof S.galaxy === 'object' ? S.galaxy : {}; let up = null;
  PLANETS.forEach(p => { const st = gStage(p.key); if (g[p.key] == null) { g[p.key] = st; return; } if (st > g[p.key]) { up = [p, st]; } g[p.key] = st; });
  if (up) { save(); setTimeout(() => { chime(true); burst(46, GSTAGE[up[1]], true); gemCard(`${GNAME[up[0].key][0]} · ${GSTAGE[up[1]]}`, (up[1] === 4 ? `${GNAME[up[0].key][0]}, ${GNAME[up[0].key][1]}. ` : '') + ['', 'De l\'eau apparaît sur ta planète. La vie peut commencer.', 'Des océans couvrent ta planète, les nuages se forment.', 'La vie s\'installe : des continents verts apparaissent.', 'Ta planète s\'illumine de villes et reçoit son anneau d\'or. Tu l\'as bâtie, acte après acte.'][up[1]], ''); try { navigator.vibrate && navigator.vibrate([14, 50, 20, 50, 30]); } catch (e) {} }, 700); }
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
  return `${vGalaxy(hello, now)}
  <div class="gglass">${yesterdayCard()}${atStake()}${tjCard()}</div>
  <section class="glass">
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
      ${(() => { const h = hrt(), x = HEART.find(y => y.k === h.cur) || HEART[0], l = hLevel(x.k), done = !!hc(x.k).days[todayISO()]; return `<button class="today-item" data-goto="coeur">${miniOrb(l / 3, 'foi', true)}<span><b>Cœur · ${x.n}</b><span class="s">${l === 0 ? 'Commence par la leçon' : l === 3 ? 'Ancrée : continue de la pratiquer' : done ? (x.k === 'dua' ? 'Tu Lui as parlé aujourd\'hui' : 'Pratiqué aujourd\'hui') : x.k === 'dua' ? 'Une phrase pour Allah aujourd\'hui' : `Pratique du jour · ${hDays(x.k)} jour${hDays(x.k) > 1 ? 's' : ''} sur 21`}</span></span>${ICON.chev}</button>`; })()}
      <button class="today-item" data-goto="arabe">${miniOrb(wordsKnown() / WORDS.length, 'arabe', true)}<span><b>Réviser 5 mots</b><span class="s">${wordsKnown()} mots maîtrisés sur ${WORDS.length}</span></span>${ICON.chev}</button>
    </div>
  </section>
  <div class="gglass tjbottom">${tjFeedback()}</div>`;
}
/* Animation du système + rotation au doigt avec inertie */
const orb = { raf: 0, t0: 0, spin: 0, vel: 0, drag: null, last: 0 };
function startOrbit() {
  stopOrbit();
  const g = $('#planets'); if (!g) return;
  const st0 = $('#stage'), back = $('#planetsBack'), nodes = PLANETS.map(p => $(`[data-planet="${p.key}"]`, st0));
  const still = reduceMotion();
  orb.t0 = performance.now() - (orb.elapsed || 0); orb.last = performance.now();
  const frame = now => {
    const dt = Math.min(50, now - orb.last) / 1000; orb.last = now;
    if (!orb.drag && Math.abs(orb.vel) > 0.01) { orb.spin += orb.vel * dt; orb.vel *= Math.pow(0.04, dt); }
    orb.elapsed = still ? 0 : now - orb.t0;
    const t = orb.elapsed / 1000;
    PLANETS.forEach((p, i) => {
      const a = p.phase + (still ? 0 : p.speed * t) + orb.spin * (70 / p.r);
      if (!nodes[i]) return;
      const R2 = (p.r + 18) * 1.08, [x, y] = polar(R2, a), yy = y * .74, sc = .74 + .34 * ((yy / (R2 * .74)) + 1) / 2;
      nodes[i].setAttribute('transform', `translate(${x.toFixed(2)} ${yy.toFixed(2)}) scale(${sc.toFixed(3)})`);
      if (back) { const want = yy < -4 ? back : g; if (nodes[i].parentNode !== want) want.appendChild(nodes[i]); }
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
/* Constellation réaliste : chaque mot est une étoile (couleur selon sa « température »),
   avec halo, cœur blanc, aigrettes de diffraction et scintillement quand il est maîtrisé ;
   les étoiles maîtrisées sont reliées comme une vraie constellation. */
const STARCOL = ['#BFD7FF', '#FFFFFF', '#FFF1C8', '#FFD49A', '#FFC6A8', '#D6E4FF'];
function constellation() {
  let seed = 11; const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
  const pts = WORDS.map((w, i) => { const r = 13.6 * Math.sqrt(i + 0.6), [x, y] = polar(r, i * 137.508); return { i, x, y, sc: Math.min(3, S.words[i] || 0) }; });
  const dust = Array.from({ length: 150 }, () => `<circle cx="${(rnd() * 224 - 112).toFixed(1)}" cy="${(rnd() * 208 - 104).toFixed(1)}" r="${(rnd() * .5 + .12).toFixed(2)}" fill="#FFF8E6" opacity="${(rnd() * .45 + .1).toFixed(2)}"/>`).join('');
  const on = pts.filter(p => p.sc >= 3), links = [];
  on.forEach(p => { let best = null, bd = 1e9; on.forEach(q => { if (q === p) return; const d = (p.x - q.x) ** 2 + (p.y - q.y) ** 2; if (d < bd) { bd = d; best = q; } }); if (best && bd < 1600) { const k = [p.i, best.i].sort((x, y) => x - y).join('-'); if (!links.includes(k)) links.push(k); } });
  const lines = links.map(k => { const [u, v] = k.split('-').map(Number); return `<line x1="${pts[u].x.toFixed(1)}" y1="${pts[u].y.toFixed(1)}" x2="${pts[v].x.toFixed(1)}" y2="${pts[v].y.toFixed(1)}" stroke="#E8C27A" stroke-opacity=".32" stroke-width=".5"/>`; }).join('');
  const stars = pts.map(p => {
    const col = STARCOL[(p.i * 7) % STARCOL.length], R = [0.7, 1.1, 1.5, 2.1][p.sc], gid = `sg${(p.i * 7) % STARCOL.length}`;
    let s = `<circle r="${(R * (p.sc >= 3 ? 6 : 3.6)).toFixed(2)}" fill="url(#${gid})" opacity="${[.35, .55, .75, 1][p.sc]}"/>`;
    if (p.sc >= 2) { const L = R * (p.sc >= 3 ? 7.5 : 4.5); s += `<path d="M${-L} 0H${L}M0 ${-L}V${L}" stroke="url(#spk)" stroke-width="${p.sc >= 3 ? .55 : .35}" opacity="${p.sc >= 3 ? .9 : .5}"/>`; }
    if (p.sc >= 3) s += `<path d="M${-R * 3} ${-R * 3}L${R * 3} ${R * 3}M${-R * 3} ${R * 3}L${R * 3} ${-R * 3}" stroke="${col}" stroke-width=".25" opacity=".45"/>`;
    s += `<circle r="${R.toFixed(2)}" fill="${p.sc ? '#FFFDF6' : col}" opacity="${p.sc ? 1 : .55}"/>`;
    return `<g class="star ${p.sc >= 3 ? 'tw' : ''}" data-star="${p.i}" transform="translate(${p.x.toFixed(1)} ${p.y.toFixed(1)})" style="animation-delay:-${((p.i * 0.37) % 4).toFixed(2)}s"><circle r="7" fill="transparent"/>${s}</g>`;
  }).join('');
  return `<defs>${STARCOL.map((c, k) => `<radialGradient id="sg${k}"><stop offset="0" stop-color="#FFFFFF"/><stop offset=".18" stop-color="${c}" stop-opacity=".9"/><stop offset=".45" stop-color="${c}" stop-opacity=".25"/><stop offset="1" stop-color="${c}" stop-opacity="0"/></radialGradient>`).join('')}
    <linearGradient id="spk" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#FFF8E6" stop-opacity="0"/><stop offset=".5" stop-color="#FFFFFF"/><stop offset="1" stop-color="#FFF8E6" stop-opacity="0"/></linearGradient>
    <radialGradient id="cneb"><stop offset="0" stop-color="#2E7D5B" stop-opacity=".35"/><stop offset=".55" stop-color="#3A3070" stop-opacity=".18"/><stop offset="1" stop-color="#020407" stop-opacity="0"/></radialGradient></defs>
    <rect x="-112" y="-104" width="224" height="208" rx="18" fill="#03070A"/>
    <ellipse rx="120" ry="60" fill="url(#cneb)" transform="rotate(-24)"/>${dust}${lines}${stars}`;
}
function vArabe() {
  const t = S.tajwid, cq = currentQuarter(), nS = SOURATES.filter(s => S.sourates[s[1]]).length;
  const fat = FATIHA.map((v, vi) => `<div class="verse"><span class="vn">Verset ${vi + 1} <button class="say" data-say="${v.map(w => w[0]).join(' ')}" aria-label="Écouter le verset ${vi + 1}">${SPK} Écouter</button></span><div class="words">${v.map(w => `<button class="w" data-fw><span class="a" lang="ar">${w[0]}</span><span class="f">${esc(w[1])}</span></button>`).join('')}</div></div>`).join('');
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
/* Prononciation : la voix arabe du téléphone (ar-SA). */
const SPK = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"/></svg>';
try { window.speechSynthesis && speechSynthesis.getVoices(); } catch (e) {}
function sayAr(txt) {
  try {
    if (!('speechSynthesis' in window)) { toast('La lecture à voix haute n\'est pas disponible sur cet appareil.'); return; }
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(txt); u.lang = 'ar-SA'; u.rate = .72;
    const v = speechSynthesis.getVoices().find(x => /^ar/i.test(x.lang)); if (v) u.voice = v;
    speechSynthesis.speak(u);
  } catch (e) {}
}
function drawQuiz() {
  const el = $('#quiz'); if (!el || !quiz) return;
  const w = WORDS[quiz.idx], sc = Math.min(3, S.words[quiz.idx] || 0);
  el.innerHTML = `<div class="word" lang="ar">${w[0]}</div>
    <div class="root">${w[2] ? `racine <bdi class="ar" lang="ar">${w[2]}</bdi>` : 'mot-outil'}&ensp;<button class="say" data-say="${w[0]}" aria-label="Écouter la prononciation">${SPK} Écouter</button></div>
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
  $('#ctip').innerHTML = `<span class="ar" lang="ar" style="font-size:1.25rem">${w[0]}</span> · ${esc(w[1])} · <span class="num">${sc}/3</span> <button class="say" data-say="${w[0]}" aria-label="Écouter ${esc(w[1])}">${SPK}</button>`;
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
try { const v = localStorage.getItem('sdp-argent-view'); if (v === 'budget' || v === 'heures' || v === 'zakat') A.view = v; } catch (e) {}
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
  const avail = incTotal + carry - fixTotal - others - sqPlan(incTotal);
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
  const avail = incTotal + carry - fixTotal - L.v - others - sqPlan(incTotal);
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
    <p class="small muted" style="margin:6px 0 0">Après tes charges${sqPlan(b.incTotal) ? ` et ta sadaqa (${eur0(sqPlan(b.incTotal))}, mise de côté d'abord)` : ''}, il reste <b class="num" style="color:var(--ink)">${eur0(Math.max(0, P.avail))}</b> à partager.</p>
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
  const sq = sqOf(ym, incTotal);
  const free = carry + incTotal - fixTotal - saveTotal - debt.val - sq.val;
  const exps = txIn(ym, 'exp'), spent = exps.reduce((a, t) => a + numv(t.amount), 0);
  const byCat = {}; exps.forEach(t => { byCat[t.cat] = (byCat[t.cat] || 0) + numv(t.amount); });
  const cur = todayISO().slice(0, 7), dim = daysIn(ym), today = new Date().getDate();
  const daysLeft = ym === cur ? dim - today + 1 : ym > cur ? dim : 0;
  const elapsed = ym === cur ? (today - 1) / dim : ym < cur ? 1 : 0;
  const reste = free - spent;
  return { plan: P, sq, carry, incomes, extraInc, fromPots, incTotal, fixed, fixTotal, pots, saveTotal, invested, debt, free, spent, byCat, reste, daysLeft, elapsed, dim, exps, envelopes: M.envelopes.map(e => ({ ...e, lim: numv(e.limit), sp: byCat[e.cat] || 0 })) };
}
const isSetUp = () => S.money.incomes.some(i => String(i.amount).trim() !== '') || S.money.fixed.some(f => numv(f.amount) > 0) || Object.values(S.money.months).some(m => m.inc && Object.keys(m.inc).length);

function argentTop(view) {
  const sub = view === 'budget' ? 'Tu donnes et tu te paies d\'abord, le reste est à toi.' : view === 'zakat' ? 'Purifier ton bien, au bon moment.' : 'Chaque heure notée, chaque compteur à jour.';
  return `${pageHead('Argent', sub, view === 'budget' ? 'budget' : view === 'zakat' ? 'zakat' : 'heures')}
  <div class="seg" role="group" aria-label="Section" style="margin-top:20px">
    <button data-aview="budget" aria-pressed="${view === 'budget'}"><span class="dot"></span>Budget</button>
    <button data-aview="heures" aria-pressed="${view === 'heures'}"><span class="dot"></span>Heures</button>
    <button data-aview="zakat" aria-pressed="${view === 'zakat'}"><span class="dot"></span>Zakat</button>
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

  ${vSadaqa(b, ym)}
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
  const ym = A.month, rows = S.money.tx.filter(t => t.date.startsWith(ym) && t.kind !== 'sadaqa').sort((a, b) => a.date.localeCompare(b.date));
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
      <div class="cell"><label for="mSq">Part de sadaqa<span class="small muted" style="display:block">en % de chaque revenu reçu, mise de côté avant le reste (0 pour désactiver)</span></label><input class="r" id="mSq" inputmode="decimal" value="${esc(String(sqConf().pct).replace('.', ','))}"><span class="unit">%</span></div>
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
try { const v = localStorage.getItem('sdp-foi-view'); if (v === 'habitudes' || v === 'arabe' || v === 'dhikr' || v === 'coeur') F.view = v; } catch (e) {}
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
  return `${pageHead('Foi', view === 'arabe' ? 'Le sens de ce que tu lis. Tajwid Institut s\'occupe de la lecture.' : view === 'dhikr' ? 'C\'est par l\'évocation d\'Allah que les cœurs s\'apaisent.' : view === 'coeur' ? 'Les compétences du croyant, une à la fois, jusqu\'à ce qu\'elles s\'ancrent.' : 'La régularité avant tout. Chaque prière à l\'heure compte.', view === 'arabe' ? 'arabe' : view === 'dhikr' ? 'dhikr' : view === 'coeur' ? 'coeur' : 'foi')}
  <div class="seg" role="group" aria-label="Section" style="margin-top:20px">
    <button data-fview="habitudes" aria-pressed="${view === 'habitudes'}"><span class="dot"></span>Pratique</button>
    <button data-fview="arabe" aria-pressed="${view === 'arabe'}"><span class="dot"></span>Arabe</button>
    <button data-fview="coeur" aria-pressed="${view === 'coeur'}"><span class="dot"></span>Cœur</button>
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
const FOODS = [['Œufs ×3', 19, 'egg'], ['Skyr 150 g', 15, 'dairy'], ['Fromage blanc 200 g', 15, 'dairy'], ['Cottage cheese 200 g', 22, 'dairy'], ['Whey, 1 dose', 24, 'dairy'], ['Lait 250 ml', 8, 'dairy'], ['Emmental 30 g', 8, 'dairy'],
  ['Lentilles cuites 200 g', 18, 'plant'], ['Pois chiches cuits 200 g', 16, 'plant'], ['Haricots rouges cuits 200 g', 17, 'plant'], ['Tofu ferme 150 g', 20, 'plant'], ['Tempeh 100 g', 19, 'plant'], ['Seitan 100 g', 25, 'plant'], ['Protéines de soja texturées 50 g', 25, 'plant'], ['Edamame 150 g', 17, 'plant'], ['Houmous 100 g', 8, 'plant'],
  ['Flocons d\'avoine 80 g', 10, 'plant'], ['Pain complet, 2 tranches', 7, 'plant'], ['Pâtes complètes cuites 200 g', 10, 'plant'], ['Quinoa cuit 200 g', 9, 'plant'], ['Beurre de cacahuète 30 g', 8, 'plant'], ['Graines de courge 30 g', 9, 'plant'], ['Amandes 30 g', 6, 'plant'],
  ['Thon, 1 boîte', 28, 'fish'], ['Sardines, 1 boîte', 22, 'fish'], ['Poisson blanc 150 g', 30, 'fish'], ['Saumon 125 g', 25, 'fish']];
const FITRA = [['ongles', 'Ongles'], ['moustache', 'Moustache'], ['aisselles', 'Aisselles'], ['pubis', 'Poils intimes']];
const FITRA_MAX = 40;
const C = { view: 'entrainement', edit: false, allFoods: false, nv: (() => { try { return localStorage.getItem('sdp-nv') || 'jour'; } catch (e) { return 'jour'; } })() };
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
/* =====================================================================
   NUTRITION SANS VIANDE — quota de protéines, semaine de repas, courses
   S.body.diet = { egg, dairy, fish } (la viande n'est plus proposée).
   S.body.mp = { portions, custom[], wk{ lundi: { s{ 'j-moment': id }, extra[], got{} } } }
   ===================================================================== */
const DIET_FAM = { egg: 'Œufs', dairy: 'Laitages', fish: 'Poisson' };
function diet() { const d = S.body.diet = S.body.diet && typeof S.body.diet === 'object' ? S.body.diet : { egg: true, dairy: true, fish: false }; return d; }
const foodsAllowed = () => FOODS.filter(f => f[2] === 'plant' || diet()[f[2]]);
/* Combinaisons de 1 à 3 aliments autorisés pour finir le quota, variées par aliment principal. */
function protCombos(rem) {
  const L = foodsAllowed().filter(f => f[1] >= 6), out = [];
  for (let i = 0; i < L.length; i++) for (let j = i; j < L.length; j++) for (let k = j; k < L.length; k++) {
    const set = [...new Set([i, j, k])].map(x => L[x]), s = set.reduce((a, f) => a + f[1], 0);
    if (s >= rem) out.push({ set, s, cost: (s - rem) + set.length * 4 });
  }
  out.sort((a, b) => a.cost - b.cost);
  const seen = new Set(), pick = [];
  for (const o of out) { const main = o.set.slice().sort((a, b) => b[1] - a[1])[0][0]; if (seen.has(main)) continue; seen.add(main); pick.push(o); if (pick.length === 3) break; }
  return pick;
}
function addFoods(list) {
  const k = todayISO(), d = S.body.food[k] = S.body.food[k] || { p: 0, water: 0, log: [] }, before = d.p;
  list.forEach(f => { d.log.push([f[0], f[1]]); S.body.fcount[f[0]] = (S.body.fcount[f[0]] || 0) + 1; });
  d.p = d.log.reduce((m, x) => m + x[1], 0); save(); const sy = window.scrollY; render(); window.scrollTo(0, sy);
  const t = bodyTargets(); if (t && d.p >= t.prot && before < t.prot) reward(4, { big: true, msg: [`Protéines atteintes · ${d.p} g`, 'Sans viande, et ton corps a de quoi construire aujourd\'hui.'] }); else toast(`+${d.p - before} g de protéines`);
}
function dietBlock(t, p) {
  const d = diet(), rem = Math.max(0, t.prot - p), next = Math.min(rem, Math.max(20, Math.round(t.prot / 4 / 5) * 5)), combos = rem ? protCombos(next) : [];
  return `<section><div class="row between" style="align-items:flex-end"><h2 style="margin:0">Sans viande</h2><p class="small muted" style="margin:0">ce que tu manges</p></div>
    <div class="chips" style="margin-top:10px">${Object.entries(DIET_FAM).map(([k, l]) => `<button class="chip" data-diet="${k}" aria-pressed="${!!d[k]}">${l}</button>`).join('')}</div>
    ${rem ? `<p class="small" style="margin:14px 0 8px">${rem > next ? `Il te reste <b>${rem} g</b> aujourd'hui. <b>Pour ta prochaine prise</b> (environ ${next} g), au choix :` : `<b>Pour finir tes ${rem} g aujourd'hui</b>, au choix :`}</p>
      <div class="pcombo">${combos.map(o => `<button data-fcombo="${o.set.map(f => esc(f[0])).join('|')}"><span>${o.set.map(f => esc(f[0])).join(' + ')}</span><b class="num">+${o.s} g</b></button>`).join('')}</div>` : '<p class="small" style="margin:12px 0 0;color:var(--mint)">Quota atteint aujourd\'hui, sans viande.</p>'}
    <details class="hadv"><summary>Atteindre ${t.prot} g sans viande</summary>
      <p class="small">Une source riche à chaque prise, pas seulement au déjeuner : œufs ou laitages le matin, légumineuses et soja à midi et le soir, skyr, fromage blanc ou whey en collation.</p>
      <p class="small">Les plus concentrés : seitan, protéines de soja texturées, tempeh, tofu, whey, cottage cheese, skyr. Les légumineuses (lentilles, pois chiches, haricots) apportent aussi fibres et fer.</p>
      <p class="small">Légumineuses et céréales se complètent : lentilles et riz, houmous et pain, haricots et maïs donnent ensemble des protéines complètes.</p>
      <p class="small">Le fer végétal passe mieux avec de la vitamine C (citron, poivron, kiwi) et loin du thé ou du café. La vitamine B12 vient surtout des œufs, des laitages et du poisson : un bilan sanguin de temps en temps permet de vérifier que tout va bien.</p></details></section>`;
}
/* ---------- Ma semaine de repas ---------- */
const R_ = (n, p, fam, need, ing) => ({ n, p, fam, need, ing });
const RECIPES = {
  tacos: R_('Tacos français au haché végétal', 38, ['simili', 'laitier'], ['dairy'], [['Grandes tortillas', 1, '', 'Épicerie'], ['Haché végétal', 120, 'g', 'Frais'], ['Frites au four', 150, 'g', 'Surgelés'], ['Cheddar râpé', 30, 'g', 'Frais'], ['Crème fraîche', 30, 'g', 'Frais'], ['Tomate', 1, '', 'Fruits et légumes'], ['Salade', 30, 'g', 'Fruits et légumes']]),
  smash: R_('Smash burger végétal', 32, ['simili', 'laitier'], ['dairy'], [['Pains burger', 1, '', 'Épicerie'], ['Haché végétal', 120, 'g', 'Frais'], ['Cheddar en tranches', 1, 'tranche', 'Frais'], ['Oignon', 0.25, '', 'Fruits et légumes'], ['Cornichons', 2, '', 'Épicerie'], ['Sauce burger', 1, 'c. à s.', 'Épicerie'], ['Tomate', 0.5, '', 'Fruits et légumes'], ['Salade', 20, 'g', 'Fruits et légumes']]),
  nuggets: R_('Bucket nuggets veggie et potatoes', 27, ['simili', 'laitier'], ['dairy'], [['Nuggets végétaux', 150, 'g', 'Surgelés'], ['Potatoes', 200, 'g', 'Surgelés'], ['Chou blanc', 100, 'g', 'Fruits et légumes'], ['Yaourt nature', 50, 'g', 'Frais'], ['Sauce barbecue', 1, 'c. à s.', 'Épicerie'], ['Carotte', 1, '', 'Fruits et légumes']]),
  wrap: R_('Wrap nuggets, sauce ranch', 28, ['simili', 'laitier'], ['dairy'], [['Grandes tortillas', 1, '', 'Épicerie'], ['Nuggets végétaux', 120, 'g', 'Surgelés'], ['Cheddar râpé', 20, 'g', 'Frais'], ['Salade', 30, 'g', 'Fruits et légumes'], ['Tomate', 1, '', 'Fruits et légumes'], ['Yaourt nature', 50, 'g', 'Frais']]),
  kebab: R_('Kebab d\'émincés végétaux, sauce blanche', 35, ['simili', 'laitier'], ['dairy'], [['Pains pita', 1, '', 'Épicerie'], ['Émincés végétaux', 150, 'g', 'Frais'], ['Yaourt nature', 60, 'g', 'Frais'], ['Oignon rouge', 0.25, '', 'Fruits et légumes'], ['Tomate', 1, '', 'Fruits et légumes'], ['Salade', 30, 'g', 'Fruits et légumes']]),
  fajitas: R_('Fajitas aux émincés végétaux', 34, ['simili'], [], [['Tortillas', 2, '', 'Épicerie'], ['Émincés végétaux', 130, 'g', 'Frais'], ['Poivron', 1, '', 'Fruits et légumes'], ['Oignon', 0.5, '', 'Fruits et légumes'], ['Épices fajitas', 1, 'c. à c.', 'Épicerie'], ['Courgette', 0.5, '', 'Fruits et légumes']]),
  chili: R_('Chili sin carne express', 34, ['simili', 'leg'], [], [['Haché végétal', 100, 'g', 'Frais'], ['Haricots rouges cuits', 150, 'g', 'Épicerie'], ['Tomates concassées', 200, 'g', 'Épicerie'], ['Riz', 60, 'g', 'Épicerie'], ['Poivron', 0.5, '', 'Fruits et légumes'], ['Oignon', 0.5, '', 'Fruits et légumes']]),
  bolo: R_('Pâtes bolognaise végétale', 34, ['simili', 'cereale'], ['dairy'], [['Pâtes', 100, 'g', 'Épicerie'], ['Haché végétal', 100, 'g', 'Frais'], ['Sauce tomate', 150, 'g', 'Épicerie'], ['Parmesan', 15, 'g', 'Frais'], ['Courgette', 0.5, '', 'Fruits et légumes'], ['Carotte', 0.5, '', 'Fruits et légumes']]),
  thon: R_('Pâtes au thon et à la tomate', 40, ['poisson', 'cereale'], ['fish'], [['Pâtes', 100, 'g', 'Épicerie'], ['Thon en boîte', 1, 'boîte', 'Épicerie'], ['Sauce tomate', 150, 'g', 'Épicerie'], ['Courgette', 0.5, '', 'Fruits et légumes']]),
  pizza: R_('Pizza maison au haché végétal', 31, ['simili', 'laitier'], ['dairy'], [['Pâte à pizza', 0.5, '', 'Frais'], ['Mozzarella', 60, 'g', 'Frais'], ['Haché végétal', 60, 'g', 'Frais'], ['Sauce tomate', 60, 'g', 'Épicerie'], ['Poivron', 0.5, '', 'Fruits et légumes'], ['Champignons', 50, 'g', 'Fruits et légumes'], ['Tomates cerises', 50, 'g', 'Fruits et légumes']]),
  keftas: R_('Keftas végétales en sauce tomate et œuf', 32, ['simili', 'oeuf'], ['egg'], [['Haché végétal', 120, 'g', 'Frais'], ['Sauce tomate', 150, 'g', 'Épicerie'], ['Œufs', 1, '', 'Frais'], ['Persil', 0.25, 'bouquet', 'Fruits et légumes'], ['Cumin', 1, 'c. à c.', 'Épicerie'], ['Courgette', 0.5, '', 'Fruits et légumes']]),
  couscous: R_('Couscous aux merguez végétales', 26, ['simili'], [], [['Merguez végétales', 2, '', 'Frais'], ['Semoule', 70, 'g', 'Épicerie'], ['Courgette', 0.5, '', 'Fruits et légumes'], ['Carotte', 1, '', 'Fruits et légumes'], ['Poivron', 0.5, '', 'Fruits et légumes']]),
  hachis: R_('Hachis parmentier végétal', 32, ['simili', 'laitier'], ['dairy'], [['Haché végétal', 120, 'g', 'Frais'], ['Purée en flocons', 50, 'g', 'Épicerie'], ['Lait', 150, 'ml', 'Frais'], ['Emmental râpé', 30, 'g', 'Frais'], ['Carotte', 1, '', 'Fruits et légumes']]),
  quesa: R_('Quesadillas haricots noirs et cheddar', 33, ['leg', 'laitier'], ['dairy'], [['Tortillas', 2, '', 'Épicerie'], ['Haricots noirs cuits', 150, 'g', 'Épicerie'], ['Cheddar râpé', 40, 'g', 'Frais'], ['Salsa', 2, 'c. à s.', 'Épicerie'], ['Poivron', 0.5, '', 'Fruits et légumes'], ['Tomate', 0.5, '', 'Fruits et légumes']]),
  shak: R_('Shakshuka à la feta', 31, ['oeuf', 'laitier'], ['egg', 'dairy'], [['Œufs', 3, '', 'Frais'], ['Sauce tomate', 200, 'g', 'Épicerie'], ['Poivron', 1, '', 'Fruits et légumes'], ['Feta', 30, 'g', 'Frais'], ['Pain', 2, 'tranches', 'Épicerie'], ['Oignon', 0.5, '', 'Fruits et légumes'], ['Courgette', 0.5, '', 'Fruits et légumes']]),
  omelette: R_('Omelette pommes de terre et fromage', 30, ['oeuf', 'laitier'], ['egg', 'dairy'], [['Œufs', 3, '', 'Frais'], ['Pommes de terre', 150, 'g', 'Fruits et légumes'], ['Emmental râpé', 30, 'g', 'Frais'], ['Poivron', 0.5, '', 'Fruits et légumes'], ['Oignon', 0.25, '', 'Fruits et légumes']]),
  brouille: R_('Œufs brouillés au cottage cheese sur toast', 37, ['oeuf', 'laitier'], ['egg', 'dairy'], [['Œufs', 3, '', 'Frais'], ['Cottage cheese', 100, 'g', 'Frais'], ['Pain complet', 2, 'tranches', 'Épicerie']]),
  skyrbol: R_('Bol skyr, granola et beurre de cacahuète', 30, ['laitier'], ['dairy'], [['Skyr', 200, 'g', 'Frais'], ['Granola', 40, 'g', 'Épicerie'], ['Beurre de cacahuète', 20, 'g', 'Épicerie'], ['Banane', 1, '', 'Fruits et légumes']]),
  mousse: R_('Mousse chocolat au skyr', 21, ['laitier'], ['dairy'], [['Skyr', 200, 'g', 'Frais'], ['Cacao en poudre', 1, 'c. à s.', 'Épicerie'], ['Miel', 1, 'c. à s.', 'Épicerie']]),
  macncheese: R_('Mac and cheese au haché végétal', 38, ['simili', 'laitier'], ['dairy'], [['Pâtes coudes', 100, 'g', 'Épicerie'], ['Cheddar râpé', 50, 'g', 'Frais'], ['Lait', 100, 'ml', 'Frais'], ['Crème fraîche', 30, 'g', 'Frais'], ['Haché végétal', 60, 'g', 'Frais'], ['Brocoli', 100, 'g', 'Surgelés']]),
  gratin: R_('Gratin de pâtes crème-fromage au haché végétal', 37, ['simili', 'laitier'], ['dairy'], [['Pâtes', 100, 'g', 'Épicerie'], ['Haché végétal', 80, 'g', 'Frais'], ['Crème fraîche', 40, 'g', 'Frais'], ['Emmental râpé', 40, 'g', 'Frais'], ['Courgette', 1, '', 'Fruits et légumes']]),
  carbo: R_('Carbonara végétale (crème, œuf, parmesan)', 33, ['simili', 'oeuf', 'laitier'], ['egg', 'dairy'], [['Pâtes', 100, 'g', 'Épicerie'], ['Lardons végétaux', 50, 'g', 'Frais'], ['Œufs', 1, '', 'Frais'], ['Parmesan', 20, 'g', 'Frais'], ['Crème fraîche', 30, 'g', 'Frais'], ['Champignons', 60, 'g', 'Fruits et légumes']]),
  alfredo: R_('Pâtes Alfredo aux émincés végétaux', 38, ['simili', 'laitier'], ['dairy'], [['Pâtes', 100, 'g', 'Épicerie'], ['Émincés végétaux', 100, 'g', 'Frais'], ['Crème fraîche', 50, 'g', 'Frais'], ['Parmesan', 20, 'g', 'Frais'], ['Ail', 1, 'gousse', 'Fruits et légumes'], ['Épinards', 50, 'g', 'Surgelés'], ['Champignons', 50, 'g', 'Fruits et légumes']]),
  champi: R_('Émincés végétaux à la crème et aux champignons, riz', 34, ['simili', 'laitier'], ['dairy'], [['Émincés végétaux', 150, 'g', 'Frais'], ['Crème fraîche', 50, 'g', 'Frais'], ['Champignons', 100, 'g', 'Fruits et légumes'], ['Riz', 60, 'g', 'Épicerie'], ['Haricots verts', 100, 'g', 'Surgelés']]),
  lasagnes: R_('Lasagnes végétales à la béchamel', 33, ['simili', 'laitier'], ['dairy'], [['Feuilles de lasagne', 60, 'g', 'Épicerie'], ['Haché végétal', 100, 'g', 'Frais'], ['Sauce tomate', 120, 'g', 'Épicerie'], ['Lait', 100, 'ml', 'Frais'], ['Farine', 10, 'g', 'Épicerie'], ['Mozzarella', 40, 'g', 'Frais'], ['Courgette', 0.5, '', 'Fruits et légumes'], ['Aubergine', 0.5, '', 'Fruits et légumes']]),
  tartif: R_('Tartiflette aux lardons végétaux', 26, ['simili', 'laitier'], ['dairy'], [['Pommes de terre', 250, 'g', 'Fruits et légumes'], ['Reblochon', 60, 'g', 'Frais'], ['Crème fraîche', 40, 'g', 'Frais'], ['Lardons végétaux', 50, 'g', 'Frais'], ['Oignon', 0.5, '', 'Fruits et légumes'], ['Salade', 40, 'g', 'Fruits et légumes']]),
  raclette: R_('Raclette au four, pommes de terre', 27, ['laitier'], ['dairy'], [['Pommes de terre', 250, 'g', 'Fruits et légumes'], ['Fromage à raclette', 100, 'g', 'Frais'], ['Cornichons', 4, '', 'Épicerie'], ['Salade', 40, 'g', 'Fruits et légumes']]),
  quiche: R_('Quiche fromage et épinards', 28, ['oeuf', 'laitier'], ['egg', 'dairy'], [['Pâte brisée', 0.25, '', 'Frais'], ['Œufs', 2, '', 'Frais'], ['Crème fraîche', 50, 'g', 'Frais'], ['Emmental râpé', 40, 'g', 'Frais'], ['Épinards', 60, 'g', 'Surgelés'], ['Salade', 40, 'g', 'Fruits et légumes']]),
  burrito: R_('Burritos gratinés au cheddar', 35, ['simili', 'laitier'], ['dairy'], [['Grandes tortillas', 1, '', 'Épicerie'], ['Haché végétal', 100, 'g', 'Frais'], ['Riz', 40, 'g', 'Épicerie'], ['Cheddar râpé', 40, 'g', 'Frais'], ['Salsa', 2, 'c. à s.', 'Épicerie'], ['Poivron', 0.5, '', 'Fruits et légumes'], ['Maïs', 40, 'g', 'Épicerie']]),
  croque: R_('Croque-madame gratiné', 26, ['oeuf', 'laitier'], ['egg', 'dairy'], [['Pain de mie', 2, 'tranches', 'Épicerie'], ['Emmental râpé', 40, 'g', 'Frais'], ['Œufs', 1, '', 'Frais'], ['Crème fraîche', 20, 'g', 'Frais'], ['Salade', 40, 'g', 'Fruits et légumes'], ['Tomate', 1, '', 'Fruits et légumes']]),
  saumoncreme: R_('Pâtes au saumon et à la crème', 33, ['poisson', 'laitier'], ['fish', 'dairy'], [['Pâtes', 100, 'g', 'Épicerie'], ['Saumon', 100, 'g', 'Frais'], ['Crème fraîche', 40, 'g', 'Frais'], ['Citron', 0.25, '', 'Fruits et légumes'], ['Courgette', 0.5, '', 'Fruits et légumes']]),
  salriz: R_('Salade de riz, œufs et emmental', 24, ['salade', 'oeuf', 'laitier'], ['egg', 'dairy'], [['Riz', 70, 'g', 'Épicerie'], ['Œufs', 1, '', 'Frais'], ['Emmental en dés', 40, 'g', 'Frais'], ['Maïs', 50, 'g', 'Épicerie'], ['Tomate', 1, '', 'Fruits et légumes'], ['Poivron', 0.5, '', 'Fruits et légumes'], ['Olives', 20, 'g', 'Épicerie']]),
  salpates: R_('Salade de pâtes pesto, mozzarella et tomates cerises', 27, ['salade', 'laitier'], ['dairy'], [['Pâtes', 90, 'g', 'Épicerie'], ['Mozzarella', 80, 'g', 'Frais'], ['Tomates cerises', 100, 'g', 'Fruits et légumes'], ['Pesto', 1, 'c. à s.', 'Épicerie'], ['Roquette', 20, 'g', 'Fruits et légumes']]),
  nicoise: R_('Salade niçoise aux œufs', 25, ['salade', 'oeuf'], ['egg'], [['Œufs', 3, '', 'Frais'], ['Pommes de terre', 150, 'g', 'Fruits et légumes'], ['Haricots verts', 100, 'g', 'Surgelés'], ['Tomate', 1, '', 'Fruits et légumes'], ['Poivron', 0.5, '', 'Fruits et légumes'], ['Olives', 20, 'g', 'Épicerie'], ['Salade', 40, 'g', 'Fruits et légumes']]),
  nicoisethon: R_('Salade niçoise au thon', 45, ['salade', 'poisson', 'oeuf'], ['fish', 'egg'], [['Thon en boîte', 1, 'boîte', 'Épicerie'], ['Œufs', 2, '', 'Frais'], ['Pommes de terre', 150, 'g', 'Fruits et légumes'], ['Haricots verts', 100, 'g', 'Surgelés'], ['Tomate', 1, '', 'Fruits et légumes'], ['Olives', 20, 'g', 'Épicerie'], ['Salade', 40, 'g', 'Fruits et légumes']]),
  grecque: R_('Salade grecque à la feta, pain pita', 22, ['salade', 'laitier'], ['dairy'], [['Feta', 80, 'g', 'Frais'], ['Concombre', 0.5, '', 'Fruits et légumes'], ['Tomate', 1, '', 'Fruits et légumes'], ['Poivron', 0.5, '', 'Fruits et légumes'], ['Oignon rouge', 0.25, '', 'Fruits et légumes'], ['Olives', 20, 'g', 'Épicerie'], ['Pains pita', 1, '', 'Épicerie']]),
  cesar: R_('Salade César aux nuggets veggie', 27, ['salade', 'simili', 'laitier'], ['dairy'], [['Nuggets végétaux', 120, 'g', 'Surgelés'], ['Salade romaine', 80, 'g', 'Fruits et légumes'], ['Parmesan', 20, 'g', 'Frais'], ['Croûtons', 20, 'g', 'Épicerie'], ['Yaourt nature', 40, 'g', 'Frais'], ['Tomates cerises', 60, 'g', 'Fruits et légumes']]),
  sallent: R_('Salade de lentilles, feta et poivrons', 24, ['salade', 'leg', 'laitier'], ['dairy'], [['Lentilles vertes cuites', 200, 'g', 'Épicerie'], ['Feta', 40, 'g', 'Frais'], ['Poivron', 0.5, '', 'Fruits et légumes'], ['Tomate', 1, '', 'Fruits et légumes'], ['Oignon rouge', 0.25, '', 'Fruits et légumes']]),
  mexicaine: R_('Salade mexicaine haricots rouges, maïs et cheddar', 22, ['salade', 'leg', 'laitier'], ['dairy'], [['Haricots rouges cuits', 150, 'g', 'Épicerie'], ['Maïs', 60, 'g', 'Épicerie'], ['Cheddar râpé', 30, 'g', 'Frais'], ['Tomate', 1, '', 'Fruits et légumes'], ['Poivron', 0.5, '', 'Fruits et légumes'], ['Avocat', 0.5, '', 'Fruits et légumes']]),
  piemontaise: R_('Piémontaise aux œufs et fromage', 26, ['salade', 'oeuf', 'laitier'], ['egg', 'dairy'], [['Pommes de terre', 150, 'g', 'Fruits et légumes'], ['Œufs', 2, '', 'Frais'], ['Emmental en dés', 40, 'g', 'Frais'], ['Cornichons', 3, '', 'Épicerie'], ['Tomate', 1, '', 'Fruits et légumes'], ['Crème fraîche', 20, 'g', 'Frais']])
};
const FAML = { salade: 'salades', simili: 'simili-carné', leg: 'légumineuses', soja: 'soja', oeuf: 'œufs', laitier: 'laitages', poisson: 'poisson', cereale: 'céréales complètes', ble: 'seitan' };
const MOM = [['m', 'Matin'], ['d', 'Midi'], ['s', 'Soir']];
const MP = { off: 0, pick: null, form: false };
function mp() { const m = S.body.mp = S.body.mp && typeof S.body.mp === 'object' ? S.body.mp : {}; if (!m.nv1) { m.nv1 = 1; C.nv = 'semaine'; try { localStorage.setItem('sdp-nv', 'semaine'); } catch (e) {} } if (!m.p2) { m.portions = 2; m.p2 = 1; } m.portions = m.portions || 2; m.custom = Array.isArray(m.custom) ? m.custom : []; m.wk = m.wk || {}; return m; }
const mpWeekKey = () => iso(addDays(mondayOf(new Date()), MP.off * 7));
function mpWeek(k = mpWeekKey()) { const w = mp().wk[k] = mp().wk[k] || {}; w.s = w.s || {}; w.extra = w.extra || []; w.got = w.got || {}; w.gum = w.gum || {}; return w; }
const recOk = r => r.need.every(n => diet()[n]);
const recOf = id => RECIPES[id] || (() => { const c = mp().custom.find(x => x.id === id); return c ? { n: c.n, p: Number(c.p) || 0, fam: [], need: [], ing: c.ing.split(/\n|,/).map(s => s.trim()).filter(Boolean).map(s => [s, '', '', 'Mes idées']), custom: true } : null; })();
function mpShopping(w) {
  const P = mp().portions, map = new Map();
  const addI = ([n, q, u, ray], mult) => { const key = n + '|' + u; const o = map.get(key) || { n, u, q: 0, ray, cnt: 0 }; if (q !== '') o.q += q * mult; o.cnt++; map.set(key, o); };
  Object.values(w.s).forEach(id => { const r = recOf(id); if (r) r.ing.forEach(i => addI(i, P)); });
  Object.entries(w.gum || {}).forEach(([id, n]) => { const gm = GUMMIES[id]; if (gm && n > 0) gm.ing.forEach(i => addI(i, n)); });
  const fmt = o => { if (o.q === '' || o.q === 0) return o.cnt > 1 ? `×${o.cnt}` : ''; if (o.u === 'g' || o.u === 'ml') return o.q >= 1000 ? `${String(Math.round(o.q / 100) / 10).replace('.', ',')} ${o.u === 'g' ? 'kg' : 'L'}` : `${Math.round(o.q / 10) * 10} ${o.u}`; const n = Math.ceil(o.q * 2) / 2; return `${String(n).replace('.', ',')}${o.u ? ' ' + o.u : ''}`; };
  const groups = {}; [...map.values()].forEach(o => { (groups[o.ray] = groups[o.ray] || []).push({ ...o, txt: fmt(o) }); });
  return groups;
}
function mpAdvice(w, t) {
  const ids = Object.values(w.s), recs = ids.map(recOf).filter(Boolean), out = [];
  if (!recs.length) return ['Commence par 3 ou 4 repas : l\'app te dira ensuite ce qui manque.'];
  const prot = recs.reduce((a, r) => a + r.p, 0), dPlan = new Set(Object.keys(w.s).map(s => s.split('-')[0])).size || 1, perDay = Math.round(prot / dPlan);
  if (t) out.push(`Les jours où tu as prévu des repas, ils apportent environ <b>${perDay} g</b> de protéines, sur ${t.prot} g. ${perDay < t.prot ? `Complète avec environ ${t.prot - perDay} g au petit-déjeuner et en collation (skyr, œufs, whey, cottage cheese).` : 'Ton quota est couvert par tes repas.'}`);
  const fam = new Set(recs.flatMap(r => r.fam)), leg = recs.filter(r => r.fam.includes('leg')).length;
  out.push(fam.size >= 4 ? `Belle diversité : ${[...fam].map(f => FAML[f]).join(', ')}.` : `Peu de sources différentes (${[...fam].map(f => FAML[f]).join(', ') || 'aucune'}). Vise au moins 4 familles dans la semaine pour couvrir tous les acides aminés et minéraux.`);
  out.push(leg >= 3 ? `${leg} repas avec des légumineuses : parfait pour les fibres et le fer.` : `Seulement ${leg} repas avec des légumineuses : vise au moins 3 dans la semaine (chili, quesadillas…).`);
  const sim = recs.filter(r => r.fam.includes('simili')).length; if (sim > 5) out.push(`${sim} repas avec des simili-carnés : très pratiques, mais transformés et salés. Alterne avec du tofu, des œufs ou des légumineuses.`);
  const veg = new Set(recs.flatMap(r => r.ing.filter(i => i[3] === 'Fruits et légumes').map(i => i[0])));
  out.push(veg.size >= 8 ? `${veg.size} fruits et légumes différents : bien varié.` : `${veg.size} fruits et légumes différents seulement : ajoute des couleurs (au moins 8 dans la semaine).`);
  const cnt = {}; ids.forEach(id => { cnt[id] = (cnt[id] || 0) + 1; }); const rep = Object.entries(cnt).filter(([, n]) => n > 2);
  if (rep.length) out.push(`${rep.map(([id, n]) => `« ${recOf(id).n} » revient ${n} fois`).join(', ')} : pratique pour cuisiner en avance, mais varie un peu.`);
  if (diet().fish) { const f = recs.filter(r => r.fam.includes('poisson')).length; out.push(f >= 2 ? 'Poisson deux fois dans la semaine : c\'est la recommandation.' : 'Les repères conseillent le poisson deux fois par semaine, dont un gras (saumon, sardines).'); }
  const empty = 21 - ids.length; if (empty > 7) out.push(`${empty} cases vides : pas besoin de tout prévoir, mais planifier les midis et les soirs facilite les courses.`);
  return out;
}
/* ---------- Gummies maison (agar-agar : végétal, halal, sans gélatine) ---------- */
const GUM_STEPS = ['Dans une casserole, mélange à froid le liquide et l\'agar-agar.', 'Porte à ébullition et laisse bouillir 1 à 2 minutes en remuant : c\'est ce qui active l\'agar-agar.', 'Hors du feu, ajoute le miel et les ingrédients fragiles (poudres, vitamines naturelles).', 'Verse vite dans un moule en silicone : l\'agar-agar prend dès 40 °C.', 'Au frigo 30 minutes, démoule, garde au frais dans une boîte fermée, 5 à 7 jours.'];
const G_ = (n, cat, tag, ing, tip, need) => ({ n, cat, tag, ing, tip, need: need || [] });
const GUMMIES = {
  vitc: G_('Orange et acérola', 'Vitamines', 'Vitamine C', [['Jus d\'orange', 250, 'ml', 'Frais'], ['Poudre d\'acérola', 1, 'c. à c.', 'Épicerie'], ['Miel', 2, 'c. à s.', 'Épicerie'], ['Agar-agar', 4, 'g', 'Épicerie']], 'L\'acérola est une des sources naturelles les plus riches en vitamine C. Ajoute-la hors du feu : la chaleur la détruit en partie.'),
  kiwi: G_('Kiwi, orange et citron', 'Vitamines', 'Soutien du collagène', [['Kiwi', 2, '', 'Fruits et légumes'], ['Jus d\'orange', 150, 'ml', 'Frais'], ['Citron', 1, '', 'Fruits et légumes'], ['Miel', 2, 'c. à s.', 'Épicerie'], ['Agar-agar', 4, 'g', 'Épicerie']], 'Le collagène lui-même vient toujours d\'animaux (bœuf ou poisson). Ici, pas de collagène, mais beaucoup de vitamine C : ton corps en a besoin pour fabriquer son propre collagène.'),
  collag: G_('Collagène marin et agrumes', 'Vitamines', 'Collagène', [['Collagène marin en poudre (halal)', 20, 'g', 'Épicerie'], ['Jus d\'orange', 200, 'ml', 'Frais'], ['Citron', 1, '', 'Fruits et légumes'], ['Miel', 2, 'c. à s.', 'Épicerie'], ['Agar-agar', 4, 'g', 'Épicerie']], 'Le collagène marin vient de peaux et d\'arêtes de poisson. Choisis-le certifié halal, et ajoute-le hors du feu, à 60 °C environ.', ['fish']),
  grenade: G_('Grenade et citron', 'Plaisir', 'Antioxydants', [['Jus de grenade', 250, 'ml', 'Frais'], ['Citron', .5, '', 'Fruits et légumes'], ['Miel', 2, 'c. à s.', 'Épicerie'], ['Agar-agar', 4, 'g', 'Épicerie']], 'Un jus 100 % grenade, sans sucre ajouté : il est déjà assez doux.'),
  fraise: G_('Fraise et citron', 'Plaisir', 'Bonbon', [['Fraises', 200, 'g', 'Fruits et légumes'], ['Citron', .5, '', 'Fruits et légumes'], ['Miel', 3, 'c. à s.', 'Épicerie'], ['Agar-agar', 4, 'g', 'Épicerie']], 'Mixe les fraises avec le jus de citron avant de chauffer. Hors saison, les fraises surgelées font très bien l\'affaire.'),
  mangue: G_('Mangue et passion', 'Plaisir', 'Bonbon', [['Purée de mangue', 200, 'g', 'Épicerie'], ['Fruit de la passion', 2, '', 'Fruits et légumes'], ['Miel', 2, 'c. à s.', 'Épicerie'], ['Agar-agar', 4, 'g', 'Épicerie']], 'Garde quelques graines de passion dans le mélange : joli et croquant.'),
  sour: G_('Acidulés citron vert', 'Plaisir', 'Bonbon acidulé', [['Citron vert', 3, '', 'Fruits et légumes'], ['Jus de pomme', 150, 'ml', 'Frais'], ['Sucre', 60, 'g', 'Épicerie'], ['Acide citrique', 1, 'c. à c.', 'Épicerie'], ['Agar-agar', 4, 'g', 'Épicerie']], 'Pour l\'effet acidulé : roule les gummies démoulés dans un mélange de 2 c. à s. de sucre et 1/2 c. à c. d\'acide citrique.'),
  pomme: G_('Pomme et cannelle', 'Plaisir', 'Goûter', [['Jus de pomme', 250, 'ml', 'Frais'], ['Cannelle', 1, 'c. à c.', 'Épicerie'], ['Miel', 1, 'c. à s.', 'Épicerie'], ['Agar-agar', 4, 'g', 'Épicerie']], 'Doux et réconfortant, parfait pour un goûter d\'automne.'),
  dattes: G_('Dattes et lait d\'amande', 'Énergie', 'Iftar', [['Sirop de dattes', 3, 'c. à s.', 'Épicerie'], ['Lait d\'amande', 250, 'ml', 'Frais'], ['Cannelle', .5, 'c. à c.', 'Épicerie'], ['Agar-agar', 4, 'g', 'Épicerie']], 'Une bouchée sucrée naturellement, idéale à la rupture du jeûne avec un verre d\'eau.'),
  energie: G_('Café, cacao et miel', 'Énergie', 'Coup de fouet', [['Café expresso', 150, 'ml', 'Épicerie'], ['Lait d\'amande', 100, 'ml', 'Frais'], ['Cacao en poudre', 1, 'c. à s.', 'Épicerie'], ['Miel', 3, 'c. à s.', 'Épicerie'], ['Agar-agar', 4, 'g', 'Épicerie']], 'Il y a de la caféine : 2 ou 3 gummies, pas le soir. Un bon remontant avant une longue soirée à la pizzeria.'),
  gingembre: G_('Gingembre, citron et miel', 'Énergie', 'Tonus et gorge', [['Gingembre frais', 20, 'g', 'Fruits et légumes'], ['Citron', 2, '', 'Fruits et légumes'], ['Miel', 3, 'c. à s.', 'Épicerie'], ['Agar-agar', 4, 'g', 'Épicerie']], 'Fais d\'abord infuser le gingembre râpé 10 minutes dans 150 ml d\'eau chaude, filtre, puis ajoute le jus des citrons.'),
  electro: G_('Électrolytes coco-citron', 'Sport', 'Après la séance', [['Eau de coco', 250, 'ml', 'Épicerie'], ['Citron', 1, '', 'Fruits et légumes'], ['Sel', 1, 'pincée', 'Épicerie'], ['Miel', 2, 'c. à s.', 'Épicerie'], ['Agar-agar', 4, 'g', 'Épicerie']], 'L\'eau de coco apporte du potassium, le sel du sodium : de quoi recharger après une séance où tu as transpiré.'),
  proteine: G_('Protéinés vanille', 'Sport', 'Protéines', [['Lait', 200, 'ml', 'Frais'], ['Whey vanille', 30, 'g', 'Épicerie'], ['Miel', 1, 'c. à s.', 'Épicerie'], ['Agar-agar', 3, 'g', 'Épicerie']], 'Fais bouillir le lait avec l\'agar-agar, laisse tiédir à 60 °C, puis fouette la whey : trop chaude, elle fait des grumeaux. Environ 30 g de protéines pour toute la fournée (la whey et le lait).', ['dairy']),
  soir: G_('Cerise et camomille du soir', 'Bien-être', 'Douceur du soir', [['Jus de cerise', 150, 'ml', 'Frais'], ['Camomille', 2, 'sachets', 'Épicerie'], ['Miel', 2, 'c. à s.', 'Épicerie'], ['Agar-agar', 4, 'g', 'Épicerie']], 'Infuse les sachets de camomille dans 100 ml d\'eau chaude, puis mélange au jus de cerise. Une douceur sans caféine pour finir la journée.'),
  myrtille: G_('Myrtille et citron', 'Bien-être', 'Antioxydants', [['Myrtilles', 150, 'g', 'Surgelés'], ['Jus de pomme', 100, 'ml', 'Frais'], ['Citron', .5, '', 'Fruits et légumes'], ['Miel', 2, 'c. à s.', 'Épicerie'], ['Agar-agar', 4, 'g', 'Épicerie']], 'Les myrtilles surgelées sont souvent plus riches que les fraîches hors saison. Mixe-les avant de chauffer.')
};
const gumOk = g => g.need.every(n => diet()[n]);
const MPG = { open: null };
function gumBlock(w) {
  const cats = [...new Set(Object.values(GUMMIES).map(g => g.cat))], on = MPG.open && GUMMIES[MPG.open];
  const chosen = Object.entries(w.gum).filter(([, n]) => n > 0);
  return `<section><div class="row between" style="align-items:flex-end"><h2 style="margin:0">Gummies maison</h2><p class="small muted" style="margin:0">${chosen.length ? `${chosen.reduce((a, [, n]) => a + n, 0)} fournée${chosen.reduce((a, [, n]) => a + n, 0) > 1 ? 's' : ''} cette semaine` : 'environ 30 par fournée'}</p></div>
    <p class="small" style="margin:6px 0 4px">À l'agar-agar : végétal, halal, sans gélatine. Touche un gummy pour sa recette, ajoute-le à ta semaine : ses ingrédients vont dans ta liste de courses.</p>
    ${cats.map(c => `<p class="zlbl" style="margin-top:12px">${c}</p><div class="gumgrid">${Object.entries(GUMMIES).filter(([, g]) => g.cat === c && gumOk(g)).map(([id, g]) => `<button class="gum ${MPG.open === id ? 'on' : ''} ${w.gum[id] ? 'in' : ''}" data-gum="${id}"><span>${g.n}</span><small>${g.tag}${w.gum[id] ? ` · ×${w.gum[id]}` : ''}</small></button>`).join('')}</div>`).join('')}
    ${on ? `<div class="gumcard"><div class="row between"><h3 style="margin:0">${on.n}</h3><button class="icon-btn" data-gumclose aria-label="Fermer">×</button></div>
      <p class="small muted" style="margin:2px 0 10px">${on.tag} · une fournée, environ 30 gummies</p>
      <ul class="small" style="margin:0 0 10px;padding-left:1.1em;line-height:1.6">${on.ing.map(([n, q, u]) => { const qt = q === .5 ? '1/2' : q === .25 ? '1/4' : String(q).replace('.', ','), nm = n.charAt(0).toLowerCase() + n.slice(1); return `<li>${qt} ${u ? `${u} ${/^[aeiouyéèêh]/i.test(nm) ? 'd\'' : 'de '}` : ''}${nm}</li>`; }).join('')}</ul>
      <ol class="small" style="margin:0 0 10px;padding-left:1.2em;line-height:1.55">${GUM_STEPS.map(s => `<li>${s}</li>`).join('')}</ol>
      <p class="small mpadv">${on.tip}</p>
      <div class="row" style="gap:8px;align-items:center;margin-top:8px"><button class="icon-btn" data-gumn="-1" aria-label="Une fournée de moins">−</button><b class="num">${w.gum[MPG.open] || 0}</b><span class="small muted">fournée${(w.gum[MPG.open] || 0) > 1 ? 's' : ''} cette semaine</span><button class="icon-btn" data-gumn="1" aria-label="Une fournée de plus">+</button></div>
    </div>` : ''}
    <p class="hint">Les gummies maison n'ont pas de dose de vitamines précise : ce sont des bouchées saines, pas des compléments. Un moule en silicone suffit, il sert à chaque fournée.</p>
  </section>`;
}

/* ---------- Plan pré-rempli jusqu'à dimanche, à valider repas par repas ---------- */
const BREAKF = ['brouille', 'skyrbol', 'mousse'];
function planRange() { const now = new Date(), from = todayISO(), d = now.getDay(), to = iso(addDays(now, d === 0 ? 7 : 7 - d + 7)); return { from, to, evening: now.getHours() >= 14 }; }
function planPick(mo, recent, used) {
  const pool = Object.entries(RECIPES).filter(([id, r]) => recOk(r) && !BREAKF.includes(id) && (used[id] || 0) < 2 && !recent.includes(id));
  const sal = pool.filter(([, r]) => r.fam.includes('salade')), hot = pool.filter(([, r]) => !r.fam.includes('salade'));
  const src = mo === 'd' ? (Math.random() < .6 && sal.length ? sal : hot) : (hot.length ? hot : sal);
  const L = src.length ? src : pool; return L.length ? L[Math.floor(Math.random() * L.length)][0] : 'chili';
}
function makePlan() {
  const { from, to, evening } = planRange(), list = [], used = {}, recent = [];
  for (let d = from; d <= to; d = iso(addDays(parseDate(d), 1))) {
    (d === from && evening ? ['s'] : ['d', 's']).forEach(mo => { const id = planPick(mo, recent, used); used[id] = (used[id] || 0) + 1; recent.push(id); if (recent.length > 4) recent.shift(); list.push({ d, mo, id, ok: true }); });
  }
  mp().draft = { from, to, list }; save();
}
function shopFromIds(ids, gums) {
  const P = mp().portions, map = new Map();
  const add = ([n, q, u, ray], k) => { const key = n + '|' + u, o = map.get(key) || { n, u, q: 0, ray, cnt: 0 }; if (q !== '') o.q += q * k; o.cnt++; map.set(key, o); };
  ids.forEach(id => { const r = recOf(id); if (r) r.ing.forEach(i => add(i, P)); });
  Object.entries(gums || {}).forEach(([id, n]) => { const g = GUMMIES[id]; if (g && n > 0) g.ing.forEach(i => add(i, n)); });
  const fmt = o => { if (!o.q) return o.cnt > 1 ? `×${o.cnt}` : ''; if (o.u === 'g' || o.u === 'ml') return o.q >= 1000 ? `${String(Math.round(o.q / 100) / 10).replace('.', ',')} ${o.u === 'g' ? 'kg' : 'L'}` : `${Math.round(o.q / 10) * 10} ${o.u}`; const n = Math.ceil(o.q * 2) / 2; return `${String(n).replace('.', ',')}${o.u ? ' ' + o.u : ''}`; };
  const g = {}; [...map.values()].forEach(o => { (g[o.ray] = g[o.ray] || []).push({ n: o.n, key: o.n + '|' + o.u, txt: fmt(o) }); }); return g;
}
function vPlanDraft() {
  const m = mp(), dr = m.draft, kept = dr.list.filter(x => x.ok).length, ML = { m: 'Matin', d: 'Midi', s: 'Soir' };
  const days = [...new Set(dr.list.map(x => x.d))];
  return `<section class="plancard"><p class="eyebrow" style="margin:0">Ton plan jusqu'à ${DAY_LONG.format(parseDate(dr.to))}</p>
    <p class="small" style="margin:6px 0 10px">Décoche ce que tu ne veux pas, touche ↻ pour changer un plat, puis valide : la liste de courses se fera avec les repas gardés (${m.portions} portions).</p>
    ${days.map(d => `<p class="zlbl" style="text-transform:capitalize">${DAY_LONG.format(parseDate(d))}</p>${dr.list.map((x, i) => x.d !== d ? '' : `<div class="plrow ${x.ok ? '' : 'off'}"><label class="check" style="flex:1;border:0;padding:6px 0"><input type="checkbox" data-plok="${i}" ${x.ok ? 'checked' : ''}><span class="box">${ICON.tick}</span><span class="txt"><small class="muted">${ML[x.mo]}</small> ${esc(recOf(x.id).n)} <span class="small muted num">· ${recOf(x.id).p} g</span></span></label><button class="icon-btn" data-plswap="${i}" aria-label="Changer ce plat">↻</button></div>`).join('')}`).join('')}
    <button class="btn block" data-plgo style="margin-top:14px">Valider ${kept} repas et faire la liste</button>
    <button class="link-btn small" data-plno style="display:block;margin:8px auto 0">Abandonner ce plan</button></section>`;
}
/* Liste de la période : repas prévus du premier au dernier jour (tels qu'ils sont maintenant dans la grille) + gummies des semaines concernées. */
function shopItems(s) {
  const ids = [], gums = {}, weeks = new Set();
  for (let d = s.from; d <= s.to; d = iso(addDays(parseDate(d), 1))) {
    const wk = iso(mondayOf(parseDate(d))), w = mp().wk[wk]; weeks.add(wk); if (!w || !w.s) continue;
    const di = (parseDate(d).getDay() + 6) % 7; MOM.forEach(([mo]) => { const id = w.s[`${di}-${mo}`]; if (id) ids.push(id); });
  }
  weeks.forEach(wk => { const w = mp().wk[wk]; if (w && w.gum) Object.entries(w.gum).forEach(([id, n]) => { gums[id] = (gums[id] || 0) + n; }); });
  return shopFromIds(ids, gums);
}
function vShopCard() {
  const s = mp().shop, RAYS = ['Fruits et légumes', 'Frais', 'Épicerie', 'Surgelés']; s.items = shopItems(s);
  const n = Object.values(s.items).reduce((a, l) => a + l.length, 0) + s.extra.length, got = Object.keys(s.got).length + s.extra.filter(x => x.got).length;
  return `<section class="plancard"><div class="row between" style="align-items:baseline"><p class="eyebrow" style="margin:0">Courses · ${DAY_MONTH.format(parseDate(s.from))} au ${DAY_MONTH.format(parseDate(s.to))}</p><span class="small muted num">${got} / ${n}</span></div>
    ${RAYS.filter(r => s.items[r]).map(r => `<p class="zlbl">${r}</p><div class="checks">${s.items[r].map(o => `<label class="check"><input type="checkbox" data-shgot="${esc(o.key)}" ${s.got[o.key] ? 'checked' : ''}><span class="box">${ICON.tick}</span><span class="txt">${esc(o.n)}${o.txt ? ` <span class="small muted num">· ${o.txt}</span>` : ''}</span></label>`).join('')}</div>`).join('')}
    ${s.extra.length ? `<p class="zlbl">En plus</p><div class="checks">${s.extra.map((x, i) => `<label class="check"><input type="checkbox" data-shx="${i}" ${x.got ? 'checked' : ''}><span class="box">${ICON.tick}</span><span class="txt">${esc(x.t)}</span></label>`).join('')}</div>` : ''}
    <div class="row" style="margin-top:12px"><input id="shX" placeholder="Ajouter un article" style="flex:1;min-height:44px;border:0;border-radius:12px;background:var(--raise);padding:0 12px;color:var(--ink);font:inherit"><button class="btn sm" data-shxadd>Ajouter</button></div>
    <div class="row" style="margin-top:12px;gap:8px;align-items:center"><button class="icon-btn" data-mpport="-1" aria-label="Moins de portions">−</button><span class="small num">${mp().portions} portions par repas</span><button class="icon-btn" data-mpport="1" aria-label="Plus de portions">+</button></div>
    <div class="row" style="margin-top:10px;gap:8px;flex-wrap:wrap"><button class="btn sm ghost" data-shshare>Partager la liste</button><button class="btn sm quiet" data-shdone>Courses terminées</button></div></section>`;
}
function planClick(t) {
  const c = s => t.closest(s); let el; const m = mp();
  if ((el = c('[data-plswap]'))) { const x = m.draft.list[Number(el.dataset.plswap)], used = {}; m.draft.list.forEach(y => { used[y.id] = (used[y.id] || 0) + 1; }); x.id = planPick(x.mo, [x.id], used); save(); const sy = window.scrollY; render(); window.scrollTo(0, sy); return true; }
  if (c('[data-plgo]')) {
    const kept = m.draft.list.filter(x => x.ok);
    kept.forEach(x => { const wk = iso(mondayOf(parseDate(x.d))), w = mpWeek(wk), di = (parseDate(x.d).getDay() + 6) % 7; w.s[`${di}-${x.mo}`] = x.id; });
    m.shop = { from: m.draft.from, to: m.draft.to, items: {}, got: {}, extra: [] }; m.draft = null; save(); render(); window.scrollTo(0, 0);
    reward(3, { msg: ['Ta liste est prête', `${kept.length} repas prévus, ingrédients comptés pour ${m.portions}. Bonnes courses.`] }); return true;
  }
  if (c('[data-plno]')) { m.draft = null; save(); render(); return true; }
  if (c('[data-plnew]')) { makePlan(); render(); window.scrollTo(0, 0); return true; }
  if (c('[data-shxadd]')) { const v = ($('#shX').value || '').trim(); if (v) { m.shop.extra.push({ t: v.slice(0, 80), got: false }); save(); render(); } return true; }
  if (c('[data-shdone]')) { m.shop = null; save(); render(); toast('Courses terminées. Bon appétit !'); return true; }
  if (c('[data-shshare]')) { const s = m.shop; s.items = shopItems(s); const txt = `Courses du ${DAY_MONTH.format(parseDate(s.from))} au ${DAY_MONTH.format(parseDate(s.to))}\n` + Object.entries(s.items).map(([r, l]) => `\n${r}\n` + l.map(o => `- ${o.n}${o.txt ? ' (' + o.txt + ')' : ''}`).join('\n')).join('\n') + (s.extra.length ? '\n\nEn plus\n' + s.extra.map(x => '- ' + x.t).join('\n') : ''); if (navigator.share) navigator.share({ text: txt }).catch(() => {}); else { try { navigator.clipboard.writeText(txt); toast('Liste copiée'); } catch (e) {} } return true; }
  return false;
}
function planChange(t) {
  const m = mp();
  if (t.dataset.plok != null) { m.draft.list[Number(t.dataset.plok)].ok = t.checked; save(); const sy = window.scrollY; render(); window.scrollTo(0, sy); return true; }
  if (t.dataset.shgot) { if (t.checked) m.shop.got[t.dataset.shgot] = true; else delete m.shop.got[t.dataset.shgot]; save(); return true; }
  if (t.dataset.shx != null) { const x = m.shop.extra[Number(t.dataset.shx)]; if (x) { x.got = t.checked; save(); } return true; }
  return false;
}

/* ---------- Recettes : étapes de chaque plat ---------- */
const STEPS = {
  tacos: ['Cuis les frites au four.', 'Fais revenir le haché végétal 5 minutes avec un peu d\'oignon, du paprika et du cumin.', 'Sauce fromagère : chauffe la crème et fais-y fondre le cheddar.', 'Garnis la tortilla (haché, frites, sauce, tomate, salade), plie-la en carré et dore-la 2 minutes de chaque côté à la poêle.'],
  smash: ['Forme 2 boules de haché par burger.', 'Dans une poêle très chaude, écrase chaque boule très finement avec une spatule, sale, cuis 2 minutes, retourne et pose le cheddar.', 'Toaste les pains.', 'Monte : sauce, salade, tomate, steaks, oignon, cornichons.'],
  nuggets: ['Four à 200 °C : potatoes 25 minutes, nuggets les 12 dernières minutes.', 'Coleslaw : râpe le chou et la carotte, mélange avec le yaourt, sel, poivre et un trait de citron.', 'Sers avec la sauce barbecue.'],
  wrap: ['Cuis les nuggets au four ou à la poêle et coupe-les.', 'Sauce ranch : yaourt, ail, ciboulette, sel, poivre.', 'Garnis la tortilla (salade, tomate, nuggets, cheddar, sauce), roule serré et toaste 1 minute si tu veux.'],
  kebab: ['Fais mariner les émincés 10 minutes : paprika, cumin, ail, huile, sel.', 'Saisis-les 6 à 8 minutes à feu vif.', 'Sauce blanche : yaourt, ail, sel, persil ou menthe.', 'Garnis les pitas chauds : salade, tomate, oignon rouge, émincés, sauce.'],
  fajitas: ['Émince le poivron, l\'oignon et la courgette, fais-les sauter 5 minutes.', 'Ajoute les émincés et les épices fajitas, 6 minutes.', 'Chauffe les tortillas et garnis.'],
  chili: ['Fais revenir l\'oignon et le poivron 5 minutes.', 'Ajoute le haché végétal 3 minutes, puis les tomates, les haricots, du cumin, du paprika et un peu de piment.', 'Laisse mijoter 15 minutes et sers avec le riz.'],
  bolo: ['Fais revenir la carotte et la courgette en dés 5 minutes.', 'Ajoute le haché 3 minutes, puis la sauce tomate, 10 minutes.', 'Cuis les pâtes, mélange et mets le parmesan dessus.'],
  thon: ['Cuis les pâtes.', 'Poêle la courgette en dés 5 minutes, ajoute la sauce tomate et le thon égoutté, 5 minutes.', 'Mélange aux pâtes.'],
  pizza: ['Four à 240 °C.', 'Étale la pâte : sauce tomate, haché végétal émietté, poivron, champignons, mozzarella.', 'Cuis 12 à 15 minutes et ajoute les tomates cerises à la sortie.'],
  keftas: ['Mélange le haché avec le persil, le cumin, sel et poivre, puis forme des boulettes.', 'Dore-les 5 minutes.', 'Ajoute la sauce tomate et la courgette en dés, laisse mijoter 10 minutes.', 'Casse l\'œuf au milieu et couvre 5 minutes, jusqu\'à ce qu\'il soit pris.'],
  couscous: ['Cuis la courgette, la carotte et le poivron en morceaux 20 minutes dans un bouillon au ras el hanout.', 'Fais griller les merguez.', 'Semoule : autant d\'eau bouillante salée que de semoule, couvre 5 minutes, puis égraine à la fourchette.'],
  hachis: ['Fais revenir la carotte râpée et le haché 5 minutes, sel et poivre.', 'Prépare la purée avec le lait chaud.', 'Dans un plat : le haché, la purée, l\'emmental.', 'Four à 200 °C, 15 minutes, jusqu\'à ce que ce soit doré.'],
  quesa: ['Écrase grossièrement les haricots avec la salsa.', 'Sur une tortilla : haricots, poivron et tomate en dés, cheddar, puis referme avec la deuxième.', 'Dore à la poêle 3 minutes de chaque côté et coupe en parts.'],
  shak: ['Fais revenir l\'oignon, le poivron et la courgette 8 minutes.', 'Ajoute la sauce tomate, du cumin et du paprika, 5 minutes.', 'Creuse des puits, casse les œufs, couvre 6 à 8 minutes.', 'Émiette la feta et sers avec le pain.'],
  omelette: ['Cuis les pommes de terre en dés à la poêle 15 minutes avec l\'oignon et le poivron.', 'Bats les œufs avec l\'emmental, sel et poivre, puis verse.', 'Cuis à feu doux, couvert, 8 minutes.'],
  brouille: ['Bats les œufs et cuis-les à feu doux en remuant.', 'Hors du feu, ajoute le cottage cheese.', 'Sers sur le pain grillé.'],
  skyrbol: ['Dans un bol : le skyr, la banane en rondelles, le granola et le beurre de cacahuète.'],
  mousse: ['Fouette le skyr, le cacao et le miel, puis laisse 10 minutes au frais.'],
  macncheese: ['Cuis les pâtes.', 'Fais revenir le haché et le brocoli en petits bouquets 5 minutes.', 'Chauffe le lait et la crème, fais-y fondre le cheddar.', 'Mélange le tout, et passe 10 minutes au four si tu veux gratiner.'],
  gratin: ['Cuis les pâtes un peu fermes.', 'Poêle la courgette en dés et le haché 5 minutes.', 'Mélange avec la crème, verse dans un plat et couvre d\'emmental.', 'Four à 200 °C, 15 minutes.'],
  carbo: ['Cuis les pâtes.', 'Dore les lardons végétaux et les champignons.', 'Mélange l\'œuf, la crème et le parmesan.', 'Hors du feu, mélange les pâtes chaudes, les lardons et la sauce : l\'œuf nappe sans cuire.'],
  alfredo: ['Saisis les émincés 6 minutes et réserve-les.', 'Fais revenir l\'ail et les champignons, ajoute les épinards.', 'Ajoute la crème et le parmesan, laisse épaissir 2 minutes.', 'Mélange avec les pâtes et les émincés.'],
  champi: ['Cuis le riz et les haricots verts.', 'Saisis les émincés 6 minutes, ajoute les champignons 5 minutes.', 'Verse la crème, sel et poivre, 3 minutes.'],
  lasagnes: ['Bolognaise : haché, courgette et aubergine en dés, sauce tomate, 10 minutes.', 'Béchamel : fais fondre un peu de beurre, ajoute la farine, puis le lait en fouettant jusqu\'à ce que ça épaississe.', 'Alterne feuilles, bolognaise et béchamel, et finis par la mozzarella.', 'Four à 180 °C, 35 minutes.'],
  tartif: ['Cuis les pommes de terre 15 minutes à l\'eau et coupe-les en rondelles.', 'Dore l\'oignon et les lardons végétaux.', 'Dans un plat : pommes de terre, lardons, crème, et le reblochon coupé en deux par-dessus.', 'Four à 200 °C, 20 minutes. Avec la salade.'],
  raclette: ['Cuis les pommes de terre en robe des champs 20 minutes.', 'Coupe-les en deux dans un plat et couvre de tranches de raclette.', 'Four à 220 °C, 8 à 10 minutes. Avec les cornichons et la salade.'],
  quiche: ['Four à 180 °C.', 'Étale la pâte dans un moule.', 'Bats les œufs, la crème, l\'emmental et les épinards égouttés, avec sel, poivre et muscade.', 'Verse et cuis 35 minutes. Avec la salade.'],
  burrito: ['Cuis le riz.', 'Fais revenir le haché, le poivron et le maïs 5 minutes avec du cumin et du paprika.', 'Garnis les tortillas (riz, haché, salsa) et roule-les.', 'Cheddar dessus, four à 200 °C, 10 minutes.'],
  croque: ['Tartine un peu de crème sur le pain, mets l\'emmental entre les tranches et dessus.', 'Four à 200 °C, 10 minutes.', 'Pose un œuf au plat dessus. Avec la salade et la tomate.'],
  saumoncreme: ['Cuis les pâtes.', 'Poêle la courgette, ajoute le saumon en dés, 3 minutes.', 'Ajoute la crème, le zeste et le jus du citron, 2 minutes, et mélange aux pâtes.'],
  salriz: ['Cuis le riz et l\'œuf (10 minutes pour un œuf dur), puis laisse refroidir.', 'Mélange le riz, le maïs, la tomate, le poivron, l\'emmental, les olives et l\'œuf en quartiers.', 'Vinaigrette : huile d\'olive, vinaigre, moutarde.'],
  salpates: ['Cuis les pâtes et rince-les à l\'eau froide.', 'Mélange avec le pesto, les tomates cerises coupées, la mozzarella et la roquette.'],
  nicoise: ['Cuis les pommes de terre (15 min), les haricots verts (8 min) et les œufs durs (10 min), puis refroidis.', 'Dispose-les sur la salade avec la tomate, le poivron et les olives.', 'Vinaigrette à l\'huile d\'olive.'],
  nicoisethon: ['Cuis les pommes de terre (15 min), les haricots verts (8 min) et les œufs durs (10 min), puis refroidis.', 'Dispose-les sur la salade avec la tomate, les olives et le thon égoutté.', 'Vinaigrette à l\'huile d\'olive.'],
  grecque: ['Coupe le concombre, la tomate, le poivron et l\'oignon rouge.', 'Ajoute les olives et la feta en gros morceaux.', 'Huile d\'olive et origan. Avec le pain pita.'],
  cesar: ['Cuis les nuggets et coupe-les.', 'Sauce : yaourt, parmesan râpé, ail, citron, un peu de moutarde.', 'Romaine, tomates cerises, croûtons, nuggets, sauce et copeaux de parmesan.'],
  sallent: ['Mélange les lentilles, le poivron, la tomate, l\'oignon rouge et la feta.', 'Vinaigrette moutarde et huile d\'olive. Encore meilleure après un passage au frais.'],
  mexicaine: ['Mélange les haricots égouttés, le maïs, la tomate, le poivron, l\'avocat et le cheddar.', 'Assaisonne : citron vert, huile, cumin, sel.'],
  piemontaise: ['Cuis les pommes de terre (15 min) et les œufs durs (10 min), puis refroidis.', 'Coupe et mélange avec les cornichons, la tomate et l\'emmental.', 'Sauce : crème, moutarde, sel, poivre.']
};
const MPR = { view: null };
function ingTxt(n, q, u, P) {
  if (q === '' || q == null) return n;
  const v = q * P, nm = n.charAt(0).toLowerCase() + n.slice(1);
  if (u === 'g' || u === 'ml') return `${v >= 1000 ? String(Math.round(v / 100) / 10).replace('.', ',') + (u === 'g' ? ' kg' : ' L') : Math.round(v / 5) * 5 + ' ' + u} ${/^[aeiouyéèêhœ]/i.test(nm) ? 'd\'' : 'de '}${nm}`;
  const qt = v === .5 ? '1/2' : v === .25 ? '1/4' : v === .75 ? '3/4' : String(Math.round(v * 4) / 4).replace('.', ',');
  return u ? `${qt} ${u} ${/^[aeiouyéèêhœ]/i.test(nm) ? 'd\'' : 'de '}${nm}` : `${qt} ${nm}`;
}
function vRecipe(slot, w) {
  const id = w.s[slot], r = recOf(id); if (!r) return '';
  const P = mp().portions, [di, mo] = slot.split('-'), day = addDays(parseDate(mpWeekKey()), Number(di)), st = STEPS[id];
  return `<section class="mprecipe"><div class="row between" style="align-items:flex-start"><div><p class="eyebrow" style="margin:0;text-transform:capitalize">${DAY_LONG.format(day)} · ${MOM.find(x => x[0] === mo)[1]}</p><h2 style="margin:6px 0 0">${esc(r.n)}</h2></div><button class="icon-btn" data-mprclose aria-label="Fermer">×</button></div>
    <p class="small muted" style="margin:4px 0 12px">${r.p ? `${r.p} g de protéines par portion · ` : ''}pour ${P} portion${P > 1 ? 's' : ''}</p>
    <p class="zlbl">Ingrédients</p><ul class="mping">${r.ing.map(([n, q, u]) => `<li>${esc(ingTxt(n, q, u, P))}</li>`).join('')}</ul>
    ${st ? `<p class="zlbl">Préparation</p><ol class="mpsteps">${st.map(s => `<li>${s}</li>`).join('')}</ol>` : ''}
    <div class="row" style="gap:8px;margin-top:12px;flex-wrap:wrap"><button class="btn sm ghost" data-mprchange="${slot}">Changer ce repas</button><button class="btn sm quiet" data-mprclear="${slot}">Retirer</button></div></section>`;
}
function vTodayMenu() {
  const k = todayISO(), wk = iso(mondayOf(new Date())), w = mp().wk[wk]; if (!w || !w.s) return '';
  const di = (new Date().getDay() + 6) % 7, items = MOM.map(([mo, ml]) => { const id = w.s[`${di}-${mo}`], r = id && recOf(id); return r ? [mo, ml, r] : null; }).filter(Boolean);
  if (!items.length) return '';
  return `<section class="mptoday"><p class="eyebrow" style="margin:0">Au menu aujourd'hui</p>${items.map(([mo, ml, r]) => `<button class="mptd" data-mprtoday="${di}-${mo}"><small>${ml}</small><span>${esc(r.n)}</span><b class="say">Recette ›</b></button>`).join('')}</section>`;
}

function VWLIST(w, m, groups, RAYS) {
  return `<section><div class="row between" style="align-items:flex-end"><h2 style="margin:0">Liste de courses</h2><div class="row" style="gap:6px;align-items:center"><button class="icon-btn" data-mpport="-1" aria-label="Moins de portions">−</button><span class="small num">${m.portions} portion${m.portions > 1 ? 's' : ''}</span><button class="icon-btn" data-mpport="1" aria-label="Plus de portions">+</button></div></div>
    ${Object.keys(groups).length || w.extra.length ? RAYS.filter(r => groups[r]).map(r => `<p class="zlbl">${r}</p><div class="checks">${groups[r].map(o => { const key = o.n + '|' + o.u; return `<label class="check"><input type="checkbox" data-mpgot="${esc(key)}" ${w.got[key] ? 'checked' : ''}><span class="box">${ICON.tick}</span><span class="txt">${esc(o.n)}${o.txt ? ` <span class="small muted num">· ${o.txt}</span>` : ''}</span></label>`; }).join('')}</div>`).join('') + (w.extra.length ? `<p class="zlbl">En plus</p><div class="checks">${w.extra.map((x, i) => `<label class="check"><input type="checkbox" data-mpxgot="${i}" ${x.got ? 'checked' : ''}><span class="box">${ICON.tick}</span><span class="txt">${esc(x.t)}</span></label>`).join('')}</div>` : '') : '<p class="small muted">La liste se remplit toute seule avec les repas de la semaine.</p>'}
    <div class="row" style="margin-top:12px"><input id="mpX" placeholder="Ajouter un article (eau, fruits…)" style="flex:1;min-height:44px;border:0;border-radius:12px;background:var(--surface);padding:0 12px;color:var(--ink);font:inherit"><button class="btn sm" data-mpxadd>Ajouter</button></div>
    ${Object.keys(groups).length ? '<button class="btn sm ghost" data-mpshare style="margin-top:10px">Partager la liste</button>' : ''}
  </section>`;
}
function vMealWeek(t) {
  const k = mpWeekKey(), w = mpWeek(k), m0 = parseDate(k), m = mp(), groups = mpShopping(w), RAYS = ['Fruits et légumes', 'Frais', 'Épicerie', 'Surgelés', 'Mes idées'];
  const lbl = MP.off === 0 ? 'Cette semaine' : MP.off === 1 ? 'Semaine prochaine' : MP.off === -1 ? 'Semaine dernière' : `Semaine du ${DAY_MONTH.format(m0)}`;
  const days = Array.from({ length: 7 }, (_, i) => addDays(m0, i));
  const list = Object.entries(RECIPES).filter(([, r]) => recOk(r)).sort((a, b) => b[1].p - a[1].p);
  if (!m.draft && !m.shop && !m.auto1) { m.auto1 = 1; makePlan(); }
  return `${MP.off === 0 && !m.draft ? vTodayMenu() : ''}${m.draft ? vPlanDraft() : ''}${m.shop ? vShopCard() : ''}${!m.draft && !m.shop ? '<button class="btn sm ghost" data-plnew style="margin-top:14px">Préparer mes repas jusqu\'à dimanche prochain</button>' : ''}<div class="row between" style="margin-top:18px;align-items:center"><button class="icon-btn" data-mpw="-1" aria-label="Semaine précédente">‹</button><b>${lbl}</b><button class="icon-btn" data-mpw="1" aria-label="Semaine suivante">›</button></div>
  <div class="mpgrid">${days.map((d, i) => `<div class="mpday ${iso(d) === todayISO() ? 'today' : ''}"><p>${DAY_SHORT.format(d)} ${d.getDate()}</p>${MOM.map(([mo, ml]) => { const id = w.s[`${i}-${mo}`], r = id && recOf(id), on = MP.pick === `${i}-${mo}`; return `<button class="mpslot ${r ? 'full' : ''} ${on ? 'on' : ''}" data-mps="${i}-${mo}"><small>${ml}</small>${r ? `<span>${esc(r.n)}</span>${r.p ? `<b class="num">${r.p} g</b>` : ''}` : '<span class="muted">+</span>'}</button>`; }).join('')}</div>`).join('')}</div>
  ${MPR.view && w.s[MPR.view] ? vRecipe(MPR.view, w) : ''}
  ${MP.pick ? `<section class="mppick"><div class="row between"><h3 style="margin:0">${MOM.find(x => x[0] === MP.pick.split('-')[1])[1]}, ${DAY_LONG.format(days[Number(MP.pick.split('-')[0])])}</h3><button class="icon-btn" data-mpclose aria-label="Fermer">×</button></div>
    ${w.s[MP.pick] ? '<button class="btn sm quiet" data-mpclear style="margin-top:8px">Vider cette case</button>' : ''}
    ${m.custom.length ? `<p class="zlbl">Mes idées</p>${m.custom.map(c => `<button class="mprec" data-mprec="${c.id}"><span>${esc(c.n)}</span>${c.p ? `<b class="num">${c.p} g</b>` : ''}</button>`).join('')}` : ''}
    <p class="zlbl">Idées gourmandes et rapides, sans viande (protéines par portion)</p>
    ${list.map(([id, r]) => `<button class="mprec" data-mprec="${id}"><span>${r.n}<small>${r.fam.map(f => FAML[f]).join(' · ')}</small></span><b class="num">${r.p} g</b></button>`).join('')}
    ${MP.form ? `<div class="mpform"><input id="mpN" placeholder="Nom du plat"><textarea id="mpI" rows="3" placeholder="Ingrédients, un par ligne"></textarea><input id="mpP" inputmode="numeric" placeholder="Protéines par portion, en g (facultatif)"><button class="btn sm" data-mpsave>Ajouter à mes idées et à cette case</button></div>` : '<button class="btn sm ghost" data-mpform style="margin-top:10px">Écrire ma propre idée</button>'}
  </section>` : '<p class="hint">Touche un repas pour voir sa recette, ou une case vide pour en ajouter un.</p>'}
  ${gumBlock(w)}
  <section><h2>Les conseils de la semaine</h2>${mpAdvice(w, t).map(a => `<p class="small mpadv">${a}</p>`).join('')}</section>
  ${m.shop ? `<section><h2>Liste de courses</h2><p class="small muted" style="margin:-6px 0 0">Ta liste du ${DAY_MONTH.format(parseDate(m.shop.from))} au ${DAY_MONTH.format(parseDate(m.shop.to))} est en haut de la page : elle compte tous tes repas de la période et tes gummies.</p></section>` : VWLIST(w, m, groups, RAYS)}`;
}
function mealClick(t) {
  const c = s => t.closest(s); let el; const w = () => mpWeek(), m = mp();
  if ((el = c('[data-diet]'))) { const d = diet(), k = el.dataset.diet; d[k] = !d[k]; save(); const sy = window.scrollY; render(); window.scrollTo(0, sy); return true; }
  if ((el = c('[data-fcombo]'))) { const names = el.dataset.fcombo.split('|'); addFoods(names.map(n => FOODS.find(f => f[0] === n)).filter(Boolean)); return true; }
  if ((el = c('[data-nview]'))) { C.nv = el.dataset.nview; try { localStorage.setItem('sdp-nv', C.nv); } catch (e) {} render(); return true; }
  if ((el = c('[data-mpw]'))) { MP.off += Number(el.dataset.mpw); MP.pick = null; MPR.view = null; render(); return true; }
  if ((el = c('[data-mprtoday]'))) { MP.off = 0; MPR.view = el.dataset.mprtoday; MP.pick = null; render(); setTimeout(() => { const p = $('.mprecipe'); p && p.scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth', block: 'start' }); }, 30); return true; }
  if (c('[data-mprclose]')) { MPR.view = null; const sy = window.scrollY; render(); window.scrollTo(0, sy); return true; }
  if ((el = c('[data-mprchange]'))) { MP.pick = el.dataset.mprchange; MPR.view = null; MP.form = false; render(); setTimeout(() => { const p = $('.mppick'); p && p.scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth', block: 'start' }); }, 30); return true; }
  if ((el = c('[data-mprclear]'))) { delete w().s[el.dataset.mprclear]; MPR.view = null; save(); render(); return true; }
  if ((el = c('[data-mps]')) && w().s[el.dataset.mps] && MP.pick !== el.dataset.mps) { MPR.view = MPR.view === el.dataset.mps ? null : el.dataset.mps; MP.pick = null; const sy = window.scrollY; render(); window.scrollTo(0, sy); setTimeout(() => { const p = $('.mprecipe'); p && p.scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth', block: 'start' }); }, 30); return true; }
  if ((el = c('[data-mps]'))) { MPR.view = null; MP.pick = MP.pick === el.dataset.mps ? null : el.dataset.mps; MP.form = false; const sy = window.scrollY; render(); window.scrollTo(0, sy); setTimeout(() => { const p = $('.mppick'); p && p.scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth', block: 'start' }); }, 30); return true; }
  if (c('[data-mpclose]')) { MP.pick = null; render(); return true; }
  if (c('[data-mpclear]')) { delete w().s[MP.pick]; MP.pick = null; save(); render(); return true; }
  if ((el = c('[data-mprec]'))) { w().s[MP.pick] = el.dataset.mprec; MP.pick = null; save(); render(); haptic(); return true; }
  if (c('[data-mpform]')) { MP.form = true; render(); setTimeout(() => { const i = $('#mpN'); i && i.focus(); }, 40); return true; }
  if (c('[data-mpsave]')) { const n = ($('#mpN').value || '').trim(); if (!n) { toast('Donne un nom à ton plat.'); return true; } const id = 'c' + uid(); m.custom.push({ id, n: n.slice(0, 80), ing: ($('#mpI').value || '').slice(0, 1000), p: parseInt($('#mpP').value, 10) || 0 }); w().s[MP.pick] = id; MP.pick = null; MP.form = false; save(); render(); toast('Ajouté à tes idées'); return true; }
  if ((el = c('[data-gum]'))) { MPG.open = MPG.open === el.dataset.gum ? null : el.dataset.gum; const sy = window.scrollY; render(); window.scrollTo(0, sy); setTimeout(() => { const k = $('.gumcard'); k && k.scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth', block: 'nearest' }); }, 30); return true; }
  if (c('[data-gumclose]')) { MPG.open = null; const sy = window.scrollY; render(); window.scrollTo(0, sy); return true; }
  if ((el = c('[data-gumn]'))) { const gw = w().gum, id = MPG.open; gw[id] = Math.max(0, Math.min(5, (gw[id] || 0) + Number(el.dataset.gumn))); if (!gw[id]) delete gw[id]; save(); const sy = window.scrollY; render(); window.scrollTo(0, sy); if (el.dataset.gumn === '1') toast('Ingrédients ajoutés à ta liste de courses'); return true; }
  if ((el = c('[data-mpport]'))) { m.portions = Math.max(1, Math.min(8, m.portions + Number(el.dataset.mpport))); save(); render(); return true; }
  if (c('[data-mpxadd]')) { const v = ($('#mpX').value || '').trim(); if (!v) return true; w().extra.push({ t: v.slice(0, 80), got: false }); save(); render(); return true; }
  if (c('[data-mpshare]')) {
    const g = mpShopping(w()), txt = `Courses · ${lblWeek()}\n` + Object.entries(g).map(([r, l]) => `\n${r}\n` + l.map(o => `- ${o.n}${o.txt ? ' (' + o.txt + ')' : ''}`).join('\n')).join('\n') + (w().extra.length ? '\n\nEn plus\n' + w().extra.map(x => '- ' + x.t).join('\n') : '');
    if (navigator.share) navigator.share({ text: txt }).catch(() => {}); else { try { navigator.clipboard.writeText(txt); toast('Liste copiée'); } catch (e) {} }
    return true;
  }
  return false;
}
const lblWeek = () => `semaine du ${DAY_MONTH.format(parseDate(mpWeekKey()))}`;
function mealChange(t) {
  if (t.dataset.mpgot) { const g = mpWeek().got; if (t.checked) g[t.dataset.mpgot] = true; else delete g[t.dataset.mpgot]; save(); return true; }
  if (t.dataset.mpxgot != null) { const x = mpWeek().extra[Number(t.dataset.mpxgot)]; if (x) { x.got = t.checked; save(); } return true; }
  return false;
}

function vNutrition() {
  const t = bodyTargets();
  if (!t || C.edit) return `${corpsTop('nutrition')}${calibForm()}`;
  mp();
  const nseg = `<div class="seg" role="group" aria-label="Nutrition" style="margin-top:12px"><button data-nview="jour" aria-pressed="${C.nv !== 'semaine'}"><span class="dot"></span>Aujourd'hui</button><button data-nview="semaine" aria-pressed="${C.nv === 'semaine'}"><span class="dot"></span>Ma semaine de repas</button></div>`;
  if (C.nv === 'semaine') return `${corpsTop('nutrition')}${nseg}${vMealWeek(t)}`;
  const day = foodDay(), p = day.p, pr = S.body.profile, R = 100, circ = 2 * Math.PI * R, full = p >= t.prot;
  const ticks = [1, 2, 3].map(q => { const [x0, y0] = polar(R - 13, q * 90), [x1, y1] = polar(R + 13, q * 90); return `<line x1="${x0.toFixed(1)}" y1="${y0.toFixed(1)}" x2="${x1.toFixed(1)}" y2="${y1.toFixed(1)}" stroke="var(--bg)" stroke-width="3"/>`; }).join('');
  const order = foodsAllowed().map((f, i) => [f, i]).sort((a, b) => (S.body.fcount[b[0][0]] || 0) - (S.body.fcount[a[0][0]] || 0) || a[1] - b[1]).map(x => x[0]);
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
  return `${corpsTop('nutrition')}${nseg}
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
  ${dietBlock(t, p)}
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
/* ----- Flux : astres et espace (science, histoire, peuples d'avant) ----- */
const FX_ASTRES = [
  ['as1', 'Des étoiles aux noms arabes', 'Une grande partie des étoiles brillantes portent encore un nom arabe : Aldébaran, Altaïr, Bételgeuse, Véga, Deneb… Ils sont arrivés en Europe au Moyen Âge, avec la traduction en latin des livres d\'astronomie du monde musulman.', 'Ce soir, cherche Véga ou Altaïr : ce sont deux des étoiles les plus brillantes du ciel d\'été et d\'automne.'],
  ['as2', 'Al-Sûfî et la galaxie d\'Andromède', 'En 964, l\'astronome ʿAbd ar-Rahmân as-Sûfî, à Ispahan, publie le « Livre des étoiles fixes ». Il y décrit un « petit nuage » : c\'est la première mention écrite connue de la galaxie d\'Andromède.', 'Par ciel bien noir, loin des villes, Andromède se voit à l\'œil nu comme une petite tache floue.'],
  ['as3', 'L\'année d\'al-Battânî', 'Au IXe siècle, al-Battânî mesure la durée de l\'année solaire à 365 jours, 5 heures et 46 minutes. La valeur actuelle n\'en diffère que de quelques dizaines de secondes.', 'Note l\'heure du lever du soleil quelques jours de suite : tu verras ce décalage régulier.'],
  ['as4', 'L\'astrolabe', 'Perfectionné dans le monde musulman, l\'astrolabe permettait de lire l\'heure, de mesurer la hauteur d\'un astre et de trouver la direction de la qibla, n\'importe où.', 'Regarde où le soleil se couche ce soir, et compare avec la direction de ta qibla.'],
  ['as5', 'Suhail, l\'étoile des voyageurs', 'Suhail (Canopus) est la deuxième étoile la plus brillante du ciel nocturne. Dans la péninsule arabique, son apparition à l\'aube, en fin d\'été, annonçait la fin des grandes chaleurs, et les caravanes s\'en servaient pour se guider vers le sud.', 'Depuis la France, Suhail ne se lève pas : il faut descendre vers le sud pour la voir.'],
  ['as6', 'Le ciel n\'apporte pas la pluie', 'Avant l\'islam, beaucoup d\'Arabes attribuaient la pluie au coucher de certaines étoiles (les anwâʾ). Le Prophète ﷺ a corrigé cette croyance : dire « nous avons eu la pluie grâce à telle étoile », c\'est attribuer aux astres ce qui revient à Allah (Bukhari 846).', 'Quand il pleut, dis : « Nous avons eu la pluie par la grâce d\'Allah et Sa miséricorde. »'],
  ['as7', 'Les navigateurs polynésiens', 'Sans boussole ni carte, les navigateurs polynésiens traversaient des milliers de kilomètres d\'océan en suivant les points où se lèvent et se couchent les étoiles : une véritable boussole d\'étoiles apprise par cœur.', 'Repère une étoile au-dessus de l\'horizon ce soir et regarde où elle est une heure plus tard.'],
  ['as8', 'Sirius et la crue du Nil', 'Dans l\'Égypte ancienne, le retour de Sirius à l\'aube, juste avant le lever du soleil, annonçait chaque année la crue du Nil. Tout le calendrier agricole en dépendait.', 'Sirius est l\'étoile la plus brillante du ciel : on la voit en hiver, sous Orion.'],
  ['as9', 'Tu regardes le passé', 'La lumière du Soleil met environ 8 minutes et 20 secondes à nous parvenir. Celle de l\'étoile la plus proche après lui, Proxima du Centaure, voyage plus de 4 ans. Quand tu regardes une étoile, tu la vois telle qu\'elle était.', 'Ce soir, choisis une étoile : sa lumière est partie avant que tu sois né, peut-être bien avant.'],
  ['as10', 'Combien d\'étoiles ?', 'Notre galaxie, la Voie lactée, compte entre 100 et 400 milliards d\'étoiles. Et l\'univers observable contient des centaines de milliards de galaxies.', '« Ne regardent-ils pas le ciel au-dessus d\'eux, comment Nous l\'avons bâti et embelli ? » (Coran 50:6)'],
  ['as11', 'La Lune et notre calendrier', 'Un mois lunaire dure environ 29,5 jours, donc une année hégirienne compte environ 354 jours. C\'est pour ça que le Ramadan avance d\'une dizaine de jours chaque année et fait le tour des saisons en 33 ans environ.', 'Regarde la Lune ce soir et devine où on en est dans le mois hégirien.'],
  ['as12', 'Les étoiles filantes', 'Ce ne sont pas des étoiles : ce sont des grains de poussière, souvent pas plus gros qu\'un grain de sable, qui brûlent en entrant dans l\'atmosphère à plus de 70 km d\'altitude.', 'Mi-août, les Perséides offrent des dizaines d\'étoiles filantes par heure.'],
  ['as13', 'L\'observatoire d\'Ulugh Beg', 'Au XVe siècle, à Samarcande, le prince astronome Ulugh Beg fait construire un immense observatoire. Son catalogue donne la position de plus de mille étoiles avec une précision remarquable pour l\'époque.', 'Cherche une photo de son sextant géant : il est creusé dans la colline.'],
  ['as14', 'Pourquoi Mars est rouge', 'La surface de Mars est couverte de poussière riche en oxyde de fer : de la rouille, en quelque sorte. C\'est elle qui lui donne cette couleur.', 'Quand Mars est visible, elle se reconnaît à son éclat orangé, qui ne scintille presque pas.'],
  ['as15', 'Les étoiles pour se guider', '« C\'est Lui qui a fait pour vous les étoiles, pour que vous vous guidiez par elles dans les ténèbres de la terre et de la mer. » (Coran 6:97) Pendant des siècles, marins et caravaniers ont fait exactement ça.', 'Apprends à trouver l\'étoile Polaire : elle indique le nord.']
];
const FXC = {
  astres: { bg: ['#0E1A2E', '#020407'], ac: '#E8C27A', lbl: 'Astres et espace', shape: 'spark' },
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
FX_ASTRES.forEach(([id, title, text, act]) => { FX_ALL[id] = { id, t: 'astres', title, text, act }; });
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
  if (!FXS.order.length) { const base = ['foi', 'biz', 'savoir', 'psy', 'astres'], lk = {}; (S.flux.saved || []).forEach(id => { const c = FX_ALL[id]; if (!c) return; const t = ['coran', 'hadith'].includes(c.t) ? 'foi' : ['sci', 'cult'].includes(c.t) ? 'savoir' : c.t; if (base.includes(t)) lk[t] = (lk[t] || 0) + 1; }); const top = Object.entries(lk).sort((x, y) => y[1] - x[1])[0]; FXS.order = base.concat(top && top[1] >= 2 ? [top[0]] : []).sort(() => Math.random() - .5); }
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
  } else if (c.t === 'astres') {
    body = `<p class="fk">${conf.lbl}</p><h2 class="ft">${fxWords(c.title)}</h2><p class="fb">${esc(c.text)}</p><div class="fdo"><small>${/^«/.test(c.act) ? 'Coran' : 'À observer'}</small>${esc(c.act)}</div>`;
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
    ${savable ? `<div class="frail"><button data-fsave aria-pressed="${saved}" aria-label="J\'aime">${ICON.fheart}<span>${saved ? 'Aimé' : 'J\'aime'}</span></button><button data-fcopy aria-label="Copier">${ICON.fcopy}<span>Copier</span></button></div>` : ''}
  </article>`;
}
function vFlux() {
  FXS.n = 0; FXS.cards = []; FXS.order = []; FXS.read = new Set();
  for (let i = 0; i < 6; i++) FXS.cards.push(fxNext());
  const first = !S.flux.used;
  return `<div class="feed" id="feed">${FXS.cards.map(fxCard).join('')}</div>
    <div class="fhead"><div><p class="fh-t">Flux</p><div class="fprog" id="fprog">${Array.from({ length: 15 }, () => '<i></i>').join('')}</div></div>
      <div class="row" style="gap:2px"><button class="icon-btn" data-fsaved aria-label="Mes cartes aimées">${ICON.fheart}</button><button class="icon-btn" data-goto="orbite" aria-label="Fermer">${ICON.fclose}</button></div></div>
    ${first ? '<div class="fhint" id="fhint"><span>Glisse vers le haut</span><small>Touche deux fois une carte pour l\'aimer</small></div>' : ''}`;
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
  if (i >= 0) { S.flux.saved.splice(i, 1); if (b) { b.setAttribute('aria-pressed', 'false'); $('span', b).textContent = 'J\'aime'; } toast('Retiré de tes cartes aimées'); }
  else { S.flux.saved.push(id); if (b) { b.setAttribute('aria-pressed', 'true'); $('span', b).textContent = 'Aimé'; b.classList.remove('pop'); void b.offsetWidth; b.classList.add('pop'); } burst(14, '♥', false); chime(false); haptic(); }
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
  $('#ideasBody').innerHTML = `<div class="grab"></div><div class="sheet-top"><span style="width:60px"></span><h2 id="ideasTitle">Aimées</h2><button class="link-btn" data-close style="text-align:right">OK</button></div>
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
    ${themeBlock()}
    <p class="gt">Sauvegarde</p>
    <div class="group">
      <button class="cell tap" data-export><span class="lbl">Exporter mes données</span><span class="small muted">${backup}</span>${ICON.chev}</button>
      <button class="cell tap" data-tjexport><span class="lbl">Exporter le journal de test</span><span class="small muted">depuis le ${DAY_LONG.format(parseDate(tj().start))}</span>${ICON.chev}</button>
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
    <p class="hint" style="margin-top:30px;text-align:center">Sayko de poche · v3.6 · fonctionne hors ligne</p>`;
  if (!$('#settingsSheet').open) $('#settingsSheet').showModal();
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
   SADAQA & ZAKAT
   Sadaqa : une part fixe de chaque revenu reçu est mise de côté d'abord,
   comme une charge. On note le don sans montant affiché ailleurs, sans
   lumière, sans série : décider une fois, donner discrètement.
   Zakat al-mal : nisab (85 g d'or ou 595 g d'argent), année lunaire
   complète (354 jours) au-dessus du nisab, 2,5 % du patrimoine net.
   ===================================================================== */
function sqConf() { const s = S.money.sadaqa = S.money.sadaqa && typeof S.money.sadaqa === 'object' ? S.money.sadaqa : {}; if (s.pct == null || s.pct === '') s.pct = 2; return s; }
const sqPlan = inc => { const p = numv(sqConf().pct); return inc > 0 && p > 0 ? Math.max(5, Math.round(inc * p / 100 / 5) * 5) : 0; };
function sqOf(ym, inc) { const plan = sqPlan(inc), done = txIn(ym, 'sadaqa').reduce((a, t) => a + numv(t.amount), 0); return { plan, done, val: Math.max(plan, done), left: Math.max(0, plan - done) }; }
function vSadaqa(b, ym) {
  const q = b.sq; if (!q.plan && !q.done) return '';
  return `<section><div class="sqcard">
    <p class="eyebrow" style="margin:0">Sadaqa · mise de côté d'abord</p>
    <p class="big num" style="margin:6px 0 0">${q.left ? eur0(q.left) : 'Donnée'}</p>
    <p class="small muted" style="margin:2px 0 12px">${q.left ? `reste à donner ce mois-ci, sur ${eur0(q.plan)} mis de côté (${numv(sqConf().pct)} % de tes revenus reçus)` : 'Ta part de ce mois est donnée. Qu\'Allah l\'accepte.'}</p>
    <div class="row"><input id="sqAmt" inputmode="decimal" class="famt num" placeholder="${q.left ? String(q.left) : 'Montant'}" style="flex:1;text-align:left" aria-label="Montant donné"><button class="btn sm" data-sqgive>J'ai donné</button></div>
    <p class="small" style="margin:12px 0 0;font:400 1rem/1.45 var(--serif)">« Si vous donnez ouvertement, c'est bien ; mais si vous le faites en secret aux pauvres, c'est meilleur pour vous. »</p><p class="small muted" style="margin:2px 0 0">Coran 2:271</p>
    <p class="hint" style="margin-top:10px">Pas de lumière, pas de série, pas d'historique affiché : la sadaqa reste entre toi et Allah. La part se règle dans ton mois type.</p>
  </div></section>`;
}
/* ---------- Zakat ---------- */
function zkConf() { const z = S.money.zakat = S.money.zakat && typeof S.money.zakat === 'object' ? S.money.zakat : {}; z.basis = z.basis || 'or'; z.debts = z.debts || 'oui'; z.paid = Array.isArray(z.paid) ? z.paid : []; return z; }
function zkCalc() {
  const z = zkConf(), M = S.money;
  const pots = M.pots.reduce((a, p) => a + Math.max(0, potBalance(p)), 0);
  const inv = (M.investments || []).reduce((a, i) => a + numv(i.value), 0);
  const cash = numv(z.cash), metal = numv(z.goldG) * numv(z.gold), cl = numv(z.claims);
  const debt = z.debts === 'oui' ? Math.max(0, numv(M.debt.total) - debtRepaid(todayISO().slice(0, 7))) : 0;
  const assets = pots + inv + cash + metal + cl, net = assets - debt;
  const nisab = z.basis === 'argent' ? 595 * numv(z.silver) : 85 * numv(z.gold);
  return { pots, inv, cash, metal, cl, debt, assets, net, nisab, priced: nisab > 0, due: Math.round(Math.max(0, net) * 0.025) };
}
function vZakat() {
  const z = zkConf(), r = zkCalc(), k = todayISO(), above = r.priced && r.net >= r.nisab;
  const end = z.start ? iso(addDays(parseDate(z.start), 354)) : null, left = end ? Math.round((parseDate(end) - parseDate(k)) / 864e5) : null;
  let status;
  if (!r.priced) status = `<p>Indique le prix du gramme ${z.basis === 'argent' ? 'd\'argent' : 'd\'or'} du jour, plus bas, pour calculer le nisab.</p>`;
  else if (!above) {
    const P = (budgetOf(todayISO().slice(0, 7)).plan) || {}, pace = (P.ok ? (P.safety || 0) + (P.debt || 0) : 0), miss = r.nisab - r.net, months = pace > 0 ? Math.ceil(miss / pace) : null;
    status = `<p><b>Pas encore redevable.</b> Ton patrimoine net (${eur0(r.net)}) est sous le nisab (${eur0(r.nisab)}) : il te manque ${eur0(miss)}.</p>
      <p class="small" style="margin-top:8px">${months ? `Au rythme de ton plan de ce mois (dette remboursée et épargne : ${eur0(pace)} par mois), tu atteindrais le nisab dans environ ${months} mois, vers ${new Intl.DateTimeFormat('fr-FR', { month: 'long', year: 'numeric' }).format(addDays(new Date(), months * 30.4))}. La zakat deviendrait due une année lunaire plus tard, si ton patrimoine reste au-dessus pendant toute cette année.` : 'Quand ton patrimoine net dépassera le nisab, l\'app lancera le compte de l\'année lunaire.'}</p>`;
  } else if (left != null && left <= 0) status = `<p><b>Ta zakat est due : ${eur0(r.due)}</b>, soit 2,5 % de ton patrimoine net (${eur0(r.net)}).</p><button class="btn sm" data-zkpaid style="margin-top:12px">J'ai payé ma zakat</button>`;
  else status = `<p><b>Année lunaire en cours.</b> Ton patrimoine net (${eur0(r.net)}) est au-dessus du nisab depuis le ${DAY_LONG.format(parseDate(z.start))}.</p><p class="small" style="margin-top:8px">Si rien ne change, ta zakat sera due le ${DAY_LONG.format(parseDate(end))} (dans ${left} jours) : environ ${eur0(r.due)} aujourd'hui.</p>`;
  const drop = r.priced && z.start && !above;
  const row = (l, v, id, ph) => `<div class="cell"><label for="${id}" class="lbl">${l}</label>${id ? `<input class="r" id="${id}" data-zk="${id}" inputmode="decimal" value="${esc(String(v || '').replace('.', ','))}" placeholder="${ph || '0'}">` : `<b class="num">${v}</b>`}</div>`;
  return `${argentTop('zakat')}
  <div class="zkcard"><p class="eyebrow" style="margin:0">Zakat al-mal</p><div style="margin-top:8px">${status}</div>
    ${drop ? `<div class="alert" style="margin-top:12px">${ICON.warn}<span>Ton patrimoine est repassé sous le nisab pendant l'année. Pour la majorité des savants, le compte recommence quand tu repasses au-dessus ; pour l'école hanafite, seuls le début et la fin de l'année comptent.</span></div><div class="row" style="margin-top:10px;flex-wrap:wrap"><button class="btn sm ghost" data-zkreset>Recommencer le compte</button></div>` : ''}
  </div>
  <section><h2>Quand la zakat est-elle due ?</h2>
    <p class="small">Trois conditions : posséder au moins le <b>nisab</b> (la valeur de 85 g d'or, ou de 595 g d'argent), le garder au-dessus pendant une <b>année lunaire complète</b> (354 jours), puis donner <b>2,5 %</b> de ton patrimoine net. Elle concerne l'épargne, l'argent sur tes comptes et en espèces, l'or et l'argent, les investissements et l'argent qu'on te doit et qui sera remboursé. Pas ta maison, ta voiture ni tes affaires personnelles.</p>
  </section>
  <section><h2>Ton patrimoine</h2>
    <div class="group">
      ${row('Épargne (tes cagnottes)', eur0(r.pots))}
      ${r.inv ? row('Investissements', eur0(r.inv)) : ''}
      ${row('Argent sur tes comptes et en espèces', z.cash, 'zkCash')}
      ${row('Or possédé (grammes)', z.goldG, 'zkGoldG')}
      ${row('Argent qu\'on te doit (et qui sera rendu)', z.claims, 'zkClaims')}
      ${row(`Dette restante${z.debts === 'oui' ? ', déduite' : ', non déduite'}`, eur0(Math.max(0, numv(S.money.debt.total) - debtRepaid(todayISO().slice(0, 7)))))}
      <div class="cell"><span class="lbl">Patrimoine net</span><b class="num" style="color:var(--gold)">${eur0(r.net)}</b></div>
    </div>
    <div class="seg" style="margin-top:12px" role="group" aria-label="Dettes"><button data-zkdebt="oui" aria-pressed="${z.debts === 'oui'}"><span class="dot"></span>Déduire ma dette</button><button data-zkdebt="non" aria-pressed="${z.debts === 'non'}"><span class="dot"></span>Ne pas la déduire</button></div>
    <p class="hint">Les savants divergent : les hanafites et les hanbalites déduisent les dettes, les chafiʿites non. Beaucoup d'avis contemporains déduisent ce qui doit être remboursé dans l'année.</p>
  </section>
  <section><h2>Le nisab</h2>
    <div class="group">
      ${row('Prix du gramme d\'or (€)', z.gold, 'zkGold', 'cours du jour')}
      ${row('Prix du gramme d\'argent (€)', z.silver, 'zkSilver', 'cours du jour')}
    </div>
    <div class="seg" style="margin-top:12px" role="group" aria-label="Nisab"><button data-zkbasis="or" aria-pressed="${z.basis === 'or'}"><span class="dot"></span>Or · 85 g</button><button data-zkbasis="argent" aria-pressed="${z.basis === 'argent'}"><span class="dot"></span>Argent · 595 g</button></div>
    <p class="hint">${r.priced ? `Nisab actuel : ${eur0(r.nisab)}. ` : ''}Beaucoup de savants contemporains retiennent l'or pour l'argent épargné ; d'autres l'argent, plus bas et donc plus favorable aux pauvres. Mets à jour le cours de temps en temps, et demande à une personne de savoir en cas de doute.</p>
  </section>
  <section><h2>À qui la donner</h2><p class="small">Aux huit catégories du Coran (9:60), d'abord les pauvres et les nécessiteux, à commencer par ceux de ton entourage, ou par une association de confiance qui la redistribue. Elle ne se donne pas à ses parents, ses enfants ni sa femme, dont on a déjà la charge.</p>
  ${z.paid.length ? `<p class="small muted" style="margin-top:10px">Dernière zakat payée le ${DAY_LONG.format(parseDate(z.paid[z.paid.length - 1].d))}.</p>` : ''}</section>`;
}
function zkTick() {
  const z = zkConf(), r = zkCalc();
  if (r.priced && r.net >= r.nisab && !z.start) { z.start = todayISO(); save(); }
}
function zkClick(t) {
  const c = s => t.closest(s); let el; const z = zkConf();
  if (c('[data-sqgive]')) { const v = numv(($('#sqAmt').value || '').replace(/\s/g, '').replace(',', '.')), b = budgetOf(A.month), amt = v > 0 ? v : b.sq.left; if (!(amt > 0)) { toast('Indique le montant donné.'); return true; } S.money.tx.push({ id: uid(), kind: 'sadaqa', amount: Math.round(amt * 100) / 100, cat: 'sadaqa', date: todayISO(), note: '', created: Date.now() }); save(); render(); toast('Qu\'Allah l\'accepte de toi.'); return true; }
  if ((el = c('[data-zkdebt]'))) { z.debts = el.dataset.zkdebt; save(); render(); return true; }
  if ((el = c('[data-zkbasis]'))) { z.basis = el.dataset.zkbasis; save(); render(); return true; }
  if (c('[data-zkreset]')) { delete z.start; save(); zkTick(); render(); return true; }
  if (c('[data-zkpaid]')) { const r = zkCalc(); z.paid.push({ d: todayISO(), a: r.due }); z.start = todayISO(); save(); render(); toast('Qu\'Allah purifie ton bien et le bénisse.', null, null, 4000); return true; }
  return false;
}
function zkChange(t) {
  const map = { zkCash: 'cash', zkGoldG: 'goldG', zkClaims: 'claims', zkGold: 'gold', zkSilver: 'silver' };
  if (t.dataset.zk && map[t.dataset.zk]) { zkConf()[map[t.dataset.zk]] = t.value.trim().replace(/\s/g, '').replace(',', '.'); save(); zkTick(); render(); return true; }
  if (t.id === 'mSq') { sqConf().pct = Math.max(0, Math.min(50, numv(t.value.replace(',', '.')) || 0)); save(); return true; }
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

const TJ_APP = 'sayko';
/* =====================================================================
   JOURNAL DE TEST — période de test de 6 mois
   Relève seulement des comptages : jours d'ouverture et modules visités
   (jamais l'espace privé, jamais de contenu), plus 4 questions le 1er
   de chaque mois. Exportable depuis les réglages.
   ===================================================================== */
function tj() { const j = S.tj = S.tj && typeof S.tj === 'object' ? S.tj : {}; ['open', 'mods', 'survey'].forEach(k => { if (!j[k] || typeof j[k] !== 'object') j[k] = {}; }); if (!Array.isArray(j.notes)) j.notes = []; j.start = j.start || todayISO(); return j; }
let tjLast = 0;
function tjOpen() { const now = Date.now(); if (now - tjLast < 10 * 60000) return; tjLast = now; const j = tj(), k = todayISO(); j.open[k] = (j.open[k] || 0) + 1; save(); }
function tjMod(m) { if (!m || m === 'z') return; const j = tj(), k = todayISO(), d = j.mods[k] = j.mods[k] || {}; d[m] = (d[m] || 0) + 1; }
const TJ = { q1: null, q2: null, fb: null };
/* Mes retours : un + ou un − en une phrase, à tout moment, exportés avec le journal. */
function tjFeedback() {
  const j = tj(), ym = todayISO().slice(0, 7), mine = j.notes.filter(n => n.d.startsWith(ym)), np = mine.filter(n => n.s === '+').length, nm = mine.length - np;
  return `<div class="tjfb"><p class="small" style="margin:0"><b>Un retour sur l'app ?</b>${mine.length ? ` <span class="muted">${np} + · ${nm} − ce mois-ci</span>` : ''}</p>
    <div class="tjfbb"><button class="chip" data-tjfb="+" aria-pressed="${TJ.fb === '+'}">+ Ça m'aide</button><button class="chip" data-tjfb="-" aria-pressed="${TJ.fb === '-'}">− Ça gêne</button></div>
    ${TJ.fb ? `<div class="row" style="margin-top:10px"><input id="tjFbT" placeholder="${TJ.fb === '+' ? 'Ce qui t\'a aidé ou plu, en une phrase' : 'Ce qui t\'a gêné ou manqué, en une phrase'}" style="flex:1;min-height:44px;border:0;border-radius:12px;background:var(--raise);padding:0 12px;color:var(--ink);font:inherit"><button class="btn sm" data-tjfbok>Noter</button></div>` : ''}</div>`;
}
const tjDue = () => { const j = tj(), ym = todayISO().slice(0, 7); return ym > j.start.slice(0, 7) && !j.survey[ym]; };
function tjCard() {
  if (!tjDue()) return '';
  const prev = new Intl.DateTimeFormat('fr-FR', { month: 'long' }).format(addDays(new Date(new Date().getFullYear(), new Date().getMonth(), 1), -1));
  return `<section class="tjcard"><p class="eyebrow" style="margin:0">Bilan du mois de test</p>
    <p class="small" style="margin:6px 0 12px">Quatre questions sur ${prev}, une minute. Tes réponses restent sur ton téléphone jusqu'à ce que tu exportes le journal.</p>
    ${(() => { const pm = iso(addDays(new Date(new Date().getFullYear(), new Date().getMonth(), 1), -1)).slice(0, 7), ns = tj().notes.filter(n => n.d.startsWith(pm)); return ns.length ? `<p class="zlbl">Tes notes du mois, pour t'aider</p>${ns.map(n => `<p class="small" style="margin:0 0 4px"><b style="color:var(--${n.s === '+' ? 'mint' : 'warn'})">${n.s === '+' ? '+' : '−'}</b> ${esc(n.t)}</p>`).join('')}` : ''; })()}
    <p class="zlbl">Si l'app disparaissait demain, tu serais…</p>
    <div class="chips">${['Très déçu', 'Un peu déçu', 'Pas déçu'].map((l, i) => `<button class="chip" data-tjq1="${i}" aria-pressed="${TJ.q1 === i}">${l}</button>`).join('')}</div>
    <p class="zlbl">Ta note sur 10</p>
    <div class="tjnote">${Array.from({ length: 10 }, (_, i) => `<button data-tjq2="${i + 1}" aria-pressed="${TJ.q2 === i + 1}">${i + 1}</button>`).join('')}</div>
    <label class="zlbl" for="tjQ3">Ce qui t'a le plus servi</label><textarea id="tjQ3" rows="2"></textarea>
    <label class="zlbl" for="tjQ4">Ce qui t'a le plus agacé ou manqué</label><textarea id="tjQ4" rows="2"></textarea>
    <button class="btn sm" data-tjsave style="margin-top:12px">Enregistrer mon bilan</button></section>`;
}
function tjClick(t) {
  const c = s => t.closest(s); let el;
  if ((el = c('[data-tjq1]'))) { TJ.q1 = Number(el.dataset.tjq1); $$('[data-tjq1]').forEach(b => b.setAttribute('aria-pressed', b === el)); return true; }
  if ((el = c('[data-tjq2]'))) { TJ.q2 = Number(el.dataset.tjq2); $$('[data-tjq2]').forEach(b => b.setAttribute('aria-pressed', b === el)); return true; }
  if (c('[data-tjsave]')) {
    if (TJ.q1 == null || TJ.q2 == null) { toast('Réponds au moins aux deux premières questions.'); return true; }
    const ym = todayISO().slice(0, 7); tj().survey[ym] = { at: todayISO(), deception: ['tres', 'peu', 'pas'][TJ.q1], note: TJ.q2, utile: ($('#tjQ3').value || '').trim(), agace: ($('#tjQ4').value || '').trim() };
    save(); render(); reward(5, { msg: ['Bilan enregistré', 'Merci. C\'est avec ces réponses que l\'app va grandir.'] }); return true;
  }
  if (c('[data-tjexport]')) { tjExport(); return true; }
  if ((el = c('[data-tjfb]'))) { TJ.fb = TJ.fb === el.dataset.tjfb ? null : el.dataset.tjfb; const sy = window.scrollY; render(); window.scrollTo(0, sy); setTimeout(() => { const i = $('#tjFbT'); i && i.focus(); }, 50); return true; }
  if (c('[data-tjfbok]')) { const v = ($('#tjFbT').value || '').trim(); if (!v) { toast('Écris ton retour en une phrase.'); return true; } tj().notes.push({ d: todayISO(), s: TJ.fb, t: v.slice(0, 500), m: tab }); TJ.fb = null; save(); const sy = window.scrollY; render(); window.scrollTo(0, sy); toast('Retour noté. Merci.'); return true; }
  return false;
}
function tjExport() {
  const j = tj(), days = Object.keys(j.open).sort(), weeks = {};
  days.forEach(d => { const w = iso(addDays(parseDate(d), -((parseDate(d).getDay() + 6) % 7))); weeks[w] = (weeks[w] || 0) + 1; });
  const mods = {}; Object.values(j.mods).forEach(d => Object.entries(d).forEach(([m, n]) => { mods[m] = (mods[m] || 0) + n; }));
  const lastUse = {}; Object.keys(j.mods).sort().forEach(d => Object.keys(j.mods[d]).forEach(m => { lastUse[m] = d; }));
  const out = { journal: 'test', app: TJ_APP, exportedAt: new Date().toISOString(), start: j.start, joursOuverts: days.length, joursParSemaine: weeks, visitesParModule: mods, derniereVisite: lastUse, bilans: j.survey, retours: j.notes, detailParJour: { ouvertures: j.open, modules: j.mods } };
  deliverFile(`journal-test-${TJ_APP}-${todayISO()}.json`, JSON.stringify(out, null, 2), 'application/json');
}

/* =====================================================================
   FOI · LE CŒUR — les compétences du croyant
   8 compétences, chacune en 3 paliers : Comprendre (la leçon), Pratiquer
   (7 jours de pratique), Ancrer (21 jours au total + une réflexion écrite).
   Une compétence « en cours » à la fois ; le tawakkul est la priorité.
   ===================================================================== */
const HEART = [
  { k: 'tawakkul', n: 'Tawakkul', ar: 'التَّوَكُّل', s: 'La confiance totale en Allah', prio: true,
    learn: ['Le tawakkul, c\'est faire tout ce qui dépend de toi, puis remettre le résultat à Allah, le cœur tranquille. Ce n\'est ni la passivité ni l\'anxiété : c\'est l\'effort sans l\'angoisse.', 'Un homme demanda s\'il devait attacher sa chamelle ou s\'en remettre à Allah. Le Prophète ﷺ répondit : « Attache-la et remets-t\'en à Allah. » (Tirmidhi 2517)', 'Signe qu\'il grandit : tu travailles autant, mais tu dors mieux. Un refus, une perte, un retard ne te renversent plus.'],
    src: ['« Quiconque place sa confiance en Allah, Il lui suffit. »', 'Coran 65:3'], extra: ['« Si vous placiez votre confiance en Allah comme il se doit, Il vous nourrirait comme Il nourrit les oiseaux : ils partent le matin le ventre vide et reviennent le soir rassasiés. »', 'Tirmidhi 2344'],
    prac: 'Prends un souci du jour. Écris en une ligne ce qui dépend de toi, fais-le, puis dis « Hasbiyallahu wa niʿma al-wakil » (Coran 3:173) et lâche le reste.',
    refl: ['Quel résultat cherches-tu à contrôler alors qu\'il ne dépend pas de toi ?', 'Qu\'est-ce qui change dans ta façon de travailler quand tu fais vraiment confiance ?'] },
  { k: 'dua', n: 'Duʿa', ar: 'الدُّعَاء', s: 'Apprendre à parler à Allah, avec tes mots', tag: 'pour toi',
    learn: ['Beaucoup de croyants qui pratiquent depuis l\'enfance connaissent des dizaines d\'invocations, mais n\'arrivent pas à parler à Allah avec leurs propres mots. Ce blocage n\'est pas un manque de foi, et la tristesse de ne pas sentir ce lien est déjà le signe d\'un cœur qui Le cherche.', 'Les prophètes Lui parlaient simplement de ce qu\'ils vivaient. Yaʿqub : « Je ne me plains qu\'à Allah de mon chagrin et de ma tristesse » (Coran 12:86). Mûsâ : « Seigneur, ouvre-moi ma poitrine, facilite-moi ma tâche » (20:25-26). Ni formule parfaite, ni langue imposée : Allah comprend toutes les langues et connaît même ce que tu n\'arrives pas à dire.', 'Tu n\'as pas à faire tout le chemin. « Je suis tel que Mon serviteur pense de Moi. S\'il s\'approche de Moi d\'un empan, Je M\'approche de lui d\'une coudée ; s\'il vient vers Moi en marchant, Je viens vers lui en courant. » (Bukhari 7405, Muslim 2675). Les invocations que tu connais ne sont pas un échec : ici, elles servent de pont vers les tiennes.'],
    src: ['« Quand Mes serviteurs t\'interrogent sur Moi, Je suis tout proche. Je réponds à l\'appel de celui qui M\'invoque. »', 'Coran 2:186'], extra: ['« Votre Seigneur a dit : Invoquez-Moi, Je vous répondrai. »', 'Coran 40:60'],
    prac: 'Avance marche par marche : l\'app te propose chaque jour l\'étape où tu en es. Tu peux parler à voix basse, ou écrire dans ton carnet.',
    steps: [
      { to: 5, t: 'Une phrase', d: 'Après une invocation que tu connais, ajoute une seule phrase à toi, en français, même maladroite. Si rien ne vient : « Ya Allah, je ne sais pas Te parler. Apprends-moi. »' },
      { to: 10, t: 'Ta journée', d: 'Une minute pour Lui raconter ta journée : ce qui s\'est passé, ce qui t\'a pesé, ce qui t\'a fait du bien. Comme on parle à quelqu\'un qui écoute vraiment.' },
      { to: 15, t: 'Demander, confier', d: 'Une demande précise, et une peine que tu Lui confies. Ce que tu n\'as dit à personne, tu peux le Lui dire.' },
      { to: 21, t: 'Le rendez-vous', d: 'Cinq minutes, au même moment chaque jour. Et une fois dans la semaine, dans le dernier tiers de la nuit.' }
    ],
    starters: ['Ya Allah, aujourd\'hui…', 'Ya Allah, merci pour…', 'Ya Allah, j\'ai peur de…', 'Ya Allah, aide-moi à…', 'Ya Allah, pardonne-moi pour…', 'Ya Allah, je ne sais pas Te parler. Apprends-moi.'],
    moments: [['En prosternation', 'Le serviteur n\'est jamais plus proche de son Seigneur (Muslim 482).'], ['Le dernier tiers de la nuit', 'Allah dit : « Qui M\'invoque, que Je lui réponde ? » (Bukhari 1145, Muslim 758)'], ['Entre l\'adhan et l\'iqama', 'L\'invocation à ce moment n\'est pas rejetée (Abu Dawud 521, Tirmidhi 212).'], ['Le vendredi', 'Il y a une heure où toute demande est exaucée (Bukhari 935, Muslim 852).']],
    refl: ['Qu\'est-ce qui te bloque, au fond, quand tu veux Lui parler ?', 'Qu\'est-ce qui a changé en toi depuis ta première phrase ?'] },
  { k: 'ihsan', n: 'Ihsan', ar: 'الإِحْسَان', s: 'Adorer Allah comme si tu Le voyais',
    learn: ['L\'ihsan est le plus haut degré de la religion : « Que tu adores Allah comme si tu Le voyais ; et si tu ne Le vois pas, Lui te voit. » (Hadith de Jibril, Muslim 8)', 'Il se travaille d\'abord dans la prière : arriver avant, se poser, comprendre ce qu\'on récite, ralentir.', 'Signe qu\'il grandit : tu remarques quand ton esprit part pendant la prière, et tu le ramènes.'],
    src: ['« Ceux qui sont humbles dans leur prière ont réussi. »', 'Coran 23:1-2'],
    prac: 'Une prière par jour avec une présence totale : une minute de silence avant, une récitation lente, et dans une seule prosternation, une phrase personnelle à Allah, même courte.',
    refl: ['Quelle prière de ta journée est la plus « absente », et pourquoi ?', 'Qu\'est-ce qui t\'aide à te sentir vu par Allah en dehors de la prière ?'] },
  { k: 'hilm', n: 'Hilm', ar: 'الحِلْم', s: 'La douceur et la maîtrise de soi',
    learn: ['Le hilm, c\'est rester doux et maître de toi quand tu aurais toutes les raisons de t\'emporter. Le rifq, c\'est la douceur dans chaque geste et chaque parole.', '« Allah est Doux et Il aime la douceur en toute chose. » (Bukhari 6927, Muslim 2593)', 'Face à la colère, le Prophète ﷺ a enseigné de changer de position : s\'asseoir si l\'on est debout, s\'allonger si l\'on est assis (Abu Dawud 4782).'],
    src: ['« Le fort n\'est pas celui qui terrasse les autres. Le fort est celui qui se maîtrise au moment de la colère. »', 'Bukhari 6114, Muslim 2609'],
    prac: 'Aujourd\'hui, une situation où tu aurais pu hausser le ton : réponds plus bas, plus lentement. Si la colère monte, change de position et tais-toi dix secondes.',
    refl: ['Avec qui es-tu le moins doux ? Ta femme, ton équipe, toi-même ?', 'Que se passe-t-il chez l\'autre quand tu restes calme ?'] },
  { k: 'sabr', n: 'Sabr', ar: 'الصَّبْر', s: 'La patience et la force mentale',
    learn: ['Le sabr a trois faces : tenir dans l\'obéissance, se retenir de l\'interdit, et supporter l\'épreuve sans se révolter. C\'est la force mentale du croyant.', '« Le croyant fort est meilleur et plus aimé d\'Allah que le croyant faible, et en chacun il y a du bien. Attache-toi à ce qui t\'est utile, demande l\'aide d\'Allah et ne faiblis pas. » (Muslim 2664)', '« La patience, c\'est au premier choc. » (Bukhari 1283) : elle se joue dans la première réaction.'],
    src: ['« Allah est avec les endurants. »', 'Coran 2:153'], extra: ['« Nul n\'a reçu de don meilleur et plus vaste que la patience. »', 'Bukhari 1469, Muslim 1053'],
    prac: 'Un inconfort choisi chaque jour (ne pas te plaindre de la journée, finir une tâche pénible sans la repousser, jeûner lundi ou jeudi). Et au premier choc : « Inna lillahi wa inna ilayhi rajiʿun », puis attendre avant de réagir.',
    refl: ['Quelle épreuve actuelle pourrait être une porte plutôt qu\'un mur ?', 'Dans quoi abandonnes-tu trop vite ?'] },
  { k: 'shukr', n: 'Shukr', ar: 'الشُّكْر', s: 'La gratitude du cœur, de la langue et des actes',
    learn: ['La gratitude se vit à trois niveaux : reconnaître le bienfait dans le cœur, le dire avec la langue, et l\'utiliser dans ce qui plaît à Allah.', '« Celui qui ne remercie pas les gens ne remercie pas Allah. » (Abu Dawud 4811, Tirmidhi 1954)', 'Signe qu\'elle grandit : tu te plains moins, tu remarques plus.'],
    src: ['« Si vous êtes reconnaissants, très certainement J\'augmenterai pour vous. »', 'Coran 14:7'],
    prac: 'Le soir, trois bienfaits précis de ta journée, et chaque jour un vrai merci à une personne : ta femme, un collègue, un client.',
    refl: ['Quel bienfait as-tu cessé de voir parce qu\'il est toujours là ?', 'Comment utiliser un de tes bienfaits pour Allah cette semaine ?'] },
  { k: 'ikhlas', n: 'Ikhlas', ar: 'الإِخْلَاص', s: 'La sincérité de l\'intention',
    learn: ['L\'ikhlas, c\'est faire pour Allah seul, sans chercher le regard des gens. C\'est la racine de tout acte accepté.', '« Les actes ne valent que par les intentions, et chacun n\'aura que ce qu\'il a eu l\'intention de faire. » (Bukhari 1, Muslim 1907)', 'Un bon test : ferais-tu la même chose si personne ne le savait jamais ?'],
    src: ['« Il ne leur a été commandé que d\'adorer Allah, en Lui vouant un culte sincère. »', 'Coran 98:5'],
    prac: 'Avant trois actes de ta journée (travail, aide, adoration), renouvelle ton intention en silence. Et fais chaque jour un bien que personne ne saura.',
    refl: ['Qu\'est-ce que tu fais surtout pour être vu ?', 'Quelle intention peux-tu placer derrière ton travail en gare et à la pizzeria ?'] },
  { k: 'muhasaba', n: 'Muhasaba', ar: 'المُحَاسَبَة', s: 'Se juger soi-même et revenir vers Allah',
    learn: ['La muhasaba, c\'est faire chaque soir ton propre bilan, sans te mentir, pour corriger demain. Elle est inséparable de la tawba, le retour vers Allah.', '« Tous les fils d\'Adam commettent des fautes, et les meilleurs de ceux qui fautent sont ceux qui se repentent. » (Tirmidhi 2499)', 'Le Prophète ﷺ demandait pardon à Allah cent fois par jour (Muslim 2702).'],
    src: ['« Ô vous qui croyez, craignez Allah, et que chaque âme considère ce qu\'elle a avancé pour demain. »', 'Coran 59:18'],
    prac: 'Trois minutes avant de dormir : une chose bien faite, une chose à corriger, une décision pour demain. Puis cent istighfar avec le compteur de dhikr.',
    refl: ['Quelle faute revient le plus souvent dans tes bilans ?', 'Qu\'est-ce que tu as réellement changé depuis que tu fais ta muhasaba ?'] }
];
const HLV = ['Comprendre', 'Pratiquer', 'Ancrer'];
function hrt() { const h = S.heart = S.heart && typeof S.heart === 'object' ? S.heart : {}; h.cur = h.cur || 'tawakkul'; ['c'].forEach(k => { if (!h[k] || typeof h[k] !== 'object') h[k] = {}; }); return h; }
function hc(k) { const h = hrt(), c = h.c[k] = h.c[k] || {}; c.days = c.days || {}; c.refl = c.refl || {}; return c; }
function hLevel(k) { const c = hc(k), n = Object.keys(c.days).length; if (c.anch) return 3; if (!c.read) return 0; return n >= 7 ? 2 : 1; }
const hDays = k => Object.keys(hc(k).days).length;
const hAnchored = () => HEART.filter(x => hc(x.k).anch).length;
function vHeart() {
  const h = hrt(), cur = HEART.find(x => x.k === h.cur) || HEART[0], c = hc(cur.k), lv = hLevel(cur.k), nd = hDays(cur.k), k = todayISO();
  const pdone = !!c.days[k], canAnchor = nd >= 21 && cur.refl.every((_, i) => (c.refl[i] || '').trim().length >= 10);
  return `${foiTop('coeur')}
  <div class="hgrid">${HEART.map(x => { const l = hLevel(x.k); return `<button class="hcell ${x.k === cur.k ? 'on' : ''} lv${l}" data-hsel="${x.k}" aria-pressed="${x.k === cur.k}"><span class="ar" lang="ar">${x.ar}</span><b>${x.n}</b><i>${[0, 1, 2].map(j => `<em class="${j < l ? 'f' : ''}"></em>`).join('')}</i>${x.prio ? '<small>priorité</small>' : x.tag ? `<small class="t2">${x.tag}</small>` : ''}</button>`; }).join('')}</div>
  <p class="hint" style="text-align:center;margin-top:6px">${hAnchored()} compétence${hAnchored() > 1 ? 's' : ''} ancrée${hAnchored() > 1 ? 's' : ''} sur ${HEART.length}. Une à la fois, dans l'ordre que tu veux.</p>
  <section class="hcard">
    <p class="ar hbig" lang="ar">${cur.ar}</p>
    <h2 style="margin:0;text-align:center">${cur.n}</h2>
    <p class="small muted" style="text-align:center;margin:4px 0 14px">${cur.s}</p>
    <div class="hsteps">${HLV.map((t, j) => `<div class="${j < lv ? 'ok' : j === lv ? 'now' : ''}"><i>${j < lv ? ICON.tick : j + 1}</i><span>${t}</span></div>`).join('')}</div>
    <blockquote class="hq"><p>${cur.src[0]}</p><cite>${cur.src[1]}</cite></blockquote>
    <details class="hadv" ${lv === 0 ? 'open' : ''}><summary>1 · Comprendre</summary>${cur.learn.map(p => `<p class="small">${p}</p>`).join('')}${cur.extra ? `<blockquote class="hq sm"><p>${cur.extra[0]}</p><cite>${cur.extra[1]}</cite></blockquote>` : ''}
      ${c.read ? '<p class="small" style="color:var(--mint)">Compris.</p>' : '<button class="btn sm" data-hread style="margin-bottom:14px">J\'ai compris</button>'}</details>
    <details class="hadv" ${lv === 1 || lv === 2 ? 'open' : ''}><summary>2 · Pratiquer <span class="small muted num" style="margin-left:auto;margin-right:10px">${nd}/7</span></summary>
      <p class="small">${cur.prac}</p>
      ${cur.steps ? duaSteps(cur, c, nd) : ''}
      ${c.read ? `<button class="btn sm ${pdone ? 'quiet' : ''}" data-hprac style="margin-bottom:14px">${pdone ? 'Pratiqué aujourd\'hui ✓' : 'Je l\'ai pratiqué aujourd\'hui'}</button>` : '<p class="small muted">S\'ouvre une fois la leçon comprise.</p>'}</details>
    <details class="hadv" ${lv === 2 ? 'open' : ''}><summary>3 · Ancrer <span class="small muted num" style="margin-left:auto;margin-right:10px">${Math.min(nd, 21)}/21</span></summary>
      <p class="small">Continue la pratique jusqu'à 21 jours, et réponds par écrit, honnêtement :</p>
      ${cur.refl.map((q, i) => `<label class="zlbl" for="hr-${i}">${q}</label><textarea id="hr-${i}" data-hrefl="${i}" rows="2" ${lv < 1 ? 'disabled' : ''}>${esc(c.refl[i] || '')}</textarea>`).join('')}
      ${c.anch ? `<p class="small" style="color:var(--mint);margin-top:10px">Ancrée le ${DAY_LONG.format(parseDate(c.anch))}. Continue de la pratiquer : une compétence ancrée s'entretient.</p>` : `<button class="btn sm" data-hanch style="margin:10px 0 14px" ${canAnchor ? '' : 'disabled'}>${canAnchor ? 'Ancrer cette compétence' : nd < 21 ? `Encore ${21 - nd} jour${21 - nd > 1 ? 's' : ''} de pratique` : 'Réponds aux deux questions'}</button>`}</details>
  </section>
  ${cur.moments ? `<section><h2>Les moments où l'invocation est exaucée</h2><div class="group">${cur.moments.map(([t, s]) => `<div class="cell" style="flex-direction:column;align-items:flex-start;gap:2px"><span class="lbl">${t}</span><span class="small muted">${s}</span></div>`).join('')}</div></section>` : ''}
  ${cur.k === 'dua' && (c.journal || []).length ? `<section><h2>Mon carnet de duʿa</h2><p class="small muted" style="margin:-6px 0 10px">Tes mots à Allah, du plus récent au premier. Ils restent sur ton téléphone.</p>${c.journal.slice().reverse().slice(0, 30).map(e => `<div class="djent"><p>${esc(e.t)}</p><time>${DAY_LONG.format(parseDate(e.d))}</time></div>`).join('')}</section>` : ''}`;
}
/* Duʿa : 4 marches selon les jours de pratique, et le carnet. */
function duaSteps(cur, c, nd) {
  const si = cur.steps.findIndex(s => nd < s.to), st = cur.steps[si < 0 ? cur.steps.length - 1 : si];
  return `<div class="dsteps">${cur.steps.map((s, i) => `<div class="${nd >= s.to ? 'ok' : s === st ? 'now' : ''}"><i></i><span>${s.t}</span></div>`).join('')}</div>
    <div class="dnow"><p class="eyebrow" style="margin:0">Aujourd'hui · ${st.t}</p><p class="small" style="margin:6px 0 0">${st.d}</p></div>
    ${c.read ? `<div class="dstart">${cur.starters.map(s => `<button class="chip" data-dstart="${esc(s)}">${esc(s)}</button>`).join('')}</div>
    <textarea id="djT" rows="3" placeholder="Écris-Lui ici, si c'est plus simple que de parler. Ça reste sur ton téléphone."></textarea>
    <button class="btn sm" data-djsave style="margin:8px 0 6px">Garder dans mon carnet</button>
    <p class="small muted" style="margin:0 0 12px">Écrire compte comme ta pratique du jour. Si tu Lui as parlé à voix basse, touche plutôt le bouton en dessous.</p>` : ''}`;
}
function heartClick(t) {
  const c = s => t.closest(s); let el; const h = hrt();
  if ((el = c('[data-hsel]'))) { h.cur = el.dataset.hsel; save(); render(); return true; }
  if (c('[data-hread]')) { hc(h.cur).read = todayISO(); save(); render(); reward(5, { msg: [HEART.find(x => x.k === h.cur).n, 'La leçon est comprise. Place à la pratique, sept jours.'] }); return true; }
  if (c('[data-hprac]')) {
    const cc = hc(h.cur), k = todayISO(); if (cc.days[k]) { delete cc.days[k]; save(); render(); unreward(3); return true; }
    cc.days[k] = 1; save(); const n = hDays(h.cur); render();
    if (n === 7) reward(12, { big: true, msg: ['Sept jours de pratique', `${HEART.find(x => x.k === h.cur).n} commence à devenir une habitude du cœur. Continue jusqu'à 21 jours pour l'ancrer.`] });
    else reward(3); return true;
  }
  if ((el = c('[data-dstart]'))) { const ta = $('#djT'); if (ta) { const s = el.dataset.dstart; ta.value = ta.value.trim() ? ta.value.trim() + ' ' + s : s; ta.focus(); try { const n = ta.value.length; ta.setSelectionRange(n, n); } catch (e) {} } return true; }
  if (c('[data-djsave]')) {
    const v = ($('#djT').value || '').trim(); if (!v) { toast('Écris au moins une phrase, même courte.'); return true; }
    const cc = hc('dua'), k = todayISO(), first = !(cc.journal || []).length, wasDay = !!cc.days[k];
    cc.journal = cc.journal || []; cc.journal.push({ d: k, t: v.slice(0, 2000) }); cc.days[k] = 1; save(); const n = hDays('dua'); render();
    if (first) reward(10, { big: true, noBonus: true, msg: ['Ta première invocation à toi', 'Allah l\'a entendue, mot pour mot. « Je suis tout proche. Je réponds à l\'appel de celui qui M\'invoque. »', 'Coran 2:186'] });
    else if (!wasDay && n === 7) reward(12, { big: true, msg: ['Sept jours à Lui parler', 'Les mots viennent. Continue, marche après marche.'] });
    else if (!wasDay) reward(3); else toast('Ajouté à ton carnet.');
    return true;
  }
  if (c('[data-hanch]')) { const cc = hc(h.cur); cc.anch = todayISO(); save(); render(); const x = HEART.find(y => y.k === h.cur); reward(25, { big: true, noBonus: true, msg: [`${x.n} ancrée`, x.src[0], x.src[1]] }); return true; }
  return false;
}
function heartChange(t) {
  if (t.dataset.hrefl == null) return false;
  hc(hrt().cur).refl[t.dataset.hrefl] = t.value; save();
  const b = $('[data-hanch]'); if (b) { const cur = HEART.find(x => x.k === hrt().cur), ok = hDays(cur.k) >= 21 && cur.refl.every((_, i) => (hc(cur.k).refl[i] || '').trim().length >= 10); b.disabled = !ok; }
  return true;
}

const THEME_DEFAULT = 'emeraude', THEME_EXTRA = null;
/* =====================================================================
   THÈMES — palettes au choix (clair et sombre), mode auto / clair / sombre.
   Les couleurs sont posées en variables CSS sur <html> ; les couleurs
   d'état (alertes) et propres à l'app suivent le mode choisi.
   ===================================================================== */
const TKEYS = ['bg', 'bg-2', 'surface', 'raise', 'ink', 'ink-2', 'muted', 'line', 'orbit', 'gold', 'gold-hi', 'gold-ink', 'gold-soft', 'glow', 'mint', 'mint-soft', 'seg-bg', 'seg-on'];
const THEMES = {
  emeraude: { n: 'Émeraude & or', l: '#EEF2EE #E4EBE6 #FFFFFF #E3EAE5 #0B1F19 #2E4A40 #5B7369 #D0DBD4 #B9C9BF #94700F #B8901F #FFFFFF #F3EAD2 rgba(184,144,31,.18) #187F5B #DDF0E7 #E3EAE5 #FFFFFF', d: '#08130F #0C1C17 #0F221C #163029 #EEF3EF #C3D3CB #86A197 #1D3A31 #27473D #E9C46A #F5D98E #1A1405 #2A2615 rgba(233,196,106,.22) #5ED3A8 #123328 #0F221C #23463C' },
  nuit: { n: 'Nuit & bleu pastel', l: '#EEF2FA #E3E9F6 #FFFFFF #E4EAF6 #0D1733 #2E3C63 #5C6A8E #D4DCEE #BAC6E2 #3B6FD6 #5B8FF0 #FFFFFF #E1EAFC rgba(59,111,214,.16) #1E8468 #DCF1EA #E4EAF6 #FFFFFF', d: '#0A1024 #0D1530 #111A36 #18234A #EEF2FB #C5CFE8 #8A97B8 #212D52 #2B3A62 #74A7FF #A9C8FF #07122E #16244A rgba(116,167,255,.22) #7FD1B9 #12302E #111A36 #22305C' },
  sable: { n: 'Sable & terracotta', l: '#F6F1EA #EDE5DA #FFFFFF #EEE6DB #2A1D14 #5A4535 #8A7360 #E2D6C6 #CDBBA6 #B4532F #CF6E47 #FFFFFF #F7E3D8 rgba(180,83,47,.16) #3E7D5A #E1EFE5 #EEE6DB #FFFFFF', d: '#17110C #1E1711 #251C15 #30251C #F4ECE3 #D6C7B6 #A08C78 #3A2D22 #4B3B2E #E4835C #F0A07F #1E0E06 #3A2218 rgba(228,131,92,.22) #7CC59C #14291D #251C15 #3E3024' },
  rose: { n: 'Rose poudré & prune', l: '#F8F0F2 #F0E4E8 #FFFFFF #F1E5E9 #2A1420 #5B3A4B #8B6B7B #E8D5DC #D5BCC6 #8E3A63 #AE5481 #FFFFFF #F6E2EB rgba(142,58,99,.15) #2F7F68 #DFF0EA #F1E5E9 #FFFFFF', d: '#160C12 #1E1119 #26151F #331C2A #F6ECF1 #D9C3CE #A88A99 #3B2331 #4D2E40 #E59BC0 #F2BBD5 #2A0E1C #3A1D2C rgba(229,155,192,.22) #7FD1B9 #13302A #26151F #43283A' },
  ardoise: { n: 'Ardoise & cuivre', l: '#F1F2F4 #E7E9EC #FFFFFF #E6E8EB #15191F #3B434E #6A7380 #D6DAE0 #BFC5CE #9A5B2E #B9733F #FFFFFF #F3E6DB rgba(154,91,46,.15) #2B7A62 #DEEFE8 #E6E8EB #FFFFFF', d: '#0E1013 #14171B #1A1E23 #232830 #EEF0F3 #C7CDD5 #8F98A5 #2A3039 #373E49 #D9925B #EAB083 #1E1006 #33251A rgba(217,146,91,.22) #6CC7A6 #13291F #1A1E23 #2E353F' },
  lavande: { n: 'Lavande & menthe', l: '#F3F1FA #EAE6F5 #FFFFFF #EAE6F5 #1C1730 #443C63 #726A92 #DCD6EE #C5BDE2 #6A4FC4 #8670DC #FFFFFF #ECE6FB rgba(106,79,196,.15) #1F8A6B #DCF2EA #EAE6F5 #FFFFFF', d: '#100D1C #161226 #1C172F #26203E #F1EEFA #CEC8E6 #9A92BC #2C2547 #3A3260 #B7A4FF #CFC2FF #140B33 #2A2346 rgba(183,164,255,.22) #7FD9B8 #12302A #1C172F #352D55' }
};
const TSTATE = { l: { danger: '#B3372A', 'danger-soft': '#F7E3DF', warn: '#9A5600', 'warn-soft': '#F6E9D6' }, d: { danger: '#FF8A7A', 'danger-soft': '#3A1A16', warn: '#F4A259', 'warn-soft': '#33240F' } };
const tMQ = window.matchMedia ? matchMedia('(prefers-color-scheme: dark)') : null;
/* ----- Ma palette : deux couleurs choisies, tout le reste en est déduit ----- */
const hex2hsl = h => { h = (h || '#000000').replace('#', ''); const r = parseInt(h.slice(0, 2), 16) / 255, g = parseInt(h.slice(2, 4), 16) / 255, b = parseInt(h.slice(4, 6), 16) / 255, mx = Math.max(r, g, b), mn = Math.min(r, g, b), l = (mx + mn) / 2; let s = 0, hu = 0; if (mx !== mn) { const d = mx - mn; s = l > .5 ? d / (2 - mx - mn) : d / (mx + mn); hu = mx === r ? (g - b) / d + (g < b ? 6 : 0) : mx === g ? (b - r) / d + 2 : (r - g) / d + 4; hu *= 60; } return [hu, s * 100, l * 100]; };
const hsl = (h, s, l) => { s = Math.max(0, Math.min(100, s)) / 100; l = Math.max(0, Math.min(100, l)) / 100; const k = n => (n + h / 30) % 12, a = s * Math.min(l, 1 - l), f = n => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1))); return '#' + [f(0), f(8), f(4)].map(x => Math.round(x * 255).toString(16).padStart(2, '0')).join('').toUpperCase(); };
const rgba = (hx, a) => { const h = hx.replace('#', ''); return `rgba(${parseInt(h.slice(0, 2), 16)},${parseInt(h.slice(2, 4), 16)},${parseInt(h.slice(4, 6), 16)},${a})`; };
function customTheme(c) {
  const [ha, sa, la] = hex2hsl(c.a), [hb, sb0] = hex2hsl(c.b), sb = Math.min(sb0, 30);
  const gl = hsl(ha, sa, Math.min(la, 40)), gd = hsl(ha, Math.min(sa, 90), Math.max(la, 64));
  const L = [hsl(hb, sb, 95), hsl(hb, sb, 91), '#FFFFFF', hsl(hb, sb, 90), hsl(hb, Math.min(sb + 15, 45), 10), hsl(hb, sb, 27), hsl(hb, sb * .7, 42), hsl(hb, sb, 85), hsl(hb, sb, 76), gl, hsl(ha, sa, Math.min(la, 40) + 10), '#FFFFFF', hsl(ha, sa * .6, 93), rgba(gl, .16), '#187F5B', '#DDF0E7', hsl(hb, sb, 90), '#FFFFFF'];
  const D = [hsl(hb, sb, 6), hsl(hb, sb, 8), hsl(hb, sb, 10.5), hsl(hb, sb, 15), hsl(hb, sb * .5, 94), hsl(hb, sb * .5, 80), hsl(hb, sb * .6, 58), hsl(hb, sb, 18), hsl(hb, sb, 25), gd, hsl(ha, Math.min(sa, 90), Math.min(Math.max(la, 64) + 12, 88)), hsl(ha, 60, 9), hsl(ha, sa * .45, 15), rgba(gd, .22), '#5ED3A8', '#123328', hsl(hb, sb, 10.5), hsl(hb, sb, 21)];
  return { n: 'Ma palette', l: L.join(' '), d: D.join(' ') };
}
document.addEventListener('input', e => {
  const t = e.target; if (!t.dataset || !t.dataset.tcol) return;
  const c = thConf(); c.custom = c.custom || {}; c.custom[t.dataset.tcol] = t.value; c.id = 'custom';
  THEMES.custom = customTheme(c.custom); applyTheme();
  const sw = $('[data-theme="custom"] .thdots'); if (sw) { const x = THEMES.custom, l = x.l.split(' '), d = x.d.split(' '); sw.innerHTML = `<i style="background:${l[0]};box-shadow:inset 0 0 0 1px ${l[7]}"></i><i style="background:${l[9]}"></i><i style="background:${d[0]}"></i><i style="background:${d[9]}"></i>`; }
  clearTimeout(t._sv); t._sv = setTimeout(() => save(), 400);
});

function thConf() { const t = S.theme = S.theme && typeof S.theme === 'object' ? S.theme : {}; if (!t.custom || !t.custom.a) t.custom = { a: '#E9C46A', b: '#0F221C' }; THEMES.custom = customTheme(t.custom); if (!THEMES[t.id]) t.id = THEME_DEFAULT; if (!['auto', 'light', 'dark'].includes(t.mode)) t.mode = 'auto'; return t; }
function applyTheme() {
  const t = thConf(), dark = document.body.classList.contains('gal-home') || t.mode === 'dark' || (t.mode === 'auto' && tMQ && tMQ.matches), v = dark ? 'd' : 'l';
  const vals = THEMES[t.id][v].split(' '), r = document.documentElement;
  TKEYS.forEach((k, i) => r.style.setProperty('--' + k, vals[i]));
  Object.entries(Object.assign({}, TSTATE[v], (THEME_EXTRA || {})[v] || {})).forEach(([k, x]) => r.style.setProperty('--' + k, x));
  r.style.colorScheme = dark ? 'dark' : 'light'; r.dataset.mode = dark ? 'dark' : 'light';
  $$('meta[name="theme-color"]').forEach(m => m.setAttribute('content', vals[0]));
}
if (tMQ && tMQ.addEventListener) tMQ.addEventListener('change', () => { if (thConf().mode === 'auto') applyTheme(); });
function themeBlock() {
  const t = thConf();
  return `<p class="gt">Apparence</p>
    <div class="thgrid">${Object.entries(THEMES).map(([id, x]) => { const l = x.l.split(' '), d = x.d.split(' '); return `<button class="thsw" data-theme="${id}" aria-pressed="${t.id === id}"><span class="thdots"><i style="background:${l[0]};box-shadow:inset 0 0 0 1px ${l[7]}"></i><i style="background:${l[9]}"></i><i style="background:${d[0]}"></i><i style="background:${d[9]}"></i></span><span>${x.n}</span></button>`; }).join('')}</div>
    ${t.id === 'custom' ? `<div class="thpick"><label><input type="color" data-tcol="a" value="${t.custom.a}"><span>Couleur principale<small>boutons, chiffres, accents</small></span></label><label><input type="color" data-tcol="b" value="${t.custom.b}"><span>Teinte du fond<small>l'ambiance générale</small></span></label></div><p class="hint" style="margin-top:6px">L'app en tire toute seule une version claire et une version sombre lisibles.</p>` : ''}
    <div class="seg" role="group" aria-label="Mode" style="margin-top:10px">${[['auto', 'Auto'], ['light', 'Clair'], ['dark', 'Sombre']].map(([m, l]) => `<button data-tmode="${m}" aria-pressed="${t.mode === m}"><span class="dot"></span>${l}</button>`).join('')}</div>
    <p class="hint">Auto suit le réglage clair ou sombre de ton téléphone.</p>`;
}
function openSettingsBody() { openSettings(); }
function themeClick(t) {
  const el = t.closest('[data-theme],[data-tmode]'); if (!el) return false;
  const c = thConf();
  if (el.dataset.theme) { const was = c.id; c.id = el.dataset.theme; $$('[data-theme]').forEach(b => b.setAttribute('aria-pressed', b === el)); if ((was === 'custom') !== (c.id === 'custom')) { save(); applyTheme(); const sb = $('#settingsBody'), y = sb ? sb.scrollTop : 0; openSettingsBody(); if (sb) sb.scrollTop = y; return true; } }
  else { c.mode = el.dataset.tmode; $$('[data-tmode]').forEach(b => b.setAttribute('aria-pressed', b === el)); }
  save(); applyTheme(); haptic(); return true;
}

/* =====================================================================
   15. RENDU & NAVIGATION
   ===================================================================== */
const TABS = ['orbite', 'flux', 'parcours', 'foi', 'corps', 'routine', 'argent', 'business'];
const CVIEWS = ['entrainement', 'nutrition', 'soin'];
let tab = 'orbite', missedDismissed = false;
function render(animate) {
  const deco = tab !== 'flux' && tab !== 'z';
  document.body.classList.toggle('gal-on', deco); document.body.classList.toggle('gal-home', tab === 'orbite'); document.body.classList.toggle('gal-soft', deco && tab !== 'orbite');
  if (deco) ensureGalaxy();
  applyTheme();
  if (!tjLast) tjOpen();
  const app = $('#app');
  stopOrbit();
  app.className = animate ? 'view' : '';
  checkUnlocks();
  document.documentElement.classList.toggle('flux-on', tab === 'flux');
  if (tab !== 'flux' && FXS.io) { FXS.io.disconnect(); FXS.io = null; }
  app.innerHTML = { orbite: vOrbite, flux: vFlux, parcours: vParcours, foi: () => F.view === 'arabe' ? vArabe() : F.view === 'dhikr' ? vDhikr() : F.view === 'coeur' ? vHeart() : vHabits(), corps: () => C.view === 'nutrition' ? vNutrition() : C.view === 'soin' ? vSoin() : vTraining(), routine: vRoutine, argent: () => A.view === 'heures' ? vHeures() : A.view === 'zakat' ? (zkTick(), vZakat()) : vBudget(), business: vBusiness, z: () => window.__z ? window.__z.view() : vOrbite() }[tab]();
  coreGlyph();
  if (tab === 'orbite') { startOrbit(); checkGalaxy(); }
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
  tjMod(t);
  if (tab === 'z') zLock();
  if (CVIEWS.includes(t)) { setCView(t); if (tab === 'corps') { render(); window.scrollTo(0, 0); return; } t = 'corps'; }
  if (t === 'arabe' || t === 'habitudes' || t === 'dhikr' || t === 'coeur') { setFView(t); if (tab === 'foi') { render(); window.scrollTo(0, 0); return; } t = 'foi'; }
  if (t === 'heures' || t === 'budget' || t === 'zakat') { if (tab === 'argent' && A.view === 'heures' && $('#fDate')) readForm(); setAView(t); if (tab === 'argent') { render(); window.scrollTo(0, 0); return; } t = 'argent'; }
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
function coreGlyph() { const c = $('#core'); if (c && !c.querySelector('.bh')) { c.classList.add('bhole'); c.insertAdjacentHTML('afterbegin', '<span class="bh" aria-hidden="true"><i class="bh-glow"></i><i class="bh-lens"></i><i class="bh-disk back"><b></b></i><i class="bh-core"></i><i class="bh-disk front"><b></b></i></span>'); } }
function buildWheel() {
  const R = Math.max(112, Math.min(150, innerWidth / 2 - 38));
  $('#wheelItems').innerHTML = NAV.map(([k, n], i) => {
    const [x, y] = polar(R, navAngle(i)), locked = k === 'business' && !S.unlocks.business;
    const pl = k === 'flux' ? '<circle r="26" fill="url(#gSun)"/><circle r="11" fill="#FFF8E6"/>' : planetSvg(k, gStage(k), 15);
    return `<button class="w-item wp ${k === tab ? 'cur' : ''} ${locked ? 'locked' : ''}" data-nav="${k}" style="--x:${x.toFixed(1)}px;--y:${y.toFixed(1)}px;--i:${i}" aria-label="${n}${locked ? ', verrouillé' : ''}${k === tab ? ', ouvert' : ''}"><svg viewBox="-27 -27 54 54" aria-hidden="true">${pl}${locked ? `<svg x="-7" y="-7" width="14" height="14" viewBox="0 0 24 24" style="color:#E8C27A">${GLYPH.lock}</svg>` : ''}</svg><span class="w-lbl">${n}</span></button>`;
  }).join('');
  $('#wheelHint').textContent = tab === 'orbite' ? 'Où va-t-on ?' : 'Appui long : ta galaxie';
  if (!$('#wheelDefs')) $('#wheel').insertAdjacentHTML('afterbegin', `<svg id="wheelDefs" width="0" height="0" style="position:absolute" aria-hidden="true">${GDEFS}</svg>`);
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
  $('#wheelHint').textContent = k ? NAV.find(n => n[0] === k)[1] : (tab === 'orbite' ? 'Où va-t-on ?' : 'Appui long : ta galaxie');
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
  if (tjClick(t)) return;
  if (themeClick(t)) return;
  if (heartClick(t)) return;
  if (zkClick(t)) return;
  if (planClick(t)) return;
  if (mealClick(t)) return;
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
  if ((el = c('[data-say]'))) { sayAr(el.dataset.say); return; }
  if ((el = c('[data-fw]'))) { sayAr(el.querySelector('.a').textContent); if ($('#fatiha').classList.contains('hide')) { el.classList.toggle('shown'); haptic(); } return; }
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
  if (heartChange(t)) return;
  if (zkChange(t)) return;
  if (planChange(t)) return;
  if (mealChange(t)) return;
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
  if (document.visibilityState === 'visible') tjOpen();
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
  setTimeout(done, 4400);
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) done();
})();
(async function boot() {
  S = await loadState();
  save(true);
  let t = location.hash.slice(1);
  if (t === 'arabe' || t === 'habitudes' || t === 'dhikr' || t === 'coeur') { setFView(t); t = 'foi'; }
  if (t === 'heures' || t === 'budget' || t === 'zakat') { setAView(t); t = 'argent'; }
  if (CVIEWS.includes(t)) { setCView(t); t = 'corps'; }
  if (!TABS.includes(t)) { try { t = localStorage.getItem('sdp-tab'); } catch (e) {} }
  if (t === 'heures' || t === 'budget' || t === 'zakat') { setAView(t); t = 'argent'; }
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
const Z_MOD = 'LyogRXNwYWNlIHByaXbDqSDigJQgY2hhcmfDqSBzZXVsZW1lbnQgYXByw6hzIGxlIGJvbiBjb2RlLiBUb3V0IGVzdCBjaGlmZnLDqSBkYW5zIFMuemMuICovCihmdW5jdGlvbiAoKSB7CiAgY29uc3QgWiA9IHsga2V5OiBudWxsLCBzYWx0OiBudWxsLCBkOiBudWxsLCB2aWV3OiAnbWFpbicsIGhpZDogbnVsbCwgdXJnZTogbnVsbCwgcmVsOiBudWxsLCBkaDogbnVsbCB9OwogIGNvbnN0IE1TID0gWzEsIDMsIDcsIDE0LCAyMSwgMzAsIDQwLCA2MCwgOTAsIDE4MCwgMzY1XTsKICBjb25zdCBUUklHID0gW1snZW5udWknLCAnRW5udWknXSwgWydzdHJlc3MnLCAnU3RyZXNzJ10sIFsnc29saXR1ZGUnLCAnU29saXR1ZGUnXSwgWydmYXRpZ3VlJywgJ0ZhdGlndWUnXSwgWydvY2Nhc2lvbicsICdPY2Nhc2lvbiddLCBbJ3Njcm9sbCcsICdTY3JvbGwnXSwgWydhdXRyZScsICdBdXRyZSddXTsKICBjb25zdCBQTEFOU19CID0gW1snSmUgbVwnZW5udWllLCBzZXVsIMOgIGxhIG1haXNvbicsICdKZSBzb3JzIG1hcmNoZXIgMTAgbWludXRlcyBvdSBqZSBsYW5jZSB1bmUgc8OpYW5jZSBDb3JwcyddLCBbJ0plIHN1aXMgYXUgbGl0IGF2ZWMgbGUgdMOpbMOpcGhvbmUnLCAnSmUgbGUgcG9zZSBob3JzIGRlIGxhIGNoYW1icmUgZXQgamUgbGlzIGRldXggcGFnZXMnXSwgWydKZSByZW50cmUgZHUgdHJhdmFpbCBzdHJlc3PDqSBvdSBmYXRpZ3XDqScsICdEb3VjaGUsIGFibHV0aW9ucywgcHVpcyAxMCBtaW51dGVzIGRlIENvcmFuIG91IGRlIGRoaWtyJ10sIFsnVW4gc2Nyb2xsIGNvbW1lbmNlIMOgIGTDqXJhcGVyJywgJ0plIGZlcm1lIGxcJ2FwcGxpLCBqZSBtZSBsw6h2ZSwgamUgY2hhbmdlIGRlIHBpw6hjZSddLCBbJ0xcJ29jY2FzaW9uIHNlIHByw6lzZW50ZScsICdKXCdvdXZyZSDCqyBKXCdhaSB1bmUgZW52aWUgwrsgZXQgamUgbGFuY2UgbGEgdmFndWUnXV07CiAgY29uc3QgUExBTlNfTiA9IFtbJ0plIHNvcnMgZHUgdHJhdmFpbCcsICdVbiBjaGV3aW5nLWd1bSBvdSB1biBncmFuZCB2ZXJyZSBkXCdlYXUgw6AgbGEgcGxhY2UnXSwgWydKZSBtXCdlbm51aWUnLCAnNSBtaW51dGVzIGRlIG1hcmNoZSA6IGxcJ2VudmllIHBhc3NlIGVuIDMgw6AgNSBtaW51dGVzJ10sIFsnSmUgZmluaXMgdW4gcmVwYXMnLCAnSmUgbWUgbMOodmUgdG91dCBkZSBzdWl0ZSBldCBqZSBtZSBicm9zc2UgbGVzIGRlbnRzJ10sIFsnT24gbVwnZW4gcHJvcG9zZSB1bmUnLCAnwqsgTm9uIG1lcmNpLCBqXCdhcnLDqnRlLiDCuyBQcsOpcGFyw6kgw6AgbFwnYXZhbmNlLCBjXCdlc3QgcGx1cyBmYWNpbGUnXV07CiAgY29uc3QgQkFSX0IgPSBbWydmaWx0cmUnLCAnRmlsdHJlIGFjdGl2w6kgc3VyIGxcJ2lQaG9uZScsICdSw6lnbGFnZXMg4oaSIFRlbXBzIGRcJ8OpY3JhbiDihpIgQ29udGVudSBldCBjb25maWRlbnRpYWxpdMOpIOKGkiBSZXN0cmljdGlvbnMgZGUgY29udGVudSDihpIgQ29udGVudSB3ZWIg4oaSIExpbWl0ZXIgbGVzIHNpdGVzIHBvdXIgYWR1bHRlcy4nXSwgWydjb2RlJywgJ0NvZGUgVGVtcHMgZFwnw6ljcmFuIGNvbmZpw6kgw6AgcXVlbHF1XCd1biBkZSBjb25maWFuY2UnLCAnVHUgbmUgcGV1eCBwbHVzIHJldGlyZXIgbGUgZmlsdHJlIHN1ciB1biBjb3VwIGRlIHTDqnRlLiddLCBbJ2NoYW1icmUnLCAnVMOpbMOpcGhvbmUgcXVpIGRvcnQgaG9ycyBkZSBsYSBjaGFtYnJlJywgJ1VuIHZyYWkgcsOpdmVpbCBwb3VyIGxlIG1hdGluLiddLCBbJ2NvdWV0dGUnLCAnSmFtYWlzIGRlIHTDqWzDqXBob25lIHNvdXMgbGEgY291ZXR0ZSBuaSBhdXggdG9pbGV0dGVzJywgJyddLCBbJ2FwcHMnLCAnQ29tcHRlcyBldCBhcHBsaXMgcXVpIGTDqWNsZW5jaGVudCA6IHN1cHByaW3DqXMgb3UgbWFzcXXDqXMnLCAnJ10sIFsncG9ydGUnLCAnU2V1bCDDoCBsYSBtYWlzb24gOiBwb3J0ZSBvdXZlcnRlLCBqYW1haXMgYWxsb25nw6kgw6AgdHJhw65uZXInLCAnJ11dOwogIGNvbnN0IEJBUl9OID0gW1snc3RvY2snLCAnQXVjdW5lIHB1ZmYgZW4gcsOpc2VydmUgw6AgbGEgbWFpc29uJywgJyddLCBbJ2FjaGF0JywgJ1BsdXMgZFwnYWNoYXQgYXV0b21hdGlxdWUgOiBqZSBub3RlIGF2YW50IGRcJ2FjaGV0ZXInLCAnJ10sIFsnbGlldXgnLCAnSlwnw6l2aXRlIGxlcyBwYXVzZXMgYXZlYyBjZXV4IHF1aSB2YXBvdGVudCcsICcnXV07CiAgY29uc3QgQUNUX0IgPSBbWydsZXZlJywgJ0plIG1lIGzDqHZlIGV0IGplIGNoYW5nZSBkZSBwacOoY2UnXSwgWyd3dWR1JywgJ0plIGZhaXMgbWVzIGFibHV0aW9ucyddLCBbJ3BvbXBlcycsICcyMCBwb21wZXMgb3UgMzAgc3F1YXRzJ10sIFsndGVsJywgJ1TDqWzDqXBob25lIHBvc8OpIGRhbnMgdW5lIGF1dHJlIHBpw6hjZSddLCBbJ2RoaWtyJywgJ0RoaWtyIDogMzMgw5cgMyddLCBbJ21zZycsICdKXCfDqWNyaXMgw6AgcXVlbHF1XCd1biddXTsKICBjb25zdCBBQ1RfTiA9IFtbJ2VhdScsICdVbiBncmFuZCB2ZXJyZSBkXCdlYXUnXSwgWydtYXJjaGUnLCAnNSBtaW51dGVzIGRlIG1hcmNoZSddLCBbJ2dvbW1lJywgJ1VuIGNoZXdpbmctZ3VtJ10sIFsnZGhpa3InLCAnRGhpa3IgOiAzMyDDlyAzJ10sIFsnbGV2ZScsICdKZSBjaGFuZ2UgZGUgcGnDqGNlJ11dOwogIGNvbnN0IERISUtSID0gW1sn2LPZj9io2ZLYrdmO2KfZhtmOINin2YTZhNmO2ZHZh9mQJywgJ1N1YmhhbkFsbGFoJ10sIFsn2KfZhNmS2K3ZjtmF2ZLYr9mPINmE2ZDZhNmO2ZHZh9mQJywgJ0FsaGFtZHVsaWxsYWgnXSwgWyfYp9mE2YTZjtmR2YfZjyDYo9mO2YPZktio2Y7YsdmPJywgJ0FsbGFodSBha2JhciddXTsKICBjb25zdCBEQVkgPSA4NjRlNTsKCiAgLyogLS0tLS0tLS0tLSBzdHlsZXMgKGluamVjdMOpcyBwb3VyIG5lIHJpZW4gbGFpc3NlciBkYW5zIGluZGV4Lmh0bWwpIC0tLS0tLS0tLS0gKi8KICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd6c3QnKSkgewogICAgY29uc3Qgc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpOyBzdC5pZCA9ICd6c3QnOwogICAgc3QudGV4dENvbnRlbnQgPSBgCi56aHttYXJnaW4tdG9wOjRweH0KLnpoZXJve3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6Z3JpZDtwbGFjZS1pdGVtczpjZW50ZXI7bWFyZ2luLXRvcDoxOHB4fQouemhlcm8+c3Zne3dpZHRoOm1pbigyNzBweCw3NHZ3KTtoZWlnaHQ6YXV0bztvdmVyZmxvdzp2aXNpYmxlO2Rpc3BsYXk6YmxvY2t9Ci56aGN7cG9zaXRpb246YWJzb2x1dGU7aW5zZXQ6MDtkaXNwbGF5OmdyaWQ7cGxhY2UtaXRlbXM6Y2VudGVyO3RleHQtYWxpZ246Y2VudGVyO3BvaW50ZXItZXZlbnRzOm5vbmV9Ci56aGMgYntkaXNwbGF5OmJsb2NrO2ZvbnQ6NDAwIDQuNXJlbS8xIHZhcigtLXNlcmlmKX0KLnpoYyBzcGFue2ZvbnQtc2l6ZTouODEyNXJlbTtjb2xvcjp2YXIoLS1tdXRlZCl9Ci56dGlja3tmb250OjQwMCAxLjI1cmVtLzEuMiB2YXIoLS1zZXJpZik7Y29sb3I6dmFyKC0taW5rLTIpO2ZvbnQtdmFyaWFudC1udW1lcmljOnRhYnVsYXItbnVtc30KLnpzb3N7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2dhcDoxMHB4O3dpZHRoOjEwMCU7bWluLWhlaWdodDo2NHB4O21hcmdpbi10b3A6MjBweDtib3JkZXItcmFkaXVzOjIycHg7YmFja2dyb3VuZDp2YXIoLS1nb2xkKTtjb2xvcjp2YXIoLS1nb2xkLWluayk7Zm9udC13ZWlnaHQ6NzAwO2ZvbnQtc2l6ZToxLjA2MjVyZW07Ym94LXNoYWRvdzowIDAgMCAwIHZhcigtLWdsb3cpO2FuaW1hdGlvbjp6cHVsc2UgMi42cyBlYXNlLW91dCBpbmZpbml0ZX0KQGtleWZyYW1lcyB6cHVsc2V7MCV7Ym94LXNoYWRvdzowIDAgMCAwIHZhcigtLWdsb3cpfTcwJXtib3gtc2hhZG93OjAgMCAwIDE2cHggdHJhbnNwYXJlbnR9MTAwJXtib3gtc2hhZG93OjAgMCAwIDAgdHJhbnNwYXJlbnR9fQouem1zPnN2Z3t3aWR0aDoxMDAlO2hlaWdodDphdXRvO2Rpc3BsYXk6YmxvY2s7b3ZlcmZsb3c6dmlzaWJsZX0KLnpjYXJke21hcmdpbi10b3A6MTJweDtwYWRkaW5nOjE2cHg7Ym9yZGVyLXJhZGl1czp2YXIoLS1yKTtiYWNrZ3JvdW5kOnZhcigtLXN1cmZhY2UpfQouenBsYW57ZGlzcGxheTpncmlkO2dyaWQtdGVtcGxhdGUtY29sdW1uczptaW5tYXgoMCwxZnIpIG1pbm1heCgwLDFmcikgMzZweDtnYXA6NnB4O21hcmdpbi1ib3R0b206OHB4fQouenBsYW4gaW5wdXR7bWluLXdpZHRoOjA7bWluLWhlaWdodDo0NHB4O2JvcmRlcjowO2JvcmRlci1yYWRpdXM6MTJweDtiYWNrZ3JvdW5kOnZhcigtLXN1cmZhY2UpO3BhZGRpbmc6MCAxMHB4O2NvbG9yOnZhcigtLWluayk7Zm9udC1zaXplOi44NzVyZW19Ci56cGxhbiBpbnB1dDpmb2N1c3tvdXRsaW5lOjJweCBzb2xpZCB2YXIoLS1nb2xkKX0KLnpwbGFuIC5pY29uLWJ0bnt3aWR0aDozNnB4fQouemlme2Rpc3BsYXk6Z3JpZDtnYXA6OHB4fQouemlmIGRpdntwYWRkaW5nOjEycHggMTRweDtib3JkZXItcmFkaXVzOjE0cHg7YmFja2dyb3VuZDp2YXIoLS1zdXJmYWNlKTtmb250LXNpemU6LjkzNzVyZW07bGluZS1oZWlnaHQ6MS40fQouemlmIHNtYWxse2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOi42ODc1cmVtO2ZvbnQtd2VpZ2h0OjcwMDtsZXR0ZXItc3BhY2luZzouMWVtO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtjb2xvcjp2YXIoLS1tdXRlZCl9Ci56aWYgYntjb2xvcjp2YXIoLS1nb2xkKTtmb250LXdlaWdodDo2NTB9Ci56ZGlhbD5zdmd7d2lkdGg6bWluKDI1MHB4LDcwdncpO2hlaWdodDphdXRvO2Rpc3BsYXk6YmxvY2s7bWFyZ2luOjAgYXV0bztvdmVyZmxvdzp2aXNpYmxlfQouenRye2Rpc3BsYXk6Z3JpZDtncmlkLXRlbXBsYXRlLWNvbHVtbnM6OTBweCBtaW5tYXgoMCwxZnIpIDI4cHg7Z2FwOjEwcHg7YWxpZ24taXRlbXM6Y2VudGVyO2ZvbnQtc2l6ZTouODc1cmVtO21hcmdpbi10b3A6OHB4fQouenRyIC5iYXJ7aGVpZ2h0OjhweH0KLnprcGlze2Rpc3BsYXk6Z3JpZDtncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KDMsbWlubWF4KDAsMWZyKSk7Z2FwOjhweDttYXJnaW4tdG9wOjE0cHh9Ci56a3BpcyBkaXZ7cGFkZGluZzoxMnB4O2JvcmRlci1yYWRpdXM6MTRweDtiYWNrZ3JvdW5kOnZhcigtLXN1cmZhY2UpO3RleHQtYWxpZ246Y2VudGVyfQouemtwaXMgYntkaXNwbGF5OmJsb2NrO2ZvbnQ6NDAwIDEuNzVyZW0vMS4xIHZhcigtLXNlcmlmKX0KLnprcGlzIHNwYW57Zm9udC1zaXplOi42ODc1cmVtO2NvbG9yOnZhcigtLW11dGVkKTtsaW5lLWhlaWdodDoxLjI1O2Rpc3BsYXk6YmxvY2t9Ci56dXJnZXtwb3NpdGlvbjpmaXhlZDtpbnNldDowO3otaW5kZXg6MzM7YmFja2dyb3VuZDp2YXIoLS1iZyk7b3ZlcmZsb3c6YXV0bztwYWRkaW5nOmNhbGModmFyKC0tc2F0KSArIDE4cHgpIDIwcHggY2FsYyh2YXIoLS1zYWIpICsgMTIwcHgpO2FuaW1hdGlvbjp6aW4gLjM1cyB2YXIoLS1lYXNlKX0KLnp1cmdlIC5pbnttYXgtd2lkdGg6NTIwcHg7bWFyZ2luOjAgYXV0b30KQGtleWZyYW1lcyB6aW57ZnJvbXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlKC45OCl9fQouenN0YWtle2ZvbnQ6NDAwIDIuNHJlbS8xLjEgdmFyKC0tc2VyaWYpO2NvbG9yOnZhcigtLWdvbGQpO2ZvbnQtdmFyaWFudC1udW1lcmljOnRhYnVsYXItbnVtczttYXJnaW46NHB4IDAgMH0KLnp3YXZle3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6Z3JpZDtwbGFjZS1pdGVtczpjZW50ZXI7bWFyZ2luOjIycHggMCA4cHh9Ci56d2F2ZT5zdmd7d2lkdGg6bWluKDI1MHB4LDcwdncpO2hlaWdodDphdXRvO292ZXJmbG93OnZpc2libGV9Ci56YnJlYXRoe3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjExOHB4O2hlaWdodDoxMThweDtib3JkZXItcmFkaXVzOjUwJTtiYWNrZ3JvdW5kOnJhZGlhbC1ncmFkaWVudChjaXJjbGUsdmFyKC0tZ2xvdyksdHJhbnNwYXJlbnQgNzAlKTtib3gtc2hhZG93Omluc2V0IDAgMCAwIDEuNXB4IHZhcigtLWdvbGQpO2FuaW1hdGlvbjp6YnIgMTBzIGVhc2UtaW4tb3V0IGluZmluaXRlfQpAa2V5ZnJhbWVzIHpicnswJXt0cmFuc2Zvcm06c2NhbGUoLjcyKX00MCV7dHJhbnNmb3JtOnNjYWxlKDEuMTIpfTEwMCV7dHJhbnNmb3JtOnNjYWxlKC43Mil9fQouendje3Bvc2l0aW9uOmFic29sdXRlO2luc2V0OjA7ZGlzcGxheTpncmlkO3BsYWNlLWl0ZW1zOmNlbnRlcjt0ZXh0LWFsaWduOmNlbnRlcjtwb2ludGVyLWV2ZW50czpub25lfQouendjIGJ7ZGlzcGxheTpibG9jaztmb250OjQwMCAyLjVyZW0vMSB2YXIoLS1zZXJpZik7Zm9udC12YXJpYW50LW51bWVyaWM6dGFidWxhci1udW1zfQouendjIHNwYW57Zm9udC1zaXplOi44MTI1cmVtO2NvbG9yOnZhcigtLW11dGVkKX0KLnphY3Rze2Rpc3BsYXk6Z3JpZDtncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KDIsbWlubWF4KDAsMWZyKSk7Z2FwOjhweDttYXJnaW4tdG9wOjE0cHh9Ci56YWN0e21pbi1oZWlnaHQ6NThweDtwYWRkaW5nOjEwcHggMTJweDtib3JkZXItcmFkaXVzOjE0cHg7YmFja2dyb3VuZDp2YXIoLS1zdXJmYWNlKTt0ZXh0LWFsaWduOmxlZnQ7Zm9udC1zaXplOi44NzVyZW07bGluZS1oZWlnaHQ6MS4zO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7Z2FwOjEwcHg7dHJhbnNpdGlvbjpiYWNrZ3JvdW5kIC4ycyx0cmFuc2Zvcm0gLjE1cyB2YXIoLS1zcHJpbmcpfQouemFjdCBpe2ZsZXg6bm9uZTt3aWR0aDoyMnB4O2hlaWdodDoyMnB4O2JvcmRlci1yYWRpdXM6NTAlO2JveC1zaGFkb3c6aW5zZXQgMCAwIDAgMS41cHggdmFyKC0tb3JiaXQpO2Rpc3BsYXk6Z3JpZDtwbGFjZS1pdGVtczpjZW50ZXJ9Ci56YWN0IGkgc3Zne3dpZHRoOjEycHg7aGVpZ2h0OjEycHg7c3Ryb2tlOnZhcigtLWdvbGQtaW5rKTtzdHJva2Utd2lkdGg6MztmaWxsOm5vbmU7b3BhY2l0eTowfQouemFjdC5vbntiYWNrZ3JvdW5kOnZhcigtLWdvbGQtc29mdCl9Ci56YWN0Lm9uIGl7YmFja2dyb3VuZDp2YXIoLS1nb2xkKTtib3gtc2hhZG93Om5vbmV9Ci56YWN0Lm9uIGkgc3Zne29wYWNpdHk6MX0KLnphY3Q6YWN0aXZle3RyYW5zZm9ybTpzY2FsZSguOTUpfQouemRoe2Rpc3BsYXk6Z3JpZDtwbGFjZS1pdGVtczpjZW50ZXI7bWFyZ2luLXRvcDoxMnB4fQouemRoIGJ1dHRvbnt3aWR0aDoxODBweDtoZWlnaHQ6MTgwcHg7Ym9yZGVyLXJhZGl1czo1MCU7YmFja2dyb3VuZDp2YXIoLS1zdXJmYWNlKTtib3gtc2hhZG93Omluc2V0IDAgMCAwIDJweCB2YXIoLS1nb2xkKTtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2dhcDo0cHg7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjFzfQouemRoIGJ1dHRvbjphY3RpdmV7dHJhbnNmb3JtOnNjYWxlKC45NSl9Ci56ZGggLmFye2ZvbnQ6NDAwIDEuNnJlbS8xLjUgdmFyKC0tYXIpfQouemRoIGJ7Zm9udDo0MDAgMi4yNXJlbS8xIHZhcigtLXNlcmlmKTtjb2xvcjp2YXIoLS1nb2xkKX0KLnpyZWFzb25ze2xpc3Qtc3R5bGU6bm9uZTttYXJnaW46MTBweCAwIDA7cGFkZGluZzowO2Rpc3BsYXk6Z3JpZDtnYXA6NnB4fQouenJlYXNvbnMgbGl7cGFkZGluZzoxMHB4IDE0cHg7Ym9yZGVyLXJhZGl1czoxMnB4O2JhY2tncm91bmQ6dmFyKC0tZ29sZC1zb2Z0KTtmb250LXNpemU6LjkzNzVyZW19Ci56ZGFya3twb3NpdGlvbjpmaXhlZDtpbnNldDowO3otaW5kZXg6MzQ7YmFja2dyb3VuZDojMDMwODA2O2NvbG9yOiNDOUQ2RDA7b3ZlcmZsb3c6YXV0bztwYWRkaW5nOmNhbGModmFyKC0tc2F0KSArIDMwcHgpIDIycHggY2FsYyh2YXIoLS1zYWIpICsgMTIwcHgpO2FuaW1hdGlvbjp6ZmFkZSAuOXMgZWFzZSBib3RofQouemRhcmsgLmlue21heC13aWR0aDo1MjBweDttYXJnaW46MCBhdXRvfQpAa2V5ZnJhbWVzIHpmYWRle2Zyb217b3BhY2l0eTowfX0KLnpkYXJrIGgye2NvbG9yOiNFRUYzRUZ9Ci56ZGFyayAubnVtLWJpZ3tmb250OjQwMCA1cmVtLzEgdmFyKC0tc2VyaWYpO2NvbG9yOiM2QjdBNzQ7Zm9udC12YXJpYW50LW51bWVyaWM6dGFidWxhci1udW1zO3RleHQtYWxpZ246Y2VudGVyO21hcmdpbjoxMHB4IDAgMH0KLnpkYXJrIC5tdXRlZCwuemRhcmsgLnNtYWxsLm11dGVke2NvbG9yOiM3RThGODh9Ci56ZGFyayAuY2hpcHtiYWNrZ3JvdW5kOiMxMzIwMUI7Y29sb3I6I0M5RDZEMH0KLnpkYXJrIC5jaGlwW2FyaWEtcHJlc3NlZD0idHJ1ZSJde2JhY2tncm91bmQ6I0U5QzQ2QTtjb2xvcjojMUExNDA1fQouemRhcmsgdGV4dGFyZWF7YmFja2dyb3VuZDojMEMxNjEyO2NvbG9yOiNFRUYzRUZ9Ci56Z3Bze2Rpc3BsYXk6Z3JpZDtnYXA6OHB4fQouemRrdHtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2FsaWduLWl0ZW1zOmNlbnRlcjtnYXA6NHB4O3dpZHRoOjEwMCU7bWFyZ2luLXRvcDoxMHB4O3BhZGRpbmc6MThweCAxMnB4O2JvcmRlci1yYWRpdXM6MThweDtiYWNrZ3JvdW5kOnZhcigtLXJhaXNlKTt0b3VjaC1hY3Rpb246bWFuaXB1bGF0aW9uOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lfQouemRrdCAuYXJ7Zm9udDo0MDAgMS41cmVtLzEuNiB2YXIoLS1hcik7Y29sb3I6dmFyKC0tZ29sZCk7dGV4dC1hbGlnbjpjZW50ZXJ9Ci56ZGt0IGJ7Zm9udDo0MDAgM3JlbS8xIHZhcigtLXNlcmlmKX0KLnpka3Q6YWN0aXZle3RyYW5zZm9ybTpzY2FsZSguOTgpfQouemdwYntkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2dhcDoxMnB4O3dpZHRoOjEwMCU7cGFkZGluZzoxMnB4IDE0cHg7Ym9yZGVyLXJhZGl1czoxNHB4O2JhY2tncm91bmQ6dmFyKC0tcmFpc2UpO3RleHQtYWxpZ246bGVmdDtmb250LXdlaWdodDo2MDA7bWluLWhlaWdodDo1MnB4fQouemdwYiBpe2ZsZXg6bm9uZTt3aWR0aDoyNHB4O2hlaWdodDoyNHB4O2JvcmRlci1yYWRpdXM6NTAlO2Rpc3BsYXk6Z3JpZDtwbGFjZS1pdGVtczpjZW50ZXI7Ym94LXNoYWRvdzppbnNldCAwIDAgMCAycHggdmFyKC0tb3JiaXQpfQouemdwYiBpIHN2Z3t3aWR0aDoxM3B4O2hlaWdodDoxM3B4O3N0cm9rZTp0cmFuc3BhcmVudDtzdHJva2Utd2lkdGg6MztmaWxsOm5vbmV9Ci56Z3BiLm9uIGl7YmFja2dyb3VuZDp2YXIoLS1taW50KTtib3gtc2hhZG93Om5vbmV9LnpncGIub24gaSBzdmd7c3Ryb2tlOnZhcigtLXN1cmZhY2UpfQouemdwYjpkaXNhYmxlZHtvcGFjaXR5Oi40NX0KLnpncGx7ZGlzcGxheTpncmlkO2dhcDo2cHg7bWFyZ2luLXRvcDo4cHh9Ci56Z3BsPmRpdntkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2dhcDoxMHB4O3BhZGRpbmc6OHB4IDEycHg7Ym9yZGVyLXJhZGl1czoxMnB4O2JhY2tncm91bmQ6dmFyKC0tcmFpc2UpfQouemRhcmsgLnpxe21hcmdpbi10b3A6MjJweDtwYWRkaW5nOjE0cHggMTZweDtib3JkZXItcmFkaXVzOjE2cHg7YmFja2dyb3VuZDojMEMxNjEyO2NvbG9yOiNDOUQ2RDA7Zm9udC1zaXplOi45Mzc1cmVtO2xpbmUtaGVpZ2h0OjEuNX0KLnpkYXJrIC5idG4ucXVpZXR7YmFja2dyb3VuZDojMTMyMDFCO2NvbG9yOiNFRUYzRUZ9Ci56Ymlne2Rpc3BsYXk6Z3JpZDtwbGFjZS1pdGVtczpjZW50ZXI7bWFyZ2luLXRvcDoxOHB4fQouemJpZyBidXR0b257d2lkdGg6MTcwcHg7aGVpZ2h0OjE3MHB4O2JvcmRlci1yYWRpdXM6NTAlO2JhY2tncm91bmQ6dmFyKC0tc3VyZmFjZSk7Ym94LXNoYWRvdzppbnNldCAwIDAgMCAycHggdmFyKC0tb3JiaXQpO2ZvbnQ6NDAwIDMuMjVyZW0vMSB2YXIoLS1zZXJpZik7Y29sb3I6dmFyKC0taW5rKTt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMTJzIHZhcigtLXNwcmluZyl9Ci56YmlnIGJ1dHRvbjphY3RpdmV7dHJhbnNmb3JtOnNjYWxlKC45Myl9Ci56YmFycz5zdmd7d2lkdGg6MTAwJTtoZWlnaHQ6YXV0bztkaXNwbGF5OmJsb2NrO292ZXJmbG93OnZpc2libGV9Ci56cnVsZXJ7ZGlzcGxheTpncmlkO2dyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoMTEsbWlubWF4KDAsMWZyKSk7Z2FwOjRweDttYXJnaW4tdG9wOjEwcHh9Ci56cnVsZXIgYnV0dG9ue21pbi1oZWlnaHQ6NDBweDtib3JkZXItcmFkaXVzOjEwcHg7YmFja2dyb3VuZDp2YXIoLS1zdXJmYWNlKTtmb250LXdlaWdodDo3MDA7Zm9udC1zaXplOi44NzVyZW07Y29sb3I6dmFyKC0taW5rLTIpfQouenJ1bGVyIGJ1dHRvblthcmlhLXByZXNzZWQ9InRydWUiXXtiYWNrZ3JvdW5kOnZhcigtLWdvbGQpO2NvbG9yOnZhcigtLWdvbGQtaW5rKX0KLnpzZXQgaW5wdXR7d2lkdGg6MTAwJX0KLnFzY2VuZXtkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCU7aGVpZ2h0OmF1dG87bWFyZ2luLXRvcDoxNnB4O2JvcmRlci1yYWRpdXM6MThweH0KLnFoZWFke2Rpc3BsYXk6Z3JpZDtncmlkLXRlbXBsYXRlLWNvbHVtbnM6MmZyIDFmcjtnYXA6OHB4O21hcmdpbi10b3A6MTJweH0KLnFoZWFkIGRpdntkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO3BhZGRpbmc6MTJweCAxNHB4O2JvcmRlci1yYWRpdXM6MTZweDtiYWNrZ3JvdW5kOnZhcigtLXN1cmZhY2UpfQoucWhlYWQgYntmb250OjQwMCAycmVtLzEuMSB2YXIoLS1zZXJpZik7Y29sb3I6dmFyKC0tZ29sZCl9LnFoZWFkIHNwYW57Zm9udC1zaXplOi43NXJlbTtjb2xvcjp2YXIoLS1tdXRlZCl9Ci5xY3Z7ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlfQoucWJ0bnN7ZGlzcGxheTpncmlkO2dyaWQtdGVtcGxhdGUtY29sdW1uczoyZnIgMWZyO2dhcDo4cHg7bWFyZ2luLXRvcDoxMnB4fQoucWJ0bnMgLmJ0bnttaW4taGVpZ2h0OjU2cHh9Ci5xcGVye2Rpc3BsYXk6Z3JpZDtncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyIDEuNmZyIGF1dG87Z2FwOjhweDthbGlnbi1pdGVtczplbmQ7bWFyZ2luLWJvdHRvbTo4cHh9Ci5xcGVyIGxhYmVse2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47Z2FwOjRweDtmb250LXNpemU6Ljc1cmVtO2ZvbnQtd2VpZ2h0OjYwMDtjb2xvcjp2YXIoLS1tdXRlZCl9Ci5xcGVyIGlucHV0LC5xcGVyIHNlbGVjdHttaW4taGVpZ2h0OjQ0cHg7Ym9yZGVyOjA7Ym9yZGVyLXJhZGl1czoxMnB4O2JhY2tncm91bmQ6dmFyKC0tcmFpc2UpO2NvbG9yOnZhcigtLWluayk7cGFkZGluZzowIDEwcHg7Zm9udDppbmhlcml0fQoucWJpZ3ttYXJnaW46MTRweCAwIDEwcHg7Zm9udDo0MDAgMi40cmVtLzEuMSB2YXIoLS1zZXJpZik7Y29sb3I6dmFyKC0tZ29sZCl9LnFiaWcgc21hbGx7Zm9udDo1MDAgLjgxMjVyZW0gdmFyKC0tc2Fucyk7Y29sb3I6dmFyKC0tbXV0ZWQpfQouemNhcmQgLnpsYmx7ZGlzcGxheTpibG9jazttYXJnaW46MTJweCAwIDZweDtmb250LXNpemU6LjgxMjVyZW07Zm9udC13ZWlnaHQ6NjAwO2NvbG9yOnZhcigtLWluay0yKX0KCmA7CiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0KTsKICB9CgogIC8qIC0tLS0tLS0tLS0gb3V0aWxzIC0tLS0tLS0tLS0gKi8KICBjb25zdCBIID0gKCkgPT4gWi5kLmhhYml0cy5maW5kKGggPT4gaC5pZCA9PT0gWi5oaWQpIHx8IFouZC5oYWJpdHNbMF07CiAgY29uc3Qgbm93ID0gKCkgPT4gRGF0ZS5ub3coKTsKICBjb25zdCBkYXlzID0gaCA9PiBNYXRoLm1heCgwLCAobm93KCkgLSBoLnN0YXJ0KSAvIERBWSk7CiAgY29uc3QgdHdvID0gbiA9PiBTdHJpbmcobikucGFkU3RhcnQoMiwgJzAnKTsKICBmdW5jdGlvbiBkdXIobXMpIHsgY29uc3QgcyA9IE1hdGguZmxvb3IobXMgLyAxMDAwKSwgZCA9IE1hdGguZmxvb3IocyAvIDg2NDAwKTsgcmV0dXJuIGAke2R9IGogJHt0d28oTWF0aC5mbG9vcihzICUgODY0MDAgLyAzNjAwKSl9OiR7dHdvKE1hdGguZmxvb3IocyAlIDM2MDAgLyA2MCkpfToke3R3byhzICUgNjApfWA7IH0KICBjb25zdCBuZXh0TXMgPSBkID0+IE1TLmZpbmQobSA9PiBtID4gZCkgfHwgbnVsbDsKICBjb25zdCBwcmV2TXMgPSBkID0+IFswLCAuLi5NU10uZmlsdGVyKG0gPT4gbSA8PSBkKS5wb3AoKTsKICBhc3luYyBmdW5jdGlvbiBwZXJzaXN0KCkgeyBpZiAoIVoua2V5KSByZXR1cm47IFMuemMgPSBhd2FpdCB6U2VhbChaLmtleSwgWi5zYWx0LCBaLmQpOyBzYXZlKHRydWUpOyB9CiAgY29uc3QgaWNvID0gKHAsIHN6ID0gMjApID0+IGA8c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IiR7c3p9IiBoZWlnaHQ9IiR7c3p9IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgYXJpYS1oaWRkZW49InRydWUiPiR7cH08L3N2Zz5gOwogIGNvbnN0IExPQ0sgPSBpY28oJzxyZWN0IHg9IjUiIHk9IjEwLjUiIHdpZHRoPSIxNCIgaGVpZ2h0PSIxMCIgcng9IjIuNSIvPjxwYXRoIGQ9Ik04LjUgMTAuNVY3LjVhMy41IDMuNSAwIDAgMSA3IDB2MyIvPicpOwogIGNvbnN0IFggPSBpY28oJzxwYXRoIGQ9Ik02IDZsMTIgMTJNMTggNkw2IDE4Ii8+JywgMTgpOwogIGZ1bmN0aW9uIG5ld0hhYml0KG5hbWUsIG1vZGUsIG5pYywgc3RhcnQpIHsKICAgIHJldHVybiB7IGlkOiAnaCcgKyB1aWQoKSwgbmFtZSwgbW9kZSwgbmljLCBzdGFydDogc3RhcnQgfHwgbm93KCksIGJlc3Q6IDAsIHJlbGFwc2VzOiBbXSwgdXJnZXM6IFtdLCBsb2c6IFtdLCByZWFkeTogW10sIHJlYXNvbnM6IFtdLCBwbGFuczogKG5pYyA/IFBMQU5TX04gOiBQTEFOU19CKS5tYXAocCA9PiBwLnNsaWNlKCkpLCBiYXI6IHt9LCBtczoge30sIGxhc3RDbGVhbjogJycsIHByaWNlOiAnJywgcGVyOiAnJyB9OwogIH0KCiAgLyogLS0tLS0tLS0tLSByw6ljb21wZW5zZXMgcHJvcHJlcyDDoCBsJ2VzcGFjZSAtLS0tLS0tLS0tICovCiAgZnVuY3Rpb24gZGFpbHlDaGVjaygpIHsKICAgIGNvbnN0IGsgPSB0b2RheUlTTygpOyBsZXQgY2hhbmdlZCA9IGZhbHNlOwogICAgWi5kLmhhYml0cy5maWx0ZXIoaCA9PiBoLm1vZGUgPT09ICdzdG9wJykuZm9yRWFjaChoID0+IHsKICAgICAgY29uc3QgZCA9IGRheXMoaCk7CiAgICAgIGNvbnN0IGZyZXNoID0gTVMuZmlsdGVyKG0gPT4gZCA+PSBtICYmICFoLm1zW21dKTsgZnJlc2guZm9yRWFjaChtID0+IHsgaC5tc1ttXSA9IDE7IH0pOwogICAgICBjb25zdCB0b3AgPSBmcmVzaFtmcmVzaC5sZW5ndGggLSAxXSwgY2xlYW4gPSBkID49IDEgJiYgaC5sYXN0Q2xlYW4gIT09IGs7CiAgICAgIGlmIChjbGVhbikgaC5sYXN0Q2xlYW4gPSBrOwogICAgICBpZiAoZnJlc2gubGVuZ3RoIHx8IGNsZWFuKSBjaGFuZ2VkID0gdHJ1ZTsKICAgICAgaWYgKHRvcCkgc2V0VGltZW91dCgoKSA9PiB7IGxhc3RQdCA9IHsgeDogaW5uZXJXaWR0aCAvIDIsIHk6IGlubmVySGVpZ2h0ICogLjM1IH07IHJld2FyZCh0b3AgPj0gMzAgPyAzMCA6IHRvcCA+PSA3ID8gMTUgOiA4LCB7IGJpZzogdHJ1ZSwgbXNnOiBbYFBhbGllciAke3RvcH0gam91ciR7dG9wID4gMSA/ICdzJyA6ICcnfWAsIHRvcCA+PSA0MCA/ICdRdWFyYW50ZSBqb3VycyA6IGxlIHRlbXBzIHF1XCdpbCBmYXV0LCBkaXQtb24sIHBvdXIgcXVcJ3VuIMOpdGF0IGRldmllbm5lIHVuZSBuYXR1cmUuIFR1IHkgZXMuJyA6ICdUdSB2aWVucyBkXCdhbGx1bWVyIHVuZSBub3V2ZWxsZSDDqXRvaWxlLiBSZWdhcmRlIGxlIGNoZW1pbiBwYXJjb3VydS4nXSB9KTsgfSwgNzAwKTsKICAgICAgZWxzZSBpZiAoY2xlYW4pIHNldFRpbWVvdXQoKCkgPT4geyBsYXN0UHQgPSB7IHg6IGlubmVyV2lkdGggLyAyLCB5OiBpbm5lckhlaWdodCAqIC4zNSB9OyByZXdhcmQoNCwgeyBtc2c6IFsnVW4gam91ciBkZSBwbHVzJywgYCR7ZXNjKGgubmFtZSl9IDogJHtNYXRoLmZsb29yKGQpfSBqb3VycyB0ZW51cy4gQ2hhcXVlIGpvdXIgcmVuZm9yY2UgbGUgY2hlbWluIHF1ZSB0dSBjb25zdHJ1aXMuYF0gfSk7IH0sIDcwMCk7CiAgICAgIGguYmVzdCA9IE1hdGgubWF4KGguYmVzdCB8fCAwLCBub3coKSAtIGguc3RhcnQpOwogICAgfSk7CiAgICBpZiAoY2hhbmdlZCkgcGVyc2lzdCgpOwogIH0KCiAgLyogLS0tLS0tLS0tLSB2dWVzIC0tLS0tLS0tLS0gKi8KICBmdW5jdGlvbiBoZWFkKCkgewogICAgcmV0dXJuIGA8aGVhZGVyIGNsYXNzPSJ0b3AiPjxkaXY+PHAgY2xhc3M9ImV5ZWJyb3ciPkVzcGFjZSBwcml2w6k8L3A+PGgxPkppaGFkIDxlbT5hbi1uYWZzPC9lbT48L2gxPjxwPkxlIGNvbWJhdCBjb250cmUgc29pLW3Dqm1lLiBJY2ksIHBlcnNvbm5lIGQnYXV0cmUgbidlbnRyZS48L3A+PC9kaXY+CiAgICAgIDxkaXYgY2xhc3M9InRvcC1hY3Rpb25zIj48YnV0dG9uIGNsYXNzPSJpY29uLWJ0biIgZGF0YS16bG9jayBhcmlhLWxhYmVsPSJWZXJyb3VpbGxlciI+JHtMT0NLfTwvYnV0dG9uPjwvZGl2PjwvaGVhZGVyPmA7CiAgfQogIGZ1bmN0aW9uIHRhYnMoKSB7CiAgICByZXR1cm4gYDxkaXYgY2xhc3M9InNlZyIgcm9sZT0iZ3JvdXAiIHN0eWxlPSJtYXJnaW4tdG9wOjIwcHgiPiR7Wi5kLmhhYml0cy5tYXAoaCA9PiBgPGJ1dHRvbiBkYXRhLXpoPSIke2guaWR9IiBhcmlhLXByZXNzZWQ9IiR7Wi5oaWQgIT09ICdfX3FhZGEnICYmIGguaWQgPT09IEgoKS5pZH0iPiR7ZXNjKGgubmFtZSB8fCAnU2FucyBub20nKX08L2J1dHRvbj5gKS5qb2luKCcnKX08YnV0dG9uIGRhdGEtemg9Il9fcWFkYSIgYXJpYS1wcmVzc2VkPSIke1ouaGlkID09PSAnX19xYWRhJ30iPlJhdHRyYXBhZ2U8L2J1dHRvbj48L2Rpdj5gOwogIH0KICBmdW5jdGlvbiBoZXJvKGgpIHsKICAgIGNvbnN0IGQgPSBkYXlzKGgpLCBueCA9IG5leHRNcyhkKSwgcHYgPSBwcmV2TXMoZCksIHAgPSBueCA/IChkIC0gcHYpIC8gKG54IC0gcHYpIDogMSwgUiA9IDEwMDsKICAgIHJldHVybiBgPGRpdiBjbGFzcz0iemhlcm8iPjxzdmcgdmlld0JveD0iLTEzMCAtMTMwIDI2MCAyNjAiIGFyaWEtaGlkZGVuPSJ0cnVlIj4KICAgICAgPGNpcmNsZSByPSIke1J9IiBmaWxsPSJub25lIiBzdHJva2U9InZhcigtLXJhaXNlKSIgc3Ryb2tlLXdpZHRoPSIxNiIvPgogICAgICA8Y2lyY2xlIHI9IiR7Un0iIGZpbGw9Im5vbmUiIHN0cm9rZT0idmFyKC0tZ29sZCkiIHN0cm9rZS13aWR0aD0iMTYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwKSIgJHtyaW5nRGFzaChSLCBwKX0gc3R5bGU9ImZpbHRlcjpkcm9wLXNoYWRvdygwIDAgMTBweCB2YXIoLS1nbG93KSkiLz48L3N2Zz4KICAgICAgPGRpdiBjbGFzcz0iemhjIj48ZGl2PjxiIGNsYXNzPSJudW0iPiR7TWF0aC5mbG9vcihkKX08L2I+PHNwYW4+am91ciR7TWF0aC5mbG9vcihkKSA+IDEgPyAncycgOiAnJ30gdGVudSR7TWF0aC5mbG9vcihkKSA+IDEgPyAncycgOiAnJ308L3NwYW4+PHAgY2xhc3M9Inp0aWNrIiBpZD0ielRpY2siPiR7ZHVyKG5vdygpIC0gaC5zdGFydCkuc3BsaXQoJyAnKS5zbGljZSgyKS5qb2luKCcgJyl9PC9wPjxzcGFuPiR7bnggPyBgcHJvY2hhaW5lIMOpdG9pbGUgOiAke254fSBqYCA6ICdhdS1kZWzDoCBkZXMgw6l0b2lsZXMnfTwvc3Bhbj48L2Rpdj48L2Rpdj48L2Rpdj5gOwogIH0KICBmdW5jdGlvbiBzdGFycyhoKSB7CiAgICBjb25zdCBkID0gZGF5cyhoKSwgVyA9IDMzMCwgcHRzID0gTVMubWFwKChtLCBpKSA9PiB7IGNvbnN0IHggPSAxNCArIGkgKiAoVyAtIDI4KSAvIChNUy5sZW5ndGggLSAxKSwgeSA9IDQwIC0gTWF0aC5zaW4oaSAvIChNUy5sZW5ndGggLSAxKSAqIE1hdGguUEkpICogMjY7IHJldHVybiBbeCwgeSwgbV07IH0pOwogICAgY29uc3QgbnggPSBuZXh0TXMoZCk7CiAgICByZXR1cm4gYDxkaXYgY2xhc3M9InptcyI+PHN2ZyB2aWV3Qm94PSIwIDAgJHtXfSA3NCIgcm9sZT0iaW1nIiBhcmlhLWxhYmVsPSJQYWxpZXJzIj4KICAgICAgPHBvbHlsaW5lIHBvaW50cz0iJHtwdHMubWFwKHAgPT4gcC5zbGljZSgwLCAyKS5qb2luKCcsJykpLmpvaW4oJyAnKX0iIGZpbGw9Im5vbmUiIHN0cm9rZT0idmFyKC0tb3JiaXQpIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1kYXNoYXJyYXk9IjIgNCIvPgogICAgICAke3B0cy5tYXAoKFt4LCB5LCBtXSkgPT4geyBjb25zdCBvbiA9IGQgPj0gbSwgbnh0ID0gbSA9PT0gbng7IHJldHVybiBgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoJHt4LnRvRml4ZWQoMSl9ICR7eS50b0ZpeGVkKDEpfSkiPiR7b24gPyAnPGNpcmNsZSByPSIxMCIgZmlsbD0idmFyKC0tZ2xvdykiLz4nIDogJyd9PGNpcmNsZSByPSIke29uID8gNS41IDogNH0iIGZpbGw9IiR7b24gPyAndmFyKC0tZ29sZCknIDogJ3ZhcigtLXN1cmZhY2UpJ30iIHN0cm9rZT0iJHtvbiB8fCBueHQgPyAndmFyKC0tZ29sZCknIDogJ3ZhcigtLW9yYml0KSd9IiBzdHJva2Utd2lkdGg9IiR7bnh0ID8gMiA6IDEuMn0iPiR7bnh0ID8gJzxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iNDs2OzQiIGR1cj0iMnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+JyA6ICcnfTwvY2lyY2xlPjx0ZXh0IHk9IjIyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHlsZT0iZm9udC1zaXplOjkuNXB4O2ZvbnQtd2VpZ2h0OjcwMDtmaWxsOnZhcigtLSR7b24gPyAnZ29sZCcgOiAnbXV0ZWQnfSkiPiR7bX08L3RleHQ+PC9nPmA7IH0pLmpvaW4oJycpfQogICAgPC9zdmc+PC9kaXY+YDsKICB9CiAgZnVuY3Rpb24gZGlhbChoKSB7CiAgICBjb25zdCBSID0gNzgsIGV2ID0gaC5tb2RlID09PSAnd2F0Y2gnID8gaC5sb2cuc2xpY2UoLTIwMCkubWFwKHQgPT4gW3QsICdnb2xkJ10pIDogaC51cmdlcy5zbGljZSgtMTUwKS5tYXAodSA9PiBbdS50LCB1LndvbiA/ICdnb2xkJyA6ICdkYW5nZXInXSkuY29uY2F0KGgucmVsYXBzZXMuc2xpY2UoLTgwKS5tYXAociA9PiBbci50LCAnZGFuZ2VyJ10pKTsKICAgIGNvbnN0IGNudCA9IEFycmF5KDI0KS5maWxsKDApOyBldi5mb3JFYWNoKChbdF0pID0+IGNudFtuZXcgRGF0ZSh0KS5nZXRIb3VycygpXSsrKTsKICAgIGNvbnN0IHRvcCA9IGNudC5pbmRleE9mKE1hdGgubWF4KC4uLmNudCkpOwogICAgbGV0IHNlZWQgPSAzOyBjb25zdCBybmQgPSAoKSA9PiAoc2VlZCA9IChzZWVkICogOTMwMSArIDQ5Mjk3KSAlIDIzMzI4MCkgLyAyMzMyODA7CiAgICBjb25zdCBkb3RzID0gZXYubWFwKChbdCwgY10pID0+IHsgY29uc3QgZHQgPSBuZXcgRGF0ZSh0KSwgYSA9IChkdC5nZXRIb3VycygpICsgZHQuZ2V0TWludXRlcygpIC8gNjApICogMTUsIFt4LCB5XSA9IHBvbGFyKFIgLSAxNCArIHJuZCgpICogMjgsIGEpOyByZXR1cm4gYDxjaXJjbGUgY3g9IiR7eC50b0ZpeGVkKDEpfSIgY3k9IiR7eS50b0ZpeGVkKDEpfSIgcj0iMy4yIiBmaWxsPSJ2YXIoLS0ke2N9KSIgb3BhY2l0eT0iLjg1Ii8+YDsgfSkuam9pbignJyk7CiAgICBjb25zdCB0aWNrcyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDI0IH0sIChfLCBpKSA9PiB7IGNvbnN0IFt4MCwgeTBdID0gcG9sYXIoUiArIDIwLCBpICogMTUpLCBbeDEsIHkxXSA9IHBvbGFyKFIgKyAoaSAlIDYgPyAyNCA6IDI4KSwgaSAqIDE1KTsgcmV0dXJuIGA8bGluZSB4MT0iJHt4MC50b0ZpeGVkKDEpfSIgeTE9IiR7eTAudG9GaXhlZCgxKX0iIHgyPSIke3gxLnRvRml4ZWQoMSl9IiB5Mj0iJHt5MS50b0ZpeGVkKDEpfSIgc3Ryb2tlPSJ2YXIoLS1tdXRlZCkiIHN0cm9rZS13aWR0aD0iJHtpICUgNiA/IDEgOiAxLjZ9Ii8+YDsgfSkuam9pbignJyk7CiAgICBjb25zdCBsYmwgPSBbMCwgNiwgMTIsIDE4XS5tYXAoaGggPT4geyBjb25zdCBbeCwgeV0gPSBwb2xhcihSICsgNDAsIGhoICogMTUpOyByZXR1cm4gYDx0ZXh0IHg9IiR7eC50b0ZpeGVkKDEpfSIgeT0iJHsoeSArIDQpLnRvRml4ZWQoMSl9IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHlsZT0iZm9udC1zaXplOjEwcHg7Zm9udC13ZWlnaHQ6NzAwO2ZpbGw6dmFyKC0tbXV0ZWQpIj4ke2hofSBoPC90ZXh0PmA7IH0pLmpvaW4oJycpOwogICAgcmV0dXJuIGA8ZGl2IGNsYXNzPSJ6ZGlhbCI+PHN2ZyB2aWV3Qm94PSItMTMwIC0xMzAgMjYwIDI2MCIgcm9sZT0iaW1nIiBhcmlhLWxhYmVsPSJIZXVyZXMgZGVzIGVudmllcyI+CiAgICAgIDxjaXJjbGUgcj0iJHtSfSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ2YXIoLS1yYWlzZSkiIHN0cm9rZS13aWR0aD0iMzAiLz4ke3RpY2tzfSR7bGJsfSR7ZG90c30KICAgICAgPHRleHQgeT0iLTQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0eWxlPSJmb250OjQwMCAyNnB4IHZhcigtLXNlcmlmKTtmaWxsOnZhcigtLWluaykiPiR7ZXYubGVuZ3RoID8gYCR7dG9wfSBoYCA6ICfigJQnfTwvdGV4dD4KICAgICAgPHRleHQgeT0iMTQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0eWxlPSJmb250LXNpemU6OXB4O2ZvbnQtd2VpZ2h0OjcwMDtsZXR0ZXItc3BhY2luZzouMWVtO2ZpbGw6dmFyKC0tbXV0ZWQpIj4ke2V2Lmxlbmd0aCA/ICdIRVVSRSDDgCBSSVNRVUUnIDogJ1BBUyBFTkNPUkUgREUgRE9OTsOJRVMnfTwvdGV4dD48L3N2Zz48L2Rpdj5gOwogIH0KICBmdW5jdGlvbiB0cmlnZ2VycyhoKSB7CiAgICBjb25zdCBjID0ge307IGgudXJnZXMuY29uY2F0KGgucmVsYXBzZXMpLmZvckVhY2godSA9PiB7IGlmICh1LnRyaWcpIGNbdS50cmlnXSA9IChjW3UudHJpZ10gfHwgMCkgKyAxOyB9KTsKICAgIGNvbnN0IGFyciA9IFRSSUcubWFwKChbaywgbl0pID0+IFtuLCBjW2tdIHx8IDBdKS5maWx0ZXIoeCA9PiB4WzFdKS5zb3J0KChhLCBiKSA9PiBiWzFdIC0gYVsxXSk7CiAgICBpZiAoIWFyci5sZW5ndGgpIHJldHVybiAnJzsKICAgIGNvbnN0IG14ID0gYXJyWzBdWzFdOwogICAgcmV0dXJuIGA8cCBjbGFzcz0iZXllYnJvdyIgc3R5bGU9Im1hcmdpbi10b3A6MThweCI+RMOpY2xlbmNoZXVyczwvcD4ke2Fyci5tYXAoKFtuLCB2XSkgPT4gYDxkaXYgY2xhc3M9Inp0ciI+PHNwYW4+JHtufTwvc3Bhbj48ZGl2IGNsYXNzPSJiYXIiPjxpIHN0eWxlPSJ3aWR0aDoke3YgLyBteCAqIDEwMH0lIj48L2k+PC9kaXY+PGIgY2xhc3M9Im51bSI+JHt2fTwvYj48L2Rpdj5gKS5qb2luKCcnKX1gOwogIH0KICBmdW5jdGlvbiBwbGFuc0Jsb2NrKGgpIHsKICAgIHJldHVybiBgPHNlY3Rpb24+PGRpdiBjbGFzcz0icm93IGJldHdlZW4iIHN0eWxlPSJtYXJnaW4tYm90dG9tOjEycHgiPjxoMiBzdHlsZT0ibWFyZ2luOjAiPlNp4oCmIGFsb3Jz4oCmPC9oMj48YnV0dG9uIGNsYXNzPSJsaW5rLWJ0biIgZGF0YS16ZWRpdD0icGxhbnMiPk1vZGlmaWVyPC9idXR0b24+PC9kaXY+CiAgICAgIDxwIGNsYXNzPSJzbWFsbCBtdXRlZCIgc3R5bGU9Im1hcmdpbjotNHB4IDAgMTJweCI+RMOpY2lkw6kgw6AgZnJvaWQsIGFwcGxpcXXDqSDDoCBjaGF1ZC4gUHLDqXBhcmVyIHNhIHLDqXBvbnNlIMOgIGwnYXZhbmNlIGRvdWJsZSBsZXMgY2hhbmNlcyBkZSBzJ3kgdGVuaXIuPC9wPgogICAgICA8ZGl2IGNsYXNzPSJ6aWYiPiR7aC5wbGFucy5tYXAocCA9PiBgPGRpdj48c21hbGw+U2k8L3NtYWxsPiR7ZXNjKHBbMF0pfTxicj48c21hbGwgc3R5bGU9Im1hcmdpbi10b3A6NnB4Ij5BbG9yczwvc21hbGw+PGI+JHtlc2MocFsxXSl9PC9iPjwvZGl2PmApLmpvaW4oJycpIHx8ICc8cCBjbGFzcz0iZW1wdHkiPkF1Y3VuIHBsYW4uPC9wPid9PC9kaXY+PC9zZWN0aW9uPmA7CiAgfQogIGZ1bmN0aW9uIHJlYXNvbnNCbG9jayhoKSB7CiAgICByZXR1cm4gYDxzZWN0aW9uPjxkaXYgY2xhc3M9InJvdyBiZXR3ZWVuIiBzdHlsZT0ibWFyZ2luLWJvdHRvbToxMnB4Ij48aDIgc3R5bGU9Im1hcmdpbjowIj5NZXMgcmFpc29uczwvaDI+PGJ1dHRvbiBjbGFzcz0ibGluay1idG4iIGRhdGEtemVkaXQ9InJlYXNvbnMiPk1vZGlmaWVyPC9idXR0b24+PC9kaXY+CiAgICAgICR7aC5yZWFzb25zLmxlbmd0aCA/IGA8dWwgY2xhc3M9InpyZWFzb25zIj4ke2gucmVhc29ucy5tYXAociA9PiBgPGxpPiR7ZXNjKHIpfTwvbGk+YCkuam9pbignJyl9PC91bD5gIDogJzxwIGNsYXNzPSJzbWFsbCBtdXRlZCI+w4ljcmlzIHBvdXJxdW9pIHR1IGFycsOqdGVzLCBhdmVjIHRlcyBtb3RzLiBFbGxlcyBzXCdhZmZpY2hlcm9udCBhdSBtb21lbnQgb8O5IGxcJ2VudmllIG1vbnRlLjwvcD48YnV0dG9uIGNsYXNzPSJidG4gc20gZ2hvc3QiIGRhdGEtemVkaXQ9InJlYXNvbnMiIHN0eWxlPSJtYXJnaW4tdG9wOjEwcHgiPsOJY3JpcmUgbWVzIHJhaXNvbnM8L2J1dHRvbj4nfTwvc2VjdGlvbj5gOwogIH0KICBmdW5jdGlvbiBiYXJyaWVycyhoKSB7CiAgICBjb25zdCBsaXN0ID0gaC5uaWMgPyBCQVJfTiA6IEJBUl9CLCBuID0gbGlzdC5maWx0ZXIoYiA9PiBoLmJhcltiWzBdXSkubGVuZ3RoOwogICAgcmV0dXJuIGA8c2VjdGlvbj48ZGl2IGNsYXNzPSJyb3cgYmV0d2VlbiIgc3R5bGU9ImFsaWduLWl0ZW1zOmZsZXgtZW5kIj48aDIgc3R5bGU9Im1hcmdpbjowIj5CYXJyacOocmVzPC9oMj48cCBjbGFzcz0ic21hbGwgbXV0ZWQiIHN0eWxlPSJtYXJnaW46MCI+JHtufS8ke2xpc3QubGVuZ3RofTwvcD48L2Rpdj4KICAgICAgPHAgY2xhc3M9InNtYWxsIG11dGVkIiBzdHlsZT0ibWFyZ2luOjZweCAwIDRweCI+VGEgdm9sb250w6kgZXN0IHBsdXMgZmFpYmxlIGF1IG1hdXZhaXMgbW9tZW50LiBMZXMgYmFycmnDqHJlcyB0cmF2YWlsbGVudCDDoCBzYSBwbGFjZS48L3A+CiAgICAgIDxkaXYgY2xhc3M9ImNoZWNrcyI+JHtsaXN0Lm1hcChiID0+IGA8bGFiZWwgY2xhc3M9ImNoZWNrIj48aW5wdXQgdHlwZT0iY2hlY2tib3giIGRhdGEtemJhcj0iJHtiWzBdfSIgJHtoLmJhcltiWzBdXSA/ICdjaGVja2VkJyA6ICcnfT48c3BhbiBjbGFzcz0iYm94Ij4ke0lDT04udGlja308L3NwYW4+PHNwYW4gY2xhc3M9InR4dCI+JHtiWzFdfSR7YlsyXSA/IGA8YnI+PHNwYW4gY2xhc3M9InNtYWxsIG11dGVkIj4ke2JbMl19PC9zcGFuPmAgOiAnJ308L3NwYW4+PC9sYWJlbD5gKS5qb2luKCcnKX08L2Rpdj48L3NlY3Rpb24+YDsKICB9CiAgZnVuY3Rpb24gc3RhdHMoaCkgewogICAgY29uc3Qgd29uID0gaC51cmdlcy5maWx0ZXIodSA9PiB1LndvbikubGVuZ3RoLCB3ayA9IGgucmVsYXBzZXMuZmlsdGVyKHIgPT4gbm93KCkgLSByLnQgPCA3ICogREFZKS5sZW5ndGg7CiAgICBjb25zdCB0b3QgPSBoLnJlbGFwc2VzLmxlbmd0aDsKICAgIHJldHVybiBgPHNlY3Rpb24+PGgyPkNlIHF1ZSBkaXNlbnQgdGVzIGRvbm7DqWVzPC9oMj4KICAgICAgPGRpdiBjbGFzcz0iemtwaXMiPjxkaXY+PGIgY2xhc3M9Im51bSI+JHt3b259PC9iPjxzcGFuPmVudmllcyB2YWluY3Vlczwvc3Bhbj48L2Rpdj48ZGl2PjxiIGNsYXNzPSJudW0iPiR7TWF0aC5mbG9vcigoTWF0aC5tYXgoaC5iZXN0IHx8IDAsIG5vdygpIC0gaC5zdGFydCkpIC8gREFZKX08L2I+PHNwYW4+am91cnMsIHRvbiByZWNvcmQ8L3NwYW4+PC9kaXY+PGRpdj48YiBjbGFzcz0ibnVtIj4ke3RvdH08L2I+PHNwYW4+cmVjaHV0ZXMgbm90w6llczwvc3Bhbj48L2Rpdj48L2Rpdj4KICAgICAgJHtkaWFsKGgpfSR7dHJpZ2dlcnMoaCl9CiAgICAgICR7d2sgPj0gMyA/IGA8ZGl2IGNsYXNzPSJhbGVydCIgc3R5bGU9Im1hcmdpbi10b3A6MThweCI+JHtJQ09OLmluZm99PHNwYW4+JHt3a30gcmVjaHV0ZXMgZW4gNyBqb3Vycy4gQ2Ugbidlc3QgcGFzIHVuIG1hbnF1ZSBkZSB2b2xvbnTDqSA6IGMnZXN0IGxlIHNpZ25lIHF1J2lsIGZhdXQgcGx1cyBkZSBiYXJyacOocmVzLCBvdSBkZSBsJ2FpZGUuIEVuIHBhcmxlciDDoCB1biBtw6lkZWNpbiBvdSDDoCB1biBwc3ljaG9sb2d1ZSBuJ2EgcmllbiBkZSBob250ZXV4LCBjJ2VzdCB1biBtb3llbiBkZSBwbHVzIHBvdXIgZ2FnbmVyLjwvc3Bhbj48L2Rpdj5gIDogJyd9PC9zZWN0aW9uPmA7CiAgfQogIGZ1bmN0aW9uIHZTdG9wKGgpIHsKICAgIHJldHVybiBgJHtncENhcmQoaCl9JHtoZXJvKGgpfQogICAgICA8YnV0dG9uIGNsYXNzPSJ6c29zIiBkYXRhLXp1cmdlPiR7aWNvKCc8cGF0aCBkPSJNMTIgM2MyIDMgNSA1LjUgNSA5LjVhNSA1IDAgMCAxLTEwIDBjMC0yIDEtMy41IDItNC41IDAgMiAxIDMgMiAzIDAtMy0xLTUgMS04eiIvPicsIDIyKX0gSidhaSB1bmUgZW52aWU8L2J1dHRvbj4KICAgICAgPHAgY2xhc3M9ImhpbnQiIHN0eWxlPSJ0ZXh0LWFsaWduOmNlbnRlciI+VG91Y2hlLWxlIGTDqHMgcXVlIMOnYSBtb250ZS4gUGFzIGFwcsOocy48L3A+CiAgICAgIDxzZWN0aW9uPjxoMj5UZXMgw6l0b2lsZXM8L2gyPiR7c3RhcnMoaCl9PC9zZWN0aW9uPgogICAgICAke3JlYXNvbnNCbG9jayhoKX0ke3BsYW5zQmxvY2soaCl9JHtiYXJyaWVycyhoKX0ke3N0YXRzKGgpfQogICAgICAke2gubmljID8gYDxzZWN0aW9uPjxkaXYgY2xhc3M9InpjYXJkIj48cCBjbGFzcz0ic21hbGwiIHN0eWxlPSJtYXJnaW46MCI+VW5lIGVudmllIGRlIG5pY290aW5lIGR1cmUgZW4gZ8OpbsOpcmFsIDxiPjMgw6AgNSBtaW51dGVzPC9iPi4gTGVzIHN1YnN0aXR1dHMgKHBhdGNocywgZ29tbWVzKSBhaWRlbnQgdnJhaW1lbnQgOiB0b24gcGhhcm1hY2llbiBwZXV0IHRlIGNvbnNlaWxsZXIuIExlIDxiPjM5IDg5PC9iPiAoVGFiYWMgSW5mbyBTZXJ2aWNlKSB0J2FjY29tcGFnbmUgZ3JhdHVpdGVtZW50LjwvcD48L2Rpdj48L3NlY3Rpb24+YCA6ICcnfQogICAgICA8YnV0dG9uIGNsYXNzPSJidG4gYmxvY2sgcXVpZXQiIGRhdGEtenJlbCBzdHlsZT0ibWFyZ2luLXRvcDozNHB4Ij5KJ2FpIHJlY2h1dMOpPC9idXR0b24+CiAgICAgIDxwIGNsYXNzPSJoaW50IiBzdHlsZT0idGV4dC1hbGlnbjpjZW50ZXIiPkhvbm7DqnRldMOpIGQnYWJvcmQgOiB1bmUgc8OpcmllIGZhdXNzZSBuZSB0J2FwcHJlbmQgcmllbi48L3A+YDsKICB9CiAgZnVuY3Rpb24gdldhdGNoKGgpIHsKICAgIGNvbnN0IGsgPSB0b2RheUlTTygpLCB0b2RheSA9IGgubG9nLmZpbHRlcih0ID0+IGlzbyhuZXcgRGF0ZSh0KSkgPT09IGspLmxlbmd0aDsKICAgIGNvbnN0IFcgPSAzMjAsIEhoID0gMTIwLCBCID0gMjIsIGJ3ID0gMzAsIGdhcCA9IChXIC0gNyAqIGJ3KSAvIDY7IGNvbnN0IGNvdW50cyA9IFtdOwogICAgZm9yIChsZXQgaSA9IDY7IGkgPj0gMDsgaS0tKSB7IGNvbnN0IGRrID0gaXNvKGFkZERheXMobmV3IERhdGUoKSwgLWkpKTsgY291bnRzLnB1c2goW2FkZERheXMobmV3IERhdGUoKSwgLWkpLCBoLmxvZy5maWx0ZXIodCA9PiBpc28obmV3IERhdGUodCkpID09PSBkaykubGVuZ3RoXSk7IH0KICAgIGNvbnN0IG14ID0gTWF0aC5tYXgoMywgLi4uY291bnRzLm1hcChjID0+IGNbMV0pKTsKICAgIGNvbnN0IGJhcnMgPSBjb3VudHMubWFwKChbZCwgdl0sIGkpID0+IHsgY29uc3QgeCA9IGkgKiAoYncgKyBnYXApLCBoaCA9IHYgLyBteCAqIChIaCAtIEIgLSAxNiksIHkgPSBIaCAtIEIgLSBoaDsgcmV0dXJuIGAke3YgPyBgPHJlY3QgeD0iJHt4LnRvRml4ZWQoMSl9IiB5PSIke3kudG9GaXhlZCgxKX0iIHdpZHRoPSIke2J3fSIgaGVpZ2h0PSIke2hoLnRvRml4ZWQoMSl9IiByeD0iOCIgZmlsbD0idmFyKC0tZ29sZCkiIG9wYWNpdHk9IiR7aSA9PT0gNiA/IDEgOiAuNn0iLz48dGV4dCB4PSIkeyh4ICsgYncgLyAyKS50b0ZpeGVkKDEpfSIgeT0iJHsoeSAtIDUpLnRvRml4ZWQoMSl9IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHlsZT0iZm9udC1zaXplOjEwcHg7Zm9udC13ZWlnaHQ6NzAwO2ZpbGw6dmFyKC0taW5rLTIpIj4ke3Z9PC90ZXh0PmAgOiBgPGNpcmNsZSBjeD0iJHsoeCArIGJ3IC8gMikudG9GaXhlZCgxKX0iIGN5PSIke0hoIC0gQiAtIDV9IiByPSIzIiBmaWxsPSJ2YXIoLS1saW5lKSIvPmB9PHRleHQgeD0iJHsoeCArIGJ3IC8gMikudG9GaXhlZCgxKX0iIHk9IiR7SGggLSA2fSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3R5bGU9ImZvbnQtc2l6ZToxMHB4O2ZvbnQtd2VpZ2h0OjYwMDtmaWxsOnZhcigtLW11dGVkKSI+JHtpID09PSA2ID8gJ2F1ai4nIDogREFZX1NIT1JULmZvcm1hdChkKS5yZXBsYWNlKCcuJywgJycpfTwvdGV4dD5gOyB9KS5qb2luKCcnKTsKICAgIGNvbnN0IHByaWNlID0gbnVtdihoLnByaWNlKSwgcGVyID0gbnVtdihoLnBlciksIG1vbnRoID0gcHJpY2UgJiYgcGVyID8gcHJpY2UgKiAzMCAvIHBlciA6IDA7CiAgICBjb25zdCBsYXN0UiA9IGgucmVhZHlbaC5yZWFkeS5sZW5ndGggLSAxXTsKICAgIHJldHVybiBgPGRpdiBjbGFzcz0iemNhcmQiIHN0eWxlPSJtYXJnaW4tdG9wOjIwcHgiPjxwIGNsYXNzPSJzbWFsbCIgc3R5bGU9Im1hcmdpbjowIj5Nb2RlIDxiPm9ic2VydmF0aW9uPC9iPiA6IHR1IG5lIHQnaW1wb3NlcyByaWVuLiBUdSBub3Rlcywgc2ltcGxlbWVudC4gTGUgam91ciBvw7kgdHUgZMOpY2lkZXMgZCdhcnLDqnRlciwgdHUgY29ubmHDrnRyYXMgdGVzIGhldXJlcywgdGVzIGTDqWNsZW5jaGV1cnMgZXQgY2UgcXVlIMOnYSB0ZSBjb8O7dGUuPC9wPjwvZGl2PgogICAgICA8ZGl2IGNsYXNzPSJ6YmlnIj48YnV0dG9uIGRhdGEtemxvZyBhcmlhLWxhYmVsPSJOb3RlciB1bmUgcHJpc2UiPjxzcGFuIGNsYXNzPSJudW0iPiR7dG9kYXl9PC9zcGFuPjwvYnV0dG9uPjwvZGl2PgogICAgICA8cCBjbGFzcz0iaGludCIgc3R5bGU9InRleHQtYWxpZ246Y2VudGVyIj5Ub3VjaGUgbGUgY2VyY2xlIMOgIGNoYXF1ZSBwcmlzZS4gJHtoLmxvZy5sZW5ndGggPyAnPGJ1dHRvbiBjbGFzcz0ibGluay1idG4gc21hbGwiIGRhdGEtenVubG9nIHN0eWxlPSJtaW4td2lkdGg6MDtwYWRkaW5nOjAgNHB4Ij5Bbm51bGVyIGxhIGRlcm5pw6hyZTwvYnV0dG9uPicgOiAnJ308L3A+CiAgICAgIDxzZWN0aW9uPjxoMj43IGRlcm5pZXJzIGpvdXJzPC9oMj48ZGl2IGNsYXNzPSJ6YmFycyI+PHN2ZyB2aWV3Qm94PSIwIDAgJHtXfSAke0hofSIgYXJpYS1oaWRkZW49InRydWUiPiR7YmFyc308L3N2Zz48L2Rpdj48L3NlY3Rpb24+CiAgICAgIDxzZWN0aW9uPjxoMj5DZSBxdWUgw6dhIGNvw7t0ZTwvaDI+CiAgICAgICAgPGRpdiBjbGFzcz0iZ3JvdXAiPjxkaXYgY2xhc3M9ImNlbGwiPjxsYWJlbCBmb3I9InpwciI+UHJpeCBkJ3VuZSB1bml0w6k8L2xhYmVsPjxpbnB1dCBpZD0ienByIiBjbGFzcz0iciIgaW5wdXRtb2RlPSJkZWNpbWFsIiBkYXRhLXpzZXQ9InByaWNlIiB2YWx1ZT0iJHtlc2MoaC5wcmljZSl9IiBwbGFjZWhvbGRlcj0iMCI+PHNwYW4gY2xhc3M9InVuaXQiPuKCrDwvc3Bhbj48L2Rpdj4KICAgICAgICA8ZGl2IGNsYXNzPSJjZWxsIj48bGFiZWwgZm9yPSJ6cGUiPkVsbGUgbWUgZHVyZTwvbGFiZWw+PGlucHV0IGlkPSJ6cGUiIGNsYXNzPSJyIiBpbnB1dG1vZGU9ImRlY2ltYWwiIGRhdGEtenNldD0icGVyIiB2YWx1ZT0iJHtlc2MoaC5wZXIpfSIgcGxhY2Vob2xkZXI9IjAiPjxzcGFuIGNsYXNzPSJ1bml0Ij5qb3Vyczwvc3Bhbj48L2Rpdj48L2Rpdj4KICAgICAgICAke21vbnRoID8gYDxkaXYgY2xhc3M9InprcGlzIj48ZGl2PjxiIGNsYXNzPSJudW0iPiR7TWF0aC5yb3VuZChtb250aCl9IOKCrDwvYj48c3Bhbj5wYXIgbW9pczwvc3Bhbj48L2Rpdj48ZGl2PjxiIGNsYXNzPSJudW0iPiR7TWF0aC5yb3VuZChtb250aCAqIDEyKX0g4oKsPC9iPjxzcGFuPnBhciBhbjwvc3Bhbj48L2Rpdj48ZGl2PjxiIGNsYXNzPSJudW0iPiR7TWF0aC5yb3VuZChtb250aCAqIDEyIC8gKG51bXYoUy5tb25leS5zYWZldHlHb2FsKSB8fCA0MDAwKSAqIDEwMCl9ICU8L2I+PHNwYW4+ZGUgdG9uIMOpcGFyZ25lIGRlIHPDqWN1cml0w6ksIGNoYXF1ZSBhbm7DqWU8L3NwYW4+PC9kaXY+PC9kaXY+YCA6ICcnfQogICAgICA8L3NlY3Rpb24+CiAgICAgIDxzZWN0aW9uPjxoMj5Fcy10dSBwcsOqdCA/PC9oMj48cCBjbGFzcz0ic21hbGwgbXV0ZWQiIHN0eWxlPSJtYXJnaW46LThweCAwIDAiPlN1ciAxMCwgw6AgcXVlbCBwb2ludCB0ZSBzZW5zLXR1IHByw6p0IMOgIGFycsOqdGVyID8gUsOpcG9uZHMgdW5lIGZvaXMgcGFyIHNlbWFpbmUsIHNhbnMgdGUganVnZXIuPC9wPgogICAgICAgIDxkaXYgY2xhc3M9InpydWxlciI+JHtBcnJheS5mcm9tKHsgbGVuZ3RoOiAxMSB9LCAoXywgaSkgPT4gYDxidXR0b24gZGF0YS16cmVhZHk9IiR7aX0iIGFyaWEtcHJlc3NlZD0iJHtsYXN0UiAmJiBsYXN0Ui52ID09PSBpICYmIGxhc3RSLmQgPT09IHRvZGF5SVNPKCl9Ij4ke2l9PC9idXR0b24+YCkuam9pbignJyl9PC9kaXY+CiAgICAgICAgJHtsYXN0UiA/IGA8cCBjbGFzcz0ic21hbGwiIHN0eWxlPSJtYXJnaW4tdG9wOjEycHgiPkRlcm5pw6hyZSByw6lwb25zZSA6IDxiPiR7bGFzdFIudn0vMTA8L2I+JHtsYXN0Ui52ID4gMCA/IGAuIFBvdXJxdW9pICR7bGFzdFIudn0gZXQgcGFzICR7TWF0aC5tYXgoMCwgbGFzdFIudiAtIDIpfSA/IENlIHF1aSB0ZSBmYWl0IGRpcmUgw6dhLCBjJ2VzdCBkw6lqw6AgdW5lIHJhaXNvbiBkJ2FycsOqdGVyLmAgOiAnJ308L3A+YCA6ICcnfQogICAgICAgICR7aC5yZWFkeS5sZW5ndGggPiAxID8gYDxwIGNsYXNzPSJzbWFsbCBtdXRlZCIgc3R5bGU9Im1hcmdpbi10b3A6NHB4Ij7DiXZvbHV0aW9uIDogJHtoLnJlYWR5LnNsaWNlKC02KS5tYXAociA9PiByLnYpLmpvaW4oJyDihpIgJyl9PC9wPmAgOiAnJ30KICAgICAgPC9zZWN0aW9uPgogICAgICAke2RpYWwoaCkucmVwbGFjZSgnSEVVUkUgw4AgUklTUVVFJywgJ0hFVVJFIExBIFBMVVMgRlLDiVFVRU5URScpfQogICAgICA8YnV0dG9uIGNsYXNzPSJidG4gYmxvY2siIGRhdGEtenJlYWR5LWdvIHN0eWxlPSJtYXJnaW4tdG9wOjMwcHgiPkplIHN1aXMgcHLDqnQgw6AgYXJyw6p0ZXI8L2J1dHRvbj4KICAgICAgPHAgY2xhc3M9ImhpbnQiIHN0eWxlPSJ0ZXh0LWFsaWduOmNlbnRlciI+TGUgam91ciBvw7kgdHUgdG91Y2hlcyBjZSBib3V0b24sIHRhIHPDqXJpZSBkw6ltYXJyZSwgYXZlYyBsYSB2YWd1ZSwgbGVzIHBsYW5zIGV0IGxlcyBiYXJyacOocmVzLjwvcD5gOwogIH0KICBmdW5jdGlvbiB2VXJnZShoKSB7CiAgICBjb25zdCB1ID0gWi51cmdlLCB0b3RhbCA9IHUubGVuICogNjAwMDAsIGxlZnQgPSBNYXRoLm1heCgwLCB0b3RhbCAtIChub3coKSAtIHUudDApKSwgUiA9IDEwMDsKICAgIGNvbnN0IGFjdHMgPSBoLm5pYyA/IEFDVF9OIDogQUNUX0I7CiAgICByZXR1cm4gYDxkaXYgY2xhc3M9Inp1cmdlIiBpZD0ielVyZ2UiPjxkaXYgY2xhc3M9ImluIj4KICAgICAgPHAgY2xhc3M9ImV5ZWJyb3ciPkVuIGpldSBzaSB0dSBjw6hkZXM8L3A+CiAgICAgIDxwIGNsYXNzPSJ6c3Rha2UiIGlkPSJ6U3Rha2UiPiR7aC5tb2RlID09PSAnc3RvcCcgPyBkdXIobm93KCkgLSBoLnN0YXJ0KSA6ICcnfTwvcD4KICAgICAgPHAgY2xhc3M9InNtYWxsIG11dGVkIiBzdHlsZT0ibWFyZ2luOjRweCAwIDAiPisgdGEgbHVtacOocmUgZHUgam91ciAo4pymICR7bm91ckRheSgpfSkgZXQgJHtPYmplY3Qua2V5cyhoLm1zKS5sZW5ndGh9IMOpdG9pbGUke09iamVjdC5rZXlzKGgubXMpLmxlbmd0aCA+IDEgPyAncycgOiAnJ30gYWxsdW3DqWUke09iamVjdC5rZXlzKGgubXMpLmxlbmd0aCA+IDEgPyAncycgOiAnJ30uPC9wPgogICAgICA8ZGl2IGNsYXNzPSJ6d2F2ZSI+PHN2ZyB2aWV3Qm94PSItMTMwIC0xMzAgMjYwIDI2MCIgYXJpYS1oaWRkZW49InRydWUiPjxjaXJjbGUgcj0iJHtSfSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ2YXIoLS1yYWlzZSkiIHN0cm9rZS13aWR0aD0iMTAiLz48Y2lyY2xlIGlkPSJ6V2F2ZUMiIHI9IiR7Un0iIGZpbGw9Im5vbmUiIHN0cm9rZT0idmFyKC0tZ29sZCkiIHN0cm9rZS13aWR0aD0iMTAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwKSIgJHtyaW5nRGFzaChSLCBsZWZ0IC8gdG90YWwpfS8+PC9zdmc+CiAgICAgICAgPGRpdiBjbGFzcz0iemJyZWF0aCI+PC9kaXY+PGRpdiBjbGFzcz0iendjIj48ZGl2PjxiIGlkPSJ6TGVmdCI+JHtNYXRoLmZsb29yKGxlZnQgLyA2MDAwMCl9OiR7dHdvKE1hdGguZmxvb3IobGVmdCAlIDYwMDAwIC8gMTAwMCkpfTwvYj48c3BhbiBpZD0iekJyIj5JbnNwaXJl4oCmPC9zcGFuPjwvZGl2PjwvZGl2PjwvZGl2PgogICAgICA8cCBjbGFzcz0ic21hbGwiIHN0eWxlPSJ0ZXh0LWFsaWduOmNlbnRlcjttYXJnaW46MCI+VW5lIGVudmllIG1vbnRlLCBjdWxtaW5lLCBwdWlzIHJlZGVzY2VuZC4gVHUgbidhcyBwYXMgw6AgbGEgY29tYmF0dHJlIDogc3VyZmUtbGEgJHt1Lmxlbn0gbWludXRlcywgZW4gcmVzcGlyYW50IGF2ZWMgbGUgY2VyY2xlLjwvcD4KICAgICAgJHt1LnRyaWcgPyAnJyA6IGA8cCBjbGFzcz0iZXllYnJvdyIgc3R5bGU9Im1hcmdpbi10b3A6MjJweCI+UXUnZXN0LWNlIHF1aSB0ZSBwb3Vzc2UgPzwvcD48ZGl2IGNsYXNzPSJjaGlwcyI+JHtUUklHLm1hcCgoW2ssIG5dKSA9PiBgPGJ1dHRvbiBjbGFzcz0iY2hpcCIgZGF0YS16dHJpZz0iJHtrfSI+JHtufTwvYnV0dG9uPmApLmpvaW4oJycpfTwvZGl2PmB9CiAgICAgIDxwIGNsYXNzPSJleWVicm93IiBzdHlsZT0ibWFyZ2luLXRvcDoyMnB4Ij5GYWlzIGF1IG1vaW5zIHVuZSBjaG9zZSwgbWFpbnRlbmFudDwvcD4KICAgICAgPGRpdiBjbGFzcz0iemFjdHMiPiR7YWN0cy5tYXAoKFtrLCBuXSkgPT4gYDxidXR0b24gY2xhc3M9InphY3QgJHt1LmRvbmVba10gPyAnb24nIDogJyd9IiBkYXRhLXphY3Q9IiR7a30iPjxpPiR7SUNPTi50aWNrfTwvaT48c3Bhbj4ke259PC9zcGFuPjwvYnV0dG9uPmApLmpvaW4oJycpfTwvZGl2PgogICAgICAke1ouZGggPyBkaGlrckJveCgpIDogJyd9CiAgICAgICR7aC5yZWFzb25zLmxlbmd0aCA/IGA8cCBjbGFzcz0iZXllYnJvdyIgc3R5bGU9Im1hcmdpbi10b3A6MjJweCI+VGVzIHJhaXNvbnM8L3A+PHVsIGNsYXNzPSJ6cmVhc29ucyI+JHtoLnJlYXNvbnMubWFwKHIgPT4gYDxsaT4ke2VzYyhyKX08L2xpPmApLmpvaW4oJycpfTwvdWw+YCA6ICcnfQogICAgICAke2gucGxhbnMubGVuZ3RoID8gYDxwIGNsYXNzPSJleWVicm93IiBzdHlsZT0ibWFyZ2luLXRvcDoyMnB4Ij5Ub24gcGxhbjwvcD48ZGl2IGNsYXNzPSJ6aWYiPiR7aC5wbGFucy5maWx0ZXIocCA9PiAhdS50cmlnIHx8IHRydWUpLnNsaWNlKDAsIDMpLm1hcChwID0+IGA8ZGl2PjxzbWFsbD5TaTwvc21hbGw+JHtlc2MocFswXSl9PGJyPjxzbWFsbCBzdHlsZT0ibWFyZ2luLXRvcDo2cHgiPkFsb3JzPC9zbWFsbD48Yj4ke2VzYyhwWzFdKX08L2I+PC9kaXY+YCkuam9pbignJyl9PC9kaXY+YCA6ICcnfQogICAgICA8YnV0dG9uIGNsYXNzPSJidG4gYmxvY2siIGRhdGEtendvbiBzdHlsZT0ibWFyZ2luLXRvcDoyNnB4Ij5MJ2VudmllIGVzdCBwYXNzw6llPC9idXR0b24+CiAgICAgIDxidXR0b24gY2xhc3M9ImJ0biBibG9jayBxdWlldCIgZGF0YS16Z2F2ZSBzdHlsZT0ibWFyZ2luLXRvcDoxMHB4Ij5KJ2FpIGPDqWTDqTwvYnV0dG9uPgogICAgPC9kaXY+PC9kaXY+YDsKICB9CiAgLyogLS0tLS0tLS0tLSBHaHVzbCBlbiBhdHRlbnRlIChhdSB0cmF2YWlsLCBwYXMgZGUgZG91Y2hlIHBvc3NpYmxlKSAtLS0tLS0tLS0tICovCiAgZnVuY3Rpb24gZ3BJbmZvKCkgewogICAgcmV0dXJuIGA8ZGl2IGNsYXNzPSJ6cSIgc3R5bGU9InRleHQtYWxpZ246bGVmdCI+CiAgICAgIDxiPkNlIHF1aSBlc3QgcG9zc2libGUgdG91dCBkZSBzdWl0ZTwvYj48YnI+CiAgICAgIExlIHJlcGVudGlyIG4nYXR0ZW5kIHBhcyBsZSBnaHVzbCA6IHJlZ3JldHRlciwgYXJyw6p0ZXIsIGTDqWNpZGVyIGRlIG5lIHBhcyByZWNvbW1lbmNlci4gQydlc3QgdmFsYWJsZSBtYWludGVuYW50LCBsw6Agb8O5IHR1IGVzLiBMZSBkaGlrciBldCBsJ2lzdGlnaGZhciBzb250IHBlcm1pcy4gU2V1bGVzIGxhIHByacOocmUgKGV0LCBwb3VyIGxhIG1ham9yaXTDqSBkZXMgc2F2YW50cywgbGEgcsOpY2l0YXRpb24gZHUgQ29yYW4pIGF0dGVuZGVudCBsYSBwdXJpZmljYXRpb24uIFRhIG5vdXZlbGxlIHPDqXJpZSBwZXV0IGTDqW1hcnJlciBtYWludGVuYW50Ljxicj48YnI+CiAgICAgIDxiPkxlcyBwcmnDqHJlcyBkJ2ljaSBsw6AsIGxlcyBhdmlzPC9iPjxicj4KICAgICAgUG91ciBsYSBtYWpvcml0w6kgZGVzIHNhdmFudHMsIGxlIGdodXNsIGVzdCBvYmxpZ2F0b2lyZSBhdmFudCBkZSBwcmllciA6IGNoZXJjaGUgdW4gbW95ZW4gZGUgbGUgZmFpcmUsIG3Dqm1lIGJyZWYgKGwnaW50ZW50aW9uLCBsJ2VhdSBzdXIgdG91dCBsZSBjb3Jwcywgc2UgcmluY2VyIGxhIGJvdWNoZSBldCBsZSBuZXopLiBTaSBjJ2VzdCB2cmFpbWVudCBpbXBvc3NpYmxlIGF2YW50IGxhIGZpbiBkdSB0ZW1wcyBkJ3VuZSBwcmnDqHJlLCBjZXJ0YWlucyAoZG9udCBsJ8OpY29sZSBtYWxpa2l0ZSBldCBJYm4gVGF5bWl5eWEpIGF1dG9yaXNlbnQgbGUgdGF5YW1tdW0gcG91ciBuZSBwYXMgbGFpc3NlciBwYXNzZXIgbCdoZXVyZS4gRCdhdXRyZXMgZGlzZW50IGRlIGZhaXJlIGxlIGdodXNsIGTDqHMgcXVlIHBvc3NpYmxlIGV0IGRlIHJhdHRyYXBlciBhdXNzaXTDtHQuIFNpIHR1IHBldXgsIGRlbWFuZGUgw6AgdW5lIHBlcnNvbm5lIGRlIHNhdm9pciBkZSBjb25maWFuY2UuPGJyPjxicj4KICAgICAgPHNwYW4gc3R5bGU9ImNvbG9yOiM3RThGODgiPlRvdWNoZSDCqyBKZSByZXBhcnMgbWFpbnRlbmFudCDCuyA6IGwnZXNwYWNlIGdhcmRlIHVuIGdodXNsIGVuIGF0dGVudGUgZXQsIGTDqHMgcXVlIHR1IHJldmllbnMsIHRlIGxpc3RlIGxlcyBwcmnDqHJlcyDDoCByYXR0cmFwZXIuPC9zcGFuPjwvZGl2PmA7CiAgfQogIC8qIFByacOocmVzIGRvbnQgbGUgdGVtcHMgcydlc3QgdGVybWluw6kgZGVwdWlzIGxhIHJlY2h1dGUgKGp1c3F1J2F1IGdodXNsLCBvdSBtYWludGVuYW50KS4gKi8KICBmdW5jdGlvbiBncFByYXllcnMoZykgewogICAgY29uc3QgZnJvbSA9IGcudCwgdG8gPSBnLmcgfHwgbm93KCksIG91dCA9IFtdOwogICAgZm9yIChsZXQgZCA9IGlzbyhuZXcgRGF0ZShmcm9tKSksIGkgPSAwOyBkIDw9IHRvZGF5SVNPKCkgJiYgaSA8IDQ7IGQgPSBpc28oYWRkRGF5cyhwYXJzZURhdGUoZCksIDEpKSwgaSsrKSB7CiAgICAgIGNvbnN0IHcgPSBwdERheShkKS53aW47CiAgICAgIE9iamVjdC5rZXlzKHcpLmZvckVhY2goaWQgPT4geyBjb25zdCBlbmQgPSArd1tpZF1bMV07IGlmIChwcmF5ZXJUcmFja2VkKGlkKSAmJiBlbmQgPiBmcm9tICYmIGVuZCA8PSB0bykgb3V0LnB1c2goeyBrOiBkLCBpZCwgdjogKFMuZmFpdGgubG9nW2RdIHx8IHt9KVtpZF0gfSk7IH0pOwogICAgfQogICAgcmV0dXJuIG91dDsKICB9CiAgY29uc3QgUERIID0gW1snaXN0aWdoZmFyJywgJ9ij2Y7Ys9mS2KrZjti62ZLZgdmQ2LHZjyDYp9mE2YTZjtmR2YfZjicsICdBc3RhZ2hmaXJ1bGxhaCddLCBbJ3Rhd2JhJywgJ9ij2Y7Ys9mS2KrZjti62ZLZgdmQ2LHZjyDYp9mE2YTZjtmR2YfZjiDZiNmO2KPZjtiq2Y/ZiNio2Y8g2KXZkNmE2Y7ZitmS2YfZkCcsICdBc3RhZ2hmaXJ1bGxhaGEgd2EgYXR1YnUgaWxheWgnXSwgWyd5dW51cycsICfZhNmO2Kcg2KXZkNmE2Y7ZsNmH2Y4g2KXZkNmE2Y7ZkdinINij2Y7ZhtmS2KrZjiDYs9mP2KjZktit2Y7Yp9mG2Y7Zg9mOINil2ZDZhtmQ2ZHZiiDZg9mP2YbZktiq2Y8g2YXZkNmG2Y4g2KfZhNi42Y7Zkdin2YTZkNmF2ZDZitmG2Y4nLCAnTGEgaWxhaGEgaWxsYSBhbnRhLCBzdWJoYW5ha2EsIGlubmkga3VudHUgbWluYSBkaC1kaGFsaW1pbiddLCBbJ2JpaGFtZGloaScsICfYs9mP2KjZktit2Y7Yp9mG2Y4g2KfZhNmE2Y7ZkdmH2ZAg2YjZjtio2ZDYrdmO2YXZktiv2ZDZh9mQJywgJ1N1YmhhbkFsbGFoaSB3YSBiaWhhbWRpaGknXV07CiAgY29uc3QgWkQgPSB7IG46IDAsIGxhc3Q6IDAsIHQ6IG51bGwgfTsKICAvKiBDb21wdGV1ciBkaXNjcmV0IDogc2VzIGNvbXB0ZXMgcmVzdGVudCBkYW5zIGwnZXNwYWNlIChaLmQuZGgpLCBqYW1haXMgZGFucyBsYSBsdW1pw6hyZSBuaSBsZXMgdG90YXV4IGRlIGwnYXBwLiAqLwogIGZ1bmN0aW9uIHpkaCgpIHsgY29uc3QgZCA9IFouZC5kaCA9IFouZC5kaCB8fCB7IGN1cjogJ2lzdGlnaGZhcicsIHRvdGFsOiB7fSB9OyBkLnRvdGFsID0gZC50b3RhbCB8fCB7fTsgcmV0dXJuIGQ7IH0KICBmdW5jdGlvbiB6ZGhCb3goKSB7CiAgICBjb25zdCBkID0gemRoKCksIGYgPSBQREguZmluZCh4ID0+IHhbMF0gPT09IGQuY3VyKSB8fCBQREhbMF07CiAgICByZXR1cm4gYDxwIGNsYXNzPSJleWVicm93IiBzdHlsZT0ibWFyZ2luLXRvcDoxNnB4Ij5FbiBhdHRlbmRhbnQsIGxlIGRoaWtyPC9wPgogICAgICA8ZGl2IGNsYXNzPSJjaGlwcyIgc3R5bGU9Im1hcmdpbi10b3A6NnB4Ij4ke1BESC5tYXAoeCA9PiBgPGJ1dHRvbiBjbGFzcz0iY2hpcCIgZGF0YS16ZGtmPSIke3hbMF19IiBhcmlhLXByZXNzZWQ9IiR7eFswXSA9PT0gZC5jdXJ9Ij4ke3hbMl0uc3BsaXQoJywnKVswXX08L2J1dHRvbj5gKS5qb2luKCcnKX08L2Rpdj4KICAgICAgPGJ1dHRvbiBjbGFzcz0iemRrdCIgZGF0YS16ZGsgYXJpYS1sYWJlbD0iQ29tcHRlciI+PHNwYW4gY2xhc3M9ImFyIiBsYW5nPSJhciIgZGlyPSJydGwiPiR7ZlsxXX08L3NwYW4+PGIgY2xhc3M9Im51bSIgaWQ9Inpka04iPiR7WkQubn08L2I+PHNtYWxsIGNsYXNzPSJtdXRlZCIgaWQ9Inpka1QiPiR7KGQudG90YWxbZC5jdXJdIHx8IDApLnRvTG9jYWxlU3RyaW5nKCdmci1GUicpfSBhdSB0b3RhbCwgaWNpIHNldWxlbWVudDwvc21hbGw+PC9idXR0b24+CiAgICAgICR7ZC5jdXIgPT09ICd5dW51cycgPyAnPHAgY2xhc3M9InNtYWxsIG11dGVkIiBzdHlsZT0ibWFyZ2luOjhweCAwIDAiPkxcJ2ludm9jYXRpb24gZGUgWXVudXMgZGFucyBsZSB2ZW50cmUgZGUgbGEgYmFsZWluZSAoQ29yYW4gMjE6ODcpLiDCqyBBdWN1biBtdXN1bG1hbiBuZSBsXCdpbnZvcXVlIHBvdXIgcXVlbHF1ZSBjaG9zZSBzYW5zIHF1XCdBbGxhaCBuZSBsdWkgcsOpcG9uZGUuIMK7IChUaXJtaWRoaSAzNTA1KTwvcD4nIDogJyd9YDsKICB9CiAgZnVuY3Rpb24gemRrVGFwKCkgewogICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTsgaWYgKG5vdyAtIFpELmxhc3QgPCAxODApIHJldHVybjsgWkQubGFzdCA9IG5vdzsKICAgIGNvbnN0IGQgPSB6ZGgoKTsgWkQubisrOyBkLnRvdGFsW2QuY3VyXSA9IChkLnRvdGFsW2QuY3VyXSB8fCAwKSArIDE7CiAgICBjb25zdCBuID0gJCgnI3pka04nKSwgdCA9ICQoJyN6ZGtUJyk7IGlmIChuKSBuLnRleHRDb250ZW50ID0gWkQubjsgaWYgKHQpIHQudGV4dENvbnRlbnQgPSBgJHtkLnRvdGFsW2QuY3VyXS50b0xvY2FsZVN0cmluZygnZnItRlInKX0gYXUgdG90YWwsIGljaSBzZXVsZW1lbnRgOwogICAgdHJ5IHsgbmF2aWdhdG9yLnZpYnJhdGUgJiYgbmF2aWdhdG9yLnZpYnJhdGUoWkQubiAlIDMzID8gNiA6IFsxOCwgNTAsIDE4XSk7IH0gY2F0Y2ggKGUpIHt9CiAgICBpZiAoWkQubiAlIDEwMCA9PT0gMCkgdG9hc3QoYCR7WkQubn0uIEFsbGFoIGFpbWUgY2V1eCBxdWkgcmV2aWVubmVudCB2ZXJzIEx1aS5gLCBudWxsLCBudWxsLCAzNTAwKTsKICAgIGNsZWFyVGltZW91dChaRC50KTsgWkQudCA9IHNldFRpbWVvdXQoKCkgPT4gcGVyc2lzdCgpLCAxNTAwKTsKICB9CiAgZnVuY3Rpb24gZ3BDYXJkKGgpIHsKICAgIGNvbnN0IGcgPSBoLmdwOyBpZiAoIWcpIHJldHVybiAnJzsKICAgIGNvbnN0IHBzID0gZ3BQcmF5ZXJzKGcpLCBsZWZ0ID0gcHMuZmlsdGVyKHAgPT4gIXAudiB8fCBwLnYgPT09ICd4JykubGVuZ3RoOwogICAgY29uc3Qgc2luY2UgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgnZnItRlInLCB7IHdlZWtkYXk6ICdsb25nJywgaG91cjogJzItZGlnaXQnLCBtaW51dGU6ICcyLWRpZ2l0JyB9KS5mb3JtYXQobmV3IERhdGUoZy50KSk7CiAgICByZXR1cm4gYDxzZWN0aW9uIHN0eWxlPSJtYXJnaW4tdG9wOjE4cHgiPjxkaXYgY2xhc3M9InpjYXJkIHpncCI+CiAgICAgIDxwIGNsYXNzPSJleWVicm93IiBzdHlsZT0ibWFyZ2luOjAiPkdodXNsIGVuIGF0dGVudGU8L3A+CiAgICAgIDxwIGNsYXNzPSJzbWFsbCBtdXRlZCIgc3R5bGU9Im1hcmdpbjo0cHggMCAxMnB4Ij5EZXB1aXMgJHtzaW5jZX0uIFRhIHPDqXJpZSwgZWxsZSwgYSBkw6lqw6AgcmVwcmlzLjwvcD4KICAgICAgPGRpdiBjbGFzcz0iemdwcyI+CiAgICAgICAgPGJ1dHRvbiBjbGFzcz0iemdwYiAke2cuZyA/ICdvbicgOiAnJ30iIGRhdGEtemdwZz48aT4ke0lDT04udGlja308L2k+PHNwYW4+R2h1c2wgZmFpdDwvc3Bhbj48L2J1dHRvbj4KICAgICAgICA8YnV0dG9uIGNsYXNzPSJ6Z3BiICR7Zy5yID8gJ29uJyA6ICcnfSIgZGF0YS16Z3ByICR7Zy5nID8gJycgOiAnZGlzYWJsZWQnfT48aT4ke0lDT04udGlja308L2k+PHNwYW4+RGV1eCByYWsnYXRzIGRlIHJlcGVudGlyPC9zcGFuPjwvYnV0dG9uPgogICAgICA8L2Rpdj4KICAgICAgJHtwcy5sZW5ndGggPyBgPHAgY2xhc3M9ImV5ZWJyb3ciIHN0eWxlPSJtYXJnaW4tdG9wOjE2cHgiPlByacOocmVzIMOgIHJhdHRyYXBlcjwvcD4KICAgICAgICA8ZGl2IGNsYXNzPSJ6Z3BsIj4ke3BzLm1hcChwID0+IGA8ZGl2PjxzcGFuPiR7UE5BTUVTW3AuaWRdfSA8c21hbGwgY2xhc3M9Im11dGVkIj4ke3AuayA9PT0gdG9kYXlJU08oKSA/ICdhdWpvdXJkXCdodWknIDogREFZX0xPTkcuZm9ybWF0KHBhcnNlRGF0ZShwLmspKX08L3NtYWxsPjwvc3Bhbj4ke3AudiAmJiBwLnYgIT09ICd4JyA/IGA8YiBjbGFzcz0ic21hbGwiIHN0eWxlPSJjb2xvcjp2YXIoLS1taW50KSI+bm90w6llPC9iPmAgOiBgPGJ1dHRvbiBjbGFzcz0iYnRuIHNtIiBkYXRhLXpncHA9IiR7cC5rfXwke3AuaWR9IiAke2cuZyA/ICcnIDogJ2Rpc2FibGVkJ30+UmF0dHJhcMOpZTwvYnV0dG9uPmB9PC9kaXY+YCkuam9pbignJyl9PC9kaXY+CiAgICAgICAgPHAgY2xhc3M9ImhpbnQiIHN0eWxlPSJtYXJnaW4tdG9wOjhweCI+JHtnLmcgPyAnUmF0dHJhcGUtbGVzIG1haW50ZW5hbnQsIGRhbnMgbFwnb3JkcmUuJyA6ICdFbGxlcyBzZSBkw6libG9xdWVudCBhcHLDqHMgbGUgZ2h1c2wuJ30gU2kgdHUgZW4gYXMgcHJpw6kgdW5lIGF2ZWMgbGUgdGF5YW1tdW0sIG5vdGUtbGEgbm9ybWFsZW1lbnQgZGFucyBGb2kuPC9wPmAgOiAnPHAgY2xhc3M9InNtYWxsIG11dGVkIiBzdHlsZT0ibWFyZ2luOjE0cHggMCAwIj5BdWN1bmUgcHJpw6hyZSBuXCdlc3QgcGFzc8OpZSBkZXB1aXMuIEZhaXMgbGUgZ2h1c2wgYXZhbnQgbGEgcHJvY2hhaW5lLjwvcD4nfQogICAgICAke2cuZyA/ICcnIDogemRoQm94KCl9CiAgICAgICR7Zy5nICYmICFsZWZ0ID8gJzxidXR0b24gY2xhc3M9ImJ0biBibG9jayIgZGF0YS16Z3B4PSIxIiBzdHlsZT0ibWFyZ2luLXRvcDoxNHB4Ij5DXCdlc3QgZmFpdCwgQWxoYW1kdWxpbGxhaDwvYnV0dG9uPicgOiAnPGJ1dHRvbiBjbGFzcz0ibGluay1idG4gc21hbGwiIGRhdGEtemdweD0iMCIgc3R5bGU9Im1hcmdpbi10b3A6MTJweCI+UmV0aXJlciBjZSByYXBwZWw8L2J1dHRvbj4nfQogICAgPC9kaXY+PC9zZWN0aW9uPmA7CiAgfQogIGZ1bmN0aW9uIGRoaWtyQm94KCkgewogICAgY29uc3QgW2ksIG5dID0gWi5kaCwgdyA9IERISUtSW2ldOwogICAgcmV0dXJuIGA8ZGl2IGNsYXNzPSJ6ZGgiPjxidXR0b24gZGF0YS16ZGggYXJpYS1sYWJlbD0iJHt3WzFdfSwgJHtufSBzdXIgMzMiPjxzcGFuIGNsYXNzPSJhciIgbGFuZz0iYXIiIGRpcj0icnRsIj4ke3dbMF19PC9zcGFuPjxzcGFuIGNsYXNzPSJzbWFsbCBtdXRlZCI+JHt3WzFdfTwvc3Bhbj48YiBjbGFzcz0ibnVtIj4ke259PHNwYW4gc3R5bGU9ImZvbnQtc2l6ZToxcmVtO2NvbG9yOnZhcigtLW11dGVkKSI+LzMzPC9zcGFuPjwvYj48L2J1dHRvbj48L2Rpdj5gOwogIH0KICBmdW5jdGlvbiB2UmVsYXBzZShoKSB7CiAgICBjb25zdCByID0gWi5yZWwsIGQgPSBNYXRoLmZsb29yKGRheXMoaCkpOwogICAgY29uc3QgbGlzdCA9IGgubmljID8gQkFSX04gOiBCQVJfQiwgb2ZmID0gbGlzdC5maWx0ZXIoYiA9PiAhaC5iYXJbYlswXV0pOwogICAgcmV0dXJuIGA8ZGl2IGNsYXNzPSJ6ZGFyayIgaWQ9InpEYXJrIj48ZGl2IGNsYXNzPSJpbiI+CiAgICAgIDxwIGNsYXNzPSJleWVicm93IiBzdHlsZT0iY29sb3I6IzdFOEY4OCI+U8OpcmllIHRlcm1pbsOpZTwvcD4KICAgICAgPHAgY2xhc3M9Im51bS1iaWciIGlkPSJ6RG93biI+JHtkfTwvcD4KICAgICAgPHAgc3R5bGU9InRleHQtYWxpZ246Y2VudGVyO21hcmdpbjo2cHggMCAwO2NvbG9yOiM3RThGODgiPmpvdXIke2QgPiAxID8gJ3MnIDogJyd9LiBDJ8OpdGFpdCB0b24gY2hlbWluLjwvcD4KICAgICAgPGgyIHN0eWxlPSJtYXJnaW4tdG9wOjMwcHgiPlRhIGx1bWnDqHJlIGJhaXNzZS4gVGEgdmFsZXVyLCBub24uPC9oMj4KICAgICAgPHAgY2xhc3M9InNtYWxsIG11dGVkIj7iiJIxNSDinKYgYXVqb3VyZCdodWkuIENlIHF1aSBjb21wdGUgbWFpbnRlbmFudCwgY2Ugc29udCBsZXMgMTAgcHJvY2hhaW5lcyBtaW51dGVzIDogYydlc3Qgc291dmVudCBsw6AgcXUndW5lIHJlY2h1dGUgZW4gZW50cmHDrm5lIHVuZSBkZXV4acOobWUuPC9wPgogICAgICA8ZGl2IGNsYXNzPSJ6cSI+wqsgVG91cyBsZXMgZmlscyBkJ0FkYW0gY29tbWV0dGVudCBkZXMgZmF1dGVzLCBldCBsZXMgbWVpbGxldXJzIGRlcyBmYXV0aWZzIHNvbnQgY2V1eCBxdWkgc2UgcmVwZW50ZW50LiDCuzxicj48c3BhbiBjbGFzcz0ic21hbGwgbXV0ZWQiPlRpcm1pZGhpPC9zcGFuPjwvZGl2PgogICAgICA8cCBjbGFzcz0iZXllYnJvdyIgc3R5bGU9Im1hcmdpbi10b3A6MjRweDtjb2xvcjojN0U4Rjg4Ij5DJ8OpdGFpdCBxdWFuZCA/PC9wPgogICAgICA8ZGl2IGNsYXNzPSJjaGlwcyI+JHtbWycwJywgJ8OAIGxcJ2luc3RhbnQnXSwgWyczJywgJ1BsdXMgdMO0dCBhdWpvdXJkXCdodWknXSwgWycxMicsICdIaWVyIHNvaXInXV0ubWFwKChbdiwgbl0pID0+IGA8YnV0dG9uIGNsYXNzPSJjaGlwIiBkYXRhLXp3aGVuPSIke3Z9IiBhcmlhLXByZXNzZWQ9IiR7ci53aGVuID09PSB2fSI+JHtufTwvYnV0dG9uPmApLmpvaW4oJycpfTwvZGl2PgogICAgICA8cCBjbGFzcz0iZXllYnJvdyIgc3R5bGU9Im1hcmdpbi10b3A6MjBweDtjb2xvcjojN0U4Rjg4Ij5RdSdlc3QtY2UgcXVpIGwnYSBkw6ljbGVuY2jDqSA/PC9wPgogICAgICA8ZGl2IGNsYXNzPSJjaGlwcyI+JHtUUklHLm1hcCgoW2ssIG5dKSA9PiBgPGJ1dHRvbiBjbGFzcz0iY2hpcCIgZGF0YS16cnRyaWc9IiR7a30iIGFyaWEtcHJlc3NlZD0iJHtyLnRyaWcgPT09IGt9Ij4ke259PC9idXR0b24+YCkuam9pbignJyl9PC9kaXY+CiAgICAgICR7b2ZmLmxlbmd0aCA/IGA8cCBjbGFzcz0iZXllYnJvdyIgc3R5bGU9Im1hcmdpbi10b3A6MjBweDtjb2xvcjojN0U4Rjg4Ij5VbmUgYmFycmnDqHJlIMOgIHBvc2VyIGF1am91cmQnaHVpPC9wPjxkaXYgY2xhc3M9ImNoaXBzIj4ke29mZi5tYXAoYiA9PiBgPGJ1dHRvbiBjbGFzcz0iY2hpcCIgZGF0YS16cmJhcj0iJHtiWzBdfSIgYXJpYS1wcmVzc2VkPSIkeyEhci5iYXJzW2JbMF1dfSI+JHtiWzFdfTwvYnV0dG9uPmApLmpvaW4oJycpfTwvZGl2PmAgOiAnJ30KICAgICAgPHAgY2xhc3M9ImV5ZWJyb3ciIHN0eWxlPSJtYXJnaW4tdG9wOjIwcHg7Y29sb3I6IzdFOEY4OCI+Q2UgcXVlIHR1IHJldGllbnMgKGZhY3VsdGF0aWYpPC9wPgogICAgICA8dGV4dGFyZWEgaWQ9InpOb3RlIiBwbGFjZWhvbGRlcj0iQ2UgcXVpIHMnZXN0IHBhc3PDqSBqdXN0ZSBhdmFudOKApiIgc3R5bGU9Im1pbi1oZWlnaHQ6ODBweDttYXJnaW4tdG9wOjhweCI+PC90ZXh0YXJlYT4KICAgICAgPGRpdiBjbGFzcz0ienEiPlNpIHR1IGxlIHNvdWhhaXRlcyA6IGZhaXMgbGUgZ2h1c2wsIHByaWUgZGV1eCByYWsnYXRzIGRlIHJlcGVudGlyLCBwdWlzIHJlcHJlbmRzLiBMYSBwb3J0ZSBuZSBzZSBmZXJtZSBwYXMuPC9kaXY+CiAgICAgICR7ci5ncCA/IGdwSW5mbygpIDogJzxidXR0b24gY2xhc3M9ImJ0biBibG9jayBxdWlldCIgZGF0YS16Z3Agc3R5bGU9Im1hcmdpbi10b3A6MTJweCI+SmUgbmUgcGV1eCBwYXMgZmFpcmUgbGUgZ2h1c2wgbWFpbnRlbmFudDwvYnV0dG9uPid9CiAgICAgIDxidXR0b24gY2xhc3M9ImJ0biBibG9jayIgZGF0YS16cmVzdGFydCBzdHlsZT0ibWFyZ2luLXRvcDoyMnB4Ij5KZSByZXBhcnMgbWFpbnRlbmFudDwvYnV0dG9uPgogICAgICA8YnV0dG9uIGNsYXNzPSJidG4gYmxvY2sgcXVpZXQiIGRhdGEtenJlbHggc3R5bGU9Im1hcmdpbi10b3A6MTBweCI+QW5udWxlciwgamUgbidhaSBwYXMgcmVjaHV0w6k8L2J1dHRvbj4KICAgIDwvZGl2PjwvZGl2PmA7CiAgfQogIGZ1bmN0aW9uIHZTZXR1cCgpIHsKICAgIGNvbnN0IGV4aXN0cyA9ICEhKFMuemMgJiYgUy56Yy5jKTsKICAgIHJldHVybiBgPGhlYWRlciBjbGFzcz0idG9wIj48ZGl2PjxwIGNsYXNzPSJleWVicm93Ij5Fc3BhY2UgcHJpdsOpPC9wPjxoMT5DcsOpZXIgdG9uIDxlbT5lc3BhY2U8L2VtPjwvaDE+PHA+SW52aXNpYmxlIGRhbnMgbCdhcHAuIENoaWZmcsOpIGF2ZWMgdG9uIGNvZGUgOiBzYW5zIGx1aSwgcGVyc29ubmUgbmUgcGV1dCBsZSBsaXJlLjwvcD48L2Rpdj48L2hlYWRlcj4KICAgICAgJHtleGlzdHMgPyBgPGRpdiBjbGFzcz0iYWxlcnQgZGFuZ2VyIj4ke0lDT04ud2Fybn08c3Bhbj5VbiBlc3BhY2UgZXhpc3RlIGTDqWrDoC4gRW4gY3LDqWVyIHVuIG5vdXZlYXUgZWZmYWNlcmEgbCdhbmNpZW4gcG91ciB0b3Vqb3Vycy48L3NwYW4+PC9kaXY+YCA6ICcnfQogICAgICA8c2VjdGlvbiBzdHlsZT0ibWFyZ2luLXRvcDoyNnB4IiBjbGFzcz0ienNldCI+PGgyPlRvbiBjb2RlPC9oMj4KICAgICAgICA8ZGl2IGNsYXNzPSJncm91cCI+PGRpdiBjbGFzcz0iY2VsbCI+PGxhYmVsIGZvcj0iemMxIj5Db2RlPC9sYWJlbD48aW5wdXQgaWQ9InpjMSIgdHlwZT0icGFzc3dvcmQiIGNsYXNzPSJyIiBzdHlsZT0id2lkdGg6OWVtO21heC13aWR0aDo2MCUiIGF1dG9jb21wbGV0ZT0ib2ZmIiBhdXRvY2FwaXRhbGl6ZT0ib2ZmIj48L2Rpdj4KICAgICAgICA8ZGl2IGNsYXNzPSJjZWxsIj48bGFiZWwgZm9yPSJ6YzIiPkNvbmZpcm1lcjwvbGFiZWw+PGlucHV0IGlkPSJ6YzIiIHR5cGU9InBhc3N3b3JkIiBjbGFzcz0iciIgc3R5bGU9IndpZHRoOjllbTttYXgtd2lkdGg6NjAlIiBhdXRvY29tcGxldGU9Im9mZiIgYXV0b2NhcGl0YWxpemU9Im9mZiI+PC9kaXY+PC9kaXY+CiAgICAgICAgPHAgY2xhc3M9ImhpbnQiPjYgY2FyYWN0w6hyZXMgbWluaW11bSwgc2FucyBlc3BhY2UuIFBvdXIgb3V2cmlyIGwnZXNwYWNlIDogb3V2cmUgSWTDqWVzIChsJ2FtcG91bGUpLCB0YXBlIHRvbiBjb2RlLCBwdWlzIEFqb3V0ZXIuIFNpIHR1IGwnb3VibGllcywgcGVyc29ubmUgbmUgcG91cnJhIHJvdXZyaXIgY2V0IGVzcGFjZSwgcGFzIG3Dqm1lIHRvaS48L3A+PC9zZWN0aW9uPgogICAgICA8c2VjdGlvbj48aDI+Q2UgcXVlIHR1IGFycsOqdGVzIG1haW50ZW5hbnQ8L2gyPgogICAgICAgIDxkaXYgY2xhc3M9Imdyb3VwIj48ZGl2IGNsYXNzPSJjZWxsIj48bGFiZWwgZm9yPSJ6bjEiPk5vbTwvbGFiZWw+PGlucHV0IGlkPSJ6bjEiIGNsYXNzPSJyIiBzdHlsZT0id2lkdGg6MTBlbTttYXgtd2lkdGg6NjAlIiBwbGFjZWhvbGRlcj0iVmlzaWJsZSBpY2kgc2V1bGVtZW50Ij48L2Rpdj4KICAgICAgICA8ZGl2IGNsYXNzPSJjZWxsIj48bGFiZWwgZm9yPSJ6ZDEiPkRlcm5pw6hyZSBmb2lzPC9sYWJlbD48aW5wdXQgaWQ9InpkMSIgdHlwZT0iZGF0ZXRpbWUtbG9jYWwiIHZhbHVlPSIke25ldyBEYXRlKG5vdygpIC0gbmV3IERhdGUoKS5nZXRUaW1lem9uZU9mZnNldCgpICogNjAwMDApLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTYpfSIgc3R5bGU9Im1heC13aWR0aDo2MiU7Ym9yZGVyOjA7YmFja2dyb3VuZDp2YXIoLS1yYWlzZSk7Ym9yZGVyLXJhZGl1czoxMHB4O2NvbG9yOnZhcigtLWluayk7bWluLWhlaWdodDo0MHB4O3BhZGRpbmc6MCA4cHg7Zm9udDppbmhlcml0O2ZvbnQtc2l6ZTouODc1cmVtIj48L2Rpdj48L2Rpdj48L3NlY3Rpb24+CiAgICAgIDxzZWN0aW9uPjxoMj5DZSBxdWUgdHUgb2JzZXJ2ZXMgZCdhYm9yZDwvaDI+CiAgICAgICAgPGRpdiBjbGFzcz0iZ3JvdXAiPjxkaXYgY2xhc3M9ImNlbGwiPjxsYWJlbCBmb3I9InpuMiI+Tm9tPC9sYWJlbD48aW5wdXQgaWQ9InpuMiIgY2xhc3M9InIiIHN0eWxlPSJ3aWR0aDoxMGVtO21heC13aWR0aDo2MCUiIHBsYWNlaG9sZGVyPSJMYWlzc2UgdmlkZSBzaSByaWVuIj48L2Rpdj4KICAgICAgICA8bGFiZWwgY2xhc3M9ImNlbGwgdGFwIj48c3BhbiBjbGFzcz0ibGJsIj5DJ2VzdCBkZSBsYSBuaWNvdGluZTwvc3Bhbj48c3BhbiBjbGFzcz0ic3dpdGNoIj48aW5wdXQgdHlwZT0iY2hlY2tib3giIGlkPSJ6bjJuIiBjaGVja2VkPjxzcGFuPjwvc3Bhbj48L3NwYW4+PC9sYWJlbD48L2Rpdj4KICAgICAgICA8cCBjbGFzcz0iaGludCI+RW4gb2JzZXJ2YXRpb24sIHR1IG5vdGVzIHNldWxlbWVudC4gVHUgcGFzc2VzIGVuIGFycsOqdCBsZSBqb3VyIG/DuSB0dSB0ZSBzZW5zIHByw6p0LjwvcD48L3NlY3Rpb24+CiAgICAgIDxidXR0b24gY2xhc3M9ImJ0biBibG9jayIgZGF0YS16Y3JlYXRlIHN0eWxlPSJtYXJnaW4tdG9wOjI2cHgiPkNyw6llciBldCBjaGlmZnJlcjwvYnV0dG9uPgogICAgICA8YnV0dG9uIGNsYXNzPSJidG4gYmxvY2sgcXVpZXQiIGRhdGEtemxvY2sgc3R5bGU9Im1hcmdpbi10b3A6MTBweCI+QW5udWxlcjwvYnV0dG9uPmA7CiAgfQogIGZ1bmN0aW9uIG9wZW5FZGl0KGtpbmQpIHsKICAgIGNvbnN0IGggPSBIKCk7CiAgICBjb25zdCBib2R5ID0ga2luZCA9PT0gJ3JlYXNvbnMnCiAgICAgID8gYDxwIGNsYXNzPSJzbWFsbCBtdXRlZCI+VW5lIHJhaXNvbiBwYXIgbGlnbmUuIExlcyB0aWVubmVzLCBwYXMgY2VsbGVzIGRlcyBhdXRyZXMuPC9wPjx0ZXh0YXJlYSBpZD0iekVkIiBzdHlsZT0ibWluLWhlaWdodDoxODBweDttYXJnaW4tdG9wOjEycHgiIHBsYWNlaG9sZGVyPSJQb3VyIEFsbGFoJiMxMDtQb3VyIG1vbiBjb3VwbGUmIzEwO1BvdXIgbW9uIMOpbmVyZ2llIGV0IG1hIGNsYXJ0w6kmIzEwO1BvdXIgbGUgcMOocmUgcXVlIGplIHZldXggw6p0cmUiPiR7ZXNjKGgucmVhc29ucy5qb2luKCdcbicpKX08L3RleHRhcmVhPmAKICAgICAgOiBgPHAgY2xhc3M9InNtYWxsIG11dGVkIj5TaSBbc2l0dWF0aW9uXSwgYWxvcnMgW2NlIHF1ZSBqZSBmYWlzXS4gQ291cnQsIGNvbmNyZXQsIGZhaXNhYmxlIGVuIDEwIHNlY29uZGVzLjwvcD48ZGl2IHN0eWxlPSJtYXJnaW4tdG9wOjEycHgiPiR7aC5wbGFucy5tYXAoKHAsIGkpID0+IGA8ZGl2IGNsYXNzPSJ6cGxhbiI+PGlucHV0IGRhdGEtenA9IiR7aX0uMCIgdmFsdWU9IiR7ZXNjKHBbMF0pfSIgYXJpYS1sYWJlbD0iU2kiPjxpbnB1dCBkYXRhLXpwPSIke2l9LjEiIHZhbHVlPSIke2VzYyhwWzFdKX0iIGFyaWEtbGFiZWw9IkFsb3JzIj48YnV0dG9uIGNsYXNzPSJpY29uLWJ0biIgZGF0YS16cGRlbD0iJHtpfSIgYXJpYS1sYWJlbD0iU3VwcHJpbWVyIj4ke1h9PC9idXR0b24+PC9kaXY+YCkuam9pbignJyl9PC9kaXY+PGJ1dHRvbiBjbGFzcz0iYnRuIHNtIGdob3N0IiBkYXRhLXpwYWRkPisgVW4gcGxhbjwvYnV0dG9uPmA7CiAgICAkKCcjaWRlYXNCb2R5JykuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9ImdyYWIiPjwvZGl2PjxkaXYgY2xhc3M9InNoZWV0LXRvcCI+PHNwYW4gc3R5bGU9IndpZHRoOjYwcHgiPjwvc3Bhbj48aDIgaWQ9ImlkZWFzVGl0bGUiPiR7a2luZCA9PT0gJ3JlYXNvbnMnID8gJ01lcyByYWlzb25zJyA6ICdTaeKApiBhbG9yc+KApid9PC9oMj48YnV0dG9uIGNsYXNzPSJsaW5rLWJ0biIgZGF0YS16ZWRvaz0iJHtraW5kfSIgc3R5bGU9InRleHQtYWxpZ246cmlnaHQiPk9LPC9idXR0b24+PC9kaXY+JHtib2R5fWA7CiAgICBjb25zdCBkID0gJCgnI2lkZWFzU2hlZXQnKTsgaWYgKCFkLm9wZW4pIGQuc2hvd01vZGFsKCk7IGQuZGF0YXNldC5tb2RlID0gJ3onOwogIH0KICAvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0KICAgICBSQVRUUkFQQUdFIOKAlCBsYSBtb3NxdcOpZSByZWLDonRpZSBwaWVycmUgcGFyIHBpZXJyZSAocHJpw6hyZXMpIGV0IGxhCiAgICAgcGFsbWVyYWllIChqZcO7bmVzKS4gVW5lIHBpZXJyZSA9IHVuZSBwcmnDqHJlLCB1biBwYWxtaWVyID0gdW4gam91ci4KICAgICBUb3V0IHJlc3RlIGNoaWZmcsOpIGljaSA7IDEgZGUgbHVtacOocmUgcGFyIHJhdHRyYXBhZ2UsIHNhbnMgbGliZWxsw6kuCiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovCiAgY29uc3QgUUNIID0gWwogICAgWydMZXMgZm9uZGF0aW9ucycsICdNNSAyMjBIMjk1VjE4OEgyNzJWMTYwSDIzMlYxMzRINjhWMTYwSDI4VjE4OEg1WicsICdDZWx1aSBxdWkgb3VibGllIHVuZSBwcmnDqHJlIG91IHNcJ2VuZG9ydCwgcXVcJ2lsIGxhIHByaWUgcXVhbmQgaWwgc1wnZW4gc291dmllbnQuJywgJ0J1a2hhcmkgNTk3LCBNdXNsaW0gNjg0J10sCiAgICBbJ0xhIGNvdXInLCAnTTE1MCA0MEwyOTAgMTMwTDE1MCAyMjBMMTAgMTMwWicsICdMZXMgYm9ubmVzIGFjdGlvbnMgZWZmYWNlbnQgbGVzIG1hdXZhaXNlcy4nLCAnQ29yYW4gMTE6MTE0J10sCiAgICBbJ0xlcyBtdXJzJywgJ00yMCAyMjBWNDBIMjgwVjIyMFogTTcwIDE2MFYxMDhROTAgNzAgMTEwIDEwOFYxNjBaIE0xOTAgMTYwVjEwOFEyMTAgNzAgMjMwIDEwOFYxNjBaJywgJ0NoZXJjaGV6IHNlY291cnMgZGFucyBsYSBwYXRpZW5jZSBldCBsYSBwcmnDqHJlLicsICdDb3JhbiAyOjQ1J10sCiAgICBbJ0xlcyBhcmNhZGVzJywgJ00xMCAyMjBWNTBIMjkwVjIyMFogTTMwIDIyMFYxMzJRNjAgNzAgOTAgMTMyVjIyMFogTTEyMCAyMjBWMTMyUTE1MCA3MCAxODAgMTMyVjIyMFogTTIxMCAyMjBWMTMyUTI0MCA3MCAyNzAgMTMyVjIyMFonLCAnTGVzIGFjdGVzIGxlcyBwbHVzIGFpbcOpcyBkXCdBbGxhaCBzb250IGxlcyBwbHVzIHLDqWd1bGllcnMsIG3Dqm1lIHNcJ2lscyBzb250IHBldSBub21icmV1eC4nLCAnQnVraGFyaSA2NDY0LCBNdXNsaW0gNzgzJ10sCiAgICBbJ0xlIGdyYW5kIHBvcnRhaWwnLCAnTTYwIDIyMFY5NVE2MCAyMCAxNTAgNVEyNDAgMjAgMjQwIDk1VjIyMFogTTEwMCAyMjBWMTEyUTEwMCA2MCAxNTAgNDZRMjAwIDYwIDIwMCAxMTJWMjIwWicsICdBbGxhaCBuXCdpbXBvc2Ugw6AgYXVjdW5lIMOibWUgdW5lIGNoYXJnZSBzdXDDqXJpZXVyZSDDoCBzYSBjYXBhY2l0w6kuJywgJ0NvcmFuIDI6Mjg2J10sCiAgICBbJ0xhIGNvdXBvbGUnLCAnTTIwIDIyMEMyMCAxMjAgMTEwIDEwMCAxNTAgMTBDMTkwIDEwMCAyODAgMTIwIDI4MCAyMjBaJywgJ0RpcyA6IMOUIE1lcyBzZXJ2aXRldXJzIHF1aSBhdmV6IGNvbW1pcyBkZXMgZXhjw6hzIMOgIHZvdHJlIHByb3ByZSBkw6l0cmltZW50LCBuZSBkw6lzZXNww6lyZXogcGFzIGRlIGxhIG1pc8Opcmljb3JkZSBkXCdBbGxhaC4nLCAnQ29yYW4gMzk6NTMnXSwKICAgIFsnTGUgbWluYXJldCcsICdNMTE1IDIyMFY3MEgxMDVWNThIMTk1VjcwSDE4NVYyMjBaIE0xMjggNThMMTUwIDhMMTcyIDU4WicsICfDiXRhYmxpcyBsYSBwcmnDqHJlLCBjYXIgbGEgcHJpw6hyZSBwcsOpc2VydmUgZGUgbGEgdHVycGl0dWRlIGV0IGR1IGJsw6JtYWJsZS4nLCAnQ29yYW4gMjk6NDUnXSwKICAgIFsnTGUgemVsbGlnZSBldCBsYSBjYWxsaWdyYXBoaWUnLCBudWxsLCAnQWxsYWggYWltZSwgbG9yc3F1ZSBsXCd1biBkZSB2b3VzIGFjY29tcGxpdCB1bmUgdMOiY2hlLCBxdVwnaWwgbGEgZmFzc2UgYXZlYyBleGNlbGxlbmNlLicsICdCYXloYXFpJ10sCiAgICBbJ0xhIGZvbnRhaW5lIGRlcyBhYmx1dGlvbnMnLCAnTTIwIDIyMFEyMCAxNzUgMTUwIDE3NVEyODAgMTc1IDI4MCAyMjBaIE0xMTAgMTc1VjE0MFExNTAgMTIwIDE5MCAxNDBWMTc1WiBNMTQwIDE0MFY3MFExNTAgNTUgMTYwIDcwVjE0MFonLCAnQWxsYWggYWltZSBjZXV4IHF1aSBzZSByZXBlbnRlbnQgZXQgY2V1eCBxdWkgc2UgcHVyaWZpZW50LicsICdDb3JhbiAyOjIyMiddLAogICAgWydMZXMgbHVtacOocmVzJywgJ00xNTAgMEwxNzUgMzBIMTI1WiBNMTE1IDMwSDE4NUwyMDAgNzBWMTcwTDE4NSAyMDBIMTE1TDEwMCAxNzBWNzBaIE0xMzUgMjAwSDE2NUwxNjAgMjIwSDE0MFonLCAnQWxsYWggZXN0IGxhIGx1bWnDqHJlIGRlcyBjaWV1eCBldCBkZSBsYSB0ZXJyZS4nLCAnQ29yYW4gMjQ6MzUnXQogIF07CiAgKCgpID0+IHsgbGV0IGQgPSAnJzsgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgaSsrKSB7IGNvbnN0IGEgPSAtTWF0aC5QSSAvIDIgKyBpICogTWF0aC5QSSAvIDgsIHIgPSBpICUgMiA/IDc4IDogMTA4OyBkICs9IGAke2kgPyAnTCcgOiAnTSd9JHsoMTUwICsgciAqIE1hdGguY29zKGEpKS50b0ZpeGVkKDEpfSAkeygxMTUgKyByICogTWF0aC5zaW4oYSkpLnRvRml4ZWQoMSl9YDsgfSBRQ0hbN11bMV0gPSBkICsgJ1onOyB9KSgpOwogIGNvbnN0IFFTVE9ORSA9IFtbJyNDOUI3OUMnLCAnI0I4QTQ4NycsICcjRDZDNkFDJ10sIFsnI0Q5Q0RCOCcsICcjQzdCOUExJywgJyNFNEQ5QzYnXSwgWycjQzRBNTdFJywgJyNCMzkzNzAnLCAnI0QyQjQ4RSddLCBbJyNDOUI3OUMnLCAnI0JCQTk4RCcsICcjRDhDOEFFJ10sIFsnI0I5OEU1RScsICcjQTg3RjUyJywgJyNDOTlFNkUnXSwgWycjRTBENkMyJywgJyNDRkMzQUMnLCAnI0VDRTNEMiddLCBbJyNDOUI3OUMnLCAnI0I4QTQ4NycsICcjRDZDNkFDJ10sIFsnIzJFN0ZBMycsICcjRTlDNDZBJywgJyNGMkVFRTQnXSwgWycjN0ZCN0M5JywgJyM5Q0M4RDYnLCAnI0M5RTRFQyddLCBbJyNFOUM0NkEnLCAnI0Y1RDk4RScsICcjRkZFOUE4J11dOwogIGNvbnN0IFFaID0geyBlZGl0OiBmYWxzZSwgZm9jdXM6IHRydWUsIHQ6IG51bGwsIGNhY2hlOiB7fSB9OwogIGZ1bmN0aW9uIHFkKCkgeyBjb25zdCBxID0gWi5kLnFhZGEgPSBaLmQucWFkYSB8fCB7fTsgcS5wZXIgPSBxLnBlciB8fCBbeyB5OiAxMCwgcDogMTAwIH1dOyBxLmxvZyA9IHEubG9nIHx8IHt9OyBxLm1zID0gcS5tcyB8fCB7fTsgcS5kb25lID0gcS5kb25lIHx8IDA7IHEucGFjZSA9IHEucGFjZSB8fCA1OyBxLmZhc3QgPSBxLmZhc3QgfHwgeyB0b3RhbDogMCwgZG9uZTogMCwgbG9nOiB7fSB9OyBxLmZpZCA9IHEuZmlkIHx8IHsgc2Nob29sOiAnb2ZmJywgeXJzOiAxLCBwcmljZTogJycsIGdpdmVuOiAwIH07IHJldHVybiBxOyB9CiAgY29uc3QgcVRvdGFsT2YgPSBxID0+IE1hdGgubWF4KDAsIE1hdGgucm91bmQocS5wZXIucmVkdWNlKChhLCByKSA9PiBhICsgKE51bWJlcihyLnkpIHx8IDApICogMzY1ICogNSAqIChOdW1iZXIoci5wKSB8fCAwKSAvIDEwMCwgMCkpIC0gKE51bWJlcihxLnByZSkgfHwgMCkpOwogIGZ1bmN0aW9uIHFDaGFwKHEpIHsgY29uc3QgVCA9IHEudG90YWwsIHNpemUgPSBNYXRoLmNlaWwoVCAvIDEwKSB8fCAxLCBjaCA9IE1hdGgubWluKDksIE1hdGguZmxvb3IocS5kb25lIC8gc2l6ZSkpLCBzdGFydCA9IGNoICogc2l6ZSwgbiA9IGNoID09PSA5ID8gVCAtIDkgKiBzaXplIDogc2l6ZTsgcmV0dXJuIHsgc2l6ZSwgY2gsIG4sIGluQ2g6IE1hdGgubWluKG4sIHEuZG9uZSAtIHN0YXJ0KSB9OyB9CiAgZnVuY3Rpb24gcVN0cmVhayhsb2cpIHsgbGV0IHMgPSAwOyBmb3IgKGxldCBpID0gKGxvZ1t0b2RheUlTTygpXSA/IDAgOiAxKTsgaSA8IDQwMDA7IGkrKykgeyBpZiAobG9nW2lzbyhhZGREYXlzKG5ldyBEYXRlKCksIC1pKSldKSBzKys7IGVsc2UgYnJlYWs7IH0gcmV0dXJuIHM7IH0KICBjb25zdCBxU2F2ZSA9ICgpID0+IHsgY2xlYXJUaW1lb3V0KFFaLnQpOyBRWi50ID0gc2V0VGltZW91dCgoKSA9PiBwZXJzaXN0KCksIDcwMCk7IH07CiAgLyogUGllcnJlcyBkJ3VuIGNoYW50aWVyIDogYnJpcXVlcyBlbiBhcHBhcmVpbCBkw6ljYWzDqSwgZHUgYmFzIHZlcnMgbGUgaGF1dCwgZGFucyBsYSBmb3JtZSBkdSBjaGFudGllci4gKi8KICBmdW5jdGlvbiBxQ2VsbHMoY2gsIG4pIHsKICAgIGNvbnN0IGtleSA9IGNoICsgJzonICsgbjsgaWYgKFFaLmNhY2hlW2tleV0pIHJldHVybiBRWi5jYWNoZVtrZXldOwogICAgY29uc3QgY3YgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKS5nZXRDb250ZXh0KCcyZCcpLCBwID0gbmV3IFBhdGgyRChRQ0hbY2hdWzFdKTsKICAgIGNvbnN0IGdyaWQgPSBzID0+IHsgY29uc3Qgb3V0ID0gW107IGZvciAobGV0IHkgPSAyMjAgLSBzOyB5ID49IDA7IHkgLT0gcykgeyBjb25zdCByb3cgPSBNYXRoLnJvdW5kKCgyMjAgLSB5KSAvIHMpLCBvZmYgPSByb3cgJSAyID8gcyA6IDA7IGZvciAobGV0IHggPSAtb2ZmOyB4IDwgMzAwOyB4ICs9IDIgKiBzKSB7IGNvbnN0IGN4ID0geCArIHMsIGN5ID0geSArIHMgLyAyOyBpZiAoY3ggPiAwICYmIGN4IDwgMzAwICYmIGN2LmlzUG9pbnRJblBhdGgocCwgY3gsIGN5LCAnZXZlbm9kZCcpKSBvdXQucHVzaChbeCwgeSwgMiAqIHMsIHNdKTsgfSB9IHJldHVybiBvdXQ7IH07CiAgICBsZXQgbG8gPSAuNiwgaGkgPSA0MCwgYmVzdCA9IG51bGw7CiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDIyOyBpKyspIHsgY29uc3QgbSA9IChsbyArIGhpKSAvIDIsIGcgPSBncmlkKG0pOyBpZiAoZy5sZW5ndGggPj0gbikgeyBiZXN0ID0gZzsgbG8gPSBtOyB9IGVsc2UgaGkgPSBtOyB9CiAgICBiZXN0ID0gKGJlc3QgfHwgZ3JpZCguNikpLnNsaWNlKDAsIG4pOwogICAgbGV0IHgwID0gMWU5LCB5MCA9IDFlOSwgeDEgPSAtMWU5LCB5MSA9IC0xZTk7IGJlc3QuZm9yRWFjaCgoW2EsIGIsIHcsIGhdKSA9PiB7IHgwID0gTWF0aC5taW4oeDAsIGEpOyB5MCA9IE1hdGgubWluKHkwLCBiKTsgeDEgPSBNYXRoLm1heCh4MSwgYSArIHcpOyB5MSA9IE1hdGgubWF4KHkxLCBiICsgaCk7IH0pOwogICAgYmVzdC5iYiA9IFt4MCwgeTAsIE1hdGgubWF4KDEsIHgxIC0geDApLCBNYXRoLm1heCgxLCB5MSAtIHkwKV07IFFaLmNhY2hlW2tleV0gPSBiZXN0OyByZXR1cm4gYmVzdDsKICB9CiAgZnVuY3Rpb24gcURyYXcoKSB7CiAgICBjb25zdCBjdnMgPSAkKCcjcUNhbnZhcycpOyBpZiAoIWN2cykgcmV0dXJuOyBjb25zdCBxID0gcWQoKSwgQyA9IHFDaGFwKHEpOwogICAgY29uc3QgY2VsbHMgPSBxQ2VsbHMoQy5jaCwgQy5uKSwgW2J4LCBieSwgYncsIGJoXSA9IGNlbGxzLmJiLCBXID0gY3ZzLmNsaWVudFdpZHRoLCBrID0gTWF0aC5taW4oVyAvIGJ3LCBXICogMS4xNSAvIGJoKSwgSCA9IGJoICogaywgZHByID0gTWF0aC5taW4oMywgd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMSk7CiAgICBjdnMud2lkdGggPSBXICogZHByOyBjdnMuaGVpZ2h0ID0gSCAqIGRwcjsgY3ZzLnN0eWxlLmhlaWdodCA9IEggKyAncHgnOwogICAgY29uc3QgeCA9IGN2cy5nZXRDb250ZXh0KCcyZCcpOyB4LnNldFRyYW5zZm9ybShkcHIgKiBrLCAwLCAwLCBkcHIgKiBrLCBkcHIgKiAoKFcgLSBidyAqIGspIC8gMiAtIGJ4ICogayksIC1kcHIgKiBieSAqIGspOwogICAgY29uc3QgY29sID0gUVNUT05FW0MuY2hdLCBkYXJrID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRhdGFzZXQubW9kZSAhPT0gJ2xpZ2h0JzsKICAgIHguZmlsbFN0eWxlID0gZGFyayA/ICdyZ2JhKDI1NSwyNTUsMjU1LC4wNyknIDogJ3JnYmEoMCwwLDAsLjA3KSc7CiAgICBjZWxscy5mb3JFYWNoKChbYSwgYiwgdywgaF0sIGkpID0+IHsKICAgICAgaWYgKGkgPCBDLmluQ2gpIHsgeC5maWxsU3R5bGUgPSBjb2xbKGkgKiA3ICsgKGkgPj4gMykpICUgM107IHguZmlsbFJlY3QoYSArIC4yNSwgYiArIC4yNSwgdyAtIC41LCBoIC0gLjUpOyB9CiAgICAgIGVsc2UgeyB4LmZpbGxTdHlsZSA9IGRhcmsgPyAncmdiYSgyNTUsMjU1LDI1NSwuMSknIDogJ3JnYmEoMCwwLDAsLjA5KSc7IHguZmlsbFJlY3QoYSArIC40LCBiICsgLjQsIHcgLSAuOCwgaCAtIC44KTsgfQogICAgfSk7CiAgICBpZiAoQy5pbkNoID4gMCkgeyBjb25zdCBbYSwgYiwgdywgaF0gPSBjZWxsc1tDLmluQ2ggLSAxXTsgeC5zYXZlKCk7IHguc2hhZG93Q29sb3IgPSAnI0ZGRTlBOCc7IHguc2hhZG93Qmx1ciA9IDg7IHguZmlsbFN0eWxlID0gJyNGRkY0Q0YnOyB4LmZpbGxSZWN0KGEsIGIsIHcsIGgpOyB4LnJlc3RvcmUoKTsgfQogIH0KICAvKiBWdWUgZCdlbnNlbWJsZSA6IGxhIG1vc3F1w6llIGRhbnMgbGEgbnVpdCwgbGEgcGFsbWVyYWllLCBsZSBwdWl0cy4gKi8KICBjb25zdCBRUEFSVFMgPSBbCiAgICBbJ003MCAxOTRoMjIwdjhINzB6JywgWzcwLCAxOTQsIDIyMCwgOF1dLCBbJ000MCAyMDJoMjgwdjEwSDQweicsIFs0MCwgMjAyLCAyODAsIDEwXV0sIFsnTTkwIDEzMmgxODB2NjJIOTB6JywgWzkwLCAxMzIsIDE4MCwgNjJdXSwKICAgIFsnTTg0IDE1MGgxOTJ2NDRIODR6IE05NiAxOTR2LTI2cTExLTIwIDIyLTB2MjZ6IE0xMjggMTk0di0yNnExMS0yMCAyMi0wdjI2eiBNMjEwIDE5NHYtMjZxMTEtMjAgMjItMHYyNnogTTI0MiAxOTR2LTI2cTExLTIwIDIyLTB2MjZ6JywgWzg0LCAxNTAsIDE5MiwgNDRdXSwKICAgIFsnTTE1OCAxOTRWMTIwcTAtMjQgMjItMzRxMjIgMTAgMjIgMzR2NzR6IE0xNjggMTk0di02MnEwLTE0IDEyLTIwcTEyIDYgMTIgMjB2NjJ6JywgWzE1OCwgODYsIDQ0LCAxMDhdXSwKICAgIFsnTTEyOCAxMzJDMTI4IDkyIDE2OCA4NCAxODAgNTZDMTkyIDg0IDIzMiA5MiAyMzIgMTMyWicsIFsxMjgsIDU2LCAxMDQsIDc2XV0sIFsnTTI5MCAxOTRWNzhoLTR2LTZoMjR2NmgtNHYxMTZ6IE0yOTIgNzJsNi0xOCA2IDE4eicsIFsyODYsIDU0LCAyNCwgMTQwXV0sCiAgICBbJ005MCAxMzJoMTgwdjdIOTB6IE0xMTAgMTQybDQtNCA0IDQtNCA0eiBNMTM0IDE0Mmw0LTQgNCA0LTQgNHogTTIyNiAxNDJsNC00IDQgNC00IDR6IE0yNTAgMTQybDQtNCA0IDQtNCA0eicsIFs5MCwgMTMyLCAxODAsIDE0XV0sCiAgICBbJ00xOCAyMTRxMC0xMCAyNi0xMHQyNiAxMHogTTM2IDIwNHYtMTBxOC01IDE2IDB2MTB6IE00MiAxOTR2LTE0cTItMyA0IDB2MTR6JywgWzE4LCAxODAsIDUyLCAzNF1dLAogICAgWydNMTgwIDUwYTUgNSAwIDEgMCA0IDhhNCA0IDAgMSAxLTQtOHogTTI5NiA0OGE0IDQgMCAxIDAgMyA2YTMgMyAwIDEgMS0zLTZ6IE0xMDQgMTY4aDh2MTRoLTh6IE0yNDggMTY4aDh2MTRoLTh6IE0xNzYgMTUwaDh2MTJoLTh6JywgWzEwMCwgNDQsIDIxMCwgMTQwXV0KICBdOwogIGZ1bmN0aW9uIHFTY2VuZShxKSB7CiAgICBjb25zdCBDID0gcS50b3RhbCA/IHFDaGFwKHEpIDogeyBjaDogMCwgaW5DaDogMCwgbjogMSB9LCBsaXQgPSBxLnRvdGFsICYmIHEuZG9uZSA+PSBxLnRvdGFsOwogICAgbGV0IHN0YXJzID0gJycsIHNlZWQgPSA3OyBjb25zdCBybmQgPSAoKSA9PiAoc2VlZCA9IChzZWVkICogOTMwMSArIDQ5Mjk3KSAlIDIzMzI4MCkgLyAyMzMyODA7CiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQwOyBpKyspIHN0YXJzICs9IGA8Y2lyY2xlIGN4PSIkeyhybmQoKSAqIDM2MCkudG9GaXhlZCgwKX0iIGN5PSIkeyhybmQoKSAqIDEyMCkudG9GaXhlZCgwKX0iIHI9IiR7KHJuZCgpICogLjkgKyAuMykudG9GaXhlZCgxKX0iIGZpbGw9IiNmZmYiIG9wYWNpdHk9IiR7KHJuZCgpICogLjUgKyAuMikudG9GaXhlZCgyKX0iLz5gOwogICAgY29uc3QgcGFydHMgPSBRUEFSVFMubWFwKChbZCwgYmJdLCBpKSA9PiB7CiAgICAgIGNvbnN0IGRvbmUgPSBxLnRvdGFsICYmIChpIDwgQy5jaCB8fCBsaXQpLCBjdXIgPSBxLnRvdGFsICYmIGkgPT09IEMuY2ggJiYgIWxpdCwgcCA9IGN1ciA/IEMuaW5DaCAvIEMubiA6IDAsIGZpbGwgPSBpID09PSA5ID8gJyNGRkQ4NkInIDogaSA9PT0gNyA/ICcjM0U4RkIwJyA6IGkgPT09IDggPyAnIzhDQzZENicgOiAnI0NEQkI5RSc7CiAgICAgIGNvbnN0IGdob3N0ID0gYDxwYXRoIGQ9IiR7ZH0iIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0NEQkI5RSIgc3Ryb2tlLW9wYWNpdHk9Ii4yOCIgc3Ryb2tlLWRhc2hhcnJheT0iMiAzIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz5gOwogICAgICBpZiAoZG9uZSkgcmV0dXJuIGA8cGF0aCBkPSIke2R9IiBmaWxsPSIke2ZpbGx9IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiICR7aSA9PT0gOSA/ICdmaWx0ZXI9InVybCgjcWdsb3cpIicgOiAnJ30vPmA7CiAgICAgIGlmIChjdXIpIHJldHVybiBnaG9zdCArIGA8Y2xpcFBhdGggaWQ9InFjJHtpfSI+PHJlY3QgeD0iJHtiYlswXSAtIDJ9IiB5PSIkeyhiYlsxXSArIGJiWzNdICogKDEgLSBwKSkudG9GaXhlZCgxKX0iIHdpZHRoPSIke2JiWzJdICsgNH0iIGhlaWdodD0iJHsoYmJbM10gKiBwICsgMikudG9GaXhlZCgxKX0iLz48L2NsaXBQYXRoPjxwYXRoIGQ9IiR7ZH0iIGZpbGw9IiR7ZmlsbH0iIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1wYXRoPSJ1cmwoI3FjJHtpfSkiLz5gOwogICAgICByZXR1cm4gZ2hvc3Q7CiAgICB9KS5qb2luKCcnKTsKICAgIGNvbnN0IEYgPSBxLmZhc3QsIHBhbG1zID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogTWF0aC5taW4oRi5kb25lIHx8IDAsIDE1MCkgfSwgKF8sIGkpID0+IHsgY29uc3Qgc2lkZSA9IGkgJSAzLCByID0gcm5kKCk7IGNvbnN0IHggPSBzaWRlID09PSAwID8gNCArIHIgKiA2MCA6IHNpZGUgPT09IDEgPyAzMDAgKyByICogNTYgOiA3MCArIHIgKiAyMjA7IGNvbnN0IHkgPSBzaWRlID09PSAyID8gMjIyICsgKGkgKiAxMyAlIDE4KSA6IDIwMCArIChpICogNyAlIDQwKTsgY29uc3QgcyA9IC41NSArICh5IC0gMTk2KSAvIDkwOyByZXR1cm4gYDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKCR7eC50b0ZpeGVkKDApfSAke3l9KSBzY2FsZSgke3MudG9GaXhlZCgyKX0pIj48cGF0aCBkPSJNMCAwcTEtMTItMS0yNCIgc3Ryb2tlPSIjOEE2QTRBIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNLTEgLTI0cS0xMC0yLTE0IDZNLTEgLTI0cS04LTgtMTYtNk0tMSAtMjRxMi0xMCAxMi0xME0tMSAtMjRxMTAtMiAxNCA2TS0xIC0yNHEwIC0xMCAtNiAtMTQiIHN0cm9rZT0iIzVGQTU3RSIgc3Ryb2tlLXdpZHRoPSIyLjIiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvZz5gOyB9KS5zb3J0KChhLCBiKSA9PiAwKS5qb2luKCcnKTsKICAgIGNvbnN0IGZpZCA9IHFGaWQocSksIHdsID0gZmlkLm5lZWQgPyBNYXRoLm1pbigxLCAoTnVtYmVyKHEuZmlkLmdpdmVuKSB8fCAwKSAvIGZpZC5uZWVkKSA6IDA7CiAgICBjb25zdCB3ZWxsID0gcS5maWQuc2Nob29sICE9PSAnb2ZmJyAmJiBmaWQubmVlZCA/IGA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMzAgMjMyKSI+PGVsbGlwc2Ugcng9IjE0IiByeT0iNSIgZmlsbD0iIzJBNEE1QSIvPjxjbGlwUGF0aCBpZD0icXdsIj48cmVjdCB4PSItMTQiIHk9IiR7KC01ICsgMTAgKiAoMSAtIHdsKSkudG9GaXhlZCgxKX0iIHdpZHRoPSIyOCIgaGVpZ2h0PSIxMCIvPjwvY2xpcFBhdGg+PGVsbGlwc2Ugcng9IjEyIiByeT0iNCIgZmlsbD0iIzc0QzNFMCIgY2xpcC1wYXRoPSJ1cmwoI3F3bCkiLz48cGF0aCBkPSJNLTE0IDB2LThoMjh2OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQ0RCQjlFIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+YCA6ICcnOwogICAgcmV0dXJuIGA8c3ZnIHZpZXdCb3g9IjAgMCAzNjAgMjUwIiBjbGFzcz0icXNjZW5lIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IkxhIG1vc3F1w6llIDogJHtxLmRvbmV9IHBpZXJyZXMgcG9zw6llcyBzdXIgJHtxLnRvdGFsfSI+CiAgICAgIDxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0icXNreSIgeDE9IjAiIHkxPSIwIiB4Mj0iMCIgeTI9IjEiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzBCMTQzMCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzFFMkE0NCIvPjwvbGluZWFyR3JhZGllbnQ+PGZpbHRlciBpZD0icWdsb3ciPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIuNSIgcmVzdWx0PSJiIi8+PGZlTWVyZ2U+PGZlTWVyZ2VOb2RlIGluPSJiIi8+PGZlTWVyZ2VOb2RlIGluPSJTb3VyY2VHcmFwaGljIi8+PC9mZU1lcmdlPjwvZmlsdGVyPjwvZGVmcz4KICAgICAgPHJlY3Qgd2lkdGg9IjM2MCIgaGVpZ2h0PSIyNTAiIHJ4PSIxOCIgZmlsbD0idXJsKCNxc2t5KSIvPiR7c3RhcnN9PHBhdGggZD0iTTMzMCAzMGExMiAxMiAwIDEgMCA5IDE5YTEwIDEwIDAgMSAxLTktMTl6IiBmaWxsPSIjRjVEOThFIiBvcGFjaXR5PSIuOSIvPgogICAgICA8cGF0aCBkPSJNMCAxOTZROTAgMTg2IDE4MCAxOTJUMzYwIDE5NFYyNTBIMFoiIGZpbGw9IiMzQTJFMjIiLz48cGF0aCBkPSJNMCAyMTRRMTIwIDIwNCAyNDAgMjEyVDM2MCAyMTBWMjUwSDBaIiBmaWxsPSIjNEEzQTJBIi8+CiAgICAgICR7cS50b3RhbCA/ICcnIDogJzxnIGZpbGw9IiM4RjdDNjIiIG9wYWNpdHk9Ii43Ij48cmVjdCB4PSIxMjAiIHk9IjE4NiIgd2lkdGg9IjE0IiBoZWlnaHQ9IjgiIHRyYW5zZm9ybT0icm90YXRlKC0xMiAxMjcgMTkwKSIvPjxyZWN0IHg9IjIwMCIgeT0iMTg4IiB3aWR0aD0iMTgiIGhlaWdodD0iNyIgdHJhbnNmb3JtPSJyb3RhdGUoOCAyMDkgMTkxKSIvPjxyZWN0IHg9IjE2MCIgeT0iMTkwIiB3aWR0aD0iMTAiIGhlaWdodD0iNiIvPjwvZz4nfQogICAgICAke3BhcnRzfSR7cGFsbXN9JHt3ZWxsfQogICAgICAke2xpdCA/ICc8Y2lyY2xlIGN4PSIxODAiIGN5PSIxMzAiIHI9IjkwIiBmaWxsPSIjRkZEODZCIiBvcGFjaXR5PSIuMDgiLz4nIDogJyd9CiAgICA8L3N2Zz5gOwogIH0KICBmdW5jdGlvbiBxRmlkKHEpIHsgY29uc3QgZiA9IHEuZmlkLCBkYXlzID0gTnVtYmVyKHEuZmFzdC50b3RhbCkgfHwgMDsgaWYgKGYuc2Nob29sID09PSAnb2ZmJyB8fCBmLnNjaG9vbCA9PT0gJ2hhbmFmJykgcmV0dXJuIHsgbWVhbHM6IDAsIG5lZWQ6IDAgfTsgY29uc3QgbWVhbHMgPSBkYXlzICogKGYuc2Nob29sID09PSAnc2hhZicgPyBNYXRoLm1heCgxLCBOdW1iZXIoZi55cnMpIHx8IDEpIDogMSksIHByaWNlID0gTnVtYmVyKFN0cmluZyhmLnByaWNlKS5yZXBsYWNlKCcsJywgJy4nKSkgfHwgMDsgcmV0dXJuIHsgbWVhbHMsIG5lZWQ6IG1lYWxzICogcHJpY2UsIHByaWNlIH07IH0KICBmdW5jdGlvbiB2UVNldHVwKHEpIHsKICAgIGNvbnN0IHRvdCA9IHFUb3RhbE9mKHEpOwogICAgcmV0dXJuIGA8c2VjdGlvbiBjbGFzcz0iemNhcmQiPjxwIGNsYXNzPSJleWVicm93IiBzdHlsZT0ibWFyZ2luOjAiPkVzdGltZXIgdGEgZGV0dGU8L3A+CiAgICAgIDxwIGNsYXNzPSJzbWFsbCIgc3R5bGU9Im1hcmdpbjo2cHggMCAxMHB4Ij5MZXMgc2F2YW50cyBjb25zZWlsbGVudCwgcXVhbmQgbGUgbm9tYnJlIGV4YWN0IGVzdCBpbmNvbm51LCBkZSByZXRlbmlyIGNlIHF1aSBlc3QgbGUgcGx1cyBwcm9iYWJsZSwgZW4gYXJyb25kaXNzYW50IHZlcnMgbGUgaGF1dC4gRMOpY291cGUgbGVzIGFubsOpZXMgZGVwdWlzIHRhIHB1YmVydMOpIGVuIHDDqXJpb2RlcywgZXQgZXN0aW1lIHBvdXIgY2hhY3VuZSBsYSBwYXJ0IGRlIHByacOocmVzIG1hbnF1w6llcy48L3A+CiAgICAgICR7cS5wZXIubWFwKChyLCBpKSA9PiBgPGRpdiBjbGFzcz0icXBlciI+PGxhYmVsPkFubsOpZXM8aW5wdXQgaW5wdXRtb2RlPSJudW1lcmljIiBkYXRhLXFwZXI9IiR7aX0ueSIgdmFsdWU9IiR7ci55fSI+PC9sYWJlbD48bGFiZWw+UHJpw6hyZXMgbWFucXXDqWVzPHNlbGVjdCBkYXRhLXFwZXI9IiR7aX0ucCI+JHtbMTAwLCA5MCwgNzUsIDUwLCAyNSwgMTBdLm1hcCh2ID0+IGA8b3B0aW9uIHZhbHVlPSIke3Z9IiAke051bWJlcihyLnApID09PSB2ID8gJ3NlbGVjdGVkJyA6ICcnfT4ke3YgPT09IDEwMCA/ICdQcmVzcXVlIHRvdXRlcycgOiB2ICsgJyAlJ308L29wdGlvbj5gKS5qb2luKCcnKX08L3NlbGVjdD48L2xhYmVsPiR7cS5wZXIubGVuZ3RoID4gMSA/IGA8YnV0dG9uIGNsYXNzPSJpY29uLWJ0biIgZGF0YS1xZGVsPSIke2l9IiBhcmlhLWxhYmVsPSJSZXRpcmVyIj7DlzwvYnV0dG9uPmAgOiAnJ308L2Rpdj5gKS5qb2luKCcnKX0KICAgICAgPGJ1dHRvbiBjbGFzcz0ibGluay1idG4gc21hbGwiIGRhdGEtcWFkZD4rIEFqb3V0ZXIgdW5lIHDDqXJpb2RlPC9idXR0b24+CiAgICAgIDxsYWJlbCBjbGFzcz0iemxibCIgZm9yPSJxUHJlIj5QcmnDqHJlcyBkw6lqw6AgcmF0dHJhcMOpZXMgKHNpIHR1IGVuIGFzIGZhaXQpPC9sYWJlbD48aW5wdXQgaWQ9InFQcmUiIGNsYXNzPSJmYW10IiBpbnB1dG1vZGU9Im51bWVyaWMiIGRhdGEtcXByZSB2YWx1ZT0iJHtxLnByZSB8fCAnJ30iIHBsYWNlaG9sZGVyPSIwIj4KICAgICAgPGxhYmVsIGNsYXNzPSJ6bGJsIiBmb3I9InFGYXN0Ij5Kb3VycyBkZSBqZcO7bmUgZGUgUmFtYWRhbiDDoCByYXR0cmFwZXI8L2xhYmVsPjxpbnB1dCBpZD0icUZhc3QiIGNsYXNzPSJmYW10IiBpbnB1dG1vZGU9Im51bWVyaWMiIGRhdGEtcWZhc3QgdmFsdWU9IiR7cS5mYXN0LnRvdGFsIHx8ICcnfSIgcGxhY2Vob2xkZXI9IjAiPgogICAgICA8cCBjbGFzcz0icWJpZyBudW0iPiR7dG90LnRvTG9jYWxlU3RyaW5nKCdmci1GUicpfTxzbWFsbD4gcHJpw6hyZXMsIHNvaXQgJHtNYXRoLnJvdW5kKHRvdCAvIDUpLnRvTG9jYWxlU3RyaW5nKCdmci1GUicpfSBqb3Vyczwvc21hbGw+PC9wPgogICAgICA8YnV0dG9uIGNsYXNzPSJidG4gYmxvY2siIGRhdGEtcWdvPiR7cS50b3RhbCA/ICdNZXR0cmUgw6Agam91ciBtb24gZXN0aW1hdGlvbicgOiAnT3V2cmlyIGxlIGNoYW50aWVyJ308L2J1dHRvbj4KICAgICAgJHtxLnRvdGFsID8gJzxidXR0b24gY2xhc3M9ImJ0biBibG9jayBxdWlldCIgZGF0YS1xY2FuY2VsIHN0eWxlPSJtYXJnaW4tdG9wOjhweCI+QW5udWxlcjwvYnV0dG9uPicgOiAnJ30KICAgICAgPHAgY2xhc3M9ImhpbnQiPlBvdXIgbGVzIHF1YXRyZSDDqWNvbGVzLCBsZXMgcHJpw6hyZXMgbWFucXXDqWVzIHNlIHJhdHRyYXBlbnQuIENlcnRhaW5zIHNhdmFudHMgKGRvbnQgSWJuIEhhem0gZXQgSWJuIFRheW1peXlhKSBlc3RpbWVudCBxdWUgY2VsbGVzIGTDqWxhaXNzw6llcyB2b2xvbnRhaXJlbWVudCBuZSBzZSByYXR0cmFwZW50IHBhcywgZXQgcmVjb21tYW5kZW50IHVuIHJlcGVudGlyIHNpbmPDqHJlIGV0IGJlYXVjb3VwIGRlIHByacOocmVzIHN1csOpcm9nYXRvaXJlcy4gVG9uIGNob2l4IHN1aXQgbCdhdmlzIGRlIGxhIG1ham9yaXTDqS4gQmVhdWNvdXAgbidleGlnZW50IHBhcyBsJ29yZHJlIHF1YW5kIGlsIHkgZW4gYSBhdXRhbnQuPC9wPjwvc2VjdGlvbj5gOwogIH0KICBmdW5jdGlvbiB2UWFkYSgpIHsKICAgIGNvbnN0IHEgPSBxZCgpOwogICAgaWYgKCFxLnRvdGFsIHx8IFFaLmVkaXQpIHJldHVybiBgJHtxU2NlbmUocSl9JHt2UVNldHVwKHEpfWA7CiAgICBjb25zdCBDID0gcUNoYXAocSksIGxlZnQgPSBxLnRvdGFsIC0gcS5kb25lLCBrID0gdG9kYXlJU08oKSwgdGQgPSBxLmxvZ1trXSB8fCAwLCBzdCA9IHFTdHJlYWsocS5sb2cpLCBkYXlzID0gTWF0aC5jZWlsKGxlZnQgLyBxLnBhY2UpOwogICAgY29uc3QgZW5kID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ2ZyLUZSJywgeyBtb250aDogJ2xvbmcnLCB5ZWFyOiAnbnVtZXJpYycgfSkuZm9ybWF0KGFkZERheXMobmV3IERhdGUoKSwgZGF5cykpLCBwY3QgPSBxLmRvbmUgLyBxLnRvdGFsICogMTAwLCBGID0gcS5mYXN0LCBmaWQgPSBxRmlkKHEpOwogICAgY29uc3QgZmwgPSAoTnVtYmVyKEYudG90YWwpIHx8IDApIC0gKEYuZG9uZSB8fCAwKTsKICAgIGlmIChxLmRvbmUgPj0gcS50b3RhbCkgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHt9KTsgZWxzZSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocURyYXcpOwogICAgcmV0dXJuIGAke3FTY2VuZShxKX0KICAgIDxkaXYgY2xhc3M9InFoZWFkIj48ZGl2PjxiIGNsYXNzPSJudW0iPiR7cS5kb25lLnRvTG9jYWxlU3RyaW5nKCdmci1GUicpfTwvYj48c3Bhbj5waWVycmVzIHBvc8OpZXMgc3VyICR7cS50b3RhbC50b0xvY2FsZVN0cmluZygnZnItRlInKX0gwrcgJHtwY3QgPCAxID8gcGN0LnRvRml4ZWQoMSkgOiBNYXRoLmZsb29yKHBjdCl9ICU8L3NwYW4+PC9kaXY+PGRpdj48YiBjbGFzcz0ibnVtIj4ke3N0fTwvYj48c3Bhbj5qb3VyJHtzdCA+IDEgPyAncycgOiAnJ30gZCdhZmZpbMOpZTwvc3Bhbj48L2Rpdj48L2Rpdj4KICAgICR7cS5kb25lID49IHEudG90YWwgPyBgPHNlY3Rpb24gY2xhc3M9InpjYXJkIiBzdHlsZT0idGV4dC1hbGlnbjpjZW50ZXIiPjxwIGNsYXNzPSJleWVicm93Ij5MYSBtb3NxdcOpZSBlc3QgZGVib3V0PC9wPjxwIHN0eWxlPSJmb250OjQwMCAxLjNyZW0vMS40IHZhcigtLXNlcmlmKTttYXJnaW46OHB4IDAiPlR1IGFzIHJhdHRyYXDDqSAke3EudG90YWwudG9Mb2NhbGVTdHJpbmcoJ2ZyLUZSJyl9IHByacOocmVzLiBRdSdBbGxhaCBsZXMgYWNjZXB0ZSB0b3V0ZXMuPC9wPjwvc2VjdGlvbj5gIDogYAogICAgPHNlY3Rpb24gY2xhc3M9InpjYXJkIHFjaGFwIj48cCBjbGFzcz0iZXllYnJvdyIgc3R5bGU9Im1hcmdpbjowIj5DaGFudGllciAke0MuY2ggKyAxfSBzdXIgMTAgwrcgJHtRQ0hbQy5jaF1bMF19PC9wPgogICAgICA8cCBjbGFzcz0ic21hbGwgbXV0ZWQiIHN0eWxlPSJtYXJnaW46NHB4IDAgMTBweCI+JHtDLmluQ2gudG9Mb2NhbGVTdHJpbmcoJ2ZyLUZSJyl9IHBpZXJyZXMgc3VyICR7Qy5uLnRvTG9jYWxlU3RyaW5nKCdmci1GUicpfSDCtyB1bmUgcGllcnJlID0gdW5lIHByacOocmU8L3A+CiAgICAgIDxjYW52YXMgaWQ9InFDYW52YXMiIGNsYXNzPSJxY3YiIGFyaWEtaGlkZGVuPSJ0cnVlIj48L2NhbnZhcz4KICAgICAgPGRpdiBjbGFzcz0icWJ0bnMiPjxidXR0b24gY2xhc3M9ImJ0biIgZGF0YS1xb25lPkonYWkgcmF0dHJhcMOpIHVuZSBwcmnDqHJlPC9idXR0b24+PGJ1dHRvbiBjbGFzcz0iYnRuIGdob3N0IiBkYXRhLXFkYXkgYXJpYS1sYWJlbD0iVW5lIGpvdXJuw6llIGNvbXBsw6h0ZSwgNSBwcmnDqHJlcyI+KyA1PC9idXR0b24+PC9kaXY+CiAgICAgIDxkaXYgY2xhc3M9InJvdyBiZXR3ZWVuIiBzdHlsZT0ibWFyZ2luLXRvcDoxMHB4Ij48c3BhbiBjbGFzcz0ic21hbGwgbXV0ZWQiPkF1am91cmQnaHVpIDogJHt0ZH08L3NwYW4+JHtxLmRvbmUgPyAnPGJ1dHRvbiBjbGFzcz0ibGluay1idG4gc21hbGwiIGRhdGEtcXVuZG8+QW5udWxlciBsYSBkZXJuacOocmU8L2J1dHRvbj4nIDogJyd9PC9kaXY+CiAgICA8L3NlY3Rpb24+CiAgICA8c2VjdGlvbiBjbGFzcz0iemNhcmQiPjxwIGNsYXNzPSJleWVicm93IiBzdHlsZT0ibWFyZ2luOjAiPlRvbiByeXRobWU8L3A+CiAgICAgIDxkaXYgY2xhc3M9ImNoaXBzIiBzdHlsZT0ibWFyZ2luLXRvcDo4cHgiPiR7W1sxLCAnMSAvIGpvdXInXSwgWzIsICcyIC8gam91ciddLCBbNSwgJzUgLyBqb3VyJ10sIFsxMCwgJzEwIC8gam91ciddLCBbMTUsICcxNSAvIGpvdXInXV0ubWFwKChbdiwgbF0pID0+IGA8YnV0dG9uIGNsYXNzPSJjaGlwIiBkYXRhLXFwYWNlPSIke3Z9IiBhcmlhLXByZXNzZWQ9IiR7cS5wYWNlID09PSB2fSI+JHtsfTwvYnV0dG9uPmApLmpvaW4oJycpfTwvZGl2PgogICAgICA8cCBzdHlsZT0ibWFyZ2luOjEwcHggMCAwO2ZvbnQ6NDAwIDEuMTVyZW0vMS40IHZhcigtLXNlcmlmKSI+w4AgY2Ugcnl0aG1lLCBsYSBtb3NxdcOpZSBzZXJhIGRlYm91dCBlbiAke2VuZH0sIGluIHNoYSBBbGxhaC48L3A+CiAgICAgIDxwIGNsYXNzPSJzbWFsbCBtdXRlZCIgc3R5bGU9Im1hcmdpbjo0cHggMCAwIj4ke3EucGFjZSA9PT0gNSA/ICdVbmUgcHJpw6hyZSByYXR0cmFww6llIGF2ZWMgY2hhY3VuZSBkZXMgdGllbm5lcy4nIDogcS5wYWNlID4gNSA/ICdQbHVzIHF1ZSB0ZXMgY2lucSBwcmnDqHJlcyA6IGxhIGRhdGUgc2UgcmFwcHJvY2hlIMOgIGNoYXF1ZSBwaWVycmUgZW4gcGx1cy4nIDogJ0RvdWNlbWVudCBtYWlzIHPDu3JlbWVudCA6IGxhIHLDqWd1bGFyaXTDqSBjb21wdGUgcGx1cyBxdWUgbGEgcXVhbnRpdMOpLid9PC9wPjwvc2VjdGlvbj5gfQogICAgPHNlY3Rpb24gY2xhc3M9InpjYXJkIj48cCBjbGFzcz0iZXllYnJvdyIgc3R5bGU9Im1hcmdpbjowIj5MYSBwYWxtZXJhaWUgwrcgamXDu25lczwvcD4KICAgICAgJHtOdW1iZXIoRi50b3RhbCkgPyBgPHAgY2xhc3M9InNtYWxsIG11dGVkIiBzdHlsZT0ibWFyZ2luOjRweCAwIDEwcHgiPiR7Ri5kb25lIHx8IDB9IHBhbG1pZXIkeyhGLmRvbmUgfHwgMCkgPiAxID8gJ3MnIDogJyd9IHBsYW50w6lzIHN1ciAke0YudG90YWx9IMK3ICR7ZmwgPiAwID8gYCR7Zmx9IGpvdXIke2ZsID4gMSA/ICdzJyA6ICcnfSDDoCByYXR0cmFwZXJgIDogJ3RvdXQgZXN0IHJhdHRyYXDDqSd9PC9wPgogICAgICAke2ZsID4gMCA/ICc8YnV0dG9uIGNsYXNzPSJidG4gYmxvY2siIGRhdGEtcWZvbmU+SlwnYWkgcmF0dHJhcMOpIHVuIGpvdXIgZGUgamXDu25lPC9idXR0b24+JyA6ICcnfQogICAgICAke0YuZG9uZSA/ICc8YnV0dG9uIGNsYXNzPSJsaW5rLWJ0biBzbWFsbCIgZGF0YS1xZnVuZG8gc3R5bGU9Im1hcmdpbi10b3A6OHB4Ij5Bbm51bGVyIGxlIGRlcm5pZXI8L2J1dHRvbj4nIDogJyd9CiAgICAgIDxwIGNsYXNzPSJoaW50Ij5MZSBsdW5kaSBldCBsZSBqZXVkaSwgam91cnMgb8O5IGxlIFByb3Bow6h0ZSDvt7ogYWltYWl0IGplw7tuZXIsIHNvbnQgZGUgYm9ucyByZW5kZXotdm91cy48L3A+YCA6ICc8cCBjbGFzcz0ic21hbGwiIHN0eWxlPSJtYXJnaW46NnB4IDAgMCI+SW5kaXF1ZSB0ZXMgam91cnMgw6AgcmF0dHJhcGVyIGRhbnMgwqsgTW9kaWZpZXIgbW9uIGVzdGltYXRpb24gwrsuPC9wPid9CiAgICA8L3NlY3Rpb24+CiAgICAke051bWJlcihGLnRvdGFsKSA/IGA8c2VjdGlvbiBjbGFzcz0iemNhcmQiPjxwIGNsYXNzPSJleWVicm93IiBzdHlsZT0ibWFyZ2luOjAiPkZpZHlhIMK3IGNvbXBlbnNhdGlvbiwgZW4gb3B0aW9uPC9wPgogICAgICA8ZGl2IGNsYXNzPSJjaGlwcyIgc3R5bGU9Im1hcmdpbi10b3A6OHB4Ij4ke1tbJ29mZicsICdEw6lzYWN0aXbDqWUnXSwgWydtYWonLCAnTWFqb3JpdMOpJ10sIFsnc2hhZicsICdDaGFmacq/aXRlJ10sIFsnaGFuYWYnLCAnSGFuYWZpdGUnXV0ubWFwKChbdiwgbF0pID0+IGA8YnV0dG9uIGNsYXNzPSJjaGlwIiBkYXRhLXFmaWQ9IiR7dn0iIGFyaWEtcHJlc3NlZD0iJHtxLmZpZC5zY2hvb2wgPT09IHZ9Ij4ke2x9PC9idXR0b24+YCkuam9pbignJyl9PC9kaXY+CiAgICAgICR7cS5maWQuc2Nob29sID09PSAnb2ZmJyA/ICcnIDogcS5maWQuc2Nob29sID09PSAnaGFuYWYnID8gJzxwIGNsYXNzPSJzbWFsbCIgc3R5bGU9Im1hcmdpbjoxMHB4IDAgMCI+UG91ciBsXCfDqWNvbGUgaGFuYWZpdGUsIGxlIHJldGFyZCBuZSBkZW1hbmRlIHBhcyBkZSBjb21wZW5zYXRpb24gOiBzZXVsIGxlIHJhdHRyYXBhZ2UgZXN0IGTDuy48L3A+JyA6IGAKICAgICAgPHAgY2xhc3M9InNtYWxsIiBzdHlsZT0ibWFyZ2luOjEwcHggMCA2cHgiPiR7cS5maWQuc2Nob29sID09PSAnbWFqJyA/ICdNYWpvcml0w6kgKG1hbGlraXRlcywgY2hhZmnKv2l0ZXMsIGhhbmJhbGl0ZXMpIDogdW4gcmVwYXMgw6AgdW4gcGF1dnJlIHBhciBqb3VyIGRvbnQgbGUgcmF0dHJhcGFnZSBhIMOpdMOpIHJldGFyZMOpLCBzYW5zIGV4Y3VzZSwgYXUtZGVsw6AgZHUgUmFtYWRhbiBzdWl2YW50LicgOiAnQXZpcyBjaGFmacq/aXRlIDogdW4gcmVwYXMgcGFyIGpvdXIsIG11bHRpcGxpw6kgcGFyIGxlIG5vbWJyZSBkZSBSYW1hZGFucyBwYXNzw6lzIGRlcHVpcy4nfTwvcD4KICAgICAgJHtxLmZpZC5zY2hvb2wgPT09ICdzaGFmJyA/IGA8bGFiZWwgY2xhc3M9InpsYmwiPlJhbWFkYW5zIGRlIHJldGFyZCwgZW4gbW95ZW5uZTxpbnB1dCBjbGFzcz0iZmFtdCIgaW5wdXRtb2RlPSJudW1lcmljIiBkYXRhLXFmeXJzIHZhbHVlPSIke3EuZmlkLnlyc30iPjwvbGFiZWw+YCA6ICcnfQogICAgICA8bGFiZWwgY2xhc3M9InpsYmwiPlByaXggZCd1biByZXBhcyAoc291dmVudCBmaXjDqSBwYXIgdGEgbW9zcXXDqWUsIGVuIOKCrCk8aW5wdXQgY2xhc3M9ImZhbXQiIGlucHV0bW9kZT0iZGVjaW1hbCIgZGF0YS1xZnByaWNlIHZhbHVlPSIke3EuZmlkLnByaWNlfSIgcGxhY2Vob2xkZXI9ImV4LiA3Ij48L2xhYmVsPgogICAgICA8cCBjbGFzcz0icWJpZyBudW0iIHN0eWxlPSJtYXJnaW4tdG9wOjEwcHgiPiR7ZmlkLm1lYWxzLnRvTG9jYWxlU3RyaW5nKCdmci1GUicpfTxzbWFsbD4gcmVwYXMke2ZpZC5uZWVkID8gYCDCtyAke2V1cjAoZmlkLm5lZWQpfWAgOiAnJ308L3NtYWxsPjwvcD4KICAgICAgJHtmaWQubmVlZCA/IGA8cCBjbGFzcz0ic21hbGwgbXV0ZWQiIHN0eWxlPSJtYXJnaW46MCAwIDhweCI+RG9ubsOpIDogJHtldXIwKE51bWJlcihxLmZpZC5naXZlbikgfHwgMCl9IMK3IGxlIHB1aXRzIHNlIHJlbXBsaXQgYXUgZmlsIGRlIHRlcyBkb25zLjwvcD48ZGl2IGNsYXNzPSJyb3ciPjxpbnB1dCBpZD0icUZpZEciIGNsYXNzPSJmYW10IiBpbnB1dG1vZGU9ImRlY2ltYWwiIHBsYWNlaG9sZGVyPSJNb250YW50IGRvbm7DqSIgc3R5bGU9ImZsZXg6MSI+PGJ1dHRvbiBjbGFzcz0iYnRuIHNtIiBkYXRhLXFmZ2l2ZT5KJ2FpIGRvbm7DqTwvYnV0dG9uPjwvZGl2PmAgOiAnJ30KICAgICAgPHAgY2xhc3M9ImhpbnQiPkxlcyBzYXZhbnRzIGRpdmVyZ2VudCA6IHbDqXJpZmllIGF2ZWMgdW5lIHBlcnNvbm5lIGRlIHNhdm9pciBjZSBxdWkgcydhcHBsaXF1ZSDDoCB0b2kuPC9wPmB9PC9zZWN0aW9uPmAgOiAnJ30KICAgIDxidXR0b24gY2xhc3M9ImxpbmstYnRuIHNtYWxsIiBkYXRhLXFlZGl0IHN0eWxlPSJkaXNwbGF5OmJsb2NrO21hcmdpbjoxNHB4IGF1dG8gMCI+TW9kaWZpZXIgbW9uIGVzdGltYXRpb248L2J1dHRvbj5gOwogIH0KICBmdW5jdGlvbiBxQWRkKG4pIHsKICAgIGNvbnN0IHEgPSBxZCgpLCBiZWZvcmUgPSBxLmRvbmUsIEMwID0gcUNoYXAocSksIGsgPSB0b2RheUlTTygpOwogICAgbiA9IE1hdGgubWluKG4sIHEudG90YWwgLSBxLmRvbmUpOyBpZiAobiA8PSAwKSByZXR1cm47CiAgICBxLmRvbmUgKz0gbjsgcS5sb2dba10gPSAocS5sb2dba10gfHwgMCkgKyBuOyBxU2F2ZSgpOyBub3VyQWRkKG4pOyByZWZyZXNoU3VuKCk7CiAgICB0cnkgeyBuYXZpZ2F0b3IudmlicmF0ZSAmJiBuYXZpZ2F0b3IudmlicmF0ZShuID4gMSA/IFsxMiwgNDAsIDEyLCA0MCwgMThdIDogMTApOyB9IGNhdGNoIChlKSB7fQogICAgY29uc3QgQzEgPSBxQ2hhcChxKSwgaGFsZiA9IE1hdGguZmxvb3IocS50b3RhbCAvIDIpOwogICAgcmVyZW5kZXIoKTsKICAgIGNvbnN0IG1zZyA9ICh0LCBzLCBzcmMpID0+IHNldFRpbWVvdXQoKCkgPT4gZ2VtQ2FyZCh0LCBzLCBzcmMgfHwgJycpLCAyNTApOwogICAgaWYgKHEuZG9uZSA+PSBxLnRvdGFsKSB7IGNoaW1lKHRydWUpOyBidXJzdCg0MCwgJ+KcpicsIHRydWUpOyBtc2coJ0xhIG1vc3F1w6llIGVzdCBkZWJvdXQnLCAnVHUgYXMgcmF0dHJhcMOpIHRvdXRlcyB0ZXMgcHJpw6hyZXMuIFF1XCdBbGxhaCBsZXMgYWNjZXB0ZSBldCB0XCdhY2NvcmRlIHVuZSBkZW1ldXJlIGF1cHLDqHMgZGUgTHVpLicsICcnKTsgfQogICAgZWxzZSBpZiAoQzEuY2ggPiBDMC5jaCkgeyBjaGltZSh0cnVlKTsgYnVyc3QoMzIsIFFDSFtDMC5jaF1bMF0sIHRydWUpOyBtc2coYCR7UUNIW0MwLmNoXVswXX0gOiB0ZXJtaW7DqWAsIFFDSFtDMC5jaF1bMl0sIFFDSFtDMC5jaF1bM10pOyBjb25zdCBzID0gJCgnLnFzY2VuZScpOyBpZiAocykgcy5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiByZWR1Y2VNb3Rpb24oKSA/ICdhdXRvJyA6ICdzbW9vdGgnLCBibG9jazogJ3N0YXJ0JyB9KTsgfQogICAgZWxzZSBpZiAoYmVmb3JlIDwgaGFsZiAmJiBxLmRvbmUgPj0gaGFsZikgeyBjaGltZSh0cnVlKTsgbXNnKCdMYSBtb2l0acOpIGRlIGxhIG1vc3F1w6llJywgJ1R1IGFzIGZhaXQgbGUgcGx1cyBkdXIgOiBsZSBjaGVtaW4gcXVpIHJlc3RlIGVzdCBwbHVzIGNvdXJ0IHF1ZSBjZWx1aSBwYXJjb3VydS4nLCAnJyk7IH0KICAgIGVsc2UgaWYgKGJlZm9yZSA9PT0gMCkgeyBjaGltZSh0cnVlKTsgYnVyc3QoMjAsICfinKYnLCB0cnVlKTsgbXNnKCdMYSBwcmVtacOocmUgcGllcnJlJywgUUNIWzBdWzJdLCBRQ0hbMF1bM10pOyB9CiAgICBlbHNlIGlmIChNYXRoLmZsb29yKGJlZm9yZSAvIDEwMDApIDwgTWF0aC5mbG9vcihxLmRvbmUgLyAxMDAwKSkgeyBjaGltZSh0cnVlKTsgYnVyc3QoMjQsIGAke01hdGguZmxvb3IocS5kb25lIC8gMTAwMCkgKiAxMDAwfWAsIHRydWUpOyBtc2coYCR7KE1hdGguZmxvb3IocS5kb25lIC8gMTAwMCkgKiAxMDAwKS50b0xvY2FsZVN0cmluZygnZnItRlInKX0gcGllcnJlc2AsICdMZXMgYWN0ZXMgbGVzIHBsdXMgYWltw6lzIGRcJ0FsbGFoIHNvbnQgbGVzIHBsdXMgcsOpZ3VsaWVycywgbcOqbWUgc1wnaWxzIHNvbnQgcGV1IG5vbWJyZXV4LicsICdCdWtoYXJpIDY0NjQsIE11c2xpbSA3ODMnKTsgfQogICAgZWxzZSBpZiAoTWF0aC5mbG9vcihiZWZvcmUgLyAxMDApIDwgTWF0aC5mbG9vcihxLmRvbmUgLyAxMDApKSB7IGNoaW1lKGZhbHNlKTsgYnVyc3QoMTQsIGAke01hdGguZmxvb3IocS5kb25lIC8gMTAwKSAqIDEwMH1gLCBmYWxzZSk7IH0KICAgIGVsc2UgaWYgKE1hdGguZmxvb3IoYmVmb3JlIC8gNSkgPCBNYXRoLmZsb29yKHEuZG9uZSAvIDUpKSB7IGNoaW1lKGZhbHNlKTsgYnVyc3QoOCwgJ+KcpicsIGZhbHNlKTsgfQogICAgZWxzZSB7IHRyeSB7IGNoaW1lKGZhbHNlKTsgfSBjYXRjaCAoZSkge30gfQogIH0KICBmdW5jdGlvbiBxQ2xpY2sodCkgewogICAgY29uc3QgYyA9IHMgPT4gdC5jbG9zZXN0KHMpOyBsZXQgZWw7IGNvbnN0IHEgPSBxZCgpOwogICAgaWYgKGMoJ1tkYXRhLXFvbmVdJykpIHsgcUFkZCgxKTsgcmV0dXJuIHRydWU7IH0KICAgIGlmIChjKCdbZGF0YS1xZGF5XScpKSB7IHFBZGQoNSk7IHJldHVybiB0cnVlOyB9CiAgICBpZiAoYygnW2RhdGEtcXVuZG9dJykpIHsgaWYgKHEuZG9uZSA+IDApIHsgcS5kb25lLS07IGNvbnN0IGsgPSB0b2RheUlTTygpOyBpZiAocS5sb2dba10pIHsgcS5sb2dba10tLTsgaWYgKCFxLmxvZ1trXSkgZGVsZXRlIHEubG9nW2tdOyB9IG5vdXJBZGQoLTEpOyBxU2F2ZSgpOyByZXJlbmRlcigpOyB0b2FzdCgnRGVybmnDqHJlIHBpZXJyZSByZXRpcsOpZScpOyB9IHJldHVybiB0cnVlOyB9CiAgICBpZiAoKGVsID0gYygnW2RhdGEtcXBhY2VdJykpKSB7IHEucGFjZSA9IE51bWJlcihlbC5kYXRhc2V0LnFwYWNlKTsgcVNhdmUoKTsgcmVyZW5kZXIoKTsgcmV0dXJuIHRydWU7IH0KICAgIGlmIChjKCdbZGF0YS1xZWRpdF0nKSkgeyBRWi5lZGl0ID0gdHJ1ZTsgUVouZHJhZnQgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHsgcGVyOiBxLnBlciwgcHJlOiBxLnByZSwgZnQ6IHEuZmFzdC50b3RhbCB9KSk7IHJlcmVuZGVyKCk7IHdpbmRvdy5zY3JvbGxUbygwLCAwKTsgcmV0dXJuIHRydWU7IH0KICAgIGlmIChjKCdbZGF0YS1xY2FuY2VsXScpKSB7IGNvbnN0IGQgPSBRWi5kcmFmdDsgaWYgKGQpIHsgcS5wZXIgPSBkLnBlcjsgcS5wcmUgPSBkLnByZTsgcS5mYXN0LnRvdGFsID0gZC5mdDsgfSBRWi5lZGl0ID0gZmFsc2U7IHJlcmVuZGVyKCk7IHJldHVybiB0cnVlOyB9CiAgICBpZiAoYygnW2RhdGEtcWFkZF0nKSkgeyBxLnBlci5wdXNoKHsgeTogMSwgcDogNTAgfSk7IHJlcmVuZGVyKCk7IHJldHVybiB0cnVlOyB9CiAgICBpZiAoKGVsID0gYygnW2RhdGEtcWRlbF0nKSkpIHsgcS5wZXIuc3BsaWNlKE51bWJlcihlbC5kYXRhc2V0LnFkZWwpLCAxKTsgcmVyZW5kZXIoKTsgcmV0dXJuIHRydWU7IH0KICAgIGlmIChjKCdbZGF0YS1xZ29dJykpIHsgcS50b3RhbCA9IE1hdGgubWF4KHFUb3RhbE9mKHEpLCBxLmRvbmUpOyBRWi5lZGl0ID0gZmFsc2U7IFFaLmNhY2hlID0ge307IHBlcnNpc3QoKTsgcmVyZW5kZXIoKTsgd2luZG93LnNjcm9sbFRvKDAsIDApOyBpZiAoIXEuZG9uZSkgdG9hc3QoJ0xlIGNoYW50aWVyIGVzdCBvdXZlcnQuIExhIHByZW1pw6hyZSBwaWVycmUgdFwnYXR0ZW5kLicsIG51bGwsIG51bGwsIDQwMDApOyByZXR1cm4gdHJ1ZTsgfQogICAgaWYgKGMoJ1tkYXRhLXFmb25lXScpKSB7IGNvbnN0IEYgPSBxLmZhc3Q7IEYuZG9uZSA9IChGLmRvbmUgfHwgMCkgKyAxOyBGLmxvZ1t0b2RheUlTTygpXSA9IChGLmxvZ1t0b2RheUlTTygpXSB8fCAwKSArIDE7IG5vdXJBZGQoMyk7IHJlZnJlc2hTdW4oKTsgcVNhdmUoKTsgcmVyZW5kZXIoKTsgY2hpbWUodHJ1ZSk7IGJ1cnN0KDE2LCAn8J+MtCcsIGZhbHNlKTsgaWYgKEYuZG9uZSA+PSBOdW1iZXIoRi50b3RhbCkpIGdlbUNhcmQoJ0xhIHBhbG1lcmFpZSBlc3QgY29tcGzDqHRlJywgJ1RvdXMgdGVzIGpvdXJzIGRlIGplw7tuZSBzb250IHJhdHRyYXDDqXMuIMKrIExlIGplw7tuZSBlc3QgcG91ciBNb2ksIGV0IGNcJ2VzdCBNb2kgcXVpIGVuIGRvbm5lIGxhIHLDqWNvbXBlbnNlLiDCuycsICdIYWRpdGggcXVkc2ksIEJ1a2hhcmkgMTkwNCcpOyBlbHNlIGlmIChGLmRvbmUgPT09IDEpIGdlbUNhcmQoJ0xlIHByZW1pZXIgcGFsbWllcicsICdDXCdlc3QgYXZlYyBkZXMgZGF0dGVzIHF1ZSBsZSBQcm9waMOodGUg77e6IHJvbXBhaXQgbGUgamXDu25lLiBUb24gb2FzaXMgY29tbWVuY2UgaWNpLicsICcnKTsgcmV0dXJuIHRydWU7IH0KICAgIGlmIChjKCdbZGF0YS1xZnVuZG9dJykpIHsgY29uc3QgRiA9IHEuZmFzdDsgaWYgKEYuZG9uZSA+IDApIHsgRi5kb25lLS07IG5vdXJBZGQoLTMpOyBxU2F2ZSgpOyByZXJlbmRlcigpOyB9IHJldHVybiB0cnVlOyB9CiAgICBpZiAoKGVsID0gYygnW2RhdGEtcWZpZF0nKSkpIHsgcS5maWQuc2Nob29sID0gZWwuZGF0YXNldC5xZmlkOyBxU2F2ZSgpOyByZXJlbmRlcigpOyByZXR1cm4gdHJ1ZTsgfQogICAgaWYgKGMoJ1tkYXRhLXFmZ2l2ZV0nKSkgeyBjb25zdCB2ID0gTnVtYmVyKFN0cmluZygkKCcjcUZpZEcnKS52YWx1ZSB8fCAnJykucmVwbGFjZSgnLCcsICcuJykpIHx8IDA7IGlmICghKHYgPiAwKSkgeyB0b2FzdCgnSW5kaXF1ZSBsZSBtb250YW50IGRvbm7DqS4nKTsgcmV0dXJuIHRydWU7IH0gcS5maWQuZ2l2ZW4gPSAoTnVtYmVyKHEuZmlkLmdpdmVuKSB8fCAwKSArIHY7IHFTYXZlKCk7IHJlcmVuZGVyKCk7IHRvYXN0KCdRdVwnQWxsYWggbFwnYWNjZXB0ZS4gTGUgcHVpdHMgc2UgcmVtcGxpdC4nKTsgcmV0dXJuIHRydWU7IH0KICAgIHJldHVybiBmYWxzZTsKICB9CiAgZnVuY3Rpb24gcUNoYW5nZSh0KSB7CiAgICBjb25zdCBxID0gcWQoKTsgbGV0IG07CiAgICBpZiAodC5kYXRhc2V0LnFwZXIpIHsgY29uc3QgW2ksIGZdID0gdC5kYXRhc2V0LnFwZXIuc3BsaXQoJy4nKTsgcS5wZXJbaV1bZl0gPSBNYXRoLm1heCgwLCBOdW1iZXIodC52YWx1ZS5yZXBsYWNlKCcsJywgJy4nKSkgfHwgMCk7IHJlcmVuZGVyKCk7IHJldHVybiB0cnVlOyB9CiAgICBpZiAodC5oYXNBdHRyaWJ1dGUoJ2RhdGEtcXByZScpKSB7IHEucHJlID0gTWF0aC5tYXgoMCwgTnVtYmVyKHQudmFsdWUpIHx8IDApOyByZXJlbmRlcigpOyByZXR1cm4gdHJ1ZTsgfQogICAgaWYgKHQuaGFzQXR0cmlidXRlKCdkYXRhLXFmYXN0JykpIHsgcS5mYXN0LnRvdGFsID0gTWF0aC5tYXgoMCwgTnVtYmVyKHQudmFsdWUpIHx8IDApOyByZXJlbmRlcigpOyByZXR1cm4gdHJ1ZTsgfQogICAgaWYgKHQuaGFzQXR0cmlidXRlKCdkYXRhLXFmeXJzJykpIHsgcS5maWQueXJzID0gTWF0aC5tYXgoMSwgTnVtYmVyKHQudmFsdWUpIHx8IDEpOyBxU2F2ZSgpOyByZXJlbmRlcigpOyByZXR1cm4gdHJ1ZTsgfQogICAgaWYgKHQuaGFzQXR0cmlidXRlKCdkYXRhLXFmcHJpY2UnKSkgeyBxLmZpZC5wcmljZSA9IHQudmFsdWUudHJpbSgpOyBxU2F2ZSgpOyByZXJlbmRlcigpOyByZXR1cm4gdHJ1ZTsgfQogICAgcmV0dXJuIGZhbHNlOwogIH0KCiAgZnVuY3Rpb24gdmlldygpIHsKICAgIGlmICghWi5kKSByZXR1cm4gdlNldHVwKCk7CiAgICBjb25zdCBoID0gSCgpOwogICAgaWYgKFouaGlkID09PSAnX19xYWRhJykgcmV0dXJuIGAke2hlYWQoKX0ke3RhYnMoKX08ZGl2IGNsYXNzPSJ6aCI+JHt2UWFkYSgpfTwvZGl2PmA7CiAgICBsZXQgaHRtbCA9IGAke2hlYWQoKX0ke3RhYnMoKX08ZGl2IGNsYXNzPSJ6aCI+JHtoLm1vZGUgPT09ICdzdG9wJyA/IHZTdG9wKGgpIDogdldhdGNoKGgpfTwvZGl2PmA7CiAgICBpZiAoWi52aWV3ID09PSAndXJnZScgJiYgWi51cmdlKSBodG1sICs9IHZVcmdlKGgpOwogICAgaWYgKFoudmlldyA9PT0gJ3JlbGFwc2UnICYmIFoucmVsKSBodG1sICs9IHZSZWxhcHNlKGgpOwogICAgcmV0dXJuIGh0bWw7CiAgfQogIGZ1bmN0aW9uIHNob3coKSB7IHRhYiA9ICd6JzsgcmVuZGVyKHRydWUpOyB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7IH0KICBmdW5jdGlvbiByZXJlbmRlcigpIHsgY29uc3Qgc3kgPSB3aW5kb3cuc2Nyb2xsWSwgdXkgPSAkKCcjelVyZ2UnKSA/ICQoJyN6VXJnZScpLnNjcm9sbFRvcCA6IDAsIGR5ID0gJCgnI3pEYXJrJykgPyAkKCcjekRhcmsnKS5zY3JvbGxUb3AgOiAwOyByZW5kZXIoKTsgd2luZG93LnNjcm9sbFRvKDAsIHN5KTsgaWYgKCQoJyN6VXJnZScpKSAkKCcjelVyZ2UnKS5zY3JvbGxUb3AgPSB1eTsgaWYgKCQoJyN6RGFyaycpKSAkKCcjekRhcmsnKS5zY3JvbGxUb3AgPSBkeTsgfQoKICAvKiAtLS0tLS0tLS0tIG1pbnV0ZXJpZSAoY29tcHRldXJzIHZpdmFudHMsIHZhZ3VlLCByZXNwaXJhdGlvbikgLS0tLS0tLS0tLSAqLwogIGxldCBpdiA9IDA7CiAgZnVuY3Rpb24gdGlja1N0YXJ0KCkgewogICAgY2xlYXJJbnRlcnZhbChpdik7CiAgICBpdiA9IHNldEludGVydmFsKCgpID0+IHsKICAgICAgaWYgKHRhYiAhPT0gJ3onIHx8ICFaLmQpIHsgY2xlYXJJbnRlcnZhbChpdik7IHJldHVybjsgfQogICAgICBjb25zdCBoID0gSCgpOyBpZiAoIWgpIHJldHVybjsKICAgICAgY29uc3QgdCA9ICQoJyN6VGljaycpOyBpZiAodCAmJiBoLm1vZGUgPT09ICdzdG9wJykgdC50ZXh0Q29udGVudCA9IGR1cihub3coKSAtIGguc3RhcnQpLnNwbGl0KCcgJykuc2xpY2UoMikuam9pbignICcpOwogICAgICBjb25zdCBzID0gJCgnI3pTdGFrZScpOyBpZiAocyAmJiBoLm1vZGUgPT09ICdzdG9wJykgcy50ZXh0Q29udGVudCA9IGR1cihub3coKSAtIGguc3RhcnQpOwogICAgICBpZiAoWi51cmdlICYmICQoJyN6TGVmdCcpKSB7CiAgICAgICAgY29uc3QgdG90YWwgPSBaLnVyZ2UubGVuICogNjAwMDAsIGVsID0gbm93KCkgLSBaLnVyZ2UudDAsIGxlZnQgPSBNYXRoLm1heCgwLCB0b3RhbCAtIGVsKTsKICAgICAgICAkKCcjekxlZnQnKS50ZXh0Q29udGVudCA9IGAke01hdGguZmxvb3IobGVmdCAvIDYwMDAwKX06JHt0d28oTWF0aC5mbG9vcihsZWZ0ICUgNjAwMDAgLyAxMDAwKSl9YDsKICAgICAgICBjb25zdCBjID0gJCgnI3pXYXZlQycpLCBSID0gMTAwLCBDID0gMiAqIE1hdGguUEkgKiBSOyBpZiAoYykgYy5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1kYXNob2Zmc2V0JywgKEMgKiAoMSAtIGxlZnQgLyB0b3RhbCkpLnRvRml4ZWQoMSkpOwogICAgICAgIGNvbnN0IHBoID0gKGVsIC8gMTAwMCkgJSAxMDsgJCgnI3pCcicpLnRleHRDb250ZW50ID0gbGVmdCA8PSAwID8gJ0xhIHZhZ3VlIGVzdCBwYXNzw6llJyA6IHBoIDwgNCA/ICdJbnNwaXJl4oCmJyA6ICdFeHBpcmXigKYnOwogICAgICAgIGlmIChsZWZ0IDw9IDAgJiYgIVoudXJnZS5yYW5nKSB7IFoudXJnZS5yYW5nID0gMTsgY2hpbWUodHJ1ZSk7IHRyeSB7IG5hdmlnYXRvci52aWJyYXRlICYmIG5hdmlnYXRvci52aWJyYXRlKFsyMCwgNjAsIDIwXSk7IH0gY2F0Y2ggKGUpIHt9IH0KICAgICAgfQogICAgfSwgMjUwKTsKICB9CgogIC8qIC0tLS0tLS0tLS0gYWN0aW9ucyAtLS0tLS0tLS0tICovCiAgYXN5bmMgZnVuY3Rpb24gY3JlYXRlKCkgewogICAgY29uc3QgYzEgPSAkKCcjemMxJykudmFsdWUsIGMyID0gJCgnI3pjMicpLnZhbHVlLCBuMSA9ICQoJyN6bjEnKS52YWx1ZS50cmltKCksIG4yID0gJCgnI3puMicpLnZhbHVlLnRyaW0oKTsKICAgIGlmIChjMS5sZW5ndGggPCA2IHx8IC9ccy8udGVzdChjMSkpIHsgdG9hc3QoJ0NvZGUgOiA2IGNhcmFjdMOocmVzIG1pbmltdW0sIHNhbnMgZXNwYWNlLicpOyByZXR1cm47IH0KICAgIGlmIChjMSAhPT0gYzIpIHsgdG9hc3QoJ0xlcyBkZXV4IGNvZGVzIG5lIHNvbnQgcGFzIGlkZW50aXF1ZXMuJyk7IHJldHVybjsgfQogICAgaWYgKCFuMSkgeyB0b2FzdCgnRG9ubmUgdW4gbm9tIMOgIGNlIHF1ZSB0dSBhcnLDqnRlcy4nKTsgcmV0dXJuOyB9CiAgICBjb25zdCBkMSA9ICQoJyN6ZDEnKS52YWx1ZSA/IG5ldyBEYXRlKCQoJyN6ZDEnKS52YWx1ZSkuZ2V0VGltZSgpIDogbm93KCk7CiAgICBjb25zdCBoYWJpdHMgPSBbbmV3SGFiaXQobjEsICdzdG9wJywgZmFsc2UsIE1hdGgubWluKG5vdygpLCBkMSkpXTsKICAgIGlmIChuMikgaGFiaXRzLnB1c2gobmV3SGFiaXQobjIsICd3YXRjaCcsICQoJyN6bjJuJykuY2hlY2tlZCwgbm93KCkpKTsKICAgIFouc2FsdCA9IGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoMTYpKTsgWi5rZXkgPSBhd2FpdCB6S2V5KGMxLCBaLnNhbHQpOwogICAgWi5kID0geyB2OiAxLCBoYWJpdHMsIGNyZWF0ZWQ6IG5vdygpIH07IFouaGlkID0gaGFiaXRzWzBdLmlkOyBaLnZpZXcgPSAnbWFpbic7CiAgICBhd2FpdCBwZXJzaXN0KCk7IGFza1BlcnNpc3QoKTsgc2hvdygpOyB0aWNrU3RhcnQoKTsgZGFpbHlDaGVjaygpOwogICAgdG9hc3QoJ0VzcGFjZSBjcsOpw6kgZXQgY2hpZmZyw6kuIFRvbiBjb2RlIGxcJ291dnJlIGRlcHVpcyBJZMOpZXMuJywgbnVsbCwgbnVsbCwgNjAwMCk7CiAgfQogIGZ1bmN0aW9uIHN0YXJ0VXJnZSgpIHsgY29uc3QgaCA9IEgoKTsgWi51cmdlID0geyB0MDogbm93KCksIGxlbjogaC5uaWMgPyA1IDogMTAsIHRyaWc6ICcnLCBkb25lOiB7fSB9OyBaLnZpZXcgPSAndXJnZSc7IFouZGggPSBudWxsOyBhdWRpb1VubG9jaygpOyByZXJlbmRlcigpOyB9CiAgZnVuY3Rpb24gZW5kVXJnZSh3b24pIHsKICAgIGNvbnN0IGggPSBIKCksIHUgPSBaLnVyZ2U7IGlmICghdSkgcmV0dXJuOwogICAgaC51cmdlcy5wdXNoKHsgdDogdS50MCwgdHJpZzogdS50cmlnLCB3b24sIGR1cjogTWF0aC5yb3VuZCgobm93KCkgLSB1LnQwKSAvIDEwMDApIH0pOwogICAgY29uc3QgdHJpZyA9IHUudHJpZzsgWi51cmdlID0gbnVsbDsgWi5kaCA9IG51bGw7CiAgICBpZiAod29uKSB7CiAgICAgIFoudmlldyA9ICdtYWluJzsgcGVyc2lzdCgpOyByZXJlbmRlcigpOyB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7CiAgICAgIGNvbnN0IG4gPSBoLnVyZ2VzLmZpbHRlcih4ID0+IHgud29uKS5sZW5ndGg7CiAgICAgIGxhc3RQdCA9IHsgeDogaW5uZXJXaWR0aCAvIDIsIHk6IGlubmVySGVpZ2h0ICogLjQgfTsKICAgICAgY29uc3QgZyA9IEdFTVNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogR0VNUy5sZW5ndGgpXTsKICAgICAgcmV3YXJkKDEwLCB7IGJpZzogdHJ1ZSwgbXNnOiBbYEVudmllIHZhaW5jdWUgwrcgJHtufSR7biA9PT0gMSA/ICdyZScgOiAnZSd9YCwgTWF0aC5yYW5kb20oKSA8IC41ID8gJ1R1IHZpZW5zIGRlIHByb3V2ZXIgw6AgdG9uIGNlcnZlYXUgcXVlIGxcJ2VudmllIHBhc3NlIHNhbnMgY8OpZGVyLiBMYSBwcm9jaGFpbmUgc2VyYSB1biBwZXUgcGx1cyBmYWlibGUuJyA6IGdbMF0sIE1hdGgucmFuZG9tKCkgPCAuNSA/ICcnIDogZ1sxXV0gfSk7CiAgICB9IGVsc2Ugc3RhcnRSZWxhcHNlKHRyaWcpOwogIH0KICBmdW5jdGlvbiBzdGFydFJlbGFwc2UodHJpZykgewogICAgY29uc3QgZ20gPSAkKCcjZ2VtJyk7IGlmIChnbSkgZ20uY2xhc3NMaXN0LnJlbW92ZSgnb24nKTsKICAgIFoudmlldyA9ICdyZWxhcHNlJzsgWi5yZWwgPSB7IHdoZW46ICcwJywgdHJpZzogdHJpZyB8fCAnJywgYmFyczoge30gfTsgWi51cmdlID0gbnVsbDsKICAgIHJlcmVuZGVyKCk7IHRodWQoKTsgdHJ5IHsgbmF2aWdhdG9yLnZpYnJhdGUgJiYgbmF2aWdhdG9yLnZpYnJhdGUoWzMwMF0pOyB9IGNhdGNoIChlKSB7fQogICAgY29uc3QgZWwgPSAkKCcjekRvd24nKSwgZnJvbSA9IE1hdGguZmxvb3IoZGF5cyhIKCkpKTsKICAgIGlmIChlbCAmJiBmcm9tID4gMCAmJiAhcmVkdWNlTW90aW9uKCkpIHsgY29uc3QgdDAgPSBwZXJmb3JtYW5jZS5ub3coKTsgY29uc3Qgc3QgPSB0ID0+IHsgY29uc3QgayA9IE1hdGgubWluKDEsICh0IC0gdDApIC8gMTgwMCk7IGVsLnRleHRDb250ZW50ID0gTWF0aC5yb3VuZChmcm9tICogKDEgLSBrICogaykpOyBpZiAoayA8IDEpIHJlcXVlc3RBbmltYXRpb25GcmFtZShzdCk7IH07IHJlcXVlc3RBbmltYXRpb25GcmFtZShzdCk7IH0KICAgIGVsc2UgaWYgKGVsKSBlbC50ZXh0Q29udGVudCA9ICcwJzsKICB9CiAgZnVuY3Rpb24gcmVzdGFydCgpIHsKICAgIGNvbnN0IGggPSBIKCksIHIgPSBaLnJlbCwgdCA9IG5vdygpIC0gTnVtYmVyKHIud2hlbikgKiAzNjAwMDAwOwogICAgaC5iZXN0ID0gTWF0aC5tYXgoaC5iZXN0IHx8IDAsIHQgLSBoLnN0YXJ0KTsKICAgIGgucmVsYXBzZXMucHVzaCh7IHQsIHRyaWc6IHIudHJpZywgbm90ZTogKCQoJyN6Tm90ZScpLnZhbHVlIHx8ICcnKS50cmltKCkuc2xpY2UoMCwgNTAwKSwgc3RyZWFrOiBNYXRoLm1heCgwLCB0IC0gaC5zdGFydCkgfSk7CiAgICBPYmplY3Qua2V5cyhyLmJhcnMpLmZvckVhY2goayA9PiB7IGguYmFyW2tdID0gdHJ1ZTsgfSk7CiAgICBoLnN0YXJ0ID0gdDsgaC5tcyA9IHt9OyBoLmxhc3RDbGVhbiA9IHRvZGF5SVNPKCk7CiAgICBpZiAoci5ncCkgaC5ncCA9IHsgdCB9OyAKICAgIG5vdXJBZGQoLTE1KTsgWi52aWV3ID0gJ21haW4nOyBaLnJlbCA9IG51bGw7IHBlcnNpc3QoKTsgcmVyZW5kZXIoKTsgd2luZG93LnNjcm9sbFRvKDAsIDApOyByZWZyZXNoU3VuKCk7CiAgICB0b2FzdChoLmdwID8gJ05vdXZlbGxlIHPDqXJpZSBsYW5jw6llLiBMZSBnaHVzbCB0XCdhdHRlbmQgZW4gaGF1dCBkZSB0b24gZXNwYWNlLCBhdmVjIHRlcyBwcmnDqHJlcyDDoCByYXR0cmFwZXIuJyA6ICdOb3V2ZWxsZSBzw6lyaWUgbGFuY8OpZS4gTGVzIDEwIHByb2NoYWluZXMgbWludXRlcyBjb21wdGVudCA6IGJvdWdlLCBzb3JzIGRlIGxhIHBpw6hjZS4nLCBudWxsLCBudWxsLCA3MDAwKTsKICB9CgogIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7CiAgICBpZiAodGFiICE9PSAneicpIHJldHVybjsKICAgIGNvbnN0IHQgPSBlLnRhcmdldCwgYyA9IHMgPT4gdC5jbG9zZXN0KHMpOyBsZXQgZWw7CiAgICBpZiAoYygnW2RhdGEtemxvY2tdJykpIHsgbG9jaygpOyBnbygnb3JiaXRlJyk7IHJldHVybjsgfQogICAgaWYgKGMoJ1tkYXRhLXpjcmVhdGVdJykpIHsgY3JlYXRlKCk7IHJldHVybjsgfQogICAgaWYgKCFaLmQpIHJldHVybjsKICAgIGlmIChaLmhpZCA9PT0gJ19fcWFkYScgJiYgcUNsaWNrKHQpKSByZXR1cm47CiAgICBjb25zdCBoID0gSCgpOwogICAgaWYgKChlbCA9IGMoJ1tkYXRhLXpoXScpKSkgeyBaLmhpZCA9IGVsLmRhdGFzZXQuemg7IHJlcmVuZGVyKCk7IHJldHVybjsgfQogICAgaWYgKGMoJ1tkYXRhLXp1cmdlXScpKSB7IHN0YXJ0VXJnZSgpOyByZXR1cm47IH0KICAgIGlmICgoZWwgPSBjKCdbZGF0YS16dHJpZ10nKSkpIHsgWi51cmdlLnRyaWcgPSBlbC5kYXRhc2V0Lnp0cmlnOyBoYXB0aWMoKTsgcmVyZW5kZXIoKTsgcmV0dXJuOyB9CiAgICBpZiAoKGVsID0gYygnW2RhdGEtemFjdF0nKSkpIHsKICAgICAgY29uc3QgayA9IGVsLmRhdGFzZXQuemFjdDsKICAgICAgaWYgKGsgPT09ICdkaGlrcicpIHsgWi5kaCA9IFouZGggfHwgWzAsIDBdOyBaLnVyZ2UuZG9uZS5kaGlrciA9IHRydWU7IHJlcmVuZGVyKCk7IGNvbnN0IGIgPSAkKCcuemRoJyk7IGlmIChiKSBiLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnLCBibG9jazogJ2NlbnRlcicgfSk7IHJldHVybjsgfQogICAgICBpZiAoIVoudXJnZS5kb25lW2tdKSB7IFoudXJnZS5kb25lW2tdID0gdHJ1ZTsgcmV3YXJkKDEsIHsgbm9Cb251czogdHJ1ZSB9KTsgfSBlbHNlIGRlbGV0ZSBaLnVyZ2UuZG9uZVtrXTsKICAgICAgcmVyZW5kZXIoKTsgcmV0dXJuOwogICAgfQogICAgaWYgKGMoJ1tkYXRhLXpkaF0nKSkgewogICAgICBjb25zdCBkID0gWi5kaDsgZFsxXSsrOyBoYXB0aWMoKTsKICAgICAgaWYgKGRbMV0gPj0gMzMpIHsgZFswXSsrOyBkWzFdID0gMDsgY2hpbWUoZmFsc2UpOyBpZiAoZFswXSA+PSAzKSB7IFouZGggPSBudWxsOyByZXdhcmQoMywgeyBtc2c6IFsnRGhpa3IgY29tcGxldCcsICdMZXMgY8WTdXJzIHNlIHRyYW5xdWlsbGlzZW50IHBhciBsZSByYXBwZWwgZFwnQWxsYWguIChDb3JhbiAxMzoyOCknXSB9KTsgcmVyZW5kZXIoKTsgcmV0dXJuOyB9IH0KICAgICAgY29uc3QgYiA9ICQoJy56ZGgnKTsgaWYgKGIpIGIub3V0ZXJIVE1MID0gZGhpa3JCb3goKTsgcmV0dXJuOwogICAgfQogICAgaWYgKGMoJ1tkYXRhLXp3b25dJykpIHsgZW5kVXJnZSh0cnVlKTsgcmV0dXJuOyB9CiAgICBpZiAoYygnW2RhdGEtemdhdmVdJykpIHsgZW5kVXJnZShmYWxzZSk7IHJldHVybjsgfQogICAgaWYgKGMoJ1tkYXRhLXpyZWxdJykpIHsgc3RhcnRSZWxhcHNlKCk7IHJldHVybjsgfQogICAgaWYgKChlbCA9IGMoJ1tkYXRhLXp3aGVuXScpKSkgeyBaLnJlbC53aGVuID0gZWwuZGF0YXNldC56d2hlbjsgcmVyZW5kZXIoKTsgcmV0dXJuOyB9CiAgICBpZiAoKGVsID0gYygnW2RhdGEtenJ0cmlnXScpKSkgeyBaLnJlbC50cmlnID0gZWwuZGF0YXNldC56cnRyaWc7IHJlcmVuZGVyKCk7IHJldHVybjsgfQogICAgaWYgKChlbCA9IGMoJ1tkYXRhLXpyYmFyXScpKSkgeyBjb25zdCBrID0gZWwuZGF0YXNldC56cmJhcjsgaWYgKFoucmVsLmJhcnNba10pIGRlbGV0ZSBaLnJlbC5iYXJzW2tdOyBlbHNlIFoucmVsLmJhcnNba10gPSAxOyBjb25zdCBuID0gJCgnI3pOb3RlJykudmFsdWU7IHJlcmVuZGVyKCk7ICQoJyN6Tm90ZScpLnZhbHVlID0gbjsgcmV0dXJuOyB9CiAgICBpZiAoYygnW2RhdGEtenJlc3RhcnRdJykpIHsgcmVzdGFydCgpOyByZXR1cm47IH0KICAgIGlmIChjKCdbZGF0YS16Z3BdJykpIHsgWi5yZWwuZ3AgPSB0cnVlOyByZXJlbmRlcigpOyByZXR1cm47IH0KICAgIGlmIChjKCdbZGF0YS16ZGtdJykpIHsgemRrVGFwKCk7IHJldHVybjsgfQogICAgaWYgKChlbCA9IGMoJ1tkYXRhLXpka2ZdJykpKSB7IHpkaCgpLmN1ciA9IGVsLmRhdGFzZXQuemRrZjsgWkQubiA9IDA7IHBlcnNpc3QoKTsgcmVyZW5kZXIoKTsgcmV0dXJuOyB9CiAgICBpZiAoYygnW2RhdGEtemdwZ10nKSkgeyBjb25zdCBnID0gSCgpLmdwOyBpZiAoIWcpIHJldHVybjsgaWYgKGcuZykgeyBkZWxldGUgZy5nOyBkZWxldGUgZy5yOyBwZXJzaXN0KCk7IHJlcmVuZGVyKCk7IHVucmV3YXJkKDMpOyByZXR1cm47IH0gZy5nID0gbm93KCk7IHBlcnNpc3QoKTsgcmVyZW5kZXIoKTsgcmV3YXJkKDMsIHsgbXNnOiBbJ0dodXNsIGZhaXQnLCAnQWxsYWggYWltZSBjZXV4IHF1aSBzZSByZXBlbnRlbnQgZXQgY2V1eCBxdWkgc2UgcHVyaWZpZW50LicsICdDb3JhbiAyOjIyMiddIH0pOyByZXR1cm47IH0KICAgIGlmIChjKCdbZGF0YS16Z3ByXScpKSB7IGNvbnN0IGcgPSBIKCkuZ3A7IGlmICghZyB8fCAhZy5nKSByZXR1cm47IGcuciA9ICFnLnI7IHBlcnNpc3QoKTsgcmVyZW5kZXIoKTsgZy5yID8gcmV3YXJkKDMsIHsgbXNnOiBbJ0RldXggcmFrXCdhdHMgZGUgcmVwZW50aXInLCAnTnVsIG5lIGNvbW1ldCB1biBww6ljaMOpIHB1aXMgc2UgcHVyaWZpZSwgcHJpZSBkZXV4IHJha1wnYXRzIGV0IGRlbWFuZGUgcGFyZG9uIMOgIEFsbGFoLCBzYW5zIHF1XCdBbGxhaCBuZSBsdWkgcGFyZG9ubmUuJywgJ0FidSBEYXd1ZCAxNTIxLCBUaXJtaWRoaSA0MDYnXSB9KSA6IHVucmV3YXJkKDMpOyByZXR1cm47IH0KICAgIGlmICgoZWwgPSBjKCdbZGF0YS16Z3BwXScpKSkgeyBjb25zdCBbaywgaWRdID0gZWwuZGF0YXNldC56Z3BwLnNwbGl0KCd8Jyk7IHNldFByYXllcihrLCBpZCwgJ3InKTsgcmVyZW5kZXIoKTsgcmV0dXJuOyB9CiAgICBpZiAoKGVsID0gYygnW2RhdGEtemdweF0nKSkpIHsgY29uc3QgZG9uZSA9IGVsLmRhdGFzZXQuemdweCA9PT0gJzEnOyBkZWxldGUgSCgpLmdwOyBwZXJzaXN0KCk7IHJlcmVuZGVyKCk7IGlmIChkb25lKSByZXdhcmQoNSwgeyBiaWc6IHRydWUsIG1zZzogWydUb3V0IGVzdCByYXR0cmFww6knLCAnUXVcJ0FsbGFoIGFjY2VwdGUgdG9uIHJlcGVudGlyIGV0IHRlcyBwcmnDqHJlcy4nXSB9KTsgcmV0dXJuOyB9CiAgICBpZiAoYygnW2RhdGEtenJlbHhdJykpIHsgWi52aWV3ID0gJ21haW4nOyBaLnJlbCA9IG51bGw7IHJlcmVuZGVyKCk7IHJldHVybjsgfQogICAgaWYgKGMoJ1tkYXRhLXpsb2ddJykpIHsgaC5sb2cucHVzaChub3coKSk7IGlmIChoLmxvZy5sZW5ndGggPiAzMDAwKSBoLmxvZy5zaGlmdCgpOyBwZXJzaXN0KCk7IGhhcHRpYygpOyByZXJlbmRlcigpOyByZXR1cm47IH0KICAgIGlmIChjKCdbZGF0YS16dW5sb2ddJykpIHsgaC5sb2cucG9wKCk7IHBlcnNpc3QoKTsgcmVyZW5kZXIoKTsgdG9hc3QoJ0Rlcm5pw6hyZSBwcmlzZSBhbm51bMOpZScpOyByZXR1cm47IH0KICAgIGlmICgoZWwgPSBjKCdbZGF0YS16cmVhZHldJykpKSB7IGNvbnN0IHYgPSBOdW1iZXIoZWwuZGF0YXNldC56cmVhZHkpLCBrID0gdG9kYXlJU08oKTsgaC5yZWFkeSA9IGgucmVhZHkuZmlsdGVyKHIgPT4gci5kICE9PSBrKTsgaC5yZWFkeS5wdXNoKHsgZDogaywgdiB9KTsgcGVyc2lzdCgpOyBoYXB0aWMoKTsgcmVyZW5kZXIoKTsgcmV0dXJuOyB9CiAgICBpZiAoYygnW2RhdGEtenJlYWR5LWdvXScpKSB7CiAgICAgIHRvYXN0KCdUYSBzw6lyaWUgZMOpbWFycmUgbWFpbnRlbmFudC4gUHLDqnQgPycsICdPdWknLCAoKSA9PiB7IGgubW9kZSA9ICdzdG9wJzsgaC5zdGFydCA9IG5vdygpOyBoLm1zID0ge307IGgucGxhbnMgPSBQTEFOU19OLm1hcChwID0+IHAuc2xpY2UoKSkuY29uY2F0KGgucGxhbnMuZmlsdGVyKHAgPT4gIVBMQU5TX04uc29tZShxID0+IHFbMF0gPT09IHBbMF0pKSkuc2xpY2UoMCwgNik7IHBlcnNpc3QoKTsgcmVyZW5kZXIoKTsgd2luZG93LnNjcm9sbFRvKDAsIDApOyByZXdhcmQoMTAsIHsgYmlnOiB0cnVlLCBtc2c6IFsnRMOpY2lzaW9uIHByaXNlJywgJ0xlIHBsdXMgZHVyIG5cJ2VzdCBwYXMgZFwnYXJyw6p0ZXIsIGNcJ2VzdCBkZSBkw6ljaWRlci4gQ1wnZXN0IGZhaXQuJ10gfSk7IH0sIDcwMDApOyByZXR1cm47CiAgICB9CiAgICBpZiAoKGVsID0gYygnW2RhdGEtemVkaXRdJykpKSB7IG9wZW5FZGl0KGVsLmRhdGFzZXQuemVkaXQpOyByZXR1cm47IH0KICAgIGlmIChjKCdbZGF0YS16cGFkZF0nKSkgeyBoLnBsYW5zLnB1c2goWycnLCAnJ10pOyBvcGVuRWRpdCgncGxhbnMnKTsgY29uc3QgaW5zID0gJCQoJ1tkYXRhLXpwXScpOyBpZiAoaW5zLmxlbmd0aCkgaW5zW2lucy5sZW5ndGggLSAyXS5mb2N1cygpOyByZXR1cm47IH0KICAgIGlmICgoZWwgPSBjKCdbZGF0YS16cGRlbF0nKSkpIHsgaC5wbGFucy5zcGxpY2UoTnVtYmVyKGVsLmRhdGFzZXQuenBkZWwpLCAxKTsgcGVyc2lzdCgpOyBvcGVuRWRpdCgncGxhbnMnKTsgcmV0dXJuOyB9CiAgICBpZiAoKGVsID0gYygnW2RhdGEtemVkb2tdJykpKSB7CiAgICAgIGlmIChlbC5kYXRhc2V0LnplZG9rID09PSAncmVhc29ucycpIGgucmVhc29ucyA9ICQoJyN6RWQnKS52YWx1ZS5zcGxpdCgnXG4nKS5tYXAoeCA9PiB4LnRyaW0oKSkuZmlsdGVyKEJvb2xlYW4pLnNsaWNlKDAsIDEyKTsKICAgICAgZWxzZSBoLnBsYW5zID0gaC5wbGFucy5maWx0ZXIocCA9PiBwWzBdLnRyaW0oKSB8fCBwWzFdLnRyaW0oKSk7CiAgICAgIHBlcnNpc3QoKTsgJCgnI2lkZWFzU2hlZXQnKS5jbG9zZSgpOyByZXJlbmRlcigpOyByZXR1cm47CiAgICB9CiAgfSk7CiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7CiAgICBpZiAodGFiICE9PSAneicgfHwgIVouZCkgcmV0dXJuOwogICAgY29uc3QgdCA9IGUudGFyZ2V0LCBoID0gSCgpOwogICAgaWYgKFouaGlkID09PSAnX19xYWRhJyAmJiBxQ2hhbmdlKHQpKSByZXR1cm47CiAgICBpZiAodC5kYXRhc2V0LnpiYXIpIHsgaWYgKHQuY2hlY2tlZCkgeyBoLmJhclt0LmRhdGFzZXQuemJhcl0gPSB0cnVlOyByZXdhcmQoMyk7IH0gZWxzZSBkZWxldGUgaC5iYXJbdC5kYXRhc2V0LnpiYXJdOyBwZXJzaXN0KCk7IHJlcmVuZGVyKCk7IHJldHVybjsgfQogICAgaWYgKHQuZGF0YXNldC56cCkgeyBjb25zdCBbaSwgal0gPSB0LmRhdGFzZXQuenAuc3BsaXQoJy4nKS5tYXAoTnVtYmVyKTsgaWYgKGgucGxhbnNbaV0pIHsgaC5wbGFuc1tpXVtqXSA9IHQudmFsdWUudHJpbSgpOyBwZXJzaXN0KCk7IH0gcmV0dXJuOyB9CiAgICBpZiAodC5kYXRhc2V0LnpzZXQpIHsgaFt0LmRhdGFzZXQuenNldF0gPSB0LnZhbHVlLnRyaW0oKS5yZXBsYWNlKCcsJywgJy4nKTsgcGVyc2lzdCgpOyByZXJlbmRlcigpOyByZXR1cm47IH0KICB9KTsKCiAgZnVuY3Rpb24gbG9jaygpIHsKICAgIGNsZWFySW50ZXJ2YWwoaXYpOyBaLmtleSA9IG51bGw7IFouc2FsdCA9IG51bGw7IFouZCA9IG51bGw7IFoudXJnZSA9IG51bGw7IFoucmVsID0gbnVsbDsgWi5kaCA9IG51bGw7IFoudmlldyA9ICdtYWluJzsKICAgIGNvbnN0IHMgPSAkKCcjaWRlYXNTaGVldCcpOyBpZiAocyAmJiBzLm9wZW4gJiYgcy5kYXRhc2V0Lm1vZGUgPT09ICd6JykgeyBzLmNsb3NlKCk7IGRlbGV0ZSBzLmRhdGFzZXQubW9kZTsgfQogIH0KICB3aW5kb3cuX196ID0gewogICAgb3BlbihrZXksIHNhbHQsIGRhdGEpIHsgWi5rZXkgPSBrZXk7IFouc2FsdCA9IHNhbHQ7IFouZCA9IGRhdGE7IFoudmlldyA9ICdtYWluJzsgWi5oaWQgPSAoZGF0YS5oYWJpdHNbMF0gfHwge30pLmlkOyBzaG93KCk7IHRpY2tTdGFydCgpOyBkYWlseUNoZWNrKCk7IH0sCiAgICBzZXR1cCgpIHsgWi5rZXkgPSBudWxsOyBaLmQgPSBudWxsOyBzaG93KCk7IH0sCiAgICBsb2NrLCB2aWV3LAogICAgYWN0aXZlOiAoKSA9PiAhIVouZAogIH07Cn0pKCk7Cg==';
