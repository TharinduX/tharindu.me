import { useEffect } from 'react';
import useSWR from 'swr';

// update post likes on db
export default function LikeCounter({ slug }: any) {

  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data } = useSWR(`/api/likes/${slug}`, fetcher, {
  });
  const likes = data?.total;

  useEffect(() => {
    const registerLike = () =>
      fetch(`/api/likes/${slug}`, {
        method: 'POST',
      });
    registerLike();
  }, [slug]);

  return (`${likes ? likes : '–'}`);

}