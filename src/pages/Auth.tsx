export const Auth = () => {
  const code = new URL(window.location.href).searchParams.get('code');
  console.log(code);
  return <div>인가 페이지</div>;
};
