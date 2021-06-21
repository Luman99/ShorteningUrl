import styled from "styled-components";
import Form from 'react-bootstrap/Form';

import { Container } from 'react-bootstrap';
import { Theme } from './Theme'

const getButtonColor = (props) => {
    if (props.disabled) {
        return Theme.btnDisabled;
    } else if (props.primary) {
        return Theme.btnPrimary
    }
    return Theme.btnSecondary
}

const getButtonTextColor = (props) => {
    if (props.primary) {
        return Theme.btnTextPrimary;
    }
    return Theme.btnTextSecondary;
}

const getTextColor = props => {
    if (props.variant && props.variant.toLowerCase() === 'highlight') {
        return Theme.textHighlight;
    } else if (props.variant && props.variant.toLowerCase() === 'muted') {
        return Theme.textMuted;
    } else if (props.variant && props.variant.toLowerCase() === 'info') {
        return Theme.textInfo;
    }
    return Theme.textDefault;
}


export const PageSection = styled(Container)`
    margin-top: 20px;
    min-height: 100vh;
`;

export const Label = styled.span`
    font-weight:600;
    color: ${props => Theme.textInfo};
    text-transform:lowercase;
    opacity:0.9;
    font-variant:small-caps;
`;

export const Field = styled(Form.Control)`
    border-radius: 2px !important;
    background-color: white !important;
    color: ${Theme.textMuted};
    text-align:end;
    border: none;
    box-shadow: 2px 2px 2px ${Theme.shadow};
`;

export const Button = styled.button`
    background-color: ${getButtonColor};
    color: ${getButtonTextColor};
    border: 2px solid;
    border-color: #f3f3f3;
    border-radius:5px;
    text-align:center;
    padding: 12px;
    width:100%;
    font-size:1.2rem;
    font-weight: 500;
    font-family: system-ui;
    outline:none;
    letter-spacing:2px;
    text-transform: uppercase;

    :hover{
        background-color: ${getButtonColor};
        color: ${getButtonTextColor};
        box-shadow: inset 0px 0px 400px 110px rgba(0, 0, 0, .1);
        border-color: ${Theme.borderPrimary};
        cursor: pointer;
    }
    :active{
        border-color: #ddd;
        outline:none;
    }
    :focus{
        outline:none;
    }
`;

export const Text = styled.span`
    color : ${getTextColor};
`;

