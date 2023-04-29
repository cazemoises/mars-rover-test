import { GridFormStyles } from "./GridForm.styles";
import ModalStructure from "../structure/ModalStructure";
import { useState } from "react";

interface GridFormProps {
    handleCreateModalVisible: () => void;
}

const GridForm = (props:GridFormProps) => {

    const [projectLabel, setProjectLabel] = useState("");
    const [gridWidth, setGridWidth] = useState("");
    const [gridHeight, setGridHeight] = useState("");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data = {
            projectLabel,
            gridWidth,
            gridHeight
        };

        const response = await fetch('http://127.0.0.1:3001/rover/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        console.log(response);
        // handle response here
    }

    return (
        <ModalStructure>
            <GridFormStyles.Container>

                <GridFormStyles.TitleSubtitleWrapper>
                    <GridFormStyles.Title>Add a new project</GridFormStyles.Title>
                    <GridFormStyles.Subtitle><GridFormStyles.Bold>Create</GridFormStyles.Bold> a new grid.</GridFormStyles.Subtitle>
                </GridFormStyles.TitleSubtitleWrapper>

                <GridFormStyles.Form onSubmit={handleSubmit}>
                    <GridFormStyles.InputWrapper>
                        <GridFormStyles.Label htmlFor="project-label">Project label</GridFormStyles.Label>
                        <GridFormStyles.Input required placeholder="e.g. My New Project" type="text" id="project-label" />
                    </GridFormStyles.InputWrapper>
                    <GridFormStyles.Row>    
                        <GridFormStyles.InputWrapper>
                            <GridFormStyles.Label htmlFor="grid-width">Grid's width</GridFormStyles.Label>
                            <GridFormStyles.Input required placeholder="e.g. 10" type="number" min={0} max={2147483647} id="grid-width" />
                        </GridFormStyles.InputWrapper>
                        <GridFormStyles.InputWrapper>
                            <GridFormStyles.Label htmlFor="grid-height">Grid's height</GridFormStyles.Label>
                            <GridFormStyles.Input required placeholder="e.g. 20" type="number" min={0} max={2147483647} id="grid-height" />
                        </GridFormStyles.InputWrapper>
                    </GridFormStyles.Row>
                    <GridFormStyles.ButtonsWrapper>
                        <GridFormStyles.CloseButton onClick={props.handleCreateModalVisible}>Close</GridFormStyles.CloseButton>
                        <GridFormStyles.Confirm type="submit" value={"Create"} />
                    </GridFormStyles.ButtonsWrapper>
                </GridFormStyles.Form>

            </GridFormStyles.Container>
        </ModalStructure>
    )

}

export default GridForm;