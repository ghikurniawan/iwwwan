"use client";

import { FC, useEffect } from "react";
import { statViewAction } from "../_actions";

const TrackView: FC<{ slug: string }> = ({ slug }) => {
  useEffect(() => {
    const stats = async () => {
      await statViewAction(slug);
    };
    stats();
  });
  return <></>;
};

export default TrackView;
