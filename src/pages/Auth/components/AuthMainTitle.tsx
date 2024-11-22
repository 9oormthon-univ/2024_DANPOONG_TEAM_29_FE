import logo from '@/assets/auth/authLogo.png';

type AuthProps = {
  authStyle: string;
  title: string;
};

export const AuthMainTitle = ({ authStyle, title }: AuthProps) => {
  return (
    <>
      <img src={logo} alt="logo" className="h-[200px] w-[200px]" />
      <div className={authStyle}>{title}</div>
    </>
  );
};
