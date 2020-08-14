package app.web.pavelk.schedule1.util;

import com.fasterxml.jackson.annotation.ObjectIdGenerator;
import com.fasterxml.jackson.annotation.ObjectIdResolver;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;

public class EntityIdResolver implements ObjectIdResolver {
    private EntityManager entityManager;

    @Autowired
    public EntityIdResolver(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    public void bindItem(ObjectIdGenerator.IdKey id, Object pojo) {

    }

    @Override
    public Object resolveId(ObjectIdGenerator.IdKey id) {
        //id.scope - из анотации ент
        return entityManager.find(id.scope, Long.parseLong(id.key.toString()));
    }

    @Override
    public ObjectIdResolver newForDeserialization(Object context) {
        return this; // сложно
    }

    @Override
    public boolean canUseFor(ObjectIdResolver resolverType) {
        return false;
    }
}
