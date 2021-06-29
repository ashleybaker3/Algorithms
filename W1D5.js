i = 0;

function reverse(arr) {
    while(i<arr.length/2) {
        var temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
        i++;
    }

    return arr;
}

var result = reverse(["a","b","c","d","e"]);
console.log(result)