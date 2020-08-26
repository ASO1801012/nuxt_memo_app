<template>
    <section class="container">
        <h1>Memo</h1>
        <table>
            <tr>
                <th>Title</th>
                <td><input type="text" name="title"
                class="title" size="40" v-model="title" @focus="set_fig">
                    <button @click="find">find</button>
                </td>
            </tr>
            <tr>
                <th>Memo</th>
                <td>
                    <textarea name="content" class="content"
                    cols="50" rows="5" v-model="content">
                    </textarea>
                </td>
            </tr>
            <tr>
                <th></th>
                <td>
                    <button @click="insert">save</button>
                    <transition name="del">
                        <button v-if="set_flg != false">delete</button>
                    </transition>
                </td>
            </tr>
        </table>
    </section>
</template>
<script>
export default {
    data:function(){
        return{
        title:'',
        content:'',
        num_rer_page:7,
        find_flg:false,
        sle_flg:false
        };
    },
    computed:{
        memo:function(){return this.$store.state.memo.memo;},
        page_items:function(){
            if(this.find_flg){
                var arr =[];
                var data = this.$store.state.memo.memo;
                data.forEach(element=>{
                    if(element.title.toLowerCase().indexOf(
                        this.title.toLowerCase())>=0){
                            arr.push(element);
                    }
                });
                return arr;
            }else if(this.sle_flg !=false){
                return [this.sel_flg];
            }else{
                return this.$store.state.memo.slice(
                    this.num_per_page * this.$store.state.memo.page,
                    this.num_per_page * (this.$store.state.memo.page + 1)
                );
            }
        },
        page:{
            get:function(){
                return this.$store.state.memo.page;
            },
            set:function(p){
                var pg = p>
                (this.$store.state.memo.memo.length -1)/this.num_per_page
                ?Math.ceil((this.$store.$state.memo.memo.length -1)/ this.num_per_page) -1 :p;
                pg = pg < 0 ? 0: pg;
                this.$store.commit('memo/set_page',pg);
            }
        }
    }
}
</script>