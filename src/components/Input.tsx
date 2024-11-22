import { ChangeEvent } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  fieldLabel: string;
  value: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ fieldLabel, value, onChange, ...props }: InputProps) => {
  return (
    <label className="flex flex-col">
      <div className="mb-[9px] flex justify-between">
        <span className="text-base font-bold">{fieldLabel}</span>
      </div>
      <input
        className="h-9 rounded-[10px] border border-light-gray px-[11px] py-2 outline-none focus:caret-[#54BBFF] focus:ring-1 focus:ring-[#228CFF]"
        value={value}
        onChange={onChange}
        {...props}
      />
    </label>
  );
};
