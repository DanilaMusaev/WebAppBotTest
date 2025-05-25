import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';
import Header from './components/Header/Header';

function App() {
    const { tg, onToggleButton } = useTelegram();

    useEffect(() => {
        // Говорит тг, что приложение полностью прогрузилось
        tg.ready();
    }, []);

    return (
        <div className="app">
            <Header />
            Working
            <button onClick={onToggleButton}>toggle</button>
        </div>
    );
}

export default App;
