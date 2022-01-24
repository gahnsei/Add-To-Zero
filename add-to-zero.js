const arr = [0, 9, -9, 3, -3, 5, 4];
const arr2 = [9, 4, 3, 5, 6, 2]
let x = 0;
let  answer = false;

while (x < arr2.length) {
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[x] + arr2[i] === 0) {
            answer = true;
        }
    }

    x++;
}

console.log(answer);