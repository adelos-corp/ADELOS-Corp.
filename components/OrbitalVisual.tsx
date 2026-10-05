import "./OrbitalVisual.css";

type OrbitalVisualProps = {
  accent?: "violet" | "blue" | "green" | "orange";
  small?: boolean;
};

export default function OrbitalVisual({ accent = "violet", small = false }: OrbitalVisualProps) {
  return (
    <div className={`orbital-visual orbital-visual--${accent} ${small ? "orbital-visual--small" : ""}`} aria-hidden="true">
      <div className="orbital-visual__halo" />
      <div className="orbital-visual__orb"><div className="orbital-visual__surface" /></div>
      <div className="orbital-visual__ring orbital-visual__ring--one" />
      <div className="orbital-visual__ring orbital-visual__ring--two" />
      <div className="orbital-visual__ring orbital-visual__ring--three" />
    </div>
  );
}