import "./app1.css"
import $ from "jquery"

const $add1 = $('#add1')
const $minus1 = $('#minus1')
const $mul2 = $('#mul2')
const $div2 = $('#divide2')
const $number = $('#number')
const $reset = $('#reset')
const n = localStorage.getItem('n');
$number.text(n || 100)

$add1.on('click', () => {
    let n = parseFloat($number.text());
    n += 1
    localStorage.setItem('n', n);
    $number.text(n);
})
$minus1.on('click', () => {
    let n = parseFloat($number.text());
    n -= 1
    localStorage.setItem('n', n);
    $number.text(n);
})
$mul2.on('click', () => {
    let n = parseFloat($number.text());
    n *= 2
    localStorage.setItem('n', n);
    $number.text(n);
})
$div2.on('click', () => {
    let n = parseFloat($number.text());
    n /= 2
    localStorage.setItem('n', n);
    $number.text(n);
})
$reset.on('click', () => {
    let n = 100;
    localStorage.setItem('n', n);
    $number.text(n);
})