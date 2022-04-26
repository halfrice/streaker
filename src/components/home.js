import React, { useCallback, useState } from "react"
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
  margin-bottom: 1rem;
`

const StyledMessageRow = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  max-height: 3rem;
  margin: 0 auto;

  input {
    width: 100%;
    max-width: 600px;
    height: 3rem;
    background-color: transparent;
    font-size: 24px;
    color: var(--eigengrau);
    resize: none;
    border: 1px solid #a4bdde;
    border-radius: 3px;
  }

  button {
    height: 3rem;
    margin: 0 0.5rem;
    color: var(--eigengrau);
    background-color: transparent;
    text-decoration: none;
    cursor: pointer;
    border: 1px solid #a4bdde;
    border-radius: 3px;

    &:focus,
    &:active {
      border: 2px solid blue;
    }

    &:hover {
      background-color: var(--light-green);
    }

    span {
      margin: 0.5rem;
      padding: 0.5rem 0;
    }
  }
`

const CurrentMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: var(--blue);
  margin-top: 1rem;

  span {
    margin-top: 0.5rem;
    font-size: 24px;
    color: var(--eigengrau);
  }
`

const Home = () => {
  const [textAreaValue, setTextAreaValue] = useState("")
  const [message, setMessage] = useState("")

  const handleTextAreaChange = (event) => {
    setTextAreaValue(event.target.value)
  }

  const handleSendMessage = () => {
    setMessage(textAreaValue)
  }

  return (
    <StyledHome>
      <Title>Streaker</Title>
      <StyledMessageRow>
        <input
          type="text"
          onChange={handleTextAreaChange}
          value={textAreaValue}
          placeholder="Enter message"
          rows="1"
        ></input>
        <button onClick={handleSendMessage}>
          <span>Enter</span>
        </button>
      </StyledMessageRow>
      <CurrentMessage>
        Sent Message:<span>{message}</span>
      </CurrentMessage>
    </StyledHome>
  )
}

export default Home
