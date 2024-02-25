import axios, { AxiosInstance, AxiosRequestConfig, CanceledError } from 'axios';
import axiosRetry, { IAxiosRetryConfig } from 'axios-retry';

import { ArFSLogger } from './logger.js';
import { ArFSLoggerInterface } from './types.js';
import { version } from './version.js';

export const defaultRequestHeaders = {
  'x-arfs-source-version': version,
  'x-arfs-source-identifier': '@arfs-core/http',
};

export interface AxiosInstanceParameters {
  axiosConfig?: Omit<AxiosRequestConfig, 'validateStatus'>;
  retryConfig?: IAxiosRetryConfig;
  logger?: ArFSLoggerInterface;
}

export const createAxiosInstance = ({
  logger = new ArFSLogger(),
  axiosConfig = {},
  retryConfig = {
    retryDelay: axiosRetry.exponentialDelay,
    retries: 3,
    retryCondition: (error) => {
      return (
        !(error instanceof CanceledError) &&
        axiosRetry.isNetworkOrIdempotentRequestError(error)
      );
    },
    onRetry: (retryCount, error) => {
      logger.debug(`Request failed, ${error}. Retry attempt #${retryCount}...`);
    },
  },
}: AxiosInstanceParameters = {}): AxiosInstance => {
  const axiosInstance = axios.create({
    ...axiosConfig,
    headers: {
      ...axiosConfig.headers,
      ...defaultRequestHeaders,
    },
    validateStatus: () => true, // don't throw on non-200 status codes
  });

  // eslint-disable-next-line
  if (retryConfig.retries && retryConfig.retries > 0) {
    axiosRetry(axiosInstance, retryConfig);
  }
  return axiosInstance;
};
