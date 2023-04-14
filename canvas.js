import * as THREE from "three";
import "./style.css";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import gsap from "gsap";
import { Loader } from "three";

//Scene
const scene = new THREE.Scene();

//Create our sphere
const geometry = new THREE.SphereGeometry( 5, 64, 64);
const material = new THREE.MeshStandardMaterial({
	color: "#4834d4",
	roughness: 0.5,
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

//Sizes
const sizes = {
	width: window.innerWidth,
	height: window.innerHeight,
};

//Light
const light = new THREE.PointLight(0xffffff, 1, 1000);
light.position.set(1, 10, 10);
light.intensity = 1;
scene.add(light);

//Camera
const camera = new THREE.PerspectiveCamera(
	45,
	sizes.width / sizes.height,
	0.1,
	100
);
camera.position.z = 25;
scene.add(camera);

//Renderer
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(1);
renderer.render(scene, camera);
renderer.setClearColor("#0c0e10");

//Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = false;
controls.enablePan = false;
controls.enableZoom = false;
controls.autoRotate = true;
controls.autoRotateSpeed = 2;
controls.enableRotate = false;



//Resize
window.addEventListener("resize", () => {
	//update Sizes
	sizes.width = window.innerWidth;
	sizes.height = window.innerHeight;
	//Update Camera
	camera.aspect = sizes.width / sizes.height;
	camera.updateProjectionMatrix();
	renderer.setSize(sizes.width, sizes.height);
});

const loop = () => {
	controls.update();
	renderer.render(scene, camera);
	window.requestAnimationFrame(loop);
};
loop();

//Timeline Magic
// const t1 = gsap.timeline({ defaults: { duration: 0 } });
// t1.fromTo(mesh.scale, { z: 0, x: 0, y: 0 }, { z: 1, x: 1, y: 1 });
// t1.fromTo("nav", { y: "0%" }, { y: "0%" });
// t1.fromTo(".title", { opacity: 0 }, { opacity: 1 });

