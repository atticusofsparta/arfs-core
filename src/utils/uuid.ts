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
import { UUID_REGEX } from '../constants.js';
import { Equatable } from './equatable.js';

export class UUID implements Equatable<UUID> {
  constructor(private readonly uuid: string) {
    if (!UUID_REGEX.test(uuid)) {
      throw new Error('Invalid UUID format.');
    }
  }
  [Symbol.toPrimitive](hint?: string): string {
    if (hint === 'number') {
      throw new Error('Transaction IDs cannot be interpreted as a number!');
    }

    return this.toString();
  }

  toString(): string {
    return this.uuid;
  }

  valueOf(): string {
    return this.uuid;
  }

  equals(entityId: UUID): boolean {
    return this.uuid === entityId.toString();
  }

  toJSON(): string {
    return this.toString();
  }
}
