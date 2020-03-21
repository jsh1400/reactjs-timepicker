import React from 'react'
import './App.css'
import JTimePicker from 'reactjs-timepicker'

class App extends React.Component {
  state = {
    inputVisible: false,
    size: 30,
    color: '#000066',
  }

  render () {
    const { inputVisible, color, size } = this.state
    return (
      <div className="App">
        <div className="option">
          <h3>option</h3>
          <hr/>
          <div>
            <label>
              input Visible :
            </label>

            <select value={inputVisible} onChange={(e) => this.setState(
              { inputVisible: e.target.value === 'true' })}>
              <option>true</option>
              <option>false</option>
            </select>
          </div>
          <div>
            <label>
              color :
            </label>
            <input type={'color'} value={color}
                   onChange={(e) => this.setState(
                     { color: e.target.value })}/>
          </div>
          <div>

            <label>
              size :
            </label>
            <input type={'number'} value={size}
                   onChange={(e) => this.setState(
                     { size: e.target.value })}/>
          </div>
        </div>
        <div className="App-header">
          <JTimePicker
            inputVisible={inputVisible}
            color={color}
            size={parseInt(`0${size}`)}
          />
        </div>
      </div>
    )
  }
}

export default App
