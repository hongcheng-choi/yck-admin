<!--
 * @Description: 
 * @Autor: chc
 * @Date: 2020-08-03 17:30:55
 * @LastEditors: chc
 * @LastEditTime: 2020-08-03 17:33:10
--> 
<template>
  <div class="brand">
    <div class="dashboard-text">品牌</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Brand',
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
