interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonLabel: string;
}

export const Button = ({ buttonLabel, onClick, ...props }: ButtonProps) => {
  return (
    <button
      className="h-12 w-full rounded-xl bg-primary text-xl font-bold text-white disabled:bg-[#B5B5B5]"
      onClick={onClick}
      {...props}
    >
      {buttonLabel}
    </button>
  );
};
