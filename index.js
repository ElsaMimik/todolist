var React=require("react");
var runtime=require("ksana2015-webruntime");
runtime.boot("todolist",function(){
	ksana.runtime=runtime;
	var Main=React.createElement(require("./src/main.jsx"));
	ksana.mainComponent=React.render(Main,document.getElementById("main"));
});