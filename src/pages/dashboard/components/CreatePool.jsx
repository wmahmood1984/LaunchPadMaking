import React, { useState } from "react";
import { Container, Form, Tab, Tabs } from "react-bootstrap";
import Live from "./CreatePoolItems/Live";
import Upcoming from "./CreatePoolItems/Upcoming";
import End from "./CreatePoolItems/End";

function CreatePool() {
  const [createpoolLive, setCreatepoolLive] = useState(false);
  const [createpoolUpcoming, setCreatepoolUpcoming] = useState(false);
  const [createpoolEnd, setCreatepoolEnd] = useState(false);
  const [upcoming, setUpcoming] = useState(false)
  const [end, setEnd] = useState(false)
  const [live, setLive] = useState(false)

  
  const handleUpcoming = () => {
    setUpcoming(true)
  }
  const handleEnd = () => {
    setEnd(true)
  }
  const handleLive = () => {
    setLive(true)
  }
  const createPoolItemLive = () => {
    setCreatepoolLive(true);
  };
  const createPoolItemUpcoming = () => {
    setCreatepoolUpcoming(true);
  };
  const createPoolItemEnd = () => {
    setCreatepoolEnd(true);
  };

  return (
    <div className="createPool">
      <Container>
        <h1 className="text-center fw-bold mt-3">Create Pool</h1>
        <p className='text-center'>Please fill all the pool details</p>
       <Form>
       <Tabs
          defaultActiveKey="live"
          id="justify-tab-example"
          className="my-3 mt-5"
          justify
        >
           <Tab eventKey="live" title="LIVE" onClick={() => handleLive()}>
            <Live live={live} poolItemLive={createPoolItemLive} createpoolLive={createpoolLive} />
          </Tab>
          <Tab eventKey="upcoming" title="UPCOMING" onClick={() => handleUpcoming()}>
            <Upcoming  upcoming={upcoming} poolItemUpcoming={createPoolItemUpcoming} createpoolUpcoming={createpoolUpcoming} />
          </Tab>
          <Tab eventKey="end" title="END" onClick={() => handleEnd()}>
            <End  end={end} poolItemEnd={createPoolItemEnd} createpoolEnd={createpoolEnd} />
          </Tab>
        </Tabs>
       </Form>
      </Container>
    </div>
  );
}

export default CreatePool;
