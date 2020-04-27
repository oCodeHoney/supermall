import { debounce } from "./utils"
import BackTop from "components/content/backTop/BackTop";

export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null
    }
  },
  mounted() {
    // 1. 监听 item 中图片加载完成
    const refresh = debounce(this.$refs.scroll.refresh, 200);

    this.itemImgListener = () => {
      refresh();
    };

    this.$bus.$on("itemImageLoad", this.itemImgListener);

    // console.log('oooooooooooooo');

  }
}

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    listenShowBackTop(position) {
      // 判断 BackTop 是否显示
      this.isShowBackTop = -position.y > 1000;
    }
  }
}