let a = 2;
let b = 1;
let n = 20;
let bottle = n;
while (bottle < 2) {
    bottle = Math.floor(bottle / a) * b;
    console.log(bottle);
}

function solution(a, b, n) {
    let answer = 0;
    let bottle = n;
    while (bottle >= a) {
        answer += Math.floor(bottle / a) * b;
        let left = bottle % a;
        bottle = Math.floor(bottle / a) * b;
        bottle += left;
    }

    return answer;
}

solution(a, b, n);
