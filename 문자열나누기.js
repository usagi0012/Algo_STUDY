function solution(s) {
  var answer = 0;
  var first = 1;
  var other = 0;
  for (let i = 1; i < s.length; i++) {
    if (s[0] == s[i]) {
      first++;
    }
    if (s[0] != s[i]) {
      other++;
    }
    if (first == other) {
      answer++;
      s.substr(first + other);
      // return solution(s);
    }
  }
  return answer;
}

function solution(s) {
  var arrS = s.split("");
  var slicedS = [];
  var answer = countS(arrS, slicedS);
  return answer;
}

function countS(arrS, slicedS) {
  var first = 0;
  var other = 0;
  for (let i = 0; i < arrS.length; i++) {
    if (arrS[0] == arrS[i]) {
      first++;
    } else {
      other++;
    }

    if (i == arrS.length - 1) {
      slicedS.push(arrS.splice(0, first + other).join(""));
      return slicedS;
    }

    if (first == other) {
      slicedS.push(arrS.splice(0, first + other).join(""));
      return countS(arrS, slicedS);
    }
  }
  return slicedS;
}
