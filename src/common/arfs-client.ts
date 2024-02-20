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
import { TransactionInterface } from 'arweave/node/lib/transaction.js';

import { ArweaveTransactionID, UUID } from '../utils/index.js';

export interface ArFSManagerInterface {
  move: (
    entityId: UUID,
    newParentFolderId: UUID,
  ) => Promise<TransactionInterface>;
  rename: (entityId: UUID, newName: string) => Promise<TransactionInterface>;
  delete: (entityId: UUID) => Promise<TransactionInterface>; // do-not-store tag. Evaluator will treat as deleted.
  hide: (entityId: UUID, hidden: boolean) => Promise<TransactionInterface>; // `hidden` prop wil set the `hidden` property of the entity in the JSON metadata.
  license: (
    entityId: UUID,
    license: ArweaveTransactionID, // License transaction ID.
  ) => Promise<TransactionInterface>; // asserts license based on ANS-105 spec.
}

export interface ArFSClientInterface extends ArFSManagerInterface {
  getDrive(driveId: UUID): Promise<any>;
  getFolder(folderId: UUID): Promise<any>;
  getFile(fileId: UUID): Promise<any>;
}
export class DefaultClient {}
