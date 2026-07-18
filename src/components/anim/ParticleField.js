import { useEffect, useRef } from "react";
import * as THREE from "three";

const COLS = 130;
const ROWS = 56;
const GAP = 0.22;
const ACCENT = new THREE.Color("#ff4133");
const WHITE = new THREE.Color("#ffffff");

/**
 * Undulating wave of points — mostly white, ~4% accent red — rendered
 * behind section content. Tilts subtly toward the cursor. Renders a
 * single static frame under prefers-reduced-motion.
 */
function ParticleField({ className = "" }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 4.2, 10);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const count = COLS * ROWS;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const col = i % COLS;
      const row = Math.floor(i / COLS);
      positions[i * 3] = (col - COLS / 2) * GAP;
      positions[i * 3 + 1] = 0;
      positions[i * 3 + 2] = (row - ROWS / 2) * GAP;

      const c = Math.random() < 0.04 ? ACCENT : WHITE;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.035,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      depthWrite: false,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    const pos = geometry.attributes.position;
    const wave = (t) => {
      for (let i = 0; i < count; i++) {
        const x = pos.getX(i);
        const z = pos.getZ(i);
        pos.setY(
          i,
          Math.sin(x * 0.55 + t) * 0.45 +
            Math.cos(z * 0.7 + t * 0.7) * 0.35 +
            Math.sin((x + z) * 0.25 + t * 0.4) * 0.25
        );
      }
      pos.needsUpdate = true;
    };

    const mouse = { x: 0, y: 0 };
    const onPointerMove = (e) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
    };

    const onResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };

    let rafId;
    if (reduced) {
      wave(1.5);
      renderer.render(scene, camera);
    } else {
      window.addEventListener("pointermove", onPointerMove);
      window.addEventListener("resize", onResize);

      const tick = (ms) => {
        const t = ms * 0.0006;
        wave(t);
        points.rotation.y += (mouse.x * 0.12 - points.rotation.y) * 0.03;
        points.rotation.x += (mouse.y * 0.06 - points.rotation.x) * 0.03;
        renderer.render(scene, camera);
        rafId = requestAnimationFrame(tick);
      };
      rafId = requestAnimationFrame(tick);
    }

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", onResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className={`pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
}

export default ParticleField;
