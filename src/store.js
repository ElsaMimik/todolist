var Reflux=require("reflux");
var actions=require("./actions");
var store=Reflux.createStore({
	listenables:actions
	,data:[]
	,onAdd:function(item) {
		//console.log(item);
		this.data.push({caption:item,done:false});
		this.trigger(this.data);
	}
	,onClear:function() {
		this.data=this.data.filter(function(item){
			return !item.done;
		});
		this.trigger(this.data);
	}
	,onToggle:function(itemidx){
		this.data[itemidx].done=!this.data[itemidx].done;
		this.trigger(this.data);
	}
});

module.exports=store;