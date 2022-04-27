import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledMessage = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  overflow-y: hidden;
  background-color: var(--black);
  z-index: 9999;

  span {
    display: inline-flex;
    align-items: center;
    height: 100vh;
    max-height: 100vh;
    font-size: 100vh;
    color: var(--light);
    white-space: nowrap;
    text-align: center;
    font-family: monospace;
    transform: translateX(100%);
    animation: scroll 8s linear infinite;

    @keyframes scroll {
      from {
        transform: translateX(100%);
      }
      to {
        transform: translateX(-100%);
      }
    }
  }
`

const Message = ({ isMessageRunning, message, toggleMessageRunning }) => {
  const handleMessageClick = () => {
    toggleMessageRunning()
  }

  return (
    <StyledMessage
      isMessageRunning={isMessageRunning}
      onClick={handleMessageClick}
    >
      <span>{message}</span>
    </StyledMessage>
  )
}

Message.propTypes = {
  isMessageRunning: PropTypes.bool.isRequired,
  message: PropTypes.node.isRequired,
  toggleMessageRunning: PropTypes.func.isRequired,
}

export default Message
