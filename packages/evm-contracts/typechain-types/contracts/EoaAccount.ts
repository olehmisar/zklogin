/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../common";

export declare namespace ECDSA {
  export type SignatureStruct = { r: BigNumberish; s: BigNumberish };

  export type SignatureStructOutput = [r: bigint, s: bigint] & {
    r: bigint;
    s: bigint;
  };

  export type PublicKeyStruct = { x: BigNumberish; y: BigNumberish };

  export type PublicKeyStructOutput = [x: bigint, y: bigint] & {
    x: bigint;
    y: bigint;
  };
}

export declare namespace WebAuthnP256 {
  export type MetadataStruct = {
    authenticatorData: BytesLike;
    clientDataJSON: string;
    challengeIndex: BigNumberish;
    typeIndex: BigNumberish;
    userVerificationRequired: boolean;
  };

  export type MetadataStructOutput = [
    authenticatorData: string,
    clientDataJSON: string,
    challengeIndex: bigint,
    typeIndex: bigint,
    userVerificationRequired: boolean
  ] & {
    authenticatorData: string;
    clientDataJSON: string;
    challengeIndex: bigint;
    typeIndex: bigint;
    userVerificationRequired: boolean;
  };
}

export declare namespace JwtVerifierP256 {
  export type VerificationDataStruct = {
    proof: BytesLike;
    jwtIat: BigNumberish;
    jwtNonce: BytesLike;
    publicKeyHash: BytesLike;
  };

  export type VerificationDataStructOutput = [
    proof: string,
    jwtIat: bigint,
    jwtNonce: string,
    publicKeyHash: string
  ] & {
    proof: string;
    jwtIat: bigint;
    jwtNonce: string;
    publicKeyHash: string;
  };
}

export interface EoaAccountInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "accountId"
      | "authProviderId"
      | "execute"
      | "getWebAuthnPublicKey"
      | "nonce"
      | "proofVerifier"
      | "publicKeyRegistry"
      | "recover"
      | "setAccountId"
      | "webauthnPublicKey"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "accountId", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "authProviderId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "execute",
    values: [
      AddressLike,
      BytesLike,
      BigNumberish,
      ECDSA.SignatureStruct,
      WebAuthnP256.MetadataStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getWebAuthnPublicKey",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "nonce", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "proofVerifier",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "publicKeyRegistry",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "recover",
    values: [JwtVerifierP256.VerificationDataStruct, ECDSA.PublicKeyStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "setAccountId",
    values: [
      ECDSA.PublicKeyStruct,
      BytesLike,
      BytesLike,
      AddressLike,
      AddressLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "webauthnPublicKey",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "accountId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "authProviderId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getWebAuthnPublicKey",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "nonce", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proofVerifier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "publicKeyRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "recover", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setAccountId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "webauthnPublicKey",
    data: BytesLike
  ): Result;
}

export interface EoaAccount extends BaseContract {
  connect(runner?: ContractRunner | null): EoaAccount;
  waitForDeployment(): Promise<this>;

  interface: EoaAccountInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  accountId: TypedContractMethod<[], [string], "view">;

  authProviderId: TypedContractMethod<[], [string], "view">;

  execute: TypedContractMethod<
    [
      to: AddressLike,
      data: BytesLike,
      value: BigNumberish,
      signature: ECDSA.SignatureStruct,
      metadata: WebAuthnP256.MetadataStruct
    ],
    [void],
    "nonpayable"
  >;

  getWebAuthnPublicKey: TypedContractMethod<
    [],
    [ECDSA.PublicKeyStructOutput],
    "view"
  >;

  nonce: TypedContractMethod<[], [bigint], "view">;

  proofVerifier: TypedContractMethod<[], [string], "view">;

  publicKeyRegistry: TypedContractMethod<[], [string], "view">;

  recover: TypedContractMethod<
    [
      verificationData: JwtVerifierP256.VerificationDataStruct,
      newP256PublicKey: ECDSA.PublicKeyStruct
    ],
    [void],
    "nonpayable"
  >;

  setAccountId: TypedContractMethod<
    [
      webauthnPublicKey_: ECDSA.PublicKeyStruct,
      accountId_: BytesLike,
      authProviderId_: BytesLike,
      publicKeyRegistry_: AddressLike,
      proofVerifier_: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  webauthnPublicKey: TypedContractMethod<
    [],
    [[bigint, bigint] & { x: bigint; y: bigint }],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "accountId"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "authProviderId"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "execute"
  ): TypedContractMethod<
    [
      to: AddressLike,
      data: BytesLike,
      value: BigNumberish,
      signature: ECDSA.SignatureStruct,
      metadata: WebAuthnP256.MetadataStruct
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getWebAuthnPublicKey"
  ): TypedContractMethod<[], [ECDSA.PublicKeyStructOutput], "view">;
  getFunction(
    nameOrSignature: "nonce"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "proofVerifier"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "publicKeyRegistry"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "recover"
  ): TypedContractMethod<
    [
      verificationData: JwtVerifierP256.VerificationDataStruct,
      newP256PublicKey: ECDSA.PublicKeyStruct
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setAccountId"
  ): TypedContractMethod<
    [
      webauthnPublicKey_: ECDSA.PublicKeyStruct,
      accountId_: BytesLike,
      authProviderId_: BytesLike,
      publicKeyRegistry_: AddressLike,
      proofVerifier_: AddressLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "webauthnPublicKey"
  ): TypedContractMethod<
    [],
    [[bigint, bigint] & { x: bigint; y: bigint }],
    "view"
  >;

  filters: {};
}
