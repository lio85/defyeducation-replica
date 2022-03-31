let showButtons=  document.querySelectorAll('.show-btn')

for (let i=0; i< showButtons.length; i++){
    showButtons[i].addEventListener('click', (e)=> {
        noClick(showButtons[i])        
        showButtons[i].parentElement.lastElementChild.classList.toggle("hidden-content--show")         
        showButtons[i].childNodes[1].classList.toggle("show-btn--rotate")
    })
}