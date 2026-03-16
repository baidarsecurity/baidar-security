// If you plan to add specific three.js interactive elements later (e.g., a 3D model that responds to mouse hover),
// you would initialize your scene, camera, renderer, and load models here.
// For a solid background, three.js is not needed, and its overhead can be avoided.

// Example placeholder for future three.js interaction:
/*
import * as THREE from 'three';
// If using GLTFLoader, you'd need to include its CDN script in index.html or use a bundler
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

let scene, camera, renderer, securityCameraModel;

function initThreeDInteraction() {
    // Only initialize if we're actually going to render something
    const container = document.getElementById('three-container');
    if (!container) return;

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 5); // Adjust camera position as needed for your model

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0); // Transparent background for the renderer itself
    container.appendChild(renderer.domElement);

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(directionalLight);

    // Example: Load a security camera model (requires GLTFLoader CDN in index.html)
    // const loader = new THREE.GLTFLoader();
    // loader.load(
    //     'path/to/your/security_camera.glb', // You'll need to provide a model file
    //     function (gltf) {
    //         securityCameraModel = gltf.scene;
    //         securityCameraModel.position.set(2, 0, 0); // Adjust position
    //         securityCameraModel.scale.set(0.5, 0.5, 0.5); // Adjust scale
    //         scene.add(securityCameraModel);
    //     },
    //     undefined,
    //     function (error) {
    //         console.error('Error loading GLTF model:', error);
    //     }
    // );

    window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
    if (camera) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    }
    if (renderer) {
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
}

function animateThreeDInteraction() {
    requestAnimationFrame(animateThreeDInteraction);

    // Example animation: subtle rotation of the model
    // if (securityCameraModel) {
    //     securityCameraModel.rotation.y += 0.005;
    // }

    if (renderer && scene && camera) {
        renderer.render(scene, camera);
    }
}

// Call this if you decide to add three.js interactive elements beyond the background
// initThreeDInteraction();
// animateThreeDInteraction();
*/

// For a simple solid background as requested, no active three.js rendering is needed.
// This script will effectively do nothing unless you uncomment and implement the 3D interaction logic above.
console.log("script.js loaded. Three.js background particles are removed, using CSS for solid purple background.");
// You can remove this console.log in production.