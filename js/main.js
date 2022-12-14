let model = {
  winConditions: [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [3, 4, 5],
    [1, 4, 7],
    [2, 4, 6],
    [6, 7, 8],
    [2, 5, 8],
  ],

  board: ["", "", "", "", "", "", "", "", ""],
  playerTurn: "X",
  xscore: parseInt(localStorage.getItem("xscore")),
  oscore: parseInt(localStorage.getItem("oscore")),

  xPositions: [],
  oPositions: [],
};

let view = {
  render: function () {
    const body = document.body;
    body.classList.add("text-center");

    let title = this.createElements({
      type: "h1",
      text: "TIC-TAC-TOE",
      parent: app,
    });

    let container = view.createElements({
      classes: ["container", "d-flex", "justify-content-center", "mt-5"],
      parent: app,
    });

    let currentPlayer = view.createElements({
      type: "h3",
      text: model.playerTurn,
      parent: app,
    });

    let scorex = this.createElements({
      type: "h5",
      text: `X Score ${model.xscore ? model.xscore : 0}`,
      parent: app,
    });

    let scoreo = this.createElements({
      type: "h5",
      text: `O Score ${model.oscore ? model.oscore : 0}`,
      parent: app,
    });

    let row = view.createElements({
      classes: ["row"],
      parent: container,
    });

    let col = view.createElements({
      classes: ["col"],
      parent: row,
    });

    for (let i = 0; i < 9; i++) {
      let tile = view.createElements({
        type: "button",
        id: i,
        parent: col,
        classes: ["btns"],
      });

      tile.addEventListener("click", () => {
        tile.innerHTML = model.playerTurn;
        if (model.playerTurn == "X") {
          model.playerTurn = "O";
        } else {
          model.playerTurn = "X";
        }
        tile.disabled = true;
        model.board[i] = tile.innerHTML;
        this.checkWinCondition();
        currentPlayer.innerHTML = model.playerTurn;
      });
    }

    let resetButton = view.createElements({
      type: "button",
      classes: ["text-center", "border", "btn", "btn-primary"],
      text: "RESET BOARD",
      parent: app,
    });
    let resetScore = view.createElements({
      type: "button",
      classes: ["text-center", "border", "btn", "btn-primary"],
      text: "RESET SCORE",
      parent: app,
    });
    resetButton.addEventListener("click", controller.reset);
    resetScore.addEventListener("click", controller.resetBoard);
  },
  createElements: function ({
    type = "div",
    text = "",
    parent,
    classes,
    id = "",
    alt,
    src,
    setAttribute,
  } = {}) {
    let element = document.createElement(type);

    if (classes == undefined) {
      ("");
    } else {
      classes.forEach((classAdded) => {
        element.classList.add(classAdded);
      });
    }
    element.innerHTML = text;
    element.id = id;
    element.alt = alt;
    element.src = src;
    element.setAttribute = setAttribute;
    parent.appendChild(element);
    return element;
  },

  checkWinCondition: function () {
    //check win condiition
    model.board.forEach((item, i) => {
      if (item == "X") {
        if (model.xPositions.includes(i)) {
          return;
        } else {
          model.xPositions.push(i);
        }
      } else if (item == "O") {
        if (model.oPositions.includes(i)) {
          return;
        } else {
          model.oPositions.push(i);
        }
      }
    });
    let sortedX = model.xPositions.sort().toString();
    let sortedO = model.oPositions.sort().toString();

    model.winConditions.forEach((winCondition) => {
      if (sortedX.includes(winCondition)) {
        model.playerTurn = "X Wins";
        localStorage.setItem("xscore", (model.xscore += 1));
        setTimeout(controller.reset, 2000);
      } else if (sortedO.includes(winCondition)) {
        model.playerTurn = "O wins";
        localStorage.setItem("oscore", (model.oscore += 1));
        setTimeout(controller.reset, 2000);
      } else if (!model.board.includes("")) {
        model.playerTurn = "TIE!";
        setTimeout(controller.reset, 2000);
      }
    });
  },
};

let controller = {
  init: function () {
    view.render();
    controller.setGame()
  },
  setGame: function () {
    let xscore = localStorage.getItem("xscore");
    let oscore = localStorage.getItem("oscore");

    if (xscore == undefined && oscore == undefined) {
        controller.resetScore()
    } else {
      return;
    }
  },

  reset: function () {
    const body = document.body;
    body.classList.add("text-center");
    const app = document.getElementById("app");
    body.classList.add("text-center");

    app.remove();
    view.createElements({
      id: "app",
      parent: body,
    });

    model.board = ["", "", "", "", "", "", "", "", ""];
    model.xPositions = [];
    model.oPositions = [];
    model.playerTurn = "X";
    controller.init();
  },

  updatePlayer: function () {
    if (model.playerTurn == "X") {
      model.playerTurn = "O";
    } else if (model.playerTurn == "O") {
      model.playerTurn = "X";
    }
  },

  resetScore: function () {
    model.xscore = 0;
    model.oscore = 0;
    localStorage.setItem("xscore", 0);
    localStorage.setItem("oscore", 0);
  },

  resetBoard: function () {
    controller.resetScore();
    controller.reset();
  },
};
controller.init();