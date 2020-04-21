<template>
  <div>
    <van-field v-model="phone" label="手机号" placeholder="请输入手机号" clearable/>
    <div style="margin: 16px;">
      <van-button round block type="danger" @click="getCode">
        获取回单二维码
      </van-button>
    </div>
    <van-cell-group>
      <img :src="'data:image/png;base64,'+imgsrc" style="width:80%;margin-left: 10%;">
    </van-cell-group>
  </div>
</template>
<script>
import { getScanCode } from '@/api/wxApi' // 获取回单二维码图片接口
import '@/utils/validate' // 验证规则
import { Grid, GridItem } from 'vant'
export default {
  name: 'ScanCode',
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
    getCode() {
      if (!this.validate.isPhoneNo.pattern.test(this.phone)) {
        this.$toast('手机号验证不通过！')
        return
      }
      const data = {
        Mobilephone: this.phone
      }
      const that = this
      getScanCode(data).then(res => {
        that.imgsrc = res.data.imgBase64
      }).catch(error => {
        // alert(JSON.stringify(error))
        console.log(error)
      })
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
