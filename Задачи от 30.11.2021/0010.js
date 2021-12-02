let arr = [-2, 4, -10, 8];
let result = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        result += arr[i];
    }
}
console.log(result);