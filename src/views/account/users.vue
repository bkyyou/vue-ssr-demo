<template>
  <div class="user-container">
    <!-- 来自 http://localhost:4000/api/users {{user}} -->
    <div class="search-box">
      <div class="list">
        <el-input v-model="searchTxt"></el-input>
      </div>
      <div class="search-btn">
        <el-button>🔍</el-button>
      </div>
      <div class="list">
        <el-select v-model="value" placeholder="请选择">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </div>
    </div>

    <div class="table-box">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'users',
  data() {
    return {
      user: '',
      searchTxt: '',
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  componetns: {

  },
  mounted() {

  },
  methods: {
    getData() {
      axios.get('http://localhost:4000/api/users').then(res => {
        console.log(res);
        this.user = res.data;
      })
    }
  }
}
</script>

<style>
.search-box{
  display: flex;
}
.search-box > div{
  margin-right: 10px;
}
.list{
  width: 200px;
}
</style>
