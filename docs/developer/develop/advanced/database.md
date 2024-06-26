# Database

The Terminus system provides three most popular data storage cluster for all APPs, covering `RDS`, `NoSQL`, and `Cache` data storage use cases.

## RDS

The system has deployed **PostgreSQL** and provides two types of databases.

- **Standalone PostgreSQL**, providing the most commonly used `RDS` database layer functions.
- **Distributed PostgreSQL** extension, powered by **Citus**. Provides the ability to horizontally scale the database.

When setting up a **PostgreSQL** database, you can specify the type of database to be used in [TerminusManifest.yaml](../package/manifest.md#middleware).

```yaml
middleware:
postgres:
  username: postgres
  databases:
    - name: db
      distributed: true # Whether the database is distributed in the cluster.
```

If you use **Citus**, **Terminus** will automatically shard the database tables and perform rebalancing during the horizontal scaling of **PostgreSQL** replicas.

## NoSQL

The NoSQL cluster deployed by Terminus uses the most commonly used **MongoDB**. And uses [Percona Operator for MongoDB](https://github.com/percona/percona-server-mongodb-operator) to manage the **MongoDB** cluster. Users can horizontally scale **MongoDB** Cluster replicas, as well as backup and restore databases.

```yaml
middleware:
  mongodb:
    username: mongodb
    databases:
      - name: db0
      - name: db1
```

## Cache

In terms of the Cache cluster, Terminus uses Redis Cluster. The cluster is managed by a customized [Redis Cluster Operator](https://github.com/beclab/redis-cluster-operator) to achieve cloud nativeness. It enables us to scale replicas horizontally in a convenient and effective manner.


To ensure **data isolation** between users and apps in the **Redis cluster**, the **Terminus** system has added a **Redis cluster proxy**. It isolates data based on the `namespace`. This operation is transparent, meaning app developers typically do not need to be aware of it.

Additionally, this proxy simplifies the process of connecting to clusters. It eliminates the need to switch from a **standalone Redis Client** to a **Redis Cluster client** in the app, thus simplifying app code modifications.

```
middleware:
  redis:
    password: password
    namespace: db0
```
:::info NOTE
Since Terminus uses the Redis Cluster version, developers need to understand the usage restrictions of Redis Cluster in detail when using it.
:::
