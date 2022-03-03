<template>
  <div class="flex flex-col text-left p-4 flex-1">
    <h3 class="text-grey-100 font-bold font-inter text-2xl pb-4">Devices</h3>
    <button
      class="text-grey-100 font-normal font-roboto border border-grey-300 py-2 px-4 mb-4 button rounded"
      @click="getDevices()"
    >
      Refresh
    </button>
    <div class="flex gap-4 flex-wrap">
      <div v-for="card in cards" :key="card.id" class="min-width">
        <div class="rounded overflow-hidden shadow-lg">
          <div class="p-4">
            <p class="text-grey-100 text-xl font-bold font-roboto">{{ card.deviceId }}</p>
          </div>
          <div class="p-4">
            <div class="flex flex-col">
              <div class="flex flex-row">
                <p class="text-grey-200 font-bold font-roboto mr-4">Status:</p>
                <p class="text-white bg-red-200 font-bold text-xs font-roboto px-3 py-1 rounded">NO READING</p>
              </div>
              <div class="flex flex-row mt-1">
                <p class="text-grey-200 font-bold font-roboto mr-4">Last read</p>
                <p class="text-grey-100 font-normal font-roboto">12 hour ago</p>
              </div>

              <p class="text-grey-200 font-normal font-roboto mt-1">
                {{ getDate(card.timestamp) }}
              </p>
              <div class="flex flex-row mt-2">
                <div class="flex flex-row mr-3">
                  <img class="mr-2" :src="require('@/assets/icon/temp.svg')" alt="home-logo" />
                  <p class="text-grey-100 font-bold font-roberto">{{ card.temperature + ' C' }}</p>
                </div>
                <div class="flex flex-row mr-3">
                  <img class="mr-2" :src="require('@/assets/icon/bubble.svg')" alt="home-logo" />
                  <p class="text-grey-100 font-bold font-roberto">{{ card.humidity + '%' }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ActionTypes } from '@/store/devices/devices.types';
import { createNamespacedHelpers } from 'vuex';
import { formatDate } from '@/Utils/utilities';
const { mapActions, mapGetters } = createNamespacedHelpers('devices');

export default defineComponent({
  name: 'Devices',

  created() {
    console.log('~~~~~~~~', this.getDevices());
  },
  computed: {
    ...mapGetters({
      cards: 'devices',
    }),
  },
  methods: {
    ...mapActions({ getDevices: ActionTypes.GET_DEVICES }),
    getDate(date: string) {
      return formatDate(date, 'MMM do, yyyy HH:mm:ss');
    },
  },
});
</script>

<style lang="scss" scoped>
.button {
  width: fit-content;
}

.min-width {
  min-width: 320px;
}
</style>
