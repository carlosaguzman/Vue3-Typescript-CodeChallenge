import { ActionTree, Commit } from 'vuex';
import axios from 'axios';
import { State, Device } from './state';
import { ActionTypes, MutationTypes } from './devices.types';

export interface Actions {
  [ActionTypes.GET_DEVICES]({ commit }: { commit: Commit }, payload: Device[]): Promise<Device[]>;
}

export const actions: ActionTree<State, Device[]> & Actions = {
  [ActionTypes.GET_DEVICES]({ commit }) {
    return new Promise((resolve) => {
      axios.get('https://other.stakeordie.com/devices/reads').then((res) => {
        commit(MutationTypes.SET_DEVICES, res.data);
        resolve(res.data);
      });
    });
  },
};
