import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isMenuVisible: true,
    user: {
      name: 'Igor',
      email: 'ipedrocaires@gmail.com',
    },
  },
  mutations: {
    toogleMenu(state, isVisible) {
      if (isVisible === undefined) {
        state.isMenuVisible = !state.isMenuVisible;
      } else {
        state.isMenuVisible = isVisible;
      }

      // eslint-disable-next-line no-console
      console.log(`toogleMenu = ${state.isMenuVisible}`);
    }
  },
});
