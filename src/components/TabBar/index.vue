<template>
  <footer id="footer">
    <ul>
      <router-link tag="li" to="/movie">
        <i class="iconfont icon-dianying"></i>
        <p>电影</p>
      </router-link>
            <router-link tag="li" to="/cinema">
        <i class="iconfont icon-yingyuan"></i>
        <p>影院</p>
      </router-link >
            <router-link tag="li" to="/mine">
        <i class="iconfont icon-wode"></i>
        <p>我的</p>
      </router-link>
    </ul>
  </footer>
</template>
<script>
export default {
  
}
</script>
<style scoped>
#footer{
  width:100%;height:50px;background:#fff;border-top:2px solid #aaa;position:fixed;
  left:0;bottom:0;
}
#footer ul{
  display:flex;text-align:center;height:50px;align-items:center;
}
#footer ul li{
  flex:1;height:40px;
}
#footer ul li.router-link-active{
  color:#f40;
}
#footer ul i{
  font-size:20px;
}
</style>