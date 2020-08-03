<!--
 * @Description: 
 * @Autor: chc
 * @Date: 2020-08-03 16:01:39
 * @LastEditors: chc
 * @LastEditTime: 2020-08-03 16:01:47
--> 
<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
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
