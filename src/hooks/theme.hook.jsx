import { useEffect, useState } from "react"

export const useThemee = () => {
    const [theme, switchTheme] = useState({});
    const setTheme = (URL) => {
        fetch(URL)
            .then(res => res.json())
            .then(item => { 
                switchTheme(item);
                localStorage.setItem('theme', JSON.stringify(item));
            })
    };

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('theme'));
        if (data) switchTheme(data);
    }, [])

    return { theme, setTheme };
}