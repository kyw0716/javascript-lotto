const { LottoGameController } = require("./controller/LottoGameController");

class App {
  #lottoGame = new LottoGameController();

  play() {
    this.#lottoGame.startGame();
  }
}

module.exports = App;
