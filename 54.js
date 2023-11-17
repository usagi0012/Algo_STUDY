let date = new Date(`5 24, 2016`);
let getday = date.getDay();
console.log("🚀  getday:", getday);
console.log(new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date));
answer = new Intl.DateTimeFormat("en-US", { weekday: "long" })
    .format(getday)
    .slice(0, 3)
    .toUpperCase();

let a = 5;
let b = 24;

function solution(a, b) {
    let answer = "";
    let date = new Date(`${a} ${b}, 2016`);
    answer = Intl.DateTimeFormat("en-US", { weekday: "long" })
        .format(date)
        .slice(0, 3)
        .toUpperCase();
    return answer;
}

solution(a, b);
