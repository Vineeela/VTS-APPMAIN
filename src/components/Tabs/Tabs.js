import React from "react";
import ReactDOM from "react-dom";
import { Tabs, Tab, TabContent, Table } from "react-bootstrap";
import "./Tab.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Tabbs() {
  return (
    <div className="tb">
      <Tabs fill defaultActiveKey="home" id="uncontrolled-tab-example">
        <Tab
          eventKey="home"
          title="Home"
          mountOnEnter // <<<
          unmountOnExit={false} // <<<

        >
          {/* table component applied here */}
          <div className="tble">
          <Table striped bordered hover>
            <thead className="tb">
              <tr className="roww">
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr className="roww">
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
          </div>


          <TabContent tabTitle="Home" />
        </Tab>
        <Tab
          eventKey="profile"
          title="Profile"
          mountOnEnter // <<<
          unmountOnExit={false} // <<<
        >
          <TabContent tabTitle="Profile" />
        </Tab>
      </Tabs>
    </div>
  );
}



const rootElement = document.getElementById("root");
ReactDOM.render(<Tabbs />, rootElement);



export default Tabbs;

// import React, { useState } from 'react';
// import {
//   MDBTabs,
//   MDBTabsItem,
//   MDBTabsLink,
//   MDBTabsContent,
//   MDBTabsPane
// } from 'mdbreact';

// export default function Tabbs() {
//   const [basicActive, setBasicActive] = useState('tab1');

//   const handleBasicClick = (value:string) => {
//     if (value === basicActive) {
//       return;
//     }

//     setBasicActive(value);
//   };

//   return (
//     <>
//       <MDBTabs className='mb-3'>
//         <MDBTabsItem>
//           <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
//             Tab 1
//           </MDBTabsLink>
//         </MDBTabsItem>
//         <MDBTabsItem>
//           <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
//             Tab 2
//           </MDBTabsLink>
//         </MDBTabsItem>
//         <MDBTabsItem>
//           <MDBTabsLink onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}>
// //             Tab 3
//          </MDBTabsLink>
//         </MDBTabsItem>
//        </MDBTabs>

//        <MDBTabsContent>
//          <MDBTabsPane show={basicActive === 'tab1'}>Tab 1 content</MDBTabsPane>
//          <MDBTabsPane show={basicActive === 'tab2'}>Tab 2 content</MDBTabsPane>
//         <MDBTabsPane show={basicActive === 'tab3'}>Tab 3 content</MDBTabsPane>
//       </MDBTabsContent>
//    </>
//  );
//  }