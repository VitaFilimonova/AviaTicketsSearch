const Sorting = (data, id, isActive, filter) => {

    if (isActive && id === 2) {
        let sortedFilter = Array.isArray(filter) ? [...filter] : Array.isArray(data) ? [...data] : [];
        sortedFilter.sort((a, b) => a["duration_to"] - b["duration_to"]);
        return sortedFilter
    } else {
        return Array.isArray(filter) ? filter : data;
    }
};
export default Sorting;
