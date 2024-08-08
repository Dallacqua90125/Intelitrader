class Distancia {
    constructor() {
        this.array1 = [];
        this.array2 = [];
    }
    criarArray(){
        for (let i = 1; i < 20; i++) {
            if (i === 10) {
                input = prompt(`${i} numero da primeira array`)
                number = parseInt(input);
                if (!isNaN(number)) {
                    this.array1.push(number)
                    break;
                }else {
                    alert('insira um número');
                    i =- 1;
                }
            }if (i === 11) {
                input = prompt(`${i} numero da segunda array`)
                number = parseInt(input);
                if (!isNaN(number)) {
                    this.array2.push(number)
                    break;
                }else {
                    alert('insira um número');
                    i =- 1;
                }
            }
            
        }
    }
    menorEntreDuasArray() {
        let menorDistancia = Infinity;
        let menorNumero1 = null;
        let menorNumero2 = null;

        for (let i = 0; i < this.array1.length; i++) {
            for (let j = 0; j < this.array2.length; j++) {
                let distancia = Math.abs(this.array1[i] - this.array2[j]);
                if (distancia < menorDistancia) {
                    menorDistancia = distancia;
                    menorNumero1 = this.array1[i];
                    menorNumero2 = this.array2[j];
                }
            }
        }
        return [menorDistancia, menorNumero1, menorNumero2];
    }

}


const distancia = new Distancia;

const Array = distancia.criarArray;

const resultadoDeCadaArray = distancia.menorEntreDuasArray()

console.log(`Menor distância entre os dois arrays é: ${resultadoDeCadaArray[0]} entre ${resultadoDeCadaArray[1]} e ${resultadoDeCadaArray[2]}`);