<template>
  <div class="ebook">
    <TitleBar :ifTitileAndMenuShow="ifTitileAndMenuShow" />
    <div class="read-wrapper"
         @click="toggleTitleAndMune">
      <div id="read"></div>
      <div class="mask">
        <div class="left"
             @click="prevPage"></div>
        <div class="center"></div>
        <div class="right"
             @click="nextPage"></div>
      </div>
    </div>
    <MenuBar ref="menuBar"
             :fontSizeList="fontSizeList"
             :ifTitileAndMenuShow="ifTitileAndMenuShow" />
  </div>
</template>

<script>
import TitleBar from '@/components/TitleBar'
import MenuBar from '@/components/MenuBar'
import Epub from 'epubjs'
const DOWNLOAD_URL = '/2018_Book_AgileProcessesInSoftwareEngine.epub'
global.epub = Epub
export default {
  data() {
    return {
      ifTitileAndMenuShow: false,
      fontSizeList: [
        { fontSize: 12 },
        { fontSize: 14 },
        { fontSize: 16 },
        { fontSize: 18 },
        { fontSize: 20 },
        { fontSize: 22 }
      ]
    }
  },
  components: {
    TitleBar,
    MenuBar
  },
  methods: {
    toggleTitleAndMune() {
      this.ifTitileAndMenuShow = !this.ifTitileAndMenuShow
      if (!this.ifTitileAndMenuShow) {
        this.$refs.menuBar.hideSetting()
      }
    },
    prevPage() {
      if (this.rendition) {
        this.rendition.prev()
      }
    },
    nextPage() {
      if (this.rendition) {
        this.rendition.next()
      }
    },
    showEpub() {
      this.book = new Epub(DOWNLOAD_URL)
      this.rendition = this.book.renderTo('read', {
        width: window.innerWidth,
        height: window.innerHeight
      })
      this.rendition.display();
    }
  },
  mounted() {
    this.showEpub()
  }
}
</script>

<style lang="scss">
@import './../assets/styles/global';

.ebook {
  position: relative;

  .read-wrapper {
    .mask {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 100;
      display: flex;
      width: 100%;
      height: 100%;
      .left {
        flex: 0 0 px2rem(100);
      }
      .center {
        flex: 1;
      }
      .right {
        flex: 0 0 px2rem(100);
      }
    }
  }
}
</style>