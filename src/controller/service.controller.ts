import { Request, Response, NextFunction } from 'express'
import { EndpointResponse } from './dto/default.dto'

export class ServiceController {
	static async getMany (req: Request, res:Response, next: NextFunction): Promise<void> {
		res.json({
			message: 'Need implementation here.'
		} as EndpointResponse )

		next()
	}
}
