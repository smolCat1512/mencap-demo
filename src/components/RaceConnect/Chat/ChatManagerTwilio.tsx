import { useEffect } from "react";
// import {
// 	FlexWebChatContainer
// } from "../../../assets/index.styles";
import * as FlexWebChat from "@twilio/flex-webchat-ui";

// export type FlexWebChatContainerProps = {
// 	manager: FlexWebChat.Manager;
// };

export const ChatManagerTwilio = () => {

	var raceConfig = {
		accountSid: "ACac419f1fe1079973fb0d20668b5c39b3",
		flowSid: "FO97febf8d78b734d2020b98f2bb4eb500",
	};

	useEffect(() => {
		setTimeout(() => {
			const button = document.querySelector<HTMLButtonElement>(".Twilio.Twilio-EntryPoint");
			if (button) {
				button.style.display = "none";
				button.click();
			}
		}, 1000);
	}, []);

	const e: any = { "startEngagementOnInit": false, "logLevel": "error", "preEngagementConfig": { "submitLabel": "Start Chat", "description": "Please provide us with the following details so that we may better assist you.", "fields": [{ "type": "InputItem", "attributes": { "name": "Name", "readOnly": false, "placeholder": "Enter your name ...", "type": "text", "value": "", "required": true }, "label": "What is your name?" }, { "type": "InputItem", "attributes": { "name": "EmailAddress", "readOnly": false, "placeholder": "Enter your email ...", "type": "text", "value": "", "required": true }, "label": "What is your email address?" }], "footerLabel": "Powered by Ciptex RACE" }, "colorTheme": { "overrides": { "Chat": { "MessageListItem": { "FromMe": { "Header": { "color": "#fff", "background": "#5243aa" }, "Avatar": { "color": "#000", "background": "#5243aa" }, "Bubble": { "color": "#fff", "background": "#5243aa" } } } }, "EntryPoint": { "Container": { "&:hover": { "background": "#5243aa", "backgroundBlendMode": "color" }, "right": "30px", "color": "#FFFFFF", "background": "#5243aa", "bottom": "30px" } }, "PreEngagementCanvas": { "Form": { "SubmitButton": { "border-radius": "7px", "color": "#FFFFFF", "background": "#5243aa" } }, "Container": { "background": "#FFFFFF" } } } }, "context": { "friendlyName": "You" }, "componentProps": { "MessagingCanvas": { "memberDisplayOptions": { "yourDefaultName": "You", "yourFriendlyNameOverride": true }, "showWelcomeMessage": true }, "MainHeader": { "padding": "10px", "showImage": true, "showTitle": false, "imageUrl": "" }, "MainContainer": { "width": "300px", "style": { "padding-top": "10px", "right": "30px", "borderRadius": "10px", "bottom": "90px" }, "height": "400px" } }, "accountSid": "ACac419f1fe1079973fb0d20668b5c39b3", "flexFlowSid": "FO97febf8d78b734d2020b98f2bb4eb500" }

	return (
		<div>
			<>
				{
					FlexWebChat.createWebChat(e).then((e) => {
						const { manager: a } = e;
						// eslint-disable-next-line @typescript-eslint/no-unused-expressions
						(a.strings.WelcomeMessage =
							"How can we help you today?"),
							FlexWebChat.Actions.invokeAction("RestartEngagement"),
							FlexWebChat.Actions.invokeAction("ToggleChatVisibility"),
						// (FlexWebChat.MessagingCanvas.defaultProps.predefinedMessage =
						// 	!1),
						FlexWebChat.Actions.on("afterStartEngagement", (e) => {
							const { channelSid: t } = a.store.getState().flex.session;
							if (e.formData) {
								let n = "";
								for (const t of Object.entries(e.formData))
									"" !== t[1] && (n += `${t[0]}: ${t[1]} `);
								"" !== n &&
									a.chatClient
										.getChannelBySid(t)
										.then((e) => e.sendMessage(n));
							}
						}),
							e.init();
					})
				}
			</>

		</div>

		// <FlexWebChatContainer>
		// 	<FlexWebChatContextProvider manager={manager}>
		// 		<FlexWebChat.RootContainer />
		// 	</FlexWebChatContextProvider>
		// </FlexWebChatContainer>
	);
};

export default ChatManagerTwilio;