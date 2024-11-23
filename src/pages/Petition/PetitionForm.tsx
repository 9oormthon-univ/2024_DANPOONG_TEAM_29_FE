import { useRef, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import EraseIcon from '@/assets/petition/eraser.png';
import PencilIcon from '@/assets/petition/pencil.png';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Loading } from '@/components/Loading';
import { Modal } from '@/components/Modal';
import Spacing from '@/components/Spacing';
import { TopBarControl } from '@/components/TopBarControl';
import { usePostPetition } from '@/hooks/queries/petition.query';
import { PetitionPostType } from '@/types/petitionType';

import { CustomTextArea } from './components/PetitionTextArea';

<<<<<<< HEAD
=======
const options = [
  { value: 'WORKING_CONDITIONS', label: '노동 환경 개선' },
  { value: 'WAGES_AND_BENEFITS', label: '임금 및 복지' },
  { value: 'HOUSING_ISSUES', label: '주거 문제' },
  { value: 'LEGAL_PROTECTION', label: '법적 보호 및 권리' },
  { value: 'HEALTHCARE', label: '의료 및 건강 관리' },
  { value: 'EDUCATION_AND_ADAPTATION', label: '교육 및 한국 생활 적응' },
  { value: 'DISCRIMINATION_PREVENTION', label: '차별 및 부당 대우 방지' },
  { value: 'SOCIAL_RIGHTS_IMPROVEMENT', label: '사회적 권리 향상' },
];

>>>>>>> develop
export const PetitionForm = () => {
  const navigate = useNavigate();
  const { t } = useTranslation('petitionForm');

  const options = [
    { value: t('4'), label: '제조업' },
    { value: t('5'), label: '건설업' },
    { value: t('6'), label: '운전 및 운송' },
    { value: t('7'), label: '서비스업' },
    { value: t('8'), label: '농업 및 축산업' },
    { value: t('9'), label: '어업' },
    { value: t('10'), label: '가사 및 돌봄' },
    { value: t('11'), label: '전문직' },
  ];

  const { mutate, isError, error, isPending } = usePostPetition();
  const [formData, setFormData] = useState<PetitionPostType>({
    title: '',
    petitionType: '',
    content: '',
    purpose: '',
  });
  const [didEdit, setDidEdit] = useState({
    title: false,
    petitionType: false,
    content: false,
    purpose: false,
  });

  const ref = useRef<HTMLDialogElement>(null);
  const onClose = () => {
    ref.current?.close();
  };
  const onSubmit = () => {
    ref.current?.close();
    mutate(formData);
    navigate('/');
  };

  const isValid =
    formData.title === '' ||
    formData.content === '' ||
    formData.purpose === '' ||
    formData.petitionType === '';

  const updateField = (field: Partial<PetitionPostType>, identifier: string) => {
    setFormData((prev) => {
      return { ...prev, ...field };
    });
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: false,
    }));
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateField({ petitionType: e.target.value }, 'petitionType');
  };

  function handleInputBlur(identifier: string) {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));
  }

  if (isError) {
    console.log(error.message);
  }

  return (
    <>
      <Modal ref={ref} onClose={onClose} onSubmit={onSubmit} buttonLabel={t('21')} disabled={false}>
        <div className="flex flex-col items-center">
          <img src={EraseIcon} alt="eraser" className="h-[150px] w-[150px]" />
          <p className="text-sm font-bold leading-[25px]">{t('18')}</p>
          <p className="text-sm font-bold leading-[25px]">{t('19')}</p>
          <p className="text-center text-[10px] font-light leading-[25px]">{t('20')}</p>
          <Spacing size={5} />
        </div>
      </Modal>
      {isPending ? (
        <Loading />
      ) : (
        <div className="flex flex-col">
          <TopBarControl title={t('0')} size={14}>
            <span className="inline-flex items-center">
              <img src={PencilIcon} alt="pencil" className="h-[24px] w-[24px]" />
            </span>
          </TopBarControl>
          <Spacing size={4} />
          <span className="text-base font-bold">{t('1')}</span>
          <Spacing size={0.75} />
          <select
            className="h-9 w-full rounded-[10px] border border-light-gray px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-[#228CFF]"
            value={formData.petitionType}
            onChange={handleTypeChange}
            onBlur={() => handleInputBlur('petitionType')}
          >
            <option value="" disabled>
              {t('2')}
            </option>
            {options.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
          <Spacing size={1.75} />
          <Input
            value={formData.title}
            onChange={(e) => updateField({ title: e.target.value }, 'title')}
            fieldLabel={t('12')}
            placeholder={t('13')}
            maxLength={100}
            onBlur={() => handleInputBlur('title')}
          ></Input>
          <Spacing size={1.75} />
          <CustomTextArea
            value={formData.purpose}
            onChange={(value) => updateField({ purpose: value }, 'purpose')}
            onBlur={() => handleInputBlur('purpose')}
            title={t('14')}
            areaHeight={140}
            placeholder={t('15')}
            isError={didEdit.purpose && formData.purpose.trim() === ''}
          />
          <Spacing size={1.75} />
        <CustomTextArea
          value={formData.content}
          onChange={(value) => updateField({ content: value }, 'content')}
          onBlur={() => handleInputBlur('content')}
          title="청원의 내용"
          areaHeight={329}
          placeholder="내용을 입력해주세요"
          isError={didEdit.content && formData.content.trim() === ''}
        />
          <Spacing size={0.75} />

          <Spacing size={5.2} />
          <Button
            buttonLabel={t('21')}
            onClick={() => ref.current?.showModal()}
            disabled={isValid}
            style={{
              backgroundColor: !isValid ? '#1A8CFF' : '#B5B5B5',
            }}
          />
        </div>
      )}
    </>
  );
};
