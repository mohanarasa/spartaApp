var React = require("react");

var List = React.createClass({
  handleChange: function(e){
    console.log(e.target.value);
    this.props.add(this.props.name, this.props.index, e.target.value);
  },
  handleRemove: function(){
    this.props.remove(this.props.name, this.props.index);
  },
  render: function(){
    return(
      <div>
      <input type="text" name={this.props.name} placeholder={"Enter value for " + this.props.name} defaultValue={this.props.value} onChange={this.handleChange}/>
      <button type="button" className="alert button" onClick={this.handleRemove}>Remove</button>
      </div>
    )
  }
});

module.exports = List;
