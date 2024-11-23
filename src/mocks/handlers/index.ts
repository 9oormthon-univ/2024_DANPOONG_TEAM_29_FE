import { feedHandlers } from './feed';
import { petitionHandlers } from './petition';

export const handlers = [...feedHandlers, ...petitionHandlers];
