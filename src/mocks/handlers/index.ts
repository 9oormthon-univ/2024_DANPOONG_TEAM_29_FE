import { feedHandlers } from './feed';
import { petitionHandlers } from './petition';
import { userInfoHandlers } from './user';
export const handlers = [...feedHandlers, ...petitionHandlers, ...userInfoHandlers];
