import { Message } from "@/types/Message";
import { useEffect, useState } from "react";
import { useAxios } from "./useAxios";

export const useMessages = () => {
	const { axios } = useAxios();
	const [messages, setMessages] = useState<Message[]>([]);

	const fetchMessages = async (channelId: string) => {
		const response = await axios.get<Message[]>("messages.json");
		const data = Object.values(response.data).filter((message) => message);
		const messagesForChannel = data.filter((message) => message.channelId.toString() === channelId);
		setMessages(messagesForChannel);
	}

	return { fetchMessages, messages };
};
