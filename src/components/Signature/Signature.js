import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const Signature = ({
  signatureRef,
  signDate,
  handleClear,
  windowWidth,
  label
}) => {
  return (
    <div className="flex justify-center items-center flex-col">
      {/* <div className="py-5 relative w-12/12 md:w-4/16 lg:w-6/12"> */}
      <div className="relative">        

        <label className="mb-2">{label}</label>

        <canvas
          ref={signatureRef}
          style={{ border: "1px solid rgb(18, 162, 162)" }}
          width={
            windowWidth <= 496
              ? 330
              : windowWidth <= 540
              ? 500
              : windowWidth <= 820
              ? 600
              : 730
          }
          height={400}
        />

        <p className="text-center text-lg mt-2">
          <span>{signDate}</span>
        </p>

        <Button
          variant="outline-secondary"
          className="absolute top-12 right-4"
          onClick={handleClear}
          style={{ color: "rgb(18, 162, 162)" }}
        >
          Erase
        </Button>
      </div>
    </div>
  );
};
