import { TopicCardSkeleton } from './_components/topic';

export default function Loading() {
  return (
    <div className="space-y-10">
      <div className="grid grid-flow-col gap-2 overflow-hidden">
        {Array.from({ length: 22 }, (_, i) => i).map((i) => (
          <div
            key={i}
            className="block h-20 w-16 space-y-2 rounded-md bg-gray-100 p-2 text-center"
          >
            <div className="mx-auto size-8 animate-pulse rounded-full bg-gray-400" />
            <div className="mx-auto h-2 w-3/4 animate-pulse rounded bg-gray-300" />
          </div>
        ))}
      </div>
      <div className="space-y-4">
        <div className="h-8 w-32 animate-pulse rounded-md bg-gray-300" />
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 10 }, (_, i) => (
            <TopicCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
