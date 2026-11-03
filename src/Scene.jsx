import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Scene({ paused }) {
  const mount = useRef(null);
  useEffect(() => {
    const el = mount.current;
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "low-power",
      });
    } catch {
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    el.appendChild(renderer.domElement);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.z = 9;
    const group = new THREE.Group();
    scene.add(group);
    const material = new THREE.MeshBasicMaterial({
      color: 0xa46b34,
      wireframe: true,
      transparent: true,
      opacity: 0.16,
    });
    const globe = new THREE.Mesh(
      new THREE.IcosahedronGeometry(2.7, 2),
      material,
    );
    group.add(globe);
    const ringGeometry = new THREE.TorusGeometry(3.5, 0.008, 4, 120);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0xf4ba74,
      transparent: true,
      opacity: 0.32,
    });
    for (let i = 0; i < 3; i++) {
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.rotation.set(i * 0.8, 0.5 + i * 0.45, 0);
      group.add(ring);
    }
    const pointsGeometry = new THREE.BufferGeometry();
    const points = [];
    for (let i = 0; i < 130; i++) {
      const a = i * 2.39996,
        r = 2 + (i % 17) / 3;
      points.push(Math.cos(a) * r, Math.sin(a) * r, Math.sin(i * 1.23) * 3);
    }
    pointsGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(points, 3),
    );
    const pointsMaterial = new THREE.PointsMaterial({
      color: 0xf3c38b,
      size: 0.025,
      transparent: true,
      opacity: 0.7,
    });
    group.add(new THREE.Points(pointsGeometry, pointsMaterial));
    const resize = () => {
      const w = el.clientWidth,
        h = el.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.render(scene, camera);
    };
    const ro = new ResizeObserver(resize);
    ro.observe(el);
    resize();
    let frame;
    let visible = true;
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
    });
    io.observe(el);
    const start = performance.now();
    const tick = () => {
      if (visible && !document.hidden) {
        const t = (performance.now() - start) / 1000;
        group.rotation.y = paused ? 0.35 : t * 0.045;
        group.rotation.z = paused ? 0 : Math.sin(t * 0.2) * 0.08;
        renderer.render(scene, camera);
      }
      if (!paused) frame = requestAnimationFrame(tick);
    };
    tick();
    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
      io.disconnect();
      globe.geometry.dispose();
      material.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      pointsGeometry.dispose();
      pointsMaterial.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [paused]);
  return <div className="webgl-scene" ref={mount} aria-hidden="true" />;
}
