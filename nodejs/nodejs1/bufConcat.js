var buf1 = Buffer.from('a');
var buf2 = Buffer.from('b');
var buf3 = Buffer.from('c');
var arr = [buf1, buf2, buf3];
console.log(arr);
// 무슨 차이지?
var buf = Buffer.concat(arr);
console.log(buf);
//

