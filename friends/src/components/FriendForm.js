
function FriendForm() {



    return(
        <>
        <form onSubmit={''}>
            <input
            type="text"
            name="name"
            value={''}
            onChange={''}
            placeholder="Full Name"
             /><br/>
            <input
            type="number"
            name="age"
            value={''}
            onChange={''}
            placeholder="Age"
             /><br/>
            <input
            type="email"
            name="email"
            value={''}
            onChange={''}
            placeholder="E-Mail"
             /><br/><br/>
            <button>Add Friend</button>
        </form>
        </>
    )
}

export default FriendForm;