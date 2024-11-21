import FollowIcon from '../../../assets/follow.svg?react';

interface RecommendUserInfo {
  userId: number;
  nickName: string;
  profileImageUrl: string;
  part: string;
}

export const RecommendUser = ({ userList }: { userList: RecommendUserInfo[] }) => {
  if (userList.length == 0) return;

  return (
    <div>
      <p className="mb-3 text-xl">나와 비슷한 사용자 추천</p>
      <div className="flex gap-4 overflow-scroll [&::-webkit-scrollbar]:hidden">
        {userList.map(({ nickName, profileImageUrl, part }) => (
          <div
            key={nickName}
            className="flex h-[162px] w-[132px] shrink-0 flex-col items-end justify-between rounded-[10px] border border-[#6AC3FF] p-[10px]"
          >
            <div className="w-full text-xs leading-5">
              <img
                src={profileImageUrl}
                className="mb-2 h-10 w-10 rounded-full"
                alt="profile image"
              />
              <p className="font-medium">{nickName}</p>
              <p className="font-normal">{part} 종사자</p>
            </div>
            {/* TODO: 클릭 시 팔로우 요청 전송 */}
            <FollowIcon />
          </div>
        ))}
      </div>
    </div>
  );
};
