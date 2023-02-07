import React from "react";
import { storiesOf } from "@storybook/react";
import { Details } from "../components/Details/Details";

const stories = storiesOf("App Test", module);

stories.add("App", () => {
  return <Details />;
});
