import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

export default function DeleteContactPopUp() {
  

  return (
    <>
      
      <Modal isOpen='true' backdrop='blur'>
        <ModalContent>
         
              <ModalHeader className="flex flex-col gap-1">Are you sure to delete this contact?</ModalHeader>
              
              <ModalFooter>
                <Button color="danger" variant="light" >
                  Yes
                </Button>
                <Button color="primary">
                 No
                </Button>
              </ModalFooter>
           
          
        </ModalContent>
      </Modal>
    </>
  );
}
