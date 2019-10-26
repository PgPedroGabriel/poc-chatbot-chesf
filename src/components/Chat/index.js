import React from 'react';
import moment from 'moment';

import {
  Layout,
  Comment,
  Avatar,
  Tooltip,
  Form,
  Button,
  Input,
  Icon,
} from 'antd';
import logo from '../../images/logo.png';
import { Container, Header } from './styles';

export default function Chat() {
  const { Content } = Layout;
  const { TextArea } = Input;

  return (
    <Container>
      <Layout>
        <Layout>
          <Header>
            <img src={logo} alt="logo" className="logo" />
            <div className="engenheiro" />
          </Header>
          <Content
            style={{
              margin: '20px 10px',
              padding: 10,
              background: '#fff',
              minHeight: 380,
            }}
          >
            <Comment
              author={<>Han Solo</>}
              avatar={
                <Avatar
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  alt="Han Solo"
                />
              }
              content={
                <p>
                  We supply a series of design principles, practical patterns
                  and high quality design resources (Sketch and Axure), to help
                  people create their product prototypes beautifully and
                  efficiently.
                </p>
              }
              datetime={
                <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                  <span>{moment().fromNow()}</span>
                </Tooltip>
              }
            />
            <Comment
              author={<>Han Solo</>}
              avatar={
                <Avatar
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  alt="Han Solo"
                />
              }
              content={
                <p>
                  We supply a series of design principles, practical patterns
                  and high quality design resources (Sketch and Axure), to help
                  people create their product prototypes beautifully and
                  efficiently.
                </p>
              }
              datetime={
                <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                  <span>{moment().fromNow()}</span>
                </Tooltip>
              }
            />
            <div>
              <Form.Item>
                <TextArea rows={4} onChange={() => {}} value />
              </Form.Item>
              <Form.Item>
                <Button
                  htmlType="submit"
                  loading={false}
                  onClick={() => {}}
                  type="primary"
                >
                  Enviar mensagem
                  <Icon type="message" />
                </Button>
              </Form.Item>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Container>
  );
}
