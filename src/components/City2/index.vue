<template>
  <div class="movie_body" ref="movie_body">
    <ul>
      <li class="pullDown" v-text="pullDownMsg"></li>
      <li v-for="item in movieList" :key="item.id">
        <div class="pic_show" @tap="handleToDetail">
          <img :src="item.img | setWH('128.180')"/>
        </div>
        <div class="info_list">
          <h2 v-text="item.nm"></h2><img v-if="item.version" src="@/assets/3d.jpg" alt="">
          <p>
            观众评分：
            <span class="grade" v-text="item.sc"></span>
          </p>
          <p>主演：<span v-text="item.star"></span></p>
          <p v-text="item.showInfo"></p>
        </div>
        <div class="btn_mall">购票</div>
      </li>
    </ul>
  </div>
</template>
<script>
import BScroll from 'better-scroll';
export default {
  data() {
    return {
      movieList: [],
      pullDownMsg:""
    };
  },
  methods:{
    handleToDetail(){
      console.log(123);
    }
  },
  mounted() {
    this.axios.get("/api/movieOnInfoList?cityId=2").then(res => {
      var msg = res.data.msg;
      if (msg === "ok") {
        this.movieList = res.data.data.movieList;
        this.$nextTick(()=>{
          var scroll = new BScroll(this.$refs.movie_body,{tap:true,probeType:1})
          scroll.on('scroll',(pos)=>{
            if(pos.y > 30){
              this.pullDownMsg="努力更新中"
            }
          });
          scroll.on('touchEnd',(pos)=>{
            if(pos.y >30){
              this.axios.get("/api/movieOnInfoList?cityId=6").then(res => {
                 var msg = res.data.msg;
                   if (msg === "ok") {
                    this.pullDownMsg='更新成功'
                    setTimeout(()=>{
                      this.movieList = res.data.data.movieList;
                      this.pullDownMsg ='';
                    },1000)
                  
                  }
              })
            }
          })
        })
      }
    });
  }
};
</script>
<style scoped>
.movie_body {
  width:100%;
  position:absolute;top:90px;bottom:60px;overflow: auto;
}
.movie_body ul {
  margin: 0 12px;
  overflow: hidden;
}
.movie_body ul li {
  margin-top: 20px;
  display: flex;
  align-items: center;
}
.pic_show {
  height: 90px;
  width: 64px;
}
.pic_show img {
  width: 100%;
}
.movie_body .info_list {
  margin-left: 15px;
  position: relative;
}
.movie_body .info_list h2 {
  font-size: 17px;
  line-height: 24px;
  width: 150px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.movie_body .info_list p {
  font-size: 13px;
  color: #666;
  line-height: 22px;
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.movie_body .info_list .grade {
  font-weight: 700;
  color: #f40;
  font-size: 15px;
}
.movie_body .info_list img {
  width: 50px;
  position: absolute;
  top: 5px;
  right: 10px;
}
.movie_body .btn_mall {
  width: 48px;
  height: 27px;
  line-height: 27px;
  text-align: center;
  background-color: #f40;
  margin-left: 23px;
}
.movie_body .pullDown{
  margin:0;padding:0;border:none;
}
</style>