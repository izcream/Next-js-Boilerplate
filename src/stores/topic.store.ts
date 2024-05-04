import { create } from 'zustand';

import type { PopularTopic } from '@/types/pantip-content';

export interface TopicState {
  nextId: number;
  topics: PopularTopic[];
}
export interface TopicAction {
  setNextId: (nextId: TopicState['nextId']) => void;
  setTopics: (topics: TopicState['topics']) => void;
}
export type TopicStore = TopicState & TopicAction;

export const useTopicStore = create<TopicStore>((set) => ({
  nextId: 3,
  topics: [],
  setNextId: (nextId) => set({ nextId }),
  setTopics: (topics) => set((s) => ({ topics: [...s.topics, ...topics] })),
}));
