<template>
  <div id="main">
    <Header title="猫咪电影" />
    <div id="content">
      <div class="movie_menu">
        <router-link tag="div" to="/movie/city" class="city_name">
          <span>大连</span>
        </router-link>
        <div class="hot_swtich">
          <router-link tag="div" to="/movie/city2" class="hot_item">正在热映</router-link>
          <router-link tag="div" to="/movie/city3" class="hot_item">即将上映</router-link>
        </div>
        <router-link tag="div" to="/movie/city4" class="search_entry">
          <i class="iconfont icon-sousuo"></i>
        </router-link>
      </div>
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
    <TabBar />
  </div>
</template>
<script>
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";
export default {
  components: {
    Header,
    TabBar
  }
};
</script>
<style scoped>
.hot_item.router-link-active{  color: #f40 !important;
  border-bottom: 2px solid #f40;}
.city_name.router-link-active{ color: #f40;font-size:18px;
  border-bottom: 3px solid #f40;}
.search_entry.router-link-active{
  border-bottom: 3px solid #f40;
}
.movie_menu {
  display: flex;
  width: 100%;
  height: 3rem;
  border: 1px solid #ccc;
  justify-content: space-between;
}
.movie_menu .hot_swtich {
  display: flex;
  justify-content: space-between;
  height: 100%;
  line-height: 3rem;
}
.movie_menu .hot_item {
  margin: 0 20px;
  font-size: 18px;
  font-weight: bold;
  color: #a0a0a0;
}

.movie_menu .city_name {
  height: 100%;
  line-height: 3rem;
  margin-left: 20px;
  box-sizing:border-box;
}
.movie_menu .search_entry {
  margin-right: 20px;
  align-self: center;
  color: #f40;
  height:100%;line-height:55px;
  box-sizing:border-box;
}
.movie_menu .search_entry i {
  font-size: 20px;
  font-weight: bold;
}
</style>