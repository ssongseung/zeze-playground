import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from "@chatscope/chat-ui-kit-react"
import {useState} from "react";

const API_KEY = "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";

function Chatgpt() {
  const [typing, setTyping] = useState(false);
  const [messages, setMessage] = useState([
    {
      message: "Hello, I am CHatGPT!",
      sender: "CHatGPT"
    }
  ]);
  const handleSend = async (message) => {
    const newMessage = {
      message: message,
      sender: "user",
      direction: "outgoing"
    }

    const newMessages = [...messages, newMessage];

    setMessage(newMessages);

    setTyping(true);

    await processMessageToChatGPT(newMessages);
  }

  async function processMessageToChatGPT(chatMessages) {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = ""
      if(messageObject.sender === "CHatGPT") {
        role = "assistant"
      } else {
        role = "user"
      }
      return { role: role, content: messageObject.message }
    });

    const systemMessage = {
      role: 'system',
      content: "Speak like a pirate."
    }

    const apiRequsetBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        systemMessage,
        ...apiMessages
      ]
    }

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization" : "Bearer " + API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiRequsetBody)
    }).then((data) => {
      return data.json();
    }).then((data) => {
      setMessage(
        [...chatMessages, {
          message: data.choices[0].message.content,
          sender: "CHatGPT"
        }]
      );
      setTyping(false);
    })
  }

  return (
    <div style={{ position: "relative", height: "800px", width: "700px" }}>
      <MainContainer>
        <ChatContainer>
          <MessageList
            scrollBehavior="smooth"
            typingIndicator={typing ? <TypingIndicator content={"ChatGPT is typing"} /> : null }
          >
            {messages.map((message, i) => {
              return <Message key={i} model={message} />
            })}
          </MessageList>
          <MessageInput placeholder='입력하세요' onSend={handleSend} />
        </ChatContainer>
      </MainContainer>
    </div>
  )
}

export default Chatgpt;