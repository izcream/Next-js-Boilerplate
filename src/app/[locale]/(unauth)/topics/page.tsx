import type { Metadata } from 'next';

import { BackToTop } from '@/components/BackToTop';
import { getPopularTopic, getRoomList } from '@/utils/PantipFetcher';

import { Loadmore } from './_components/load-more';
import { RoomListCarousel } from './_components/room-list';
import { TopicCard } from './_components/topic';

export const metadata: Metadata = {
  title: 'Topics',
  description: 'Pantip Topics',
};

export default async function TopicPage() {
  const rooms = await getRoomList();
  const popularTopics = await getPopularTopic(0, 0, 4);
  const topics = popularTopics.data.flatMap((d) =>
    d.topics.flatMap((t) => ({
      ...t,
      room_id: d.room_id,
      room_name_en: d.room_name_en,
      room_name_th: d.room_name_th,
    })),
  );
  return (
    <div className="space-y-10">
      <RoomListCarousel rooms={rooms} />
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-pink-600">Topics</h1>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {topics.map((topic) => (
            <TopicCard key={topic.topic_id} topic={topic} />
          ))}
          <Loadmore
            nextId={popularTopics.next_id}
            rankingTime={popularTopics.ranking_time}
          />
        </div>
      </div>
      <BackToTop />
    </div>
  );
}
