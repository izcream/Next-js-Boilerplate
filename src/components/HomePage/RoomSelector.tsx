'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

import { type Room } from '@/types/pantip-content';

export function RoomSelector({ rooms }: { rooms: Room[] }) {
  const [emblaRef] = useEmblaCarousel({ dragFree: true, axis: 'x' });
  return (
    <div ref={emblaRef} className="relative my-5 overflow-hidden">
      <div className="grid grid-flow-col justify-start gap-3">
        {rooms?.map((room) => (
          <div
            key={room.id}
            className="group block min-w-14 cursor-pointer text-center md:min-w-16"
          >
            <div className="inline-block size-10 rounded-full bg-gray-700 p-1 transition-colors group-hover:bg-pink-600">
              <Image
                width={36}
                height={36}
                src={`https://ptcdn.info/mobile/icon_room/pt-forum-${room.name_en}.svg`}
                alt={room.name}
              />
            </div>
            <div className="py-1 text-xs font-medium text-gray-500">
              {room.name}
            </div>
            <div className="mx-auto h-[2px] w-4 rounded-sm bg-pink-600 opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
        ))}
      </div>
    </div>
  );
}
