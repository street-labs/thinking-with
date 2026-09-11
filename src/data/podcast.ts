// Central metadata for Thinking With… — edit show details, seasons, and series here.

export const show = {
  name: 'Thinking With…',
  // The authors dropped "A Rhetorical Theory Podcast" — a broader phrase may eventually
  // follow the ellipsis, and Kara is developing a logo. Leave empty; the UI hides the
  // tagline/sub-line wherever it's blank, so a future value lights up automatically.
  tagline: '',
  ethos:
    'A pedagogical experiment — an invitation to think along with the text, with us, and with each other.',
  description:
    '“Thinking With…” takes a major work of philosophy each season and reads it slowly, generously, and together. Three teachers of rhetorical theory follow the text where it leads, less to explain it than to think alongside it.',
  email: 'thinkingwithpod@gmail.com',
  copyrightHolder: 'Thinking With…',
};

export const listen = {
  apple:
    'https://podcasts.apple.com/us/podcast/thinking-with-a-rhetorical-theory-podcast/id1554914351',
  spotify: 'https://open.spotify.com/show/2LgqapM9QT9qYHAPVQ4p8K',
  rss: 'https://anchor.fm/s/4d44a168/podcast/rss',
};

export type Host = {
  name: string;
  slug: string;
  role: string;
  location?: string;
  /** First-person bio paragraphs. Empty array → page shows a friendly placeholder. */
  bio: string[];
  links?: { label: string; url: string }[];
};

export const hosts: Host[] = [
  {
    name: 'Nate DeProspo',
    slug: 'nate-deprospo',
    role: 'Assistant Professor of English at East Stroudsburg University',
    bio: [
      'I am an Assistant Professor of English at East Stroudsburg University in Pennsylvania. My research and teaching interests include rhetorical theory, composition pedagogy, professional communication, continental philosophy, digital rhetoric, and the rhetoric of science. My scholarship takes a rhetorical-theoretical approach to the study of writing practices, academic institutional dynamics, and knowledge production across disciplines.',
      'I teach courses in autotheory and experimental academic writing, rhetorical theory, professional writing and communication, and college writing. My teaching aims to empower students to interpret and produce complex texts with nuance and curiosity. Developing this capacity for intellectual exchange is central to my broader goal of equipping students with the skills and confidence in writing and communication that will support them across their coursework and beyond their college lives. To that end, I ask students to approach their writing as public-facing, with the possibility of publication in mind, even in introductory classes.',
      'I also teach hybrid and multimodal approaches to academic and professional writing, in which students might, for instance, blend elements of creative nonfiction with traditional research methods, or engage web design, sound design, graphic design, podcasting, and other modes of communication when building research projects, community outreach projects, or professional portfolios.',
    ],
  },
  {
    name: 'John Muckelbauer',
    slug: 'john-muckelbauer',
    role: 'Associate Professor, University of South Carolina',
    bio: [
      'I am a writer, teacher, and theorist whose work links fields such as rhetoric, philosophy, literary theory, pedagogy, and cultural criticism. While I am not opposed to disciplinary identities, I am more interested in thinking through the ways that practices of interpretation, inscription, and repetition work to form and transform things like disciplines and identities.',
      'I have published one book, *The Future of Invention,* and multiple articles in journals such as *College English*, *Philosophy & Rhetoric*, *Quarterly Journal of Speech*, and *Rhetoric Society Quarterly*. I am currently working on 1) a book on “style” that focuses on Nietzschean sense of dispositions 2) a graduate “intro” book on Derrida and Writing 3) this podcast and website.',
      'Across these different projects, I continue to be drawn to investigating the practices of thinking, writing, and training such that “theories” or “traditions” are not so much fixed bodies of knowledge or positions, but a regularized patterns of action and response.',
    ],
  },
  {
    name: 'Nathaniel Street',
    slug: 'nathaniel-street',
    role: 'Associate Professor of Writing and Rhetoric, Mount Saint Vincent University',
    location: 'Halifax, Nova Scotia',
    bio: [
      'I’m an Associate Professor of Writing and Rhetoric in the English Department at Mount Saint Vincent University in Halifax, Nova Scotia. I’ve taught at MSVU and coordinated the English Department’s Writing Program since 2017. I routinely teach courses on academic, persuasive, and creative writing, rhetorical analysis, the history of rhetoric, and rhetorical theory.',
      'During the pandemic, I took up hand-tool woodworking to re-orient myself after long sessions of talking with Nate and John about esoteric ideas. More recently, I managed to collapse the two worlds by writing on how contemporary hand-tool woodworkers / internet-content-makers configure their relationship to the past in a distinctly digital medium.',
    ],
  },
];

export function getHost(slug: string) {
  return hosts.find((h) => h.slug === slug);
}

export type Season = {
  number: number;
  slug: string;
  /** The season's own wordmark / alias, e.g. "The Hegel Tapes". */
  alias: string;
  thinker: string;
  work: string;
  /** "Thinking With… <title>" as it appears in the brief. */
  title: string;
  /**
   * Organizing idea for the season, when it has one beyond the primary text.
   * The authors are reorganizing around themes (e.g. "Critique") rather than a
   * single book — surfaced as a label on season cards/pages when present.
   */
  theme?: string;
  cover?: string;
  accent: string;
  accentInk: string; // readable text color on the accent
  blurb: string;
  status?: 'published' | 'in-production';
  /** Precise state for in-production seasons, e.g. "Recorded — in editing". */
  statusNote?: string;
};

export const seasons: Season[] = [
  {
    number: 7,
    slug: 'critique',
    alias: 'Critique',
    thinker: 'An idea, not a text',
    work: 'critique',
    title: 'Thinking With… Critique',
    accent: '#3F5D63',
    accentInk: '#F6F0E1',
    status: 'in-production',
    statusNote: 'Planning & recording',
    blurb:
      'For the first time we organize a season around an idea rather than a single text: critique — what it is, what it’s for, and whether it has exhausted itself. We’re planning and recording it now, with a public syllabus and written provocations alongside the episodes.',
  },
  {
    number: 6,
    slug: 'being-and-time',
    alias: 'Being & Time',
    thinker: 'Martin Heidegger',
    work: 'Being and Time',
    title: 'Thinking With… Being and Time',
    accent: '#3B5747',
    accentInk: '#F6F0E1',
    status: 'in-production',
    statusNote: 'Recorded — in editing',
    blurb:
      'Back to Heidegger — this time the big one. We return to the question that organizes everything else: what does it mean to be? The season is fully recorded and now in editing; episodes arrive in the feed as they’re finished.',
  },
  {
    number: 5,
    slug: 'the-gay-science',
    alias: 'Season of the Nietzsche',
    thinker: 'Friedrich Nietzsche',
    work: 'The Gay Science',
    title: 'Thinking With… The Gay Science',
    cover: '/covers/season-5.png',
    accent: '#B4392F',
    accentInk: '#F6F0E1',
    status: 'published',
    blurb:
      'Nietzsche’s most exuberant book — a science made gay, light, and dangerous. We follow the death of God, eternal return, and the strange cheerfulness of thinking that risks everything.',
  },
  {
    number: 4,
    slug: 'derrida',
    alias: 'Truth or Derrida',
    thinker: 'Jacques Derrida',
    work: 'Selected essays',
    title: 'Thinking With… selections from Jacques Derrida',
    cover: '/covers/season-4.png',
    accent: '#D2782E',
    accentInk: '#231a12',
    status: 'published',
    blurb:
      'From “Différance” to “Plato’s Pharmacy” to “Signature Event Context” — a season among Derrida’s essays, where writing, iterability, and the deconstructed present refuse to stay put.',
  },
  {
    number: 3,
    slug: 'what-is-called-thinking',
    alias: 'The Heidegger Files',
    thinker: 'Martin Heidegger',
    work: 'What Is Called Thinking?',
    title: 'Thinking With… “What is Called Thinking?”',
    cover: '/covers/season-3.png',
    accent: '#E4B53B',
    accentInk: '#231a12',
    status: 'published',
    blurb:
      'Heidegger asks what calls for thinking — and warns that what is most thought-provoking is that we are still not thinking. A season on mood, repetition, and learning to teach the unteachable.',
  },
  {
    number: 2,
    slug: 'the-logic-of-sense',
    alias: 'Deleuze Cast',
    thinker: 'Gilles Deleuze',
    work: 'The Logic of Sense',
    title: 'Thinking With… The Logic of Sense',
    cover: '/covers/season-2.jpg',
    accent: '#6E79E0',
    accentInk: '#F6F0E1',
    status: 'published',
    blurb:
      'Deleuze on surfaces, paradox, and the event. Sense is not beneath things but along them — a season spent on the edges where meaning is made and unmade.',
  },
  {
    number: 1,
    slug: 'phenomenology-of-spirit',
    alias: 'The Hegel Tapes',
    thinker: 'G. W. F. Hegel',
    work: 'Phenomenology of Spirit (Preface)',
    title: 'Thinking With… The Phenomenology of Spirit (preface)',
    cover: '/covers/season-1.jpg',
    accent: '#C25B45',
    accentInk: '#F6F0E1',
    status: 'published',
    blurb:
      'Where it began. We take the Preface to Hegel’s Phenomenology as a catalyst — on reading theory, the labor of the concept, and the styles of thinking that make a discipline.',
  },
];

export type Series = {
  slug: string;
  title: string;
  tagline: string;
  accent: string;
  blurb: string;
};

// Recurring segments from the brief — content to be added as it is produced.
export const series: Series[] = [
  {
    slug: 'nba',
    title: 'NBA',
    tagline: 'Thinking with basketball',
    accent: '#C5642A',
    // Confirmed: this segment is about the basketball NBA — the league as a text to think with.
    // Refine the framing with the hosts; episodes appear here once they're in the feed.
    blurb:
      'The same attention we bring to Hegel or Nietzsche, turned on the hardwood. A recurring segment thinking with the NBA — the league as a text in its own right, full of styles, tendencies, and ideas worth reading closely.',
  },
  {
    slug: 'deep-cuts-with-sircy',
    title: 'Deep Cuts with Sircy',
    tagline: 'Closer readings, with Sircy',
    accent: '#7A4E8C',
    // PLACEHOLDER copy — confirm the segment’s premise and Sircy’s full name/bio.
    blurb:
      'A recurring segment going deep on a single passage, problem, or text. Slow reading as its own pleasure.',
  },
];

export function getSeason(slug: string) {
  return seasons.find((s) => s.slug === slug);
}
