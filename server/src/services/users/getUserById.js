import { User } from '../../models';

export default async id => {
  const where = { id };
  return await User.findOne({ where });
};
