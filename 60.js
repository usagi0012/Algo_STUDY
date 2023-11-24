let number = 5;
let limit = 3;
let power = 2;

// 1. 각각의 약수 개수를 구하삼
// 요거 시간 많이 걸려서 탈락할듯
// 2. 1이면 1을 더하삼
// 3. 리미트보다 같거나 작으면 그걸 더하삼
// 4. 리미트보다 크면 power를 더하삼

function solution(number, limit, power) {
    let answer = 0;
    let count = 2;
    for (a = 1; a <= number; a++) {
        if (a === 1) {
            answer += 1;
            continue;
        }
        count = 2;
        for (let b = 2; b <= Math.sqrt(a); b++) {
            if (a % b === 0) {
                if (b === a / b) {
                    count++;
                } else {
                    count += 2;
                }
            }
        }
        count <= limit ? (answer += count) : (answer += power);
    }
    return answer;
}

solution(number, limit, power);
