import express from "express"

import { HealthController } from '../controller/health.controler'

export const router = express.Router();

router.get('/health', HealthController.getOne)
