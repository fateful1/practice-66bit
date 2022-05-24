import React, { useContext } from "react";
import styled from "styled-components";
import Footer from "../../components/Footer";
import Header from "../../components/Header/index";
import { ThemeContext } from "../../context/ThemeContext";
import styles from './themesPage.module.css';

export default function ThemesPage() {
    const context = useContext(ThemeContext);
    const setTheme = context.setTheme;
    const theme = context.theme;
    const Container = styled.div`
        flex: 1 0 auto;
        padding-top: 80px;
        padding-bottom: 80px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: ${theme.secondColor};
    `

    return(
        <div className={styles.wrapper}>
            <Header title='Темы' />
                <Container>
                    <button 
                        className={styles.dark_theme}
                        onClick={() => setTheme('https://frontappapi.dock7.66bit.ru/api/theme/get?name=dark')}
                    >Тема 1</button>
                    <button 
                        className={styles.light_theme}
                        onClick={() => setTheme('https://frontappapi.dock7.66bit.ru/api/theme/get?name=light')}
                    >Тема 2</button>
                    <button 
                        className={styles.blue_theme}
                        onClick={() => setTheme('https://frontappapi.dock7.66bit.ru/api/theme/get?name=blue')}
                    >Тема 3</button>
                </Container>
            <Footer />
        </div>
    )
}