
<template>
  <div>
    <swiper ref="mySwiper" :options="swiperOption" class="swiper" @slideChangeTransitionEnd="slideChangeTransitionEnd">
      <swiper-slide><img src="@/assets/images/card1.jpg" class="img"></swiper-slide>
      <!-- <swiper-slide><img src="@/assets/images/card2.jpg" class="img"></swiper-slide> -->
      <div slot="pagination" class="swiper-pagination"/>
    </swiper>
    <div v-show="activeIndex==0">
      <van-form @submit="onSubmit" @failed="onFailed">
        <van-field
          v-model="cardNo"
          :rules="validate.isBankCardNo"
          type="digit"
          name="借记卡卡号"
          label="借记卡卡号"
          placeholder="请输入借记卡卡号"
          clearable
          required
        />
        <van-field
          v-model="phone"
          :rules="validate.isPhoneNo"
          type="tel"
          name="预留手机号"
          label="预留手机号"
          placeholder="请输入预留手机号"
          clearable
          required
        />
        <van-field
          v-model="code"
          :rules="validate.isMessageNo"
          type="text"
          name="短信验证码"
          label="短信验证码"
          placeholder="请输入短信验证码"
          clearable
          required
        >
          <div slot="button" class="getCode red" @click="getCode">
            <countdown v-if="counting" :time="60000" @end="countdownend">
              <template slot-scope="props">{{ +props.seconds || 60 }}秒后获取</template>
            </countdown>
            <span v-else>获取验证码</span>
          </div>
        </van-field >
        <div class="checkBox">
          <van-checkbox v-model="checked1" class="checkItem">接受华夏银行电子银行《个人客户服务协议》</van-checkbox>
          <van-checkbox v-model="checked2" class="checkItem">开通账务变动微信提醒</van-checkbox>
          <van-checkbox v-model="checked3" class="checkItem">同时开通手机银行《安全提示》</van-checkbox>
        </div>
        <div style="margin: 16px;">
          <van-button round block type="danger" native-type="submit">
            绑定
          </van-button>
        </div>
      </van-form>
    </div>

    <div v-show="activeIndex==1">
      <van-form @submit="onSubmit">
        <van-field
          v-model="creCardNo"
          :rules="validate.isBankCardNo"
          type="digit"
          name="信用卡卡号"
          label="信用卡卡号"
          placeholder="请输入信用卡卡号"
          clearable
          required
        />
        <van-field
          v-model="trsPwd"
          :rules="[{ required: true, message: '请填写查询密码' }]"
          type="password"
          name="查询密码"
          label="查询密码"
          placeholder="请输入查询密码"
          clearable
          required
        />
        <van-field
          v-model="crePhone"
          :rules="validate.isPhoneNo"
          type="tel"
          name="预留手机号"
          label="预留手机号"
          placeholder="请输入预留手机号"
          clearable
          required
        />
        <van-field
          v-model="creCode"
          :rules="validate.isMessageNo"
          type="text"
          name="短信验证码"
          label="短信验证码"
          placeholder="请输入短信验证码"
          clearable
          required
        >
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
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import '@/utils/validate'
import { getPhone } from '@/api/wxapi'
import { strEnc } from '@/utils/des'
import JSEncrypt from 'jsencrypt'
export default {
  name: 'SwiperExamplePagination',
  title: 'Pagination',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      activeIndex: 0,
      swiperOption: {
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination'
        }
      },

      cardNo: '',
      phone: '',
      code: '',
      checked1: '',
      checked2: '',

      creCardNo: '',
      trsPwd: '',
      crePhone: '',
      creCode: '',
      checked3: '',
      checked4: '',
      counting: false

    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  activated() {
    // const data = {
    //   openid: '1111'
    // }
    // getAccount1(data).then(res => {
    //   alert(JSON.stringify(res))
    // }).catch(error => {
    //   alert(JSON.stringify(error))
    // })
  },
  mounted() {
    // const data = {
    //   openid: '1111'
    // }
    // getAccount1(data).then(res => {
    //   alert(JSON.stringify(res))
    // }).catch(error => {
    //   alert(JSON.stringify(error))
    // })
  },
  methods: {
    slideChangeTransitionEnd() {
      this.activeIndex = this.swiper.activeIndex
    },
    onSubmit() {
      // rsa公钥
      const pubKey = `-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDU/hbv04Efj5lDd6cTJFLuaHWXszy8kmnO0skAPeWp5CqgnNdzgUjD9sc6BLUWyb+NWLxO559z2bhhb2rWLDZ9MWMdX32w3FGiG3/2FAYubNBlNLv9pXPluj6QOj9TYWtMeb/RtCbDyNXFx0zeSV3vPyZ3kH7lJEIgERvie8bMWwIDAQAB-----END PUBLIC KEY-----`
      const encryptStr = new JSEncrypt()
      // 设置 加密公钥
      encryptStr.setPublicKey(pubKey)
      // 进行rsa加密
      const cardNoEnc = encryptStr.encrypt(this.cardNo)
      const params = {
        No: this.cardNo,
        phone: this.phone,
        code: this.code,
        checked1: this.checked1,
        checked2: this.checked2,
        checked3: this.checked3
      }
      // if (this.activeIndex === 1) {
      //   params.No = this.creCardNo
      // }
      this.$router.push({
        name: 'bindCardRes',
        params: params
      })
    },
    onFailed() {
      this.$toast('验证不通过！')
    },
    getCode() {
      if (!this.counting) {
        this.$toast('验证码已发送！')
      }
      const data = {
        Mobilephone: this.phone
      }
      const that = this
      getPhone(data).then(res => {
        that.code = res.Content
        alert(JSON.stringify(res))
      }).catch(error => {
        alert(error)
      })
      this.counting = true
    },
    countdownend() {
      this.counting = false
    }
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
.swiper-slide{

}
.checkBox{
  margin: 20px 14px;
}
.checkItem{
  margin-top: 10px;
}
</style>
