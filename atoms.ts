import { atom } from 'recoil';

import { RecordProps } from '@/components/Record';

export const recordsState = atom<RecordProps[]>({
  key: 'recordsState',
  default: [],
});

export const searchState = atom<string>({
  key: 'searchState',
  default: '',
});

export const michaelToggledState = atom<boolean>({
  key: 'michaelToggledState',
  default: false,
});
