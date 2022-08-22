<template>
  <div>
    <h1>首页</h1>
    <el-button @click="test">默认按钮</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    test() {
      console.log(1, '存')
      this.$store.commit('app/setmessage', 1)
    },
  },
}
</script>
