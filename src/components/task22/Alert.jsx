import { Children } from 'react';
import styled, { css } from 'styled-components';

const alertStyles = {
    success:{
        background:"green",
        color: "black",
        icon:"✅"
    },
    error: {
        background:"red",
        color:"black",
        icon: "❌"
    },
    warning: {
        background:"yellow",
        color: "black",
        icon:"⚠️"
    },
    info:{
        background:"blue",
        color:"black",
        icon:"ℹ️",
    }
};
const StyledAlert = styled.div `
  background: ${(props) => alertStyles[props.type]?.background || alertStyles.info.background};
  color: ${(props) => alertStyles[props.type]?.color || alertStyles.info.color};`
  /*
 nazwa funkcji: Alert
 opis funkcji: Funkcja wyswietla alert z róznymi własciwoscami wyglądowymi 
 parametry: message - wiadomosc
 type- typ alertu
 zwracany typ: alert ktory wyglada w inny sposob 
autor: kacper
 */
function Alert({message, type= 'info'})
{
    const icon = alertStyles[type]?.icon || alertStyles.info.icon;
    return(<>
    <StyledAlert type={type}>
        <p>{icon}</p>
        <p>{message}</p>

    </StyledAlert>
    
    </>);
}
export default Alert