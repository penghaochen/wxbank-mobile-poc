<template>
  <div id="app">
    <navbar :title="$route.meta.title||'微信银行'" :right-text="$store.state.app.rightText" :isdisableback="$route.meta.isdisableback=='true'" :fixed="true"/>

    <div class="content">
      <router-view name="navBar"/>
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive" class="view-router"/>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive" class="view-router"/>
      <router-view name="tabbar"/>
    </div>
    <van-overlay :show="$store.state.app.show" @click="$store.state.app.show = false">
      <div class="wrapper" @click.stop>
        <van-loading />
        <div class="block" >
          加载中...请稍候</div>
      </div>
    </van-overlay>
  </div>
</template>
<script>
import navbar from '@/components/NavBar/'
import { Overlay, Loading } from 'vant'
export default {
  components: {
    navbar: navbar,
    [Loading.name]: Loading,
    [Overlay.name]: Overlay
  },
  data() {
    return {
      title: '登录'
    }
  },
  mounted() {
  }
}
</script>
<style lang="scss">
.content{
  margin-top: 50px;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-direction: column;
}

.block {
  margin: 10px 0;
  color: #111;
}
</style>
<style lang="scss" src="./assets/scss/global.scss" />
