import { useNavigate } from 'react-router-dom';

import EmptyLike from '@/assets/emptyLike.svg?react';
import FillLike from '@/assets/fillLike.svg?react';
import { TagItem } from '@/components/tag/TagItem';

interface PostItemProps {
  authorInfo: {
    authorId: number;
    authorNickName: string;
    authorProfileImageUrl: string;
  };
  createdAt: string;
  postId: number;
  title: string;
  content: string;
  likeCount: number;
  isLike: boolean;
  tags: string[];
  postImageUrl: string;
}

export const PostItem = ({
  authorInfo,
  createdAt,
  postId,
  title,
  content,
  likeCount,
  isLike,
  tags,
  postImageUrl,
}: PostItemProps) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex gap-[10px] border-b-[1px] border-[#54BBFF] py-5"
      onClick={() => navigate(`/post/${postId}`)}
    >
      <img
        src={authorInfo.authorProfileImageUrl}
        className="h-10 w-10 rounded-full"
        alt="profile image"
      />
      <div className="grow">
        <div className="mb-[11px] flex gap-2 text-xs">
          <p className="font-medium">{authorInfo.authorNickName}</p>
          {/* TODO: 현재 시각 기준으로 계산 */}
          <p className="font-normal text-[#939393]">{createdAt}</p>
        </div>
        <p className="mb-1 text-sm font-medium leading-5">{title}</p>
        <p className="mb-[10px] line-clamp-3 max-h-16 text-xs font-normal leading-5">{content}</p>
        {postImageUrl && (
          <img
            src={postImageUrl}
            className="mb-2 h-[144px] w-full rounded-[10px]"
            alt="post image"
          />
        )}
        <div className="flex justify-between">
          <div className="flex gap-2">
            {tags.map((tag) => (
              <TagItem key={tag} tagLabel={tag} />
            ))}
          </div>
          <div className="flex items-center gap-1">
            <p className="text-xs">{likeCount}</p>
            {isLike ? <FillLike /> : <EmptyLike />}
          </div>
        </div>
      </div>
    </div>
  );
};
