<template>
  <div>
    <ItemTitle :name="name"/>
    <div class="iresume-box-content">
      <ul>
        <li v-for="(data, j) in datas" :key="j">
          {{ data }}
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
    name: String
  },
  components: {
    ItemTitle
  }
}
</script>
