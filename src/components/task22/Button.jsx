import styled, { css } from 'styled-components';
const buttonVariants = {
  primary: {
    background: 'blue',
    color: 'white',
    hoverBg: '#0b5ed7',
    activeBg: '#0a58ca'
  },
  secondary: {
    background: 'grey',
    color: 'white',
    hoverBg: '#5c636a',
    activeBg: '#51585e'
  },
  danger: {
    background: 'red',
    color: 'white',
    hoverBg: '#b02a37',
    activeBg: '#b02a37'
  }
};

const buttonSizes = {
  sm: {
    padding: '6px 12px',
    fontSize: '12px'
  },
  md: {
    padding: '10px 20px',
    fontSize: '16px'
  },
  lg: {
    padding: '14px 28px',
    fontSize: '20px'
  }
};
const StyledButton = styled.button`
padding: ${(props) => buttonSizes[props.size]?.padding || buttonSizes.md.padding};
font-size: ${(props) => buttonSizes[props.size]?.fontSize || buttonSizes.md.fontSize};
background: ${(props) => buttonVariants[props.variant]?.background || buttonVariants.primary.background};
color: ${(props) => buttonVariants[props.variant]?.color || buttonVariants.primary.color};
&:hover {
    background: ${(props) => buttonVariants[props.variant]?.hoverBg || buttonVariants.primary.hoverBg};
}
&:active {
    background: ${(props) => buttonVariants[props.variant]?.activeBg || buttonVariants.primary.activeBg};
  }
${(props) => props.fullWidth && `
    width: 100%;
`}
${(props) => props.disabled && `
    background: #ccc;
    color: #666;
    cursor: not-allowed;
    pointer-events: none; 
  `}
`
/*
*******************************************************
nazwa funkcji: Button
opis funkcji: wyswietlanie róznych typów przycisku 
parametry brak
zwracany typ : przycisk ktory moze miec różne właściwosci wyglądowe
autor: kacper
*******************************************************
*/
function Button ({
  variant = 'primary', 
  size = 'md', 
  disabled = false, 
  fullWidth = false, 
  children
})
{
return(
    <>
    <StyledButton
    variant={variant}
    size={size}
    disabled={disabled}
    fullWidth={fullWidth}>
    {children}
    </StyledButton>
    </>
    )
}
export default Button