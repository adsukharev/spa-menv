import Vue from 'vue';
import App from './App.vue';

import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'bootstrap-vue/es/components/button'
import Layout from 'bootstrap-vue/es/components/layout'
import Form from 'bootstrap-vue/es/components/form'
import FormInput from 'bootstrap-vue/es/components/form-input'

Vue.use(Layout);
Vue.use(Button);
Vue.use(Form);
Vue.use(FormInput);

new Vue({
    el: '#app',
    render: h => h(App)
});