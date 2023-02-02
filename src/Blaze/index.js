import axios from "axios";
import { Telegraf } from "telegraf";

const bot = new Telegraf("5919311963:AAGt16CMPOcNjk_I0gcvK9FPFQ4YTaUs_-E");
const tokenWin =
  "CAACAgEAAxkBAAIBZmPQgIw04i-VzNmGbon5dR_ffIMnAAKNAgAC2vqYR85jELH6CAEKLQQ";
const tokenLoss =
  "CAACAgEAAxkBAAIBaWPQgI-sPTdvdQABoP7i1lxpydwVUgACEQIAAvqqmEfmghiZF6aGxy0E";
const tokenWinBranco =
  "CAACAgEAAxkBAAIBZ2PQgI7oCLSa-bbkgpbgnz17NVZ-AAKlAgACDr2ZRwJCHf6fmiOqLQQ";
const tokenChat = -1001677942242;
const tokenDezWin =
  "CAACAgEAAxkBAAIBbmPUHl8DMFBVJ2leqbWGbX8V_BLXAALBAQACItOYR1MSdzf5soPrLQQ";
const tokenTresLoss =
  "CAACAgEAAxkBAAIBb2PUHmJR8cSsn_GVb_fpL7aLIHEzAAKhAQACZeSYR07EHvb3FpgRLQQ";
const tokenPareDeOperar = "CAACAgEAAxkBAAIBkmPZg5xpeUc3544vxYLoJkCV95IhAALFAQACJ9qRR4B_fxjRTzKmLQQ";  

let rollAtual;
let corAtual;
let countWin;
let countLoss;
axios.defaults.timeout = 1000000;
let countBrancos;
var countAcertividade = countWin + countBrancos - countLoss;
var countGeral = countWin + countBrancos + countLoss;
let segundoAtualCasaAtual;
let segundoAtualCasaAtualF;
let milissegundosSeis;
let milissegundosTreze;
let milissegundosDez;
let milissegundosDoze;
let milissegundosNove;
let milissegundosOito;
let milissegundosOnze;

setInterval(function () {
  if (countWin === 10 && countLoss === 0) {
    bot.telegram.sendSticker(tokenChat, tokenDezWin);
    setTimeout(() => {
      bot.telegram.sendSticker(tokenChat, tokenPareDeOperar);
    }, 1000);
    countWin = 0;
  }

  if (countLoss === 3 && countWin === 0) {
    bot.telegram.sendSticker(tokenChat, tokenTresLoss);
    countLoss = 0;
  }

  if(countGeral === 10) {
    let porcentagem = (countAcertividade/10)*100;
    bot.telegram.sendMessage(tokenChat, `<b>Play Sinais 💎</b> \n\n ✅ ${countWin} WINS  \n\n ❌ ${countLoss} RED \n\n ⚪️ ${countBrancos} BRANCOS \n\n ${porcentagem}% de Assertividade`,
    { parse_mode: "HTML" }
  );
  countGeral = 0;
  }
  if (rollAtual) {
    segundoAtualCasaAtualF = new Date(segundoAtualCasaAtual);
   
    if (typeof segundoAtualCasaAtualF !== 'undefined') {
      milissegundosSeis = 180000 + 3000 + parseInt(formatDateCasaAtual(segundoAtualCasaAtualF));
      milissegundosTreze = 360000 + 3000 + parseInt(formatDateCasaAtual(segundoAtualCasaAtualF));
      milissegundosDez = 300000 + 3000 + parseInt(formatDateCasaAtual(segundoAtualCasaAtualF));
      milissegundosDoze = 360000 + 3000 + parseInt(formatDateCasaAtual(segundoAtualCasaAtualF));
      milissegundosNove = 240000 + 3000 + parseInt(formatDateCasaAtual(segundoAtualCasaAtualF));
      milissegundosOito = 240000 + 3000 + parseInt(formatDateCasaAtual(segundoAtualCasaAtualF));
      milissegundosOnze = 300000 + 3000 + parseInt(formatDateCasaAtual(segundoAtualCasaAtualF));
    }
    console.log(formatDateCasaAtual(segundoAtualCasaAtualF))
    console.log("Valor em milissegundos do numero: ", milissegundosSeis)
  }

}, 1000);


function atualizarCor() {
  axios
    .get("https://api2.minhablaze.com.br/api/v1/result/double")

    .then(function (response) {
      (response) => response.json();

      let resultados = response.data.results;
      let tamanho = resultados.length;
      let casa = 1;
      let indice = tamanho - casa;
      let roll = resultados[indice].roll;
      let cor = resultados[indice].color;
      segundoAtualCasaAtual = resultados[indice].created_at;
      corAtual = cor;
      rollAtual = roll;
    })
    .catch((err) => {
      console.error("O erro da requisição da atualizarCor é: ", err);
    });
}

setInterval(() => {
  atualizarCor();
}, 3000);

function startRobo() {
  axios
    .get("https://api2.minhablaze.com.br/api/v1/result/double")

    .then(function (response) {
      (response) => response.json();

      // let numbers = [2, 2, 2, 4];
      // let randomIndex = Math.floor(Math.random() * numbers.length);
      // let randomNumber = numbers[randomIndex];

      // let numbers2 = [2, 2, 2, 4];
      // let randomIndex2 = Math.floor(Math.random() * numbers2.length);
      // let randomNumber2 = numbers2[randomIndex2];

      let resultados = response.data.results;
      let tamanho = resultados.length;
      let casa = 1;
      let indice = tamanho - casa;
      let roll = resultados[indice].roll;
      let casaAnterior = 2;
      let indiceAnterior = tamanho - casaAnterior;
      let rollAnterior = resultados[indiceAnterior].roll;
      let cor = resultados[indice].color;

      if (roll != rollAnterior) {
        return telegram(roll, rollAnterior, cor);
      } else {
        startRobo();
      }
    })
    .catch((err) => {
      if (err.code === "ECONNABORTED") {
        console.log("Request Timeout: " + err.message);
      } else {
        console.error("O erro da requisição do startRobo é : ", err);
      }
    });
}

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

function formatDateCasaAtual(date) {
  // const d = zeroFill(date.getDate());
  // const mo = zeroFill(date.getMonth() + 1);
  // const y = zeroFill(date.getFullYear());
  // const h = zeroFill(date.getHours());
  // const mi = zeroFill(date.getMinutes());
  const s = zeroFill(date.getSeconds());

  return `${s}`;
}

function telegram(roll, rollAnterior, cor) {
  verificarCasaRepetidaGale(roll, rollAnterior);

  console.log("local Atual", roll);
  console.log("local Anterior", rollAnterior);
  console.log("COR", cor);

  //ONZE
  const dataOnze = new Date();
  dataOnze.setSeconds(dataOnze.getSeconds() + 0);
  dataOnze.setMinutes(dataOnze.getMinutes() + 5);
  dataOnze.setHours(dataOnze.getHours() + 0);

  //OITO
  const dataOito = new Date();
  dataOito.setSeconds(dataOito.getSeconds() + 0);
  dataOito.setMinutes(dataOito.getMinutes() + 4);
  dataOito.setHours(dataOito.getHours() + 0);

  //NOVE
  const dataNove = new Date();
  dataNove.setSeconds(dataNove.getSeconds() + 0);
  dataNove.setMinutes(dataNove.getMinutes() + 4);
  dataNove.setHours(dataNove.getHours() + 0);

  //DEZ
  const dataDez = new Date();
  dataDez.setSeconds(dataDez.getSeconds() + 0);
  dataDez.setMinutes(dataDez.getMinutes() + 5);
  dataDez.setHours(dataDez.getHours() + 0);

  //DOZE
  const dataDoze = new Date();
  dataDoze.setSeconds(dataDoze.getSeconds() + 0);
  dataDoze.setMinutes(dataDoze.getMinutes() + 6);
  dataDoze.setHours(dataDoze.getHours() + 0);

  //TREZE
  const dataTreze = new Date();
  dataTreze.setSeconds(dataTreze.getSeconds() + 0);
  dataTreze.setMinutes(dataTreze.getMinutes() + 6);
  dataTreze.setHours(dataTreze.getHours() + 0);

  //SEIS
  const dataSeis = new Date();
  dataSeis.setSeconds(dataSeis.getSeconds() + 0);
  dataSeis.setMinutes(dataSeis.getMinutes() + 3);
  dataSeis.setHours(dataSeis.getHours() + 0);

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

  if (
    roll === 0 ||
    roll === 1 ||
    roll === 2 ||
    roll === 3 ||
    roll === 4 ||
    roll === 5 ||
    roll === 7 ||
    roll === 14
  ) {
      setTimeout(() => {
        startRobo();
      }, 30000);
  }

  //TREZE

  if (roll === 13 && rollAnterior != 13) {
    processar_Treze(cor, dataTreze, roll, rollAnterior);
  }

  //DOZE

  if (roll === 12 && rollAnterior != 12) {
    processar_Doze(cor, dataDoze, roll, rollAnterior);
  }

  //DEZ

  if (roll === 10 && rollAnterior != 10) {
    processar_Dez(cor, dataDez, roll, rollAnterior);
  }

  //NOVE
  if (roll === 9 && rollAnterior != 9) {
    processar_Nove(cor, dataNove, roll, rollAnterior);
  }

  //SEIS

  if (roll === 6 && rollAnterior != 6) {
    processar_Seis(cor, dataSeis, roll, rollAnterior);
  }

  //OITO

  if (roll === 8 && rollAnterior != 8) {
    processar_Oito(cor, dataOito, roll, rollAnterior);
  }

  //ONZE

  if (roll === 11 && rollAnterior != 11) {
    processar_Onze(cor, dataOnze, roll, rollAnterior);
  }
}

startRobo();

function verificarCasaRepetidaGale(roll, rollAnterior) {
  if (roll === rollAnterior) {
      setTimeout(() => {
        startRobo();
      }, 30000);
  }
}

function processar_Treze(cor, dataTreze, roll, rollAnterior) {
  //TREEEEEEZE 13
  setInterval(() => {
    if (cor !== corAtual && typeof corAtual !== "undefined") {
      cor = corAtual;
    }
    if (roll != rollAtual && typeof rollAtual !== "undefined") {
      roll = rollAtual;
    }
  }, 1000);

  console.log("PALPITE DE SINAL");
  bot.telegram.sendMessage(
    tokenChat,
    `<b>Palpite Sinal 📊</b> \n\n⏰HORÁRIO: ${formatDate(
      dataTreze
    )} \n\n💎Entrada: 🔴 + ⚪️ \n\n✅ G1 \n\n✅ G2 (opcional)`,
    { parse_mode: "HTML" }
  );

  setTimeout(() => {
    console.log("COR verificação SINAL palpite", cor);

    if (cor === 0 || cor === "Branco") {
      if (roll === rollAnterior) {
        return verificarCasaRepetidaGale(roll, rollAnterior);
      }
      console.log("O numero foi computado: ", roll);
      countWin += 1;
      countBrancos += 1;
      startRobo();
      return bot.telegram.sendSticker(tokenChat, tokenWinBranco);
    }
    if (cor === "Vermelho" || cor === 1) {
      if (roll === rollAnterior) {
        return verificarCasaRepetidaGale(roll, rollAnterior);
      }
      console.log("O numero foi computado: ", roll);
      if (roll === rollAnterior) {
        return verificarCasaRepetidaGale(roll, rollAnterior);
      }
      countWin += 1;
      bot.telegram.sendSticker(tokenChat, tokenWin);
      startRobo();
    } else if (cor !== "Vermelho" || cor !== 1) {
      bot.telegram.sendMessage(tokenChat, `<b> ❇️ 1º GALE</b>`, {
        parse_mode: "HTML",
      });
      setTimeout(() => {
        console.log("COR verificação SINAL G1", cor);

        if (cor === 0 || cor === "Branco") {
          if (roll === rollAnterior) {
            return verificarCasaRepetidaGale(roll, rollAnterior);
          }
          console.log("O numero foi computado: ", roll);
          countBrancos += 1;
          countWin += 1;
          startRobo();
          return bot.telegram.sendSticker(tokenChat, tokenWinBranco);
        }
        if (cor === "Vermelho") {
          if (roll === rollAnterior) {
            return verificarCasaRepetidaGale(roll, rollAnterior);
          }
          console.log("O numero foi computado: ", roll);
          countWin += 1;
          bot.telegram.sendSticker(tokenChat, tokenWin);
          startRobo();
          return;
        } else if (cor !== "Vermelho" || cor !== 1) {
          if (roll === rollAnterior) {
            return verificarCasaRepetidaGale(roll, rollAnterior);
          }
          console.log("O numero foi computado: ", roll);
          bot.telegram.sendMessage(tokenChat, `<b> ❇️ 2º GALE</b>`, {
            parse_mode: "HTML",
          });
          setTimeout(() => {
            console.log("COR verificação SINAL G2", cor);
            if (cor === 0 || cor === "Branco") {
              if (roll === rollAnterior) {
                return verificarCasaRepetidaGale(roll, rollAnterior);
              }
              console.log("O numero foi computado: ", roll);
              countBrancos += 1;
              countWin += 1;
              startRobo();
              return bot.telegram.sendSticker(tokenChat, tokenWinBranco);
            }

            if (cor === "Vermelho" || cor === 1) {
              if (roll === rollAnterior) {
                return verificarCasaRepetidaGale(roll, rollAnterior);
              }
              console.log("O numero foi computado: ", roll);
              countWin += 1;
              bot.telegram.sendSticker(tokenChat, tokenWin);
              startRobo();
              return;
            } else {
              countLoss += 1;
              bot.telegram.sendSticker(tokenChat, tokenLoss);
              startRobo();
              return;
            }
          }, 35000); //30000
        }
      }, 35000);
    }
  }, milissegundosTreze); //402000
}

function processar_Doze(cor, dataDoze, roll, rollAnterior) {
  //     //DOZZZZZZZE 12
  setInterval(() => {
    if (cor !== corAtual && typeof corAtual !== "undefined") {
      cor = corAtual;
    }
    if (roll != rollAtual && typeof rollAtual !== "undefined") {
      roll = rollAtual;
    }
  }, 1000);

  console.log("COR ATUALIZADA TREZE", cor);

  console.log("PALPITE DE SINAL");
  bot.telegram.sendMessage(
    tokenChat,
    `<b>Palpite Sinal 📊</b> \n\n⏰HORÁRIO: ${formatDate(
      dataDoze
    )} \n\n💎Entrada: ⚫ + ⚪️ \n\n✅ G1 \n\n✅ G2 (opcional)`,
    { parse_mode: "HTML" }
  );

  setTimeout(() => {
    if (cor === 0 || cor === "Branco") {
      if (roll === rollAnterior) {
        return verificarCasaRepetidaGale(roll, rollAnterior);
      }
      console.log("O numero foi computado: ", roll);
      countBrancos += 1;
      countWin += 1;
      startRobo();
      return bot.telegram.sendSticker(tokenChat, tokenWinBranco);
    }

    if (cor === "Preto" || cor === 2) {
      if (roll === rollAnterior) {
        return verificarCasaRepetidaGale(roll, rollAnterior);
      }
      console.log("O numero foi computado: ", roll);
      countWin += 1;
      bot.telegram.sendSticker(tokenChat, tokenWin);
      startRobo();
      return;
    } else if (cor !== "Preto" || cor !== 2) {
      if (roll === rollAnterior) {
        return verificarCasaRepetidaGale(roll, rollAnterior);
      }
      console.log("O numero foi computado: ", roll);
      bot.telegram.sendMessage(tokenChat, `<b>❇️ 1º GALE</b>`, {
        parse_mode: "HTML",
      });
      setTimeout(() => {
        if (cor === 0 || cor === "Branco") {
          if (roll === rollAnterior) {
            return verificarCasaRepetidaGale(roll, rollAnterior);
          }
          console.log("O numero foi computado: ", roll);
          countBrancos += 1;
          countWin += 1;
          startRobo();
          return bot.telegram.sendSticker(tokenChat, tokenWinBranco);
        }
        if (cor === "Preto" || cor === 2) {
          if (roll === rollAnterior) {
            return verificarCasaRepetidaGale(roll, rollAnterior);
          }
          console.log("O numero foi computado: ", roll);
          countWin += 1;
          bot.telegram.sendSticker(tokenChat, tokenWin);
          startRobo();
          return;
        } else if (cor !== "Preto" || cor !== 2) {
          if (roll === rollAnterior) {
            return verificarCasaRepetidaGale(roll, rollAnterior);
          }
          console.log("O numero foi computado: ", roll);
          bot.telegram.sendMessage(tokenChat, `<b> ❇️ 2º GALE</b>`, {
            parse_mode: "HTML",
          });
          setTimeout(() => {
            if (cor === 0 || cor === "Branco") {
              if (roll === rollAnterior) {
                return verificarCasaRepetidaGale(roll, rollAnterior);
              }
              console.log("O numero foi computado: ", roll);
              countBrancos += 1;
              countWin += 1;
              startRobo();
              return bot.telegram.sendSticker(tokenChat, tokenWinBranco);
            }
            if (cor === "Preto" || cor === 2) {
              if (roll === rollAnterior) {
                return verificarCasaRepetidaGale(roll, rollAnterior);
              }
              console.log("O numero foi computado: ", roll);
              countWin += 1;
              bot.telegram.sendSticker(tokenChat, tokenWin);
              startRobo();
              return;
            } else {
              countLoss += 1;
              bot.telegram.sendSticker(tokenChat, tokenLoss);
              startRobo();
              return;
            }
          }, 35000);
        }
      }, 35000);
    }
  }, milissegundosDoze
  );
}

function processar_Dez(cor, dataDez, roll, rollAnterior) {
  //     //DEZZZZZZZ 10
  setInterval(() => {
    if (cor !== corAtual && typeof corAtual !== "undefined") {
      cor = corAtual;
    }
    if (roll != rollAtual && typeof rollAtual !== "undefined") {
      roll = rollAtual;
    }
  }, 1000);

  console.log("COR ATUALIZADA TREZE", cor);

  console.log("PALPITE DE SINAL");
  bot.telegram.sendMessage(
    tokenChat,
    `<b>Palpite Sinal 📊</b> \n\n⏰HORÁRIO: ${formatDate(
      dataDez
    )} \n\n💎Entrada: 🔴 + ⚪️ \n\n✅ G1 \n\n✅ G2 (opcional)`,
    { parse_mode: "HTML" }
  );

  setTimeout(() => {
    if (cor === 0 || cor === "Branco") {
      if (roll === rollAnterior) {
        return verificarCasaRepetidaGale(roll, rollAnterior);
      }
      console.log("O numero foi computado: ", roll);
      countBrancos += 1;
      countWin += 1;
      startRobo();
      return bot.telegram.sendSticker(tokenChat, tokenWinBranco);
    }

    if (cor === "Vermelho" || cor === 1) {
      if (roll === rollAnterior) {
        return verificarCasaRepetidaGale(roll, rollAnterior);
      }
      console.log("O numero foi computado: ", roll);
      countBrancos += 1;
      countWin += 1;
      bot.telegram.sendSticker(tokenChat, tokenWin);
      startRobo();
      return;
    } else if (cor !== "Vermelho" || cor !== 1) {
      if (roll === rollAnterior) {
        return verificarCasaRepetidaGale(roll, rollAnterior);
      }
      console.log("O numero foi computado: ", roll);

      bot.telegram.sendMessage(tokenChat, `<b> ❇️ 1º GALE</b>`, {
        parse_mode: "HTML",
      });

      setTimeout(() => {
        if (cor === 0 || cor === "Branco") {
          if (roll === rollAnterior) {
            return verificarCasaRepetidaGale(roll, rollAnterior);
          }
          console.log("O numero foi computado: ", roll);
          countBrancos += 1;
          countWin += 1;
          startRobo();
          return bot.telegram.sendSticker(tokenChat, tokenWinBranco);
        }
        if (cor === "Vermelho" || cor === 1) {
          if (roll === rollAnterior) {
            return verificarCasaRepetidaGale(roll, rollAnterior);
          }
          console.log("O numero foi computado: ", roll);
          countWin += 1;
          bot.telegram.sendSticker(tokenChat, tokenWin);
          startRobo();
          return;
        } else if (cor !== "Vermelho" || cor !== 1) {
          if (roll === rollAnterior) {
            return verificarCasaRepetidaGale(roll, rollAnterior);
          }
          console.log("O numero foi computado: ", roll);
          bot.telegram.sendMessage(tokenChat, `<b> ❇️ 2º GALE</b>`, {
            parse_mode: "HTML",
          });
          setTimeout(() => {
            if (cor === 0 || cor === "Branco") {
              if (roll === rollAnterior) {
                return verificarCasaRepetidaGale(roll, rollAnterior);
              }
              console.log("O numero foi computado: ", roll);
              countBrancos += 1;
              countWin += 1;
              startRobo();
              return bot.telegram.sendSticker(tokenChat, tokenWinBranco);
            }
            if (cor === "Vermelho" || cor === 1) {
              if (roll === rollAnterior) {
                return verificarCasaRepetidaGale(roll, rollAnterior);
              }
              console.log("O numero foi computado: ", roll);
              countWin += 1;
              bot.telegram.sendSticker(tokenChat, tokenWin);
              startRobo();
              return;
            } else {
              countLoss += 1;
              bot.telegram.sendSticker(tokenChat, tokenLoss);
              startRobo();
              return;
            }
          }, 35000);
        }
      }, 35000);
    }
  }, milissegundosDez
  );
}

function processar_Nove(cor, dataNove, roll, rollAnterior) {
  setInterval(() => {
    if (cor !== corAtual && typeof corAtual !== "undefined") {
      cor = corAtual;
    }
    if (roll != rollAtual && typeof rollAtual !== "undefined") {
      roll = rollAtual;
    }
  }, 1000);

  console.log("COR ATUALIZADA TREZE", cor);

  //NOVEEEEEEEEEEEE 9

  console.log("PALPITE DE SINAL");
  bot.telegram.sendMessage(
    tokenChat,
    `<b>Palpite Sinal 📊</b> \n\n⏰HORÁRIO: ${formatDate(
      dataNove
    )} \n\n💎Entrada: 🔴 + ⚪️ \n\n✅ G1 \n\n✅ G2 (opcional)`,
    { parse_mode: "HTML" }
  );

  setTimeout(() => {
    if (cor === 0 || cor === "Branco") {
      if (roll === rollAnterior) {
        return verificarCasaRepetidaGale(roll, rollAnterior);
      }
      console.log("O numero foi computado: ", roll);
      countBrancos += 1;
      countWin += 1;
      startRobo();
      return bot.telegram.sendSticker(tokenChat, tokenWinBranco);
    }

    if (cor === "Vermelho" || cor === 1) {
      if (roll === rollAnterior) {
        return verificarCasaRepetidaGale(roll, rollAnterior);
      }
      console.log("O numero foi computado: ", roll);
      countBrancos += 1;
      countWin += 1;
      bot.telegram.sendSticker(tokenChat, tokenWin);
      startRobo();
      return;
    } else if (cor !== "Vermelho" || cor !== 1) {
      if (roll === rollAnterior) {
        return verificarCasaRepetidaGale(roll, rollAnterior);
      }
      console.log("O numero foi computado: ", roll);
      bot.telegram.sendMessage(tokenChat, `<b>❇️ 1º GALE</b>`, {
        parse_mode: "HTML",
      });
      setTimeout(() => {
        if (cor === 0 || cor === "Branco") {
          if (roll === rollAnterior) {
            return verificarCasaRepetidaGale(roll, rollAnterior);
          }
          console.log("O numero foi computado: ", roll);
          countBrancos += 1;
          countWin += 1;
          startRobo();
          return bot.telegram.sendSticker(tokenChat, tokenWinBranco);
        }
        if (cor === "Vermelho" || cor === 1) {
          if (roll === rollAnterior) {
            return verificarCasaRepetidaGale(roll, rollAnterior);
          }
          console.log("O numero foi computado: ", roll);
          countBrancos += 1;
          countWin += 1;
          bot.telegram.sendSticker(tokenChat, tokenWin);
          startRobo();
          return;
        } else if (cor !== "Vermelho" || cor !== 1) {
          if (roll === rollAnterior) {
            return verificarCasaRepetidaGale(roll, rollAnterior);
          }
          console.log("O numero foi computado: ", roll);
          bot.telegram.sendMessage(tokenChat, `<b>❇️ 2º GALE</b>`, {
            parse_mode: "HTML",
          });
          setTimeout(() => {
            if (cor === 0 || cor === "Branco") {
              if (roll === rollAnterior) {
                return verificarCasaRepetidaGale(roll, rollAnterior);
              }
              console.log("O numero foi computado: ", roll);
              countBrancos += 1;
              countWin += 1;
              startRobo();
              return bot.telegram.sendSticker(tokenChat, tokenWinBranco);
            }
            if (cor === "Vermelho" || cor === 1) {
              if (roll === rollAnterior) {
                return verificarCasaRepetidaGale(roll, rollAnterior);
              }
              console.log("O numero foi computado: ", roll);
              countWin += 1;
              bot.telegram.sendSticker(tokenChat, tokenWin);
              startRobo();
              return;
            } else {
              countLoss += 1;
              bot.telegram.sendSticker(tokenChat, tokenLoss);
              startRobo();
              return;
            }
          }, 35000);
        }
      }, 35000);
    }
  }, milissegundosNove
  ); //247000
}

function processar_Seis(cor, dataSeis, roll, rollAnterior) {
  //     //OIIIIIIIIIITO 6
  setInterval(() => {
    if (cor !== corAtual && typeof corAtual !== "undefined") {
      cor = corAtual;
    }
    if (roll != rollAtual && typeof rollAtual !== "undefined") {
      roll = rollAtual;
    }
  }, 1000);

  console.log("COR ATUALIZADA TREZE", cor);

  console.log("PALPITE DE SINAL");
  bot.telegram.sendMessage(
    tokenChat,
    `<b>Palpite Sinal 📊</b> \n\n⏰HORÁRIO: ${formatDate(
      dataSeis
    )} \n\n💎Entrada: 🔴 + ⚪️ \n\n✅ G1 \n\n✅ G2 (opcional)`,
    { parse_mode: "HTML" }
  );

  setTimeout(() => {
    if (cor === 0 || cor === "Branco") {
      if (roll === rollAnterior) {
        return verificarCasaRepetidaGale(roll, rollAnterior);
      }
      console.log("O numero foi computado: ", roll);
      countBrancos += 1;
      countWin += 1;
      startRobo();
      return bot.telegram.sendSticker(tokenChat, tokenWinBranco);
    }

    if (cor === "Vermelho" || cor === 1) {
      if (roll === rollAnterior) {
        return verificarCasaRepetidaGale(roll, rollAnterior);
      }
      console.log("O numero foi computado: ", roll);

      countWin += 1;
      bot.telegram.sendSticker(tokenChat, tokenWin);
      startRobo();
      return;
    } else if (cor !== "Vermelho" || cor !== 1) {
      if (roll === rollAnterior) {
        return verificarCasaRepetidaGale(roll, rollAnterior);
      }
      console.log("O numero foi computado: ", roll);

      bot.telegram.sendMessage(tokenChat, `<b>❇️ 1º GALE</b>`, {
        parse_mode: "HTML",
      });
      setTimeout(() => {
        if (cor === 0 || cor === "Branco") {
          if (roll === rollAnterior) {
            return verificarCasaRepetidaGale(roll, rollAnterior);
          }
          console.log("O numero foi computado: ", roll);
          countBrancos += 1;
          countWin += 1;
          startRobo();
          return bot.telegram.sendSticker(tokenChat, tokenWinBranco);
        }
        if (cor === "Vermelho" || cor === 1) {
          if (roll === rollAnterior) {
            return verificarCasaRepetidaGale(roll, rollAnterior);
          }
          console.log("O numero foi computado: ", roll);

          countWin += 1;
          bot.telegram.sendSticker(tokenChat, tokenWin);
          startRobo();
          return;
        } else if (cor !== "Vermelho" || cor !== 1) {
          if (roll === rollAnterior) {
            return verificarCasaRepetidaGale(roll, rollAnterior);
          }
          console.log("O numero foi computado: ", roll);

          bot.telegram.sendMessage(tokenChat, `<b> ❇️ 2º GALE</b>`, {
            parse_mode: "HTML",
          });
          setTimeout(() => {
            if (cor === 0 || cor === "Branco") {
              if (roll === rollAnterior) {
                return verificarCasaRepetidaGale(roll, rollAnterior);
              }
              console.log("O numero foi computado: ", roll);
              countBrancos += 1;
              countWin += 1;
              startRobo();
              return bot.telegram.sendSticker(tokenChat, tokenWinBranco);
            }
            if (cor === "Vermelho" || cor === 1) {
              if (roll === rollAnterior) {
                return verificarCasaRepetidaGale(roll, rollAnterior);
              }
              console.log("O numero foi computado: ", roll);

              countWin += 1;
              bot.telegram.sendSticker(tokenChat, tokenWin);
              startRobo();
              return;
            } else {
              countLoss += 1;
              bot.telegram.sendSticker(tokenChat, tokenLoss);
              startRobo();
              return;
            }
          }, 35000);
        }
      }, 35000);
    }
  }, milissegundosSeis
  );
}

function processar_Oito(cor, dataOito, roll, rollAnterior) {
  //     //OITOO
  setInterval(() => {
    if (cor !== corAtual && typeof corAtual !== "undefined") {
      cor = corAtual;
    }
    if (roll != rollAtual && typeof rollAtual !== "undefined") {
      roll = rollAtual;
    }
  }, 1000);

  console.log("COR ATUALIZADA TREZE", cor);

  console.log("PALPITE DE SINAL");
  bot.telegram.sendMessage(
    tokenChat,
    `<b>Palpite Sinal 📊</b> \n\n⏰HORÁRIO: ${formatDate(
      dataOito
    )} \n\n💎Entrada: ⚫ + ⚪️ \n\n✅ G1 \n\n✅ G2 (opcional)`,
    { parse_mode: "HTML" }
  );

  setTimeout(() => {
    if (cor === 0 || cor === "Branco") {
      if (roll === rollAnterior) {
        return verificarCasaRepetidaGale(roll, rollAnterior);
      }
      console.log("O numero foi computado: ", roll);
      countBrancos += 1;
      countWin += 1;
      startRobo();
      return bot.telegram.sendSticker(tokenChat, tokenWinBranco);
    }

    console.log("COR verificação SINAL palpite", cor);

    if (cor === "Preto" || cor === 2) {
      if (roll === rollAnterior) {
        return verificarCasaRepetidaGale(roll, rollAnterior);
      }
      console.log("O numero foi computado: ", roll);
      countWin += 1;
      bot.telegram.sendSticker(tokenChat, tokenWin);
      startRobo();
      return;
    } else if (cor !== "Preto" || cor !== 2) {
      if (roll === rollAnterior) {
        return verificarCasaRepetidaGale(roll, rollAnterior);
      }
      console.log("O numero foi computado: ", roll);
      bot.telegram.sendMessage(tokenChat, `<b> ❇️ 1º GALE</b>`, {
        parse_mode: "HTML",
      });
      setTimeout(() => {
        console.log("COR verificação SINAL G1", cor);

        if (cor === 0 || cor === "Branco") {
          if (roll === rollAnterior) {
            return verificarCasaRepetidaGale(roll, rollAnterior);
          }
          console.log("O numero foi computado: ", roll);
          countBrancos += 1;
          countWin += 1;
          startRobo();
          return bot.telegram.sendSticker(tokenChat, tokenWinBranco);
        }

        if (cor === "Preto" || cor === 2) {
          if (roll === rollAnterior) {
            return verificarCasaRepetidaGale(roll, rollAnterior);
          }
          console.log("O numero foi computado: ", roll);
          countWin += 1;
          bot.telegram.sendSticker(tokenChat, tokenWin);
          startRobo();
          return;
        } else if (cor !== "Preto" || cor !== 2) {
          if (roll === rollAnterior) {
            return verificarCasaRepetidaGale(roll, rollAnterior);
          }
          console.log("O numero foi computado: ", roll);
          bot.telegram.sendMessage(tokenChat, `<b> ❇️ 2º GALE</b>`, {
            parse_mode: "HTML",
          });
          setTimeout(() => {
            console.log("COR verificação SINAL G2", cor);
            if (cor === 0 || cor === "Branco") {
              if (roll === rollAnterior) {
                return verificarCasaRepetidaGale(roll, rollAnterior);
              }
              console.log("O numero foi computado: ", roll);
              countBrancos += 1;
              countWin += 1;
              startRobo();
              return bot.telegram.sendSticker(tokenChat, tokenWinBranco);
            }
            if (cor === "Preto" || cor === 2) {
              if (roll === rollAnterior) {
                return verificarCasaRepetidaGale(roll, rollAnterior);
              }
              console.log("O numero foi computado: ", roll);
              countWin += 1;
              bot.telegram.sendSticker(tokenChat, tokenWin);
              startRobo();
              return;
            } else {
              countLoss += 1;
              bot.telegram.sendSticker(tokenChat, tokenLoss);
              startRobo();
              return;
            }
          }, 35000);
        }
      }, 35000);
    }
  }, milissegundosOito
  ); //262000
}

function processar_Onze(cor, dataOnze, roll, rollAnterior) {
  // ONZEEEEEEEEEEE 11
  setInterval(() => {
    if (cor !== corAtual && typeof corAtual !== "undefined") {
      cor = corAtual;
    }
    if (roll != rollAtual && typeof rollAtual !== "undefined") {
      roll = rollAtual;
    }
  }, 1000);

  console.log("COR ATUALIZADA TREZE", cor);

  console.log("PALPITE DE SINAL");
  bot.telegram.sendMessage(
    tokenChat,
    `<b>Palpite Sinal 📊</b> \n\n⏰HORÁRIO: ${formatDate(
      dataOnze
    )} \n\n💎Entrada: ⚫ + ⚪️ \n\n✅ G1 \n\n✅ G2 (opcional)`,
    { parse_mode: "HTML" }
  );

  setTimeout(() => {
    if (cor === 0 || cor === "Branco") {
      if (roll === rollAnterior) {
        return verificarCasaRepetidaGale(roll, rollAnterior);
      }
      console.log("O numero foi computado: ", roll);
      countBrancos += 1;
      countWin += 1;
      startRobo();
      return bot.telegram.sendSticker(tokenChat, tokenWinBranco);
    }

    if (cor === "Preto" || cor === 2) {
      if (roll === rollAnterior) {
        return verificarCasaRepetidaGale(roll, rollAnterior);
      }
      console.log("O numero foi computado: ", roll);
      countWin += 1;
      bot.telegram.sendSticker(tokenChat, tokenWin);
      startRobo();
      return;
    } else if (cor !== "Preto" || cor !== 2) {
      if (roll === rollAnterior) {
        return verificarCasaRepetidaGale(roll, rollAnterior);
      }
      console.log("O numero foi computado: ", roll);
      bot.telegram.sendMessage(tokenChat, `<b> ❇️ 1º GALE</b>`, {
        parse_mode: "HTML",
      });
      setTimeout(() => {
        if (cor === 0 || cor === "Branco") {
          if (roll === rollAnterior) {
            return verificarCasaRepetidaGale(roll, rollAnterior);
          }
          console.log("O numero foi computado: ", roll);
          countBrancos += 1;
          countWin += 1;
          startRobo();
          return bot.telegram.sendSticker(tokenChat, tokenWinBranco);
        }
        if (cor === "Preto" || cor === 2) {
          if (roll === rollAnterior) {
            return verificarCasaRepetidaGale(roll, rollAnterior);
          }
          console.log("O numero foi computado: ", roll);
          countWin += 1;
          bot.telegram.sendSticker(tokenChat, tokenWin);
          startRobo();
          return;
        } else if (cor !== "Preto" || cor !== 2) {
          if (roll === rollAnterior) {
            return verificarCasaRepetidaGale(roll, rollAnterior);
          }
          console.log("O numero foi computado: ", roll);
          bot.telegram.sendMessage(tokenChat, `<b> ❇️ 2º GALE</b>`, {
            parse_mode: "HTML",
          });
          setTimeout(() => {
            if (cor === 0 || cor === "Branco") {
              if (roll === rollAnterior) {
                return verificarCasaRepetidaGale(roll, rollAnterior);
              }
              console.log("O numero foi computado: ", roll);
              countBrancos += 1;
              countWin += 1;
              startRobo();
              return bot.telegram.sendSticker(tokenChat, tokenWinBranco);
            }
            if (cor === "Preto" || cor === 2) {
              if (roll === rollAnterior) {
                return verificarCasaRepetidaGale(roll, rollAnterior);
              }
              console.log("O numero foi computado: ", roll);
              countWin += 1;
              bot.telegram.sendSticker(tokenChat, tokenWin);
              startRobo();
              return;
            } else {
              countLoss += 1;
              bot.telegram.sendSticker(tokenChat, tokenLoss);
              startRobo();
              return;
            }
          }, 35000);
        }
      }, 35000);
    }
  }, milissegundosOnze
  );
}

