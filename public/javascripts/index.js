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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSSxZQUFZLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7O0FBQ2pDLGNBQVUsRUFBRSxvQkFBUyxLQUFLLEVBQUM7QUFDdkIsWUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUM7QUFDMUMsbUJBQVcsR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBSSxFQUFLO0FBQ3ZDLG1CQUFPLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQ3hCLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDcEQsQ0FBQyxDQUFDO0FBQ0gsWUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLEtBQUssRUFBRSxXQUFXLEVBQUMsQ0FBQyxDQUFDO0tBQ3ZDO0FBQ0QsbUJBQWUsRUFBRSwyQkFBVTtBQUN2QixlQUFPO0FBQ0gsd0JBQVksRUFBRSxDQUNWLFFBQVEsRUFDUixVQUFVLEVBQ1YsU0FBUyxFQUNULE1BQU0sRUFDTixNQUFNLEVBQ04sTUFBTSxFQUNOLFNBQVMsRUFDVCxhQUFhLENBQ2hCO0FBQ0QsaUJBQUssRUFBRSxFQUFFO1NBQ1osQ0FBQTtLQUNKO0FBQ0Qsc0JBQWtCLEVBQUUsOEJBQVU7QUFDMUIsWUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBQyxDQUFDLENBQUE7S0FDbEQ7QUFDRCxVQUFNLEVBQUUsa0JBQVU7QUFDZCxlQUNJOztjQUFLLFNBQVMsRUFBQyxhQUFhO1lBQ3hCLCtCQUFPLElBQUksRUFBQyxNQUFNLEVBQUMsV0FBVyxFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFVBQVUsR0FBRztZQUNwRSxvQkFBQyxJQUFJLElBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHO1NBQzlCLENBQ1I7S0FDTDtDQUNKLENBQUMsQ0FBQzs7QUFFSCxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDOzs7QUFDekIsVUFBTSxFQUFFLGtCQUFVO0FBQ2QsZUFDSTs7O1lBRUYsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBSSxFQUFLO0FBQzNCLHVCQUFPOztzQkFBSSxHQUFHLEVBQUUsSUFBSTtvQkFBRyxJQUFJO2lCQUFNLENBQUE7YUFDcEMsQ0FBQztTQUVLLENBQ1I7S0FDSjtDQUNKLENBQUMsQ0FBQzs7QUFFSCxLQUFLLENBQUMsTUFBTSxDQUFDLG9CQUFDLFlBQVksT0FBRSxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBGaWx0ZXJlZExpc3QgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgZmlsdGVyTGlzdDogZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICB2YXIgdXBkYXRlZExpc3QgPSB0aGlzLnN0YXRlLmluaXRpYWxJdGVtcztcbiAgICAgICAgdXBkYXRlZExpc3QgPSB1cGRhdGVkTGlzdC5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtLnRvTG93ZXJDYXNlKCkuc2VhcmNoKFxuICAgICAgICAgICAgICAgICAgICBldmVudC50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKSkgIT09IC0xO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXRlbXM6IHVwZGF0ZWRMaXN0fSk7XG4gICAgfSxcbiAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpbml0aWFsSXRlbXM6IFtcbiAgICAgICAgICAgICAgICBcIkFwcGxlc1wiLFxuICAgICAgICAgICAgICAgIFwiQnJvY2NvbGlcIixcbiAgICAgICAgICAgICAgICBcIkNoaWNrZW5cIixcbiAgICAgICAgICAgICAgICBcIkR1Y2tcIixcbiAgICAgICAgICAgICAgICBcIkVnZ3NcIixcbiAgICAgICAgICAgICAgICBcIkZpc2hcIixcbiAgICAgICAgICAgICAgICBcIkdyYW5vbGFcIixcbiAgICAgICAgICAgICAgICBcIkhhc2ggQnJvd25zXCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBpdGVtczogW11cbiAgICAgICAgfVxuICAgIH0sXG4gICAgY29tcG9uZW50V2lsbE1vdW50OiBmdW5jdGlvbigpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtpdGVtczogdGhpcy5zdGF0ZS5pbml0aWFsSXRlbXN9KVxuICAgIH0sXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItbGlzdFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgb25DaGFuZ2U9e3RoaXMuZmlsdGVyTGlzdH0vPlxuICAgICAgICAgICAgICAgIDxMaXN0IGl0ZW1zPXt0aGlzLnN0YXRlLml0ZW1zfS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59KTtcblxudmFyIExpc3QgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgcmVuZGVyOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHVsPlxuICAgICAge1xuICAgICAgICAgIHRoaXMucHJvcHMuaXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtpdGVtfT57aXRlbX08L2xpPlxuICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgKVxuICAgIH1cbn0pO1xuXG5SZWFjdC5yZW5kZXIoPEZpbHRlcmVkTGlzdC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW91bnQtcG9pbnQnKSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=