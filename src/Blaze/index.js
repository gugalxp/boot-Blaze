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
            let cor = resultados[indice].color;

            return telegram(roll, rollAnterior, cor);

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


    function telegram(rollAnterior, cor) {
        let roll = 13;

        console.log("local Atual", roll)
        console.log("local Anterior", rollAnterior)
        console.log("COR", cor)

        const bot = new Telegraf("5919311963:AAGt16CMPOcNjk_I0gcvK9FPFQ4YTaUs_-E");

        let hora = new Date().getHours();
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

        //GALE
        
        let minutesRegraOnzeGale1 = new Date().getMinutes() + 12;
        let minutesRegraOitoGale1 = new Date().getMinutes() + 6;
        let minutesRegraNoveGale1 = new Date().getMinutes() + 8;
        let minutesRegraDezGale1 = new Date().getMinutes() + 10;
        let minutesRegraDozeGale1 = new Date().getMinutes() + 14;
        let minutesRegraTrezeGale1 = new Date().getMinutes() + 16;

        let horaCompletaRegraOnzeGale1 = hora + ':' + minutesRegraOnzeGale1;
        let horaCompletaRegraOitoGale1 = hora + ':' + minutesRegraOitoGale1;
        let horaCompletaRegraNoveGale1 = hora + ':' + minutesRegraNoveGale1;
        let horaCompletaRegraDezGale1 = hora + ':' + minutesRegraDezGale1;
        let horaCompletaRegraDozeGale1 = hora + ':' + minutesRegraDozeGale1;
        let horaCompletaRegraTrezeGale1 = hora + ':' + minutesRegraTrezeGale1;

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

        //TREEEEEEZE 13

        if (roll === 13 && rollAnterior != 13) {
            console.log("PALPITE DE SINAL")        
            bot.telegram.sendMessage(-1001677942242, `<b>Palpite Sinal 📊</b> \n\n⏰HORÁRIO: ${horaCompletaRegraTreze} \n\n💎Entrada: 🔴 + ⚪️ \n\n✅ G1 \n\n✅ G2 (opcional)`, { parse_mode: 'HTML'});
            
            setTimeout(() => {
                if (cor === "Vermelho") {
                    bot.telegram.sendMessage(-1001677942242, "SINAL VENCEDOR");
                } else if (cor !== "Vermelho") {
                    bot.telegram.sendMessage(-1001677942242, `<b>Palpite Sinal G1 📊</b> \n\n⏰HORÁRIO: ${horaCompletaRegraTrezeGale1} \n\n💎Entrada: 🔴 + ⚪️ \n\n✅ G1 \n\n✅ G2 (opcional)`, { parse_mode: 'HTML'});
                    setTimeout(() => {
                        if (cor === "Vermelho") {
                            bot.telegram.sendMessage(-1001677942242, "SINAL VENCEDOR");
                        } else if (cor !== "Vermelho") {
                            bot.telegram.sendMessage(-1001677942242, `<b>Palpite Sinal G2 📊</b> \n\n⏰HORÁRIO: ${horaCompletaRegraTreze} \n\n💎Entrada: 🔴 + ⚪️ \n\n✅ G1 \n\n✅ G2 (opcional)`, { parse_mode: 'HTML'});
                            setTimeout(() => {
                                if (cor === "Vermelho") {
                                    bot.telegram.sendMessage(-1001677942242, "SINAL VENCEDOR");
                                } else {
                                    bot.telegram.sendMessage(-1001677942242, "LOSSSSSSSSSSSSSSS");
                                }
                            }, 10000);
                        }
                    }, 10000);
                }
            }, 10000); //480000
        }

        //DOZZZZZZZE 12

        if (roll === 12 && rollAnterior != 12) {
            console.log("PALPITE DE SINAL")        
            bot.telegram.sendMessage(-1001677942242, `<b>Palpite Sinal 📊</b> \n\n⏰HORÁRIO: ${horaCompletaRegraDoze} \n\n💎Entrada: ⚫ + ⚪️ \n\n✅ G1 \n\n✅ G2 (opcional)`, { parse_mode: 'HTML'});
            
            setTimeout(() => {
                if (cor === "Preto") {
                    bot.telegram.sendMessage(-1001677942242, "SINAL VENCEDOR");
                } else if (cor !== "Preto") {
                    bot.telegram.sendMessage(-1001677942242, `<b>Palpite Sinal G1 📊</b> \n\n⏰HORÁRIO: ${horaCompletaRegraDozeGale1} \n\n💎Entrada: ⚫ + ⚪️ \n\n✅ G1 \n\n✅ G2 (opcional)`, { parse_mode: 'HTML'});
                    setTimeout(() => {
                        if (cor === "Preto") {
                            bot.telegram.sendMessage(-1001677942242, "SINAL VENCEDOR");
                        } else if (cor !== "Preto") {
                            bot.telegram.sendMessage(-1001677942242, `<b>Palpite Sinal G2 📊</b> \n\n⏰HORÁRIO: ${horaCompletaRegraDoze} \n\n💎Entrada: ⚫ + ⚪️ \n\n✅ G1 \n\n✅ G2 (opcional)`, { parse_mode: 'HTML'});
                            setTimeout(() => {
                                if (cor === "Preto") {
                                    bot.telegram.sendMessage(-1001677942242, "SINAL VENCEDOR");
                                } else {
                                    bot.telegram.sendMessage(-1001677942242, "LOSSSSSSSSSSSSSSS");
                                }
                            }, 420000);
                        }
                    }, 420000);
                }
            }, 420000);
        }
        
        //DEZZZZZZZ 10
        
        if (roll === 10 && rollAnterior != 10) {
            console.log("PALPITE DE SINAL")        
            bot.telegram.sendMessage(-1001677942242, `<b>Palpite Sinal 📊</b> \n\n⏰HORÁRIO: ${horaCompletaRegraDez} \n\n💎Entrada: 🔴 + ⚪️ \n\n✅ G1 \n\n✅ G2 (opcional)`, { parse_mode: 'HTML'});
            
            setTimeout(() => {
                if (cor === "Vermelho") {
                    bot.telegram.sendMessage(-1001677942242, "SINAL VENCEDOR");
                } else if (cor !== "Vermelho") {
                    bot.telegram.sendMessage(-1001677942242, `<b>Palpite Sinal G1 📊</b> \n\n⏰HORÁRIO: ${horaCompletaRegraDezGale1} \n\n💎Entrada: 🔴 + ⚪️ \n\n✅ G1 \n\n✅ G2 (opcional)`, { parse_mode: 'HTML'});
                    setTimeout(() => {
                        if (cor === "Vermelho") {
                            bot.telegram.sendMessage(-1001677942242, "SINAL VENCEDOR");
                        } else if (cor !== "Vermelho") {
                            bot.telegram.sendMessage(-1001677942242, `<b>Palpite Sinal G2 📊</b> \n\n⏰HORÁRIO: ${horaCompletaRegraDez} \n\n💎Entrada: 🔴 + ⚪️ \n\n✅ G1 \n\n✅ G2 (opcional)`, { parse_mode: 'HTML'});
                            setTimeout(() => {
                                if (cor === "Vermelho") {
                                    bot.telegram.sendMessage(-1001677942242, "SINAL VENCEDOR");
                                } else {
                                    bot.telegram.sendMessage(-1001677942242, "LOSSSSSSSSSSSSSSS");
                                }
                            }, 300000);
                        }
                    }, 300000);
                }
            }, 300000);
        }

        //NOVEEEEEEEEEEEE 9
        
        if (roll === 9 && rollAnterior != 9) {
            console.log("PALPITE DE SINAL")        
            bot.telegram.sendMessage(-1001677942242, `<b>Palpite Sinal 📊</b> \n\n⏰HORÁRIO: ${horaCompletaRegraNove} \n\n💎Entrada: 🔴 + ⚪️ \n\n✅ G1 \n\n✅ G2 (opcional)`, { parse_mode: 'HTML'});
      
        setTimeout(() => {
            if (cor === "Vermelho") {
                bot.telegram.sendMessage(-1001677942242, "SINAL VENCEDOR");
            } else if (cor !== "Vermelho") {
                bot.telegram.sendMessage(-1001677942242, `<b>Palpite Sinal G1 📊</b> \n\n⏰HORÁRIO: ${horaCompletaRegraNoveGale1} \n\n💎Entrada: 🔴 + ⚪️ \n\n✅ G1 \n\n✅ G2 (opcional)`, { parse_mode: 'HTML'});
                setTimeout(() => {
                    if (cor === "Vermelho") {
                        bot.telegram.sendMessage(-1001677942242, "SINAL VENCEDOR");
                    } else if (cor !== "Vermelho") {
                        bot.telegram.sendMessage(-1001677942242, `<b>Palpite Sinal G2 📊</b> \n\n⏰HORÁRIO: ${horaCompletaRegraNove} \n\n💎Entrada: 🔴 + ⚪️ \n\n✅ G1 \n\n✅ G2 (opcional)`, { parse_mode: 'HTML'});
                        setTimeout(() => {
                            if (cor === "Vermelho") {
                                bot.telegram.sendMessage(-1001677942242, "SINAL VENCEDOR");
                            } else {
                                bot.telegram.sendMessage(-1001677942242, "LOSSSSSSSSSSSSSSS");
                            }
                        }, 240000);
                    }
                }, 240000);
            }
        }, 240000);
    }
    
        //OIIIIIIIIIITO 8
        
        if (roll === 8 && rollAnterior != 8) {
            console.log("PALPITE DE SINAL")        
            bot.telegram.sendMessage(-1001677942242, `<b>Palpite Sinal 📊</b> \n\n⏰HORÁRIO: ${horaCompletaRegraOito} \n\n💎Entrada: ⚫ + ⚪️ \n\n✅ G1 \n\n✅ G2 (opcional)`, { parse_mode: 'HTML'});
      
        setTimeout(() => {
            if (cor === "Preto") {
                bot.telegram.sendMessage(-1001677942242, "SINAL VENCEDOR");
            } else if (cor !== "Preto") {
                bot.telegram.sendMessage(-1001677942242, `<b>Palpite Sinal G1 📊</b> \n\n⏰HORÁRIO: ${horaCompletaRegraOitoGale1} \n\n💎Entrada: ⚫ + ⚪️ \n\n✅ G1 \n\n✅ G2 (opcional)`, { parse_mode: 'HTML'});
                setTimeout(() => {
                    if (cor === "Preto") {
                        bot.telegram.sendMessage(-1001677942242, "SINAL VENCEDOR");
                    } else if (cor !== "Preto") {
                        bot.telegram.sendMessage(-1001677942242, `<b>Palpite Sinal G2 📊</b> \n\n⏰HORÁRIO: ${horaCompletaRegraOito} \n\n💎Entrada: ⚫ + ⚪️ \n\n✅ G1 \n\n✅ G2 (opcional)`, { parse_mode: 'HTML'});
                        setTimeout(() => {
                            if (cor === "Preto") {
                                bot.telegram.sendMessage(-1001677942242, "SINAL VENCEDOR");
                            } else {
                                bot.telegram.sendMessage(-1001677942242, "LOSSSSSSSSSSSSSSS");
                            }
                        }, 180000);
                    }
                }, 180000);
            }
        }, 180000);
    }

        // ONZEEEEEEEEEEE 11
        if (roll === 11 && rollAnterior != 11) {
                console.log("PALPITE DE SINAL")        
                bot.telegram.sendMessage(-1001677942242, `<b>Palpite Sinal 📊</b> \n\n⏰HORÁRIO: ${horaCompletaRegraOnze} \n\n💎Entrada: ⚫ + ⚪️ \n\n✅ G1 \n\n✅ G2 (opcional)`, { parse_mode: 'HTML'});
          
            setTimeout(() => {
                if (cor === "Preto") {
                    bot.telegram.sendMessage(-1001677942242, "SINAL VENCEDOR");
                } else if (cor !== "Preto") {
                    bot.telegram.sendMessage(-1001677942242, `<b>Palpite Sinal G1 📊</b> \n\n⏰HORÁRIO: ${horaCompletaRegraOnzeGale1} \n\n💎Entrada: ⚫ + ⚪️ \n\n✅ G1 \n\n✅ G2 (opcional)`, { parse_mode: 'HTML'});
                    setTimeout(() => {
                        if (cor === "Preto") {
                            bot.telegram.sendMessage(-1001677942242, "SINAL VENCEDOR");
                        } else if (cor !== "Preto") {
                            bot.telegram.sendMessage(-1001677942242, `<b>Palpite Sinal G2 📊</b> \n\n⏰HORÁRIO: ${horaCompletaRegraOnze} \n\n💎Entrada: ⚫ + ⚪️ \n\n✅ G1 \n\n✅ G2 (opcional)`, { parse_mode: 'HTML'});
                            setTimeout(() => {
                                if (cor === "Preto") {
                                    bot.telegram.sendMessage(-1001677942242, "SINAL VENCEDOR");
                                } else {
                                    bot.telegram.sendMessage(-1001677942242, "LOSSSSSSSSSSSSSSS");
                                }
                            }, 360000);
                        }
                    }, 360000);
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