<template>
  <div>
    <h1>订单管理</h1>
    <!-- 方式一 -->
    <!-- <Son :msg="msg" :num="num" :arr="arr" :obj="obj" :add="add" /> -->
    <!-- 方式二 -->
    <!-- <Son :msg="msg" :num="num" :arr="arr" :obj="obj" @add="add" /> -->
    <!-- 方式三 -->
    <Son :msg="msg" :num="num" :arr="arr" :obj="obj" :add="add" />
  </div>
</template>
<script>
import Son from './son/idnex.vue'
export default {
  //组件内守卫
  beforeRouteEnter(to, from, next) {
    next()
  },
  components: {
    Son,
  },
  data() {
    return {
      msg: 'hellow body',
      num: 1234,
      arr: ['1', '2', '3', '45', '5'],
      obj: {
        name: '小赵',
        ega: '28',
      },
    }
  },
  methods: {
    add(value) {
      console.log('测试', value)
    },
  },
}
</script>
