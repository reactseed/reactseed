import useRequest from '@umijs/use-request'
import {
  CombineService,
  BaseOptions,
  BaseResult,
  LoadMoreFormatReturn,
  LoadMoreOptions,
  LoadMoreOptionsWithFormat,
  LoadMoreParams,
  LoadMoreResult,
  OptionsWithFormat,
  PaginatedFormatReturn,
  PaginatedOptionsWithFormat,
  PaginatedParams,
  PaginatedResult,
  BasePaginatedOptions,
} from '@umijs/use-request/lib/types'
import request, { axios } from './request'

export interface Config {
  onErrorBefore?: (error?: Error, params?: any[]) => void
}

let defaultConfig = {
  onErrorBefore: (error?: Error, params?: any[]) => {
    console.error('useFetch Error', error, params)
  },
}

export const config = (config: Config) => {
  defaultConfig = {
    ...defaultConfig,
    ...config,
  }
}
export interface UseFetchOptions<R, P extends any[]> extends BaseOptions<R, P> {
  disabledErrorMessage?: boolean
}

export interface UseFetchOptionsWithFormat<
  R = any,
  P extends any[] = any,
  U = any,
  UU extends U = any
> extends OptionsWithFormat<R, P, U, UU> {
  disabledErrorMessage?: boolean
}

export interface UseFetchLoadMoreOptions<R extends LoadMoreFormatReturn>
  extends LoadMoreOptions<R> {
  disabledErrorMessage?: boolean
}

export interface UseFetchLoadMoreOptionsWithFormat<
  R extends LoadMoreFormatReturn,
  RR
> extends LoadMoreOptionsWithFormat<R, RR> {
  disabledErrorMessage?: boolean
}

export interface UseFetchPaginatedOptionsWithFormat<R, Item, U>
  extends PaginatedOptionsWithFormat<R, Item, U> {
  disabledErrorMessage?: boolean
}

export interface UseFetchBasePaginatedOptions<U>
  extends BasePaginatedOptions<U> {
  disabledErrorMessage?: boolean
}

function useFetch<R = any, P extends any[] = any, U = any, UU extends U = any>(
  service: CombineService<R, P>,
  options: UseFetchOptionsWithFormat<R, P, U, UU>
): BaseResult<U, P>

function useFetch<R = any, P extends any[] = any>(
  service: CombineService<R, P>,
  options?: UseFetchOptions<R, P>
): BaseResult<R, P>

function useFetch<R extends LoadMoreFormatReturn, RR>(
  service: CombineService<RR, LoadMoreParams<R>>,
  options: UseFetchLoadMoreOptionsWithFormat<R, RR>
): LoadMoreResult<R>

function useFetch<R extends LoadMoreFormatReturn, RR extends R>(
  service: CombineService<R, LoadMoreParams<R>>,
  options: UseFetchLoadMoreOptions<RR>
): LoadMoreResult<R>

function useFetch<R = any, Item = any, U extends Item = any>(
  service: CombineService<R, PaginatedParams>,
  options: UseFetchPaginatedOptionsWithFormat<R, Item, U>
): PaginatedResult<Item>

function useFetch<R = any, Item = any, U extends Item = any>(
  service: CombineService<PaginatedFormatReturn<Item>, PaginatedParams>,
  options: UseFetchBasePaginatedOptions<U>
): PaginatedResult<Item>

function useFetch(service, options) {
  const result = useRequest(service, {
    ...options,
    requestMethod: (options) => request(options),
    onError: (error, params) => {
      if (!options?.disabledErrorMessage) {
        defaultConfig.onErrorBefore &&
          defaultConfig.onErrorBefore(error, params)
      }
      options?.onError?.(error, params)
    },
  })
  return result
}

export { axios }
export default useFetch
