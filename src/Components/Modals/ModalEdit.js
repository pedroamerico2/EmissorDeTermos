import React, {useState, useEffect} from "react" 
import {Modal, Button, Row, Col, FormControl} from "react-bootstrap" 

export default function ModalEdit(props){
   
    return(
        <>
            <Modal 
                size="lg" 
                {... props}
                aria-labelledby="contained-modal-title-vcenter"
            >
                
            </Modal>
        </>
    )
}