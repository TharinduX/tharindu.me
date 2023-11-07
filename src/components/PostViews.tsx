import { useEffect } from 'react';
import useSWR from 'swr';

function ViewCounter({ slug }: any) {

  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data } = useSWR(`/api/views/${slug}`, fetcher);
  const views = data?.total;

  useEffect(() => {
    const registerView = () =>
      fetch(`/api/views/${slug}`, {
        method: 'POST',
      });
    registerView();
  }, [slug]);

  return (`${views ? views : '–'}`);
}


export default ViewCounter;