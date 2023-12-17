//dom lookup
const input = document.querySelector('#do');
const cont = document.querySelector('.container');
const sub = document.querySelector('.sub')
const form = document.querySelector('.form')

//dom manip
class newtodo {
    constructor(title, description, due, importance) {
        this.title = title,
        this.des = description,
        this.due = due,
        this.imp = importance
    }
}
sub.addEventListener('click', ())