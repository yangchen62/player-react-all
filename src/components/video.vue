<template>
  <div style="position: relative">
    <LivePlayer v-bind="$attrs" :videoUrl="value[index].url"></LivePlayer>
    <div class="video-close" v-show="value[index].url" @click="closeVideo()">关闭</div>
    <div class="video-close" v-show="!value[index].url" @click="selectChannel()">选择通道</div>
  </div>
</template>

<script>
import LivePlayer from '@liveqing/liveplayer'
export default {
  model: {
    props: 'value',
    event: 'change'
  },
  props: ['value', 'index', 'selectVideo'],
  components: {
    LivePlayer
  },
  methods: {
    closeVideo () {
      this.$set(this.value, this.index, {url: ''})
    },
    selectChannel () {
      this.selectVideo(this.selectChannelCb)
    },
    selectChannelCb (option) {
      this.$set(this.value, this.index, option)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.video-close {
  position: absolute;
  top: 5px;
  right: 5px;
  color: white;
  font-size: 12px;
  background-color: fade(gray, 50%);
  padding: 2px 5px;
  cursor: pointer;
  border-radius: 2px;
  max-width: 120px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
