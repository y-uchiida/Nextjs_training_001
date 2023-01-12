import { Channel } from "@/types/Channel";
import { useEffect, useState } from "react";
import { useAxios } from "./useAxios";

export const useChannels = () => {
	const { axios } = useAxios();
	const [channels, setChannels] = useState<Channel[]>([]);

	useEffect(() => {
		const fetch = async () => {
			const data = await axios.get<Channel[]>("channels.json");
			setChannels(data.data);
		};
		fetch();
	}, []);

	return channels;
};
