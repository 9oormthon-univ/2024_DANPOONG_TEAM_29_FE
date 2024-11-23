import ClipBoardImg from '@/assets/clipboard.png';
import PetitionIcon from '@/assets/petition/petition.svg?react';
import { PetitionItemType } from '@/types/petitionType';
import { formatNumber } from '@/utils/formatNumber';

interface PetitionItemProps extends Omit<PetitionItemType, 'id'> {
  onClick: () => void;
}

export const PetitionItem = ({
  title,
  petitionType,
  agreementCount,
  createdDate,
  agreementDeadline,
  onClick,
}: PetitionItemProps) => {
  return (
    <button
      onClick={onClick}
      className="flex h-[178px] flex-col justify-between rounded-[10px] bg-[#F7F7F7] p-2 text-xs leading-5"
    >
      <div>
        <div className="flex items-center">
          <p className="inline-block text-[10px] text-[#228CFF]">{petitionType}</p>
          <img src={ClipBoardImg} className="h-[13px] w-[13px]" alt="petition icon" />
        </div>
        <p className="text-left font-bold">{title}</p>
      </div>

      <div>
        <div className="mb-1 flex items-center">
          <PetitionIcon className="mr-[2px]" />
          <p className="font-bold">{formatNumber(agreementCount)}명</p>
        </div>
        <p className="font-medium">
          {createdDate.replace(/-/g, '.')} ~ {agreementDeadline.replace(/-/g, '.')}
        </p>
      </div>
    </button>
  );
};
