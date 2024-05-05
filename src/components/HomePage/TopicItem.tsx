import dayjs from 'dayjs';
import Image from 'next/image';

import type { Topic } from '@/types/pantip-content';

export function TopicItem({ topic }: { topic: Topic }) {
  const topicUrl = `https://pantip.com/topic/${topic.topic_id}`;
  return (
    <div className="flex flex-col gap-1 sm:flex-row sm:gap-2">
      <div className="relative aspect-video h-auto w-full shrink-0 sm:h-[100px] sm:w-[150px]">
        {topic.thumbnail_url ? (
          <Image
            src={topic.thumbnail_url}
            alt={topic.title}
            fill
            sizes="300px"
            className="absolute rounded-md object-cover object-top"
          />
        ) : (
          <div className="grid size-full place-items-center rounded-md bg-gray-100">
            <svg
              className="size-12 text-gray-300"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              <path d="M8 10h.01" />
              <path d="M12 10h.01" />
              <path d="M16 10h.01" />
            </svg>
          </div>
        )}
      </div>
      <div className="grow">
        <div className="mb-2">
          <h3 className="break-words font-bold leading-none tracking-tight text-gray-800 hover:text-gray-800/80">
            <a href={topicUrl} target="_blank">
              {topic.title}
            </a>
          </h3>
          <div className="flex items-center space-x-2">
            <a
              href={`https://pantip.com/profile/${topic.author.id}`}
              className="text-sm font-medium text-gray-500 hover:text-gray-500/80"
            >
              {topic.author.name}
            </a>
            <time className="text-xs text-gray-400">
              {dayjs(topic.created_time).fromNow()}
            </time>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {topic.tags.map((tag) => (
            <a
              href={`https://pantip.com/tag/${tag.slug}`}
              key={tag.slug}
              className="truncate rounded-full bg-gray-200 px-3 text-xs font-medium text-gray-600 hover:bg-gray-200/80 hover:text-gray-600/90"
            >
              {tag.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
