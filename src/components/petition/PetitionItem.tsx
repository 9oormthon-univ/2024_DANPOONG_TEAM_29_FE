import ClipBoardImg from '../../assets/clipboard.png';
import PetitionIcon from '../../assets/petition.svg?react';
import { formatNumber } from '../../utils/formatNumber';

// TODO: 서버 스키마와 일치 시키기
interface PetitionItemProps {
  category: string;
  title: string;
  count: number;
  startDate: string;
  endDate: string;
}

export const PetitionItem = ({ category, title, count, startDate, endDate }: PetitionItemProps) => {
  return (
    <div className="flex h-[178px] flex-col justify-between rounded-[10px] bg-[#F7F7F7] p-2 text-xs leading-5">
      <div>
        <div className="flex items-center">
          <p className="inline-block text-[10px] text-[#228CFF]">{category}</p>
          <img src={ClipBoardImg} className="h-[13px] w-[13px]" alt="petition icon" />
        </div>

        <p className="font-bold">{title}</p>
      </div>

      <div>
        <div className="mb-1 flex items-center">
          <PetitionIcon className="mr-[2px]" />
          <p className="font-bold">{formatNumber(count)}명</p>
        </div>
        <p className="font-medium">
          {startDate} ~ {endDate}
        </p>
      </div>
    </div>
  );
};
