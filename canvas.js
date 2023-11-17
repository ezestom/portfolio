import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import gsap from "gsap";

// Scene
const scene = new THREE.Scene();

// Fondo
const backgroundTexture = new THREE.TextureLoader().load(
	"./src/images/stars.jpg"
);
scene.background = backgroundTexture;

// Create our sphere
const geometry = new THREE.SphereGeometry(5, 64, 64);
geometry.scale(1, 1, 1);

const material = new THREE.MeshStandardMaterial({
	color: " #e3e3d0",
	roughness: 0.5,
	side: THREE.DoubleSide,
	castShadow: true,
	receiveShadow: true,
});

// Load earth texture
const textureLoader = new THREE.TextureLoader();
const earthTexture = textureLoader.load("./src/images/moon.jpg");

material.map = earthTexture;

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
	width: window.innerWidth,
	height: window.innerHeight,
};

// Light
const light = new THREE.PointLight(0xffffff, 1, 1000);
light.position.set(10, 25, 45);
light.intensity = 1;
light.castShadow = true;
scene.add(light);

// Camera
const camera = new THREE.PerspectiveCamera(
	35,
	sizes.width / sizes.height,
	0.1,
	100
);
camera.position.z = 25;
scene.add(camera);

// Renderer
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(1);

// Habilitar sombras en el renderer
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

renderer.render(scene, camera);
renderer.setClearColor("#0c0e10");

// Theme color
const themeBtn = document.querySelector(".theme-switch__checkbox");

themeBtn.addEventListener("click", function () {
	if (!this.checked) {
		renderer.setClearColor("#29034c");
	} else {
		renderer.setClearColor("#0c0e10");
	}
});

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = false;
controls.enablePan = false;
controls.enableZoom = false;
controls.autoRotate = true;
controls.autoRotateSpeed = 0.1;
controls.enableRotate = false;

// Resize
window.addEventListener("resize", () => {
	sizes.width = window.innerWidth;
	sizes.height = window.innerHeight;
	camera.aspect = sizes.width / sizes.height;
	camera.updateProjectionMatrix();
	renderer.setSize(sizes.width, sizes.height);
});

// Animation Loop
const rotationSpeed = 0.0001;

const loop = () => {
	controls.update();
	mesh.rotation.y += rotationSpeed;
	renderer.render(scene, camera);
	window.requestAnimationFrame(loop);
};
loop();

// Timeline Magic
const t1 = gsap.timeline();

t1.fromTo(mesh.scale, { z: 0, x: 0, y: 0 }, { z: 1, x: 1, y: 1 });
t1.fromTo("nav", { y: "-300%" }, { y: "00%" });
t1.fromTo("h2", { opacity: 0 }, { opacity: 1 });
t1.fromTo(".title", { opacity: 0 }, { opacity: 1 });
