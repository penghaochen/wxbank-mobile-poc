<template>
  <div>
    <van-form @submit="onSubmit">
      <van-field
        :value="transAccount"
        :rules="[{ required: true, message: '请选择卡号' }]"
        readonly
        clickable
        name="picker"
        label="转出账户"
        placeholder="请选择"
        input-align="right"
        error-message-align="right"
        is-link
        required
        @click="selectType('transAccount','cardList')"
      />
      <van-cell :value="(currency||0)+'元'" title="可用余额" value-class="red"/>
      <van-field
        v-model="money"
        :rules="[{ required: true, message: '请输入金额' }]"
        required
        type="number"
        name="转账金额"
        label="转账金额"
        placeholder="请输入金额"
        error-message-align="right"
        input-align="right"
      />
      <div style="height:15px"/>
      <van-field
        v-model="payeeName"
        :rules="[{ required: true, message: '请输入内容' }]"
        label="收款人姓名"
        right-icon="gift-o"
        placeholder="请输入收款人姓名"
        input-align="right"
        required
        error-message-align="right"
      />
      <van-field
        v-model="payeeNo"
        :rules="[{ required: true, message: '请输入内容' }]"
        label="收款人账号"
        placeholder="请输入收款人账号"
        input-align="right"
        required
        error-message-align="right"
      />
      <van-field
        :value="openBank"
        :rules="[{ required: true, message: '请选择收款行' }]"
        readonly
        clickable
        name="picker"
        label="收款行"
        placeholder="请选择"
        input-align="right"
        is-link
        required
        error-message-align="right"
        @click="selectType('openBank','openBankList')"
      />
      <van-field
        v-model="transferUse"
        label="转账用途"
        placeholder="请输入转账用途"
        input-align="right"
      />
      <div style="margin: 16px;">
        <van-button round block type="danger" native-type="submit">
          转账
        </van-button>
      </div>
    </van-form>

    <van-popup v-model="showPicker" position="bottom">
      <van-picker
        :columns="columns"
        show-toolbar
        @confirm="onConfirm"
        @cancel="showPicker = false"
      />
    </van-popup>

  </div>
</template>

<script>

// import field from '@/components/field/'
// import fieldGroup from '@/components/field-group/'
// import { transfer } from '@/api/wxapi'

import { Popup, Picker } from 'vant'
export default {

  components: {
    // [field.name]: field,
    // [fieldGroup.name]: fieldGroup,

    [Picker.name]: Picker,
    [Popup.name]: Popup
  },
  data() {
    return {
      transAccount: '',
      currency: '',
      money: '',
      payeeName: '',
      payeeNo: '',
      openBank: '',
      transferUse: '',

      actionType: '',
      columns: [],

      cardList: ['6226 **** 2165'],
      openBankList: ['华夏银行', '招商银行', '北京银行', '中国银行', '工商银行'],
      showPicker: false
    }
  },
  mounted() {

  },
  methods: {
    selectType(name, val) {
      this.actionType = name
      this.columns = this[val]

      this.showPicker = true
    },
    getAccount() {
      this.currency = 1000
    },
    onConfirm(value) {
      if (this.actionType === 'transAccount') {
        this.getAccount()
      }
      this[this.actionType] = value

      this.showPicker = false
    },
    onSubmit() {
      const params = {
        'OutAccNo': this.transAccount,
        'OutAccName': '张怡宁',
        'OutBank': '华夏银行',
        'InAccNo': this.payeeNo,
        'InAccName': this.payeeName,
        'InBank': this.openBank,
        'TransAmt': this.money,
        'password': '123456',
        'loginIp': '192.168.0.1'
      }
      // transfer(params).then(() => {
      this.$router.push({
        name: 'transferCfm',
        params: params
      })
      // })
    }
  }
}
</script>

<style lang="scss" scoped>
// @import '@/assets/scss/mixin';

div.foget_view {
  background-color: #fff;
  padding-top: 30px;
}

div.foget_submit {
  padding-top: 30px;
  padding-bottom: 20px;
}

.getCode {
  @include one-border(left);
  text-align: center;
}

.time_down {
  color: $red;
}
.red{
  color:red;
}
// .field_group > div{
//   margin-bottom:0
// }
</style>
