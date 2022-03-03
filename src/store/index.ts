import { createLogger, createStore } from 'vuex';

import devices from './devices';

export default createStore({
  strict: true,
  plugins: process.env.NODE_ENV === 'development' ? [createLogger()] : [],
  modules: {
    devices,
  },
});
