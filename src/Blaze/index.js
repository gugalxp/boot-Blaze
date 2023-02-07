import axios from "axios";
import { Telegraf } from "telegraf";

const bot = new Telegraf("5919311963:AAGt16CMPOcNjk_I0gcvK9FPFQ4YTaUs_-E");
const tokenWin =
  "CAACAgEAAxkBAAIBZmPQgIw04i-VzNmGbon5dR_ffIMnAAKNAgAC2vqYR85jELH6CAEKLQQ";
const tokenLoss =
  "CAACAgEAAxkBAAIBaWPQgI-sPTdvdQABoP7i1lxpydwVUgACEQIAAvqqmEfmghiZF6aGxy0E";
const tokenWinBranco =
  "CAACAgEAAxkBAAIBZ2PQgI7oCLSa-bbkgpbgnz17NVZ-AAKlAgACDr2ZRwJCHf6fmiOqLQQ";
const tokenChat = -1001677942242; //chat canal novo (-1001601062564)
const tokenDezWin =
  "CAACAgEAAxkBAAIBbmPUHl8DMFBVJ2leqbWGbX8V_BLXAALBAQACItOYR1MSdzf5soPrLQQ";
const tokenTresLoss =
  "CAACAgEAAxkBAAIBb2PUHmJR8cSsn_GVb_fpL7aLIHEzAAKhAQACZeSYR07EHvb3FpgRLQQ";
const tokenPareDeOperar =
  "CAACAgEAAxkBAAIBkmPZg5xpeUc3544vxYLoJkCV95IhAALFAQACJ9qRR4B_fxjRTzKmLQQ";
const tokenAnalisandoMercado =
  "CAACAgEAAxkBAAIBpGPhmh-z1alOwlBWK5immrNgpL0vAAKcAQACDo6ZR_EMAUGIwBE4LgQ";

let casa = [];
let idIntervalDoze;
let idIntervalTreze;
let idIntervalDez;
let idIntervalOnze;
let idIntervalNove;
let idIntervalSeis;
let idIntervalOito;
let rollAtual;
let idAtual;
let countWin = 0;
let countLoss = 0;
axios.defaults.timeout = 1000000;
let countBrancos = 0;

var casaId;
var corAtual;

let idIntervalCount = setInterval(() => {


  var countGeral = countWin + countBrancos + countLoss;
  // console.log("CONTAGEM GERAL: ", countGeral)
  var countAcertividade = countGeral - countLoss;
  // console.log("ACERTIVIDADE: ", countAcertividade)

  if (countWin === 10 && countLoss === 0) {
    bot.telegram.sendSticker(tokenChat, tokenDezWin);
    setTimeout(() => {
      bot.telegram.sendSticker(tokenChat, tokenPareDeOperar);
    }, 1000);
  }

  if (countLoss === 3 && countWin === 0) {
    bot.telegram.sendSticker(tokenChat, tokenTresLoss);
  }

  if (countGeral % 10 === 0 && countGeral != 0) {
    let porcentagem = (countAcertividade / countGeral) * 100;
    console.log("PORCENTAGEM: ", porcentagem)
    bot.telegram.sendMessage(
      tokenChat,
      `<b>Play Sinais 💎</b> \n\n ✅ ${countWin} WINS  \n\n ❌ ${countLoss} RED \n\n ⚪️ ${countBrancos} BRANCOS \n\n ${porcentagem.toFixed(0)}% de Assertividade`,
      { parse_mode: "HTML" }
    );

    clearInterval(idIntervalCount)
  }

}, 1000);

function calcularHora() {
  console.log("Ação executada!");
    countGeral = 0;
    countWin = 0;
    countLoss = 0;
}

const interval = 24 * 60 * 60 * 1000; // Intervalo de tempo em milissegundos (24 horas)

// Calcula a quantidade de tempo restante até a meia-noite
const now = new Date();
const tonight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0, 0);
const delay = tonight - now;

// Agenda a primeira execução à meia-noite
setTimeout(function() {
  calcularHora();
  setInterval(calcularHora, interval);
}, delay);



function atualizarCor() {
  axios
    .get("https://blaze.com/api/roulette_games/current")

    .then(function (response) {
      (response) => response.json();

      let results = response.data;
      let cor = results.color;
      let roll = results.roll;
      let id = results.id;
      idAtual = id;
      rollAtual = roll;
      corAtual = cor;
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
    .get("https://blaze.com/api/roulette_games/current")

    .then(function (response) {
      (response) => response.json();

      let results = response.data;
      let cor = results.color;
      let roll = results.roll;
      casaId = results.id;

      return telegram(roll, cor, casaId);
    })
    .catch((err) => {
      console.error("O erro da requisição da startRobo é: ", err);
    });
}

// function zeroFill(n) {
//   return n < 9 ? `0${n}` : `${n}`;
// }

// function formatDate(date) {
//   // const d = zeroFill(date.getDate());
//   // const mo = zeroFill(date.getMonth() + 1);
//   // const y = zeroFill(date.getFullYear());
//   const h = zeroFill(date.getHours());
//   const mi = zeroFill(date.getMinutes());
//   // const s = zeroFill(date.getSeconds());

//   return `${h}:${mi}`;
// }

function telegram(roll, cor, casaId) {
  console.log("local Atual", roll);
  console.log("COR", cor);

  // //ONZE
  // const dataOnze = new Date();
  // dataOnze.setSeconds(dataOnze.getSeconds() + 0);
  // dataOnze.setMinutes(dataOnze.getMinutes() + 5);
  // dataOnze.setHours(dataOnze.getHours() + 0);

  // //OITO
  // const dataOito = new Date();
  // dataOito.setSeconds(dataOito.getSeconds() + 0);
  // dataOito.setMinutes(dataOito.getMinutes() + 4);
  // dataOito.setHours(dataOito.getHours() + 0);

  // //NOVE
  // const dataNove = new Date();
  // dataNove.setSeconds(dataNove.getSeconds() + 0);
  // dataNove.setMinutes(dataNove.getMinutes() + 4);
  // dataNove.setHours(dataNove.getHours() + 0);

  // //DEZ
  // const dataDez = new Date();
  // dataDez.setSeconds(dataDez.getSeconds() + 0);
  // dataDez.setMinutes(dataDez.getMinutes() + 5);
  // dataDez.setHours(dataDez.getHours() + 0);

  // //DOZE
  // const dataDoze = new Date();
  // dataDoze.setSeconds(dataDoze.getSeconds() + 0);
  // dataDoze.setMinutes(dataDoze.getMinutes() + 6);
  // dataDoze.setHours(dataDoze.getHours() + 0);

  // //TREZE
  // const dataTreze = new Date();
  // dataTreze.setSeconds(dataTreze.getSeconds() + 0);
  // dataTreze.setMinutes(dataTreze.getMinutes() + 6);
  // dataTreze.setHours(dataTreze.getHours() + 0);

  // //SEIS
  // const dataSeis = new Date();
  // dataSeis.setSeconds(dataSeis.getSeconds() + 0);
  // dataSeis.setMinutes(dataSeis.getMinutes() + 3);
  // dataSeis.setHours(dataSeis.getHours() + 0);

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

  if (roll === null) {
    setTimeout(() => {
      startRobo();
    }, 15000);
  }

  //TREZE

  if (roll === 13) {
    processar_Treze(cor, roll, casaId);
  }

  //DOZE

  if (roll === 12) {
    processar_Doze(cor, roll, casaId);
  }

  //DEZ

  if (roll === 10) {
    processar_Dez(cor, roll, casaId);
  }

  //NOVE
  if (roll === 9) {
    processar_Nove(cor, roll, casaId);
  }

  //SEIS

  if (roll === 6) {
    processar_Seis(cor, roll, casaId);
  }

  //OITO

  if (roll === 8) {
    processar_Oito(cor, roll, casaId);
  }

  //ONZE

  if (roll === 11) {
    processar_Onze(cor, roll, casaId);
  }
}

startRobo();

function processar_Treze(cor, dataDoze, roll, casaId) {
  //TREEEEEEZE 13
  console.log(cor);
  console.log(roll);
  console.log(casaId);
  let gale = 0;

  idIntervalTreze = setInterval(() => {
    if (roll != rollAtual && typeof rollAtual !== "undefined") {
      roll = rollAtual;
    }

    if (casaId != idAtual && typeof idAtual !== "undefined") {
      casaId = idAtual;
    }

    if (cor != corAtual && typeof corAtual !== "undefined") {
      cor = corAtual;
      console.log("cor atualizada", cor);
    }

    if (typeof idAtual !== "undefined") {
      if (casa.includes(idAtual)) {
        console.log(`O elemento ${idAtual} já existe no array.`);
      } else {
        casa.push(idAtual);
        console.log(casa);
        console.log(`O elemento ${idAtual} foi adicionado ao array.`);
      }
    }
  }, 1500);

  console.log("PALPITE DE SINAL");
  
  bot.telegram.sendSticker(tokenChat, tokenAnalisandoMercado);

  let mensagemAnterior = setInterval(() => {
    if (casa.length === 12 && cor != null && roll != null) {
      bot.telegram.sendMessage(
        tokenChat,
        `<b>Palpite Sinal 📊</b> \n\n⏰Entrar após: ${cor === 1 ? "🔴" : ""} ${
          cor === 0 ? "⚪️" : ""
        } ${
          cor === 2 ? "⚫️" : ""
        } ${roll} \n\n💎Entrada: 🔴 + ⚪️ \n\n✅ G1 \n\n✅ G2 (opcional)`,
        { parse_mode: "HTML" }
      );
      clearInterval(mensagemAnterior);
    }
  }, 3000);

  let intervalId1 = setInterval(() => {
    if (casa.length === 13 && cor !== null) {
      console.log(casa);
      console.log("processo 1", cor);
      setTimeout(() => {
        if (cor === 0 || cor === "Branco") {
          countWin += 1;
          countBrancos += 1;
          bot.telegram.sendSticker(tokenChat, tokenWinBranco);
          startRobo();
          casa.length = 0;
          clearInterval(intervalId1);
          clearInterval(idIntervalTreze);
          return;
        }
        if (cor === "Vermelho" || cor === 1) {
          countWin += 1;
          bot.telegram.sendSticker(tokenChat, tokenWin);
          casa.length = 0;
          startRobo();
          clearInterval(intervalId1);
          clearInterval(idIntervalTreze);
          return;
        } else {
          bot.telegram.sendMessage(tokenChat, `<b> ❇️ 1º GALE</b>`, {
            parse_mode: "HTML",
          });
          gale += 1;
          clearInterval(intervalId1);
        }
      }, 9000);
      clearInterval(intervalId1);
    }
  }, 3000);

  let intervalId2 = setInterval(() => {
    if (casa.length === 14 && gale === 1 && cor !== null) {
      console.log("processo 2", cor);
      setTimeout(() => {
        if (cor === 0 || cor === "Branco") {
          console.log("COR verificação SINAL palpite", cor);
          countBrancos += 1;
          countWin += 1;
          bot.telegram.sendSticker(tokenChat, tokenWinBranco);
          casa.length = 0;
          startRobo();
          clearInterval(intervalId2);
          clearInterval(idIntervalTreze);
          return;
        }
        if (cor === "Vermelho" || cor === 1) {
          console.log("COR verificação SINAL palpite", cor);
          countWin += 1;
          bot.telegram.sendSticker(tokenChat, tokenWin);
          casa.length = 0;
          startRobo();
          clearInterval(intervalId2);
          clearInterval(idIntervalTreze);
          return;
        } else {
          bot.telegram.sendMessage(tokenChat, `<b> ❇️ 2º GALE</b>`, {
            parse_mode: "HTML",
          });
          gale += 1;
          clearInterval(intervalId2);
        }
      }, 9000);
      clearInterval(intervalId2);
    }
  }, 3000);

  let intervalId3 = setInterval(() => {
    if (casa.length === 15 && gale === 2 && cor !== null) {
      console.log("processo 3", cor);
      setTimeout(() => {
        console.log("COR verificação SINAL palpite", cor);
        if (cor === 0 || cor === "Branco") {
          console.log("COR verificação SINAL palpite", cor);
          countBrancos += 1;
          countWin += 1;
          bot.telegram.sendSticker(tokenChat, tokenWinBranco);
          casa.length = 0;
          gale = 0;
          startRobo();
          clearInterval(intervalId3);
          clearInterval(idIntervalTreze);
          return;
        }

        if (cor === "Vermelho" || cor === 1) {
          console.log("COR verificação SINAL palpite", cor);
          countWin += 1;
          bot.telegram.sendSticker(tokenChat, tokenWin);
          casa.length = 0;
          startRobo();
          clearInterval(intervalId3);
          clearInterval(idIntervalTreze);
          return;
        } else {
          countLoss += 1;
          bot.telegram.sendSticker(tokenChat, tokenLoss);
          casa.length = 0;
          gale = 0;
          startRobo();
          clearInterval(intervalId3);
          clearInterval(idIntervalTreze);
          return;
        }
      }, 9000);
      clearInterval(intervalId3);
    }
  }, 3000);
}

function processar_Doze(cor, dataDoze, roll, casaId) {
  //DOOOOOOOOOOOOZE 12
  console.log(cor);
  console.log(roll);
  console.log(casaId);
  let gale = 0;

  idIntervalDoze = setInterval(() => {
    if (roll != rollAtual && typeof rollAtual !== "undefined") {
      roll = rollAtual;
    }

    if (casaId != idAtual && typeof idAtual !== "undefined") {
      casaId = idAtual;
    }

    if (cor != corAtual && typeof corAtual !== "undefined") {
      cor = corAtual;
      console.log("cor atualizada", cor);
    }

    if (typeof idAtual !== "undefined") {
      if (casa.includes(idAtual)) {
        console.log(`O elemento ${idAtual} já existe no array.`);
      } else {
        casa.push(idAtual);
        console.log(casa);
        console.log(`O elemento ${idAtual} foi adicionado ao array.`);
      }
    }
  }, 1500);

  console.log("PALPITE DE SINAL");
  bot.telegram.sendSticker(tokenChat, tokenAnalisandoMercado);

  let mensagemAnterior = setInterval(() => {
    if (casa.length === 11 && cor != null && roll != null) {
      bot.telegram.sendMessage(
        tokenChat,
        `<b>Palpite Sinal 📊</b> \n\n⏰Entrar após: ${cor === 1 ? "🔴" : ""} ${
          cor === 0 ? "⚪️" : ""
        } ${
          cor === 2 ? "⚫️" : ""
        } ${roll} \n\n💎Entrada: ⚫️ + ⚪️ \n\n✅ G1 \n\n✅ G2 (opcional)`,
        { parse_mode: "HTML" }
      );
      clearInterval(mensagemAnterior);
    }
  }, 3000);

  let intervalId1 = setInterval(() => {
    if (casa.length === 12 && cor !== null) {
      console.log(casa);
      console.log("processo 1", cor);
      setTimeout(() => {
        if (cor === 0 || cor === "Branco") {
          countWin += 1;
          countBrancos += 1;
          bot.telegram.sendSticker(tokenChat, tokenWinBranco);
          startRobo();
          casa.length = 0;
          clearInterval(intervalId1);
          clearInterval(idIntervalDoze);
          return;
        }
        if (cor === "Preto" || cor === 2) {
          countWin += 1;
          bot.telegram.sendSticker(tokenChat, tokenWin);
          casa.length = 0;
          startRobo();
          clearInterval(intervalId1);
          clearInterval(idIntervalDoze);
          return;
        } else {
          bot.telegram.sendMessage(tokenChat, `<b> ❇️ 1º GALE</b>`, {
            parse_mode: "HTML",
          });
          gale += 1;
          clearInterval(intervalId1);
        }
      }, 9000);
      clearInterval(intervalId1);
    }
  }, 3000);

  let intervalId2 = setInterval(() => {
    if (casa.length === 13 && gale === 1 && cor !== null) {
      console.log("processo 2", cor);
      setTimeout(() => {
        if (cor === 0 || cor === "Branco") {
          console.log("COR verificação SINAL palpite", cor);
          countBrancos += 1;
          countWin += 1;
          bot.telegram.sendSticker(tokenChat, tokenWinBranco);
          casa.length = 0;
          startRobo();
          clearInterval(intervalId2);
          clearInterval(idIntervalDoze);
          return;
        }
        if (cor === "Preto" || cor === 2) {
          console.log("COR verificação SINAL palpite", cor);
          countWin += 1;
          bot.telegram.sendSticker(tokenChat, tokenWin);
          casa.length = 0;
          startRobo();
          clearInterval(intervalId2);
          clearInterval(idIntervalDoze);
          return;
        } else {
          bot.telegram.sendMessage(tokenChat, `<b> ❇️ 2º GALE</b>`, {
            parse_mode: "HTML",
          });
          gale += 1;
          clearInterval(intervalId2);
        }
      }, 9000);
      clearInterval(intervalId2);
    }
  }, 3000);

  let intervalId3 = setInterval(() => {
    if (casa.length === 14 && gale === 2 && cor !== null) {
      console.log("processo 3", cor);
      setTimeout(() => {
        console.log("COR verificação SINAL palpite", cor);
        if (cor === 0 || cor === "Branco") {
          console.log("COR verificação SINAL palpite", cor);
          countBrancos += 1;
          countWin += 1;
          bot.telegram.sendSticker(tokenChat, tokenWinBranco);
          casa.length = 0;
          gale = 0;
          startRobo();
          clearInterval(intervalId3);
          clearInterval(idIntervalDoze);
          return;
        }

        if (cor === "Preto" || cor === 2) {
          console.log("COR verificação SINAL palpite", cor);
          countWin += 1;
          bot.telegram.sendSticker(tokenChat, tokenWin);
          casa.length = 0;
          startRobo();
          clearInterval(intervalId3);
          clearInterval(idIntervalDoze);
          return;
        } else {
          countLoss += 1;
          bot.telegram.sendSticker(tokenChat, tokenLoss);
          casa.length = 0;
          gale = 0;
          startRobo();
          clearInterval(intervalId3);
          clearInterval(idIntervalDoze);
          return;
        }
      }, 9000);
      clearInterval(intervalId3);
    }
  }, 3000);
}

function processar_Dez(cor, dataDez, roll, casaId) {
  //DEEEEEEEEZ 10
  console.log(cor);
  console.log(roll);
  console.log(casaId);
  let gale = 0;

  idIntervalDez = setInterval(() => {
    if (roll != rollAtual && typeof rollAtual !== "undefined") {
      roll = rollAtual;
    }

    if (casaId != idAtual && typeof idAtual !== "undefined") {
      casaId = idAtual;
    }

    if (cor != corAtual && typeof corAtual !== "undefined") {
      cor = corAtual;
      console.log("cor atualizada", cor);
    }

    if (typeof idAtual !== "undefined") {
      if (casa.includes(idAtual)) {
        console.log(`O elemento ${idAtual} já existe no array.`);
      } else {
        casa.push(idAtual);
        console.log(casa);
        console.log(`O elemento ${idAtual} foi adicionado ao array.`);
      }
    }
  }, 1500);

  console.log("PALPITE DE SINAL");
  bot.telegram.sendSticker(tokenChat, tokenAnalisandoMercado);


  let mensagemAnterior = setInterval(() => {
    if (casa.length === 9 && cor != null && roll != null) {
      bot.telegram.sendMessage(
        tokenChat,
        `<b>Palpite Sinal 📊</b> \n\n⏰Entrar após: ${cor === 1 ? "🔴" : ""} ${
          cor === 0 ? "⚪️" : ""
        } ${
          cor === 2 ? "⚫️" : ""
        } ${roll} \n\n💎Entrada: 🔴 + ⚪️ \n\n✅ G1 \n\n✅ G2 (opcional)`,
        { parse_mode: "HTML" }
      );
      clearInterval(mensagemAnterior);
    }
  }, 3000);

  let intervalId1 = setInterval(() => {
    if (casa.length === 10 && cor !== null) {
      console.log(casa);
      console.log("processo 1", cor);
      setTimeout(() => {
        if (cor === 0 || cor === "Branco") {
          countWin += 1;
          countBrancos += 1;
          bot.telegram.sendSticker(tokenChat, tokenWinBranco);
          startRobo();
          casa.length = 0;
          clearInterval(intervalId1);
          clearInterval(idIntervalDez);
          return;
        }
        if (cor === "Vermelho" || cor === 1) {
          countWin += 1;
          bot.telegram.sendSticker(tokenChat, tokenWin);
          casa.length = 0;
          startRobo();
          clearInterval(intervalId1);
          clearInterval(idIntervalDez);
          return;
        } else {
          bot.telegram.sendMessage(tokenChat, `<b> ❇️ 1º GALE</b>`, {
            parse_mode: "HTML",
          });
          gale += 1;
          clearInterval(intervalId1);
        }
      }, 9000);
      clearInterval(intervalId1);
    }
  }, 3000);

  let intervalId2 = setInterval(() => {
    if (casa.length === 11 && gale === 1 && cor !== null) {
      console.log("processo 2", cor);
      setTimeout(() => {
        if (cor === 0 || cor === "Branco") {
          console.log("COR verificação SINAL palpite", cor);
          countBrancos += 1;
          countWin += 1;
          bot.telegram.sendSticker(tokenChat, tokenWinBranco);
          casa.length = 0;
          startRobo();
          clearInterval(intervalId2);
          clearInterval(idIntervalDez);
          return;
        }
        if (cor === "Vermelho" || cor === 1) {
          console.log("COR verificação SINAL palpite", cor);
          countWin += 1;
          bot.telegram.sendSticker(tokenChat, tokenWin);
          casa.length = 0;
          startRobo();
          clearInterval(intervalId2);
          clearInterval(idIntervalDez);
          return;
        } else {
          bot.telegram.sendMessage(tokenChat, `<b> ❇️ 2º GALE</b>`, {
            parse_mode: "HTML",
          });
          gale += 1;
          clearInterval(intervalId2);
        }
      }, 9000);
      clearInterval(intervalId2);
    }
  }, 3000);

  let intervalId3 = setInterval(() => {
    if (casa.length === 12 && gale === 2 && cor !== null) {
      console.log("processo 3", cor);
      setTimeout(() => {
        console.log("COR verificação SINAL palpite", cor);
        if (cor === 0 || cor === "Branco") {
          console.log("COR verificação SINAL palpite", cor);
          countBrancos += 1;
          countWin += 1;
          bot.telegram.sendSticker(tokenChat, tokenWinBranco);
          casa.length = 0;
          gale = 0;
          startRobo();
          clearInterval(intervalId3);
          clearInterval(idIntervalDez);
          return;
        }

        if (cor === "Vermelho" || cor === 1) {
          console.log("COR verificação SINAL palpite", cor);
          countWin += 1;
          bot.telegram.sendSticker(tokenChat, tokenWin);
          casa.length = 0;
          startRobo();
          clearInterval(intervalId3);
          clearInterval(idIntervalDez);
          return;
        } else {
          countLoss += 1;
          bot.telegram.sendSticker(tokenChat, tokenLoss);
          casa.length = 0;
          gale = 0;
          startRobo();
          clearInterval(intervalId3);
          clearInterval(idIntervalDez);
          return;
        }
      }, 9000);
      clearInterval(intervalId3);
    }
  }, 3000);
}

function processar_Nove(cor, dataNove, roll, casaId) {
  //NOVEEEEEEEEE 9
  console.log(cor);
  console.log(roll);
  console.log(casaId);
  let gale = 0;

  idIntervalNove = setInterval(() => {
    if (roll != rollAtual && typeof rollAtual !== "undefined") {
      roll = rollAtual;
    }

    if (casaId != idAtual && typeof idAtual !== "undefined") {
      casaId = idAtual;
    }

    if (cor != corAtual && typeof corAtual !== "undefined") {
      cor = corAtual;
      console.log("cor atualizada", cor);
    }

    if (typeof idAtual !== "undefined") {
      if (casa.includes(idAtual)) {
        console.log(`O elemento ${idAtual} já existe no array.`);
      } else {
        casa.push(idAtual);
        console.log(casa);
        console.log(`O elemento ${idAtual} foi adicionado ao array.`);
      }
    }
  }, 1500);

  console.log("PALPITE DE SINAL");
  bot.telegram.sendSticker(tokenChat, tokenAnalisandoMercado);

  let mensagemAnterior = setInterval(() => {
    if (casa.length === 8 && cor != null && roll != null) {
      bot.telegram.sendMessage(
        tokenChat,
        `<b>Palpite Sinal 📊</b> \n\n⏰Entrar após: ${cor === 1 ? "🔴" : ""} ${
          cor === 0 ? "⚪️" : ""
        } ${
          cor === 2 ? "⚫️" : ""
        } ${roll} \n\n💎Entrada: 🔴 + ⚪️ \n\n✅ G1 \n\n✅ G2 (opcional)`,
        { parse_mode: "HTML" }
      );
      clearInterval(mensagemAnterior);
    }
  }, 3000);

  let intervalId1 = setInterval(() => {
    if (casa.length === 9 && cor !== null) {
      console.log(casa);
      console.log("processo 1", cor);
      setTimeout(() => {
        if (cor === 0 || cor === "Branco") {
          countWin += 1;
          countBrancos += 1;
          bot.telegram.sendSticker(tokenChat, tokenWinBranco);
          startRobo();
          casa.length = 0;
          clearInterval(intervalId1);
          clearInterval(idIntervalNove);
          return;
        }
        if (cor === "Vermelho" || cor === 1) {
          countWin += 1;
          bot.telegram.sendSticker(tokenChat, tokenWin);
          casa.length = 0;
          startRobo();
          clearInterval(intervalId1);
          clearInterval(idIntervalNove);
          return;
        } else {
          bot.telegram.sendMessage(tokenChat, `<b> ❇️ 1º GALE</b>`, {
            parse_mode: "HTML",
          });
          gale += 1;
          clearInterval(intervalId1);
        }
      }, 9000);
      clearInterval(intervalId1);
    }
  }, 3000);

  let intervalId2 = setInterval(() => {
    if (casa.length === 10 && gale === 1 && cor !== null) {
      console.log("processo 2", cor);
      setTimeout(() => {
        if (cor === 0 || cor === "Branco") {
          console.log("COR verificação SINAL palpite", cor);
          countBrancos += 1;
          countWin += 1;
          bot.telegram.sendSticker(tokenChat, tokenWinBranco);
          casa.length = 0;
          startRobo();
          clearInterval(intervalId2);
          clearInterval(idIntervalNove);
          return;
        }
        if (cor === "Vermelho" || cor === 1) {
          console.log("COR verificação SINAL palpite", cor);
          countWin += 1;
          bot.telegram.sendSticker(tokenChat, tokenWin);
          casa.length = 0;
          startRobo();
          clearInterval(intervalId2);
          clearInterval(idIntervalNove);
          return;
        } else {
          bot.telegram.sendMessage(tokenChat, `<b> ❇️ 2º GALE</b>`, {
            parse_mode: "HTML",
          });
          gale += 1;
          clearInterval(intervalId2);
        }
      }, 9000);
      clearInterval(intervalId2);
    }
  }, 3000);

  let intervalId3 = setInterval(() => {
    if (casa.length === 11 && gale === 2 && cor !== null) {
      console.log("processo 3", cor);
      setTimeout(() => {
        console.log("COR verificação SINAL palpite", cor);
        if (cor === 0 || cor === "Branco") {
          console.log("COR verificação SINAL palpite", cor);
          countBrancos += 1;
          countWin += 1;
          bot.telegram.sendSticker(tokenChat, tokenWinBranco);
          casa.length = 0;
          gale = 0;
          startRobo();
          clearInterval(intervalId3);
          clearInterval(idIntervalNove);
          return;
        }

        if (cor === "Vermelho" || cor === 1) {
          console.log("COR verificação SINAL palpite", cor);
          countWin += 1;
          bot.telegram.sendSticker(tokenChat, tokenWin);
          casa.length = 0;
          startRobo();
          clearInterval(intervalId3);
          clearInterval(idIntervalNove);
          return;
        } else {
          countLoss += 1;
          bot.telegram.sendSticker(tokenChat, tokenLoss);
          casa.length = 0;
          gale = 0;
          startRobo();
          clearInterval(intervalId3);
          clearInterval(idIntervalNove);
          return;
        }
      }, 9000);
      clearInterval(intervalId3);
    }
  }, 3000);
}

function processar_Seis(cor, dataSeis, roll, casaId) {
  //SEEEIS 6
  console.log(cor);
  console.log(roll);
  console.log(casaId);
  let gale = 0;

  idIntervalSeis = setInterval(() => {
    if (roll != rollAtual && typeof rollAtual !== "undefined") {
      roll = rollAtual;
    }

    if (casaId != idAtual && typeof idAtual !== "undefined") {
      casaId = idAtual;
    }

    if (cor != corAtual && typeof corAtual !== "undefined") {
      cor = corAtual;
      console.log("cor atualizada", cor);
    }

    if (typeof idAtual !== "undefined") {
      if (casa.includes(idAtual)) {
        console.log(`O elemento ${idAtual} já existe no array.`);
      } else {
        casa.push(idAtual);
        console.log(casa);
        console.log(`O elemento ${idAtual} foi adicionado ao array.`);
      }
    }
  }, 1500);

  console.log("PALPITE DE SINAL");
  bot.telegram.sendSticker(tokenChat, tokenAnalisandoMercado);

  let mensagemAnterior = setInterval(() => {
    if (casa.length === 5 && cor != null && roll != null) {
      bot.telegram.sendMessage(
        tokenChat,
        `<b>Palpite Sinal 📊</b> \n\n⏰Entrar após: ${cor === 1 ? "🔴" : ""} ${
          cor === 0 ? "⚪️" : ""
        } ${
          cor === 2 ? "⚫️" : ""
        } ${roll} \n\n💎Entrada: 🔴 + ⚪️ \n\n✅ G1 \n\n✅ G2 (opcional)`,
        { parse_mode: "HTML" }
      );
      clearInterval(mensagemAnterior);
    }
  }, 3000);

  let intervalId1 = setInterval(() => {
    if (casa.length === 6 && cor !== null) {
      console.log(casa);
      console.log("processo 1", cor);
      setTimeout(() => {
        if (cor === 0 || cor === "Branco") {
          countWin += 1;
          countBrancos += 1;
          bot.telegram.sendSticker(tokenChat, tokenWinBranco);
          startRobo();
          casa.length = 0;
          clearInterval(intervalId1);
          clearInterval(idIntervalSeis);
          return;
        }
        if (cor === "Vermelho" || cor === 1) {
          countWin += 1;
          bot.telegram.sendSticker(tokenChat, tokenWin);
          casa.length = 0;
          startRobo();
          clearInterval(intervalId1);
          clearInterval(idIntervalSeis);
          return;
        } else {
          bot.telegram.sendMessage(tokenChat, `<b> ❇️ 1º GALE</b>`, {
            parse_mode: "HTML",
          });
          gale += 1;
          clearInterval(intervalId1);
        }
      }, 9000);
      clearInterval(intervalId1);
    }
  }, 3000);

  let intervalId2 = setInterval(() => {
    if (casa.length === 7 && gale === 1 && cor !== null) {
      console.log("processo 2", cor);
      setTimeout(() => {
        if (cor === 0 || cor === "Branco") {
          console.log("COR verificação SINAL palpite", cor);
          countBrancos += 1;
          countWin += 1;
          bot.telegram.sendSticker(tokenChat, tokenWinBranco);
          casa.length = 0;
          startRobo();
          clearInterval(intervalId2);
          clearInterval(idIntervalSeis);
          return;
        }
        if (cor === "Vermelho" || cor === 1) {
          console.log("COR verificação SINAL palpite", cor);
          countWin += 1;
          bot.telegram.sendSticker(tokenChat, tokenWin);
          casa.length = 0;
          startRobo();
          clearInterval(intervalId2);
          clearInterval(idIntervalSeis);
          return;
        } else {
          bot.telegram.sendMessage(tokenChat, `<b> ❇️ 2º GALE</b>`, {
            parse_mode: "HTML",
          });
          gale += 1;
          clearInterval(intervalId2);
        }
      }, 9000);
      clearInterval(intervalId2);
    }
  }, 3000);

  let intervalId3 = setInterval(() => {
    if (casa.length === 8 && gale === 2 && cor !== null) {
      console.log("processo 3", cor);
      setTimeout(() => {
        console.log("COR verificação SINAL palpite", cor);
        if (cor === 0 || cor === "Branco") {
          console.log("COR verificação SINAL palpite", cor);
          countBrancos += 1;
          countWin += 1;
          bot.telegram.sendSticker(tokenChat, tokenWinBranco);
          casa.length = 0;
          gale = 0;
          startRobo();
          clearInterval(intervalId3);
          clearInterval(idIntervalSeis);
          return;
        }

        if (cor === "Vermelho" || cor === 1) {
          console.log("COR verificação SINAL palpite", cor);
          countWin += 1;
          bot.telegram.sendSticker(tokenChat, tokenWin);
          casa.length = 0;
          startRobo();
          clearInterval(intervalId3);
          clearInterval(idIntervalSeis);
          return;
        } else {
          countLoss += 1;
          bot.telegram.sendSticker(tokenChat, tokenLoss);
          casa.length = 0;
          gale = 0;
          startRobo();
          clearInterval(intervalId3);
          clearInterval(idIntervalSeis);
          return;
        }
      }, 9000);
      clearInterval(intervalId3);
    }
  }, 3000);
}

function processar_Oito(cor, dataOito, roll, casaId) {
  //Oitooooo 8
  console.log(cor);
  console.log(roll);
  console.log(casaId);
  let gale = 0;

  idIntervalOito = setInterval(() => {
    if (roll != rollAtual && typeof rollAtual !== "undefined") {
      roll = rollAtual;
    }

    if (casaId != idAtual && typeof idAtual !== "undefined") {
      casaId = idAtual;
    }

    if (cor != corAtual && typeof corAtual !== "undefined") {
      cor = corAtual;
      console.log("cor atualizada", cor);
    }

    if (typeof idAtual !== "undefined") {
      if (casa.includes(idAtual)) {
        console.log(`O elemento ${idAtual} já existe no array.`);
      } else {
        casa.push(idAtual);
        console.log(casa);
        console.log(`O elemento ${idAtual} foi adicionado ao array.`);
      }
    }
  }, 1500);

  console.log("PALPITE DE SINAL");
  bot.telegram.sendSticker(tokenChat, tokenAnalisandoMercado);

  let mensagemAnterior = setInterval(() => {
    if (casa.length === 7 && cor != null && roll != null) {
      bot.telegram.sendMessage(
        tokenChat,
        `<b>Palpite Sinal 📊</b> \n\n⏰Entrar após: ${cor === 1 ? "🔴" : ""} ${
          cor === 0 ? "⚪️" : ""
        } ${
          cor === 2 ? "⚫️" : ""
        } ${roll} \n\n💎Entrada: ⚫️ + ⚪️ \n\n✅ G1 \n\n✅ G2 (opcional)`,
        { parse_mode: "HTML" }
      );
      clearInterval(mensagemAnterior);
    }
  }, 3000);

  let intervalId1 = setInterval(() => {
    if (casa.length === 8 && cor !== null) {
      console.log(casa);
      console.log("processo 1", cor);
      setTimeout(() => {
        if (cor === 0 || cor === "Branco") {
          countWin += 1;
          countBrancos += 1;
          bot.telegram.sendSticker(tokenChat, tokenWinBranco);
          startRobo();
          casa.length = 0;
          clearInterval(intervalId1);
          clearInterval(idIntervalOito);
          return;
        }
        if (cor === "Preto" || cor === 2) {
          countWin += 1;
          bot.telegram.sendSticker(tokenChat, tokenWin);
          casa.length = 0;
          startRobo();
          clearInterval(intervalId1);
          clearInterval(idIntervalOito);
          return;
        } else {
          bot.telegram.sendMessage(tokenChat, `<b> ❇️ 1º GALE</b>`, {
            parse_mode: "HTML",
          });
          gale += 1;
          clearInterval(intervalId1);
        }
      }, 9000);
      clearInterval(intervalId1);
    }
  }, 3000);

  let intervalId2 = setInterval(() => {
    if (casa.length === 9 && gale === 1 && cor !== null) {
      console.log("processo 2", cor);
      setTimeout(() => {
        if (cor === 0 || cor === "Branco") {
          console.log("COR verificação SINAL palpite", cor);
          countBrancos += 1;
          countWin += 1;
          bot.telegram.sendSticker(tokenChat, tokenWinBranco);
          casa.length = 0;
          startRobo();
          clearInterval(intervalId2);
          clearInterval(idIntervalOito);
          return;
        }
        if (cor === "Preto" || cor === 2) {
          console.log("COR verificação SINAL palpite", cor);
          countWin += 1;
          bot.telegram.sendSticker(tokenChat, tokenWin);
          casa.length = 0;
          startRobo();
          clearInterval(intervalId2);
          clearInterval(idIntervalOito);
          return;
        } else {
          bot.telegram.sendMessage(tokenChat, `<b> ❇️ 2º GALE</b>`, {
            parse_mode: "HTML",
          });
          gale += 1;
          clearInterval(intervalId2);
        }
      }, 9000);
      clearInterval(intervalId2);
    }
  }, 3000);

  let intervalId3 = setInterval(() => {
    if (casa.length === 10 && gale === 2 && cor !== null) {
      console.log("processo 3", cor);
      setTimeout(() => {
        console.log("COR verificação SINAL palpite", cor);
        if (cor === 0 || cor === "Branco") {
          console.log("COR verificação SINAL palpite", cor);
          countBrancos += 1;
          countWin += 1;
          bot.telegram.sendSticker(tokenChat, tokenWinBranco);
          casa.length = 0;
          gale = 0;
          startRobo();
          clearInterval(intervalId3);
          clearInterval(idIntervalOito);
          return;
        }

        if (cor === "Preto" || cor === 2) {
          console.log("COR verificação SINAL palpite", cor);
          countWin += 1;
          bot.telegram.sendSticker(tokenChat, tokenWin);
          casa.length = 0;
          startRobo();
          clearInterval(intervalId3);
          clearInterval(idIntervalOito);
          return;
        } else {
          countLoss += 1;
          bot.telegram.sendSticker(tokenChat, tokenLoss);
          casa.length = 0;
          gale = 0;
          startRobo();
          clearInterval(intervalId3);
          clearInterval(idIntervalOito);
          return;
        }
      }, 9000);
      clearInterval(intervalId3);
    }
  }, 3000);
}

function processar_Onze(cor, dataOnze, roll, casaId) {
  //Onzeeee 11
  console.log(cor);
  console.log(roll);
  console.log(casaId);
  let gale = 0;

  idIntervalOnze = setInterval(() => {
    if (roll != rollAtual && typeof rollAtual !== "undefined") {
      roll = rollAtual;
    }

    if (casaId != idAtual && typeof idAtual !== "undefined") {
      casaId = idAtual;
    }

    if (cor != corAtual && typeof corAtual !== "undefined") {
      cor = corAtual;
      console.log("cor atualizada", cor);
    }

    if (typeof idAtual !== "undefined") {
      if (casa.includes(idAtual)) {
        console.log(`O elemento ${idAtual} já existe no array.`);
      } else {
        casa.push(idAtual);
        console.log(casa);
        console.log(`O elemento ${idAtual} foi adicionado ao array.`);
      }
    }
  }, 1500);

  console.log("PALPITE DE SINAL");
  bot.telegram.sendSticker(tokenChat, tokenAnalisandoMercado);

  let mensagemAnterior = setInterval(() => {
    if (casa.length === 10 && cor != null && roll != null) {
      bot.telegram.sendMessage(
        tokenChat,
        `<b>Palpite Sinal 📊</b> \n\n⏰Entrar após: ${cor === 1 ? "🔴" : ""} ${
          cor === 0 ? "⚪️" : ""
        } ${
          cor === 2 ? "⚫️" : ""
        } ${roll} \n\n💎Entrada: ⚫️ + ⚪️ \n\n✅ G1 \n\n✅ G2 (opcional)`,
        { parse_mode: "HTML" }
      );
      clearInterval(mensagemAnterior);
    }
  }, 3000);

  let intervalId1 = setInterval(() => {
    if (casa.length === 11 && cor !== null) {
      console.log(casa);
      console.log("processo 1", cor);
      setTimeout(() => {
        if (cor === 0 || cor === "Branco") {
          countWin += 1;
          countBrancos += 1;
          bot.telegram.sendSticker(tokenChat, tokenWinBranco);
          startRobo();
          casa.length = 0;
          clearInterval(intervalId1);
          clearInterval(idIntervalOnze);
          return;
        }
        if (cor === "Preto" || cor === 2) {
          countWin += 1;
          bot.telegram.sendSticker(tokenChat, tokenWin);
          casa.length = 0;
          startRobo();
          clearInterval(intervalId1);
          clearInterval(idIntervalOnze);
          return;
        } else {
          bot.telegram.sendMessage(tokenChat, `<b> ❇️ 1º GALE</b>`, {
            parse_mode: "HTML",
          });
          gale += 1;
          clearInterval(intervalId1);
        }
      }, 9000);
      clearInterval(intervalId1);
    }
  }, 3000);

  let intervalId2 = setInterval(() => {
    if (casa.length === 12 && gale === 1 && cor !== null) {
      console.log("processo 2", cor);
      setTimeout(() => {
        if (cor === 0 || cor === "Branco") {
          console.log("COR verificação SINAL palpite", cor);
          countBrancos += 1;
          countWin += 1;
          bot.telegram.sendSticker(tokenChat, tokenWinBranco);
          casa.length = 0;
          startRobo();
          clearInterval(intervalId2);
          clearInterval(idIntervalOnze);
          return;
        }
        if (cor === "Preto" || cor === 2) {
          console.log("COR verificação SINAL palpite", cor);
          countWin += 1;
          bot.telegram.sendSticker(tokenChat, tokenWin);
          casa.length = 0;
          startRobo();
          clearInterval(intervalId2);
          clearInterval(idIntervalOnze);
          return;
        } else {
          bot.telegram.sendMessage(tokenChat, `<b> ❇️ 2º GALE</b>`, {
            parse_mode: "HTML",
          });
          gale += 1;
          clearInterval(intervalId2);
        }
      }, 9000);
      clearInterval(intervalId2);
    }
  }, 3000);

  let intervalId3 = setInterval(() => {
    if (casa.length === 13 && gale === 2 && cor !== null) {
      console.log("processo 3", cor);
      setTimeout(() => {
        console.log("COR verificação SINAL palpite", cor);
        if (cor === 0 || cor === "Branco") {
          console.log("COR verificação SINAL palpite", cor);
          countBrancos += 1;
          countWin += 1;
          bot.telegram.sendSticker(tokenChat, tokenWinBranco);
          casa.length = 0;
          gale = 0;
          startRobo();
          clearInterval(intervalId3);
          clearInterval(idIntervalOnze);
          return;
        }

        if (cor === "Preto" || cor === 2) {
          console.log("COR verificação SINAL palpite", cor);
          countWin += 1;
          bot.telegram.sendSticker(tokenChat, tokenWin);
          casa.length = 0;
          startRobo();
          clearInterval(intervalId3);
          clearInterval(idIntervalOnze);
          return;
        } else {
          countLoss += 1;
          bot.telegram.sendSticker(tokenChat, tokenLoss);
          casa.length = 0;
          gale = 0;
          startRobo();
          clearInterval(intervalId3);
          clearInterval(idIntervalOnze);
          return;
        }
      }, 9000);
      clearInterval(intervalId3);
    }
  }, 3000);
}
