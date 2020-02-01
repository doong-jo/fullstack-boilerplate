import { getUserById } from '../../../../services/users';

export async function getUser(req, res) {
  const result = await getUserById(+req.params.userId);
  if (!result) return res.status(400).send({ message: 'Cannot get data' });
  const { id, name } = result;
  const responseData = {
    id,
    name,
    message: 'Success',
  };
  res.send(responseData);
}
