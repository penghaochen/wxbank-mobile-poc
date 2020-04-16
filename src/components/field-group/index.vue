<template>
  <div class="field_group">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'MdFieldGroup'
}
</script>

<style lang="scss" scoped>
.field_group {
  padding-left: 15px;
  padding-right: 15px;

  > div {
    margin-bottom: 15px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
