export function nameFormatter(name, language) {
  if (language === "english") return name.english;
  else if (language === "japanese") return name.japanese;
  else if (language === "chinese") return name.chinese;
  else if (language === "french") return name.french;
}
