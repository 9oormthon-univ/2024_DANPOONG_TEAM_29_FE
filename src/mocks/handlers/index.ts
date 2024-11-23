import { feedHandlers } from './feed';
import { petitionHandlers } from './petition';
import { postHandlers } from './post';
import { userInfoHandlers } from './user';

export const handlers = [
  ...feedHandlers,
  ...petitionHandlers,
  ...userInfoHandlers,
  ...postHandlers,
];
