import { create } from 'zustand';

import type { PopularTopic } from '@/types/pantip-content';

export interface TopicState {
  topics: PopularTopic[];
}
export interface TopicAction {
  setTopics: (topics: TopicState['topics']) => void;
}
export type TopicStore = TopicState & TopicAction;

export const useTopicStore = create<TopicStore>((set) => ({
  topics: [],
  setTopics: (topics) => set((s) => ({ topics: [...s.topics, ...topics] })),
}));
