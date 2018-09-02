<template>
  <div class="ebook">
    <TitleBar :ifTitileAndMenuShow="ifTitileAndMenuShow" />
    <div class="read-wrapper">
      <div id="read"></div>
      <div class="mask">
        <div class="left"
             @click="prevPage"></div>
        <div class="center"
             @click="toggleTitleAndMune"></div>
        <div class="right"
             @click="nextPage"></div>
      </div>
    </div>
    <MenuBar ref="menuBar"
             :navigation="navigation"
             @jumpTo="jumpTo"
             @onProgressChange="onProgressChange"
             :bookAvailable="bookAvailable"
             @setTheme="setTheme"
             :themeList="themeList"
             :defaultTheme="defaultTheme"
             @setFontSize="setFontSize"
             :fontSizeList="fontSizeList"
             :defaultFontSize="defaultFontSize"
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
      ],
      defaultFontSize: 16,
      themeList: [
        {
          name: 'default',
          style: {
            body: {
              'color': '#000',
              'background': '#fff'
            }
          }
        },
        {
          name: 'eye',
          style: {
            body: {
              'color': '#000',
              'background': '#ceeaba'
            }
          }
        },
        {
          name: 'night',
          style: {
            body: {
              'color': '#fff',
              'background': '#000'
            }
          }
        },
        {
          name: 'gold',
          style: {
            body: {
              'color': '#000',
              'background': 'rgb(241,236,226)'
            }
          }
        }
      ],
      defaultTheme: 0,
      bookAvailable: false
    }
  },
  components: {
    TitleBar,
    MenuBar
  },
  methods: {
    jumpTo(href) {
      this.rendition.display(href)
      this.hideTitleAndMenu()
    },
    hideTitleAndMenu() {
      this.ifTitleAndMenuShow = false
      this.$refs.menuBar.hideSetting()
      this.$refs.menuBar.hideContent()
    },
    onProgressChange(progress) {
      const percentage = progress / 100
      const location = percentage > 0 ? this.locations.cfiFromPercentage(percentage) : 0
      this.rendition.display(location)
    },
    setTheme(index) {
      this.themes.select(this.themeList[index].name)
      this.defaultTheme = index
    },
    registerTheme() {
      this.themeList.forEach(theme => {
        this.themes.register(theme.name, theme.style)
      })
    },
    setFontSize(fontSize) {
      this.defaultFontSize = fontSize
      if (this.themes) {
        this.themes.fontSize(fontSize + 'px')
      }
    },
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
      this.themes = this.rendition.themes
      this.setFontSize(this.defaultFontSize)
      this.registerTheme()
      this.setTheme(this.defaultTheme)
      this.book.ready.then(() => {
        this.navigation = this.book.navigation
        return this.book.locations.generate()
      }).then(() => {
        this.locations = this.book.locations
        this.bookAvailable = true
      })

    },


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