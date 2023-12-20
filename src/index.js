const cont = document.querySelector('.container')
const sub = document.querySelector('.sub')
const colors = ['#a0c15a', '#add633', '#ffd934', '#ffb234', '#ff8c5a']
const sortDue = document.querySelector('.sortDue')
const sortImp = document.querySelector('.sortImp')
let order = []

class todo {
    constructor(title, desc, due, imp) {
        this.title = title,
        this.desc = desc,
        this.due = due,
        this.imp = imp,
        this.color = colors[this.imp - 1]
    }

    inc() {
        if (this.imp < 5) {
            ++ this.imp 
            this.color = colors[this.imp - 1]
        }
    }

    dec() {
        if (this.imp > 1) {
            -- this.imp 
            this.color = colors[this.imp - 1]
        }
    }

    colorSelector() {
        console.log(this.imp)
        
    }

    card() {
        let list = document.createElement('div')
        let info = document.createElement('div')
        let buttons = document.createElement('div')
        list.classList.add('toDoList');
        info.classList.add('cardInfo')
        buttons.classList.add('cardButtons')

        let cardTitle = document.createElement('p')
        cardTitle.textContent=this.title;
        cardTitle.classList.add('cardTitle')
        info.appendChild(cardTitle);

        let cardDesc = document.createElement('p')
        cardDesc.textContent = this.desc;
        cardDesc.classList.add('cardDesc')
        info.appendChild(cardDesc);

        let cardDue = document.createElement('p')
        cardDue.textContent=this.due;
        cardDue.classList.add('cardDue')
        info.appendChild(cardDue);

        let cardImp = document.createElement('p')
        cardImp.textContent = this.imp
        cardImp.classList.add('cardImp')
        info.appendChild(cardImp);

        let cardInc = document.createElement('button')
        cardInc.textContent = "^"
        cardInc.classList.add('cardInc')
        cardInc.addEventListener('click', () => {
            this.inc()
            list.style.backgroundColor = this.color
        })
        
        let cardDec = document.createElement('button')
        cardDec.textContent = "V"
        cardDec.classList.add('cardDec')
        cardDec.addEventListener('click', () => {
            this.dec()
            list.style.backgroundColor = this.color
        })

        let cardRem = document.createElement('button')
        cardRem.textContent = 'trash'
        cardRem.classList.add('cardRem')
        cardRem.addEventListener('click', (e) => {
            let parent = e.target.closest('.toDoList')
            parent.remove()
            Object.keys(this).forEach((i) => this[i] = null);
            console.log(this)
        })
        
        buttons.appendChild(cardInc)
        buttons.appendChild(cardDec)
        buttons.appendChild(cardRem)

        list.appendChild(info)
        list.appendChild(buttons)
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
    console.log(task)
})