export const VERBS = [
  {
    id: 1,
    dictionary: "上がる",
    furigana: "あ",
    group: "godan",

    meanings: {
      fr: ["monter", "augmenter"],
      en: ["to rise", "to increase"],
    },
  },
  {
    id: 2,
    dictionary: "開く",
    furigana: "あ",
    group: "godan",

    meanings: {
      fr: ["ouvrir", "se libérer"],
      en: ["to open"],
    },
  },
];

const isGodanVerb = (verbDictionnaryFormToTransform: string) =>
  findVerb(verbDictionnaryFormToTransform)?.group === "godan";

const isIchidanVerb = (verbDictionnaryFormToTransform: string) =>
  findVerb(verbDictionnaryFormToTransform)?.group === "ichidan";

const findVerb = (verbDictionnaryFormToTransform: string) =>
  VERBS.find((verb) => verb.dictionary === verbDictionnaryFormToTransform);

const findDictionnaryFormVerb = (verbDictionnaryFormToTransform: string) =>
  findVerb(verbDictionnaryFormToTransform)?.dictionary;

const lastCharacterAt = (verbDictionnaryFormToTransform: string): string =>
  findDictionnaryFormVerb(verbDictionnaryFormToTransform)?.charAt(
    verbDictionnaryFormToTransform.length - 1,
  ) ?? lastCharacterAt(verbDictionnaryFormToTransform);

const verbEndsWith = (verbDictionnaryFormToTransform: string): boolean =>
  findDictionnaryFormVerb(verbDictionnaryFormToTransform)?.endsWith(
    lastCharacterAt(verbDictionnaryFormToTransform),
  ) ?? true;

const getRootVerb = (verbDictionnaryFormToTransform: string) =>
  findDictionnaryFormVerb(verbDictionnaryFormToTransform)?.slice(
    0,
    verbDictionnaryFormToTransform.length - 1,
  );

export function conjugatePresent(verbDictionnaryFormToTransform: string) {
  return findDictionnaryFormVerb(verbDictionnaryFormToTransform);
}

export function conjugatePast(
  verbDictionnaryFormToTransform: string,
  isPolite: boolean,
  isNegative: boolean,
) {
  if (isPolite) {
    if (isNegative) {
      if (!verbEndsWith(lastCharacterAt(verbDictionnaryFormToTransform))) {
        console.log("Verb is undefined");
      }

      if (isGodanVerb(verbDictionnaryFormToTransform)) {
        switch (lastCharacterAt(verbDictionnaryFormToTransform)) {
          case "う":
            return lastCharacterAt(verbDictionnaryFormToTransform).replace(
              "う",
              getRootVerb(verbDictionnaryFormToTransform) + "いませんでした",
            );
          case "く":
            return lastCharacterAt(verbDictionnaryFormToTransform).replace(
              "く",
              getRootVerb(verbDictionnaryFormToTransform) + "きませんでした",
            );
          case "ぐ":
            return lastCharacterAt(verbDictionnaryFormToTransform).replace(
              "ぐ",
              getRootVerb(verbDictionnaryFormToTransform) + "ぎませんでした",
            );
          case "す":
            return lastCharacterAt(verbDictionnaryFormToTransform).replace(
              "す",
              getRootVerb(verbDictionnaryFormToTransform) + "しませんでした",
            );
          case "つ":
            return lastCharacterAt(verbDictionnaryFormToTransform).replace(
              "つ",
              getRootVerb(verbDictionnaryFormToTransform) + "ちませんでした",
            );
          case "ぬ":
            return lastCharacterAt(verbDictionnaryFormToTransform).replace(
              "ぬ",
              getRootVerb(verbDictionnaryFormToTransform) + "にませんでした",
            );
          case "ぶ":
            return lastCharacterAt(verbDictionnaryFormToTransform).replace(
              "ぶ",
              getRootVerb(verbDictionnaryFormToTransform) + "びませんでした",
            );
          case "む":
            return lastCharacterAt(verbDictionnaryFormToTransform).replace(
              "む",
              getRootVerb(verbDictionnaryFormToTransform) + "みませんでした",
            );
          case "る":
            return lastCharacterAt(verbDictionnaryFormToTransform).replace(
              "る",
              getRootVerb(verbDictionnaryFormToTransform) + "りませんでした",
            );
        }
      } else if (isIchidanVerb(verbDictionnaryFormToTransform)) {
      }
    }
  }
}
