<template>
  <div id="main">
    <Header title="猫咪影院"/>
    <Clist/>
    <TabBar/>
  </div>
</template>
<script>
import Header from "@/components/Header"
import TabBar from "@/components/TabBar"
import Clist from "@/components/Clist"
export default {
  components:{
    Header,
    TabBar,
    Clist
  }
}
</script>