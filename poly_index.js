const PolynomialRegression = require('ml-regression').PolynomialRegression;
const x = [10,20,30,40,50,70];
const y = [0,1,4,5,4,0];
const degree = 5; //  maximum degree
const regression = new PolynomialRegression(x, y, degree);
console.log(regression.predict(20));
console.log(regression.coefficients);
console.log(regression.toString(3));
console.log(regression.toLaTeX());