
var data = null;

const countDown = function(i){
    console.log(i);
}

const print = function(x){
    setTimeout(function(){
        data = 15;
        x(data);
    }, 1000);
    console.log(date+5);    
}

print(countDown);


// Block scope 
// {} : this is block

