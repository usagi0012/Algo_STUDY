// 이건 41번 이상한 문자 만들기

let s = "why function unactive";

function solution(s) {
    let answer = "";
    for (a = 0; a <= s.split(" ").length - 1; a++) {
        for (b = 0; b <= s.split(" ")[a].length - 1; b++) {
            b % 2 === 0
                ? (answer += s.split(" ")[a][b].toUpperCase())
                : (answer += s.split(" ")[a][b].toLowerCase());
        }
        a !== s.split(" ").length - 1 ? (answer += " ") : "";
    }
    return String(answer);
}

console.log(solution(s));
