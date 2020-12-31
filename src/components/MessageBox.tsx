import * as React from 'react'
import MessageBoxInput from './MessageBoxInput';
import MessageBoxMessage from './MessageBoxMessage';
import Message from '../shared/message.interface';
import '../style/MessageBox.css'

interface Props {
}

interface State {
  messages: Array<Message>,
}

class MessageBox extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      messages: [
        {author: 'Dominique', content: 'Content1', date: new Date()},
        {author: 'Dominique', content: 'Content1', date: new Date()},
        {author: 'Dominique', content: 'Content1', date: new Date()},
      ],
    }
  }

  addMessage(message: Message) {
    this.setState({
      messages: [...this.state.messages, message],
    })
  }

  render() {
    return (
      <div>
        <div>
        { this.state.messages.map((message: Message, i: number) =>
            <MessageBoxMessage
              key={i} author={message.author} content={message.content}
              date={message.date}
            />
          )
        }
        </div>
        <div>
          <MessageBoxInput
            addMessage={ (message: Message) => this.addMessage(message)}
          />
        </div>
      </div>
    )
  }
}

export default MessageBox
