import { dummyExhibitionList } from '@assets/dummy/exhibitionList';
import { Exhibition } from '@src/lib/types/exhibition';
import { sleep } from '@utils/sleep';

// 전시회 리스트 불러오기 API
export const getApiExhibitionList = async (): Promise<Exhibition[]> => {
  const response = [...dummyExhibitionList];

  await sleep({ ms: 1000 });

  return response;
};

// 전시회 상세 불러오기 API
export const getDetailExhibition = async ({ id }: { id: number }): Promise<Exhibition | Error> => {
  const response = dummyExhibitionList.find((item) => item.id === id);

  await sleep({ ms: 500 });

  if (response === undefined) {
    return new Error('존재하지 않는 전시회 입니다');
  }

  return response as Exhibition;
};
