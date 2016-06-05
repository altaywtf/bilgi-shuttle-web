function normalizeRawData(rawData: string) {
  let rawArr = rawData.split(" - ");
  let newArr = [];
  let rawNew = [];

  while (rawArr.length > 0) {
    newArr.push(rawArr.splice(0, 8));
  }

  newArr.map((item) => {
    let temp = item.join(" - ");
    rawNew.push(temp);
  });

  return rawNew;
}

export { normalizeRawData }
