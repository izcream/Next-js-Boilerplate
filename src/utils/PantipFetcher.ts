import {
  type HightLightPost,
  type PopularTopicResponse,
  type Room,
} from '@/types/pantip-content';

export async function getRoomList() {
  const res = await fetch(
    'https://pantip.com/api/forum-service/home/get_room_recommend?tracking_code=hello_pantip_xd',
    {
      headers: {
        Ptauthorize: 'Basic dGVzdGVyOnRlc3Rlcg==',
      },
    },
  );
  const { data: rooms } = (await res.json()) as { data: Room[] };
  return rooms;
}

export async function getPopularTopic(
  nextId: number,
  rankingTime: number,
  limit = 2,
) {
  const res = await fetch(
    'https://pantip.com/api/forum-service/home/get_suggest_topic_popular',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Ptauthorize: 'Basic dGVzdGVyOnRlc3Rlcg==',
      },
      body: JSON.stringify({
        limit,
        type: 'room',
        next_id: nextId,
        ranking_time: rankingTime,
      }),
    },
  );
  return (await res.json()) as PopularTopicResponse;
}

export async function getHightlightTopic() {
  const res = await fetch(
    'https://pantip.com/api/forum-service/home/get_highlight',
    {
      headers: {
        Ptauthorize: 'Basic dGVzdGVyOnRlc3Rlcg==',
      },
    },
  );
  const { data: hightlights } = (await res.json()) as {
    data: HightLightPost[];
  };
  return hightlights;
}
