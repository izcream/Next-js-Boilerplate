'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { TopicList, TopicListSkeleton } from '@/components/HomePage/TopicList';
import { useTopicStore } from '@/stores/topic.store';
import { getPopularTopic } from '@/utils/PantipFetcher';

// { rankingTime, nextId }: { rankingTime: number; nextId: number }
export function LoadMoreTopic({
  rankingTime,
  nextId,
}: {
  rankingTime: number;
  nextId: number;
}) {
  const { ref, inView } = useInView();
  const { topics, setTopics } = useTopicStore();
  const [loading, setLoading] = useState(false);
  const [hasNext, setHasNext] = useState(true);
  const nextIdRef = useRef(nextId);
  const rankingTimeRef = useRef(rankingTime);
  const loadMore = useCallback(async () => {
    if (!hasNext || nextIdRef.current === null) return;
    setLoading(true);
    await new Promise((r) => {
      setTimeout(r, 1000);
    });
    const res = await getPopularTopic(
      nextIdRef.current,
      rankingTimeRef.current,
    );
    setHasNext(res.has_next);
    nextIdRef.current = res.next_id;
    rankingTimeRef.current = res.ranking_time;
    if (res.data.length > 0) {
      setTopics(res.data);
    }
    setLoading(false);
  }, []);
  useEffect(() => {
    if (inView && !loading) {
      loadMore();
    }
  }, [inView, loading]);
  return (
    <div className="grid grid-cols-1 gap-x-5 gap-y-10 lg:grid-cols-2">
      {topics.map((d) => (
        <TopicList key={d.room_id} topic={d} />
      ))}
      {loading && (
        <>
          <TopicListSkeleton />
          <TopicListSkeleton />
        </>
      )}
      <div className="h-1 w-full" ref={ref} />
    </div>
  );
}
