const fs = require('fs');
const faker = require('faker');
const cats = require('./helpers/cats.js');


const home = require("os").homedir();
var path = home + '/Documents/'


let startingLoop = 1;
let maxLoop = 40;
let currentNumber = 1;
console.time('Data generation completed in');

let seedFileItem = (startingLoop, maxLoop, currentNumber) => {
  if (startingLoop > maxLoop) {
    console.timeEnd('Data generation completed in');
    return;
  } else {
    let string = "";
    for (let i = 1; i <= 250000; i++) {
      let record = `${currentNumber}|${'Clean-O-Bot ' + currentNumber}|${cats.data[Math.floor(Math.random() * cats.data.length)]}|${faker.lorem.sentence()}|${Math.floor(Math.random() * 100) + 1}|${faker.commerce.price()}|${faker.random.boolean()}|${faker.random.boolean()}|${faker.random.boolean()}|${Math.floor(Math.random() * 10) + 1}|${faker.company.companyName()}|${currentNumber}|${faker.random.boolean()}|${faker.lorem.sentence()}|${(Math.random() * (1000) / 100).toFixed(2)}|${Math.floor(Math.random()*5) +1}|${faker.company.companyName()}|${Math.floor(Math.random()*5)}|${faker.lorem.sentence()}`;
      string += record + '\n';
      currentNumber++;
    }

    fs.appendFile(path + 'cassandraData.csv', string, (err) => {
      if (err) throw err;
      console.log('finished loop ' + startingLoop);
      startingLoop++;
      seedFileItem(startingLoop, maxLoop, currentNumber);
    });
  }
}

seedFileItem(startingLoop, maxLoop, currentNumber);