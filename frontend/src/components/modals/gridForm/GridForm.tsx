// Import necessary components and modules
import { GridFormStyles } from "./GridForm.styles";
import ModalStructure from "../structure/ModalStructure";
import { useState } from "react";
import axios from "axios";
import successToast from "../../toasts/successToast";
import errorToast from "../../toasts/errorToast";

    interface IGridFormProps {
        handleCreateModalVisible: () => void;
    }

    const GridForm = (props: IGridFormProps) => {

    // State for grid data
    const [gridData, setGridData] = useState({
        title: "",
        x_limit: 0,
        y_limit: 0
    });

    // Handle input change
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        
        // If the name is not 'title', parse the value to integer
        if (name !== 'title') {
            const parsedValue = parseInt(value);
            
            return setGridData((prevState) => ({
                ...prevState,
                [name]: parsedValue,
            }));

        }
        
        // If the name is 'title', update the state with the new value
        return setGridData((prevState) => ({
            ...prevState,
            [name]: value.trim(),
        }));
    };

    // Handle form submit
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Send the data to the server
        try {
            const response = await axios.post('http://127.0.0.1:3001/grid/', JSON.stringify(gridData), {
                headers: {
                    'Content-Type': 'application/json'
                },
                responseType: 'json'
            });

            // Show success toast, hide the modal and reload the page
            successToast(response.data.success.title);
            props.handleCreateModalVisible();
            setTimeout(() => {
                window.location.reload();
            }, 1500)

        } catch (error: any) {
            // Show error toast
            errorToast(error.response.data.error.title);
        }
    }

    return (
        <ModalStructure>

                <GridFormStyles.TitleSubtitleWrapper>
                    <GridFormStyles.Title>Add a new project</GridFormStyles.Title>
                    <GridFormStyles.Subtitle><GridFormStyles.Bold>Create</GridFormStyles.Bold> a new grid.</GridFormStyles.Subtitle>
                </GridFormStyles.TitleSubtitleWrapper>

                <GridFormStyles.Form onSubmit={handleSubmit}>
                    <GridFormStyles.InputWrapper>
                        <GridFormStyles.Label htmlFor="project-label">Project label</GridFormStyles.Label>
                        <GridFormStyles.Input id="project-label" name="title" onChange={handleInputChange} required placeholder="e.g. My New Project" type="text" />
                    </GridFormStyles.InputWrapper>
                    <GridFormStyles.Row>    
                        <GridFormStyles.InputWrapper>
                            <GridFormStyles.Label htmlFor="grid-width">Grid's width</GridFormStyles.Label>
                            <GridFormStyles.Input id="grid-width" name="x_limit" onChange={handleInputChange} required placeholder="e.g. 10 means 0-9" type="number" min={0} max={2147483647} />
                        </GridFormStyles.InputWrapper>
                        <GridFormStyles.InputWrapper>
                            <GridFormStyles.Label htmlFor="grid-height">Grid's height</GridFormStyles.Label>
                            <GridFormStyles.Input id="grid-height" name="y_limit" onChange={handleInputChange} required placeholder="e.g. 20 means 0-9" type="number" min={0} max={2147483647} />
                        </GridFormStyles.InputWrapper>
                    </GridFormStyles.Row>
                    <GridFormStyles.ButtonsWrapper>
                        <GridFormStyles.CloseButton onClick={props.handleCreateModalVisible}>Close</GridFormStyles.CloseButton>
                        <GridFormStyles.Confirm type="submit" value={"Create"} />
                    </GridFormStyles.ButtonsWrapper>
                </GridFormStyles.Form>
        </ModalStructure>
    )

}

export default GridForm;