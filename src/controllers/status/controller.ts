import { Get, Route } from "tsoa";
import IStatusResponse from "../../interface/status/status-response-interface";

@Route("status")
export default class LiveController {
  @Get("/status")
  public async getMessage(): Promise<IStatusResponse> {
    return {
      status: true,
    };
  }
}