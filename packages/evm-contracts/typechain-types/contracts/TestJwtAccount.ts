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

export declare namespace JwtVerifier {
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

export interface TestJwtAccountInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "accountId"
      | "authProviderId"
      | "proofVerifier"
      | "publicKeyRegistry"
      | "verify"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "accountId", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "authProviderId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "proofVerifier",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "publicKeyRegistry",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "verify",
    values: [JwtVerifier.VerificationDataStruct]
  ): string;

  decodeFunctionResult(functionFragment: "accountId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "authProviderId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proofVerifier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "publicKeyRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "verify", data: BytesLike): Result;
}

export interface TestJwtAccount extends BaseContract {
  connect(runner?: ContractRunner | null): TestJwtAccount;
  waitForDeployment(): Promise<this>;

  interface: TestJwtAccountInterface;

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

  proofVerifier: TypedContractMethod<[], [string], "view">;

  publicKeyRegistry: TypedContractMethod<[], [string], "view">;

  verify: TypedContractMethod<
    [verificationData: JwtVerifier.VerificationDataStruct],
    [void],
    "nonpayable"
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
    nameOrSignature: "proofVerifier"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "publicKeyRegistry"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "verify"
  ): TypedContractMethod<
    [verificationData: JwtVerifier.VerificationDataStruct],
    [void],
    "nonpayable"
  >;

  filters: {};
}
