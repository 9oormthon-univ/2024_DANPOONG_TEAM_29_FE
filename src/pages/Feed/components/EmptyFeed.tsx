import { useTranslation } from 'react-i18next';

import { FilterType } from '@/types/filterType';
import { translatePart } from '@/utils/translatePart';

export const EmptyFeed = ({ filterType }: { filterType: FilterType }) => {
  const { t } = useTranslation('feed');
  return (
    <div className="flex h-96 flex-col justify-center whitespace-pre-line text-center">
      <p>
        {t('0')}
        <span className="text-[#228CFF]">
          {t('3', {
            part: translatePart(filterType),
            postProcess: 'feedEmptyHandler',
          })}
        </span>
        {t('1')}
        <br />
        {t('2')}
      </p>
    </div>
  );
};
