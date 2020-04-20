<template>
  <div id="app">
    <!-- 标题 -->
    <navbar :title="$route.meta.title||'微信银行'" :right-text="$store.state.app.rightText" :isdisableback="$route.meta.isdisableback=='true'" :fixed="true"/>
    <!-- 内容 -->
    <div class="content">
      <router-view name="navBar"/>
      <!-- 缓存 -->
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive" class="view-router"/>
      </keep-alive>
      <!-- 不缓存 -->
      <router-view v-if="!$route.meta.keepAlive" class="view-router"/>
      <router-view name="tabbar"/>
    </div>
    <!-- 遮罩 -->
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
import navbar from '@/components/NavBar/' // 标题组件
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
<style lang="scss" scoped>
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

