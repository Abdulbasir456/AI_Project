import React, { useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as THREE from 'three';
import './home.css';

const HomeThree = () => {
  const canvasRef = useRef(null);
  const animationIdRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const objectsRef = useRef([]);
  const location = useLocation();

  const createObjects = () => {
    const objects = [];
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    for (let i = 0; i < 20; i++) {
      const material = new THREE.MeshBasicMaterial({ color: `hsl(${Math.random() * 360}, 50%, 50%)` });
      const cube = new THREE.Mesh(geometry, material);
      cube.position.set(
        Math.random() * 10 - 5,
        Math.random() * 10 - 5,
        Math.random() * 10 - 5
      );
      cube.userData.velocity = new THREE.Vector3(
        Math.random() * 0.1 - 0.05,
        Math.random() * 0.1 - 0.05,
        Math.random() * 0.1 - 0.05
      );
      sceneRef.current.add(cube);
      objects.push(cube);
    }
    objectsRef.current = objects;
  };

  const animate = () => {
    objectsRef.current.forEach(obj => {
      obj.position.add(obj.userData.velocity);

      // Boundary collision
      if (obj.position.x > 5 || obj.position.x < -5) obj.userData.velocity.x *= -1;
      if (obj.position.y > 5 || obj.position.y < -5) obj.userData.velocity.y *= -1;
      if (obj.position.z > 5 || obj.position.z < -5) obj.userData.velocity.z *= -1;

      // Object collision
      objectsRef.current.forEach(otherObj => {
        if (obj !== otherObj) {
          const distance = obj.position.distanceTo(otherObj.position);
          if (distance < 1) {
            obj.userData.velocity.multiplyScalar(-1);
            otherObj.userData.velocity.multiplyScalar(-1);
          }
        }
      });
    });

    rendererRef.current.render(sceneRef.current, cameraRef.current);
    animationIdRef.current = requestAnimationFrame(animate);
  };

  const initializeScene = () => {
    const canvas = canvasRef.current;

    // Scene, camera, and renderer setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);
    rendererRef.current = renderer;
    sceneRef.current = scene;
    cameraRef.current = camera;
    camera.position.z = 5;

    createObjects();
    animate();
  };

  useEffect(() => {
    initializeScene();

    return () => {
      cancelAnimationFrame(animationIdRef.current);
      rendererRef.current.dispose();
      sceneRef.current.clear();
      objectsRef.current = [];
    };
  }, [location]);

  const startAnimation = () => {
    if (!animationIdRef.current) {
      animate();
    }
  };

  const stopAnimation = () => {
    cancelAnimationFrame(animationIdRef.current);
    animationIdRef.current = null;
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/home-three">ThreeHome</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <h1>Welcome to My Website</h1>
      </header>
      <main className="home-main">
        <section className="intro">
          <h2>Discover the World of Artificial Intelligence</h2>
          <p>AI is transforming the world around us. From self-driving cars to advanced data analysis, explore how AI is making a difference.</p>
        </section>
        <section className="canvas-section">
          <canvas ref={canvasRef} className="ai-canvas"></canvas>
          <div className="controls">
            <button onClick={startAnimation}>Start</button>
            <button onClick={stopAnimation}>Stop</button>
          </div>
        </section>
      </main>
      <footer className="ai-footer">
        <p>&copy; 2024 My Website</p>
        <nav className="footer-nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/home-three">ThreeHome</Link></li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default HomeThree;
