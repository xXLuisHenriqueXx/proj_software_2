export enum EAgeRange {
  ZERO_A_UM = "ZERO_A_UM",
  UM_A_TRES = "UM_A_TRES",
  TRES_A_SEIS = "TRES_A_SEIS",
  SEIS_A_DOZE = "SEIS_A_DOZE",
  DOZE_OU_MAIS = "DOZE_OU_MAIS",
}
export enum EToyType {
  MENINOS = "MENINOS",
  MENINAS = "MENINAS",
  ARTÍSTICO = "ART\u00CDSTICO",
  AVENTURA = "AVENTURA",
  BONECOS = "BONECOS",
  CARRINHOS = "CARRINHOS",
  CARTAS = "CARTAS",
  EDUCATIVO = "EDUCATIVO",
  ESPORTES = "ESPORTES",
  ESTRATÉGIA = "ESTRAT\u00C9GIA",
  PALAVRAS = "PALAVRAS",
  PARA_BEBÊS = "PARA_BEB\u00CAS",
  QUEBRA_CABEÇAS = "QUEBRA_CABE\u00C7AS",
  SIMULAÇÃO = "SIMULA\u00C7\u00C3O",
  TABULEIRO = "TABULEIRO",
  VIDEOGAME = "VIDEOGAME",
}
export enum EOrderBy {
  RELEVANTES = "RELEVANTES",
  MENOR_PRECO = "MENOR_PRECO",
  MAIOR_PRECO = "MAIOR_PRECO",
}
export enum EToyCondition {
  NOVO = "NOVO",
  USADO = "USADO",
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
