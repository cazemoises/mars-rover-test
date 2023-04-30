import { useState } from "react";
import ModalStructure from "../structure/ModalStructure";
import { MoveRoverFormStyles } from "./MoveRoverForm.styles";
import axios from "axios";
import successToast from "../../toasts/successToast";
import errorToast from "../../toasts/errorToast";

interface RoverProps {

    rover: {
        id: number,
        rover_label: string,
        x_pos: number,
        y_pos: number,
        direction: string,
        grid_id: number
    },
    handleMoveRoverVisible: () => void

}

const MoveRoverForm = (props: RoverProps) => {

    const [ instruction, setInstruction ] = useState('');

    let postData = {
        rover_id: props.rover.id,
        grid_id: props.rover.grid_id,
        instruction: instruction
    };

    const addLetterToInstruction = (letter: string) => {

        setInstruction(instruction + letter);
        
    };

    const handleInstruction = (e: React.ChangeEvent<HTMLInputElement>) => {

        setInstruction(e.target.value);

    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {

            const response = await axios.post('http://127.0.0.1:3001/rover/move', JSON.stringify(postData), {
                headers: {
                    'Content-Type': 'application/json'
                },
                responseType: 'json'
            });
    
            console.log(response);
            successToast(response.data.success.title);
            setTimeout(() => {
                window.location.reload();
            }, 1500);

        } catch (error) {

            errorToast(error.response.data.error.title);

        }

    };

    return (
        <ModalStructure>
            <MoveRoverFormStyles.TitleSubtitleWrapper>
                <MoveRoverFormStyles.Title>Move the rover</MoveRoverFormStyles.Title>
                <MoveRoverFormStyles.Subtitle><MoveRoverFormStyles.Bold>Input</MoveRoverFormStyles.Bold> a command string and move it.</MoveRoverFormStyles.Subtitle>
            </MoveRoverFormStyles.TitleSubtitleWrapper>

            <MoveRoverFormStyles.Form onSubmit={handleSubmit}>
                <MoveRoverFormStyles.InputWrapper>
                    <MoveRoverFormStyles.Label>Movement command</MoveRoverFormStyles.Label>
                    <MoveRoverFormStyles.Input
                        pattern="[LRM]*"
                        title="Please enter only the letters L, R or M"
                        value={instruction}
                        onChange={handleInstruction}
                    />
                </MoveRoverFormStyles.InputWrapper>
                <MoveRoverFormStyles.Row>
                <MoveRoverFormStyles.MoveButton type="button" onClick={(event)=> {addLetterToInstruction("L")}}>L</MoveRoverFormStyles.MoveButton>
                <MoveRoverFormStyles.MoveButton type="button" onClick={(event) => {addLetterToInstruction("M")}}>M</MoveRoverFormStyles.MoveButton>
                <MoveRoverFormStyles.MoveButton type="button" onClick={(event) => {addLetterToInstruction("R")}}>R</MoveRoverFormStyles.MoveButton>
                </MoveRoverFormStyles.Row>
                <MoveRoverFormStyles.ButtonsWrapper>
                            <MoveRoverFormStyles.CloseButton onClick={props.handleMoveRoverVisible}>Close</MoveRoverFormStyles.CloseButton>
                            <MoveRoverFormStyles.Confirm type="submit" value={"Create"} />
                </MoveRoverFormStyles.ButtonsWrapper>
            </MoveRoverFormStyles.Form>
        </ModalStructure>
    )

}

export default MoveRoverForm;