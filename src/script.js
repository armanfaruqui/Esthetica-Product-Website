import * as THREE from "three";
import gsap from "gsap";
import * as dat from "lil-gui";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

//DOM Elements
const canvas = document.querySelector("canvas.webgl");

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
const learn = document.querySelector(".learn");

// Pantone panels
const panel1 = document.querySelector(".panel-1");
const panel2 = document.querySelector(".panel-2");
const panel3 = document.querySelector(".panel-3");
const panel4 = document.querySelector(".panel-4");
const panel5 = document.querySelector(".panel-5");

let position = -5; // Checks position of tiles
let scroll = false; // Checks if the user should be able to scroll tiles

// window.onload = (event) => {
//     canvas.style.display = "block";
//     page2.style.display ="none"
//   };

// Scroll events

scrollBtn.addEventListener("click", function () {
  canvas.style.display = "none";
  page2.style.display = "block";
  page2.scrollIntoView({ behavior: "smooth" });
  position = -5;
  changeColor();
});

scrollBtn2.addEventListener("click", function () {
  page3.style.display = "block";
  page3.scrollIntoView({ behavior: "smooth" });
});

scrollBtn3.addEventListener("click", function () {
  page4.style.display = "block";
  page2.style.display = "none";
  page4.scrollIntoView({ behavior: "smooth" });
});

/**
 * Base
 */

// Scene
const scene = new THREE.Scene();

/**
 * Base
 */
const gltfLoader = new GLTFLoader();

class Tile {
  constructor(name) {
    (this.x = 1.7),
      (this.y = 3.672),
      (this.z = 0.2),
      (this.name = name),
      (this.mesh = undefined);
  }

  createMesh() {
    return new Promise((resolve, reject) => {
      gltfLoader.load(`/models/${this.name}.glb`, (gltf) => {
        console.log(this);
        console.log(gltf.scene.children[0]);
        let t_mesh = gltf.scene.children[0];
        // scene.add(t_mesh)
        // console.log(this)
        resolve(t_mesh);
      });
    });
  }
}

let distances = {
  x: 2.5,
  z: 0.2,
  rY: 0.1,
};

let tile1 = new Tile("choco");
tile1.createMesh().then(function (result) {
  // console.log(result)
  tile1.mesh = result;
  scene.add(tile1.mesh);
  animateTilesSlowly(tile1, 0, 0, 0);
  tile1.mesh.position.z = 0.01;
});

let tile2 = new Tile("royal");
tile2.createMesh().then(function (result) {
  // console.log(result)
  tile2.mesh = result;
  scene.add(tile2.mesh);
  animateTilesSlowly(tile2, -1, -1, -1, 2, 1);
});
let tile3 = new Tile("iri");
tile3.createMesh().then(function (result) {
  // console.log(result)
  tile3.mesh = result;
  scene.add(tile3.mesh);
  animateTilesSlowly(tile3, -2, -3, -2, 2, 0.8);
});
let tile4 = new Tile("nature");
tile4.createMesh().then(function (result) {
  // console.log(result)
  tile4.mesh = result;
  scene.add(tile4.mesh);
  animateTilesSlowly(tile4, -3, -6, -3, 2, 0.6, makeScrollable());
});
let tile5 = new Tile("wabi");
tile5.createMesh().then(function (result) {
  // console.log(result)
  tile5.mesh = result;
  scene.add(tile5.mesh);
  animateTilesSlowly(tile5, -4.3, -12, -5, 2, 0.4);
});
console.log(tile1.mesh);

// let tile6 = new Tile("wabi")
// tile6.createMesh().then(function(result){
//     // console.log(result)
//     tile6.mesh = result
//     scene.add(tile6.mesh)
//     animateTilesSlowly(tile6, -5, -16, -5, 2, 0.2)
// })

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

function tileState() {
  if (position === -5) {
    console.log("at position -5");
    animateTiles(tile1, 0, 0, 0);
    animateTiles(tile2, -1, -1, -1);
    animateTiles(tile3, -2, -3, -2);
    animateTiles(tile4, -3, -6, -3);
    animateTiles(tile5, -4.3, -12, -5);
    // animateTiles(tile6, -5, -16, -5)
  }

  if (position === -4) {
    console.log("at position -4");
    animateTiles(tile1, 1, -1, 1);
    animateTiles(tile2, 0, 0, 0);
    animateTiles(tile3, -1, -1, -1);
    animateTiles(tile4, -2, -3, -2);
    animateTiles(tile5, -3, -6, -3);
    // animateTiles(tile6, -4.3, -12, -4)
  }

  if (position === -3) {
    console.log("at position -3");
    animateTiles(tile1, 2, -3, 2);
    animateTiles(tile2, 1, -1, 1);
    animateTiles(tile3, 0, 0, 0);
    animateTiles(tile4, -1, -1, -1);
    animateTiles(tile5, -2, -3, -2);
    // animateTiles(tile6, -3, -6, -3)
  }

  if (position === -2) {
    console.log("at position -2");
    animateTiles(tile1, 3, -6, 3);
    animateTiles(tile2, 2, -3, 2);
    animateTiles(tile3, 1, -1, 1);
    animateTiles(tile4, 0, 0, 0);
    animateTiles(tile5, -1, -1, -1);
    // animateTiles(tile6, -2, -3, -2)
  }

  if (position === -1) {
    console.log("at position -1");
    animateTiles(tile1, 4.3, -12, 5);
    animateTiles(tile2, 3, -6, 3);
    animateTiles(tile3, 2, -3, 2);
    animateTiles(tile4, 1, -1, 1);
    animateTiles(tile5, 0, 0, 0);
    // animateTiles(tile6, -1, -1, -1)
  }

  if (position === 0) {
    console.log("at position 0");
    animateTiles(tile1, 5, -16, 5);
    animateTiles(tile2, 4.3, -12, 5);
    animateTiles(tile3, 3, -6, 3);
    animateTiles(tile4, 2, -3, 2);
    animateTiles(tile5, 1, -1, 1);
    // animateTiles(tile6, 0, 0, 0)
    console.log(tile1.mesh.position.x);
  }
}

canvas.addEventListener("click", function (e) {
  if (scroll === true) {
    if (e.offsetX >= canvas.width / 2) {
      position--;
      if (position < -5) {
        position = -5;
      }
      tileState();
      changeColor();
    } else if (e.offsetX <= canvas.width / 2) {
      position++;
      if (position > -1) {
        position = -1;
      }
      tileState();
      changeColor();
    }
  }
});

function changeColor() {
  if (position === -5) {
    // Choco
    body.style.backgroundColor = "#f7ead7";
    heading.style.color = "#311508";
    description.style.color = "#311508";
    learn.style.color = "#311508";
    learn.style.borderColor = "#311508";

    panel1.style.backgroundColor = "rgb(255, 253, 245)";
    panel2.style.backgroundColor = "#a2b9e7";
    panel3.style.backgroundColor = "#65341c";
    panel4.style.backgroundColor = "#402315";
    panel5.style.backgroundColor = "#311508";
  } else if (position === -4) {
    // Royal
    body.style.backgroundColor = "#2b2b28";
    heading.style.color = "#d62828";
    description.style.color = "#d62828";
    learn.style.color = "#d62828";
    learn.style.borderColor = "#d62828";

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
    learn.style.color = "#ffe537";
    learn.style.borderColor = "#ffe537";

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
    learn.style.color = "#215b33";
    learn.style.borderColor = "#215b33";

    panel1.style.backgroundColor = "#cec1b5";
    panel2.style.backgroundColor = "#d8b596";
    panel3.style.backgroundColor = "#c1a875";
    panel4.style.backgroundColor = "#215b33";
    panel5.style.backgroundColor = "#2b2b28";
  } else if (position === -1) {
    // Wabi
    body.style.backgroundColor = "#e7e4dc";
    heading.style.color = "#766a5c";
    description.style.color = "#766a5c";
    learn.style.color = "#766a5c";
    learn.style.borderColor = "#766a5c";

    panel1.style.backgroundColor = "#f5f3e6";
    panel2.style.backgroundColor = "#9b978b";
    panel3.style.backgroundColor = "#988068";
    panel4.style.backgroundColor = "#766a5c";
    panel5.style.backgroundColor = "#37342d";
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

// Lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
scene.add(ambientLight);

const rectAreaLight = new THREE.RectAreaLight(0xffffff, 1.2, 4, 10);
rectAreaLight.position.z = 1;
scene.add(rectAreaLight);

const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(0, 0, -20);
scene.add(light);

/**
 * Animate
 */
// gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 })

let time = Date.now();

// gsap.to(mesh.position, { duration: 0.3, delay: 2, x: 2})
// gsap.to(mesh.rotation, { duration: 0.3, delay: 2, y: 1})

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

document.addEventListener("DOMContentLoaded", function () {
  var h2 = document.getElementById("proto");
  h2.addEventListener("click", function () {
    window.location.href = "/prototype/index.html";
  });
});
