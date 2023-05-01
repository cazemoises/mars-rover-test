// Importing React hooks and components
import { useState } from "react";
import ModalStructure from "../structure/ModalStructure";
import { MoveRoverFormStyles } from "./MoveRoverForm.styles";
import axios from "axios";
import successToast from "../../toasts/successToast";
import errorToast from "../../toasts/errorToast";

// Interface for props passed to the component
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

    // State for the instruction input field
    const [ instruction, setInstruction ] = useState('');

    // Object containing the data to be sent to the server
    let postData = {
        rover_id: props.rover.id,
        grid_id: props.rover.grid_id,
        instruction: instruction
    };

    // Function to add a letter to the instruction state
    const addLetterToInstruction = (letter: string) => {

        setInstruction(instruction + letter);
        
    };

    // Function to remove the last letter from the instruction state
    const removeLetterToInstruction = () => {
        setInstruction(prevInstruction => prevInstruction.slice(0, -1));
    }    

    // Function to handle changes in the instruction input field
    const handleInstruction = (e: React.ChangeEvent<HTMLInputElement>) => {

        setInstruction(e.target.value);

    };

    // Function to handle the submission of the form
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {

            const response = await axios.post('http://127.0.0.1:3001/rover/move', postData, {
                headers: {
                    'Content-Type': 'application/json'
                },
                responseType: 'json'
            });
    
            // Display success toast and reload page after 1.5 seconds
            successToast(response.data.success.title);
            setTimeout(() => {
                window.location.reload();                
            }, 1500);

        } catch (error: any) {

            // Display error toast
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
                <MoveRoverFormStyles.MoveButton type="button" onClick={()=> {addLetterToInstruction("L")}}>L</MoveRoverFormStyles.MoveButton>
                <MoveRoverFormStyles.MoveButton type="button" onClick={() => {addLetterToInstruction("M")}}>M</MoveRoverFormStyles.MoveButton>
                <MoveRoverFormStyles.MoveButton type="button" onClick={() => {addLetterToInstruction("R")}}>R</MoveRoverFormStyles.MoveButton>
                <MoveRoverFormStyles.Clear type="button" onClick={removeLetterToInstruction}>X</MoveRoverFormStyles.Clear>
                </MoveRoverFormStyles.Row>
                <MoveRoverFormStyles.ButtonsWrapper>
                            <MoveRoverFormStyles.CloseButton onClick={props.handleMoveRoverVisible}>Close</MoveRoverFormStyles.CloseButton>
                            <MoveRoverFormStyles.Confirm type="submit" value={"Move"} />
                </MoveRoverFormStyles.ButtonsWrapper>
            </MoveRoverFormStyles.Form>
        </ModalStructure>
    )

}

export default MoveRoverForm;