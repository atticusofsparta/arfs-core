/**
 * Copyright (C) 2022-2024 Permanent Data Solutions, Inc. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
import { ArweaveTransactionID } from '../utils/transaction.js';
import { UUID } from '../utils/uuid.js';
import { ArFSExplorerInterface } from './arfs-explorer.js';
import { ArFSManager, ArFSManagerInterface } from './arfs-manager.js';

export interface ArFSClientInterface
  extends ArFSManagerInterface,
    ArFSExplorerInterface {
  loadDrive({ driveId }: { driveId: string }): Promise<ArweaveTransactionID>; // loads entire drive
  loadFolderContents: ({ folderId }: { folderId: UUID }) => Promise<any>; // getFolderContents returns the contents of a folder (subfolders and files). Useful for lazy-loading one level at a time.
}

export class ArFSClient extends ArFSManager implements ArFSClientInterface {
  http: any;
  cache: any;
  constructor({ cache, http }: { cache: any; http?: any }) {
    super({ cache, http });
    this.http = http;
  }
  async loadDrive({
    driveId,
  }: {
    driveId: string;
  }): Promise<ArweaveTransactionID> {
    // recursively load all the data for the drive using loops and the getFolderContents method.
    throw new Error('Method not implemented.');
  }
  async loadFolderContents({ folderId }: { folderId: UUID }): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
