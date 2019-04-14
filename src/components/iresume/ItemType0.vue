<template>
  <div>
    <ItemTitle :name="name"/>
    <div class="iresume-box-content">
      <ul>
        <li v-for="(data, j) in datas" :key="j" :class="liClass">
          <i :class="`icon-small icon-${data.icon}`" v-if="data.icon"/>
          <span class="concat-txt">{{ data.name }}：{{ data.value }}</span>
          <i v-if="data.url" @click="hrefTo(data.url)" :title="data.url" class="icon-small icon-link" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ItemTitle from './ItemTitle'
export default {
  props: {
    datas: Array,
    liClass: String,
    name: String
  },
  components: {
    ItemTitle
  },
}
</script>
