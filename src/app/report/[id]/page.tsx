import React from "react";

type Props = {
  params: {
    id: string;
  };
};

const Report = ({ params }: Props) => {
  return <div>{params.id}</div>;
};

export default Report;
