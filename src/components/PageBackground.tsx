type Props = { className?: string };

export default function PageBackground({ className = "" }: Props) {
  return (
    <>
      {/* Base: mesa madeira clara + luz da manhã */}
      <div className={`fixed inset-0 z-0 desk-wood-bg bg-fixed-desktop ${className}`} />

      {/* Overlay único: papel + noise */}
      <div className="fixed inset-0 z-0 pointer-events-none paper-noise-overlay" />
    </>
  );
}
