var a = +prompt('Введи первое число')
var b = +prompt('Введи второе число')
var c = +prompt('Введи третье число')
if (a < b && a < c && c > b) {
    alert('Среднее число ' + b)
}else if (a == b || a == c || b == c) {
    alert('Среднее число ' + a)
}else if (b < a && b < c && c > a) {
    alert('Среднее число ' + a)
}else if (c < b && c < a && a > b) {
    alert('Среднее число ' + b)
}else if (b < a && b < c && a > c) {
    alert('Среднее число ' + c)
}else if (c < a && c < b && b > a) {
    alert('Среднее число ' + a)
}else if (a < b && a < c && b > c){
    alert('Среднее число ' + c)
}else if (isNaN(a) || isNaN(b) || isNaN(c)){
    alert('Ошибка')
}