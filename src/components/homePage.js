import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
  const canvasRef = useRef(null);
  const animationIdRef = useRef(null);
  const objectsRef = useRef([]);

  const createObjects = (canvas) => {
    const objects = [];
    for (let i = 0; i < 20; i++) {
      objects.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 30,
        dx: Math.random() * 4 - 2,
        dy: Math.random() * 4 - 2,
        color: `hsl(${Math.random() * 360}, 50%, 50%)`
      });
    }
    objectsRef.current = objects;
  };

  const drawObjects = (ctx, canvas) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    objectsRef.current.forEach(obj => {
      ctx.fillStyle = obj.color;
      ctx.fillRect(obj.x, obj.y, obj.size, obj.size);
      obj.x += obj.dx;
      obj.y += obj.dy;

      // Boundary collision
      if (obj.x + obj.size > canvas.width || obj.x < 0) {
        obj.dx *= -1;
      }
      if (obj.y + obj.size > canvas.height || obj.y < 0) {
        obj.dy *= -1;
      }

      // Object collision
      objectsRef.current.forEach(otherObj => {
        if (obj !== otherObj) {
          if (
            obj.x < otherObj.x + otherObj.size &&
            obj.x + obj.size > otherObj.x &&
            obj.y < otherObj.y + otherObj.size &&
            obj.y + obj.size > otherObj.y
          ) {
            obj.dx *= -1;
            obj.dy *= -1;
            otherObj.dx *= -1;
            otherObj.dy *= -1;
          }
        }
      });
    });
  };

  const animate = (ctx, canvas) => {
    drawObjects(ctx, canvas);
    animationIdRef.current = requestAnimationFrame(() => animate(ctx, canvas));
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    createObjects(canvas);
    animate(ctx, canvas);

    return () => {
      cancelAnimationFrame(animationIdRef.current);
    };
  }, []);

  const startAnimation = () => {
    if (!animationIdRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      animate(ctx, canvas);
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
            <li><Link to="/about">About</Link></li>
            <li><Link to="/ai">AI</Link></li>
            <li><Link to="/chat-box">ChatBox</Link></li>
            <li><Link to="/home-three">ThreeHome</Link></li>
            {/* Add more links as needed */}
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
      <footer className="home-footer">
        <p>&copy; 2024 My Website</p>
      </footer>
    </div>
  );
};

export default Home;
