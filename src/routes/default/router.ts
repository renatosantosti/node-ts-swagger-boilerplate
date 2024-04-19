import express from "express";

const router = express.Router();

// define default route to the Swagger page for api documentation
router.get('/', (req, res) => {
  res.redirect("/api-docs");
})

export default router;
