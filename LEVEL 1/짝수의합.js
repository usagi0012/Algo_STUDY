// 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.

function solution(n) {
    var answer = 0;
    let num = parseInt(n / 2) * 2;
    for (let i = 0; i < parseInt(n / 2); i++) {
        answer += num;
        num -= 2;
    }
    return answer;
}
