<template>
  <div>
    <div v-show="showFlag=='card'">

      <div id="myChart" style="width: 100%;height: 210px; padding-top: .6rem;background:#24282e"/>
      <van-sticky :offset-top="50">
        <div class="acc-toolbar">
          <div class="acc-menu">
            <div class="acc-val">1000.00</div>
            <div class="acc-text">活期+</div>
            <i class="icon blue"/>
          </div>
          <div class="acc-menu">
            <div class="acc-val">0.00</div>
            <div class="acc-text">投资</div>
            <i class="icon yellow"/>
          </div>
          <div class="acc-menu">
            <div class="acc-val">483.20</div>
            <div class="acc-text">本月剩余应还</div>
            <i class="icon red"/>
          </div>
        </div>
      </van-sticky>

      <van-notice-bar text="华夏公众号银行poc开启啦，内部使用测试中,欢迎您的使用！" left-icon="volume-o" />
      <van-cell-group>
        <div class="acc-title blue">活期</div>
        <van-cell title="人民币" value="3890.00" label="尾号0913" is-link @click="handleDetail"/>
        <van-cell-group class="box">
          <van-cell :border="true" title="综合客户积分" value="814"/>
        </van-cell-group>
        <van-coupon-cell
          :coupons="coupons"
          :chosen-coupon="chosenCoupon"
          title="优惠券"
          @click="showList = true"
        />
        <div class="acc-title yellow">投资</div>
        <van-cell title="华夏盈利宝" value="超额收益,实时赎回" is-link/>
        <div class="acc-title red">负债</div>
        <van-cell-group title="信用卡汽车分期">
          <van-cell title="2020-3-15" value="5958.33" />
          <van-cell title="2020-2-15" value="5958.33" />
          <van-cell title="2020-1-15" value="5958.33" />
        </van-cell-group>
        <van-cell-group title="信用卡个人消费分期">
          <van-cell title="2020-3-25" value="160.22" />
          <van-cell title="2020-2-25" value="160.22" />
          <van-cell title="2020-1-25" value="160.22" />
        </van-cell-group>
      </van-cell-group>
    </div>
    <div v-show="showFlag=='list'">
      <van-card
        tag="借记卡"
        desc="6230 **** **** 6904"
        centered
        title="华夏个人借记卡"
        thumb="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586326546391&di=0f3a1fa6167f31f1d84d0ae51810861c&imgtype=0&src=http%3A%2F%2Fres.cngoldres.com%2Fupload%2F2015%2F0819%2Fe9c3e5347c15ea8b9ee1ea65242878ff.jpg"
      >
        <div slot="footer">
          <van-button size="small" @click="handleDetail">查账</van-button>
          <van-button size="small" @click="handletransfer">定活互转</van-button>
        </div>
      </van-card>
      <van-cell-group class="box">
        <van-cell :border="true" title="综合客户积分" value="814"/>
      </van-cell-group>
      <van-coupon-cell
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        title="优惠券"
        @click="showList = true"
      />
    </div>

    <van-popup
      v-model="showList"
      round
      position="bottom"
      style="height: 90%; padding-top: 4px;"
    >
      <van-coupon-list
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        :disabled-coupons="disabledCoupons"
        @change="onChange"
        @exchange="onExchange"
      />
    </van-popup>
  </div>
</template>

<script>

// import { transfer } from '@/api/wxapi'

import { Card, NoticeBar, Panel, CouponCell, CouponList, Popup, Sticky } from 'vant'
// import { getCard } from '@/api/accountApi'
// 引入基本模板
const echarts = require('echarts/lib/echarts')
// 引入柱状图组件
require('echarts/lib/chart/line')
require('echarts/lib/chart/bar')
require('echarts/lib/chart/pie')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
export default {

  components: {
    [Card.name]: Card,
    [NoticeBar.name]: NoticeBar,
    [Panel.name]: Panel,
    [CouponCell.name]: CouponCell,
    [CouponList.name]: CouponList,
    [Popup.name]: Popup,
    [Sticky.name]: Sticky

  },
  data() {
    return {
      showFlag: 'card',
      chosenCoupon: -1,
      showList: false,
      coupons: [{
        available: 1,
        condition: '无使用门槛\n',
        reason: '',
        value: 50,
        name: '盈利宝买5万送50',
        startAt: 1584201600,
        endAt: 1586834282,
        valueDesc: '50',
        unitDesc: '元'
      }],
      disabledCoupons: []
    }
  },
  mounted() {
    const that = this
    setTimeout(() => {
      that.drawLine()
    }, 300)
    this.$parent.$on('rightAction', (data) => {
      if (data === '卡视角') {
        that.$store.commit('SET_RIGHTTEXT', '列表视角')
        that.$route.meta.rightText = '列表视角'
        that.showFlag = 'card'
        setTimeout(() => {
          that.drawLine()
        }, 300)
      } else {
        that.showFlag = 'list'
        that.$store.commit('SET_RIGHTTEXT', '卡视角')
        that.$route.meta.rightText = '卡视角'
      }
    })

    // const params = {
    //   'OutAccNo': '6222600010002',
    //   'OutAccName': '张怡宁',
    //   'OutBank': '华夏银行'
    // }
    // transfer(params).then((res) => {
    //   this.$toast(JSON.stringify(res))
    // })
  },
  methods: {
    handleDetail() {
      this.$router.push({
        name: 'accountDetail'
      })
    },
    handletransfer() {

    },
    drawLine() {
      const pieChart = echarts.init(document.getElementById('myChart'))
      const num = '10,000.00'
      // 下面给图例加上配置 都是官方的api
      pieChart.setOption({

        series: [
          {
            name: '随意啦', // 上面formatter的a，不显示a可不设置
            type: 'pie',
            color: '#fff',
            animation: true,
            animationType: 'expansion', // expansion沿圆弧展开 scale缩放效果
            animationTypeUpdate: 'expansion',
            animationEasingUpdate: 'cubicOut',
            animationDurationUpdate: 1600,
            startAngle: 190, // 重点！这里设置饼图从180°初渲染，刚好从上下将饼图平分成两部分
            radius: ['97%', '100%'],
            center: ['50%', '66%'],
            data: [{ value: 50, name: 'a', itemStyle: { normal: { color: '#4088cc' }}},
              { value: 50, name: 'b', itemStyle: { normal: { color: '#b6956f' }}},
              { value: 50, name: 'c', itemStyle: { normal: { color: '#f9604d' }}},
              { name: '总数', value: 115, itemStyle: { normal: { color: 'rgba(0, 0, 0, 0)' }}}],
            label: {
              normal: {
                show: true,
                position: 'center',
                formatter: [
                  '{a|昨日收益(元)}',
                  '{b|63.50}',

                  '{a|总资产(元)}',
                  '{b|' + num + '}'
                ].join('\n'),
                rich: {
                  a: {
                    fontSize: 14,
                    fontWeight: 'normal',
                    lineHeight: 20,
                    color: '#8d9294'
                  },
                  b: {
                    fontSize: 22,
                    height: 40,
                    foneWeight: 'bold',
                    textShadowBlur: 20,
                    color: '#f9f9fa'
                  },
                  x: {
                    fontSize: 18,
                    // fontFamily: 'Microsoft YaHei',
                    borderColor: '#449933',
                    borderRadius: 4
                  }
                },

                textStyle: {
                  fontSize: 16,
                  fontWeight: 'normal',
                  color: '#a00'
                },
                padding: [-50, 0, 0, 0]
              }
              // emphasis: {
              //   show: true,
              //   textStyle: {
              //     fontSize: 30,
              //     color: '#a00'
              //   }
              // }
            },
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 10,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      })
    },
    onChange() {
      this.showList = false
      // this.chosenCoupon = index
    },
    onExchange() {
      this.coupons.push(this.coupons[0])
    }
  }
}
</script>

<style lang="scss" scoped>

.acc-toolbar{
  background:#24282e;
  display: flex;
  padding: 10px 0 10px;
}
.acc-menu{
  flex:1;
}
.acc-val{
  text-align: center;
  color: #dadee1;
}
.acc-text{
  text-align: center;
  color: #8d9294;
}
.acc-title{
  text-align: center;
  padding: 10px 0;
  background: #f8f8f8;
}
.acc-title.blue{
  color: #4088cc;
}
.acc-title.yellow{
  color: #b6956f;
}
.acc-title.red{
  color: #f9604d;
}
.icon{
    width: 14px;
    height: 4px;
    display: block;
    background: #fff;
    border-radius: 10px;
    margin: 10px auto 4px;
}
.icon.blue{
  background: #4088cc;
}
.icon.yellow{
  background: #b6956f;
}
.icon.red{
  background: #f9604d;
}
</style>
