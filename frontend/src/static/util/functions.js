export const getDashedDate = (date) => {
    const curDate = new Date(date);

    const curYear = String(curDate.getFullYear()).padStart(2, '0');
    const curMonth = String(curDate.getMonth() + 1).padStart(2, '0');
    const curDay = String(curDate.getDate()).padStart(2, '0');

    return `${curYear}-${curMonth}-${curDay}`;
};
