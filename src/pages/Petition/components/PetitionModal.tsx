import { useState, forwardRef, useEffect } from 'react';

import { useTranslation } from 'react-i18next';

import { Button } from '@/components/Button';
import Spacing from '@/components/Spacing';
import { useCanvas } from '@/hooks/useCanvas';

interface PetitionModalProps {
  onClose: () => void;
  onSubmit: () => void;
  name: string;
  title: string;
}

const PetitionModal = forwardRef<HTMLDialogElement, PetitionModalProps>(
  ({ onSubmit, name, title, onClose }: PetitionModalProps, ref) => {
    const [render, setRender] = useState(true);
    const { canvasRef, startDrawing, draw, stopDrawing, clearCanvas } = useCanvas(setRender);
    const { t } = useTranslation('petitionForm');
    useEffect(() => {
      if (typeof ref === 'function') return;
      const dialog = ref!.current;
      if (dialog) {
        dialog.addEventListener('click', (e: MouseEvent) => {
          if (e.target === dialog) {
            onClose();
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
    }, [ref, onClose, clearCanvas]);

    return (
      <dialog
        id="modal"
        ref={ref}
        className="z-50 h-[420px] w-[370px] rounded-[15px] bg-white shadow-lg"
      >
        <Spacing size={1} />
        <div className="p-5">
          <p className="text-sm font-bold">
            {t('30', {
              name,
              postProcess: 'petitionNameHandler',
            })}
          </p>
          <p className="text-sm font-bold">
            {t('31', {
              title,
              postProcess: 'petitionTitleHandler',
            })}
          </p>
          <Spacing size={3} />
          {render && (
            <span className="text-bold pointer-events-none absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 text-2xl text-[#E9E9E9]">
              {t('32')}
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
          <Button
            buttonLabel={t('33')}
            onClick={onSubmit}
            disabled={render}
            style={{
              backgroundColor: !render ? '#1A8CFF' : '#B5B5B5',
            }}
          />
        </div>
      </dialog>
    );
  },
);

PetitionModal.displayName = 'PetitionModal';

export { PetitionModal };
