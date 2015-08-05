var TodoApp = React.createClass({
	getInitialState: function(){
		return {items: []}
	},
	updateItems: function(){
		var allItems = this.state.items.concat([newItem]);
		this.setState({items: allItems});
	},
	render: function(){
		return (
			<TodoHeader/>
			<TodoList items={this.state.items}/>
			<TodoForm onFormSubmit={this.updateItems}/>
		);
	}
})

	var TodoHeader = React.createclass({
		render: function(){
			return (
				<h3>Leedo</h3>
			)
		}
	});

	var TodoList = React.createClass({
		render: function(){
			var createItem = function(itemDescription){
				return (
					<Task>{itemDescription}</Task>
				);
			};
			return <ul>{this.props.items.map(createItem)}</ul>
		}
	});

		var Task = React.createClass({
			render: function(){
				return (
					<li>{this.props.children}</li>
				);
			}
		})

	var TodoForm = React.createClass({
		getInitialState: function(){
			return {item: ''}
		},
		handleSubmit: function(event){
			event.preventDefault();
			this.setState({item: ''});
			React.findDOMNode(this.refs.item).focus();
			return;
		},
		onChange: function(event){
			this.setState(item: event.target.value)
		},
		render: function(){
			return (
				<form onFormSubmit={this.handleSubmit}>
					<input type="text" ref="item" onChange={this.onChange}/>
					<input type="submit" value="new"/>
				</form>
			)
		}
	});

React.render(
	<TodoApp url={}/>,
	document.body
)