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

export interface RegisterUserDto {
  email: string;
  name: string;
  password: string;
}

export interface RegisterUserResponseDto {
  id: number;
  email: string;
  name: string;
}

export interface UpdateUserDto {
  name?: string;
  shortId?: string;
  description?: string;
}

export interface UserResponseDto {
  id: number;
  email: string;
  name: string;
  shortId: string;
  description: string;
}

export interface SignInDto {
  email: string;
  password: string;
}

export interface SignInResponseDto {
  access: string;
  refresh: string;
}

export interface RefreshRequestDto {
  refresh: string;
}
