<template>
  <div>
    <h1>消息中心</h1>
    <el-button @click="btn">点击查询(mock)</el-button>
    <div class="radio-box" v-for="(item, index) in radios" :key="item.id">
      <label class="radio">
        <input v-model="sex" :value="item.value" class="input-radio" :checked="item.isChecked" @click="change(index)" type="radio" />
        <i></i>
        <span class="input-box">
          {{ item.label }}
        </span>
      </label>
    </div>

    <!-- <div class="address-list-item">
      <label class="radio" for="diyi" :class="label">
        <input type="radio" name="address" value="1" id="diyi" style="float:left" />
        <i></i>
        <div>
          <div class="address-detail">北京市海淀区楼北京市海淀区楼</div>
        </div>
      </label>
    </div> -->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      sex: '男',
      radios: [
        {
          label: '男',
          value: '男',
          isChecked: false,
        },
        {
          label: '女',
          value: '女',
          isChecked: false,
        },
      ],
    }
  },
  mounted() {},
  methods: {
    btn() {
      console.log(11)
      axios.get('/api/user').then(res => {
        console.log(res)
      })
    },
    change(index) {
      // 先取消所有选中项
      this.radios.forEach(item => {
        item.isChecked = false
      })
      //再设置当前点击项选中
      this.sex = this.radios[index].value
      // 设置值，以供传递
      this.radios[index].isChecked = true
    },
  },
}
</script>

<style lang="less" scope>
.input-box {
  width: 200px;
  height: 100%;
  border: 1px solid #ccc;
  background: yellowgreen;
  display: inline-block;
}

.radio {
  position: relative;
  display: inline-block;
  font-weight: 400;
  padding-left: 25px;
  text-align: left;
  width: 100%;
  display: flex;
}

.radio input {
  position: absolute;
  left: -9999px;
}

.radio i {
  display: block;
  position: absolute;
  top: 2px;
  left: 2px;
  width: 13px;
  height: 13px;
  outline: 0;
  border: 1px solid rgb(133, 133, 133);
  background: transparent;
  border-radius: 50%;
  transition: border-color 0.3s;
  -webkit-transition: border-color 0.3s;
}

.radio input + i:after {
  position: absolute;
  content: '';
  top: 2px;
  left: 2px;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background-color: #ee2e2e;
  opacity: 0;
  transition: opacity 0.1s;
  -webkit-transition: opacity 0.1s;
}

.radio input:checked + i:after {
  opacity: 1;
}
</style>
