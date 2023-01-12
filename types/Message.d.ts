export type Message = {
	id: string,
	body: string,
	channelId: string,
	user?: user,
	createdAt: Date,
}
