// interval functions
const getSadInterval = () => Date.now() + 1000;

const getGoneInterval = () =>
  Date.now() + Math.floor(Math.random() * 18000) + 2000;

const getHungryInterval = () =>
  Date.now() + Math.floor(Math.random() * 3000) + 2000;

const getKingStatus = () => Math.random() > 0.9;

let score = 0;

// status of all the moles
const moles = [
  {
    status: "sad",
    next: getSadInterval(),
    king: false,
    node: document.querySelector("#hole-0"),
  },
  {
    status: "sad",
    next: getSadInterval(),
    king: false,
    node: document.querySelector("#hole-1"),
  },
  {
    status: "sad",
    next: getSadInterval(),
    king: false,
    node: document.querySelector("#hole-2"),
  },
  {
    status: "sad",
    next: getSadInterval(),
    king: false,
    node: document.querySelector("#hole-3"),
  },
  {
    status: "sad",
    next: getSadInterval(),
    king: false,
    node: document.querySelector("#hole-4"),
  },
  {
    status: "sad",
    next: getSadInterval(),
    king: false,
    node: document.querySelector("#hole-5"),
  },
  {
    status: "sad",
    next: getSadInterval(),
    king: false,
    node: document.querySelector("#hole-6"),
  },
  {
    status: "sad",
    next: getSadInterval(),
    king: false,
    node: document.querySelector("#hole-7"),
  },
  {
    status: "sad",
    next: getSadInterval(),
    king: false,
    node: document.querySelector("#hole-8"),
  },
  {
    status: "sad",
    next: getSadInterval(),
    king: false,
    node: document.querySelector("#hole-9"),
  },
];

// getting next status of the mole
function getNextStatus(mole) {
  switch (mole.status) {
    case "sad":
    case "fed":
      // makeleaving();
      mole.next = getSadInterval();
      mole.status = "leaving";

      if (mole.king) {
        mole.node.children[0].src = "./img/king-mole-leaving.png";
      } else {
        mole.node.children[0].src = "./img/mole-leaving.png";
      }
      break;
    case "leaving":
      mole.next = getGoneInterval();
      mole.status = "gone";
      mole.node.children[0].classList.add("gone");
      break;
    case "gone":
      mole.status = "hungry";
      mole.king = getKingStatus();
      mole.next = getHungryInterval();
      mole.node.children[0].classList.add("hungry");
      mole.node.children[0].classList.remove("gone");

      if (mole.king) {
        mole.node.children[0].src = "./img/king-mole-hungry.png";
      } else {
        mole.node.children[0].src = "./img/mole-hungry.png";
      }
      break;
    case "hungry":
      mole.status = "sad";
      mole.next = getSadInterval();
      mole.node.children[0].classList.remove("hungry");

      if (mole.king) {
        mole.node.children[0].src = "./img/king-mole-sad.png";
      } else {
        mole.node.children[0].src = "./img/mole-sad.png";
      }
      break;
  }
}

// when user feed the mole
function feed(event) {
  if (
    event.target.tagName !== "IMG" ||
    !event.target.classList.contains("hungry")
  ) {
    return;
  }

  const mole = moles[parseInt(event.target.dataset.index)];

  mole.status = "fed";
  mole.next = getSadInterval();

  if (mole.king) {
    mole.node.children[0].src = "./img/king-mole-fed.png";
  } else {
    mole.node.children[0].src = "./img/mole-fed.png";
  }

  mole.node.children[0].classList.remove("hungry");

  if (mole.king) {
    score += 2;
  } else {
    score++;
  }

  if (score >= 10) {
    win();
  }

  document.querySelector(".worm-container").style.width = `${10 * score}%`;
}

// when the user win the game
function win() {
  document.querySelector(".background").classList.add("hide");
  document.querySelector(".win").classList.remove("hide");
}

// using requestAnimationFrame
let runAgainAt = Date.now() + 1000;
function nextFrame() {
  const now = Date.now();

  if (runAgainAt <= now) {
    for (let i = 0; i < moles.length; i++) {
      if (moles[i].next <= now) {
        getNextStatus(moles[i]);
      }
    }
    runAgainAt = now + 1000;
  }

  requestAnimationFrame(nextFrame);
}

document.querySelector(".background").addEventListener("click", feed);

nextFrame();
