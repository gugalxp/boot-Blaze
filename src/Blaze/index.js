import axios from "axios";
import { Telegraf, Telegram } from "telegraf";

    function startRobo() {
       axios.get('https://api2.minhablaze.com.br/api/v1/result/double')

        .then( function     (response) {
            response => response.json()
            let resultados = response.data.results;
            let tamanho = resultados.length;
            let casa = 15;
            let indice = tamanho - casa;
            let cor = resultados[indice].color;
          
            return execute(cor);

        })
        .catch((err) => {
            console.error(err);
        })
    }

    function execute(cor) {
        switch (cor) {
        case 1 : 
                    cor = "Vermelho"
            break;
        case 2 : 
                    cor = "Preto"
            break;
        case 0 : 
                    cor = "Branco"
            break;
        }   

        telegram(cor);
        console.log(cor);
    }

    function telegram(cor) {
        const bot = new Telegraf("5919311963:AAGt16CMPOcNjk_I0gcvK9FPFQ4YTaUs_-E");

        if (cor == "Vermelho") {
            bot.telegram.sendMessage(-1001677942242, "VERMELHOOO");
        }

        if (cor == "Preto") {
            bot.telegram.sendMessage(-1001677942242, "PRETOOOO");
        }

        if (cor == "Branco") {
            bot.telegram.sendMessage(-1001677942242, "BRANCOOOO");
        }
    }

    setInterval(() => {
        startRobo();
        telegram();
    }, 30000)

   
    

  // // const bot = new Telegraf("5919311963:AAGt16CMPOcNjk_I0gcvK9FPFQ4YTaUs_-E");
// // bot.telegram.sendMessage(1159964065, "bora ganhar dinheiro");
// // bot.start((ctx) => ctx.reply('Welcome'));
// // bot.help((ctx) => ctx.reply('Send me a sticker'));
// // bot.on('sticker', (ctx) => ctx.reply('👍'));
// // bot.hears('hi', (ctx) => ctx.reply('Hey there'));
// // bot.launch();