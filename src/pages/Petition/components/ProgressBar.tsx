export const ProgressBar = ({ percentage }: { percentage: number }) => {
  return (
    <div className="h-[1rem] w-full bg-[#D9D9D9]">
      <div className="bg-[#08206E]" style={{ width: `${percentage}% `, height: '100%' }} />
    </div>
  );
};
