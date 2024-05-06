export interface Room {
  id: number;
  name: string;
  name_en: string;
  slug: string;
}

export interface HightLightPost {
  name: string;
  post_url: string;
  image_url: string[];
}

export interface PopularTopicResponse {
  data: PopularTopic[];
  next_id: number;
  has_next: boolean;
  ranking_time: number;
}

export interface PopularTopic {
  room_id: number;
  room_name_th: string;
  room_name_en: string;
  type: string;
  topics: Topic[];
}

export interface Topic {
  topic_id: number;
  topic_type: number;
  title: string;
  thumbnail_url: null | string;
  views_count: number;
  comments_count: number;
  votes_count: number;
  author: Author;
  created_time: string;
  tags: Tag[];
  category: string;
}

export interface Author {
  id: number;
  name: string;
  avatar: Avatar;
  slug: string;
}

export interface Avatar {
  large: string;
  medium: string;
  small: string;
  original?: string;
}

export interface Tag {
  name: string;
  slug: string;
}

export type TopicWithRoom = Topic & {
  room_name_en: string;
  room_name_th: string;
};
