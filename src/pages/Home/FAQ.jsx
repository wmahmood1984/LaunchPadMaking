import React from "react";
import Accordion from "react-bootstrap/Accordion";

function FAQ() {
  return (
    <>
      <Accordion flush className="py-5 my-5">
        <h1 className="text-center fw-bolder mt-3 mb-5 text-success">FAQ's</h1>
        <Accordion.Item eventKey="0" className="mb-3">
          <Accordion.Header>Why we use movepad Launchpad ?</Accordion.Header>
          <Accordion.Body className="bg-secondary text-light">
            Because if you invest in our launchpad project, first you will get
            potential projects which will give you good return. And secondly
            both your funds or investment will be safe and you can also take
            your investment before listing that’s why you have to use movepad
            launchpad.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" className="mb-3">
          <Accordion.Header>
            How is different from other Launchpad ?
          </Accordion.Header>
          <Accordion.Body className="bg-secondary text-light">
            Because we will support each and every chain And we will also launch
            INO but our launchpad is so different because If investor is not
            happy So we will refund them or give them profits more than their
            investment.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" className="mb-3">
          <Accordion.Header>How our funds are save from you ?</Accordion.Header>
          <Accordion.Body className="bg-secondary text-light">
            Whatever IGO in our platform is absolutely potential and you will
            get good return from it. And as we said, you can take your
            investment before listing. And we have our own private hardware
            Wallet made by our company whose name is Movwallet.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3" className="mb-3">
          <Accordion.Header>
            Can we get back our investment before listing, if yes then how ?
          </Accordion.Header>
          <Accordion.Body className="bg-secondary text-light">
            Yes, you can get back your investment before listing, if you didn’t
            claim your token & if you want your investment you have to claim on
            our platform on pool sections which you have invested.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4" className="mb-3">
          <Accordion.Header>
            Can we launch our project on movepad Launchpad if yes then how ?
          </Accordion.Header>
          <Accordion.Body className="bg-secondary text-light">
            Yes, project owner can launch their project, but we only launch or
            support potential, GameFi, Metaverse, M2E , P2E , E2E Projects.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5" className="mb-3">
          <Accordion.Header>
            What’s your future plan & how you will beat your competitors ?
          </Accordion.Header>
          <Accordion.Body className="bg-secondary text-light">
            We want to do next level as much we can, in future we will release
            our own P2E , Tokens , NFTs , Staking , Marketplace, give Gurranted
            Allocation To users, Make Movepad Branding Etc.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

export default FAQ;
