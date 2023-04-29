import { ModalStructureStyles } from "./ModalStructure.styles";

interface IModalStructure {

    children: React.ReactNode

}

const ModalStructure = (props: IModalStructure) => {

    return (
        <ModalStructureStyles.Container>
            {props.children}
        </ModalStructureStyles.Container>
    )

}

export default ModalStructure;