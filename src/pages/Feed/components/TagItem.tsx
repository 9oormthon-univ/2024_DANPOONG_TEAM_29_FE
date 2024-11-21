export const TagItem = ({ tagLabel }: { tagLabel: string }) => {
  return (
    <span className="flex h-[22px] w-fit items-center rounded-full border bg-primary px-2 text-xs text-white">
      #{tagLabel}
    </span>
  );
};
