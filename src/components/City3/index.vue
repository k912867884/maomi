<template>
  <div class="movie_body">
    <ul>
      <li v-for="item in comingList" :key="item.id">
        <div class="pic_show">
          <img :src="item.img | setWH('128.180')" />
        </div>
        <div class="info_list">
          <h2 v-text="item.nm"></h2>
          <img v-if="item.version" src="@/assets/3d.jpg" alt="">
          <p>
            <span class="grade" v-text="item.wish"></span>
            人想看
          </p>
          <p>主演：<span v-text="item.star"></span></p>
          <p> <span class="comingTitle" v-text="item.comingTitle"></span> 上映</p>
        </div>
        <div class="btn_mall">预约</div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data(){
    return {
      comingList:[]
    }
  },
  mounted(){
    this.axios.get('/api/movieComingList?cityId=10').then((res)=>{
      var msg = res.data.msg;
      if(msg === 'ok'){
        this.comingList = res.data.data.comingList;
      }
    })
  }
};
</script>
<style scoped>
.movie_body {
 overflow:auto;
 position:absolute;top:90px;bottom:55px;
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
.movie_body .info_list p .comingTitle{
  color:#222;
}
.movie_body .info_list .grade {
  font-weight: 700;
  color: #f40;
  font-size: 15px;
  margin-right:5px;
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
  background-color:lightseagreen;
  margin-left: 23px;
}
</style>