import { getTranslations } from 'next-intl/server';

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

export default async function Index() {
  const [rooms, hightlights, topics] = await Promise.all([
    getRoomList(),
    getHightlightTopic(),
    getPopularTopic(0, 0),
  ]);
  return (
    <>
      <RoomSelector rooms={rooms} />
      <div className="container mx-auto">
        <div className="space-y-10">
          <HightLightTopic hightlights={hightlights} />
          <div className="grid grid-cols-1 gap-x-5 gap-y-10 lg:grid-cols-2">
            {topics.data?.map((topic) => (
              <TopicList key={topic.room_id} topic={topic} />
            ))}
          </div>
          <LoadMoreTopic
            rankingTime={topics.ranking_time}
            nextId={topics.next_id}
          />
        </div>
      </div>
    </>
  );
}
