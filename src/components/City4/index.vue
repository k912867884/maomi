<template>
  <div class="search_body">
    <div class="search_input">
      <div class="search">
        <div class="search_input_wrapper">
          <i class="iconfont icon-sousuo"></i>
          <input type="text" />
        </div>
      </div>
      <div class="search_result">
        <h3>电影/电视剧/综艺</h3>
        <ul>
          <li>
            <div class="img">
              <img src="/images/1.png" alt />
            </div>
            <div class="info">
              <p>
                <span>无名之辈</span>
                <span>8.5</span>
              </p>
              <p>A ASDLKFJ;</p>
              <p>剧情，喜剧，犯罪</p>
              <p>2018-11-16</p>
            </div>
          </li>
          <li>
            <div class="img">
              <img src="/images/1.png" alt />
            </div>
            <div class="info">
              <p>
                <span>无名之辈</span>
                <span>8.5</span>
              </p>
              <p>A ASDLKFJ;</p>
              <p>剧情，喜剧，犯罪</p>
              <p>2018-11-16</p>
            </div>
          </li>
          <li>
            <div class="img">
              <img src="/images/1.png" alt />
            </div>
            <div class="info">
              <p>
                <span>无名之辈</span>
                <span>8.5</span>
              </p>
              <p>A ASDLKFJ;</p>
              <p>剧情，喜剧，犯罪</p>
              <p>2018-11-16</p>
            </div>
          </li>
          <li>
            <div class="img">
              <img src="/images/1.png" alt />
            </div>
            <div class="info">
              <p>
                <span>无名之辈</span>
                <span>8.5</span>
              </p>
              <p>A ASDLKFJ;</p>
              <p>剧情，喜剧，犯罪</p>
              <p>2018-11-16</p>
            </div>
          </li>
          <li>
            <div class="img">
              <img src="/images/1.png" alt />
            </div>
            <div class="info">
              <p>
                <span>无名之辈</span>
                <span>8.5</span>
              </p>
              <p>A ASDLKFJ;</p>
              <p>剧情，喜剧，犯罪</p>
              <p>2018-11-16</p>
            </div>
          </li>
          <li>
            <div class="img">
              <img src="/images/1.png" alt />
            </div>
            <div class="info">
              <p>
                <span>无名之辈</span>
                <span>8.5</span>
              </p>
              <p>A ASDLKFJ;</p>
              <p>剧情，喜剧，犯罪</p>
              <p>2018-11-16</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style  scoped>
.search_body {
  overflow: auto;
}
.search_body .search_input {
  background-color: #f5f5f5;
  border-bottom: 1px solid #e5e5e5;
}
.search_body .search_result .img img {
  width: 100px;
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
  display:flex;color:#787878;border-bottom:1px solid #a5a5a5;padding:10px 15px;display:flex;
  box-sizing:border-box;
}
.search_body .search_result .info{
  margin-left:10px;
}
.info p{height:22px;display:flex;line-height:22px;font-size:12px;}
.info p:nth-of-type(1) span:nth-of-type(1){font-size:18px;color:black;}
.info p:nth-of-type(1) span:nth-of-type(2){font-size:16px;color:#fc7183;margin-left:120px;}
.info p:nth-of-type(3){font-size:16px;color:black;}
</style>