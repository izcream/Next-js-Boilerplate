import { getTranslations } from 'next-intl/server';

import { BackToTop } from '@/components/BackToTop';
import { HightLightTopic } from '@/components/HomePage/HigtlightTopic';
import { LoadMoreTopic } from '@/components/HomePage/LoadMoreTopic';
import { RoomSelector } from '@/components/HomePage/RoomSelector';
import { TopicList } from '@/components/HomePage/TopicList';
import {
  getHightlightTopic,
  getPopularTopic,
  getRoomList,
} from '@/utils/PantipFetcher';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function HomePage() {
  const [rooms, hightlights, popularTopic] = await Promise.all([
    getRoomList(),
    getHightlightTopic(),
    getPopularTopic(0, 0),
  ]);
  return (
    <div className="space-y-10">
      <RoomSelector rooms={rooms} />
      <HightLightTopic hightlights={hightlights} />
      <div className="grid grid-cols-1 gap-x-5 gap-y-10 lg:grid-cols-2">
        {popularTopic.data.map((topic) => (
          <TopicList key={topic.room_id} topic={topic} />
        ))}
        <LoadMoreTopic
          rankingTime={popularTopic.ranking_time}
          nextId={popularTopic.next_id}
        />
      </div>
      <BackToTop />
    </div>
  );
}
