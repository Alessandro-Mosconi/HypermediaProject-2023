<template>
  <div class="relative" ref="mount"></div>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue';
import * as THREE from 'three';

export default {
  setup() {
    const mount = ref(null);
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;
    let geometry: THREE.BoxGeometry;
    let light: THREE.PointLight;
    let material: THREE.MeshBasicMaterial;
    let planet: THREE.Mesh;

    onMounted(() => {
      // Create Scene
      scene = new THREE.Scene();

      // Camera Setup
      camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 100);
      camera.position.z = 4;

      // Renderer Setup
      renderer = new THREE.WebGLRenderer({alpha: true});
      
      // Set the size of the rendering window.
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);

      // Append Renderer to DOM 
      if (mount.value) {
        mount.value.appendChild(renderer.domElement);
      }

        // Geometry and Material Setup
        geometry = new THREE.SphereGeometry(2.1, 50, 50);
        
        material = new THREE.MeshPhysicalMaterial({
           map: new THREE.TextureLoader().load("/images/2k_mars.jpg"),
          });

          const ambientLight = new THREE.AmbientLight(0x121212, 1);
        scene.add(ambientLight);

        // Lights
        light = new THREE.PointLight(0xffffff, 1.2);
        light.position.set(3, 3, 3);
        scene.add(light);


        // Planet Mesh Setup and add it to Scene.
        planet = new THREE.Mesh(geometry, material);
           scene.add(planet);

           const animateScene= () => {

              requestAnimationFrame(animateScene);

              planet.rotation.y += .0006;

             renderer.render(scene,camera); 

           };

          animateScene();  
          window.addEventListener('resize', () => {
            var width = window.innerWidth;
            var height = window.innerHeight;
            renderer.setSize( width, height );
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            });

       });
    
    return { mount };
    
   },
};
</script>