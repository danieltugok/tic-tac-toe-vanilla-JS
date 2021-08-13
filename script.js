// Inicial data
let board = {
    a1:'', a2:'', a3:'',
    b1:'', b2:'', b3:'',
    c1:'', c2:'', c3:''
};

let turnPlayer = '';
let warning = '';
let playing = false;

reset();


// Events
document.querySelector('.reset').addEventListener('click', reset);




// Functions
function reset () {
    warning = '';

    let random = Math.floor(Math.random() * 2);
    player = (random === 0) ? 'x' : 'o';

    for(let i in board) {
        board[i] = '';
    }

    playing = true;

    renderBoard();
    renderInfo();

}

function renderBoard(){
    for(let i in board) {
        let item = document.querySelector(`div[data-item=${i}]`);
        item.innerHTML = board[i];

    }
}

function renderInfo() {
    document.querySelector('.vez').innerHTML = player;
    document.querySelector('.resultado').innerHTML = warning;
    
}



