// Գրել x-o խաղի կոնսոլային տարբերակը 3x3 չափերի համար։ Ձեր ծրագիրը պետք է բրաուզերի կոնսոլում ամեն
// քայլից հետո տպի նոր վիճակը, ինչպես նաև կոնսոլից պետք է ունենաք հնարավորություն նոր քայլ անելու և
// նոր խաղ սկսելու։ Ծրագիրը պետք է ճիշտ պահին որոշի հաղթող խաղացողին և հայտնի դրա մասին։
// Հուշում․
// 1) OOP-ն կարող է լրջորեն հեշտացնել Ձեր աշխատանքը
// 2) Հաշվի առեք բոլոր արտառոց դեպքերը նույնպես




console.log('%cКрестики/нолики', 'color:#555;font-size:1.5rem');
console.log('%cУсловия: по очереди в консоли вызывайте ход, типа move()', 'color:#555;font-size:1rem');
console.log('%cВ скобках указываете номер клетки', 'color:#555;font-size:1rem');

console.log(`
╔═══╦═══╦═══╗
║ 1 ║ 2 ║ 3 ║
╠═══╬═══╬═══╣
║ 4 ║ 5 ║ 6 ║
╠═══╬═══╬═══╣
║ 7 ║ 8 ║ 9 ║
╚═══╩═══╩═══╝                        
`)


let field = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

const position = {
    1: [0, 0],
    2: [1, 0],
    3: [2, 0],
    4: [0, 1],
    5: [1, 1],
    6: [2, 1],
    7: [0, 2],
    8: [1, 2],
    9: [2, 2]
}


function showField(f) {
    function symbolDraw(symbol) {
        if (!symbol) {

            return ' ';
        }
        return symbol;
    }

    let result = `         
                         
                         
                         
                              
                           ╔═══════╦═══════╦═══════╗
                           ║       ║       ║       ║
                           ║   ${symbolDraw(f[0][0])}   ║   ${symbolDraw(f[0][1])}   ║   ${symbolDraw(f[0][2])}   ║
                           ║       ║       ║       ║
                           ╠═══════╬═══════╬═══════╣
                           ║       ║       ║       ║
                           ║   ${symbolDraw(f[1][0])}   ║   ${symbolDraw(f[1][1])}   ║   ${symbolDraw(f[1][2])}   ║
                           ║       ║       ║       ║
                           ╠═══════╬═══════╬═══════╣
                           ║       ║       ║       ║
                           ║   ${symbolDraw(f[2][0])}   ║   ${symbolDraw(f[2][1])}   ║   ${symbolDraw(f[2][2])}   ║
                           ║       ║       ║       ║
                           ╚═══════╩═══════╩═══════╝
`;
    console.log(result);
}

let isPlus = true;

function chechWin() {
    const f = field;

    if (f[0][0] && f[0][0] === f[0][1] && f[0][1] === f[0][2]) return f[0][0];
    if (f[1][0] && f[1][0] === f[1][1] && f[1][1] === f[1][2]) return f[1][0];
    if (f[2][0] && f[2][0] === f[2][1] && f[2][1] === f[2][2]) return f[2][0];

    if (f[0][0] && f[0][0] === f[1][0] && f[1][0] === f[2][0]) return f[0][0];
    if (f[0][1] && f[0][1] === f[1][1] && f[1][1] === f[2][1]) return f[0][1];
    if (f[0][2] && f[0][2] === f[1][2] && f[1][2] === f[2][2]) return f[0][2];

    if (f[0][2] && f[0][2] === f[1][1] && f[1][1] === f[2][0]) return f[0][2];
    if (f[0][0] && f[0][0] === f[1][1] && f[1][1] === f[2][2]) return f[0][0];

    return false;
}


function nextMove(num, symbol = '+') {
    console.clear();
    const [x, y] = position[num]
    field[y][x] = symbol;
    showField(field);
}

function move(num) {
    const [x, y] = position[num]
    if (!field[y][x]) {
        nextMove(num, isPlus ? '+': 'o');
    } else {
        console.log('Клетка занята :)');
        return;
    }

    let win = chechWin()
    if (win) {
        console.log(`%cПобедил '${win}'! Новая игра начнется через 5сек..`, 'color:#468a5d;font-size:1.2rem');
        setTimeout(start, 5000)
    }
    isPlus = !isPlus;
}

function start() {
    field = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ];
    showField(field);
}

start();
