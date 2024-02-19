# ARFS Core

This is the home of the ARFS Core SDK, a tool for resolving ArFS drives, files, and folders for private and public entities. Fully compliant with the ArFS Specification from ar.io.

## ArFS core packages

- [ARFS-LevelDB-Cache](./arfs-leveldb-cache/README.md): A browser friendly cache leveraging IndexedDB for caching ArFS entities.
- [ARFS-LMDB-Cache](./arfs-leveldb-cache/README.md): An LMDB cache implementation for node environments.
- [Upload](./upload/README.md): Contains upload providers for interacting with bundlers and gateways.
- [Download](./download/README.md): Contains download providers for download files from Arweave gateways.
- [Oracles](./oracles/README.md): Contains pricing oracles for fees on the Arweave network.
- [HTTP](./http/README.md): HTTP providers for interacting with arweave gateways and graphql
- [Auth](./auth/README.md): Authentication providers for logging into a drive - wallet providers for arconnect, JWK and so on.
