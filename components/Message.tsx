/* eslint-disable @next/next/no-img-element */
import { DocumentData } from "firebase/firestore";

type Props = {
  message: DocumentData;
};

const Message = ({ message }: Props) => {
  const isChatGPT = message.user.name === "ChatGPT";
  return (
    <div className={`py-5 text-white ${isChatGPT && "bg-[#434654]"}`}>
      <div className="flex max-w-2xl px-10 mx-auto space-x-5">
        <img src={message.user.avatar} alt="" className="h-10 rounded-full" />
        <p className="">{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
