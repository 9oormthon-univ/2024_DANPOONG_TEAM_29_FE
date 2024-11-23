interface TextAreaProps {
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  areaHeight?: number;
  title: string;
  placeholder?: string;
  isError: boolean;
}

export const CustomTextArea = ({
  value,
  onChange,
  onBlur,
  areaHeight = 329,
  title,
  placeholder = '내용을 입력해주세요',
}: TextAreaProps) => {
  return (
    <div>
      <div className="mb-[9px] flex justify-between">
        <span className="text-base font-bold">{title}</span>
      </div>
      <div
        className="flex flex-col justify-between rounded-[10px] border border-light-gray px-[11px] py-2"
        style={{ minHeight: `${areaHeight}px` }}
      >
        <textarea
          className="h-full w-full resize-none whitespace-pre-wrap rounded-md border-none outline-none focus:caret-[#54BBFF]"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          onBlur={onBlur}
        />
      </div>
      {/* {isError && <p className="text-xs text-[#FF7A7A]">필수 항목입니다.</p>} */}
    </div>
  );
};
