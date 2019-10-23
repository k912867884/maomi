<template>
  <div id="detail">
    <Header title="影片详情">
      <span id="sp" @touchstart="handletoBack">返回</span>
    </Header>
    <div id="content" class="contentDetail">
      <div class="detail_bg"></div>
      <div class="detail_filter"></div>
      <div class="detail_content">
        <div class="detail_img">
          <img :src="detailMovie.img | setWH('140.200')" alt />
        </div>
        <div class="detail_info">
          <h2 v-text="detailMovie.nm"></h2>
          <p v-text="detailMovie.em"></p>
          <p v-text="detailMovie.enm"></p>
          <p>评分：{{detailMovie.sc}}</p>
          <p v-text="detailMovie.cat"></p>
          <p>{{detailMovie.src}}/{{detailMovie.dur}}分钟</p>
          <p v-text="detailMovie.pubDesc"></p>
        </div>
      </div>
      <div class="detai_intro">
        <p v-text="detailMovie.dra"></p>
      </div>
      <div class="detail_ul">
        <ul>
          <li v-for="(item,index) in detailMovie.photos" :key="index">
            <img :src="item | setWH('350.180')">
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header";
export default {
  data() {
    return {
      detailMovie: {}
    };
  },
  components: {
    Header
  },
  props: ["movieId"],
  methods: {
    handletoBack() {
      this.$router.back();
    }
  },
  mounted() {
    // console.log(this.movieId);
    this.axios.get("/api/detailmovie?movieId=" + this.movieId).then(res => {
      var msg = res.data.msg;
      if (msg === "ok") {
        this.detailMovie = res.data.data.detailMovie;
      }
    });
  }
};
</script>
<style scoped>
#detail {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 100;
  min-height: 100%;
  background: white;
}
#sp {
  font-size: 20px;
  position: absolute;
  left: 10px;
}
#detail .detail_content {
  height: 195px;
  background: #ccc;
  display: flex;
  padding: 20px;
}
.detail_content .detail_img {
  box-shadow: 10px 10px 10px;
}
.detail_content .detail_info {
  margin: 10px 0 0 30px;
}
.detail_content .detail_info p {
  margin: 5px 0;
}
.detai_intro p{
  padding:10px;
}
.detail_ul ul{
  display:flex;
  flex-wrap:wrap;
}
.detail_ul ul>li{padding:3px;margin:20px auto;box-shadow:black 0 0 10px 1px;}
.detail_ul ul>li>img{width:100%;height:180px;}
</style>