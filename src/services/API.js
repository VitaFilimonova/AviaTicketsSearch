import React, {createContext, useContext, useEffect, useState} from "react";
import axios from "axios";

let name;
const token = 'fecffce7db6061d6783a252738e57360';

const DataContext = createContext(null);

export const useData = () => {
    return useContext(DataContext);
};
    // const data  = useContext(DataContext);


export const DataProvider = ({ children }) => {
    const [data, setData] = useState(null);
    const [sorting, setSorting] = useState(false);
    const [filter, setFilter] = useState('');


    // const url = `https://api.travelpayouts.com/aviasales/v3/prices_for_dates?origin=MAD&destination=BCN&departure_at=2024-01&return_at=2024-01&unique=false&sorting=price&direct=false&cy=usd&limit=30&page=1&one_way=true&token=${token}`;
    const url = `https://api.travelpayouts.com/aviasales/v3/prices_for_dates?origin=MOW&departure_at=2024-01&return_at=&unique=true&sorting=price&direct=false&cy=rub&limit=200&page=1&one_way=false&token=${token}`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url, {
                    params: {
                        sorting: false,
                    }
                });
                updateData(response.data.data)
                // response.data содержит распакованные данные в формате JSON
                console.log(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData().then(el => console.log(el)); // Вызов функции для отправки запроса и обработки Promise

    }, []);

    useEffect(() => {
        console.log(data); // Перемещаем console.log в отдельный useEffect
    }, [data]);

    const updateData = (newData) => {
        setData(newData);

    };

    const updateSorting = (newSorting) => {
        setSorting(newSorting);
    };

    return (
        <DataContext.Provider value={{data, filter,setFilter}}>
            {children}
        </DataContext.Provider>
    );

}


