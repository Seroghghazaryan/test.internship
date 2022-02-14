// Գրել ծրագիր, որը կհաշվարկի Ֆիբոնաչիի ալգորիթմը անալիտիկ ձևով։


// function fib(n) {
//     return n <= 1 ? n : fib(n - 1) + fib(n - 2)
// }

function fibonachi(n) {
    let a = 1
    let b = 1
    for (let i = 3; i <= n; i++) {
        let c = a + b
        a = b
        b = c
        console.log(b)
    }

}

fibonachi("մուտքագրեք թիվ")