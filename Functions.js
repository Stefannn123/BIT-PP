//prvi zadatak

// var s = ["1", "21", undefined, "42", "1e-3", Infinity]

// function arrToNumber(arr) {


//     var arrnew = []
//     var j = 0
//     for (i = 0; i < arr.length; i++) {

//         var result = parseFloat(arr[i]);
//         if (isNaN(result) == false) {
//             arrnew[j] = result;
//             j++;
//         }


//     }
//     return arrnew;

// }

// console.log(arrToNumber(s));


// var s = [NaN, 0, 15, false, -22, '', undefined, 47, null]

// function arrToNumber(arr) {
//     var arrnew = "";

//     for (i = 0; i < arr.length; i++) {

//         if (isFinite(arr[i]) && parseInt(arr[i])) {
//             arrnew = arrnew + arr[i];

//         }


//     }
//     return arrnew;
// }
// console.log(arrToNumber(s));

var x = [NaN, 0, 15, false, -22, '', undefined, 47, null]



function arrToNumber(arr) {

    var arrnew = [];
    var j = 0;
    for (i = 0; i < arr.length; i++) {

        if (arr[i] == false) {

            continue;


        } else {

            arrnew[j] = arr[i];
            j++;
        }


    }

    return arrnew;

}
console.log(arrToNumber(x));






