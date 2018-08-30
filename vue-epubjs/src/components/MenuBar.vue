<template>
  <div class="menu-bar">
    <transition name="slide-up">
      <div class="menu-wrapper"
           :class="{'hide-box-shadow':ifSettingShow||!ifTitileAndMenuShow}"
           v-show="ifTitileAndMenuShow">
        <div class="icon-wrapper">
          <span class="icon-menu icon"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-progress icon"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-bright icon"></span>
        </div>
        <div class="icon-wrapper"
             @click="showSetting">
          <span class="icon-a icon">A</span>
        </div>
      </div>
    </transition>
    <transition name="slide-up">
      <div class="setting-wrapper"
           v-show="ifSettingShow">
        <div class="setting-font-size">
          <div class="preview"
               :style="{fontSize:fontSizeList[0].fontSize+'px'}">A</div>
          <div class="select">
            <div class="select-wrapper"
                 v-for="{item,index} in fontSizeList"
                 :key="index">
              <div class="line"></div>
              <div class="point-wrapper">
                <div class="point"></div>
              </div>
              <div class="line"></div>
            </div>
          </div>
          <div class="preview"
               :style="{fontSize:fontSizeList[fontSizeList.length-1].fontSize+'px'}">A</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    ifTitileAndMenuShow: {
      type: Boolean,
      default: false
    },
    fontSizeList: Array
  },
  data() {
    return {
      ifSettingShow: false
    }
  },
  methods: {
    showSetting() {
      this.ifSettingShow = true
    },
    hideSetting() {
      this.ifSettingShow = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import './../assets/styles/global';
.menu-bar {
  .menu-wrapper {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: px2rem(48);
    z-index: 101;
    display: flex;
    background: rgb(255, 255, 255);
    box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, 0.15);
    &.hide-box-shadow {
      box-shadow: none;
    }
    .icon-wrapper {
      flex: 1;
      @include center;
      .icon-progress {
        font-size: px2rem(24);
      }
      .icon-bright {
        font-size: px2rem(24);
      }
    }
  }
  .setting-wrapper {
    position: absolute;
    left: 0;
    bottom: px2rem(48);
    width: 100%;
    height: px2rem(60);
    background: #ffffff;
    box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, 0.15);
    .setting-font-size {
      display: flex;
      height: 100%;
      .preview {
        flex: 0 0 px2rem(40);
        @include center;
      }
      .select {
        display: flex;
        flex: 1;
        .select-wrapper {
          flex: 1;
          display: flex;
          align-items: center;
          &:first-child {
            .line{
              &:first-child{
                border-top: none;
              }
            }
          }
          &:last-child {
            .line{
              &:last-child{
                border-top: none;
              }
            }
          }
          .line {
            flex: 1;
            height: 0;
            border-top: px2rem(1) solid #ccc;
          }
          .point-wrapper {
            flex: 0 0 0;
            width: 0;
            height: px2rem(7);
            border-left: px2rem(1) solid #ccc;
          }
        }
      }
    }
  }
}
</style>