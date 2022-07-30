import {Button, Popup} from "semantic-ui-react";


const DownloadMatchModButton = ({match}) => {


    return (
        <Popup
            content="Unzip this to a directory, then place that directory inside Documents/My Games/Sid Meier's Civilization VI/Mods"
            trigger={<Button as='a' href={'/api/mods/matches/'+match.matchId}>Download mod pack</Button>}
        />
    )
}

export default DownloadMatchModButton;