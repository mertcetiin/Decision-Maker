import { useState } from 'react'

function Liste() {

    const options = ['Film izle', 'Dışarı çık', 'Yemek ye', 'Kitap Oku', 'Oyun izle'];
    const [option, setOption] = useState('');

    const optionsRandom = () => {
        const randomIndex = Math.floor(Math.random() * options.length);
        const randomOption = options[randomIndex];
        setOption(randomOption);
    }

    const onReset = () => {
        setOption('');
    }


    return (
        <div>
            <button onClick={optionsRandom}>Random</button>
            <button onClick={onReset}>Reset</button>
            <div>
                {options.map((item, id) => (
                    <h2 key={id}>{item}</h2>
                ))}
            </div>
            <br />
            {option && (
                <div>
                    <h1>Random Seçenek:</h1>
                    <h1>{option}</h1>
                </div>
            )}
        </div>
    )
}

export default Liste;