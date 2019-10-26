import React, { useState } from 'react';

import { Layout, Comment, Avatar, Form, Input } from 'antd';
import logo from '../../images/logo.png';
import engenheiro from '../../images/engenheiro.png';
import { Container, Header, FormLayout, CommentLayout } from './styles';

export default function Chat() {
  const { Content } = Layout;
  const { TextArea } = Input;

  const [newMessage, setNewMessage] = useState('');

  const [messages, setMessages] = useState([
    {
      id: 1,
      author: 'Francisco',
      type: 'bot',
      avatar: <Avatar src={engenheiro} />,
      content: 'Olá, bem vindo, por favor informe qual o tipo de edital.',
    },
  ]);

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
              <CommentLayout type={message.type}>
                <Comment
                  key={message.id}
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
