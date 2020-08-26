export const state = () => ({
    memo: [],
    page: 0,
})

export const mutatious={
    insert: function(state,obj){
        var d = new Data();
        var fmt =d.grtFullYear()+ '-' + (d.getMouth()+1)
                 + '-' + d.getData() + '-' + d.getHours() + ':'
                 + d.getMinutes();
        state.memo.unshift({
            title: obj.title,
            content: obj.content,
            created: fmt
        });
    },
    set_page: function(state,p){
        state.page = p;
    },
    remove:function(state,obj){
        var num =0;
        for(let i=0;i< state.memo.length;i++){
            const ob =state.memo[i];
            if(ob.title == obj.title
                && ob.content == obj.content
                && ob.created == obj.created){
               alert('remove it! --' + ob.title);
               state.memo.splice(i,1);
               return;
            }
        }
    }
}