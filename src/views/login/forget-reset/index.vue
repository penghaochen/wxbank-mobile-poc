<template>
  <md-field-group class="foget_view">
    <md-field
      v-model="password"
      :is-error="isErrow"
      type="password"
      icon="lock"
      placeholder="请输入新密码"/>

    <md-field
      v-model="passwordRepeat"
      :is-error="isErrow"
      type="password"
      icon="lock"
      placeholder="请再次输入密码" />
    <div v-show="isErrow" class="red">两次密码输入不一致</div>

    <div class="foget_submit">
      <van-button size="large" type="danger" @click="submitCode">重置</van-button>
    </div>
  </md-field-group>
</template>

<script>
import field from '@/components/field/'
import fieldGroup from '@/components/field-group/'

export default {

  components: {
    [field.name]: field,
    [fieldGroup.name]: fieldGroup
  },
  data() {
    return {
      isErrow: false,
      password: '',
      passwordRepeat: ''
    }
  },

  methods: {
    submitCode() {
      this.$router.push({
        name: 'forgetStatus',
        params: { status: 'success' }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
div.foget_view {
  background-color: #fff;
  padding-top: 30px;
}

div.foget_submit {
  padding-top: 30px;
  padding-bottom: 20px;
}
</style>
