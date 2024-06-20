class Livros {
    constructor(array) {
        this.array = array;
    }

    main() {
        const result = [];
        for (let i = 0; i < this.array.length; i += 4) {
            const group = {
                posicao: this.array[i],
                acao: this.array[i + 1],
                valores: this.array[i + 2],
                quantidade: this.array[i + 3]
            };
            if (group.acao === 0) {
                this.acao0(result, group);
            } else if (group.acao === 1) {
                this.acao1(result, group);
            } else if (group.acao === 2) {
                this.acao2(result, group);
            }
        }
        return result;
    }

    acao0(result, group) {
        if (!this.verificarPosicao(result, group)) {
            result.push(group);
        }
    }

    acao1(result, group) {
        for (let i = 0; i < result.length; i++) {
            if (result[i].posicao === group.posicao) {
                if (group.quantidade === 0) {
                    group.quantidade = result[i].quantidade;
                } else {
                    result[i].quantidade = group.quantidade;
                }
                if (group.valores === 0) {
                    group.valores = result[i].valores;
                } else {
                    result[i].valores = group.valores;
                }
                return;
            }
        }
    }

    acao2(result, group) {
        for (let i = 0; i < result.length; i++) {
            if (result[i].posicao === group.posicao) {
                result.splice(i, 1);
                this.realinharPosicoes(result);
                return;
            }
        }
    }

    verificarPosicao(result, group) {
        for (let i = 0; i < result.length; i++) {
            if (result[i].posicao === group.posicao) {
                result[i] = group;
                return true;
            }
        }
        return false;
    }

    realinharPosicoes(result) {
        for (let i = 0; i < result.length; i++) {
            result[i].posicao = i + 1;
        }
    }
}

const array = [
    1, 0, 15.4, 50,
    2, 0, 15.5, 50,
    2, 2, 0, 0,
    2, 0, 15.4, 10,
    3, 0, 15.9, 30,
    3, 1, 0, 20,
    4, 0, 16.50, 200,
    5, 0, 17.00, 100,
    5, 0, 16.59, 20,
    6, 2, 0, 0,
    1, 2, 0, 0,
    2, 1, 15.6, 0
];

const livros = new Livros(array);
const livrosP = livros.main();
livrosP.forEach(item => {
    console.log(`${item.posicao},${item.valores},${item.quantidade}`);
});
