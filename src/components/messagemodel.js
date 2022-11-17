// import React from 'react'
// import { Button, Header, Icon, Modal } from 'semantic-ui-react'

// // function messagemodel() {
// //   const [open, setOpen] = React.useState(false)

// //   return (
   
// //   )
// // }

// // export default messagemodel

// // import React from 'react';

// const initialList = [];
// const [open, setOpen] = React.useState(false)

// const messagemodel = () => {
//   const [list, setList] = React.useState(initialList);

//   return (
//     <div>
//       <ul>
//         {list.map(item => (
//           <li key={item}>{item}</li>
//         ))}
//       </ul>
//       <Modal
//       closeIcon
//       open={open}
//       trigger={<Button>Show Modal</Button>}
//       onClose={() => setOpen(false)}
//       onOpen={() => setOpen(true)}
//     >
//       <Header icon='archive' content='Archive Old Messages' />
//       <Modal.Content>
//         <p>
//           Your inbox is getting full, would you like us to enable automatic
//           archiving of old messages?
//         </p>
//       </Modal.Content>
//       <Modal.Actions>
//         <Button color='red' onClick={() => setOpen(false)}>
//           <Icon name='remove' /> Cancel 
//         </Button>
//         <Button color='green' onClick={() => setOpen(false)}>
//           <Icon name='checkmark' /> Submit
//         </Button>
//       </Modal.Actions>
//     </Modal>
//     </div>
//   );
// };

// export default messagemodel;
