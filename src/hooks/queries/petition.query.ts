import {
  InfiniteData,
  useMutation,
  useSuspenseInfiniteQuery,
  useSuspenseQuery,
} from '@tanstack/react-query';

import { getPetitionDetail, getPetitionList, postPetition } from '@/api/petition.api';
import { PetitionDetailType, PetitionItemType, PetitionPostType } from '@/types/petitionType';

const PETITION_PER_PAGE = 8;

export const useGetPetitionList = (working_condition: string) => {
  return useSuspenseInfiniteQuery<
    PetitionItemType[],
    Error,
    InfiniteData<PetitionItemType[]>,
    string[],
    number
  >({
    queryKey: ['petitionList', working_condition],
    queryFn: ({ pageParam }) => getPetitionList({ page: pageParam, working_condition }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      // TODO: 응답의 hasNext 값으로 판단하도록 수정
      return lastPage.length === PETITION_PER_PAGE ? allPages.length : undefined;
    },
    retry: false,
  });
};

export const useGetPetitionDetail = (petitionId: number) => {
  return useSuspenseQuery<PetitionDetailType>({
    queryKey: ['petitionDetail', petitionId],
    queryFn: () => getPetitionDetail(petitionId),
  });
};

export const usePostPetition = () => {
  return useMutation({
    mutationFn: (data: PetitionPostType) => postPetition(data),
    onError: (error) => {
      alert(error?.message);
    },
    onSuccess: () => {
      alert('User information posted successfully!');
    },
  });
};
