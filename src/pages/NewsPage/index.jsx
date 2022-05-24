import React, { createRef, useContext, useEffect, useRef, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header/index";
import { News } from "../../components/News";
import { ThemeContext } from "../../context/ThemeContext";
import styles from './newsPage.module.css'
import styled from "styled-components";
import PullToRefresh from "react-simple-pull-to-refresh";

export default function NewsPage() {
    const [news, setNews] = useState([]);
    const [page, setPage] = useState(1);
    const count = 10;
    const context = useContext(ThemeContext);
    const theme = context.theme;
    const lastItem = createRef();
    const observerLoader = useRef();

    function get_data()  {
        fetch(`https://frontappapi.dock7.66bit.ru/api/news/get?page=${page}&count=${count}`)
            .then(res => res.json())
            .then(items => {
                setNews([...news, ...items]);
                setPage(page + 1);
            })
    }
    
    useEffect(() => { 
        get_data();
    }, []);

    function get_refreshed_data() {
        fetch(`https://frontappapi.dock7.66bit.ru/api/news/get?page=${page}&count=${count}`)
            .then(res => res.json())
            .then(items => {
                setNews(items);
                setPage(page + 1);
        })
    }
    const actionInSight = (entries) => {
        if (entries[0].isIntersecting) {
            get_data();
        }
    };

    useEffect(() => {
        if (observerLoader.current) {
            observerLoader.current.disconnect();
        }
        
        observerLoader.current = new IntersectionObserver(actionInSight);
        if (lastItem.current) {
            observerLoader.current.observe(lastItem.current);
        }
    }, [lastItem]);

    const Container = styled.div`
        font-size: 24px;
        height: calc(100vh - 160px);
        padding-top: 80px;
        padding-bottom: 80px;
        background-color: ${theme.secondColor};
    `

    return(
        <div className={styles.wrapper}>
            <Header title='Новости' onClick={() => get_refreshed_data()} isNews={true}/>
                <PullToRefresh 
                    onRefresh={()=>{ 
                        get_refreshed_data();
                        let elem = document.getElementsByClassName('ptr__children')[0];
                        elem.style='overflow: visible';
                    }}
                    backgroundColor={theme.secondColor}
                >
                    <Container>
                        {news.map((item, index) => {
                            if(index + 1 === news.length) {
                                    return <News 
                                        key = {item.id}
                                        title = {item.title}
                                        content = {item.content}
                                        ref = {lastItem}
                                />
                            }
                            
                            return <News 
                                key = {item.id}
                                title = {item.title}
                                content = {item.content}
                                />
                        })}
                    </Container>
                </PullToRefresh>
            <Footer />
        </div>
    )
}