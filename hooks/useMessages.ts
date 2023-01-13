import { Message } from "@/types/Message";
import { useState } from "react";
import { useAxios } from "./useAxios";

export const useMessages = () => {
	const { axios } = useAxios();
	const [messages, setMessages] = useState<Message[]>([]);

	const postMessage = async (message: Message) => {
		try {
			await axios.post<Message>(
				"messages.json",
				JSON.stringify({ ...message }),
			);
			setMessages((current) => {
				current.push(message);
				return current;
			});
		} catch (e) {
			console.error('error', e);
			return;
		}
	}

	const fetchMessages = async (channelId: string) => {
		const response = await axios.get<Message[]>("messages.json");
		const data = Object.values(response.data).filter((message) => message);
		const messagesForChannel = data.filter((message) => message.channelId.toString() === channelId);
		setMessages(messagesForChannel);
	}

	return { fetchMessages, postMessage, messages };
};
