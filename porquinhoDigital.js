var PorquinhoDigital = /** @class */ (function () {
    function PorquinhoDigital(saldo, objetivo) {
        this.saldo = saldo;
        this.objetivo = objetivo;
    }
    ;
    PorquinhoDigital.prototype.depositar = function () {
        var calculo = this.saldo + 100;
        console.log("Se voc\u00EA colocar R$100,00 no seu cofrinho, ele ficara com R$".concat(calculo, " pois ele ja tinha R$").concat(this.saldo));
        return calculo;
    };
    ;
    PorquinhoDigital.prototype.retirar = function (calculo) {
        var resultadoSub = 90;
        var subitrair = calculo - resultadoSub;
        if (subitrair < 0) {
            console.log("não há saldo suficiente");
        }
        else {
            console.log("Se voc\u00EA por acaso retirar R$".concat(resultadoSub, " de seu cofrinho, voc\u00EA ficar\u00E1 com R$").concat(subitrair));
        }
        return subitrair;
    };
    ;
    PorquinhoDigital.prototype.definirObjetivo = function (novoObjetivo) {
        console.log("Seu novo objetivo \u00E9 R$".concat(novoObjetivo));
        return this.objetivo = novoObjetivo;
    };
    ;
    PorquinhoDigital.prototype.verificarProgresso = function (novoObjetivo, calculo) {
        var verificarNewObjetivo = novoObjetivo - calculo;
        console.log("para alcan\u00E7ar seu objetivo falta R$".concat(verificarNewObjetivo));
        return verificarNewObjetivo;
    };
    return PorquinhoDigital;
}());
;
var porquinho = new PorquinhoDigital(10, 1000);
porquinho.depositar();
var subtracao = porquinho.retirar(110);
var newObjetivo = porquinho.definirObjetivo(10000);
var progresso = porquinho.verificarProgresso(10000, 110);
