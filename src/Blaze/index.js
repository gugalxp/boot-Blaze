import axios from "axios";
import { Telegraf } from "telegraf";


    function startRobo() {
       axios.get('https://api2.minhablaze.com.br/api/v1/result/double')

        .then( function (response) {
            response => response.json()
            let resultados = response.data.results;
            let tamanho = resultados.length;
            let casa = 1; 
            let indice = tamanho - casa;
            let roll = resultados[indice].roll;
            let casaAnterior = 2; 
            let indiceAnterior = tamanho - casaAnterior;
            let rollAnterior = resultados[indiceAnterior].roll;
          
            return telegram(roll);

        })
        .catch((err) => {
            console.error(err);
        })
    }

    // function execute(roll, rollAnterior) {

    //     // telegram(roll);
    //     console.log("Casa Atual", roll)
    //     console.log("Casa Anterior", rollAnterior)
    // }


    function telegram(rolle) {

        let hora = new Date().getHours();
        let seconds = new Date().getSeconds();
        let minutesRegraOnze = new Date().getMinutes() + 6;
        let minutesRegraOito = new Date().getMinutes() + 3;
        let minutesRegraNove = new Date().getMinutes() + 4;
        let minutesRegraDez = new Date().getMinutes() + 5;
        let minutesRegraDoze = new Date().getMinutes() + 7;
        let minutesRegraTreze = new Date().getMinutes() + 8;

        let horaCompletaRegraOnze = hora + ':' + minutesRegraOnze;
        let horaCompletaRegraOito = hora + ':' + minutesRegraOito;
        let horaCompletaRegraNove = hora + ':' + minutesRegraNove;
        let horaCompletaRegraDez = hora + ':' + minutesRegraDez;
        let horaCompletaRegraDoze = hora + ':' + minutesRegraDoze;
        let horaCompletaRegraTreze = hora + ':' + minutesRegraTreze;
        let roll = 11;
        if (roll === 11) {

            const bot = new Telegraf("5919311963:AAGt16CMPOcNjk_I0gcvK9FPFQ4YTaUs_-E");
                console.log("PALPITE DE SINAL")        
                bot.telegram.sendMessage(-1001677942242, `<b>Palpite Sinal 📊</b> \n\n⏰HORÁRIO: ${horaCompletaRegraOnze} \n\n💎Entrada: ⚫ + ⚪️ \n\n✅ G1 \n\n✅ G2 (opcional)`, { parse_mode: 'HTML'});
          
            setTimeout(() => {
                if (roll === 11) {
                    bot.telegram.sendMessage(-1001677942242, "SINAL VENCEDOR TESTE");
                    startRobo();
                }
            }, 360000);
        }


            // bot.telegram.sendPhoto(-1001677942242, "SINAL VENCEDOR TESTE");

        // if (cor == "Vermelho") {
        //     bot.telegram.sendMessage(-1001677942242, "VERMELHOOO");
        // }

        // if (cor == "Preto") {
        // }

        // if (cor == "Branco") {
        //     bot.telegram.sendMessage(-1001677942242, "BRANCOOOO");
        // }
    }

    // setInterval(() => {
        startRobo();
    // }, 5000)

   
// // bot.telegram.sendMessage(1159964065, "bora ganhar dinheiro");
// // bot.start((ctx) => ctx.reply('Welcome'));
// // bot.help((ctx) => ctx.reply('Send me a sticker'));
// // bot.on('sticker', (ctx) => ctx.reply('👍'));
// // bot.hears('hi', (ctx) => ctx.reply('Hey there'));
// // bot.launch();