import ContactCard from "./Contact-Card";
import { Spacer } from "@nextui-org/react";
export default function ContactList(props) {
  function deleteContactHandler(id) {
    console.log(id);
    props.onDelete(id);
  }

  function editContactHandler(id) {
    props.onEdit(id);
  }

  return (
    <ul>
      {props.ContactList.map((contact) => {
        return (
          <li key={contact.id}>
            <Spacer y={4} />

            <ContactCard
              deleteContact={deleteContactHandler}
              onEdit={editContactHandler}
              id={contact.id}
              name={contact.name}
              email={contact.email}
              phone={contact.phone}
              address={
                typeof contact.address === "object"
                  ? `${contact.address.street}, ${contact.address.city}, ${contact.address.zipcode}`
                  : `${contact.address}`
              }
            ></ContactCard>
          </li>
        );
      })}
    </ul>
  );
}
