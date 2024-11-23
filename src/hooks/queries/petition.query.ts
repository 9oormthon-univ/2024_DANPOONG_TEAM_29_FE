import { useMutation, useSuspenseInfiniteQuery, useSuspenseQuery } from '@tanstack/react-query';

import { getPetitionDetail, getPetitionList, postPetition } from '@/api/petition.api';
import { PetitionPostType } from '@/types/petitionType';

export const useGetPetitionList = (working_condition: string) => {
  return useSuspenseInfiniteQuery({
    queryKey: ['petitionList', working_condition],
    queryFn: ({ pageParam }) => getPetitionList({ page: pageParam, working_condition }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.hasNext == true ? allPages.length : undefined;
    },
    select: (data) => ({
      pages: data.pages.map((page) => page.PetitionResponseList),
      pageParams: data.pageParams,
    }),
    retry: false,
  });
};

export const useGetPetitionDetail = (petitionId: number) => {
  return useSuspenseQuery({
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
      console.log('User information posted successfully!');
    },
  });
};
