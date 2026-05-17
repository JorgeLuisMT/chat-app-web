import { useMemo } from "react";

export const useMessageStyle = ({ msgs } = []) => {
  const messages = useMemo(() => {
    let newMessages = [...msgs];
    let previousMsg;
    let currentMsg;
    let styledMsg;
    let cont = 0;
    for (let i = 0; i < newMessages.length; i++) {
      currentMsg = newMessages[i];
      if (!previousMsg) {
        styledMsg = { ...currentMsg, styleMsg: "normal-msg" };
        previousMsg = currentMsg;
        newMessages[i] = styledMsg;
        //console.log(newMessages);
        cont++;
        continue;
      }
      if (
        previousMsg &&
        previousMsg.sender === currentMsg.sender &&
        cont === 1
      ) {
        styledMsg = { ...previousMsg, styleMsg: "top-msg" };
        newMessages[i - 1] = styledMsg;
        previousMsg = currentMsg;
        styledMsg = { ...currentMsg, styleMsg: "bottom-msg" };
        newMessages[i] = styledMsg;
        //console.log(newMessages);
        cont++;
        continue;
      }
      if (
        previousMsg &&
        previousMsg.sender === currentMsg.sender &&
        cont === 2
      ) {
        styledMsg = { ...previousMsg, styleMsg: "normal-msg" };
        newMessages[i - 1] = styledMsg;
        previousMsg = currentMsg;
        styledMsg = { ...currentMsg, styleMsg: "bottom-msg" };
        newMessages[i] = styledMsg;
        //(console.log(newMessages);
        continue;
      }
      if (previousMsg && previousMsg.sender !== currentMsg.sender) {
        //console.log("hola");
        styledMsg = { ...currentMsg, styleMsg: "normal-msg" };
        newMessages[i] = styledMsg;
        previousMsg = currentMsg;
        cont = 1;
      }
    }
    //console.log(newMessages);
    return newMessages;
  }, [msgs]);

  return { messages };
};
