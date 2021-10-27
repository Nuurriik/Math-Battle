const arrayCorrect = [
        '55 - 44 = 11',
        '43 + 16 = 59',
        '12 + 13 = 25',
        '88 - 53 = 35',
        '88 + 12 = 100',
        '46 - 13 = 33',
        '18 * 2 = 36',
        '18 - 5 = 13',
        '16 - 7 = 9',
        '74 + 16 = 90',
        '25 * 2 = 50',
        '55 * 2 = 110',
        '15 / 5 = 3',
        '18 - 5 = 13',
        '19 + 6 = 25',
        '99 / 11 = 9',
        '12 * 4 = 48',
        '16 / 4 = 4',
        '17 * 2 = 34',
        '12 - 11 = 1',
        '13 + 29 = 42',
        '17 + 13 = 30',
        '15 * 4 = 60',
        '24 / 6 = 4',
        '77 / 11 = 7',
        '31 * 2 = 62',
        '43 - 25 = 18',
        '23 * 2 = 46',
        '99 * 2 = 198',
        '0 * 2 = 0'
];
const arrayInCorrect = [
        '45 - 25 = 15',
        '95 + 5 = 101',
        '14 * 3 = 52',
        '81 / 9 = 8',
        '78 - 15 = 62',
        '61 + 13 = 78',
        '111 * 2 = 223',
        '169 / 13 = 12',
        '84 - 74 = 9',
        '48 + 12 = 61',
        '15 * 3 = 48',
        '16 * 2 = 35',
        '100 - 9 = 81',
        '105 + 3 = 109',
        '16 / 4 = 3',
        '25 / 5 = 6',
        '121 / 11 = 12',
        '148 + 2 = 151',
        '123 + 4 = 128',
        '12 * 4 = 49',
        '7 * 7 = 48',
        '11 * 11 = 123',
        '18 / 9 = 3',
        '27 / 3 = 8',
        '178 - 12 = 156',
        '65 + 55 = 130',
        '89 - 19 = 60',
        '55 * 2 = 130',
        '17 * 2 = 35',
        '178 - 18 = 151'
];

const btnCorrect = document.querySelector('.btn1'),
        btnInCorrect = document.querySelector('.btn2');
        let score = 0;
        const math = document.querySelector('.list');
        const ScoreHtml = document.querySelector('.score');
        const div = document.createElement('div');
function check(boolean){
    let random = Math.random() < 0.5;
    let randomArr = Math.floor(Math.random() * 30);
    if(random == true){
        div.innerHTML = `${arrayCorrect[randomArr]}`;
        math.innerHTML = "";
        math.append(div);
    }else{
        div.textContent = `${arrayInCorrect[randomArr]}`;
        math.innerHTML = "";
        math.append(div);
    }
    if(boolean == random){
        score++;
        ScoreHtml.textContent = score;
    }else{
        score--;
        ScoreHtml.textContent = score;
    }
    console.log(random);
};
btnCorrect.addEventListener('click',()=>{
    check(true);
})
btnInCorrect.addEventListener('click',()=>{
    check(false);
});
