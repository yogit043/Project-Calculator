let input = document.querySelector('#inputbox');
let btns = document.querySelectorAll('button');
let string = '';
let arr = Array.from(btns);

function buttonClick(clickedButton) {
    let buttonText = clickedButton.innerHTML;

    if (buttonText === '=') {
        try {
            string = eval(string);
            input.value = string;
        } catch (error) {
            input.value = 'Error';
        }
    } else if (buttonText === 'AC') {
        string = '';
        input.value = string;
    } else if (buttonText === 'DEL') {
        string = string.slice(0, string.length - 1);
        input.value = string;
    } else {
        string += buttonText;
        input.value = string;
    }
}

document.addEventListener('keydown', function (event) {
    let key = event.key;
    let validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '=', '.', 'Backspace'];

    if (validKeys.includes(key)) {
        let button = key === 'Backspace' ? document.querySelector('.operator') : Array.from(btns).find(btn => btn.innerHTML === key);
        buttonClick(button);
    }
});
