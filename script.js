const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('canvas'),
  antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight); // Ajusta el tamaño del canvas

// Carga el archivo STL
const loader = new THREE.STLLoader();
loader.load('cubo.stl', (geometry) => {
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);
}, undefined, (error) => {
  console.error('Error al cargar el archivo STL:', error);
});

// Configura la cámara
camera.position.z = 5;

// Función de animación
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

// Inicia la animación
animate();