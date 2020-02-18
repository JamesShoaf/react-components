// TODO

// var GroceryListItem = (props) => (
//     <li>{ props.item }</li>
// );

// var GroceryList = (props) => (
//     <ul>
//         <GroceryListItem item={props.groceryItems[0]} />
//         <GroceryListItem item={props.groceryItems[1]} />
//     </ul>
// );

// var App = () => (
//     <div>
//         <div>My Grocery List</div>
//         <GroceryList groceryItems={['Milk', 'Eggs']}/>
//     </div>
// );
// ReactDOM.render(<App />, document.getElementById("app"));

class GroceryListItem extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          hover: false
      }
  }
  
//   onListItemClick() {
//       this.setState({
//           outOfStock: !this.state.outOfStock
//       });
//   }
//  onClick={this.onListItemClick.bind(this)}

  onListItemMouseEnter() {
    this.setState({
      hover:true
    });
    console.log(this.state.hover);
  }
  
  onListItemMouseLeave() {
    this.setState({
      hover:false
    });
    // console.log('I miss u')
    console.log(this.state.hover);
  }

  render() {
      var style = {
          fontWeight: this.state.hover ? 'bold' : 'normal'
      }

      return (
      <li style={style} onMouseOver={this.onListItemMouseEnter.bind(this)} onMouseLeave={this.onListItemMouseLeave.bind(this)}>{this.props.item}</li>
      );
  }
}

var GroceryList = (props) => (
    <ul>
        {props.groceryItems.map(item => 
            <GroceryListItem item = {item} />
        )}
    </ul>
);

var App = () => (
    <div>
        <div>My Grocery List</div>
        <GroceryList groceryItems={['Milk', 'Eggs']}/>
    </div>
);
ReactDOM.render(<App />, document.getElementById("app"));

//Warning: Each child in an array or iterator should have a unique "key" prop. Check the render method of `GroceryList`. See https://fb.me/react-warning-keys for more information.