import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../context/ThemeContext';

export default function Header({title, onClick, isNews}) {
    const theme = useContext(ThemeContext).theme;
    
    if(localStorage.length === 0) {
        theme.mainColor = 'rgb(25, 25, 25)';
        theme.textColor = 'rgb(209, 187, 46)';
        theme.secondColor = 'rgb(111, 103, 120)';
    }

    const Container = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80px;
        background-color: ${theme.mainColor};
        color: ${theme.textColor};
        position: absolute;
        top: 0;
        left: 0;
        z-index:1;
        width: 100%;
        font-size: 28px;
    `

    const Icon = styled.div`
        position: fixed;
        right: 30px;
        top: 25px;
        height: 36px;
        width: 36px;
        cursor: pointer;
    `

    return(
        <Container onClick={onClick}>
            {title}
            {isNews &&
                <Icon>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" style={{color: theme.textColor}}>
                        <path fill='currentColor' d="M26.47 9.53c-2.17-2.18-5.15-3.53-8.47-3.53-6.63 0-12 5.37-12 12s5.37 12 12 12c5.94 0 10.85-4.33 11.81-10h-3.04c-.91 4.01-4.49 7-8.77 7-4.97 0-9-4.03-9-9s4.03-9 9-9c2.49 0 4.71 1.03 6.34 2.66l-4.34 4.34h10v-10l-3.53 3.53z"/>
                    </svg>
                </Icon>
            }
        </Container>
    )
}