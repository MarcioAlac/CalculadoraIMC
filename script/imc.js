// class e uma classe um objeto que a gente pode abstrair da vida real 
// neste caso a gente vai abstrair uma calculadora da vida real 
// a gente define a class isso ak nao e HTMl nem css, é o mais proximo de uma lingagugem de programacao de vdd 

class CalculadoraImc {

    constructor()
    {
        this.formSubmit()
    }

    formSubmit() {
        document.querySelector('form').addEventListener('submit', function(event) {
            event.preventDefault();
            console.log(event);
        });
    }
}

const IMC = new CalculadoraImc();

