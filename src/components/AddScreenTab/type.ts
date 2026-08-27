import { Dispatch, SetStateAction } from 'react';

export type TabsProps = {
  active: number;
  setActive: Dispatch<SetStateAction<number>>;
};
