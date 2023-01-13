import { useMessages } from "@/hooks/useMessages";
import { Message } from "@/types/Message";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import styles from "./SendMessageBox.module.css";
import { v4 as uuid } from "uuid";

export const SendMessageBox = () => {
	const { query } = useRouter();
	const { channelId } = query;

	const [message, setMessage] = useState('');
	const { postMessage } = useMessages();

	const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const newMessage: Message = {
			id: uuid(),
			body: message,
			channelId: channelId as string,
			createdAt: new Date(),
		}
		await postMessage(newMessage);
		setMessage('');
	}

	return (
		<div className={styles.body}>
			<div className={styles.header}></div>
			<form onSubmit={onSubmitHandler}>
				<textarea
					className={styles["message-box"]}
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<button type="submit">Send</button>
			</form>
		</div>
	)
}
