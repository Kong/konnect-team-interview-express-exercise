import { IsString, IsOptional } from 'class-validator'

export class EndpointResponse {
	@IsString()
	@IsOptional()
	message?: string

	@IsOptional()
	data?: any
}
