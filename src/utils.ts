export function matchRegexpGroups(
  source: string,
  regexp: RegExp
): RegExpMatchArray[] {
  const matches = source.matchAll(regexp);
  return [...matches];
}

export function parseArticleURL(url: string): {
  slug: string | null;
  language: string | null;
} {
  const match = matchRegexpGroups(
    url,
    new RegExp(`${import.meta.env.BASE_URL}([\\w-]+?)/(\\w+)$`, "gim")
  )[0];

  if (!match) {
    return {
      slug: null,
      language: null,
    };
  }

  return {
    slug: match[1],
    language: match[2],
  };
}

// Group objects array by property
export function groupBy<T>(
  array: T[],
  predicate: (value: T, index: number, array: T[]) => string
) {
  return array.reduce((acc, value, index, array) => {
    (acc[predicate(value, index, array)] ||= []).push(value);
    return acc;
  }, {} as { [key: string]: T[] });
}
