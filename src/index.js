const cont = document.querySelector('.container')
const sub = document.querySelector('.sub')

class todo {
    constructor(title, desc, due, imp) {
        this.title = title,
        this.desc = desc,
        this.due = due,
        this.imp = imp
    }

    get color() {
        switch (this.imp){
            case "1": return "#098765"
            case "2": return '#987654'
            case "3": return '#876543'
            case "4": return '#765432'
            case "5": return '#123456'
        }
    }

    card() {
        let list = document.createElement('div')
        list.classList.add('toDoList');

        let cardTitle = document.createElement('p')
        cardTitle.textContent=this.title;
        cardTitle.classList.add('cardTitle')
        list.appendChild(cardTitle);

        let cardDesc = document.createElement('p')
        cardDesc.textContent = this.desc;
        cardDesc.classList.add('cardDesc')
        list.appendChild(cardDesc);

        let cardDue = document.createElement('p')
        cardDue.textContent=this.due;
        cardDue.classList.add('cardDue')
        list.appendChild(cardDue);

        let cardImp = document.createElement('p')
        cardImp.textContent = this.imp
        cardImp.classList.add('cardImp')
        list.appendChild(cardImp);

        let cardInc = document.createElement('button')
        cardInc.textContent = "=>"
        cardInc.classList.add('cardInc')

        list.appendChild(cardInc)
        list.style.backgroundColor = this.color

        cont.appendChild(list)
    }
}

sub.addEventListener('click', (e) => {
    e.preventDefault();
    const title = document.querySelector('#do').value;
    const desc = document.querySelector('#desc').value;
    const due = document.querySelector('#due').value;
    const imp = document.querySelector('#imp').value;
    let task = new todo(title,desc,due,imp)
    task.card()
})