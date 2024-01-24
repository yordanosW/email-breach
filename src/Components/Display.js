function Display({ data }) {
    const display = data.map((item, i) => {
        return (
            <div key={i}>
                <h3>{item.Name}</h3>
                <h4>Breach Date: {item.BreachDate}</h4>
                <p>Description: {item.Description}</p>
                <p>Data Stolen</p>
                <ul>
                    {item.DataClasses.map(dataClass => <li>{dataClass}</li>)}
                </ul>
            </div>
        )
    })
    return (
        <div>
            {display}
        </div>
    )
}

export default Display