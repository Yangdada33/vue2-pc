<template>
  <div>
    <h1>首页</h1>
    <el-button @click="test">点击出现小猫</el-button>
    <div>
      <img :src="img" alt="" class="image" />
    </div>
    <div>简单使用插槽</div>
    <Button btnStyle="btn-success">
      <slot></slot>
    </Button>
  </div>
</template>
<script>
import * as _ from 'lodash'
// import { getTest } from '@/api/api'
import { Count } from '@/utils/count'
import Button from '../button/index.vue'

export default {
  components: {
    Button,
  },
  data() {
    return {
      arr: [1, 2, 3, 3, 3, 4, 5],
      arr1: [1, 2, 3, 4, 5],
      img: '',
    }
  },
  mounted() {
    let a = _.indexOf(this.arr, 3)
    // console.log(999, a)

    console.log('111', Count(this.arr))

    let b = this.arr1.slice(1, 2)
    console.log('b', b)
  },
  methods: {
    test() {
      this.$store.commit('app/setmessage', 1)
      this.getTest()
      //路由传参1
      // this.$router.push({
      //   name: 'Test1',
      //   params: {
      //     name: 'hellow',
      //   },
      // })

      //2
      // this.$router.push({
      //   name: 'Test1',
      //   query: {
      //     name: 'hellow',
      //   },
      // })

      // 3
      let id = '66666'
      this.$router.push({
        path: `/test2/${id}`,
      })
    },
    // getTest() {
    //   getTest({
    //     limit: '1',
    //   }).then(res => {
    //     this.img = res[0].url
    //   })
    // },
    async getTest() {
      const res = await this.$http('app/getTest', { limit: '1' })

      console.log('res', res)

      this.img = res[0].url
    },
  },
}
</script>
<style lang="less" scoped>
.image {
  width: 1200px;
}
</style>
