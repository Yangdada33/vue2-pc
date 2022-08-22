<template>
  <div>
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-container>
        <!-- <el-aside width="200px">
          <Aside />
        </el-aside> -->
        <el-main>
          <Main />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Main from "./components/main";
// import Aside from "./components/aside";
import Header from "./components/header";

export default {
  name: "Layout",
  components: {
    Main,
    //  Aside,
    Header
  },
  data() {
    return {};
  }
};
</script>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
  height: 90vh;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.el-header {
  padding: 0;
}
</style>
