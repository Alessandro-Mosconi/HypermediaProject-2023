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
      let material: THREE.MeshBasicMaterial;
      let cube: THREE.Mesh;
  
      onMounted(() => {
        // Create Scene
        scene = new THREE.Scene();
  
        // Camera Setup
        camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 100);
        camera.position.z = 5;
  
        // Renderer Setup
        renderer = new THREE.WebGLRenderer();
        
        // Set the size of the rendering window.
        renderer.setSize(window.innerWidth, window.innerHeight);
  
        // Append Renderer to DOM 
        if (mount.value) {
          mount.value.appendChild(renderer.domElement);
        }
  
          // Geometry and Material Setup
          geometry = new THREE.BoxGeometry(1, 1, 1);
          material = new THREE.MeshBasicMaterial({ color: '#433F81' });
  
          // Cube Mesh Setup and add it to Scene.
          cube = new THREE.Mesh(geometry, material);
             scene.add(cube);
  
             const animateScene= () => {
  
                requestAnimationFrame(animateScene);
  
                // Rotate Cube 
                cube.rotation.x += .01; 
                cube.rotation.y += .01;
  
               renderer.render(scene,camera); 
  
             };
  
            animateScene();  
          
         });
      
      return { mount };
      
     },
  };
  </script>