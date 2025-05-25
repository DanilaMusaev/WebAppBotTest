import { useEffect, useState } from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import './Form.css';

const Form = () => {
    const [country, setCountry] = useState('');
    const [street, setStreet] = useState('');
    const [subject, setSubject] = useState('natural');
    const { tg } = useTelegram();

    // Меняем текст для Main кнопки
    useEffect(() => {
        tg.BottomButton.setParams({
            text: 'Отправить данные',
        });
    }, []);

    useEffect(() => {
        if (!street || !country) {
            tg.BottomButton.hide();
        } else {
            tg.BottomButton.show();
        }
    }, [country, street]);

    // Слушатели событий для управляемых input's
    const onChangeCountry = (e) => {
        setCountry(e.target.value);
    };
    const onChangeStreet = (e) => {
        setStreet(e.target.value);
    };
    const onChangeSubject = (e) => {
        setSubject(e.target.value);
    };

    return (
        <div className="form">
            <h3>Enter your data:</h3>
            <input
                type="text"
                className="input"
                placeholder="Country"
                value={country}
                onChange={onChangeCountry}
            />
            <input
                type="text"
                className="input"
                placeholder="Street"
                value={street}
                onChange={onChangeStreet}
            />
            <select
                className="select"
                value={subject}
                onChange={onChangeSubject}
            >
                <option value="natural">Natural person</option>
                <option value="legal">Legal person</option>
            </select>
        </div>
    );
};

export default Form;
