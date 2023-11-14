let s = "one4seveneight";
// let numbers = [
//     "zero",
//     "one",
//     "two",
//     "three",
//     "four",
//     "five",
//     "six",
//     "seven",
//     "eight",
//     "nine",
// ];
// console.log(
//     "🚀  numbers:",
//     numbers.findIndex((e) => e === "three")
// );

// console.log("🚀  s:", s.length);

// console.log(isNaN);

function solution(s) {
    let answer = "";
    let toNumber = "";
    let numbers = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    for (a = 0; a <= s.length - 1; a++) {
        if (isNaN(Number(s.split("")[a]))) {
            toNumber += s.split("")[a];
            if (numbers.findIndex((e) => e === toNumber) !== -1) {
                answer += numbers.findIndex((e) => e === toNumber);
                toNumber = "";
            }
        } else {
            answer += s.split("")[a];
        }
    }
    return answer;
}

solution(s);
