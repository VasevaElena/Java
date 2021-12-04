const btn = document.querySelector(".res-btn");
const input = document.querySelector(".txt-input-a");
const input = document.querySelector(".txt-input-b");
const input = document.querySelector(".txt-input-c");

btn.addEventListener("clik", function (event) {
    let a = input1.value;
    let b = input2.value;
    let c = input3.value;
    let d = Math.pow(b, 2) - (4 * a * c);
    alert('d = ' + d)

    if (d < 0) {
        alert("неопределенный");
    }
    if (d > 0) {
        let x1 = (-b + Math.sqrt(d)) / 2 * a;
        let x2 = (-b - Math.sqrt(d)) / 2 * a;
        alert('x1 = ' + x1);
        alert('x2 = ' + x2);

    }
    if (d == 0) {

        let x = (-b) / 2 * a;
        alert('x = ' + x);

    }


}
)
