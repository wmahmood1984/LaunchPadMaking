import { Button } from "bootstrap";
import React, { useState } from "react";

function CreateLive() {
 
  return (
    <div className="text-center">
      <Button
        variant="dark fs-1 text-center fw-bold mx-auto w-50 my-3 border-success border-3">
        Create pool
      </Button>
    </div>
  );
}

export default CreateLive;
