
var router=new VueRouter({
    routes:[
        {
            path:"/",
            component:Maths,
            children:[
                {
                    path:"",
                    components:{
                        left:left,
                        right:right,
                    }
                }
            ]
        },
        {
            path:"/quick1",
            component:Quick1,
        }
    ]
})