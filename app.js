// import React, {useState} from 'react';

// function GroceryListItem (props) {
//   const [state, setState]=useState(false);

//    function handleClick() {
//     setState(true);
//    }

//     return (
//     <li style={{ fontWeight: state ? "bold" : 'none' }} onMouseEnter={handleClick}>{props.item}</li>
//   )
// }

//   var GroceryList = (props) => (
//     <ul>
//       {props.items.map(item =>
//         <GroceryListItem item={item} />
//       )}
//     </ul>
//   );

//   var App = () => (
//     <div>
//       <h2>Grocery List</h2>
//       <GroceryList items={['Cucumbers', 'Kale']}/>
//     </div>
//   );




// ReactDOM.render(<App />, document.getElementById('app'))

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      on: false
    }
  }

  mouseOver = () => {
    setState({on: !this.state.on})
  }

  render () {

    var style = {fontWeight: this.state.on ? 'bold' : 'normal'}

    return (
      <li style={style} onMouseOver={this.mouseOver.bind(this)} onMouseOut={this.mouseOver.bind(this)}>{this.props.eachItem}</li>
    )
  }
}

var GroceryList = () => {
  return (
    <ul>
      {props.list.map(item=>{
        <GroceryListItem eachItem={item} />
      })}
    </ul>
  )
}

var App = () => {
  return (
    <div>
      <h1>Grocery List</h1>
      <GroceryList list={['Cucumbers', 'Kale']} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));


