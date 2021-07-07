import poster from '../assets/tet.png'
import ShowMoreText from 'react-show-more-text';
import like from '../assets/Heart.svg'
import comment from'../assets/comment.svg'
import share from '../assets/share.svg'
function Feed(){
    function executeOnClick(isExpanded) {
        console.log(isExpanded);
    }
    return(
        <div className="profile-feed-container">

            <div className="profile-feed-card">
                <img src={poster} className="profile-poster"/>
                <div  className="icons-bar">
                    <div>
                    <img src={like} alt="like" className="sh-icon"/>
                    <img src={comment} alt="comment" className="sh-icon"/>
                    </div>
                    <div>
                    <img src={share} alt="share" className="sh-icon"/>
                    </div>


                </div>
                <div className="bottom-feed white-text">
                    <div style={{margin:"20px"}}><ShowMoreText
                /* Default options */
                lines={2}
                more='more'
                less='less'
                className='content-css'
                anchorClass='my-anchor-css-class'
                onClick={executeOnClick}
                expanded={false}
                width={280}
            >
                Lorem ipsum dolor sit amet, consectetur , 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi
                ut aliquip ex Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore
 
                et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitationdfewafef
                wfaedfwweafa4we
            </ShowMoreText></div>
                </div>
            </div>
            <div className="profile-feed-card">
                <img src={poster} className="profile-poster"/>
                <div  className="icons-bar">
                    <div>
                    <img src={like} alt="like" className="sh-icon"/>
                    <img src={comment} alt="comment" className="sh-icon"/>
                    </div>
                    <div>
                    <img src={share} alt="share" className="sh-icon"/>
                    </div>


                </div>
                <div className="bottom-feed white-text">
                    <div style={{margin:"20px"}}><ShowMoreText
                /* Default options */
                lines={2}
                more='more'
                less='less'
                className='content-css'
                anchorClass='my-anchor-css-class'
                onClick={executeOnClick}
                expanded={false}
                width={280}
            >
                Lorem ipsum dolor sit amet, consectetur , 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi
                ut aliquip ex Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore
 
                et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitationdfewafef
                wfaedfwweafa4we
            </ShowMoreText></div>
                </div>
            </div>
            <div className="profile-feed-card">
                <img src={poster} className="profile-poster"/>
                <div  className="icons-bar">
                    <div>
                    <img src={like} alt="like" className="sh-icon"/>
                    <img src={comment} alt="comment" className="sh-icon"/>
                    </div>
                    <div>
                    <img src={share} alt="share" className="sh-icon"/>
                    </div>


                </div>
                <div className="bottom-feed white-text">
                    <div style={{margin:"20px"}}><ShowMoreText
                /* Default options */
                lines={2}
                more='more'
                less='less'
                className='content-css'
                anchorClass='my-anchor-css-class'
                onClick={executeOnClick}
                expanded={false}
                width={280}
            >
                Lorem ipsum dolor sit amet, consectetur , 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi
                ut aliquip ex Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore
 
                et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitationdfewafef
                wfaedfwweafa4we
            </ShowMoreText></div>
                </div>
            </div>

        </div>
    )
}
export default Feed