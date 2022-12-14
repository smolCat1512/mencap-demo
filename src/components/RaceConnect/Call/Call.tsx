import { FC } from "react";
import {
	CallContainer,
	CallButtonsContainer,
	SeperatorParagraph,
	LabelWithMargin
} from "../../../assets/index.styles";
import Icon from "../../../assets/icons";
import { useConfigContext } from "../../../hooks/useConfigContext";
import { Button } from "@twilio-paste/core/button";
import { CallButton } from "./CallButton";

export const Call: FC = () => {

	const { config } = useConfigContext();

	return (
		<CallContainer>
			<CallButtonsContainer>
				<LabelWithMargin>Click to call via your phone.</LabelWithMargin>
				<Button variant="secondary" as="a" href={`tel:${config?.phoneNumer}`}>
					<Icon icon="call" />
					+447380328826
				</Button>
				<SeperatorParagraph />
				<LabelWithMargin>
					Click to call over the internet.
				</LabelWithMargin>
				<CallButton />
			</CallButtonsContainer>
		</CallContainer>
	);
}


export default Call;
