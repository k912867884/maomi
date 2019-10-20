<template>
  <div id="main">
    <Header title="我的猫咪"/>
    <Login/>
    <TabBar/>
  </div>
</template>
<script>
import Header from "@/components/Header"
import TabBar from "@/components/TabBar"
import Login from "@/components/Login"
export default {
  components:{
    Header,
    TabBar,
    Login
  }
}
</script>