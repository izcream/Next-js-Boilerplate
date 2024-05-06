import { TopicListSkeleton } from '@/components/HomePage/TopicList';

export default function Loading() {
  return (
    <div className="space-y-10">
      <div className="grid grid-flow-col justify-start gap-3 overflow-hidden">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="group block min-w-14 space-y-2 py-2 md:min-w-16"
          >
            <div className="mx-auto size-10 animate-pulse rounded-full bg-gray-300" />
            <div className="mx-auto h-2 w-2/3 animate-pulse rounded-sm bg-gray-200" />
          </div>
        ))}
      </div>
      <div>
        <div className="mb-4 h-8 w-48 animate-pulse rounded-md bg-gray-300" />
        <div className="flex gap-x-4 overflow-hidden">
          {Array.from({ length: 5 }, (_, i) => (
            <div
              key={i}
              className="flex-[0_0_85%] space-y-2 sm:flex-[0_0_45%] lg:flex-[0_0_22%]"
            >
              <div className="aspect-video rounded-lg bg-gray-300" />
              <div className="h-4 w-full animate-pulse rounded bg-gray-300" />
              <div className="h-4 w-2/4 animate-pulse rounded bg-gray-300" />
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-x-5 gap-y-10 lg:grid-cols-2">
        <TopicListSkeleton />
        <TopicListSkeleton />
      </div>
    </div>
  );
}
