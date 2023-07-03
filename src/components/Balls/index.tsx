import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getEvents } from "../../request";
import Ball from "../Ball";

const Balls = () => {
  const dispatch = useAppDispatch();
  const events = useAppSelector((s) => s.eventState.events);

  useEffect(() => {
    getEvents()(dispatch);
  }, []);

  return events.map((event) => (
    <Ball
      key={event.id}
      layoutId={event.id}
      delay={event.id}
      dimension={100}
      title={event.name}
    />
  ));
};

export default Balls;
