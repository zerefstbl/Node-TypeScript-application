import { Router } from 'express';

const routes = Router();

routes.post('/', (req, res) => {
  const { name, email } = req.body;

  const user = {
    name,
    email,
  };

  return res.json({ usuario: user });
});

export default routes;
