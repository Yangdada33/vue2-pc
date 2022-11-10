<template>
  <div>
    <h1>我是组件---插槽应用</h1>
    <button :class="['my-btn', btnStyle]">插槽</button>
  </div>
</template>
<script>
export default {
  props: {
    btnStyle: String,
  },
}
</script>
<style lang="less" scoped>
.my-btn {
  height: 34px;
  padding: 0 15px;
  border-radius: 5px;
  border: none;
  outline: none;
  background-color: #000;
  color: #fff;
  cursor: pointer;
}

.btn-primary {
  color: #fff;
  background-color: #337ab7;
}

.btn-success {
  color: #fff;
  background-color: #5cb85c;
}

.btn-warning {
  color: #fff;
  background-color: #f0ad4e;
}
</style>
