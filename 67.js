let s = "a";
let skip = "cb";
let index = 1;

function solution(s, skip, index) {
  var answer = "";
  // 0. 알파벳 배열 생성
  let alphabets = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  // 1. 알파벳에서 skip 빼쟈
  let filteredAlphabets = alphabets.filter(
    (ele) => skip.split("").findIndex((value) => value === ele) === -1
  );
  filteredAlphabets;
  // 2. s 요소의 index 찾아서 더하쟈
  for (a = 0; a < s.length; a++) {
    let sIndex = filteredAlphabets.findIndex((value) => value === s[a]);
    // 3. index값이 추린배열보다 크면 그만큼 빼주쟈
    if (index >= filteredAlphabets.length) {
      index -= filteredAlphabets.length;
    }
    // 4. sIndex + index값이 넘치면 또 처음부터 추리자
    if (sIndex + index >= filteredAlphabets.length) {
      answer += filteredAlphabets[sIndex + index - filteredAlphabets.length];
    } else {
      answer += filteredAlphabets[sIndex + index];
    }
  }
  return answer;
}

solution(s, skip, index);
