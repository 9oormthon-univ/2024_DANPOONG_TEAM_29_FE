import { Dispatch, SetStateAction, useState } from 'react';

import { useSearchParams } from 'react-router-dom';

import FilterIcon from '@/assets/feed/filter.svg?react';
import AgricultureIcon from '@/assets/feed/filter_agriculture.svg?react';
import ConstructionIcon from '@/assets/feed/filter_construction.svg?react';
import FisheriesIcon from '@/assets/feed/filter_fisheries.svg?react';
import HousecareIcon from '@/assets/feed/filter_housecare.svg?react';
import LogisticsIcon from '@/assets/feed/filter_logistics.svg?react';
import ManufacturingIcon from '@/assets/feed/filter_manufacturing.svg?react';
import ProfessionalIcon from '@/assets/feed/filter_professional.svg?react';
import ServiceIcon from '@/assets/feed/filter_service.svg?react';
import FilterCloseIcon from '@/assets/feed/filterClose.svg?react';
import { FilterType } from '@/types/filterType';

const FILTER_TYPE: { filter: FilterType; icon: React.ReactNode }[] = [
  { filter: 'MANUFACTURING', icon: <ManufacturingIcon /> },
  { filter: 'CONSTRUCTION', icon: <ConstructionIcon /> },
  { filter: 'LOGISTICS', icon: <LogisticsIcon /> },
  { filter: 'SERVICE', icon: <ServiceIcon /> },
  { filter: 'AGRICULTURE', icon: <AgricultureIcon /> },
  { filter: 'FISHERIES', icon: <FisheriesIcon /> },
  { filter: 'HOUSECARE', icon: <HousecareIcon /> },
  { filter: 'PROFESSIONAL', icon: <ProfessionalIcon /> },
];

export const Filter = ({
  isFilterVisible,
  setIsFilterVisible,
}: {
  isFilterVisible: boolean;
  setIsFilterVisible: Dispatch<SetStateAction<boolean>>;
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPartType, setCurrentPartType] = useState(searchParams.get('part') || '');

  const handleIsFilterVisible = () => {
    setIsFilterVisible((prev) => !prev);
  };

  const updateSearchParams = (filter: string) => {
    const newSearchParams = new URLSearchParams(searchParams);

    if (newSearchParams.has('part')) {
      newSearchParams.delete('part');
      setCurrentPartType('');
    } else {
      newSearchParams.set('part', filter);
      setCurrentPartType(filter);
    }

    setSearchParams(newSearchParams);
  };

  return (
    <div className="flex min-h-8 items-center justify-end">
      {isFilterVisible ? (
        <div className="flex items-center">
          <FilterCloseIcon onClick={handleIsFilterVisible} />
          <div className="ml-1 flex gap-[7px] rounded-full bg-[#F7F7F7] px-2 py-1">
            {FILTER_TYPE.map(({ filter, icon }) => (
              <div
                key={filter}
                onClick={() => updateSearchParams(filter)}
                className={currentPartType === filter ? 'text-primary' : 'text-[#979797]'}
              >
                {icon}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex h-8 w-10 items-center justify-center rounded-full bg-[#F7F7F7]">
          <FilterIcon onClick={handleIsFilterVisible} />
        </div>
      )}
    </div>
  );
};
