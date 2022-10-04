import { FC, useEffect, useState } from "react";
import {
	CallContainer
} from "../../../assets/index.styles";
// import * as FlexWebChat from "@twilio/flex-webchat-ui";
import ChatManager from "./ChatManagerTwilio";
// import { Flex, Spinner } from "@twilio-paste/core";
// import { useConfigContext } from "../../../hooks/useConfigContext";

export const Chat: FC = () => {

	// const { webChatConfig } = useConfigContext();
	// const [managerSetup, setManagerSetup] = useState<FlexWebChat.Manager | undefined>();

	// useEffect(() => {
	// 	FlexWebChat.Manager.create(webChatConfig).then((manager) => setManagerSetup(manager));
	// 	console.log(managerSetup);
	// }, []);

	return (
		<CallContainer>
			<ChatManager />
		</CallContainer>
	);
};

export default Chat;