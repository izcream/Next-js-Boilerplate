'use client';

import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

import type { HightLightPost } from '@/types/pantip-content';

export function HightLightTopic({
  hightlights,
}: {
  hightlights: HightLightPost[];
}) {
  const [embraRef] = useEmblaCarousel({ axis: 'x' }, [
    Autoplay({ stopOnInteraction: false }),
  ]);
  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold">Hightlight</h3>
      <div ref={embraRef} className="relative overflow-hidden">
        <div className="flex gap-4">
          {hightlights.map((hightlight) => (
            <a
              key={hightlight.name}
              href={hightlight.post_url}
              target="_blank"
              className="flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_22%]"
            >
              <Image
                src={hightlight.image_url?.at(hightlight.image_url.length - 1)!}
                alt={hightlight.name}
                width={400}
                height={320}
                className="aspect-video rounded-lg object-cover object-top"
              />
              <h3 className="font-semibold">{hightlight.name}</h3>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
