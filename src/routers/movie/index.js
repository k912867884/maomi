export default {
  path : '/movie',
  component:() => import('@/views/Movie'),
  children:[
    {
      path:"city",
      component:()=>import("@/components/City")
    },
    {
      path:"city2",
      component:()=>import("@/components/City2")
    },
    {
      path:"city3",
      component:()=>import("@/components/City3")
    },
    {
      path:"city4",
      component:()=>import("@/components/City4")
    },
    {
      path:"/movie",
      redirect:"/movie/city2"
    }
  ]
}