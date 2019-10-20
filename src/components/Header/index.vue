<template>
  <header id="header">
    <h2 v-text="title"></h2>
  </header>
</template>
<script>
export default {
  props:{
    title:{
      type:String,
      default:"猫咪电影"
    }
  }
}
</script>
<style scoped>
#header{
  width:100%;height:50px;color:#fff;background-color:#f40;
  text-align:center;line-height:50px;font-size:15px;
}
</style>