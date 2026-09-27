/* Sayko de poche — v2.5
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
    blocks: {}, seen: {}, money: defaultMoney(), faith: defaultFaith(), unlocks: {}, biz: { projects: [] },
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
  heures: '<circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12 7.5V12l3 2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>'
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
  orbite: ['Ton système', 'Chaque planète est un module. Son anneau doré montre où tu en es. Touche une planète pour y aller, fais tourner le système du doigt.'],
  parcours: ['12 mois pour te former au business', 'Fais glisser l\'anneau ou touche une lune pour choisir un mois. Chaque mois se fait dans l\'ordre :', ['Écoute et lis les ressources', 'Coche les acquis quand tu les maîtrises', 'Fais l\'exercice pratique', 'Note ce que tu retiens']],
  arabe: ['Comprendre le sens de ce que tu récites', 'Quelques minutes de quiz par jour suffisent. Chaque étoile de la constellation est un mot : elle brille quand il est maîtrisé (3 bonnes réponses).'],
  routine: ['Ta 1 h 30 quotidienne', 'L\'anneau est découpé en 4 blocs. Touche un bloc quand il est fait : les 4 faits, la journée est validée et ta série continue.'],
  budget: ['Ta méthode', 'Elle tient en 3 temps :', ['Tu te paies d\'abord : ton épargne part en début de mois', 'Tes charges fixes sont mises de côté', 'Le reste est à toi, avec un budget par jour qui s\'ajuste à chaque dépense. Les enveloppes freinent les catégories où ça file vite.']],
  foi: ['Ta régularité', 'Coche chaque prière faite à l\'heure sur le chemin du soleil, et tes autres habitudes en dessous. Atteindre 90 % sur 30 jours est une des deux clés de l\'onglet Business.'],
  business: ['Pourquoi c\'est verrouillé', 'Pour que l\'app reflète honnêtement tes priorités : d\'abord les compétences et la constance, ensuite le business. Chaque volet affiche ce qu\'il te reste.'],
  businessOn: ['Ton atelier', 'Un projet = un nom, une étape, et une prochaine action concrète. Rien de plus pour l\'instant.'],
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
  { key: 'argent', name: 'Argent', r: 130, speed: 4, phase: 70 },
  { key: 'parcours', name: 'Parcours', r: 160, speed: 2.4, phase: 150 }
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
    return `<g class="planet ${p.mint ? 'mint' : ''}" data-planet="${p.key}" role="button" tabindex="0" aria-label="${p.name} : ${lbl}">
      <circle r="34" fill="transparent"/>
      <circle class="trk" r="26"/><circle class="prog" r="26" transform="rotate(-90)" ${ringDash(26, v)}/>
      <circle class="body" r="20"/>
      <svg x="-10" y="-10" width="20" height="20" viewBox="0 0 24 24" class="ic">${GLYPH[p.key]}</svg>
      <text class="lbl" y="44">${p.name}</text><text class="val" y="57">${lbl}</text></g>`;
  }).join('');
  const wk = sumShifts(shiftsWeek(mondayOf(now))).worked, cm = currentMonth(), cur = MONTHS[cm - 1];
  const tb = S.days[todayISO()] ? 4 : todayBlocks();
  return `${pageHead(`${hello}, <em>Yassine</em>`, DAY_LONG.format(now).replace(/^./, c => c.toUpperCase()), 'orbite')}
  <div class="orbit-stage" id="stage">
    <svg viewBox="-210 -215 420 440" aria-label="Système de tes 4 modules">
      <defs><radialGradient id="sunGlow"><stop offset="0" stop-color="var(--gold)" stop-opacity=".55"/><stop offset=".45" stop-color="var(--gold)" stop-opacity=".12"/><stop offset="1" stop-color="var(--gold)" stop-opacity="0"/></radialGradient></defs>
      ${stars}
      ${PLANETS.map(p => `<circle class="orbit-ring" r="${p.r}"/>`).join('')}
      <circle r="78" fill="url(#sunGlow)" id="sunGlowC"/>
      <circle class="sun-core" r="34"/>
      <text y="-2" text-anchor="middle" style="font:400 30px var(--serif);fill:var(--gold-ink)">${now.getDate()}</text>
      <text y="16" text-anchor="middle" style="font-size:9px;font-weight:700;letter-spacing:.12em;fill:var(--gold-ink);opacity:.75">${DAY_SHORT.format(now).replace('.', '').toUpperCase()}</text>
      <g id="planets">${planets}</g>
    </svg>
  </div>
  <section style="margin-top:18px">
    <h2>Aujourd'hui</h2>
    <div class="today-list">
      ${isSetUp() ? (() => { const bb = budgetOf(todayISO().slice(0, 7)), dd = bb.daysLeft ? bb.reste / bb.daysLeft : 0; return `<button class="today-item" data-goto="budget">${miniOrb(bb.free > 0 ? Math.max(0, bb.reste) / bb.free : 0, 'argent')}<span><b>${bb.reste > 0 ? `${eur0(dd)} à dépenser aujourd'hui` : 'Budget du mois épuisé'}</b><span class="s">Reste ${eur0(bb.reste)} ce mois</span></span>${ICON.chev}</button>`; })() : ''}
      <button class="today-item" data-goto="heures">${miniOrb(planetValue('heures')[0], 'heures')}<span><b>${wk ? `${fmtH(wk)} cette semaine` : 'Aucun service cette semaine'}</b><span class="s">Noter un service</span></span>${ICON.chev}</button>
      <button class="today-item" data-goto="routine">${miniOrb(tb / 4, 'routine')}<span><b>${tb === 4 ? 'Routine faite' : `${tb} bloc${tb > 1 ? 's' : ''} sur 4`}</b><span class="s">${streak()} jour${streak() > 1 ? 's' : ''} d'affilée</span></span>${ICON.chev}</button>
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
  if (ok) { session.ok++; S.words[quiz.idx] = (S.words[quiz.idx] || 0) + 1; haptic(); }
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
  if (all && !was) toast(`Journée validée · ${streak()} jour${streak() > 1 ? 's' : ''} d'affilée`);
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
function autoPlan(ym, incTotal, fixTotal) {
  const M = S.money, L = lifeBudget(ym);
  if (!(incTotal > 0)) return { ok: false, why: 'revenus', life: L };
  if (!(L.v > 0)) return { ok: false, why: 'vie', life: L };
  const others = M.pots.filter(p => !p.safety).reduce((a, p) => a + numv(p.monthly), 0);
  const remDebt = Math.max(0, numv(M.debt.total) - debtRepaid(prevMonth(ym)));
  const sp = M.pots.find(p => p.safety), safeBal = sp ? potBalance(sp, prevMonth(ym)) : 0;
  const safeNeed = Math.max(0, (numv(M.safetyGoal) || 4000) - safeBal);
  const avail = incTotal - fixTotal - L.v - others;
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
function planFor(ym, incTotal, fixTotal) {
  const a = autoPlan(ym, incTotal, fixTotal), o = (S.money.months[ym] || {}).plan;
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
  const P = M.auto ? planFor(ym, incTotal, fixTotal) : null;
  const pots = M.pots.map(p => { const done = txIn(ym, 'save').filter(t => t.pot === p.id).reduce((a, t) => a + numv(t.amount), 0), plan = P && p.safety ? (P.ok ? P.safety : 0) : numv(p.monthly); return { ...p, done, plan, val: Math.max(plan, done), bal: potBalance(p) }; });
  const invested = txIn(ym, 'invest').reduce((a, t) => a + numv(t.amount), 0);
  const saveTotal = pots.reduce((a, p) => a + p.val, 0) + invested;
  const dTot = numv(M.debt.total), remStart = Math.max(0, dTot - debtRepaid(prevMonth(ym)));
  const dDone = txIn(ym, 'debt').reduce((a, t) => a + numv(t.amount), 0), dPlan = Math.min(P ? (P.ok ? P.debt : 0) : numv(M.debt.monthly), remStart);
  const debt = { plan: dPlan, done: dDone, val: Math.max(dPlan, dDone), remStart };
  const free = incTotal - fixTotal - saveTotal - debt.val;
  const exps = txIn(ym, 'exp'), spent = exps.reduce((a, t) => a + numv(t.amount), 0);
  const byCat = {}; exps.forEach(t => { byCat[t.cat] = (byCat[t.cat] || 0) + numv(t.amount); });
  const cur = todayISO().slice(0, 7), dim = daysIn(ym), today = new Date().getDate();
  const daysLeft = ym === cur ? dim - today + 1 : ym > cur ? dim : 0;
  const elapsed = ym === cur ? (today - 1) / dim : ym < cur ? 1 : 0;
  const reste = free - spent;
  return { plan: P, incomes, extraInc, fromPots, incTotal, fixed, fixTotal, pots, saveTotal, invested, debt, free, spent, byCat, reste, daysLeft, elapsed, dim, exps, envelopes: M.envelopes.map(e => ({ ...e, lim: numv(e.limit), sp: byCat[e.cat] || 0 })) };
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
  toast(`${kind === 'save' ? 'Versé' : 'Retiré'} ${eur2(t.amount)}`, 'Annuler', () => { S.money.tx = S.money.tx.filter(x => x.id !== t.id); save(); render(); });
}
function commitKind(kind, amount, inv) {
  if (!(amount > 0)) { toast('Entre un montant.'); return; }
  const t = { id: uid(), kind, amount: Math.round(amount * 100) / 100, cat: kind, inv, date: A.month === todayISO().slice(0, 7) ? todayISO() : A.month + '-01', note: '', created: Date.now() };
  S.money.tx.push(t); save(); haptic(); render();
  toast(`${kind === 'debt' ? 'Remboursé' : 'Investi'} ${eur2(t.amount)}`, 'Annuler', () => { S.money.tx = S.money.tx.filter(x => x.id !== t.id); save(); render(); });
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
  const bt = $('.tabbar [data-tab="business"]'); if (bt) bt.classList.toggle('locked', !S.unlocks.business);
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
  if (d[id]) delete d[id]; else { d[id] = true; haptic(); }
  if (!Object.keys(d).length) delete S.faith.log[k];
  save(); askPersist(); render();
  if (dayDone(k) === S.faith.habits.length && d[id]) toast(k === todayISO() ? 'Journée complète. Qu\'Allah l\'accepte.' : 'Journée complète.');
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
    <p class="hint" style="margin-top:30px;text-align:center">Sayko de poche · v2.5 · fonctionne hors ligne</p>`;
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
const TABS = ['orbite', 'parcours', 'foi', 'routine', 'argent', 'business'];
let tab = 'orbite';
function moveIndicator() {
  const i = TABS.indexOf(tab), ind = $('.tab-ind');
  if (ind) ind.style.left = `calc(${(i + 0.5) / TABS.length * 100}% - 14px)`;
}
function render(animate) {
  const app = $('#app');
  stopOrbit();
  $$('.tabbar [data-tab]').forEach(b => b.setAttribute('aria-selected', String(b.dataset.tab === tab)));
  moveIndicator();
  app.className = animate ? 'view' : '';
  checkUnlocks();
  app.innerHTML = { orbite: vOrbite, parcours: vParcours, foi: () => F.view === 'arabe' ? vArabe() : vHabits(), routine: vRoutine, argent: () => A.view === 'heures' ? vHeures() : vBudget(), business: vBusiness }[tab]();
  if (tab === 'orbite') startOrbit();
  if (tab === 'parcours') bindParcours();
  if (tab === 'foi' && F.view === 'arabe') { if (quiz && !quiz.answered) drawQuiz(); else nextQuiz(); }
  if (tab === 'argent' && A.view === 'heures') bindDial();
}
function setAView(v) { A.view = v; try { localStorage.setItem('sdp-argent-view', v); } catch (e) {} }
function setFView(v) { F.view = v; try { localStorage.setItem('sdp-foi-view', v); } catch (e) {} }
function go(t) {
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

$('.tabbar').addEventListener('click', e => { const b = e.target.closest('[data-tab]'); if (b) go(b.dataset.tab); });

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
  if (c('#ideaAdd')) { const v = $('#ideaText').value.trim(); if (!v) return; S.ideas.push({ id: uid(), text: v, created: Date.now() }); save(); haptic(); openIdeas(); $('#ideaText').focus(); return; }
  if ((el = c('[data-idel]'))) { const i = S.ideas.findIndex(x => x.id === el.dataset.idel); const [r] = S.ideas.splice(i, 1); save(); openIdeas(); toast('Idée supprimée', 'Annuler', () => { S.ideas.push(r); save(); if ($('#ideasSheet').open) openIdeas(); }); return; }
  if (c('#ideaCopy')) {
    const txt = S.ideas.slice().sort((a, b) => a.created - b.created).map(i => `- ${i.text}`).join('\n');
    (navigator.clipboard ? navigator.clipboard.writeText(txt) : Promise.reject()).then(() => toast('Idées copiées')).catch(() => toast('Copie impossible sur cet appareil.'));
  }
});
document.addEventListener('keydown', e => {
  const t = e.target;
  if ((e.key === 'Enter' || e.key === ' ') && t.matches && t.matches('[data-planet],[data-moon],.seg-arc')) {
    e.preventDefault();
    if (t.dataset.planet) go(t.dataset.planet); else if (t.dataset.moon) selectMonth(Number(t.dataset.moon)); else toggleBlock(Number(t.dataset.block));
  }
  if (e.key === 'Enter' && t.id === 'fNote') { e.preventDefault(); saveShift(); }
  if (e.key === 'Enter' && (t.id === 'bAmount' || t.id === 'bNote')) { e.preventDefault(); addTx(); }
});
document.addEventListener('change', e => {
  const t = e.target;
  if (t.dataset.chk) {
    if (t.checked) S.checks[t.dataset.chk] = true; else delete S.checks[t.dataset.chk];
    save(); askPersist(); if (t.checked) haptic(); refreshParcours(); return;
  }
  if (t.dataset.increc) {
    const ym = A.month, st = S.money.months[ym] = S.money.months[ym] || {}; st.inc = st.inc || {};
    if (t.checked) { const i = S.money.incomes.find(x => x.id === t.dataset.increc), e = expectedIncome(i).v; if (!e) { t.checked = false; const inp = $('#inc-' + i.id); if (inp) inp.focus(); toast('Tape le montant reçu à droite.'); return; } st.inc[i.id] = Math.round(e * 100) / 100; haptic(); } else delete st.inc[t.dataset.increc];
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
  if (document.visibilityState === 'hidden') { stopOrbit(); return; }
  if (todayISO() !== lastDay) { lastDay = todayISO(); H.form = null; H.month = todayISO().slice(0, 7); A.month = H.month; P.sel = null; render(); }
  else if (tab === 'orbite') startOrbit();
});
window.addEventListener('resize', moveIndicator);

/* =====================================================================
   16. DÉMARRAGE
   ===================================================================== */
(async function boot() {
  S = await loadState();
  save(true);
  let t = location.hash.slice(1);
  if (t === 'arabe' || t === 'habitudes') { setFView(t); t = 'foi'; }
  if (t === 'heures' || t === 'budget') { setAView(t); t = 'argent'; }
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
window.__sdp = { calc, sumShifts, money, gareCounter, budgetOf, autoPlan, A, faithScore, bizStatus, investStatus, parseHours, fmtH, holidayName, save, get S() { return S; } };
