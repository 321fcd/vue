Vue.component("custom-sousuo",{
    props:["state","title"],
    template:` <div class="select-input">
               <input type="text" @focus="focus" v-model="title">
           </div>`,
    methods:{
        focus(){
            this.$emit("sousuoli");
        }
    }
})

Vue.component("custom-list",{
    props:["listData","state","color"],
    template:`<ul class="select-list" v-show="state==true" :style="{color:color}">
               <li v-for="item in listData" @click="click(item.title)">{{item.title}}</li>
           </ul>`,
    methods:{
        click(val){
            this.$emit("listli",val);
        }
    }
})