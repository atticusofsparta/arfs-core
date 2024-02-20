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

// the following tx tags are required for all ArFS entities
export type ArFSBaseEntityTags = {
  ArFS: string; // version string eg '1.0.0'
  'Entity-Type': 'drive' | 'folder' | 'file' | 'snapshot';
  'Unix-Time': string; // eg '1640000000'
  'Content-Type': 'application/json' | 'application/octet-stream'; // octet for encrypted files
  'Drive-Id': string; // UUID of drive
};
