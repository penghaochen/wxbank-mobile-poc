<template>
  <div>
    <!-- 菜单 -->
    <van-grid>
      <van-grid-item icon="photo-o" text="绑卡" @click="gotoMenu('BindCard')"/>
      <van-grid-item icon="photo-o" text="我的账户" @click="gotoMenu('Account')"/>
      <!-- <van-grid-item icon="photo-o" text="获取短信" @click="gotoMenu('SmsCode')"/>
      <van-grid-item icon="photo-o" text="生成二维码" @click="gotoMenu('ScanCode')"/>
      <van-grid-item icon="photo-o" text="更多功能" @click="gotoMenu()"/> -->
    </van-grid>
  </div>
</template>
<script>
import { getauthorize } from '@/api/wxpocApi' // 授权接口
import { getAllPattern } from '@/api/backMgmtApi'// 接口
import { GetUrlParams } from '@/utils/common' // 获取url后的参数方法
import { Grid, GridItem, Dialog } from 'vant'
import Vue from 'vue'
export default {
  name: 'Lobby1',
  components: {
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [Dialog.name]: Dialog
  },
  data() {
    return {
      flag: true
    }
  },
  activated() {

  },
  mounted() {
    this.init()
  },
  methods: {
    add(name, value) {
      const obj = { }
      obj[name] = value// 返回参数
      console.log(JSON.stringify(obj))
      Object.assign(Vue.prototype.validate, obj)
      return
    },
    init() {
      // 获取url中的code
      const code = GetUrlParams('code')
      const codeEnc = code
      // alert('签名的code:' + codeEnc)

      if (!codeEnc) return
      const data = {
        code: codeEnc
      }

      // 发送授权接口
      getauthorize(data).then(res => {
      // 返回的openid解密
        const openid = res.data.openId
        // openid存浏览器缓存
        sessionStorage.setItem('openId', openid)
        // 获取后台的所有验证规则
        getAllPattern('1').then(res => {
          console.log(res)
          this.flag = true
          if (res.code === 0) {
            res.data.forEach(v => {
              if (v.validationFlag === '1') {
                var pattern = new RegExp(v.validationRule)
                var message = v.validationPrompt
                var patternRes = [{ pattern, message }]
                this.add(v.name, patternRes)
              } else {
                this.add(v.name, [])
              }
            })
            console.log(Vue.prototype.validate)
          } else {
            this.$toast(res.message)
          }
        }).catch(() => {
          debugger
          this.flag = false
        })
      })
    },
    /**
     * 菜单跳转事件
     * @param id 菜单对应的路由名称
     * @description 点击某一项菜单跳转事件
     */
    gotoMenu(id) {
      if (!this.flag) {
        this.$toast('该用户禁止访问！')
        return
      }
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
