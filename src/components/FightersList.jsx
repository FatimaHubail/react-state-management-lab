const FightersList = ({ fighters, buttonText, onButtonClick, emptyMessage }) => {
    if (fighters.length === 0 && emptyMessage) {
        return <p>{emptyMessage}</p>;
    }

    return (
        <ul>
            {fighters.map((fighter) => (
                <li key={fighter.id}>
                    <img src={fighter.img} alt={fighter.name} />
                    <p>{fighter.name}</p>
                    <p>Price: {fighter.price}</p>
                    <p>Strength: {fighter.strength}</p>
                    <p>Agility: {fighter.agility}</p>
                    <button onClick={() => onButtonClick(fighter)}>{buttonText}</button>
                </li>
            ))}
        </ul>
    );
};

export default FightersList;