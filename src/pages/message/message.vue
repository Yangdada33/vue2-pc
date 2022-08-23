<template>
  <div>
    <h1>消息中心</h1>
    <el-button @click="btn">点击查询(mock)</el-button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {}
  },
  mounted() {},
  methods: {
    btn() {
      console.log(11)
      axios.get('/api/user').then(res => {
        console.log(res)
      })
    },
  },
}
</script>
