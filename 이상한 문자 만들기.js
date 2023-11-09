function solution(s) {
  var voca = s.split(" ");
  //["try","hello","world"]
  var answer = new Array(voca.length).fill("");
  voca.forEach((e, idx) => {
    for (i = 0; i < e.length; i++) {
      if (i % 2 == 0) {
        answer[idx] += e[i].toUpperCase();
      } else {
        answer[idx] += e[i].toLowerCase();
      }
    }
    //["TrY","HeLlO","WoRlD"]
  });
  return answer.join(" ");
}

//1)
// function toWeirdCase(s) {
//   return s.toUpperCase().replace(/(\w)(\w)/g, function (a) {
//     return a[0].toUpperCase() + a[1].toLowerCase();
//   });
// }
// //replace의 정규식 \w는 밑줄 문자를 포함한 영숫자 문자이다. 두개를 붙여 쓴건 연속된 두 문자를 의미. 짝수인 앞에문자는 대문자로 홀수인 뒤에 문자는 소문자로 바꿔줌

//2)
// function toWeirdCase(s) {
//   return s
//     .split(" ")
//     .map((i) =>
//       i
//         .split("")
//         .map((j, key) => (key % 2 === 0 ? j.toUpperCase() : j))
//         .join("")
//     )
//     .join(" ");
// }
// //map을 두번 사용해서 처음은 단어로 짤라주고 한번더 각 단어를 문자로 짤라줌. 문자(j)의 index(여기서는 key)가 짝수이면 대문자로 바꾸도록 하고 아니면 그대로 반환해서 합쳐주는데, 만약 문자열이 전부 소문자로 나오는게 아니라 대문자가 섞여 있다면 그대로 반환할때 오류가 날 수 있는 코드 같음.

//3)
// function toWeirdCase(s){
//   var result = "";
//   for(var word of s.split(" ")) {
//     for(var i in word) {
//       result += word[i][parseInt(i) % 2 == 0 ? "toUpperCase" : "toLowerCase"]();
//     }
//     result += " ";
//   };
//   return result.slice(0, -1);
// }
// //방식 자체는 특별할 것 없이 for문을 두번 돌려 자른 단어 각각에서 index값에 따라 대문자 소문자 변환해서 반환해주고, 한 단어가 끝나면 공백을 넣어주기 때문에 마지막에 합칠때 끝 공백을 짤라서 반환하는 코드이다. 근데 toUpperCase함수를 저런식으로도 호출할 수 있다는게 신기해서 가져와봄.
