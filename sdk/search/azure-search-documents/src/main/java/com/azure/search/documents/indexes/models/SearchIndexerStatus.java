// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

package com.azure.search.documents.indexes.models;

import com.azure.core.annotation.Fluent;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.List;

/**
 * Represents the current status and execution history of an indexer.
 */
@Fluent
public final class SearchIndexerStatus {
    /*
     * Overall indexer status. Possible values include: 'Unknown', 'Error',
     * 'Running'
     */
    @JsonProperty(value = "status", required = true, access = JsonProperty.Access.WRITE_ONLY)
    private IndexerStatus status;

    /*
     * The result of the most recent or an in-progress indexer execution.
     */
    @JsonProperty(value = "lastResult", access = JsonProperty.Access.WRITE_ONLY)
    private IndexerExecutionResult lastResult;

    /*
     * History of the recent indexer executions, sorted in reverse
     * chronological order.
     */
    @JsonProperty(value = "executionHistory", required = true, access = JsonProperty.Access.WRITE_ONLY)
    private List<IndexerExecutionResult> executionHistory;

    /*
     * The execution limits for the indexer.
     */
    @JsonProperty(value = "limits", required = true, access = JsonProperty.Access.WRITE_ONLY)
    private SearchIndexerLimits limits;

    /**
     * Constructor of {@link SearchIndexerStatus}.
     *
     * @param status Overall indexer status. Possible values include: 'Unknown', 'Error', 'Running'
     * @param executionHistory History of the recent indexer executions, sorted in reverse chronological order.
     * @param limits The execution limits for the indexer.
     */
    @JsonCreator
    public SearchIndexerStatus(
        @JsonProperty(value = "status") IndexerStatus status,
        @JsonProperty(value = "executionHistory") List<IndexerExecutionResult> executionHistory,
        @JsonProperty(value = "limits") SearchIndexerLimits limits) {
        this.status = status;
        this.executionHistory = executionHistory;
        this.limits = limits;
    }
    /**
     * Get the status property: Overall indexer status. Possible values
     * include: 'Unknown', 'Error', 'Running'.
     *
     * @return the status value.
     */
    public IndexerStatus getStatus() {
        return this.status;
    }

    /**
     * Get the lastResult property: The result of the most recent or an
     * in-progress indexer execution.
     *
     * @return the lastResult value.
     */
    public IndexerExecutionResult getLastResult() {
        return this.lastResult;
    }

    /**
     * Get the executionHistory property: History of the recent indexer
     * executions, sorted in reverse chronological order.
     *
     * @return the executionHistory value.
     */
    public List<IndexerExecutionResult> getExecutionHistory() {
        return this.executionHistory;
    }

    /**
     * Get the limits property: The execution limits for the indexer.
     *
     * @return the limits value.
     */
    public SearchIndexerLimits getLimits() {
        return this.limits;
    }
}
