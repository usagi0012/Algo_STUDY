// 요거는 시간때문에 아슬아슬합니다.

let n = 8;
let m = 4;
let section = [2, 3, 6];

function solution(n, m, section) {
    let answer = 0;
    // 1. 일단 오름차순인 section 중 가장 앞숫자를 찾아서 num으로 선언하셈
    while (section.length !== 0) {
        // 2. 그 숫자부터 + m 까지 더한 값까지 section에서 찾아서 지우셈
        let num = 0;
        let count = 0;
        num = section[0];
        for (a = 0; a <= m - 1; a++) {
            let test = section.findIndex((ele) => ele === num + a);
            if (test === 0) {
                section.splice(0, 1);
                count++;
                continue;
            }
        }
        // 3. 한번 슥 지울때마다 answer++
        if (count > 0) {
            answer++;
            count = 0;
        }
    }
    answer;
    return answer;
}

solution(n, m, section);
