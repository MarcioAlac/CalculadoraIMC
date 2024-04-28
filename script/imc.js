// class e uma classe um objeto que a gente pode abstrair da vida real 
// neste caso a gente vai abstrair uma calculadora da vida real 
// a gente define a class isso ak nao e HTMl nem css, é o mais proximo de uma lingagugem de programacao de vdd 

class CalculadoraImc
{   
    constructor()
    {
        this.request_user()
        
    }
    
    calculo(alt, pes)
    {
        // imc = peso/altura²
        let calc =  (pes / alt**2) * 10000
        // console.log(calc)
        return calc
    }

    request_user()
    { 
        document.querySelector('form').addEventListener('submit', function (e)
        {
            e.preventDefault()

            const nome = document.querySelector('#user-name').value
            const idade = document.querySelector('#user-age').value
            
            // height = altura 
            const altura = document.querySelector('#user-height').value
            const peso = document.querySelector('#user-weight').value
            
           
            console.log
            ( 
                'nome: '  +  nome + '\n' + 
                'idade: ' +  idade + '\n' + 
                'altura: ' + altura + '\n' +
                'peso: ' + peso
            ) 

            var calculo = this.calculo(altura, peso)
            this.show()
            this.print_result(calculo, nome, idade)
            this.close()

        }.bind(this))
    }

    show()
    {
        document.querySelector('.result').style.display = 'flex'
    }

    print_result(calc, name, idade)
    {
        document.querySelector('#result').textContent = calc.toFixed(1)
        document.querySelector('#res-nome').textContent = name
        document.querySelector('#res-idade').textContent = idade
    }

    close()
    {
        console.log(123)
        document.querySelector('.result').addEventListener('click', function (e)
    {
        document.querySelector('.result').style.display = 'none'
    })
    }
}


var imc = new CalculadoraImc 