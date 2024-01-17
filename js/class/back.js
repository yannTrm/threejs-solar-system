import * as THREE from 'three';
import Planet from './Planet';

export default class SolarSystem {
    constructor() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);

        this.createDefaultPlanets();
        this.setupLighting();
        this.setupCamera();
        this.setupControls();
    }

    createDefaultPlanets() {
        this.sun = new Planet(70, 0, "../textures/sunmap_1.jpeg", new THREE.MeshBasicMaterial());
        this.earth = new Planet(6.5, 150, "../textures/earthmap.jpg");
        this.moon = new Planet(1.7, 19, "../textures/moonmap.jpg");

        this.scene.add(this.sun.mesh);
        this.sun.mesh.add(this.earth.mesh);
        this.earth.mesh.add(this.moon.mesh);
    }

    setupLighting() {
        this.pointLight = new THREE.PointLight(0xffffff, 100000);
        this.pointLight.position.copy(this.sun.mesh.position);
        this.scene.add(this.pointLight);
    }

    setupCamera() {
        this.camera.position.z = 200;
    }

    setupControls() {
        this.controls = new Controls(this);
    }
    animatePlanets() {
        let time = Date.now();
        let sunRotationSpeed = 0.01;
        let earthRotationSpeed = 2 * Math.PI / 6000;
        let moonRotationSpeed = 2 * Math.PI / 5000;

        this.sun.update(time, sunRotationSpeed);
        this.earth.update(time, earthRotationSpeed);
        this.moon.update(time, moonRotationSpeed);
    }

    animate() {
        requestAnimationFrame(() => {
            this.animate();
        });

        this.animatePlanets();
        this.renderer.render(this.scene, this.camera);
    }
}


class Controls {
    constructor(solarSystem) {
        this.solarSystem = solarSystem;

        // Attache les écouteurs d'événements
        window.addEventListener('keydown', this.onKeyDown.bind(this), false);
    }

    onKeyDown(event) {
        // Gère l'événement de la touche enfoncée
        const keyCode = event.keyCode;
        // Ajoutez ici la logique pour réagir à la touche enfoncée
        console.log('Key pressed:', keyCode);
        if (keyCode === 32) {
            // Inverse l'état de la rotation
            

            // Ajoutez ici la logique supplémentaire si nécessaire
            console.log('Space bar pressed. Rotation Enabled:', this.rotationEnabled);
        }
    }

   
}
