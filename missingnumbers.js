let myArray = [1,2,3,5,6,7,9], count = 9;
let missingnumbers = new Array();
for(let p=1;p<=count;p++) {
    if(myArray.indexOf(p) == -1){
        missingnumbers.push(p);
    }
}
console.log(missingnumbers); 