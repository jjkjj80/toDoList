//dom lookup

const cont = document.querySelector('.container');
const sub = document.querySelector('.sub')
const form = document.querySelector('.form');


//dom manip
class todo {
    constructor(title, description, due, importance) {
        this.title = title,
        this.des = description,
        this.due = due,
        this.imp = importance
    }

    incimp () {
        this.imp = this.imp + 1;
    }

    decimp () {
        this.imp = this.imp -1;
    }
}

sub.addEventListener('click', (e) => {
    e.preventDefault();
    create()
});

function create() {
    const title = document.querySelector('#do').value;
    const desc = document.querySelector('.desc').value;
    const due = document.querySelector('.due').value;
    const imp = document.querySelector('.imp').value;
    let task = new todo(title, desc, due, imp)
    console.log(task)
}

function card () {

}