<template>
  <div :class="{md_field_hasIcon: !!icon, md_field_isError: isError}" class="md_field">
    <van-icon v-if="icon" :name="icon" class="md_feld_icon"/>
    <div class="md_field_control">
      <input
        :type="type"
        v-bind="$attrs"
        :value="value"
        v-on="listeners">
    </div>
    <div>
      <slot name="rightIcon">
        <van-icon v-show="value" :name="rightIcon" @click="rightClick" />
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MdField',

  props: {
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    rightIcon: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    isError: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.onInput
      }
    }
  },

  methods: {
    onInput(event) {
      this.$emit('input', event.target.value)
    },
    rightClick(event) {
      this.$emit('right-click', event)
    }
  }
}
</script>

<style lang="scss" scoped>
.md_field {
  position: relative;
  border: 1px solid $border-color;
  border-radius: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  display: table;
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
  > div {
    display: table-cell;
  }
  > .md_field_control {
    padding-right: 10px;
    box-sizing: border-box;
    input {
      border: 0;
      line-height: 14px;
      font-size: 14px;
      width: 100%;
    }
  }

  .md_feld_icon {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translate(0, -50%);
  }
}

.md_field_hasIcon {
  padding-left: 40px;
}

.md_field_isError {
  color: $red;
  background-color: #fcf5f5;
  border: 1px solid $red;
  input {
    color: $red;
    background-color: #fcf5f5;
  }
  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px #fcf5f5 inset !important;
  }
}
</style>
