import { headShake } from "react-animations";
import styled, { css, keyframes } from "styled-components";
import { colors } from "../../styles/colors";

const headShakeEffect = keyframes`${headShake}`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  div {
    justify-content: space-between;

    flex-wrap: nowrap;
    padding-left: 2px;
    padding-right: 2px;
    width: 100%;

    height: auto;

    label {
      color: ${colors.cinza};
      font-weight: ${(props) => (props.isRequired ? 600 : 500)};
      white-space: nowrap;
    }
  }
`;

export const FormLabel = styled.label`
  color: ${colors.cinza};
  font-size: 14px;
  margin-bottom: 6px;
  font-weight: 600;
`;

export const FormInput = styled.input`
  border-radius: 6px;
  border: 1px solid ${(props) => (props.invalid ? "red" : "#cac8c8")};
  font-weight: bold;
  line-height: 1.3;
  color: ${colors.cinza};
  background-color: ${colors.branco};
  width: 100%;
  text-transform: ${(props) => (props.uppercase ? "uppercase" : "none")};

  ${(props) =>
    props.invalid &&
    css`
      animation: 0.6s ${headShakeEffect};
    `}

  &:focus {
    background-color: ${colors.branco};
    border: 1px solid ${(props) => (props.invalid ? "red" : "#8e93eb")};
    outline: 0;
    box-shadow: 0 0 0 1px ${(props) => (props.invalid ? "#ff8484" : "#8e93eb")};
  }

  &:read-only {
    background-color: #f9f9f9;
    border: 1px solid ${(props) => (props.invalid ? "red" : "#cac8c8")};
    outline: 0;
    box-shadow: none;
  }

  @media (max-width: 599px) {
    padding: 4px 8px;
    font-size: 12px;
  }

  @media (min-width: 600px) {
    padding: 4px 8px;
    font-size: 14px;
  }

  @media (min-width: 1024px) {
    padding: 4px 8px;
    font-size: 14px;
  }

  @media (min-width: 1440px) {
    padding: 6px 10px;
    font-size: 15px;
  }
`;
