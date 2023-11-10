function solution(number) {
  var num = [];
  number.forEach((e, idx) => {
    for (let i = idx + 1; i < number.length; i++) {
      for (let j = i + 1; j < number.length; j++) {
        num.push(e + number[i] + number[j]);
      }
    }
  });
  var answer = num.filter((e) => e === 0);
  return answer.length;
}
//다른 사람들 풀이를 보니 굳이 나처럼 배열에 넣고 0을 찾는게 아니라 if문을 써서 바로 갯수를 구하는 방식이 좋을 것 같다.

// function solution(number) {

//   let result = 0;

//   for(let i = 0, length = number.length; i < length; i++) {
//       for(let j = i+1; j < length; j++) {
//           for(let k = j+1; k < length; k++) {
//               if(number[i]+number[j]+number[k]) continue;
//               result++;
//           }
//       }
//   }

//   return result;
// }
//if의 조건 안에 숫자의 합을 넣어서 0이 아니면 다시 돌고 0이면 result에 1을 더해주는 방식.
