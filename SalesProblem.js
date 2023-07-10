//SalesProblem.js


function topProduct(productProfitArray) {
  if (productProfitArray.length === 0) {
    return "No Data";
  }

  let maxProfit = Number.NEGATIVE_INFINITY;
  let topProduct = "";

  for (const product of productProfitArray) {
    if (product.profit > maxProfit) {
      maxProfit = product.profit;
      topProduct = product.name;
    }
  }

  return topProduct;
}

function bottomProduct(productProfitArray) {
  if (productProfitArray.length === 0) {
    return "No Data";
  }

  let minProfit = Number.POSITIVE_INFINITY;
  let bottomProduct = "";

  for (const product of productProfitArray) {
    if (product.profit < minProfit) {
      minProfit = product.profit;
      bottomProduct = product.name;
    }
  }

  return bottomProduct;
}

function zeroProfitProduct(productProfitArray) {
  if (productProfitArray.length === 0) {
    return "No Data";
  }

  let closestProfit = Number.POSITIVE_INFINITY;
  let zeroProfitProduct = "";

  for (const product of productProfitArray) {
    const profit = Math.abs(product.profit);
    if (profit < Math.abs(closestProfit) || (profit === closestProfit && product.profit > closestProfit)) {
      closestProfit = product.profit;
      zeroProfitProduct = product.name;
    }
  }

  return zeroProfitProduct;
}

const productProfitArray = [
  { name: "Product A", profit: 100 },
  { name: "Product B", profit: 200 },
  { name: "Product C", profit: -50 },
  { name: "Product D", profit: -75 },
  { name: "Product E", profit: 0 },
];

console.log(topProduct(productProfitArray));          // Output: "Product B"
console.log(bottomProduct(productProfitArray));       // Output: "Product D"
console.log(zeroProfitProduct(productProfitArray));   // Output: "Product E"


//LongestDyansty.js

function longestDynasty(dynastyReign) {
  if (dynastyReign.length === 0) {
    return "No Data";
  }

  let longest = 0;
  let longestDynasty = "";

  for (const [dynasty, reign] of Object.entries(dynastyReign)) {
    const startYear = convertYear(reign.start);
    const endYear = convertYear(reign.end);

    if (startYear === "Invalid" || endYear === "Invalid") {
      continue;
    }

    const reignLength = endYear - startYear + 1;

    if (reignLength > longest) {
      longest = reignLength;
      longestDynasty = dynasty;
    }
  }

  return longestDynasty;
}

function convertYear(year) {
  const romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

  let result = 0;
  let index = 0;

  for (const numeral in romanNumerals) {
    while (year.indexOf(numeral, index) === index) {
      result += romanNumerals[numeral];
      index += numeral.length;
    }
  }

  if (index !== year.length) {
    return "Invalid";
  }

  return result;
}

const dynastyReign = {
  "Dynasty A": { start: "MDCLXIV", end: "MCMXCIX" },
  "Dynasty B": { start: "MCMXCIX", end: "MMXIX" },
  "Dynasty C": { start: "MCMXCIX", end: "MMXIX" },
  "Dynasty D": { start: "MMXIX", end: "MCMLXXIX" },
};

console.log(longestDynasty(dynastyReign)); // Output: Dynasty A

