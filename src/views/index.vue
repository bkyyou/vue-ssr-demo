<template>
  <div class="index-container">
    <div class="header"></div>
    <div class="content">
      <div class="aside">
        <my-aside></my-aside>
      </div>
      <div class="wrapper">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import myAside from '@/components/common/aside.vue'

export default {
  name: 'index',
  data() {
    return {

    }
  },
  components: {
    myAside
  },
  //  beforeRouterEnter(to, form, next) {
  //    next(vm => {
  //      console.log('to', to)
  //    })
  //  },
  mounted() {

  },
  methods: {

  }
}
</script>

<style>
.index-container{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.header{
  height: 100px;
  background-color: skyblue;
  width: 100%;
  /* flex-shrink: 1; */
}
.content{
  flex: 1;
  display: flex;
  width: 100%;
}
.aside{
  width: 200px;
  height: 100%;
  display: flex;
  flex-shrink: 0;
}
.wrapper{
  flex: 1;
  padding: 20px;
}
</style>
