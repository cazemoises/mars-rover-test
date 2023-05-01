import { ModalStructureStyles } from "./ModalStructure.styles";

// Define the props interface for the component
interface IModalStructure {

    children: React.ReactNode

}

const ModalStructure = (props: IModalStructure) => {

    return (
        <ModalStructureStyles.Overlay>
            <ModalStructureStyles.Container>
                {props.children}
            </ModalStructureStyles.Container>
        </ModalStructureStyles.Overlay>
    )

}

export default ModalStructure;