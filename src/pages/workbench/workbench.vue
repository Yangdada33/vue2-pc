<template>
  <div>
    <h1>我的工作台</h1>
    <el-button type="primary" @click="test2">拿到vuex传的值</el-button>
    <div>{{ msg }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: '',
    }
  },
  computed: {
    message() {
      return this.$store.getters['app/getMessage']
    },
  },
  methods: {
    test2() {
      console.log('2-拿到了', this.message)
      this.msg = this.message
    },
  },
}
</script>
