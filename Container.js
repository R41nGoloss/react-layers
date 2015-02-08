/** @jsx React.DOM */
"use strict";

var React = require('react');
var ContainerMixin = require('./ContainerMixin');

var Container = React.createClass({
  mixins: [ContainerMixin],

  render: function() {
    return (
    	<div {...this.props}>{this.props.children}{this.renderContainer()}</div>
    );
  }
});

module.exports = Container;