const URL = 'https://gitconnected.com/v1/portfolio'
const USERNAME = 'sanmonsua'

export async function fetchPortfolio() {
	return fetch(`${URL}/${USERNAME}`)
}
