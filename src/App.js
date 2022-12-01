const { LottoGameController } = require("./controller/LottoGameController");

class App {
  play() {
    const lottoGame = new LottoGameController();
    lottoGame.startGame();
  }
}

module.exports = App;
new App().play();
