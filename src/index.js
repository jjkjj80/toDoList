//dom lookup

const cont = document.querySelector('.container');
const sub = document.querySelector('.sub')
const form = document.querySelector('.form');


//dom manip
function CreateTask (title, description, due, importance) {
    return{
        title: title,
        desc: description,
        due: due,
        imp: importance,
        comp: "N/A",

        incimp () {
        this.imp = this.imp + 1;
        return this.imp
        },

        decimp () {
        this.imp = this.imp -1;
        return this.imp
        }
}};

sub.addEventListener('click', (e) => {
    e.preventDefault();
    let check = validate()
    if (check = true) {
        let buff = create()
        card(buff);
    }

});

 function validate () {
     const imp = document.querySelector('#imp').value;
     if ( imp <0 | imp > 5) {
         alert("Importance must be between 1 and 5");
         return false
     }
     else {
         return true
     }
 }
function create() {
    const title = document.querySelector('#do').value;
    const desc = document.querySelector('#desc').value;
    const due = document.querySelector('#due').value;
    const imp = document.querySelector('#imp').value;
    let task = CreateTask(title, desc, due, imp)
    return task;
}

function card (buff) {
    let list = document.createElement('div')
    list.classList.add('toDoList');

    let cardTitle = document.createElement('p')
    cardTitle.textContent=buff.title;
    list.appendChild(cardTitle);

    let cardDesc = document.createElement('p')
    cardDesc.textContent = buff.desc;
    list.appendChild(cardDesc);

    let cardDue = document.createElement('p')
    cardDue.textContent=buff.due;
    list.appendChild(cardDue);

    let cardImp = document.createElement('p')
    cardImp.textContent = buff.imp
    list.appendChild(cardImp);

    cont.appendChild(list)
}

function cardColor () {

}