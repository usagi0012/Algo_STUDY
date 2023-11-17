let score = [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000];
let k = 4;

function solution(k, score) {
    let answer = [];
    let best = [];
    for (a = 0; a <= score.length - 1; a++)
        if (a <= k - 1) {
            best.push(score[a]);
            best;
            best.sort((a, b) => b - a);
            best;
            answer.push(best[a]);
        } else {
            best[k - 1] > score[a] ? "" : (best[k - 1] = score[a]);
            best.sort((a, b) => b - a);
            answer.push(best[k - 1]);
        }
    return answer;
}

solution(k, score);
