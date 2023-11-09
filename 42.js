let number = [-3, -2, -1, 0, 1, 2, 3];
//학생들의 정수 번호 쌍 (-3, 0, 3), (-2, 0, 2), (-1, 0, 1), (-2, -1, 3), (-3, 1, 2) 이 삼총사가 될 수 있으므로, 5를 return 합니다.
console.log(number.length - 1);

function solution(number) {
    let answer = 0;
    let count = 0;
    for (a = 0; a <= number.length - 1; a++) {
        console.log(a);
        for (b = a + 1; b <= number.length - 1; b++) {
            for (c = b + 1; c <= number.length - 1; c++) {
                if (number[a] + number[b] + number[c] === 0) {
                    answer += 1;
                    console.log("right :" + a, b, c);
                } else "";
            }
        }
    }
    return answer;
}

solution(number);
