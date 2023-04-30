import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Client = {
  __typename?: 'Client';
  address: Scalars['String'];
  balance: Scalars['Float'];
  birthDate: Scalars['String'];
  createdAt: Scalars['String'];
  email: Scalars['String'];
  first: Scalars['String'];
  id: Scalars['ID'];
  last: Scalars['String'];
  open: Scalars['Boolean'];
  password: Scalars['String'];
  profileImageUrl?: Maybe<Scalars['String']>;
  status: Scalars['Float'];
  updatedAt: Scalars['String'];
  validated: Scalars['Boolean'];
};

export type Company = {
  __typename?: 'Company';
  address: Scalars['String'];
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  password: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  RegisterClient?: Maybe<Client>;
  RegisterCompany?: Maybe<Company>;
  login?: Maybe<ReturnLogin>;
  logout: Scalars['Boolean'];
};


export type MutationRegisterClientArgs = {
  data: RegisterClientInput;
};


export type MutationRegisterCompanyArgs = {
  data: RegisterCompanyInput;
};


export type MutationLoginArgs = {
  data: LoginInput;
};

export type Query = {
  __typename?: 'Query';
  Client?: Maybe<Client>;
  Company?: Maybe<Company>;
  clients: Array<Company>;
};

export type RegisterClientInput = {
  address: Scalars['String'];
  birthDate: Scalars['DateTime'];
  email: Scalars['String'];
  first: Scalars['String'];
  last: Scalars['String'];
  open: Scalars['Boolean'];
  password: Scalars['String'];
  validated: Scalars['Boolean'];
};

export type RegisterCompanyInput = {
  address: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
  open: Scalars['Boolean'];
  password: Scalars['String'];
  validated: Scalars['Boolean'];
};

export type ReturnLogin = {
  __typename?: 'ReturnLogin';
  client?: Maybe<Client>;
  company?: Maybe<Company>;
};

export type LoginMutationVariables = Exact<{
  data: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'ReturnLogin', client?: { __typename?: 'Client', id: string, first: string, last: string, email: string, password: string, address: string, birthDate: string, createdAt: string, updatedAt: string, balance: number, status: number, open: boolean, validated: boolean, profileImageUrl?: string | null } | null, company?: { __typename?: 'Company', id: string, name: string, address: string, email: string, password: string, createdAt: any, updatedAt: any } | null } | null };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type RegisterClientMutationVariables = Exact<{
  data: RegisterClientInput;
}>;


export type RegisterClientMutation = { __typename?: 'Mutation', RegisterClient?: { __typename?: 'Client', id: string, first: string, last: string, email: string, password: string, address: string, birthDate: string, createdAt: string, updatedAt: string, balance: number, status: number, open: boolean, validated: boolean, profileImageUrl?: string | null } | null };

export type RegisterCompanyMutationVariables = Exact<{
  data: RegisterCompanyInput;
}>;


export type RegisterCompanyMutation = { __typename?: 'Mutation', RegisterCompany?: { __typename?: 'Company', id: string, name: string, address: string, email: string, password: string, createdAt: any, updatedAt: any } | null };

export type ClientQueryVariables = Exact<{ [key: string]: never; }>;


export type ClientQuery = { __typename?: 'Query', Client?: { __typename?: 'Client', id: string, first: string, last: string, email: string, password: string, address: string, birthDate: string, createdAt: string, updatedAt: string, balance: number, status: number, open: boolean, validated: boolean, profileImageUrl?: string | null } | null };

export type ClientsQueryVariables = Exact<{ [key: string]: never; }>;


export type ClientsQuery = { __typename?: 'Query', clients: Array<{ __typename?: 'Company', id: string, name: string, address: string, email: string, password: string, createdAt: any, updatedAt: any }> };

export type CompanyQueryVariables = Exact<{ [key: string]: never; }>;


export type CompanyQuery = { __typename?: 'Query', Company?: { __typename?: 'Company', id: string, name: string, address: string, email: string, password: string, createdAt: any, updatedAt: any } | null };


export const LoginDocument = gql`
    mutation Login($data: LoginInput!) {
  login(data: $data) {
    client {
      id
      first
      last
      email
      password
      address
      birthDate
      createdAt
      updatedAt
      balance
      status
      open
      validated
      profileImageUrl
    }
    company {
      id
      name
      address
      email
      password
      createdAt
      updatedAt
    }
  }
}
    `;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;

export function useLogoutMutation() {
  return Urql.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument);
};
export const RegisterClientDocument = gql`
    mutation RegisterClient($data: RegisterClientInput!) {
  RegisterClient(data: $data) {
    id
    first
    last
    email
    password
    address
    birthDate
    createdAt
    updatedAt
    balance
    status
    open
    validated
    profileImageUrl
  }
}
    `;

export function useRegisterClientMutation() {
  return Urql.useMutation<RegisterClientMutation, RegisterClientMutationVariables>(RegisterClientDocument);
};
export const RegisterCompanyDocument = gql`
    mutation RegisterCompany($data: RegisterCompanyInput!) {
  RegisterCompany(data: $data) {
    id
    name
    address
    email
    password
    createdAt
    updatedAt
  }
}
    `;

export function useRegisterCompanyMutation() {
  return Urql.useMutation<RegisterCompanyMutation, RegisterCompanyMutationVariables>(RegisterCompanyDocument);
};
export const ClientDocument = gql`
    query Client {
  Client {
    id
    first
    last
    email
    password
    address
    birthDate
    createdAt
    updatedAt
    balance
    status
    open
    validated
    profileImageUrl
  }
}
    `;

export function useClientQuery(options?: Omit<Urql.UseQueryArgs<ClientQueryVariables>, 'query'>) {
  return Urql.useQuery<ClientQuery, ClientQueryVariables>({ query: ClientDocument, ...options });
};
export const ClientsDocument = gql`
    query Clients {
  clients {
    id
    name
    address
    email
    password
    createdAt
    updatedAt
  }
}
    `;

export function useClientsQuery(options?: Omit<Urql.UseQueryArgs<ClientsQueryVariables>, 'query'>) {
  return Urql.useQuery<ClientsQuery, ClientsQueryVariables>({ query: ClientsDocument, ...options });
};
export const CompanyDocument = gql`
    query Company {
  Company {
    id
    name
    address
    email
    password
    createdAt
    updatedAt
  }
}
    `;

export function useCompanyQuery(options?: Omit<Urql.UseQueryArgs<CompanyQueryVariables>, 'query'>) {
  return Urql.useQuery<CompanyQuery, CompanyQueryVariables>({ query: CompanyDocument, ...options });
};