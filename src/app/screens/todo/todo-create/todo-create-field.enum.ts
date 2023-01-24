export enum TodoCreateFieldEnum {
  TITLE = 'title',
  DESCRIPTION = 'description',
  REMARKS = 'remarks',
}

export type TodoCreateValues = Record<
  | TodoCreateFieldEnum.TITLE
  | TodoCreateFieldEnum.DESCRIPTION
  | TodoCreateFieldEnum.REMARKS,
  string
>;

export type TodoCreateResponse = Record<'id', string>;
