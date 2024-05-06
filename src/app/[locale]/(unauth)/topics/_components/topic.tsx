import { EyeIcon, ImageIcon, MessageSquarePlus } from 'lucide-react';
import Image from 'next/image';

import type { TopicWithRoom } from '@/types/pantip-content';
import { formatDate } from '@/utils/Formatter';

export function TopicCard({ topic }: { topic: TopicWithRoom }) {
  const topicUrl = `https://pantip.com/topic/${topic.topic_id}`;
  return (
    <div>
      <div className="relative">
        <a href={topicUrl} target="_blank">
          {topic.thumbnail_url ? (
            <Image
              src={topic.thumbnail_url}
              alt={topic.title}
              width={400}
              height={320}
              className="aspect-video h-auto w-full rounded-lg object-cover object-top"
            />
          ) : (
            <div className="grid aspect-video size-full place-items-center rounded-lg bg-gray-200">
              <svg
                className="size-12 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                <path d="M8 10h.01" />
                <path d="M12 10h.01" />
                <path d="M16 10h.01" />
              </svg>
            </div>
          )}
        </a>
        <div className="absolute right-2 top-2">
          <div
            className="inline-flex size-8 items-center justify-center rounded-full bg-pink-600 p-1 lg:size-10"
            title={topic.room_name_th}
          >
            <Image
              width={30}
              height={30}
              src={`https://ptcdn.info/mobile/icon_room/pt-forum-${topic.room_name_en}.svg`}
              alt={topic.room_name_th}
            />
          </div>
        </div>
      </div>
      <div className="mt-1">
        <h5 className="truncate font-bold leading-tight tracking-tight">
          <a href={topicUrl} target="_blank">
            {topic.title}
          </a>
        </h5>
        <p className="-mt-1 text-sm font-medium text-gray-600">
          <a href={`https://pantip.com/profile/${topic.author.id}`}>
            {topic.author.name}
          </a>
        </p>
        <div className="flex items-center">
          <div>
            <time
              dateTime={topic.created_time}
              className="text-sm text-gray-500"
            >
              {formatDate(topic.created_time)}
            </time>
          </div>
          <div className="ml-auto">
            <ul className="flex items-center text-sm">
              <li className="flex items-center" title="จำนวนผู้ชม">
                <EyeIcon className="mr-1 size-4" />
                <span className="text-gray-500">{topic.views_count}</span>
              </li>
              <li className="mx-1 text-gray-300">/</li>
              <li className="flex items-center" title="จำนวนคอมเมนท์">
                <MessageSquarePlus className="mr-1 size-4" />
                <span className="text-gray-500">{topic.votes_count}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TopicCardSkeleton() {
  return (
    <div>
      <div className="flex aspect-video animate-pulse items-center justify-center rounded-lg bg-gray-300">
        <ImageIcon className="size-12 text-gray-400" />
      </div>
      <div className="mt-2">
        <div className="h-4 w-2/3 animate-pulse rounded bg-gray-300" />
        <div className="mt-1 h-3 w-1/3 animate-pulse rounded-sm bg-gray-300" />
        <div className="mt-3.5 flex items-center justify-between">
          <div className="h-2 w-16 animate-pulse rounded-sm bg-gray-300" />
          <div className="h-2 w-16 animate-pulse rounded-sm bg-gray-300" />
        </div>
      </div>
    </div>
  );
}
