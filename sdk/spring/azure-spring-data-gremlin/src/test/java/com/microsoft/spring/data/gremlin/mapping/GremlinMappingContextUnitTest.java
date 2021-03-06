// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

package com.microsoft.spring.data.gremlin.mapping;

import com.microsoft.spring.data.gremlin.annotation.Vertex;
import com.microsoft.spring.data.gremlin.common.domain.Project;
import com.microsoft.spring.data.gremlin.common.TestConstants;
import org.junit.Assert;
import org.junit.Test;
import org.springframework.data.util.ClassTypeInformation;

public class GremlinMappingContextUnitTest {

    @Test
    public void testCreatePersistentProperty() {
        final GremlinMappingContext context = new GremlinMappingContext();
        final BasicGremlinPersistentEntity<Project> entity = context.createPersistentEntity(
                ClassTypeInformation.from(Project.class));

        Assert.assertNotNull(entity);
        Assert.assertNotNull(entity.findAnnotation(Vertex.class));
        Assert.assertEquals(entity.findAnnotation(Vertex.class).label(), TestConstants.VERTEX_PROJECT_LABEL);
    }
}
