import React from "react"
import styled from "styled-components"
import { devices } from "@styles"

const StyledHome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 1600px;
  padding: 20px;
`

const Title = styled.h1`
  color: var(--blue);
  ${devices.tablet`color: var(--purple)`};
`

const MessageTextArea = styled.textarea`
  width: 100%;
  max-width: 500px;
  min-height: 100px;
`

const SendButton = styled.button`
  margin-top: 20px;
`

const CurrentMessage = styled.div`
  margin-top: 20px;
`

class Home extends React.Component {
  state = {
    textAreaValue: "",
    message: "",
  }

  handleTextAreaChange = (event) => {
    this.setState({ textAreaValue: event.target.value })
  }

  sendMessage = () => {
    this.setState({ message: this.state.textAreaValue })
  }

  render() {
    return (
      <StyledHome>
        <Title>Streaker</Title>
        <MessageTextArea
          type="text"
          onChange={this.handleTextAreaChange}
          value={this.state.textAreaValue}
          placeholder="Enter message"
        ></MessageTextArea>
        <SendButton onClick={this.sendMessage}>Enter</SendButton>
        <CurrentMessage>Sent Message: {this.state.message}</CurrentMessage>
      </StyledHome>
    )
  }
}

export default Home
