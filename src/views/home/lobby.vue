<template>
  <div>
    <van-grid>
      <van-grid-item icon="photo-o" text="绑卡" @click="gotoMenu('bindCard')"/>
      <van-grid-item icon="photo-o" text="我的账户" @click="gotoMenu('account')"/>
      <van-grid-item icon="photo-o" text="更多功能" @click="gotoMenu()"/>
    </van-grid>
  <!-- <van-row>
    <van-col span="6" style="text-align:center" @click="gotoMenu('bindCard')">
      <img src="@/assets/images/menu/cards@3x.png" style="width:44px">
      <div style="text-align:center;font-size: .6rem;color: #666;">绑卡</div>
    </van-col>
    <van-col span="6" style="text-align:center" @click="gotoMenu('account')">
      <img src="@/assets/images/menu/deposit@3x.png" style="width:44px">
      <div style="text-align:center;font-size: .6rem;color: #666;">我的账户</div>
    </van-col>
    <van-col span="6" style="text-align:center" @click="gotoMenu()">
      <img src="@/assets/images/menu/more@3x.png" style="width:44px">
      <div style="text-align:center;font-size: .6rem;color: #666;">更多功能</div>
    </van-col>
  </van-row> -->
  </div>
</template>
<script>
import { getauthorize } from '@/api/wxapi'
import { GetUrlParams } from '@/utils/index'

import { Grid, GridItem } from 'vant'
export default {
  components: {
    [Grid.name]: Grid,
    [GridItem.name]: GridItem

  },
  data() {
    return {
      shopInfos: [],
      isLoading: false
    }
  },
  mounted() {
    const code = GetUrlParams('code')
    this.$toast('code:' + code)
    if (!code) return
    const data = {
      code: code
    }
    getauthorize(data).then(res => {
      sessionStorage.setItem('openId', res.openId)
      alert(JSON.stringify(res))
    }).catch(error => {
      alert(error)
    })
  },
  methods: {
    gotoMenu(id) {
      if (!id) {
        this.$toast('该功能正在开发中...')
        return
      }
      this.$router.push({
        name: id
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.interval_bot {
  margin-bottom: 10px;
}
.van-panel {
  margin-top: 20px;
}
.goods-channel {
  background: #fff;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 0px;
  padding-top: 10px;
}

.goods-channel .item {
  width: 80px;
  height: 80px;
  margin-left: 10px;
}

.goods-channel img {
  display: block;
  width: 20px;
  height: 20px;
  margin: 0 auto;
}

.goods-channel span {
  display: block;
  font-size: 14px;
  text-align: center;
  margin-top: 5px;
  margin-bottom: 10px;
  color: #333;
}
.van-coupon-cell--selected {
  color: #323233;
}
.van-coupon-list {
  height: 100%;
  position: relative;
  background-color: #f8f8f8;
}
.van-coupon-list__field {
  padding: 7px 15px;
}
.van-coupon-list__exchange {
  height: 32px;
  line-height: 30px;
}
.van-coupon-list__list {
  overflow-y: auto;
  padding: 15px 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-overflow-scrolling: touch;
}
.van-coupon-list__close {
  left: 0;
  bottom: 0;
  position: absolute;
  font-weight: 500;
}
.van-coupon-list__empty {
  padding-top: 100px;
  text-align: center;
}
.van-coupon-list__empty p {
  color: #969799;
  margin: 15px 0;
  font-size: 14px;
  line-height: 20px;
}
.van-coupon-list__empty img {
  width: 80px;
  height: 84px;
}
.van-coupon-item {
  overflow: hidden;
  border-radius: 4px;
  margin: 0 15px 15px;
  background-color: #fff;
  -webkit-box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
}
.van-coupon-item:active {
  background-color: #e8e8e8;
}
.van-coupon-item__content {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 100px;
  padding: 24px 0 0 15px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border: 1px solid red;
}
.van-coupon-item h2,
.van-coupon-item p {
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.van-coupon-item h2 {
  height: 34px;
  font-weight: 500;
  line-height: 34px;
}
.van-coupon-item p {
  font-size: 12px;
  line-height: 16px;
  color: #969799;
}
.van-coupon-item__head {
  min-width: 90px;
}
.van-coupon-item__head h2 {
  color: #f44;
  font-size: 24px;
}
.van-coupon-item__head h2 span {
  font-size: 50%;
}
.van-coupon-item__body {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  position: relative;
  border-radius: 0 4px 4px 0;
}
.van-coupon-item__body h2 {
  font-size: 16px;
}
.van-coupon-item__corner {
  top: 16px;
  right: 15px;
  position: absolute;
}
.van-coupon-item__corner .van-icon {
  border-color: #f44;
  background-color: #f44;
}
.van-coupon-item__reason {
  padding: 7px 15px;
  border-top: 1px dashed #ebedf0;
  background-color: #fafafa;
}
.van-coupon-item--disabled:active {
  background-color: #fff;
}
.van-coupon-item--disabled .van-coupon-item__content {
  height: 90px;
}
.van-coupon-item--disabled h2,
.van-coupon-item--disabled p,
.van-coupon-item--disabled span {
  color: #969799;
}
</style>
