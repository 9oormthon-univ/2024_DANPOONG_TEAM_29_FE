import { FilterType } from '@/types/filterType';
import { translatePart } from '@/utils/translatePart';

export const EmptyFeed = ({ filterType }: { filterType: FilterType }) => {
  return (
    <div className="flex h-96 flex-col justify-center whitespace-pre-line text-center">
      <p>
        현재 <span className="text-[#228CFF]">{translatePart(filterType)}</span> 직종에 관한
        이야기가 없습니다.
        <br />이 분야에서 일하고 계신다면 경험을 들려주세요!
      </p>
    </div>
  );
};
