import express from "express"

import { HealthController } from '../controller/health.controller'
import { ServiceController } from '../controller/service.controller'

export const router = express.Router()

router.get('/health', HealthController.getOne)
router.get('/services', ServiceController.getMany)
