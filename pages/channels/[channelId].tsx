import { MessageTimeLine } from "@/components/MessageTimeLine";
import { SendMessageBox } from "@/components/SendMessageBox";
import { useChannels } from "@/hooks/useChannels";
import { useMessages } from "@/hooks/useMessages";
import styles from "@/pages/channels/ChannelPage.module.css";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const ChannelPage = () => {
	const { query } = useRouter();
	const { channelId } = query;
	const { messages, fetchMessages } = useMessages();
	const channels = useChannels();

	const channel = channels.find(channel => channel.id.toString() == channelId as string);

	useEffect(() => {
		fetchMessages(channelId as string);
	}, [channelId]);

	return (
		<div className={styles.background}>
			<div className={styles.header}>
				<h2>{channel?.title}</h2>
			</div>
			<MessageTimeLine messages={messages} />
			<SendMessageBox />
		</div>
	)
}

export default ChannelPage;
