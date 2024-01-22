import React, {useEffect} from 'react';
import {useData} from "./API";
import Card from "../components/Card";

const Sorting = (data, id, isActive, filter) => {


    if (isActive && id===2) {

        // Сортируем данные в filter по свойству duration_to
        // let sortedFilter
        let sortedFilter = Array.isArray(filter) ? [...filter] : Array.isArray(data) ? [...data] : [];

        sortedFilter.sort((a, b) => a.duration_to - b.duration_to);

        return sortedFilter
    } else {
        return Array.isArray(filter) ? filter : data;
}


}
;

export default Sorting;


// import React, { useEffect } from 'react';
//
// import { useData } from "./API";
//
// export const Tran = ({num,}) => {
//
//     useEffect(() => {
//         // Фильтруем массив data на основе num (ID элемента)
//         const filteredData = data.filter((el) => {
//             return el.transfers === num;
//         });
//
//         // Обновляем data с отфильтрованными данными
//         // data.updateData(filteredData);
//
//         console.log(filteredData);
//     }, [num, data]);
// }
//
// // const Sorting = ({ num }) => {
// //     // const data = useData()
// //     useEffect(() => {
// //         console.log('data')
// //     }, [num]);
//     // useEffect(() => {
//     //     // Фильтруем массив data на основе num (ID элемента)
//     //     const filteredData = data.filter((el) => {
//     //         return el.transfers === num;
//     //     });
//     //
//     //     // Обновляем data с отфильтрованными данными
//     //     // data.updateData(filteredData);
//     //
//     //     console.log(filteredData);
//     // }, [num, data]);
//     //
// //      return null; // Этот компонент не отображает ничего и используется только для логики
// //     return (
// //         <div>
// //
// //         </div>
// //     );
// //
// // };
//
// // export default Sorting;