let cards=  document.querySelectorAll('.FAQs__card')

for (let i=0; i< cards.length; i++){
    cards[i].addEventListener('click', (e)=> {
        cards[i].firstElementChild.children[1].classList.toggle("FAQs__btn--click")
        // cards[i].lastElementChild.classList.toggle("FAQs__answer-container--click")
        /* if(cards[i].lastElementChild.children[0].classList.contains("FAQs__answer--show")) {
            setTimeout(() => {
                cards[i].lastElementChild.children[0].classList.remove("FAQs__answer--show")
            }, 300);
        } else {
            setTimeout(() => {
                cards[i].lastElementChild.children[0].classList.add("FAQs__answer--show")
            }, 300);
        } */
        setTimeout(() => {
            cards[i].lastElementChild.children[0].classList.toggle("FAQs__answer--show")
            console.log(cards[i].lastElementChild.children[0]);
        }, 300);
    })
}