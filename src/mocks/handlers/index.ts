import { feedHandlers } from './feed';
import { postHandlers } from './post';
/**
 * feed.ts에서 작성한 feedHandlers를 handlers 배열에 삽입합니다.
 */
export const handlers = [...feedHandlers, ...postHandlers];
