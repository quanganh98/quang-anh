'use strict'

function generate(testLengthArray) {

  let arrobj = []

  for(let i = 0; i< testLengthArray.length; i++){
    let input = []
    for(let j = 0; j < testLengthArray[i]; j++){
      input[j] = Math.floor((Math.random() * 10000) - 10000);
    }
    let target

    if(i == 0){
      target = 10001;
    }
    else if (i == 1){
      target = input[0];
    }
    else if(i == 2){
      target = input[input.length - 1];
    }
    else{
      target = Math.floor((Math.random() * 10000) - 10000);
    }
    let anwser = input.indexOf(target);
    
    arrobj[i] = {"input" : input, "target" : target , "output" : anwser}

  }
  return arrobj;
}

module.exports = generate
