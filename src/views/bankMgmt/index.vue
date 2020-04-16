<template>
  <div>
    <van-field v-model="phone" label="手机号" />
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
import { getPhone } from '@/api/wxapi'

import { Grid, GridItem } from 'vant'
export default {
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
    getPhone() {
      const data = {
        Mobilephone: this.phone
      }
      const that = this
      getPhone(data).then(res => {
        that.sms = res.Content
        alert(JSON.stringify(res))
      }).catch(error => {
        alert(error)
      })
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
