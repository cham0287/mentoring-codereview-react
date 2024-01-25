import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getDetailExhibition } from '@src/apis';
import { useParams } from 'react-router-dom';
import ExhibitionDetail from '@components/ExhibitionDetail';
import { ReactComponent as ReturnIcon } from '@assets/icons/Return.svg';

const Book = () => {
  const { id } = useParams();

  const { data: exhibitionDetail } = useQuery({
    queryKey: ['exhibitionDetail', id],
    queryFn: () => getDetailExhibition({ id: Number(id) }),
  });

  if (exhibitionDetail instanceof Error) {
    return <div>존재하지 않는 전시회입니다.</div>;
  }

  return (
    <div>
      <div className="flex gap-2 p-4 text-xl font-bold">
        <ReturnIcon /> 예매하기
      </div>
      {exhibitionDetail && <ExhibitionDetail exhibition={exhibitionDetail} />}
    </div>
  );
};

export default Book;
