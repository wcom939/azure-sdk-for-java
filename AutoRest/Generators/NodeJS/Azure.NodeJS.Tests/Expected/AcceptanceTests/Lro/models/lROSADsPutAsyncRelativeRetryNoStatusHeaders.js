/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.13.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

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
function LROSADsPutAsyncRelativeRetryNoStatusHeaders(parameters) {
  if (parameters !== null && parameters !== undefined) {
    if (parameters.azureAsyncOperation !== undefined) {
      this.azureAsyncOperation = parameters.azureAsyncOperation;
    }
    if (parameters.location !== undefined) {
      this.location = parameters.location;
    }
    if (parameters.retryAfter !== undefined) {
      this.retryAfter = parameters.retryAfter;
    }
  }    
}


/**
 * Validate the payload against the LROSADsPutAsyncRelativeRetryNoStatusHeaders schema
 *
 * @param {JSON} payload
 *
 */
LROSADsPutAsyncRelativeRetryNoStatusHeaders.prototype.serialize = function () {
  var payload = {};
  if (this['azureAsyncOperation'] !== null && this['azureAsyncOperation'] !== undefined) {
    if (typeof this['azureAsyncOperation'].valueOf() !== 'string') {
      throw new Error('this[\'azureAsyncOperation\'] must be of type string.');
    }
    payload['Azure-AsyncOperation'] = this['azureAsyncOperation'];
  }

  if (this['location'] !== null && this['location'] !== undefined) {
    if (typeof this['location'].valueOf() !== 'string') {
      throw new Error('this[\'location\'] must be of type string.');
    }
    payload['Location'] = this['location'];
  }

  if (this['retryAfter'] !== null && this['retryAfter'] !== undefined) {
    if (typeof this['retryAfter'] !== 'number') {
      throw new Error('this[\'retryAfter\'] must be of type number.');
    }
    payload['Retry-After'] = this['retryAfter'];
  }

  return payload;
};

/**
 * Deserialize the instance to LROSADsPutAsyncRelativeRetryNoStatusHeaders schema
 *
 * @param {JSON} instance
 *
 */
LROSADsPutAsyncRelativeRetryNoStatusHeaders.prototype.deserialize = function (instance) {
  if (instance) {
    if (instance['Azure-AsyncOperation'] !== undefined) {
      this['azureAsyncOperation'] = instance['Azure-AsyncOperation'];
    }

    if (instance['Location'] !== undefined) {
      this['location'] = instance['Location'];
    }

    if (instance['Retry-After'] !== undefined) {
      this['retryAfter'] = instance['Retry-After'];
    }
  }

  return this;
};

module.exports = LROSADsPutAsyncRelativeRetryNoStatusHeaders;
