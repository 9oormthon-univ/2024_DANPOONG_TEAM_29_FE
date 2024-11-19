interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonLabel: string;
}

export const Button = ({ buttonLabel, onClick, ...props }: ButtonProps) => {
  return (
    <button
      className="bg-primary h-12 w-full rounded-xl text-xl font-bold text-white"
      onClick={onClick}
      {...props}
    >
      {buttonLabel}
    </button>
  );
};
