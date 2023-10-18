class PorquinhoDigital{
    saldo: number;
    objetivo: number;

    constructor(saldo: number, objetivo: number){
        this.saldo = saldo;
        this.objetivo = objetivo;
    };

    depositar(): number {
        var calculo = this.saldo + 100
        console.log(`Se você colocar R$100,00 no seu cofrinho, ele ficara com R$${calculo} pois ele ja tinha R$${this.saldo}`)
        return calculo
    };

    retirar(calculo): number {
        var resultadoSub = 90
        var subitrair = calculo - resultadoSub
        if(subitrair < 0) {
            console.log("não há saldo suficiente")
        }else{
            console.log(`Se você por acaso retirar R$${resultadoSub} de seu cofrinho, você ficará com R$${subitrair}`)
        }
        return subitrair
    };

    definirObjetivo(novoObjetivo): number {
        console.log(`Seu novo objetivo é R$${novoObjetivo}`)
        return this.objetivo = novoObjetivo
    };

    verificarProgresso(novoObjetivo, calculo): number{
        var verificarNewObjetivo = novoObjetivo - calculo
        console.log(`para alcançar seu objetivo falta R$${verificarNewObjetivo}`)
        return verificarNewObjetivo
    }
};

let porquinho = new PorquinhoDigital(10, 1000);
porquinho.depositar();

let subtracao = porquinho.retirar(110)

let newObjetivo = porquinho.definirObjetivo(10000)

let progresso = porquinho.verificarProgresso(10000, 110)