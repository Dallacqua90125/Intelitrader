class Distancia {
    constructor(array1, array2) {
        this.array1 = array1;
        this.array2 = array2;
    }

    menorDeCadaArray() {
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

    menor() {
        let menorDistancia = Infinity;
        let menorNumero1 = null;
        let menorNumero2 = null;

        for (let i = 0; i < this.array1.length; i++) {
            for (let j = i + 1; j < this.array1.length; j++) {
                let distancia = Math.abs(this.array1[i] - this.array1[j]);
                if (distancia < menorDistancia) {
                    menorDistancia = distancia;
                    menorNumero1 = this.array1[i];
                    menorNumero2 = this.array1[j];
                }
            }
        }

        for (let i = 0; i < this.array2.length; i++) {
            for (let j = i + 1; j < this.array2.length; j++) {
                let distancia = Math.abs(this.array2[i] - this.array2[j]);
                if (distancia < menorDistancia) {
                    menorDistancia = distancia;
                    menorNumero1 = this.array2[i];
                    menorNumero2 = this.array2[j];
                }
            }
        }
        return [menorDistancia, menorNumero1, menorNumero2];
    }
    
    menorAll() {
        let resultadoMenor = this.menor();
        let resultadoDeCadaArray = this.menorDeCadaArray();

        if (resultadoDeCadaArray[0] < resultadoMenor[0]) {
            return resultadoDeCadaArray;
        } else {
            return resultadoMenor;
        }
    }
}

const array1 = [10, 22, 35, 47, 53, 66, 78, 89, 94, 105];
const array2 = [5, 18, 29, 34, 50, 63, 77, 77, 93, 101];

const distancia = new Distancia(array1, array2);

const resultadoDeCadaArray = distancia.menorDeCadaArray();
const resultadoMenor = distancia.menor();
const resultadoAll = distancia.menorAll();

console.log(`Menor distância entre os dois arrays é: ${resultadoDeCadaArray[0]} entre ${resultadoDeCadaArray[1]} e ${resultadoDeCadaArray[2]}`);
console.log(`Menor distância dentro de cada array é: ${resultadoMenor[0]} entre ${resultadoMenor[1]} e ${resultadoMenor[2]}`);
console.log(`Menor distância global é: ${resultadoAll[0]} entre ${resultadoAll[1]} e ${resultadoAll[2]}`);
