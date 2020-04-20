
<template>
  <div>
    <!-- 卡片轮播 -->
    <swiper ref="mySwiper" :options="swiperOption" class="swiper" @slideChangeTransitionEnd="slideChangeTransitionEnd">
      <swiper-slide><img src="@/assets/images/card1.jpg" class="img"></swiper-slide>
      <!-- <swiper-slide><img src="@/assets/images/card2.jpg" class="img"></swiper-slide> -->
      <div slot="pagination" class="swiper-pagination"/>
    </swiper>
    <!-- 滑至第一张图 显示以下内容 -->
    <div v-show="activeIndex==0">
      <van-form @submit="onSubmit" @failed="onFailed">
        <!-- 输入卡号 -->
        <van-field
          v-model="cardNo"
          :rules="validate.isBankCardNo.rule"
          type="digit"
          name="借记卡卡号"
          label="借记卡卡号"
          placeholder="请输入借记卡卡号"
          clearable
          required
        />
        <!-- 输入手机号 -->
        <van-field
          v-model="phone"
          :rules="validate.isPhoneNo.rule"
          type="tel"
          name="预留手机号"
          label="预留手机号"
          placeholder="请输入预留手机号"
          clearable
          required
        />
        <!-- 输入短信验证码 -->
        <van-field
          v-model="code"
          :rules="validate.isMessageNo.rule"
          type="text"
          name="短信验证码"
          label="短信验证码"
          placeholder="请输入短信验证码"
          clearable
          required
        >
          <!-- 短信验证码 按钮 -->
          <div slot="button" class="getCode red" @click="getCode">
            <countdown v-if="counting" :time="60000" @end="countdownend">
              <template slot-scope="props">{{ +props.seconds || 60 }}秒后获取</template>
            </countdown>
            <span v-else>获取验证码</span>
          </div>
        </van-field >
        <!-- 各种协议 -->
        <div class="checkBox">
          <van-checkbox v-model="checked1" class="checkItem">接受华夏银行电子银行《个人客户服务协议》</van-checkbox>
          <van-checkbox v-model="checked2" class="checkItem">开通账务变动微信提醒</van-checkbox>
          <van-checkbox v-model="checked3" class="checkItem">同时开通手机银行《安全提示》</van-checkbox>
        </div>
        <!-- 绑定提交按钮 -->
        <div style="margin: 16px;">
          <van-button round block type="danger" native-type="submit">
            绑定
          </van-button>
        </div>
      </van-form>
    </div>
    <!-- 滑至第二张图 显示以下内容 -->
    <div v-show="activeIndex==1">
      <van-form @submit="onSubmit">
        <!-- 输入信用卡卡号 -->
        <van-field
          v-model="creCardNo"
          :rules="validate.isBankCardNo.rule"
          type="digit"
          name="信用卡卡号"
          label="信用卡卡号"
          placeholder="请输入信用卡卡号"
          clearable
          required
        />
        <!-- 输入查询密码 -->
        <van-field
          v-model="creTrsPwd"
          :rules="[{ required: true, message: '请填写查询密码' }]"
          type="password"
          name="查询密码"
          label="查询密码"
          placeholder="请输入查询密码"
          clearable
          required
        />
        <!-- 输入预留手机号 -->
        <van-field
          v-model="crePhone"
          :rules="validate.isPhoneNo.rule"
          type="tel"
          name="预留手机号"
          label="预留手机号"
          placeholder="请输入预留手机号"
          clearable
          required
        />
        <!-- 输入短信验证码 -->
        <van-field
          v-model="creCode"
          :rules="validate.isMessageNo.rule"
          type="text"
          name="短信验证码"
          label="短信验证码"
          placeholder="请输入短信验证码"
          clearable
          required
        >
          <!-- 短信验证码 按钮 -->
          <div slot="button" class="getCode red" @click="getCode">
            <countdown v-if="counting" :time="60000" @end="countdownend">
              <template slot-scope="props">{{ +props.seconds || 60 }}秒后获取</template>
            </countdown>
            <span v-else>获取验证码</span>
          </div>
        </van-field >
        <div class="checkBox">
          <van-checkbox v-model="checked4" class="checkItem">同时开通手机银行《安全提示》</van-checkbox>
        </div>
        <!-- 提交按钮 绑定 -->
        <div style="margin: 16px;">
          <van-button round block type="danger" native-type="submit">
            绑定
          </van-button>
        </div>
      </van-form>
    </div>
    <div class="text-desc text-center bottom_positon">技术支持: loong easygroup</div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper' // 轮播插件
import 'swiper/css/swiper.css'// 轮播插件样式
import { getMsgCode } from '@/api/wxapi'// 接口
import JSEncrypt from 'jsencrypt'// rsa加密
import '@/utils/validate'// 验证规则

// import { strEnc } from '@/utils/des'

export default {
  name: 'BindCard',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      activeIndex: 0, // 轮播当前项
      swiperOption: {
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination'
        }
      }, // 轮播配置参数
      // 借记卡绑定字段
      cardNo: '',
      phone: '',
      code: '',
      checked1: '',
      checked2: '',
      // 信用卡绑定字段
      creCardNo: '',
      creTrsPwd: '',
      crePhone: '',
      creCode: '',
      checked3: '',
      checked4: '',
      // 验证码倒计时标识 true：正在倒计时，false：允许倒计时
      counting: false

    }
  },
  computed: {
    // 获取轮播dom节点
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  activated() {

  },
  mounted() {

  },
  methods: {
    /**
     * 轮播完成事件
     * @description 完成一次轮播结束触发事件
     */
    slideChangeTransitionEnd() {
      this.activeIndex = this.swiper.activeIndex
    },
    /**
     * 表单提交
     * @description 借记卡绑卡事件
     */
    onSubmit() {
      // rsa公钥
      const pubKey = `-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDU/hbv04Efj5lDd6cTJFLuaHWXszy8kmnO0skAPeWp5CqgnNdzgUjD9sc6BLUWyb+NWLxO559z2bhhb2rWLDZ9MWMdX32w3FGiG3/2FAYubNBlNLv9pXPluj6QOj9TYWtMeb/RtCbDyNXFx0zeSV3vPyZ3kH7lJEIgERvie8bMWwIDAQAB-----END PUBLIC KEY-----`
      const encryptStr = new JSEncrypt()
      // 设置 加密公钥
      encryptStr.setPublicKey(pubKey)
      // 进行rsa加密
      // const cardNoEnc = encryptStr.encrypt(this.cardNo)
      const params = {
        No: this.cardNo,
        phone: this.phone,
        code: this.code,
        checked1: this.checked1,
        checked2: this.checked2,
        checked3: this.checked3
      }
      // 发送绑卡接口

      // 跳转绑卡结果页
      this.$router.push({
        name: 'bindCardRes',
        params: params
      })
    },
    /**
     * 表单验证错误处理事件
     * @description 表单验证不通过事件
     */
    onFailed() {
      this.$toast('验证不通过！')
    },
    /**
     * 获取短信验证码
     * @description 获取短信验证码
     */
    getCode() {
      if (!this.counting) {
        this.$toast('验证码已发送！')
      } else {
        this.$toast('请稍后获取！')
        return
      }
      if (!this.validate.isBankCardNo.pattern.test(this.cardNo)) {
        this.$toast('卡号验证不通过！')
        return
      }
      if (!this.validate.isPhoneNo.pattern.test(this.phone)) {
        this.$toast('手机号验证不通过！')
        return
      }
      const params = {
        CardNo: this.cardNo,
        BankAcType: '1',
        Phone: this.phone
      }
      // 获取短信验证码接口
      // const that = this
      getMsgCode(params).then(res => {
        alert(res)
        this.counting = true
      }).catch(error => {
        alert(error)
      })
    },
    /**
     * 倒计时结束事件
     * @description 倒计时为0时触发事件
     */
    countdownend() {
      this.counting = false
    }
  },
  /**
     * 离开此路由时触发 钩子函数
     * @param to 跳转路由的属性
     * @param from 当前路由的属性
     * @param next 钩子函数
     * @description 修改页面的meta值，false时再次进入页面会重新请求数据。
     */
  beforeRouteLeave(to, from, next) {
    if (to.path === '/lobby') {
      // 如果是首页菜单，则清除缓存
      from.meta.keepAlive = false
    } else {
      from.meta.keepAlive = true
    }
    next()
  }
}
</script>

<style lang="scss" scoped>
.swiper{
  width: 100%;
  height: 250px;
  padding: 10px 0;
}
.img{
    width: 100%;
    padding: 0 10%;
}
.checkBox{
  margin: 20px 14px;
}
.checkItem{
  margin-top: 10px;
}
</style>
