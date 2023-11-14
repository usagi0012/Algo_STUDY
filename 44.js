let sizes = [
    [20, 10],
    [12, 18],
];

console.log(sizes[0].sort((a, b) => a - b));

function solution(sizes) {
    let answer = 0;
    let w = [];
    let h = [];
    for (e = 0; e <= sizes.length - 1; e++) {
        w.push(sizes[e].sort((a, b) => a - b)[0]);
        h.push(sizes[e].sort((a, b) => a - b)[1]);
    }
    answer =
        w.sort((a, b) => a - b).reverse()[0] *
        h.sort((a, b) => a - b).reverse()[0];
    return answer;
}

solution(sizes);
console.log(solution(sizes));
