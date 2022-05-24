import React, { forwardRef, useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../context/ThemeContext";

export const News= forwardRef((props, ref) => {
    const theme = useContext(ThemeContext).theme;
    const Container = styled.div`
        box-sizing: border-box;
        background-color: ${theme.secondColor};
        color: ${theme.textColor};
        border-bottom: 2px solid ${theme.mainColor};
        padding: 15px;
    `

    const Title = styled.div`
        color: ${theme.textColor};
        font-weight: bold;
    `


    return (
        <Container ref={ref}>
            <Title>{props.title}</Title>
            <div>{props.content}</div>
        </Container>
    )
    }   
)