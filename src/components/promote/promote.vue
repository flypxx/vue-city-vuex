<template>
  <div class="promote">
    <div class="page-message">
      <h1>page message</h1>
      <p class="message-item">{{pageInfo.name}}</p>
      <p class="message-item">{{pageInfo.phone}}</p>
      <p class="message-item">{{pageInfo.deviceId}}</p>
      <p class="message-item">{{pageInfo.login ? 'yes' : 'no'}}</p>
    </div>
  </div>
</template>

<script type="ecmascript-6">
  import store from 'vuexpath/store'
  import { mapState, mapActions, mapMutations } from 'vuex'
  import router from 'routerpath/index'
  export default {
    created() {
      this.checkLogin()
    },
    computed: {
      ...mapState(["pageInfo"])
    },
    data() {
      return {
      }
    },
    methods: {
      checkLogin() {
        console.log(this.pageInfo)
        if (!this.pageInfo.login) {
          // router.push('login')
        }
      }
    },
    store
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
