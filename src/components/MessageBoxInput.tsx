import * as React from 'react'
import Message from '../shared/message.interface';
import '../style/MessageBoxInput.css'

interface Props {
  addMessage: (message: Message) => void
}

interface State {
  input: string,
}

class MessageBoxInput extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      input: '',
    }
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ input: event.target.value });
  }

  handleClick() {
    if (this.state.input.length === 0) {
        return;
    }
    const message: Message = {
      author: 'Dominique',
      content: this.state.input,
      date: new Date(),
    }
    this.setState({
      input: '',
    })
    this.props.addMessage(message)
  }

  render() {
    return (
      <div className="messagebox_input_container">
        <input
          className="messagebox_input_textinput"
          value={ this.state.input }
          onChange={ (e) => this.handleChange(e) }
        />
        <button
          className="messagebox_input_sendbutton"
          onClick={ () => this.handleClick() }
        >
          Envoyer le message
        </button>
      </div>
    )
  }
}

export default MessageBoxInput
