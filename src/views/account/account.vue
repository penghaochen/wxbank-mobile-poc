
<template>
  <div>
    <div class="card-box">
      <div class="card-title"><span><img src="@/assets/images/logo.png" style="width:30px;">华夏个人借记卡</span> <a class="btn" @click="AccountQry">查账</a></div>
      <div class="card-center">{{ accInfo.ActNo ||'加载中...' }} <a class="btn" @click="AccountQry">定活互转</a></div>
      <div class="card-mark">开户行：{{ accInfo.AvailBalList[0].ActOpenBankBranch ||'加载中...' }}</div>
      <div class="card-tools">
        <div>{{ accInfo.AvailBalList[0].ActCurType ||'加载中...' }}</div>
        <div>可用余额：{{ accInfo.AvailBalList[0].ActAvaiBal ||'加载中...' }}</div>
      </div>
    </div>
    <van-cell-group>
      <van-cell :value="accInfo.AvailBalList[0].CifIntegral||'0'+'（北京分行）'" title="客户综合积分" />
    </van-cell-group>
  </div>
</template>
<script>
import { getAccount } from '@/api/wxapi'
export default {
  data() {
    return {
      shopInfos: [],
      isLoading: false,
      accInfo: { 'AvailBalList': [{}] }
    }
  },
  activated() {
    const openId = sessionStorage.getItem('openId')
    alert('缓存的openId' + openId)
    const data = {
      openId: openId || 'otir0snHkYfVySyfUIZTKl0LFgF0'
    }
    const that = this
    getAccount(data).then(res => {
      that.accInfo = res
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
    width: 88%;
    margin: 10px auto;
    border-radius: 14px;
    padding: 14px 10px 10px;
    background: #fbee01;
    box-shadow: 1px 1px 1px #9c9403;
    background-image: linear-gradient(#fbef19, #fff75f);
    .btn{
        border:1px solid #a00;
        border-radius: 14px;
        padding: 4px 10px;
        font-size: 14px;
        color: #a00;
        min-width: 80px;
        text-align: center;
    }
    .card-title{
        display: flex;
        justify-content: space-between;
        font-size: 20px;
        align-items: center;
    }
    .card-center{
        display: flex;
        justify-content: space-between;
        padding: 20px 0;
        font-size: 20px;
        align-items: center;
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
