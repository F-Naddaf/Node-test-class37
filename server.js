'use strict';

import app from './router/app.js';

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server listening at port ${port}`));
