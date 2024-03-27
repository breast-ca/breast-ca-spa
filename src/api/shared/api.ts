/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export enum RoleType {
  HeadPhysician = "HeadPhysician",
  ClinicDoctor = "ClinicDoctor",
  Chemotherapist = "Chemotherapist",
  RadiationTherapist = "RadiationTherapist",
  Surgeon = "Surgeon",
  Histologist = "Histologist",
  UltrasoundSpecialist = "UltrasoundSpecialist",
}

export interface CreateUserDto {
  password: string;
  firstName: string;
  lastName: string;
  middleName: string;
  login: string;
  organizationId: number;
  roles: RoleType[];
}

export interface UserResponseDto {
  id: number;
  firstName: string;
  lastName: string;
  middleName: string;
  login: string;
  roles: RoleType[];
  organizationId: number;
}

export interface RolesDto {
  translates: Record<string, string>;
}

export interface LoginDto {
  password: string;
  login: string;
}

export interface LoginResponseDto {
  accessToken: string;
  refreshToken: string;
}

export interface CreateOrganizationDto {
  name: string;
  address: number;
}

export interface AddressResponseDto {
  city: string;
  street: string;
  houseNumber: string;
  corpus: string;
  apartementNumber: string;
  district: string;
}

export interface OrganizationResponseDto {
  id: number;
  name: string;
  address: AddressResponseDto;
}

export interface OrganizationEditDto {
  name?: string;
  address?: number;
}

export interface CreateAddressDto {
  city: string;
  street: string;
  houseNumber: string;
  corpus: string;
  apartementNumber: string;
  district: string;
}

export interface CreatePatientDto {
  name: string;
  surname: string;
  middleName: string;
  individualInsurance: string;
  medicalInsurance: string;
  passport: string;
  insuranceOrganization: string;
  /** @format date-time */
  birthDate: string;
  factAddress?: number;
  jureAddress?: number;
  phoneNumber: string;
}

export enum Status {
  Treatment = "Treatment",
  DispanseryObservation = "DispanseryObservation",
  DispanseryRegistration = "DispanseryRegistration",
  Dead = "Dead",
}

export interface ResponsePatientDto {
  id: number;
  name: string;
  surname: string;
  middleName: string;
  individualInsurance: string;
  medicalInsurance: string;
  passport: string;
  insuranceOrganization: string;
  birthDate: string;
  factAddress?: AddressResponseDto;
  jureAddress?: AddressResponseDto;
  phoneNumber: string;
  status: Status;
  statusText: string;
}

export interface EditPatientDto {
  name?: string;
  surname?: string;
  middleName?: string;
  individualInsurance?: string;
  medicalInsurance?: string;
  passport?: string;
  insuranceOrganization?: string;
  /** @format date-time */
  birthDate?: string;
  factAddress?: number;
  jureAddress?: number;
  phoneNumber?: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title breastCa Api
 * @version 1.0
 * @contact
 *
 * The breastCa Api description
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * No description
     *
     * @tags User
     * @name UserControllerSignUp
     * @request POST:/api/user/create
     */
    userControllerSignUp: (data: CreateUserDto, params: RequestParams = {}) =>
      this.request<CreateUserDto, any>({
        path: `/api/user/create`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserControllerGetProfile
     * @request GET:/api/user/profile
     * @secure
     */
    userControllerGetProfile: (params: RequestParams = {}) =>
      this.request<UserResponseDto, any>({
        path: `/api/user/profile`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserControllerGetRolesTranslates
     * @request GET:/api/user/roles
     */
    userControllerGetRolesTranslates: (params: RequestParams = {}) =>
      this.request<RolesDto, any>({
        path: `/api/user/roles`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserControllerGetUserById
     * @request GET:/api/user/{id}
     */
    userControllerGetUserById: (id: string, params: RequestParams = {}) =>
      this.request<UserResponseDto, any>({
        path: `/api/user/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name AuthControllerSignIn
     * @request POST:/api/auth/login
     */
    authControllerSignIn: (data: LoginDto, params: RequestParams = {}) =>
      this.request<LoginResponseDto, any>({
        path: `/api/auth/login`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name AuthControllerRefresh
     * @request POST:/api/auth/refresh
     */
    authControllerRefresh: (
      query: {
        token: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<LoginResponseDto, any>({
        path: `/api/auth/refresh`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Organizations
     * @name OrganizationControllerOrganizationCreate
     * @request POST:/api/organization
     */
    organizationControllerOrganizationCreate: (data: CreateOrganizationDto, params: RequestParams = {}) =>
      this.request<CreateOrganizationDto, any>({
        path: `/api/organization`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Organizations
     * @name OrganizationControllerGetMyOrganization
     * @request GET:/api/organization/my
     * @secure
     */
    organizationControllerGetMyOrganization: (params: RequestParams = {}) =>
      this.request<OrganizationResponseDto, any>({
        path: `/api/organization/my`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **Роли:** 1. HeadPhysician (Главврач)
     *
     * @tags Organizations
     * @name OrganizationControllerEditMyOrganization
     * @summary [ Edit organization ]: Главврач
     * @request PATCH:/api/organization/edit
     * @secure
     */
    organizationControllerEditMyOrganization: (data: OrganizationEditDto, params: RequestParams = {}) =>
      this.request<OrganizationResponseDto, any>({
        path: `/api/organization/edit`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Address
     * @name AddressControllerAddAddress
     * @request POST:/api/address/add
     * @secure
     */
    addressControllerAddAddress: (data: CreateAddressDto, params: RequestParams = {}) =>
      this.request<CreateAddressDto, any>({
        path: `/api/address/add`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description **Роли:** 1. HeadPhysician (Главврач) 2. ClinicDoctor (ПОК) 3. Surgeon (Хирург)
     *
     * @tags Patients
     * @name PatientControllerCreatePatient
     * @summary Главврач, ПОК, Хирург
     * @request POST:/api/patient
     * @secure
     */
    patientControllerCreatePatient: (data: CreatePatientDto, params: RequestParams = {}) =>
      this.request<CreatePatientDto, any>({
        path: `/api/patient`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Patients
     * @name PatientControllerGetMyPatient
     * @request GET:/api/patient/my
     * @secure
     */
    patientControllerGetMyPatient: (params: RequestParams = {}) =>
      this.request<ResponsePatientDto, any>({
        path: `/api/patient/my`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Patients
     * @name PatientControllerGetPatientById
     * @request GET:/api/patient/{id}
     * @secure
     */
    patientControllerGetPatientById: (id: string, params: RequestParams = {}) =>
      this.request<ResponsePatientDto, any>({
        path: `/api/patient/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Patients
     * @name PatientControllerEditPatient
     * @request PATCH:/api/patient/{id}
     * @secure
     */
    patientControllerEditPatient: (id: string, data: EditPatientDto, params: RequestParams = {}) =>
      this.request<EditPatientDto, any>({
        path: `/api/patient/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
}
