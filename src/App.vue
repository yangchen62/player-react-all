<template>
  <div id="app">
    <div :class="btnPosition || 'center'">
      <a-radio-group class="radio-group" v-model="videoNum">
        <a-radio-button :value="1">
          单屏
        </a-radio-button>
        <a-radio-button :value="4">
          四分屏
        </a-radio-button>
        <a-radio-button :value="9">
          九分屏
        </a-radio-button>
        <a-radio-button :value="16">
          十六分屏
        </a-radio-button>
      </a-radio-group>
    </div>
    <div :class="`grid grid-${videoNum}`">
        <video-com v-for="(item,index) in new Array(videoNum)" :key="index" v-bind="$attrs" v-model="videoList" :index="index"/>
    </div>
  </div>
</template>

<script>
import VideoCom from './components/video'

export default {
  name: 'App',
  props: ['btnPosition'],
  data () {
    return {
      videoNum: 1,
      videoList: [
        {
          url: ''
        }, {
          url: ''
        }, {
          url: ''
        }, {
          url: ''
        }, {
          url: ''
        }, {
          url: ''
        }, {
          url: ''
        }, {
          url: ''
        }, {
          url: ''
        }, {
          url: ''
        }, {
          url: ''
        }, {
          url: ''
        }, {
          url: ''
        }, {
          url: ''
        }, {
          url: ''
        }, {
          url: ''
        }
      ]
    }
  },
  components: {
    VideoCom
  },
  methods: {
    closeVideo (index) {
      console.log(this.videoList)
    }
  }
}
</script>

<style lang="css">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding: 0 100px;
  }
  .radio-group{
    padding: 10px 0;
  }
  .grid{
    display: grid;
    grid-gap: 10px 20px;
  }
  .grid-4{
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
  .grid-9{
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
  .grid-16{
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }
  .center{
    text-align: center;
  }
  .left{
    text-align: left;
  }
  .right{
    text-align: right;
  }
</style>
