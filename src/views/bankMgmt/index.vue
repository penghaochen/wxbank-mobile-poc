<template>
  <div>
    <van-form @submit="onSubmit" @failed="onFailed">
      <van-field
        v-model="phone"
        :rules="validate.isPhoneNo"
        type="tel"
        name="手机号码"
        label="手机号码"
        placeholder="请输入手机号码"
        clearable
        required
      />
      <div style="margin: 16px;">
        <van-button round block type="danger" native-type="submit">
          获取验证码
        </van-button>
      </div>
      <van-cell-group>
        <van-cell :value="sms"/>
      </van-cell-group>
    </van-form>
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
    onSubmit() {
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
    },
    /**
     * 表单验证错误处理事件
     * @description 表单验证不通过事件
     */
    onFailed() {
      // 表单验证
      var flag1 = this.validate.ruleCheck(this.phone, this.validate.isPhoneNo)
      if (!flag1) {
        return
      }
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
