<template>
  <div class="search_body">
    <div class="search_input">
      <div class="search">
        <div class="search_input_wrapper">
          <i class="iconfont icon-sousuo"></i>
          <input type="text" v-model="message" />
        </div>
      </div>
      <div class="search_result">
        <h3>电影/电视剧/综艺</h3>
        <ul>
          <li v-for="item in moviesList" :key="item.id">
            <div class="img">
              <img :src="item.img | setWH('128.180')" />
            </div>
            <div class="info">
              <p>
                <span v-text="item.nm"></span>
                <span v-text="item.sc"></span>
              </p>
              <p v-text="item.enm"></p>
              <p v-text="item.cat"></p>
              <p v-text="item.rt"></p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: "",
      moviesList: []
    };
  },
  methods: {
    cancelRequest() {
      if (typeof this.source === "function") {
        this.source("终止请求");
      }
    }
  },
  watch: {
    message(newVal) {
      this.cancelRequest();
      this.axios.get
        ("/api/searchList?cityId=10&kw=" + newVal, {
          cancelToken: new this.axios.CancelToken((c)=>{
            this.source = c;
          })
        })
        .then(res => {
          var msg = res.data.msg;
          var movies = res.data.data.movies;
          if (msg && movies) {
            this.moviesList = movies.list;
          }
        })
        .catch(err => {
          if (this.axios.isCancel(err)) {
            console.log("Rquest canceled", err.message); //请求如果被取消，这里是返回取消的message
          } else {
            //handle error
            console.log(err);
          }
        });
    }
  }
};
</script>
<style  scoped>
.search_body {
  overflow: auto;
}
.search_body .search_input {
  background-color: #f5f5f5;
  border-bottom: 1px solid #e5e5e5;
}
.search_body .search_result {
  overflow: auto;
  position: absolute;
  top: 150px;
  bottom: 45px;
  width: 100%;
}

.search_body .search_input_wrapper {
  background-color: #e5e5e5;
  padding: 10px 25px;
  position: relative;
}
.search .search_input_wrapper i {
  font-size: 20px;
  position: absolute;
  left: 30px;
  top: 15px;
  font-weight: bold;
  color: #a2a2a2;
  z-index: 1;
}
.search .search_input_wrapper input {
  width: 100%;
  height: 30px;
  border: none;
  padding-left: 30px;
}
.search_body .search_result h3 {
  font-size: 15px;
  color: #434343;
  height: 35px;
  line-height: 35px;
  padding-left: 5px;
  color: #a3a3a3;
  border-bottom: 1px solid #e5e5e5;
}
.search_body .search_result li {
  display: flex;
  color: #787878;
  border-bottom: 1px solid #a5a5a5;
  padding: 10px 15px;
  display: flex;
  box-sizing: border-box;
}
.search_body .search_result .info {
  margin-left: 10px;
  margin-top: 10px;
}
.search_body .info p {
  height: 22px;
  display: flex;
  line-height: 22px;
  font-size: 16px;
  margin-bottom: 10px;
  justify-content: space-between;
  width: 100%;
}
.info p:nth-of-type(1) span:nth-of-type(1) {
  font-size: 18px;
  color: black;
  font-weight: bold;
}
.info p:nth-of-type(1) span:nth-of-type(2) {
  font-size: 16px;
  color: #fc7183;
}
.info p:nth-of-type(2){
  width:200px;
  white-space: nowrap;overflow:hidden;text-overflow:ellipsis;
}
.info p:nth-of-type(3) {
  font-size: 16px;
  color: black;
}
</style>