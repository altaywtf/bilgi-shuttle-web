function slugify (text: string): string {
  let trMap: Object = {
    "çÇ": "c",
    "ğĞ": "g",
    "şŞ": "s",
    "üÜ": "u",
    "ıİ": "i",
    "öÖ": "o"
  };

  for (let key in trMap) {
    text = text.replace(new RegExp("[" + key + "]", "g"), trMap[key]);
  }

  return text.replace(/[^-a-zA-Z0-9\s]+/ig, "")
    .replace(/\s/gi, "-")
    .replace(/[-]+/gi, "-")
    .toLowerCase();
}

export { slugify }
