const openPage = document.querySelector('#openPage');
const startClick = document.querySelector('#start');
const display = document.querySelector('#display');
const reloadBtn = document.querySelector('#reloadBtn');
const checkedbox = document.getElementsByTagName('input');
const gameBoard = document.querySelector("#gameBoard");
const DynamicLevelTitle = document.querySelector('#DynamicLevelTitle');
// ---------------- After User Click START ---> Open Game Page : ------------------
startClick.onclick = () => {
  display.style.display = 'flex';
  openPage.style.display = 'none'
}
// ---------------- After User Click Reload ---> Check The Chosen  Level 1-5 : ------------------
reloadBtn.onclick = () => {
  const levelNames = ["BEGINNER", "EASY", "NORMAL", "HARD", "EXPERT"];
  for (let i = 0; i < 5; i++) {
    if (checkedbox[i].checked) {
      DynamicLevelTitle.innerText = levelNames[i];// Dynamic Display Of User
      const selectedLevel = setSizeTable(i);
      createBoard(selectedLevel);
    }
  }
}
// ------------------------------------- Set the Table Size : -------------------------------------
setSizeTable = (selectedLevel) => {
  switch (selectedLevel) {
    case 0: // (Chosen Level = BEGINNER ---> Board-Size = 9X9 )
      gameBoard.style.gridTemplateColumns = `repeat(14,auto)`;
      gameBoard.style.gridTemplateRows = `repeat(9, auto)`;
      return 9;
    case 1: // (Chosen Level = EASY ---> Board-Size = 12X12 )
      gameBoard.style.gridTemplateColumns = `repeat(18, auto)`;
      gameBoard.style.gridTemplateRows = `repeat(12, auto)`;
      return 12;
    case 2: // (Chosen Level = NORMAL ---> Board-Size = 15X15 )
      gameBoard.style.gridTemplateColumns = `repeat(23, auto)`;
      gameBoard.style.gridTemplateRows = `repeat(15, auto)`;
      return 15;
    case 3: // (Chosen Level = HARD ---> Board-Size = 18X18 )
      gameBoard.style.gridTemplateColumns = `repeat(27, auto)`;
      gameBoard.style.gridTemplateRows = `repeat(18, auto)`;
      return 18;
    case 4: // (Chosen Level = EXPERT ---> Board-Size = 21X21 )
      gameBoard.style.gridTemplateColumns = `repeat(32, auto)`;
      gameBoard.style.gridTemplateRows = `repeat(21, auto)`;
      return 21;
  }
}
// ---------------------------------- Create Board Game in HTML : ----------------------------------
// לייעל את הקוד של השלוש תנאים
function createBoard(tableSize) {
  let makeNewTile = "";
  let rows = Math.round(tableSize * 1.5);
  for (let i = 0; i < tableSize; i++) {
    for (let j = 0; j < rows; j++) {
      if (i === 0 || j === 0) {
        makeNewTile += `<div class="lifeTiles" id="x${i}y${j}"></div>`;
      }
      else if (i === 2 / 3 * tableSize + 1) {
        makeNewTile += `<div class="tileDiv grass" id="x${i}y${j}"></div>`;
      }
      else if (i > 2 / 3 * tableSize + 1) {
        makeNewTile += `<div class="tileDiv ground" id="x${i}y${j}"></div>`;
      }
      else if (i === 1 && j !== 0) {
        makeNewTile += `<div class="bidCloud" id="x${i}y${j}"></div>`;
      }
      else {
        makeNewTile += `<div class="tileDiv" id="x${i}y${j}"></div>`;
      }
    }
  }
  gameBoard.innerHTML = makeNewTile;
  gameBoard.style.background = 'rgb(103, 177, 223)';
  if (tableSize === 15) {
    boardDesign(tableSize);
  }
  else { boardDesign1234(tableSize); }
}
// ---------------------- Design Board Game With The Special Classes : ---------------------------
boardDesign = (tableSize) => {
  // Make Trunk Class
  let globalClass = ['x9y16', 'x9y17', 'x9y18', 'x10y2', 'x9y2', 'x8y2', 'x7y2', 'x10y16', 'x10y17', 'x10y18'];
  globalClass.forEach((tile) => {
    tile = document.querySelector(`#${tile}`);
    tile.classList.add("trunk");
  })
  // Make Leaves Class
  globalClass = ['x8y16', 'x8y17', 'x8y18', 'x5y16', 'x6y2', 'x4y2', 'x7y19', 'x7y15', 'x6y18', 'x6y15', 'x6y19', 'x7y16', 'x5y18', 'x5y17', 'x6y17', 'x6y16', 'x4y17', 'x7y17', 'x7y18', 'x6y3', 'x4y3', 'x6y1', 'x4y1', 'x5y3', 'x5y1', 'x5y2'];
  globalClass.forEach((tile) => {
    tile = document.querySelector(`#${tile}`);
    tile.classList.add("leaves");
  })
  // Make Water Class
  globalClass = ['x11y11', 'x12y9', 'x11y12', 'x11y10', 'x11y9', 'x12y11', 'x12y10', 'x12y12', 'x13y9', 'x13y11', 'x13y12', 'x13y10'];
  globalClass.forEach((tile) => {
    tile = document.querySelector(`#${tile}`);
    tile.classList.remove("grass")
    tile.classList.remove("ground")
    tile.classList.add("water");
  })
  // Make cloud Class
  globalClass = ['x3y8', 'x4y7', 'x4y8', 'x4y9', 'x4y10', 'x4y11', 'x3y9', 'x3y10', 'x4y21', 'x4y20', 'x3y20', 'x3y21', 'x4y22', 'x3y19'];
  globalClass.forEach((tile) => {
    tile = document.querySelector(`#${tile}`);
    tile.classList.add("cloud");
  })
  // Make Stone Class
  globalClass = ['x11y8', 'x12y13', 'x11y13', 'x12y8', 'x14y10', 'x14y8', 'x14y13', 'x13y13', 'x14y11', 'x14y9', 'x14y12', 'x13y8',];
  globalClass.forEach((tile) => {
    tile = document.querySelector(`#${tile}`);
    tile.classList.remove("ground")
    tile.classList.remove("grass")
    tile.classList.add("stone");
  })
  // Make TNT Class
  globalClass = ['x10y21', 'x3y3', 'x10y6', 'x9y6'];
  globalClass.forEach((tile) => {
    tile = document.querySelector(`#${tile}`);
    tile.classList.add("tnt");
  })
  // Make Diamond Class
  globalClass = ['x13y2', 'x14y20', 'x14y15', 'x14y7'];
  globalClass.forEach((tile) => {
    tile = document.querySelector(`#${tile}`);
    tile.classList.remove("ground")
    tile.classList.add("diamond");
  })
  // Make Gold Class
  globalClass = ['x14y4', 'x12y6', 'x13y18', 'x12y22'];
  globalClass.forEach((tile) => {
    tile = document.querySelector(`#${tile}`);
    tile.classList.remove("ground")
    tile.classList.add("gold");
  })
  // Make mushrooms Class
  globalClass = ['x10y7', 'x10y19', 'x10y3'];
  globalClass.forEach((tile) => {
    tile = document.querySelector(`#${tile}`);
    tile.classList.add("mushrooms");
  })
  // Make flower Class
  globalClass = ['x10y15', 'x10y5', 'x10y22'];
  globalClass.forEach((tile) => {
    tile = document.querySelector(`#${tile}`);
    tile.classList.add("flower");
  })
  // Make Wood And Fire
  document.querySelector('#x14y0').classList.add("woods2")
  document.querySelector('#x13y0').classList.add("woods2")
  document.querySelector('#x12y0').classList.add("fireTrap")
  document.querySelector('#x11y0').classList.add("fireTrap")
  document.querySelector('#x2y22').classList.add("treasureBox")
  for (let i = 19; i > 0; i--) {
    document.querySelector(`#x${0}y${i}`).classList.add("heart")
  }
  const coins = document.querySelector('#coins')
  const coins2 = document.querySelector('#coins2')
  coins2.style.display = 'inline'
  coins.style.display = 'inline'
  var money = 0;

  // ----------------------------------- User Cliked-----------------------------------
  var lastTurn;
  myCharacter = (currentLocation) => {
    if (lastTurn === 2) {
      lastTurn = 3;
      alert("Game Over");
      location.reload();
    };
    if (currentLocation === 20) {
      document.querySelector(`#x0y20`).classList.add("goodCharacter");
      document.querySelector(`#x0y22`).classList.add("evilCharacter");
    }
    else if (currentLocation == 0 || lastTurn == 1) {
      if (currentLocation == 0) {
        document.querySelector(`#x0y${currentLocation + 3}`).classList.remove("evilCharacter");
        document.querySelector(`#x0y${currentLocation + 2}`).classList.add("evilCharacter");
        lastTurn = 1;
      }
      else {
        setTimeout(document.querySelector(`#x0y${currentLocation + 3}`).classList.remove("evilCharacter"), Math.pow(1000, 15));
        setTimeout(document.querySelector(`#x0y${currentLocation + 2}`).classList.add("evilCharacter"), Math.pow(1000, 15));
        setTimeout(document.querySelector(`#x0y${currentLocation + 1}`).classList.remove("goodCharacter"), Math.pow(1000, 15));
        setTimeout(document.querySelector(`#x0y0`).classList.add("goodCharacterFall"), Math.pow(1000, 15));
        for (let i = 1; i < 11; i++) {
          setTimeout(document.querySelector(`#x${i - 1}y0`).classList.remove("goodCharacterFall"), Math.pow(1000, 15));
          setTimeout(document.querySelector(`#x${i}y0`).classList.add("goodCharacterFall"), Math.pow(1000, 15));
          lastTurn = 2;
        }
      }
    }
    else {
      document.querySelector(`#x0y${currentLocation}`).classList.remove("heart");
      document.querySelector(`#x0y${currentLocation + 1}`).classList.remove("goodCharacter");
      document.querySelector(`#x0y${currentLocation + 3}`).classList.remove("evilCharacter");
      document.querySelector(`#x0y${currentLocation}`).classList.add("goodCharacter");
      document.querySelector(`#x0y${currentLocation + 2}`).classList.add("evilCharacter");
    }
  };
  let currentLocation = 20;
  myCharacter(currentLocation);
  let selected = "";
  const stepBackImg = document.querySelector('#stepBackImg')
  const stepBackText = document.querySelector('#stepBackText')
  // Axe :
  document.querySelector('#axe').addEventListener('click', event => {
    const axe = event.target;
    selected = "axe";
    document.querySelectorAll('.tileDiv').forEach(tile => {
      tile.addEventListener('click', event => {
        const clicedTile = event.target;
        if (clicedTile.classList[1] == "trunk" && selected == "axe") {
          currentLocation--;
          myCharacter(currentLocation);
          stepBackImg.src = "./Assets/Images/Trunk.jpg";
          stepBackText.innerText = "trunk"
          clicedTile.classList.remove(clicedTile.classList[1]);
          clicedTile.classList.add("sky")
          func();
        }
      })
    })
  })
  // Pickaxe :
  document.querySelector('#pickaxe').addEventListener('click', event => {
    const coins = document.querySelector('#coins')
    const pickaxe = event.target;
    selected = "pickaxe";
    document.querySelectorAll('.tileDiv').forEach(tile => {
      tile.addEventListener('click', event => {
        const clicedTile = event.target;
        if (clicedTile.classList[1] == "grass" && selected == "pickaxe" || clicedTile.classList[1] == "ground" && selected == "pickaxe") {
          if (clicedTile.classList[1] == "grass") {

            currentLocation--;
            myCharacter(currentLocation);
            stepBackImg.src = "./Assets/Images/Grass.png";
            stepBackText.innerText = "grass"
            clicedTile.classList.remove(clicedTile.classList[1]);
            clicedTile.classList.add("sky")
          }
          else {
            currentLocation--;
            myCharacter(currentLocation);
            stepBackImg.src = "./Assets/Images/Ground.png";
            stepBackText.innerText = "ground"
            clicedTile.classList.remove(clicedTile.classList[1]);
            clicedTile.classList.add("sky")
          }
        }
      })
    })
  })
  // Sword :
  document.querySelector('#sword').addEventListener('click', event => {
    const sword = event.target;
    selected = "sword";
    document.querySelectorAll('.tileDiv').forEach(tile => {
      tile.addEventListener('click', event => {
        const clicedTile = event.target;
        if (clicedTile.classList[1] == "leaves" && selected == "sword") {
          currentLocation--;
          myCharacter(currentLocation);
          stepBackImg.src = "./Assets/Images/Leaves2.jpg";
          stepBackText.innerText = "leaves"
          clicedTile.classList.remove(clicedTile.classList[1]);
          clicedTile.classList.add("sky")
        }
      })
    })
  })
  // Shovel :
  document.querySelector('#shovel').addEventListener('click', event => {
    const shovel = event.target;
    selected = "shovel";
    document.querySelectorAll('.tileDiv').forEach(tile => {
      tile.addEventListener('click', event => {
        const clicedTile = event.target;
        if (clicedTile.classList[1] == "diamond" && selected == "shovel" || clicedTile.classList[1] == "gold" && selected == "shovel") {
          if (clicedTile.classList[1] == "diamond" && selected == "shovel") {
            money += 125;
            coins.innerText = `${money}/1000 $`;
            currentLocation--;
            myCharacter(currentLocation);
            stepBackImg.src = "./Assets/Images/Blue\ Diamond.jfif";
            stepBackText.innerText = "diamond"
            clicedTile.classList.remove(clicedTile.classList[1]);
            clicedTile.classList.add("sky")
          }
          else {
            money += 125;
            coins.innerText = `${money}/1000 $`;
            currentLocation--;
            myCharacter(currentLocation);
            stepBackImg.src = "./Assets/Images/golddd.png";
            stepBackText.innerText = "gold"
            clicedTile.classList.remove(clicedTile.classList[1]);
            clicedTile.classList.add("sky")
          }
        }
      })
    })
  })
  // Bucket  :
  document.querySelector('#bucket').addEventListener('click', event => {
    const bucket = event.target;
    selected = "bucket";
    document.querySelectorAll('.tileDiv').forEach(tile => {
      tile.addEventListener('click', event => {
        const clicedTile = event.target;
        if (clicedTile.classList[1] == "water" && selected == "bucket") {
          currentLocation--;
          myCharacter(currentLocation);
          stepBackImg.src = "./Assets/Images/water3.jpg";
          stepBackText.innerText = "water"
          clicedTile.classList.remove(clicedTile.classList[1]);
          clicedTile.classList.add("sky")
        }
      })
    })
  })
  // Archery  :
  document.querySelector('#archery').addEventListener('click', event => {
    const archery = event.target;
    selected = "archery";
    document.querySelectorAll('.tileDiv').forEach(tile => {
      tile.addEventListener('click', event => {
        const clicedTile = event.target;
        if (clicedTile.classList[1] == "cloud" && selected == "archery") {
          currentLocation--;
          myCharacter(currentLocation);
          stepBackImg.src = "./Assets/Images/cloud.png";
          stepBackText.innerText = "cloud"
          clicedTile.classList.remove(clicedTile.classList[1]);
          clicedTile.classList.add("sky")
        }
      })
    })
  })
  // Storage Box :
  document.querySelector('#storageBox').addEventListener('click', event => {
    const storageBox = event.target;
    selected = "storageBox";
    const stepBackImg = document.querySelector('#stepBackImg')
    document.querySelectorAll('.tileDiv').forEach(tile => {
      tile.addEventListener('click', event => {
        const clicedTile = event.target;
        if (clicedTile.classList[1] == "sky" && selected == "storageBox") {
          currentLocation--;
          myCharacter(currentLocation);
          const stepBackClass = stepBackText.textContent;
          clicedTile.classList.remove(clicedTile.classList[1]);
          clicedTile.classList.add(stepBackClass);
          stepBackImg.src = "./Assets/Images/James Harden.jfif";
          stepBackText.innerText = "James"
        }
      })
    })
  })
  boardDesign1234 = (tableSize) => { }
}