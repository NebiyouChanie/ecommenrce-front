import { NextResponse } from 'next/server'

// error categories, neat and structured!!
enum ErrorType {
    PERMISSION_ERROR = 'Permission_Error',
    UNAUTHENTICATED = 'Unauthenticated',
    UNAUTHORIZED = 'Unauthorized',
    BAD_REQUEST = 'Bad_Request',
    METHOD_NOT_ALLOWED = 'Method_Not_Allowed',
    NOT_FOUND = 'Resource_Not_Found',
    USELESS_REQUEST = 'Useless_Request',
    SERVER_ERROR = 'Server_Error',
    UNKNOWN_ERROR = 'Unknown_Error',
    REQUEST_FAILED = 'Failed_Request',
}

export function sendResponse(data: any, msg: string = "Request Successful", code: number = 200) {
    return NextResponse.json({
        data,
        status_code: code,
        message: msg
    }, { status: code })
}

function sendError(errType: ErrorType, err: string | object, code: number = 400) {
    return NextResponse.json({
        error_type: errType,
        status_code: code,
        error: err,
        timestamp: new Date().toISOString()
    }, { status: code })
}

//  reusable functions to return errors easily

export function sendPermissionError(message: string = "You are not authorized to perform this action", code: number = 403) {
    return sendError(ErrorType.PERMISSION_ERROR, message, code)
}

export function sendAuthenticationError(message: string = "Authentication error", code: number = 401) {
    return sendError(ErrorType.UNAUTHENTICATED, message, code)
}

export function sendAuthorizationError(message: string = "Authorization error", code: number = 403) {
    return sendError(ErrorType.UNAUTHORIZED, message, code)
}

export function sendRequestError(message: string = "Request error", code: number = 400) {
    return sendError(ErrorType.BAD_REQUEST, message, code)
}

export function sendFailedRequest(message: string = "Request failed", code: number = 400) {
    return sendError(ErrorType.REQUEST_FAILED, message, code)
}

export function sendNotFoundError(message: string = "Resource not found", code: number = 404) {
    return sendError(ErrorType.NOT_FOUND, message, code)
}

export function sendUnusedError(message: string = "Useless request", code: number = 400) {
    return sendError(ErrorType.USELESS_REQUEST, message, code)
}

export function sendServerError(message: string = "Server error", code: number = 500) {
    return sendError(ErrorType.SERVER_ERROR, message, code)
}