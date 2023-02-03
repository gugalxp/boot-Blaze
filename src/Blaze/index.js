import axios from "axios";
import { Telegraf } from "telegraf";

const bot = new Telegraf("aaaaaaaaaaaaaaaaaaaaaaaaaaaa");
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
const tokenPareDeOperar =
  "CAACAgEAAxkBAAIBkmPZg5xpeUc3544vxYLoJkCV95IhAALFAQACJ9qRR4B_fxjRTzKmLQQ";

let casa = [];
let idInterval;
let rollAtual;
let idAtual;
let countWin;
let countLoss;
axios.defaults.timeout = 1000000;
let countBrancos;
var countAcertividade = countWin + countBrancos - countLoss;
var countGeral = countWin + countBrancos + countLoss;
var casaId;
var corAtual;

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

  if (countGeral === 10) {
    let porcentagem = (countAcertividade / 10) * 100;
    bot.telegram.sendMessage(
      tokenChat,
      `<b>Play Sinais 💎</b> \n\n ✅ ${countWin} WINS  \n\n ❌ ${countLoss} RED \n\n ⚪️ ${countBrancos} BRANCOS \n\n ${porcentagem}% de Assertividade`,
      { parse_mode: "HTML" }
    );
    countGeral = 0;
  }
}, 1000);

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

      return telegram((roll = 13), cor, casaId);
    })
    .catch((err) => {
      console.error("O erro da requisição da startRobo é: ", err);
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

function telegram(roll, cor, casaId) {
  console.log("local Atual", roll);
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

  if (roll === 13) {
    processar_Treze(cor, dataTreze, roll, casaId);
  }

  //DOZE

  if (roll === 12) {
    processar_Doze(cor, dataDoze, roll, casaId);
  }

  //DEZ

  if (roll === 10) {
    processar_Dez(cor, dataDez, roll, casaId);
  }

  //NOVE
  if (roll === 9) {
    processar_Nove(cor, dataNove, roll, casaId);
  }

  //SEIS

  if (roll === 6) {
    processar_Seis(cor, dataSeis, roll, casaId);
  }

  //OITO

  if (roll === 8) {
    processar_Oito(cor, dataOito, roll, casaId);
  }

  //ONZE

  if (roll === 11) {
    processar_Onze(cor, dataOnze, roll, casaId);
  }
}

startRobo();

function processar_Treze(cor, dataTreze, roll, casaId) {
  //TREEEEEEZE 13
  console.log(cor);
  console.log(roll);
  console.log(casaId);
  var gale = 0;

  idInterval = setInterval(() => {
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
  bot.telegram.sendMessage(
    tokenChat,
    `<b>Palpite Sinal 📊</b> \n\n⏰HORÁRIO: ${formatDate(
      dataTreze
    )} \n\n💎Entrada: 🔴 + ⚪️ \n\n✅ G1 \n\n✅ G2 (opcional)`,
    { parse_mode: "HTML" }
  );

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
          clearInterval(idInterval);
          return;
        }
        if (cor === "Vermelho" || cor === 1) {
          countWin += 1;
          bot.telegram.sendSticker(tokenChat, tokenWin);
          casa.length = 0;
          startRobo();
          clearInterval(intervalId1);
          clearInterval(idInterval);
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
  }, 1000);

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
          clearInterval(idInterval);
          return;
        }
        if (cor === "Vermelho") {
          console.log("COR verificação SINAL palpite", cor);
          countWin += 1;
          bot.telegram.sendSticker(tokenChat, tokenWin);
          casa.length = 0;
          startRobo();
          clearInterval(intervalId2);
          clearInterval(idInterval);
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
  }, 1000);

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
          startRobo();
          clearInterval(intervalId3);
          clearInterval(idInterval);
          return;
        }

        if (cor === "Vermelho" || cor === 1) {
          console.log("COR verificação SINAL palpite", cor);
          countWin += 1;
          bot.telegram.sendSticker(tokenChat, tokenWin);
          casa.length = 0;
          startRobo();
          clearInterval(intervalId3);
          clearInterval(idInterval);
          return;
        } else {
          countLoss += 1;
          bot.telegram.sendSticker(tokenChat, tokenLoss);
          casa.length = 0;
          startRobo();
          clearInterval(intervalId3);
          clearInterval(idInterval);
          return;
        }
      }, 9000);
      clearInterval(intervalId3);
    }
  }, 1000);
}

function processar_Doze(cor, dataDoze, roll, casaId) {
  //     //DOZZZZZZZE 12
  setInterval(() => {
    if (cor !== corAtual && typeof corAtual !== "undefined") {
      cor = corAtual;
    }
    if (roll != rollAtual && typeof rollAtual !== "undefined") {
      roll = rollAtual;
    }
    if (casaId != idAtual && typeof idAtual !== "undefined") {
      casaId = idAtual;
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
      console.log("O numero foi computado: ", roll);
      countBrancos += 1;
      countWin += 1;
      startRobo();
      return bot.telegram.sendSticker(tokenChat, tokenWinBranco);
    }

    if (cor === "Preto" || cor === 2) {
      console.log("O numero foi computado: ", roll);
      countWin += 1;
      bot.telegram.sendSticker(tokenChat, tokenWin);
      startRobo();
      return;
    } else if (cor !== "Preto" || cor !== 2) {
      console.log("O numero foi computado: ", roll);
      bot.telegram.sendMessage(tokenChat, `<b>❇️ 1º GALE</b>`, {
        parse_mode: "HTML",
      });
      setTimeout(() => {
        if (cor === 0 || cor === "Branco") {
          console.log("O numero foi computado: ", roll);
          countBrancos += 1;
          countWin += 1;
          startRobo();
          return bot.telegram.sendSticker(tokenChat, tokenWinBranco);
        }
        if (cor === "Preto" || cor === 2) {
          console.log("O numero foi computado: ", roll);
          countWin += 1;
          bot.telegram.sendSticker(tokenChat, tokenWin);
          startRobo();
          return;
        } else if (cor !== "Preto" || cor !== 2) {
          console.log("O numero foi computado: ", roll);
          bot.telegram.sendMessage(tokenChat, `<b> ❇️ 2º GALE</b>`, {
            parse_mode: "HTML",
          });
          setTimeout(() => {
            if (cor === 0 || cor === "Branco") {
              console.log("O numero foi computado: ", roll);
              countBrancos += 1;
              countWin += 1;
              startRobo();
              return bot.telegram.sendSticker(tokenChat, tokenWinBranco);
            }
            if (cor === "Preto" || cor === 2) {
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
  }, 390000);
}

function processar_Dez(cor, dataDez, roll, casaId) {
  //     //DEZZZZZZZ 10
  setInterval(() => {
    if (cor !== corAtual && typeof corAtual !== "undefined") {
      cor = corAtual;
    }
    if (roll != rollAtual && typeof rollAtual !== "undefined") {
      roll = rollAtual;
    }
    if (casaId != idAtual && typeof idAtual !== "undefined") {
      casaId = idAtual;
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
      console.log("O numero foi computado: ", roll);
      countBrancos += 1;
      countWin += 1;
      startRobo();
      return bot.telegram.sendSticker(tokenChat, tokenWinBranco);
    }

    if (cor === "Vermelho" || cor === 1) {
      console.log("O numero foi computado: ", roll);
      countBrancos += 1;
      countWin += 1;
      bot.telegram.sendSticker(tokenChat, tokenWin);
      startRobo();
      return;
    } else if (cor !== "Vermelho" || cor !== 1) {
      console.log("O numero foi computado: ", roll);

      bot.telegram.sendMessage(tokenChat, `<b> ❇️ 1º GALE</b>`, {
        parse_mode: "HTML",
      });

      setTimeout(() => {
        if (cor === 0 || cor === "Branco") {
          console.log("O numero foi computado: ", roll);
          countBrancos += 1;
          countWin += 1;
          startRobo();
          return bot.telegram.sendSticker(tokenChat, tokenWinBranco);
        }
        if (cor === "Vermelho" || cor === 1) {
          console.log("O numero foi computado: ", roll);
          countWin += 1;
          bot.telegram.sendSticker(tokenChat, tokenWin);
          startRobo();
          return;
        } else if (cor !== "Vermelho" || cor !== 1) {
          console.log("O numero foi computado: ", roll);
          bot.telegram.sendMessage(tokenChat, `<b> ❇️ 2º GALE</b>`, {
            parse_mode: "HTML",
          });
          setTimeout(() => {
            if (cor === 0 || cor === "Branco") {
              console.log("O numero foi computado: ", roll);
              countBrancos += 1;
              countWin += 1;
              startRobo();
              return bot.telegram.sendSticker(tokenChat, tokenWinBranco);
            }
            if (cor === "Vermelho" || cor === 1) {
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
  }, 325000);
}

function processar_Nove(cor, dataNove, roll, casaId) {
  setInterval(() => {
    if (cor !== corAtual && typeof corAtual !== "undefined") {
      cor = corAtual;
    }
    if (roll != rollAtual && typeof rollAtual !== "undefined") {
      roll = rollAtual;
    }
    if (casaId != idAtual && typeof idAtual !== "undefined") {
      casaId = idAtual;
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
      console.log("O numero foi computado: ", roll);
      countBrancos += 1;
      countWin += 1;
      startRobo();
      return bot.telegram.sendSticker(tokenChat, tokenWinBranco);
    }

    if (cor === "Vermelho" || cor === 1) {
      console.log("O numero foi computado: ", roll);
      countBrancos += 1;
      countWin += 1;
      bot.telegram.sendSticker(tokenChat, tokenWin);
      startRobo();
      return;
    } else if (cor !== "Vermelho" || cor !== 1) {
      console.log("O numero foi computado: ", roll);
      bot.telegram.sendMessage(tokenChat, `<b>❇️ 1º GALE</b>`, {
        parse_mode: "HTML",
      });
      setTimeout(() => {
        if (cor === 0 || cor === "Branco") {
          console.log("O numero foi computado: ", roll);
          countBrancos += 1;
          countWin += 1;
          startRobo();
          return bot.telegram.sendSticker(tokenChat, tokenWinBranco);
        }
        if (cor === "Vermelho" || cor === 1) {
          console.log("O numero foi computado: ", roll);
          countBrancos += 1;
          countWin += 1;
          bot.telegram.sendSticker(tokenChat, tokenWin);
          startRobo();
          return;
        } else if (cor !== "Vermelho" || cor !== 1) {
          console.log("O numero foi computado: ", roll);
          bot.telegram.sendMessage(tokenChat, `<b>❇️ 2º GALE</b>`, {
            parse_mode: "HTML",
          });
          setTimeout(() => {
            if (cor === 0 || cor === "Branco") {
              console.log("O numero foi computado: ", roll);
              countBrancos += 1;
              countWin += 1;
              startRobo();
              return bot.telegram.sendSticker(tokenChat, tokenWinBranco);
            }
            if (cor === "Vermelho" || cor === 1) {
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
  }, 247000); //247000
}

function processar_Seis(cor, dataSeis, roll, casaId) {
  //     //OIIIIIIIIIITO 6
  setInterval(() => {
    if (cor !== corAtual && typeof corAtual !== "undefined") {
      cor = corAtual;
    }
    if (roll != rollAtual && typeof rollAtual !== "undefined") {
      roll = rollAtual;
    }
    if (casaId != idAtual && typeof idAtual !== "undefined") {
      casaId = idAtual;
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
      console.log("O numero foi computado: ", roll);
      countBrancos += 1;
      countWin += 1;
      startRobo();
      return bot.telegram.sendSticker(tokenChat, tokenWinBranco);
    }

    if (cor === "Vermelho" || cor === 1) {
      console.log("O numero foi computado: ", roll);

      countWin += 1;
      bot.telegram.sendSticker(tokenChat, tokenWin);
      startRobo();
      return;
    } else if (cor !== "Vermelho" || cor !== 1) {
      console.log("O numero foi computado: ", roll);

      bot.telegram.sendMessage(tokenChat, `<b>❇️ 1º GALE</b>`, {
        parse_mode: "HTML",
      });
      setTimeout(() => {
        if (cor === 0 || cor === "Branco") {
          console.log("O numero foi computado: ", roll);
          countBrancos += 1;
          countWin += 1;
          startRobo();
          return bot.telegram.sendSticker(tokenChat, tokenWinBranco);
        }
        if (cor === "Vermelho" || cor === 1) {
          console.log("O numero foi computado: ", roll);

          countWin += 1;
          bot.telegram.sendSticker(tokenChat, tokenWin);
          startRobo();
          return;
        } else if (cor !== "Vermelho" || cor !== 1) {
          console.log("O numero foi computado: ", roll);

          bot.telegram.sendMessage(tokenChat, `<b> ❇️ 2º GALE</b>`, {
            parse_mode: "HTML",
          });
          setTimeout(() => {
            if (cor === 0 || cor === "Branco") {
              console.log("O numero foi computado: ", roll);
              countBrancos += 1;
              countWin += 1;
              startRobo();
              return bot.telegram.sendSticker(tokenChat, tokenWinBranco);
            }
            if (cor === "Vermelho" || cor === 1) {
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
  }, 212000);
}

function processar_Oito(cor, dataOito, roll, casaId) {
  //     //OITOO
  setInterval(() => {
    if (cor !== corAtual && typeof corAtual !== "undefined") {
      cor = corAtual;
    }
    if (roll != rollAtual && typeof rollAtual !== "undefined") {
      roll = rollAtual;
    }
    if (casaId != idAtual && typeof idAtual !== "undefined") {
      casaId = idAtual;
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
      console.log("O numero foi computado: ", roll);
      countBrancos += 1;
      countWin += 1;
      startRobo();
      return bot.telegram.sendSticker(tokenChat, tokenWinBranco);
    }

    console.log("COR verificação SINAL palpite", cor);

    if (cor === "Preto" || cor === 2) {
      console.log("O numero foi computado: ", roll);
      countWin += 1;
      bot.telegram.sendSticker(tokenChat, tokenWin);
      startRobo();
      return;
    } else if (cor !== "Preto" || cor !== 2) {
      console.log("O numero foi computado: ", roll);
      bot.telegram.sendMessage(tokenChat, `<b> ❇️ 1º GALE</b>`, {
        parse_mode: "HTML",
      });
      setTimeout(() => {
        console.log("COR verificação SINAL G1", cor);

        if (cor === 0 || cor === "Branco") {
          console.log("O numero foi computado: ", roll);
          countBrancos += 1;
          countWin += 1;
          startRobo();
          return bot.telegram.sendSticker(tokenChat, tokenWinBranco);
        }

        if (cor === "Preto" || cor === 2) {
          console.log("O numero foi computado: ", roll);
          countWin += 1;
          bot.telegram.sendSticker(tokenChat, tokenWin);
          startRobo();
          return;
        } else if (cor !== "Preto" || cor !== 2) {
          console.log("O numero foi computado: ", roll);
          bot.telegram.sendMessage(tokenChat, `<b> ❇️ 2º GALE</b>`, {
            parse_mode: "HTML",
          });
          setTimeout(() => {
            console.log("COR verificação SINAL G2", cor);
            if (cor === 0 || cor === "Branco") {
              console.log("O numero foi computado: ", roll);
              countBrancos += 1;
              countWin += 1;
              startRobo();
              return bot.telegram.sendSticker(tokenChat, tokenWinBranco);
            }
            if (cor === "Preto" || cor === 2) {
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
  }, 267000); //262000
}

function processar_Onze(cor, dataOnze, roll, casaId) {
  // ONZEEEEEEEEEEE 11
  setInterval(() => {
    if (cor !== corAtual && typeof corAtual !== "undefined") {
      cor = corAtual;
    }
    if (roll != rollAtual && typeof rollAtual !== "undefined") {
      roll = rollAtual;
    }
    if (casaId != idAtual && typeof idAtual !== "undefined") {
      casaId = idAtual;
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
      console.log("O numero foi computado: ", roll);
      countBrancos += 1;
      countWin += 1;
      startRobo();
      return bot.telegram.sendSticker(tokenChat, tokenWinBranco);
    }

    if (cor === "Preto" || cor === 2) {
      console.log("O numero foi computado: ", roll);
      countWin += 1;
      bot.telegram.sendSticker(tokenChat, tokenWin);
      startRobo();
      return;
    } else if (cor !== "Preto" || cor !== 2) {
      console.log("O numero foi computado: ", roll);
      bot.telegram.sendMessage(tokenChat, `<b> ❇️ 1º GALE</b>`, {
        parse_mode: "HTML",
      });
      setTimeout(() => {
        if (cor === 0 || cor === "Branco") {
          console.log("O numero foi computado: ", roll);
          countBrancos += 1;
          countWin += 1;
          startRobo();
          return bot.telegram.sendSticker(tokenChat, tokenWinBranco);
        }
        if (cor === "Preto" || cor === 2) {
          console.log("O numero foi computado: ", roll);
          countWin += 1;
          bot.telegram.sendSticker(tokenChat, tokenWin);
          startRobo();
          return;
        } else if (cor !== "Preto" || cor !== 2) {
          console.log("O numero foi computado: ", roll);
          bot.telegram.sendMessage(tokenChat, `<b> ❇️ 2º GALE</b>`, {
            parse_mode: "HTML",
          });
          setTimeout(() => {
            if (cor === 0 || cor === "Branco") {
              console.log("O numero foi computado: ", roll);
              countBrancos += 1;
              countWin += 1;
              startRobo();
              return bot.telegram.sendSticker(tokenChat, tokenWinBranco);
            }
            if (cor === "Preto" || cor === 2) {
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
  }, 314000);
}
