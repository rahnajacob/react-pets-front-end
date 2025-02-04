const PetList = (props) => {
    const pets = props.petList.map((pet) => (
        <a key={pet._id} onClick={() => console.log(pet)}>
            <li>{pet.name}</li>
        </a>
    ))

    return (
        <div>
            <h1>Pet List</h1>
            {!props.petList.length ? <h2>No Pets Yet!</h2> : <ul>{pets}</ul>}
        </div>
    );
}

export default PetList