import './App.css';
// Вынос объекта подключенного web app для tg
const tg = window.Telegram.WebApp;

function App() {
    useEffect(() => {
        // Говорит тг, что приложение полностью прогрузилось
        tg.ready();
    }, []);

    // Функция для закрытия приложения
    const onClose = () => {
        tg.close();
    };

    return (
        <div className="app">
            Working
            <button onClick={onClose}>Закрыть</button>
        </div>
    );
}

export default App;
