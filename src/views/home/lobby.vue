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
import JSEncrypt from 'jsencrypt'// rsa加密
export default {
  name: 'Lobby',
  components: {
    [Grid.name]: Grid,
    [GridItem.name]: GridItem

  },
  data() {
    return {
    }
  },
  mounted() {
    // 获取url中的code
    const code = GetUrlParams('code')
    // rsa公钥
    const pubKey = `-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCIHShsTwbqF3k0r45nSH/8CSVPg+DWgwTAehHQxlqPBhnFD27mGz7fve/Unr5IrECDlQHQcl0kSi8n2U70woPfh5LC9BmdcI/+LhHwNfbBtR53zo/91EVsDPkghSggNpMhI3kWi1C0HVYs48rONajBl/E23BCY7ZBcs8JaX+9TgQIDAQAB-----END PUBLIC KEY-----`
    const encryptStr = new JSEncrypt()
    // 设置 加密公钥
    encryptStr.setPublicKey(pubKey)
    // 进行rsa加密
    const codeEnc = encryptStr.encrypt(code)
    this.$toast('code:' + codeEnc)
    if (!codeEnc) return
    const data = {
      code: code
    }
    // 发送授权接口
    getauthorize(data).then(res => {
      // openid存浏览器缓存
      sessionStorage.setItem('openId', res.data.openId)
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
  }

}
</script>
<style lang="scss" scoped>

</style>
