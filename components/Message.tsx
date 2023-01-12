import { Message as MessageType } from '@/types/Message';
import styles from "@/components/Message.module.css";
import { useAuth } from '@/hooks/AuthContext';

type Props = {
	message: MessageType
}

export const Message = ({ message }: Props) => {
	console.log(message);

	const { user } = useAuth();

	return (
		<>
			<li className={styles.body}>
				<div className={styles.left}>
					<div className={styles["profile-mage"]}>
						{user
							? <img src={user.profileImaUrl} alt="" />
							: <></>
						}
					</div>
				</div>
				<div>
					<div className={styles.header}>
						<span>{user ? user.name : 'noname'}</span>
						<span>{new Date().toDateString()}</span>
					</div>
					{message.body}
				</div>
			</li>
		</>
	)
}
