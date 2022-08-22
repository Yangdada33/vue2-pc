<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-menu-item index="2">我的工作台</el-menu-item>
      <!-- <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu> -->
      <el-menu-item index="3">消息中心</el-menu-item>
      <el-menu-item index="4">订单管理</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data() {
    return {
      activeIndex: '1',
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      switch (key) {
        case '1':
          this.$router.push('/home')
          break
        case '2':
          this.$router.push('/workbench')
          break
        case '3':
          this.$router.push('/message')
          break
        case '4':
          this.$router.push('/order')
          break

        default:
          break
      }
    },
  },
}
</script>
