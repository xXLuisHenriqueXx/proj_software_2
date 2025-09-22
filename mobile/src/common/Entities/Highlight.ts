enum EHighlightType {
  FREE = "FREE",
  NEARBY = "NEARBY",
  POPULAR = "POPULAR",
  RECENT = "RECENT",
  NEW = "NEW",
}

export interface IHighlight {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  description: string;
  type: EHighlightType;
  picture: string;
}
