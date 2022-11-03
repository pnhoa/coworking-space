import { ListParams } from './common';
import { User } from './user';

export interface Comment {
  id?: number;
  createdDate?: string;
  modifiedDate?: string;
  createdBy?: string;
  modifiedBy?: string;
  content: string;
  rate: number;
  spaceId: number;
  user: User;
  userId: number;
}

export interface CommentPayload extends ListParams {
  spaceId: number;
  rate: number;
}

export interface FeedBackPayload {
  rate: number;
  spaceId: number;
  customerId: number;
}
