import 'dayjs/locale/th';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Image from 'next/image';

import { type PopularTopic } from '@/types/pantip-content';

import { TopicItem } from './TopicItem';

dayjs.locale('th');
dayjs.extend(relativeTime);

export function TopicList({ topic }: { topic: PopularTopic }) {
  return (
    <div>
      <div className="flex items-center justify-between rounded-lg bg-gray-100 p-2">
        <div className="flex items-center space-x-2">
          <div className="inline-flex size-8 items-center justify-center rounded-full bg-gray-600 p-1.5 sm:size-10">
            <Image
              width={30}
              height={30}
              src={`https://ptcdn.info/mobile/icon_room/pt-forum-${topic.room_name_en}.svg`}
              alt={topic.room_name_th}
            />
          </div>
          <h3 className="text-xl font-bold text-pink-600 sm:text-2xl">
            {topic.room_name_th}
          </h3>
        </div>
        <a
          href={`https://pantip.com/forum/${topic.room_name_en}`}
          className="text-sm font-medium text-gray-600 hover:underline"
        >
          ดูทั้งหมด
        </a>
      </div>
      <div className="py-2">
        <div className="space-y-8 sm:space-y-4">
          {topic.topics.map((tp) => (
            <TopicItem key={tp.topic_id} topic={tp} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function TopicListSkeleton() {
  return (
    <div>
      <div className="flex items-center justify-between rounded-lg bg-gray-100 p-2">
        <div className="flex items-center space-x-2">
          <div className="size-8 animate-pulse rounded-full bg-gray-300 md:size-10" />
          <div className="h-5 w-24 animate-pulse rounded-sm bg-gray-300" />
        </div>
        <div className="h-2 w-12 animate-pulse rounded-sm bg-gray-300" />
      </div>
      <div className="py-2">
        <div className="space-y-8 sm:space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div className="flex flex-col gap-1 sm:flex-row sm:gap-2" key={i}>
              <div className="aspect-video h-auto w-full shrink-0 animate-pulse rounded-lg bg-gray-300 sm:h-[100px] sm:w-[150px]" />
              <div className="grow">
                <div className="mb-2 space-y-1">
                  <div className="h-6 w-1/2 animate-pulse rounded-sm bg-gray-300" />
                  <div className="flex space-x-1">
                    <div className="h-2 w-24 animate-pulse rounded-sm bg-gray-300" />
                    <div className="h-2 w-24 animate-pulse rounded-sm bg-gray-300" />
                  </div>
                </div>
                <div className="flex space-x-1">
                  <div className="h-3 w-16 animate-pulse rounded-full bg-gray-300" />
                  <div className="h-3 w-16 animate-pulse rounded-full bg-gray-300" />
                  <div className="h-3 w-16 animate-pulse rounded-full bg-gray-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
