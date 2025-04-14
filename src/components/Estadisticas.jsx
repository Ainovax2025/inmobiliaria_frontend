import React, { useEffect, useRef, useState } from 'react';
import '../styles/estadisticas.css';

const statsData = [
  { value: 24, suffix: 'h', label: 'Tiempo record de venta' },
  { value: 5, suffix: '+', label: 'Años de experiencia' },
  { value: 400, suffix: '+', label: 'Clientes satisfechos' }
];

const Estadisticas = () => {
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="estadisticas-container" ref={sectionRef}>
      {statsData.map((item, i) => (
        <div className="estadistica" key={i}>
          <h2>
            {startCount ? <CountUp end={item.value} duration={1.5} /> : '0'}
            <span className="suffix">{item.suffix}</span>
          </h2>
          <p>{item.label}</p>
        </div>
      ))}
    </section>
  );
};

const CountUp = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const fps = 60;
    const increment = end / (duration * fps);
    let animationFrameId;

    const step = () => {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration]);

  return <span>{count}</span>;
};

export default Estadisticas;
