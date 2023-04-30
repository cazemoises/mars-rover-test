import axios from "axios";

import { useState } from "react";

import ModalStructure from "../structure/ModalStructure";

import { LandRoverModalStyles } from "./LandRoverModal.styles";
import errorToast from "../../toasts/errorToast";
import successToast from "../../toasts/successToast";

interface GridFormProps {
    handleCreateModalVisible: () => void,
    gridId: number,
    maxX: number,
    maxY: number
}

const LandRoverModal = (props: GridFormProps) => {

    const [ roverData, setRoverData ] = useState({
        rover_label: "CAZE ADICIONOU PELO AXIOS",
        x_pos: 1,
        y_pos: 1,
        direction: "E",
        grid_id: props.gridId
    });

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement>
        ) => {
            
            const { name, value } = event.target;
        
            if (name !== "direction" && name !== "rover_label") {
    
                const parsedValue = parseInt(value);
                
                return setRoverData((prevState) => ({
                    ...prevState,
                    [name]: parsedValue,
                }));
                
            }
            
            return setRoverData((prevState) => ({
                ...prevState,
                [name]: value,
            }));
    
        };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {

            console.log(roverData);

            const response = await axios.post("http://127.0.0.1:3001/rover/", JSON.stringify(roverData), {
                headers: {
                    "Content-Type": "application/json"
                },
                responseType: "json"
            });

            console.log(response);
            successToast(response.data.success.title);
            props.handleCreateModalVisible();
            setTimeout(() => {
                window.location.reload();
            }, 1500)

        } catch(error: any) {

            errorToast(error.response.data.title);

        }

    }

    return (
        <ModalStructure>
                <LandRoverModalStyles.TitleSubtitleWrapper>
                    <LandRoverModalStyles.Title>Land a rover</LandRoverModalStyles.Title>
                    <LandRoverModalStyles.Subtitle><LandRoverModalStyles.Bold>Register</LandRoverModalStyles.Bold> a new rover in this plateau.</LandRoverModalStyles.Subtitle>
                </LandRoverModalStyles.TitleSubtitleWrapper>

                <LandRoverModalStyles.Form onSubmit={handleSubmit}>
                    <LandRoverModalStyles.Row>    
                        <LandRoverModalStyles.InputWrapper>
                            <LandRoverModalStyles.Label htmlFor="rover-label">Name</LandRoverModalStyles.Label>
                            <LandRoverModalStyles.Input id="rover-label" name="rover_label" onChange={handleInputChange} required placeholder="e.g. Sparkle" type="text" maxLength={100} />
                        </LandRoverModalStyles.InputWrapper>
                        <LandRoverModalStyles.InputWrapper>
                            <LandRoverModalStyles.Label htmlFor="direction">Direction</LandRoverModalStyles.Label>
                            <LandRoverModalStyles.Input id="direction" name="direction" onChange={handleInputChange} required placeholder="e.g. E (means east)" type="text" maxLength={1} />
                        </LandRoverModalStyles.InputWrapper>
                    </LandRoverModalStyles.Row>
                    <LandRoverModalStyles.Row>    
                        <LandRoverModalStyles.InputWrapper>
                            <LandRoverModalStyles.Label htmlFor="x-position">X position</LandRoverModalStyles.Label>
                            <LandRoverModalStyles.Input id="x-position" name="x_pos" onChange={handleInputChange} required placeholder="e.g. 10" type="number" min={0} max={props.maxX - 1} />
                        </LandRoverModalStyles.InputWrapper>
                        <LandRoverModalStyles.InputWrapper>
                            <LandRoverModalStyles.Label htmlFor="y-position">Y position</LandRoverModalStyles.Label>
                            <LandRoverModalStyles.Input id="y-position" name="y_pos" onChange={handleInputChange} required placeholder="e.g. 10" type="number" min={0} max={props.maxY - 1} />
                        </LandRoverModalStyles.InputWrapper>
                    </LandRoverModalStyles.Row>
                    <LandRoverModalStyles.ButtonsWrapper>
                        <LandRoverModalStyles.CloseButton onClick={props.handleCreateModalVisible}>Close</LandRoverModalStyles.CloseButton>
                        <LandRoverModalStyles.Confirm type="submit" value={"Create"} />
                    </LandRoverModalStyles.ButtonsWrapper>
                </LandRoverModalStyles.Form>
        </ModalStructure>
    )

}

export default LandRoverModal;