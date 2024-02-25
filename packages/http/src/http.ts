/**
 * Copyright (C) 2022-2023 Permanent Data Solutions, Inc. All Rights Reserved.
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
import { AxiosInstance } from 'axios';
import { IAxiosRetryConfig } from 'axios-retry';
import { Readable } from 'stream';
import { ReadableStream } from 'stream/web';

import { FailedRequestError } from './errors.js';
import { createAxiosInstance } from './http-client.js';
import { ArFSLoggerInterface, HTTPServiceInterface } from './types.js';

export class AxiosHTTPService implements HTTPServiceInterface {
  protected axios: AxiosInstance;
  protected logger: ArFSLoggerInterface;

  constructor({
    url,
    retryConfig,
    logger,
  }: {
    url: string;
    retryConfig?: IAxiosRetryConfig;
    logger: ArFSLoggerInterface;
  }) {
    this.logger = logger;
    this.axios = createAxiosInstance({
      axiosConfig: {
        baseURL: url,
        maxRedirects: 0, // prevents backpressure issues when uploading larger streams via https
        onUploadProgress: (progressEvent) => {
          this.logger.debug(`Uploading...`, {
            percent: Math.floor((progressEvent.progress ?? 0) * 100),
            loaded: `${progressEvent.loaded} bytes`,
            total: `${progressEvent.total} bytes`,
          });
          if (progressEvent.progress === 1) {
            this.logger.debug(`Upload complete!`);
          }
        },
      },
      retryConfig,
      logger: this.logger,
    });
  }
  async get<T>({
    endpoint,
    signal,
    allowedStatuses = [200, 202],
    headers,
  }: {
    endpoint: string;
    signal?: AbortSignal;
    allowedStatuses?: number[];
    headers?: Record<string, string>;
  }): Promise<T> {
    const { status, statusText, data } = await this.axios.get<T>(endpoint, {
      headers,
      signal,
    });

    if (!allowedStatuses.includes(status)) {
      throw new FailedRequestError(status, statusText);
    }

    return data;
  }

  async post<T>({
    endpoint,
    signal,
    allowedStatuses = [200, 202],
    headers,
    data,
  }: {
    endpoint: string;
    signal?: AbortSignal;
    allowedStatuses?: number[];
    headers?: Record<string, string>;
    data: Readable | Buffer | ReadableStream;
  }): Promise<T> {
    const {
      status,
      statusText,
      data: response,
    } = await this.axios.post<T>(endpoint, data, {
      headers,
      signal,
    });

    if (!allowedStatuses.includes(status)) {
      throw new FailedRequestError(status, statusText);
    }

    return response;
  }
}
