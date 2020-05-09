<template>
  <div>
    <van-form @submit="onSubmit" @failed="onFailed">
      <van-field
        v-model="clientNo"
        :rules="validate.isClientNo"
        type="tel"
        name="客户号"
        label="客户号"
        placeholder="请输入客户号"
        clearable
        required
      />
      <div style="margin: 16px;">
        <van-button round block type="danger" native-type="submit">
          获取回单二维码
        </van-button>
      </div>
      <van-cell-group>
        <img :src="'data:image/png;base64,'+imgsrc" style="width:80%;margin-left: 10%;">
      </van-cell-group>
    </van-form>
  </div>
</template>
<script>
import { getScanCode } from '@/api/wxpocApi' // 获取回单二维码图片接口
import '@/utils/validate' // 验证规则
import { Grid, GridItem } from 'vant'
export default {
  name: 'ScanCode',
  components: {
    [Grid.name]: Grid,
    [GridItem.name]: GridItem

  },
  data() {
    return {
      clientNo: '',
      imgsrc: ''
    }
  },
  mounted() {

  },
  methods: {
    /**
     * 获取回单二维码
     * @description 获取回单二维码
     */
    onSubmit() {
      const data = {
        Mobilephone: this.clientNo
      }
      const that = this
      getScanCode(data).then(res => {
        that.imgsrc = res.data.imgBase64
      }).catch(error => {
        // alert(JSON.stringify(error))
        console.log(error)
      })
    },
    /**
     * 表单验证错误处理事件
     * @description 表单验证不通过事件
     */
    onFailed() {
      // 表单验证
      var flag1 = this.validate.ruleCheck(this.clientNo, this.validate.isClientNo)
      if (!flag1) {
        return
      }
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
