import { useMediaQuery } from "@mui/material";
import { Form } from "@unform/web";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import useLoadingStore from "../../hooks/useLoadingStore";
import { AreaItem, BoxItems } from "../../styles/global";
import { errorAlertMessage, makeValidation } from "../../utils/funcoes";
import validationSchema from "./schema";
import {
  Circunferencia1,
  Circunferencia2,
  ContainerBoasVindas,
  ContainerBotoesMobile,
  ContainerCamposTextoMobile,
  ContainerElementos,
  ContainerElementosMobile,
  ContainerLadoDireito,
  ContainerLadoEsquerdo,
  ContainerTelaInicial,
  ContainerTelaInicialMobile,
  ContainerTitulo,
  TextoBoasVindas,
  TextoBoasVindas1Mobile,
  Titulo,
} from "./styles";

export default function Login() {
  const isScreenSmall = useMediaQuery("(max-width: 680px)");
  const { setIsLoading } = useLoadingStore();
  const formLoginRef = useRef(null);
  const navigate = useNavigate();

  const validarLogin = async () => {
    try {
      const usuarioData = {
        nome_usuario: formLoginRef.current.getFieldValue("nome_usuario"),
        senha_usuario: formLoginRef.current.getFieldValue("senha_usuario"),
      };

      const isValid = await makeValidation(
        validationSchema,
        usuarioData,
        formLoginRef
      );
      if (!isValid) {
        return;
      }

      setIsLoading(true);
      navigate("/pedidos");
    } catch (error) {
      errorAlertMessage(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {!isScreenSmall && (
        <ContainerTelaInicial>
          <ContainerLadoEsquerdo>
            <ContainerTitulo>
              <Titulo>Gestão de Pedidos</Titulo>
            </ContainerTitulo>
            <Circunferencia1 />
            <Circunferencia2 />
          </ContainerLadoEsquerdo>
          <ContainerLadoDireito>
            <ContainerElementos>
              <ContainerBoasVindas>
                <TextoBoasVindas>Faça seu login</TextoBoasVindas>
              </ContainerBoasVindas>
              <Form onSubmit={validarLogin} ref={formLoginRef}>
                <BoxItems fDirection="column">
                  <AreaItem>
                    <Input name="nome_usuario" label="Usuário" />
                  </AreaItem>
                  <AreaItem>
                    <Input name="senha_usuario" label="Senha" type="password" />
                  </AreaItem>
                  <button type="submit">Entrar</button>
                </BoxItems>
              </Form>
            </ContainerElementos>
          </ContainerLadoDireito>
        </ContainerTelaInicial>
      )}
      {isScreenSmall && (
        <ContainerTelaInicialMobile>
          <ContainerElementosMobile>
            <TextoBoasVindas1Mobile>Faça seu login</TextoBoasVindas1Mobile>
            <Form
              onSubmit={validarLogin}
              ref={formLoginRef}
              style={{ width: "100%" }}
            >
              <ContainerCamposTextoMobile>
                <AreaItem>
                  <Input name="nome_usuario" label="Usuário" />
                </AreaItem>
                <AreaItem>
                  <Input name="senha_usuario" label="Senha" type="password" />
                </AreaItem>
              </ContainerCamposTextoMobile>
              <ContainerBotoesMobile>
                <button type="submit">Entrar</button>
              </ContainerBotoesMobile>
            </Form>
          </ContainerElementosMobile>
        </ContainerTelaInicialMobile>
      )}
    </>
  );
}