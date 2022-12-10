import Gps from "../../../../assets/svg/gps.svg";
import creditCard from "../../../../assets/svg/creditCard.svg";
import debitCard from "../../../../assets/svg/debitCard.svg";
import cash from "../../../../assets/svg/cash.svg";
import Currency from "../../../../assets/svg/currency.svg";
import { PayamentCard } from "../PayamentCard";
import {
  AddressAndPaymentColum,
  Body,
  Content,
  FooterPayament,
  Header,
  InputStyled,
  Title,
} from "./styles";

export function CompleteOrderSection() {
  return (
    <AddressAndPaymentColum>
      <Header>Complete seu pedido</Header>
      <Body>
        <Title>
          <img src={Gps} alt="gpsIcon" />
          <div>
            <span>Endereço de Entrega</span>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </Title>

        <Content>
          <InputStyled width="200px" type="text" placeholder="CEP" />
          <InputStyled width="560px" type="text" placeholder="Rua" />
          <InputStyled width="200px" type="text" placeholder="Número" />
          <InputStyled width="348px" type="text" placeholder="Complemento" />
          <InputStyled width="200px" type="text" placeholder="Bairro" />
          <InputStyled width="276px" type="text" placeholder="Cidade" />
          <InputStyled width="60px" type="text" placeholder="UF" />
        </Content>
      </Body>
      <FooterPayament>
        <Title>
          <img src={Currency} alt="currencyIcon" />
          <div>
            <span>Pagamento</span>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </Title>
        <Content>
          <PayamentCard icon={creditCard} />
          <PayamentCard icon={debitCard} />
          <PayamentCard icon={cash} />
        </Content>
      </FooterPayament>
    </AddressAndPaymentColum>
  );
}