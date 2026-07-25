import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export interface BackButtonProps {
  onClick?: () => void;
  label?: string;
  className?: string;
  enableEscKey?: boolean;
}

export const BackButton: React.FC<BackButtonProps> = ({
  onClick,
  label = 'Back to Showroom',
  className = '',
  enableEscKey = true,
}) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onClick) {
      onClick();
    } else {
      navigate(-1);
    }
  };

  useEffect(() => {
    if (!enableEscKey) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleBack();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [enableEscKey, onClick]);

  return (
    <button
      onClick={handleBack}
      className={`fixed top-6 left-6 z-[100] px-4 py-2.5 rounded-2xl bg-black/80 hover:bg-zinc-900 border border-white/15 hover:border-red-500/50 text-white font-mono-tech text-xs uppercase font-bold flex items-center gap-2.5 shadow-[0_0_20px_rgba(0,0,0,0.8)] hover:shadow-[0_0_25px_rgba(220,38,38,0.4)] transition-all duration-300 cursor-pointer group ${className}`}
      title={`${label} (Press Esc)`}
    >
      <ArrowLeft className="w-4 h-4 text-red-500 group-hover:-translate-x-1 transition-transform" />
      <span>{label}</span>
    </button>
  );
};
