<template>
  <Iresume :user="user" class="resume" :pNode="resumeNode"></Iresume>
</template>

<script>
import Iresume from '@/components/iresume/iresume'
export default {
  components: {
    Iresume
  },
  data() {
    return {
      user: {
        name: "林小敏",
        avatar: "./static/avatar.png",
        contact: {
          name: "联系方式",
          data: [
            {name: "电话", value: "15280074578", icon: "phone"},
            {name: "邮箱", value: "314665380@qq.com", icon: "email"}
          ]
        },
        job: {
          name: "应聘岗位",
          data: [
            "UI设计师"
          ]
        },
        skill: {
          name: "技能树",
          data: [
            "Adobe Photoshop",
            "Adobe Illustrator",
            "Dreamweaver",
            "Visio",
            "Axure",
            "Html/CSS"
          ]
        },
        appraise: {
          name: "个人评价",
          data: [
            "1.熟练掌握Photoshop、Illustrator、Dreamweaver、Axure、Visio等相关设计软件；",
            "2.熟悉Vue框架、Html、Javascript、CSS样式表，能够熟练使用DIV+CSS；",
            "3.拥有网页、移动端APP界面、微信H5界面相关工作经验，能独立完成整个设计过程，独立输出静态页面；",
            "4.热爱设计，具备较强的学习能力。抗压力强，能承受一定程度的加班。注重细节，具备良好的沟通协调能力及团队合作精神。"
          ]
        },
        basic: {
          name: "基础信息",
          data: [
            {name: "姓名", value: "林小敏", icon: "user"},
            {name: "出生年月", value: "1990.05", icon: "time"},
            {name: "性别", value: "女", icon: "sex"},
            {name: "地址", value: "福州市晋安区", icon: "address"}
          ]
        },
        education: {
          name: "教育背景",
          data: [
            {name: "毕业院校", value: "福建农林大学", icon: "school"},
            {name: "起始年月", value: "2009.09 ~ 2013.06", icon: "time"},
            {name: "学历", value: "本科", icon: "education"}
          ]
        },
        experience: {
          name: "工作经验",
          data: [
            {
              name: "福建省创科讯达通信科技有限公司",
              startTime: "2016/04",
              endTime: "2019/03",
              detail: [
                {
                  name: "工作内容：",
                  data: [
                    "负责产品策划、提供需求分析、产品原型设计、产品UI设计、产品静态页面输出。和开发、运营团队经理合作紧密合作，推动产品开发和发展。带领团队成员完成公司制定任务，带来效益。",
                    "负责儿童BB机、中老年人体征监测手表、儿童手表等产品的整体功能整理、框架设计、原型与交互设计，全面负责这些产品的UI设计、静态页面输出，并不断迭代这些产品。",
                    "负责佛教网站“菩提树下”项目Web端及微信H5网站原型与交互设计，独立完成该项目的视觉设计与静态页面输出。",
                    "负责设计类网站“古田路9号”功能、界面改版设计；培训类网站“9号学院”的产品功能整理、框架设计、原型与交互设计。"
                  ]
                }
              ]
            },
            {
              name: "福建纵腾网络有限公司",
              startTime: "2014/10",
              endTime: "2016/03",
              detail: [
                {
                  name: "工作内容：",
                  data: [
                    "负责公司电商网站及各类促销活动主页视觉设计和前端切图。负责各类产品banner设计。",
                    "负责儿Tmart网站、WLP网站及ebay店铺等网站的首页banner设计、活动banner设计、主图设计、活动页面设计、店铺设计。",
                    "接手中邮海外购网站、海淘乐网站改版设计及前静态页面输出。"
                  ]
                }
              ]
            }
          ]
        },
        project: {
          name: "项目经验",
          data: [
            {
              name: "项目一、佛教资讯网站“菩提树下”",
              startTime: "2017/04",
              endTime: "2017/12",
              detail: [
                {
                  name: "所属公司：福建省创科讯达通信科技有限公司"
                },
                {
                  name: "项目内容：",
                  data: [
                    "一个佛教资讯网站，与各大寺庙合作，意在传播佛教文化。包含新闻、寺庙、高僧大德、法会活动、图书馆、禅学素斋等栏目。用户查看相关资讯的同时，还可以分享发布自己看到的相关文章。同时与寺庙合作，提供5套寺庙网站模板，欢迎寺庙入驻。"
                  ]
                },
                {
                  name: "责任描述：",
                  data: [
                    "独立完成“菩提树下”PC端和微信端产品原型与交互设计、视觉设计、静态页面输出。"
                  ]
                }
              ],
              items: [
                {
                  src: './static/project-1/big/01.jpg',
                  thumbnail: './static/project-1/sml/01.jpg',
                  w: 1200,
                  h: 2588
                },
                {
                  src: './static/project-1/big/02.jpg',
                  thumbnail: './static/project-1/sml/02.jpg',
                  w: 1200,
                  h: 2180
                },
                {
                  src: './static/project-1/big/03.jpg',
                  thumbnail: './static/project-1/sml/03.jpg',
                  w: 1200,
                  h: 1901
                },
                {
                  src: './static/project-1/big/04.jpg',
                  thumbnail: './static/project-1/sml/04.jpg',
                  w: 1200,
                  h: 2757
                },
                {
                  src: './static/project-1/big/05.jpg',
                  thumbnail: './static/project-1/sml/05.jpg',
                  w: 1200,
                  h: 2337
                },
                {
                  src: './static/project-1/big/06.jpg',
                  thumbnail: './static/project-1/sml/06.jpg',
                  w: 1200,
                  h: 2474
                },
                {
                  src: './static/project-1/big/07.jpg',
                  thumbnail: './static/project-1/sml/07.jpg',
                  w: 1200,
                  h: 2334
                },
                {
                  src: './static/project-1/big/08.jpg',
                  thumbnail: './static/project-1/sml/08.jpg',
                  w: 1200,
                  h: 1745
                },
                {
                  src: './static/project-1/big/09.jpg',
                  thumbnail: './static/project-1/sml/09.jpg',
                  w: 1200,
                  h: 2650
                },
                {
                  src: './static/project-1/big/10.jpg',
                  thumbnail: './static/project-1/sml/10.jpg',
                  w: 1200,
                  h: 2245
                },
                {
                  src: './static/project-1/big/11.jpg',
                  thumbnail: './static/project-1/sml/11.jpg',
                  w: 1200,
                  h: 1595
                },
                {
                  src: './static/project-1/big/12.jpg',
                  thumbnail: './static/project-1/sml/12.jpg',
                  w: 1200,
                  h: 1475
                },
                {
                  src: './static/project-1/big/13.jpg',
                  thumbnail: './static/project-1/sml/13.jpg',
                  w: 1200,
                  h: 1724
                },
                {
                  src: './static/project-1/big/14.jpg',
                  thumbnail: './static/project-1/sml/14.jpg',
                  w: 1200,
                  h: 881
                },
              ]
            },
            {
              name: "项目二、中老年人体征监测手表项目",
              startTime: "2016/09",
              endTime: "2017/12",
              detail: [
                {
                  name: "所属公司：福建省创科讯达通信科技有限公司"
                },
                {
                  name: "项目内容：",
                  data: [
                    "一款专为中老年人设计的体征监测手表，包含血压监测、血氧监测、心率监测、运动轨迹、一键呼救、拨打电话、久坐提醒、喝水提醒、吃药提醒、智能定位等功能。",
                    "考虑到产品的营销运营，先后设计了智慧养老院微信服务号、养老院小程序、个人用户使用的微信服务号版本。"
                  ]
                },
                {
                  name: "责任描述：",
                  data: [
                    "独立完成该产品的功能整理、框架设计、原型与交互设计，视觉设计及微信端页面和小程序的静态页面输出。"
                  ]
                }
              ],
              items: [
                {
                  src: './static/project-2/big/01.jpg',
                  thumbnail: './static/project-2/sml/01.jpg',
                  w: 750,
                  h: 1334
                },
                {
                  src: './static/project-2/big/02.jpg',
                  thumbnail: './static/project-2/sml/02.jpg',
                  w: 750,
                  h: 1334
                },
                {
                  src: './static/project-2/big/03.jpg',
                  thumbnail: './static/project-2/sml/03.jpg',
                  w: 750,
                  h: 1334
                },
                {
                  src: './static/project-2/big/04.jpg',
                  thumbnail: './static/project-2/sml/04.jpg',
                  w: 750,
                  h: 1334
                },
                {
                  src: './static/project-2/big/05.jpg',
                  thumbnail: './static/project-2/sml/05.jpg',
                  w: 750,
                  h: 1334
                },
                {
                  src: './static/project-2/big/06.jpg',
                  thumbnail: './static/project-2/sml/06.jpg',
                  w: 750,
                  h: 1334
                },
                {
                  src: './static/project-2/big/07.jpg',
                  thumbnail: './static/project-2/sml/07.jpg',
                  w: 750,
                  h: 1334
                },
                {
                  src: './static/project-2/big/08.jpg',
                  thumbnail: './static/project-2/sml/08.jpg',
                  w: 750,
                  h: 1334
                },
                {
                  src: './static/project-2/big/09.jpg',
                  thumbnail: './static/project-2/sml/09.jpg',
                  w: 750,
                  h: 1334
                },
                {
                  src: './static/project-2/big/10.jpg',
                  thumbnail: './static/project-2/sml/10.jpg',
                  w: 750,
                  h: 1334
                },
                {
                  src: './static/project-2/big/11.jpg',
                  thumbnail: './static/project-2/sml/11.jpg',
                  w: 750,
                  h: 1334
                },
                {
                  src: './static/project-2/big/12.jpg',
                  thumbnail: './static/project-2/sml/12.jpg',
                  w: 750,
                  h: 1334
                },
                {
                  src: './static/project-2/big/13.jpg',
                  thumbnail: './static/project-2/sml/13.jpg',
                  w: 750,
                  h: 1334
                },
                {
                  src: './static/project-2/big/14.jpg',
                  thumbnail: './static/project-2/sml/14.jpg',
                  w: 750,
                  h: 1334
                },
                {
                  src: './static/project-2/big/15.jpg',
                  thumbnail: './static/project-2/sml/15.jpg',
                  w: 750,
                  h: 1334
                },
                {
                  src: './static/project-2/big/16.jpg',
                  thumbnail: './static/project-2/sml/16.jpg',
                  w: 750,
                  h: 1334
                },
              ]
            }
          ]
        }
      },
      resumeNode: {
        className: '.resume',
        theme: 'orange'
      }
    }
  },
}
</script>
