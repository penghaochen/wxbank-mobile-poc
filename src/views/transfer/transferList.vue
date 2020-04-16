<template>
  <div>
    123
  </div>
</template>

<script>

import field from '@/components/field/'
import fieldGroup from '@/components/field-group/'

import { Form, Field, Popup, Picker } from 'vant'
export default {

  components: {
    [field.name]: field,
    [fieldGroup.name]: fieldGroup,
    [Field.name]: Field,
    [Form.name]: Form,
    [Picker.name]: Picker,
    [Popup.name]: Popup
  },
  data() {
    return {
      paramsData: {}

    }
  },
  mounted() {
    this.paramsData = this.$route.params
    console.log(this.paramsData)
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>

</style>
