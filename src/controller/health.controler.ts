import { Request, Response, NextFunction } from 'express'
import { getConnection } from 'typeorm'

import {DB_CONNECTION_NAME} from '../index'
import { EndpointResponse } from '../controller/dto/default.dto'

export class HealthController {
	static async getOne (req: Request, res:Response, next: NextFunction): Promise<void> {
		let isConnected = true

		try {
			await getConnection(DB_CONNECTION_NAME).query(`select * from orm_migrations limit 1;`)
		} catch (e) {
			const err = new Error(e)

			console.error(err.message)
			console.debug(e)

			isConnected = false
		}

		const message = isConnected ? 'App is healthy' : 'DB connection error'

		!isConnected && res.status(500)

		res.json({
			message: message
		} as EndpointResponse)

		next()
	}
}
