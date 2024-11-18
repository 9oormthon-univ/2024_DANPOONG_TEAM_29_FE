import { ChangeEvent } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  fieldLabel: string;
  value: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ fieldLabel, value, onChange, maxLength, ...props }: InputProps) => {
  return (
    <label className="flex flex-col">
      <div className="mb-[9px] flex justify-between">
        <span className="text-base">{fieldLabel}</span>
        <span>
          ({value.length} / {maxLength})
        </span>
      </div>
      <input
        className="border-light-gray h-9 rounded-[10px] border px-[11px] py-2"
        value={value}
        onChange={onChange}
        {...props}
      />
    </label>
  );
};
