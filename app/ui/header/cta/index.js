import Button from "@/components/Button";
import React from "react";

const HeaderCallToAction = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-start lg:justify-end lg:items-center space-x-0 lg:space-y-0 space-y-3 lg:space-x-4">
      <Button size={"cta"} variant={"default"} className="md:text-xs text-sm shrink-0">
        SINC with us
      </Button>
      <Button variant={"secondary"} size={"cta"} className={"md:text-xs text-sm shrink-0"}>
        Apply to SIP 1.0
      </Button>
    </div>
  );
};

export default HeaderCallToAction;
