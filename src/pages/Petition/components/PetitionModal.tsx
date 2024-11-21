interface PetitionModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export const PetitionModal = ({ isOpen, onClose }: PetitionModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed left-1/2 top-1/2 z-50 h-[391px] w-[353px] -translate-x-1/2 -translate-y-1/2 transform rounded-[15px] bg-white shadow-lg">
      <button
        onClick={onClose}
        className="absolute right-2 top-2 cursor-pointer border-none bg-transparent text-lg"
      >
        X
      </button>
      <div className="p-5">
        {/* Modal content */}
        <h2 className="text-xl">청원 서명란</h2>
        <p>모달 내용이 들어갑니다.</p>
      </div>
    </div>
  );
};


