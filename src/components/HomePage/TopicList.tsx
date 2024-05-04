import 'dayjs/locale/th';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Image from 'next/image';

import { type PopularTopic } from '@/types/pantip-content';

dayjs.extend(relativeTime);
dayjs.locale('th');

export function TopicList({ topic }: { topic: PopularTopic }) {
  return (
    <div className="rounded-lg bg-gray-50/90">
      <div className="flex items-center gap-x-2 border-b-2 border-gray-300 p-4">
        <div className="inline-block size-8 rounded-full bg-gray-700 p-0.5">
          <Image
            width={30}
            height={30}
            src={`https://ptcdn.info/mobile/icon_room/pt-forum-${topic.room_name_en}.svg`}
            alt={topic.room_name_th}
          />
        </div>
        <h3 className="text-2xl font-bold text-pink-600">
          {topic.room_name_th}
        </h3>
        <div className="ml-auto">
          <a
            href={`https://pantip.com/forum/${topic.room_name_en}`}
            className="text-sm font-medium text-gray-600 hover:text-gray-700 hover:underline"
          >
            ดูทั้งหมด
          </a>
        </div>
      </div>
      <ul className="divide-y divide-gray-200/80">
        {topic.topics.map((t) => (
          <li
            key={t.topic_id}
            className="flex min-h-[125px] flex-col justify-center p-4 hover:bg-gray-100"
          >
            <div className="md:flex md:items-center md:space-x-2">
              {t.thumbnail_url && (
                <a
                  href={`https://pantip.com/forum/${t.topic_id}`}
                  target="_blank"
                  className="rounded-md"
                >
                  <Image
                    src={t.thumbnail_url}
                    alt={t.title}
                    width={300}
                    height={180}
                    className="aspect-video h-auto w-full rounded-md object-cover object-top md:max-w-[120px]"
                  />
                </a>
              )}
              <div>
                <a
                  href={`https://pantip.com/forum/${t.topic_id}`}
                  target="_blank"
                  className="mt-1 block break-words font-semibold leading-none tracking-tight hover:text-gray-700 md:mt-0"
                >
                  {t.title}
                </a>
                <div className="flex items-center gap-1">
                  <a
                    href={`https://pantip.com/profile/${t.author.id}`}
                    target="_blank"
                    className="text-sm font-medium text-gray-600"
                  >
                    {t.author.name}
                  </a>
                  <span>&middot;</span>
                  <span className="text-xs text-gray-400">
                    {dayjs(t.created_time).fromNow()}
                  </span>
                </div>

                <div className="mt-2 flex flex-wrap gap-1">
                  {t.tags.map((tag) => (
                    <a
                      target="_blank"
                      href={`https://pantip.com/tag/${tag.slug}`}
                      key={tag.slug}
                      className="truncate rounded-full bg-gray-200 px-3 text-xs font-medium hover:bg-gray-300"
                    >
                      {tag.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function TopicListSkeleton() {
  return (
    <div className="rounded-lg bg-gray-50/90 p-4">
      <div className="mb-3 flex w-full items-center space-x-2">
        <div className="size-8 animate-pulse rounded-full bg-gray-300 md:size-10" />
        <div className="h-3 w-24 animate-pulse rounded-sm bg-gray-300 md:h-5 md:w-56" />
        <div className="shrink-0 grow">
          <div className="ml-auto h-2 w-12 animate-pulse rounded-sm bg-gray-300" />
        </div>
      </div>
      <div className="space-y-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            className="space-y-2 md:flex md:items-center md:space-x-2 md:space-y-0"
            key={i}
          >
            <div className="aspect-video w-full animate-pulse rounded-md bg-gray-300 md:w-[120px]" />
            <div className="grow space-y-2 self-center">
              <div className="h-4 w-1/2 animate-pulse rounded-sm bg-gray-300 md:h-6" />
              <div className="flex space-x-1">
                <div className="h-1 w-24 animate-pulse rounded-sm bg-gray-300 md:h-2" />
                <div className="h-1 w-24 animate-pulse rounded-sm bg-gray-300 md:h-2" />
              </div>
              <div className="flex space-x-1">
                <div className="h-2 w-16 animate-pulse rounded-sm bg-gray-300 md:h-3" />
                <div className="h-2 w-16 animate-pulse rounded-sm bg-gray-300 md:h-3" />
                <div className="h-2 w-16 animate-pulse rounded-sm bg-gray-300 md:h-3" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
