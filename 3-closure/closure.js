// first 
/* function nonesense(string){
    var blab = function(){
        alert(string)
    }
         return blab();

} */
//second 
/*
function nonesense(string){
    var blab = function(){
        alert(string)
    }
    setTimeout(blab(), 2000)
}
 */

//third 
function nonesense(string){
    var blab = function(){
        alert(string)
    }
    return blab;
}

let blabLater = nonesense('Ali');
let blabAgainLater = nonesense('Rai');
console.log(blabLater, blabAgainLater);


function FullName(firstName){
    return function(lastName){
        console.log(`${firstName} ${lastName}`);
    };
}
let name = FullName('Shadab');
name('Ali');

