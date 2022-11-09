import { BigHead } from '@bigheads/core'
import { ProfileStyle } from './style';

const Profile = () => {
    return( 
    <ProfileStyle>
     <BigHead
        accessory="none"
        body="breasts"
        circleColor="blue"
        clothing="dress"
        clothingColor="black"
        eyebrows="concerned"
        eyes="happy"
        faceMask={false}
        faceMaskColor="green"
        facialHair="none3"
        graphic="react"
        hair="long"
        hairColor="blue"
        hat="beanie"
        hatColor="red"
        lashes={false}
        lipColor="turqoise"
        mask
        mouth="serious"
        skinTone="red"
     />
     <h1>Welcome</h1>
    </ProfileStyle>
    )
};

export default Profile;