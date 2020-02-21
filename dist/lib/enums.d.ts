export declare const SIP_STATUS_DISCONNECTED = "sipStatus/DISCONNECTED";
export declare const SIP_STATUS_CONNECTING = "sipStatus/CONNECTING";
export declare const SIP_STATUS_CONNECTED = "sipStatus/CONNECTED";
export declare const SIP_STATUS_REGISTERED = "sipStatus/REGISTERED";
export declare const SIP_STATUS_ERROR = "sipStatus/ERROR";
export declare type SipStatus = "sipStatus/DISCONNECTED" | "sipStatus/CONNECTING" | "sipStatus/CONNECTED" | "sipStatus/REGISTERED" | "sipStatus/ERROR";
export declare const SIP_ERROR_TYPE_CONFIGURATION = "sipErrorType/CONFIGURATION";
export declare const SIP_ERROR_TYPE_CONNECTION = "sipErrorType/CONNECTION";
export declare const SIP_ERROR_TYPE_REGISTRATION = "sipErrorType/REGISTRATION";
export declare type SipErrorType = "sipErrorType/CONFIGURATION" | "sipErrorType/CONNECTION" | "sipErrorType/REGISTRATION";
export declare const CALL_STATUS_IDLE = "callStatus/IDLE";
export declare const CALL_STATUS_STARTING = "callStatus/STARTING";
export declare const CALL_STATUS_ACTIVE = "callStatus/ACTIVE";
export declare const CALL_STATUS_STOPPING = "callStatus/STOPPING";
export declare type CallStatus = "callStatus/IDLE" | "callStatus/STARTING" | "callStatus/ACTIVE" | "callStatus/STOPPING";
export declare const CALL_DIRECTION_INCOMING = "callDirection/INCOMING";
export declare const CALL_DIRECTION_OUTGOING = "callDirection/OUTGOING";
export declare type CallDirection = "callDirection/INCOMING" | "callDirection/OUTGOING";