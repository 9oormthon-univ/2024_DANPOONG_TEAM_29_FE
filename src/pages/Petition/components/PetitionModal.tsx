import { useRef, useState, forwardRef, useEffect } from 'react';

import { Button } from '@/components/Button';
import Spacing from '@/components/Spacing';

interface PetitionModalProps {
  onClose: () => void;
  onSubmit: () => void;
  name: string;
  title: string;
}

const PetitionModal = forwardRef<HTMLDialogElement, PetitionModalProps>(
  ({ onSubmit, name, title, onClose }: PetitionModalProps, ref) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [render, setRender] = useState(true);

    const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      setRender(false);
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
    const clearCanvas = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };

    const stopDrawing = () => {
      if (!isDrawing) return;
      setIsDrawing(false);
    };

    // 모달 외부 클릭 시 닫기 처리
    useEffect(() => {
      if (typeof ref === 'function') return;
      const dialog = ref!.current;
      if (dialog) {
        dialog.addEventListener('click', (e: MouseEvent) => {
          if (e.target === dialog) {
            onClose(); // 모달 외부 클릭 시 닫기
            clearCanvas();
            setRender(true);
          }
        });
      }
      return () => {
        if (dialog) {
          dialog.removeEventListener('click', onClose);
        }
      };
    }, [ref, onClose]);

    return (
      <dialog
        id="modal"
        ref={ref}
        className="z-50 h-[420px] w-[370px] rounded-[15px] bg-white shadow-lg"
      >
        <Spacing size={1} />
        <div className="p-5">
          <p className="text-sm font-bold">{name}님은</p>
          <p className="text-sm font-bold">{`'${title}' 청원 글에 동의하시나요?`}</p>
          <Spacing size={3} />
          {render && (
            <span className="text-bold pointer-events-none absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 text-2xl text-[#E9E9E9]">
              서명해주세요
            </span>
          )}
          <canvas
            ref={canvasRef}
            className="relative flex h-[140px] w-full rounded-xl border border-[#D9D9D9]"
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            onTouchStart={startDrawing}
            onTouchMove={draw}
            onTouchEnd={stopDrawing}
          ></canvas>
          <Spacing size={2} />
          <Button buttonLabel="동의하기" onClick={onSubmit} disabled={render} />
        </div>
      </dialog>
    );
  },
);

PetitionModal.displayName = 'PetitionModal';

export { PetitionModal };
