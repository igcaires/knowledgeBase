import Vue from 'vue'
import 'font-awesome/css/font-awesome.css';

import App from './App'

import './config/bootstrap';

import './config/msgs';

import store from './config/store';
import router from './config/router';

Vue.config.productionTip = false;

//TEMPORARIO
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Iklnb3IgUGVkcm8gQ2FpcmVzIiwiZW1haWwiOiJpcGVkcm9jYWlyZXNAZ21haWwuY29tIiwiYWRtaW4iOnRydWUsImlhdCI6MTU3MjAwNTMwMywiZXhwIjoxNTcyMjY0NTAzfQ.XxLrr35knk_3wikFsS8TZJWm1xSuWYrw89qKRObUqPM';

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
