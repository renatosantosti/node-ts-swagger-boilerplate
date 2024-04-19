import { Get, Route } from "tsoa";
import ILiveResponse from "../../interface/live/live-response-interface";

@Route("live")
export default class LiveController {
  @Get("/live")
  public async getMessage(): Promise<ILiveResponse> {
    return {
      live: true,
    };
  }
}