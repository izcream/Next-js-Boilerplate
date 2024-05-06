'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

import { type Room } from '@/types/pantip-content';

export function RoomListCarousel({ rooms }: { rooms: Room[] }) {
  const [emblaRef] = useEmblaCarousel({ dragFree: true });
  return (
    <div ref={emblaRef} className="overflow-hidden">
      <div className="grid grid-flow-col gap-x-2">
        {rooms.map((room) => (
          <a
            href={`https://pantip.com/tag/${room.slug}`}
            target="_blank"
            key={room.id}
            className="h-auto w-16 space-y-1 rounded-md bg-gray-100 p-2 text-center hover:bg-gray-200"
          >
            <span className="inline-flex size-8 items-center justify-center rounded-full bg-gray-600 p-px">
              <Image
                src={`https://ptcdn.info/mobile/icon_room/pt-forum-${room.name_en}.svg`}
                alt={room.name_en}
                width={30}
                height={30}
              />
            </span>
            <p className="break-words text-xs font-medium leading-none text-gray-500">
              {room.name}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
