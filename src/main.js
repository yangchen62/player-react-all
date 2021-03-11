// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Radio from 'ant-design-vue/lib/radio'
import 'ant-design-vue/dist/antd.css'
// import {renderVideoList} from '../dist/static/js/app.30ef4f142c1fb269c64f'

Vue.use(Radio)
Vue.config.productionTip = false
export function renderVideoList (id, props) {
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    data: {props},
    components: { App },
    template: '<App v-bind="props"/>'
  })
}
renderVideoList('app', {
  btnPosition: 'right',
  selectVideo: function (cb) {
    // eslint-disable-next-line standard/no-callback-literal
    if (typeof cb === 'function') { cb({url: 'http://117.168.8.45:18080/rtp/34020000001320000149/hls.m3u8'}) }
  }
})
