
// // 문제 설명
// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다.
// 각 단어는 하나 이상의 공백문자로 구분되어 있습니다.
// 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

// // 제한 사항
// 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
// 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.

// // 풀이 순서!!!
// 1. 공백으로 나뉘는 문자들 분리하기
// 2. 문자 수 만큼 반복문 실행하기
// 3. 글자 수 만큼 반복문 실행하기
// 4. 홀수 자리들 대문자로, 짝수 자리들 소문자로 만들기(첫번째는 index0이므로 짝수임)

function solution(s) {
    let arr = s.split(' '); // 문자열을 공백으로 나눈 후 배열에 저장
    let answer = []; // 대소문자 변환 값을 저장하기 위한 빈 배열

    arr.forEach((element, index) => {
        let word = arr[index]; // arr[인덱스] 값을 wrod에 할당
        // arr[index] 글자 수 만큼 반복 실행
        for (let i = 0; i < word.length; i++) {
            // 반복 횟수가 짝수일 경우 대문자 : 홀수일 경우 소문자로 변환 후 answer 배열에 저장
            i % 2 === 0 ? answer.push(arr[index][i].toUpperCase()) : answer.push(arr[index][i].toLowerCase());
        };
        // 마지막 글자가 아닐 경우 공백 추가
        if (index < arr.length - 1) { answer.push(' '); };
    });

    answer = answer.join(''); // 배열.join('')을 사용하여 공백 없이 문자열로 변환
    return answer;
}

solution('try hello world');