function solution(t, p) {
    var answer = 0;
    for (a = 0; a <= t.length - p.length; a++) {
        Number(t.substr(a, p.length)) <= Number(p) ? (answer += 1) : "";
    }
    return answer;
}

let t = "3141592";
console.log(t.substr(0, 2));
console.log("🚀  t:", t);
