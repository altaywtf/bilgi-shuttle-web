/**
 * Object Assign Helper
 */
export function assign(target: any, ...sources): any {
  return Object.assign({}, target, ...sources);
}

/**
 * Capitalizes first letter of string.
 */
export function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Slugify
 */
export function slugify(text: string): string {
  let trMap: Object = {
    'çÇ': 'c',
    'ğĞ': 'g',
    'şŞ': 's',
    'üÜ': 'u',
    'ıİ': 'i',
    'öÖ': 'o'
  };

  for (let key in trMap) {
    text = text.replace(new RegExp('[' + key + ']', 'g'), trMap[key]);
  }

  return text.replace(/[^-a-zA-Z0-9\s]+/ig, '')
    .replace(/\s/gi, '-')
    .replace(/[-]+/gi, '-')
    .toLowerCase();
}

/**
 * normalizeRawData
 */
export function normalizeRawData(rawData: string): string[] {
  let rawArr: string[] = rawData.split(' - ');
  let newArr = [];
  let rawNew = [];

  while (rawArr.length > 0) {
    newArr.push(rawArr.splice(0, 8));
  }

  newArr.map((item) => {
    let temp = item.join(' - ');
    rawNew.push(temp);
  });

  return rawNew;
}
