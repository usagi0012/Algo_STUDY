let k = 4;
let m = 3;
let score = [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2];

function solution(k, m, score) {
    let answer = 0;
    let boxNum = Math.floor(score.length / m);
    score.sort((a, b) => b - a);
    for (a = 1; a <= boxNum; a++) {
        answer += score[a * m - 1] * m;
    }
    return answer;
}

solution(k, m, score);
