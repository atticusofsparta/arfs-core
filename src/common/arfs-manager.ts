import { HTTPServiceInterface } from '@arfs-core/http';
import { TransactionInterface } from 'arweave/node/lib/transaction.js';

import { ArweaveTransactionID } from '../utils/transaction.js';
import { UUID } from '../utils/uuid.js';
import { ArFSExplorer, ArFSExplorerInterface } from './arfs-explorer.js';

export interface ArFSManagerInterface extends ArFSExplorerInterface {
  move: ({
    entityId,
    newParentFolderId,
  }: {
    entityId: UUID;
    newParentFolderId: UUID;
  }) => Promise<TransactionInterface>;
  rename: ({
    entityId,
    newName,
  }: {
    entityId: UUID;
    newName: string;
  }) => Promise<TransactionInterface>;
  delete: ({ entityId }: { entityId: UUID }) => Promise<TransactionInterface>; // do-not-store tag. Evaluator will treat as deleted.
  hide: ({
    entityId,
    hidden,
  }: {
    entityId: UUID;
    hidden: boolean;
  }) => Promise<TransactionInterface>; // `hidden` prop wil set the `hidden` property of the entity in the JSON metadata.
  license: ({
    entityId,
    license,
  }: {
    entityId: UUID;
    license: ArweaveTransactionID; // License transaction ID.
  }) => Promise<TransactionInterface>; // asserts license based on ANS-105 spec.
  snapshot: ({ driveId }: { driveId: UUID }) => Promise<TransactionInterface>; // creates a new transaction with the same data as the original.
  createDrive: ({
    name,
    privacy,
  }: {
    name: string;
    privacy: 'private' | 'public'; // Drives must specify privacy. Folders and files inherit from the drive settings.
  }) => Promise<TransactionInterface>;
  createFolder: ({
    name,
    parentFolderId,
  }: {
    name: string;
    parentFolderId: UUID;
  }) => Promise<TransactionInterface>;
  createFile: ({
    name,
    dataTxId,
  }: {
    name: string;
    dataTxId: ArweaveTransactionID;
  }) => Promise<TransactionInterface>;
}

export class ArFSManager extends ArFSExplorer implements ArFSManagerInterface {
  http: HTTPServiceInterface;
  constructor({ cache, http }: { cache: any; http: HTTPServiceInterface }) {
    super({ cache, http });
    this.http = http;
  }
  async move({
    entityId,
    newParentFolderId,
  }: {
    entityId: UUID;
    newParentFolderId: UUID;
  }): Promise<TransactionInterface> {
    throw new Error('Method not implemented.');
  }
  async rename({
    entityId,
    newName,
  }: {
    entityId: UUID;
    newName: string;
  }): Promise<TransactionInterface> {
    throw new Error('Method not implemented.');
  }
  async delete({
    entityId,
  }: {
    entityId: UUID;
  }): Promise<TransactionInterface> {
    throw new Error('Method not implemented.');
  }
  async hide({
    entityId,
    hidden,
  }: {
    entityId: UUID;
    hidden: boolean;
  }): Promise<TransactionInterface> {
    throw new Error('Method not implemented.');
  }
  async license({
    entityId,
    license,
  }: {
    entityId: UUID;
    license: ArweaveTransactionID;
  }): Promise<TransactionInterface> {
    throw new Error('Method not implemented.');
  }
  async snapshot({
    driveId,
  }: {
    driveId: UUID;
  }): Promise<TransactionInterface> {
    throw new Error('Method not implemented.');
  }
  async createDrive({
    name,
    privacy,
  }: {
    name: string;
    privacy: 'private' | 'public';
  }): Promise<TransactionInterface> {
    throw new Error('Method not implemented.');
  }
  async createFolder({
    name,
    parentFolderId,
  }: {
    name: string;
    parentFolderId: UUID;
  }): Promise<TransactionInterface> {
    throw new Error('Method not implemented.');
  }
  async createFile({
    name,
    dataTxId,
  }: {
    name: string;
    dataTxId: ArweaveTransactionID;
  }): Promise<TransactionInterface> {
    throw new Error('Method not implemented.');
  }
}
