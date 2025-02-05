import {
	addNewPlayer,
	getAllPlayers,
	getPlayerWithId,
	updatePlayer,
	deletePlayer,
} from '../controllers/playerControllers'

const routes = (app) => {
	app.route('/players')
		.get(getAllPlayers) //GET endpoint
		.post(addNewPlayer) // POST endpoint

	app.route('/player/:PlayerId')
		.get(getPlayerWithId) // GET specific player
		.put(updatePlayer) // UPDATE specific player
		.delete(deletePlayer) // DELETE specific player
}

export default routes
