<template>
  <div>
    <!-- 菜单 -->
    <van-grid>
      <van-grid-item icon="photo-o" text="绑卡" @click="gotoMenu('BindCard')"/>
      <van-grid-item icon="photo-o" text="我的账户" @click="gotoMenu('Account')"/>
      <van-grid-item icon="photo-o" text="获取短信" @click="gotoMenu('SmsCode')"/>
      <van-grid-item icon="photo-o" text="生成二维码" @click="gotoMenu('ScanCode')"/>
      <van-grid-item icon="photo-o" text="更多功能" @click="gotoMenu()"/>
    </van-grid>
  </div>
</template>
<script>
import { getauthorize } from '@/api/wxpocApi' // 授权接口
import { GetUrlParams } from '@/utils/common' // 获取url后的参数方法
import { encrypt, decrypt } from '@/utils/aes' // aes加解密方法
import { Grid, GridItem, Dialog } from 'vant'

export default {
  name: 'Lobby1',
  components: {
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [Dialog.name]: Dialog
  },
  data() {
    return {
    }
  },
  activated() {

  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      // 获取url中的code
      const code = GetUrlParams('code')
      const codeEnc = encrypt(code)
      // alert('签名的铭文code:' + code)
      alert('签名的code:' + codeEnc)

      if (!codeEnc) return
      const data = {
        code: codeEnc
      }

      // 发送授权接口
      getauthorize(data).then(res => {
      // 返回的openid解密
        alert(JSON.stringify(res))
        const openid = decrypt(res.data.openId)
        // openid存浏览器缓存
        sessionStorage.setItem('openId', openid)
      }).catch(error => {
        alert(error)
      })
    },
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
  }
}
</script>
<style lang="scss" scoped>

</style>
