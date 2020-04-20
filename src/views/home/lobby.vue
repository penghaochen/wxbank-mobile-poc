<template>
  <div>
    <!-- 菜单 -->
    <van-grid>
      <van-grid-item icon="photo-o" text="绑卡" @click="gotoMenu('bindCard')"/>
      <van-grid-item icon="photo-o" text="我的账户" @click="gotoMenu('account')"/>
      <van-grid-item icon="photo-o" text="获取短信" @click="gotoMenu('bankMgmt')"/>
      <van-grid-item icon="photo-o" text="生成二维码" @click="gotoMenu('scanCode')"/>
      <van-grid-item icon="photo-o" text="更多功能" @click="gotoMenu()"/>
    </van-grid>
  </div>
</template>
<script>
import { getauthorize } from '@/api/wxapi' // 授权接口
import { GetUrlParams } from '@/utils/common' // 获取url后的参数方法

import { Grid, GridItem } from 'vant'
export default {
  name: 'Lobby',
  components: {
    [Grid.name]: Grid,
    [GridItem.name]: GridItem

  },
  data() {
    return {
      aaa: '1'
    }
  },
  mounted() {
    debugger
    // 获取url中的code
    const code = GetUrlParams('code')
    this.$toast('code:' + code)
    if (!code) return
    const data = {
      code: code
    }
    // 发送授权接口
    getauthorize(data).then(res => {
      // openid存浏览器缓存
      sessionStorage.setItem('openId', res.openId)
      alert(JSON.stringify(res))
    }).catch(error => {
      alert(error)
    })
  },
  methods: {
    /**
     * 菜单跳转事件
     * @param id 菜单对应的路由名称
     * @description 点击某一项菜单跳转事件
     */
    gotoMenu(id) {
      if (!id) {
        this.$toast('该功能正在开发中...')
        return
      }
      this.$router.push({
        name: id
      })
    }
  },
  /**
     * 离开此路由时触发 钩子函数
     * @param to 跳转路由的属性
     * @param from 当前路由的属性
     * @param next 钩子函数
     * @description 修改页面的meta值，false时再次进入页面会重新请求数据。
     */
  beforeRouteLeave(to, from, next) {
    to.meta.keepAlive = false
    next()
  }
}
</script>
<style lang="scss" scoped>

</style>
