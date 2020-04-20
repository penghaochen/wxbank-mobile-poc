
<template>
  <div>
    <!-- 卡信息 -->
    <div class="card-box">
      <div class="card-title"><span><img src="@/assets/images/logo.png" style="width:30px;">华夏个人借记卡</span> <a class="btn" @click="onAccDetailClick">查账</a></div>
      <div class="card-center">{{ accInfo.ActNo ||'加载中...' }} <a class="btn" @click="onTimToSavClick">定活互转</a></div>
      <div class="card-mark">开户行：{{ accInfo.AvailBalList[0].ActOpenBankBranch ||'加载中...' }}</div>
      <div class="card-tools">
        <div>{{ accInfo.AvailBalList[0].ActCurType ||'加载中...' }}</div>
        <div>可用余额：{{ accInfo.AvailBalList[0].ActAvaiBal ||'加载中...' }}</div>
      </div>
    </div>
    <!-- 积分 -->
    <van-cell-group>
      <van-cell :value="accInfo.AvailBalList[0].CifIntegral||'0'+'（北京分行）'" title="客户综合积分" />
    </van-cell-group>
  </div>
</template>
<script>
import { getAccount } from '@/api/wxapi' // 获取卡信息接口
export default {
  name: 'Account',
  data() {
    return {
      accInfo: { 'AvailBalList': [{}] } // 卡信息数据
    }
  },
  mounted() {
    // 从缓存中获取opennid
    const openId = sessionStorage.getItem('openId')
    alert('缓存的openId' + openId)
    const data = {
      openId: openId
    }
    const that = this
    // 获取卡信息接口
    getAccount(data).then(res => {
      that.accInfo = res.data
    }).catch(error => {
      alert(JSON.stringify(error))
    })
  },
  methods: {
    /**
     * 查账
     * @description 账户详情
     */
    onAccDetailClick() {
      this.$toast('该功能正在开发中')
    },
    /**
     * 定活互转
     * @description 定活互转
     */
    onTimToSavClick() {
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
