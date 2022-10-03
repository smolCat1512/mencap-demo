import { Box } from "@twilio-paste/core/box";
import { FC } from "react";
import { useFormContext } from "../../hooks/useFormContext";

export const FormContainer: FC = () => {
	const { formContainer } = useFormContext();

	return (
		<Box ref={formContainer} />
	);
}