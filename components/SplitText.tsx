"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

type SplitTextProps = {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  splitType?: "chars" | "words";
  threshold?: number;
  tag?: "h1" | "h2" | "h3" | "p" | "span";
  textAlign?: "left" | "center" | "right";
};

export default function SplitText({
  text,
  className = "",
  delay = 28,
  duration = 720,
  splitType = "chars",
  threshold = 0.35,
  textAlign = "center",
  tag = "span"
}: SplitTextProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const Tag = tag;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  const units = splitType === "words" ? text.split(/(\s+)/) : Array.from(text);

  return (
    <Tag
      ref={ref as never}
      className={`split-text ${visible ? "split-text--visible" : ""} ${className}`}
      style={{ textAlign }}
      aria-label={text}
    >
      {units.map((unit, index) => {
        if (/^\s+$/.test(unit)) {
          return <span aria-hidden="true" key={`space-${index}`}>{unit}</span>;
        }

        const displayUnit = splitType === "chars" && unit === " " ? "\u00a0" : unit;
        return (
          <span
            className="split-text__unit"
            aria-hidden="true"
            key={`unit-${index}`}
            style={{
              "--split-index": index,
              "--split-delay": `${index * delay}ms`,
              "--split-duration": `${duration}ms`
            } as CSSProperties}
          >
            {displayUnit}
          </span>
        );
      })}
    </Tag>
  );
}
