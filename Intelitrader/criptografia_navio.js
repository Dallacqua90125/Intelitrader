class Criptografador {
    constructor(mensagem) {
        this.mensagem = mensagem;
        this.mensagemDesencriptada = this.desencriptar(mensagem);
    }

    inverte2ultimos(byte) {
        let stringBinaria = byte.toString(2).padStart(8, '0');
        let binarioInver
        if (stringBinaria.charAt(6) === '0') {
             binarioInver = stringBinaria.substring(0, 6) + '1' + stringBinaria.charAt(7);
        } else{
             binarioInver = stringBinaria.substring(0, 6) + '0' + stringBinaria.charAt(7);
        }
        if (stringBinaria.charAt(7) === '0') {
             binarioInver = binarioInver.substring(0, 7) + '1';
        }else{
             binarioInver = binarioInver.substring(0, 7) + '0';
        }

        return parseInt(binarioInver, 2)
        
    }

    trocar4Bits(byte) {
        let stringBinaria = byte.toString(2).padStart(8, '0');
        let binarioTrocado = stringBinaria.slice(4) + stringBinaria.slice(0, 4);
        return parseInt(binarioTrocado, 2);
    }

    desencriptar(mensagem) {
        let bytes = mensagem.split(' ').map(b => parseInt(b, 2));

        let desencriptado = bytes.map(byte => {
            byte = this.inverte2ultimos(byte);
            byte = this.trocar4Bits(byte);
            return byte;
        });

        let mensagemDesencriptada = String.fromCharCode(...desencriptado);
        return mensagemDesencriptada;
    }
}

let mensagem = "10010110 11110111 01010110 00000001 00010111 00100110 01010111 00000001 00010111 01110110 01010111 00110110 11110111 11010111 01010111 00000011";

let criptografador = new Criptografador(mensagem);

console.log(criptografador.mensagemDesencriptada);
