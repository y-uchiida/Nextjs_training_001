import styles from "@/components/SideBar.module.css";
import { useChannels } from "@/hooks/useChannels";
import Link from "next/link";
import { SideBarHeader } from "./SideBarHeader";
import { Channel } from "@/types/Channel";

export const SideBar = () => {
	const channels = useChannels();

	return (
		<div className={styles.body}>
			<SideBarHeader />
			<ul>
				{channels.map(channel => (
					<li key={channel.id} className={styles.channelTitle}>
						<Link href={`/channels/${channel.id}`}>
							<span>{channel.title}</span>
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}
