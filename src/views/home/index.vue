<template>
  <div class="home-container">
    <!-- 这是首页 -->
    <div id="allmap"></div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'home',
  data() {
    return {

    }
  },
  componetns: {

  },
  created() {
    console.log('index');
  },
  mounted() {
    this.getMapData();
  },
  methods: {
    getMapData() {
      // setTimeout(() => {
        
      // }, timeout);
       // GL版命名空间为BMapGL
    // 按住鼠标右键，修改倾斜角和角度
      var map = new BMapGL.Map("allmap");    // 创建Map实例
      map.centerAndZoom(new BMapGL.Point(116.280190, 40.049191), 19);  // 初始化地图,设置中心点坐标和地图级别
      map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
      map.setHeading(64.5);
      map.setTilt(73);
    }
  }
}
</script>

<style scoped>
.home-container{
  width: 100%;
  height: 100%;
}
#allmap {
  width: 100%;
  height: 100%;
}
</style>
