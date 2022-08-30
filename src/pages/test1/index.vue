<template>
  <div>test1</div>
</template>
<script>
export default {
  computed: {
    msg() {
      return this.$store.getters['app/getMessage']
    },
  },
  mounted() {
    console.log('vuex', this.msg)
  },
}
</script>
