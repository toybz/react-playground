import React, { useEffect, useState } from "react";

type Props = {
  pageTitle?: string;
  pageBackground?: string;
  key?: number;
  isVisible?: boolean;
  items?: string[];
};

export function TypeScriptPage(props: Props) {
  const [userName, setUsername] = useState<string>("");

  const updateUsername = () => {
    setUsername("Set");
  };

  useEffect(() => {
    updateUsername();
  }, []);

  return (
    <>
      <p> Typescript Page djbdihddi</p>
      <p>Username is {userName}</p>
    </>
  );
}
