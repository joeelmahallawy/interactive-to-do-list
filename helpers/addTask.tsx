// import {
//   Button,
//   FormControl,
//   FormLabel,
//   Input,
//   Modal,
//   ModalBody,
//   ModalCloseButton,
//   ModalContent,
//   ModalFooter,
//   ModalHeader,
//   ModalOverlay,
//   useDisclosure,
// } from "@chakra-ui/react";
// import React, { useRef } from "react";
// import { IoAddCircle } from "react-icons/io5";

// export default function AddTask({ arr }) {
//   const task = useRef();
//   const timeNeeded = useRef();
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   return (
//     <>
//       <Button
//         height="60px"
//         width="45%"
//         border="2px"
//         bg="gray.300"
//         borderColor="green.500"
//         fontSize="300%"
//         _hover={{ bg: "gray.400" }}
//         onClick={onOpen}
//       >
//         <IoAddCircle color="darkgray" />
//       </Button>
//       <Modal
//         isCentered
//         onClose={onClose}
//         isOpen={isOpen}
//         motionPreset="slideInBottom"
//       >
//         <ModalOverlay />
//         <ModalContent h="400px">
//           <ModalHeader>Modal Title</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <FormControl>
//               <FormLabel>Task</FormLabel>
//               <Input type="text" ref={task} />
//             </FormControl>
//             <FormControl>
//               <FormLabel>Time needed</FormLabel>
//               <Input type="number" ref={timeNeeded} />
//             </FormControl>
//           </ModalBody>

//           <ModalFooter>
//             <Button
//               colorScheme="blue"
//               onClick={() => {
//                 const copy = [...arr];
//                 copy.push({
//                   // @ts-expect-error
//                   task: task.current.value,
//                   // @ts-expect-error
//                   timeNeeded: timeNeeded.current.value,
//                 });
//                 arr = [...copy];
//                 onClose();
//               }}
//             >
//               Add!
//             </Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </>
//   );
// }
