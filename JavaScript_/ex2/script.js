

function addFractions(f1, f2) {
 
  let numerator = f1.numerator * f2.denominator + f1.denominator * f2.numerator;
  let denominator = f1.denominator * f2.denominator;
  return {numerator,denominator};

}

function subtractFractions(f1, f2) {
  
  let numerator = f1.numerator * f2.denominator - f1.denominator * f2.numerator;
  let denominator = f1.denominator * f2.denominator;
  return {numerator,denominator};

}

function multiplyFractions(f1, f2) {

  let numerator = f1.numerator * f2.numerator;
  let denominator = f1.denominator * f2.denominator;
  return {numerator, denominator};

}

function divideFractions (f1, f2) {
  
  let numerator = f1.numerator * f2.denominator;
  let denominator = f1.denominator * f2.numerator;
  return{numerator, denominator};

}

function nod(a, b) {
  if (b === 0) return a;
  return nod(b, a % b);
}


function reduceFraction(f) {
  let divisor = nod(f.numerator, f.denominator);
  return {
      numerator: f.numerator / divisor,
      denominator: f.denominator / divisor
  };
}




let fraction1 = { numerator: 3, denominator: 4 };
let fraction2 = { numerator: 2, denominator: 5 };

// Сложение
let sum = addFractions(fraction1, fraction2);
console.log(`Сумма дробей: ${sum.numerator}/${sum.denominator}`);

// Вычитание
let difference = subtractFractions(fraction1, fraction2);
console.log(`Разность дробей: ${difference.numerator}/${difference.denominator}`);

// Умножение
let product = multiplyFractions(fraction1, fraction2);
console.log(`Произведение дробей: ${product.numerator}/${product.denominator}`);

// Деление
let quotient = divideFractions(fraction1, fraction2);
console.log(`Частное дробей: ${quotient.numerator}/${quotient.denominator}`);

// Сокращение
let reducedSum = reduceFraction(sum);
console.log(`Сокращенная сумма дробей: ${reducedSum.numerator}/${reducedSum.denominator}`);