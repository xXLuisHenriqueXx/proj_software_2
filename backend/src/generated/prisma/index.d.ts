
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
 * Model Toy
 * 
 */
export type Toy = $Result.DefaultSelection<Prisma.$ToyPayload>
/**
 * Model Lend
 * 
 */
export type Lend = $Result.DefaultSelection<Prisma.$LendPayload>
/**
 * Model HistoryEntry
 * 
 */
export type HistoryEntry = $Result.DefaultSelection<Prisma.$HistoryEntryPayload>
/**
 * Model Sale
 * 
 */
export type Sale = $Result.DefaultSelection<Prisma.$SalePayload>
/**
 * Model Rate
 * 
 */
export type Rate = $Result.DefaultSelection<Prisma.$RatePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

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
   * `prisma.toy`: Exposes CRUD operations for the **Toy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Toys
    * const toys = await prisma.toy.findMany()
    * ```
    */
  get toy(): Prisma.ToyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lend`: Exposes CRUD operations for the **Lend** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lends
    * const lends = await prisma.lend.findMany()
    * ```
    */
  get lend(): Prisma.LendDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.sale`: Exposes CRUD operations for the **Sale** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sales
    * const sales = await prisma.sale.findMany()
    * ```
    */
  get sale(): Prisma.SaleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rate`: Exposes CRUD operations for the **Rate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rates
    * const rates = await prisma.rate.findMany()
    * ```
    */
  get rate(): Prisma.RateDelegate<ExtArgs, ClientOptions>;
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
    Toy: 'Toy',
    Lend: 'Lend',
    HistoryEntry: 'HistoryEntry',
    Sale: 'Sale',
    Rate: 'Rate'
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
      modelProps: "user" | "toy" | "lend" | "historyEntry" | "sale" | "rate"
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
      Lend: {
        payload: Prisma.$LendPayload<ExtArgs>
        fields: Prisma.LendFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LendFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LendPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LendFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LendPayload>
          }
          findFirst: {
            args: Prisma.LendFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LendPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LendFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LendPayload>
          }
          findMany: {
            args: Prisma.LendFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LendPayload>[]
          }
          create: {
            args: Prisma.LendCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LendPayload>
          }
          createMany: {
            args: Prisma.LendCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LendCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LendPayload>[]
          }
          delete: {
            args: Prisma.LendDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LendPayload>
          }
          update: {
            args: Prisma.LendUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LendPayload>
          }
          deleteMany: {
            args: Prisma.LendDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LendUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LendUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LendPayload>[]
          }
          upsert: {
            args: Prisma.LendUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LendPayload>
          }
          aggregate: {
            args: Prisma.LendAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLend>
          }
          groupBy: {
            args: Prisma.LendGroupByArgs<ExtArgs>
            result: $Utils.Optional<LendGroupByOutputType>[]
          }
          count: {
            args: Prisma.LendCountArgs<ExtArgs>
            result: $Utils.Optional<LendCountAggregateOutputType> | number
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
      Sale: {
        payload: Prisma.$SalePayload<ExtArgs>
        fields: Prisma.SaleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SaleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SaleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          findFirst: {
            args: Prisma.SaleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SaleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          findMany: {
            args: Prisma.SaleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>[]
          }
          create: {
            args: Prisma.SaleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          createMany: {
            args: Prisma.SaleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SaleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>[]
          }
          delete: {
            args: Prisma.SaleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          update: {
            args: Prisma.SaleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          deleteMany: {
            args: Prisma.SaleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SaleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SaleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>[]
          }
          upsert: {
            args: Prisma.SaleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          aggregate: {
            args: Prisma.SaleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSale>
          }
          groupBy: {
            args: Prisma.SaleGroupByArgs<ExtArgs>
            result: $Utils.Optional<SaleGroupByOutputType>[]
          }
          count: {
            args: Prisma.SaleCountArgs<ExtArgs>
            result: $Utils.Optional<SaleCountAggregateOutputType> | number
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
    toy?: ToyOmit
    lend?: LendOmit
    historyEntry?: HistoryEntryOmit
    sale?: SaleOmit
    rate?: RateOmit
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
    lendsMade: number
    lendsTaken: number
    history: number
    soldToys: number
    boughtToys: number
    ratings: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    toys?: boolean | UserCountOutputTypeCountToysArgs
    lendsMade?: boolean | UserCountOutputTypeCountLendsMadeArgs
    lendsTaken?: boolean | UserCountOutputTypeCountLendsTakenArgs
    history?: boolean | UserCountOutputTypeCountHistoryArgs
    soldToys?: boolean | UserCountOutputTypeCountSoldToysArgs
    boughtToys?: boolean | UserCountOutputTypeCountBoughtToysArgs
    ratings?: boolean | UserCountOutputTypeCountRatingsArgs
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
  export type UserCountOutputTypeCountLendsMadeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LendWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLendsTakenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LendWhereInput
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
  export type UserCountOutputTypeCountSoldToysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBoughtToysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRatingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RateWhereInput
  }


  /**
   * Count Type ToyCountOutputType
   */

  export type ToyCountOutputType = {
    lends: number
    history: number
    sales: number
  }

  export type ToyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lends?: boolean | ToyCountOutputTypeCountLendsArgs
    history?: boolean | ToyCountOutputTypeCountHistoryArgs
    sales?: boolean | ToyCountOutputTypeCountSalesArgs
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
  export type ToyCountOutputTypeCountLendsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LendWhereInput
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
  export type ToyCountOutputTypeCountSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleWhereInput
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
    addressDistrict: string | null
    addressStreet: string | null
    addressNumber: number | null
    addressDetail: string | null
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
    addressDistrict: string | null
    addressStreet: string | null
    addressNumber: number | null
    addressDetail: string | null
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
    addressDistrict: number
    addressStreet: number
    addressNumber: number
    addressDetail: number
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
    addressDistrict?: true
    addressStreet?: true
    addressNumber?: true
    addressDetail?: true
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
    addressDistrict?: true
    addressStreet?: true
    addressNumber?: true
    addressDetail?: true
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
    addressDistrict?: true
    addressStreet?: true
    addressNumber?: true
    addressDetail?: true
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
    cpf: string
    addressDistrict: string
    addressStreet: string
    addressNumber: number
    addressDetail: string | null
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
    addressDistrict?: boolean
    addressStreet?: boolean
    addressNumber?: boolean
    addressDetail?: boolean
    toys?: boolean | User$toysArgs<ExtArgs>
    lendsMade?: boolean | User$lendsMadeArgs<ExtArgs>
    lendsTaken?: boolean | User$lendsTakenArgs<ExtArgs>
    history?: boolean | User$historyArgs<ExtArgs>
    soldToys?: boolean | User$soldToysArgs<ExtArgs>
    boughtToys?: boolean | User$boughtToysArgs<ExtArgs>
    ratings?: boolean | User$ratingsArgs<ExtArgs>
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
    addressDistrict?: boolean
    addressStreet?: boolean
    addressNumber?: boolean
    addressDetail?: boolean
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
    addressDistrict?: boolean
    addressStreet?: boolean
    addressNumber?: boolean
    addressDetail?: boolean
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
    addressDistrict?: boolean
    addressStreet?: boolean
    addressNumber?: boolean
    addressDetail?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "email" | "password" | "name" | "role" | "parentalControl" | "active" | "cpf" | "addressDistrict" | "addressStreet" | "addressNumber" | "addressDetail", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    toys?: boolean | User$toysArgs<ExtArgs>
    lendsMade?: boolean | User$lendsMadeArgs<ExtArgs>
    lendsTaken?: boolean | User$lendsTakenArgs<ExtArgs>
    history?: boolean | User$historyArgs<ExtArgs>
    soldToys?: boolean | User$soldToysArgs<ExtArgs>
    boughtToys?: boolean | User$boughtToysArgs<ExtArgs>
    ratings?: boolean | User$ratingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      toys: Prisma.$ToyPayload<ExtArgs>[]
      lendsMade: Prisma.$LendPayload<ExtArgs>[]
      lendsTaken: Prisma.$LendPayload<ExtArgs>[]
      history: Prisma.$HistoryEntryPayload<ExtArgs>[]
      soldToys: Prisma.$SalePayload<ExtArgs>[]
      boughtToys: Prisma.$SalePayload<ExtArgs>[]
      ratings: Prisma.$RatePayload<ExtArgs>[]
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
      cpf: string
      addressDistrict: string
      addressStreet: string
      addressNumber: number
      addressDetail: string | null
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
    lendsMade<T extends User$lendsMadeArgs<ExtArgs> = {}>(args?: Subset<T, User$lendsMadeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LendPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lendsTaken<T extends User$lendsTakenArgs<ExtArgs> = {}>(args?: Subset<T, User$lendsTakenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LendPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    history<T extends User$historyArgs<ExtArgs> = {}>(args?: Subset<T, User$historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    soldToys<T extends User$soldToysArgs<ExtArgs> = {}>(args?: Subset<T, User$soldToysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    boughtToys<T extends User$boughtToysArgs<ExtArgs> = {}>(args?: Subset<T, User$boughtToysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ratings<T extends User$ratingsArgs<ExtArgs> = {}>(args?: Subset<T, User$ratingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly addressDistrict: FieldRef<"User", 'String'>
    readonly addressStreet: FieldRef<"User", 'String'>
    readonly addressNumber: FieldRef<"User", 'Int'>
    readonly addressDetail: FieldRef<"User", 'String'>
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
   * User.lendsMade
   */
  export type User$lendsMadeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lend
     */
    select?: LendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lend
     */
    omit?: LendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LendInclude<ExtArgs> | null
    where?: LendWhereInput
    orderBy?: LendOrderByWithRelationInput | LendOrderByWithRelationInput[]
    cursor?: LendWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LendScalarFieldEnum | LendScalarFieldEnum[]
  }

  /**
   * User.lendsTaken
   */
  export type User$lendsTakenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lend
     */
    select?: LendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lend
     */
    omit?: LendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LendInclude<ExtArgs> | null
    where?: LendWhereInput
    orderBy?: LendOrderByWithRelationInput | LendOrderByWithRelationInput[]
    cursor?: LendWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LendScalarFieldEnum | LendScalarFieldEnum[]
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
   * User.soldToys
   */
  export type User$soldToysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    where?: SaleWhereInput
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    cursor?: SaleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * User.boughtToys
   */
  export type User$boughtToysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    where?: SaleWhereInput
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    cursor?: SaleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
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
    usageTime: number | null
    preservation: number | null
  }

  export type ToySumAggregateOutputType = {
    usageTime: number | null
    preservation: number | null
  }

  export type ToyMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    name: string | null
    ownerId: string | null
    usageTime: number | null
    preservation: number | null
  }

  export type ToyMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    name: string | null
    ownerId: string | null
    usageTime: number | null
    preservation: number | null
  }

  export type ToyCountAggregateOutputType = {
    id: number
    createdAt: number
    name: number
    ownerId: number
    usageTime: number
    preservation: number
    _all: number
  }


  export type ToyAvgAggregateInputType = {
    usageTime?: true
    preservation?: true
  }

  export type ToySumAggregateInputType = {
    usageTime?: true
    preservation?: true
  }

  export type ToyMinAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    ownerId?: true
    usageTime?: true
    preservation?: true
  }

  export type ToyMaxAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    ownerId?: true
    usageTime?: true
    preservation?: true
  }

  export type ToyCountAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    ownerId?: true
    usageTime?: true
    preservation?: true
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
    ownerId: string
    usageTime: number
    preservation: number
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
    ownerId?: boolean
    usageTime?: boolean
    preservation?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    lends?: boolean | Toy$lendsArgs<ExtArgs>
    history?: boolean | Toy$historyArgs<ExtArgs>
    sales?: boolean | Toy$salesArgs<ExtArgs>
    _count?: boolean | ToyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["toy"]>

  export type ToySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    name?: boolean
    ownerId?: boolean
    usageTime?: boolean
    preservation?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["toy"]>

  export type ToySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    name?: boolean
    ownerId?: boolean
    usageTime?: boolean
    preservation?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["toy"]>

  export type ToySelectScalar = {
    id?: boolean
    createdAt?: boolean
    name?: boolean
    ownerId?: boolean
    usageTime?: boolean
    preservation?: boolean
  }

  export type ToyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "name" | "ownerId" | "usageTime" | "preservation", ExtArgs["result"]["toy"]>
  export type ToyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    lends?: boolean | Toy$lendsArgs<ExtArgs>
    history?: boolean | Toy$historyArgs<ExtArgs>
    sales?: boolean | Toy$salesArgs<ExtArgs>
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
      lends: Prisma.$LendPayload<ExtArgs>[]
      history: Prisma.$HistoryEntryPayload<ExtArgs>[]
      sales: Prisma.$SalePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      name: string
      ownerId: string
      usageTime: number
      preservation: number
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
    lends<T extends Toy$lendsArgs<ExtArgs> = {}>(args?: Subset<T, Toy$lendsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LendPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    history<T extends Toy$historyArgs<ExtArgs> = {}>(args?: Subset<T, Toy$historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sales<T extends Toy$salesArgs<ExtArgs> = {}>(args?: Subset<T, Toy$salesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly ownerId: FieldRef<"Toy", 'String'>
    readonly usageTime: FieldRef<"Toy", 'Int'>
    readonly preservation: FieldRef<"Toy", 'Int'>
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
   * Toy.lends
   */
  export type Toy$lendsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lend
     */
    select?: LendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lend
     */
    omit?: LendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LendInclude<ExtArgs> | null
    where?: LendWhereInput
    orderBy?: LendOrderByWithRelationInput | LendOrderByWithRelationInput[]
    cursor?: LendWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LendScalarFieldEnum | LendScalarFieldEnum[]
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
   * Toy.sales
   */
  export type Toy$salesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    where?: SaleWhereInput
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    cursor?: SaleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
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
   * Model Lend
   */

  export type AggregateLend = {
    _count: LendCountAggregateOutputType | null
    _min: LendMinAggregateOutputType | null
    _max: LendMaxAggregateOutputType | null
  }

  export type LendMinAggregateOutputType = {
    id: string | null
    startDate: Date | null
    endDate: Date | null
    lenderId: string | null
    borrowerId: string | null
    toyId: string | null
  }

  export type LendMaxAggregateOutputType = {
    id: string | null
    startDate: Date | null
    endDate: Date | null
    lenderId: string | null
    borrowerId: string | null
    toyId: string | null
  }

  export type LendCountAggregateOutputType = {
    id: number
    startDate: number
    endDate: number
    lenderId: number
    borrowerId: number
    toyId: number
    _all: number
  }


  export type LendMinAggregateInputType = {
    id?: true
    startDate?: true
    endDate?: true
    lenderId?: true
    borrowerId?: true
    toyId?: true
  }

  export type LendMaxAggregateInputType = {
    id?: true
    startDate?: true
    endDate?: true
    lenderId?: true
    borrowerId?: true
    toyId?: true
  }

  export type LendCountAggregateInputType = {
    id?: true
    startDate?: true
    endDate?: true
    lenderId?: true
    borrowerId?: true
    toyId?: true
    _all?: true
  }

  export type LendAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lend to aggregate.
     */
    where?: LendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lends to fetch.
     */
    orderBy?: LendOrderByWithRelationInput | LendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lends
    **/
    _count?: true | LendCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LendMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LendMaxAggregateInputType
  }

  export type GetLendAggregateType<T extends LendAggregateArgs> = {
        [P in keyof T & keyof AggregateLend]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLend[P]>
      : GetScalarType<T[P], AggregateLend[P]>
  }




  export type LendGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LendWhereInput
    orderBy?: LendOrderByWithAggregationInput | LendOrderByWithAggregationInput[]
    by: LendScalarFieldEnum[] | LendScalarFieldEnum
    having?: LendScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LendCountAggregateInputType | true
    _min?: LendMinAggregateInputType
    _max?: LendMaxAggregateInputType
  }

  export type LendGroupByOutputType = {
    id: string
    startDate: Date
    endDate: Date | null
    lenderId: string
    borrowerId: string
    toyId: string
    _count: LendCountAggregateOutputType | null
    _min: LendMinAggregateOutputType | null
    _max: LendMaxAggregateOutputType | null
  }

  type GetLendGroupByPayload<T extends LendGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LendGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LendGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LendGroupByOutputType[P]>
            : GetScalarType<T[P], LendGroupByOutputType[P]>
        }
      >
    >


  export type LendSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startDate?: boolean
    endDate?: boolean
    lenderId?: boolean
    borrowerId?: boolean
    toyId?: boolean
    lender?: boolean | UserDefaultArgs<ExtArgs>
    borrower?: boolean | UserDefaultArgs<ExtArgs>
    toy?: boolean | ToyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lend"]>

  export type LendSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startDate?: boolean
    endDate?: boolean
    lenderId?: boolean
    borrowerId?: boolean
    toyId?: boolean
    lender?: boolean | UserDefaultArgs<ExtArgs>
    borrower?: boolean | UserDefaultArgs<ExtArgs>
    toy?: boolean | ToyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lend"]>

  export type LendSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startDate?: boolean
    endDate?: boolean
    lenderId?: boolean
    borrowerId?: boolean
    toyId?: boolean
    lender?: boolean | UserDefaultArgs<ExtArgs>
    borrower?: boolean | UserDefaultArgs<ExtArgs>
    toy?: boolean | ToyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lend"]>

  export type LendSelectScalar = {
    id?: boolean
    startDate?: boolean
    endDate?: boolean
    lenderId?: boolean
    borrowerId?: boolean
    toyId?: boolean
  }

  export type LendOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "startDate" | "endDate" | "lenderId" | "borrowerId" | "toyId", ExtArgs["result"]["lend"]>
  export type LendInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lender?: boolean | UserDefaultArgs<ExtArgs>
    borrower?: boolean | UserDefaultArgs<ExtArgs>
    toy?: boolean | ToyDefaultArgs<ExtArgs>
  }
  export type LendIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lender?: boolean | UserDefaultArgs<ExtArgs>
    borrower?: boolean | UserDefaultArgs<ExtArgs>
    toy?: boolean | ToyDefaultArgs<ExtArgs>
  }
  export type LendIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lender?: boolean | UserDefaultArgs<ExtArgs>
    borrower?: boolean | UserDefaultArgs<ExtArgs>
    toy?: boolean | ToyDefaultArgs<ExtArgs>
  }

  export type $LendPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lend"
    objects: {
      lender: Prisma.$UserPayload<ExtArgs>
      borrower: Prisma.$UserPayload<ExtArgs>
      toy: Prisma.$ToyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      startDate: Date
      endDate: Date | null
      lenderId: string
      borrowerId: string
      toyId: string
    }, ExtArgs["result"]["lend"]>
    composites: {}
  }

  type LendGetPayload<S extends boolean | null | undefined | LendDefaultArgs> = $Result.GetResult<Prisma.$LendPayload, S>

  type LendCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LendFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LendCountAggregateInputType | true
    }

  export interface LendDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lend'], meta: { name: 'Lend' } }
    /**
     * Find zero or one Lend that matches the filter.
     * @param {LendFindUniqueArgs} args - Arguments to find a Lend
     * @example
     * // Get one Lend
     * const lend = await prisma.lend.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LendFindUniqueArgs>(args: SelectSubset<T, LendFindUniqueArgs<ExtArgs>>): Prisma__LendClient<$Result.GetResult<Prisma.$LendPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lend that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LendFindUniqueOrThrowArgs} args - Arguments to find a Lend
     * @example
     * // Get one Lend
     * const lend = await prisma.lend.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LendFindUniqueOrThrowArgs>(args: SelectSubset<T, LendFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LendClient<$Result.GetResult<Prisma.$LendPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lend that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LendFindFirstArgs} args - Arguments to find a Lend
     * @example
     * // Get one Lend
     * const lend = await prisma.lend.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LendFindFirstArgs>(args?: SelectSubset<T, LendFindFirstArgs<ExtArgs>>): Prisma__LendClient<$Result.GetResult<Prisma.$LendPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lend that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LendFindFirstOrThrowArgs} args - Arguments to find a Lend
     * @example
     * // Get one Lend
     * const lend = await prisma.lend.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LendFindFirstOrThrowArgs>(args?: SelectSubset<T, LendFindFirstOrThrowArgs<ExtArgs>>): Prisma__LendClient<$Result.GetResult<Prisma.$LendPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lends that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LendFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lends
     * const lends = await prisma.lend.findMany()
     * 
     * // Get first 10 Lends
     * const lends = await prisma.lend.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lendWithIdOnly = await prisma.lend.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LendFindManyArgs>(args?: SelectSubset<T, LendFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LendPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lend.
     * @param {LendCreateArgs} args - Arguments to create a Lend.
     * @example
     * // Create one Lend
     * const Lend = await prisma.lend.create({
     *   data: {
     *     // ... data to create a Lend
     *   }
     * })
     * 
     */
    create<T extends LendCreateArgs>(args: SelectSubset<T, LendCreateArgs<ExtArgs>>): Prisma__LendClient<$Result.GetResult<Prisma.$LendPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lends.
     * @param {LendCreateManyArgs} args - Arguments to create many Lends.
     * @example
     * // Create many Lends
     * const lend = await prisma.lend.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LendCreateManyArgs>(args?: SelectSubset<T, LendCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lends and returns the data saved in the database.
     * @param {LendCreateManyAndReturnArgs} args - Arguments to create many Lends.
     * @example
     * // Create many Lends
     * const lend = await prisma.lend.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lends and only return the `id`
     * const lendWithIdOnly = await prisma.lend.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LendCreateManyAndReturnArgs>(args?: SelectSubset<T, LendCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LendPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lend.
     * @param {LendDeleteArgs} args - Arguments to delete one Lend.
     * @example
     * // Delete one Lend
     * const Lend = await prisma.lend.delete({
     *   where: {
     *     // ... filter to delete one Lend
     *   }
     * })
     * 
     */
    delete<T extends LendDeleteArgs>(args: SelectSubset<T, LendDeleteArgs<ExtArgs>>): Prisma__LendClient<$Result.GetResult<Prisma.$LendPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lend.
     * @param {LendUpdateArgs} args - Arguments to update one Lend.
     * @example
     * // Update one Lend
     * const lend = await prisma.lend.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LendUpdateArgs>(args: SelectSubset<T, LendUpdateArgs<ExtArgs>>): Prisma__LendClient<$Result.GetResult<Prisma.$LendPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lends.
     * @param {LendDeleteManyArgs} args - Arguments to filter Lends to delete.
     * @example
     * // Delete a few Lends
     * const { count } = await prisma.lend.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LendDeleteManyArgs>(args?: SelectSubset<T, LendDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LendUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lends
     * const lend = await prisma.lend.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LendUpdateManyArgs>(args: SelectSubset<T, LendUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lends and returns the data updated in the database.
     * @param {LendUpdateManyAndReturnArgs} args - Arguments to update many Lends.
     * @example
     * // Update many Lends
     * const lend = await prisma.lend.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lends and only return the `id`
     * const lendWithIdOnly = await prisma.lend.updateManyAndReturn({
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
    updateManyAndReturn<T extends LendUpdateManyAndReturnArgs>(args: SelectSubset<T, LendUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LendPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lend.
     * @param {LendUpsertArgs} args - Arguments to update or create a Lend.
     * @example
     * // Update or create a Lend
     * const lend = await prisma.lend.upsert({
     *   create: {
     *     // ... data to create a Lend
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lend we want to update
     *   }
     * })
     */
    upsert<T extends LendUpsertArgs>(args: SelectSubset<T, LendUpsertArgs<ExtArgs>>): Prisma__LendClient<$Result.GetResult<Prisma.$LendPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LendCountArgs} args - Arguments to filter Lends to count.
     * @example
     * // Count the number of Lends
     * const count = await prisma.lend.count({
     *   where: {
     *     // ... the filter for the Lends we want to count
     *   }
     * })
    **/
    count<T extends LendCountArgs>(
      args?: Subset<T, LendCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LendCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LendAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LendAggregateArgs>(args: Subset<T, LendAggregateArgs>): Prisma.PrismaPromise<GetLendAggregateType<T>>

    /**
     * Group by Lend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LendGroupByArgs} args - Group by arguments.
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
      T extends LendGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LendGroupByArgs['orderBy'] }
        : { orderBy?: LendGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LendGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLendGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lend model
   */
  readonly fields: LendFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lend.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LendClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    borrower<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Lend model
   */
  interface LendFieldRefs {
    readonly id: FieldRef<"Lend", 'String'>
    readonly startDate: FieldRef<"Lend", 'DateTime'>
    readonly endDate: FieldRef<"Lend", 'DateTime'>
    readonly lenderId: FieldRef<"Lend", 'String'>
    readonly borrowerId: FieldRef<"Lend", 'String'>
    readonly toyId: FieldRef<"Lend", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Lend findUnique
   */
  export type LendFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lend
     */
    select?: LendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lend
     */
    omit?: LendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LendInclude<ExtArgs> | null
    /**
     * Filter, which Lend to fetch.
     */
    where: LendWhereUniqueInput
  }

  /**
   * Lend findUniqueOrThrow
   */
  export type LendFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lend
     */
    select?: LendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lend
     */
    omit?: LendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LendInclude<ExtArgs> | null
    /**
     * Filter, which Lend to fetch.
     */
    where: LendWhereUniqueInput
  }

  /**
   * Lend findFirst
   */
  export type LendFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lend
     */
    select?: LendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lend
     */
    omit?: LendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LendInclude<ExtArgs> | null
    /**
     * Filter, which Lend to fetch.
     */
    where?: LendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lends to fetch.
     */
    orderBy?: LendOrderByWithRelationInput | LendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lends.
     */
    cursor?: LendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lends.
     */
    distinct?: LendScalarFieldEnum | LendScalarFieldEnum[]
  }

  /**
   * Lend findFirstOrThrow
   */
  export type LendFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lend
     */
    select?: LendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lend
     */
    omit?: LendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LendInclude<ExtArgs> | null
    /**
     * Filter, which Lend to fetch.
     */
    where?: LendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lends to fetch.
     */
    orderBy?: LendOrderByWithRelationInput | LendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lends.
     */
    cursor?: LendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lends.
     */
    distinct?: LendScalarFieldEnum | LendScalarFieldEnum[]
  }

  /**
   * Lend findMany
   */
  export type LendFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lend
     */
    select?: LendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lend
     */
    omit?: LendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LendInclude<ExtArgs> | null
    /**
     * Filter, which Lends to fetch.
     */
    where?: LendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lends to fetch.
     */
    orderBy?: LendOrderByWithRelationInput | LendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lends.
     */
    cursor?: LendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lends.
     */
    skip?: number
    distinct?: LendScalarFieldEnum | LendScalarFieldEnum[]
  }

  /**
   * Lend create
   */
  export type LendCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lend
     */
    select?: LendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lend
     */
    omit?: LendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LendInclude<ExtArgs> | null
    /**
     * The data needed to create a Lend.
     */
    data: XOR<LendCreateInput, LendUncheckedCreateInput>
  }

  /**
   * Lend createMany
   */
  export type LendCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lends.
     */
    data: LendCreateManyInput | LendCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lend createManyAndReturn
   */
  export type LendCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lend
     */
    select?: LendSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lend
     */
    omit?: LendOmit<ExtArgs> | null
    /**
     * The data used to create many Lends.
     */
    data: LendCreateManyInput | LendCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LendIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lend update
   */
  export type LendUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lend
     */
    select?: LendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lend
     */
    omit?: LendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LendInclude<ExtArgs> | null
    /**
     * The data needed to update a Lend.
     */
    data: XOR<LendUpdateInput, LendUncheckedUpdateInput>
    /**
     * Choose, which Lend to update.
     */
    where: LendWhereUniqueInput
  }

  /**
   * Lend updateMany
   */
  export type LendUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lends.
     */
    data: XOR<LendUpdateManyMutationInput, LendUncheckedUpdateManyInput>
    /**
     * Filter which Lends to update
     */
    where?: LendWhereInput
    /**
     * Limit how many Lends to update.
     */
    limit?: number
  }

  /**
   * Lend updateManyAndReturn
   */
  export type LendUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lend
     */
    select?: LendSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lend
     */
    omit?: LendOmit<ExtArgs> | null
    /**
     * The data used to update Lends.
     */
    data: XOR<LendUpdateManyMutationInput, LendUncheckedUpdateManyInput>
    /**
     * Filter which Lends to update
     */
    where?: LendWhereInput
    /**
     * Limit how many Lends to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LendIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lend upsert
   */
  export type LendUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lend
     */
    select?: LendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lend
     */
    omit?: LendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LendInclude<ExtArgs> | null
    /**
     * The filter to search for the Lend to update in case it exists.
     */
    where: LendWhereUniqueInput
    /**
     * In case the Lend found by the `where` argument doesn't exist, create a new Lend with this data.
     */
    create: XOR<LendCreateInput, LendUncheckedCreateInput>
    /**
     * In case the Lend was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LendUpdateInput, LendUncheckedUpdateInput>
  }

  /**
   * Lend delete
   */
  export type LendDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lend
     */
    select?: LendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lend
     */
    omit?: LendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LendInclude<ExtArgs> | null
    /**
     * Filter which Lend to delete.
     */
    where: LendWhereUniqueInput
  }

  /**
   * Lend deleteMany
   */
  export type LendDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lends to delete
     */
    where?: LendWhereInput
    /**
     * Limit how many Lends to delete.
     */
    limit?: number
  }

  /**
   * Lend without action
   */
  export type LendDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lend
     */
    select?: LendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lend
     */
    omit?: LendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LendInclude<ExtArgs> | null
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
   * Model Sale
   */

  export type AggregateSale = {
    _count: SaleCountAggregateOutputType | null
    _avg: SaleAvgAggregateOutputType | null
    _sum: SaleSumAggregateOutputType | null
    _min: SaleMinAggregateOutputType | null
    _max: SaleMaxAggregateOutputType | null
  }

  export type SaleAvgAggregateOutputType = {
    price: number | null
    discount: number | null
  }

  export type SaleSumAggregateOutputType = {
    price: number | null
    discount: number | null
  }

  export type SaleMinAggregateOutputType = {
    id: string | null
    ownerId: string | null
    buyerId: string | null
    toyId: string | null
    price: number | null
    negotiable: boolean | null
    discount: number | null
    paidFor: boolean | null
    paymentDate: Date | null
    itemReceived: boolean | null
    receiveDate: Date | null
  }

  export type SaleMaxAggregateOutputType = {
    id: string | null
    ownerId: string | null
    buyerId: string | null
    toyId: string | null
    price: number | null
    negotiable: boolean | null
    discount: number | null
    paidFor: boolean | null
    paymentDate: Date | null
    itemReceived: boolean | null
    receiveDate: Date | null
  }

  export type SaleCountAggregateOutputType = {
    id: number
    ownerId: number
    buyerId: number
    toyId: number
    price: number
    negotiable: number
    discount: number
    paidFor: number
    paymentDate: number
    itemReceived: number
    receiveDate: number
    _all: number
  }


  export type SaleAvgAggregateInputType = {
    price?: true
    discount?: true
  }

  export type SaleSumAggregateInputType = {
    price?: true
    discount?: true
  }

  export type SaleMinAggregateInputType = {
    id?: true
    ownerId?: true
    buyerId?: true
    toyId?: true
    price?: true
    negotiable?: true
    discount?: true
    paidFor?: true
    paymentDate?: true
    itemReceived?: true
    receiveDate?: true
  }

  export type SaleMaxAggregateInputType = {
    id?: true
    ownerId?: true
    buyerId?: true
    toyId?: true
    price?: true
    negotiable?: true
    discount?: true
    paidFor?: true
    paymentDate?: true
    itemReceived?: true
    receiveDate?: true
  }

  export type SaleCountAggregateInputType = {
    id?: true
    ownerId?: true
    buyerId?: true
    toyId?: true
    price?: true
    negotiable?: true
    discount?: true
    paidFor?: true
    paymentDate?: true
    itemReceived?: true
    receiveDate?: true
    _all?: true
  }

  export type SaleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sale to aggregate.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sales
    **/
    _count?: true | SaleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SaleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SaleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SaleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SaleMaxAggregateInputType
  }

  export type GetSaleAggregateType<T extends SaleAggregateArgs> = {
        [P in keyof T & keyof AggregateSale]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSale[P]>
      : GetScalarType<T[P], AggregateSale[P]>
  }




  export type SaleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleWhereInput
    orderBy?: SaleOrderByWithAggregationInput | SaleOrderByWithAggregationInput[]
    by: SaleScalarFieldEnum[] | SaleScalarFieldEnum
    having?: SaleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SaleCountAggregateInputType | true
    _avg?: SaleAvgAggregateInputType
    _sum?: SaleSumAggregateInputType
    _min?: SaleMinAggregateInputType
    _max?: SaleMaxAggregateInputType
  }

  export type SaleGroupByOutputType = {
    id: string
    ownerId: string
    buyerId: string
    toyId: string
    price: number
    negotiable: boolean
    discount: number | null
    paidFor: boolean
    paymentDate: Date | null
    itemReceived: boolean
    receiveDate: Date | null
    _count: SaleCountAggregateOutputType | null
    _avg: SaleAvgAggregateOutputType | null
    _sum: SaleSumAggregateOutputType | null
    _min: SaleMinAggregateOutputType | null
    _max: SaleMaxAggregateOutputType | null
  }

  type GetSaleGroupByPayload<T extends SaleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SaleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SaleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SaleGroupByOutputType[P]>
            : GetScalarType<T[P], SaleGroupByOutputType[P]>
        }
      >
    >


  export type SaleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    buyerId?: boolean
    toyId?: boolean
    price?: boolean
    negotiable?: boolean
    discount?: boolean
    paidFor?: boolean
    paymentDate?: boolean
    itemReceived?: boolean
    receiveDate?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    buyer?: boolean | UserDefaultArgs<ExtArgs>
    toy?: boolean | ToyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sale"]>

  export type SaleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    buyerId?: boolean
    toyId?: boolean
    price?: boolean
    negotiable?: boolean
    discount?: boolean
    paidFor?: boolean
    paymentDate?: boolean
    itemReceived?: boolean
    receiveDate?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    buyer?: boolean | UserDefaultArgs<ExtArgs>
    toy?: boolean | ToyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sale"]>

  export type SaleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    buyerId?: boolean
    toyId?: boolean
    price?: boolean
    negotiable?: boolean
    discount?: boolean
    paidFor?: boolean
    paymentDate?: boolean
    itemReceived?: boolean
    receiveDate?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    buyer?: boolean | UserDefaultArgs<ExtArgs>
    toy?: boolean | ToyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sale"]>

  export type SaleSelectScalar = {
    id?: boolean
    ownerId?: boolean
    buyerId?: boolean
    toyId?: boolean
    price?: boolean
    negotiable?: boolean
    discount?: boolean
    paidFor?: boolean
    paymentDate?: boolean
    itemReceived?: boolean
    receiveDate?: boolean
  }

  export type SaleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ownerId" | "buyerId" | "toyId" | "price" | "negotiable" | "discount" | "paidFor" | "paymentDate" | "itemReceived" | "receiveDate", ExtArgs["result"]["sale"]>
  export type SaleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    buyer?: boolean | UserDefaultArgs<ExtArgs>
    toy?: boolean | ToyDefaultArgs<ExtArgs>
  }
  export type SaleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    buyer?: boolean | UserDefaultArgs<ExtArgs>
    toy?: boolean | ToyDefaultArgs<ExtArgs>
  }
  export type SaleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    buyer?: boolean | UserDefaultArgs<ExtArgs>
    toy?: boolean | ToyDefaultArgs<ExtArgs>
  }

  export type $SalePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sale"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      buyer: Prisma.$UserPayload<ExtArgs>
      toy: Prisma.$ToyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ownerId: string
      buyerId: string
      toyId: string
      price: number
      negotiable: boolean
      discount: number | null
      paidFor: boolean
      paymentDate: Date | null
      itemReceived: boolean
      receiveDate: Date | null
    }, ExtArgs["result"]["sale"]>
    composites: {}
  }

  type SaleGetPayload<S extends boolean | null | undefined | SaleDefaultArgs> = $Result.GetResult<Prisma.$SalePayload, S>

  type SaleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SaleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SaleCountAggregateInputType | true
    }

  export interface SaleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sale'], meta: { name: 'Sale' } }
    /**
     * Find zero or one Sale that matches the filter.
     * @param {SaleFindUniqueArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SaleFindUniqueArgs>(args: SelectSubset<T, SaleFindUniqueArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sale that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SaleFindUniqueOrThrowArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SaleFindUniqueOrThrowArgs>(args: SelectSubset<T, SaleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sale that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleFindFirstArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SaleFindFirstArgs>(args?: SelectSubset<T, SaleFindFirstArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sale that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleFindFirstOrThrowArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SaleFindFirstOrThrowArgs>(args?: SelectSubset<T, SaleFindFirstOrThrowArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sales
     * const sales = await prisma.sale.findMany()
     * 
     * // Get first 10 Sales
     * const sales = await prisma.sale.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const saleWithIdOnly = await prisma.sale.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SaleFindManyArgs>(args?: SelectSubset<T, SaleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sale.
     * @param {SaleCreateArgs} args - Arguments to create a Sale.
     * @example
     * // Create one Sale
     * const Sale = await prisma.sale.create({
     *   data: {
     *     // ... data to create a Sale
     *   }
     * })
     * 
     */
    create<T extends SaleCreateArgs>(args: SelectSubset<T, SaleCreateArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sales.
     * @param {SaleCreateManyArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sale = await prisma.sale.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SaleCreateManyArgs>(args?: SelectSubset<T, SaleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sales and returns the data saved in the database.
     * @param {SaleCreateManyAndReturnArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sale = await prisma.sale.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sales and only return the `id`
     * const saleWithIdOnly = await prisma.sale.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SaleCreateManyAndReturnArgs>(args?: SelectSubset<T, SaleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sale.
     * @param {SaleDeleteArgs} args - Arguments to delete one Sale.
     * @example
     * // Delete one Sale
     * const Sale = await prisma.sale.delete({
     *   where: {
     *     // ... filter to delete one Sale
     *   }
     * })
     * 
     */
    delete<T extends SaleDeleteArgs>(args: SelectSubset<T, SaleDeleteArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sale.
     * @param {SaleUpdateArgs} args - Arguments to update one Sale.
     * @example
     * // Update one Sale
     * const sale = await prisma.sale.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SaleUpdateArgs>(args: SelectSubset<T, SaleUpdateArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sales.
     * @param {SaleDeleteManyArgs} args - Arguments to filter Sales to delete.
     * @example
     * // Delete a few Sales
     * const { count } = await prisma.sale.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SaleDeleteManyArgs>(args?: SelectSubset<T, SaleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sales
     * const sale = await prisma.sale.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SaleUpdateManyArgs>(args: SelectSubset<T, SaleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales and returns the data updated in the database.
     * @param {SaleUpdateManyAndReturnArgs} args - Arguments to update many Sales.
     * @example
     * // Update many Sales
     * const sale = await prisma.sale.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sales and only return the `id`
     * const saleWithIdOnly = await prisma.sale.updateManyAndReturn({
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
    updateManyAndReturn<T extends SaleUpdateManyAndReturnArgs>(args: SelectSubset<T, SaleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sale.
     * @param {SaleUpsertArgs} args - Arguments to update or create a Sale.
     * @example
     * // Update or create a Sale
     * const sale = await prisma.sale.upsert({
     *   create: {
     *     // ... data to create a Sale
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sale we want to update
     *   }
     * })
     */
    upsert<T extends SaleUpsertArgs>(args: SelectSubset<T, SaleUpsertArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleCountArgs} args - Arguments to filter Sales to count.
     * @example
     * // Count the number of Sales
     * const count = await prisma.sale.count({
     *   where: {
     *     // ... the filter for the Sales we want to count
     *   }
     * })
    **/
    count<T extends SaleCountArgs>(
      args?: Subset<T, SaleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SaleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SaleAggregateArgs>(args: Subset<T, SaleAggregateArgs>): Prisma.PrismaPromise<GetSaleAggregateType<T>>

    /**
     * Group by Sale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleGroupByArgs} args - Group by arguments.
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
      T extends SaleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SaleGroupByArgs['orderBy'] }
        : { orderBy?: SaleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SaleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sale model
   */
  readonly fields: SaleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sale.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SaleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    buyer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Sale model
   */
  interface SaleFieldRefs {
    readonly id: FieldRef<"Sale", 'String'>
    readonly ownerId: FieldRef<"Sale", 'String'>
    readonly buyerId: FieldRef<"Sale", 'String'>
    readonly toyId: FieldRef<"Sale", 'String'>
    readonly price: FieldRef<"Sale", 'Float'>
    readonly negotiable: FieldRef<"Sale", 'Boolean'>
    readonly discount: FieldRef<"Sale", 'Float'>
    readonly paidFor: FieldRef<"Sale", 'Boolean'>
    readonly paymentDate: FieldRef<"Sale", 'DateTime'>
    readonly itemReceived: FieldRef<"Sale", 'Boolean'>
    readonly receiveDate: FieldRef<"Sale", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sale findUnique
   */
  export type SaleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale findUniqueOrThrow
   */
  export type SaleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale findFirst
   */
  export type SaleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sales.
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sales.
     */
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Sale findFirstOrThrow
   */
  export type SaleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sales.
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sales.
     */
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Sale findMany
   */
  export type SaleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sales to fetch.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sales.
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Sale create
   */
  export type SaleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * The data needed to create a Sale.
     */
    data: XOR<SaleCreateInput, SaleUncheckedCreateInput>
  }

  /**
   * Sale createMany
   */
  export type SaleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sales.
     */
    data: SaleCreateManyInput | SaleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sale createManyAndReturn
   */
  export type SaleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * The data used to create many Sales.
     */
    data: SaleCreateManyInput | SaleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sale update
   */
  export type SaleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * The data needed to update a Sale.
     */
    data: XOR<SaleUpdateInput, SaleUncheckedUpdateInput>
    /**
     * Choose, which Sale to update.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale updateMany
   */
  export type SaleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sales.
     */
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyInput>
    /**
     * Filter which Sales to update
     */
    where?: SaleWhereInput
    /**
     * Limit how many Sales to update.
     */
    limit?: number
  }

  /**
   * Sale updateManyAndReturn
   */
  export type SaleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * The data used to update Sales.
     */
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyInput>
    /**
     * Filter which Sales to update
     */
    where?: SaleWhereInput
    /**
     * Limit how many Sales to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sale upsert
   */
  export type SaleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * The filter to search for the Sale to update in case it exists.
     */
    where: SaleWhereUniqueInput
    /**
     * In case the Sale found by the `where` argument doesn't exist, create a new Sale with this data.
     */
    create: XOR<SaleCreateInput, SaleUncheckedCreateInput>
    /**
     * In case the Sale was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SaleUpdateInput, SaleUncheckedUpdateInput>
  }

  /**
   * Sale delete
   */
  export type SaleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter which Sale to delete.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale deleteMany
   */
  export type SaleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sales to delete
     */
    where?: SaleWhereInput
    /**
     * Limit how many Sales to delete.
     */
    limit?: number
  }

  /**
   * Sale without action
   */
  export type SaleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
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
    addressDistrict: 'addressDistrict',
    addressStreet: 'addressStreet',
    addressNumber: 'addressNumber',
    addressDetail: 'addressDetail'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ToyScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    name: 'name',
    ownerId: 'ownerId',
    usageTime: 'usageTime',
    preservation: 'preservation'
  };

  export type ToyScalarFieldEnum = (typeof ToyScalarFieldEnum)[keyof typeof ToyScalarFieldEnum]


  export const LendScalarFieldEnum: {
    id: 'id',
    startDate: 'startDate',
    endDate: 'endDate',
    lenderId: 'lenderId',
    borrowerId: 'borrowerId',
    toyId: 'toyId'
  };

  export type LendScalarFieldEnum = (typeof LendScalarFieldEnum)[keyof typeof LendScalarFieldEnum]


  export const HistoryEntryScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    visible: 'visible',
    userId: 'userId',
    toyId: 'toyId'
  };

  export type HistoryEntryScalarFieldEnum = (typeof HistoryEntryScalarFieldEnum)[keyof typeof HistoryEntryScalarFieldEnum]


  export const SaleScalarFieldEnum: {
    id: 'id',
    ownerId: 'ownerId',
    buyerId: 'buyerId',
    toyId: 'toyId',
    price: 'price',
    negotiable: 'negotiable',
    discount: 'discount',
    paidFor: 'paidFor',
    paymentDate: 'paymentDate',
    itemReceived: 'itemReceived',
    receiveDate: 'receiveDate'
  };

  export type SaleScalarFieldEnum = (typeof SaleScalarFieldEnum)[keyof typeof SaleScalarFieldEnum]


  export const RateScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    value: 'value',
    comment: 'comment',
    userId: 'userId'
  };

  export type RateScalarFieldEnum = (typeof RateScalarFieldEnum)[keyof typeof RateScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
    cpf?: StringFilter<"User"> | string
    addressDistrict?: StringFilter<"User"> | string
    addressStreet?: StringFilter<"User"> | string
    addressNumber?: IntFilter<"User"> | number
    addressDetail?: StringNullableFilter<"User"> | string | null
    toys?: ToyListRelationFilter
    lendsMade?: LendListRelationFilter
    lendsTaken?: LendListRelationFilter
    history?: HistoryEntryListRelationFilter
    soldToys?: SaleListRelationFilter
    boughtToys?: SaleListRelationFilter
    ratings?: RateListRelationFilter
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
    cpf?: SortOrder
    addressDistrict?: SortOrder
    addressStreet?: SortOrder
    addressNumber?: SortOrder
    addressDetail?: SortOrderInput | SortOrder
    toys?: ToyOrderByRelationAggregateInput
    lendsMade?: LendOrderByRelationAggregateInput
    lendsTaken?: LendOrderByRelationAggregateInput
    history?: HistoryEntryOrderByRelationAggregateInput
    soldToys?: SaleOrderByRelationAggregateInput
    boughtToys?: SaleOrderByRelationAggregateInput
    ratings?: RateOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    cpf?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    parentalControl?: BoolFilter<"User"> | boolean
    active?: BoolFilter<"User"> | boolean
    addressDistrict?: StringFilter<"User"> | string
    addressStreet?: StringFilter<"User"> | string
    addressNumber?: IntFilter<"User"> | number
    addressDetail?: StringNullableFilter<"User"> | string | null
    toys?: ToyListRelationFilter
    lendsMade?: LendListRelationFilter
    lendsTaken?: LendListRelationFilter
    history?: HistoryEntryListRelationFilter
    soldToys?: SaleListRelationFilter
    boughtToys?: SaleListRelationFilter
    ratings?: RateListRelationFilter
  }, "id" | "email" | "cpf">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    parentalControl?: SortOrder
    active?: SortOrder
    cpf?: SortOrder
    addressDistrict?: SortOrder
    addressStreet?: SortOrder
    addressNumber?: SortOrder
    addressDetail?: SortOrderInput | SortOrder
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
    cpf?: StringWithAggregatesFilter<"User"> | string
    addressDistrict?: StringWithAggregatesFilter<"User"> | string
    addressStreet?: StringWithAggregatesFilter<"User"> | string
    addressNumber?: IntWithAggregatesFilter<"User"> | number
    addressDetail?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type ToyWhereInput = {
    AND?: ToyWhereInput | ToyWhereInput[]
    OR?: ToyWhereInput[]
    NOT?: ToyWhereInput | ToyWhereInput[]
    id?: StringFilter<"Toy"> | string
    createdAt?: DateTimeFilter<"Toy"> | Date | string
    name?: StringFilter<"Toy"> | string
    ownerId?: StringFilter<"Toy"> | string
    usageTime?: IntFilter<"Toy"> | number
    preservation?: IntFilter<"Toy"> | number
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    lends?: LendListRelationFilter
    history?: HistoryEntryListRelationFilter
    sales?: SaleListRelationFilter
  }

  export type ToyOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    usageTime?: SortOrder
    preservation?: SortOrder
    owner?: UserOrderByWithRelationInput
    lends?: LendOrderByRelationAggregateInput
    history?: HistoryEntryOrderByRelationAggregateInput
    sales?: SaleOrderByRelationAggregateInput
  }

  export type ToyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ToyWhereInput | ToyWhereInput[]
    OR?: ToyWhereInput[]
    NOT?: ToyWhereInput | ToyWhereInput[]
    createdAt?: DateTimeFilter<"Toy"> | Date | string
    name?: StringFilter<"Toy"> | string
    ownerId?: StringFilter<"Toy"> | string
    usageTime?: IntFilter<"Toy"> | number
    preservation?: IntFilter<"Toy"> | number
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    lends?: LendListRelationFilter
    history?: HistoryEntryListRelationFilter
    sales?: SaleListRelationFilter
  }, "id">

  export type ToyOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    usageTime?: SortOrder
    preservation?: SortOrder
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
    ownerId?: StringWithAggregatesFilter<"Toy"> | string
    usageTime?: IntWithAggregatesFilter<"Toy"> | number
    preservation?: IntWithAggregatesFilter<"Toy"> | number
  }

  export type LendWhereInput = {
    AND?: LendWhereInput | LendWhereInput[]
    OR?: LendWhereInput[]
    NOT?: LendWhereInput | LendWhereInput[]
    id?: StringFilter<"Lend"> | string
    startDate?: DateTimeFilter<"Lend"> | Date | string
    endDate?: DateTimeNullableFilter<"Lend"> | Date | string | null
    lenderId?: StringFilter<"Lend"> | string
    borrowerId?: StringFilter<"Lend"> | string
    toyId?: StringFilter<"Lend"> | string
    lender?: XOR<UserScalarRelationFilter, UserWhereInput>
    borrower?: XOR<UserScalarRelationFilter, UserWhereInput>
    toy?: XOR<ToyScalarRelationFilter, ToyWhereInput>
  }

  export type LendOrderByWithRelationInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    lenderId?: SortOrder
    borrowerId?: SortOrder
    toyId?: SortOrder
    lender?: UserOrderByWithRelationInput
    borrower?: UserOrderByWithRelationInput
    toy?: ToyOrderByWithRelationInput
  }

  export type LendWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LendWhereInput | LendWhereInput[]
    OR?: LendWhereInput[]
    NOT?: LendWhereInput | LendWhereInput[]
    startDate?: DateTimeFilter<"Lend"> | Date | string
    endDate?: DateTimeNullableFilter<"Lend"> | Date | string | null
    lenderId?: StringFilter<"Lend"> | string
    borrowerId?: StringFilter<"Lend"> | string
    toyId?: StringFilter<"Lend"> | string
    lender?: XOR<UserScalarRelationFilter, UserWhereInput>
    borrower?: XOR<UserScalarRelationFilter, UserWhereInput>
    toy?: XOR<ToyScalarRelationFilter, ToyWhereInput>
  }, "id">

  export type LendOrderByWithAggregationInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    lenderId?: SortOrder
    borrowerId?: SortOrder
    toyId?: SortOrder
    _count?: LendCountOrderByAggregateInput
    _max?: LendMaxOrderByAggregateInput
    _min?: LendMinOrderByAggregateInput
  }

  export type LendScalarWhereWithAggregatesInput = {
    AND?: LendScalarWhereWithAggregatesInput | LendScalarWhereWithAggregatesInput[]
    OR?: LendScalarWhereWithAggregatesInput[]
    NOT?: LendScalarWhereWithAggregatesInput | LendScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Lend"> | string
    startDate?: DateTimeWithAggregatesFilter<"Lend"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"Lend"> | Date | string | null
    lenderId?: StringWithAggregatesFilter<"Lend"> | string
    borrowerId?: StringWithAggregatesFilter<"Lend"> | string
    toyId?: StringWithAggregatesFilter<"Lend"> | string
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

  export type SaleWhereInput = {
    AND?: SaleWhereInput | SaleWhereInput[]
    OR?: SaleWhereInput[]
    NOT?: SaleWhereInput | SaleWhereInput[]
    id?: StringFilter<"Sale"> | string
    ownerId?: StringFilter<"Sale"> | string
    buyerId?: StringFilter<"Sale"> | string
    toyId?: StringFilter<"Sale"> | string
    price?: FloatFilter<"Sale"> | number
    negotiable?: BoolFilter<"Sale"> | boolean
    discount?: FloatNullableFilter<"Sale"> | number | null
    paidFor?: BoolFilter<"Sale"> | boolean
    paymentDate?: DateTimeNullableFilter<"Sale"> | Date | string | null
    itemReceived?: BoolFilter<"Sale"> | boolean
    receiveDate?: DateTimeNullableFilter<"Sale"> | Date | string | null
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    buyer?: XOR<UserScalarRelationFilter, UserWhereInput>
    toy?: XOR<ToyScalarRelationFilter, ToyWhereInput>
  }

  export type SaleOrderByWithRelationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    buyerId?: SortOrder
    toyId?: SortOrder
    price?: SortOrder
    negotiable?: SortOrder
    discount?: SortOrderInput | SortOrder
    paidFor?: SortOrder
    paymentDate?: SortOrderInput | SortOrder
    itemReceived?: SortOrder
    receiveDate?: SortOrderInput | SortOrder
    owner?: UserOrderByWithRelationInput
    buyer?: UserOrderByWithRelationInput
    toy?: ToyOrderByWithRelationInput
  }

  export type SaleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SaleWhereInput | SaleWhereInput[]
    OR?: SaleWhereInput[]
    NOT?: SaleWhereInput | SaleWhereInput[]
    ownerId?: StringFilter<"Sale"> | string
    buyerId?: StringFilter<"Sale"> | string
    toyId?: StringFilter<"Sale"> | string
    price?: FloatFilter<"Sale"> | number
    negotiable?: BoolFilter<"Sale"> | boolean
    discount?: FloatNullableFilter<"Sale"> | number | null
    paidFor?: BoolFilter<"Sale"> | boolean
    paymentDate?: DateTimeNullableFilter<"Sale"> | Date | string | null
    itemReceived?: BoolFilter<"Sale"> | boolean
    receiveDate?: DateTimeNullableFilter<"Sale"> | Date | string | null
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    buyer?: XOR<UserScalarRelationFilter, UserWhereInput>
    toy?: XOR<ToyScalarRelationFilter, ToyWhereInput>
  }, "id">

  export type SaleOrderByWithAggregationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    buyerId?: SortOrder
    toyId?: SortOrder
    price?: SortOrder
    negotiable?: SortOrder
    discount?: SortOrderInput | SortOrder
    paidFor?: SortOrder
    paymentDate?: SortOrderInput | SortOrder
    itemReceived?: SortOrder
    receiveDate?: SortOrderInput | SortOrder
    _count?: SaleCountOrderByAggregateInput
    _avg?: SaleAvgOrderByAggregateInput
    _max?: SaleMaxOrderByAggregateInput
    _min?: SaleMinOrderByAggregateInput
    _sum?: SaleSumOrderByAggregateInput
  }

  export type SaleScalarWhereWithAggregatesInput = {
    AND?: SaleScalarWhereWithAggregatesInput | SaleScalarWhereWithAggregatesInput[]
    OR?: SaleScalarWhereWithAggregatesInput[]
    NOT?: SaleScalarWhereWithAggregatesInput | SaleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Sale"> | string
    ownerId?: StringWithAggregatesFilter<"Sale"> | string
    buyerId?: StringWithAggregatesFilter<"Sale"> | string
    toyId?: StringWithAggregatesFilter<"Sale"> | string
    price?: FloatWithAggregatesFilter<"Sale"> | number
    negotiable?: BoolWithAggregatesFilter<"Sale"> | boolean
    discount?: FloatNullableWithAggregatesFilter<"Sale"> | number | null
    paidFor?: BoolWithAggregatesFilter<"Sale"> | boolean
    paymentDate?: DateTimeNullableWithAggregatesFilter<"Sale"> | Date | string | null
    itemReceived?: BoolWithAggregatesFilter<"Sale"> | boolean
    receiveDate?: DateTimeNullableWithAggregatesFilter<"Sale"> | Date | string | null
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

  export type UserCreateInput = {
    id?: string
    createdAt?: Date | string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    parentalControl?: boolean
    active?: boolean
    cpf: string
    addressDistrict: string
    addressStreet: string
    addressNumber: number
    addressDetail?: string | null
    toys?: ToyCreateNestedManyWithoutOwnerInput
    lendsMade?: LendCreateNestedManyWithoutLenderInput
    lendsTaken?: LendCreateNestedManyWithoutBorrowerInput
    history?: HistoryEntryCreateNestedManyWithoutUserInput
    soldToys?: SaleCreateNestedManyWithoutOwnerInput
    boughtToys?: SaleCreateNestedManyWithoutBuyerInput
    ratings?: RateCreateNestedManyWithoutUserInput
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
    cpf: string
    addressDistrict: string
    addressStreet: string
    addressNumber: number
    addressDetail?: string | null
    toys?: ToyUncheckedCreateNestedManyWithoutOwnerInput
    lendsMade?: LendUncheckedCreateNestedManyWithoutLenderInput
    lendsTaken?: LendUncheckedCreateNestedManyWithoutBorrowerInput
    history?: HistoryEntryUncheckedCreateNestedManyWithoutUserInput
    soldToys?: SaleUncheckedCreateNestedManyWithoutOwnerInput
    boughtToys?: SaleUncheckedCreateNestedManyWithoutBuyerInput
    ratings?: RateUncheckedCreateNestedManyWithoutUserInput
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
    cpf?: StringFieldUpdateOperationsInput | string
    addressDistrict?: StringFieldUpdateOperationsInput | string
    addressStreet?: StringFieldUpdateOperationsInput | string
    addressNumber?: IntFieldUpdateOperationsInput | number
    addressDetail?: NullableStringFieldUpdateOperationsInput | string | null
    toys?: ToyUpdateManyWithoutOwnerNestedInput
    lendsMade?: LendUpdateManyWithoutLenderNestedInput
    lendsTaken?: LendUpdateManyWithoutBorrowerNestedInput
    history?: HistoryEntryUpdateManyWithoutUserNestedInput
    soldToys?: SaleUpdateManyWithoutOwnerNestedInput
    boughtToys?: SaleUpdateManyWithoutBuyerNestedInput
    ratings?: RateUpdateManyWithoutUserNestedInput
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
    cpf?: StringFieldUpdateOperationsInput | string
    addressDistrict?: StringFieldUpdateOperationsInput | string
    addressStreet?: StringFieldUpdateOperationsInput | string
    addressNumber?: IntFieldUpdateOperationsInput | number
    addressDetail?: NullableStringFieldUpdateOperationsInput | string | null
    toys?: ToyUncheckedUpdateManyWithoutOwnerNestedInput
    lendsMade?: LendUncheckedUpdateManyWithoutLenderNestedInput
    lendsTaken?: LendUncheckedUpdateManyWithoutBorrowerNestedInput
    history?: HistoryEntryUncheckedUpdateManyWithoutUserNestedInput
    soldToys?: SaleUncheckedUpdateManyWithoutOwnerNestedInput
    boughtToys?: SaleUncheckedUpdateManyWithoutBuyerNestedInput
    ratings?: RateUncheckedUpdateManyWithoutUserNestedInput
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
    cpf: string
    addressDistrict: string
    addressStreet: string
    addressNumber: number
    addressDetail?: string | null
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
    cpf?: StringFieldUpdateOperationsInput | string
    addressDistrict?: StringFieldUpdateOperationsInput | string
    addressStreet?: StringFieldUpdateOperationsInput | string
    addressNumber?: IntFieldUpdateOperationsInput | number
    addressDetail?: NullableStringFieldUpdateOperationsInput | string | null
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
    cpf?: StringFieldUpdateOperationsInput | string
    addressDistrict?: StringFieldUpdateOperationsInput | string
    addressStreet?: StringFieldUpdateOperationsInput | string
    addressNumber?: IntFieldUpdateOperationsInput | number
    addressDetail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ToyCreateInput = {
    id?: string
    createdAt?: Date | string
    name: string
    usageTime: number
    preservation: number
    owner: UserCreateNestedOneWithoutToysInput
    lends?: LendCreateNestedManyWithoutToyInput
    history?: HistoryEntryCreateNestedManyWithoutToyInput
    sales?: SaleCreateNestedManyWithoutToyInput
  }

  export type ToyUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    name: string
    ownerId: string
    usageTime: number
    preservation: number
    lends?: LendUncheckedCreateNestedManyWithoutToyInput
    history?: HistoryEntryUncheckedCreateNestedManyWithoutToyInput
    sales?: SaleUncheckedCreateNestedManyWithoutToyInput
  }

  export type ToyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    usageTime?: IntFieldUpdateOperationsInput | number
    preservation?: IntFieldUpdateOperationsInput | number
    owner?: UserUpdateOneRequiredWithoutToysNestedInput
    lends?: LendUpdateManyWithoutToyNestedInput
    history?: HistoryEntryUpdateManyWithoutToyNestedInput
    sales?: SaleUpdateManyWithoutToyNestedInput
  }

  export type ToyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    usageTime?: IntFieldUpdateOperationsInput | number
    preservation?: IntFieldUpdateOperationsInput | number
    lends?: LendUncheckedUpdateManyWithoutToyNestedInput
    history?: HistoryEntryUncheckedUpdateManyWithoutToyNestedInput
    sales?: SaleUncheckedUpdateManyWithoutToyNestedInput
  }

  export type ToyCreateManyInput = {
    id?: string
    createdAt?: Date | string
    name: string
    ownerId: string
    usageTime: number
    preservation: number
  }

  export type ToyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    usageTime?: IntFieldUpdateOperationsInput | number
    preservation?: IntFieldUpdateOperationsInput | number
  }

  export type ToyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    usageTime?: IntFieldUpdateOperationsInput | number
    preservation?: IntFieldUpdateOperationsInput | number
  }

  export type LendCreateInput = {
    id?: string
    startDate: Date | string
    endDate?: Date | string | null
    lender: UserCreateNestedOneWithoutLendsMadeInput
    borrower: UserCreateNestedOneWithoutLendsTakenInput
    toy: ToyCreateNestedOneWithoutLendsInput
  }

  export type LendUncheckedCreateInput = {
    id?: string
    startDate: Date | string
    endDate?: Date | string | null
    lenderId: string
    borrowerId: string
    toyId: string
  }

  export type LendUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lender?: UserUpdateOneRequiredWithoutLendsMadeNestedInput
    borrower?: UserUpdateOneRequiredWithoutLendsTakenNestedInput
    toy?: ToyUpdateOneRequiredWithoutLendsNestedInput
  }

  export type LendUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lenderId?: StringFieldUpdateOperationsInput | string
    borrowerId?: StringFieldUpdateOperationsInput | string
    toyId?: StringFieldUpdateOperationsInput | string
  }

  export type LendCreateManyInput = {
    id?: string
    startDate: Date | string
    endDate?: Date | string | null
    lenderId: string
    borrowerId: string
    toyId: string
  }

  export type LendUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LendUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lenderId?: StringFieldUpdateOperationsInput | string
    borrowerId?: StringFieldUpdateOperationsInput | string
    toyId?: StringFieldUpdateOperationsInput | string
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

  export type SaleCreateInput = {
    id?: string
    price: number
    negotiable?: boolean
    discount?: number | null
    paidFor?: boolean
    paymentDate?: Date | string | null
    itemReceived?: boolean
    receiveDate?: Date | string | null
    owner: UserCreateNestedOneWithoutSoldToysInput
    buyer: UserCreateNestedOneWithoutBoughtToysInput
    toy: ToyCreateNestedOneWithoutSalesInput
  }

  export type SaleUncheckedCreateInput = {
    id?: string
    ownerId: string
    buyerId: string
    toyId: string
    price: number
    negotiable?: boolean
    discount?: number | null
    paidFor?: boolean
    paymentDate?: Date | string | null
    itemReceived?: boolean
    receiveDate?: Date | string | null
  }

  export type SaleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    negotiable?: BoolFieldUpdateOperationsInput | boolean
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    paidFor?: BoolFieldUpdateOperationsInput | boolean
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itemReceived?: BoolFieldUpdateOperationsInput | boolean
    receiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owner?: UserUpdateOneRequiredWithoutSoldToysNestedInput
    buyer?: UserUpdateOneRequiredWithoutBoughtToysNestedInput
    toy?: ToyUpdateOneRequiredWithoutSalesNestedInput
  }

  export type SaleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    toyId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    negotiable?: BoolFieldUpdateOperationsInput | boolean
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    paidFor?: BoolFieldUpdateOperationsInput | boolean
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itemReceived?: BoolFieldUpdateOperationsInput | boolean
    receiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SaleCreateManyInput = {
    id?: string
    ownerId: string
    buyerId: string
    toyId: string
    price: number
    negotiable?: boolean
    discount?: number | null
    paidFor?: boolean
    paymentDate?: Date | string | null
    itemReceived?: boolean
    receiveDate?: Date | string | null
  }

  export type SaleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    negotiable?: BoolFieldUpdateOperationsInput | boolean
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    paidFor?: BoolFieldUpdateOperationsInput | boolean
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itemReceived?: BoolFieldUpdateOperationsInput | boolean
    receiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SaleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    toyId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    negotiable?: BoolFieldUpdateOperationsInput | boolean
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    paidFor?: BoolFieldUpdateOperationsInput | boolean
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itemReceived?: BoolFieldUpdateOperationsInput | boolean
    receiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type ToyListRelationFilter = {
    every?: ToyWhereInput
    some?: ToyWhereInput
    none?: ToyWhereInput
  }

  export type LendListRelationFilter = {
    every?: LendWhereInput
    some?: LendWhereInput
    none?: LendWhereInput
  }

  export type HistoryEntryListRelationFilter = {
    every?: HistoryEntryWhereInput
    some?: HistoryEntryWhereInput
    none?: HistoryEntryWhereInput
  }

  export type SaleListRelationFilter = {
    every?: SaleWhereInput
    some?: SaleWhereInput
    none?: SaleWhereInput
  }

  export type RateListRelationFilter = {
    every?: RateWhereInput
    some?: RateWhereInput
    none?: RateWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ToyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LendOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HistoryEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SaleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RateOrderByRelationAggregateInput = {
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
    addressDistrict?: SortOrder
    addressStreet?: SortOrder
    addressNumber?: SortOrder
    addressDetail?: SortOrder
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
    addressDistrict?: SortOrder
    addressStreet?: SortOrder
    addressNumber?: SortOrder
    addressDetail?: SortOrder
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
    addressDistrict?: SortOrder
    addressStreet?: SortOrder
    addressNumber?: SortOrder
    addressDetail?: SortOrder
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ToyCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    usageTime?: SortOrder
    preservation?: SortOrder
  }

  export type ToyAvgOrderByAggregateInput = {
    usageTime?: SortOrder
    preservation?: SortOrder
  }

  export type ToyMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    usageTime?: SortOrder
    preservation?: SortOrder
  }

  export type ToyMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    usageTime?: SortOrder
    preservation?: SortOrder
  }

  export type ToySumOrderByAggregateInput = {
    usageTime?: SortOrder
    preservation?: SortOrder
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

  export type ToyScalarRelationFilter = {
    is?: ToyWhereInput
    isNot?: ToyWhereInput
  }

  export type LendCountOrderByAggregateInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    lenderId?: SortOrder
    borrowerId?: SortOrder
    toyId?: SortOrder
  }

  export type LendMaxOrderByAggregateInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    lenderId?: SortOrder
    borrowerId?: SortOrder
    toyId?: SortOrder
  }

  export type LendMinOrderByAggregateInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    lenderId?: SortOrder
    borrowerId?: SortOrder
    toyId?: SortOrder
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type SaleCountOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    buyerId?: SortOrder
    toyId?: SortOrder
    price?: SortOrder
    negotiable?: SortOrder
    discount?: SortOrder
    paidFor?: SortOrder
    paymentDate?: SortOrder
    itemReceived?: SortOrder
    receiveDate?: SortOrder
  }

  export type SaleAvgOrderByAggregateInput = {
    price?: SortOrder
    discount?: SortOrder
  }

  export type SaleMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    buyerId?: SortOrder
    toyId?: SortOrder
    price?: SortOrder
    negotiable?: SortOrder
    discount?: SortOrder
    paidFor?: SortOrder
    paymentDate?: SortOrder
    itemReceived?: SortOrder
    receiveDate?: SortOrder
  }

  export type SaleMinOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    buyerId?: SortOrder
    toyId?: SortOrder
    price?: SortOrder
    negotiable?: SortOrder
    discount?: SortOrder
    paidFor?: SortOrder
    paymentDate?: SortOrder
    itemReceived?: SortOrder
    receiveDate?: SortOrder
  }

  export type SaleSumOrderByAggregateInput = {
    price?: SortOrder
    discount?: SortOrder
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

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type ToyCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ToyCreateWithoutOwnerInput, ToyUncheckedCreateWithoutOwnerInput> | ToyCreateWithoutOwnerInput[] | ToyUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ToyCreateOrConnectWithoutOwnerInput | ToyCreateOrConnectWithoutOwnerInput[]
    createMany?: ToyCreateManyOwnerInputEnvelope
    connect?: ToyWhereUniqueInput | ToyWhereUniqueInput[]
  }

  export type LendCreateNestedManyWithoutLenderInput = {
    create?: XOR<LendCreateWithoutLenderInput, LendUncheckedCreateWithoutLenderInput> | LendCreateWithoutLenderInput[] | LendUncheckedCreateWithoutLenderInput[]
    connectOrCreate?: LendCreateOrConnectWithoutLenderInput | LendCreateOrConnectWithoutLenderInput[]
    createMany?: LendCreateManyLenderInputEnvelope
    connect?: LendWhereUniqueInput | LendWhereUniqueInput[]
  }

  export type LendCreateNestedManyWithoutBorrowerInput = {
    create?: XOR<LendCreateWithoutBorrowerInput, LendUncheckedCreateWithoutBorrowerInput> | LendCreateWithoutBorrowerInput[] | LendUncheckedCreateWithoutBorrowerInput[]
    connectOrCreate?: LendCreateOrConnectWithoutBorrowerInput | LendCreateOrConnectWithoutBorrowerInput[]
    createMany?: LendCreateManyBorrowerInputEnvelope
    connect?: LendWhereUniqueInput | LendWhereUniqueInput[]
  }

  export type HistoryEntryCreateNestedManyWithoutUserInput = {
    create?: XOR<HistoryEntryCreateWithoutUserInput, HistoryEntryUncheckedCreateWithoutUserInput> | HistoryEntryCreateWithoutUserInput[] | HistoryEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HistoryEntryCreateOrConnectWithoutUserInput | HistoryEntryCreateOrConnectWithoutUserInput[]
    createMany?: HistoryEntryCreateManyUserInputEnvelope
    connect?: HistoryEntryWhereUniqueInput | HistoryEntryWhereUniqueInput[]
  }

  export type SaleCreateNestedManyWithoutOwnerInput = {
    create?: XOR<SaleCreateWithoutOwnerInput, SaleUncheckedCreateWithoutOwnerInput> | SaleCreateWithoutOwnerInput[] | SaleUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutOwnerInput | SaleCreateOrConnectWithoutOwnerInput[]
    createMany?: SaleCreateManyOwnerInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type SaleCreateNestedManyWithoutBuyerInput = {
    create?: XOR<SaleCreateWithoutBuyerInput, SaleUncheckedCreateWithoutBuyerInput> | SaleCreateWithoutBuyerInput[] | SaleUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutBuyerInput | SaleCreateOrConnectWithoutBuyerInput[]
    createMany?: SaleCreateManyBuyerInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type RateCreateNestedManyWithoutUserInput = {
    create?: XOR<RateCreateWithoutUserInput, RateUncheckedCreateWithoutUserInput> | RateCreateWithoutUserInput[] | RateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RateCreateOrConnectWithoutUserInput | RateCreateOrConnectWithoutUserInput[]
    createMany?: RateCreateManyUserInputEnvelope
    connect?: RateWhereUniqueInput | RateWhereUniqueInput[]
  }

  export type ToyUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ToyCreateWithoutOwnerInput, ToyUncheckedCreateWithoutOwnerInput> | ToyCreateWithoutOwnerInput[] | ToyUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ToyCreateOrConnectWithoutOwnerInput | ToyCreateOrConnectWithoutOwnerInput[]
    createMany?: ToyCreateManyOwnerInputEnvelope
    connect?: ToyWhereUniqueInput | ToyWhereUniqueInput[]
  }

  export type LendUncheckedCreateNestedManyWithoutLenderInput = {
    create?: XOR<LendCreateWithoutLenderInput, LendUncheckedCreateWithoutLenderInput> | LendCreateWithoutLenderInput[] | LendUncheckedCreateWithoutLenderInput[]
    connectOrCreate?: LendCreateOrConnectWithoutLenderInput | LendCreateOrConnectWithoutLenderInput[]
    createMany?: LendCreateManyLenderInputEnvelope
    connect?: LendWhereUniqueInput | LendWhereUniqueInput[]
  }

  export type LendUncheckedCreateNestedManyWithoutBorrowerInput = {
    create?: XOR<LendCreateWithoutBorrowerInput, LendUncheckedCreateWithoutBorrowerInput> | LendCreateWithoutBorrowerInput[] | LendUncheckedCreateWithoutBorrowerInput[]
    connectOrCreate?: LendCreateOrConnectWithoutBorrowerInput | LendCreateOrConnectWithoutBorrowerInput[]
    createMany?: LendCreateManyBorrowerInputEnvelope
    connect?: LendWhereUniqueInput | LendWhereUniqueInput[]
  }

  export type HistoryEntryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<HistoryEntryCreateWithoutUserInput, HistoryEntryUncheckedCreateWithoutUserInput> | HistoryEntryCreateWithoutUserInput[] | HistoryEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HistoryEntryCreateOrConnectWithoutUserInput | HistoryEntryCreateOrConnectWithoutUserInput[]
    createMany?: HistoryEntryCreateManyUserInputEnvelope
    connect?: HistoryEntryWhereUniqueInput | HistoryEntryWhereUniqueInput[]
  }

  export type SaleUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<SaleCreateWithoutOwnerInput, SaleUncheckedCreateWithoutOwnerInput> | SaleCreateWithoutOwnerInput[] | SaleUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutOwnerInput | SaleCreateOrConnectWithoutOwnerInput[]
    createMany?: SaleCreateManyOwnerInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type SaleUncheckedCreateNestedManyWithoutBuyerInput = {
    create?: XOR<SaleCreateWithoutBuyerInput, SaleUncheckedCreateWithoutBuyerInput> | SaleCreateWithoutBuyerInput[] | SaleUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutBuyerInput | SaleCreateOrConnectWithoutBuyerInput[]
    createMany?: SaleCreateManyBuyerInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type RateUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RateCreateWithoutUserInput, RateUncheckedCreateWithoutUserInput> | RateCreateWithoutUserInput[] | RateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RateCreateOrConnectWithoutUserInput | RateCreateOrConnectWithoutUserInput[]
    createMany?: RateCreateManyUserInputEnvelope
    connect?: RateWhereUniqueInput | RateWhereUniqueInput[]
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

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
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

  export type LendUpdateManyWithoutLenderNestedInput = {
    create?: XOR<LendCreateWithoutLenderInput, LendUncheckedCreateWithoutLenderInput> | LendCreateWithoutLenderInput[] | LendUncheckedCreateWithoutLenderInput[]
    connectOrCreate?: LendCreateOrConnectWithoutLenderInput | LendCreateOrConnectWithoutLenderInput[]
    upsert?: LendUpsertWithWhereUniqueWithoutLenderInput | LendUpsertWithWhereUniqueWithoutLenderInput[]
    createMany?: LendCreateManyLenderInputEnvelope
    set?: LendWhereUniqueInput | LendWhereUniqueInput[]
    disconnect?: LendWhereUniqueInput | LendWhereUniqueInput[]
    delete?: LendWhereUniqueInput | LendWhereUniqueInput[]
    connect?: LendWhereUniqueInput | LendWhereUniqueInput[]
    update?: LendUpdateWithWhereUniqueWithoutLenderInput | LendUpdateWithWhereUniqueWithoutLenderInput[]
    updateMany?: LendUpdateManyWithWhereWithoutLenderInput | LendUpdateManyWithWhereWithoutLenderInput[]
    deleteMany?: LendScalarWhereInput | LendScalarWhereInput[]
  }

  export type LendUpdateManyWithoutBorrowerNestedInput = {
    create?: XOR<LendCreateWithoutBorrowerInput, LendUncheckedCreateWithoutBorrowerInput> | LendCreateWithoutBorrowerInput[] | LendUncheckedCreateWithoutBorrowerInput[]
    connectOrCreate?: LendCreateOrConnectWithoutBorrowerInput | LendCreateOrConnectWithoutBorrowerInput[]
    upsert?: LendUpsertWithWhereUniqueWithoutBorrowerInput | LendUpsertWithWhereUniqueWithoutBorrowerInput[]
    createMany?: LendCreateManyBorrowerInputEnvelope
    set?: LendWhereUniqueInput | LendWhereUniqueInput[]
    disconnect?: LendWhereUniqueInput | LendWhereUniqueInput[]
    delete?: LendWhereUniqueInput | LendWhereUniqueInput[]
    connect?: LendWhereUniqueInput | LendWhereUniqueInput[]
    update?: LendUpdateWithWhereUniqueWithoutBorrowerInput | LendUpdateWithWhereUniqueWithoutBorrowerInput[]
    updateMany?: LendUpdateManyWithWhereWithoutBorrowerInput | LendUpdateManyWithWhereWithoutBorrowerInput[]
    deleteMany?: LendScalarWhereInput | LendScalarWhereInput[]
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

  export type SaleUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<SaleCreateWithoutOwnerInput, SaleUncheckedCreateWithoutOwnerInput> | SaleCreateWithoutOwnerInput[] | SaleUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutOwnerInput | SaleCreateOrConnectWithoutOwnerInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutOwnerInput | SaleUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: SaleCreateManyOwnerInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutOwnerInput | SaleUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutOwnerInput | SaleUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type SaleUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<SaleCreateWithoutBuyerInput, SaleUncheckedCreateWithoutBuyerInput> | SaleCreateWithoutBuyerInput[] | SaleUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutBuyerInput | SaleCreateOrConnectWithoutBuyerInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutBuyerInput | SaleUpsertWithWhereUniqueWithoutBuyerInput[]
    createMany?: SaleCreateManyBuyerInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutBuyerInput | SaleUpdateWithWhereUniqueWithoutBuyerInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutBuyerInput | SaleUpdateManyWithWhereWithoutBuyerInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
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

  export type LendUncheckedUpdateManyWithoutLenderNestedInput = {
    create?: XOR<LendCreateWithoutLenderInput, LendUncheckedCreateWithoutLenderInput> | LendCreateWithoutLenderInput[] | LendUncheckedCreateWithoutLenderInput[]
    connectOrCreate?: LendCreateOrConnectWithoutLenderInput | LendCreateOrConnectWithoutLenderInput[]
    upsert?: LendUpsertWithWhereUniqueWithoutLenderInput | LendUpsertWithWhereUniqueWithoutLenderInput[]
    createMany?: LendCreateManyLenderInputEnvelope
    set?: LendWhereUniqueInput | LendWhereUniqueInput[]
    disconnect?: LendWhereUniqueInput | LendWhereUniqueInput[]
    delete?: LendWhereUniqueInput | LendWhereUniqueInput[]
    connect?: LendWhereUniqueInput | LendWhereUniqueInput[]
    update?: LendUpdateWithWhereUniqueWithoutLenderInput | LendUpdateWithWhereUniqueWithoutLenderInput[]
    updateMany?: LendUpdateManyWithWhereWithoutLenderInput | LendUpdateManyWithWhereWithoutLenderInput[]
    deleteMany?: LendScalarWhereInput | LendScalarWhereInput[]
  }

  export type LendUncheckedUpdateManyWithoutBorrowerNestedInput = {
    create?: XOR<LendCreateWithoutBorrowerInput, LendUncheckedCreateWithoutBorrowerInput> | LendCreateWithoutBorrowerInput[] | LendUncheckedCreateWithoutBorrowerInput[]
    connectOrCreate?: LendCreateOrConnectWithoutBorrowerInput | LendCreateOrConnectWithoutBorrowerInput[]
    upsert?: LendUpsertWithWhereUniqueWithoutBorrowerInput | LendUpsertWithWhereUniqueWithoutBorrowerInput[]
    createMany?: LendCreateManyBorrowerInputEnvelope
    set?: LendWhereUniqueInput | LendWhereUniqueInput[]
    disconnect?: LendWhereUniqueInput | LendWhereUniqueInput[]
    delete?: LendWhereUniqueInput | LendWhereUniqueInput[]
    connect?: LendWhereUniqueInput | LendWhereUniqueInput[]
    update?: LendUpdateWithWhereUniqueWithoutBorrowerInput | LendUpdateWithWhereUniqueWithoutBorrowerInput[]
    updateMany?: LendUpdateManyWithWhereWithoutBorrowerInput | LendUpdateManyWithWhereWithoutBorrowerInput[]
    deleteMany?: LendScalarWhereInput | LendScalarWhereInput[]
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

  export type SaleUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<SaleCreateWithoutOwnerInput, SaleUncheckedCreateWithoutOwnerInput> | SaleCreateWithoutOwnerInput[] | SaleUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutOwnerInput | SaleCreateOrConnectWithoutOwnerInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutOwnerInput | SaleUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: SaleCreateManyOwnerInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutOwnerInput | SaleUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutOwnerInput | SaleUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type SaleUncheckedUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<SaleCreateWithoutBuyerInput, SaleUncheckedCreateWithoutBuyerInput> | SaleCreateWithoutBuyerInput[] | SaleUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutBuyerInput | SaleCreateOrConnectWithoutBuyerInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutBuyerInput | SaleUpsertWithWhereUniqueWithoutBuyerInput[]
    createMany?: SaleCreateManyBuyerInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutBuyerInput | SaleUpdateWithWhereUniqueWithoutBuyerInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutBuyerInput | SaleUpdateManyWithWhereWithoutBuyerInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
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

  export type UserCreateNestedOneWithoutToysInput = {
    create?: XOR<UserCreateWithoutToysInput, UserUncheckedCreateWithoutToysInput>
    connectOrCreate?: UserCreateOrConnectWithoutToysInput
    connect?: UserWhereUniqueInput
  }

  export type LendCreateNestedManyWithoutToyInput = {
    create?: XOR<LendCreateWithoutToyInput, LendUncheckedCreateWithoutToyInput> | LendCreateWithoutToyInput[] | LendUncheckedCreateWithoutToyInput[]
    connectOrCreate?: LendCreateOrConnectWithoutToyInput | LendCreateOrConnectWithoutToyInput[]
    createMany?: LendCreateManyToyInputEnvelope
    connect?: LendWhereUniqueInput | LendWhereUniqueInput[]
  }

  export type HistoryEntryCreateNestedManyWithoutToyInput = {
    create?: XOR<HistoryEntryCreateWithoutToyInput, HistoryEntryUncheckedCreateWithoutToyInput> | HistoryEntryCreateWithoutToyInput[] | HistoryEntryUncheckedCreateWithoutToyInput[]
    connectOrCreate?: HistoryEntryCreateOrConnectWithoutToyInput | HistoryEntryCreateOrConnectWithoutToyInput[]
    createMany?: HistoryEntryCreateManyToyInputEnvelope
    connect?: HistoryEntryWhereUniqueInput | HistoryEntryWhereUniqueInput[]
  }

  export type SaleCreateNestedManyWithoutToyInput = {
    create?: XOR<SaleCreateWithoutToyInput, SaleUncheckedCreateWithoutToyInput> | SaleCreateWithoutToyInput[] | SaleUncheckedCreateWithoutToyInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutToyInput | SaleCreateOrConnectWithoutToyInput[]
    createMany?: SaleCreateManyToyInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type LendUncheckedCreateNestedManyWithoutToyInput = {
    create?: XOR<LendCreateWithoutToyInput, LendUncheckedCreateWithoutToyInput> | LendCreateWithoutToyInput[] | LendUncheckedCreateWithoutToyInput[]
    connectOrCreate?: LendCreateOrConnectWithoutToyInput | LendCreateOrConnectWithoutToyInput[]
    createMany?: LendCreateManyToyInputEnvelope
    connect?: LendWhereUniqueInput | LendWhereUniqueInput[]
  }

  export type HistoryEntryUncheckedCreateNestedManyWithoutToyInput = {
    create?: XOR<HistoryEntryCreateWithoutToyInput, HistoryEntryUncheckedCreateWithoutToyInput> | HistoryEntryCreateWithoutToyInput[] | HistoryEntryUncheckedCreateWithoutToyInput[]
    connectOrCreate?: HistoryEntryCreateOrConnectWithoutToyInput | HistoryEntryCreateOrConnectWithoutToyInput[]
    createMany?: HistoryEntryCreateManyToyInputEnvelope
    connect?: HistoryEntryWhereUniqueInput | HistoryEntryWhereUniqueInput[]
  }

  export type SaleUncheckedCreateNestedManyWithoutToyInput = {
    create?: XOR<SaleCreateWithoutToyInput, SaleUncheckedCreateWithoutToyInput> | SaleCreateWithoutToyInput[] | SaleUncheckedCreateWithoutToyInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutToyInput | SaleCreateOrConnectWithoutToyInput[]
    createMany?: SaleCreateManyToyInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutToysNestedInput = {
    create?: XOR<UserCreateWithoutToysInput, UserUncheckedCreateWithoutToysInput>
    connectOrCreate?: UserCreateOrConnectWithoutToysInput
    upsert?: UserUpsertWithoutToysInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutToysInput, UserUpdateWithoutToysInput>, UserUncheckedUpdateWithoutToysInput>
  }

  export type LendUpdateManyWithoutToyNestedInput = {
    create?: XOR<LendCreateWithoutToyInput, LendUncheckedCreateWithoutToyInput> | LendCreateWithoutToyInput[] | LendUncheckedCreateWithoutToyInput[]
    connectOrCreate?: LendCreateOrConnectWithoutToyInput | LendCreateOrConnectWithoutToyInput[]
    upsert?: LendUpsertWithWhereUniqueWithoutToyInput | LendUpsertWithWhereUniqueWithoutToyInput[]
    createMany?: LendCreateManyToyInputEnvelope
    set?: LendWhereUniqueInput | LendWhereUniqueInput[]
    disconnect?: LendWhereUniqueInput | LendWhereUniqueInput[]
    delete?: LendWhereUniqueInput | LendWhereUniqueInput[]
    connect?: LendWhereUniqueInput | LendWhereUniqueInput[]
    update?: LendUpdateWithWhereUniqueWithoutToyInput | LendUpdateWithWhereUniqueWithoutToyInput[]
    updateMany?: LendUpdateManyWithWhereWithoutToyInput | LendUpdateManyWithWhereWithoutToyInput[]
    deleteMany?: LendScalarWhereInput | LendScalarWhereInput[]
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

  export type SaleUpdateManyWithoutToyNestedInput = {
    create?: XOR<SaleCreateWithoutToyInput, SaleUncheckedCreateWithoutToyInput> | SaleCreateWithoutToyInput[] | SaleUncheckedCreateWithoutToyInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutToyInput | SaleCreateOrConnectWithoutToyInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutToyInput | SaleUpsertWithWhereUniqueWithoutToyInput[]
    createMany?: SaleCreateManyToyInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutToyInput | SaleUpdateWithWhereUniqueWithoutToyInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutToyInput | SaleUpdateManyWithWhereWithoutToyInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type LendUncheckedUpdateManyWithoutToyNestedInput = {
    create?: XOR<LendCreateWithoutToyInput, LendUncheckedCreateWithoutToyInput> | LendCreateWithoutToyInput[] | LendUncheckedCreateWithoutToyInput[]
    connectOrCreate?: LendCreateOrConnectWithoutToyInput | LendCreateOrConnectWithoutToyInput[]
    upsert?: LendUpsertWithWhereUniqueWithoutToyInput | LendUpsertWithWhereUniqueWithoutToyInput[]
    createMany?: LendCreateManyToyInputEnvelope
    set?: LendWhereUniqueInput | LendWhereUniqueInput[]
    disconnect?: LendWhereUniqueInput | LendWhereUniqueInput[]
    delete?: LendWhereUniqueInput | LendWhereUniqueInput[]
    connect?: LendWhereUniqueInput | LendWhereUniqueInput[]
    update?: LendUpdateWithWhereUniqueWithoutToyInput | LendUpdateWithWhereUniqueWithoutToyInput[]
    updateMany?: LendUpdateManyWithWhereWithoutToyInput | LendUpdateManyWithWhereWithoutToyInput[]
    deleteMany?: LendScalarWhereInput | LendScalarWhereInput[]
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

  export type SaleUncheckedUpdateManyWithoutToyNestedInput = {
    create?: XOR<SaleCreateWithoutToyInput, SaleUncheckedCreateWithoutToyInput> | SaleCreateWithoutToyInput[] | SaleUncheckedCreateWithoutToyInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutToyInput | SaleCreateOrConnectWithoutToyInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutToyInput | SaleUpsertWithWhereUniqueWithoutToyInput[]
    createMany?: SaleCreateManyToyInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutToyInput | SaleUpdateWithWhereUniqueWithoutToyInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutToyInput | SaleUpdateManyWithWhereWithoutToyInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutLendsMadeInput = {
    create?: XOR<UserCreateWithoutLendsMadeInput, UserUncheckedCreateWithoutLendsMadeInput>
    connectOrCreate?: UserCreateOrConnectWithoutLendsMadeInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutLendsTakenInput = {
    create?: XOR<UserCreateWithoutLendsTakenInput, UserUncheckedCreateWithoutLendsTakenInput>
    connectOrCreate?: UserCreateOrConnectWithoutLendsTakenInput
    connect?: UserWhereUniqueInput
  }

  export type ToyCreateNestedOneWithoutLendsInput = {
    create?: XOR<ToyCreateWithoutLendsInput, ToyUncheckedCreateWithoutLendsInput>
    connectOrCreate?: ToyCreateOrConnectWithoutLendsInput
    connect?: ToyWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutLendsMadeNestedInput = {
    create?: XOR<UserCreateWithoutLendsMadeInput, UserUncheckedCreateWithoutLendsMadeInput>
    connectOrCreate?: UserCreateOrConnectWithoutLendsMadeInput
    upsert?: UserUpsertWithoutLendsMadeInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLendsMadeInput, UserUpdateWithoutLendsMadeInput>, UserUncheckedUpdateWithoutLendsMadeInput>
  }

  export type UserUpdateOneRequiredWithoutLendsTakenNestedInput = {
    create?: XOR<UserCreateWithoutLendsTakenInput, UserUncheckedCreateWithoutLendsTakenInput>
    connectOrCreate?: UserCreateOrConnectWithoutLendsTakenInput
    upsert?: UserUpsertWithoutLendsTakenInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLendsTakenInput, UserUpdateWithoutLendsTakenInput>, UserUncheckedUpdateWithoutLendsTakenInput>
  }

  export type ToyUpdateOneRequiredWithoutLendsNestedInput = {
    create?: XOR<ToyCreateWithoutLendsInput, ToyUncheckedCreateWithoutLendsInput>
    connectOrCreate?: ToyCreateOrConnectWithoutLendsInput
    upsert?: ToyUpsertWithoutLendsInput
    connect?: ToyWhereUniqueInput
    update?: XOR<XOR<ToyUpdateToOneWithWhereWithoutLendsInput, ToyUpdateWithoutLendsInput>, ToyUncheckedUpdateWithoutLendsInput>
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

  export type UserCreateNestedOneWithoutSoldToysInput = {
    create?: XOR<UserCreateWithoutSoldToysInput, UserUncheckedCreateWithoutSoldToysInput>
    connectOrCreate?: UserCreateOrConnectWithoutSoldToysInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBoughtToysInput = {
    create?: XOR<UserCreateWithoutBoughtToysInput, UserUncheckedCreateWithoutBoughtToysInput>
    connectOrCreate?: UserCreateOrConnectWithoutBoughtToysInput
    connect?: UserWhereUniqueInput
  }

  export type ToyCreateNestedOneWithoutSalesInput = {
    create?: XOR<ToyCreateWithoutSalesInput, ToyUncheckedCreateWithoutSalesInput>
    connectOrCreate?: ToyCreateOrConnectWithoutSalesInput
    connect?: ToyWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutSoldToysNestedInput = {
    create?: XOR<UserCreateWithoutSoldToysInput, UserUncheckedCreateWithoutSoldToysInput>
    connectOrCreate?: UserCreateOrConnectWithoutSoldToysInput
    upsert?: UserUpsertWithoutSoldToysInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSoldToysInput, UserUpdateWithoutSoldToysInput>, UserUncheckedUpdateWithoutSoldToysInput>
  }

  export type UserUpdateOneRequiredWithoutBoughtToysNestedInput = {
    create?: XOR<UserCreateWithoutBoughtToysInput, UserUncheckedCreateWithoutBoughtToysInput>
    connectOrCreate?: UserCreateOrConnectWithoutBoughtToysInput
    upsert?: UserUpsertWithoutBoughtToysInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBoughtToysInput, UserUpdateWithoutBoughtToysInput>, UserUncheckedUpdateWithoutBoughtToysInput>
  }

  export type ToyUpdateOneRequiredWithoutSalesNestedInput = {
    create?: XOR<ToyCreateWithoutSalesInput, ToyUncheckedCreateWithoutSalesInput>
    connectOrCreate?: ToyCreateOrConnectWithoutSalesInput
    upsert?: ToyUpsertWithoutSalesInput
    connect?: ToyWhereUniqueInput
    update?: XOR<XOR<ToyUpdateToOneWithWhereWithoutSalesInput, ToyUpdateWithoutSalesInput>, ToyUncheckedUpdateWithoutSalesInput>
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type ToyCreateWithoutOwnerInput = {
    id?: string
    createdAt?: Date | string
    name: string
    usageTime: number
    preservation: number
    lends?: LendCreateNestedManyWithoutToyInput
    history?: HistoryEntryCreateNestedManyWithoutToyInput
    sales?: SaleCreateNestedManyWithoutToyInput
  }

  export type ToyUncheckedCreateWithoutOwnerInput = {
    id?: string
    createdAt?: Date | string
    name: string
    usageTime: number
    preservation: number
    lends?: LendUncheckedCreateNestedManyWithoutToyInput
    history?: HistoryEntryUncheckedCreateNestedManyWithoutToyInput
    sales?: SaleUncheckedCreateNestedManyWithoutToyInput
  }

  export type ToyCreateOrConnectWithoutOwnerInput = {
    where: ToyWhereUniqueInput
    create: XOR<ToyCreateWithoutOwnerInput, ToyUncheckedCreateWithoutOwnerInput>
  }

  export type ToyCreateManyOwnerInputEnvelope = {
    data: ToyCreateManyOwnerInput | ToyCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type LendCreateWithoutLenderInput = {
    id?: string
    startDate: Date | string
    endDate?: Date | string | null
    borrower: UserCreateNestedOneWithoutLendsTakenInput
    toy: ToyCreateNestedOneWithoutLendsInput
  }

  export type LendUncheckedCreateWithoutLenderInput = {
    id?: string
    startDate: Date | string
    endDate?: Date | string | null
    borrowerId: string
    toyId: string
  }

  export type LendCreateOrConnectWithoutLenderInput = {
    where: LendWhereUniqueInput
    create: XOR<LendCreateWithoutLenderInput, LendUncheckedCreateWithoutLenderInput>
  }

  export type LendCreateManyLenderInputEnvelope = {
    data: LendCreateManyLenderInput | LendCreateManyLenderInput[]
    skipDuplicates?: boolean
  }

  export type LendCreateWithoutBorrowerInput = {
    id?: string
    startDate: Date | string
    endDate?: Date | string | null
    lender: UserCreateNestedOneWithoutLendsMadeInput
    toy: ToyCreateNestedOneWithoutLendsInput
  }

  export type LendUncheckedCreateWithoutBorrowerInput = {
    id?: string
    startDate: Date | string
    endDate?: Date | string | null
    lenderId: string
    toyId: string
  }

  export type LendCreateOrConnectWithoutBorrowerInput = {
    where: LendWhereUniqueInput
    create: XOR<LendCreateWithoutBorrowerInput, LendUncheckedCreateWithoutBorrowerInput>
  }

  export type LendCreateManyBorrowerInputEnvelope = {
    data: LendCreateManyBorrowerInput | LendCreateManyBorrowerInput[]
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

  export type SaleCreateWithoutOwnerInput = {
    id?: string
    price: number
    negotiable?: boolean
    discount?: number | null
    paidFor?: boolean
    paymentDate?: Date | string | null
    itemReceived?: boolean
    receiveDate?: Date | string | null
    buyer: UserCreateNestedOneWithoutBoughtToysInput
    toy: ToyCreateNestedOneWithoutSalesInput
  }

  export type SaleUncheckedCreateWithoutOwnerInput = {
    id?: string
    buyerId: string
    toyId: string
    price: number
    negotiable?: boolean
    discount?: number | null
    paidFor?: boolean
    paymentDate?: Date | string | null
    itemReceived?: boolean
    receiveDate?: Date | string | null
  }

  export type SaleCreateOrConnectWithoutOwnerInput = {
    where: SaleWhereUniqueInput
    create: XOR<SaleCreateWithoutOwnerInput, SaleUncheckedCreateWithoutOwnerInput>
  }

  export type SaleCreateManyOwnerInputEnvelope = {
    data: SaleCreateManyOwnerInput | SaleCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type SaleCreateWithoutBuyerInput = {
    id?: string
    price: number
    negotiable?: boolean
    discount?: number | null
    paidFor?: boolean
    paymentDate?: Date | string | null
    itemReceived?: boolean
    receiveDate?: Date | string | null
    owner: UserCreateNestedOneWithoutSoldToysInput
    toy: ToyCreateNestedOneWithoutSalesInput
  }

  export type SaleUncheckedCreateWithoutBuyerInput = {
    id?: string
    ownerId: string
    toyId: string
    price: number
    negotiable?: boolean
    discount?: number | null
    paidFor?: boolean
    paymentDate?: Date | string | null
    itemReceived?: boolean
    receiveDate?: Date | string | null
  }

  export type SaleCreateOrConnectWithoutBuyerInput = {
    where: SaleWhereUniqueInput
    create: XOR<SaleCreateWithoutBuyerInput, SaleUncheckedCreateWithoutBuyerInput>
  }

  export type SaleCreateManyBuyerInputEnvelope = {
    data: SaleCreateManyBuyerInput | SaleCreateManyBuyerInput[]
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
    ownerId?: StringFilter<"Toy"> | string
    usageTime?: IntFilter<"Toy"> | number
    preservation?: IntFilter<"Toy"> | number
  }

  export type LendUpsertWithWhereUniqueWithoutLenderInput = {
    where: LendWhereUniqueInput
    update: XOR<LendUpdateWithoutLenderInput, LendUncheckedUpdateWithoutLenderInput>
    create: XOR<LendCreateWithoutLenderInput, LendUncheckedCreateWithoutLenderInput>
  }

  export type LendUpdateWithWhereUniqueWithoutLenderInput = {
    where: LendWhereUniqueInput
    data: XOR<LendUpdateWithoutLenderInput, LendUncheckedUpdateWithoutLenderInput>
  }

  export type LendUpdateManyWithWhereWithoutLenderInput = {
    where: LendScalarWhereInput
    data: XOR<LendUpdateManyMutationInput, LendUncheckedUpdateManyWithoutLenderInput>
  }

  export type LendScalarWhereInput = {
    AND?: LendScalarWhereInput | LendScalarWhereInput[]
    OR?: LendScalarWhereInput[]
    NOT?: LendScalarWhereInput | LendScalarWhereInput[]
    id?: StringFilter<"Lend"> | string
    startDate?: DateTimeFilter<"Lend"> | Date | string
    endDate?: DateTimeNullableFilter<"Lend"> | Date | string | null
    lenderId?: StringFilter<"Lend"> | string
    borrowerId?: StringFilter<"Lend"> | string
    toyId?: StringFilter<"Lend"> | string
  }

  export type LendUpsertWithWhereUniqueWithoutBorrowerInput = {
    where: LendWhereUniqueInput
    update: XOR<LendUpdateWithoutBorrowerInput, LendUncheckedUpdateWithoutBorrowerInput>
    create: XOR<LendCreateWithoutBorrowerInput, LendUncheckedCreateWithoutBorrowerInput>
  }

  export type LendUpdateWithWhereUniqueWithoutBorrowerInput = {
    where: LendWhereUniqueInput
    data: XOR<LendUpdateWithoutBorrowerInput, LendUncheckedUpdateWithoutBorrowerInput>
  }

  export type LendUpdateManyWithWhereWithoutBorrowerInput = {
    where: LendScalarWhereInput
    data: XOR<LendUpdateManyMutationInput, LendUncheckedUpdateManyWithoutBorrowerInput>
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

  export type SaleUpsertWithWhereUniqueWithoutOwnerInput = {
    where: SaleWhereUniqueInput
    update: XOR<SaleUpdateWithoutOwnerInput, SaleUncheckedUpdateWithoutOwnerInput>
    create: XOR<SaleCreateWithoutOwnerInput, SaleUncheckedCreateWithoutOwnerInput>
  }

  export type SaleUpdateWithWhereUniqueWithoutOwnerInput = {
    where: SaleWhereUniqueInput
    data: XOR<SaleUpdateWithoutOwnerInput, SaleUncheckedUpdateWithoutOwnerInput>
  }

  export type SaleUpdateManyWithWhereWithoutOwnerInput = {
    where: SaleScalarWhereInput
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyWithoutOwnerInput>
  }

  export type SaleScalarWhereInput = {
    AND?: SaleScalarWhereInput | SaleScalarWhereInput[]
    OR?: SaleScalarWhereInput[]
    NOT?: SaleScalarWhereInput | SaleScalarWhereInput[]
    id?: StringFilter<"Sale"> | string
    ownerId?: StringFilter<"Sale"> | string
    buyerId?: StringFilter<"Sale"> | string
    toyId?: StringFilter<"Sale"> | string
    price?: FloatFilter<"Sale"> | number
    negotiable?: BoolFilter<"Sale"> | boolean
    discount?: FloatNullableFilter<"Sale"> | number | null
    paidFor?: BoolFilter<"Sale"> | boolean
    paymentDate?: DateTimeNullableFilter<"Sale"> | Date | string | null
    itemReceived?: BoolFilter<"Sale"> | boolean
    receiveDate?: DateTimeNullableFilter<"Sale"> | Date | string | null
  }

  export type SaleUpsertWithWhereUniqueWithoutBuyerInput = {
    where: SaleWhereUniqueInput
    update: XOR<SaleUpdateWithoutBuyerInput, SaleUncheckedUpdateWithoutBuyerInput>
    create: XOR<SaleCreateWithoutBuyerInput, SaleUncheckedCreateWithoutBuyerInput>
  }

  export type SaleUpdateWithWhereUniqueWithoutBuyerInput = {
    where: SaleWhereUniqueInput
    data: XOR<SaleUpdateWithoutBuyerInput, SaleUncheckedUpdateWithoutBuyerInput>
  }

  export type SaleUpdateManyWithWhereWithoutBuyerInput = {
    where: SaleScalarWhereInput
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyWithoutBuyerInput>
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

  export type UserCreateWithoutToysInput = {
    id?: string
    createdAt?: Date | string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    parentalControl?: boolean
    active?: boolean
    cpf: string
    addressDistrict: string
    addressStreet: string
    addressNumber: number
    addressDetail?: string | null
    lendsMade?: LendCreateNestedManyWithoutLenderInput
    lendsTaken?: LendCreateNestedManyWithoutBorrowerInput
    history?: HistoryEntryCreateNestedManyWithoutUserInput
    soldToys?: SaleCreateNestedManyWithoutOwnerInput
    boughtToys?: SaleCreateNestedManyWithoutBuyerInput
    ratings?: RateCreateNestedManyWithoutUserInput
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
    cpf: string
    addressDistrict: string
    addressStreet: string
    addressNumber: number
    addressDetail?: string | null
    lendsMade?: LendUncheckedCreateNestedManyWithoutLenderInput
    lendsTaken?: LendUncheckedCreateNestedManyWithoutBorrowerInput
    history?: HistoryEntryUncheckedCreateNestedManyWithoutUserInput
    soldToys?: SaleUncheckedCreateNestedManyWithoutOwnerInput
    boughtToys?: SaleUncheckedCreateNestedManyWithoutBuyerInput
    ratings?: RateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutToysInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutToysInput, UserUncheckedCreateWithoutToysInput>
  }

  export type LendCreateWithoutToyInput = {
    id?: string
    startDate: Date | string
    endDate?: Date | string | null
    lender: UserCreateNestedOneWithoutLendsMadeInput
    borrower: UserCreateNestedOneWithoutLendsTakenInput
  }

  export type LendUncheckedCreateWithoutToyInput = {
    id?: string
    startDate: Date | string
    endDate?: Date | string | null
    lenderId: string
    borrowerId: string
  }

  export type LendCreateOrConnectWithoutToyInput = {
    where: LendWhereUniqueInput
    create: XOR<LendCreateWithoutToyInput, LendUncheckedCreateWithoutToyInput>
  }

  export type LendCreateManyToyInputEnvelope = {
    data: LendCreateManyToyInput | LendCreateManyToyInput[]
    skipDuplicates?: boolean
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

  export type SaleCreateWithoutToyInput = {
    id?: string
    price: number
    negotiable?: boolean
    discount?: number | null
    paidFor?: boolean
    paymentDate?: Date | string | null
    itemReceived?: boolean
    receiveDate?: Date | string | null
    owner: UserCreateNestedOneWithoutSoldToysInput
    buyer: UserCreateNestedOneWithoutBoughtToysInput
  }

  export type SaleUncheckedCreateWithoutToyInput = {
    id?: string
    ownerId: string
    buyerId: string
    price: number
    negotiable?: boolean
    discount?: number | null
    paidFor?: boolean
    paymentDate?: Date | string | null
    itemReceived?: boolean
    receiveDate?: Date | string | null
  }

  export type SaleCreateOrConnectWithoutToyInput = {
    where: SaleWhereUniqueInput
    create: XOR<SaleCreateWithoutToyInput, SaleUncheckedCreateWithoutToyInput>
  }

  export type SaleCreateManyToyInputEnvelope = {
    data: SaleCreateManyToyInput | SaleCreateManyToyInput[]
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
    cpf?: StringFieldUpdateOperationsInput | string
    addressDistrict?: StringFieldUpdateOperationsInput | string
    addressStreet?: StringFieldUpdateOperationsInput | string
    addressNumber?: IntFieldUpdateOperationsInput | number
    addressDetail?: NullableStringFieldUpdateOperationsInput | string | null
    lendsMade?: LendUpdateManyWithoutLenderNestedInput
    lendsTaken?: LendUpdateManyWithoutBorrowerNestedInput
    history?: HistoryEntryUpdateManyWithoutUserNestedInput
    soldToys?: SaleUpdateManyWithoutOwnerNestedInput
    boughtToys?: SaleUpdateManyWithoutBuyerNestedInput
    ratings?: RateUpdateManyWithoutUserNestedInput
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
    cpf?: StringFieldUpdateOperationsInput | string
    addressDistrict?: StringFieldUpdateOperationsInput | string
    addressStreet?: StringFieldUpdateOperationsInput | string
    addressNumber?: IntFieldUpdateOperationsInput | number
    addressDetail?: NullableStringFieldUpdateOperationsInput | string | null
    lendsMade?: LendUncheckedUpdateManyWithoutLenderNestedInput
    lendsTaken?: LendUncheckedUpdateManyWithoutBorrowerNestedInput
    history?: HistoryEntryUncheckedUpdateManyWithoutUserNestedInput
    soldToys?: SaleUncheckedUpdateManyWithoutOwnerNestedInput
    boughtToys?: SaleUncheckedUpdateManyWithoutBuyerNestedInput
    ratings?: RateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LendUpsertWithWhereUniqueWithoutToyInput = {
    where: LendWhereUniqueInput
    update: XOR<LendUpdateWithoutToyInput, LendUncheckedUpdateWithoutToyInput>
    create: XOR<LendCreateWithoutToyInput, LendUncheckedCreateWithoutToyInput>
  }

  export type LendUpdateWithWhereUniqueWithoutToyInput = {
    where: LendWhereUniqueInput
    data: XOR<LendUpdateWithoutToyInput, LendUncheckedUpdateWithoutToyInput>
  }

  export type LendUpdateManyWithWhereWithoutToyInput = {
    where: LendScalarWhereInput
    data: XOR<LendUpdateManyMutationInput, LendUncheckedUpdateManyWithoutToyInput>
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

  export type SaleUpsertWithWhereUniqueWithoutToyInput = {
    where: SaleWhereUniqueInput
    update: XOR<SaleUpdateWithoutToyInput, SaleUncheckedUpdateWithoutToyInput>
    create: XOR<SaleCreateWithoutToyInput, SaleUncheckedCreateWithoutToyInput>
  }

  export type SaleUpdateWithWhereUniqueWithoutToyInput = {
    where: SaleWhereUniqueInput
    data: XOR<SaleUpdateWithoutToyInput, SaleUncheckedUpdateWithoutToyInput>
  }

  export type SaleUpdateManyWithWhereWithoutToyInput = {
    where: SaleScalarWhereInput
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyWithoutToyInput>
  }

  export type UserCreateWithoutLendsMadeInput = {
    id?: string
    createdAt?: Date | string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    parentalControl?: boolean
    active?: boolean
    cpf: string
    addressDistrict: string
    addressStreet: string
    addressNumber: number
    addressDetail?: string | null
    toys?: ToyCreateNestedManyWithoutOwnerInput
    lendsTaken?: LendCreateNestedManyWithoutBorrowerInput
    history?: HistoryEntryCreateNestedManyWithoutUserInput
    soldToys?: SaleCreateNestedManyWithoutOwnerInput
    boughtToys?: SaleCreateNestedManyWithoutBuyerInput
    ratings?: RateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLendsMadeInput = {
    id?: string
    createdAt?: Date | string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    parentalControl?: boolean
    active?: boolean
    cpf: string
    addressDistrict: string
    addressStreet: string
    addressNumber: number
    addressDetail?: string | null
    toys?: ToyUncheckedCreateNestedManyWithoutOwnerInput
    lendsTaken?: LendUncheckedCreateNestedManyWithoutBorrowerInput
    history?: HistoryEntryUncheckedCreateNestedManyWithoutUserInput
    soldToys?: SaleUncheckedCreateNestedManyWithoutOwnerInput
    boughtToys?: SaleUncheckedCreateNestedManyWithoutBuyerInput
    ratings?: RateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLendsMadeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLendsMadeInput, UserUncheckedCreateWithoutLendsMadeInput>
  }

  export type UserCreateWithoutLendsTakenInput = {
    id?: string
    createdAt?: Date | string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    parentalControl?: boolean
    active?: boolean
    cpf: string
    addressDistrict: string
    addressStreet: string
    addressNumber: number
    addressDetail?: string | null
    toys?: ToyCreateNestedManyWithoutOwnerInput
    lendsMade?: LendCreateNestedManyWithoutLenderInput
    history?: HistoryEntryCreateNestedManyWithoutUserInput
    soldToys?: SaleCreateNestedManyWithoutOwnerInput
    boughtToys?: SaleCreateNestedManyWithoutBuyerInput
    ratings?: RateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLendsTakenInput = {
    id?: string
    createdAt?: Date | string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    parentalControl?: boolean
    active?: boolean
    cpf: string
    addressDistrict: string
    addressStreet: string
    addressNumber: number
    addressDetail?: string | null
    toys?: ToyUncheckedCreateNestedManyWithoutOwnerInput
    lendsMade?: LendUncheckedCreateNestedManyWithoutLenderInput
    history?: HistoryEntryUncheckedCreateNestedManyWithoutUserInput
    soldToys?: SaleUncheckedCreateNestedManyWithoutOwnerInput
    boughtToys?: SaleUncheckedCreateNestedManyWithoutBuyerInput
    ratings?: RateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLendsTakenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLendsTakenInput, UserUncheckedCreateWithoutLendsTakenInput>
  }

  export type ToyCreateWithoutLendsInput = {
    id?: string
    createdAt?: Date | string
    name: string
    usageTime: number
    preservation: number
    owner: UserCreateNestedOneWithoutToysInput
    history?: HistoryEntryCreateNestedManyWithoutToyInput
    sales?: SaleCreateNestedManyWithoutToyInput
  }

  export type ToyUncheckedCreateWithoutLendsInput = {
    id?: string
    createdAt?: Date | string
    name: string
    ownerId: string
    usageTime: number
    preservation: number
    history?: HistoryEntryUncheckedCreateNestedManyWithoutToyInput
    sales?: SaleUncheckedCreateNestedManyWithoutToyInput
  }

  export type ToyCreateOrConnectWithoutLendsInput = {
    where: ToyWhereUniqueInput
    create: XOR<ToyCreateWithoutLendsInput, ToyUncheckedCreateWithoutLendsInput>
  }

  export type UserUpsertWithoutLendsMadeInput = {
    update: XOR<UserUpdateWithoutLendsMadeInput, UserUncheckedUpdateWithoutLendsMadeInput>
    create: XOR<UserCreateWithoutLendsMadeInput, UserUncheckedCreateWithoutLendsMadeInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLendsMadeInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLendsMadeInput, UserUncheckedUpdateWithoutLendsMadeInput>
  }

  export type UserUpdateWithoutLendsMadeInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    parentalControl?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    cpf?: StringFieldUpdateOperationsInput | string
    addressDistrict?: StringFieldUpdateOperationsInput | string
    addressStreet?: StringFieldUpdateOperationsInput | string
    addressNumber?: IntFieldUpdateOperationsInput | number
    addressDetail?: NullableStringFieldUpdateOperationsInput | string | null
    toys?: ToyUpdateManyWithoutOwnerNestedInput
    lendsTaken?: LendUpdateManyWithoutBorrowerNestedInput
    history?: HistoryEntryUpdateManyWithoutUserNestedInput
    soldToys?: SaleUpdateManyWithoutOwnerNestedInput
    boughtToys?: SaleUpdateManyWithoutBuyerNestedInput
    ratings?: RateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLendsMadeInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    parentalControl?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    cpf?: StringFieldUpdateOperationsInput | string
    addressDistrict?: StringFieldUpdateOperationsInput | string
    addressStreet?: StringFieldUpdateOperationsInput | string
    addressNumber?: IntFieldUpdateOperationsInput | number
    addressDetail?: NullableStringFieldUpdateOperationsInput | string | null
    toys?: ToyUncheckedUpdateManyWithoutOwnerNestedInput
    lendsTaken?: LendUncheckedUpdateManyWithoutBorrowerNestedInput
    history?: HistoryEntryUncheckedUpdateManyWithoutUserNestedInput
    soldToys?: SaleUncheckedUpdateManyWithoutOwnerNestedInput
    boughtToys?: SaleUncheckedUpdateManyWithoutBuyerNestedInput
    ratings?: RateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutLendsTakenInput = {
    update: XOR<UserUpdateWithoutLendsTakenInput, UserUncheckedUpdateWithoutLendsTakenInput>
    create: XOR<UserCreateWithoutLendsTakenInput, UserUncheckedCreateWithoutLendsTakenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLendsTakenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLendsTakenInput, UserUncheckedUpdateWithoutLendsTakenInput>
  }

  export type UserUpdateWithoutLendsTakenInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    parentalControl?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    cpf?: StringFieldUpdateOperationsInput | string
    addressDistrict?: StringFieldUpdateOperationsInput | string
    addressStreet?: StringFieldUpdateOperationsInput | string
    addressNumber?: IntFieldUpdateOperationsInput | number
    addressDetail?: NullableStringFieldUpdateOperationsInput | string | null
    toys?: ToyUpdateManyWithoutOwnerNestedInput
    lendsMade?: LendUpdateManyWithoutLenderNestedInput
    history?: HistoryEntryUpdateManyWithoutUserNestedInput
    soldToys?: SaleUpdateManyWithoutOwnerNestedInput
    boughtToys?: SaleUpdateManyWithoutBuyerNestedInput
    ratings?: RateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLendsTakenInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    parentalControl?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    cpf?: StringFieldUpdateOperationsInput | string
    addressDistrict?: StringFieldUpdateOperationsInput | string
    addressStreet?: StringFieldUpdateOperationsInput | string
    addressNumber?: IntFieldUpdateOperationsInput | number
    addressDetail?: NullableStringFieldUpdateOperationsInput | string | null
    toys?: ToyUncheckedUpdateManyWithoutOwnerNestedInput
    lendsMade?: LendUncheckedUpdateManyWithoutLenderNestedInput
    history?: HistoryEntryUncheckedUpdateManyWithoutUserNestedInput
    soldToys?: SaleUncheckedUpdateManyWithoutOwnerNestedInput
    boughtToys?: SaleUncheckedUpdateManyWithoutBuyerNestedInput
    ratings?: RateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ToyUpsertWithoutLendsInput = {
    update: XOR<ToyUpdateWithoutLendsInput, ToyUncheckedUpdateWithoutLendsInput>
    create: XOR<ToyCreateWithoutLendsInput, ToyUncheckedCreateWithoutLendsInput>
    where?: ToyWhereInput
  }

  export type ToyUpdateToOneWithWhereWithoutLendsInput = {
    where?: ToyWhereInput
    data: XOR<ToyUpdateWithoutLendsInput, ToyUncheckedUpdateWithoutLendsInput>
  }

  export type ToyUpdateWithoutLendsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    usageTime?: IntFieldUpdateOperationsInput | number
    preservation?: IntFieldUpdateOperationsInput | number
    owner?: UserUpdateOneRequiredWithoutToysNestedInput
    history?: HistoryEntryUpdateManyWithoutToyNestedInput
    sales?: SaleUpdateManyWithoutToyNestedInput
  }

  export type ToyUncheckedUpdateWithoutLendsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    usageTime?: IntFieldUpdateOperationsInput | number
    preservation?: IntFieldUpdateOperationsInput | number
    history?: HistoryEntryUncheckedUpdateManyWithoutToyNestedInput
    sales?: SaleUncheckedUpdateManyWithoutToyNestedInput
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
    cpf: string
    addressDistrict: string
    addressStreet: string
    addressNumber: number
    addressDetail?: string | null
    toys?: ToyCreateNestedManyWithoutOwnerInput
    lendsMade?: LendCreateNestedManyWithoutLenderInput
    lendsTaken?: LendCreateNestedManyWithoutBorrowerInput
    soldToys?: SaleCreateNestedManyWithoutOwnerInput
    boughtToys?: SaleCreateNestedManyWithoutBuyerInput
    ratings?: RateCreateNestedManyWithoutUserInput
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
    cpf: string
    addressDistrict: string
    addressStreet: string
    addressNumber: number
    addressDetail?: string | null
    toys?: ToyUncheckedCreateNestedManyWithoutOwnerInput
    lendsMade?: LendUncheckedCreateNestedManyWithoutLenderInput
    lendsTaken?: LendUncheckedCreateNestedManyWithoutBorrowerInput
    soldToys?: SaleUncheckedCreateNestedManyWithoutOwnerInput
    boughtToys?: SaleUncheckedCreateNestedManyWithoutBuyerInput
    ratings?: RateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHistoryInput, UserUncheckedCreateWithoutHistoryInput>
  }

  export type ToyCreateWithoutHistoryInput = {
    id?: string
    createdAt?: Date | string
    name: string
    usageTime: number
    preservation: number
    owner: UserCreateNestedOneWithoutToysInput
    lends?: LendCreateNestedManyWithoutToyInput
    sales?: SaleCreateNestedManyWithoutToyInput
  }

  export type ToyUncheckedCreateWithoutHistoryInput = {
    id?: string
    createdAt?: Date | string
    name: string
    ownerId: string
    usageTime: number
    preservation: number
    lends?: LendUncheckedCreateNestedManyWithoutToyInput
    sales?: SaleUncheckedCreateNestedManyWithoutToyInput
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
    cpf?: StringFieldUpdateOperationsInput | string
    addressDistrict?: StringFieldUpdateOperationsInput | string
    addressStreet?: StringFieldUpdateOperationsInput | string
    addressNumber?: IntFieldUpdateOperationsInput | number
    addressDetail?: NullableStringFieldUpdateOperationsInput | string | null
    toys?: ToyUpdateManyWithoutOwnerNestedInput
    lendsMade?: LendUpdateManyWithoutLenderNestedInput
    lendsTaken?: LendUpdateManyWithoutBorrowerNestedInput
    soldToys?: SaleUpdateManyWithoutOwnerNestedInput
    boughtToys?: SaleUpdateManyWithoutBuyerNestedInput
    ratings?: RateUpdateManyWithoutUserNestedInput
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
    cpf?: StringFieldUpdateOperationsInput | string
    addressDistrict?: StringFieldUpdateOperationsInput | string
    addressStreet?: StringFieldUpdateOperationsInput | string
    addressNumber?: IntFieldUpdateOperationsInput | number
    addressDetail?: NullableStringFieldUpdateOperationsInput | string | null
    toys?: ToyUncheckedUpdateManyWithoutOwnerNestedInput
    lendsMade?: LendUncheckedUpdateManyWithoutLenderNestedInput
    lendsTaken?: LendUncheckedUpdateManyWithoutBorrowerNestedInput
    soldToys?: SaleUncheckedUpdateManyWithoutOwnerNestedInput
    boughtToys?: SaleUncheckedUpdateManyWithoutBuyerNestedInput
    ratings?: RateUncheckedUpdateManyWithoutUserNestedInput
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
    usageTime?: IntFieldUpdateOperationsInput | number
    preservation?: IntFieldUpdateOperationsInput | number
    owner?: UserUpdateOneRequiredWithoutToysNestedInput
    lends?: LendUpdateManyWithoutToyNestedInput
    sales?: SaleUpdateManyWithoutToyNestedInput
  }

  export type ToyUncheckedUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    usageTime?: IntFieldUpdateOperationsInput | number
    preservation?: IntFieldUpdateOperationsInput | number
    lends?: LendUncheckedUpdateManyWithoutToyNestedInput
    sales?: SaleUncheckedUpdateManyWithoutToyNestedInput
  }

  export type UserCreateWithoutSoldToysInput = {
    id?: string
    createdAt?: Date | string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    parentalControl?: boolean
    active?: boolean
    cpf: string
    addressDistrict: string
    addressStreet: string
    addressNumber: number
    addressDetail?: string | null
    toys?: ToyCreateNestedManyWithoutOwnerInput
    lendsMade?: LendCreateNestedManyWithoutLenderInput
    lendsTaken?: LendCreateNestedManyWithoutBorrowerInput
    history?: HistoryEntryCreateNestedManyWithoutUserInput
    boughtToys?: SaleCreateNestedManyWithoutBuyerInput
    ratings?: RateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSoldToysInput = {
    id?: string
    createdAt?: Date | string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    parentalControl?: boolean
    active?: boolean
    cpf: string
    addressDistrict: string
    addressStreet: string
    addressNumber: number
    addressDetail?: string | null
    toys?: ToyUncheckedCreateNestedManyWithoutOwnerInput
    lendsMade?: LendUncheckedCreateNestedManyWithoutLenderInput
    lendsTaken?: LendUncheckedCreateNestedManyWithoutBorrowerInput
    history?: HistoryEntryUncheckedCreateNestedManyWithoutUserInput
    boughtToys?: SaleUncheckedCreateNestedManyWithoutBuyerInput
    ratings?: RateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSoldToysInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSoldToysInput, UserUncheckedCreateWithoutSoldToysInput>
  }

  export type UserCreateWithoutBoughtToysInput = {
    id?: string
    createdAt?: Date | string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    parentalControl?: boolean
    active?: boolean
    cpf: string
    addressDistrict: string
    addressStreet: string
    addressNumber: number
    addressDetail?: string | null
    toys?: ToyCreateNestedManyWithoutOwnerInput
    lendsMade?: LendCreateNestedManyWithoutLenderInput
    lendsTaken?: LendCreateNestedManyWithoutBorrowerInput
    history?: HistoryEntryCreateNestedManyWithoutUserInput
    soldToys?: SaleCreateNestedManyWithoutOwnerInput
    ratings?: RateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBoughtToysInput = {
    id?: string
    createdAt?: Date | string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    parentalControl?: boolean
    active?: boolean
    cpf: string
    addressDistrict: string
    addressStreet: string
    addressNumber: number
    addressDetail?: string | null
    toys?: ToyUncheckedCreateNestedManyWithoutOwnerInput
    lendsMade?: LendUncheckedCreateNestedManyWithoutLenderInput
    lendsTaken?: LendUncheckedCreateNestedManyWithoutBorrowerInput
    history?: HistoryEntryUncheckedCreateNestedManyWithoutUserInput
    soldToys?: SaleUncheckedCreateNestedManyWithoutOwnerInput
    ratings?: RateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBoughtToysInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBoughtToysInput, UserUncheckedCreateWithoutBoughtToysInput>
  }

  export type ToyCreateWithoutSalesInput = {
    id?: string
    createdAt?: Date | string
    name: string
    usageTime: number
    preservation: number
    owner: UserCreateNestedOneWithoutToysInput
    lends?: LendCreateNestedManyWithoutToyInput
    history?: HistoryEntryCreateNestedManyWithoutToyInput
  }

  export type ToyUncheckedCreateWithoutSalesInput = {
    id?: string
    createdAt?: Date | string
    name: string
    ownerId: string
    usageTime: number
    preservation: number
    lends?: LendUncheckedCreateNestedManyWithoutToyInput
    history?: HistoryEntryUncheckedCreateNestedManyWithoutToyInput
  }

  export type ToyCreateOrConnectWithoutSalesInput = {
    where: ToyWhereUniqueInput
    create: XOR<ToyCreateWithoutSalesInput, ToyUncheckedCreateWithoutSalesInput>
  }

  export type UserUpsertWithoutSoldToysInput = {
    update: XOR<UserUpdateWithoutSoldToysInput, UserUncheckedUpdateWithoutSoldToysInput>
    create: XOR<UserCreateWithoutSoldToysInput, UserUncheckedCreateWithoutSoldToysInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSoldToysInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSoldToysInput, UserUncheckedUpdateWithoutSoldToysInput>
  }

  export type UserUpdateWithoutSoldToysInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    parentalControl?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    cpf?: StringFieldUpdateOperationsInput | string
    addressDistrict?: StringFieldUpdateOperationsInput | string
    addressStreet?: StringFieldUpdateOperationsInput | string
    addressNumber?: IntFieldUpdateOperationsInput | number
    addressDetail?: NullableStringFieldUpdateOperationsInput | string | null
    toys?: ToyUpdateManyWithoutOwnerNestedInput
    lendsMade?: LendUpdateManyWithoutLenderNestedInput
    lendsTaken?: LendUpdateManyWithoutBorrowerNestedInput
    history?: HistoryEntryUpdateManyWithoutUserNestedInput
    boughtToys?: SaleUpdateManyWithoutBuyerNestedInput
    ratings?: RateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSoldToysInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    parentalControl?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    cpf?: StringFieldUpdateOperationsInput | string
    addressDistrict?: StringFieldUpdateOperationsInput | string
    addressStreet?: StringFieldUpdateOperationsInput | string
    addressNumber?: IntFieldUpdateOperationsInput | number
    addressDetail?: NullableStringFieldUpdateOperationsInput | string | null
    toys?: ToyUncheckedUpdateManyWithoutOwnerNestedInput
    lendsMade?: LendUncheckedUpdateManyWithoutLenderNestedInput
    lendsTaken?: LendUncheckedUpdateManyWithoutBorrowerNestedInput
    history?: HistoryEntryUncheckedUpdateManyWithoutUserNestedInput
    boughtToys?: SaleUncheckedUpdateManyWithoutBuyerNestedInput
    ratings?: RateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutBoughtToysInput = {
    update: XOR<UserUpdateWithoutBoughtToysInput, UserUncheckedUpdateWithoutBoughtToysInput>
    create: XOR<UserCreateWithoutBoughtToysInput, UserUncheckedCreateWithoutBoughtToysInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBoughtToysInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBoughtToysInput, UserUncheckedUpdateWithoutBoughtToysInput>
  }

  export type UserUpdateWithoutBoughtToysInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    parentalControl?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    cpf?: StringFieldUpdateOperationsInput | string
    addressDistrict?: StringFieldUpdateOperationsInput | string
    addressStreet?: StringFieldUpdateOperationsInput | string
    addressNumber?: IntFieldUpdateOperationsInput | number
    addressDetail?: NullableStringFieldUpdateOperationsInput | string | null
    toys?: ToyUpdateManyWithoutOwnerNestedInput
    lendsMade?: LendUpdateManyWithoutLenderNestedInput
    lendsTaken?: LendUpdateManyWithoutBorrowerNestedInput
    history?: HistoryEntryUpdateManyWithoutUserNestedInput
    soldToys?: SaleUpdateManyWithoutOwnerNestedInput
    ratings?: RateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBoughtToysInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    parentalControl?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    cpf?: StringFieldUpdateOperationsInput | string
    addressDistrict?: StringFieldUpdateOperationsInput | string
    addressStreet?: StringFieldUpdateOperationsInput | string
    addressNumber?: IntFieldUpdateOperationsInput | number
    addressDetail?: NullableStringFieldUpdateOperationsInput | string | null
    toys?: ToyUncheckedUpdateManyWithoutOwnerNestedInput
    lendsMade?: LendUncheckedUpdateManyWithoutLenderNestedInput
    lendsTaken?: LendUncheckedUpdateManyWithoutBorrowerNestedInput
    history?: HistoryEntryUncheckedUpdateManyWithoutUserNestedInput
    soldToys?: SaleUncheckedUpdateManyWithoutOwnerNestedInput
    ratings?: RateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ToyUpsertWithoutSalesInput = {
    update: XOR<ToyUpdateWithoutSalesInput, ToyUncheckedUpdateWithoutSalesInput>
    create: XOR<ToyCreateWithoutSalesInput, ToyUncheckedCreateWithoutSalesInput>
    where?: ToyWhereInput
  }

  export type ToyUpdateToOneWithWhereWithoutSalesInput = {
    where?: ToyWhereInput
    data: XOR<ToyUpdateWithoutSalesInput, ToyUncheckedUpdateWithoutSalesInput>
  }

  export type ToyUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    usageTime?: IntFieldUpdateOperationsInput | number
    preservation?: IntFieldUpdateOperationsInput | number
    owner?: UserUpdateOneRequiredWithoutToysNestedInput
    lends?: LendUpdateManyWithoutToyNestedInput
    history?: HistoryEntryUpdateManyWithoutToyNestedInput
  }

  export type ToyUncheckedUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    usageTime?: IntFieldUpdateOperationsInput | number
    preservation?: IntFieldUpdateOperationsInput | number
    lends?: LendUncheckedUpdateManyWithoutToyNestedInput
    history?: HistoryEntryUncheckedUpdateManyWithoutToyNestedInput
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
    cpf: string
    addressDistrict: string
    addressStreet: string
    addressNumber: number
    addressDetail?: string | null
    toys?: ToyCreateNestedManyWithoutOwnerInput
    lendsMade?: LendCreateNestedManyWithoutLenderInput
    lendsTaken?: LendCreateNestedManyWithoutBorrowerInput
    history?: HistoryEntryCreateNestedManyWithoutUserInput
    soldToys?: SaleCreateNestedManyWithoutOwnerInput
    boughtToys?: SaleCreateNestedManyWithoutBuyerInput
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
    cpf: string
    addressDistrict: string
    addressStreet: string
    addressNumber: number
    addressDetail?: string | null
    toys?: ToyUncheckedCreateNestedManyWithoutOwnerInput
    lendsMade?: LendUncheckedCreateNestedManyWithoutLenderInput
    lendsTaken?: LendUncheckedCreateNestedManyWithoutBorrowerInput
    history?: HistoryEntryUncheckedCreateNestedManyWithoutUserInput
    soldToys?: SaleUncheckedCreateNestedManyWithoutOwnerInput
    boughtToys?: SaleUncheckedCreateNestedManyWithoutBuyerInput
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
    cpf?: StringFieldUpdateOperationsInput | string
    addressDistrict?: StringFieldUpdateOperationsInput | string
    addressStreet?: StringFieldUpdateOperationsInput | string
    addressNumber?: IntFieldUpdateOperationsInput | number
    addressDetail?: NullableStringFieldUpdateOperationsInput | string | null
    toys?: ToyUpdateManyWithoutOwnerNestedInput
    lendsMade?: LendUpdateManyWithoutLenderNestedInput
    lendsTaken?: LendUpdateManyWithoutBorrowerNestedInput
    history?: HistoryEntryUpdateManyWithoutUserNestedInput
    soldToys?: SaleUpdateManyWithoutOwnerNestedInput
    boughtToys?: SaleUpdateManyWithoutBuyerNestedInput
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
    cpf?: StringFieldUpdateOperationsInput | string
    addressDistrict?: StringFieldUpdateOperationsInput | string
    addressStreet?: StringFieldUpdateOperationsInput | string
    addressNumber?: IntFieldUpdateOperationsInput | number
    addressDetail?: NullableStringFieldUpdateOperationsInput | string | null
    toys?: ToyUncheckedUpdateManyWithoutOwnerNestedInput
    lendsMade?: LendUncheckedUpdateManyWithoutLenderNestedInput
    lendsTaken?: LendUncheckedUpdateManyWithoutBorrowerNestedInput
    history?: HistoryEntryUncheckedUpdateManyWithoutUserNestedInput
    soldToys?: SaleUncheckedUpdateManyWithoutOwnerNestedInput
    boughtToys?: SaleUncheckedUpdateManyWithoutBuyerNestedInput
  }

  export type ToyCreateManyOwnerInput = {
    id?: string
    createdAt?: Date | string
    name: string
    usageTime: number
    preservation: number
  }

  export type LendCreateManyLenderInput = {
    id?: string
    startDate: Date | string
    endDate?: Date | string | null
    borrowerId: string
    toyId: string
  }

  export type LendCreateManyBorrowerInput = {
    id?: string
    startDate: Date | string
    endDate?: Date | string | null
    lenderId: string
    toyId: string
  }

  export type HistoryEntryCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    visible?: boolean
    toyId: string
  }

  export type SaleCreateManyOwnerInput = {
    id?: string
    buyerId: string
    toyId: string
    price: number
    negotiable?: boolean
    discount?: number | null
    paidFor?: boolean
    paymentDate?: Date | string | null
    itemReceived?: boolean
    receiveDate?: Date | string | null
  }

  export type SaleCreateManyBuyerInput = {
    id?: string
    ownerId: string
    toyId: string
    price: number
    negotiable?: boolean
    discount?: number | null
    paidFor?: boolean
    paymentDate?: Date | string | null
    itemReceived?: boolean
    receiveDate?: Date | string | null
  }

  export type RateCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    value: number
    comment?: string | null
  }

  export type ToyUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    usageTime?: IntFieldUpdateOperationsInput | number
    preservation?: IntFieldUpdateOperationsInput | number
    lends?: LendUpdateManyWithoutToyNestedInput
    history?: HistoryEntryUpdateManyWithoutToyNestedInput
    sales?: SaleUpdateManyWithoutToyNestedInput
  }

  export type ToyUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    usageTime?: IntFieldUpdateOperationsInput | number
    preservation?: IntFieldUpdateOperationsInput | number
    lends?: LendUncheckedUpdateManyWithoutToyNestedInput
    history?: HistoryEntryUncheckedUpdateManyWithoutToyNestedInput
    sales?: SaleUncheckedUpdateManyWithoutToyNestedInput
  }

  export type ToyUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    usageTime?: IntFieldUpdateOperationsInput | number
    preservation?: IntFieldUpdateOperationsInput | number
  }

  export type LendUpdateWithoutLenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    borrower?: UserUpdateOneRequiredWithoutLendsTakenNestedInput
    toy?: ToyUpdateOneRequiredWithoutLendsNestedInput
  }

  export type LendUncheckedUpdateWithoutLenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    borrowerId?: StringFieldUpdateOperationsInput | string
    toyId?: StringFieldUpdateOperationsInput | string
  }

  export type LendUncheckedUpdateManyWithoutLenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    borrowerId?: StringFieldUpdateOperationsInput | string
    toyId?: StringFieldUpdateOperationsInput | string
  }

  export type LendUpdateWithoutBorrowerInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lender?: UserUpdateOneRequiredWithoutLendsMadeNestedInput
    toy?: ToyUpdateOneRequiredWithoutLendsNestedInput
  }

  export type LendUncheckedUpdateWithoutBorrowerInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lenderId?: StringFieldUpdateOperationsInput | string
    toyId?: StringFieldUpdateOperationsInput | string
  }

  export type LendUncheckedUpdateManyWithoutBorrowerInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lenderId?: StringFieldUpdateOperationsInput | string
    toyId?: StringFieldUpdateOperationsInput | string
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

  export type SaleUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    negotiable?: BoolFieldUpdateOperationsInput | boolean
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    paidFor?: BoolFieldUpdateOperationsInput | boolean
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itemReceived?: BoolFieldUpdateOperationsInput | boolean
    receiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buyer?: UserUpdateOneRequiredWithoutBoughtToysNestedInput
    toy?: ToyUpdateOneRequiredWithoutSalesNestedInput
  }

  export type SaleUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    toyId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    negotiable?: BoolFieldUpdateOperationsInput | boolean
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    paidFor?: BoolFieldUpdateOperationsInput | boolean
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itemReceived?: BoolFieldUpdateOperationsInput | boolean
    receiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SaleUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    toyId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    negotiable?: BoolFieldUpdateOperationsInput | boolean
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    paidFor?: BoolFieldUpdateOperationsInput | boolean
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itemReceived?: BoolFieldUpdateOperationsInput | boolean
    receiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SaleUpdateWithoutBuyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    negotiable?: BoolFieldUpdateOperationsInput | boolean
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    paidFor?: BoolFieldUpdateOperationsInput | boolean
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itemReceived?: BoolFieldUpdateOperationsInput | boolean
    receiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owner?: UserUpdateOneRequiredWithoutSoldToysNestedInput
    toy?: ToyUpdateOneRequiredWithoutSalesNestedInput
  }

  export type SaleUncheckedUpdateWithoutBuyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    toyId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    negotiable?: BoolFieldUpdateOperationsInput | boolean
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    paidFor?: BoolFieldUpdateOperationsInput | boolean
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itemReceived?: BoolFieldUpdateOperationsInput | boolean
    receiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SaleUncheckedUpdateManyWithoutBuyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    toyId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    negotiable?: BoolFieldUpdateOperationsInput | boolean
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    paidFor?: BoolFieldUpdateOperationsInput | boolean
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itemReceived?: BoolFieldUpdateOperationsInput | boolean
    receiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type LendCreateManyToyInput = {
    id?: string
    startDate: Date | string
    endDate?: Date | string | null
    lenderId: string
    borrowerId: string
  }

  export type HistoryEntryCreateManyToyInput = {
    id?: string
    createdAt?: Date | string
    visible?: boolean
    userId?: string | null
  }

  export type SaleCreateManyToyInput = {
    id?: string
    ownerId: string
    buyerId: string
    price: number
    negotiable?: boolean
    discount?: number | null
    paidFor?: boolean
    paymentDate?: Date | string | null
    itemReceived?: boolean
    receiveDate?: Date | string | null
  }

  export type LendUpdateWithoutToyInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lender?: UserUpdateOneRequiredWithoutLendsMadeNestedInput
    borrower?: UserUpdateOneRequiredWithoutLendsTakenNestedInput
  }

  export type LendUncheckedUpdateWithoutToyInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lenderId?: StringFieldUpdateOperationsInput | string
    borrowerId?: StringFieldUpdateOperationsInput | string
  }

  export type LendUncheckedUpdateManyWithoutToyInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lenderId?: StringFieldUpdateOperationsInput | string
    borrowerId?: StringFieldUpdateOperationsInput | string
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

  export type SaleUpdateWithoutToyInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    negotiable?: BoolFieldUpdateOperationsInput | boolean
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    paidFor?: BoolFieldUpdateOperationsInput | boolean
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itemReceived?: BoolFieldUpdateOperationsInput | boolean
    receiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owner?: UserUpdateOneRequiredWithoutSoldToysNestedInput
    buyer?: UserUpdateOneRequiredWithoutBoughtToysNestedInput
  }

  export type SaleUncheckedUpdateWithoutToyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    negotiable?: BoolFieldUpdateOperationsInput | boolean
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    paidFor?: BoolFieldUpdateOperationsInput | boolean
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itemReceived?: BoolFieldUpdateOperationsInput | boolean
    receiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SaleUncheckedUpdateManyWithoutToyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    negotiable?: BoolFieldUpdateOperationsInput | boolean
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    paidFor?: BoolFieldUpdateOperationsInput | boolean
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itemReceived?: BoolFieldUpdateOperationsInput | boolean
    receiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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