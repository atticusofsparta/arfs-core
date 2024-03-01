import { HTTPServiceInterface } from '@arfs-core/http';

import { ArweaveTransactionID } from '../utils/transaction.js';
import { UUID } from '../utils/uuid.js';

export interface ArFSExplorerInterface {
  // DRIVE METHODS
  getAllDrives: () => Promise<any[]>; // gets all drives for the ArFS ecosystem.
  getDrivesForOwner: ({
    owner,
  }: {
    owner: ArweaveTransactionID;
  }) => Promise<any[]>;
  getDrive: ({ driveId }: { driveId?: UUID }) => Promise<any>;
  // FOLDER METHODS
  getFoldersForDrive: ({ driveId }: { driveId: UUID }) => Promise<any>;
  getFoldersForFolder: ({ folderId }: { folderId: UUID }) => Promise<any>;
  getFolder: ({ folderId }: { folderId: UUID }) => Promise<any>;
  // FILE METHODS
  getFilesForDrive: ({ driveId }: { driveId: UUID }) => Promise<any>;
  getFilesForFolder: ({ folderId }: { folderId: UUID }) => Promise<any>;
  getFile: ({ fileId }: { fileId: UUID }) => Promise<any>;
  // FILE AND FOLDER METHODS
  getFolderContents: ({ folderId }: { folderId: UUID }) => Promise<any>; // getFolderContents returns the contents of a folder (subfolders and files). Useful for lazy-loading one level at a time.
  // OTHER METHODS
  getEntity: ({ entityId }: { entityId: UUID }) => Promise<any>; // gets a drive, folder or file by ID.
  getSnapshot: ({ driveId }: { driveId: UUID }) => Promise<any>; // gets the latest snapshot of the drive.
}

export class ArFSExplorer implements ArFSExplorerInterface {
  http: HTTPServiceInterface;
  cache: any;
  constructor({ cache, http }: { cache: any; http: HTTPServiceInterface }) {
    this.http = http;
    this.cache = cache;
  }
  // DRIVE METHODS
  async getAllDrives(): Promise<any[]> {
    throw new Error('Method not implemented.');
  }
  async getDrivesForOwner({
    owner,
  }: {
    owner: ArweaveTransactionID;
  }): Promise<any[]> {
    throw new Error('Method not implemented.');
  }
  async getDrive({ driveId }: { driveId?: UUID }): Promise<any> {
    throw new Error('Method not implemented.');
  }
  // FOLDER METHODS
  async getFoldersForDrive({ driveId }: { driveId: UUID }): Promise<any> {
    throw new Error('Method not implemented.');
  }
  async getFoldersForFolder({ folderId }: { folderId: UUID }): Promise<any> {
    throw new Error('Method not implemented.');
  }
  async getFolder({ folderId }: { folderId: UUID }): Promise<any> {
    throw new Error('Method not implemented.');
  }
  // FILE METHODS
  async getFilesForDrive({ driveId }: { driveId: UUID }): Promise<any> {
    throw new Error('Method not implemented.');
  }
  async getFilesForFolder({ folderId }: { folderId: UUID }): Promise<any> {
    throw new Error('Method not implemented.');
  }
  async getFile({ fileId }: { fileId: UUID }): Promise<any> {
    throw new Error('Method not implemented.');
  }
  // OTHER METHODS
  async getFolderContents({ folderId }: { folderId: UUID }): Promise<any> {
    throw new Error('Method not implemented.');
  }
  async getEntity({ entityId }: { entityId: UUID }): Promise<any> {
    throw new Error('Method not implemented.');
  }
  async getSnapshot({ driveId }: { driveId: UUID }): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
