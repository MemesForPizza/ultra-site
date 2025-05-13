export enum HTTPStatusCodes {
  NotFound = 404,
  InternalServerError = 500
}

export const Descriptions: Record<HTTPStatusCodes, string> = {
  [HTTPStatusCodes.NotFound]: "Page not found!",
  [HTTPStatusCodes.InternalServerError]: "Internal server error!"
}