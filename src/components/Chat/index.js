import React, { useState, useEffect, useCallback } from 'react';

import { Layout, Comment, Avatar, Form, Input } from 'antd';
import logo from '../../images/logo.png';
import engenheiro from '../../images/engenheiro.png';
import { Container, Header, FormLayout, CommentLayout } from './styles';
import { api } from '../../services/api';

export default function Chat() {
  const { Content } = Layout;
  const { TextArea } = Input;

  const [newMessage, setNewMessage] = useState('');

  const [messages, setMessages] = useState([]);

  const [context, setContext] = useState({});

  // When component mount
  useEffect(() => {
    async function sendFirstMessage() {
      const response = await api.post('/chat', {
        message: 'Olá',
      });

      const { newContext, output } = response.data;
      const { text } = output;

      setContext(newContext);
      setMessages([
        {
          id: 1,
          author: 'Francisco',
          type: 'bot',
          avatar: <Avatar src={engenheiro} />,
          content: text.join('<br/>'),
        },
      ]);
    }

    sendFirstMessage();
  }, []);

  function handleSubmit() {
    setMessages([
      ...messages,
      {
        id: messages.length + 1,
        author: 'Você',
        type: 'user',
        avatar: <Avatar icon="user" />,
        content: newMessage,
      },
    ]);

    setTimeout(() => {
      window.document
        .getElementById('messages')
        .scrollTo(0, window.document.getElementById('messages').scrollHeight);
    });
    setNewMessage('');
  }

  return (
    <Container>
      <Layout>
        <Header>
          <img src={logo} alt="logo" className="logo" />
          <div className="engenheiro" />
        </Header>
        <Content
          id="messages"
          style={{
            margin: '20px 10px',
            padding: 10,
            background: '#fff',
            height: 300,
            scrollBehavior: 'smooth',
            overflowY: 'auto',
          }}
        >
          {messages.map(message => {
            return (
              <CommentLayout key={message.id} type={message.type}>
                <Comment
                  author={<>{message.author}</>}
                  avatar={message.avatar}
                  content={<p>{message.content}</p>}
                />
              </CommentLayout>
            );
          })}
        </Content>
        <FormLayout onSubmit={handleSubmit}>
          <Form.Item>
            <TextArea
              onPressEnter={event => {
                event.preventDefault();
                handleSubmit();
              }}
              placeholder="digite aqui sua mensagem..."
              rows={4}
              onChange={e => setNewMessage(e.target.value)}
              value={newMessage}
            />
          </Form.Item>
        </FormLayout>
      </Layout>
    </Container>
  );
}
