var obj=new Vue({
    el:"#root",
    data:{
        all:localStorage.todo?JSON.parse(localStorage.todo):[],
        msg:"",
        status:'all',
    },
    methods:{
        add(){
            if(!this.msg){
                alert("请输入内容");
                return;
            }
            var obj1={};
            obj1.title=this.msg;
            obj1.id=Math.random() * new Date().getTime();
            obj1.state=0;
            obj1.edit=true;
            this.all.push(obj1);
            this.msg="";
        },
        changeStatus(val){
            this.status=val;
        },
        changeState(obj1){
            if(obj1.state==0){
                obj1.state=1;
            }else if(obj1.state==1){
                obj1.state=0;
            }
        },
        del(ids){
            this.all=this.all.filter((a)=>{
                if(a.id!==ids){
                    return a;
                }
            })
        },
        edit(obj){
            obj.edit = !obj.edit;
            localStorage.todo=JSON.stringify(this.all);
        }
    },
    computed:{
        datas(){
            return this.all.filter((a)=>{
                if(this.status=='all'){
                    return a;
                }else{
                    return a.state==this.status;
                }
            })
        }
    }
})