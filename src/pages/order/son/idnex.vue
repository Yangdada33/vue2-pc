<template>
  <div>
    <el-button @click="btn">点击</el-button>
    <div>{{ num }}</div>
    <div>{{ msg }}</div>
    <div v-for="item in arr" :key="item.index">{{ item }}</div>
    <div>{{ obj.name }}</div>
  </div>
</template>

<script>
export default {
  name: 'Son',
  // props:[num],
  props: {
    num: {
      type: Number,
      default: '',
    },
    msg: {
      type: String,
      default: '',
    },
    arr: {
      type: Array,
      default: [],
    },
    obj: {
      type: Object,
      default: {},
    },
    //方式三
    add: {
      type: Function,
      default: null,
    },
  },
  methods: {
    btn() {
      console.log(1)
      //方式一  子调父方法
      // this.$parent.add('通过')

      //方式二
      // this.$emit('add', '通过')

      //方式三
      if (this.add) {
        this.add('通过')
      }
    },
  },
}
</script>
