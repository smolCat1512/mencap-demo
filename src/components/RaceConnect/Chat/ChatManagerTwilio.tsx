// import { useEffect } from "react";
// import {
// 	FlexWebChatContainer
// } from "../../../assets/index.styles";
// import * as FlexWebChat from "@twilio/flex-webchat-ui";

// export type FlexWebChatContainerProps = {
// 	manager: FlexWebChat.Manager;
// };

export const ChatManagerTwilio = () => {

	return (
		
		<iframe width="300px" height="500px" frameBorder="0" title="chat" src="https://mencap-chat.pages.dev" />

		// <FlexWebChatContainer>
		// 	<FlexWebChatContextProvider manager={manager}>
		// 		<FlexWebChat.RootContainer />
		// 	</FlexWebChatContextProvider>
		// </FlexWebChatContainer>
	);
};

export default ChatManagerTwilio;