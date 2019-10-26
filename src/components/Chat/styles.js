import styled from 'styled-components';

import engenheiro from '../../images/engenheiro.png';

export const Container = styled.div`
  background: #f6f6f6;
  padding: 5px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
`;

export const Header = styled.div`
  background: white;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;

  .logo {
    height: 50px;
  }
  .engenheiro {
    background: url(${engenheiro}) white right no-repeat;
    width: 64px;
    height: 64px;
    position: relative;
    right: 27px;
    border-radius: 90px;
    background-size: 120px;
    background-position-y: -15px;
    background-position-x: -30px;
  }
`;

export const FormLayout = styled.form`
  margin: -5px 8px;
`;

export const CommentLayout = styled.div`
  direction: ${props => (props.type === 'user' ? 'rtl' : 'none')};
  .ant-comment-avatar {
    margin-left: ${props => (props.type === 'user' ? '10px' : 'auto')};
  }

  .ant-comment-inner {
    padding: 0px;
  }
`;
