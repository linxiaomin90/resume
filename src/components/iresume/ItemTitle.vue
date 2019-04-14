<template>
  <div class="iresume-box-title">
    <i class="icon-star icon-mid"/>
    <span class="iresume-box-txt">{{ name }}</span>
  </div>
</template>

<script>
export default {
  props: {
    name: String
  }
}
</script>
