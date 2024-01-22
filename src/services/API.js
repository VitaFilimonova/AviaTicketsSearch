import React, {createContext, useContext, useEffect, useState} from "react";
import axios from "axios";

const token = 'fecffce7db6061d6783a252738e57360'

const DataContext = createContext(null);

export const useData = () => {
    return useContext(DataContext);
};

export const DataProvider = ({children}) => {
    const [data, setData] = useState(null);
    const [transfers, setTransfers] = useState('');
    const [filter, setFilter] = useState('');

    const url = `https://api.travelpayouts.com/aviasales/v3/prices_for_dates?origin=MOW&departure_at=2024-01&return_at=&unique=true&sorting=price&direct=false&cy=rub&limit=50&page=1&one_way=true&token=${token}`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                updateData(response.data.data)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData().then(r => r);

    }, []);

    const updateData = (newData) => {
        setData(newData);
    };

    return (
        <DataContext.Provider value={{data, filter, setFilter, transfers, setTransfers}}>
            {children}
        </DataContext.Provider>
    );
}


