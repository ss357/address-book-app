import { useEffect, useState } from "react";
import "./App.css";
import { Navbar, Spinner } from "@nextui-org/react";
import Nav from "./Navbar/Nav";
import ContactList from "./Components/Contact-list";
import { ScrollShadow } from "@nextui-org/react";
import AddContact from "./Components/AddContact";
import EditContact from "./Components/EditContact";

function App() {
  const [contactList, setContactList] = useState([]);
  const [filteredContactList, setFilteredContactList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [editPrompt, setEditPrompt] = useState(false);
  const [editContact, setEditContact] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) throw new Error("Something went wrong");
        return response.json();
      })
      .then((json) => {
        setContactList([...json]);
        setFilteredContactList([...json]);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);

  function addContactHandler(name, phone, email, address) {
    const newContact = {
      id: Math.floor(10 * Math.random()) + 5,
      name: name,
      email: email,
      phone: phone,
      address: address,
    };
    setContactList([newContact, ...contactList]);
    setFilteredContactList([newContact, ...filteredContactList]);
  }

  function deleteContactHandler(id) {
    const filteredList = contactList.filter((item) => item.id !== id);
    setContactList(filteredList);
    setFilteredContactList(filteredList);
  }

  function editContactHandler(id) {
    const foundContact = contactList.find((item) => item.id === id);
    if (foundContact) {
      setEditPrompt(true);
      setEditContact(foundContact);
    }
  }

  function saveEditedContactHandler(updatedContact) {
    const updatedList = contactList.map((contact) =>
      contact.id === updatedContact.id ? updatedContact : contact
    );
    setContactList(updatedList);
    setFilteredContactList(updatedList);
    setEditPrompt(false);
  }

  function cancelEditContactHandler() {
    setEditPrompt(false);
  }

  function handleSearch(searchTerm) {
    const filteredList = contactList.filter((contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredContactList(filteredList);
  }

  return (
    <div>
      <Nav onSearch={handleSearch} />
      <AddContact onAdd={addContactHandler}></AddContact>
      {editPrompt && (
        <EditContact
          contact={editContact}
          onSave={saveEditedContactHandler}
          onCancel={cancelEditContactHandler}
        />
      )}
      <div className="flex justify-center items-center">
        {isLoading && (
          <Spinner
            className=""
            size="lg"
            label="Getting Your Contacts..."
            color="primary"
            labelColor="primary"
          ></Spinner>
        )}
        {!isLoading && filteredContactList.length !== 0 && (
          <ScrollShadow hideScrollBar className="w-[300px] h-[400px]">
            <ContactList
              onDelete={deleteContactHandler}
              ContactList={filteredContactList}
              onEdit={editContactHandler}
            ></ContactList>
          </ScrollShadow>
        )}
      </div>
    </div>
  );
}

export default App;
