
<template>
  <div>
    <div class="card-box">
      <div class="card-title"><span>华夏个人借记卡</span> <a class="btn" @click="AccountQry">查账</a></div>
      <div class="card-center">6230 **** **** 6911</div>
      <div class="card-mark">开户行：华夏银行北京分行</div>
      <div class="card-tools">
        <div>人民币</div>
        <div>可用余额：22,840,25</div>
      </div>
    </div>
    <van-cell-group>
      <van-cell title="客户综合积分" value="814（北京分行）" />
    </van-cell-group>
  </div>
</template>
<script>
import { getAccount } from '@/api/wxapi'
export default {
  data() {
    return {
      shopInfos: [],
      isLoading: false
    }
  },
  activated() {
    const data = {
      openid: '1111'
    }
    getAccount(data).then(res => {
      alert(JSON.stringify(res))
    }).catch(error => {
      alert(JSON.stringify(error))
    })
  },
  methods: {
    AccountQry() {
      this.$toast('该功能正在开发中')
    }
  }
}
</script>
<style lang="scss">
.card-box{
    width:88%;
    margin:0 auto;
    border-radius: 14px;
    padding: 14px 10px 10px;
    background: #fbee01;
    .btn{
        border:1px solid #a00;
        border-radius: 14px;
        padding: 4px 10px;
        font-size: 14px;
        color: #a00;
    }
    .card-title{
        display: flex;
        justify-content: space-between;
        font-size: 20px;
    }
    .card-center{
        padding: 20px 0;
        font-size: 20px;
    }
    .card-mark{
        padding: 10px 0;
    }
    .card-tools{
        display: flex;
        border-top: 1px solid #a00;
        justify-content: space-between;
        padding: 10px 0;
    }
}
</style>
