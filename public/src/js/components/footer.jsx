var React = require('react');
var Foundation = require ("../../scss/style.scss");

var Footer = React.createClass({
	render: function() {
		return (
          	<div className="footer">
          		<span className="footer-list">
          			<a href="https://github.com/spartaglobal/" target="_blank"><i className="fa fa-github fa-2x"></i></a>
          			<a href="https://www.linkedin.com/company/sparta-global/" target="_blank"><i className="fa fa-linkedin fa-2x"></i></a>
          			<a href="https://www.instagram.com/spartaglobal/" target="_blank"><i className="fa fa-instagram fa-2x"></i></a>
          			<a href="https://twitter.com/SpartaGlobal/" target="_blank"><i className="fa fa-twitter fa-2x"></i></a>
          			<a href="https://www.facebook.com/spartaglobal/" target="_blank"><i className="fa fa-facebook fa-2x"></i></a>
            	   <div>
                  <a className="cprt">Copyright &copy; 2016 Sparta Global</a>
                </div>
              </span>
            </div>
            );
	}
})

module.exports = Footer;
