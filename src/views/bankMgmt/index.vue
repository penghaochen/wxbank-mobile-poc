<template>
  <div>
    <van-field v-model="phone" label="手机号" placeholder="请输入手机号" clearable/>
    <div style="margin: 16px;">
      <van-button round block type="danger" @click="getPhone">
        获取验证码
      </van-button>
    </div>
    <van-cell-group>
      <van-cell :value="sms"/>
    </van-cell-group>
  </div>
</template>
<script>
import { getPhone } from '@/api/wxApi' // 获取短信验证码接口
import { Grid, GridItem } from 'vant'
import '@/utils/validate' // 验证规则

export default {
  name: 'BankMgmt',
  components: {
    [Grid.name]: Grid,
    [GridItem.name]: GridItem

  },
  data() {
    return {
      phone: '',
      sms: ''
    }
  },
  mounted() {

  },
  methods: {
    /**
     * 获取手机号短信验证码
     * @description 获取该手机号获得的短信验证码
     */
    getPhone() {
      if (!this.validate.isPhoneNo.pattern.test(this.phone)) {
        this.$toast('手机号验证不通过！')
        return
      }
      const data = {
        Mobilephone: this.phone
      }
      const that = this
      getPhone(data).then(res => {
        that.sms = res.data.Content
        // alert(JSON.stringify(res))
      }).catch(error => {
        alert(error)
      })
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
