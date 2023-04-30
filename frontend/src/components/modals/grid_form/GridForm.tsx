import { GridFormStyles } from "./GridForm.styles";
import ModalStructure from "../structure/ModalStructure";
import { useState } from "react";
import axios from "axios";
import successToast from "../../toasts/successToast";

interface IGridFormProps {
    handleCreateModalVisible: () => void;
}

const GridForm = (props: IGridFormProps) => {

    const [gridData, setGridData] = useState({
        title: "",
        x_limit: 0,
        y_limit: 0
      });

    const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
    ) => {

        const { name, value } = event.target;
    
        if (name !== 'title') {

            const parsedValue = parseInt(value);
            
            return setGridData((prevState) => ({
                ...prevState,
                [name]: parsedValue,
            }));
            
        }
        
        return setGridData((prevState) => ({
            ...prevState,
            [name]: value,
        }));

    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log(gridData);

        const response = await axios.post('http://127.0.0.1:3001/grid/', JSON.stringify(gridData), {
            headers: {
                'Content-Type': 'application/json'
            },
            responseType: 'json'
        });

        console.log(response);
        successToast(response.data.success.title);
        props.handleCreateModalVisible();
        setTimeout(() => {
            window.location.reload();
        }, 1500)
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