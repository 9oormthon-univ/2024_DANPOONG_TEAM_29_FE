import { forwardRef, useEffect } from 'react';

import { Button } from '@/components/Button';
interface PetitionModalProps {
  onClose: () => void;
  onSubmit: () => void;
  children: React.ReactNode;
  buttonLabel: string;
  disabled: boolean;
}

const Modal = forwardRef<HTMLDialogElement, PetitionModalProps>(
  ({ onSubmit, children, buttonLabel, onClose, disabled }: PetitionModalProps, ref) => {
    useEffect(() => {
      if (typeof ref === 'function') return;
      const dialog = ref!.current;
      if (dialog) {
        dialog.addEventListener('click', (e: MouseEvent) => {
          if (e.target === dialog) {
            onClose(); // 모달 외부 클릭 시 닫기
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
        className="z-50 h-[420px] w-[370px] overflow-hidden rounded-[15px] bg-white p-8 shadow-lg"
      >
        {children}
        <Button buttonLabel={buttonLabel} onClick={onSubmit} disabled={disabled} />
      </dialog>
    );
  },
);

Modal.displayName = 'PetitionModal';

export { Modal };
