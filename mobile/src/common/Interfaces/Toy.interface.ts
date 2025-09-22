export enum EAgeRange {
  ZERO_TO_ONE = "ZERO_TO_ONE",
  ONE_TO_THREE = "ONE_TO_THREE",
  THREE_TO_SIX = "THREE_TO_SIX",
  SIX_TO_TWELVE = "SIX_TO_TWELVE",
  TWELVE_OR_MORE = "TWELVE_OR_MORE",
}
export enum EToyType {
  BOYS = "BOYS",
  GIRLS = "GIRLS",
  ARTISTIC = "ARTISTIC",
  ADVENTURE = "ADVENTURE",
  DOLLS = "DOLLS",
  CARS = "CARS",
  CARDS = "CARDS",
  EDUCATIONAL = "EDUCATIONAL",
  SPORTS = "SPORTS",
  STRATEGY = "STRATEGY",
  WORDS = "WORDS",
  BABIES = "BABIES",
  PUZZLES = "PUZZLES",
  SIMULATION = "SIMULATION",
  BOARD = "BOARD",
  VIDEOGAME = "VIDEOGAME",
}
export enum EOrderBy {
  RELEVANT = "RELEVANT",
  LOWEST_PRICE = "LOWEST_PRICE",
  HIGHEST_PRICE = "HIGHEST_PRICE",
}
export enum EToyCondition {
  NEW = "NEW",
  USED = "USED",
}

interface IMinMax {
  min: number;
  max: number;
}

interface IFilter {
  orderBy?: EOrderBy;
  condition?: EToyCondition;
  type?: EToyType;
  ageRange?: EAgeRange;
  priceRange?: IMinMax;
  donation?: boolean;
  trade?: boolean;
  lend?: boolean;
  search?: string;
}

export interface IToyList {
  page?: number;
  pageSize?: number;
  filter?: IFilter;
}

export interface IToyGet {
  id: string;
}

export interface IToyPicture {
  id: string;
  order: number;
  picture: string;
}

export interface IToyOwner {
  id: string;
  name: string;
  picture: string;
}

export interface IToyCreate {
  name: string;
  description: string;
  price: number;
  isNew: boolean;
  canTrade: boolean;
  canLend: boolean;
  usageTime: number;
  type: EToyType[];
  ageGroup: EAgeRange;
  pictures: (string | null | undefined)[];
  discount?: number;
}

export interface IToyUpdate {
  id: string;
  name?: string;
  description?: string;
  price?: number;
  isNew?: boolean;
  canTrade?: boolean;
  canLend?: boolean;
  usageTime?: number;
  condition?: EToyCondition;
  type?: EToyType[];
  ageGroup?: EAgeRange;
  pictures?: string[];
  discount?: number;
}

export interface IToyDelete {
  id: string;
}

export interface IFieldsToyCreateMain {
  name: string;
  description: string;
  price: string;
  isNew: boolean;
  canTrade: boolean;
  canLend: boolean;
  usageTime: string;
  ageGroup: EAgeRange;
  pictures: (string | null | undefined)[];
  discount?: string;
}

export interface IFieldsToyCreateCategory {
  type: EToyType[];
}
