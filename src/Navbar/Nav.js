import { Navbar, NavbarContent, NavbarItem, Input, Button } from "@nextui-org/react";
import { SearchIcon } from "../Components/SearchIcon";
import { Spacer } from "@nextui-org/react";
import React, { useState } from "react";

export default function Nav({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent form submission and page reload

    // Pass the search term to the parent component (App) for searching
    onSearch(searchTerm);
  };

  return (
    <Navbar isBordered='true' className='bg-grey'>
      <NavbarContent >
        <NavbarItem>
          <img
            width="32"
            height="32"
            src="https://img.icons8.com/external-anggara-flat-anggara-putra/32/000000/external-contact-basic-user-interface-anggara-flat-anggara-putra.png"
            alt="external-contact-basic-user-interface-anggara-flat-anggara-putra"
          />
        </NavbarItem>
        <h1>Address Book</h1>
        <NavbarItem>
          <form onSubmit={handleSearch} className="flex items-center"> {/* Use a flex container */}
            <div className="ml-auto mr-0 flex items-center"> {/* Use flex to align elements */}
              <Input 
                classNames={{
                  base: "w-30 sm:w-32 h-10", // Adjust the width here
                  mainWrapper: "h-full",
                  input: "text-small",
                  inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                }}
                placeholder="Type to search..."
                size="sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                type="search"
              />
              <Button type="submit"> {/* Use a button type submit to trigger the form submission */}
                <SearchIcon size={18} />
              </Button>
            </div>
          </form>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
