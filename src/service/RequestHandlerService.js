export class RequestHandlerService
{
    static async handleHttpRequest(requestMethod, urlPattern)
    {
        return "HTTP " + requestMethod + " " + urlPattern + " received";
    }
}