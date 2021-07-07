import '../Styles/Profilestyles/clubsjoined.css'
import clublogo from  '../assets/clublogo.png'
function Clubsjoined() {
    return (
        <div className="clubs-joined">
            <h1 style={{textAlign:"center"}} className="white-text">Clubs joined</h1>
            <div className="joined-clubs-container">
                <div className="clubs-joined-card">
                    <div>
                        <img src={clublogo} alt="club-logo" className="clublogo"/>
                    </div>
                    <div>
                        <div  className="clubname">NSS</div>
                        <div className="clubfullname">National Service Scheme sc</div>
                    </div>
                </div>
                <div className="clubs-joined-card"></div>
                <div className="clubs-joined-card"></div>
                <div className="clubs-joined-card"></div>
                <div className="clubs-joined-card"></div>
            </div>
        </div>
    )
}

export default Clubsjoined