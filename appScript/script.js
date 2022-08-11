'use strict';

// Task number one -

// const obj = {
//   a: 0,
//   b: 'abc',
//   c: [1, 2, 3],
//   d: [1, '2', { a: 1 }],
//   e: {
//     a: 'abc',
//     b: [1, 2, 3]
//   }
// }

const obj = {
  a: 0,
  b: 3,
  c: { d: 1, e: { g: 2 } }
}

let newObj = {};
function objCopy(obj) {
  for (let key in obj) {
    if (typeof (obj[key]) === 'object') {
      newObj[key] = obj[key];
      objCopy(obj[key])
    } else {
      newObj[key] = obj[key];
    }
  }
}


objCopy(obj);
console.log(newObj)


const copyData = (data) => {
  const newObj = {};

  if (typeof data !== 'object' || !data) {
    return data;
  }
  if (Array.isArray(data)) {
    return data.map(copyData);
  }
  Object.entries(data).forEach(([key, value]) => {
    newObj[key] = copyData(value);
  });

  return newObj;
};

const obj1 = {
  a: {
    a1: 1,
    a2: [1, 2, { b: 4 }],
    a3: {
      b1: 1
    }
  }
}

console.log(copyData({ a: 1 }));









// Task number two +

const ArrString = ["asd", "afffd", "cc", "kk"];

const calculationArrString = (arr) => {
  const outArr = arr.map(item => item[0] + item[item.length - 1]);

  let outArrBoolean = [];

  for (let i = 1; i < outArr.length; i++) {
    outArrBoolean[i - 1] = outArr[i - 1] === outArr[i];
  }

  return outArrBoolean;

}

//console.log(calculationArrString(ArrString));





// Task number three +

const outSpiralMatrix = (argNumber) => {

  let matrix = []; // matrix
  let counter = 1; // initial value

  for (let i = 0; i < argNumber; i++) { // creating a matrix argNumber on argNumber
    matrix[i] = [];
  }

  // right

  for (let i = 0; i < argNumber; i++) {
    matrix[0][i] = counter;
    counter++; // 4
  }

  // down

  for (let i = 1; i < argNumber; i++) {
    matrix[i][argNumber - 1] = counter;
    counter++;
  }

  // left

  for (let i = argNumber - 2; i >= 0; i--) {
    matrix[argNumber - 1][i] = counter;
    counter++;
  }

  // up

  for (let i = argNumber - 2; i >= 0; i--) {
    if (matrix[i][0] === undefined) {
      matrix[i][0] = counter;
      counter++;
    }
  }

  let a = 1; // cursor string matrix
  let i = 1; // cursor column matrix

  while (counter <= argNumber * argNumber) {

    if (matrix[a][i] === undefined && typeof (matrix[a][i - 1]) === 'number') { // right
      while (matrix[a][i] === undefined) {
        matrix[a][i] = counter;
        counter++;
        i++;
      }
      i--;
      a++;
    }

    if (matrix[a][i] === undefined && typeof (matrix[a - 1][i] === 'number')) { // down
      while (matrix[a][i] === undefined) {
        matrix[a][i] = counter;
        counter++;
        a++;
      }
      a--;
      i--;
    }

    if (matrix[a][i] === undefined && typeof (matrix[a][i + 1] === 'number')) { // left
      while (matrix[a][i] === undefined) {
        matrix[a][i] = counter;
        counter++;
        i--;
      }
      i++;
      a--;

    }

    if (matrix[a][i] === undefined && typeof (matrix[a + 1][i] === 'number')) { // up
      while (matrix[a][i] === undefined) {
        matrix[a][i] = counter;
        counter++;
        a--;
      }
      i++;
      a++;
    }

  }

  //console.log(matrix);
};

outSpiralMatrix(5);


// Task number four +
let num = 1;

const exponentiation = function (number, degree) {
  if (typeof (number) === 'number' && typeof (degree) === 'number') {
    num = num * number;
    if (degree > 1) {
      exponentiation(number, degree - 1)
      return num;
    }
  }
  return 'Enter numeric data';
}

console.log(exponentiation(2, 10))


// Task number five -

const arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

let newArr = [];

let a = 0;

const modArr = function (arr) {
  arr.map(item => {
    if (typeof (item) != 'object') {
      newArr[a] = item;
      a++;
    } else {
      modArr(item);
    }
  });
  return newArr;
}

console.log(modArr(arr));

// Task number six -

function textOfNumber(number) {
  if (typeof (number) === 'number' && number < 100000) {

    const numSring = String(number); // number to string

    // const arrString = Array.from(numSring); // string to array

    let strNumberOut = '';

    const end = arg => {
      if (arg === 0) {
        return '';
      } else if (arg < 2) {
        return 'а';
      } else if (arg < 5) {
        return 'и';
      } else {
        return '';
      }
    }

    const units = ['', 'один', 'два', 'три', 'четыре',
      'пять', 'шесть', 'семь', 'восемь', 'девять'];

    const intermediate = ['десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать',
      'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];

    const dozens = ['', 'десять', 'двадцать', 'тридцать', 'сорок', 'пятьдесят',
      'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];

    const hundreds = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот',
      'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];

    const unitsMod = ['', 'одна', 'две', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];

    if (number < 10) {
      strNumberOut = units[number];
    } else if (number < 20) {
      strNumberOut = intermediate[Number(numSring[1])];
    } else if (number < 100) {
      strNumberOut = `${dozens[Number(numSring[0])]} ${units[Number(numSring[1])]}`;
    } else if (number < 1000) {
      if (Number(numSring[1] + numSring[2]) >= 10 && Number(numSring[1] + numSring[2]) < 20) {
        strNumberOut = `${hundreds[Number(numSring[0])]} ${intermediate[Number(numSring[2])]}`;
      } else {
        strNumberOut = `${hundreds[Number(numSring[0])]} ${dozens[Number(numSring[1])]} ${units[Number(numSring[2])]}`;
      }
    } else if (number < 10000) {
      if (Number(numSring[2] + numSring[3]) >= 10 && Number(numSring[2] + numSring[3]) < 20) {
        strNumberOut = `${unitsMod[Number(numSring[0])]} тысяч${end(Number(numSring[0]))} ${hundreds[Number(numSring[1])]} ${intermediate[Number(numSring[3])]}`;
      } else {
        strNumberOut = `${unitsMod[Number(numSring[0])]} тысяч${end(Number(numSring[0]))} ${hundreds[Number(numSring[1])]} ${dozens[Number(numSring[2])]} ${units[Number(numSring[3])]}`;
      }
    } else if (number < 20000) {
      if (Number(numSring[3] + numSring[4]) >= 10 && Number(numSring[3] + numSring[4]) < 20) {
        strNumberOut = `${intermediate[Number(numSring[1])]} тысяч ${hundreds[Number(numSring[2])]} ${intermediate[Number(numSring[4])]}`
      } else {
        strNumberOut = `${intermediate[Number(numSring[1])]} тысяч ${hundreds[Number(numSring[2])]} ${dozens[Number(numSring[3])]} ${units[Number(numSring[4])]}`;
      }
    } else if (number < 100000) {
      if (Number(numSring[3] + numSring[4]) >= 10 && Number(numSring[3] + numSring[4]) < 20) {
        strNumberOut = `${dozens[Number(numSring[0])]} ${unitsMod[Number(numSring[1])]} тысяч${end(Number(numSring[1]))} ${hundreds[Number(numSring[2])]} ${intermediate[Number(numSring[4])]}`
      } else {
        strNumberOut = `${dozens[Number(numSring[0])]} ${unitsMod[Number(numSring[1])]} тысяч${end(Number(numSring[1]))} ${hundreds[Number(numSring[2])]} ${dozens[Number(numSring[3])]} ${units[Number(numSring[4])]}`;
      }
    }

    console.log(strNumberOut);
  } else {
    console.log('Enter numeric data less 100000');
  }
}

textOfNumber(51846);




