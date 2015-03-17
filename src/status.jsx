var React=require("react");
var Reflux=require("reflux");
var store=require("./store");
var Status=React.createClass({
mixins:[Reflux.listenTo(store,"onStore")]
	,getInitialState:function(){
		return {remaining:0};
	}
	,onStore:function(data) {
		var remaining=data.filter(function(item){
			return !item.done
		}).length;
		this.setState({remaining:remaining});
	}	
	,render: function() {
		return <div>
		remaining:{this.state.remaining}
		</div>;
	}
});
module.exports=Status;