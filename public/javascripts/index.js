(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var FilteredList = React.createClass({
    displayName: "FilteredList",

    filterList: function filterList(event) {
        var updatedList = this.state.initialItems;
        updatedList = updatedList.filter(function (item) {
            return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
        });
        this.setState({ items: updatedList });
    },
    getInitialState: function getInitialState() {
        return {
            initialItems: ["Apples", "Broccoli", "Chicken", "Duck", "Eggs", "Fish", "Granola", "Hash Browns"],
            items: []
        };
    },
    componentWillMount: function componentWillMount() {
        this.setState({ items: this.state.initialItems });
    },
    render: function render() {
        return React.createElement(
            "div",
            { className: "filter-list" },
            React.createElement("input", { type: "text", placeholder: "Search", onChange: this.filterList }),
            React.createElement(List, { items: this.state.items })
        );
    }
});

var List = React.createClass({
    displayName: "List",

    render: function render() {
        return React.createElement(
            "ul",
            null,
            this.props.items.map(function (item) {
                return React.createElement(
                    "li",
                    { key: item },
                    item
                );
            })
        );
    }
});

React.render(React.createElement(FilteredList, null), document.getElementById("mount-point"));

},{}]},{},[1])