export const KANJI_N5_LIST = [
  {
    id: 1,
    kanji: "日",
    fr_meaning: ["le jour", "le soleil", "Japon", "compteur de jours"],
    en_meaning: ["the day", "the sun", "Japan", "counter for days"],
    readings: [
      {
        kun_yomi: ["ひ", "-び", "-か"],
        on_yomi: ["ニチ", "ジツ"],
      },
    ],
    strokes: 4,
  },
  {
    id: 2,
    kanji: "一",
    fr_meaning: ["un", "radical un"],
    en_meaning: ["one", "one radical"],
    readings: [
      {
        kun_yomi: ["ひと-", "ひと.つ"],
        on_yomi: ["イチ", "イツ"],
      },
    ],
    strokes: 1,
  },
  {
    id: 3,
    kanji: "国",
    fr_meaning: ["le pays"],
    en_meaning: ["the country"],
    readings: [
      {
        kun_yomi: ["くに"],
        on_yomi: ["コク"],
      },
    ],
    strokes: 8,
  },
  {
    id: 4,
    kanji: "人",
    fr_meaning: ["la personne"],
    en_meaning: ["the person"],
    readings: [
      {
        kun_yomi: ["ひと", "-り", "-と"],
        on_yomi: ["ジン", "ニン"],
      },
    ],
    strokes: 2,
  },
  {
    id: 5,
    kanji: "年",
    fr_meaning: ["l'année", "compteur d'années"],
    en_meaning: ["the year", "counter for years"],
    readings: [
      {
        kun_yomi: ["とし"],
        on_yomi: ["ネン"],
      },
    ],
    strokes: 6,
  },
  {
    id: 6,
    kanji: "大",
    fr_meaning: ["grand"],
    en_meaning: ["large", "big"],
    readings: [
      {
        kun_yomi: ["おお-", "おお.きい", "-おお.いに"],
        on_yomi: ["ダイ", "タイ"],
      },
    ],
    strokes: 3,
  },
  {
    id: 7,
    kanji: "十",
    fr_meaning: ["dix"],
    en_meaning: ["ten"],
    readings: [
      {
        kun_yomi: ["とお", "と", "そ"],
        on_yomi: ["ジュウ", "ジッ", "ジュッ"],
      },
    ],
    strokes: 2,
  },
  {
    id: 8,
    kanji: "二",
    fr_meaning: ["deux", "radical deux"],
    en_meaning: ["two", "two radical"],
    readings: [
      {
        kun_yomi: ["ふた", "ふた.つ", "ふたたび"],
        on_yomi: ["ニ", "ジ"],
      },
    ],
    strokes: 2,
  },
  {
    id: 9,
    kanji: "本",
    fr_meaning: [
      "le livre",
      "le présent",
      "l'essentiel",
      "l'origine",
      "le principal",
      "la réalité",
      "la vérité",
      "compteur d'objets allongés",
    ],
    en_meaning: [
      "the book",
      "the present",
      "the main",
      "the origin",
      "the true",
      "the real",
      "counter for long cylindrical things",
    ],
    readings: [
      {
        kun_yomi: ["もと"],
        on_yomi: ["ホン"],
      },
    ],
    strokes: 5,
  },
  {
    id: 10,
    kanji: "本",
    fr_meaning: [
      "dans",
      "dedans",
      "à l'intérieur",
      "le milieu",
      "le centre",
      "la moyenne",
    ],
    en_meaning: ["in", "inside", "the middle", "the mean", "the center"],
    readings: [
      {
        kun_yomi: ["なか", "うち", "あた.る"],
        on_yomi: ["チュウ"],
      },
    ],
    strokes: 4,
  },
];

export const KANJI_LEVEL_PATH: string[] = [
  "kanjiN5",
  "kanjiN4",
  "kanjiN3",
  "kanjiN2",
  "kanjiN1",
];

export const KANJI_LEVEL_URL: string[] = [
  "jlpt-5",
  "jlpt-4",
  "jlpt-3",
  "jlpt-2",
  "jlpt-1",
];

export const KANJI_LEVEL_TITLE: string[] = [
  "JLPT N5",
  "JLPT N4",
  "JLPT N3",
  "JLPT N2",
  "JLPT N1",
];
