<template>
  <div>
    <h1>我的工作台</h1>
    <el-button type="primary" @click="test2">主要按钮</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  computed: {
    message() {
      return this.$store.getters['app/getMessage']
    },
  },
  methods: {
    test2() {
      console.log('2-拿到了', this.message)
    },
  },
}
</script>
