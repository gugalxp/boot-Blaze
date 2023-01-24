import axios from "axios";
import { Telegraf } from "telegraf";

let resultados;
const bot = new Telegraf("5919311963:AAGt16CMPOcNjk_I0gcvK9FPFQ4YTaUs_-E");


function startRobo() {
  axios
    .get("https://api2.minhablaze.com.br/api/v1/result/double")

    .then(function (response) {
      (response) => response.json();
      resultados = response.data.results;
      let tamanho = resultados.length;
      let casa = 1;
      let indice = tamanho - casa;
      let roll = resultados[indice].roll;
      let casaAnterior = 2;
      let indiceAnterior = tamanho - casaAnterior;
      let rollAnterior = resultados[indiceAnterior].roll;
      let cor = resultados[indice].color;

      // setInterval(() => {
      //   // Faz a requisição para verificar se os dados foram atualizados
      //   axios.get('https://api2.minhablaze.com.br/api/v1/result/double')
      //     .then(json => {

      //       // Verifica se os dados foram atualizados
      //       if (json !== resultados) {  
      //         console.log('Dados atualizados!');
      //         if (roll !== 11 || roll !== 8 || roll !== 9 || roll !== 10 || roll !== 12 || roll !== 13) {
      //           setTimeout(() => {
      //             startRobo()
      //           }, 60000);
      //         } 
      //       } else {
      //         console.log('Dados não atualizados.');
      //       }
      //     });
      // }, 15000);
    
        return telegram(roll, rollAnterior, cor);
    })
    .catch((err) => {
      console.error(err);
    });
}

  //ONZE
  const dataOnze = new Date();
  dataOnze.setSeconds(dataOnze.getSeconds() + 0);
  dataOnze.setMinutes(dataOnze.getMinutes() + 6);
  dataOnze.setHours(dataOnze.getHours() + 0);

  const dataOnzeG1 = new Date();
  dataOnzeG1.setSeconds(dataOnzeG1.getSeconds() + 0);
  dataOnzeG1.setMinutes(dataOnzeG1.getMinutes() + 12);
  dataOnzeG1.setHours(dataOnzeG1.getHours() + 0);

  const dataOnzeG2 = new Date();
  dataOnzeG2.setSeconds(dataOnzeG2.getSeconds() + 0);
  dataOnzeG2.setMinutes(dataOnzeG2.getMinutes() + 18);
  dataOnzeG2.setHours(dataOnzeG2.getHours() + 0);

  //OITO
  const dataOito = new Date();
  dataOito.setSeconds(dataOito.getSeconds() + 0);
  dataOito.setMinutes(dataOito.getMinutes() + 3);
  dataOito.setHours(dataOito.getHours() + 0);

  const dataOitoG1 = new Date();
  dataOitoG1.setSeconds(dataOitoG1.getSeconds() + 0);
  dataOitoG1.setMinutes(dataOitoG1.getMinutes() + 6);
  dataOitoG1.setHours(dataOitoG1.getHours() + 0);

  const dataOitoG2 = new Date();
  dataOitoG2.setSeconds(dataOitoG2.getSeconds() + 0);
  dataOitoG2.setMinutes(dataOitoG2.getMinutes() + 9);
  dataOitoG2.setHours(dataOitoG2.getHours() + 0);

  //NOVE
  const dataNove = new Date();
  dataNove.setSeconds(dataNove.getSeconds() + 0);
  dataNove.setMinutes(dataNove.getMinutes() + 4);
  dataNove.setHours(dataNove.getHours() + 0);

  const dataNoveG1 = new Date();
  dataNoveG1.setSeconds(dataNoveG1.getSeconds() + 0);
  dataNoveG1.setMinutes(dataNoveG1.getMinutes() + 8);
  dataNoveG1.setHours(dataNoveG1.getHours() + 0);

  const dataNoveG2 = new Date();
  dataNoveG2.setSeconds(dataNoveG2.getSeconds() + 0);
  dataNoveG2.setMinutes(dataNoveG2.getMinutes() + 12);
  dataNoveG2.setHours(dataNoveG2.getHours() + 0);

  //DEZ
  const dataDez = new Date();
  dataDez.setSeconds(dataDez.getSeconds() + 0);
  dataDez.setMinutes(dataDez.getMinutes() + 5);
  dataDez.setHours(dataDez.getHours() + 0);

  const dataDezG1 = new Date();
  dataDezG1.setSeconds(dataDezG1.getSeconds() + 0);
  dataDezG1.setMinutes(dataDezG1.getMinutes() + 10);
  dataDezG1.setHours(dataDezG1.getHours() + 0);

  const dataDezG2 = new Date();
  dataDezG2.setSeconds(dataDezG2.getSeconds() + 0);
  dataDezG2.setMinutes(dataDezG2.getMinutes() + 15);
  dataDezG2.setHours(dataDezG2.getHours() + 0);

  //DOZE
  const dataDoze = new Date();
  dataDoze.setSeconds(dataDoze.getSeconds() + 0);
  dataDoze.setMinutes(dataDoze.getMinutes() + 7);
  dataDoze.setHours(dataDoze.getHours() + 0);

  const dataDozeG1 = new Date();
  dataDozeG1.setSeconds(dataDozeG1.getSeconds() + 0);
  dataDozeG1.setMinutes(dataDozeG1.getMinutes() + 14);
  dataDozeG1.setHours(dataDozeG1.getHours() + 0);

  const dataDozeG2 = new Date();
  dataDozeG2.setSeconds(dataDozeG2.getSeconds() + 0);
  dataDozeG2.setMinutes(dataDozeG2.getMinutes() + 21);
  dataDozeG2.setHours(dataDozeG2.getHours() + 0);

  //TREZE
  const dataTreze = new Date();
  dataTreze.setSeconds(dataTreze.getSeconds() + 0);
  dataTreze.setMinutes(dataTreze.getMinutes() + 8);
  dataTreze.setHours(dataTreze.getHours() + 0);

  const dataTrezeG1 = new Date();
  dataTrezeG1.setSeconds(dataTrezeG1.getSeconds() + 0);
  dataTrezeG1.setMinutes(dataTrezeG1.getMinutes() + 16);
  dataTrezeG1.setHours(dataTrezeG1.getHours() + 0);

  const dataTrezeG2 = new Date();
  dataTrezeG2.setSeconds(dataTrezeG2.getSeconds() + 0);
  dataTrezeG2.setMinutes(dataTrezeG2.getMinutes() + 24);
  dataTrezeG2.setHours(dataTrezeG2.getHours() + 0);

function zeroFill(n) {
  return n < 9 ? `0${n}` : `${n}`;
}

function formatDate(date) {
  // const d = zeroFill(date.getDate());
  // const mo = zeroFill(date.getMonth() + 1);
  // const y = zeroFill(date.getFullYear());
  const h = zeroFill(date.getHours());
  const mi = zeroFill(date.getMinutes());
  // const s = zeroFill(date.getSeconds());

  return `${h}:${mi}`;
}

function telegram(roll, rollAnterior, cor) {
  console.log("local Atual", roll);
  console.log("local Anterior", rollAnterior);
  console.log("COR", cor);

  switch (cor) {
    case 1:
      cor = "Vermelho";
      break;
    case 2:
      cor = "Preto";
      break;
    case 0:
      cor = "Branco";
      break;
  }

  // 0

  if (roll === 0) {
    setTimeout(() => {
      startRobo();
      console.log("1")
    }, 20000); 
  }
  
  // 1

  if (roll === 1) {
    setTimeout(() => {
      startRobo();
      console.log("1")
    }, 20000); 
  }

  // 2

  if (roll === 2) {
    setTimeout(() => {
      startRobo();
      console.log("2")
    }, 20000); 
  }

  // 3

  if (roll === 3) {
    setTimeout(() => {
      startRobo();
      console.log("3")
    }, 20000); 
  }

  // 4

  if (roll === 4) {
    setTimeout(() => {
      startRobo();
      console.log("4")
    }, 20000); 
  }

  // 5

  if (roll === 5) {
    setTimeout(() => {
      startRobo();
      console.log("5")
    }, 20000); 
  }

  // 6

  if (roll === 6) {
    setTimeout(() => {
      startRobo();
      console.log("6")
    }, 20000); 
  }

  // 7

  if (roll === 7) {
    setTimeout(() => {
      startRobo();
      console.log("7")
    }, 20000); 
  }

  // 8

  if (roll === 8) {
    setTimeout(() => {
      startRobo();
      console.log("8")
    }, 20000); 
  }

  // 14

  if (roll === 14) {
    setTimeout(() => {
      startRobo();
      console.log("14")
    }, 20000); 
  }
  
  //TREZE

  if (roll === 13 && rollAnterior != 13) {
    processar_Treze(cor, roll, rollAnterior);
  }

  //DOZE

  if (roll === 12 && rollAnterior != 12) {
    processar_Doze(cor, roll, rollAnterior);
  }

  //DEZ

  if (roll === 10 && rollAnterior != 10) {
    processar_Dez(cor, roll, rollAnterior);
  }

  //NOVE
  if (roll === 9 && rollAnterior != 9) {
    processar_Nove(cor, roll, rollAnterior);
  }

  //SEIS

  if (roll === 6 && rollAnterior != 6) {
    processar_Seis(cor, roll, rollAnterior);
  }

  //OITO
  
  if (roll === 8 && rollAnterior != 8) {
    processar_Oito(cor, roll, rollAnterior);
  }

  //ONZE
  
  if (roll === 11 && rollAnterior != 11) {
    processar_Onze(cor, roll, rollAnterior);
  }

}

startRobo();
 
function processar_Treze(cor, roll, rollAnterior) {
  //     //TREEEEEEZE 13
  if (roll === 13 && rollAnterior != 13) {

    console.log("PALPITE DE SINAL");
    bot.telegram.sendMessage(
      -1001677942242,
      `<b>Palpite Sinal 📊</b> \n\n⏰HORÁRIO: ${formatDate(
        dataTreze
      )} \n\n💎Entrada: 🔴 + ⚪️ \n\n✅ G1 \n\n✅ G2 (opcional)`,
      { parse_mode: "HTML" }
    );

    setTimeout(() => {
      if (cor === "Vermelho") {
        bot.telegram.sendMessage(-1001677942242, "SINAL VENCEDOR");
        startRobo();
      } else if (cor !== "Vermelho") {
        bot.telegram.sendMessage(
          -1001677942242,
          `<b> G1 📊</b> \n\n⏰HORÁRIO: ${formatDate(
            dataTrezeG1
          )} \n\n💎Entrada: 🔴 + ⚪️ \n\n✅ G1 \n\n✅ G2 (opcional)`,
          { parse_mode: "HTML" }  
        );
          if (cor === "Vermelho") {
            bot.telegram.sendMessage(-1001677942242, "SINAL VENCEDOR");
            startRobo();
          } else if (cor !== "Vermelho") {
            bot.telegram.sendMessage(
              -1001677942242,
              `<b> G2 📊</b> \n\n⏰HORÁRIO: ${formatDate(
                dataTrezeG2
              )} \n\n💎Entrada: 🔴 + ⚪️ \n\n✅ G1 \n\n✅ G2 (opcional)`,
              { parse_mode: "HTML" }
            );
              if (cor === "Vermelho") {
                bot.telegram.sendMessage(-1001677942242, "SINAL VENCEDOR");
                startRobo();
              } else {
                bot.telegram.sendMessage(-1001677942242, "LOSSSSSSSSSSSSSSS");
                startRobo();
              }
          }
      }
    }, 480000); //
  }  else {
      setTimeout(() => {
        startRobo();
      }, 20000);
  }
}

function processar_Doze(cor, roll, rollAnterior) {
  //     //DOZZZZZZZE 12
  if (roll === 12 && rollAnterior != 12) {

    console.log("PALPITE DE SINAL");
    bot.telegram.sendMessage(
      -1001677942242,
      `<b>Palpite Sinal 📊</b> \n\n⏰HORÁRIO: ${formatDate(dataDoze)} \n\n💎Entrada: ⚫ + ⚪️ \n\n✅ G1 \n\n✅ G2 (opcional)`,
      { parse_mode: "HTML" }
    );

    setTimeout(() => {
      if (cor === "Preto") {
        bot.telegram.sendMessage(-1001677942242, "SINAL VENCEDOR");
        startRobo();
      } else if (cor !== "Preto") {
        bot.telegram.sendMessage(
          -1001677942242,
          `<b> G1 📊</b> \n\n⏰HORÁRIO: ${formatDate(dataDozeG1)} \n\n💎Entrada: ⚫ + ⚪️ \n\n✅ G1 \n\n✅ G2 (opcional)`,
          { parse_mode: "HTML" }
        );
        setTimeout(() => {
          if (cor === "Preto") {
            bot.telegram.sendMessage(-1001677942242, "SINAL VENCEDOR");
            startRobo();
          } else if (cor !== "Preto") {
            bot.telegram.sendMessage(
              -1001677942242,
              `<b> G2 📊</b> \n\n⏰HORÁRIO: ${formatDate(dataDozeG2)} \n\n💎Entrada: ⚫ + ⚪️ \n\n✅ G1 \n\n✅ G2 (opcional)`,
              { parse_mode: "HTML" }
            );
            setTimeout(() => {
              if (cor === "Preto") {
                bot.telegram.sendMessage(-1001677942242, "SINAL VENCEDOR");
                startRobo();
              } else {
                bot.telegram.sendMessage(-1001677942242, "LOSSSSSSSSSSSSSSS");
                startRobo();
              }
            }, 420000);
          }
        }, 420000);
      }
    }, 420000);
  } else {
      setTimeout(() => {
        startRobo();
      }, 20000);
    }
}

function processar_Dez(cor, roll, rollAnterior) {
  //     //DEZZZZZZZ 10

  if (roll === 10 && rollAnterior != 10) {
    console.log("PALPITE DE SINAL");
    bot.telegram.sendMessage(
      -1001677942242,
      `<b>Palpite Sinal 📊</b> \n\n⏰HORÁRIO: ${formatDate(dataDez)} \n\n💎Entrada: 🔴 + ⚪️ \n\n✅ G1 \n\n✅ G2 (opcional)`,
      { parse_mode: "HTML" }
    );

    setTimeout(() => {
      if (cor === "Vermelho") {
        bot.telegram.sendMessage(-1001677942242, "SINAL VENCEDOR");
        startRobo();
      } else if (cor !== "Vermelho") {
        bot.telegram.sendMessage(
          -1001677942242,
          `<b> G1 📊</b> \n\n⏰HORÁRIO: ${formatDate(dataDezG1)} \n\n💎Entrada: 🔴 + ⚪️ \n\n✅ G1 \n\n✅ G2 (opcional)`,
          { parse_mode: "HTML" }
        );
        setTimeout(() => {
          if (cor === "Vermelho") {
            bot.telegram.sendMessage(-1001677942242, "SINAL VENCEDOR");
            startRobo();
          } else if (cor !== "Vermelho") {
            bot.telegram.sendMessage(
              -1001677942242,
              `<b> G2 📊</b> \n\n⏰HORÁRIO: ${formatDate(dataDezG2)} \n\n💎Entrada: 🔴 + ⚪️ \n\n✅ G1 \n\n✅ G2 (opcional)`,
              { parse_mode: "HTML" }
            );
            setTimeout(() => {
              if (cor === "Vermelho") {
                bot.telegram.sendMessage(-1001677942242, "SINAL VENCEDOR");
                startRobo();
              } else {
                bot.telegram.sendMessage(-1001677942242, "LOSSSSSSSSSSSSSSS");
                startRobo();
              }
            }, 300000);
          }
        }, 300000);
      }
    }, 300000);
  } else {
      setTimeout(() => {
        startRobo();
      }, 20000);
    }
}

function processar_Nove(cor, roll, rollAnterior) {
  //     //NOVEEEEEEEEEEEE 9

  if (roll === 9 && rollAnterior != 9) {
    console.log("PALPITE DE SINAL");
    bot.telegram.sendMessage(
      -1001677942242,
      `<b>Palpite Sinal 📊</b> \n\n⏰HORÁRIO: ${formatDate(dataNove)} \n\n💎Entrada: 🔴 + ⚪️ \n\n✅ G1 \n\n✅ G2 (opcional)`,
      { parse_mode: "HTML" }
    );

    setTimeout(() => {
      if (cor === "Vermelho") {
        bot.telegram.sendMessage(-1001677942242, "SINAL VENCEDOR");
        startRobo();
      } else if (cor !== "Vermelho") {
        bot.telegram.sendMessage(
          -1001677942242,
          `<b> G1 📊</b> \n\n⏰HORÁRIO: ${formatDate(dataNoveG1)} \n\n💎Entrada: 🔴 + ⚪️ \n\n✅ G1 \n\n✅ G2 (opcional)`,
          { parse_mode: "HTML" }
        );
        setTimeout(() => {
          if (cor === "Vermelho") {
            bot.telegram.sendMessage(-1001677942242, "SINAL VENCEDOR");
            startRobo();
          } else if (cor !== "Vermelho") {
            bot.telegram.sendMessage(
              -1001677942242,
              `<b> G2 📊</b> \n\n⏰HORÁRIO: ${formatDate(dataNoveG2)} \n\n💎Entrada: 🔴 + ⚪️ \n\n✅ G1 \n\n✅ G2 (opcional)`,
              { parse_mode: "HTML" }
            );
            setTimeout(() => {
              if (cor === "Vermelho") {
                bot.telegram.sendMessage(-1001677942242, "SINAL VENCEDOR");
                startRobo();
              } else {
                bot.telegram.sendMessage(-1001677942242, "LOSSSSSSSSSSSSSSS");
                startRobo();
              }
            }, 240000);
          }
        }, 240000);
      }
    }, 240000);
  } else {
      setTimeout(() => {
        startRobo();
      }, 20000);
    }
}    

function processar_Seis(cor, roll, rollAnterior) {
  //     //OIIIIIIIIIITO 6

  if (roll === 6 && rollAnterior != 6) {
    console.log("PALPITE DE SINAL");
    bot.telegram.sendMessage(
      -1001677942242,
      `<b>Palpite Sinal 📊</b> \n\n⏰HORÁRIO: ${formatDate(dataOito)} \n\n💎Entrada: 🔴 + ⚪️ \n\n✅ G1 \n\n✅ G2 (opcional)`,
      { parse_mode: "HTML" }
    );

    setTimeout(() => {
      if (cor === "Vermelho") {
        bot.telegram.sendMessage(-1001677942242, "SINAL VENCEDOR");
        startRobo();
      } else if (cor !== "Vermelho") {
        bot.telegram.sendMessage(
          -1001677942242,
          `<b> G1 📊</b> \n\n⏰HORÁRIO: ${formatDate(dataOitoG1)} \n\n💎Entrada: 🔴 + ⚪️ \n\n✅ G1 \n\n✅ G2 (opcional)`,
          { parse_mode: "HTML" }
        );
        setTimeout(() => {
          if (cor === "Vermelho") {
            bot.telegram.sendMessage(-1001677942242, "SINAL VENCEDOR");
            startRobo();
          } else if (cor !== "Vermelho") {
            bot.telegram.sendMessage(
              -1001677942242,
              `<b> G2 📊</b> \n\n⏰HORÁRIO: ${formatDate(dataOitoG2)} \n\n💎Entrada: 🔴 + ⚪️ \n\n✅ G1 \n\n✅ G2 (opcional)`,
              { parse_mode: "HTML" }
            );
            setTimeout(() => {
              if (cor === "Vermelho") {
                bot.telegram.sendMessage(-1001677942242, "SINAL VENCEDOR");
                startRobo();
              } else {
                bot.telegram.sendMessage(-1001677942242, "LOSSSSSSSSSSSSSSS");
                startRobo();
              }
            }, 180000);
          }
        }, 180000);
      }
    }, 180000);
  } else {
      setTimeout(() => {
        startRobo();
      }, 20000);
    }
}

function processar_Oito(cor, roll, rollAnterior) {

    //     //OIIIIIIIIIITO 8

  if (roll === 8 && rollAnterior != 8) {
    console.log("PALPITE DE SINAL");
    bot.telegram.sendMessage(
      -1001677942242,
      `<b>Palpite Sinal 📊</b> \n\n⏰HORÁRIO: ${formatDate(dataOito)} \n\n💎Entrada: ⚫ + ⚪️ \n\n✅ G1 \n\n✅ G2 (opcional)`,
      { parse_mode: "HTML" }
    );

    setTimeout(() => {
      if (cor === "Preto") {
        bot.telegram.sendMessage(-1001677942242, "SINAL VENCEDOR");
        startRobo();
      } else if (cor !== "Preto") {
        bot.telegram.sendMessage(
          -1001677942242,
          `<b> G1 📊</b> \n\n⏰HORÁRIO: ${formatDate(dataOitoG1)} \n\n💎Entrada: ⚫ + ⚪️ \n\n✅ G1 \n\n✅ G2 (opcional)`,
          { parse_mode: "HTML" }
        );
        setTimeout(() => {
          if (cor === "Preto") {
            bot.telegram.sendMessage(-1001677942242, "SINAL VENCEDOR");
            startRobo();
          } else if (cor !== "Preto") {
            bot.telegram.sendMessage(
              -1001677942242,
              `<b> G2 📊</b> \n\n⏰HORÁRIO: ${formatDate(dataOitoG2)} \n\n💎Entrada: ⚫ + ⚪️ \n\n✅ G1 \n\n✅ G2 (opcional)`,
              { parse_mode: "HTML" }
            );
            setTimeout(() => {
              if (cor === "Preto") {
                bot.telegram.sendMessage(-1001677942242, "SINAL VENCEDOR");
                startRobo();
              } else {
                bot.telegram.sendMessage(-1001677942242, "LOSSSSSSSSSSSSSSS");
                startRobo();
              }
            }, 180000);
          }
        }, 180000);
      }
    }, 180000);
  } else {
      setTimeout(() => {
        startRobo();
      }, 20000);
    }
}

function processar_Onze(cor, roll, rollAnterior) {

  // ONZEEEEEEEEEEE 11
  if (roll === 11 && rollAnterior != 11) {
    console.log("PALPITE DE SINAL");
    bot.telegram.sendMessage(
      -1001677942242,
      `<b>Palpite Sinal 📊</b> \n\n⏰HORÁRIO: ${formatDate(dataOnze)} \n\n💎Entrada: ⚫ + ⚪️ \n\n✅ G1 \n\n✅ G2 (opcional)`,
      { parse_mode: "HTML" }
    );

    setTimeout(() => {
      if (cor === "Preto") {
        bot.telegram.sendMessage(-1001677942242, "SINAL VENCEDOR");
        startRobo();
      } else if (cor !== "Preto") {
        bot.telegram.sendMessage(
          -1001677942242,
          `<b> G1 📊</b> \n\n⏰HORÁRIO: ${formatDate(dataOnzeG1)} \n\n💎Entrada: ⚫ + ⚪️ \n\n✅ G1 \n\n✅ G2 (opcional)`,
          { parse_mode: "HTML" }
        );
        setTimeout(() => {
          if (cor === "Preto") {
            bot.telegram.sendMessage(-1001677942242, "SINAL VENCEDOR");
            startRobo();
          } else if (cor !== "Preto") {
            bot.telegram.sendMessage(
              -1001677942242,
              `<b> G2 📊</b> \n\n⏰HORÁRIO: ${formatDate(dataOnzeG2)} \n\n💎Entrada: ⚫ + ⚪️ \n\n✅ G1 \n\n✅ G2 (opcional)`,
              { parse_mode: "HTML" }
            );
            setTimeout(() => {
              if (cor === "Preto") {
                bot.telegram.sendMessage(-1001677942242, "SINAL VENCEDOR");
                startRobo();
              } else {
                bot.telegram.sendMessage(-1001677942242, "LOSSSSSSSSSSSSSSS");
                startRobo();
              }
            }, 360000);
          }
        }, 360000);
      }
    }, 360000);
  } else {
      setTimeout(() => {
        startRobo();
      }, 20000);
    }
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

// setInterval(() => {
// }, 5000)

// // bot.telegram.sendMessage(1159964065, "bora ganhar dinheiro");
// // bot.start((ctx) => ctx.reply('Welcome'));
// // bot.help((ctx) => ctx.reply('Send me a sticker'));
// // bot.on('sticker', (ctx) => ctx.reply('👍'));
// // bot.hears('hi', (ctx) => ctx.reply('Hey there'));
// // bot.launch();
