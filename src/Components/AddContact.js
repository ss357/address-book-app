import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
  Tooltip,
} from "@nextui-org/react";
import addContact from '../social.png';

export default function AddContact(props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  
  // States to hold input values
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  // Function to handle form submission
  function submithandler(e) {
    // You can access the values here
    e.preventDefault();
    
    console.log("Name:", name);
    console.log("Phone Number:", phoneNumber);
    console.log("Email:", email);
    console.log("Address:", address);
    props.onAdd(name,phoneNumber,email,address)
    setName("");
    setPhoneNumber("");
    setEmail("");
    setAddress("");
   

  }

  return (
    <div style={{ position: "relative" }}>
      <Tooltip content="Add New Contact" color="primary" placement="left-start">
        <Button
          onPress={onOpen}
          color="primary"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 9999,
          }}
        >
          <img src={addContact} alt="Add Contact" height="5px" width="30px" sizes="cover" />
        </Button>
      </Tooltip>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="bottom"
        backdrop="blur"
        color="primary"
        
      >
        <ModalContent>
          {(onClose) => (
            <form onSubmit={submithandler}>
              <ModalHeader className="flex flex-col gap-1">Add New Contact</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  label="Name"
                  variant="bordered"
                  isRequired
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Input
                  autoFocus
                  label="Phone Number"
                  variant="bordered"
                  type="number"
                  isRequired
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <Input
                  label="Email"
                  type="email"
                  variant="bordered"
                  isRequired
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  label="Address"
                  type="text"
                  variant="bordered"
                  isRequired
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={()=>{
                  onClose();
                  setName("")
                  setPhoneNumber("");
                  setEmail("");
                  setAddress("");
                }} >
                  
                  Cancel
                </Button>
                <Button type="submit" color="primary" onClick={onClose}>
                  ADD
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
