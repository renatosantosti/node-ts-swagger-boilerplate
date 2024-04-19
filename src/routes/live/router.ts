import express from "express";
import LiveController from "../../controllers/live/controller";

const router = express.Router();

/**
 * @openapi
 * /live:
 *   get:
 *     description: Just inform if api server is live
 *     responses:
 *       200:
 *         description: Returns true if api is ready.
 */
router.get("/live", async (_req, res) => {
  const controller = new LiveController();
  const response = await controller.getMessage();
  return res.send(response);
});

export default router;