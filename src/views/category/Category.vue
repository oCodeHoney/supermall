<template>
  <div>
    <h2>分类</h2>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import { backTopMixin } from "common/mixin";

export default {
  name: "Category",
  mixins: [backTopMixin]
};
</script>

<style>
</style>