let lottos = [44, 2, 3, 4, 32, 25];
let win_numbers = [31, 10, 45, 1, 6, 19];

function solution(lottos, win_numbers) {
    let answer = [];
    let sameNumber = lottos.filter((num) => win_numbers.includes(num));
    let zeroCount = lottos.filter((num) => num === 0);
    let reward = [6, 5, 4, 3, 2, 1];
    if (sameNumber.length === 6) {
        answer.push(1);
        answer.push(1);
    } else {
        zeroCount.length === 0
            ? sameNumber.length === 0
                ? answer.push(6)
                : answer.push(reward[sameNumber.length - 1])
            : answer.push(reward[sameNumber.length - 1 + zeroCount.length]);
        sameNumber.length === 0
            ? answer.push(6)
            : answer.push(reward[sameNumber.length - 1]);
    }
    return answer;
}

solution(lottos, win_numbers);

// 최소 현재 일치하는 번호개수
// 0의 개수 = 최대개수
// 순위	당첨 내용
// 1	6개 번호가 모두 일치
// 2	5개 번호가 일치
// 3	4개 번호가 일치
// 4	3개 번호가 일치
// 5	2개 번호가 일치
// 6(낙첨)	그 외

// [1, 2, 3, 4, 5, 6] [7, 8, 9, 10, 11, 12] [6,6]
