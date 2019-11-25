////5 ////
var max = 0
function maxOfThree(num1, num2, num3){
    while (max <= 0){
        if(num1 >= num2 && num1 >= num3){
            max = num1
        }
        if(num2 >= num1 && num2 >= num3){
            max = num2
        }
        if(num3 >= num2 && num3 >= num1){
            max = num3
        }
    }
    return max;


}
console.log(maxOfThree(6, 9, 1));


//> => 9


//// 6 //////

var i = 0;
var strLength = '';
function printLongestWord(array){

    while(i < array.length){
        if(strLength.length <array[i].length){
           strLength = array[i]
        }
        i++;
    }
return strLength

}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));


//> => "Peanutbutter"


///// 7//////

//we can't solve it with while loop or any loop because there is no iterations
function transmogrify(num1, num2, num3){
    return Math.pow(num1 * num2, num3);

}
console.log(transmogrify(5, 3, 2));


///> => 225