/**
 * Enum for HTTP redirects status codes
 *
 * The values can range from (300–399)
 *
 * @readonly
 * @enum {number}
 */
enum HttpRedirectionStatus {
    /**
     * ### 300 Multiple Choice
     *
     * The request has more than one possible response.
     * The user-agent or user should choose one of them.
     * (There is no standardized way of choosing one of the responses,
     * but HTML links to the possibilities are recommended so the user can pick.)
     *
     * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/300)
     * @type {number}
     */
    MultipleChoice = 300,

    /**
     * ### 301 Moved Permanently
     *
     * The URL of the requested resource has been changed permanently.
     * The new URL is given in the response.
     *
     * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/301)
     * @type {number}
     */
    MovedPermanently = 301,

    /**
     * ### 302 Found
     *
     * This response code means that the URI
     * of requested resource has been changed temporarily.
     * Further changes in the URI might be made in the future.
     * Therefore, this same URI should be used by the client in future requests.
     *
     * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/302)
     * @type {number}
     */
    Found = 302,

    /**
     * ### 303 See Other
     *
     * The server sent this response to direct the client to
     * get the requested resource at another URI with a GET request.
     *
     * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/303)
     * @type {number}
     */
    SeeOther = 303,

    /**
     * ### 304 Not Modified
     *
     * This is used for caching purposes.
     * It tells the client that the response has not been modified,
     * so the client can continue to use the same cached version of the response.
     *
     * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/304)
     * @type {number}
     */
    NotModified = 304,

    /**
     * ### 305 Use Proxy
     *
     * @deprecated
     *
     * Defined in a previous version of the HTTP specification to
     * indicate that a requested response must be accessed by a proxy.
     * It has been deprecated due to security concerns regarding in-band
     * configuration of a proxy.
     *
     * @type {number}
     */
    UseProxy = 305,

    /**
     * ### 306 unused
     *
     * @deprecated
     *
     * This response code is no longer used; it is just reserved.
     * It was used in a previous version of the HTTP/1.1 specification.
     *
     * @type {number}
     */
    Unused = 306,

    /**
     * ### 307 Temporary Redirect
     *
     * The server sends this response to direct the client to get
     * the requested resource at another URI with same method that
     * was used in the prior request. This has the same semantics
     * as the ```302 Found``` HTTP response code, with the exception
     * that the user agent must not change the HTTP method used:
     * If a ```POST``` was used in the first request, a ```POST```
     * must be used in the second request.
     *
     * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/307)
     * @type {number}
     */
    TemporaryRedirect = 307,

    /**
     * ### 308 Permanent Redirect
     *
     * This means that the resource is now permanently located at
     * another URI, specified by the ```Location:``` HTTP Response
     * header. This has the same semantics as the
     * ```301 Moved Permanently``` HTTP response code, with the
     * exception that the user agent must not change the HTTP method used:
     * If a ```POST``` was used in the first request, a ```POST```
     * must be used in the second request.
     *
     * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/308)
     * @type {number}
     */
    PermanentRedirect = 308,
}

export default HttpRedirectionStatus;
