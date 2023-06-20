import React, { useEffect, useRef, useState } from "react";
import SignaturePad from "signature_pad";
import { Signature } from "../../Components/Signature";

export const InputSign = ({ onSign, initialSignature, signDate, label }) => {
  const signatureRef = useRef(null);
  const signaturePadRef = useRef(null);
  const [isEmpty, setIsEmpty] = React.useState(!initialSignature);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Add this line

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    const signaturePad = new SignaturePad(signatureRef.current);
    signaturePadRef.current = signaturePad;
    signaturePad.minWidth = 1;
    signaturePad.maxWidth = 2;

    if (initialSignature) {
      signaturePad.fromDataURL(initialSignature, {
        ratio: 1,
        width:
          windowWidth <= 496
            ? 330
            : windowWidth <= 540
            ? 500
            : windowWidth <= 820
            ? 600
            : 730,
        height: 400,
        xOffset: 0,
        yOffset: 0,
      });
    }

    const currentDate = new Date();
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }).format(currentDate);

    signaturePad.addEventListener("endStroke", () => {
      if (signaturePadRef?.current?.isEmpty()) {
        return;
      }

      const dataURL = signaturePadRef?.current?.toDataURL();
      setIsEmpty(false);
      onSign(dataURL, formattedDate);
    });

    return () => {
      signaturePad.off();
      signaturePad.clear();
      window.removeEventListener("resize", handleResize);
    };
  }, [initialSignature, onSign]);

  const handleClear = () => {
    signaturePadRef?.current?.clear();
    setIsEmpty(true);
  };

  return (
    <Signature
      signatureRef={signatureRef}
      isEmpty={isEmpty}
      signDate={signDate}
      handleClear={handleClear}
      label={label}
      windowWidth={windowWidth} // Pass windowWidth as a prop
    />
  );
};
