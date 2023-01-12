import styles from "@/components/SideBar.module.css";
import Link from "next/link";
import { title } from "process";
import { SideBarHeader } from "./SideBarHeader";

export const SideBar = () => {
	const channels: Channel[] = [
		{ id: 1, title: "channel 1" },
		{ id: 2, title: "channel 2" },
	];
	return (
		<div className={styles.body}>
			<SideBarHeader />
			<ul>
				{channels.map(channel => (
					<li key={channel.id} className={styles.channelTitle}>
						<Link href={`channels/${channel.id}`}>
							<span>{channel.title}</span>
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}
