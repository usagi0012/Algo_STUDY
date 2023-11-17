let food = [1, 3, 4, 6];
console.log(Math.floor(food[1] / 2));

let a = "";
console.log(a + 0);

function solution(food) {
    let answer = "";
    answer += 0;
    for (a = food.length - 1; a >= 0; a--) {
        for (b = 1; b <= Math.floor(food[a] / 2); b++) {
            answer = a + answer;
            answer += a;
        }
    }
    return answer;
}

solution(food);
