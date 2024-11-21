import { ChangeEvent } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  fieldLabel: string;
  value: string;
  children?: React.ReactNode;
  lengthOption: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  fieldLabel,
  value,
  onChange,
  maxLength,
  children,
  lengthOption,
  ...props
}: InputProps) => {
  return (
    <label className="flex flex-col">
      <div className="mb-[9px] flex justify-between">
        <span className="text-base">
          {fieldLabel} {children}
        </span>
        {lengthOption && (
          <span>
            ({value.length} / {maxLength})
          </span>
        )}
      </div>
      <input
        className="h-9 rounded-[10px] border border-light-gray px-[11px] py-2 focus:border-[#228CFF]"
        value={value}
        onChange={onChange}
        {...props}
      />
    </label>
  );
};
