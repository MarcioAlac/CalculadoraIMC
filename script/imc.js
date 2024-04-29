// class e uma classe um objeto que a gente pode abstrair da vida real 
// neste caso a gente vai abstrair uma calculadora da vida real 
// a gente define a class isso ak nao e HTMl nem css, é o mais proximo de uma lingagugem de programacao de vdd 

class CalculadoraImc
{   
    constructor()
    {
        this.request_user()
        this.popup = new PopUpImc
        
    }

    textAdd(name, age, imc)
    {
        console.log(imc)
        let userName = document.querySelector('#nome')
        userName.textContent = name
        document.querySelector('#age').textContent = age
        document.querySelector('#imc-result').innerText = imc
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
            this.textAdd(nome, idade, calculo)

        }.bind(this))
    }
}

class PopUpImc
{
    constructor()
    {
        console.log('popUP')
        this.show()
        this.close()
    }   

    close()
    {
        document.querySelector('#close').addEventListener('click', function ()
        {
            console.log('clock')
            document.querySelector('.result').classList.remove('show')
            document.querySelector('.result').classList.add('close')
        })
    }

    show()
    {
        document.querySelector('.imc-btn').addEventListener('click', function ()
        {
            document.querySelector('.result').classList.add('show')
        })
    }
}

var imc = new CalculadoraImc 