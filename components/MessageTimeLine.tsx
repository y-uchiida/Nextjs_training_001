import { Message as MessageType } from '@/types/Message'
import { Message } from './Message'
import styles from "@/components/MessageTimeLine.module.css";

type Props = {
	messages: MessageType[]
}

export const MessageTimeLine = ({ messages }: Props) => {
	return (
		<div className={styles.body}>
			<ul>
				{messages.map(message => (
					<Message key={message.id} message={message} />
				))}
			</ul>
		</div>
	)
}
