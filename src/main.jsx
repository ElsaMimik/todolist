var React=require("react");
var Controls=require("./controls.jsx");
var Listview=require("./listview.jsx");
var Status=require("./status.jsx");
var Maincomponent = React.createClass({
  render: function() {
    return <div>
      <Controls/>
      <Listview/>
      <Status />
    </div>;
  }
});
module.exports=Maincomponent;