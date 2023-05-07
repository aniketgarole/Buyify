import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, useDisclosure } from "@chakra-ui/react"
import WomenSidebar from "./WomenSidebar"
import React from "react"

function WomenDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button width={"100%"}  ref={btnRef} bgColor={"#e78420"} _hover={{bgColor:"#232f3e",color:"white"}}  onClick={onOpen}>
        Filters
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            {/* <DrawerHeader>Filter your Product</DrawerHeader> */}
  
            <DrawerBody>
              <WomenSidebar/>
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose} backgroundColor={"#232f3e"} color={"white"}>
                Apply filters
              </Button>
            
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default WomenDrawer