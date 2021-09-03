// ********************************************************************************
// sandbox
// ********************************************************************************

import { NextPage } from "next";
import { MainLayout } from "~/components/templates/main";
import { withAuth } from "~/hocs";
import { Circle } from "react-circle";
import { useEffect } from "react";
import { useState } from "react";

const Sandbox: NextPage = () => {
  const percentage = 90;
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(setCount, 100, percentage);
  }, []);
  return (
    <MainLayout>
      <Circle animate={true} progress={count} />
    </MainLayout>
  );
};

export default withAuth(Sandbox);
