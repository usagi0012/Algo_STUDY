function solution(s) {
    let a = '';
    let b = s.split(' ');

    for (let i = 0; i < b.length; i++) {
        for (let j = 0; j < b[i].length; j++) {
            if (j % 2 == 0) {
                a += b[i][j].toUpperCase();
            }
            if (j % 2 == 1) {
                a += b[i][j].toLowerCase();
            }
        }
        if (i + 1 !== b.length) {
            a += ' ';
        } else {
            a += '';
        }
    }
    return a;
}
