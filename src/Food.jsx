function Food() {

    const food1 = "Pho";
    const food2 = "Ramen";

    return(
        <ul>
            <li>Strawberry</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}

export default Food