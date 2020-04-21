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
          获取回单二维码
        </van-button>
      </div>
      <van-cell-group>
        <img :src="'data:image/png;base64,'+imgsrc" style="width:80%;margin-left: 10%;">
      </van-cell-group>
    </van-form>
  </div>
</template>
<script>
import { getScanCode } from '@/api/wxapi' // 获取回单二维码图片接口
import '@/utils/validate' // 验证规则
import { Grid, GridItem } from 'vant'
export default {
  components: {
    [Grid.name]: Grid,
    [GridItem.name]: GridItem

  },
  data() {
    return {
      phone: '',
      imgsrc: ''
    }
  },
  mounted() {

  },
  methods: {
    /**
     * 获取回单二维码
     * @description 获取回单二维码
     */
    onSubmit() {
      const data = {
        Mobilephone: this.phone
      }
      const that = this
      getScanCode(data).then(res => {
        that.imgsrc = res.data.imgBase64
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
