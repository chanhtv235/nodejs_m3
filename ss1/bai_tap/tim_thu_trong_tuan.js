let thu =["chủ nhật", "thứ hai", "thứ ba", "thứ tư", "thứ năm", "thứ sáu", "thứ bảy"];
const prompt = require('prompt-sync')();
const date = prompt('Nhập ngày bạn cần kiểm tra?');
let ngay = new Date(date);
let index = ngay.getDay();
console.log(`ngày ${ngay} là thứ ${thu[index]}`);