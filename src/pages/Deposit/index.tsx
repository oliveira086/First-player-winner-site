import React from 'react';
import styled from 'styled-components';
import { BsCreditCard } from 'react-icons/bs';
import { AiOutlineBarcode } from 'react-icons/ai';
import BalanceHeader from '../../components/molecules/BalanceHeader';
import Header from '../../components/molecules/Header';
import NavigationMenu from '../../components/molecules/NavigationMenu';
import Button from '../../components/atoms/Button';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #f7f7f7;
`;

const RechargeContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 40px;
  flex-direction: column;
  span {
    padding-left: 30px;
    font-size: 14px;
    font-weight: 400;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  margin-top: 30px;
  flex-direction: row;
  padding: 2px 0;
  scrollbar-color: transparent transparent;
  overflow-x: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  padding: 9px;
  padding-top: 12px;
  flex: none;
  width: 150px;
  height: 100px;
  border-radius: 5px;
  background-color: #c4c4c4;
  color: #020c28;
  font-size: 12px;
  line-height: 10px;
  font-weight: 500;
  justify-content: space-between;
  /* -webkit-touch-callout: none; iPhone OS, Safari */
  -webkit-user-select: none; /* Chrome, Safari 3 */
  -khtml-user-select: none; /* Safari 2 */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+ */
  user-select: none;
  :active {
    background-color: rgba(173, 173, 173, 0.6);
    outline: 2px solid #ffd12e;
  }
`;

export const PaymentCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 9px;
  padding-top: 12px;
  width: 40vw;
  height: 60px;
  margin-left: 30px;
  border-radius: 5px;
  background-color: rgba(210, 209, 211, 0.6);
  color: #020c28;
  font-size: 12px;
  line-height: 10px;
  font-weight: 500;
  justify-content: space-between;
  /* -webkit-touch-callout: none; iPhone OS, Safari */
  -webkit-user-select: none; /* Chrome, Safari 3 */
  -khtml-user-select: none; /* Safari 2 */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+ */
  user-select: none;
  :active {
    background-color: rgba(224, 224, 224, 0.6);
    outline: 2px solid #ffd12e;
  }
`;

const Abstract = styled.div`
  width: calc(100% - 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 20px;
  p {
    margin-bottom: 10px;
    font-weight: 400;
    font-size: 14px;
  }
  .content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .content strong,
  span {
    font-weight: 600;
    font-size: 14px;
  }
  .content span {
    color: #20b15a;
  }
`;

const Deposit: React.FC = () => {
  return (
    <Container>
      <Header />
      <BalanceHeader balance="123" />
      <RechargeContainer>
        <span>Selecione o pacote de recarga</span>
        <CardContainer>
          <Card />
          <Card />
          <Card />
          <Card />
        </CardContainer>
      </RechargeContainer>
      <RechargeContainer>
        <span>Selecione a forma de pagamento</span>
        <CardContainer>
          <PaymentCard>
            <BsCreditCard size={18} />
            Crédito
          </PaymentCard>
          <PaymentCard>
            <AiOutlineBarcode size={18} />
            Débito
          </PaymentCard>
        </CardContainer>
      </RechargeContainer>

      <Abstract>
        <p>Resumo da compra</p> <br />
        <div className="content">
          <strong>Pacote 15 moedas</strong>
          <span>R$ 12,99</span>
        </div>
        <div className="content">
          <strong>Taxas</strong>
          <span>R$ 3,00</span>
        </div>
        <div className="content">
          <strong>Total</strong>
          <span>R$ 15,99</span>
        </div>
      </Abstract>

      <Button statusType="confirmation">Finalizar compra</Button>

      <NavigationMenu />
    </Container>
  );
};

export default Deposit;
