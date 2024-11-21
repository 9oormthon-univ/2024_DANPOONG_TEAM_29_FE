import { useEffect } from 'react';

interface handleClickInterface<T extends HTMLElement> {
  ref: React.RefObject<T>;
  id: string;
  setEditEnd: () => void;
}
console.log('useEffect');

function useHandleClickOutSide<T extends HTMLElement>({
  ref,
  id,
  setEditEnd,
}: handleClickInterface<T>) {
  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        const target = event.target as HTMLElement;

        const parent = target.closest(`#${id}`);
        console.log('!!, out');
        if (!parent) {
          setEditEnd();
        }
      }
    }

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [ref, id, setEditEnd]);
}

export default useHandleClickOutSide;
