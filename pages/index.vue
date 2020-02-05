<template>
  <div class="home">
    <ul>
      <li
        v-for="(item,index) in navList"
        :class="{active_border:active==index}"
        @click="toggleMenu(index,item)"
        :key="index"
      >
        <a href="javascript:;">{{item.name}}</a>
      </li>
    </ul>
  </div>
</template>
<script>
import { topics } from '@/http'
export default {
  name: 'home',
  // middleware: 'authorities',
  data () {
    return {
      active: 0,
      navList: [
        {
          name: '首页'
        },
        {
          name: '新闻'
        },
        {
          name: '关于'
        }
      ],
      params: {
        page: 1,
        tab: 'job',
        limit: 1
      }
    }
  },
  created () {
    this.sum()
  },
  mounted () {

  },
  methods: {
    toggleMenu (index, item) {
      this.active = index;
    },
    sum () {
      topics(this.params).then(res => {
        console.log(res)
      }).catch(error => {
        console.log(error)
      })
    }
  },
  watch: {

  },
}
</script>
<style lang="css" scoped>
ul {
  display: flex;
}
li {
  flex: 1;
  text-align: center;
  line-height: 80px;
}
</style>