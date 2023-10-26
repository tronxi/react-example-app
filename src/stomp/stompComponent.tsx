import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {StompClient} from "../services/stomp-client.ts";

export default function StompComponent() {

  const [event, setEvent] = useState<string>("");

  useEffect(() => {
    const stompClient = new StompClient(e=> setEvent(e.body))
    stompClient.activate();
    return () => stompClient.deactivate()
  }, []);
  return (
    <>
      <div className="button">
        <Link to="/">Volver</Link>
      </div>
      <p>
        {event}
      </p>
    </>
  )
}