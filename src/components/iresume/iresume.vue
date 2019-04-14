<template>
  <div class="iresumex">
    <div class="iresume">
      <div class="iresume-left">
        <div class="iresume-avatars">
          <img :src="user.avatar" alt="avatar" class="iresume-img">
        </div>
        <div class="iresume-username">
          {{ user.name }}
        </div>
        <div class="iresume-box">
          <ItemType0 :name="user.contact.name" :datas="user.contact.data" li-class="concat-box"/>
          <LeftItemType1 :name="user.job.name" :datas="user.job.data"/>
          <LeftItemType1 :name="user.skill.name" :datas="user.skill.data"/>
          <LeftItemType1 :name="user.appraise.name" :datas="user.appraise.data"/>
        </div>
      </div>
      <div class="iresume-right">
        <div class="iresume-box">
          <ItemType0 :name="user.basic.name" :datas="user.basic.data" li-class="info-box"/>
          <ItemType0 :name="user.education.name" :datas="user.education.data" li-class="info-box"/>
          <RightItemType1 :name="user.experience.name" :datas="user.experience.data"/>
          <RightItemType1 :name="user.project.name" :datas="user.project.data"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ItemType0 from './ItemType0'
import LeftItemType1 from './LeftItemType1'
import RightItemType1 from './RightItemType1'
import themes from './theme/themes.json'
import { getDom, getDoms, updateDom } from './js/tool.js'
export default {
  props: {
    user: Object,
    pNode: Object,
  },
  components: {
    ItemType0,
    LeftItemType1,
    RightItemType1
  },
  data () {
    return {
      template: {},
    }
  },
  created() {
    let theme = 'blue'
    if (this.pNode && !!this.pNode.theme && Object.keys(themes).includes(theme)) theme = this.pNode.theme
    this.template = themes[theme]
  },
  mounted () {
    this.domStyle()
  },
  methods: {
    domStyle () {
      let { className = '.iresumex', leftBackground = '', leftColor = '', rightBackground = '', rightColor = '' } = this.pNode
      const { left, right } = this.template
      let leftBg = left.bgColor, rightBg = right.bgColor
      if (leftBackground !== '') leftBg = `url(${leftBackground}) repeat`
      if (leftColor === '') leftColor = left.fontColor
      if (rightBackground !== '') rightBg = `url(${rightBackground}) repeat`
      if (rightColor === '') rightColor = right.fontColor
      const domArr = [
        { dom: '.iresume .iresume-left', style: [
          { color: leftColor },
          { background: leftBg }
        ] },
        { dom: '.iresume .iresume-left .iresume-box-title', style: [
          { color: left.box.titleColor }
        ] },
        { dom: '.iresume .iresume-right', style: [
          { color: rightColor },
          { background: rightBg }
        ] },
        { dom: '.iresume .iresume-right .iresume-infomation', style: [
          { color: right.box.infoColor }
        ] },
        { dom: '.iresume .iresume-right .iresume-box-title', style: [
          { color: right.box.titleColor },
          { borderBottom: `1px solid ${right.box.hrColor}` }
        ] },
        { dom: '.iresume .iresume-right .icon-star2', style: [
          { color: right.box.titleColor }
        ] },
        { dom: '.iresume .iresume-right .iresume-project', style: [
          { color: right.box.project.titleColor }
        ] },
        { dom: '.iresume .iresume-right .iresume-project-url', style: [
          { color: right.box.project.urlColor }
        ] },
        { dom: '.iresume .iresume-right .iresume-enterprise-time', style: [
          { color: right.box.project.titleColor }
        ] },
        { dom: '.iresume .iresume-right .iresume-mini-title', style: [
          { color: right.box.mini.titleColor }
        ] }
      ]
      updateDom(domArr, className)
    },
    hrefTo (url) {
      window.open(url)
    }
  }
}

</script>
<style>
@import url('./css/index.css');
@import url('./css/style.css');
</style>
