
var Maths=Vue.component("Maths",{
    template:`
        <div class="box">
            <!--<div class="dao">导航</div>-->
            <div class="oo">
                <div class="left">
                    <router-view name="left"> 
                    </router-view>
                </div>
                <div class="right">
                    <router-view name="right"> 
                    </router-view>
                </div>
            </div>
        </div>
    `,
})

var left=Vue.component("left",{
    data(){
      return {
          menu:[

          ]
      }
    },

    computed:{
        data(){
            var arr=[];
            for(var i in this.menu){
                if(this.menu[i].pid==0){
                    var obj=this.menu[i];
                    arr.push(obj);
                }else{
                    for(var j in arr){
                        if(this.menu[i].pid==arr[j].id){
                            if(arr[j].child){
                                arr[j].child.push(this.menu[i]);
                            }else{
                                arr[j].child=[];
                                arr[j].child.push(this.menu[i]);
                            }
                        }
                    }
                }
            }
            return arr;
        }
    },
    created(){
        fetch("./demo.txt").then(function(e){
            return e.json();
        }).then((e)=>{
            this.menu=e;
        })
    },

    methods:{
    },
    template:`
        <div> 
            <ul>
                <div v-for="item in data"> 
                    <li> 
                        <router-link :to="'#'+item.id"> 
                        {{item.title}}
                        </router-link>  
                    </li>
                    <ul> 
                        <li v-for="item1 in item.child"> 
                            <router-link :to="'#'+item1.id"> 
                            {{item1.title}}
                            </router-link>
                        </li>
                    </ul>
                </div> 
            </ul>  
        </div>
    `,
    watch:{
        $route(){
            var num = this.$route.hash.slice(1);
            if(num=null){

            }
        }
    }
})

var right=Vue.component("right",{
    data(){
        return {
            data:""
        }
    },
    template:`
        <div class="markdown-body"> 
            <div v-html="data"> 
                
            </div>
        </div>
    `,
    created(){
        fetch("./neirong.txt").then(function(e){
            return e.text();
        }).then((e)=>{
            this.data=e;
        })
    },
    watch:{
        $route(){
            var num="#a"+this.$route.hash.slice(1);
            var pos=document.querySelector(num).offsetTop-50;
            function animate () {
                if (TWEEN.update()) {
                    requestAnimationFrame(animate)
                }
            }
            new TWEEN.Tween({ number:  document.querySelector(".right").scrollTop })
                .easing(TWEEN.Easing.Quadratic.Out)
                .to({ number: pos }, 500)
                .onUpdate(function () {
                    document.querySelector(".right").scrollTop = this.number.toFixed(0)
                })
                .start()
            animate();
        }
    }

})

var Quick1=Vue.component("Quick1",{
    data(){
      return {
        data:"quickquickquickquickquickquickquickquickquickquickquic"
      }
    },
    template:`
        <div class="box" style="border:2px solid red;height:400px">
            {{data}}
        </div>
    `
})


