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
  InstrumentalDiagnost = "InstrumentalDiagnost",
  LaboratoryDiagnost = "LaboratoryDiagnost",
  DepartmentHead = "DepartmentHead",
}

export interface UserResponseDto {
  id: number;
  firstName: string;
  lastName: string;
  middleName: string;
  login: string;
  roles: RoleType[];
  organizationId: number;
  isAnalysist: boolean;
}

export interface CreateAddressDto {
  city: string;
  street: string;
  houseNumber: string;
  corpus: string;
  apartementNumber: string;
  district: string;
}

export interface CreateOrganizationWithAddressDto {
  name: string;
  address: CreateAddressDto;
}

export interface CreateUserDto {
  password: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  login: string;
  organization: CreateOrganizationWithAddressDto;
  roles: RoleType[];
}

export interface AddUserDto {
  password: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  login: string;
  roles: RoleType[];
}

export interface RolesDto {
  translates: Record<string, string>;
}

export interface EditUserDto {
  firstName?: string;
  lastName?: string;
  middleName?: string;
  login?: string;
  password?: string;
  roles?: RoleType[];
}

export interface LoginDto {
  password: string;
  login: string;
}

export interface LoginResponseDto {
  accessToken: string;
  refreshToken: string;
}

export interface AddressResponseDto {
  id: number;
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

export interface EditAddressDto {
  city: string;
  street: string;
  houseNumber: string;
  corpus?: string;
  apartementNumber?: string;
  district: string;
}

export interface OrganizationEditDto {
  name?: string;
  address?: EditAddressDto;
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
  factAddress: CreateAddressDto;
  jureAddress: CreateAddressDto;
  phoneNumber: string;
}

export enum Status {
  Treatment = "Treatment",
  DispanseryObservation = "DispanseryObservation",
  DispanseryRegistration = "DispanseryRegistration",
  Dead = "Dead",
}

export interface PatientFullResponseDto {
  id: number;
  name: string;
  surname: string;
  middleName: string;
  individualInsurance: string;
  medicalInsurance: string;
  passport: string;
  insuranceOrganization: string;
  birthDate: string;
  phoneNumber: string;
  status: Status;
  organizationId: number;
  factAddress: AddressResponseDto;
  jureAddress: AddressResponseDto;
}

export interface PatientsListResponseDto {
  items: PatientFullResponseDto[];
  total: number;
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
  phoneNumber?: string;
  status?: Status;
  factAddress?: EditAddressDto;
  jureAddress?: EditAddressDto;
}

export enum ICD {
  C500 = "C500",
  C501 = "C501",
  C502 = "C502",
  C503 = "C503",
  C504 = "C504",
  C505 = "C505",
  C506 = "C506",
  C508 = "C508",
  C509 = "C509",
}

export enum TumorState {
  Primary = "Primary",
  Synch = "Synch",
  Metachronic = "Metachronic",
  Relapse = "Relapse",
  Progression = "Progression",
  Reconstruction = "Reconstruction",
}

export enum Side {
  Left = "Left",
  Right = "Right",
  Both = "Both",
}

export enum ReconstructionType {
  ExtenderImplant = "ExtenderImplant",
  Combined = "Combined",
  Patchwork = "Patchwork",
  Implant = "Implant",
}

export enum ProgressionType {
  Liver = "Liver",
  Lungs = "Lungs",
  Brain = "Brain",
  Bones = "Bones",
  Marrow = "Marrow",
  Skin = "Skin",
  Nipple = "Nipple",
  OtherBreast = "OtherBreast",
  ChestWall = "ChestWall",
  Thyroid = "Thyroid",
  AbDomen = "AbDomen",
  Spine = "Spine",
  Ovaries = "Ovaries",
}

export enum RelapseType {
  Underarm = "Underarm",
  MicroMetastasis = "MicroMetastasis",
  UnderClavicle = "UnderClavicle",
  AboveClavicle = "AboveClavicle",
  InMammar = "InMammar",
  Neck = "Neck",
}

export enum RelapsePlace {
  Local = "Local",
  Regional = "Regional",
}

export interface CreateDiseaseDto {
  ICD: ICD;
  number: number;
  tumorState: TumorState;
  side: Side;
  reconstruction?: ReconstructionType;
  progressions?: ProgressionType[];
  relapses?: RelapseType[];
  description?: string;
  colour1: string;
  colour2: string;
  relapsePlace?: RelapsePlace;
}

export interface DiseaseTranslateDto {
  relapseTranslates: Record<string, string>;
  progressionTranslates: Record<string, string>;
  reconstructionTranslates: Record<string, string>;
  sideTranslates: Record<string, string>;
  tumorStateTranslates: Record<string, string>;
  ICDDescriptions: Record<string, string>;
  ICDCodes: Record<string, string>;
  relapsePlace: Record<string, string>;
}

export interface DiseaseResponseDto {
  id: number;
  ICD: ICD;
  number: number;
  tumorState: TumorState;
  side: Side;
  reconstruction?: ReconstructionType;
  progressions?: ProgressionType[];
  relapses?: RelapseType[];
  description: string;
  relapsePlace?: RelapsePlace;
  colour1: string;
  colour2: string;
}

export interface DiseaseFullResponseDto {
  id: number;
  ICD: ICD;
  number: number;
  tumorState: TumorState;
  side: Side;
  reconstruction?: ReconstructionType;
  progressions?: ProgressionType[];
  relapses?: RelapseType[];
  description: string;
  relapsePlace?: RelapsePlace;
  colour1: string;
  colour2: string;
  patient: PatientFullResponseDto;
}

export interface EditDiseaseDto {
  ICD?: ICD;
  number?: number;
  tumorState?: TumorState;
  side?: Side;
  relapses?: RelapseType[];
  progressions?: ProgressionType[];
  reconstruction?: ReconstructionType;
  description?: string;
  relapsePlace?: RelapsePlace;
  colour1?: string;
  colour2?: string;
}

export interface AnalysisTranslatesDto {
  analysis: Record<string, string>;
}

export enum AnalysisType {
  Ultrasound = "Ultrasound",
  Biopsy = "Biopsy",
  XRay = "XRay",
  ComputerTomography = "ComputerTomography",
  Mammography = "Mammography",
  BoneScan = "BoneScan",
  MRI = "MRI",
  PETCT = "PETCT",
  CommonBloodAnalysis = "CommonBloodAnalysis",
  CommonUrineAnalysis = "CommonUrineAnalysis",
  BloodBiochemistry = "BloodBiochemistry",
  Markers = "Markers",
}

export enum AnalysisStatus {
  Awaiting = "Awaiting",
  Ready = "Ready",
  Consilium = "Consilium",
  Done = "Done",
}

export interface PatientLightResponseDto {
  id: number;
  name: string;
  surname: string;
  middleName: string;
}

export interface AnalysisListResponseDto {
  id: number;
  analysisType: AnalysisType;
  description: string;
  diseaseId: number;
  /** @format date-time */
  creationTime: string;
  /** @format date-time */
  completedTime: string;
  status: AnalysisStatus;
  patient: PatientLightResponseDto;
}

export interface AnalysisPagedListResponseDto {
  items: AnalysisListResponseDto[];
  total: number;
}

export interface CreateAnalysisDto {
  analysisType: AnalysisType;
}

export interface AnalysisResponseDto {
  id: number;
  analysisType: AnalysisType;
  description: string;
  diseaseId: number;
  /** @format date-time */
  creationTime: string;
  /** @format date-time */
  completedTime: string;
  status: AnalysisStatus;
}

export interface AnalysisFullResponseDto {
  id: number;
  analysisType: AnalysisType;
  description: string;
  diseaseId: number;
  /** @format date-time */
  creationTime: string;
  /** @format date-time */
  completedTime: string;
  status: AnalysisStatus;
  disease: DiseaseFullResponseDto;
}

export enum UltrasoundDescription {
  BreastCancer = "BreastCancer",
  PossibleBreastCancer = "PossibleBreastCancer",
}

export interface CreateUltrasoundDto {
  tumorSize: number;
  metastasisNumber: number;
  birNumber: number;
  relapseTypes: RelapseType[];
  side: Side;
  description: UltrasoundDescription;
}

export interface FillUltrasoundAnalysisDto {
  description?: string;
  ultrasoundPayload: CreateUltrasoundDto;
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
     * @name UserControllerGetUsers
     * @request GET:/api/user
     * @secure
     */
    userControllerGetUsers: (params: RequestParams = {}) =>
      this.request<UserResponseDto[], any>({
        path: `/api/user`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserControllerSignUp
     * @request POST:/api/user/create
     */
    userControllerSignUp: (
      query: {
        key: string;
      },
      data: CreateUserDto,
      params: RequestParams = {},
    ) =>
      this.request<CreateUserDto, any>({
        path: `/api/user/create`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserControllerAddUser
     * @request POST:/api/user/add
     * @secure
     */
    userControllerAddUser: (data: AddUserDto, params: RequestParams = {}) =>
      this.request<UserResponseDto, any>({
        path: `/api/user/add`,
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
     * @secure
     */
    userControllerGetRolesTranslates: (params: RequestParams = {}) =>
      this.request<RolesDto, any>({
        path: `/api/user/roles`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserControllerGetUserById
     * @request GET:/api/user/{id}
     * @secure
     */
    userControllerGetUserById: (id: string, params: RequestParams = {}) =>
      this.request<UserResponseDto, any>({
        path: `/api/user/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserControllerUpdateUserById
     * @request PATCH:/api/user/{id}
     * @secure
     */
    userControllerUpdateUserById: (id: string, data: EditUserDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/user/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
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
     * @description **Роли:** 1. HeadPhysician (Главврач) 2. ClinicDoctor (ПОК-врач) 3. Surgeon (Хирург)
     *
     * @tags Patients
     * @name PatientControllerCreatePatient
     * @summary Главврач, ПОК-врач, Хирург
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
     * @name PatientControllerGetPatientByOrganization
     * @request GET:/api/patient
     * @secure
     */
    patientControllerGetPatientByOrganization: (
      query?: {
        pageSize?: string;
        pageNumber?: string;
        firstName?: string;
        lastName?: string;
        middleName?: string;
        individualInsurance?: string;
        status?: "Treatment" | "DispanseryObservation" | "DispanseryRegistration" | "Dead";
      },
      params: RequestParams = {},
    ) =>
      this.request<PatientsListResponseDto, any>({
        path: `/api/patient`,
        method: "GET",
        query: query,
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
      this.request<PatientFullResponseDto, any>({
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

    /**
     * @description **Роли:** 1. HeadPhysician (Главврач) 2. Surgeon (Хирург) 3. ClinicDoctor (ПОК-врач)
     *
     * @tags Diseases
     * @name DiseaseControllerDiseaseCreate
     * @summary Главврач, Хирург, ПОК-врач
     * @request POST:/api/disease/{patientId}
     * @secure
     */
    diseaseControllerDiseaseCreate: (patientId: string, data: CreateDiseaseDto, params: RequestParams = {}) =>
      this.request<PatientFullResponseDto, any>({
        path: `/api/disease/${patientId}`,
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
     * @tags Diseases
     * @name DiseaseControllerGetDiseaseTranslates
     * @request GET:/api/disease/translates
     * @secure
     */
    diseaseControllerGetDiseaseTranslates: (params: RequestParams = {}) =>
      this.request<DiseaseTranslateDto, any>({
        path: `/api/disease/translates`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Diseases
     * @name DiseaseControllerDiseaseGetAll
     * @request GET:/api/disease/all/{patientId}
     * @secure
     */
    diseaseControllerDiseaseGetAll: (patientId: string, params: RequestParams = {}) =>
      this.request<DiseaseResponseDto, any>({
        path: `/api/disease/all/${patientId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Diseases
     * @name DiseaseControllerGetDiseaseById
     * @request GET:/api/disease/{id}
     * @secure
     */
    diseaseControllerGetDiseaseById: (id: string, params: RequestParams = {}) =>
      this.request<DiseaseFullResponseDto, any>({
        path: `/api/disease/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Diseases
     * @name DiseaseControllerDiseaseEdit
     * @request PATCH:/api/disease/{id}
     * @secure
     */
    diseaseControllerDiseaseEdit: (id: string, data: EditDiseaseDto, params: RequestParams = {}) =>
      this.request<EditDiseaseDto, any>({
        path: `/api/disease/${id}`,
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
     * @tags file-storage
     * @name FileStorageControllerUploadFile
     * @request POST:/api/file-storage/upload
     * @secure
     */
    fileStorageControllerUploadFile: (
      data: {
        /** @format binary */
        file?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/file-storage/upload`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags file-storage
     * @name FileStorageControllerGetFile
     * @request GET:/api/file-storage/file/{path}
     * @secure
     */
    fileStorageControllerGetFile: (path: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/file-storage/file/${path}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags analysis
     * @name AnalysisControllerGetTranslates
     * @request GET:/api/analysis/translates
     * @secure
     */
    analysisControllerGetTranslates: (params: RequestParams = {}) =>
      this.request<any, AnalysisTranslatesDto>({
        path: `/api/analysis/translates`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags analysis
     * @name AnalysisControllerGetAllAnalysis
     * @request GET:/api/analysis
     * @secure
     */
    analysisControllerGetAllAnalysis: (
      query?: {
        pageSize?: string;
        pageNumber?: string;
        firstName?: string;
        lastName?: string;
        middleName?: string;
        status?: "Awaiting" | "Ready" | "Consilium" | "Done";
      },
      params: RequestParams = {},
    ) =>
      this.request<AnalysisPagedListResponseDto[], any>({
        path: `/api/analysis`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags analysis
     * @name AnalysisControllerCreateAnalysis
     * @request POST:/api/analysis/{diseaseId}
     * @secure
     */
    analysisControllerCreateAnalysis: (diseaseId: string, data: CreateAnalysisDto, params: RequestParams = {}) =>
      this.request<CreateAnalysisDto, any>({
        path: `/api/analysis/${diseaseId}`,
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
     * @tags analysis
     * @name AnalysisControllerGetAnalysisByDisease
     * @request GET:/api/analysis/byDisease/{diseaseId}
     * @secure
     */
    analysisControllerGetAnalysisByDisease: (diseaseId: string, params: RequestParams = {}) =>
      this.request<AnalysisResponseDto[], any>({
        path: `/api/analysis/byDisease/${diseaseId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags analysis
     * @name AnalysisControllerGetAnalysisById
     * @request GET:/api/analysis/{analysisId}
     * @secure
     */
    analysisControllerGetAnalysisById: (analysisId: string, params: RequestParams = {}) =>
      this.request<AnalysisFullResponseDto, any>({
        path: `/api/analysis/${analysisId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags analysis
     * @name AnalysisControllerFillUltrasoundAnalysis
     * @request POST:/api/analysis/ultrasoundFill/{analysisId}
     * @secure
     */
    analysisControllerFillUltrasoundAnalysis: (
      analysisId: string,
      data: FillUltrasoundAnalysisDto,
      params: RequestParams = {},
    ) =>
      this.request<CreateAnalysisDto, any>({
        path: `/api/analysis/ultrasoundFill/${analysisId}`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
}
