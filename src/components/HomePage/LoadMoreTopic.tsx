'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { useTopicStore } from '@/stores/topic.store';
import { getPopularTopic } from '@/utils/PantipFetcher';

import { TopicList, TopicListSkeleton } from './TopicList';

export function LoadMoreTopic({ rankingTime }: { rankingTime: number }) {
  const { nextId, setNextId, setTopics, topics } = useTopicStore();
  const [hasNext, setHasNext] = useState(true);
  const [loading, setLoading] = useState(false);
  const { ref, inView } = useInView();
  const rankTime = useRef(rankingTime);
  const loadMoreTopic = useCallback(async () => {
    if (!hasNext || loading) return;
    setLoading(true);
    // prevent rate limit
    await new Promise((r) => {
      setTimeout(r, 2000);
    });
    const res = await getPopularTopic(nextId, rankTime.current);
    setTopics(res.data);
    setNextId(res.next_id);
    setHasNext(res.has_next);
    setLoading(false);
  }, [hasNext, nextId, setNextId, setTopics, loading]);
  useEffect(() => {
    if (inView) {
      loadMoreTopic();
    }
  }, [inView, loadMoreTopic]);
  return (
    <>
      {topics.map((t) => (
        <TopicList key={t.room_id} topic={t} />
      ))}
      <div ref={ref} className="col-span-full">
        {hasNext && (
          <div className="grid grid-cols-1 gap-x-5 gap-y-10 lg:grid-cols-2">
            <TopicListSkeleton />
            <TopicListSkeleton />
          </div>
        )}
      </div>
    </>
  );
}
