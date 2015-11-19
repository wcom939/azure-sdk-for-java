/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.13.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
// TODO: Include PageTemplateModels here too?? Probably
 */


/**
 * @class
 * Initializes a new instance of the Resource class.
 * @constructor
 * @member {string} [id] Resource Id
 * 
 * @member {string} [type] Resource Type
 * 
 * @member {object} [tags]
 * 
 * @member {string} [location] Resource Location
 * 
 * @member {string} [name] Resource Name
 * 
 */
export interface Resource extends BaseResource {
    id?: string;
    type?: string;
    tags?: { [propertyName: string]: string };
    location?: string;
    name?: string;
}

/**
 * @class
 * Initializes a new instance of the Sku class.
 * @constructor
 * @member {string} [name]
 * 
 * @member {string} [id]
 * 
 */
export interface Sku {
    name?: string;
    id?: string;
}

/**
 * @class
 * Initializes a new instance of the Product class.
 * @constructor
 * @member {string} [provisioningState]
 * 
 * @member {string} [provisioningStateValues] Possible values for this
 * property include: 'Succeeded', 'Failed', 'canceled', 'Accepted',
 * 'Creating', 'Created', 'Updating', 'Updated', 'Deleting', 'Deleted', 'OK'.
 * 
 */
export interface Product extends Resource {
    provisioningState?: string;
    provisioningStateValues?: string;
}

/**
 * @class
 * Initializes a new instance of the SubResource class.
 * @constructor
 * @member {string} [id] Sub Resource Id
 * 
 */
export interface SubResource extends BaseResource {
    id?: string;
}

/**
 * @class
 * Initializes a new instance of the SubProduct class.
 * @constructor
 * @member {string} [provisioningState]
 * 
 * @member {string} [provisioningStateValues] Possible values for this
 * property include: 'Succeeded', 'Failed', 'canceled', 'Accepted',
 * 'Creating', 'Created', 'Updating', 'Updated', 'Deleting', 'Deleted', 'OK'.
 * 
 */
export interface SubProduct extends SubResource {
    provisioningState?: string;
    provisioningStateValues?: string;
}

/**
 * @class
 * Initializes a new instance of the OperationResult class.
 * @constructor
 * @member {string} [status] The status of the request. Possible values for
 * this property include: 'Succeeded', 'Failed', 'canceled', 'Accepted',
 * 'Creating', 'Created', 'Updating', 'Updated', 'Deleting', 'Deleted', 'OK'.
 * 
 * @member {object} [error]
 * 
 * @member {number} [error.code] The error code for an operation failure
 * 
 * @member {string} [error.message] The detailed arror message
 * 
 */
export interface OperationResult {
    status?: string;
    error?: OperationResultError;
}

/**
 * @class
 * Initializes a new instance of the OperationResultError class.
 * @constructor
 * @member {number} [code] The error code for an operation failure
 * 
 * @member {string} [message] The detailed arror message
 * 
 */
export interface OperationResultError {
    code?: number;
    message?: string;
}

/**
 * @class
 * Initializes a new instance of the LROsPutNoHeaderInRetryHeaders class.
 * @constructor
 * Defines headers for putNoHeaderInRetry operation.
 * @member {string} [location] Location to poll for result status: will be set
 * to /lro/putasync/noheader/202/200/operationResults
 * 
 */
export interface LROsPutNoHeaderInRetryHeaders {
    location?: string;
}

/**
 * @class
 * Initializes a new instance of the LROsPutAsyncRetrySucceededHeaders class.
 * @constructor
 * Defines headers for putAsyncRetrySucceeded operation.
 * @member {string} [azureAsyncOperation] Location to poll for result status:
 * will be set to /lro/putasync/retry/succeeded/operationResults/200
 * 
 * @member {string} [location] Location to poll for result status: will be set
 * to /lro/putasync/retry/succeeded/operationResults/200
 * 
 * @member {number} [retryAfter] Number of milliseconds until the next poll
 * should be sent, will be set to zero
 * 
 */
export interface LROsPutAsyncRetrySucceededHeaders {
    azureAsyncOperation?: string;
    location?: string;
    retryAfter?: number;
}

/**
 * @class
 * Initializes a new instance of the LROsPutAsyncNoRetrySucceededHeaders class.
 * @constructor
 * Defines headers for putAsyncNoRetrySucceeded operation.
 * @member {string} [azureAsyncOperation] Location to poll for result status:
 * will be set to /lro/putasync/noretry/succeeded/operationResults/200
 * 
 * @member {string} [location] Location to poll for result status: will be set
 * to /lro/putasync/noretry/succeeded/operationResults/200
 * 
 */
export interface LROsPutAsyncNoRetrySucceededHeaders {
    azureAsyncOperation?: string;
    location?: string;
}

/**
 * @class
 * Initializes a new instance of the LROsPutAsyncRetryFailedHeaders class.
 * @constructor
 * Defines headers for putAsyncRetryFailed operation.
 * @member {string} [azureAsyncOperation] Location to poll for result status:
 * will be set to /lro/putasync/retry/failed/operationResults/200
 * 
 * @member {string} [location] Location to poll for result status: will be set
 * to /lro/putasync/retry/failed/operationResults/200
 * 
 * @member {number} [retryAfter] Number of milliseconds until the next poll
 * should be sent, will be set to zero
 * 
 */
export interface LROsPutAsyncRetryFailedHeaders {
    azureAsyncOperation?: string;
    location?: string;
    retryAfter?: number;
}

/**
 * @class
 * Initializes a new instance of the LROsPutAsyncNoRetrycanceledHeaders class.
 * @constructor
 * Defines headers for putAsyncNoRetrycanceled operation.
 * @member {string} [azureAsyncOperation] Location to poll for result status:
 * will be set to /lro/putasync/noretry/canceled/operationResults/200
 * 
 * @member {string} [location] Location to poll for result status: will be set
 * to /lro/putasync/noretry/canceled/operationResults/200
 * 
 */
export interface LROsPutAsyncNoRetrycanceledHeaders {
    azureAsyncOperation?: string;
    location?: string;
}

/**
 * @class
 * Initializes a new instance of the LROsPutAsyncNoHeaderInRetryHeaders class.
 * @constructor
 * Defines headers for putAsyncNoHeaderInRetry operation.
 * @member {string} [azureAsyncOperation]
 * 
 */
export interface LROsPutAsyncNoHeaderInRetryHeaders {
    azureAsyncOperation?: string;
}

/**
 * @class
 * Initializes a new instance of the LROsDeleteProvisioning202Accepted200SucceededHeaders class.
 * @constructor
 * Defines headers for deleteProvisioning202Accepted200Succeeded operation.
 * @member {string} [location] Location to poll for result status: will be set
 * to /lro/delete/provisioning/202/accepted/200/succeeded
 * 
 * @member {number} [retryAfter] Number of milliseconds until the next poll
 * should be sent, will be set to zero
 * 
 */
export interface LROsDeleteProvisioning202Accepted200SucceededHeaders {
    location?: string;
    retryAfter?: number;
}

/**
 * @class
 * Initializes a new instance of the LROsDeleteProvisioning202DeletingFailed200Headers class.
 * @constructor
 * Defines headers for deleteProvisioning202DeletingFailed200 operation.
 * @member {string} [location] Location to poll for result status: will be set
 * to /lro/delete/provisioning/202/deleting/200/failed
 * 
 * @member {number} [retryAfter] Number of milliseconds until the next poll
 * should be sent, will be set to zero
 * 
 */
export interface LROsDeleteProvisioning202DeletingFailed200Headers {
    location?: string;
    retryAfter?: number;
}

/**
 * @class
 * Initializes a new instance of the LROsDeleteProvisioning202Deletingcanceled200Headers class.
 * @constructor
 * Defines headers for deleteProvisioning202Deletingcanceled200 operation.
 * @member {string} [location] Location to poll for result status: will be set
 * to /lro/delete/provisioning/202/deleting/200/canceled
 * 
 * @member {number} [retryAfter] Number of milliseconds until the next poll
 * should be sent, will be set to zero
 * 
 */
export interface LROsDeleteProvisioning202Deletingcanceled200Headers {
    location?: string;
    retryAfter?: number;
}

/**
 * @class
 * Initializes a new instance of the LROsDelete202Retry200Headers class.
 * @constructor
 * Defines headers for delete202Retry200 operation.
 * @member {string} [location] Location to poll for result status: will be set
 * to /lro/delete/202/retry/200
 * 
 * @member {number} [retryAfter] Number of milliseconds until the next poll
 * should be sent, will be set to zero
 * 
 */
export interface LROsDelete202Retry200Headers {
    location?: string;
    retryAfter?: number;
}

/**
 * @class
 * Initializes a new instance of the LROsDelete202NoRetry204Headers class.
 * @constructor
 * Defines headers for delete202NoRetry204 operation.
 * @member {string} [location] Location to poll for result status: will be set
 * to /lro/delete/202/noretry/204
 * 
 * @member {number} [retryAfter] Number of milliseconds until the next poll
 * should be sent, will be set to zero
 * 
 */
export interface LROsDelete202NoRetry204Headers {
    location?: string;
    retryAfter?: number;
}

/**
 * @class
 * Initializes a new instance of the LROsPost202NoRetry204Headers class.
 * @constructor
 * Defines headers for post202NoRetry204 operation.
 * @member {string} [location] Location to poll for result status: will be set
 * to /lro/post/202/noretry/204
 * 
 * @member {number} [retryAfter] Number of milliseconds until the next poll
 * should be sent, will be set to zero
 * 
 */
export interface LROsPost202NoRetry204Headers {
    location?: string;
    retryAfter?: number;
}

/**
 * @class
 * Initializes a new instance of the LROsPostAsyncRetrySucceededHeaders class.
 * @constructor
 * Defines headers for postAsyncRetrySucceeded operation.
 * @member {string} [azureAsyncOperation] Location to poll for result status:
 * will be set to /lro/putasync/retry/succeeded/operationResults/200
 * 
 * @member {string} [location] Location to poll for result status: will be set
 * to /lro/putasync/retry/succeeded/operationResults/200
 * 
 * @member {number} [retryAfter] Number of milliseconds until the next poll
 * should be sent, will be set to zero
 * 
 */
export interface LROsPostAsyncRetrySucceededHeaders {
    azureAsyncOperation?: string;
    location?: string;
    retryAfter?: number;
}

/**
 * @class
 * Initializes a new instance of the LROsPostAsyncNoRetrySucceededHeaders class.
 * @constructor
 * Defines headers for postAsyncNoRetrySucceeded operation.
 * @member {string} [azureAsyncOperation] Location to poll for result status:
 * will be set to /lro/putasync/retry/succeeded/operationResults/200
 * 
 * @member {string} [location] Location to poll for result status: will be set
 * to /lro/putasync/retry/succeeded/operationResults/200
 * 
 * @member {number} [retryAfter] Number of milliseconds until the next poll
 * should be sent, will be set to zero
 * 
 */
export interface LROsPostAsyncNoRetrySucceededHeaders {
    azureAsyncOperation?: string;
    location?: string;
    retryAfter?: number;
}

/**
 * @class
 * Initializes a new instance of the LRORetrysPutAsyncRelativeRetrySucceededHeaders class.
 * @constructor
 * Defines headers for putAsyncRelativeRetrySucceeded operation.
 * @member {string} [azureAsyncOperation] Location to poll for result status:
 * will be set to
 * /lro/retryerror/putasync/retry/succeeded/operationResults/200
 * 
 * @member {string} [location] Location to poll for result status: will be set
 * to /lro/retryerror/putasync/retry/succeeded/operationResults/200
 * 
 * @member {number} [retryAfter] Number of milliseconds until the next poll
 * should be sent, will be set to zero
 * 
 */
export interface LRORetrysPutAsyncRelativeRetrySucceededHeaders {
    azureAsyncOperation?: string;
    location?: string;
    retryAfter?: number;
}

/**
 * @class
 * Initializes a new instance of the LRORetrysDeleteProvisioning202Accepted200SucceededHeaders class.
 * @constructor
 * Defines headers for deleteProvisioning202Accepted200Succeeded operation.
 * @member {string} [location] Location to poll for result status: will be set
 * to /lro/retryerror/delete/provisioning/202/accepted/200/succeeded
 * 
 * @member {number} [retryAfter] Number of milliseconds until the next poll
 * should be sent, will be set to zero
 * 
 */
export interface LRORetrysDeleteProvisioning202Accepted200SucceededHeaders {
    location?: string;
    retryAfter?: number;
}

/**
 * @class
 * Initializes a new instance of the LROSADsPutAsyncRelativeRetry400Headers class.
 * @constructor
 * Defines headers for putAsyncRelativeRetry400 operation.
 * @member {string} [azureAsyncOperation] Location to poll for result status:
 * will be set to /lro/nonretryerror/putasync/retry/operationResults/400
 * 
 * @member {string} [location] Location to poll for result status: will be set
 * to /lro/nonretryerror/putasync/retry/operationResults/400
 * 
 * @member {number} [retryAfter] Number of milliseconds until the next poll
 * should be sent, will be set to zero
 * 
 */
export interface LROSADsPutAsyncRelativeRetry400Headers {
    azureAsyncOperation?: string;
    location?: string;
    retryAfter?: number;
}

/**
 * @class
 * Initializes a new instance of the LROSADsPutAsyncRelativeRetryNoStatusHeaders class.
 * @constructor
 * Defines headers for putAsyncRelativeRetryNoStatus operation.
 * @member {string} [azureAsyncOperation] Location to poll for result status:
 * will be set to /lro/putasync/retry/succeeded/operationResults/200
 * 
 * @member {string} [location] Location to poll for result status: will be set
 * to /lro/putasync/retry/succeeded/operationResults/200
 * 
 * @member {number} [retryAfter] Number of milliseconds until the next poll
 * should be sent, will be set to zero
 * 
 */
export interface LROSADsPutAsyncRelativeRetryNoStatusHeaders {
    azureAsyncOperation?: string;
    location?: string;
    retryAfter?: number;
}

/**
 * @class
 * Initializes a new instance of the LROSADsPutAsyncRelativeRetryNoStatusPayloadHeaders class.
 * @constructor
 * Defines headers for putAsyncRelativeRetryNoStatusPayload operation.
 * @member {string} [azureAsyncOperation] Location to poll for result status:
 * will be set to /lro/putasync/retry/succeeded/operationResults/200
 * 
 * @member {string} [location] Location to poll for result status: will be set
 * to /lro/putasync/retry/succeeded/operationResults/200
 * 
 * @member {number} [retryAfter] Number of milliseconds until the next poll
 * should be sent, will be set to zero
 * 
 */
export interface LROSADsPutAsyncRelativeRetryNoStatusPayloadHeaders {
    azureAsyncOperation?: string;
    location?: string;
    retryAfter?: number;
}

/**
 * @class
 * Initializes a new instance of the LROSADsPutAsyncRelativeRetryInvalidHeaderHeaders class.
 * @constructor
 * Defines headers for putAsyncRelativeRetryInvalidHeader operation.
 * @member {string} [azureAsyncOperation] Location to poll for result status:
 * will be set to /lro/putasync/retry/succeeded/operationResults/200
 * 
 * @member {string} [location] Location to poll for result status: will be set
 * to /lro/putasync/retry/succeeded/operationResults/200
 * 
 * @member {number} [retryAfter] Number of milliseconds until the next poll
 * should be sent, will be set to zero
 * 
 */
export interface LROSADsPutAsyncRelativeRetryInvalidHeaderHeaders {
    azureAsyncOperation?: string;
    location?: string;
    retryAfter?: number;
}

/**
 * @class
 * Initializes a new instance of the LROSADsPutAsyncRelativeRetryInvalidJsonPollingHeaders class.
 * @constructor
 * Defines headers for putAsyncRelativeRetryInvalidJsonPolling operation.
 * @member {string} [azureAsyncOperation] Location to poll for result status:
 * will be set to /lro/putasync/retry/failed/operationResults/200
 * 
 * @member {string} [location] Location to poll for result status: will be set
 * to /lro/putasync/retry/failed/operationResults/200
 * 
 * @member {number} [retryAfter] Number of milliseconds until the next poll
 * should be sent, will be set to zero
 * 
 */
export interface LROSADsPutAsyncRelativeRetryInvalidJsonPollingHeaders {
    azureAsyncOperation?: string;
    location?: string;
    retryAfter?: number;
}

/**
 * @class
 * Initializes a new instance of the LROsCustomHeaderPutAsyncRetrySucceededHeaders class.
 * @constructor
 * Defines headers for putAsyncRetrySucceeded operation.
 * @member {string} [azureAsyncOperation] Location to poll for result status:
 * will be set to
 * /lro/customheader/putasync/retry/succeeded/operationResults/200
 * 
 * @member {string} [location] Location to poll for result status: will be set
 * to /lro/customheader/putasync/retry/succeeded/operationResults/200
 * 
 * @member {number} [retryAfter] Number of milliseconds until the next poll
 * should be sent, will be set to zero
 * 
 */
export interface LROsCustomHeaderPutAsyncRetrySucceededHeaders {
    azureAsyncOperation?: string;
    location?: string;
    retryAfter?: number;
}
