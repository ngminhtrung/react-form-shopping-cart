function formatNumber(number) {
    number = (number+'').replace(/[\D\s_]+/g, "");
    number = number ? parseInt(number, 10) : "";
    return (number === "") ? "" : number.toLocaleString("en-US");
}

export default formatNumber;