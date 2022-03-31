let countries= []
window.onload= function() {
    fetch("https://restcountries.com/v3.1/all")
        .then(function(res) {
           return res.json()
        })
        .then(function(data) {
            for(let i=1; i<data.length; i++) {
                countries.push(data[i].name.common)
            }
            countries.sort()

            const formSelect= document.getElementById('form-select')
            const formSelectFragmet= document.createDocumentFragment()
                    
            for (let i=0; i<countries.length; i++) { 
                const countryName= document.createElement('option')
                countryName.innerText= countries[i]
                formSelectFragmet.appendChild(countryName)
            }

            formSelect.appendChild(formSelectFragmet) 
        })
}

