<template>
  <div>
    <ItemTitle :name="name"/>
    <div class="iresume-box-content">
      <ul>
        <li v-for="(data, j) in datas" :key="j" class="iresume-item01">
          <div class="iresume-box-head">
            <span class="iresume-project">
              <span class="iresume-project-title">
                {{ data.name }}
              </span>
              <i v-if="data.url" :title="data.url" class="icon-link icon-small" @click="hrefTo(data.url)"/>
            </span>
            <span class="iresume-enterprise-time">{{ data.startTime }} ~ {{ data.endTime }}</span>
          </div>
          <div class="iresume-box-box" v-for="(detail, k) in data.detail" :key="k">
            <div class="iresume-mini-title iresume-mini">{{ detail.name }}</div>
            <div class="iresume-enterprise-content iresume-mini">
              <ol>
                <li v-for="(val, l) in detail.data" :key="l">
                  {{ val }}
                </li>
              </ol>
            </div>
          </div>
          <PictureSwipe class="m-pic" :items="data.items" v-if="data.items"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ItemTitle from "./ItemTitle"
import PictureSwipe from 'vue-picture-swipe'
export default {
  props: {
    datas: Array,
    name: String
  },
  components: {
    ItemTitle,
    PictureSwipe
  }
}
</script>

<style scoped>
.m-pic {
  border: 1px solid rgb(204, 204, 204);
  padding: 10px;
  margin-top: 15px;
}
.iresume-item01{
  margin-bottom: 15px;
}
</style>

