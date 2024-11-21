import React, { useRef, useState } from 'react';

import { Button } from '@/components/Button';
import Spacing from '@/components/Spacing';

interface PetitionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  name: string;
  title: string;
}

export const PetitionModal = ({ isOpen, onSubmit, name, title }: PetitionModalProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const y = 'touches' in e ? e.touches[0].clientY - rect.top : e.clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const y = 'touches' in e ? e.touches[0].clientY - rect.top : e.clientY - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    if (!isDrawing) return;

    setIsDrawing(false);
  };

  //   const clearCanvas = () => {
  //     const canvas = canvasRef.current;
  //     if (!canvas) return;

  //     const ctx = canvas.getContext('2d');
  //     if (!ctx) return;

  //     ctx.clearRect(0, 0, canvas.width, canvas.height);
  //   };

  if (!isOpen) return null;

  return (
    <div className="fixed left-1/2 top-1/2 z-50 h-[420px] w-[370px] -translate-x-1/2 -translate-y-1/2 transform rounded-[15px] bg-white shadow-lg">
      <Spacing size={1} />
      <div className="p-5">
        <p className="text-sm font-bold">{name}님은</p>
        <p className="text-sm font-bold">{`'${title}' 청원 글에 동의하시나요?`}</p>
        <Spacing size={3} />
        <canvas
          ref={canvasRef}
          className="w-full rounded-xl border border-[#D9D9D9]"
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
        />
        <Spacing size={2} />
        <Button buttonLabel="동의하기" onClick={onSubmit} />
      </div>
    </div>
  );
};
