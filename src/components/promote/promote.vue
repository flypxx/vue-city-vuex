<template>
  <div class="promote">
    <div class="page-message">
      <h1>Welcome {{{{pageInfo.name}}}}</h1>
      <p class="message-item">your phone {{pageInfo.phone}}</p>
      <p class="message-item">your deviceId {{pageInfo.deviceId}}</p>
      <button type="button" @click.stop.prevent="logoutAccount()"></button>
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
          router.push('login')
        }
      },
      logoutAccount() {
        store.commit('logout')
        if (!store.state.pageInfo.login) {
          router.push('promote')
        }
      }
    },
    store
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
