// 소수 어떻게 확인함?
// 자기보다 작은수로 나눠서 나머지가 0이면 소수가 아님
// 근데 제곱근까지만 계산하면 되지않음? 분명 시간때문에 안될거같음
//

let numbers = [1, 2, 3, 4];

function solution(numbers) {
    let answer = 0;
    let sum = [];
    let sqrt = [];
    let count = 0;
    for (a = 0; a <= numbers.length - 1; a++) {
        for (b = a + 1; b <= numbers.length - 1; b++) {
            for (c = b + 1; c <= numbers.length - 1; c++) {
                sum.push(numbers[a] + numbers[b] + numbers[c]);
                sqrt.push(
                    Math.floor(Math.sqrt(numbers[a] + numbers[b] + numbers[c]))
                );
            }
        }
    }
    for (c = 0; c <= sum.length - 1; c++) {
        for (d = 2; d <= sqrt[c]; d++) {
            // B가 점점 커지면서
            sum[c] % d === 0 ? count++ : "";
        }
        count === 0 ? answer++ : (count = 0);
    }
    return answer;
}

solution(numbers);
