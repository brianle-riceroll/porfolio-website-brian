import profilePic from './assets/8bit me.png'

function Card() {
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture" height="200"></img>
            <h2>Brian Le</h2>
            <p>Studying Computer Science</p>
        </div>
    );
}

export default Card