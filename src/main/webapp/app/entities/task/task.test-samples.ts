import { ITask, NewTask } from './task.model';

export const sampleWithRequiredData: ITask = {
  id: 25404,
};

export const sampleWithPartialData: ITask = {
  id: 20379,
  title: 'unlike',
  description: 'prosperity phooey zowie',
};

export const sampleWithFullData: ITask = {
  id: 13757,
  title: 'concerning oh indeed',
  description: 'vacantly than',
};

export const sampleWithNewData: NewTask = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
