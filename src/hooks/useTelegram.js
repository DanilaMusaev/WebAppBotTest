// Вынос объекта подключенного web app для tg
const tg = window.Telegram.WebApp;

/**
 * Хук, который достает объект для работы с web app для tg. Также предоставляет получение некоторых часто используемых функций
 */
export function useTelegram() {
    // Функция для закрытия приложения
    const onClose = () => {
        tg.close();
    };
    // Функция, чтобы скрыть/показать кнопку, предоставляемую TG
    const onToggleButton = () => {
        if (tg.BottomButton.isVisible) {
            tg.BottomButton.hide();
        } else {
            tg.BottomButton.show();
        }
    };

    return {
        onClose,
        onToggleButton,
        tg,
        user: tg.initDataUnsafe?.user,
    };
}
