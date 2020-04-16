<template>
  <div>
    <van-cell-group class="cfm-box">
      <van-cell :value="paramsData.OutAccNo" title="转出账户" />
      <van-cell :value="paramsData.TransAmt" title="转账金额" />
      <van-cell :value="paramsData.InAccNo" title="收款人姓名" />
      <van-cell :value="paramsData.InAccName" title="收款人账户" />
      <van-cell :value="paramsData.InBank" title="收款行" />
      <van-cell title="转账用途" value="无" />
    </van-cell-group>
    <div class="cfm-button">
      <van-button round block type="danger" @click="transfer">
        转账
      </van-button>
    </div>
  </div>
</template>

<script>

import field from '@/components/field/'
import fieldGroup from '@/components/field-group/'

import { Form, Field, Popup, Picker } from 'vant'
export default {

  components: {
    [field.name]: field,
    [fieldGroup.name]: fieldGroup,
    [Field.name]: Field,
    [Form.name]: Form,
    [Picker.name]: Picker,
    [Popup.name]: Popup
  },
  data() {
    return {
      paramsData: {}

    }
  },
  activated() {
    this.paramsData = this.$route.params
  },
  mounted() {
    this.paramsData = this.$route.params
    console.log(this.paramsData)
  },
  methods: {
    transfer() {
      this.$router.replace({
        name: 'transferRes'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.cfm-box{
    margin-bottom: 15px;
}
.cfm-button{
    margin: 16px;
}
.van-cell__value{
    color:#333
}
</style>
