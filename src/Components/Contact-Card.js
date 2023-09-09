import { Card, CardHeader, CardBody, Tooltip, Spacer } from "@nextui-org/react";
import { useState } from "react";
import editIcon from '../edit.png';
import deleteIcon from '../delete.png';
import DeleteContactPopUp from "./PopUps/DeleteContactPopUp";

export default function ContactCard(props) {
  const [isHovered, setIsHovered] = useState(false);


  function deleteContactHandler(event){
    
     
    props.deleteContact(props.id)
  }

  function editContactHandler(){
     props.onEdit(props.id)
  }

  return (
    <Card 
    
    key={props.id}
      className={`max-w-[3000px] h-20 ${isHovered ? 'transform scale-125 transition-transform' : ''}`}
      isHoverable={true}
      shadow="md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      

      <CardHeader className="flex justify-between items-center">
        <h1
          style={{
            color: "#7DF9FF",
            fontSize: "1.2rem",
            fontFamily: "sans-serif",
            fontWeight: "bolder",
          }}
        >
          {props.name}
        </h1>
        {isHovered && (
          <div className="flex gap-2">
            <Tooltip content='Edit' color="warning">
              <button onClick={editContactHandler}>
                <img
                  src={editIcon}
                  alt="Edit Icon"
                  className="h-5 w-5"
                />
              </button>
            </Tooltip>
            <Spacer x='2'></Spacer>
            <Tooltip content='Delete' color="danger">
              <button onClick={deleteContactHandler}>
                <img
                  src={deleteIcon}
                  alt="Delete Icon"
                  className="h-5 w-5"
                />
              </button>
            </Tooltip>
          </div>
        )}
      </CardHeader>
      <hr style={{ border: "1px solid blue" }} />
      <CardBody>
        Phone: {props.phone}
        <br />
        Email: {props.email}
        <br />
        Address: {props.address}
      </CardBody>
    </Card>
  );
}
