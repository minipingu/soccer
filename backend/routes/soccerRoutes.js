import {
	addNewPlayer,
	getAllPlayers,
	getPlayerWithId,
} from '../controllers/playerControllers'

const routes = (app) => {
	app.route('/players')
		.get(getAllPlayers) //GET endpoint
		.post(addNewPlayer) // POST endpoint

	app.route('/player/:PlayerId').get(getPlayerWithId) // GET specific player
}

export default routes
