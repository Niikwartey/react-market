const React = require('react');
const ReactDOM = require('react-dom');

// Storepicker comp
class StorePicker extends React.Component {
  render() {
    let name = "nii"
    return (
      <form className="store-selector">
        {/* add name var */}
        <h2>Please Enter A Store, {name}</h2>
        <input type="text" ref="storeId"/>
        <input type="submit" />
      </form>
    )
  }
}

ReactDOM.render(<StorePicker />, document.querySelector('#main'))
