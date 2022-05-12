import React,{Fragment} from 'react'
import {Tab,Tabs} from '../components/Tabs/Tab'


const Overview = () => {
  return (
    <main >
      <Tabs>
        <Tab label={"Overall"} tabName={"Overall"}>
          <p>Inject your component here</p>
        </Tab>
        <Tab label={"Vehicle Summary"} tabName={"Vehicle Summary"}>
          <p>Inject your component here</p>
        </Tab>
      </Tabs>
      
    </main>


   
  )
};
export default Overview;
