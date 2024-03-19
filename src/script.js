import * as THREE from "three";
import gsap from "gsap";
import * as dat from "lil-gui";

document.addEventListener("DOMContentLoaded", function () {
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    document.getElementById("mobile-warning").style.display = "flex";
    // Optional: Hide the rest of your site's content if necessary
    document.body.style.overflow = "hidden"; // Prevent scrolling
    // For hiding everything else, you might add a specific class to all other elements or directly manipulate their style here
  }
});

//DOM Elements
const canvas = document.querySelector("canvas.webgl");

const logo = document.querySelector("#logo");
const scrollBtn = document.querySelector("#scroll-btn");
const scrollBtn2 = document.querySelector("#scroll-btn2");
const scrollBtn3 = document.querySelector("#scroll-btn3");
const scrollBtn4 = document.querySelector("#scroll-btn4");

const page1 = document.querySelector(".page-1");
const page2 = document.querySelector(".page-2");
const page3 = document.querySelector(".page-3");
const page4 = document.querySelector(".page-4");
const page5 = document.querySelector(".page-5");

const body = document.querySelector("body");
const main = document.querySelector("#main");
const heading = document.querySelector(".heading");
const description = document.querySelector(".description");
const learn = document.querySelectorAll(".learn");
console.log(learn);

// Pantone panels
const panel1 = document.querySelector(".panel-1");
const panel2 = document.querySelector(".panel-2");
const panel3 = document.querySelector(".panel-3");
const panel4 = document.querySelector(".panel-4");
const panel5 = document.querySelector(".panel-5");

let position = -5; // Checks position of tiles
let scroll = false; // Checks if the user should be able to scroll tiles

let landingIframe = document.getElementsByClassName("landing");

console.log();

const canvasStyleWidth = parseFloat(getComputedStyle(canvas).width);
const widthRatio = canvasStyleWidth / canvas.width;

logo.addEventListener("click", function () {
  page1.scrollIntoView({ behavior: "smooth" });
  console.log("logo clicked");
  changeColor();
  position = -5;
  tileState();
});

scrollBtn.addEventListener("click", function () {
  position = -5;
  // page2.style.display = "block";
  page2.scrollIntoView({ behavior: "smooth" });
  changeToLime();
  body.style.backgroundColor = "#fafaf9";
  heading.style.color = "#b1ee46s";
  description.style.color = "#b1ee46s";
});

scrollBtn2.addEventListener("click", function () {
  page3.style.display = "block";
  page3.scrollIntoView({ behavior: "smooth" });
  changeColor();
});

scrollBtn3.addEventListener("click", function () {
  page4.style.display = "block";
  page4.scrollIntoView({ behavior: "smooth" });
});

const scene = new THREE.Scene();

class Tile {
  constructor(name, imagePath, sideColor) {
    this.dimensions = { x: 1.8, y: 3.7, z: 0.2 };
    this.name = name;
    this.mesh = undefined;
    this.imagePath = imagePath;
    this.sideColor = sideColor;
  }

  async createMesh() {
    const geometry = new THREE.BoxGeometry(
      this.dimensions.x,
      this.dimensions.y,
      this.dimensions.z
    );
    const loader = new THREE.TextureLoader();
    const texture = await loader.load(this.imagePath);

    const materials = [
      new THREE.MeshBasicMaterial({ color: this.sideColor }),
      new THREE.MeshBasicMaterial({ color: this.sideColor }),
      new THREE.MeshBasicMaterial({ color: this.sideColor }),
      new THREE.MeshBasicMaterial({ color: this.sideColor }),
      new THREE.MeshBasicMaterial({ map: texture }),
      new THREE.MeshBasicMaterial({ color: this.sideColor }),
    ];

    this.mesh = new THREE.Mesh(geometry, materials);
    return this.mesh;
  }
}

let distances = { x: 2.5, z: 0.2, rY: 0.1 };
let tiles = []; // Array to store tiles
position = -5; // Assuming this is your initial state
scroll = false; // Initial scroll state

const tileImages = [
  { name: "choco", path: "/images/chocoTile.jpg", color: 0xf7ead7 },
  { name: "royal", path: "/images/horrorTile.jpg", color: 0x2b2b28 },
  { name: "iri", path: "/images/iriTile.jpg", color: 0x02086a },
  { name: "nature", path: "/images/natureTile.jpg", color: 0xc1c9dd },
  { name: "lime", path: "/images/limeTile.jpg", color: 0xe4e4e4 },
];

tileImages.forEach((tileData, index) => {
  let tile = new Tile(tileData.name, tileData.path, tileData.color);
  tile.createMesh().then((mesh) => {
    scene.add(mesh);
    tiles.push(tile); // Store the tile
    if (index === tileImages.length - 1) {
      tileState(); // Set initial tile positions after all tiles are created
      makeScrollable();
    }
  });
});

function animateTiles(tile, xPos, zPos, yRot) {
  gsap.to(tile.mesh.position, {
    duration: 0.8,
    delay: 0,
    ease: "power2",
    x: distances.x * xPos,
  });
  gsap.to(tile.mesh.position, {
    duration: 0.8,
    delay: 0,
    ease: "power2",
    z: distances.z * zPos,
  });
  gsap.to(tile.mesh.rotation, {
    duration: 0.8,
    delay: 0,
    ease: "power2",
    y: distances.rY * yRot,
  });
}

function animateTilesSlowly(tile, xPos, zPos, yRot, dur, del, func) {
  gsap.to(tile.mesh.position, {
    duration: dur,
    delay: del,
    ease: "power2",
    x: distances.x * xPos,
    onComplete: func,
  });
  gsap.to(tile.mesh.position, {
    duration: dur,
    delay: del,
    ease: "power2",
    z: distances.z * zPos,
  });
  gsap.to(tile.mesh.rotation, {
    duration: dur,
    delay: del,
    ease: "power2",
    y: distances.rY * yRot,
  });
}

function makeScrollable() {
  scroll = true;
}

console.log(`Position ${position}`);

function tileState() {
  if (position === -5) {
    console.log("at position -5");
    animateTiles(tiles[0], 0, 0, 0);
    animateTiles(tiles[1], -1, -1, -1);
    animateTiles(tiles[2], -2, -3, -2);
    animateTiles(tiles[3], -3, -6, -3);
    animateTiles(tiles[4], -4.3, -12, -5);
  }

  if (position === -4) {
    console.log("at position -4");
    animateTiles(tiles[0], 1, -1, 1);
    animateTiles(tiles[1], 0, 0, 0);
    animateTiles(tiles[2], -1, -1, -1);
    animateTiles(tiles[3], -2, -3, -2);
    animateTiles(tiles[4], -3, -6, -3);
  }

  if (position === -3) {
    console.log("at position -3");
    animateTiles(tiles[0], 2, -3, 2);
    animateTiles(tiles[1], 1, -1, 1);
    animateTiles(tiles[2], 0, 0, 0);
    animateTiles(tiles[3], -1, -1, -1);
    animateTiles(tiles[4], -2, -3, -2);
  }

  if (position === -2) {
    console.log("at position -2");
    animateTiles(tiles[0], 3, -6, 3);
    animateTiles(tiles[1], 2, -3, 2);
    animateTiles(tiles[2], 1, -1, 1);
    animateTiles(tiles[3], 0, 0, 0);
    animateTiles(tiles[4], -1, -1, -1);
  }

  if (position === -1) {
    console.log("at position -1");
    animateTiles(tiles[0], 4.3, -12, 5);
    animateTiles(tiles[1], 3, -6, 3);
    animateTiles(tiles[2], 2, -3, 2);
    animateTiles(tiles[3], 1, -1, 1);
    animateTiles(tiles[4], 0, 0, 0);
  }

  if (position === 0) {
    console.log("at position 0");
    animateTiles(tiles[0], 5, -16, 5);
    animateTiles(tiles[1], 4.3, -12, 5);
    animateTiles(tiles[2], 3, -6, 3);
    animateTiles(tiles[3], 2, -3, 2);
    animateTiles(tiles[4], 1, -1, 1);
  }
}
console.log(scroll);

canvas.addEventListener("click", function (e) {
  const canvasStyleWidth = parseFloat(getComputedStyle(canvas).width);
  const widthRatio = canvasStyleWidth / canvas.width;
  const adjustedOffsetX = e.offsetX / widthRatio; // Adjusted for the displayed size

  if (scroll === true) {
    if (adjustedOffsetX >= canvas.width / 2) {
      position--;
      if (position < -5) {
        position = -5;
      }
    } else {
      position++;
      if (position > -1) {
        position = -1;
      }
    }
    tileState();
    changeColor();
  }
});

function changeColor() {
  if (position === -5) {
    // Choco
    body.style.backgroundColor = "#f7ead7";
    heading.style.color = "#311508";
    description.style.color = "#311508";
    learn[0].style.color = "#311508";
    learn[0].style.borderColor = "#311508";
    learn[0].style.color = "#311508";
    learn[0].style.borderColor = "#311508";

    changeToChoco();
  } else if (position === -4) {
    // Royal
    body.style.backgroundColor = "#2b2b28";
    heading.style.color = "#d62828";
    description.style.color = "#d62828";
    learn[0].style.color = "#d62828";
    learn[0].style.borderColor = "#d62828";
    learn[1].style.color = "#d62828";
    learn[1].style.borderColor = "#d62828";

    panel1.style.backgroundColor = "#dddbd1";
    panel2.style.backgroundColor = "#e0ccba";
    panel3.style.backgroundColor = "#d62828";
    panel4.style.backgroundColor = "#752828";
    panel5.style.backgroundColor = "#a37f14";
  } else if (position === -3) {
    // Iri
    body.style.backgroundColor = "#03066e";
    heading.style.color = "#ffe537";
    description.style.color = "#ffe537";
    learn[0].style.color = "#ffe537";
    learn[0].style.borderColor = "#ffe537";
    learn[1].style.color = "#ffe537";
    learn[1].style.borderColor = "#ffe537";

    panel1.style.backgroundColor = "#eb221b";
    panel2.style.backgroundColor = "#f54f10";
    panel3.style.backgroundColor = "#ffe537";
    panel4.style.backgroundColor = "#83ea20";
    panel5.style.backgroundColor = "#68b7ef";
  } else if (position === -2) {
    // Nature
    body.style.backgroundColor = "#c1c9dd";
    heading.style.color = "#215b33";
    description.style.color = "#215b33";
    learn[0].style.color = "#215b33";
    learn[0].style.borderColor = "#215b33";
    learn[1].style.color = "#215b33";
    learn[1].style.borderColor = "#215b33";

    panel1.style.backgroundColor = "#cec1b5";
    panel2.style.backgroundColor = "#d8b596";
    panel3.style.backgroundColor = "#c1a875";
    panel4.style.backgroundColor = "#215b33";
    panel5.style.backgroundColor = "#2b2b28";
  } else if (position === -1) {
    // Wabi
    body.style.backgroundColor = "#fafaf9";
    heading.style.color = "#b1ee46";
    description.style.color = "#b1ee46";
    learn[0].style.color = "#b1ee46";
    learn[0].style.borderColor = "#b1ee46";
    learn[1].style.color = "#b1ee46";
    learn[1].style.borderColor = "#b1ee46";

    changeToLime();
  }
}

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight / 1.9,
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  alpha: true,
});

renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(window.devicePixelRatio);

const ambientLight = new THREE.AmbientLight(0xffffff, 1); // Increased intensity for uniform illumination
scene.add(ambientLight);

let time = Date.now();

const tick = () => {
  const currentTime = Date.now();
  const deltaTime = currentTime - time;
  time = currentTime;

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();

function changeToLime() {
  panel1.style.backgroundColor = "#e5ff9a";
  panel2.style.backgroundColor = "#dbff74";
  panel3.style.backgroundColor = "#cbff58";
  panel4.style.backgroundColor = "#b1ee46";
  panel5.style.backgroundColor = "#9dd227";
}

function changeToChoco() {
  panel1.style.backgroundColor = "rgb(255, 253, 245)";
  panel2.style.backgroundColor = "#a2b9e7";
  panel3.style.backgroundColor = "#65341c";
  panel4.style.backgroundColor = "#402315";
  panel5.style.backgroundColor = "#311508";
}
