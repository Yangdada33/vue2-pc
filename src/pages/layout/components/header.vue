<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <template v-for="item in list">
        <el-menu-item v-if="!item.children" :key="item.index" :index="item.index">
          <router-link :to="item.path">{{ item.name }}</router-link>
        </el-menu-item>
        <el-submenu v-else :key="item.index" :index="item.index">
          <template slot="title">{{ item.name }}</template>
          <el-menu-item :index="item.index" v-for="(item, index) in item.children" :key="index">
            <router-link :to="item.path">{{ item.name }}</router-link>
          </el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data() {
    return {
      activeIndex: '1',
      list: [
        {
          index: '1',
          name: '首页',
          path: '/home',
        },
        {
          index: '2',
          name: '工作台',
          path: '/workbench',
        },
        {
          index: '3',
          name: '消息中心',
          path: '/message',
        },
        {
          index: '4',
          name: '订单管理',
          path: '/order',
        },
        {
          index: '5',
          name: '功能',
          children: [
            {
              index: '5-1',
              name: '功能1',
              path: '/test1',
            },
            {
              index: '5-2',
              name: '功能2',
              path: '/test2',
            },
            {
              index: '5-3',
              name: '功能3',
              path: '/test3',
            },
          ],
        },
      ],
    }
  },
  created() {
    if (sessionStorage.getItem('currentIndex')) {
      this.activeIndex = sessionStorage.getItem('currentIndex')
    }
  },
  methods: {
    handleSelect(key) {
      sessionStorage.setItem('currentIndex', key)
    },
  },
}
</script>
