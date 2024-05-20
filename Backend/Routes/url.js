import {handleGenerateNewShortUrl,UpdateShortUrl} from "../Controllers/url.js";
import express from "express";
const Router = express.Router();

Router.post("/",handleGenerateNewShortUrl);

Router.get("/:ShortId",UpdateShortUrl);

export default Router;