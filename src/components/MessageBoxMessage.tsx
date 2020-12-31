import * as React from 'react'
import '../style/MessageBoxMessage.css'

interface Props {
  content: string,
  author: string,
  date: Date,
}

interface State {
}

class MessageBoxMessage extends React.Component<Props, State> {
  public static defaultProps = {
    author: 'Anonymous',
  }

  getDate() {
    return ' ' + this.props.date.getHours() + ':' +
      this.props.date?.getMinutes()
  }

  render() {
    return (
      <div className="messagebox_message_container">
        <div className="messagebox_message_presentation">
          <span className="messagebox_message_presentation_author">
            { this.props.author }
          </span>
          <br/>
          <span className="messagebox_message_presentation_date">
            { this.getDate() }
          </span>
        </div>
        <div className="messagebox_message_content">
          <span>
            { this.props.content }
          </span>
        </div>
      </div>
    )
  }
}

export default MessageBoxMessage
