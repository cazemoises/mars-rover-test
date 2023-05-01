import BackStyles from "./Back.styles";

import backImg from '../../assets/back.svg';

const Back = () => {

    return (
        <BackStyles.Button onClick={()=>{history.back()}}>
            <BackStyles.Img src={backImg} />
        </BackStyles.Button>
    )

}

export default Back;