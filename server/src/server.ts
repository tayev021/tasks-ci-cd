import { app } from './app';
import { database } from './config/database';

const port = process.env.PORT || 8080;

database
  .sync()
  .then(() => {
    app.listen(port, () => console.log(`Server is listening on ${port}`));
  })
  .catch((error) => {
    console.error(error);
  });
