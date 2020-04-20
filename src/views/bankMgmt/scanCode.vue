<template>
  <div>
    <van-field v-model="phone" label="手机号" />
    <div style="margin: 16px;">
      <van-button round block type="danger" @click="getPhone">
        获取回单二维码
      </van-button>
    </div>
    <van-cell-group>
      <img :src="'data:image/png;base64,'+imgsrc" style="width:80%;margin-left: 10%;">
    </van-cell-group>
  </div>
</template>
<script>
import { getScanCode } from '@/api/wxapi'
import '@/utils/validate'
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
    getPhone() {
      if (!this.validate.isPhoneNo.pattern.test(this.phone)) {
        this.$toast('手机号验证不通过！')
        return
      }
      const data = {
        Mobilephone: this.phone
      }
      const that = this
      getScanCode(data).then(res => {
        debugger
        that.imgsrc = res.data.imgBase64
      }).catch(error => {
        alert(error)
      })
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
