const tiles = document.querySelectorAll(".tile");
const tilesContainer = document.getElementById("tiles-container");

const numRows = 7;
const numCols = 5;

function indexToRowCol(index) {
  const row = Math.floor(index / numCols);
  const col = index % numCols;
  return { row, col };
}

function doTilesFormQuadrilateral(clickedTiles) {
  if (clickedTiles.length < 1) {
    return false;
  }

  const rowCounts = {};
  const colCounts = {};

  clickedTiles.forEach(({ row, col }) => {
    rowCounts[row] = (rowCounts[row] || 0) + 1;
    colCounts[col] = (colCounts[col] || 0) + 1;
  });

  const rowValues = Object.values(rowCounts);
  const colValues = Object.values(colCounts);

  const minRowCount = Math.min(...rowValues);
  const maxRowCount = Math.max(...rowValues);
  const minColCount = Math.min(...colValues);
  const maxColCount = Math.max(...colValues);

  const totalTiles = minRowCount * maxColCount;

  return (
    clickedTiles.length === totalTiles &&
    (minRowCount === maxRowCount || minColCount === maxColCount)
  );
}

function checkForQuadrilateral() {
  const clickedTiles = [];

  tiles.forEach((tile, index) => {
    if (tile.getAttribute("data-clicked") === "true") {
      const { row, col } = indexToRowCol(index);
      clickedTiles.push({ index, row, col });
    }
  });

  return doTilesFormQuadrilateral(clickedTiles);
}

function getTopRightTile() {
  const clickedTiles = Array.from(tiles).filter(
    (tile) => tile.getAttribute("data-clicked") === "true"
  );

  return clickedTiles.reduce((topRight, tile) => {
    const topRightRect = topRight.getBoundingClientRect();
    const tileRect = tile.getBoundingClientRect();

    if (
      tileRect.top < topRightRect.top ||
      (tileRect.top === topRightRect.top && tileRect.right > topRightRect.right)
    ) {
      return tile;
    } else {
      return topRight;
    }
  }, clickedTiles[0]);
}

function createPopupDiv() {
  const popupDiv = document.createElement("div");
  popupDiv.classList.add("popup-div");

  const heading = document.createElement("h3");
  heading.textContent = "Upload";
  popupDiv.appendChild(heading);

  const input = document.createElement("input");
  input.type = "file";
  input.accept = "image/png, image/jpeg";
  input.style.display = "none";

  input.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageUrl = event.target.result;
        displayImageInTiles(imageUrl);
      };
      reader.readAsDataURL(file);
    }
  });

  popupDiv.appendChild(input);

  popupDiv.addEventListener("click", (event) => {
    event.stopPropagation();
    input.click();
  });

  return popupDiv;
}

function showPopupDiv(topRightTile) {
  const estheticContainer = document.querySelector(".esthetic");
  const popupDiv = createPopupDiv();

  const estheticContainerRect = estheticContainer.getBoundingClientRect();
  const topRightTileRect = topRightTile.getBoundingClientRect();

  popupDiv.style.left = `${
    topRightTileRect.right - estheticContainerRect.left
  }px`;
  popupDiv.style.top = `${
    topRightTileRect.top - estheticContainerRect.top + window.scrollY
  }px`;

  estheticContainer.appendChild(popupDiv);
}

function getTopLeftTile() {
  const clickedTiles = Array.from(tiles).filter(
    (tile) => tile.getAttribute("data-clicked") === "true"
  );

  return clickedTiles.reduce((topLeft, tile) => {
    const topLeftRect = topLeft.getBoundingClientRect();
    const tileRect = tile.getBoundingClientRect();

    if (
      tileRect.top < topLeftRect.top ||
      (tileRect.top === topLeftRect.top && tileRect.left < topLeftRect.left)
    ) {
      return tile;
    } else {
      return topLeft;
    }
  }, clickedTiles[0]);
}

function isMajorityOnRightSide() {
  const clickedTiles = Array.from(tiles).filter(
    (tile) => tile.getAttribute("data-clicked") === "true"
  );

  const rightSideTiles = clickedTiles.filter(({ index }) => {
    const { col } = indexToRowCol(index);
    return col === 3 || col === 4;
  });

  // Remove the misplaced "return" statement here
  rightSideTiles.length > clickedTiles.length / 2;
}

function showPopupDiv(topRightTile, topLeftTile) {
  const estheticContainer = document.querySelector(".esthetic");
  const popupDiv = createPopupDiv();

  const estheticContainerRect = estheticContainer.getBoundingClientRect();

  if (isMajorityOnRightSide()) {
    const topLeftTileRect = topLeftTile.getBoundingClientRect();
    popupDiv.style.left = `${
      topLeftTileRect.left -
      estheticContainerRect.left -
      parseInt(popupDiv.style.width, 10)
    }px`;
    popupDiv.style.top = `${
      topLeftTileRect.top - estheticContainerRect.top + window.scrollY
    }px`;
  } else {
    const topRightTileRect = topRightTile.getBoundingClientRect();
    popupDiv.style.left = `${
      topRightTileRect.right - estheticContainerRect.left
    }px`;
    popupDiv.style.top = `${
      topRightTileRect.top - estheticContainerRect.top + window.scrollY
    }px`;
  }

  estheticContainer.appendChild(popupDiv);
}

tiles.forEach((tile, index) => {
  tile.setAttribute("data-clicked", "false");

  tile.addEventListener("click", (event) => {
    event.stopPropagation();

    const clicked = tile.getAttribute("data-clicked") === "true";
    tile.style.filter = clicked ? "" : "brightness(1.75)";
    tile.setAttribute("data-clicked", !clicked);

    const { row, col } = indexToRowCol(index);
    console.log("Last selected tile column index:", col);

    if (checkForQuadrilateral()) {
      console.log("quaaaaaad");
      const topRightTile = getTopRightTile();
      const topLeftTile = getTopLeftTile();
      showPopupDiv(topRightTile, topLeftTile);
    } else {
      // Remove any existing popup divs
      const existingPopupDivs = document.querySelectorAll(".popup-div");
      existingPopupDivs.forEach((popupDiv) => popupDiv.remove());
    }
  });
});

const estheticContainer = document.querySelector(".esthetic");

estheticContainer.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("popup-div") ||
    event.target.parentElement.classList.contains("popup-div")
  ) {
    return;
  }

  tiles.forEach((tile) => {
    tile.style.filter = "";
    tile.setAttribute("data-clicked", "false");
  });

  // Remove any existing popup divs
  const existingPopupDivs = document.querySelectorAll(".popup-div");
  existingPopupDivs.forEach((popupDiv) => popupDiv.remove());
});

document.addEventListener("click", () => {
  tiles.forEach((tile) => {
    tile.style.filter = "";
    tile.setAttribute("data-clicked", "false");
  });

  // Remove any existing popup divs
  const existingPopupDivs = document.querySelectorAll(".popup-div");
  existingPopupDivs.forEach((popupDiv) => popupDiv.remove());
});

tilesContainer.addEventListener("click", (event) => {
  event.stopPropagation();
});

function displayImageInTiles(imageUrl) {
  const tiles = document.querySelectorAll(".tile");
  const clickedTiles = Array.from(tiles).filter(
    (tile) => tile.getAttribute("data-clicked") === "true"
  );

  if (clickedTiles.length === 0) {
    console.log("no tiles selected");
    return;
  }

  const newTile = document.createElement("div");
  newTile.classList.add("tile");
  newTile.style.backgroundImage = `url(${imageUrl})`;
  newTile.style.backgroundSize = "cover";
  newTile.style.backgroundPosition = "center";

  const parent = clickedTiles[0].parentElement;
  parent.insertBefore(newTile, clickedTiles[0]);

  clickedTiles.forEach((tile) => {
    tile.remove();
  });

  const existingPopupDivs = document.querySelectorAll(".popup-div");
  existingPopupDivs.forEach((popupDiv) => popupDiv.remove());
}
