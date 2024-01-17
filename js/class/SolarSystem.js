import * as THREE from 'three';
import Planet from './Planet';

export default class SolarSystem {
    constructor() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);

        this.rotationCounter = 0;
        this.rotationEnabled = true;
        this.speed = 0.015

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
        // Incrémente le compteur de rotation
        if (this.rotationEnabled) {
            this.sun.update(this.rotationCounter, this.speed);
            this.earth.update(this.rotationCounter, this.speed);
            this.moon.update(this.rotationCounter, this.speed);
            this.rotationCounter += 0.01;

            console.log(this.rotationCounter);
         }
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
            
            this.solarSystem.rotationEnabled = !this.solarSystem.rotationEnabled;
            // Ajoutez ici la logique supplémentaire si nécessaire
            console.log('Space bar pressed. Rotation Enabled:', this.rotationEnabled);
        }
    }

   
}
