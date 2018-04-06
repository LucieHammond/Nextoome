// Storekeeper model based on the structure returned by API for users (admin)
export interface Storekeeper {
	id: number,
	name: string,
	url: string,
	description: string,
	link: string,
	slug: string,
	avatar_urls: {
		24: string,
		48: string,
		96: string
	},
	meta: any
}
