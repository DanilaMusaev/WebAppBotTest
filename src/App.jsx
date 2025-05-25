import { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { useTelegram } from './hooks/useTelegram';
import Header from './components/Header/Header';
import './App.css';
import ProductList from './components/ProductList/ProductList';
import Form from './components/Form/Form';

function App() {
    const { tg, onToggleButton } = useTelegram();

    useEffect(() => {
        // Говорит тг, что приложение полностью прогрузилось
        tg.ready();
    }, []);

    return (
        <div className="app">
            <Header />
            <Routes>
                <Route index element={<ProductList />} />
                <Route path="/form" element={<Form />} />
            </Routes>
        </div>
    );
}

export default App;
