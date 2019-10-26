import React from 'react';
import { Button, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import engenheiro from '../../images/engenheiro.png';
import logo from '../../images/logo.png';

export default function Main() {
  return (
    <Container>
      <header>
        <img src={logo} className="logo" alt="Chesf" />
      </header>
      <img src={engenheiro} alt="Engenheiro" />
      <h2>
        Olá, sou o Francisco, estou aqui para te ajudar a organizar seus
        editais. Vamos começar?
      </h2>
      <Link to="/chat">
        <Button type="primary">
          Iniciar
          <Icon type="right" />
        </Button>
      </Link>
    </Container>
  );
}
