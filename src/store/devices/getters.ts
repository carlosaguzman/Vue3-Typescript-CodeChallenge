import { GetterTree } from 'vuex';
import { State, Device } from './state';

export type Getters = {
  devices(state: State): Device[];
};

export const getters: GetterTree<State, Device[]> & Getters = {
  devices: (state) => {
    return state?.items ?? [];
  },
};
