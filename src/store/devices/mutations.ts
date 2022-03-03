import { MutationTree } from 'vuex';
import { MutationTypes } from './devices.types';
import { State, Device } from './state';

export type Mutations<S = State> = {
  [MutationTypes.SET_DEVICES](state: S, payload: Device[]): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_DEVICES](state, payload: Device[]) {
    state.items = payload;
  },
};
