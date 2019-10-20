<template>
  <div class="movie_body">
    <ul>
      <li>
        <div class="pic_show">
          <img src="/images/1.png" alt />
        </div>
        <div class="info_list">
          <h2>无名</h2>
          <p>
            观众评分：
            <span class="grade">9.2</span>
          </p>
          <p>主演：某人</p>
          <p>今天播放好多次aaaaaaaaaaa</p>
        </div>
        <div class="btn_mall">购票</div>
      </li>
      <li>
        <div class="pic_show">
          <img src="/images/1.png" alt />
        </div>
        <div class="info_list">
          <h2>无名</h2>
          <p>
            观众评分：
            <span class="grade">9.2</span>
          </p>
          <p>主演：某人</p>
          <p>今天播放好多次aaaaaaaaaaa</p>
        </div>
        <div class="btn_mall">购票</div>
      </li>
      <li>
        <div class="pic_show">
          <img src="/images/1.png" alt />
        </div>
        <div class="info_list">
          <h2>无名</h2>
          <p>
            观众评分：
            <span class="grade">9.2</span>
          </p>
          <p>主演：某人</p>
          <p>今天播放好多次aaaaaaaaaaa</p>
        </div>
        <div class="btn_mall">购票</div>
      </li>
      <li>
        <div class="pic_show">
          <img src="/images/1.png" alt />
        </div>
        <div class="info_list">
          <h2>无名</h2>
          <p>
            观众评分：
            <span class="grade">9.2</span>
          </p>
          <p>主演：某人</p>
          <p>今天播放好多次aaaaaaaaaaa</p>
        </div>
        <div class="btn_mall">购票</div>
      </li>
      <li>
        <div class="pic_show">
          <img src="/images/1.png" alt />
        </div>
        <div class="info_list">
          <h2>无名</h2>
          <p>
            观众评分：
            <span class="grade">9.2</span>
          </p>
          <p>主演：某人</p>
          <p>今天播放好多次aaaaaaaaaaa</p>
        </div>
        <div class="btn_mall">购票</div>
      </li>
      <li>
        <div class="pic_show">
          <img src="/images/1.png" alt />
        </div>
        <div class="info_list">
          <h2>无名</h2>
          <p>
            观众评分：
            <span class="grade">9.2</span>
          </p>
          <p>主演：某人</p>
          <p>今天播放好多次aaaaaaaaaaa</p>
        </div>
        <div class="btn_mall">购票</div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.movie_body {
  display: flex;
  overflow: auto;
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
</style>