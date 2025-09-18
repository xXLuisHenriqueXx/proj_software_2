
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model organizationInfo
 * 
 */
export type organizationInfo = $Result.DefaultSelection<Prisma.$organizationInfoPayload>
/**
 * Model Toy
 * 
 */
export type Toy = $Result.DefaultSelection<Prisma.$ToyPayload>
/**
 * Model ToyPicture
 * 
 */
export type ToyPicture = $Result.DefaultSelection<Prisma.$ToyPicturePayload>
/**
 * Model HistoryEntry
 * 
 */
export type HistoryEntry = $Result.DefaultSelection<Prisma.$HistoryEntryPayload>
/**
 * Model Rate
 * 
 */
export type Rate = $Result.DefaultSelection<Prisma.$RatePayload>
/**
 * Model Chat
 * 
 */
export type Chat = $Result.DefaultSelection<Prisma.$ChatPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model Benefit
 * 
 */
export type Benefit = $Result.DefaultSelection<Prisma.$BenefitPayload>
/**
 * Model UserBenefit
 * 
 */
export type UserBenefit = $Result.DefaultSelection<Prisma.$UserBenefitPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const ToyType: {
  MENINOS: 'MENINOS',
  MENINAS: 'MENINAS',
  ARTÍSTICO: 'ARTÍSTICO',
  AVENTURA: 'AVENTURA',
  BONECOS: 'BONECOS',
  CARRINHOS: 'CARRINHOS',
  CARTAS: 'CARTAS',
  EDUCATIVO: 'EDUCATIVO',
  ESPORTES: 'ESPORTES',
  ESTRATÉGIA: 'ESTRATÉGIA',
  PALAVRAS: 'PALAVRAS',
  PARA_BEBÊS: 'PARA_BEBÊS',
  QUEBRA_CABEÇAS: 'QUEBRA_CABEÇAS',
  SIMULAÇÃO: 'SIMULAÇÃO',
  TABULEIRO: 'TABULEIRO',
  VIDEOGAME: 'VIDEOGAME'
};

export type ToyType = (typeof ToyType)[keyof typeof ToyType]


export const AgeRange: {
  ZERO_A_UM: 'ZERO_A_UM',
  UM_A_TRES: 'UM_A_TRES',
  TRES_A_SEIS: 'TRES_A_SEIS',
  SEIS_A_DOZE: 'SEIS_A_DOZE',
  DOZE_OU_MAIS: 'DOZE_OU_MAIS'
};

export type AgeRange = (typeof AgeRange)[keyof typeof AgeRange]


export const UserBenefitStatus: {
  ACTIVE: 'ACTIVE',
  REDEEMED: 'REDEEMED',
  REVOKED: 'REVOKED',
  EXPIRED: 'EXPIRED'
};

export type UserBenefitStatus = (typeof UserBenefitStatus)[keyof typeof UserBenefitStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type ToyType = $Enums.ToyType

export const ToyType: typeof $Enums.ToyType

export type AgeRange = $Enums.AgeRange

export const AgeRange: typeof $Enums.AgeRange

export type UserBenefitStatus = $Enums.UserBenefitStatus

export const UserBenefitStatus: typeof $Enums.UserBenefitStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organizationInfo`: Exposes CRUD operations for the **organizationInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrganizationInfos
    * const organizationInfos = await prisma.organizationInfo.findMany()
    * ```
    */
  get organizationInfo(): Prisma.organizationInfoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.toy`: Exposes CRUD operations for the **Toy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Toys
    * const toys = await prisma.toy.findMany()
    * ```
    */
  get toy(): Prisma.ToyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.toyPicture`: Exposes CRUD operations for the **ToyPicture** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ToyPictures
    * const toyPictures = await prisma.toyPicture.findMany()
    * ```
    */
  get toyPicture(): Prisma.ToyPictureDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.historyEntry`: Exposes CRUD operations for the **HistoryEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HistoryEntries
    * const historyEntries = await prisma.historyEntry.findMany()
    * ```
    */
  get historyEntry(): Prisma.HistoryEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rate`: Exposes CRUD operations for the **Rate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rates
    * const rates = await prisma.rate.findMany()
    * ```
    */
  get rate(): Prisma.RateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chat`: Exposes CRUD operations for the **Chat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chats
    * const chats = await prisma.chat.findMany()
    * ```
    */
  get chat(): Prisma.ChatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.benefit`: Exposes CRUD operations for the **Benefit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Benefits
    * const benefits = await prisma.benefit.findMany()
    * ```
    */
  get benefit(): Prisma.BenefitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userBenefit`: Exposes CRUD operations for the **UserBenefit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserBenefits
    * const userBenefits = await prisma.userBenefit.findMany()
    * ```
    */
  get userBenefit(): Prisma.UserBenefitDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    organizationInfo: 'organizationInfo',
    Toy: 'Toy',
    ToyPicture: 'ToyPicture',
    HistoryEntry: 'HistoryEntry',
    Rate: 'Rate',
    Chat: 'Chat',
    Message: 'Message',
    Benefit: 'Benefit',
    UserBenefit: 'UserBenefit'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "organizationInfo" | "toy" | "toyPicture" | "historyEntry" | "rate" | "chat" | "message" | "benefit" | "userBenefit"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      organizationInfo: {
        payload: Prisma.$organizationInfoPayload<ExtArgs>
        fields: Prisma.organizationInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.organizationInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.organizationInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationInfoPayload>
          }
          findFirst: {
            args: Prisma.organizationInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.organizationInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationInfoPayload>
          }
          findMany: {
            args: Prisma.organizationInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationInfoPayload>[]
          }
          create: {
            args: Prisma.organizationInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationInfoPayload>
          }
          createMany: {
            args: Prisma.organizationInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.organizationInfoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationInfoPayload>[]
          }
          delete: {
            args: Prisma.organizationInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationInfoPayload>
          }
          update: {
            args: Prisma.organizationInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationInfoPayload>
          }
          deleteMany: {
            args: Prisma.organizationInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.organizationInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.organizationInfoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationInfoPayload>[]
          }
          upsert: {
            args: Prisma.organizationInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationInfoPayload>
          }
          aggregate: {
            args: Prisma.OrganizationInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganizationInfo>
          }
          groupBy: {
            args: Prisma.organizationInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.organizationInfoCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationInfoCountAggregateOutputType> | number
          }
        }
      }
      Toy: {
        payload: Prisma.$ToyPayload<ExtArgs>
        fields: Prisma.ToyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ToyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ToyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToyPayload>
          }
          findFirst: {
            args: Prisma.ToyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ToyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToyPayload>
          }
          findMany: {
            args: Prisma.ToyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToyPayload>[]
          }
          create: {
            args: Prisma.ToyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToyPayload>
          }
          createMany: {
            args: Prisma.ToyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ToyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToyPayload>[]
          }
          delete: {
            args: Prisma.ToyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToyPayload>
          }
          update: {
            args: Prisma.ToyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToyPayload>
          }
          deleteMany: {
            args: Prisma.ToyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ToyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ToyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToyPayload>[]
          }
          upsert: {
            args: Prisma.ToyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToyPayload>
          }
          aggregate: {
            args: Prisma.ToyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateToy>
          }
          groupBy: {
            args: Prisma.ToyGroupByArgs<ExtArgs>
            result: $Utils.Optional<ToyGroupByOutputType>[]
          }
          count: {
            args: Prisma.ToyCountArgs<ExtArgs>
            result: $Utils.Optional<ToyCountAggregateOutputType> | number
          }
        }
      }
      ToyPicture: {
        payload: Prisma.$ToyPicturePayload<ExtArgs>
        fields: Prisma.ToyPictureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ToyPictureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToyPicturePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ToyPictureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToyPicturePayload>
          }
          findFirst: {
            args: Prisma.ToyPictureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToyPicturePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ToyPictureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToyPicturePayload>
          }
          findMany: {
            args: Prisma.ToyPictureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToyPicturePayload>[]
          }
          create: {
            args: Prisma.ToyPictureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToyPicturePayload>
          }
          createMany: {
            args: Prisma.ToyPictureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ToyPictureCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToyPicturePayload>[]
          }
          delete: {
            args: Prisma.ToyPictureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToyPicturePayload>
          }
          update: {
            args: Prisma.ToyPictureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToyPicturePayload>
          }
          deleteMany: {
            args: Prisma.ToyPictureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ToyPictureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ToyPictureUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToyPicturePayload>[]
          }
          upsert: {
            args: Prisma.ToyPictureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToyPicturePayload>
          }
          aggregate: {
            args: Prisma.ToyPictureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateToyPicture>
          }
          groupBy: {
            args: Prisma.ToyPictureGroupByArgs<ExtArgs>
            result: $Utils.Optional<ToyPictureGroupByOutputType>[]
          }
          count: {
            args: Prisma.ToyPictureCountArgs<ExtArgs>
            result: $Utils.Optional<ToyPictureCountAggregateOutputType> | number
          }
        }
      }
      HistoryEntry: {
        payload: Prisma.$HistoryEntryPayload<ExtArgs>
        fields: Prisma.HistoryEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HistoryEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HistoryEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryEntryPayload>
          }
          findFirst: {
            args: Prisma.HistoryEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HistoryEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryEntryPayload>
          }
          findMany: {
            args: Prisma.HistoryEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryEntryPayload>[]
          }
          create: {
            args: Prisma.HistoryEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryEntryPayload>
          }
          createMany: {
            args: Prisma.HistoryEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HistoryEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryEntryPayload>[]
          }
          delete: {
            args: Prisma.HistoryEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryEntryPayload>
          }
          update: {
            args: Prisma.HistoryEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryEntryPayload>
          }
          deleteMany: {
            args: Prisma.HistoryEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HistoryEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HistoryEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryEntryPayload>[]
          }
          upsert: {
            args: Prisma.HistoryEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryEntryPayload>
          }
          aggregate: {
            args: Prisma.HistoryEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistoryEntry>
          }
          groupBy: {
            args: Prisma.HistoryEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<HistoryEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.HistoryEntryCountArgs<ExtArgs>
            result: $Utils.Optional<HistoryEntryCountAggregateOutputType> | number
          }
        }
      }
      Rate: {
        payload: Prisma.$RatePayload<ExtArgs>
        fields: Prisma.RateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatePayload>
          }
          findFirst: {
            args: Prisma.RateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatePayload>
          }
          findMany: {
            args: Prisma.RateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatePayload>[]
          }
          create: {
            args: Prisma.RateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatePayload>
          }
          createMany: {
            args: Prisma.RateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatePayload>[]
          }
          delete: {
            args: Prisma.RateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatePayload>
          }
          update: {
            args: Prisma.RateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatePayload>
          }
          deleteMany: {
            args: Prisma.RateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatePayload>[]
          }
          upsert: {
            args: Prisma.RateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatePayload>
          }
          aggregate: {
            args: Prisma.RateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRate>
          }
          groupBy: {
            args: Prisma.RateGroupByArgs<ExtArgs>
            result: $Utils.Optional<RateGroupByOutputType>[]
          }
          count: {
            args: Prisma.RateCountArgs<ExtArgs>
            result: $Utils.Optional<RateCountAggregateOutputType> | number
          }
        }
      }
      Chat: {
        payload: Prisma.$ChatPayload<ExtArgs>
        fields: Prisma.ChatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findFirst: {
            args: Prisma.ChatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findMany: {
            args: Prisma.ChatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          create: {
            args: Prisma.ChatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          createMany: {
            args: Prisma.ChatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          delete: {
            args: Prisma.ChatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          update: {
            args: Prisma.ChatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          deleteMany: {
            args: Prisma.ChatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          upsert: {
            args: Prisma.ChatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          aggregate: {
            args: Prisma.ChatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChat>
          }
          groupBy: {
            args: Prisma.ChatGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatCountArgs<ExtArgs>
            result: $Utils.Optional<ChatCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      Benefit: {
        payload: Prisma.$BenefitPayload<ExtArgs>
        fields: Prisma.BenefitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BenefitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BenefitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload>
          }
          findFirst: {
            args: Prisma.BenefitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BenefitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload>
          }
          findMany: {
            args: Prisma.BenefitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload>[]
          }
          create: {
            args: Prisma.BenefitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload>
          }
          createMany: {
            args: Prisma.BenefitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BenefitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload>[]
          }
          delete: {
            args: Prisma.BenefitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload>
          }
          update: {
            args: Prisma.BenefitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload>
          }
          deleteMany: {
            args: Prisma.BenefitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BenefitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BenefitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload>[]
          }
          upsert: {
            args: Prisma.BenefitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload>
          }
          aggregate: {
            args: Prisma.BenefitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBenefit>
          }
          groupBy: {
            args: Prisma.BenefitGroupByArgs<ExtArgs>
            result: $Utils.Optional<BenefitGroupByOutputType>[]
          }
          count: {
            args: Prisma.BenefitCountArgs<ExtArgs>
            result: $Utils.Optional<BenefitCountAggregateOutputType> | number
          }
        }
      }
      UserBenefit: {
        payload: Prisma.$UserBenefitPayload<ExtArgs>
        fields: Prisma.UserBenefitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserBenefitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBenefitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserBenefitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBenefitPayload>
          }
          findFirst: {
            args: Prisma.UserBenefitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBenefitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserBenefitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBenefitPayload>
          }
          findMany: {
            args: Prisma.UserBenefitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBenefitPayload>[]
          }
          create: {
            args: Prisma.UserBenefitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBenefitPayload>
          }
          createMany: {
            args: Prisma.UserBenefitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserBenefitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBenefitPayload>[]
          }
          delete: {
            args: Prisma.UserBenefitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBenefitPayload>
          }
          update: {
            args: Prisma.UserBenefitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBenefitPayload>
          }
          deleteMany: {
            args: Prisma.UserBenefitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserBenefitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserBenefitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBenefitPayload>[]
          }
          upsert: {
            args: Prisma.UserBenefitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBenefitPayload>
          }
          aggregate: {
            args: Prisma.UserBenefitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserBenefit>
          }
          groupBy: {
            args: Prisma.UserBenefitGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserBenefitGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserBenefitCountArgs<ExtArgs>
            result: $Utils.Optional<UserBenefitCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    organizationInfo?: organizationInfoOmit
    toy?: ToyOmit
    toyPicture?: ToyPictureOmit
    historyEntry?: HistoryEntryOmit
    rate?: RateOmit
    chat?: ChatOmit
    message?: MessageOmit
    benefit?: BenefitOmit
    userBenefit?: UserBenefitOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    toys: number
    history: number
    ratings: number
    chatsAsUser1: number
    chatsAsUser2: number
    messages: number
    userBenefits: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    toys?: boolean | UserCountOutputTypeCountToysArgs
    history?: boolean | UserCountOutputTypeCountHistoryArgs
    ratings?: boolean | UserCountOutputTypeCountRatingsArgs
    chatsAsUser1?: boolean | UserCountOutputTypeCountChatsAsUser1Args
    chatsAsUser2?: boolean | UserCountOutputTypeCountChatsAsUser2Args
    messages?: boolean | UserCountOutputTypeCountMessagesArgs
    userBenefits?: boolean | UserCountOutputTypeCountUserBenefitsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountToysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ToyWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoryEntryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRatingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RateWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatsAsUser1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatsAsUser2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserBenefitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserBenefitWhereInput
  }


  /**
   * Count Type ToyCountOutputType
   */

  export type ToyCountOutputType = {
    history: number
    ToyPictures: number
  }

  export type ToyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    history?: boolean | ToyCountOutputTypeCountHistoryArgs
    ToyPictures?: boolean | ToyCountOutputTypeCountToyPicturesArgs
  }

  // Custom InputTypes
  /**
   * ToyCountOutputType without action
   */
  export type ToyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToyCountOutputType
     */
    select?: ToyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ToyCountOutputType without action
   */
  export type ToyCountOutputTypeCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoryEntryWhereInput
  }

  /**
   * ToyCountOutputType without action
   */
  export type ToyCountOutputTypeCountToyPicturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ToyPictureWhereInput
  }


  /**
   * Count Type ChatCountOutputType
   */

  export type ChatCountOutputType = {
    messages: number
  }

  export type ChatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ChatCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatCountOutputType
     */
    select?: ChatCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * Count Type BenefitCountOutputType
   */

  export type BenefitCountOutputType = {
    userBenefits: number
  }

  export type BenefitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userBenefits?: boolean | BenefitCountOutputTypeCountUserBenefitsArgs
  }

  // Custom InputTypes
  /**
   * BenefitCountOutputType without action
   */
  export type BenefitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BenefitCountOutputType
     */
    select?: BenefitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BenefitCountOutputType without action
   */
  export type BenefitCountOutputTypeCountUserBenefitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserBenefitWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    addressNumber: number | null
  }

  export type UserSumAggregateOutputType = {
    addressNumber: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.Role | null
    parentalControl: boolean | null
    active: boolean | null
    cpf: string | null
    cnpj: string | null
    pix_key: string | null
    picture: string | null
    addressDistrict: string | null
    addressStreet: string | null
    addressNumber: number | null
    addressDetail: string | null
    addressCep: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.Role | null
    parentalControl: boolean | null
    active: boolean | null
    cpf: string | null
    cnpj: string | null
    pix_key: string | null
    picture: string | null
    addressDistrict: string | null
    addressStreet: string | null
    addressNumber: number | null
    addressDetail: string | null
    addressCep: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    email: number
    password: number
    name: number
    role: number
    parentalControl: number
    active: number
    cpf: number
    cnpj: number
    pix_key: number
    picture: number
    addressDistrict: number
    addressStreet: number
    addressNumber: number
    addressDetail: number
    addressCep: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    addressNumber?: true
  }

  export type UserSumAggregateInputType = {
    addressNumber?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    email?: true
    password?: true
    name?: true
    role?: true
    parentalControl?: true
    active?: true
    cpf?: true
    cnpj?: true
    pix_key?: true
    picture?: true
    addressDistrict?: true
    addressStreet?: true
    addressNumber?: true
    addressDetail?: true
    addressCep?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    email?: true
    password?: true
    name?: true
    role?: true
    parentalControl?: true
    active?: true
    cpf?: true
    cnpj?: true
    pix_key?: true
    picture?: true
    addressDistrict?: true
    addressStreet?: true
    addressNumber?: true
    addressDetail?: true
    addressCep?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    email?: true
    password?: true
    name?: true
    role?: true
    parentalControl?: true
    active?: true
    cpf?: true
    cnpj?: true
    pix_key?: true
    picture?: true
    addressDistrict?: true
    addressStreet?: true
    addressNumber?: true
    addressDetail?: true
    addressCep?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    createdAt: Date
    email: string
    password: string
    name: string
    role: $Enums.Role
    parentalControl: boolean
    active: boolean
    cpf: string | null
    cnpj: string | null
    pix_key: string | null
    picture: string | null
    addressDistrict: string
    addressStreet: string
    addressNumber: number
    addressDetail: string | null
    addressCep: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    parentalControl?: boolean
    active?: boolean
    cpf?: boolean
    cnpj?: boolean
    pix_key?: boolean
    picture?: boolean
    addressDistrict?: boolean
    addressStreet?: boolean
    addressNumber?: boolean
    addressDetail?: boolean
    addressCep?: boolean
    toys?: boolean | User$toysArgs<ExtArgs>
    history?: boolean | User$historyArgs<ExtArgs>
    ratings?: boolean | User$ratingsArgs<ExtArgs>
    organizationInfo?: boolean | User$organizationInfoArgs<ExtArgs>
    chatsAsUser1?: boolean | User$chatsAsUser1Args<ExtArgs>
    chatsAsUser2?: boolean | User$chatsAsUser2Args<ExtArgs>
    messages?: boolean | User$messagesArgs<ExtArgs>
    userBenefits?: boolean | User$userBenefitsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    parentalControl?: boolean
    active?: boolean
    cpf?: boolean
    cnpj?: boolean
    pix_key?: boolean
    picture?: boolean
    addressDistrict?: boolean
    addressStreet?: boolean
    addressNumber?: boolean
    addressDetail?: boolean
    addressCep?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    parentalControl?: boolean
    active?: boolean
    cpf?: boolean
    cnpj?: boolean
    pix_key?: boolean
    picture?: boolean
    addressDistrict?: boolean
    addressStreet?: boolean
    addressNumber?: boolean
    addressDetail?: boolean
    addressCep?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    parentalControl?: boolean
    active?: boolean
    cpf?: boolean
    cnpj?: boolean
    pix_key?: boolean
    picture?: boolean
    addressDistrict?: boolean
    addressStreet?: boolean
    addressNumber?: boolean
    addressDetail?: boolean
    addressCep?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "email" | "password" | "name" | "role" | "parentalControl" | "active" | "cpf" | "cnpj" | "pix_key" | "picture" | "addressDistrict" | "addressStreet" | "addressNumber" | "addressDetail" | "addressCep", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    toys?: boolean | User$toysArgs<ExtArgs>
    history?: boolean | User$historyArgs<ExtArgs>
    ratings?: boolean | User$ratingsArgs<ExtArgs>
    organizationInfo?: boolean | User$organizationInfoArgs<ExtArgs>
    chatsAsUser1?: boolean | User$chatsAsUser1Args<ExtArgs>
    chatsAsUser2?: boolean | User$chatsAsUser2Args<ExtArgs>
    messages?: boolean | User$messagesArgs<ExtArgs>
    userBenefits?: boolean | User$userBenefitsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      toys: Prisma.$ToyPayload<ExtArgs>[]
      history: Prisma.$HistoryEntryPayload<ExtArgs>[]
      ratings: Prisma.$RatePayload<ExtArgs>[]
      organizationInfo: Prisma.$organizationInfoPayload<ExtArgs> | null
      chatsAsUser1: Prisma.$ChatPayload<ExtArgs>[]
      chatsAsUser2: Prisma.$ChatPayload<ExtArgs>[]
      messages: Prisma.$MessagePayload<ExtArgs>[]
      userBenefits: Prisma.$UserBenefitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      email: string
      password: string
      name: string
      role: $Enums.Role
      parentalControl: boolean
      active: boolean
      cpf: string | null
      cnpj: string | null
      pix_key: string | null
      picture: string | null
      addressDistrict: string
      addressStreet: string
      addressNumber: number
      addressDetail: string | null
      addressCep: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    toys<T extends User$toysArgs<ExtArgs> = {}>(args?: Subset<T, User$toysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    history<T extends User$historyArgs<ExtArgs> = {}>(args?: Subset<T, User$historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ratings<T extends User$ratingsArgs<ExtArgs> = {}>(args?: Subset<T, User$ratingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    organizationInfo<T extends User$organizationInfoArgs<ExtArgs> = {}>(args?: Subset<T, User$organizationInfoArgs<ExtArgs>>): Prisma__organizationInfoClient<$Result.GetResult<Prisma.$organizationInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    chatsAsUser1<T extends User$chatsAsUser1Args<ExtArgs> = {}>(args?: Subset<T, User$chatsAsUser1Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chatsAsUser2<T extends User$chatsAsUser2Args<ExtArgs> = {}>(args?: Subset<T, User$chatsAsUser2Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends User$messagesArgs<ExtArgs> = {}>(args?: Subset<T, User$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userBenefits<T extends User$userBenefitsArgs<ExtArgs> = {}>(args?: Subset<T, User$userBenefitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBenefitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly parentalControl: FieldRef<"User", 'Boolean'>
    readonly active: FieldRef<"User", 'Boolean'>
    readonly cpf: FieldRef<"User", 'String'>
    readonly cnpj: FieldRef<"User", 'String'>
    readonly pix_key: FieldRef<"User", 'String'>
    readonly picture: FieldRef<"User", 'String'>
    readonly addressDistrict: FieldRef<"User", 'String'>
    readonly addressStreet: FieldRef<"User", 'String'>
    readonly addressNumber: FieldRef<"User", 'Int'>
    readonly addressDetail: FieldRef<"User", 'String'>
    readonly addressCep: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.toys
   */
  export type User$toysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Toy
     */
    select?: ToySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Toy
     */
    omit?: ToyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToyInclude<ExtArgs> | null
    where?: ToyWhereInput
    orderBy?: ToyOrderByWithRelationInput | ToyOrderByWithRelationInput[]
    cursor?: ToyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ToyScalarFieldEnum | ToyScalarFieldEnum[]
  }

  /**
   * User.history
   */
  export type User$historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryEntry
     */
    select?: HistoryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryEntry
     */
    omit?: HistoryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryEntryInclude<ExtArgs> | null
    where?: HistoryEntryWhereInput
    orderBy?: HistoryEntryOrderByWithRelationInput | HistoryEntryOrderByWithRelationInput[]
    cursor?: HistoryEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoryEntryScalarFieldEnum | HistoryEntryScalarFieldEnum[]
  }

  /**
   * User.ratings
   */
  export type User$ratingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rate
     */
    select?: RateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rate
     */
    omit?: RateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RateInclude<ExtArgs> | null
    where?: RateWhereInput
    orderBy?: RateOrderByWithRelationInput | RateOrderByWithRelationInput[]
    cursor?: RateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RateScalarFieldEnum | RateScalarFieldEnum[]
  }

  /**
   * User.organizationInfo
   */
  export type User$organizationInfoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizationInfo
     */
    select?: organizationInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizationInfo
     */
    omit?: organizationInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationInfoInclude<ExtArgs> | null
    where?: organizationInfoWhereInput
  }

  /**
   * User.chatsAsUser1
   */
  export type User$chatsAsUser1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    cursor?: ChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * User.chatsAsUser2
   */
  export type User$chatsAsUser2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    cursor?: ChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * User.messages
   */
  export type User$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User.userBenefits
   */
  export type User$userBenefitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBenefit
     */
    select?: UserBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBenefit
     */
    omit?: UserBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBenefitInclude<ExtArgs> | null
    where?: UserBenefitWhereInput
    orderBy?: UserBenefitOrderByWithRelationInput | UserBenefitOrderByWithRelationInput[]
    cursor?: UserBenefitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserBenefitScalarFieldEnum | UserBenefitScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model organizationInfo
   */

  export type AggregateOrganizationInfo = {
    _count: OrganizationInfoCountAggregateOutputType | null
    _avg: OrganizationInfoAvgAggregateOutputType | null
    _sum: OrganizationInfoSumAggregateOutputType | null
    _min: OrganizationInfoMinAggregateOutputType | null
    _max: OrganizationInfoMaxAggregateOutputType | null
  }

  export type OrganizationInfoAvgAggregateOutputType = {
    phone_number1: number | null
    phone_number2: number | null
  }

  export type OrganizationInfoSumAggregateOutputType = {
    phone_number1: number | null
    phone_number2: number | null
  }

  export type OrganizationInfoMinAggregateOutputType = {
    id: string | null
    organizationId: string | null
    description: string | null
    phone_number1: number | null
    phone_number2: number | null
  }

  export type OrganizationInfoMaxAggregateOutputType = {
    id: string | null
    organizationId: string | null
    description: string | null
    phone_number1: number | null
    phone_number2: number | null
  }

  export type OrganizationInfoCountAggregateOutputType = {
    id: number
    organizationId: number
    description: number
    phone_number1: number
    phone_number2: number
    _all: number
  }


  export type OrganizationInfoAvgAggregateInputType = {
    phone_number1?: true
    phone_number2?: true
  }

  export type OrganizationInfoSumAggregateInputType = {
    phone_number1?: true
    phone_number2?: true
  }

  export type OrganizationInfoMinAggregateInputType = {
    id?: true
    organizationId?: true
    description?: true
    phone_number1?: true
    phone_number2?: true
  }

  export type OrganizationInfoMaxAggregateInputType = {
    id?: true
    organizationId?: true
    description?: true
    phone_number1?: true
    phone_number2?: true
  }

  export type OrganizationInfoCountAggregateInputType = {
    id?: true
    organizationId?: true
    description?: true
    phone_number1?: true
    phone_number2?: true
    _all?: true
  }

  export type OrganizationInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organizationInfo to aggregate.
     */
    where?: organizationInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizationInfos to fetch.
     */
    orderBy?: organizationInfoOrderByWithRelationInput | organizationInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: organizationInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizationInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizationInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned organizationInfos
    **/
    _count?: true | OrganizationInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrganizationInfoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrganizationInfoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationInfoMaxAggregateInputType
  }

  export type GetOrganizationInfoAggregateType<T extends OrganizationInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganizationInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganizationInfo[P]>
      : GetScalarType<T[P], AggregateOrganizationInfo[P]>
  }




  export type organizationInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: organizationInfoWhereInput
    orderBy?: organizationInfoOrderByWithAggregationInput | organizationInfoOrderByWithAggregationInput[]
    by: OrganizationInfoScalarFieldEnum[] | OrganizationInfoScalarFieldEnum
    having?: organizationInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationInfoCountAggregateInputType | true
    _avg?: OrganizationInfoAvgAggregateInputType
    _sum?: OrganizationInfoSumAggregateInputType
    _min?: OrganizationInfoMinAggregateInputType
    _max?: OrganizationInfoMaxAggregateInputType
  }

  export type OrganizationInfoGroupByOutputType = {
    id: string
    organizationId: string
    description: string
    phone_number1: number
    phone_number2: number | null
    _count: OrganizationInfoCountAggregateOutputType | null
    _avg: OrganizationInfoAvgAggregateOutputType | null
    _sum: OrganizationInfoSumAggregateOutputType | null
    _min: OrganizationInfoMinAggregateOutputType | null
    _max: OrganizationInfoMaxAggregateOutputType | null
  }

  type GetOrganizationInfoGroupByPayload<T extends organizationInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationInfoGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationInfoGroupByOutputType[P]>
        }
      >
    >


  export type organizationInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    description?: boolean
    phone_number1?: boolean
    phone_number2?: boolean
    organization?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organizationInfo"]>

  export type organizationInfoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    description?: boolean
    phone_number1?: boolean
    phone_number2?: boolean
    organization?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organizationInfo"]>

  export type organizationInfoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    description?: boolean
    phone_number1?: boolean
    phone_number2?: boolean
    organization?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organizationInfo"]>

  export type organizationInfoSelectScalar = {
    id?: boolean
    organizationId?: boolean
    description?: boolean
    phone_number1?: boolean
    phone_number2?: boolean
  }

  export type organizationInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organizationId" | "description" | "phone_number1" | "phone_number2", ExtArgs["result"]["organizationInfo"]>
  export type organizationInfoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type organizationInfoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type organizationInfoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $organizationInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "organizationInfo"
    objects: {
      organization: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      organizationId: string
      description: string
      phone_number1: number
      phone_number2: number | null
    }, ExtArgs["result"]["organizationInfo"]>
    composites: {}
  }

  type organizationInfoGetPayload<S extends boolean | null | undefined | organizationInfoDefaultArgs> = $Result.GetResult<Prisma.$organizationInfoPayload, S>

  type organizationInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<organizationInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationInfoCountAggregateInputType | true
    }

  export interface organizationInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['organizationInfo'], meta: { name: 'organizationInfo' } }
    /**
     * Find zero or one OrganizationInfo that matches the filter.
     * @param {organizationInfoFindUniqueArgs} args - Arguments to find a OrganizationInfo
     * @example
     * // Get one OrganizationInfo
     * const organizationInfo = await prisma.organizationInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends organizationInfoFindUniqueArgs>(args: SelectSubset<T, organizationInfoFindUniqueArgs<ExtArgs>>): Prisma__organizationInfoClient<$Result.GetResult<Prisma.$organizationInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrganizationInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {organizationInfoFindUniqueOrThrowArgs} args - Arguments to find a OrganizationInfo
     * @example
     * // Get one OrganizationInfo
     * const organizationInfo = await prisma.organizationInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends organizationInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, organizationInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__organizationInfoClient<$Result.GetResult<Prisma.$organizationInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrganizationInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationInfoFindFirstArgs} args - Arguments to find a OrganizationInfo
     * @example
     * // Get one OrganizationInfo
     * const organizationInfo = await prisma.organizationInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends organizationInfoFindFirstArgs>(args?: SelectSubset<T, organizationInfoFindFirstArgs<ExtArgs>>): Prisma__organizationInfoClient<$Result.GetResult<Prisma.$organizationInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrganizationInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationInfoFindFirstOrThrowArgs} args - Arguments to find a OrganizationInfo
     * @example
     * // Get one OrganizationInfo
     * const organizationInfo = await prisma.organizationInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends organizationInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, organizationInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__organizationInfoClient<$Result.GetResult<Prisma.$organizationInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrganizationInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrganizationInfos
     * const organizationInfos = await prisma.organizationInfo.findMany()
     * 
     * // Get first 10 OrganizationInfos
     * const organizationInfos = await prisma.organizationInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationInfoWithIdOnly = await prisma.organizationInfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends organizationInfoFindManyArgs>(args?: SelectSubset<T, organizationInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizationInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrganizationInfo.
     * @param {organizationInfoCreateArgs} args - Arguments to create a OrganizationInfo.
     * @example
     * // Create one OrganizationInfo
     * const OrganizationInfo = await prisma.organizationInfo.create({
     *   data: {
     *     // ... data to create a OrganizationInfo
     *   }
     * })
     * 
     */
    create<T extends organizationInfoCreateArgs>(args: SelectSubset<T, organizationInfoCreateArgs<ExtArgs>>): Prisma__organizationInfoClient<$Result.GetResult<Prisma.$organizationInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrganizationInfos.
     * @param {organizationInfoCreateManyArgs} args - Arguments to create many OrganizationInfos.
     * @example
     * // Create many OrganizationInfos
     * const organizationInfo = await prisma.organizationInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends organizationInfoCreateManyArgs>(args?: SelectSubset<T, organizationInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrganizationInfos and returns the data saved in the database.
     * @param {organizationInfoCreateManyAndReturnArgs} args - Arguments to create many OrganizationInfos.
     * @example
     * // Create many OrganizationInfos
     * const organizationInfo = await prisma.organizationInfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrganizationInfos and only return the `id`
     * const organizationInfoWithIdOnly = await prisma.organizationInfo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends organizationInfoCreateManyAndReturnArgs>(args?: SelectSubset<T, organizationInfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizationInfoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrganizationInfo.
     * @param {organizationInfoDeleteArgs} args - Arguments to delete one OrganizationInfo.
     * @example
     * // Delete one OrganizationInfo
     * const OrganizationInfo = await prisma.organizationInfo.delete({
     *   where: {
     *     // ... filter to delete one OrganizationInfo
     *   }
     * })
     * 
     */
    delete<T extends organizationInfoDeleteArgs>(args: SelectSubset<T, organizationInfoDeleteArgs<ExtArgs>>): Prisma__organizationInfoClient<$Result.GetResult<Prisma.$organizationInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrganizationInfo.
     * @param {organizationInfoUpdateArgs} args - Arguments to update one OrganizationInfo.
     * @example
     * // Update one OrganizationInfo
     * const organizationInfo = await prisma.organizationInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends organizationInfoUpdateArgs>(args: SelectSubset<T, organizationInfoUpdateArgs<ExtArgs>>): Prisma__organizationInfoClient<$Result.GetResult<Prisma.$organizationInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrganizationInfos.
     * @param {organizationInfoDeleteManyArgs} args - Arguments to filter OrganizationInfos to delete.
     * @example
     * // Delete a few OrganizationInfos
     * const { count } = await prisma.organizationInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends organizationInfoDeleteManyArgs>(args?: SelectSubset<T, organizationInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrganizationInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrganizationInfos
     * const organizationInfo = await prisma.organizationInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends organizationInfoUpdateManyArgs>(args: SelectSubset<T, organizationInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrganizationInfos and returns the data updated in the database.
     * @param {organizationInfoUpdateManyAndReturnArgs} args - Arguments to update many OrganizationInfos.
     * @example
     * // Update many OrganizationInfos
     * const organizationInfo = await prisma.organizationInfo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrganizationInfos and only return the `id`
     * const organizationInfoWithIdOnly = await prisma.organizationInfo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends organizationInfoUpdateManyAndReturnArgs>(args: SelectSubset<T, organizationInfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizationInfoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrganizationInfo.
     * @param {organizationInfoUpsertArgs} args - Arguments to update or create a OrganizationInfo.
     * @example
     * // Update or create a OrganizationInfo
     * const organizationInfo = await prisma.organizationInfo.upsert({
     *   create: {
     *     // ... data to create a OrganizationInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrganizationInfo we want to update
     *   }
     * })
     */
    upsert<T extends organizationInfoUpsertArgs>(args: SelectSubset<T, organizationInfoUpsertArgs<ExtArgs>>): Prisma__organizationInfoClient<$Result.GetResult<Prisma.$organizationInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrganizationInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationInfoCountArgs} args - Arguments to filter OrganizationInfos to count.
     * @example
     * // Count the number of OrganizationInfos
     * const count = await prisma.organizationInfo.count({
     *   where: {
     *     // ... the filter for the OrganizationInfos we want to count
     *   }
     * })
    **/
    count<T extends organizationInfoCountArgs>(
      args?: Subset<T, organizationInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrganizationInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganizationInfoAggregateArgs>(args: Subset<T, OrganizationInfoAggregateArgs>): Prisma.PrismaPromise<GetOrganizationInfoAggregateType<T>>

    /**
     * Group by OrganizationInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationInfoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends organizationInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: organizationInfoGroupByArgs['orderBy'] }
        : { orderBy?: organizationInfoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, organizationInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the organizationInfo model
   */
  readonly fields: organizationInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for organizationInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__organizationInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the organizationInfo model
   */
  interface organizationInfoFieldRefs {
    readonly id: FieldRef<"organizationInfo", 'String'>
    readonly organizationId: FieldRef<"organizationInfo", 'String'>
    readonly description: FieldRef<"organizationInfo", 'String'>
    readonly phone_number1: FieldRef<"organizationInfo", 'Int'>
    readonly phone_number2: FieldRef<"organizationInfo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * organizationInfo findUnique
   */
  export type organizationInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizationInfo
     */
    select?: organizationInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizationInfo
     */
    omit?: organizationInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationInfoInclude<ExtArgs> | null
    /**
     * Filter, which organizationInfo to fetch.
     */
    where: organizationInfoWhereUniqueInput
  }

  /**
   * organizationInfo findUniqueOrThrow
   */
  export type organizationInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizationInfo
     */
    select?: organizationInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizationInfo
     */
    omit?: organizationInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationInfoInclude<ExtArgs> | null
    /**
     * Filter, which organizationInfo to fetch.
     */
    where: organizationInfoWhereUniqueInput
  }

  /**
   * organizationInfo findFirst
   */
  export type organizationInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizationInfo
     */
    select?: organizationInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizationInfo
     */
    omit?: organizationInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationInfoInclude<ExtArgs> | null
    /**
     * Filter, which organizationInfo to fetch.
     */
    where?: organizationInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizationInfos to fetch.
     */
    orderBy?: organizationInfoOrderByWithRelationInput | organizationInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for organizationInfos.
     */
    cursor?: organizationInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizationInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizationInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of organizationInfos.
     */
    distinct?: OrganizationInfoScalarFieldEnum | OrganizationInfoScalarFieldEnum[]
  }

  /**
   * organizationInfo findFirstOrThrow
   */
  export type organizationInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizationInfo
     */
    select?: organizationInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizationInfo
     */
    omit?: organizationInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationInfoInclude<ExtArgs> | null
    /**
     * Filter, which organizationInfo to fetch.
     */
    where?: organizationInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizationInfos to fetch.
     */
    orderBy?: organizationInfoOrderByWithRelationInput | organizationInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for organizationInfos.
     */
    cursor?: organizationInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizationInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizationInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of organizationInfos.
     */
    distinct?: OrganizationInfoScalarFieldEnum | OrganizationInfoScalarFieldEnum[]
  }

  /**
   * organizationInfo findMany
   */
  export type organizationInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizationInfo
     */
    select?: organizationInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizationInfo
     */
    omit?: organizationInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationInfoInclude<ExtArgs> | null
    /**
     * Filter, which organizationInfos to fetch.
     */
    where?: organizationInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizationInfos to fetch.
     */
    orderBy?: organizationInfoOrderByWithRelationInput | organizationInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing organizationInfos.
     */
    cursor?: organizationInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizationInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizationInfos.
     */
    skip?: number
    distinct?: OrganizationInfoScalarFieldEnum | OrganizationInfoScalarFieldEnum[]
  }

  /**
   * organizationInfo create
   */
  export type organizationInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizationInfo
     */
    select?: organizationInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizationInfo
     */
    omit?: organizationInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationInfoInclude<ExtArgs> | null
    /**
     * The data needed to create a organizationInfo.
     */
    data: XOR<organizationInfoCreateInput, organizationInfoUncheckedCreateInput>
  }

  /**
   * organizationInfo createMany
   */
  export type organizationInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many organizationInfos.
     */
    data: organizationInfoCreateManyInput | organizationInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * organizationInfo createManyAndReturn
   */
  export type organizationInfoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizationInfo
     */
    select?: organizationInfoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the organizationInfo
     */
    omit?: organizationInfoOmit<ExtArgs> | null
    /**
     * The data used to create many organizationInfos.
     */
    data: organizationInfoCreateManyInput | organizationInfoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationInfoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * organizationInfo update
   */
  export type organizationInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizationInfo
     */
    select?: organizationInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizationInfo
     */
    omit?: organizationInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationInfoInclude<ExtArgs> | null
    /**
     * The data needed to update a organizationInfo.
     */
    data: XOR<organizationInfoUpdateInput, organizationInfoUncheckedUpdateInput>
    /**
     * Choose, which organizationInfo to update.
     */
    where: organizationInfoWhereUniqueInput
  }

  /**
   * organizationInfo updateMany
   */
  export type organizationInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update organizationInfos.
     */
    data: XOR<organizationInfoUpdateManyMutationInput, organizationInfoUncheckedUpdateManyInput>
    /**
     * Filter which organizationInfos to update
     */
    where?: organizationInfoWhereInput
    /**
     * Limit how many organizationInfos to update.
     */
    limit?: number
  }

  /**
   * organizationInfo updateManyAndReturn
   */
  export type organizationInfoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizationInfo
     */
    select?: organizationInfoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the organizationInfo
     */
    omit?: organizationInfoOmit<ExtArgs> | null
    /**
     * The data used to update organizationInfos.
     */
    data: XOR<organizationInfoUpdateManyMutationInput, organizationInfoUncheckedUpdateManyInput>
    /**
     * Filter which organizationInfos to update
     */
    where?: organizationInfoWhereInput
    /**
     * Limit how many organizationInfos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationInfoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * organizationInfo upsert
   */
  export type organizationInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizationInfo
     */
    select?: organizationInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizationInfo
     */
    omit?: organizationInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationInfoInclude<ExtArgs> | null
    /**
     * The filter to search for the organizationInfo to update in case it exists.
     */
    where: organizationInfoWhereUniqueInput
    /**
     * In case the organizationInfo found by the `where` argument doesn't exist, create a new organizationInfo with this data.
     */
    create: XOR<organizationInfoCreateInput, organizationInfoUncheckedCreateInput>
    /**
     * In case the organizationInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<organizationInfoUpdateInput, organizationInfoUncheckedUpdateInput>
  }

  /**
   * organizationInfo delete
   */
  export type organizationInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizationInfo
     */
    select?: organizationInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizationInfo
     */
    omit?: organizationInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationInfoInclude<ExtArgs> | null
    /**
     * Filter which organizationInfo to delete.
     */
    where: organizationInfoWhereUniqueInput
  }

  /**
   * organizationInfo deleteMany
   */
  export type organizationInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organizationInfos to delete
     */
    where?: organizationInfoWhereInput
    /**
     * Limit how many organizationInfos to delete.
     */
    limit?: number
  }

  /**
   * organizationInfo without action
   */
  export type organizationInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizationInfo
     */
    select?: organizationInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizationInfo
     */
    omit?: organizationInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationInfoInclude<ExtArgs> | null
  }


  /**
   * Model Toy
   */

  export type AggregateToy = {
    _count: ToyCountAggregateOutputType | null
    _avg: ToyAvgAggregateOutputType | null
    _sum: ToySumAggregateOutputType | null
    _min: ToyMinAggregateOutputType | null
    _max: ToyMaxAggregateOutputType | null
  }

  export type ToyAvgAggregateOutputType = {
    price: number | null
    usageTime: number | null
    preservation: number | null
  }

  export type ToySumAggregateOutputType = {
    price: number | null
    usageTime: number | null
    preservation: number | null
  }

  export type ToyMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    name: string | null
    description: string | null
    ownerId: string | null
    price: number | null
    isNew: boolean | null
    canTrade: boolean | null
    canLend: boolean | null
    usageTime: number | null
    preservation: number | null
    ageGroup: $Enums.AgeRange | null
  }

  export type ToyMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    name: string | null
    description: string | null
    ownerId: string | null
    price: number | null
    isNew: boolean | null
    canTrade: boolean | null
    canLend: boolean | null
    usageTime: number | null
    preservation: number | null
    ageGroup: $Enums.AgeRange | null
  }

  export type ToyCountAggregateOutputType = {
    id: number
    createdAt: number
    name: number
    description: number
    ownerId: number
    price: number
    isNew: number
    canTrade: number
    canLend: number
    usageTime: number
    preservation: number
    type: number
    ageGroup: number
    _all: number
  }


  export type ToyAvgAggregateInputType = {
    price?: true
    usageTime?: true
    preservation?: true
  }

  export type ToySumAggregateInputType = {
    price?: true
    usageTime?: true
    preservation?: true
  }

  export type ToyMinAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    description?: true
    ownerId?: true
    price?: true
    isNew?: true
    canTrade?: true
    canLend?: true
    usageTime?: true
    preservation?: true
    ageGroup?: true
  }

  export type ToyMaxAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    description?: true
    ownerId?: true
    price?: true
    isNew?: true
    canTrade?: true
    canLend?: true
    usageTime?: true
    preservation?: true
    ageGroup?: true
  }

  export type ToyCountAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    description?: true
    ownerId?: true
    price?: true
    isNew?: true
    canTrade?: true
    canLend?: true
    usageTime?: true
    preservation?: true
    type?: true
    ageGroup?: true
    _all?: true
  }

  export type ToyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Toy to aggregate.
     */
    where?: ToyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Toys to fetch.
     */
    orderBy?: ToyOrderByWithRelationInput | ToyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ToyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Toys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Toys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Toys
    **/
    _count?: true | ToyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ToyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ToySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ToyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ToyMaxAggregateInputType
  }

  export type GetToyAggregateType<T extends ToyAggregateArgs> = {
        [P in keyof T & keyof AggregateToy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToy[P]>
      : GetScalarType<T[P], AggregateToy[P]>
  }




  export type ToyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ToyWhereInput
    orderBy?: ToyOrderByWithAggregationInput | ToyOrderByWithAggregationInput[]
    by: ToyScalarFieldEnum[] | ToyScalarFieldEnum
    having?: ToyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ToyCountAggregateInputType | true
    _avg?: ToyAvgAggregateInputType
    _sum?: ToySumAggregateInputType
    _min?: ToyMinAggregateInputType
    _max?: ToyMaxAggregateInputType
  }

  export type ToyGroupByOutputType = {
    id: string
    createdAt: Date
    name: string
    description: string
    ownerId: string
    price: number
    isNew: boolean
    canTrade: boolean
    canLend: boolean
    usageTime: number
    preservation: number
    type: $Enums.ToyType[]
    ageGroup: $Enums.AgeRange
    _count: ToyCountAggregateOutputType | null
    _avg: ToyAvgAggregateOutputType | null
    _sum: ToySumAggregateOutputType | null
    _min: ToyMinAggregateOutputType | null
    _max: ToyMaxAggregateOutputType | null
  }

  type GetToyGroupByPayload<T extends ToyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ToyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ToyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ToyGroupByOutputType[P]>
            : GetScalarType<T[P], ToyGroupByOutputType[P]>
        }
      >
    >


  export type ToySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    name?: boolean
    description?: boolean
    ownerId?: boolean
    price?: boolean
    isNew?: boolean
    canTrade?: boolean
    canLend?: boolean
    usageTime?: boolean
    preservation?: boolean
    type?: boolean
    ageGroup?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    history?: boolean | Toy$historyArgs<ExtArgs>
    ToyPictures?: boolean | Toy$ToyPicturesArgs<ExtArgs>
    _count?: boolean | ToyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["toy"]>

  export type ToySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    name?: boolean
    description?: boolean
    ownerId?: boolean
    price?: boolean
    isNew?: boolean
    canTrade?: boolean
    canLend?: boolean
    usageTime?: boolean
    preservation?: boolean
    type?: boolean
    ageGroup?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["toy"]>

  export type ToySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    name?: boolean
    description?: boolean
    ownerId?: boolean
    price?: boolean
    isNew?: boolean
    canTrade?: boolean
    canLend?: boolean
    usageTime?: boolean
    preservation?: boolean
    type?: boolean
    ageGroup?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["toy"]>

  export type ToySelectScalar = {
    id?: boolean
    createdAt?: boolean
    name?: boolean
    description?: boolean
    ownerId?: boolean
    price?: boolean
    isNew?: boolean
    canTrade?: boolean
    canLend?: boolean
    usageTime?: boolean
    preservation?: boolean
    type?: boolean
    ageGroup?: boolean
  }

  export type ToyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "name" | "description" | "ownerId" | "price" | "isNew" | "canTrade" | "canLend" | "usageTime" | "preservation" | "type" | "ageGroup", ExtArgs["result"]["toy"]>
  export type ToyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    history?: boolean | Toy$historyArgs<ExtArgs>
    ToyPictures?: boolean | Toy$ToyPicturesArgs<ExtArgs>
    _count?: boolean | ToyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ToyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ToyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ToyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Toy"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      history: Prisma.$HistoryEntryPayload<ExtArgs>[]
      ToyPictures: Prisma.$ToyPicturePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      name: string
      description: string
      ownerId: string
      price: number
      isNew: boolean
      canTrade: boolean
      canLend: boolean
      usageTime: number
      preservation: number
      type: $Enums.ToyType[]
      ageGroup: $Enums.AgeRange
    }, ExtArgs["result"]["toy"]>
    composites: {}
  }

  type ToyGetPayload<S extends boolean | null | undefined | ToyDefaultArgs> = $Result.GetResult<Prisma.$ToyPayload, S>

  type ToyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ToyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ToyCountAggregateInputType | true
    }

  export interface ToyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Toy'], meta: { name: 'Toy' } }
    /**
     * Find zero or one Toy that matches the filter.
     * @param {ToyFindUniqueArgs} args - Arguments to find a Toy
     * @example
     * // Get one Toy
     * const toy = await prisma.toy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ToyFindUniqueArgs>(args: SelectSubset<T, ToyFindUniqueArgs<ExtArgs>>): Prisma__ToyClient<$Result.GetResult<Prisma.$ToyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Toy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ToyFindUniqueOrThrowArgs} args - Arguments to find a Toy
     * @example
     * // Get one Toy
     * const toy = await prisma.toy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ToyFindUniqueOrThrowArgs>(args: SelectSubset<T, ToyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ToyClient<$Result.GetResult<Prisma.$ToyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Toy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToyFindFirstArgs} args - Arguments to find a Toy
     * @example
     * // Get one Toy
     * const toy = await prisma.toy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ToyFindFirstArgs>(args?: SelectSubset<T, ToyFindFirstArgs<ExtArgs>>): Prisma__ToyClient<$Result.GetResult<Prisma.$ToyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Toy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToyFindFirstOrThrowArgs} args - Arguments to find a Toy
     * @example
     * // Get one Toy
     * const toy = await prisma.toy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ToyFindFirstOrThrowArgs>(args?: SelectSubset<T, ToyFindFirstOrThrowArgs<ExtArgs>>): Prisma__ToyClient<$Result.GetResult<Prisma.$ToyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Toys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Toys
     * const toys = await prisma.toy.findMany()
     * 
     * // Get first 10 Toys
     * const toys = await prisma.toy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const toyWithIdOnly = await prisma.toy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ToyFindManyArgs>(args?: SelectSubset<T, ToyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Toy.
     * @param {ToyCreateArgs} args - Arguments to create a Toy.
     * @example
     * // Create one Toy
     * const Toy = await prisma.toy.create({
     *   data: {
     *     // ... data to create a Toy
     *   }
     * })
     * 
     */
    create<T extends ToyCreateArgs>(args: SelectSubset<T, ToyCreateArgs<ExtArgs>>): Prisma__ToyClient<$Result.GetResult<Prisma.$ToyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Toys.
     * @param {ToyCreateManyArgs} args - Arguments to create many Toys.
     * @example
     * // Create many Toys
     * const toy = await prisma.toy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ToyCreateManyArgs>(args?: SelectSubset<T, ToyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Toys and returns the data saved in the database.
     * @param {ToyCreateManyAndReturnArgs} args - Arguments to create many Toys.
     * @example
     * // Create many Toys
     * const toy = await prisma.toy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Toys and only return the `id`
     * const toyWithIdOnly = await prisma.toy.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ToyCreateManyAndReturnArgs>(args?: SelectSubset<T, ToyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Toy.
     * @param {ToyDeleteArgs} args - Arguments to delete one Toy.
     * @example
     * // Delete one Toy
     * const Toy = await prisma.toy.delete({
     *   where: {
     *     // ... filter to delete one Toy
     *   }
     * })
     * 
     */
    delete<T extends ToyDeleteArgs>(args: SelectSubset<T, ToyDeleteArgs<ExtArgs>>): Prisma__ToyClient<$Result.GetResult<Prisma.$ToyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Toy.
     * @param {ToyUpdateArgs} args - Arguments to update one Toy.
     * @example
     * // Update one Toy
     * const toy = await prisma.toy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ToyUpdateArgs>(args: SelectSubset<T, ToyUpdateArgs<ExtArgs>>): Prisma__ToyClient<$Result.GetResult<Prisma.$ToyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Toys.
     * @param {ToyDeleteManyArgs} args - Arguments to filter Toys to delete.
     * @example
     * // Delete a few Toys
     * const { count } = await prisma.toy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ToyDeleteManyArgs>(args?: SelectSubset<T, ToyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Toys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Toys
     * const toy = await prisma.toy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ToyUpdateManyArgs>(args: SelectSubset<T, ToyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Toys and returns the data updated in the database.
     * @param {ToyUpdateManyAndReturnArgs} args - Arguments to update many Toys.
     * @example
     * // Update many Toys
     * const toy = await prisma.toy.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Toys and only return the `id`
     * const toyWithIdOnly = await prisma.toy.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ToyUpdateManyAndReturnArgs>(args: SelectSubset<T, ToyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Toy.
     * @param {ToyUpsertArgs} args - Arguments to update or create a Toy.
     * @example
     * // Update or create a Toy
     * const toy = await prisma.toy.upsert({
     *   create: {
     *     // ... data to create a Toy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Toy we want to update
     *   }
     * })
     */
    upsert<T extends ToyUpsertArgs>(args: SelectSubset<T, ToyUpsertArgs<ExtArgs>>): Prisma__ToyClient<$Result.GetResult<Prisma.$ToyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Toys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToyCountArgs} args - Arguments to filter Toys to count.
     * @example
     * // Count the number of Toys
     * const count = await prisma.toy.count({
     *   where: {
     *     // ... the filter for the Toys we want to count
     *   }
     * })
    **/
    count<T extends ToyCountArgs>(
      args?: Subset<T, ToyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ToyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Toy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ToyAggregateArgs>(args: Subset<T, ToyAggregateArgs>): Prisma.PrismaPromise<GetToyAggregateType<T>>

    /**
     * Group by Toy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ToyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ToyGroupByArgs['orderBy'] }
        : { orderBy?: ToyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ToyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetToyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Toy model
   */
  readonly fields: ToyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Toy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ToyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    history<T extends Toy$historyArgs<ExtArgs> = {}>(args?: Subset<T, Toy$historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ToyPictures<T extends Toy$ToyPicturesArgs<ExtArgs> = {}>(args?: Subset<T, Toy$ToyPicturesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToyPicturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Toy model
   */
  interface ToyFieldRefs {
    readonly id: FieldRef<"Toy", 'String'>
    readonly createdAt: FieldRef<"Toy", 'DateTime'>
    readonly name: FieldRef<"Toy", 'String'>
    readonly description: FieldRef<"Toy", 'String'>
    readonly ownerId: FieldRef<"Toy", 'String'>
    readonly price: FieldRef<"Toy", 'Float'>
    readonly isNew: FieldRef<"Toy", 'Boolean'>
    readonly canTrade: FieldRef<"Toy", 'Boolean'>
    readonly canLend: FieldRef<"Toy", 'Boolean'>
    readonly usageTime: FieldRef<"Toy", 'Int'>
    readonly preservation: FieldRef<"Toy", 'Int'>
    readonly type: FieldRef<"Toy", 'ToyType[]'>
    readonly ageGroup: FieldRef<"Toy", 'AgeRange'>
  }
    

  // Custom InputTypes
  /**
   * Toy findUnique
   */
  export type ToyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Toy
     */
    select?: ToySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Toy
     */
    omit?: ToyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToyInclude<ExtArgs> | null
    /**
     * Filter, which Toy to fetch.
     */
    where: ToyWhereUniqueInput
  }

  /**
   * Toy findUniqueOrThrow
   */
  export type ToyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Toy
     */
    select?: ToySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Toy
     */
    omit?: ToyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToyInclude<ExtArgs> | null
    /**
     * Filter, which Toy to fetch.
     */
    where: ToyWhereUniqueInput
  }

  /**
   * Toy findFirst
   */
  export type ToyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Toy
     */
    select?: ToySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Toy
     */
    omit?: ToyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToyInclude<ExtArgs> | null
    /**
     * Filter, which Toy to fetch.
     */
    where?: ToyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Toys to fetch.
     */
    orderBy?: ToyOrderByWithRelationInput | ToyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Toys.
     */
    cursor?: ToyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Toys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Toys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Toys.
     */
    distinct?: ToyScalarFieldEnum | ToyScalarFieldEnum[]
  }

  /**
   * Toy findFirstOrThrow
   */
  export type ToyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Toy
     */
    select?: ToySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Toy
     */
    omit?: ToyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToyInclude<ExtArgs> | null
    /**
     * Filter, which Toy to fetch.
     */
    where?: ToyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Toys to fetch.
     */
    orderBy?: ToyOrderByWithRelationInput | ToyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Toys.
     */
    cursor?: ToyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Toys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Toys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Toys.
     */
    distinct?: ToyScalarFieldEnum | ToyScalarFieldEnum[]
  }

  /**
   * Toy findMany
   */
  export type ToyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Toy
     */
    select?: ToySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Toy
     */
    omit?: ToyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToyInclude<ExtArgs> | null
    /**
     * Filter, which Toys to fetch.
     */
    where?: ToyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Toys to fetch.
     */
    orderBy?: ToyOrderByWithRelationInput | ToyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Toys.
     */
    cursor?: ToyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Toys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Toys.
     */
    skip?: number
    distinct?: ToyScalarFieldEnum | ToyScalarFieldEnum[]
  }

  /**
   * Toy create
   */
  export type ToyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Toy
     */
    select?: ToySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Toy
     */
    omit?: ToyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToyInclude<ExtArgs> | null
    /**
     * The data needed to create a Toy.
     */
    data: XOR<ToyCreateInput, ToyUncheckedCreateInput>
  }

  /**
   * Toy createMany
   */
  export type ToyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Toys.
     */
    data: ToyCreateManyInput | ToyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Toy createManyAndReturn
   */
  export type ToyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Toy
     */
    select?: ToySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Toy
     */
    omit?: ToyOmit<ExtArgs> | null
    /**
     * The data used to create many Toys.
     */
    data: ToyCreateManyInput | ToyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Toy update
   */
  export type ToyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Toy
     */
    select?: ToySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Toy
     */
    omit?: ToyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToyInclude<ExtArgs> | null
    /**
     * The data needed to update a Toy.
     */
    data: XOR<ToyUpdateInput, ToyUncheckedUpdateInput>
    /**
     * Choose, which Toy to update.
     */
    where: ToyWhereUniqueInput
  }

  /**
   * Toy updateMany
   */
  export type ToyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Toys.
     */
    data: XOR<ToyUpdateManyMutationInput, ToyUncheckedUpdateManyInput>
    /**
     * Filter which Toys to update
     */
    where?: ToyWhereInput
    /**
     * Limit how many Toys to update.
     */
    limit?: number
  }

  /**
   * Toy updateManyAndReturn
   */
  export type ToyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Toy
     */
    select?: ToySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Toy
     */
    omit?: ToyOmit<ExtArgs> | null
    /**
     * The data used to update Toys.
     */
    data: XOR<ToyUpdateManyMutationInput, ToyUncheckedUpdateManyInput>
    /**
     * Filter which Toys to update
     */
    where?: ToyWhereInput
    /**
     * Limit how many Toys to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Toy upsert
   */
  export type ToyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Toy
     */
    select?: ToySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Toy
     */
    omit?: ToyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToyInclude<ExtArgs> | null
    /**
     * The filter to search for the Toy to update in case it exists.
     */
    where: ToyWhereUniqueInput
    /**
     * In case the Toy found by the `where` argument doesn't exist, create a new Toy with this data.
     */
    create: XOR<ToyCreateInput, ToyUncheckedCreateInput>
    /**
     * In case the Toy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ToyUpdateInput, ToyUncheckedUpdateInput>
  }

  /**
   * Toy delete
   */
  export type ToyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Toy
     */
    select?: ToySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Toy
     */
    omit?: ToyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToyInclude<ExtArgs> | null
    /**
     * Filter which Toy to delete.
     */
    where: ToyWhereUniqueInput
  }

  /**
   * Toy deleteMany
   */
  export type ToyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Toys to delete
     */
    where?: ToyWhereInput
    /**
     * Limit how many Toys to delete.
     */
    limit?: number
  }

  /**
   * Toy.history
   */
  export type Toy$historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryEntry
     */
    select?: HistoryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryEntry
     */
    omit?: HistoryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryEntryInclude<ExtArgs> | null
    where?: HistoryEntryWhereInput
    orderBy?: HistoryEntryOrderByWithRelationInput | HistoryEntryOrderByWithRelationInput[]
    cursor?: HistoryEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoryEntryScalarFieldEnum | HistoryEntryScalarFieldEnum[]
  }

  /**
   * Toy.ToyPictures
   */
  export type Toy$ToyPicturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToyPicture
     */
    select?: ToyPictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToyPicture
     */
    omit?: ToyPictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToyPictureInclude<ExtArgs> | null
    where?: ToyPictureWhereInput
    orderBy?: ToyPictureOrderByWithRelationInput | ToyPictureOrderByWithRelationInput[]
    cursor?: ToyPictureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ToyPictureScalarFieldEnum | ToyPictureScalarFieldEnum[]
  }

  /**
   * Toy without action
   */
  export type ToyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Toy
     */
    select?: ToySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Toy
     */
    omit?: ToyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToyInclude<ExtArgs> | null
  }


  /**
   * Model ToyPicture
   */

  export type AggregateToyPicture = {
    _count: ToyPictureCountAggregateOutputType | null
    _avg: ToyPictureAvgAggregateOutputType | null
    _sum: ToyPictureSumAggregateOutputType | null
    _min: ToyPictureMinAggregateOutputType | null
    _max: ToyPictureMaxAggregateOutputType | null
  }

  export type ToyPictureAvgAggregateOutputType = {
    order: number | null
  }

  export type ToyPictureSumAggregateOutputType = {
    order: number | null
  }

  export type ToyPictureMinAggregateOutputType = {
    id: string | null
    order: number | null
    toyId: string | null
    picture: string | null
  }

  export type ToyPictureMaxAggregateOutputType = {
    id: string | null
    order: number | null
    toyId: string | null
    picture: string | null
  }

  export type ToyPictureCountAggregateOutputType = {
    id: number
    order: number
    toyId: number
    picture: number
    _all: number
  }


  export type ToyPictureAvgAggregateInputType = {
    order?: true
  }

  export type ToyPictureSumAggregateInputType = {
    order?: true
  }

  export type ToyPictureMinAggregateInputType = {
    id?: true
    order?: true
    toyId?: true
    picture?: true
  }

  export type ToyPictureMaxAggregateInputType = {
    id?: true
    order?: true
    toyId?: true
    picture?: true
  }

  export type ToyPictureCountAggregateInputType = {
    id?: true
    order?: true
    toyId?: true
    picture?: true
    _all?: true
  }

  export type ToyPictureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ToyPicture to aggregate.
     */
    where?: ToyPictureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ToyPictures to fetch.
     */
    orderBy?: ToyPictureOrderByWithRelationInput | ToyPictureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ToyPictureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ToyPictures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ToyPictures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ToyPictures
    **/
    _count?: true | ToyPictureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ToyPictureAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ToyPictureSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ToyPictureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ToyPictureMaxAggregateInputType
  }

  export type GetToyPictureAggregateType<T extends ToyPictureAggregateArgs> = {
        [P in keyof T & keyof AggregateToyPicture]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToyPicture[P]>
      : GetScalarType<T[P], AggregateToyPicture[P]>
  }




  export type ToyPictureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ToyPictureWhereInput
    orderBy?: ToyPictureOrderByWithAggregationInput | ToyPictureOrderByWithAggregationInput[]
    by: ToyPictureScalarFieldEnum[] | ToyPictureScalarFieldEnum
    having?: ToyPictureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ToyPictureCountAggregateInputType | true
    _avg?: ToyPictureAvgAggregateInputType
    _sum?: ToyPictureSumAggregateInputType
    _min?: ToyPictureMinAggregateInputType
    _max?: ToyPictureMaxAggregateInputType
  }

  export type ToyPictureGroupByOutputType = {
    id: string
    order: number
    toyId: string
    picture: string
    _count: ToyPictureCountAggregateOutputType | null
    _avg: ToyPictureAvgAggregateOutputType | null
    _sum: ToyPictureSumAggregateOutputType | null
    _min: ToyPictureMinAggregateOutputType | null
    _max: ToyPictureMaxAggregateOutputType | null
  }

  type GetToyPictureGroupByPayload<T extends ToyPictureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ToyPictureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ToyPictureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ToyPictureGroupByOutputType[P]>
            : GetScalarType<T[P], ToyPictureGroupByOutputType[P]>
        }
      >
    >


  export type ToyPictureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order?: boolean
    toyId?: boolean
    picture?: boolean
    toy?: boolean | ToyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["toyPicture"]>

  export type ToyPictureSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order?: boolean
    toyId?: boolean
    picture?: boolean
    toy?: boolean | ToyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["toyPicture"]>

  export type ToyPictureSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order?: boolean
    toyId?: boolean
    picture?: boolean
    toy?: boolean | ToyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["toyPicture"]>

  export type ToyPictureSelectScalar = {
    id?: boolean
    order?: boolean
    toyId?: boolean
    picture?: boolean
  }

  export type ToyPictureOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "order" | "toyId" | "picture", ExtArgs["result"]["toyPicture"]>
  export type ToyPictureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    toy?: boolean | ToyDefaultArgs<ExtArgs>
  }
  export type ToyPictureIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    toy?: boolean | ToyDefaultArgs<ExtArgs>
  }
  export type ToyPictureIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    toy?: boolean | ToyDefaultArgs<ExtArgs>
  }

  export type $ToyPicturePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ToyPicture"
    objects: {
      toy: Prisma.$ToyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      order: number
      toyId: string
      picture: string
    }, ExtArgs["result"]["toyPicture"]>
    composites: {}
  }

  type ToyPictureGetPayload<S extends boolean | null | undefined | ToyPictureDefaultArgs> = $Result.GetResult<Prisma.$ToyPicturePayload, S>

  type ToyPictureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ToyPictureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ToyPictureCountAggregateInputType | true
    }

  export interface ToyPictureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ToyPicture'], meta: { name: 'ToyPicture' } }
    /**
     * Find zero or one ToyPicture that matches the filter.
     * @param {ToyPictureFindUniqueArgs} args - Arguments to find a ToyPicture
     * @example
     * // Get one ToyPicture
     * const toyPicture = await prisma.toyPicture.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ToyPictureFindUniqueArgs>(args: SelectSubset<T, ToyPictureFindUniqueArgs<ExtArgs>>): Prisma__ToyPictureClient<$Result.GetResult<Prisma.$ToyPicturePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ToyPicture that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ToyPictureFindUniqueOrThrowArgs} args - Arguments to find a ToyPicture
     * @example
     * // Get one ToyPicture
     * const toyPicture = await prisma.toyPicture.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ToyPictureFindUniqueOrThrowArgs>(args: SelectSubset<T, ToyPictureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ToyPictureClient<$Result.GetResult<Prisma.$ToyPicturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ToyPicture that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToyPictureFindFirstArgs} args - Arguments to find a ToyPicture
     * @example
     * // Get one ToyPicture
     * const toyPicture = await prisma.toyPicture.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ToyPictureFindFirstArgs>(args?: SelectSubset<T, ToyPictureFindFirstArgs<ExtArgs>>): Prisma__ToyPictureClient<$Result.GetResult<Prisma.$ToyPicturePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ToyPicture that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToyPictureFindFirstOrThrowArgs} args - Arguments to find a ToyPicture
     * @example
     * // Get one ToyPicture
     * const toyPicture = await prisma.toyPicture.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ToyPictureFindFirstOrThrowArgs>(args?: SelectSubset<T, ToyPictureFindFirstOrThrowArgs<ExtArgs>>): Prisma__ToyPictureClient<$Result.GetResult<Prisma.$ToyPicturePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ToyPictures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToyPictureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ToyPictures
     * const toyPictures = await prisma.toyPicture.findMany()
     * 
     * // Get first 10 ToyPictures
     * const toyPictures = await prisma.toyPicture.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const toyPictureWithIdOnly = await prisma.toyPicture.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ToyPictureFindManyArgs>(args?: SelectSubset<T, ToyPictureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToyPicturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ToyPicture.
     * @param {ToyPictureCreateArgs} args - Arguments to create a ToyPicture.
     * @example
     * // Create one ToyPicture
     * const ToyPicture = await prisma.toyPicture.create({
     *   data: {
     *     // ... data to create a ToyPicture
     *   }
     * })
     * 
     */
    create<T extends ToyPictureCreateArgs>(args: SelectSubset<T, ToyPictureCreateArgs<ExtArgs>>): Prisma__ToyPictureClient<$Result.GetResult<Prisma.$ToyPicturePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ToyPictures.
     * @param {ToyPictureCreateManyArgs} args - Arguments to create many ToyPictures.
     * @example
     * // Create many ToyPictures
     * const toyPicture = await prisma.toyPicture.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ToyPictureCreateManyArgs>(args?: SelectSubset<T, ToyPictureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ToyPictures and returns the data saved in the database.
     * @param {ToyPictureCreateManyAndReturnArgs} args - Arguments to create many ToyPictures.
     * @example
     * // Create many ToyPictures
     * const toyPicture = await prisma.toyPicture.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ToyPictures and only return the `id`
     * const toyPictureWithIdOnly = await prisma.toyPicture.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ToyPictureCreateManyAndReturnArgs>(args?: SelectSubset<T, ToyPictureCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToyPicturePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ToyPicture.
     * @param {ToyPictureDeleteArgs} args - Arguments to delete one ToyPicture.
     * @example
     * // Delete one ToyPicture
     * const ToyPicture = await prisma.toyPicture.delete({
     *   where: {
     *     // ... filter to delete one ToyPicture
     *   }
     * })
     * 
     */
    delete<T extends ToyPictureDeleteArgs>(args: SelectSubset<T, ToyPictureDeleteArgs<ExtArgs>>): Prisma__ToyPictureClient<$Result.GetResult<Prisma.$ToyPicturePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ToyPicture.
     * @param {ToyPictureUpdateArgs} args - Arguments to update one ToyPicture.
     * @example
     * // Update one ToyPicture
     * const toyPicture = await prisma.toyPicture.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ToyPictureUpdateArgs>(args: SelectSubset<T, ToyPictureUpdateArgs<ExtArgs>>): Prisma__ToyPictureClient<$Result.GetResult<Prisma.$ToyPicturePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ToyPictures.
     * @param {ToyPictureDeleteManyArgs} args - Arguments to filter ToyPictures to delete.
     * @example
     * // Delete a few ToyPictures
     * const { count } = await prisma.toyPicture.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ToyPictureDeleteManyArgs>(args?: SelectSubset<T, ToyPictureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ToyPictures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToyPictureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ToyPictures
     * const toyPicture = await prisma.toyPicture.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ToyPictureUpdateManyArgs>(args: SelectSubset<T, ToyPictureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ToyPictures and returns the data updated in the database.
     * @param {ToyPictureUpdateManyAndReturnArgs} args - Arguments to update many ToyPictures.
     * @example
     * // Update many ToyPictures
     * const toyPicture = await prisma.toyPicture.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ToyPictures and only return the `id`
     * const toyPictureWithIdOnly = await prisma.toyPicture.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ToyPictureUpdateManyAndReturnArgs>(args: SelectSubset<T, ToyPictureUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToyPicturePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ToyPicture.
     * @param {ToyPictureUpsertArgs} args - Arguments to update or create a ToyPicture.
     * @example
     * // Update or create a ToyPicture
     * const toyPicture = await prisma.toyPicture.upsert({
     *   create: {
     *     // ... data to create a ToyPicture
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ToyPicture we want to update
     *   }
     * })
     */
    upsert<T extends ToyPictureUpsertArgs>(args: SelectSubset<T, ToyPictureUpsertArgs<ExtArgs>>): Prisma__ToyPictureClient<$Result.GetResult<Prisma.$ToyPicturePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ToyPictures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToyPictureCountArgs} args - Arguments to filter ToyPictures to count.
     * @example
     * // Count the number of ToyPictures
     * const count = await prisma.toyPicture.count({
     *   where: {
     *     // ... the filter for the ToyPictures we want to count
     *   }
     * })
    **/
    count<T extends ToyPictureCountArgs>(
      args?: Subset<T, ToyPictureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ToyPictureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ToyPicture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToyPictureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ToyPictureAggregateArgs>(args: Subset<T, ToyPictureAggregateArgs>): Prisma.PrismaPromise<GetToyPictureAggregateType<T>>

    /**
     * Group by ToyPicture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToyPictureGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ToyPictureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ToyPictureGroupByArgs['orderBy'] }
        : { orderBy?: ToyPictureGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ToyPictureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetToyPictureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ToyPicture model
   */
  readonly fields: ToyPictureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ToyPicture.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ToyPictureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    toy<T extends ToyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ToyDefaultArgs<ExtArgs>>): Prisma__ToyClient<$Result.GetResult<Prisma.$ToyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ToyPicture model
   */
  interface ToyPictureFieldRefs {
    readonly id: FieldRef<"ToyPicture", 'String'>
    readonly order: FieldRef<"ToyPicture", 'Int'>
    readonly toyId: FieldRef<"ToyPicture", 'String'>
    readonly picture: FieldRef<"ToyPicture", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ToyPicture findUnique
   */
  export type ToyPictureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToyPicture
     */
    select?: ToyPictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToyPicture
     */
    omit?: ToyPictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToyPictureInclude<ExtArgs> | null
    /**
     * Filter, which ToyPicture to fetch.
     */
    where: ToyPictureWhereUniqueInput
  }

  /**
   * ToyPicture findUniqueOrThrow
   */
  export type ToyPictureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToyPicture
     */
    select?: ToyPictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToyPicture
     */
    omit?: ToyPictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToyPictureInclude<ExtArgs> | null
    /**
     * Filter, which ToyPicture to fetch.
     */
    where: ToyPictureWhereUniqueInput
  }

  /**
   * ToyPicture findFirst
   */
  export type ToyPictureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToyPicture
     */
    select?: ToyPictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToyPicture
     */
    omit?: ToyPictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToyPictureInclude<ExtArgs> | null
    /**
     * Filter, which ToyPicture to fetch.
     */
    where?: ToyPictureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ToyPictures to fetch.
     */
    orderBy?: ToyPictureOrderByWithRelationInput | ToyPictureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ToyPictures.
     */
    cursor?: ToyPictureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ToyPictures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ToyPictures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ToyPictures.
     */
    distinct?: ToyPictureScalarFieldEnum | ToyPictureScalarFieldEnum[]
  }

  /**
   * ToyPicture findFirstOrThrow
   */
  export type ToyPictureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToyPicture
     */
    select?: ToyPictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToyPicture
     */
    omit?: ToyPictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToyPictureInclude<ExtArgs> | null
    /**
     * Filter, which ToyPicture to fetch.
     */
    where?: ToyPictureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ToyPictures to fetch.
     */
    orderBy?: ToyPictureOrderByWithRelationInput | ToyPictureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ToyPictures.
     */
    cursor?: ToyPictureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ToyPictures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ToyPictures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ToyPictures.
     */
    distinct?: ToyPictureScalarFieldEnum | ToyPictureScalarFieldEnum[]
  }

  /**
   * ToyPicture findMany
   */
  export type ToyPictureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToyPicture
     */
    select?: ToyPictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToyPicture
     */
    omit?: ToyPictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToyPictureInclude<ExtArgs> | null
    /**
     * Filter, which ToyPictures to fetch.
     */
    where?: ToyPictureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ToyPictures to fetch.
     */
    orderBy?: ToyPictureOrderByWithRelationInput | ToyPictureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ToyPictures.
     */
    cursor?: ToyPictureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ToyPictures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ToyPictures.
     */
    skip?: number
    distinct?: ToyPictureScalarFieldEnum | ToyPictureScalarFieldEnum[]
  }

  /**
   * ToyPicture create
   */
  export type ToyPictureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToyPicture
     */
    select?: ToyPictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToyPicture
     */
    omit?: ToyPictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToyPictureInclude<ExtArgs> | null
    /**
     * The data needed to create a ToyPicture.
     */
    data: XOR<ToyPictureCreateInput, ToyPictureUncheckedCreateInput>
  }

  /**
   * ToyPicture createMany
   */
  export type ToyPictureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ToyPictures.
     */
    data: ToyPictureCreateManyInput | ToyPictureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ToyPicture createManyAndReturn
   */
  export type ToyPictureCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToyPicture
     */
    select?: ToyPictureSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ToyPicture
     */
    omit?: ToyPictureOmit<ExtArgs> | null
    /**
     * The data used to create many ToyPictures.
     */
    data: ToyPictureCreateManyInput | ToyPictureCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToyPictureIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ToyPicture update
   */
  export type ToyPictureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToyPicture
     */
    select?: ToyPictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToyPicture
     */
    omit?: ToyPictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToyPictureInclude<ExtArgs> | null
    /**
     * The data needed to update a ToyPicture.
     */
    data: XOR<ToyPictureUpdateInput, ToyPictureUncheckedUpdateInput>
    /**
     * Choose, which ToyPicture to update.
     */
    where: ToyPictureWhereUniqueInput
  }

  /**
   * ToyPicture updateMany
   */
  export type ToyPictureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ToyPictures.
     */
    data: XOR<ToyPictureUpdateManyMutationInput, ToyPictureUncheckedUpdateManyInput>
    /**
     * Filter which ToyPictures to update
     */
    where?: ToyPictureWhereInput
    /**
     * Limit how many ToyPictures to update.
     */
    limit?: number
  }

  /**
   * ToyPicture updateManyAndReturn
   */
  export type ToyPictureUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToyPicture
     */
    select?: ToyPictureSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ToyPicture
     */
    omit?: ToyPictureOmit<ExtArgs> | null
    /**
     * The data used to update ToyPictures.
     */
    data: XOR<ToyPictureUpdateManyMutationInput, ToyPictureUncheckedUpdateManyInput>
    /**
     * Filter which ToyPictures to update
     */
    where?: ToyPictureWhereInput
    /**
     * Limit how many ToyPictures to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToyPictureIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ToyPicture upsert
   */
  export type ToyPictureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToyPicture
     */
    select?: ToyPictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToyPicture
     */
    omit?: ToyPictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToyPictureInclude<ExtArgs> | null
    /**
     * The filter to search for the ToyPicture to update in case it exists.
     */
    where: ToyPictureWhereUniqueInput
    /**
     * In case the ToyPicture found by the `where` argument doesn't exist, create a new ToyPicture with this data.
     */
    create: XOR<ToyPictureCreateInput, ToyPictureUncheckedCreateInput>
    /**
     * In case the ToyPicture was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ToyPictureUpdateInput, ToyPictureUncheckedUpdateInput>
  }

  /**
   * ToyPicture delete
   */
  export type ToyPictureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToyPicture
     */
    select?: ToyPictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToyPicture
     */
    omit?: ToyPictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToyPictureInclude<ExtArgs> | null
    /**
     * Filter which ToyPicture to delete.
     */
    where: ToyPictureWhereUniqueInput
  }

  /**
   * ToyPicture deleteMany
   */
  export type ToyPictureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ToyPictures to delete
     */
    where?: ToyPictureWhereInput
    /**
     * Limit how many ToyPictures to delete.
     */
    limit?: number
  }

  /**
   * ToyPicture without action
   */
  export type ToyPictureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToyPicture
     */
    select?: ToyPictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToyPicture
     */
    omit?: ToyPictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToyPictureInclude<ExtArgs> | null
  }


  /**
   * Model HistoryEntry
   */

  export type AggregateHistoryEntry = {
    _count: HistoryEntryCountAggregateOutputType | null
    _min: HistoryEntryMinAggregateOutputType | null
    _max: HistoryEntryMaxAggregateOutputType | null
  }

  export type HistoryEntryMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    visible: boolean | null
    userId: string | null
    toyId: string | null
  }

  export type HistoryEntryMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    visible: boolean | null
    userId: string | null
    toyId: string | null
  }

  export type HistoryEntryCountAggregateOutputType = {
    id: number
    createdAt: number
    visible: number
    userId: number
    toyId: number
    _all: number
  }


  export type HistoryEntryMinAggregateInputType = {
    id?: true
    createdAt?: true
    visible?: true
    userId?: true
    toyId?: true
  }

  export type HistoryEntryMaxAggregateInputType = {
    id?: true
    createdAt?: true
    visible?: true
    userId?: true
    toyId?: true
  }

  export type HistoryEntryCountAggregateInputType = {
    id?: true
    createdAt?: true
    visible?: true
    userId?: true
    toyId?: true
    _all?: true
  }

  export type HistoryEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistoryEntry to aggregate.
     */
    where?: HistoryEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoryEntries to fetch.
     */
    orderBy?: HistoryEntryOrderByWithRelationInput | HistoryEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HistoryEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoryEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoryEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HistoryEntries
    **/
    _count?: true | HistoryEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HistoryEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HistoryEntryMaxAggregateInputType
  }

  export type GetHistoryEntryAggregateType<T extends HistoryEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateHistoryEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistoryEntry[P]>
      : GetScalarType<T[P], AggregateHistoryEntry[P]>
  }




  export type HistoryEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoryEntryWhereInput
    orderBy?: HistoryEntryOrderByWithAggregationInput | HistoryEntryOrderByWithAggregationInput[]
    by: HistoryEntryScalarFieldEnum[] | HistoryEntryScalarFieldEnum
    having?: HistoryEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HistoryEntryCountAggregateInputType | true
    _min?: HistoryEntryMinAggregateInputType
    _max?: HistoryEntryMaxAggregateInputType
  }

  export type HistoryEntryGroupByOutputType = {
    id: string
    createdAt: Date
    visible: boolean
    userId: string | null
    toyId: string
    _count: HistoryEntryCountAggregateOutputType | null
    _min: HistoryEntryMinAggregateOutputType | null
    _max: HistoryEntryMaxAggregateOutputType | null
  }

  type GetHistoryEntryGroupByPayload<T extends HistoryEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HistoryEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HistoryEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HistoryEntryGroupByOutputType[P]>
            : GetScalarType<T[P], HistoryEntryGroupByOutputType[P]>
        }
      >
    >


  export type HistoryEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    visible?: boolean
    userId?: boolean
    toyId?: boolean
    user?: boolean | HistoryEntry$userArgs<ExtArgs>
    toy?: boolean | ToyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historyEntry"]>

  export type HistoryEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    visible?: boolean
    userId?: boolean
    toyId?: boolean
    user?: boolean | HistoryEntry$userArgs<ExtArgs>
    toy?: boolean | ToyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historyEntry"]>

  export type HistoryEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    visible?: boolean
    userId?: boolean
    toyId?: boolean
    user?: boolean | HistoryEntry$userArgs<ExtArgs>
    toy?: boolean | ToyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historyEntry"]>

  export type HistoryEntrySelectScalar = {
    id?: boolean
    createdAt?: boolean
    visible?: boolean
    userId?: boolean
    toyId?: boolean
  }

  export type HistoryEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "visible" | "userId" | "toyId", ExtArgs["result"]["historyEntry"]>
  export type HistoryEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | HistoryEntry$userArgs<ExtArgs>
    toy?: boolean | ToyDefaultArgs<ExtArgs>
  }
  export type HistoryEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | HistoryEntry$userArgs<ExtArgs>
    toy?: boolean | ToyDefaultArgs<ExtArgs>
  }
  export type HistoryEntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | HistoryEntry$userArgs<ExtArgs>
    toy?: boolean | ToyDefaultArgs<ExtArgs>
  }

  export type $HistoryEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HistoryEntry"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      toy: Prisma.$ToyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      visible: boolean
      userId: string | null
      toyId: string
    }, ExtArgs["result"]["historyEntry"]>
    composites: {}
  }

  type HistoryEntryGetPayload<S extends boolean | null | undefined | HistoryEntryDefaultArgs> = $Result.GetResult<Prisma.$HistoryEntryPayload, S>

  type HistoryEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HistoryEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HistoryEntryCountAggregateInputType | true
    }

  export interface HistoryEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HistoryEntry'], meta: { name: 'HistoryEntry' } }
    /**
     * Find zero or one HistoryEntry that matches the filter.
     * @param {HistoryEntryFindUniqueArgs} args - Arguments to find a HistoryEntry
     * @example
     * // Get one HistoryEntry
     * const historyEntry = await prisma.historyEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HistoryEntryFindUniqueArgs>(args: SelectSubset<T, HistoryEntryFindUniqueArgs<ExtArgs>>): Prisma__HistoryEntryClient<$Result.GetResult<Prisma.$HistoryEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HistoryEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HistoryEntryFindUniqueOrThrowArgs} args - Arguments to find a HistoryEntry
     * @example
     * // Get one HistoryEntry
     * const historyEntry = await prisma.historyEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HistoryEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, HistoryEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HistoryEntryClient<$Result.GetResult<Prisma.$HistoryEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HistoryEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryEntryFindFirstArgs} args - Arguments to find a HistoryEntry
     * @example
     * // Get one HistoryEntry
     * const historyEntry = await prisma.historyEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HistoryEntryFindFirstArgs>(args?: SelectSubset<T, HistoryEntryFindFirstArgs<ExtArgs>>): Prisma__HistoryEntryClient<$Result.GetResult<Prisma.$HistoryEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HistoryEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryEntryFindFirstOrThrowArgs} args - Arguments to find a HistoryEntry
     * @example
     * // Get one HistoryEntry
     * const historyEntry = await prisma.historyEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HistoryEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, HistoryEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__HistoryEntryClient<$Result.GetResult<Prisma.$HistoryEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HistoryEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HistoryEntries
     * const historyEntries = await prisma.historyEntry.findMany()
     * 
     * // Get first 10 HistoryEntries
     * const historyEntries = await prisma.historyEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const historyEntryWithIdOnly = await prisma.historyEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HistoryEntryFindManyArgs>(args?: SelectSubset<T, HistoryEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HistoryEntry.
     * @param {HistoryEntryCreateArgs} args - Arguments to create a HistoryEntry.
     * @example
     * // Create one HistoryEntry
     * const HistoryEntry = await prisma.historyEntry.create({
     *   data: {
     *     // ... data to create a HistoryEntry
     *   }
     * })
     * 
     */
    create<T extends HistoryEntryCreateArgs>(args: SelectSubset<T, HistoryEntryCreateArgs<ExtArgs>>): Prisma__HistoryEntryClient<$Result.GetResult<Prisma.$HistoryEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HistoryEntries.
     * @param {HistoryEntryCreateManyArgs} args - Arguments to create many HistoryEntries.
     * @example
     * // Create many HistoryEntries
     * const historyEntry = await prisma.historyEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HistoryEntryCreateManyArgs>(args?: SelectSubset<T, HistoryEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HistoryEntries and returns the data saved in the database.
     * @param {HistoryEntryCreateManyAndReturnArgs} args - Arguments to create many HistoryEntries.
     * @example
     * // Create many HistoryEntries
     * const historyEntry = await prisma.historyEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HistoryEntries and only return the `id`
     * const historyEntryWithIdOnly = await prisma.historyEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HistoryEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, HistoryEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HistoryEntry.
     * @param {HistoryEntryDeleteArgs} args - Arguments to delete one HistoryEntry.
     * @example
     * // Delete one HistoryEntry
     * const HistoryEntry = await prisma.historyEntry.delete({
     *   where: {
     *     // ... filter to delete one HistoryEntry
     *   }
     * })
     * 
     */
    delete<T extends HistoryEntryDeleteArgs>(args: SelectSubset<T, HistoryEntryDeleteArgs<ExtArgs>>): Prisma__HistoryEntryClient<$Result.GetResult<Prisma.$HistoryEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HistoryEntry.
     * @param {HistoryEntryUpdateArgs} args - Arguments to update one HistoryEntry.
     * @example
     * // Update one HistoryEntry
     * const historyEntry = await prisma.historyEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HistoryEntryUpdateArgs>(args: SelectSubset<T, HistoryEntryUpdateArgs<ExtArgs>>): Prisma__HistoryEntryClient<$Result.GetResult<Prisma.$HistoryEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HistoryEntries.
     * @param {HistoryEntryDeleteManyArgs} args - Arguments to filter HistoryEntries to delete.
     * @example
     * // Delete a few HistoryEntries
     * const { count } = await prisma.historyEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HistoryEntryDeleteManyArgs>(args?: SelectSubset<T, HistoryEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HistoryEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HistoryEntries
     * const historyEntry = await prisma.historyEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HistoryEntryUpdateManyArgs>(args: SelectSubset<T, HistoryEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HistoryEntries and returns the data updated in the database.
     * @param {HistoryEntryUpdateManyAndReturnArgs} args - Arguments to update many HistoryEntries.
     * @example
     * // Update many HistoryEntries
     * const historyEntry = await prisma.historyEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HistoryEntries and only return the `id`
     * const historyEntryWithIdOnly = await prisma.historyEntry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HistoryEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, HistoryEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HistoryEntry.
     * @param {HistoryEntryUpsertArgs} args - Arguments to update or create a HistoryEntry.
     * @example
     * // Update or create a HistoryEntry
     * const historyEntry = await prisma.historyEntry.upsert({
     *   create: {
     *     // ... data to create a HistoryEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HistoryEntry we want to update
     *   }
     * })
     */
    upsert<T extends HistoryEntryUpsertArgs>(args: SelectSubset<T, HistoryEntryUpsertArgs<ExtArgs>>): Prisma__HistoryEntryClient<$Result.GetResult<Prisma.$HistoryEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HistoryEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryEntryCountArgs} args - Arguments to filter HistoryEntries to count.
     * @example
     * // Count the number of HistoryEntries
     * const count = await prisma.historyEntry.count({
     *   where: {
     *     // ... the filter for the HistoryEntries we want to count
     *   }
     * })
    **/
    count<T extends HistoryEntryCountArgs>(
      args?: Subset<T, HistoryEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HistoryEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HistoryEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HistoryEntryAggregateArgs>(args: Subset<T, HistoryEntryAggregateArgs>): Prisma.PrismaPromise<GetHistoryEntryAggregateType<T>>

    /**
     * Group by HistoryEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryEntryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HistoryEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HistoryEntryGroupByArgs['orderBy'] }
        : { orderBy?: HistoryEntryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HistoryEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistoryEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HistoryEntry model
   */
  readonly fields: HistoryEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HistoryEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HistoryEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends HistoryEntry$userArgs<ExtArgs> = {}>(args?: Subset<T, HistoryEntry$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    toy<T extends ToyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ToyDefaultArgs<ExtArgs>>): Prisma__ToyClient<$Result.GetResult<Prisma.$ToyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HistoryEntry model
   */
  interface HistoryEntryFieldRefs {
    readonly id: FieldRef<"HistoryEntry", 'String'>
    readonly createdAt: FieldRef<"HistoryEntry", 'DateTime'>
    readonly visible: FieldRef<"HistoryEntry", 'Boolean'>
    readonly userId: FieldRef<"HistoryEntry", 'String'>
    readonly toyId: FieldRef<"HistoryEntry", 'String'>
  }
    

  // Custom InputTypes
  /**
   * HistoryEntry findUnique
   */
  export type HistoryEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryEntry
     */
    select?: HistoryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryEntry
     */
    omit?: HistoryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryEntryInclude<ExtArgs> | null
    /**
     * Filter, which HistoryEntry to fetch.
     */
    where: HistoryEntryWhereUniqueInput
  }

  /**
   * HistoryEntry findUniqueOrThrow
   */
  export type HistoryEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryEntry
     */
    select?: HistoryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryEntry
     */
    omit?: HistoryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryEntryInclude<ExtArgs> | null
    /**
     * Filter, which HistoryEntry to fetch.
     */
    where: HistoryEntryWhereUniqueInput
  }

  /**
   * HistoryEntry findFirst
   */
  export type HistoryEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryEntry
     */
    select?: HistoryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryEntry
     */
    omit?: HistoryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryEntryInclude<ExtArgs> | null
    /**
     * Filter, which HistoryEntry to fetch.
     */
    where?: HistoryEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoryEntries to fetch.
     */
    orderBy?: HistoryEntryOrderByWithRelationInput | HistoryEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistoryEntries.
     */
    cursor?: HistoryEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoryEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoryEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistoryEntries.
     */
    distinct?: HistoryEntryScalarFieldEnum | HistoryEntryScalarFieldEnum[]
  }

  /**
   * HistoryEntry findFirstOrThrow
   */
  export type HistoryEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryEntry
     */
    select?: HistoryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryEntry
     */
    omit?: HistoryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryEntryInclude<ExtArgs> | null
    /**
     * Filter, which HistoryEntry to fetch.
     */
    where?: HistoryEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoryEntries to fetch.
     */
    orderBy?: HistoryEntryOrderByWithRelationInput | HistoryEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistoryEntries.
     */
    cursor?: HistoryEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoryEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoryEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistoryEntries.
     */
    distinct?: HistoryEntryScalarFieldEnum | HistoryEntryScalarFieldEnum[]
  }

  /**
   * HistoryEntry findMany
   */
  export type HistoryEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryEntry
     */
    select?: HistoryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryEntry
     */
    omit?: HistoryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryEntryInclude<ExtArgs> | null
    /**
     * Filter, which HistoryEntries to fetch.
     */
    where?: HistoryEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoryEntries to fetch.
     */
    orderBy?: HistoryEntryOrderByWithRelationInput | HistoryEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HistoryEntries.
     */
    cursor?: HistoryEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoryEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoryEntries.
     */
    skip?: number
    distinct?: HistoryEntryScalarFieldEnum | HistoryEntryScalarFieldEnum[]
  }

  /**
   * HistoryEntry create
   */
  export type HistoryEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryEntry
     */
    select?: HistoryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryEntry
     */
    omit?: HistoryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a HistoryEntry.
     */
    data: XOR<HistoryEntryCreateInput, HistoryEntryUncheckedCreateInput>
  }

  /**
   * HistoryEntry createMany
   */
  export type HistoryEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HistoryEntries.
     */
    data: HistoryEntryCreateManyInput | HistoryEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HistoryEntry createManyAndReturn
   */
  export type HistoryEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryEntry
     */
    select?: HistoryEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryEntry
     */
    omit?: HistoryEntryOmit<ExtArgs> | null
    /**
     * The data used to create many HistoryEntries.
     */
    data: HistoryEntryCreateManyInput | HistoryEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HistoryEntry update
   */
  export type HistoryEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryEntry
     */
    select?: HistoryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryEntry
     */
    omit?: HistoryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a HistoryEntry.
     */
    data: XOR<HistoryEntryUpdateInput, HistoryEntryUncheckedUpdateInput>
    /**
     * Choose, which HistoryEntry to update.
     */
    where: HistoryEntryWhereUniqueInput
  }

  /**
   * HistoryEntry updateMany
   */
  export type HistoryEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HistoryEntries.
     */
    data: XOR<HistoryEntryUpdateManyMutationInput, HistoryEntryUncheckedUpdateManyInput>
    /**
     * Filter which HistoryEntries to update
     */
    where?: HistoryEntryWhereInput
    /**
     * Limit how many HistoryEntries to update.
     */
    limit?: number
  }

  /**
   * HistoryEntry updateManyAndReturn
   */
  export type HistoryEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryEntry
     */
    select?: HistoryEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryEntry
     */
    omit?: HistoryEntryOmit<ExtArgs> | null
    /**
     * The data used to update HistoryEntries.
     */
    data: XOR<HistoryEntryUpdateManyMutationInput, HistoryEntryUncheckedUpdateManyInput>
    /**
     * Filter which HistoryEntries to update
     */
    where?: HistoryEntryWhereInput
    /**
     * Limit how many HistoryEntries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryEntryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HistoryEntry upsert
   */
  export type HistoryEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryEntry
     */
    select?: HistoryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryEntry
     */
    omit?: HistoryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the HistoryEntry to update in case it exists.
     */
    where: HistoryEntryWhereUniqueInput
    /**
     * In case the HistoryEntry found by the `where` argument doesn't exist, create a new HistoryEntry with this data.
     */
    create: XOR<HistoryEntryCreateInput, HistoryEntryUncheckedCreateInput>
    /**
     * In case the HistoryEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HistoryEntryUpdateInput, HistoryEntryUncheckedUpdateInput>
  }

  /**
   * HistoryEntry delete
   */
  export type HistoryEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryEntry
     */
    select?: HistoryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryEntry
     */
    omit?: HistoryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryEntryInclude<ExtArgs> | null
    /**
     * Filter which HistoryEntry to delete.
     */
    where: HistoryEntryWhereUniqueInput
  }

  /**
   * HistoryEntry deleteMany
   */
  export type HistoryEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistoryEntries to delete
     */
    where?: HistoryEntryWhereInput
    /**
     * Limit how many HistoryEntries to delete.
     */
    limit?: number
  }

  /**
   * HistoryEntry.user
   */
  export type HistoryEntry$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * HistoryEntry without action
   */
  export type HistoryEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryEntry
     */
    select?: HistoryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryEntry
     */
    omit?: HistoryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryEntryInclude<ExtArgs> | null
  }


  /**
   * Model Rate
   */

  export type AggregateRate = {
    _count: RateCountAggregateOutputType | null
    _avg: RateAvgAggregateOutputType | null
    _sum: RateSumAggregateOutputType | null
    _min: RateMinAggregateOutputType | null
    _max: RateMaxAggregateOutputType | null
  }

  export type RateAvgAggregateOutputType = {
    value: number | null
  }

  export type RateSumAggregateOutputType = {
    value: number | null
  }

  export type RateMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    value: number | null
    comment: string | null
    userId: string | null
  }

  export type RateMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    value: number | null
    comment: string | null
    userId: string | null
  }

  export type RateCountAggregateOutputType = {
    id: number
    createdAt: number
    value: number
    comment: number
    userId: number
    _all: number
  }


  export type RateAvgAggregateInputType = {
    value?: true
  }

  export type RateSumAggregateInputType = {
    value?: true
  }

  export type RateMinAggregateInputType = {
    id?: true
    createdAt?: true
    value?: true
    comment?: true
    userId?: true
  }

  export type RateMaxAggregateInputType = {
    id?: true
    createdAt?: true
    value?: true
    comment?: true
    userId?: true
  }

  export type RateCountAggregateInputType = {
    id?: true
    createdAt?: true
    value?: true
    comment?: true
    userId?: true
    _all?: true
  }

  export type RateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rate to aggregate.
     */
    where?: RateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rates to fetch.
     */
    orderBy?: RateOrderByWithRelationInput | RateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rates
    **/
    _count?: true | RateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RateMaxAggregateInputType
  }

  export type GetRateAggregateType<T extends RateAggregateArgs> = {
        [P in keyof T & keyof AggregateRate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRate[P]>
      : GetScalarType<T[P], AggregateRate[P]>
  }




  export type RateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RateWhereInput
    orderBy?: RateOrderByWithAggregationInput | RateOrderByWithAggregationInput[]
    by: RateScalarFieldEnum[] | RateScalarFieldEnum
    having?: RateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RateCountAggregateInputType | true
    _avg?: RateAvgAggregateInputType
    _sum?: RateSumAggregateInputType
    _min?: RateMinAggregateInputType
    _max?: RateMaxAggregateInputType
  }

  export type RateGroupByOutputType = {
    id: string
    createdAt: Date
    value: number
    comment: string | null
    userId: string
    _count: RateCountAggregateOutputType | null
    _avg: RateAvgAggregateOutputType | null
    _sum: RateSumAggregateOutputType | null
    _min: RateMinAggregateOutputType | null
    _max: RateMaxAggregateOutputType | null
  }

  type GetRateGroupByPayload<T extends RateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RateGroupByOutputType[P]>
            : GetScalarType<T[P], RateGroupByOutputType[P]>
        }
      >
    >


  export type RateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    value?: boolean
    comment?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rate"]>

  export type RateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    value?: boolean
    comment?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rate"]>

  export type RateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    value?: boolean
    comment?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rate"]>

  export type RateSelectScalar = {
    id?: boolean
    createdAt?: boolean
    value?: boolean
    comment?: boolean
    userId?: boolean
  }

  export type RateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "value" | "comment" | "userId", ExtArgs["result"]["rate"]>
  export type RateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rate"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      value: number
      comment: string | null
      userId: string
    }, ExtArgs["result"]["rate"]>
    composites: {}
  }

  type RateGetPayload<S extends boolean | null | undefined | RateDefaultArgs> = $Result.GetResult<Prisma.$RatePayload, S>

  type RateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RateCountAggregateInputType | true
    }

  export interface RateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rate'], meta: { name: 'Rate' } }
    /**
     * Find zero or one Rate that matches the filter.
     * @param {RateFindUniqueArgs} args - Arguments to find a Rate
     * @example
     * // Get one Rate
     * const rate = await prisma.rate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RateFindUniqueArgs>(args: SelectSubset<T, RateFindUniqueArgs<ExtArgs>>): Prisma__RateClient<$Result.GetResult<Prisma.$RatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RateFindUniqueOrThrowArgs} args - Arguments to find a Rate
     * @example
     * // Get one Rate
     * const rate = await prisma.rate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RateFindUniqueOrThrowArgs>(args: SelectSubset<T, RateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RateClient<$Result.GetResult<Prisma.$RatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateFindFirstArgs} args - Arguments to find a Rate
     * @example
     * // Get one Rate
     * const rate = await prisma.rate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RateFindFirstArgs>(args?: SelectSubset<T, RateFindFirstArgs<ExtArgs>>): Prisma__RateClient<$Result.GetResult<Prisma.$RatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateFindFirstOrThrowArgs} args - Arguments to find a Rate
     * @example
     * // Get one Rate
     * const rate = await prisma.rate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RateFindFirstOrThrowArgs>(args?: SelectSubset<T, RateFindFirstOrThrowArgs<ExtArgs>>): Prisma__RateClient<$Result.GetResult<Prisma.$RatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rates
     * const rates = await prisma.rate.findMany()
     * 
     * // Get first 10 Rates
     * const rates = await prisma.rate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rateWithIdOnly = await prisma.rate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RateFindManyArgs>(args?: SelectSubset<T, RateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rate.
     * @param {RateCreateArgs} args - Arguments to create a Rate.
     * @example
     * // Create one Rate
     * const Rate = await prisma.rate.create({
     *   data: {
     *     // ... data to create a Rate
     *   }
     * })
     * 
     */
    create<T extends RateCreateArgs>(args: SelectSubset<T, RateCreateArgs<ExtArgs>>): Prisma__RateClient<$Result.GetResult<Prisma.$RatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rates.
     * @param {RateCreateManyArgs} args - Arguments to create many Rates.
     * @example
     * // Create many Rates
     * const rate = await prisma.rate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RateCreateManyArgs>(args?: SelectSubset<T, RateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rates and returns the data saved in the database.
     * @param {RateCreateManyAndReturnArgs} args - Arguments to create many Rates.
     * @example
     * // Create many Rates
     * const rate = await prisma.rate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rates and only return the `id`
     * const rateWithIdOnly = await prisma.rate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RateCreateManyAndReturnArgs>(args?: SelectSubset<T, RateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rate.
     * @param {RateDeleteArgs} args - Arguments to delete one Rate.
     * @example
     * // Delete one Rate
     * const Rate = await prisma.rate.delete({
     *   where: {
     *     // ... filter to delete one Rate
     *   }
     * })
     * 
     */
    delete<T extends RateDeleteArgs>(args: SelectSubset<T, RateDeleteArgs<ExtArgs>>): Prisma__RateClient<$Result.GetResult<Prisma.$RatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rate.
     * @param {RateUpdateArgs} args - Arguments to update one Rate.
     * @example
     * // Update one Rate
     * const rate = await prisma.rate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RateUpdateArgs>(args: SelectSubset<T, RateUpdateArgs<ExtArgs>>): Prisma__RateClient<$Result.GetResult<Prisma.$RatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rates.
     * @param {RateDeleteManyArgs} args - Arguments to filter Rates to delete.
     * @example
     * // Delete a few Rates
     * const { count } = await prisma.rate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RateDeleteManyArgs>(args?: SelectSubset<T, RateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rates
     * const rate = await prisma.rate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RateUpdateManyArgs>(args: SelectSubset<T, RateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rates and returns the data updated in the database.
     * @param {RateUpdateManyAndReturnArgs} args - Arguments to update many Rates.
     * @example
     * // Update many Rates
     * const rate = await prisma.rate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rates and only return the `id`
     * const rateWithIdOnly = await prisma.rate.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RateUpdateManyAndReturnArgs>(args: SelectSubset<T, RateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rate.
     * @param {RateUpsertArgs} args - Arguments to update or create a Rate.
     * @example
     * // Update or create a Rate
     * const rate = await prisma.rate.upsert({
     *   create: {
     *     // ... data to create a Rate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rate we want to update
     *   }
     * })
     */
    upsert<T extends RateUpsertArgs>(args: SelectSubset<T, RateUpsertArgs<ExtArgs>>): Prisma__RateClient<$Result.GetResult<Prisma.$RatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateCountArgs} args - Arguments to filter Rates to count.
     * @example
     * // Count the number of Rates
     * const count = await prisma.rate.count({
     *   where: {
     *     // ... the filter for the Rates we want to count
     *   }
     * })
    **/
    count<T extends RateCountArgs>(
      args?: Subset<T, RateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RateAggregateArgs>(args: Subset<T, RateAggregateArgs>): Prisma.PrismaPromise<GetRateAggregateType<T>>

    /**
     * Group by Rate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RateGroupByArgs['orderBy'] }
        : { orderBy?: RateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rate model
   */
  readonly fields: RateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Rate model
   */
  interface RateFieldRefs {
    readonly id: FieldRef<"Rate", 'String'>
    readonly createdAt: FieldRef<"Rate", 'DateTime'>
    readonly value: FieldRef<"Rate", 'Int'>
    readonly comment: FieldRef<"Rate", 'String'>
    readonly userId: FieldRef<"Rate", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Rate findUnique
   */
  export type RateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rate
     */
    select?: RateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rate
     */
    omit?: RateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RateInclude<ExtArgs> | null
    /**
     * Filter, which Rate to fetch.
     */
    where: RateWhereUniqueInput
  }

  /**
   * Rate findUniqueOrThrow
   */
  export type RateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rate
     */
    select?: RateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rate
     */
    omit?: RateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RateInclude<ExtArgs> | null
    /**
     * Filter, which Rate to fetch.
     */
    where: RateWhereUniqueInput
  }

  /**
   * Rate findFirst
   */
  export type RateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rate
     */
    select?: RateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rate
     */
    omit?: RateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RateInclude<ExtArgs> | null
    /**
     * Filter, which Rate to fetch.
     */
    where?: RateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rates to fetch.
     */
    orderBy?: RateOrderByWithRelationInput | RateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rates.
     */
    cursor?: RateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rates.
     */
    distinct?: RateScalarFieldEnum | RateScalarFieldEnum[]
  }

  /**
   * Rate findFirstOrThrow
   */
  export type RateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rate
     */
    select?: RateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rate
     */
    omit?: RateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RateInclude<ExtArgs> | null
    /**
     * Filter, which Rate to fetch.
     */
    where?: RateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rates to fetch.
     */
    orderBy?: RateOrderByWithRelationInput | RateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rates.
     */
    cursor?: RateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rates.
     */
    distinct?: RateScalarFieldEnum | RateScalarFieldEnum[]
  }

  /**
   * Rate findMany
   */
  export type RateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rate
     */
    select?: RateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rate
     */
    omit?: RateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RateInclude<ExtArgs> | null
    /**
     * Filter, which Rates to fetch.
     */
    where?: RateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rates to fetch.
     */
    orderBy?: RateOrderByWithRelationInput | RateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rates.
     */
    cursor?: RateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rates.
     */
    skip?: number
    distinct?: RateScalarFieldEnum | RateScalarFieldEnum[]
  }

  /**
   * Rate create
   */
  export type RateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rate
     */
    select?: RateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rate
     */
    omit?: RateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RateInclude<ExtArgs> | null
    /**
     * The data needed to create a Rate.
     */
    data: XOR<RateCreateInput, RateUncheckedCreateInput>
  }

  /**
   * Rate createMany
   */
  export type RateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rates.
     */
    data: RateCreateManyInput | RateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rate createManyAndReturn
   */
  export type RateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rate
     */
    select?: RateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rate
     */
    omit?: RateOmit<ExtArgs> | null
    /**
     * The data used to create many Rates.
     */
    data: RateCreateManyInput | RateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rate update
   */
  export type RateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rate
     */
    select?: RateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rate
     */
    omit?: RateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RateInclude<ExtArgs> | null
    /**
     * The data needed to update a Rate.
     */
    data: XOR<RateUpdateInput, RateUncheckedUpdateInput>
    /**
     * Choose, which Rate to update.
     */
    where: RateWhereUniqueInput
  }

  /**
   * Rate updateMany
   */
  export type RateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rates.
     */
    data: XOR<RateUpdateManyMutationInput, RateUncheckedUpdateManyInput>
    /**
     * Filter which Rates to update
     */
    where?: RateWhereInput
    /**
     * Limit how many Rates to update.
     */
    limit?: number
  }

  /**
   * Rate updateManyAndReturn
   */
  export type RateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rate
     */
    select?: RateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rate
     */
    omit?: RateOmit<ExtArgs> | null
    /**
     * The data used to update Rates.
     */
    data: XOR<RateUpdateManyMutationInput, RateUncheckedUpdateManyInput>
    /**
     * Filter which Rates to update
     */
    where?: RateWhereInput
    /**
     * Limit how many Rates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rate upsert
   */
  export type RateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rate
     */
    select?: RateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rate
     */
    omit?: RateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RateInclude<ExtArgs> | null
    /**
     * The filter to search for the Rate to update in case it exists.
     */
    where: RateWhereUniqueInput
    /**
     * In case the Rate found by the `where` argument doesn't exist, create a new Rate with this data.
     */
    create: XOR<RateCreateInput, RateUncheckedCreateInput>
    /**
     * In case the Rate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RateUpdateInput, RateUncheckedUpdateInput>
  }

  /**
   * Rate delete
   */
  export type RateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rate
     */
    select?: RateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rate
     */
    omit?: RateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RateInclude<ExtArgs> | null
    /**
     * Filter which Rate to delete.
     */
    where: RateWhereUniqueInput
  }

  /**
   * Rate deleteMany
   */
  export type RateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rates to delete
     */
    where?: RateWhereInput
    /**
     * Limit how many Rates to delete.
     */
    limit?: number
  }

  /**
   * Rate without action
   */
  export type RateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rate
     */
    select?: RateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rate
     */
    omit?: RateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RateInclude<ExtArgs> | null
  }


  /**
   * Model Chat
   */

  export type AggregateChat = {
    _count: ChatCountAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  export type ChatMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    user1Id: string | null
    user2Id: string | null
  }

  export type ChatMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    user1Id: string | null
    user2Id: string | null
  }

  export type ChatCountAggregateOutputType = {
    id: number
    createdAt: number
    user1Id: number
    user2Id: number
    _all: number
  }


  export type ChatMinAggregateInputType = {
    id?: true
    createdAt?: true
    user1Id?: true
    user2Id?: true
  }

  export type ChatMaxAggregateInputType = {
    id?: true
    createdAt?: true
    user1Id?: true
    user2Id?: true
  }

  export type ChatCountAggregateInputType = {
    id?: true
    createdAt?: true
    user1Id?: true
    user2Id?: true
    _all?: true
  }

  export type ChatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chat to aggregate.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chats
    **/
    _count?: true | ChatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMaxAggregateInputType
  }

  export type GetChatAggregateType<T extends ChatAggregateArgs> = {
        [P in keyof T & keyof AggregateChat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChat[P]>
      : GetScalarType<T[P], AggregateChat[P]>
  }




  export type ChatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithAggregationInput | ChatOrderByWithAggregationInput[]
    by: ChatScalarFieldEnum[] | ChatScalarFieldEnum
    having?: ChatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatCountAggregateInputType | true
    _min?: ChatMinAggregateInputType
    _max?: ChatMaxAggregateInputType
  }

  export type ChatGroupByOutputType = {
    id: string
    createdAt: Date
    user1Id: string
    user2Id: string
    _count: ChatCountAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  type GetChatGroupByPayload<T extends ChatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatGroupByOutputType[P]>
            : GetScalarType<T[P], ChatGroupByOutputType[P]>
        }
      >
    >


  export type ChatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    user1Id?: boolean
    user2Id?: boolean
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
    messages?: boolean | Chat$messagesArgs<ExtArgs>
    _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    user1Id?: boolean
    user2Id?: boolean
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    user1Id?: boolean
    user2Id?: boolean
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectScalar = {
    id?: boolean
    createdAt?: boolean
    user1Id?: boolean
    user2Id?: boolean
  }

  export type ChatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "user1Id" | "user2Id", ExtArgs["result"]["chat"]>
  export type ChatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
    messages?: boolean | Chat$messagesArgs<ExtArgs>
    _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chat"
    objects: {
      user1: Prisma.$UserPayload<ExtArgs>
      user2: Prisma.$UserPayload<ExtArgs>
      messages: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      user1Id: string
      user2Id: string
    }, ExtArgs["result"]["chat"]>
    composites: {}
  }

  type ChatGetPayload<S extends boolean | null | undefined | ChatDefaultArgs> = $Result.GetResult<Prisma.$ChatPayload, S>

  type ChatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatCountAggregateInputType | true
    }

  export interface ChatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chat'], meta: { name: 'Chat' } }
    /**
     * Find zero or one Chat that matches the filter.
     * @param {ChatFindUniqueArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatFindUniqueArgs>(args: SelectSubset<T, ChatFindUniqueArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatFindUniqueOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatFindFirstArgs>(args?: SelectSubset<T, ChatFindFirstArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chats
     * const chats = await prisma.chat.findMany()
     * 
     * // Get first 10 Chats
     * const chats = await prisma.chat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatWithIdOnly = await prisma.chat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatFindManyArgs>(args?: SelectSubset<T, ChatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chat.
     * @param {ChatCreateArgs} args - Arguments to create a Chat.
     * @example
     * // Create one Chat
     * const Chat = await prisma.chat.create({
     *   data: {
     *     // ... data to create a Chat
     *   }
     * })
     * 
     */
    create<T extends ChatCreateArgs>(args: SelectSubset<T, ChatCreateArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chats.
     * @param {ChatCreateManyArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatCreateManyArgs>(args?: SelectSubset<T, ChatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chats and returns the data saved in the database.
     * @param {ChatCreateManyAndReturnArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chats and only return the `id`
     * const chatWithIdOnly = await prisma.chat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chat.
     * @param {ChatDeleteArgs} args - Arguments to delete one Chat.
     * @example
     * // Delete one Chat
     * const Chat = await prisma.chat.delete({
     *   where: {
     *     // ... filter to delete one Chat
     *   }
     * })
     * 
     */
    delete<T extends ChatDeleteArgs>(args: SelectSubset<T, ChatDeleteArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chat.
     * @param {ChatUpdateArgs} args - Arguments to update one Chat.
     * @example
     * // Update one Chat
     * const chat = await prisma.chat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatUpdateArgs>(args: SelectSubset<T, ChatUpdateArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chats.
     * @param {ChatDeleteManyArgs} args - Arguments to filter Chats to delete.
     * @example
     * // Delete a few Chats
     * const { count } = await prisma.chat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatDeleteManyArgs>(args?: SelectSubset<T, ChatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatUpdateManyArgs>(args: SelectSubset<T, ChatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats and returns the data updated in the database.
     * @param {ChatUpdateManyAndReturnArgs} args - Arguments to update many Chats.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chats and only return the `id`
     * const chatWithIdOnly = await prisma.chat.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChatUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chat.
     * @param {ChatUpsertArgs} args - Arguments to update or create a Chat.
     * @example
     * // Update or create a Chat
     * const chat = await prisma.chat.upsert({
     *   create: {
     *     // ... data to create a Chat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chat we want to update
     *   }
     * })
     */
    upsert<T extends ChatUpsertArgs>(args: SelectSubset<T, ChatUpsertArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatCountArgs} args - Arguments to filter Chats to count.
     * @example
     * // Count the number of Chats
     * const count = await prisma.chat.count({
     *   where: {
     *     // ... the filter for the Chats we want to count
     *   }
     * })
    **/
    count<T extends ChatCountArgs>(
      args?: Subset<T, ChatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatAggregateArgs>(args: Subset<T, ChatAggregateArgs>): Prisma.PrismaPromise<GetChatAggregateType<T>>

    /**
     * Group by Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatGroupByArgs['orderBy'] }
        : { orderBy?: ChatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chat model
   */
  readonly fields: ChatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user1<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user2<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    messages<T extends Chat$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Chat$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Chat model
   */
  interface ChatFieldRefs {
    readonly id: FieldRef<"Chat", 'String'>
    readonly createdAt: FieldRef<"Chat", 'DateTime'>
    readonly user1Id: FieldRef<"Chat", 'String'>
    readonly user2Id: FieldRef<"Chat", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Chat findUnique
   */
  export type ChatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat findUniqueOrThrow
   */
  export type ChatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat findFirst
   */
  export type ChatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat findFirstOrThrow
   */
  export type ChatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat findMany
   */
  export type ChatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chats to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat create
   */
  export type ChatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to create a Chat.
     */
    data: XOR<ChatCreateInput, ChatUncheckedCreateInput>
  }

  /**
   * Chat createMany
   */
  export type ChatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chats.
     */
    data: ChatCreateManyInput | ChatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chat createManyAndReturn
   */
  export type ChatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * The data used to create many Chats.
     */
    data: ChatCreateManyInput | ChatCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chat update
   */
  export type ChatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to update a Chat.
     */
    data: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
    /**
     * Choose, which Chat to update.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat updateMany
   */
  export type ChatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chats.
     */
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to update.
     */
    limit?: number
  }

  /**
   * Chat updateManyAndReturn
   */
  export type ChatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * The data used to update Chats.
     */
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chat upsert
   */
  export type ChatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The filter to search for the Chat to update in case it exists.
     */
    where: ChatWhereUniqueInput
    /**
     * In case the Chat found by the `where` argument doesn't exist, create a new Chat with this data.
     */
    create: XOR<ChatCreateInput, ChatUncheckedCreateInput>
    /**
     * In case the Chat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
  }

  /**
   * Chat delete
   */
  export type ChatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter which Chat to delete.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat deleteMany
   */
  export type ChatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chats to delete
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to delete.
     */
    limit?: number
  }

  /**
   * Chat.messages
   */
  export type Chat$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Chat without action
   */
  export type ChatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    content: string | null
    senderId: string | null
    chatId: string | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    content: string | null
    senderId: string | null
    chatId: string | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    createdAt: number
    content: number
    senderId: number
    chatId: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    id?: true
    createdAt?: true
    content?: true
    senderId?: true
    chatId?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    createdAt?: true
    content?: true
    senderId?: true
    chatId?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    createdAt?: true
    content?: true
    senderId?: true
    chatId?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    createdAt: Date
    content: string
    senderId: string
    chatId: string
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    content?: boolean
    senderId?: boolean
    chatId?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    content?: boolean
    senderId?: boolean
    chatId?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    content?: boolean
    senderId?: boolean
    chatId?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    createdAt?: boolean
    content?: boolean
    senderId?: boolean
    chatId?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "content" | "senderId" | "chatId", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      sender: Prisma.$UserPayload<ExtArgs>
      chat: Prisma.$ChatPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      content: string
      senderId: string
      chatId: string
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chat<T extends ChatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatDefaultArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
    readonly content: FieldRef<"Message", 'String'>
    readonly senderId: FieldRef<"Message", 'String'>
    readonly chatId: FieldRef<"Message", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Model Benefit
   */

  export type AggregateBenefit = {
    _count: BenefitCountAggregateOutputType | null
    _avg: BenefitAvgAggregateOutputType | null
    _sum: BenefitSumAggregateOutputType | null
    _min: BenefitMinAggregateOutputType | null
    _max: BenefitMaxAggregateOutputType | null
  }

  export type BenefitAvgAggregateOutputType = {
    durationDays: number | null
  }

  export type BenefitSumAggregateOutputType = {
    durationDays: number | null
  }

  export type BenefitMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    key: string | null
    title: string | null
    description: string | null
    durationDays: number | null
    active: boolean | null
  }

  export type BenefitMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    key: string | null
    title: string | null
    description: string | null
    durationDays: number | null
    active: boolean | null
  }

  export type BenefitCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    key: number
    title: number
    description: number
    durationDays: number
    active: number
    _all: number
  }


  export type BenefitAvgAggregateInputType = {
    durationDays?: true
  }

  export type BenefitSumAggregateInputType = {
    durationDays?: true
  }

  export type BenefitMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    key?: true
    title?: true
    description?: true
    durationDays?: true
    active?: true
  }

  export type BenefitMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    key?: true
    title?: true
    description?: true
    durationDays?: true
    active?: true
  }

  export type BenefitCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    key?: true
    title?: true
    description?: true
    durationDays?: true
    active?: true
    _all?: true
  }

  export type BenefitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Benefit to aggregate.
     */
    where?: BenefitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Benefits to fetch.
     */
    orderBy?: BenefitOrderByWithRelationInput | BenefitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BenefitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Benefits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Benefits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Benefits
    **/
    _count?: true | BenefitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BenefitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BenefitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BenefitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BenefitMaxAggregateInputType
  }

  export type GetBenefitAggregateType<T extends BenefitAggregateArgs> = {
        [P in keyof T & keyof AggregateBenefit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBenefit[P]>
      : GetScalarType<T[P], AggregateBenefit[P]>
  }




  export type BenefitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BenefitWhereInput
    orderBy?: BenefitOrderByWithAggregationInput | BenefitOrderByWithAggregationInput[]
    by: BenefitScalarFieldEnum[] | BenefitScalarFieldEnum
    having?: BenefitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BenefitCountAggregateInputType | true
    _avg?: BenefitAvgAggregateInputType
    _sum?: BenefitSumAggregateInputType
    _min?: BenefitMinAggregateInputType
    _max?: BenefitMaxAggregateInputType
  }

  export type BenefitGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    key: string
    title: string
    description: string | null
    durationDays: number | null
    active: boolean
    _count: BenefitCountAggregateOutputType | null
    _avg: BenefitAvgAggregateOutputType | null
    _sum: BenefitSumAggregateOutputType | null
    _min: BenefitMinAggregateOutputType | null
    _max: BenefitMaxAggregateOutputType | null
  }

  type GetBenefitGroupByPayload<T extends BenefitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BenefitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BenefitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BenefitGroupByOutputType[P]>
            : GetScalarType<T[P], BenefitGroupByOutputType[P]>
        }
      >
    >


  export type BenefitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    key?: boolean
    title?: boolean
    description?: boolean
    durationDays?: boolean
    active?: boolean
    userBenefits?: boolean | Benefit$userBenefitsArgs<ExtArgs>
    _count?: boolean | BenefitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["benefit"]>

  export type BenefitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    key?: boolean
    title?: boolean
    description?: boolean
    durationDays?: boolean
    active?: boolean
  }, ExtArgs["result"]["benefit"]>

  export type BenefitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    key?: boolean
    title?: boolean
    description?: boolean
    durationDays?: boolean
    active?: boolean
  }, ExtArgs["result"]["benefit"]>

  export type BenefitSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    key?: boolean
    title?: boolean
    description?: boolean
    durationDays?: boolean
    active?: boolean
  }

  export type BenefitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "key" | "title" | "description" | "durationDays" | "active", ExtArgs["result"]["benefit"]>
  export type BenefitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userBenefits?: boolean | Benefit$userBenefitsArgs<ExtArgs>
    _count?: boolean | BenefitCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BenefitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BenefitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BenefitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Benefit"
    objects: {
      userBenefits: Prisma.$UserBenefitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      key: string
      title: string
      description: string | null
      durationDays: number | null
      active: boolean
    }, ExtArgs["result"]["benefit"]>
    composites: {}
  }

  type BenefitGetPayload<S extends boolean | null | undefined | BenefitDefaultArgs> = $Result.GetResult<Prisma.$BenefitPayload, S>

  type BenefitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BenefitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BenefitCountAggregateInputType | true
    }

  export interface BenefitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Benefit'], meta: { name: 'Benefit' } }
    /**
     * Find zero or one Benefit that matches the filter.
     * @param {BenefitFindUniqueArgs} args - Arguments to find a Benefit
     * @example
     * // Get one Benefit
     * const benefit = await prisma.benefit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BenefitFindUniqueArgs>(args: SelectSubset<T, BenefitFindUniqueArgs<ExtArgs>>): Prisma__BenefitClient<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Benefit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BenefitFindUniqueOrThrowArgs} args - Arguments to find a Benefit
     * @example
     * // Get one Benefit
     * const benefit = await prisma.benefit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BenefitFindUniqueOrThrowArgs>(args: SelectSubset<T, BenefitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BenefitClient<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Benefit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenefitFindFirstArgs} args - Arguments to find a Benefit
     * @example
     * // Get one Benefit
     * const benefit = await prisma.benefit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BenefitFindFirstArgs>(args?: SelectSubset<T, BenefitFindFirstArgs<ExtArgs>>): Prisma__BenefitClient<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Benefit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenefitFindFirstOrThrowArgs} args - Arguments to find a Benefit
     * @example
     * // Get one Benefit
     * const benefit = await prisma.benefit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BenefitFindFirstOrThrowArgs>(args?: SelectSubset<T, BenefitFindFirstOrThrowArgs<ExtArgs>>): Prisma__BenefitClient<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Benefits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenefitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Benefits
     * const benefits = await prisma.benefit.findMany()
     * 
     * // Get first 10 Benefits
     * const benefits = await prisma.benefit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const benefitWithIdOnly = await prisma.benefit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BenefitFindManyArgs>(args?: SelectSubset<T, BenefitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Benefit.
     * @param {BenefitCreateArgs} args - Arguments to create a Benefit.
     * @example
     * // Create one Benefit
     * const Benefit = await prisma.benefit.create({
     *   data: {
     *     // ... data to create a Benefit
     *   }
     * })
     * 
     */
    create<T extends BenefitCreateArgs>(args: SelectSubset<T, BenefitCreateArgs<ExtArgs>>): Prisma__BenefitClient<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Benefits.
     * @param {BenefitCreateManyArgs} args - Arguments to create many Benefits.
     * @example
     * // Create many Benefits
     * const benefit = await prisma.benefit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BenefitCreateManyArgs>(args?: SelectSubset<T, BenefitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Benefits and returns the data saved in the database.
     * @param {BenefitCreateManyAndReturnArgs} args - Arguments to create many Benefits.
     * @example
     * // Create many Benefits
     * const benefit = await prisma.benefit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Benefits and only return the `id`
     * const benefitWithIdOnly = await prisma.benefit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BenefitCreateManyAndReturnArgs>(args?: SelectSubset<T, BenefitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Benefit.
     * @param {BenefitDeleteArgs} args - Arguments to delete one Benefit.
     * @example
     * // Delete one Benefit
     * const Benefit = await prisma.benefit.delete({
     *   where: {
     *     // ... filter to delete one Benefit
     *   }
     * })
     * 
     */
    delete<T extends BenefitDeleteArgs>(args: SelectSubset<T, BenefitDeleteArgs<ExtArgs>>): Prisma__BenefitClient<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Benefit.
     * @param {BenefitUpdateArgs} args - Arguments to update one Benefit.
     * @example
     * // Update one Benefit
     * const benefit = await prisma.benefit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BenefitUpdateArgs>(args: SelectSubset<T, BenefitUpdateArgs<ExtArgs>>): Prisma__BenefitClient<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Benefits.
     * @param {BenefitDeleteManyArgs} args - Arguments to filter Benefits to delete.
     * @example
     * // Delete a few Benefits
     * const { count } = await prisma.benefit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BenefitDeleteManyArgs>(args?: SelectSubset<T, BenefitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Benefits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenefitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Benefits
     * const benefit = await prisma.benefit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BenefitUpdateManyArgs>(args: SelectSubset<T, BenefitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Benefits and returns the data updated in the database.
     * @param {BenefitUpdateManyAndReturnArgs} args - Arguments to update many Benefits.
     * @example
     * // Update many Benefits
     * const benefit = await prisma.benefit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Benefits and only return the `id`
     * const benefitWithIdOnly = await prisma.benefit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BenefitUpdateManyAndReturnArgs>(args: SelectSubset<T, BenefitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Benefit.
     * @param {BenefitUpsertArgs} args - Arguments to update or create a Benefit.
     * @example
     * // Update or create a Benefit
     * const benefit = await prisma.benefit.upsert({
     *   create: {
     *     // ... data to create a Benefit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Benefit we want to update
     *   }
     * })
     */
    upsert<T extends BenefitUpsertArgs>(args: SelectSubset<T, BenefitUpsertArgs<ExtArgs>>): Prisma__BenefitClient<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Benefits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenefitCountArgs} args - Arguments to filter Benefits to count.
     * @example
     * // Count the number of Benefits
     * const count = await prisma.benefit.count({
     *   where: {
     *     // ... the filter for the Benefits we want to count
     *   }
     * })
    **/
    count<T extends BenefitCountArgs>(
      args?: Subset<T, BenefitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BenefitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Benefit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenefitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BenefitAggregateArgs>(args: Subset<T, BenefitAggregateArgs>): Prisma.PrismaPromise<GetBenefitAggregateType<T>>

    /**
     * Group by Benefit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenefitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BenefitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BenefitGroupByArgs['orderBy'] }
        : { orderBy?: BenefitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BenefitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBenefitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Benefit model
   */
  readonly fields: BenefitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Benefit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BenefitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userBenefits<T extends Benefit$userBenefitsArgs<ExtArgs> = {}>(args?: Subset<T, Benefit$userBenefitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBenefitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Benefit model
   */
  interface BenefitFieldRefs {
    readonly id: FieldRef<"Benefit", 'String'>
    readonly createdAt: FieldRef<"Benefit", 'DateTime'>
    readonly updatedAt: FieldRef<"Benefit", 'DateTime'>
    readonly key: FieldRef<"Benefit", 'String'>
    readonly title: FieldRef<"Benefit", 'String'>
    readonly description: FieldRef<"Benefit", 'String'>
    readonly durationDays: FieldRef<"Benefit", 'Int'>
    readonly active: FieldRef<"Benefit", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Benefit findUnique
   */
  export type BenefitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Benefit
     */
    omit?: BenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenefitInclude<ExtArgs> | null
    /**
     * Filter, which Benefit to fetch.
     */
    where: BenefitWhereUniqueInput
  }

  /**
   * Benefit findUniqueOrThrow
   */
  export type BenefitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Benefit
     */
    omit?: BenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenefitInclude<ExtArgs> | null
    /**
     * Filter, which Benefit to fetch.
     */
    where: BenefitWhereUniqueInput
  }

  /**
   * Benefit findFirst
   */
  export type BenefitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Benefit
     */
    omit?: BenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenefitInclude<ExtArgs> | null
    /**
     * Filter, which Benefit to fetch.
     */
    where?: BenefitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Benefits to fetch.
     */
    orderBy?: BenefitOrderByWithRelationInput | BenefitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Benefits.
     */
    cursor?: BenefitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Benefits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Benefits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Benefits.
     */
    distinct?: BenefitScalarFieldEnum | BenefitScalarFieldEnum[]
  }

  /**
   * Benefit findFirstOrThrow
   */
  export type BenefitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Benefit
     */
    omit?: BenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenefitInclude<ExtArgs> | null
    /**
     * Filter, which Benefit to fetch.
     */
    where?: BenefitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Benefits to fetch.
     */
    orderBy?: BenefitOrderByWithRelationInput | BenefitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Benefits.
     */
    cursor?: BenefitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Benefits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Benefits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Benefits.
     */
    distinct?: BenefitScalarFieldEnum | BenefitScalarFieldEnum[]
  }

  /**
   * Benefit findMany
   */
  export type BenefitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Benefit
     */
    omit?: BenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenefitInclude<ExtArgs> | null
    /**
     * Filter, which Benefits to fetch.
     */
    where?: BenefitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Benefits to fetch.
     */
    orderBy?: BenefitOrderByWithRelationInput | BenefitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Benefits.
     */
    cursor?: BenefitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Benefits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Benefits.
     */
    skip?: number
    distinct?: BenefitScalarFieldEnum | BenefitScalarFieldEnum[]
  }

  /**
   * Benefit create
   */
  export type BenefitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Benefit
     */
    omit?: BenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenefitInclude<ExtArgs> | null
    /**
     * The data needed to create a Benefit.
     */
    data: XOR<BenefitCreateInput, BenefitUncheckedCreateInput>
  }

  /**
   * Benefit createMany
   */
  export type BenefitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Benefits.
     */
    data: BenefitCreateManyInput | BenefitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Benefit createManyAndReturn
   */
  export type BenefitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Benefit
     */
    omit?: BenefitOmit<ExtArgs> | null
    /**
     * The data used to create many Benefits.
     */
    data: BenefitCreateManyInput | BenefitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Benefit update
   */
  export type BenefitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Benefit
     */
    omit?: BenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenefitInclude<ExtArgs> | null
    /**
     * The data needed to update a Benefit.
     */
    data: XOR<BenefitUpdateInput, BenefitUncheckedUpdateInput>
    /**
     * Choose, which Benefit to update.
     */
    where: BenefitWhereUniqueInput
  }

  /**
   * Benefit updateMany
   */
  export type BenefitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Benefits.
     */
    data: XOR<BenefitUpdateManyMutationInput, BenefitUncheckedUpdateManyInput>
    /**
     * Filter which Benefits to update
     */
    where?: BenefitWhereInput
    /**
     * Limit how many Benefits to update.
     */
    limit?: number
  }

  /**
   * Benefit updateManyAndReturn
   */
  export type BenefitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Benefit
     */
    omit?: BenefitOmit<ExtArgs> | null
    /**
     * The data used to update Benefits.
     */
    data: XOR<BenefitUpdateManyMutationInput, BenefitUncheckedUpdateManyInput>
    /**
     * Filter which Benefits to update
     */
    where?: BenefitWhereInput
    /**
     * Limit how many Benefits to update.
     */
    limit?: number
  }

  /**
   * Benefit upsert
   */
  export type BenefitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Benefit
     */
    omit?: BenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenefitInclude<ExtArgs> | null
    /**
     * The filter to search for the Benefit to update in case it exists.
     */
    where: BenefitWhereUniqueInput
    /**
     * In case the Benefit found by the `where` argument doesn't exist, create a new Benefit with this data.
     */
    create: XOR<BenefitCreateInput, BenefitUncheckedCreateInput>
    /**
     * In case the Benefit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BenefitUpdateInput, BenefitUncheckedUpdateInput>
  }

  /**
   * Benefit delete
   */
  export type BenefitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Benefit
     */
    omit?: BenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenefitInclude<ExtArgs> | null
    /**
     * Filter which Benefit to delete.
     */
    where: BenefitWhereUniqueInput
  }

  /**
   * Benefit deleteMany
   */
  export type BenefitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Benefits to delete
     */
    where?: BenefitWhereInput
    /**
     * Limit how many Benefits to delete.
     */
    limit?: number
  }

  /**
   * Benefit.userBenefits
   */
  export type Benefit$userBenefitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBenefit
     */
    select?: UserBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBenefit
     */
    omit?: UserBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBenefitInclude<ExtArgs> | null
    where?: UserBenefitWhereInput
    orderBy?: UserBenefitOrderByWithRelationInput | UserBenefitOrderByWithRelationInput[]
    cursor?: UserBenefitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserBenefitScalarFieldEnum | UserBenefitScalarFieldEnum[]
  }

  /**
   * Benefit without action
   */
  export type BenefitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Benefit
     */
    omit?: BenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenefitInclude<ExtArgs> | null
  }


  /**
   * Model UserBenefit
   */

  export type AggregateUserBenefit = {
    _count: UserBenefitCountAggregateOutputType | null
    _min: UserBenefitMinAggregateOutputType | null
    _max: UserBenefitMaxAggregateOutputType | null
  }

  export type UserBenefitMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    userId: string | null
    benefitId: string | null
    startsAt: Date | null
    endsAt: Date | null
    status: $Enums.UserBenefitStatus | null
    source: string | null
  }

  export type UserBenefitMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    userId: string | null
    benefitId: string | null
    startsAt: Date | null
    endsAt: Date | null
    status: $Enums.UserBenefitStatus | null
    source: string | null
  }

  export type UserBenefitCountAggregateOutputType = {
    id: number
    createdAt: number
    userId: number
    benefitId: number
    startsAt: number
    endsAt: number
    status: number
    source: number
    metadata: number
    _all: number
  }


  export type UserBenefitMinAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    benefitId?: true
    startsAt?: true
    endsAt?: true
    status?: true
    source?: true
  }

  export type UserBenefitMaxAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    benefitId?: true
    startsAt?: true
    endsAt?: true
    status?: true
    source?: true
  }

  export type UserBenefitCountAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    benefitId?: true
    startsAt?: true
    endsAt?: true
    status?: true
    source?: true
    metadata?: true
    _all?: true
  }

  export type UserBenefitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserBenefit to aggregate.
     */
    where?: UserBenefitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBenefits to fetch.
     */
    orderBy?: UserBenefitOrderByWithRelationInput | UserBenefitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserBenefitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBenefits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBenefits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserBenefits
    **/
    _count?: true | UserBenefitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserBenefitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserBenefitMaxAggregateInputType
  }

  export type GetUserBenefitAggregateType<T extends UserBenefitAggregateArgs> = {
        [P in keyof T & keyof AggregateUserBenefit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserBenefit[P]>
      : GetScalarType<T[P], AggregateUserBenefit[P]>
  }




  export type UserBenefitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserBenefitWhereInput
    orderBy?: UserBenefitOrderByWithAggregationInput | UserBenefitOrderByWithAggregationInput[]
    by: UserBenefitScalarFieldEnum[] | UserBenefitScalarFieldEnum
    having?: UserBenefitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserBenefitCountAggregateInputType | true
    _min?: UserBenefitMinAggregateInputType
    _max?: UserBenefitMaxAggregateInputType
  }

  export type UserBenefitGroupByOutputType = {
    id: string
    createdAt: Date
    userId: string
    benefitId: string
    startsAt: Date
    endsAt: Date | null
    status: $Enums.UserBenefitStatus
    source: string | null
    metadata: JsonValue | null
    _count: UserBenefitCountAggregateOutputType | null
    _min: UserBenefitMinAggregateOutputType | null
    _max: UserBenefitMaxAggregateOutputType | null
  }

  type GetUserBenefitGroupByPayload<T extends UserBenefitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserBenefitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserBenefitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserBenefitGroupByOutputType[P]>
            : GetScalarType<T[P], UserBenefitGroupByOutputType[P]>
        }
      >
    >


  export type UserBenefitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    benefitId?: boolean
    startsAt?: boolean
    endsAt?: boolean
    status?: boolean
    source?: boolean
    metadata?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    benefit?: boolean | BenefitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userBenefit"]>

  export type UserBenefitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    benefitId?: boolean
    startsAt?: boolean
    endsAt?: boolean
    status?: boolean
    source?: boolean
    metadata?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    benefit?: boolean | BenefitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userBenefit"]>

  export type UserBenefitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    benefitId?: boolean
    startsAt?: boolean
    endsAt?: boolean
    status?: boolean
    source?: boolean
    metadata?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    benefit?: boolean | BenefitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userBenefit"]>

  export type UserBenefitSelectScalar = {
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    benefitId?: boolean
    startsAt?: boolean
    endsAt?: boolean
    status?: boolean
    source?: boolean
    metadata?: boolean
  }

  export type UserBenefitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "userId" | "benefitId" | "startsAt" | "endsAt" | "status" | "source" | "metadata", ExtArgs["result"]["userBenefit"]>
  export type UserBenefitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    benefit?: boolean | BenefitDefaultArgs<ExtArgs>
  }
  export type UserBenefitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    benefit?: boolean | BenefitDefaultArgs<ExtArgs>
  }
  export type UserBenefitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    benefit?: boolean | BenefitDefaultArgs<ExtArgs>
  }

  export type $UserBenefitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserBenefit"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      benefit: Prisma.$BenefitPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      userId: string
      benefitId: string
      startsAt: Date
      endsAt: Date | null
      status: $Enums.UserBenefitStatus
      source: string | null
      metadata: Prisma.JsonValue | null
    }, ExtArgs["result"]["userBenefit"]>
    composites: {}
  }

  type UserBenefitGetPayload<S extends boolean | null | undefined | UserBenefitDefaultArgs> = $Result.GetResult<Prisma.$UserBenefitPayload, S>

  type UserBenefitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserBenefitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserBenefitCountAggregateInputType | true
    }

  export interface UserBenefitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserBenefit'], meta: { name: 'UserBenefit' } }
    /**
     * Find zero or one UserBenefit that matches the filter.
     * @param {UserBenefitFindUniqueArgs} args - Arguments to find a UserBenefit
     * @example
     * // Get one UserBenefit
     * const userBenefit = await prisma.userBenefit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserBenefitFindUniqueArgs>(args: SelectSubset<T, UserBenefitFindUniqueArgs<ExtArgs>>): Prisma__UserBenefitClient<$Result.GetResult<Prisma.$UserBenefitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserBenefit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserBenefitFindUniqueOrThrowArgs} args - Arguments to find a UserBenefit
     * @example
     * // Get one UserBenefit
     * const userBenefit = await prisma.userBenefit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserBenefitFindUniqueOrThrowArgs>(args: SelectSubset<T, UserBenefitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserBenefitClient<$Result.GetResult<Prisma.$UserBenefitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserBenefit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBenefitFindFirstArgs} args - Arguments to find a UserBenefit
     * @example
     * // Get one UserBenefit
     * const userBenefit = await prisma.userBenefit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserBenefitFindFirstArgs>(args?: SelectSubset<T, UserBenefitFindFirstArgs<ExtArgs>>): Prisma__UserBenefitClient<$Result.GetResult<Prisma.$UserBenefitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserBenefit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBenefitFindFirstOrThrowArgs} args - Arguments to find a UserBenefit
     * @example
     * // Get one UserBenefit
     * const userBenefit = await prisma.userBenefit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserBenefitFindFirstOrThrowArgs>(args?: SelectSubset<T, UserBenefitFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserBenefitClient<$Result.GetResult<Prisma.$UserBenefitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserBenefits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBenefitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserBenefits
     * const userBenefits = await prisma.userBenefit.findMany()
     * 
     * // Get first 10 UserBenefits
     * const userBenefits = await prisma.userBenefit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userBenefitWithIdOnly = await prisma.userBenefit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserBenefitFindManyArgs>(args?: SelectSubset<T, UserBenefitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBenefitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserBenefit.
     * @param {UserBenefitCreateArgs} args - Arguments to create a UserBenefit.
     * @example
     * // Create one UserBenefit
     * const UserBenefit = await prisma.userBenefit.create({
     *   data: {
     *     // ... data to create a UserBenefit
     *   }
     * })
     * 
     */
    create<T extends UserBenefitCreateArgs>(args: SelectSubset<T, UserBenefitCreateArgs<ExtArgs>>): Prisma__UserBenefitClient<$Result.GetResult<Prisma.$UserBenefitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserBenefits.
     * @param {UserBenefitCreateManyArgs} args - Arguments to create many UserBenefits.
     * @example
     * // Create many UserBenefits
     * const userBenefit = await prisma.userBenefit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserBenefitCreateManyArgs>(args?: SelectSubset<T, UserBenefitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserBenefits and returns the data saved in the database.
     * @param {UserBenefitCreateManyAndReturnArgs} args - Arguments to create many UserBenefits.
     * @example
     * // Create many UserBenefits
     * const userBenefit = await prisma.userBenefit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserBenefits and only return the `id`
     * const userBenefitWithIdOnly = await prisma.userBenefit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserBenefitCreateManyAndReturnArgs>(args?: SelectSubset<T, UserBenefitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBenefitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserBenefit.
     * @param {UserBenefitDeleteArgs} args - Arguments to delete one UserBenefit.
     * @example
     * // Delete one UserBenefit
     * const UserBenefit = await prisma.userBenefit.delete({
     *   where: {
     *     // ... filter to delete one UserBenefit
     *   }
     * })
     * 
     */
    delete<T extends UserBenefitDeleteArgs>(args: SelectSubset<T, UserBenefitDeleteArgs<ExtArgs>>): Prisma__UserBenefitClient<$Result.GetResult<Prisma.$UserBenefitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserBenefit.
     * @param {UserBenefitUpdateArgs} args - Arguments to update one UserBenefit.
     * @example
     * // Update one UserBenefit
     * const userBenefit = await prisma.userBenefit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserBenefitUpdateArgs>(args: SelectSubset<T, UserBenefitUpdateArgs<ExtArgs>>): Prisma__UserBenefitClient<$Result.GetResult<Prisma.$UserBenefitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserBenefits.
     * @param {UserBenefitDeleteManyArgs} args - Arguments to filter UserBenefits to delete.
     * @example
     * // Delete a few UserBenefits
     * const { count } = await prisma.userBenefit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserBenefitDeleteManyArgs>(args?: SelectSubset<T, UserBenefitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserBenefits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBenefitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserBenefits
     * const userBenefit = await prisma.userBenefit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserBenefitUpdateManyArgs>(args: SelectSubset<T, UserBenefitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserBenefits and returns the data updated in the database.
     * @param {UserBenefitUpdateManyAndReturnArgs} args - Arguments to update many UserBenefits.
     * @example
     * // Update many UserBenefits
     * const userBenefit = await prisma.userBenefit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserBenefits and only return the `id`
     * const userBenefitWithIdOnly = await prisma.userBenefit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserBenefitUpdateManyAndReturnArgs>(args: SelectSubset<T, UserBenefitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBenefitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserBenefit.
     * @param {UserBenefitUpsertArgs} args - Arguments to update or create a UserBenefit.
     * @example
     * // Update or create a UserBenefit
     * const userBenefit = await prisma.userBenefit.upsert({
     *   create: {
     *     // ... data to create a UserBenefit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserBenefit we want to update
     *   }
     * })
     */
    upsert<T extends UserBenefitUpsertArgs>(args: SelectSubset<T, UserBenefitUpsertArgs<ExtArgs>>): Prisma__UserBenefitClient<$Result.GetResult<Prisma.$UserBenefitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserBenefits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBenefitCountArgs} args - Arguments to filter UserBenefits to count.
     * @example
     * // Count the number of UserBenefits
     * const count = await prisma.userBenefit.count({
     *   where: {
     *     // ... the filter for the UserBenefits we want to count
     *   }
     * })
    **/
    count<T extends UserBenefitCountArgs>(
      args?: Subset<T, UserBenefitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserBenefitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserBenefit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBenefitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserBenefitAggregateArgs>(args: Subset<T, UserBenefitAggregateArgs>): Prisma.PrismaPromise<GetUserBenefitAggregateType<T>>

    /**
     * Group by UserBenefit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBenefitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserBenefitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserBenefitGroupByArgs['orderBy'] }
        : { orderBy?: UserBenefitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserBenefitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserBenefitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserBenefit model
   */
  readonly fields: UserBenefitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserBenefit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserBenefitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    benefit<T extends BenefitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BenefitDefaultArgs<ExtArgs>>): Prisma__BenefitClient<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserBenefit model
   */
  interface UserBenefitFieldRefs {
    readonly id: FieldRef<"UserBenefit", 'String'>
    readonly createdAt: FieldRef<"UserBenefit", 'DateTime'>
    readonly userId: FieldRef<"UserBenefit", 'String'>
    readonly benefitId: FieldRef<"UserBenefit", 'String'>
    readonly startsAt: FieldRef<"UserBenefit", 'DateTime'>
    readonly endsAt: FieldRef<"UserBenefit", 'DateTime'>
    readonly status: FieldRef<"UserBenefit", 'UserBenefitStatus'>
    readonly source: FieldRef<"UserBenefit", 'String'>
    readonly metadata: FieldRef<"UserBenefit", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * UserBenefit findUnique
   */
  export type UserBenefitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBenefit
     */
    select?: UserBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBenefit
     */
    omit?: UserBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBenefitInclude<ExtArgs> | null
    /**
     * Filter, which UserBenefit to fetch.
     */
    where: UserBenefitWhereUniqueInput
  }

  /**
   * UserBenefit findUniqueOrThrow
   */
  export type UserBenefitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBenefit
     */
    select?: UserBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBenefit
     */
    omit?: UserBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBenefitInclude<ExtArgs> | null
    /**
     * Filter, which UserBenefit to fetch.
     */
    where: UserBenefitWhereUniqueInput
  }

  /**
   * UserBenefit findFirst
   */
  export type UserBenefitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBenefit
     */
    select?: UserBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBenefit
     */
    omit?: UserBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBenefitInclude<ExtArgs> | null
    /**
     * Filter, which UserBenefit to fetch.
     */
    where?: UserBenefitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBenefits to fetch.
     */
    orderBy?: UserBenefitOrderByWithRelationInput | UserBenefitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserBenefits.
     */
    cursor?: UserBenefitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBenefits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBenefits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserBenefits.
     */
    distinct?: UserBenefitScalarFieldEnum | UserBenefitScalarFieldEnum[]
  }

  /**
   * UserBenefit findFirstOrThrow
   */
  export type UserBenefitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBenefit
     */
    select?: UserBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBenefit
     */
    omit?: UserBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBenefitInclude<ExtArgs> | null
    /**
     * Filter, which UserBenefit to fetch.
     */
    where?: UserBenefitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBenefits to fetch.
     */
    orderBy?: UserBenefitOrderByWithRelationInput | UserBenefitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserBenefits.
     */
    cursor?: UserBenefitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBenefits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBenefits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserBenefits.
     */
    distinct?: UserBenefitScalarFieldEnum | UserBenefitScalarFieldEnum[]
  }

  /**
   * UserBenefit findMany
   */
  export type UserBenefitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBenefit
     */
    select?: UserBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBenefit
     */
    omit?: UserBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBenefitInclude<ExtArgs> | null
    /**
     * Filter, which UserBenefits to fetch.
     */
    where?: UserBenefitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBenefits to fetch.
     */
    orderBy?: UserBenefitOrderByWithRelationInput | UserBenefitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserBenefits.
     */
    cursor?: UserBenefitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBenefits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBenefits.
     */
    skip?: number
    distinct?: UserBenefitScalarFieldEnum | UserBenefitScalarFieldEnum[]
  }

  /**
   * UserBenefit create
   */
  export type UserBenefitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBenefit
     */
    select?: UserBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBenefit
     */
    omit?: UserBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBenefitInclude<ExtArgs> | null
    /**
     * The data needed to create a UserBenefit.
     */
    data: XOR<UserBenefitCreateInput, UserBenefitUncheckedCreateInput>
  }

  /**
   * UserBenefit createMany
   */
  export type UserBenefitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserBenefits.
     */
    data: UserBenefitCreateManyInput | UserBenefitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserBenefit createManyAndReturn
   */
  export type UserBenefitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBenefit
     */
    select?: UserBenefitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserBenefit
     */
    omit?: UserBenefitOmit<ExtArgs> | null
    /**
     * The data used to create many UserBenefits.
     */
    data: UserBenefitCreateManyInput | UserBenefitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBenefitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserBenefit update
   */
  export type UserBenefitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBenefit
     */
    select?: UserBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBenefit
     */
    omit?: UserBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBenefitInclude<ExtArgs> | null
    /**
     * The data needed to update a UserBenefit.
     */
    data: XOR<UserBenefitUpdateInput, UserBenefitUncheckedUpdateInput>
    /**
     * Choose, which UserBenefit to update.
     */
    where: UserBenefitWhereUniqueInput
  }

  /**
   * UserBenefit updateMany
   */
  export type UserBenefitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserBenefits.
     */
    data: XOR<UserBenefitUpdateManyMutationInput, UserBenefitUncheckedUpdateManyInput>
    /**
     * Filter which UserBenefits to update
     */
    where?: UserBenefitWhereInput
    /**
     * Limit how many UserBenefits to update.
     */
    limit?: number
  }

  /**
   * UserBenefit updateManyAndReturn
   */
  export type UserBenefitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBenefit
     */
    select?: UserBenefitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserBenefit
     */
    omit?: UserBenefitOmit<ExtArgs> | null
    /**
     * The data used to update UserBenefits.
     */
    data: XOR<UserBenefitUpdateManyMutationInput, UserBenefitUncheckedUpdateManyInput>
    /**
     * Filter which UserBenefits to update
     */
    where?: UserBenefitWhereInput
    /**
     * Limit how many UserBenefits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBenefitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserBenefit upsert
   */
  export type UserBenefitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBenefit
     */
    select?: UserBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBenefit
     */
    omit?: UserBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBenefitInclude<ExtArgs> | null
    /**
     * The filter to search for the UserBenefit to update in case it exists.
     */
    where: UserBenefitWhereUniqueInput
    /**
     * In case the UserBenefit found by the `where` argument doesn't exist, create a new UserBenefit with this data.
     */
    create: XOR<UserBenefitCreateInput, UserBenefitUncheckedCreateInput>
    /**
     * In case the UserBenefit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserBenefitUpdateInput, UserBenefitUncheckedUpdateInput>
  }

  /**
   * UserBenefit delete
   */
  export type UserBenefitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBenefit
     */
    select?: UserBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBenefit
     */
    omit?: UserBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBenefitInclude<ExtArgs> | null
    /**
     * Filter which UserBenefit to delete.
     */
    where: UserBenefitWhereUniqueInput
  }

  /**
   * UserBenefit deleteMany
   */
  export type UserBenefitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserBenefits to delete
     */
    where?: UserBenefitWhereInput
    /**
     * Limit how many UserBenefits to delete.
     */
    limit?: number
  }

  /**
   * UserBenefit without action
   */
  export type UserBenefitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBenefit
     */
    select?: UserBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBenefit
     */
    omit?: UserBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBenefitInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    email: 'email',
    password: 'password',
    name: 'name',
    role: 'role',
    parentalControl: 'parentalControl',
    active: 'active',
    cpf: 'cpf',
    cnpj: 'cnpj',
    pix_key: 'pix_key',
    picture: 'picture',
    addressDistrict: 'addressDistrict',
    addressStreet: 'addressStreet',
    addressNumber: 'addressNumber',
    addressDetail: 'addressDetail',
    addressCep: 'addressCep'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const OrganizationInfoScalarFieldEnum: {
    id: 'id',
    organizationId: 'organizationId',
    description: 'description',
    phone_number1: 'phone_number1',
    phone_number2: 'phone_number2'
  };

  export type OrganizationInfoScalarFieldEnum = (typeof OrganizationInfoScalarFieldEnum)[keyof typeof OrganizationInfoScalarFieldEnum]


  export const ToyScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    name: 'name',
    description: 'description',
    ownerId: 'ownerId',
    price: 'price',
    isNew: 'isNew',
    canTrade: 'canTrade',
    canLend: 'canLend',
    usageTime: 'usageTime',
    preservation: 'preservation',
    type: 'type',
    ageGroup: 'ageGroup'
  };

  export type ToyScalarFieldEnum = (typeof ToyScalarFieldEnum)[keyof typeof ToyScalarFieldEnum]


  export const ToyPictureScalarFieldEnum: {
    id: 'id',
    order: 'order',
    toyId: 'toyId',
    picture: 'picture'
  };

  export type ToyPictureScalarFieldEnum = (typeof ToyPictureScalarFieldEnum)[keyof typeof ToyPictureScalarFieldEnum]


  export const HistoryEntryScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    visible: 'visible',
    userId: 'userId',
    toyId: 'toyId'
  };

  export type HistoryEntryScalarFieldEnum = (typeof HistoryEntryScalarFieldEnum)[keyof typeof HistoryEntryScalarFieldEnum]


  export const RateScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    value: 'value',
    comment: 'comment',
    userId: 'userId'
  };

  export type RateScalarFieldEnum = (typeof RateScalarFieldEnum)[keyof typeof RateScalarFieldEnum]


  export const ChatScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    user1Id: 'user1Id',
    user2Id: 'user2Id'
  };

  export type ChatScalarFieldEnum = (typeof ChatScalarFieldEnum)[keyof typeof ChatScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    content: 'content',
    senderId: 'senderId',
    chatId: 'chatId'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const BenefitScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    key: 'key',
    title: 'title',
    description: 'description',
    durationDays: 'durationDays',
    active: 'active'
  };

  export type BenefitScalarFieldEnum = (typeof BenefitScalarFieldEnum)[keyof typeof BenefitScalarFieldEnum]


  export const UserBenefitScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    userId: 'userId',
    benefitId: 'benefitId',
    startsAt: 'startsAt',
    endsAt: 'endsAt',
    status: 'status',
    source: 'source',
    metadata: 'metadata'
  };

  export type UserBenefitScalarFieldEnum = (typeof UserBenefitScalarFieldEnum)[keyof typeof UserBenefitScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'ToyType[]'
   */
  export type ListEnumToyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ToyType[]'>
    


  /**
   * Reference to a field of type 'ToyType'
   */
  export type EnumToyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ToyType'>
    


  /**
   * Reference to a field of type 'AgeRange'
   */
  export type EnumAgeRangeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AgeRange'>
    


  /**
   * Reference to a field of type 'AgeRange[]'
   */
  export type ListEnumAgeRangeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AgeRange[]'>
    


  /**
   * Reference to a field of type 'UserBenefitStatus'
   */
  export type EnumUserBenefitStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserBenefitStatus'>
    


  /**
   * Reference to a field of type 'UserBenefitStatus[]'
   */
  export type ListEnumUserBenefitStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserBenefitStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    parentalControl?: BoolFilter<"User"> | boolean
    active?: BoolFilter<"User"> | boolean
    cpf?: StringNullableFilter<"User"> | string | null
    cnpj?: StringNullableFilter<"User"> | string | null
    pix_key?: StringNullableFilter<"User"> | string | null
    picture?: StringNullableFilter<"User"> | string | null
    addressDistrict?: StringFilter<"User"> | string
    addressStreet?: StringFilter<"User"> | string
    addressNumber?: IntFilter<"User"> | number
    addressDetail?: StringNullableFilter<"User"> | string | null
    addressCep?: StringFilter<"User"> | string
    toys?: ToyListRelationFilter
    history?: HistoryEntryListRelationFilter
    ratings?: RateListRelationFilter
    organizationInfo?: XOR<OrganizationInfoNullableScalarRelationFilter, organizationInfoWhereInput> | null
    chatsAsUser1?: ChatListRelationFilter
    chatsAsUser2?: ChatListRelationFilter
    messages?: MessageListRelationFilter
    userBenefits?: UserBenefitListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    parentalControl?: SortOrder
    active?: SortOrder
    cpf?: SortOrderInput | SortOrder
    cnpj?: SortOrderInput | SortOrder
    pix_key?: SortOrderInput | SortOrder
    picture?: SortOrderInput | SortOrder
    addressDistrict?: SortOrder
    addressStreet?: SortOrder
    addressNumber?: SortOrder
    addressDetail?: SortOrderInput | SortOrder
    addressCep?: SortOrder
    toys?: ToyOrderByRelationAggregateInput
    history?: HistoryEntryOrderByRelationAggregateInput
    ratings?: RateOrderByRelationAggregateInput
    organizationInfo?: organizationInfoOrderByWithRelationInput
    chatsAsUser1?: ChatOrderByRelationAggregateInput
    chatsAsUser2?: ChatOrderByRelationAggregateInput
    messages?: MessageOrderByRelationAggregateInput
    userBenefits?: UserBenefitOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    cpf?: string
    cnpj?: string
    pix_key?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    parentalControl?: BoolFilter<"User"> | boolean
    active?: BoolFilter<"User"> | boolean
    picture?: StringNullableFilter<"User"> | string | null
    addressDistrict?: StringFilter<"User"> | string
    addressStreet?: StringFilter<"User"> | string
    addressNumber?: IntFilter<"User"> | number
    addressDetail?: StringNullableFilter<"User"> | string | null
    addressCep?: StringFilter<"User"> | string
    toys?: ToyListRelationFilter
    history?: HistoryEntryListRelationFilter
    ratings?: RateListRelationFilter
    organizationInfo?: XOR<OrganizationInfoNullableScalarRelationFilter, organizationInfoWhereInput> | null
    chatsAsUser1?: ChatListRelationFilter
    chatsAsUser2?: ChatListRelationFilter
    messages?: MessageListRelationFilter
    userBenefits?: UserBenefitListRelationFilter
  }, "id" | "email" | "cpf" | "cnpj" | "pix_key">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    parentalControl?: SortOrder
    active?: SortOrder
    cpf?: SortOrderInput | SortOrder
    cnpj?: SortOrderInput | SortOrder
    pix_key?: SortOrderInput | SortOrder
    picture?: SortOrderInput | SortOrder
    addressDistrict?: SortOrder
    addressStreet?: SortOrder
    addressNumber?: SortOrder
    addressDetail?: SortOrderInput | SortOrder
    addressCep?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    parentalControl?: BoolWithAggregatesFilter<"User"> | boolean
    active?: BoolWithAggregatesFilter<"User"> | boolean
    cpf?: StringNullableWithAggregatesFilter<"User"> | string | null
    cnpj?: StringNullableWithAggregatesFilter<"User"> | string | null
    pix_key?: StringNullableWithAggregatesFilter<"User"> | string | null
    picture?: StringNullableWithAggregatesFilter<"User"> | string | null
    addressDistrict?: StringWithAggregatesFilter<"User"> | string
    addressStreet?: StringWithAggregatesFilter<"User"> | string
    addressNumber?: IntWithAggregatesFilter<"User"> | number
    addressDetail?: StringNullableWithAggregatesFilter<"User"> | string | null
    addressCep?: StringWithAggregatesFilter<"User"> | string
  }

  export type organizationInfoWhereInput = {
    AND?: organizationInfoWhereInput | organizationInfoWhereInput[]
    OR?: organizationInfoWhereInput[]
    NOT?: organizationInfoWhereInput | organizationInfoWhereInput[]
    id?: StringFilter<"organizationInfo"> | string
    organizationId?: StringFilter<"organizationInfo"> | string
    description?: StringFilter<"organizationInfo"> | string
    phone_number1?: IntFilter<"organizationInfo"> | number
    phone_number2?: IntNullableFilter<"organizationInfo"> | number | null
    organization?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type organizationInfoOrderByWithRelationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    description?: SortOrder
    phone_number1?: SortOrder
    phone_number2?: SortOrderInput | SortOrder
    organization?: UserOrderByWithRelationInput
  }

  export type organizationInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    organizationId?: string
    AND?: organizationInfoWhereInput | organizationInfoWhereInput[]
    OR?: organizationInfoWhereInput[]
    NOT?: organizationInfoWhereInput | organizationInfoWhereInput[]
    description?: StringFilter<"organizationInfo"> | string
    phone_number1?: IntFilter<"organizationInfo"> | number
    phone_number2?: IntNullableFilter<"organizationInfo"> | number | null
    organization?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "organizationId">

  export type organizationInfoOrderByWithAggregationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    description?: SortOrder
    phone_number1?: SortOrder
    phone_number2?: SortOrderInput | SortOrder
    _count?: organizationInfoCountOrderByAggregateInput
    _avg?: organizationInfoAvgOrderByAggregateInput
    _max?: organizationInfoMaxOrderByAggregateInput
    _min?: organizationInfoMinOrderByAggregateInput
    _sum?: organizationInfoSumOrderByAggregateInput
  }

  export type organizationInfoScalarWhereWithAggregatesInput = {
    AND?: organizationInfoScalarWhereWithAggregatesInput | organizationInfoScalarWhereWithAggregatesInput[]
    OR?: organizationInfoScalarWhereWithAggregatesInput[]
    NOT?: organizationInfoScalarWhereWithAggregatesInput | organizationInfoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"organizationInfo"> | string
    organizationId?: StringWithAggregatesFilter<"organizationInfo"> | string
    description?: StringWithAggregatesFilter<"organizationInfo"> | string
    phone_number1?: IntWithAggregatesFilter<"organizationInfo"> | number
    phone_number2?: IntNullableWithAggregatesFilter<"organizationInfo"> | number | null
  }

  export type ToyWhereInput = {
    AND?: ToyWhereInput | ToyWhereInput[]
    OR?: ToyWhereInput[]
    NOT?: ToyWhereInput | ToyWhereInput[]
    id?: StringFilter<"Toy"> | string
    createdAt?: DateTimeFilter<"Toy"> | Date | string
    name?: StringFilter<"Toy"> | string
    description?: StringFilter<"Toy"> | string
    ownerId?: StringFilter<"Toy"> | string
    price?: FloatFilter<"Toy"> | number
    isNew?: BoolFilter<"Toy"> | boolean
    canTrade?: BoolFilter<"Toy"> | boolean
    canLend?: BoolFilter<"Toy"> | boolean
    usageTime?: IntFilter<"Toy"> | number
    preservation?: IntFilter<"Toy"> | number
    type?: EnumToyTypeNullableListFilter<"Toy">
    ageGroup?: EnumAgeRangeFilter<"Toy"> | $Enums.AgeRange
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    history?: HistoryEntryListRelationFilter
    ToyPictures?: ToyPictureListRelationFilter
  }

  export type ToyOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    ownerId?: SortOrder
    price?: SortOrder
    isNew?: SortOrder
    canTrade?: SortOrder
    canLend?: SortOrder
    usageTime?: SortOrder
    preservation?: SortOrder
    type?: SortOrder
    ageGroup?: SortOrder
    owner?: UserOrderByWithRelationInput
    history?: HistoryEntryOrderByRelationAggregateInput
    ToyPictures?: ToyPictureOrderByRelationAggregateInput
  }

  export type ToyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ToyWhereInput | ToyWhereInput[]
    OR?: ToyWhereInput[]
    NOT?: ToyWhereInput | ToyWhereInput[]
    createdAt?: DateTimeFilter<"Toy"> | Date | string
    name?: StringFilter<"Toy"> | string
    description?: StringFilter<"Toy"> | string
    ownerId?: StringFilter<"Toy"> | string
    price?: FloatFilter<"Toy"> | number
    isNew?: BoolFilter<"Toy"> | boolean
    canTrade?: BoolFilter<"Toy"> | boolean
    canLend?: BoolFilter<"Toy"> | boolean
    usageTime?: IntFilter<"Toy"> | number
    preservation?: IntFilter<"Toy"> | number
    type?: EnumToyTypeNullableListFilter<"Toy">
    ageGroup?: EnumAgeRangeFilter<"Toy"> | $Enums.AgeRange
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    history?: HistoryEntryListRelationFilter
    ToyPictures?: ToyPictureListRelationFilter
  }, "id">

  export type ToyOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    ownerId?: SortOrder
    price?: SortOrder
    isNew?: SortOrder
    canTrade?: SortOrder
    canLend?: SortOrder
    usageTime?: SortOrder
    preservation?: SortOrder
    type?: SortOrder
    ageGroup?: SortOrder
    _count?: ToyCountOrderByAggregateInput
    _avg?: ToyAvgOrderByAggregateInput
    _max?: ToyMaxOrderByAggregateInput
    _min?: ToyMinOrderByAggregateInput
    _sum?: ToySumOrderByAggregateInput
  }

  export type ToyScalarWhereWithAggregatesInput = {
    AND?: ToyScalarWhereWithAggregatesInput | ToyScalarWhereWithAggregatesInput[]
    OR?: ToyScalarWhereWithAggregatesInput[]
    NOT?: ToyScalarWhereWithAggregatesInput | ToyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Toy"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Toy"> | Date | string
    name?: StringWithAggregatesFilter<"Toy"> | string
    description?: StringWithAggregatesFilter<"Toy"> | string
    ownerId?: StringWithAggregatesFilter<"Toy"> | string
    price?: FloatWithAggregatesFilter<"Toy"> | number
    isNew?: BoolWithAggregatesFilter<"Toy"> | boolean
    canTrade?: BoolWithAggregatesFilter<"Toy"> | boolean
    canLend?: BoolWithAggregatesFilter<"Toy"> | boolean
    usageTime?: IntWithAggregatesFilter<"Toy"> | number
    preservation?: IntWithAggregatesFilter<"Toy"> | number
    type?: EnumToyTypeNullableListFilter<"Toy">
    ageGroup?: EnumAgeRangeWithAggregatesFilter<"Toy"> | $Enums.AgeRange
  }

  export type ToyPictureWhereInput = {
    AND?: ToyPictureWhereInput | ToyPictureWhereInput[]
    OR?: ToyPictureWhereInput[]
    NOT?: ToyPictureWhereInput | ToyPictureWhereInput[]
    id?: StringFilter<"ToyPicture"> | string
    order?: IntFilter<"ToyPicture"> | number
    toyId?: StringFilter<"ToyPicture"> | string
    picture?: StringFilter<"ToyPicture"> | string
    toy?: XOR<ToyScalarRelationFilter, ToyWhereInput>
  }

  export type ToyPictureOrderByWithRelationInput = {
    id?: SortOrder
    order?: SortOrder
    toyId?: SortOrder
    picture?: SortOrder
    toy?: ToyOrderByWithRelationInput
  }

  export type ToyPictureWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ToyPictureWhereInput | ToyPictureWhereInput[]
    OR?: ToyPictureWhereInput[]
    NOT?: ToyPictureWhereInput | ToyPictureWhereInput[]
    order?: IntFilter<"ToyPicture"> | number
    toyId?: StringFilter<"ToyPicture"> | string
    picture?: StringFilter<"ToyPicture"> | string
    toy?: XOR<ToyScalarRelationFilter, ToyWhereInput>
  }, "id">

  export type ToyPictureOrderByWithAggregationInput = {
    id?: SortOrder
    order?: SortOrder
    toyId?: SortOrder
    picture?: SortOrder
    _count?: ToyPictureCountOrderByAggregateInput
    _avg?: ToyPictureAvgOrderByAggregateInput
    _max?: ToyPictureMaxOrderByAggregateInput
    _min?: ToyPictureMinOrderByAggregateInput
    _sum?: ToyPictureSumOrderByAggregateInput
  }

  export type ToyPictureScalarWhereWithAggregatesInput = {
    AND?: ToyPictureScalarWhereWithAggregatesInput | ToyPictureScalarWhereWithAggregatesInput[]
    OR?: ToyPictureScalarWhereWithAggregatesInput[]
    NOT?: ToyPictureScalarWhereWithAggregatesInput | ToyPictureScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ToyPicture"> | string
    order?: IntWithAggregatesFilter<"ToyPicture"> | number
    toyId?: StringWithAggregatesFilter<"ToyPicture"> | string
    picture?: StringWithAggregatesFilter<"ToyPicture"> | string
  }

  export type HistoryEntryWhereInput = {
    AND?: HistoryEntryWhereInput | HistoryEntryWhereInput[]
    OR?: HistoryEntryWhereInput[]
    NOT?: HistoryEntryWhereInput | HistoryEntryWhereInput[]
    id?: StringFilter<"HistoryEntry"> | string
    createdAt?: DateTimeFilter<"HistoryEntry"> | Date | string
    visible?: BoolFilter<"HistoryEntry"> | boolean
    userId?: StringNullableFilter<"HistoryEntry"> | string | null
    toyId?: StringFilter<"HistoryEntry"> | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    toy?: XOR<ToyScalarRelationFilter, ToyWhereInput>
  }

  export type HistoryEntryOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    visible?: SortOrder
    userId?: SortOrderInput | SortOrder
    toyId?: SortOrder
    user?: UserOrderByWithRelationInput
    toy?: ToyOrderByWithRelationInput
  }

  export type HistoryEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HistoryEntryWhereInput | HistoryEntryWhereInput[]
    OR?: HistoryEntryWhereInput[]
    NOT?: HistoryEntryWhereInput | HistoryEntryWhereInput[]
    createdAt?: DateTimeFilter<"HistoryEntry"> | Date | string
    visible?: BoolFilter<"HistoryEntry"> | boolean
    userId?: StringNullableFilter<"HistoryEntry"> | string | null
    toyId?: StringFilter<"HistoryEntry"> | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    toy?: XOR<ToyScalarRelationFilter, ToyWhereInput>
  }, "id">

  export type HistoryEntryOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    visible?: SortOrder
    userId?: SortOrderInput | SortOrder
    toyId?: SortOrder
    _count?: HistoryEntryCountOrderByAggregateInput
    _max?: HistoryEntryMaxOrderByAggregateInput
    _min?: HistoryEntryMinOrderByAggregateInput
  }

  export type HistoryEntryScalarWhereWithAggregatesInput = {
    AND?: HistoryEntryScalarWhereWithAggregatesInput | HistoryEntryScalarWhereWithAggregatesInput[]
    OR?: HistoryEntryScalarWhereWithAggregatesInput[]
    NOT?: HistoryEntryScalarWhereWithAggregatesInput | HistoryEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HistoryEntry"> | string
    createdAt?: DateTimeWithAggregatesFilter<"HistoryEntry"> | Date | string
    visible?: BoolWithAggregatesFilter<"HistoryEntry"> | boolean
    userId?: StringNullableWithAggregatesFilter<"HistoryEntry"> | string | null
    toyId?: StringWithAggregatesFilter<"HistoryEntry"> | string
  }

  export type RateWhereInput = {
    AND?: RateWhereInput | RateWhereInput[]
    OR?: RateWhereInput[]
    NOT?: RateWhereInput | RateWhereInput[]
    id?: StringFilter<"Rate"> | string
    createdAt?: DateTimeFilter<"Rate"> | Date | string
    value?: IntFilter<"Rate"> | number
    comment?: StringNullableFilter<"Rate"> | string | null
    userId?: StringFilter<"Rate"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RateOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    value?: SortOrder
    comment?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type RateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RateWhereInput | RateWhereInput[]
    OR?: RateWhereInput[]
    NOT?: RateWhereInput | RateWhereInput[]
    createdAt?: DateTimeFilter<"Rate"> | Date | string
    value?: IntFilter<"Rate"> | number
    comment?: StringNullableFilter<"Rate"> | string | null
    userId?: StringFilter<"Rate"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type RateOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    value?: SortOrder
    comment?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: RateCountOrderByAggregateInput
    _avg?: RateAvgOrderByAggregateInput
    _max?: RateMaxOrderByAggregateInput
    _min?: RateMinOrderByAggregateInput
    _sum?: RateSumOrderByAggregateInput
  }

  export type RateScalarWhereWithAggregatesInput = {
    AND?: RateScalarWhereWithAggregatesInput | RateScalarWhereWithAggregatesInput[]
    OR?: RateScalarWhereWithAggregatesInput[]
    NOT?: RateScalarWhereWithAggregatesInput | RateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Rate"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Rate"> | Date | string
    value?: IntWithAggregatesFilter<"Rate"> | number
    comment?: StringNullableWithAggregatesFilter<"Rate"> | string | null
    userId?: StringWithAggregatesFilter<"Rate"> | string
  }

  export type ChatWhereInput = {
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    id?: StringFilter<"Chat"> | string
    createdAt?: DateTimeFilter<"Chat"> | Date | string
    user1Id?: StringFilter<"Chat"> | string
    user2Id?: StringFilter<"Chat"> | string
    user1?: XOR<UserScalarRelationFilter, UserWhereInput>
    user2?: XOR<UserScalarRelationFilter, UserWhereInput>
    messages?: MessageListRelationFilter
  }

  export type ChatOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
    user1?: UserOrderByWithRelationInput
    user2?: UserOrderByWithRelationInput
    messages?: MessageOrderByRelationAggregateInput
  }

  export type ChatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    createdAt?: DateTimeFilter<"Chat"> | Date | string
    user1Id?: StringFilter<"Chat"> | string
    user2Id?: StringFilter<"Chat"> | string
    user1?: XOR<UserScalarRelationFilter, UserWhereInput>
    user2?: XOR<UserScalarRelationFilter, UserWhereInput>
    messages?: MessageListRelationFilter
  }, "id">

  export type ChatOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
    _count?: ChatCountOrderByAggregateInput
    _max?: ChatMaxOrderByAggregateInput
    _min?: ChatMinOrderByAggregateInput
  }

  export type ChatScalarWhereWithAggregatesInput = {
    AND?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    OR?: ChatScalarWhereWithAggregatesInput[]
    NOT?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Chat"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Chat"> | Date | string
    user1Id?: StringWithAggregatesFilter<"Chat"> | string
    user2Id?: StringWithAggregatesFilter<"Chat"> | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    content?: StringFilter<"Message"> | string
    senderId?: StringFilter<"Message"> | string
    chatId?: StringFilter<"Message"> | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    content?: SortOrder
    senderId?: SortOrder
    chatId?: SortOrder
    sender?: UserOrderByWithRelationInput
    chat?: ChatOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    createdAt?: DateTimeFilter<"Message"> | Date | string
    content?: StringFilter<"Message"> | string
    senderId?: StringFilter<"Message"> | string
    chatId?: StringFilter<"Message"> | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    content?: SortOrder
    senderId?: SortOrder
    chatId?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Message"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    content?: StringWithAggregatesFilter<"Message"> | string
    senderId?: StringWithAggregatesFilter<"Message"> | string
    chatId?: StringWithAggregatesFilter<"Message"> | string
  }

  export type BenefitWhereInput = {
    AND?: BenefitWhereInput | BenefitWhereInput[]
    OR?: BenefitWhereInput[]
    NOT?: BenefitWhereInput | BenefitWhereInput[]
    id?: StringFilter<"Benefit"> | string
    createdAt?: DateTimeFilter<"Benefit"> | Date | string
    updatedAt?: DateTimeFilter<"Benefit"> | Date | string
    key?: StringFilter<"Benefit"> | string
    title?: StringFilter<"Benefit"> | string
    description?: StringNullableFilter<"Benefit"> | string | null
    durationDays?: IntNullableFilter<"Benefit"> | number | null
    active?: BoolFilter<"Benefit"> | boolean
    userBenefits?: UserBenefitListRelationFilter
  }

  export type BenefitOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    key?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    durationDays?: SortOrderInput | SortOrder
    active?: SortOrder
    userBenefits?: UserBenefitOrderByRelationAggregateInput
  }

  export type BenefitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: BenefitWhereInput | BenefitWhereInput[]
    OR?: BenefitWhereInput[]
    NOT?: BenefitWhereInput | BenefitWhereInput[]
    createdAt?: DateTimeFilter<"Benefit"> | Date | string
    updatedAt?: DateTimeFilter<"Benefit"> | Date | string
    title?: StringFilter<"Benefit"> | string
    description?: StringNullableFilter<"Benefit"> | string | null
    durationDays?: IntNullableFilter<"Benefit"> | number | null
    active?: BoolFilter<"Benefit"> | boolean
    userBenefits?: UserBenefitListRelationFilter
  }, "id" | "key">

  export type BenefitOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    key?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    durationDays?: SortOrderInput | SortOrder
    active?: SortOrder
    _count?: BenefitCountOrderByAggregateInput
    _avg?: BenefitAvgOrderByAggregateInput
    _max?: BenefitMaxOrderByAggregateInput
    _min?: BenefitMinOrderByAggregateInput
    _sum?: BenefitSumOrderByAggregateInput
  }

  export type BenefitScalarWhereWithAggregatesInput = {
    AND?: BenefitScalarWhereWithAggregatesInput | BenefitScalarWhereWithAggregatesInput[]
    OR?: BenefitScalarWhereWithAggregatesInput[]
    NOT?: BenefitScalarWhereWithAggregatesInput | BenefitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Benefit"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Benefit"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Benefit"> | Date | string
    key?: StringWithAggregatesFilter<"Benefit"> | string
    title?: StringWithAggregatesFilter<"Benefit"> | string
    description?: StringNullableWithAggregatesFilter<"Benefit"> | string | null
    durationDays?: IntNullableWithAggregatesFilter<"Benefit"> | number | null
    active?: BoolWithAggregatesFilter<"Benefit"> | boolean
  }

  export type UserBenefitWhereInput = {
    AND?: UserBenefitWhereInput | UserBenefitWhereInput[]
    OR?: UserBenefitWhereInput[]
    NOT?: UserBenefitWhereInput | UserBenefitWhereInput[]
    id?: StringFilter<"UserBenefit"> | string
    createdAt?: DateTimeFilter<"UserBenefit"> | Date | string
    userId?: StringFilter<"UserBenefit"> | string
    benefitId?: StringFilter<"UserBenefit"> | string
    startsAt?: DateTimeFilter<"UserBenefit"> | Date | string
    endsAt?: DateTimeNullableFilter<"UserBenefit"> | Date | string | null
    status?: EnumUserBenefitStatusFilter<"UserBenefit"> | $Enums.UserBenefitStatus
    source?: StringNullableFilter<"UserBenefit"> | string | null
    metadata?: JsonNullableFilter<"UserBenefit">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    benefit?: XOR<BenefitScalarRelationFilter, BenefitWhereInput>
  }

  export type UserBenefitOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    benefitId?: SortOrder
    startsAt?: SortOrder
    endsAt?: SortOrderInput | SortOrder
    status?: SortOrder
    source?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    benefit?: BenefitOrderByWithRelationInput
  }

  export type UserBenefitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserBenefitWhereInput | UserBenefitWhereInput[]
    OR?: UserBenefitWhereInput[]
    NOT?: UserBenefitWhereInput | UserBenefitWhereInput[]
    createdAt?: DateTimeFilter<"UserBenefit"> | Date | string
    userId?: StringFilter<"UserBenefit"> | string
    benefitId?: StringFilter<"UserBenefit"> | string
    startsAt?: DateTimeFilter<"UserBenefit"> | Date | string
    endsAt?: DateTimeNullableFilter<"UserBenefit"> | Date | string | null
    status?: EnumUserBenefitStatusFilter<"UserBenefit"> | $Enums.UserBenefitStatus
    source?: StringNullableFilter<"UserBenefit"> | string | null
    metadata?: JsonNullableFilter<"UserBenefit">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    benefit?: XOR<BenefitScalarRelationFilter, BenefitWhereInput>
  }, "id">

  export type UserBenefitOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    benefitId?: SortOrder
    startsAt?: SortOrder
    endsAt?: SortOrderInput | SortOrder
    status?: SortOrder
    source?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    _count?: UserBenefitCountOrderByAggregateInput
    _max?: UserBenefitMaxOrderByAggregateInput
    _min?: UserBenefitMinOrderByAggregateInput
  }

  export type UserBenefitScalarWhereWithAggregatesInput = {
    AND?: UserBenefitScalarWhereWithAggregatesInput | UserBenefitScalarWhereWithAggregatesInput[]
    OR?: UserBenefitScalarWhereWithAggregatesInput[]
    NOT?: UserBenefitScalarWhereWithAggregatesInput | UserBenefitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserBenefit"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserBenefit"> | Date | string
    userId?: StringWithAggregatesFilter<"UserBenefit"> | string
    benefitId?: StringWithAggregatesFilter<"UserBenefit"> | string
    startsAt?: DateTimeWithAggregatesFilter<"UserBenefit"> | Date | string
    endsAt?: DateTimeNullableWithAggregatesFilter<"UserBenefit"> | Date | string | null
    status?: EnumUserBenefitStatusWithAggregatesFilter<"UserBenefit"> | $Enums.UserBenefitStatus
    source?: StringNullableWithAggregatesFilter<"UserBenefit"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"UserBenefit">
  }

  export type UserCreateInput = {
    id?: string
    createdAt?: Date | string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    parentalControl?: boolean
    active?: boolean
    cpf?: string | null
    cnpj?: string | null
    pix_key?: string | null
    picture?: string | null
    addressDistrict: string
    addressStreet: string
    addressNumber: number
    addressDetail?: string | null
    addressCep: string
    toys?: ToyCreateNestedManyWithoutOwnerInput
    history?: HistoryEntryCreateNestedManyWithoutUserInput
    ratings?: RateCreateNestedManyWithoutUserInput
    organizationInfo?: organizationInfoCreateNestedOneWithoutOrganizationInput
    chatsAsUser1?: ChatCreateNestedManyWithoutUser1Input
    chatsAsUser2?: ChatCreateNestedManyWithoutUser2Input
    messages?: MessageCreateNestedManyWithoutSenderInput
    userBenefits?: UserBenefitCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    parentalControl?: boolean
    active?: boolean
    cpf?: string | null
    cnpj?: string | null
    pix_key?: string | null
    picture?: string | null
    addressDistrict: string
    addressStreet: string
    addressNumber: number
    addressDetail?: string | null
    addressCep: string
    toys?: ToyUncheckedCreateNestedManyWithoutOwnerInput
    history?: HistoryEntryUncheckedCreateNestedManyWithoutUserInput
    ratings?: RateUncheckedCreateNestedManyWithoutUserInput
    organizationInfo?: organizationInfoUncheckedCreateNestedOneWithoutOrganizationInput
    chatsAsUser1?: ChatUncheckedCreateNestedManyWithoutUser1Input
    chatsAsUser2?: ChatUncheckedCreateNestedManyWithoutUser2Input
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    userBenefits?: UserBenefitUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    parentalControl?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    pix_key?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    addressDistrict?: StringFieldUpdateOperationsInput | string
    addressStreet?: StringFieldUpdateOperationsInput | string
    addressNumber?: IntFieldUpdateOperationsInput | number
    addressDetail?: NullableStringFieldUpdateOperationsInput | string | null
    addressCep?: StringFieldUpdateOperationsInput | string
    toys?: ToyUpdateManyWithoutOwnerNestedInput
    history?: HistoryEntryUpdateManyWithoutUserNestedInput
    ratings?: RateUpdateManyWithoutUserNestedInput
    organizationInfo?: organizationInfoUpdateOneWithoutOrganizationNestedInput
    chatsAsUser1?: ChatUpdateManyWithoutUser1NestedInput
    chatsAsUser2?: ChatUpdateManyWithoutUser2NestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    userBenefits?: UserBenefitUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    parentalControl?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    pix_key?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    addressDistrict?: StringFieldUpdateOperationsInput | string
    addressStreet?: StringFieldUpdateOperationsInput | string
    addressNumber?: IntFieldUpdateOperationsInput | number
    addressDetail?: NullableStringFieldUpdateOperationsInput | string | null
    addressCep?: StringFieldUpdateOperationsInput | string
    toys?: ToyUncheckedUpdateManyWithoutOwnerNestedInput
    history?: HistoryEntryUncheckedUpdateManyWithoutUserNestedInput
    ratings?: RateUncheckedUpdateManyWithoutUserNestedInput
    organizationInfo?: organizationInfoUncheckedUpdateOneWithoutOrganizationNestedInput
    chatsAsUser1?: ChatUncheckedUpdateManyWithoutUser1NestedInput
    chatsAsUser2?: ChatUncheckedUpdateManyWithoutUser2NestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    userBenefits?: UserBenefitUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    createdAt?: Date | string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    parentalControl?: boolean
    active?: boolean
    cpf?: string | null
    cnpj?: string | null
    pix_key?: string | null
    picture?: string | null
    addressDistrict: string
    addressStreet: string
    addressNumber: number
    addressDetail?: string | null
    addressCep: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    parentalControl?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    pix_key?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    addressDistrict?: StringFieldUpdateOperationsInput | string
    addressStreet?: StringFieldUpdateOperationsInput | string
    addressNumber?: IntFieldUpdateOperationsInput | number
    addressDetail?: NullableStringFieldUpdateOperationsInput | string | null
    addressCep?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    parentalControl?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    pix_key?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    addressDistrict?: StringFieldUpdateOperationsInput | string
    addressStreet?: StringFieldUpdateOperationsInput | string
    addressNumber?: IntFieldUpdateOperationsInput | number
    addressDetail?: NullableStringFieldUpdateOperationsInput | string | null
    addressCep?: StringFieldUpdateOperationsInput | string
  }

  export type organizationInfoCreateInput = {
    id?: string
    description: string
    phone_number1: number
    phone_number2?: number | null
    organization: UserCreateNestedOneWithoutOrganizationInfoInput
  }

  export type organizationInfoUncheckedCreateInput = {
    id?: string
    organizationId: string
    description: string
    phone_number1: number
    phone_number2?: number | null
  }

  export type organizationInfoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    phone_number1?: IntFieldUpdateOperationsInput | number
    phone_number2?: NullableIntFieldUpdateOperationsInput | number | null
    organization?: UserUpdateOneRequiredWithoutOrganizationInfoNestedInput
  }

  export type organizationInfoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    phone_number1?: IntFieldUpdateOperationsInput | number
    phone_number2?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type organizationInfoCreateManyInput = {
    id?: string
    organizationId: string
    description: string
    phone_number1: number
    phone_number2?: number | null
  }

  export type organizationInfoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    phone_number1?: IntFieldUpdateOperationsInput | number
    phone_number2?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type organizationInfoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    phone_number1?: IntFieldUpdateOperationsInput | number
    phone_number2?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ToyCreateInput = {
    id?: string
    createdAt?: Date | string
    name: string
    description: string
    price: number
    isNew: boolean
    canTrade: boolean
    canLend: boolean
    usageTime: number
    preservation: number
    type?: ToyCreatetypeInput | $Enums.ToyType[]
    ageGroup: $Enums.AgeRange
    owner: UserCreateNestedOneWithoutToysInput
    history?: HistoryEntryCreateNestedManyWithoutToyInput
    ToyPictures?: ToyPictureCreateNestedManyWithoutToyInput
  }

  export type ToyUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    name: string
    description: string
    ownerId: string
    price: number
    isNew: boolean
    canTrade: boolean
    canLend: boolean
    usageTime: number
    preservation: number
    type?: ToyCreatetypeInput | $Enums.ToyType[]
    ageGroup: $Enums.AgeRange
    history?: HistoryEntryUncheckedCreateNestedManyWithoutToyInput
    ToyPictures?: ToyPictureUncheckedCreateNestedManyWithoutToyInput
  }

  export type ToyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isNew?: BoolFieldUpdateOperationsInput | boolean
    canTrade?: BoolFieldUpdateOperationsInput | boolean
    canLend?: BoolFieldUpdateOperationsInput | boolean
    usageTime?: IntFieldUpdateOperationsInput | number
    preservation?: IntFieldUpdateOperationsInput | number
    type?: ToyUpdatetypeInput | $Enums.ToyType[]
    ageGroup?: EnumAgeRangeFieldUpdateOperationsInput | $Enums.AgeRange
    owner?: UserUpdateOneRequiredWithoutToysNestedInput
    history?: HistoryEntryUpdateManyWithoutToyNestedInput
    ToyPictures?: ToyPictureUpdateManyWithoutToyNestedInput
  }

  export type ToyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isNew?: BoolFieldUpdateOperationsInput | boolean
    canTrade?: BoolFieldUpdateOperationsInput | boolean
    canLend?: BoolFieldUpdateOperationsInput | boolean
    usageTime?: IntFieldUpdateOperationsInput | number
    preservation?: IntFieldUpdateOperationsInput | number
    type?: ToyUpdatetypeInput | $Enums.ToyType[]
    ageGroup?: EnumAgeRangeFieldUpdateOperationsInput | $Enums.AgeRange
    history?: HistoryEntryUncheckedUpdateManyWithoutToyNestedInput
    ToyPictures?: ToyPictureUncheckedUpdateManyWithoutToyNestedInput
  }

  export type ToyCreateManyInput = {
    id?: string
    createdAt?: Date | string
    name: string
    description: string
    ownerId: string
    price: number
    isNew: boolean
    canTrade: boolean
    canLend: boolean
    usageTime: number
    preservation: number
    type?: ToyCreatetypeInput | $Enums.ToyType[]
    ageGroup: $Enums.AgeRange
  }

  export type ToyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isNew?: BoolFieldUpdateOperationsInput | boolean
    canTrade?: BoolFieldUpdateOperationsInput | boolean
    canLend?: BoolFieldUpdateOperationsInput | boolean
    usageTime?: IntFieldUpdateOperationsInput | number
    preservation?: IntFieldUpdateOperationsInput | number
    type?: ToyUpdatetypeInput | $Enums.ToyType[]
    ageGroup?: EnumAgeRangeFieldUpdateOperationsInput | $Enums.AgeRange
  }

  export type ToyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isNew?: BoolFieldUpdateOperationsInput | boolean
    canTrade?: BoolFieldUpdateOperationsInput | boolean
    canLend?: BoolFieldUpdateOperationsInput | boolean
    usageTime?: IntFieldUpdateOperationsInput | number
    preservation?: IntFieldUpdateOperationsInput | number
    type?: ToyUpdatetypeInput | $Enums.ToyType[]
    ageGroup?: EnumAgeRangeFieldUpdateOperationsInput | $Enums.AgeRange
  }

  export type ToyPictureCreateInput = {
    id?: string
    order: number
    picture: string
    toy: ToyCreateNestedOneWithoutToyPicturesInput
  }

  export type ToyPictureUncheckedCreateInput = {
    id?: string
    order: number
    toyId: string
    picture: string
  }

  export type ToyPictureUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    picture?: StringFieldUpdateOperationsInput | string
    toy?: ToyUpdateOneRequiredWithoutToyPicturesNestedInput
  }

  export type ToyPictureUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    toyId?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
  }

  export type ToyPictureCreateManyInput = {
    id?: string
    order: number
    toyId: string
    picture: string
  }

  export type ToyPictureUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    picture?: StringFieldUpdateOperationsInput | string
  }

  export type ToyPictureUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    toyId?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
  }

  export type HistoryEntryCreateInput = {
    id?: string
    createdAt?: Date | string
    visible?: boolean
    user?: UserCreateNestedOneWithoutHistoryInput
    toy: ToyCreateNestedOneWithoutHistoryInput
  }

  export type HistoryEntryUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    visible?: boolean
    userId?: string | null
    toyId: string
  }

  export type HistoryEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    visible?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneWithoutHistoryNestedInput
    toy?: ToyUpdateOneRequiredWithoutHistoryNestedInput
  }

  export type HistoryEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    visible?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    toyId?: StringFieldUpdateOperationsInput | string
  }

  export type HistoryEntryCreateManyInput = {
    id?: string
    createdAt?: Date | string
    visible?: boolean
    userId?: string | null
    toyId: string
  }

  export type HistoryEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    visible?: BoolFieldUpdateOperationsInput | boolean
  }

  export type HistoryEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    visible?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    toyId?: StringFieldUpdateOperationsInput | string
  }

  export type RateCreateInput = {
    id?: string
    createdAt?: Date | string
    value: number
    comment?: string | null
    user: UserCreateNestedOneWithoutRatingsInput
  }

  export type RateUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    value: number
    comment?: string | null
    userId: string
  }

  export type RateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutRatingsNestedInput
  }

  export type RateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type RateCreateManyInput = {
    id?: string
    createdAt?: Date | string
    value: number
    comment?: string | null
    userId: string
  }

  export type RateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ChatCreateInput = {
    id?: string
    createdAt?: Date | string
    user1: UserCreateNestedOneWithoutChatsAsUser1Input
    user2: UserCreateNestedOneWithoutChatsAsUser2Input
    messages?: MessageCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    user1Id: string
    user2Id: string
    messages?: MessageUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user1?: UserUpdateOneRequiredWithoutChatsAsUser1NestedInput
    user2?: UserUpdateOneRequiredWithoutChatsAsUser2NestedInput
    messages?: MessageUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user1Id?: StringFieldUpdateOperationsInput | string
    user2Id?: StringFieldUpdateOperationsInput | string
    messages?: MessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatCreateManyInput = {
    id?: string
    createdAt?: Date | string
    user1Id: string
    user2Id: string
  }

  export type ChatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user1Id?: StringFieldUpdateOperationsInput | string
    user2Id?: StringFieldUpdateOperationsInput | string
  }

  export type MessageCreateInput = {
    id?: string
    createdAt?: Date | string
    content: string
    sender: UserCreateNestedOneWithoutMessagesInput
    chat: ChatCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    content: string
    senderId: string
    chatId: string
  }

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    sender?: UserUpdateOneRequiredWithoutMessagesNestedInput
    chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageCreateManyInput = {
    id?: string
    createdAt?: Date | string
    content: string
    senderId: string
    chatId: string
  }

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
  }

  export type BenefitCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    key: string
    title: string
    description?: string | null
    durationDays?: number | null
    active?: boolean
    userBenefits?: UserBenefitCreateNestedManyWithoutBenefitInput
  }

  export type BenefitUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    key: string
    title: string
    description?: string | null
    durationDays?: number | null
    active?: boolean
    userBenefits?: UserBenefitUncheckedCreateNestedManyWithoutBenefitInput
  }

  export type BenefitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    key?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    durationDays?: NullableIntFieldUpdateOperationsInput | number | null
    active?: BoolFieldUpdateOperationsInput | boolean
    userBenefits?: UserBenefitUpdateManyWithoutBenefitNestedInput
  }

  export type BenefitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    key?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    durationDays?: NullableIntFieldUpdateOperationsInput | number | null
    active?: BoolFieldUpdateOperationsInput | boolean
    userBenefits?: UserBenefitUncheckedUpdateManyWithoutBenefitNestedInput
  }

  export type BenefitCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    key: string
    title: string
    description?: string | null
    durationDays?: number | null
    active?: boolean
  }

  export type BenefitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    key?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    durationDays?: NullableIntFieldUpdateOperationsInput | number | null
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BenefitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    key?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    durationDays?: NullableIntFieldUpdateOperationsInput | number | null
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserBenefitCreateInput = {
    id?: string
    createdAt?: Date | string
    startsAt: Date | string
    endsAt?: Date | string | null
    status?: $Enums.UserBenefitStatus
    source?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutUserBenefitsInput
    benefit: BenefitCreateNestedOneWithoutUserBenefitsInput
  }

  export type UserBenefitUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    userId: string
    benefitId: string
    startsAt: Date | string
    endsAt?: Date | string | null
    status?: $Enums.UserBenefitStatus
    source?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserBenefitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumUserBenefitStatusFieldUpdateOperationsInput | $Enums.UserBenefitStatus
    source?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutUserBenefitsNestedInput
    benefit?: BenefitUpdateOneRequiredWithoutUserBenefitsNestedInput
  }

  export type UserBenefitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    benefitId?: StringFieldUpdateOperationsInput | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumUserBenefitStatusFieldUpdateOperationsInput | $Enums.UserBenefitStatus
    source?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserBenefitCreateManyInput = {
    id?: string
    createdAt?: Date | string
    userId: string
    benefitId: string
    startsAt: Date | string
    endsAt?: Date | string | null
    status?: $Enums.UserBenefitStatus
    source?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserBenefitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumUserBenefitStatusFieldUpdateOperationsInput | $Enums.UserBenefitStatus
    source?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserBenefitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    benefitId?: StringFieldUpdateOperationsInput | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumUserBenefitStatusFieldUpdateOperationsInput | $Enums.UserBenefitStatus
    source?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ToyListRelationFilter = {
    every?: ToyWhereInput
    some?: ToyWhereInput
    none?: ToyWhereInput
  }

  export type HistoryEntryListRelationFilter = {
    every?: HistoryEntryWhereInput
    some?: HistoryEntryWhereInput
    none?: HistoryEntryWhereInput
  }

  export type RateListRelationFilter = {
    every?: RateWhereInput
    some?: RateWhereInput
    none?: RateWhereInput
  }

  export type OrganizationInfoNullableScalarRelationFilter = {
    is?: organizationInfoWhereInput | null
    isNot?: organizationInfoWhereInput | null
  }

  export type ChatListRelationFilter = {
    every?: ChatWhereInput
    some?: ChatWhereInput
    none?: ChatWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type UserBenefitListRelationFilter = {
    every?: UserBenefitWhereInput
    some?: UserBenefitWhereInput
    none?: UserBenefitWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ToyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HistoryEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserBenefitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    parentalControl?: SortOrder
    active?: SortOrder
    cpf?: SortOrder
    cnpj?: SortOrder
    pix_key?: SortOrder
    picture?: SortOrder
    addressDistrict?: SortOrder
    addressStreet?: SortOrder
    addressNumber?: SortOrder
    addressDetail?: SortOrder
    addressCep?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    addressNumber?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    parentalControl?: SortOrder
    active?: SortOrder
    cpf?: SortOrder
    cnpj?: SortOrder
    pix_key?: SortOrder
    picture?: SortOrder
    addressDistrict?: SortOrder
    addressStreet?: SortOrder
    addressNumber?: SortOrder
    addressDetail?: SortOrder
    addressCep?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    parentalControl?: SortOrder
    active?: SortOrder
    cpf?: SortOrder
    cnpj?: SortOrder
    pix_key?: SortOrder
    picture?: SortOrder
    addressDistrict?: SortOrder
    addressStreet?: SortOrder
    addressNumber?: SortOrder
    addressDetail?: SortOrder
    addressCep?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    addressNumber?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type organizationInfoCountOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    description?: SortOrder
    phone_number1?: SortOrder
    phone_number2?: SortOrder
  }

  export type organizationInfoAvgOrderByAggregateInput = {
    phone_number1?: SortOrder
    phone_number2?: SortOrder
  }

  export type organizationInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    description?: SortOrder
    phone_number1?: SortOrder
    phone_number2?: SortOrder
  }

  export type organizationInfoMinOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    description?: SortOrder
    phone_number1?: SortOrder
    phone_number2?: SortOrder
  }

  export type organizationInfoSumOrderByAggregateInput = {
    phone_number1?: SortOrder
    phone_number2?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumToyTypeNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.ToyType[] | ListEnumToyTypeFieldRefInput<$PrismaModel> | null
    has?: $Enums.ToyType | EnumToyTypeFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.ToyType[] | ListEnumToyTypeFieldRefInput<$PrismaModel>
    hasSome?: $Enums.ToyType[] | ListEnumToyTypeFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumAgeRangeFilter<$PrismaModel = never> = {
    equals?: $Enums.AgeRange | EnumAgeRangeFieldRefInput<$PrismaModel>
    in?: $Enums.AgeRange[] | ListEnumAgeRangeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AgeRange[] | ListEnumAgeRangeFieldRefInput<$PrismaModel>
    not?: NestedEnumAgeRangeFilter<$PrismaModel> | $Enums.AgeRange
  }

  export type ToyPictureListRelationFilter = {
    every?: ToyPictureWhereInput
    some?: ToyPictureWhereInput
    none?: ToyPictureWhereInput
  }

  export type ToyPictureOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ToyCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    ownerId?: SortOrder
    price?: SortOrder
    isNew?: SortOrder
    canTrade?: SortOrder
    canLend?: SortOrder
    usageTime?: SortOrder
    preservation?: SortOrder
    type?: SortOrder
    ageGroup?: SortOrder
  }

  export type ToyAvgOrderByAggregateInput = {
    price?: SortOrder
    usageTime?: SortOrder
    preservation?: SortOrder
  }

  export type ToyMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    ownerId?: SortOrder
    price?: SortOrder
    isNew?: SortOrder
    canTrade?: SortOrder
    canLend?: SortOrder
    usageTime?: SortOrder
    preservation?: SortOrder
    ageGroup?: SortOrder
  }

  export type ToyMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    ownerId?: SortOrder
    price?: SortOrder
    isNew?: SortOrder
    canTrade?: SortOrder
    canLend?: SortOrder
    usageTime?: SortOrder
    preservation?: SortOrder
    ageGroup?: SortOrder
  }

  export type ToySumOrderByAggregateInput = {
    price?: SortOrder
    usageTime?: SortOrder
    preservation?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumAgeRangeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AgeRange | EnumAgeRangeFieldRefInput<$PrismaModel>
    in?: $Enums.AgeRange[] | ListEnumAgeRangeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AgeRange[] | ListEnumAgeRangeFieldRefInput<$PrismaModel>
    not?: NestedEnumAgeRangeWithAggregatesFilter<$PrismaModel> | $Enums.AgeRange
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAgeRangeFilter<$PrismaModel>
    _max?: NestedEnumAgeRangeFilter<$PrismaModel>
  }

  export type ToyScalarRelationFilter = {
    is?: ToyWhereInput
    isNot?: ToyWhereInput
  }

  export type ToyPictureCountOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    toyId?: SortOrder
    picture?: SortOrder
  }

  export type ToyPictureAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type ToyPictureMaxOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    toyId?: SortOrder
    picture?: SortOrder
  }

  export type ToyPictureMinOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    toyId?: SortOrder
    picture?: SortOrder
  }

  export type ToyPictureSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type HistoryEntryCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    visible?: SortOrder
    userId?: SortOrder
    toyId?: SortOrder
  }

  export type HistoryEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    visible?: SortOrder
    userId?: SortOrder
    toyId?: SortOrder
  }

  export type HistoryEntryMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    visible?: SortOrder
    userId?: SortOrder
    toyId?: SortOrder
  }

  export type RateCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    value?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
  }

  export type RateAvgOrderByAggregateInput = {
    value?: SortOrder
  }

  export type RateMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    value?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
  }

  export type RateMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    value?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
  }

  export type RateSumOrderByAggregateInput = {
    value?: SortOrder
  }

  export type ChatCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
  }

  export type ChatMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
  }

  export type ChatMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
  }

  export type ChatScalarRelationFilter = {
    is?: ChatWhereInput
    isNot?: ChatWhereInput
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    content?: SortOrder
    senderId?: SortOrder
    chatId?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    content?: SortOrder
    senderId?: SortOrder
    chatId?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    content?: SortOrder
    senderId?: SortOrder
    chatId?: SortOrder
  }

  export type BenefitCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    key?: SortOrder
    title?: SortOrder
    description?: SortOrder
    durationDays?: SortOrder
    active?: SortOrder
  }

  export type BenefitAvgOrderByAggregateInput = {
    durationDays?: SortOrder
  }

  export type BenefitMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    key?: SortOrder
    title?: SortOrder
    description?: SortOrder
    durationDays?: SortOrder
    active?: SortOrder
  }

  export type BenefitMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    key?: SortOrder
    title?: SortOrder
    description?: SortOrder
    durationDays?: SortOrder
    active?: SortOrder
  }

  export type BenefitSumOrderByAggregateInput = {
    durationDays?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumUserBenefitStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserBenefitStatus | EnumUserBenefitStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserBenefitStatus[] | ListEnumUserBenefitStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserBenefitStatus[] | ListEnumUserBenefitStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserBenefitStatusFilter<$PrismaModel> | $Enums.UserBenefitStatus
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BenefitScalarRelationFilter = {
    is?: BenefitWhereInput
    isNot?: BenefitWhereInput
  }

  export type UserBenefitCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    benefitId?: SortOrder
    startsAt?: SortOrder
    endsAt?: SortOrder
    status?: SortOrder
    source?: SortOrder
    metadata?: SortOrder
  }

  export type UserBenefitMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    benefitId?: SortOrder
    startsAt?: SortOrder
    endsAt?: SortOrder
    status?: SortOrder
    source?: SortOrder
  }

  export type UserBenefitMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    benefitId?: SortOrder
    startsAt?: SortOrder
    endsAt?: SortOrder
    status?: SortOrder
    source?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumUserBenefitStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserBenefitStatus | EnumUserBenefitStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserBenefitStatus[] | ListEnumUserBenefitStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserBenefitStatus[] | ListEnumUserBenefitStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserBenefitStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserBenefitStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserBenefitStatusFilter<$PrismaModel>
    _max?: NestedEnumUserBenefitStatusFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type ToyCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ToyCreateWithoutOwnerInput, ToyUncheckedCreateWithoutOwnerInput> | ToyCreateWithoutOwnerInput[] | ToyUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ToyCreateOrConnectWithoutOwnerInput | ToyCreateOrConnectWithoutOwnerInput[]
    createMany?: ToyCreateManyOwnerInputEnvelope
    connect?: ToyWhereUniqueInput | ToyWhereUniqueInput[]
  }

  export type HistoryEntryCreateNestedManyWithoutUserInput = {
    create?: XOR<HistoryEntryCreateWithoutUserInput, HistoryEntryUncheckedCreateWithoutUserInput> | HistoryEntryCreateWithoutUserInput[] | HistoryEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HistoryEntryCreateOrConnectWithoutUserInput | HistoryEntryCreateOrConnectWithoutUserInput[]
    createMany?: HistoryEntryCreateManyUserInputEnvelope
    connect?: HistoryEntryWhereUniqueInput | HistoryEntryWhereUniqueInput[]
  }

  export type RateCreateNestedManyWithoutUserInput = {
    create?: XOR<RateCreateWithoutUserInput, RateUncheckedCreateWithoutUserInput> | RateCreateWithoutUserInput[] | RateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RateCreateOrConnectWithoutUserInput | RateCreateOrConnectWithoutUserInput[]
    createMany?: RateCreateManyUserInputEnvelope
    connect?: RateWhereUniqueInput | RateWhereUniqueInput[]
  }

  export type organizationInfoCreateNestedOneWithoutOrganizationInput = {
    create?: XOR<organizationInfoCreateWithoutOrganizationInput, organizationInfoUncheckedCreateWithoutOrganizationInput>
    connectOrCreate?: organizationInfoCreateOrConnectWithoutOrganizationInput
    connect?: organizationInfoWhereUniqueInput
  }

  export type ChatCreateNestedManyWithoutUser1Input = {
    create?: XOR<ChatCreateWithoutUser1Input, ChatUncheckedCreateWithoutUser1Input> | ChatCreateWithoutUser1Input[] | ChatUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: ChatCreateOrConnectWithoutUser1Input | ChatCreateOrConnectWithoutUser1Input[]
    createMany?: ChatCreateManyUser1InputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type ChatCreateNestedManyWithoutUser2Input = {
    create?: XOR<ChatCreateWithoutUser2Input, ChatUncheckedCreateWithoutUser2Input> | ChatCreateWithoutUser2Input[] | ChatUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: ChatCreateOrConnectWithoutUser2Input | ChatCreateOrConnectWithoutUser2Input[]
    createMany?: ChatCreateManyUser2InputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type UserBenefitCreateNestedManyWithoutUserInput = {
    create?: XOR<UserBenefitCreateWithoutUserInput, UserBenefitUncheckedCreateWithoutUserInput> | UserBenefitCreateWithoutUserInput[] | UserBenefitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBenefitCreateOrConnectWithoutUserInput | UserBenefitCreateOrConnectWithoutUserInput[]
    createMany?: UserBenefitCreateManyUserInputEnvelope
    connect?: UserBenefitWhereUniqueInput | UserBenefitWhereUniqueInput[]
  }

  export type ToyUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ToyCreateWithoutOwnerInput, ToyUncheckedCreateWithoutOwnerInput> | ToyCreateWithoutOwnerInput[] | ToyUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ToyCreateOrConnectWithoutOwnerInput | ToyCreateOrConnectWithoutOwnerInput[]
    createMany?: ToyCreateManyOwnerInputEnvelope
    connect?: ToyWhereUniqueInput | ToyWhereUniqueInput[]
  }

  export type HistoryEntryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<HistoryEntryCreateWithoutUserInput, HistoryEntryUncheckedCreateWithoutUserInput> | HistoryEntryCreateWithoutUserInput[] | HistoryEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HistoryEntryCreateOrConnectWithoutUserInput | HistoryEntryCreateOrConnectWithoutUserInput[]
    createMany?: HistoryEntryCreateManyUserInputEnvelope
    connect?: HistoryEntryWhereUniqueInput | HistoryEntryWhereUniqueInput[]
  }

  export type RateUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RateCreateWithoutUserInput, RateUncheckedCreateWithoutUserInput> | RateCreateWithoutUserInput[] | RateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RateCreateOrConnectWithoutUserInput | RateCreateOrConnectWithoutUserInput[]
    createMany?: RateCreateManyUserInputEnvelope
    connect?: RateWhereUniqueInput | RateWhereUniqueInput[]
  }

  export type organizationInfoUncheckedCreateNestedOneWithoutOrganizationInput = {
    create?: XOR<organizationInfoCreateWithoutOrganizationInput, organizationInfoUncheckedCreateWithoutOrganizationInput>
    connectOrCreate?: organizationInfoCreateOrConnectWithoutOrganizationInput
    connect?: organizationInfoWhereUniqueInput
  }

  export type ChatUncheckedCreateNestedManyWithoutUser1Input = {
    create?: XOR<ChatCreateWithoutUser1Input, ChatUncheckedCreateWithoutUser1Input> | ChatCreateWithoutUser1Input[] | ChatUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: ChatCreateOrConnectWithoutUser1Input | ChatCreateOrConnectWithoutUser1Input[]
    createMany?: ChatCreateManyUser1InputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type ChatUncheckedCreateNestedManyWithoutUser2Input = {
    create?: XOR<ChatCreateWithoutUser2Input, ChatUncheckedCreateWithoutUser2Input> | ChatCreateWithoutUser2Input[] | ChatUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: ChatCreateOrConnectWithoutUser2Input | ChatCreateOrConnectWithoutUser2Input[]
    createMany?: ChatCreateManyUser2InputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type UserBenefitUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserBenefitCreateWithoutUserInput, UserBenefitUncheckedCreateWithoutUserInput> | UserBenefitCreateWithoutUserInput[] | UserBenefitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBenefitCreateOrConnectWithoutUserInput | UserBenefitCreateOrConnectWithoutUserInput[]
    createMany?: UserBenefitCreateManyUserInputEnvelope
    connect?: UserBenefitWhereUniqueInput | UserBenefitWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ToyUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ToyCreateWithoutOwnerInput, ToyUncheckedCreateWithoutOwnerInput> | ToyCreateWithoutOwnerInput[] | ToyUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ToyCreateOrConnectWithoutOwnerInput | ToyCreateOrConnectWithoutOwnerInput[]
    upsert?: ToyUpsertWithWhereUniqueWithoutOwnerInput | ToyUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ToyCreateManyOwnerInputEnvelope
    set?: ToyWhereUniqueInput | ToyWhereUniqueInput[]
    disconnect?: ToyWhereUniqueInput | ToyWhereUniqueInput[]
    delete?: ToyWhereUniqueInput | ToyWhereUniqueInput[]
    connect?: ToyWhereUniqueInput | ToyWhereUniqueInput[]
    update?: ToyUpdateWithWhereUniqueWithoutOwnerInput | ToyUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ToyUpdateManyWithWhereWithoutOwnerInput | ToyUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ToyScalarWhereInput | ToyScalarWhereInput[]
  }

  export type HistoryEntryUpdateManyWithoutUserNestedInput = {
    create?: XOR<HistoryEntryCreateWithoutUserInput, HistoryEntryUncheckedCreateWithoutUserInput> | HistoryEntryCreateWithoutUserInput[] | HistoryEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HistoryEntryCreateOrConnectWithoutUserInput | HistoryEntryCreateOrConnectWithoutUserInput[]
    upsert?: HistoryEntryUpsertWithWhereUniqueWithoutUserInput | HistoryEntryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HistoryEntryCreateManyUserInputEnvelope
    set?: HistoryEntryWhereUniqueInput | HistoryEntryWhereUniqueInput[]
    disconnect?: HistoryEntryWhereUniqueInput | HistoryEntryWhereUniqueInput[]
    delete?: HistoryEntryWhereUniqueInput | HistoryEntryWhereUniqueInput[]
    connect?: HistoryEntryWhereUniqueInput | HistoryEntryWhereUniqueInput[]
    update?: HistoryEntryUpdateWithWhereUniqueWithoutUserInput | HistoryEntryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HistoryEntryUpdateManyWithWhereWithoutUserInput | HistoryEntryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HistoryEntryScalarWhereInput | HistoryEntryScalarWhereInput[]
  }

  export type RateUpdateManyWithoutUserNestedInput = {
    create?: XOR<RateCreateWithoutUserInput, RateUncheckedCreateWithoutUserInput> | RateCreateWithoutUserInput[] | RateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RateCreateOrConnectWithoutUserInput | RateCreateOrConnectWithoutUserInput[]
    upsert?: RateUpsertWithWhereUniqueWithoutUserInput | RateUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RateCreateManyUserInputEnvelope
    set?: RateWhereUniqueInput | RateWhereUniqueInput[]
    disconnect?: RateWhereUniqueInput | RateWhereUniqueInput[]
    delete?: RateWhereUniqueInput | RateWhereUniqueInput[]
    connect?: RateWhereUniqueInput | RateWhereUniqueInput[]
    update?: RateUpdateWithWhereUniqueWithoutUserInput | RateUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RateUpdateManyWithWhereWithoutUserInput | RateUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RateScalarWhereInput | RateScalarWhereInput[]
  }

  export type organizationInfoUpdateOneWithoutOrganizationNestedInput = {
    create?: XOR<organizationInfoCreateWithoutOrganizationInput, organizationInfoUncheckedCreateWithoutOrganizationInput>
    connectOrCreate?: organizationInfoCreateOrConnectWithoutOrganizationInput
    upsert?: organizationInfoUpsertWithoutOrganizationInput
    disconnect?: organizationInfoWhereInput | boolean
    delete?: organizationInfoWhereInput | boolean
    connect?: organizationInfoWhereUniqueInput
    update?: XOR<XOR<organizationInfoUpdateToOneWithWhereWithoutOrganizationInput, organizationInfoUpdateWithoutOrganizationInput>, organizationInfoUncheckedUpdateWithoutOrganizationInput>
  }

  export type ChatUpdateManyWithoutUser1NestedInput = {
    create?: XOR<ChatCreateWithoutUser1Input, ChatUncheckedCreateWithoutUser1Input> | ChatCreateWithoutUser1Input[] | ChatUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: ChatCreateOrConnectWithoutUser1Input | ChatCreateOrConnectWithoutUser1Input[]
    upsert?: ChatUpsertWithWhereUniqueWithoutUser1Input | ChatUpsertWithWhereUniqueWithoutUser1Input[]
    createMany?: ChatCreateManyUser1InputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutUser1Input | ChatUpdateWithWhereUniqueWithoutUser1Input[]
    updateMany?: ChatUpdateManyWithWhereWithoutUser1Input | ChatUpdateManyWithWhereWithoutUser1Input[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type ChatUpdateManyWithoutUser2NestedInput = {
    create?: XOR<ChatCreateWithoutUser2Input, ChatUncheckedCreateWithoutUser2Input> | ChatCreateWithoutUser2Input[] | ChatUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: ChatCreateOrConnectWithoutUser2Input | ChatCreateOrConnectWithoutUser2Input[]
    upsert?: ChatUpsertWithWhereUniqueWithoutUser2Input | ChatUpsertWithWhereUniqueWithoutUser2Input[]
    createMany?: ChatCreateManyUser2InputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutUser2Input | ChatUpdateWithWhereUniqueWithoutUser2Input[]
    updateMany?: ChatUpdateManyWithWhereWithoutUser2Input | ChatUpdateManyWithWhereWithoutUser2Input[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type UserBenefitUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserBenefitCreateWithoutUserInput, UserBenefitUncheckedCreateWithoutUserInput> | UserBenefitCreateWithoutUserInput[] | UserBenefitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBenefitCreateOrConnectWithoutUserInput | UserBenefitCreateOrConnectWithoutUserInput[]
    upsert?: UserBenefitUpsertWithWhereUniqueWithoutUserInput | UserBenefitUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserBenefitCreateManyUserInputEnvelope
    set?: UserBenefitWhereUniqueInput | UserBenefitWhereUniqueInput[]
    disconnect?: UserBenefitWhereUniqueInput | UserBenefitWhereUniqueInput[]
    delete?: UserBenefitWhereUniqueInput | UserBenefitWhereUniqueInput[]
    connect?: UserBenefitWhereUniqueInput | UserBenefitWhereUniqueInput[]
    update?: UserBenefitUpdateWithWhereUniqueWithoutUserInput | UserBenefitUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserBenefitUpdateManyWithWhereWithoutUserInput | UserBenefitUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserBenefitScalarWhereInput | UserBenefitScalarWhereInput[]
  }

  export type ToyUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ToyCreateWithoutOwnerInput, ToyUncheckedCreateWithoutOwnerInput> | ToyCreateWithoutOwnerInput[] | ToyUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ToyCreateOrConnectWithoutOwnerInput | ToyCreateOrConnectWithoutOwnerInput[]
    upsert?: ToyUpsertWithWhereUniqueWithoutOwnerInput | ToyUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ToyCreateManyOwnerInputEnvelope
    set?: ToyWhereUniqueInput | ToyWhereUniqueInput[]
    disconnect?: ToyWhereUniqueInput | ToyWhereUniqueInput[]
    delete?: ToyWhereUniqueInput | ToyWhereUniqueInput[]
    connect?: ToyWhereUniqueInput | ToyWhereUniqueInput[]
    update?: ToyUpdateWithWhereUniqueWithoutOwnerInput | ToyUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ToyUpdateManyWithWhereWithoutOwnerInput | ToyUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ToyScalarWhereInput | ToyScalarWhereInput[]
  }

  export type HistoryEntryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<HistoryEntryCreateWithoutUserInput, HistoryEntryUncheckedCreateWithoutUserInput> | HistoryEntryCreateWithoutUserInput[] | HistoryEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HistoryEntryCreateOrConnectWithoutUserInput | HistoryEntryCreateOrConnectWithoutUserInput[]
    upsert?: HistoryEntryUpsertWithWhereUniqueWithoutUserInput | HistoryEntryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HistoryEntryCreateManyUserInputEnvelope
    set?: HistoryEntryWhereUniqueInput | HistoryEntryWhereUniqueInput[]
    disconnect?: HistoryEntryWhereUniqueInput | HistoryEntryWhereUniqueInput[]
    delete?: HistoryEntryWhereUniqueInput | HistoryEntryWhereUniqueInput[]
    connect?: HistoryEntryWhereUniqueInput | HistoryEntryWhereUniqueInput[]
    update?: HistoryEntryUpdateWithWhereUniqueWithoutUserInput | HistoryEntryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HistoryEntryUpdateManyWithWhereWithoutUserInput | HistoryEntryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HistoryEntryScalarWhereInput | HistoryEntryScalarWhereInput[]
  }

  export type RateUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RateCreateWithoutUserInput, RateUncheckedCreateWithoutUserInput> | RateCreateWithoutUserInput[] | RateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RateCreateOrConnectWithoutUserInput | RateCreateOrConnectWithoutUserInput[]
    upsert?: RateUpsertWithWhereUniqueWithoutUserInput | RateUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RateCreateManyUserInputEnvelope
    set?: RateWhereUniqueInput | RateWhereUniqueInput[]
    disconnect?: RateWhereUniqueInput | RateWhereUniqueInput[]
    delete?: RateWhereUniqueInput | RateWhereUniqueInput[]
    connect?: RateWhereUniqueInput | RateWhereUniqueInput[]
    update?: RateUpdateWithWhereUniqueWithoutUserInput | RateUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RateUpdateManyWithWhereWithoutUserInput | RateUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RateScalarWhereInput | RateScalarWhereInput[]
  }

  export type organizationInfoUncheckedUpdateOneWithoutOrganizationNestedInput = {
    create?: XOR<organizationInfoCreateWithoutOrganizationInput, organizationInfoUncheckedCreateWithoutOrganizationInput>
    connectOrCreate?: organizationInfoCreateOrConnectWithoutOrganizationInput
    upsert?: organizationInfoUpsertWithoutOrganizationInput
    disconnect?: organizationInfoWhereInput | boolean
    delete?: organizationInfoWhereInput | boolean
    connect?: organizationInfoWhereUniqueInput
    update?: XOR<XOR<organizationInfoUpdateToOneWithWhereWithoutOrganizationInput, organizationInfoUpdateWithoutOrganizationInput>, organizationInfoUncheckedUpdateWithoutOrganizationInput>
  }

  export type ChatUncheckedUpdateManyWithoutUser1NestedInput = {
    create?: XOR<ChatCreateWithoutUser1Input, ChatUncheckedCreateWithoutUser1Input> | ChatCreateWithoutUser1Input[] | ChatUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: ChatCreateOrConnectWithoutUser1Input | ChatCreateOrConnectWithoutUser1Input[]
    upsert?: ChatUpsertWithWhereUniqueWithoutUser1Input | ChatUpsertWithWhereUniqueWithoutUser1Input[]
    createMany?: ChatCreateManyUser1InputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutUser1Input | ChatUpdateWithWhereUniqueWithoutUser1Input[]
    updateMany?: ChatUpdateManyWithWhereWithoutUser1Input | ChatUpdateManyWithWhereWithoutUser1Input[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type ChatUncheckedUpdateManyWithoutUser2NestedInput = {
    create?: XOR<ChatCreateWithoutUser2Input, ChatUncheckedCreateWithoutUser2Input> | ChatCreateWithoutUser2Input[] | ChatUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: ChatCreateOrConnectWithoutUser2Input | ChatCreateOrConnectWithoutUser2Input[]
    upsert?: ChatUpsertWithWhereUniqueWithoutUser2Input | ChatUpsertWithWhereUniqueWithoutUser2Input[]
    createMany?: ChatCreateManyUser2InputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutUser2Input | ChatUpdateWithWhereUniqueWithoutUser2Input[]
    updateMany?: ChatUpdateManyWithWhereWithoutUser2Input | ChatUpdateManyWithWhereWithoutUser2Input[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type UserBenefitUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserBenefitCreateWithoutUserInput, UserBenefitUncheckedCreateWithoutUserInput> | UserBenefitCreateWithoutUserInput[] | UserBenefitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBenefitCreateOrConnectWithoutUserInput | UserBenefitCreateOrConnectWithoutUserInput[]
    upsert?: UserBenefitUpsertWithWhereUniqueWithoutUserInput | UserBenefitUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserBenefitCreateManyUserInputEnvelope
    set?: UserBenefitWhereUniqueInput | UserBenefitWhereUniqueInput[]
    disconnect?: UserBenefitWhereUniqueInput | UserBenefitWhereUniqueInput[]
    delete?: UserBenefitWhereUniqueInput | UserBenefitWhereUniqueInput[]
    connect?: UserBenefitWhereUniqueInput | UserBenefitWhereUniqueInput[]
    update?: UserBenefitUpdateWithWhereUniqueWithoutUserInput | UserBenefitUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserBenefitUpdateManyWithWhereWithoutUserInput | UserBenefitUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserBenefitScalarWhereInput | UserBenefitScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOrganizationInfoInput = {
    create?: XOR<UserCreateWithoutOrganizationInfoInput, UserUncheckedCreateWithoutOrganizationInfoInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInfoInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutOrganizationInfoNestedInput = {
    create?: XOR<UserCreateWithoutOrganizationInfoInput, UserUncheckedCreateWithoutOrganizationInfoInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInfoInput
    upsert?: UserUpsertWithoutOrganizationInfoInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrganizationInfoInput, UserUpdateWithoutOrganizationInfoInput>, UserUncheckedUpdateWithoutOrganizationInfoInput>
  }

  export type ToyCreatetypeInput = {
    set: $Enums.ToyType[]
  }

  export type UserCreateNestedOneWithoutToysInput = {
    create?: XOR<UserCreateWithoutToysInput, UserUncheckedCreateWithoutToysInput>
    connectOrCreate?: UserCreateOrConnectWithoutToysInput
    connect?: UserWhereUniqueInput
  }

  export type HistoryEntryCreateNestedManyWithoutToyInput = {
    create?: XOR<HistoryEntryCreateWithoutToyInput, HistoryEntryUncheckedCreateWithoutToyInput> | HistoryEntryCreateWithoutToyInput[] | HistoryEntryUncheckedCreateWithoutToyInput[]
    connectOrCreate?: HistoryEntryCreateOrConnectWithoutToyInput | HistoryEntryCreateOrConnectWithoutToyInput[]
    createMany?: HistoryEntryCreateManyToyInputEnvelope
    connect?: HistoryEntryWhereUniqueInput | HistoryEntryWhereUniqueInput[]
  }

  export type ToyPictureCreateNestedManyWithoutToyInput = {
    create?: XOR<ToyPictureCreateWithoutToyInput, ToyPictureUncheckedCreateWithoutToyInput> | ToyPictureCreateWithoutToyInput[] | ToyPictureUncheckedCreateWithoutToyInput[]
    connectOrCreate?: ToyPictureCreateOrConnectWithoutToyInput | ToyPictureCreateOrConnectWithoutToyInput[]
    createMany?: ToyPictureCreateManyToyInputEnvelope
    connect?: ToyPictureWhereUniqueInput | ToyPictureWhereUniqueInput[]
  }

  export type HistoryEntryUncheckedCreateNestedManyWithoutToyInput = {
    create?: XOR<HistoryEntryCreateWithoutToyInput, HistoryEntryUncheckedCreateWithoutToyInput> | HistoryEntryCreateWithoutToyInput[] | HistoryEntryUncheckedCreateWithoutToyInput[]
    connectOrCreate?: HistoryEntryCreateOrConnectWithoutToyInput | HistoryEntryCreateOrConnectWithoutToyInput[]
    createMany?: HistoryEntryCreateManyToyInputEnvelope
    connect?: HistoryEntryWhereUniqueInput | HistoryEntryWhereUniqueInput[]
  }

  export type ToyPictureUncheckedCreateNestedManyWithoutToyInput = {
    create?: XOR<ToyPictureCreateWithoutToyInput, ToyPictureUncheckedCreateWithoutToyInput> | ToyPictureCreateWithoutToyInput[] | ToyPictureUncheckedCreateWithoutToyInput[]
    connectOrCreate?: ToyPictureCreateOrConnectWithoutToyInput | ToyPictureCreateOrConnectWithoutToyInput[]
    createMany?: ToyPictureCreateManyToyInputEnvelope
    connect?: ToyPictureWhereUniqueInput | ToyPictureWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ToyUpdatetypeInput = {
    set?: $Enums.ToyType[]
    push?: $Enums.ToyType | $Enums.ToyType[]
  }

  export type EnumAgeRangeFieldUpdateOperationsInput = {
    set?: $Enums.AgeRange
  }

  export type UserUpdateOneRequiredWithoutToysNestedInput = {
    create?: XOR<UserCreateWithoutToysInput, UserUncheckedCreateWithoutToysInput>
    connectOrCreate?: UserCreateOrConnectWithoutToysInput
    upsert?: UserUpsertWithoutToysInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutToysInput, UserUpdateWithoutToysInput>, UserUncheckedUpdateWithoutToysInput>
  }

  export type HistoryEntryUpdateManyWithoutToyNestedInput = {
    create?: XOR<HistoryEntryCreateWithoutToyInput, HistoryEntryUncheckedCreateWithoutToyInput> | HistoryEntryCreateWithoutToyInput[] | HistoryEntryUncheckedCreateWithoutToyInput[]
    connectOrCreate?: HistoryEntryCreateOrConnectWithoutToyInput | HistoryEntryCreateOrConnectWithoutToyInput[]
    upsert?: HistoryEntryUpsertWithWhereUniqueWithoutToyInput | HistoryEntryUpsertWithWhereUniqueWithoutToyInput[]
    createMany?: HistoryEntryCreateManyToyInputEnvelope
    set?: HistoryEntryWhereUniqueInput | HistoryEntryWhereUniqueInput[]
    disconnect?: HistoryEntryWhereUniqueInput | HistoryEntryWhereUniqueInput[]
    delete?: HistoryEntryWhereUniqueInput | HistoryEntryWhereUniqueInput[]
    connect?: HistoryEntryWhereUniqueInput | HistoryEntryWhereUniqueInput[]
    update?: HistoryEntryUpdateWithWhereUniqueWithoutToyInput | HistoryEntryUpdateWithWhereUniqueWithoutToyInput[]
    updateMany?: HistoryEntryUpdateManyWithWhereWithoutToyInput | HistoryEntryUpdateManyWithWhereWithoutToyInput[]
    deleteMany?: HistoryEntryScalarWhereInput | HistoryEntryScalarWhereInput[]
  }

  export type ToyPictureUpdateManyWithoutToyNestedInput = {
    create?: XOR<ToyPictureCreateWithoutToyInput, ToyPictureUncheckedCreateWithoutToyInput> | ToyPictureCreateWithoutToyInput[] | ToyPictureUncheckedCreateWithoutToyInput[]
    connectOrCreate?: ToyPictureCreateOrConnectWithoutToyInput | ToyPictureCreateOrConnectWithoutToyInput[]
    upsert?: ToyPictureUpsertWithWhereUniqueWithoutToyInput | ToyPictureUpsertWithWhereUniqueWithoutToyInput[]
    createMany?: ToyPictureCreateManyToyInputEnvelope
    set?: ToyPictureWhereUniqueInput | ToyPictureWhereUniqueInput[]
    disconnect?: ToyPictureWhereUniqueInput | ToyPictureWhereUniqueInput[]
    delete?: ToyPictureWhereUniqueInput | ToyPictureWhereUniqueInput[]
    connect?: ToyPictureWhereUniqueInput | ToyPictureWhereUniqueInput[]
    update?: ToyPictureUpdateWithWhereUniqueWithoutToyInput | ToyPictureUpdateWithWhereUniqueWithoutToyInput[]
    updateMany?: ToyPictureUpdateManyWithWhereWithoutToyInput | ToyPictureUpdateManyWithWhereWithoutToyInput[]
    deleteMany?: ToyPictureScalarWhereInput | ToyPictureScalarWhereInput[]
  }

  export type HistoryEntryUncheckedUpdateManyWithoutToyNestedInput = {
    create?: XOR<HistoryEntryCreateWithoutToyInput, HistoryEntryUncheckedCreateWithoutToyInput> | HistoryEntryCreateWithoutToyInput[] | HistoryEntryUncheckedCreateWithoutToyInput[]
    connectOrCreate?: HistoryEntryCreateOrConnectWithoutToyInput | HistoryEntryCreateOrConnectWithoutToyInput[]
    upsert?: HistoryEntryUpsertWithWhereUniqueWithoutToyInput | HistoryEntryUpsertWithWhereUniqueWithoutToyInput[]
    createMany?: HistoryEntryCreateManyToyInputEnvelope
    set?: HistoryEntryWhereUniqueInput | HistoryEntryWhereUniqueInput[]
    disconnect?: HistoryEntryWhereUniqueInput | HistoryEntryWhereUniqueInput[]
    delete?: HistoryEntryWhereUniqueInput | HistoryEntryWhereUniqueInput[]
    connect?: HistoryEntryWhereUniqueInput | HistoryEntryWhereUniqueInput[]
    update?: HistoryEntryUpdateWithWhereUniqueWithoutToyInput | HistoryEntryUpdateWithWhereUniqueWithoutToyInput[]
    updateMany?: HistoryEntryUpdateManyWithWhereWithoutToyInput | HistoryEntryUpdateManyWithWhereWithoutToyInput[]
    deleteMany?: HistoryEntryScalarWhereInput | HistoryEntryScalarWhereInput[]
  }

  export type ToyPictureUncheckedUpdateManyWithoutToyNestedInput = {
    create?: XOR<ToyPictureCreateWithoutToyInput, ToyPictureUncheckedCreateWithoutToyInput> | ToyPictureCreateWithoutToyInput[] | ToyPictureUncheckedCreateWithoutToyInput[]
    connectOrCreate?: ToyPictureCreateOrConnectWithoutToyInput | ToyPictureCreateOrConnectWithoutToyInput[]
    upsert?: ToyPictureUpsertWithWhereUniqueWithoutToyInput | ToyPictureUpsertWithWhereUniqueWithoutToyInput[]
    createMany?: ToyPictureCreateManyToyInputEnvelope
    set?: ToyPictureWhereUniqueInput | ToyPictureWhereUniqueInput[]
    disconnect?: ToyPictureWhereUniqueInput | ToyPictureWhereUniqueInput[]
    delete?: ToyPictureWhereUniqueInput | ToyPictureWhereUniqueInput[]
    connect?: ToyPictureWhereUniqueInput | ToyPictureWhereUniqueInput[]
    update?: ToyPictureUpdateWithWhereUniqueWithoutToyInput | ToyPictureUpdateWithWhereUniqueWithoutToyInput[]
    updateMany?: ToyPictureUpdateManyWithWhereWithoutToyInput | ToyPictureUpdateManyWithWhereWithoutToyInput[]
    deleteMany?: ToyPictureScalarWhereInput | ToyPictureScalarWhereInput[]
  }

  export type ToyCreateNestedOneWithoutToyPicturesInput = {
    create?: XOR<ToyCreateWithoutToyPicturesInput, ToyUncheckedCreateWithoutToyPicturesInput>
    connectOrCreate?: ToyCreateOrConnectWithoutToyPicturesInput
    connect?: ToyWhereUniqueInput
  }

  export type ToyUpdateOneRequiredWithoutToyPicturesNestedInput = {
    create?: XOR<ToyCreateWithoutToyPicturesInput, ToyUncheckedCreateWithoutToyPicturesInput>
    connectOrCreate?: ToyCreateOrConnectWithoutToyPicturesInput
    upsert?: ToyUpsertWithoutToyPicturesInput
    connect?: ToyWhereUniqueInput
    update?: XOR<XOR<ToyUpdateToOneWithWhereWithoutToyPicturesInput, ToyUpdateWithoutToyPicturesInput>, ToyUncheckedUpdateWithoutToyPicturesInput>
  }

  export type UserCreateNestedOneWithoutHistoryInput = {
    create?: XOR<UserCreateWithoutHistoryInput, UserUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutHistoryInput
    connect?: UserWhereUniqueInput
  }

  export type ToyCreateNestedOneWithoutHistoryInput = {
    create?: XOR<ToyCreateWithoutHistoryInput, ToyUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: ToyCreateOrConnectWithoutHistoryInput
    connect?: ToyWhereUniqueInput
  }

  export type UserUpdateOneWithoutHistoryNestedInput = {
    create?: XOR<UserCreateWithoutHistoryInput, UserUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutHistoryInput
    upsert?: UserUpsertWithoutHistoryInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHistoryInput, UserUpdateWithoutHistoryInput>, UserUncheckedUpdateWithoutHistoryInput>
  }

  export type ToyUpdateOneRequiredWithoutHistoryNestedInput = {
    create?: XOR<ToyCreateWithoutHistoryInput, ToyUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: ToyCreateOrConnectWithoutHistoryInput
    upsert?: ToyUpsertWithoutHistoryInput
    connect?: ToyWhereUniqueInput
    update?: XOR<XOR<ToyUpdateToOneWithWhereWithoutHistoryInput, ToyUpdateWithoutHistoryInput>, ToyUncheckedUpdateWithoutHistoryInput>
  }

  export type UserCreateNestedOneWithoutRatingsInput = {
    create?: XOR<UserCreateWithoutRatingsInput, UserUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRatingsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRatingsNestedInput = {
    create?: XOR<UserCreateWithoutRatingsInput, UserUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRatingsInput
    upsert?: UserUpsertWithoutRatingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRatingsInput, UserUpdateWithoutRatingsInput>, UserUncheckedUpdateWithoutRatingsInput>
  }

  export type UserCreateNestedOneWithoutChatsAsUser1Input = {
    create?: XOR<UserCreateWithoutChatsAsUser1Input, UserUncheckedCreateWithoutChatsAsUser1Input>
    connectOrCreate?: UserCreateOrConnectWithoutChatsAsUser1Input
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutChatsAsUser2Input = {
    create?: XOR<UserCreateWithoutChatsAsUser2Input, UserUncheckedCreateWithoutChatsAsUser2Input>
    connectOrCreate?: UserCreateOrConnectWithoutChatsAsUser2Input
    connect?: UserWhereUniqueInput
  }

  export type MessageCreateNestedManyWithoutChatInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutChatInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutChatsAsUser1NestedInput = {
    create?: XOR<UserCreateWithoutChatsAsUser1Input, UserUncheckedCreateWithoutChatsAsUser1Input>
    connectOrCreate?: UserCreateOrConnectWithoutChatsAsUser1Input
    upsert?: UserUpsertWithoutChatsAsUser1Input
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatsAsUser1Input, UserUpdateWithoutChatsAsUser1Input>, UserUncheckedUpdateWithoutChatsAsUser1Input>
  }

  export type UserUpdateOneRequiredWithoutChatsAsUser2NestedInput = {
    create?: XOR<UserCreateWithoutChatsAsUser2Input, UserUncheckedCreateWithoutChatsAsUser2Input>
    connectOrCreate?: UserCreateOrConnectWithoutChatsAsUser2Input
    upsert?: UserUpsertWithoutChatsAsUser2Input
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatsAsUser2Input, UserUpdateWithoutChatsAsUser2Input>, UserUncheckedUpdateWithoutChatsAsUser2Input>
  }

  export type MessageUpdateManyWithoutChatNestedInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutChatInput | MessageUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutChatInput | MessageUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutChatInput | MessageUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutChatNestedInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutChatInput | MessageUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutChatInput | MessageUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutChatInput | MessageUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMessagesInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type ChatCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatCreateOrConnectWithoutMessagesInput
    connect?: ChatWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    upsert?: UserUpsertWithoutMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessagesInput, UserUpdateWithoutMessagesInput>, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type ChatUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatCreateOrConnectWithoutMessagesInput
    upsert?: ChatUpsertWithoutMessagesInput
    connect?: ChatWhereUniqueInput
    update?: XOR<XOR<ChatUpdateToOneWithWhereWithoutMessagesInput, ChatUpdateWithoutMessagesInput>, ChatUncheckedUpdateWithoutMessagesInput>
  }

  export type UserBenefitCreateNestedManyWithoutBenefitInput = {
    create?: XOR<UserBenefitCreateWithoutBenefitInput, UserBenefitUncheckedCreateWithoutBenefitInput> | UserBenefitCreateWithoutBenefitInput[] | UserBenefitUncheckedCreateWithoutBenefitInput[]
    connectOrCreate?: UserBenefitCreateOrConnectWithoutBenefitInput | UserBenefitCreateOrConnectWithoutBenefitInput[]
    createMany?: UserBenefitCreateManyBenefitInputEnvelope
    connect?: UserBenefitWhereUniqueInput | UserBenefitWhereUniqueInput[]
  }

  export type UserBenefitUncheckedCreateNestedManyWithoutBenefitInput = {
    create?: XOR<UserBenefitCreateWithoutBenefitInput, UserBenefitUncheckedCreateWithoutBenefitInput> | UserBenefitCreateWithoutBenefitInput[] | UserBenefitUncheckedCreateWithoutBenefitInput[]
    connectOrCreate?: UserBenefitCreateOrConnectWithoutBenefitInput | UserBenefitCreateOrConnectWithoutBenefitInput[]
    createMany?: UserBenefitCreateManyBenefitInputEnvelope
    connect?: UserBenefitWhereUniqueInput | UserBenefitWhereUniqueInput[]
  }

  export type UserBenefitUpdateManyWithoutBenefitNestedInput = {
    create?: XOR<UserBenefitCreateWithoutBenefitInput, UserBenefitUncheckedCreateWithoutBenefitInput> | UserBenefitCreateWithoutBenefitInput[] | UserBenefitUncheckedCreateWithoutBenefitInput[]
    connectOrCreate?: UserBenefitCreateOrConnectWithoutBenefitInput | UserBenefitCreateOrConnectWithoutBenefitInput[]
    upsert?: UserBenefitUpsertWithWhereUniqueWithoutBenefitInput | UserBenefitUpsertWithWhereUniqueWithoutBenefitInput[]
    createMany?: UserBenefitCreateManyBenefitInputEnvelope
    set?: UserBenefitWhereUniqueInput | UserBenefitWhereUniqueInput[]
    disconnect?: UserBenefitWhereUniqueInput | UserBenefitWhereUniqueInput[]
    delete?: UserBenefitWhereUniqueInput | UserBenefitWhereUniqueInput[]
    connect?: UserBenefitWhereUniqueInput | UserBenefitWhereUniqueInput[]
    update?: UserBenefitUpdateWithWhereUniqueWithoutBenefitInput | UserBenefitUpdateWithWhereUniqueWithoutBenefitInput[]
    updateMany?: UserBenefitUpdateManyWithWhereWithoutBenefitInput | UserBenefitUpdateManyWithWhereWithoutBenefitInput[]
    deleteMany?: UserBenefitScalarWhereInput | UserBenefitScalarWhereInput[]
  }

  export type UserBenefitUncheckedUpdateManyWithoutBenefitNestedInput = {
    create?: XOR<UserBenefitCreateWithoutBenefitInput, UserBenefitUncheckedCreateWithoutBenefitInput> | UserBenefitCreateWithoutBenefitInput[] | UserBenefitUncheckedCreateWithoutBenefitInput[]
    connectOrCreate?: UserBenefitCreateOrConnectWithoutBenefitInput | UserBenefitCreateOrConnectWithoutBenefitInput[]
    upsert?: UserBenefitUpsertWithWhereUniqueWithoutBenefitInput | UserBenefitUpsertWithWhereUniqueWithoutBenefitInput[]
    createMany?: UserBenefitCreateManyBenefitInputEnvelope
    set?: UserBenefitWhereUniqueInput | UserBenefitWhereUniqueInput[]
    disconnect?: UserBenefitWhereUniqueInput | UserBenefitWhereUniqueInput[]
    delete?: UserBenefitWhereUniqueInput | UserBenefitWhereUniqueInput[]
    connect?: UserBenefitWhereUniqueInput | UserBenefitWhereUniqueInput[]
    update?: UserBenefitUpdateWithWhereUniqueWithoutBenefitInput | UserBenefitUpdateWithWhereUniqueWithoutBenefitInput[]
    updateMany?: UserBenefitUpdateManyWithWhereWithoutBenefitInput | UserBenefitUpdateManyWithWhereWithoutBenefitInput[]
    deleteMany?: UserBenefitScalarWhereInput | UserBenefitScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserBenefitsInput = {
    create?: XOR<UserCreateWithoutUserBenefitsInput, UserUncheckedCreateWithoutUserBenefitsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserBenefitsInput
    connect?: UserWhereUniqueInput
  }

  export type BenefitCreateNestedOneWithoutUserBenefitsInput = {
    create?: XOR<BenefitCreateWithoutUserBenefitsInput, BenefitUncheckedCreateWithoutUserBenefitsInput>
    connectOrCreate?: BenefitCreateOrConnectWithoutUserBenefitsInput
    connect?: BenefitWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumUserBenefitStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserBenefitStatus
  }

  export type UserUpdateOneRequiredWithoutUserBenefitsNestedInput = {
    create?: XOR<UserCreateWithoutUserBenefitsInput, UserUncheckedCreateWithoutUserBenefitsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserBenefitsInput
    upsert?: UserUpsertWithoutUserBenefitsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserBenefitsInput, UserUpdateWithoutUserBenefitsInput>, UserUncheckedUpdateWithoutUserBenefitsInput>
  }

  export type BenefitUpdateOneRequiredWithoutUserBenefitsNestedInput = {
    create?: XOR<BenefitCreateWithoutUserBenefitsInput, BenefitUncheckedCreateWithoutUserBenefitsInput>
    connectOrCreate?: BenefitCreateOrConnectWithoutUserBenefitsInput
    upsert?: BenefitUpsertWithoutUserBenefitsInput
    connect?: BenefitWhereUniqueInput
    update?: XOR<XOR<BenefitUpdateToOneWithWhereWithoutUserBenefitsInput, BenefitUpdateWithoutUserBenefitsInput>, BenefitUncheckedUpdateWithoutUserBenefitsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumAgeRangeFilter<$PrismaModel = never> = {
    equals?: $Enums.AgeRange | EnumAgeRangeFieldRefInput<$PrismaModel>
    in?: $Enums.AgeRange[] | ListEnumAgeRangeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AgeRange[] | ListEnumAgeRangeFieldRefInput<$PrismaModel>
    not?: NestedEnumAgeRangeFilter<$PrismaModel> | $Enums.AgeRange
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumAgeRangeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AgeRange | EnumAgeRangeFieldRefInput<$PrismaModel>
    in?: $Enums.AgeRange[] | ListEnumAgeRangeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AgeRange[] | ListEnumAgeRangeFieldRefInput<$PrismaModel>
    not?: NestedEnumAgeRangeWithAggregatesFilter<$PrismaModel> | $Enums.AgeRange
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAgeRangeFilter<$PrismaModel>
    _max?: NestedEnumAgeRangeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumUserBenefitStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserBenefitStatus | EnumUserBenefitStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserBenefitStatus[] | ListEnumUserBenefitStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserBenefitStatus[] | ListEnumUserBenefitStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserBenefitStatusFilter<$PrismaModel> | $Enums.UserBenefitStatus
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumUserBenefitStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserBenefitStatus | EnumUserBenefitStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserBenefitStatus[] | ListEnumUserBenefitStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserBenefitStatus[] | ListEnumUserBenefitStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserBenefitStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserBenefitStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserBenefitStatusFilter<$PrismaModel>
    _max?: NestedEnumUserBenefitStatusFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ToyCreateWithoutOwnerInput = {
    id?: string
    createdAt?: Date | string
    name: string
    description: string
    price: number
    isNew: boolean
    canTrade: boolean
    canLend: boolean
    usageTime: number
    preservation: number
    type?: ToyCreatetypeInput | $Enums.ToyType[]
    ageGroup: $Enums.AgeRange
    history?: HistoryEntryCreateNestedManyWithoutToyInput
    ToyPictures?: ToyPictureCreateNestedManyWithoutToyInput
  }

  export type ToyUncheckedCreateWithoutOwnerInput = {
    id?: string
    createdAt?: Date | string
    name: string
    description: string
    price: number
    isNew: boolean
    canTrade: boolean
    canLend: boolean
    usageTime: number
    preservation: number
    type?: ToyCreatetypeInput | $Enums.ToyType[]
    ageGroup: $Enums.AgeRange
    history?: HistoryEntryUncheckedCreateNestedManyWithoutToyInput
    ToyPictures?: ToyPictureUncheckedCreateNestedManyWithoutToyInput
  }

  export type ToyCreateOrConnectWithoutOwnerInput = {
    where: ToyWhereUniqueInput
    create: XOR<ToyCreateWithoutOwnerInput, ToyUncheckedCreateWithoutOwnerInput>
  }

  export type ToyCreateManyOwnerInputEnvelope = {
    data: ToyCreateManyOwnerInput | ToyCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type HistoryEntryCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    visible?: boolean
    toy: ToyCreateNestedOneWithoutHistoryInput
  }

  export type HistoryEntryUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    visible?: boolean
    toyId: string
  }

  export type HistoryEntryCreateOrConnectWithoutUserInput = {
    where: HistoryEntryWhereUniqueInput
    create: XOR<HistoryEntryCreateWithoutUserInput, HistoryEntryUncheckedCreateWithoutUserInput>
  }

  export type HistoryEntryCreateManyUserInputEnvelope = {
    data: HistoryEntryCreateManyUserInput | HistoryEntryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RateCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    value: number
    comment?: string | null
  }

  export type RateUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    value: number
    comment?: string | null
  }

  export type RateCreateOrConnectWithoutUserInput = {
    where: RateWhereUniqueInput
    create: XOR<RateCreateWithoutUserInput, RateUncheckedCreateWithoutUserInput>
  }

  export type RateCreateManyUserInputEnvelope = {
    data: RateCreateManyUserInput | RateCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type organizationInfoCreateWithoutOrganizationInput = {
    id?: string
    description: string
    phone_number1: number
    phone_number2?: number | null
  }

  export type organizationInfoUncheckedCreateWithoutOrganizationInput = {
    id?: string
    description: string
    phone_number1: number
    phone_number2?: number | null
  }

  export type organizationInfoCreateOrConnectWithoutOrganizationInput = {
    where: organizationInfoWhereUniqueInput
    create: XOR<organizationInfoCreateWithoutOrganizationInput, organizationInfoUncheckedCreateWithoutOrganizationInput>
  }

  export type ChatCreateWithoutUser1Input = {
    id?: string
    createdAt?: Date | string
    user2: UserCreateNestedOneWithoutChatsAsUser2Input
    messages?: MessageCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutUser1Input = {
    id?: string
    createdAt?: Date | string
    user2Id: string
    messages?: MessageUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutUser1Input = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutUser1Input, ChatUncheckedCreateWithoutUser1Input>
  }

  export type ChatCreateManyUser1InputEnvelope = {
    data: ChatCreateManyUser1Input | ChatCreateManyUser1Input[]
    skipDuplicates?: boolean
  }

  export type ChatCreateWithoutUser2Input = {
    id?: string
    createdAt?: Date | string
    user1: UserCreateNestedOneWithoutChatsAsUser1Input
    messages?: MessageCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutUser2Input = {
    id?: string
    createdAt?: Date | string
    user1Id: string
    messages?: MessageUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutUser2Input = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutUser2Input, ChatUncheckedCreateWithoutUser2Input>
  }

  export type ChatCreateManyUser2InputEnvelope = {
    data: ChatCreateManyUser2Input | ChatCreateManyUser2Input[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutSenderInput = {
    id?: string
    createdAt?: Date | string
    content: string
    chat: ChatCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutSenderInput = {
    id?: string
    createdAt?: Date | string
    content: string
    chatId: string
  }

  export type MessageCreateOrConnectWithoutSenderInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageCreateManySenderInputEnvelope = {
    data: MessageCreateManySenderInput | MessageCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type UserBenefitCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    startsAt: Date | string
    endsAt?: Date | string | null
    status?: $Enums.UserBenefitStatus
    source?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    benefit: BenefitCreateNestedOneWithoutUserBenefitsInput
  }

  export type UserBenefitUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    benefitId: string
    startsAt: Date | string
    endsAt?: Date | string | null
    status?: $Enums.UserBenefitStatus
    source?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserBenefitCreateOrConnectWithoutUserInput = {
    where: UserBenefitWhereUniqueInput
    create: XOR<UserBenefitCreateWithoutUserInput, UserBenefitUncheckedCreateWithoutUserInput>
  }

  export type UserBenefitCreateManyUserInputEnvelope = {
    data: UserBenefitCreateManyUserInput | UserBenefitCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ToyUpsertWithWhereUniqueWithoutOwnerInput = {
    where: ToyWhereUniqueInput
    update: XOR<ToyUpdateWithoutOwnerInput, ToyUncheckedUpdateWithoutOwnerInput>
    create: XOR<ToyCreateWithoutOwnerInput, ToyUncheckedCreateWithoutOwnerInput>
  }

  export type ToyUpdateWithWhereUniqueWithoutOwnerInput = {
    where: ToyWhereUniqueInput
    data: XOR<ToyUpdateWithoutOwnerInput, ToyUncheckedUpdateWithoutOwnerInput>
  }

  export type ToyUpdateManyWithWhereWithoutOwnerInput = {
    where: ToyScalarWhereInput
    data: XOR<ToyUpdateManyMutationInput, ToyUncheckedUpdateManyWithoutOwnerInput>
  }

  export type ToyScalarWhereInput = {
    AND?: ToyScalarWhereInput | ToyScalarWhereInput[]
    OR?: ToyScalarWhereInput[]
    NOT?: ToyScalarWhereInput | ToyScalarWhereInput[]
    id?: StringFilter<"Toy"> | string
    createdAt?: DateTimeFilter<"Toy"> | Date | string
    name?: StringFilter<"Toy"> | string
    description?: StringFilter<"Toy"> | string
    ownerId?: StringFilter<"Toy"> | string
    price?: FloatFilter<"Toy"> | number
    isNew?: BoolFilter<"Toy"> | boolean
    canTrade?: BoolFilter<"Toy"> | boolean
    canLend?: BoolFilter<"Toy"> | boolean
    usageTime?: IntFilter<"Toy"> | number
    preservation?: IntFilter<"Toy"> | number
    type?: EnumToyTypeNullableListFilter<"Toy">
    ageGroup?: EnumAgeRangeFilter<"Toy"> | $Enums.AgeRange
  }

  export type HistoryEntryUpsertWithWhereUniqueWithoutUserInput = {
    where: HistoryEntryWhereUniqueInput
    update: XOR<HistoryEntryUpdateWithoutUserInput, HistoryEntryUncheckedUpdateWithoutUserInput>
    create: XOR<HistoryEntryCreateWithoutUserInput, HistoryEntryUncheckedCreateWithoutUserInput>
  }

  export type HistoryEntryUpdateWithWhereUniqueWithoutUserInput = {
    where: HistoryEntryWhereUniqueInput
    data: XOR<HistoryEntryUpdateWithoutUserInput, HistoryEntryUncheckedUpdateWithoutUserInput>
  }

  export type HistoryEntryUpdateManyWithWhereWithoutUserInput = {
    where: HistoryEntryScalarWhereInput
    data: XOR<HistoryEntryUpdateManyMutationInput, HistoryEntryUncheckedUpdateManyWithoutUserInput>
  }

  export type HistoryEntryScalarWhereInput = {
    AND?: HistoryEntryScalarWhereInput | HistoryEntryScalarWhereInput[]
    OR?: HistoryEntryScalarWhereInput[]
    NOT?: HistoryEntryScalarWhereInput | HistoryEntryScalarWhereInput[]
    id?: StringFilter<"HistoryEntry"> | string
    createdAt?: DateTimeFilter<"HistoryEntry"> | Date | string
    visible?: BoolFilter<"HistoryEntry"> | boolean
    userId?: StringNullableFilter<"HistoryEntry"> | string | null
    toyId?: StringFilter<"HistoryEntry"> | string
  }

  export type RateUpsertWithWhereUniqueWithoutUserInput = {
    where: RateWhereUniqueInput
    update: XOR<RateUpdateWithoutUserInput, RateUncheckedUpdateWithoutUserInput>
    create: XOR<RateCreateWithoutUserInput, RateUncheckedCreateWithoutUserInput>
  }

  export type RateUpdateWithWhereUniqueWithoutUserInput = {
    where: RateWhereUniqueInput
    data: XOR<RateUpdateWithoutUserInput, RateUncheckedUpdateWithoutUserInput>
  }

  export type RateUpdateManyWithWhereWithoutUserInput = {
    where: RateScalarWhereInput
    data: XOR<RateUpdateManyMutationInput, RateUncheckedUpdateManyWithoutUserInput>
  }

  export type RateScalarWhereInput = {
    AND?: RateScalarWhereInput | RateScalarWhereInput[]
    OR?: RateScalarWhereInput[]
    NOT?: RateScalarWhereInput | RateScalarWhereInput[]
    id?: StringFilter<"Rate"> | string
    createdAt?: DateTimeFilter<"Rate"> | Date | string
    value?: IntFilter<"Rate"> | number
    comment?: StringNullableFilter<"Rate"> | string | null
    userId?: StringFilter<"Rate"> | string
  }

  export type organizationInfoUpsertWithoutOrganizationInput = {
    update: XOR<organizationInfoUpdateWithoutOrganizationInput, organizationInfoUncheckedUpdateWithoutOrganizationInput>
    create: XOR<organizationInfoCreateWithoutOrganizationInput, organizationInfoUncheckedCreateWithoutOrganizationInput>
    where?: organizationInfoWhereInput
  }

  export type organizationInfoUpdateToOneWithWhereWithoutOrganizationInput = {
    where?: organizationInfoWhereInput
    data: XOR<organizationInfoUpdateWithoutOrganizationInput, organizationInfoUncheckedUpdateWithoutOrganizationInput>
  }

  export type organizationInfoUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    phone_number1?: IntFieldUpdateOperationsInput | number
    phone_number2?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type organizationInfoUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    phone_number1?: IntFieldUpdateOperationsInput | number
    phone_number2?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ChatUpsertWithWhereUniqueWithoutUser1Input = {
    where: ChatWhereUniqueInput
    update: XOR<ChatUpdateWithoutUser1Input, ChatUncheckedUpdateWithoutUser1Input>
    create: XOR<ChatCreateWithoutUser1Input, ChatUncheckedCreateWithoutUser1Input>
  }

  export type ChatUpdateWithWhereUniqueWithoutUser1Input = {
    where: ChatWhereUniqueInput
    data: XOR<ChatUpdateWithoutUser1Input, ChatUncheckedUpdateWithoutUser1Input>
  }

  export type ChatUpdateManyWithWhereWithoutUser1Input = {
    where: ChatScalarWhereInput
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyWithoutUser1Input>
  }

  export type ChatScalarWhereInput = {
    AND?: ChatScalarWhereInput | ChatScalarWhereInput[]
    OR?: ChatScalarWhereInput[]
    NOT?: ChatScalarWhereInput | ChatScalarWhereInput[]
    id?: StringFilter<"Chat"> | string
    createdAt?: DateTimeFilter<"Chat"> | Date | string
    user1Id?: StringFilter<"Chat"> | string
    user2Id?: StringFilter<"Chat"> | string
  }

  export type ChatUpsertWithWhereUniqueWithoutUser2Input = {
    where: ChatWhereUniqueInput
    update: XOR<ChatUpdateWithoutUser2Input, ChatUncheckedUpdateWithoutUser2Input>
    create: XOR<ChatCreateWithoutUser2Input, ChatUncheckedCreateWithoutUser2Input>
  }

  export type ChatUpdateWithWhereUniqueWithoutUser2Input = {
    where: ChatWhereUniqueInput
    data: XOR<ChatUpdateWithoutUser2Input, ChatUncheckedUpdateWithoutUser2Input>
  }

  export type ChatUpdateManyWithWhereWithoutUser2Input = {
    where: ChatScalarWhereInput
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyWithoutUser2Input>
  }

  export type MessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
  }

  export type MessageUpdateManyWithWhereWithoutSenderInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutSenderInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    content?: StringFilter<"Message"> | string
    senderId?: StringFilter<"Message"> | string
    chatId?: StringFilter<"Message"> | string
  }

  export type UserBenefitUpsertWithWhereUniqueWithoutUserInput = {
    where: UserBenefitWhereUniqueInput
    update: XOR<UserBenefitUpdateWithoutUserInput, UserBenefitUncheckedUpdateWithoutUserInput>
    create: XOR<UserBenefitCreateWithoutUserInput, UserBenefitUncheckedCreateWithoutUserInput>
  }

  export type UserBenefitUpdateWithWhereUniqueWithoutUserInput = {
    where: UserBenefitWhereUniqueInput
    data: XOR<UserBenefitUpdateWithoutUserInput, UserBenefitUncheckedUpdateWithoutUserInput>
  }

  export type UserBenefitUpdateManyWithWhereWithoutUserInput = {
    where: UserBenefitScalarWhereInput
    data: XOR<UserBenefitUpdateManyMutationInput, UserBenefitUncheckedUpdateManyWithoutUserInput>
  }

  export type UserBenefitScalarWhereInput = {
    AND?: UserBenefitScalarWhereInput | UserBenefitScalarWhereInput[]
    OR?: UserBenefitScalarWhereInput[]
    NOT?: UserBenefitScalarWhereInput | UserBenefitScalarWhereInput[]
    id?: StringFilter<"UserBenefit"> | string
    createdAt?: DateTimeFilter<"UserBenefit"> | Date | string
    userId?: StringFilter<"UserBenefit"> | string
    benefitId?: StringFilter<"UserBenefit"> | string
    startsAt?: DateTimeFilter<"UserBenefit"> | Date | string
    endsAt?: DateTimeNullableFilter<"UserBenefit"> | Date | string | null
    status?: EnumUserBenefitStatusFilter<"UserBenefit"> | $Enums.UserBenefitStatus
    source?: StringNullableFilter<"UserBenefit"> | string | null
    metadata?: JsonNullableFilter<"UserBenefit">
  }

  export type UserCreateWithoutOrganizationInfoInput = {
    id?: string
    createdAt?: Date | string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    parentalControl?: boolean
    active?: boolean
    cpf?: string | null
    cnpj?: string | null
    pix_key?: string | null
    picture?: string | null
    addressDistrict: string
    addressStreet: string
    addressNumber: number
    addressDetail?: string | null
    addressCep: string
    toys?: ToyCreateNestedManyWithoutOwnerInput
    history?: HistoryEntryCreateNestedManyWithoutUserInput
    ratings?: RateCreateNestedManyWithoutUserInput
    chatsAsUser1?: ChatCreateNestedManyWithoutUser1Input
    chatsAsUser2?: ChatCreateNestedManyWithoutUser2Input
    messages?: MessageCreateNestedManyWithoutSenderInput
    userBenefits?: UserBenefitCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrganizationInfoInput = {
    id?: string
    createdAt?: Date | string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    parentalControl?: boolean
    active?: boolean
    cpf?: string | null
    cnpj?: string | null
    pix_key?: string | null
    picture?: string | null
    addressDistrict: string
    addressStreet: string
    addressNumber: number
    addressDetail?: string | null
    addressCep: string
    toys?: ToyUncheckedCreateNestedManyWithoutOwnerInput
    history?: HistoryEntryUncheckedCreateNestedManyWithoutUserInput
    ratings?: RateUncheckedCreateNestedManyWithoutUserInput
    chatsAsUser1?: ChatUncheckedCreateNestedManyWithoutUser1Input
    chatsAsUser2?: ChatUncheckedCreateNestedManyWithoutUser2Input
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    userBenefits?: UserBenefitUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrganizationInfoInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrganizationInfoInput, UserUncheckedCreateWithoutOrganizationInfoInput>
  }

  export type UserUpsertWithoutOrganizationInfoInput = {
    update: XOR<UserUpdateWithoutOrganizationInfoInput, UserUncheckedUpdateWithoutOrganizationInfoInput>
    create: XOR<UserCreateWithoutOrganizationInfoInput, UserUncheckedCreateWithoutOrganizationInfoInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrganizationInfoInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrganizationInfoInput, UserUncheckedUpdateWithoutOrganizationInfoInput>
  }

  export type UserUpdateWithoutOrganizationInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    parentalControl?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    pix_key?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    addressDistrict?: StringFieldUpdateOperationsInput | string
    addressStreet?: StringFieldUpdateOperationsInput | string
    addressNumber?: IntFieldUpdateOperationsInput | number
    addressDetail?: NullableStringFieldUpdateOperationsInput | string | null
    addressCep?: StringFieldUpdateOperationsInput | string
    toys?: ToyUpdateManyWithoutOwnerNestedInput
    history?: HistoryEntryUpdateManyWithoutUserNestedInput
    ratings?: RateUpdateManyWithoutUserNestedInput
    chatsAsUser1?: ChatUpdateManyWithoutUser1NestedInput
    chatsAsUser2?: ChatUpdateManyWithoutUser2NestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    userBenefits?: UserBenefitUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrganizationInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    parentalControl?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    pix_key?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    addressDistrict?: StringFieldUpdateOperationsInput | string
    addressStreet?: StringFieldUpdateOperationsInput | string
    addressNumber?: IntFieldUpdateOperationsInput | number
    addressDetail?: NullableStringFieldUpdateOperationsInput | string | null
    addressCep?: StringFieldUpdateOperationsInput | string
    toys?: ToyUncheckedUpdateManyWithoutOwnerNestedInput
    history?: HistoryEntryUncheckedUpdateManyWithoutUserNestedInput
    ratings?: RateUncheckedUpdateManyWithoutUserNestedInput
    chatsAsUser1?: ChatUncheckedUpdateManyWithoutUser1NestedInput
    chatsAsUser2?: ChatUncheckedUpdateManyWithoutUser2NestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    userBenefits?: UserBenefitUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutToysInput = {
    id?: string
    createdAt?: Date | string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    parentalControl?: boolean
    active?: boolean
    cpf?: string | null
    cnpj?: string | null
    pix_key?: string | null
    picture?: string | null
    addressDistrict: string
    addressStreet: string
    addressNumber: number
    addressDetail?: string | null
    addressCep: string
    history?: HistoryEntryCreateNestedManyWithoutUserInput
    ratings?: RateCreateNestedManyWithoutUserInput
    organizationInfo?: organizationInfoCreateNestedOneWithoutOrganizationInput
    chatsAsUser1?: ChatCreateNestedManyWithoutUser1Input
    chatsAsUser2?: ChatCreateNestedManyWithoutUser2Input
    messages?: MessageCreateNestedManyWithoutSenderInput
    userBenefits?: UserBenefitCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutToysInput = {
    id?: string
    createdAt?: Date | string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    parentalControl?: boolean
    active?: boolean
    cpf?: string | null
    cnpj?: string | null
    pix_key?: string | null
    picture?: string | null
    addressDistrict: string
    addressStreet: string
    addressNumber: number
    addressDetail?: string | null
    addressCep: string
    history?: HistoryEntryUncheckedCreateNestedManyWithoutUserInput
    ratings?: RateUncheckedCreateNestedManyWithoutUserInput
    organizationInfo?: organizationInfoUncheckedCreateNestedOneWithoutOrganizationInput
    chatsAsUser1?: ChatUncheckedCreateNestedManyWithoutUser1Input
    chatsAsUser2?: ChatUncheckedCreateNestedManyWithoutUser2Input
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    userBenefits?: UserBenefitUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutToysInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutToysInput, UserUncheckedCreateWithoutToysInput>
  }

  export type HistoryEntryCreateWithoutToyInput = {
    id?: string
    createdAt?: Date | string
    visible?: boolean
    user?: UserCreateNestedOneWithoutHistoryInput
  }

  export type HistoryEntryUncheckedCreateWithoutToyInput = {
    id?: string
    createdAt?: Date | string
    visible?: boolean
    userId?: string | null
  }

  export type HistoryEntryCreateOrConnectWithoutToyInput = {
    where: HistoryEntryWhereUniqueInput
    create: XOR<HistoryEntryCreateWithoutToyInput, HistoryEntryUncheckedCreateWithoutToyInput>
  }

  export type HistoryEntryCreateManyToyInputEnvelope = {
    data: HistoryEntryCreateManyToyInput | HistoryEntryCreateManyToyInput[]
    skipDuplicates?: boolean
  }

  export type ToyPictureCreateWithoutToyInput = {
    id?: string
    order: number
    picture: string
  }

  export type ToyPictureUncheckedCreateWithoutToyInput = {
    id?: string
    order: number
    picture: string
  }

  export type ToyPictureCreateOrConnectWithoutToyInput = {
    where: ToyPictureWhereUniqueInput
    create: XOR<ToyPictureCreateWithoutToyInput, ToyPictureUncheckedCreateWithoutToyInput>
  }

  export type ToyPictureCreateManyToyInputEnvelope = {
    data: ToyPictureCreateManyToyInput | ToyPictureCreateManyToyInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutToysInput = {
    update: XOR<UserUpdateWithoutToysInput, UserUncheckedUpdateWithoutToysInput>
    create: XOR<UserCreateWithoutToysInput, UserUncheckedCreateWithoutToysInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutToysInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutToysInput, UserUncheckedUpdateWithoutToysInput>
  }

  export type UserUpdateWithoutToysInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    parentalControl?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    pix_key?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    addressDistrict?: StringFieldUpdateOperationsInput | string
    addressStreet?: StringFieldUpdateOperationsInput | string
    addressNumber?: IntFieldUpdateOperationsInput | number
    addressDetail?: NullableStringFieldUpdateOperationsInput | string | null
    addressCep?: StringFieldUpdateOperationsInput | string
    history?: HistoryEntryUpdateManyWithoutUserNestedInput
    ratings?: RateUpdateManyWithoutUserNestedInput
    organizationInfo?: organizationInfoUpdateOneWithoutOrganizationNestedInput
    chatsAsUser1?: ChatUpdateManyWithoutUser1NestedInput
    chatsAsUser2?: ChatUpdateManyWithoutUser2NestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    userBenefits?: UserBenefitUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutToysInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    parentalControl?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    pix_key?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    addressDistrict?: StringFieldUpdateOperationsInput | string
    addressStreet?: StringFieldUpdateOperationsInput | string
    addressNumber?: IntFieldUpdateOperationsInput | number
    addressDetail?: NullableStringFieldUpdateOperationsInput | string | null
    addressCep?: StringFieldUpdateOperationsInput | string
    history?: HistoryEntryUncheckedUpdateManyWithoutUserNestedInput
    ratings?: RateUncheckedUpdateManyWithoutUserNestedInput
    organizationInfo?: organizationInfoUncheckedUpdateOneWithoutOrganizationNestedInput
    chatsAsUser1?: ChatUncheckedUpdateManyWithoutUser1NestedInput
    chatsAsUser2?: ChatUncheckedUpdateManyWithoutUser2NestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    userBenefits?: UserBenefitUncheckedUpdateManyWithoutUserNestedInput
  }

  export type HistoryEntryUpsertWithWhereUniqueWithoutToyInput = {
    where: HistoryEntryWhereUniqueInput
    update: XOR<HistoryEntryUpdateWithoutToyInput, HistoryEntryUncheckedUpdateWithoutToyInput>
    create: XOR<HistoryEntryCreateWithoutToyInput, HistoryEntryUncheckedCreateWithoutToyInput>
  }

  export type HistoryEntryUpdateWithWhereUniqueWithoutToyInput = {
    where: HistoryEntryWhereUniqueInput
    data: XOR<HistoryEntryUpdateWithoutToyInput, HistoryEntryUncheckedUpdateWithoutToyInput>
  }

  export type HistoryEntryUpdateManyWithWhereWithoutToyInput = {
    where: HistoryEntryScalarWhereInput
    data: XOR<HistoryEntryUpdateManyMutationInput, HistoryEntryUncheckedUpdateManyWithoutToyInput>
  }

  export type ToyPictureUpsertWithWhereUniqueWithoutToyInput = {
    where: ToyPictureWhereUniqueInput
    update: XOR<ToyPictureUpdateWithoutToyInput, ToyPictureUncheckedUpdateWithoutToyInput>
    create: XOR<ToyPictureCreateWithoutToyInput, ToyPictureUncheckedCreateWithoutToyInput>
  }

  export type ToyPictureUpdateWithWhereUniqueWithoutToyInput = {
    where: ToyPictureWhereUniqueInput
    data: XOR<ToyPictureUpdateWithoutToyInput, ToyPictureUncheckedUpdateWithoutToyInput>
  }

  export type ToyPictureUpdateManyWithWhereWithoutToyInput = {
    where: ToyPictureScalarWhereInput
    data: XOR<ToyPictureUpdateManyMutationInput, ToyPictureUncheckedUpdateManyWithoutToyInput>
  }

  export type ToyPictureScalarWhereInput = {
    AND?: ToyPictureScalarWhereInput | ToyPictureScalarWhereInput[]
    OR?: ToyPictureScalarWhereInput[]
    NOT?: ToyPictureScalarWhereInput | ToyPictureScalarWhereInput[]
    id?: StringFilter<"ToyPicture"> | string
    order?: IntFilter<"ToyPicture"> | number
    toyId?: StringFilter<"ToyPicture"> | string
    picture?: StringFilter<"ToyPicture"> | string
  }

  export type ToyCreateWithoutToyPicturesInput = {
    id?: string
    createdAt?: Date | string
    name: string
    description: string
    price: number
    isNew: boolean
    canTrade: boolean
    canLend: boolean
    usageTime: number
    preservation: number
    type?: ToyCreatetypeInput | $Enums.ToyType[]
    ageGroup: $Enums.AgeRange
    owner: UserCreateNestedOneWithoutToysInput
    history?: HistoryEntryCreateNestedManyWithoutToyInput
  }

  export type ToyUncheckedCreateWithoutToyPicturesInput = {
    id?: string
    createdAt?: Date | string
    name: string
    description: string
    ownerId: string
    price: number
    isNew: boolean
    canTrade: boolean
    canLend: boolean
    usageTime: number
    preservation: number
    type?: ToyCreatetypeInput | $Enums.ToyType[]
    ageGroup: $Enums.AgeRange
    history?: HistoryEntryUncheckedCreateNestedManyWithoutToyInput
  }

  export type ToyCreateOrConnectWithoutToyPicturesInput = {
    where: ToyWhereUniqueInput
    create: XOR<ToyCreateWithoutToyPicturesInput, ToyUncheckedCreateWithoutToyPicturesInput>
  }

  export type ToyUpsertWithoutToyPicturesInput = {
    update: XOR<ToyUpdateWithoutToyPicturesInput, ToyUncheckedUpdateWithoutToyPicturesInput>
    create: XOR<ToyCreateWithoutToyPicturesInput, ToyUncheckedCreateWithoutToyPicturesInput>
    where?: ToyWhereInput
  }

  export type ToyUpdateToOneWithWhereWithoutToyPicturesInput = {
    where?: ToyWhereInput
    data: XOR<ToyUpdateWithoutToyPicturesInput, ToyUncheckedUpdateWithoutToyPicturesInput>
  }

  export type ToyUpdateWithoutToyPicturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isNew?: BoolFieldUpdateOperationsInput | boolean
    canTrade?: BoolFieldUpdateOperationsInput | boolean
    canLend?: BoolFieldUpdateOperationsInput | boolean
    usageTime?: IntFieldUpdateOperationsInput | number
    preservation?: IntFieldUpdateOperationsInput | number
    type?: ToyUpdatetypeInput | $Enums.ToyType[]
    ageGroup?: EnumAgeRangeFieldUpdateOperationsInput | $Enums.AgeRange
    owner?: UserUpdateOneRequiredWithoutToysNestedInput
    history?: HistoryEntryUpdateManyWithoutToyNestedInput
  }

  export type ToyUncheckedUpdateWithoutToyPicturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isNew?: BoolFieldUpdateOperationsInput | boolean
    canTrade?: BoolFieldUpdateOperationsInput | boolean
    canLend?: BoolFieldUpdateOperationsInput | boolean
    usageTime?: IntFieldUpdateOperationsInput | number
    preservation?: IntFieldUpdateOperationsInput | number
    type?: ToyUpdatetypeInput | $Enums.ToyType[]
    ageGroup?: EnumAgeRangeFieldUpdateOperationsInput | $Enums.AgeRange
    history?: HistoryEntryUncheckedUpdateManyWithoutToyNestedInput
  }

  export type UserCreateWithoutHistoryInput = {
    id?: string
    createdAt?: Date | string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    parentalControl?: boolean
    active?: boolean
    cpf?: string | null
    cnpj?: string | null
    pix_key?: string | null
    picture?: string | null
    addressDistrict: string
    addressStreet: string
    addressNumber: number
    addressDetail?: string | null
    addressCep: string
    toys?: ToyCreateNestedManyWithoutOwnerInput
    ratings?: RateCreateNestedManyWithoutUserInput
    organizationInfo?: organizationInfoCreateNestedOneWithoutOrganizationInput
    chatsAsUser1?: ChatCreateNestedManyWithoutUser1Input
    chatsAsUser2?: ChatCreateNestedManyWithoutUser2Input
    messages?: MessageCreateNestedManyWithoutSenderInput
    userBenefits?: UserBenefitCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutHistoryInput = {
    id?: string
    createdAt?: Date | string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    parentalControl?: boolean
    active?: boolean
    cpf?: string | null
    cnpj?: string | null
    pix_key?: string | null
    picture?: string | null
    addressDistrict: string
    addressStreet: string
    addressNumber: number
    addressDetail?: string | null
    addressCep: string
    toys?: ToyUncheckedCreateNestedManyWithoutOwnerInput
    ratings?: RateUncheckedCreateNestedManyWithoutUserInput
    organizationInfo?: organizationInfoUncheckedCreateNestedOneWithoutOrganizationInput
    chatsAsUser1?: ChatUncheckedCreateNestedManyWithoutUser1Input
    chatsAsUser2?: ChatUncheckedCreateNestedManyWithoutUser2Input
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    userBenefits?: UserBenefitUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHistoryInput, UserUncheckedCreateWithoutHistoryInput>
  }

  export type ToyCreateWithoutHistoryInput = {
    id?: string
    createdAt?: Date | string
    name: string
    description: string
    price: number
    isNew: boolean
    canTrade: boolean
    canLend: boolean
    usageTime: number
    preservation: number
    type?: ToyCreatetypeInput | $Enums.ToyType[]
    ageGroup: $Enums.AgeRange
    owner: UserCreateNestedOneWithoutToysInput
    ToyPictures?: ToyPictureCreateNestedManyWithoutToyInput
  }

  export type ToyUncheckedCreateWithoutHistoryInput = {
    id?: string
    createdAt?: Date | string
    name: string
    description: string
    ownerId: string
    price: number
    isNew: boolean
    canTrade: boolean
    canLend: boolean
    usageTime: number
    preservation: number
    type?: ToyCreatetypeInput | $Enums.ToyType[]
    ageGroup: $Enums.AgeRange
    ToyPictures?: ToyPictureUncheckedCreateNestedManyWithoutToyInput
  }

  export type ToyCreateOrConnectWithoutHistoryInput = {
    where: ToyWhereUniqueInput
    create: XOR<ToyCreateWithoutHistoryInput, ToyUncheckedCreateWithoutHistoryInput>
  }

  export type UserUpsertWithoutHistoryInput = {
    update: XOR<UserUpdateWithoutHistoryInput, UserUncheckedUpdateWithoutHistoryInput>
    create: XOR<UserCreateWithoutHistoryInput, UserUncheckedCreateWithoutHistoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHistoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHistoryInput, UserUncheckedUpdateWithoutHistoryInput>
  }

  export type UserUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    parentalControl?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    pix_key?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    addressDistrict?: StringFieldUpdateOperationsInput | string
    addressStreet?: StringFieldUpdateOperationsInput | string
    addressNumber?: IntFieldUpdateOperationsInput | number
    addressDetail?: NullableStringFieldUpdateOperationsInput | string | null
    addressCep?: StringFieldUpdateOperationsInput | string
    toys?: ToyUpdateManyWithoutOwnerNestedInput
    ratings?: RateUpdateManyWithoutUserNestedInput
    organizationInfo?: organizationInfoUpdateOneWithoutOrganizationNestedInput
    chatsAsUser1?: ChatUpdateManyWithoutUser1NestedInput
    chatsAsUser2?: ChatUpdateManyWithoutUser2NestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    userBenefits?: UserBenefitUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    parentalControl?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    pix_key?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    addressDistrict?: StringFieldUpdateOperationsInput | string
    addressStreet?: StringFieldUpdateOperationsInput | string
    addressNumber?: IntFieldUpdateOperationsInput | number
    addressDetail?: NullableStringFieldUpdateOperationsInput | string | null
    addressCep?: StringFieldUpdateOperationsInput | string
    toys?: ToyUncheckedUpdateManyWithoutOwnerNestedInput
    ratings?: RateUncheckedUpdateManyWithoutUserNestedInput
    organizationInfo?: organizationInfoUncheckedUpdateOneWithoutOrganizationNestedInput
    chatsAsUser1?: ChatUncheckedUpdateManyWithoutUser1NestedInput
    chatsAsUser2?: ChatUncheckedUpdateManyWithoutUser2NestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    userBenefits?: UserBenefitUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ToyUpsertWithoutHistoryInput = {
    update: XOR<ToyUpdateWithoutHistoryInput, ToyUncheckedUpdateWithoutHistoryInput>
    create: XOR<ToyCreateWithoutHistoryInput, ToyUncheckedCreateWithoutHistoryInput>
    where?: ToyWhereInput
  }

  export type ToyUpdateToOneWithWhereWithoutHistoryInput = {
    where?: ToyWhereInput
    data: XOR<ToyUpdateWithoutHistoryInput, ToyUncheckedUpdateWithoutHistoryInput>
  }

  export type ToyUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isNew?: BoolFieldUpdateOperationsInput | boolean
    canTrade?: BoolFieldUpdateOperationsInput | boolean
    canLend?: BoolFieldUpdateOperationsInput | boolean
    usageTime?: IntFieldUpdateOperationsInput | number
    preservation?: IntFieldUpdateOperationsInput | number
    type?: ToyUpdatetypeInput | $Enums.ToyType[]
    ageGroup?: EnumAgeRangeFieldUpdateOperationsInput | $Enums.AgeRange
    owner?: UserUpdateOneRequiredWithoutToysNestedInput
    ToyPictures?: ToyPictureUpdateManyWithoutToyNestedInput
  }

  export type ToyUncheckedUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isNew?: BoolFieldUpdateOperationsInput | boolean
    canTrade?: BoolFieldUpdateOperationsInput | boolean
    canLend?: BoolFieldUpdateOperationsInput | boolean
    usageTime?: IntFieldUpdateOperationsInput | number
    preservation?: IntFieldUpdateOperationsInput | number
    type?: ToyUpdatetypeInput | $Enums.ToyType[]
    ageGroup?: EnumAgeRangeFieldUpdateOperationsInput | $Enums.AgeRange
    ToyPictures?: ToyPictureUncheckedUpdateManyWithoutToyNestedInput
  }

  export type UserCreateWithoutRatingsInput = {
    id?: string
    createdAt?: Date | string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    parentalControl?: boolean
    active?: boolean
    cpf?: string | null
    cnpj?: string | null
    pix_key?: string | null
    picture?: string | null
    addressDistrict: string
    addressStreet: string
    addressNumber: number
    addressDetail?: string | null
    addressCep: string
    toys?: ToyCreateNestedManyWithoutOwnerInput
    history?: HistoryEntryCreateNestedManyWithoutUserInput
    organizationInfo?: organizationInfoCreateNestedOneWithoutOrganizationInput
    chatsAsUser1?: ChatCreateNestedManyWithoutUser1Input
    chatsAsUser2?: ChatCreateNestedManyWithoutUser2Input
    messages?: MessageCreateNestedManyWithoutSenderInput
    userBenefits?: UserBenefitCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRatingsInput = {
    id?: string
    createdAt?: Date | string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    parentalControl?: boolean
    active?: boolean
    cpf?: string | null
    cnpj?: string | null
    pix_key?: string | null
    picture?: string | null
    addressDistrict: string
    addressStreet: string
    addressNumber: number
    addressDetail?: string | null
    addressCep: string
    toys?: ToyUncheckedCreateNestedManyWithoutOwnerInput
    history?: HistoryEntryUncheckedCreateNestedManyWithoutUserInput
    organizationInfo?: organizationInfoUncheckedCreateNestedOneWithoutOrganizationInput
    chatsAsUser1?: ChatUncheckedCreateNestedManyWithoutUser1Input
    chatsAsUser2?: ChatUncheckedCreateNestedManyWithoutUser2Input
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    userBenefits?: UserBenefitUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRatingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRatingsInput, UserUncheckedCreateWithoutRatingsInput>
  }

  export type UserUpsertWithoutRatingsInput = {
    update: XOR<UserUpdateWithoutRatingsInput, UserUncheckedUpdateWithoutRatingsInput>
    create: XOR<UserCreateWithoutRatingsInput, UserUncheckedCreateWithoutRatingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRatingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRatingsInput, UserUncheckedUpdateWithoutRatingsInput>
  }

  export type UserUpdateWithoutRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    parentalControl?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    pix_key?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    addressDistrict?: StringFieldUpdateOperationsInput | string
    addressStreet?: StringFieldUpdateOperationsInput | string
    addressNumber?: IntFieldUpdateOperationsInput | number
    addressDetail?: NullableStringFieldUpdateOperationsInput | string | null
    addressCep?: StringFieldUpdateOperationsInput | string
    toys?: ToyUpdateManyWithoutOwnerNestedInput
    history?: HistoryEntryUpdateManyWithoutUserNestedInput
    organizationInfo?: organizationInfoUpdateOneWithoutOrganizationNestedInput
    chatsAsUser1?: ChatUpdateManyWithoutUser1NestedInput
    chatsAsUser2?: ChatUpdateManyWithoutUser2NestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    userBenefits?: UserBenefitUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    parentalControl?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    pix_key?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    addressDistrict?: StringFieldUpdateOperationsInput | string
    addressStreet?: StringFieldUpdateOperationsInput | string
    addressNumber?: IntFieldUpdateOperationsInput | number
    addressDetail?: NullableStringFieldUpdateOperationsInput | string | null
    addressCep?: StringFieldUpdateOperationsInput | string
    toys?: ToyUncheckedUpdateManyWithoutOwnerNestedInput
    history?: HistoryEntryUncheckedUpdateManyWithoutUserNestedInput
    organizationInfo?: organizationInfoUncheckedUpdateOneWithoutOrganizationNestedInput
    chatsAsUser1?: ChatUncheckedUpdateManyWithoutUser1NestedInput
    chatsAsUser2?: ChatUncheckedUpdateManyWithoutUser2NestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    userBenefits?: UserBenefitUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutChatsAsUser1Input = {
    id?: string
    createdAt?: Date | string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    parentalControl?: boolean
    active?: boolean
    cpf?: string | null
    cnpj?: string | null
    pix_key?: string | null
    picture?: string | null
    addressDistrict: string
    addressStreet: string
    addressNumber: number
    addressDetail?: string | null
    addressCep: string
    toys?: ToyCreateNestedManyWithoutOwnerInput
    history?: HistoryEntryCreateNestedManyWithoutUserInput
    ratings?: RateCreateNestedManyWithoutUserInput
    organizationInfo?: organizationInfoCreateNestedOneWithoutOrganizationInput
    chatsAsUser2?: ChatCreateNestedManyWithoutUser2Input
    messages?: MessageCreateNestedManyWithoutSenderInput
    userBenefits?: UserBenefitCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChatsAsUser1Input = {
    id?: string
    createdAt?: Date | string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    parentalControl?: boolean
    active?: boolean
    cpf?: string | null
    cnpj?: string | null
    pix_key?: string | null
    picture?: string | null
    addressDistrict: string
    addressStreet: string
    addressNumber: number
    addressDetail?: string | null
    addressCep: string
    toys?: ToyUncheckedCreateNestedManyWithoutOwnerInput
    history?: HistoryEntryUncheckedCreateNestedManyWithoutUserInput
    ratings?: RateUncheckedCreateNestedManyWithoutUserInput
    organizationInfo?: organizationInfoUncheckedCreateNestedOneWithoutOrganizationInput
    chatsAsUser2?: ChatUncheckedCreateNestedManyWithoutUser2Input
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    userBenefits?: UserBenefitUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChatsAsUser1Input = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatsAsUser1Input, UserUncheckedCreateWithoutChatsAsUser1Input>
  }

  export type UserCreateWithoutChatsAsUser2Input = {
    id?: string
    createdAt?: Date | string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    parentalControl?: boolean
    active?: boolean
    cpf?: string | null
    cnpj?: string | null
    pix_key?: string | null
    picture?: string | null
    addressDistrict: string
    addressStreet: string
    addressNumber: number
    addressDetail?: string | null
    addressCep: string
    toys?: ToyCreateNestedManyWithoutOwnerInput
    history?: HistoryEntryCreateNestedManyWithoutUserInput
    ratings?: RateCreateNestedManyWithoutUserInput
    organizationInfo?: organizationInfoCreateNestedOneWithoutOrganizationInput
    chatsAsUser1?: ChatCreateNestedManyWithoutUser1Input
    messages?: MessageCreateNestedManyWithoutSenderInput
    userBenefits?: UserBenefitCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChatsAsUser2Input = {
    id?: string
    createdAt?: Date | string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    parentalControl?: boolean
    active?: boolean
    cpf?: string | null
    cnpj?: string | null
    pix_key?: string | null
    picture?: string | null
    addressDistrict: string
    addressStreet: string
    addressNumber: number
    addressDetail?: string | null
    addressCep: string
    toys?: ToyUncheckedCreateNestedManyWithoutOwnerInput
    history?: HistoryEntryUncheckedCreateNestedManyWithoutUserInput
    ratings?: RateUncheckedCreateNestedManyWithoutUserInput
    organizationInfo?: organizationInfoUncheckedCreateNestedOneWithoutOrganizationInput
    chatsAsUser1?: ChatUncheckedCreateNestedManyWithoutUser1Input
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    userBenefits?: UserBenefitUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChatsAsUser2Input = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatsAsUser2Input, UserUncheckedCreateWithoutChatsAsUser2Input>
  }

  export type MessageCreateWithoutChatInput = {
    id?: string
    createdAt?: Date | string
    content: string
    sender: UserCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutChatInput = {
    id?: string
    createdAt?: Date | string
    content: string
    senderId: string
  }

  export type MessageCreateOrConnectWithoutChatInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput>
  }

  export type MessageCreateManyChatInputEnvelope = {
    data: MessageCreateManyChatInput | MessageCreateManyChatInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutChatsAsUser1Input = {
    update: XOR<UserUpdateWithoutChatsAsUser1Input, UserUncheckedUpdateWithoutChatsAsUser1Input>
    create: XOR<UserCreateWithoutChatsAsUser1Input, UserUncheckedCreateWithoutChatsAsUser1Input>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatsAsUser1Input = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatsAsUser1Input, UserUncheckedUpdateWithoutChatsAsUser1Input>
  }

  export type UserUpdateWithoutChatsAsUser1Input = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    parentalControl?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    pix_key?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    addressDistrict?: StringFieldUpdateOperationsInput | string
    addressStreet?: StringFieldUpdateOperationsInput | string
    addressNumber?: IntFieldUpdateOperationsInput | number
    addressDetail?: NullableStringFieldUpdateOperationsInput | string | null
    addressCep?: StringFieldUpdateOperationsInput | string
    toys?: ToyUpdateManyWithoutOwnerNestedInput
    history?: HistoryEntryUpdateManyWithoutUserNestedInput
    ratings?: RateUpdateManyWithoutUserNestedInput
    organizationInfo?: organizationInfoUpdateOneWithoutOrganizationNestedInput
    chatsAsUser2?: ChatUpdateManyWithoutUser2NestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    userBenefits?: UserBenefitUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChatsAsUser1Input = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    parentalControl?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    pix_key?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    addressDistrict?: StringFieldUpdateOperationsInput | string
    addressStreet?: StringFieldUpdateOperationsInput | string
    addressNumber?: IntFieldUpdateOperationsInput | number
    addressDetail?: NullableStringFieldUpdateOperationsInput | string | null
    addressCep?: StringFieldUpdateOperationsInput | string
    toys?: ToyUncheckedUpdateManyWithoutOwnerNestedInput
    history?: HistoryEntryUncheckedUpdateManyWithoutUserNestedInput
    ratings?: RateUncheckedUpdateManyWithoutUserNestedInput
    organizationInfo?: organizationInfoUncheckedUpdateOneWithoutOrganizationNestedInput
    chatsAsUser2?: ChatUncheckedUpdateManyWithoutUser2NestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    userBenefits?: UserBenefitUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutChatsAsUser2Input = {
    update: XOR<UserUpdateWithoutChatsAsUser2Input, UserUncheckedUpdateWithoutChatsAsUser2Input>
    create: XOR<UserCreateWithoutChatsAsUser2Input, UserUncheckedCreateWithoutChatsAsUser2Input>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatsAsUser2Input = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatsAsUser2Input, UserUncheckedUpdateWithoutChatsAsUser2Input>
  }

  export type UserUpdateWithoutChatsAsUser2Input = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    parentalControl?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    pix_key?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    addressDistrict?: StringFieldUpdateOperationsInput | string
    addressStreet?: StringFieldUpdateOperationsInput | string
    addressNumber?: IntFieldUpdateOperationsInput | number
    addressDetail?: NullableStringFieldUpdateOperationsInput | string | null
    addressCep?: StringFieldUpdateOperationsInput | string
    toys?: ToyUpdateManyWithoutOwnerNestedInput
    history?: HistoryEntryUpdateManyWithoutUserNestedInput
    ratings?: RateUpdateManyWithoutUserNestedInput
    organizationInfo?: organizationInfoUpdateOneWithoutOrganizationNestedInput
    chatsAsUser1?: ChatUpdateManyWithoutUser1NestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    userBenefits?: UserBenefitUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChatsAsUser2Input = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    parentalControl?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    pix_key?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    addressDistrict?: StringFieldUpdateOperationsInput | string
    addressStreet?: StringFieldUpdateOperationsInput | string
    addressNumber?: IntFieldUpdateOperationsInput | number
    addressDetail?: NullableStringFieldUpdateOperationsInput | string | null
    addressCep?: StringFieldUpdateOperationsInput | string
    toys?: ToyUncheckedUpdateManyWithoutOwnerNestedInput
    history?: HistoryEntryUncheckedUpdateManyWithoutUserNestedInput
    ratings?: RateUncheckedUpdateManyWithoutUserNestedInput
    organizationInfo?: organizationInfoUncheckedUpdateOneWithoutOrganizationNestedInput
    chatsAsUser1?: ChatUncheckedUpdateManyWithoutUser1NestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    userBenefits?: UserBenefitUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MessageUpsertWithWhereUniqueWithoutChatInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutChatInput, MessageUncheckedUpdateWithoutChatInput>
    create: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutChatInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutChatInput, MessageUncheckedUpdateWithoutChatInput>
  }

  export type MessageUpdateManyWithWhereWithoutChatInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutChatInput>
  }

  export type UserCreateWithoutMessagesInput = {
    id?: string
    createdAt?: Date | string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    parentalControl?: boolean
    active?: boolean
    cpf?: string | null
    cnpj?: string | null
    pix_key?: string | null
    picture?: string | null
    addressDistrict: string
    addressStreet: string
    addressNumber: number
    addressDetail?: string | null
    addressCep: string
    toys?: ToyCreateNestedManyWithoutOwnerInput
    history?: HistoryEntryCreateNestedManyWithoutUserInput
    ratings?: RateCreateNestedManyWithoutUserInput
    organizationInfo?: organizationInfoCreateNestedOneWithoutOrganizationInput
    chatsAsUser1?: ChatCreateNestedManyWithoutUser1Input
    chatsAsUser2?: ChatCreateNestedManyWithoutUser2Input
    userBenefits?: UserBenefitCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMessagesInput = {
    id?: string
    createdAt?: Date | string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    parentalControl?: boolean
    active?: boolean
    cpf?: string | null
    cnpj?: string | null
    pix_key?: string | null
    picture?: string | null
    addressDistrict: string
    addressStreet: string
    addressNumber: number
    addressDetail?: string | null
    addressCep: string
    toys?: ToyUncheckedCreateNestedManyWithoutOwnerInput
    history?: HistoryEntryUncheckedCreateNestedManyWithoutUserInput
    ratings?: RateUncheckedCreateNestedManyWithoutUserInput
    organizationInfo?: organizationInfoUncheckedCreateNestedOneWithoutOrganizationInput
    chatsAsUser1?: ChatUncheckedCreateNestedManyWithoutUser1Input
    chatsAsUser2?: ChatUncheckedCreateNestedManyWithoutUser2Input
    userBenefits?: UserBenefitUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
  }

  export type ChatCreateWithoutMessagesInput = {
    id?: string
    createdAt?: Date | string
    user1: UserCreateNestedOneWithoutChatsAsUser1Input
    user2: UserCreateNestedOneWithoutChatsAsUser2Input
  }

  export type ChatUncheckedCreateWithoutMessagesInput = {
    id?: string
    createdAt?: Date | string
    user1Id: string
    user2Id: string
  }

  export type ChatCreateOrConnectWithoutMessagesInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
  }

  export type UserUpsertWithoutMessagesInput = {
    update: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    parentalControl?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    pix_key?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    addressDistrict?: StringFieldUpdateOperationsInput | string
    addressStreet?: StringFieldUpdateOperationsInput | string
    addressNumber?: IntFieldUpdateOperationsInput | number
    addressDetail?: NullableStringFieldUpdateOperationsInput | string | null
    addressCep?: StringFieldUpdateOperationsInput | string
    toys?: ToyUpdateManyWithoutOwnerNestedInput
    history?: HistoryEntryUpdateManyWithoutUserNestedInput
    ratings?: RateUpdateManyWithoutUserNestedInput
    organizationInfo?: organizationInfoUpdateOneWithoutOrganizationNestedInput
    chatsAsUser1?: ChatUpdateManyWithoutUser1NestedInput
    chatsAsUser2?: ChatUpdateManyWithoutUser2NestedInput
    userBenefits?: UserBenefitUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    parentalControl?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    pix_key?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    addressDistrict?: StringFieldUpdateOperationsInput | string
    addressStreet?: StringFieldUpdateOperationsInput | string
    addressNumber?: IntFieldUpdateOperationsInput | number
    addressDetail?: NullableStringFieldUpdateOperationsInput | string | null
    addressCep?: StringFieldUpdateOperationsInput | string
    toys?: ToyUncheckedUpdateManyWithoutOwnerNestedInput
    history?: HistoryEntryUncheckedUpdateManyWithoutUserNestedInput
    ratings?: RateUncheckedUpdateManyWithoutUserNestedInput
    organizationInfo?: organizationInfoUncheckedUpdateOneWithoutOrganizationNestedInput
    chatsAsUser1?: ChatUncheckedUpdateManyWithoutUser1NestedInput
    chatsAsUser2?: ChatUncheckedUpdateManyWithoutUser2NestedInput
    userBenefits?: UserBenefitUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChatUpsertWithoutMessagesInput = {
    update: XOR<ChatUpdateWithoutMessagesInput, ChatUncheckedUpdateWithoutMessagesInput>
    create: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
    where?: ChatWhereInput
  }

  export type ChatUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ChatWhereInput
    data: XOR<ChatUpdateWithoutMessagesInput, ChatUncheckedUpdateWithoutMessagesInput>
  }

  export type ChatUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user1?: UserUpdateOneRequiredWithoutChatsAsUser1NestedInput
    user2?: UserUpdateOneRequiredWithoutChatsAsUser2NestedInput
  }

  export type ChatUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user1Id?: StringFieldUpdateOperationsInput | string
    user2Id?: StringFieldUpdateOperationsInput | string
  }

  export type UserBenefitCreateWithoutBenefitInput = {
    id?: string
    createdAt?: Date | string
    startsAt: Date | string
    endsAt?: Date | string | null
    status?: $Enums.UserBenefitStatus
    source?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutUserBenefitsInput
  }

  export type UserBenefitUncheckedCreateWithoutBenefitInput = {
    id?: string
    createdAt?: Date | string
    userId: string
    startsAt: Date | string
    endsAt?: Date | string | null
    status?: $Enums.UserBenefitStatus
    source?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserBenefitCreateOrConnectWithoutBenefitInput = {
    where: UserBenefitWhereUniqueInput
    create: XOR<UserBenefitCreateWithoutBenefitInput, UserBenefitUncheckedCreateWithoutBenefitInput>
  }

  export type UserBenefitCreateManyBenefitInputEnvelope = {
    data: UserBenefitCreateManyBenefitInput | UserBenefitCreateManyBenefitInput[]
    skipDuplicates?: boolean
  }

  export type UserBenefitUpsertWithWhereUniqueWithoutBenefitInput = {
    where: UserBenefitWhereUniqueInput
    update: XOR<UserBenefitUpdateWithoutBenefitInput, UserBenefitUncheckedUpdateWithoutBenefitInput>
    create: XOR<UserBenefitCreateWithoutBenefitInput, UserBenefitUncheckedCreateWithoutBenefitInput>
  }

  export type UserBenefitUpdateWithWhereUniqueWithoutBenefitInput = {
    where: UserBenefitWhereUniqueInput
    data: XOR<UserBenefitUpdateWithoutBenefitInput, UserBenefitUncheckedUpdateWithoutBenefitInput>
  }

  export type UserBenefitUpdateManyWithWhereWithoutBenefitInput = {
    where: UserBenefitScalarWhereInput
    data: XOR<UserBenefitUpdateManyMutationInput, UserBenefitUncheckedUpdateManyWithoutBenefitInput>
  }

  export type UserCreateWithoutUserBenefitsInput = {
    id?: string
    createdAt?: Date | string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    parentalControl?: boolean
    active?: boolean
    cpf?: string | null
    cnpj?: string | null
    pix_key?: string | null
    picture?: string | null
    addressDistrict: string
    addressStreet: string
    addressNumber: number
    addressDetail?: string | null
    addressCep: string
    toys?: ToyCreateNestedManyWithoutOwnerInput
    history?: HistoryEntryCreateNestedManyWithoutUserInput
    ratings?: RateCreateNestedManyWithoutUserInput
    organizationInfo?: organizationInfoCreateNestedOneWithoutOrganizationInput
    chatsAsUser1?: ChatCreateNestedManyWithoutUser1Input
    chatsAsUser2?: ChatCreateNestedManyWithoutUser2Input
    messages?: MessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutUserBenefitsInput = {
    id?: string
    createdAt?: Date | string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    parentalControl?: boolean
    active?: boolean
    cpf?: string | null
    cnpj?: string | null
    pix_key?: string | null
    picture?: string | null
    addressDistrict: string
    addressStreet: string
    addressNumber: number
    addressDetail?: string | null
    addressCep: string
    toys?: ToyUncheckedCreateNestedManyWithoutOwnerInput
    history?: HistoryEntryUncheckedCreateNestedManyWithoutUserInput
    ratings?: RateUncheckedCreateNestedManyWithoutUserInput
    organizationInfo?: organizationInfoUncheckedCreateNestedOneWithoutOrganizationInput
    chatsAsUser1?: ChatUncheckedCreateNestedManyWithoutUser1Input
    chatsAsUser2?: ChatUncheckedCreateNestedManyWithoutUser2Input
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutUserBenefitsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserBenefitsInput, UserUncheckedCreateWithoutUserBenefitsInput>
  }

  export type BenefitCreateWithoutUserBenefitsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    key: string
    title: string
    description?: string | null
    durationDays?: number | null
    active?: boolean
  }

  export type BenefitUncheckedCreateWithoutUserBenefitsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    key: string
    title: string
    description?: string | null
    durationDays?: number | null
    active?: boolean
  }

  export type BenefitCreateOrConnectWithoutUserBenefitsInput = {
    where: BenefitWhereUniqueInput
    create: XOR<BenefitCreateWithoutUserBenefitsInput, BenefitUncheckedCreateWithoutUserBenefitsInput>
  }

  export type UserUpsertWithoutUserBenefitsInput = {
    update: XOR<UserUpdateWithoutUserBenefitsInput, UserUncheckedUpdateWithoutUserBenefitsInput>
    create: XOR<UserCreateWithoutUserBenefitsInput, UserUncheckedCreateWithoutUserBenefitsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserBenefitsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserBenefitsInput, UserUncheckedUpdateWithoutUserBenefitsInput>
  }

  export type UserUpdateWithoutUserBenefitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    parentalControl?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    pix_key?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    addressDistrict?: StringFieldUpdateOperationsInput | string
    addressStreet?: StringFieldUpdateOperationsInput | string
    addressNumber?: IntFieldUpdateOperationsInput | number
    addressDetail?: NullableStringFieldUpdateOperationsInput | string | null
    addressCep?: StringFieldUpdateOperationsInput | string
    toys?: ToyUpdateManyWithoutOwnerNestedInput
    history?: HistoryEntryUpdateManyWithoutUserNestedInput
    ratings?: RateUpdateManyWithoutUserNestedInput
    organizationInfo?: organizationInfoUpdateOneWithoutOrganizationNestedInput
    chatsAsUser1?: ChatUpdateManyWithoutUser1NestedInput
    chatsAsUser2?: ChatUpdateManyWithoutUser2NestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutUserBenefitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    parentalControl?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    pix_key?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    addressDistrict?: StringFieldUpdateOperationsInput | string
    addressStreet?: StringFieldUpdateOperationsInput | string
    addressNumber?: IntFieldUpdateOperationsInput | number
    addressDetail?: NullableStringFieldUpdateOperationsInput | string | null
    addressCep?: StringFieldUpdateOperationsInput | string
    toys?: ToyUncheckedUpdateManyWithoutOwnerNestedInput
    history?: HistoryEntryUncheckedUpdateManyWithoutUserNestedInput
    ratings?: RateUncheckedUpdateManyWithoutUserNestedInput
    organizationInfo?: organizationInfoUncheckedUpdateOneWithoutOrganizationNestedInput
    chatsAsUser1?: ChatUncheckedUpdateManyWithoutUser1NestedInput
    chatsAsUser2?: ChatUncheckedUpdateManyWithoutUser2NestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type BenefitUpsertWithoutUserBenefitsInput = {
    update: XOR<BenefitUpdateWithoutUserBenefitsInput, BenefitUncheckedUpdateWithoutUserBenefitsInput>
    create: XOR<BenefitCreateWithoutUserBenefitsInput, BenefitUncheckedCreateWithoutUserBenefitsInput>
    where?: BenefitWhereInput
  }

  export type BenefitUpdateToOneWithWhereWithoutUserBenefitsInput = {
    where?: BenefitWhereInput
    data: XOR<BenefitUpdateWithoutUserBenefitsInput, BenefitUncheckedUpdateWithoutUserBenefitsInput>
  }

  export type BenefitUpdateWithoutUserBenefitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    key?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    durationDays?: NullableIntFieldUpdateOperationsInput | number | null
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BenefitUncheckedUpdateWithoutUserBenefitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    key?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    durationDays?: NullableIntFieldUpdateOperationsInput | number | null
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ToyCreateManyOwnerInput = {
    id?: string
    createdAt?: Date | string
    name: string
    description: string
    price: number
    isNew: boolean
    canTrade: boolean
    canLend: boolean
    usageTime: number
    preservation: number
    type?: ToyCreatetypeInput | $Enums.ToyType[]
    ageGroup: $Enums.AgeRange
  }

  export type HistoryEntryCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    visible?: boolean
    toyId: string
  }

  export type RateCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    value: number
    comment?: string | null
  }

  export type ChatCreateManyUser1Input = {
    id?: string
    createdAt?: Date | string
    user2Id: string
  }

  export type ChatCreateManyUser2Input = {
    id?: string
    createdAt?: Date | string
    user1Id: string
  }

  export type MessageCreateManySenderInput = {
    id?: string
    createdAt?: Date | string
    content: string
    chatId: string
  }

  export type UserBenefitCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    benefitId: string
    startsAt: Date | string
    endsAt?: Date | string | null
    status?: $Enums.UserBenefitStatus
    source?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ToyUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isNew?: BoolFieldUpdateOperationsInput | boolean
    canTrade?: BoolFieldUpdateOperationsInput | boolean
    canLend?: BoolFieldUpdateOperationsInput | boolean
    usageTime?: IntFieldUpdateOperationsInput | number
    preservation?: IntFieldUpdateOperationsInput | number
    type?: ToyUpdatetypeInput | $Enums.ToyType[]
    ageGroup?: EnumAgeRangeFieldUpdateOperationsInput | $Enums.AgeRange
    history?: HistoryEntryUpdateManyWithoutToyNestedInput
    ToyPictures?: ToyPictureUpdateManyWithoutToyNestedInput
  }

  export type ToyUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isNew?: BoolFieldUpdateOperationsInput | boolean
    canTrade?: BoolFieldUpdateOperationsInput | boolean
    canLend?: BoolFieldUpdateOperationsInput | boolean
    usageTime?: IntFieldUpdateOperationsInput | number
    preservation?: IntFieldUpdateOperationsInput | number
    type?: ToyUpdatetypeInput | $Enums.ToyType[]
    ageGroup?: EnumAgeRangeFieldUpdateOperationsInput | $Enums.AgeRange
    history?: HistoryEntryUncheckedUpdateManyWithoutToyNestedInput
    ToyPictures?: ToyPictureUncheckedUpdateManyWithoutToyNestedInput
  }

  export type ToyUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isNew?: BoolFieldUpdateOperationsInput | boolean
    canTrade?: BoolFieldUpdateOperationsInput | boolean
    canLend?: BoolFieldUpdateOperationsInput | boolean
    usageTime?: IntFieldUpdateOperationsInput | number
    preservation?: IntFieldUpdateOperationsInput | number
    type?: ToyUpdatetypeInput | $Enums.ToyType[]
    ageGroup?: EnumAgeRangeFieldUpdateOperationsInput | $Enums.AgeRange
  }

  export type HistoryEntryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    visible?: BoolFieldUpdateOperationsInput | boolean
    toy?: ToyUpdateOneRequiredWithoutHistoryNestedInput
  }

  export type HistoryEntryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    visible?: BoolFieldUpdateOperationsInput | boolean
    toyId?: StringFieldUpdateOperationsInput | string
  }

  export type HistoryEntryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    visible?: BoolFieldUpdateOperationsInput | boolean
    toyId?: StringFieldUpdateOperationsInput | string
  }

  export type RateUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RateUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RateUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChatUpdateWithoutUser1Input = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user2?: UserUpdateOneRequiredWithoutChatsAsUser2NestedInput
    messages?: MessageUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutUser1Input = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user2Id?: StringFieldUpdateOperationsInput | string
    messages?: MessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateManyWithoutUser1Input = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user2Id?: StringFieldUpdateOperationsInput | string
  }

  export type ChatUpdateWithoutUser2Input = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user1?: UserUpdateOneRequiredWithoutChatsAsUser1NestedInput
    messages?: MessageUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutUser2Input = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user1Id?: StringFieldUpdateOperationsInput | string
    messages?: MessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateManyWithoutUser2Input = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user1Id?: StringFieldUpdateOperationsInput | string
  }

  export type MessageUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
  }

  export type UserBenefitUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumUserBenefitStatusFieldUpdateOperationsInput | $Enums.UserBenefitStatus
    source?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    benefit?: BenefitUpdateOneRequiredWithoutUserBenefitsNestedInput
  }

  export type UserBenefitUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    benefitId?: StringFieldUpdateOperationsInput | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumUserBenefitStatusFieldUpdateOperationsInput | $Enums.UserBenefitStatus
    source?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserBenefitUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    benefitId?: StringFieldUpdateOperationsInput | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumUserBenefitStatusFieldUpdateOperationsInput | $Enums.UserBenefitStatus
    source?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type HistoryEntryCreateManyToyInput = {
    id?: string
    createdAt?: Date | string
    visible?: boolean
    userId?: string | null
  }

  export type ToyPictureCreateManyToyInput = {
    id?: string
    order: number
    picture: string
  }

  export type HistoryEntryUpdateWithoutToyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    visible?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneWithoutHistoryNestedInput
  }

  export type HistoryEntryUncheckedUpdateWithoutToyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    visible?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HistoryEntryUncheckedUpdateManyWithoutToyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    visible?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ToyPictureUpdateWithoutToyInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    picture?: StringFieldUpdateOperationsInput | string
  }

  export type ToyPictureUncheckedUpdateWithoutToyInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    picture?: StringFieldUpdateOperationsInput | string
  }

  export type ToyPictureUncheckedUpdateManyWithoutToyInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    picture?: StringFieldUpdateOperationsInput | string
  }

  export type MessageCreateManyChatInput = {
    id?: string
    createdAt?: Date | string
    content: string
    senderId: string
  }

  export type MessageUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    sender?: UserUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageUncheckedUpdateManyWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
  }

  export type UserBenefitCreateManyBenefitInput = {
    id?: string
    createdAt?: Date | string
    userId: string
    startsAt: Date | string
    endsAt?: Date | string | null
    status?: $Enums.UserBenefitStatus
    source?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserBenefitUpdateWithoutBenefitInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumUserBenefitStatusFieldUpdateOperationsInput | $Enums.UserBenefitStatus
    source?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutUserBenefitsNestedInput
  }

  export type UserBenefitUncheckedUpdateWithoutBenefitInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumUserBenefitStatusFieldUpdateOperationsInput | $Enums.UserBenefitStatus
    source?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserBenefitUncheckedUpdateManyWithoutBenefitInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumUserBenefitStatusFieldUpdateOperationsInput | $Enums.UserBenefitStatus
    source?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}