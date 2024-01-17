import * as THREE from 'three';

export default class Planet {
    constructor(radius, orbitRadius, texturePath, material = new THREE.MeshLambertMaterial()) {
        this.geometry = new THREE.SphereGeometry(radius, 32, 32);
        this.material = material;
        this.material.map = new THREE.TextureLoader().load(texturePath);
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.orbitRadius = orbitRadius;
    }

    update1(time, rotationSpeed) {
        let orbitX = this.orbitRadius * Math.cos(rotationSpeed * time);
        let orbitZ = this.orbitRadius * Math.sin(rotationSpeed * time);
        this.mesh.position.x = orbitX;
        this.mesh.position.z = orbitZ;
        this.mesh.rotation.y += 0.01;
    }

    update(rotationCounter, speed) {
    
        let orbitX = this.orbitRadius * Math.cos(rotationCounter);
        let orbitZ = this.orbitRadius * Math.sin(rotationCounter);

        this.mesh.position.x = orbitX;
        this.mesh.position.z = orbitZ;
        this.mesh.rotation.y += speed; 
        
    }
}
