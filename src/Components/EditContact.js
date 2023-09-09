import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "@nextui-org/react";

export default function EditContact({ contact, onSave, onCancel }) {
  const [name, setName] = useState(contact.name);
  const [phoneNumber, setPhoneNumber] = useState(contact.phone);
  const [email, setEmail] = useState(contact.email);
  const [address, setAddress] = useState(contact.address);

  function editHandler(e) {
    e.preventDefault(); // Prevent the form from submitting and refreshing the page

    // Create a new contact object with the updated data
    const updatedContact = {
      ...contact, // Copy the existing contact data
      name: name, // Update the name
      phone: phoneNumber, // Update the phone number
      email: email, // Update the email
      address: address, // Update the address
    };

    // Call the onSave function to save the edited contact
    onSave(updatedContact);
  }

  return (
    <div style={{ position: "relative" }}>
      <Modal isOpen={true} placement="bottom" backdrop="blur" color="primary">
        <ModalContent>
          <form onSubmit={editHandler}>
            <ModalHeader className="flex flex-col gap-1">Edit Contact</ModalHeader>
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
              <Button color="primary" variant="flat" onPress={onCancel}>
                Cancel
              </Button>
              <Button type="submit" color="warning">
                Save
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </div>
  );
}
