'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import type { TopicWithRoom } from '@/types/pantip-content';
import { getPopularTopic } from '@/utils/PantipFetcher';

import { TopicCard, TopicCardSkeleton } from './topic';

const Skeleton = () =>
  Array.from({ length: 10 }, (_, i) => <TopicCardSkeleton key={i} />);

export function Loadmore({
  nextId,
  rankingTime,
}: {
  nextId: number;
  rankingTime: number;
}) {
  const [topics, setTopics] = useState<TopicWithRoom[]>([]);
  const [hasNext, setHasNext] = useState(true);
  const [loading, setLoading] = useState(false);
  const nextIdRef = useRef(nextId);
  const rankingTimeRef = useRef(rankingTime);
  const { ref, inView } = useInView();
  const loadMore = useCallback(async () => {
    if (!hasNext || nextIdRef.current === null) return;
    setLoading(true);
    await new Promise((r) => {
      setTimeout(r, 1000);
    });
    const res = await getPopularTopic(
      nextIdRef.current,
      rankingTimeRef.current,
      4,
    );
    setHasNext(res.has_next);
    nextIdRef.current = res.next_id;
    rankingTimeRef.current = res.ranking_time;
    if (res.data.length > 0) {
      setTopics((d) => [
        ...d,
        ...res.data.flatMap((b) =>
          b.topics.flatMap((t) => ({
            ...t,
            room_id: b.room_id,
            room_name_en: b.room_name_en,
            room_name_th: b.room_name_th,
          })),
        ),
      ]);
    }
    setLoading(false);
  }, [hasNext]);
  useEffect(() => {
    if (inView && !loading) {
      loadMore();
    }
  }, [inView, loading, loadMore]);
  return (
    <>
      {topics.map((topic) => (
        <TopicCard key={topic.topic_id} topic={topic} />
      ))}
      {loading && <Skeleton />}
      <div className="h-px w-full" ref={ref} />
    </>
  );
}
