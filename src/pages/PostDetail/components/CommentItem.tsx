import Spacing from '../../../components/Spacing';
import { formatTimeToAbsoluteOrRelative } from '../../../utils/formatTime';

interface CommentItemProps {
  profileImageUrl: string;
  nickname: string;
  content: string;
  createdAt: string;
}

export const CommentItem = ({
  profileImageUrl,
  nickname,
  content,
  createdAt,
}: CommentItemProps) => {
  return (
    <div className="flex">
      <img src={profileImageUrl} className="h-10 w-10 rounded-full" alt="author image" />
      <Spacing size={0.6} direction="horizontal" />
      <div>
        <div className="flex gap-2 leading-5">
          <p className="grow text-xs font-medium">{nickname}</p>
          <p className="grow text-xs text-[#939393]">{formatTimeToAbsoluteOrRelative(createdAt)}</p>
        </div>
        <p className="grow text-xs">{content}</p>
      </div>
    </div>
  );
};
