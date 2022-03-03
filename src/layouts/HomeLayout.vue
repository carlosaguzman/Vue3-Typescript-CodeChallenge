<template>
  <div class="bowl flex">
    <!-- Left Panel -->
    <div class="left-panel text-left">
      <p class="text-grey-100 font-normal font-roboto py-4">General</p>
      <div v-for="menu in menus" :key="menu.index">
        <router-link :to="menu.link" class="">
          <div :class="{ activebg: isActive(menu.link) }">
            <p class="text-grey-300 font-bold font-roboto p-2" :class="{ activetext: isActive(menu.link) }">
              {{ menu.title }}
            </p>
          </div>
        </router-link>
      </div>
    </div>
    <!-- Content Panel -->
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  data() {
    return {
      menus: [
        { index: 0, title: 'Home', link: '/' },
        { index: 1, title: 'Devices', link: '/devices' },
      ],
    };
  },
  methods: {
    isActive(route: string) {
      return this.$route.path === route;
    },
  },
});
</script>
<style>
.activebg {
  background: #3370d7;
}
.activetext {
  color: #fff;
}
</style>
