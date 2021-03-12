import React from "react" 
import {Modal, Card, Button} from "react-bootstrap"

export default function ModalDelete(props){
    
    return(
        <>
            <Modal 
            size="md"
                aria-labelledby="contained-modal-title-vcenter"
                {... props}
                centered
            >
                
            </Modal>
        </>
    )
}

