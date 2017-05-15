<template>
  <div class="login">
    <div class="page-container">
      <h1>user login</h1>
      <div class="user-message">
        <input type="text" placeholder="enter your name">
      </div>
      <div class="user-message">
        <input type="text" placeholder="enter your deviceId">
      </div>
    </div>
  </div>
</template>

<script type="ecmascript-6">
  import store from 'vuexpath/store'
  import { mapState, mapActions, mapMutations } from 'vuex'
  export default {
    data() {
      return {
      }
    },
    store
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
