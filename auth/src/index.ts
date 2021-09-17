import express from "express";
import { json } from "body-parser";

const app = express();
app.use(json());

app.get('/currentuser', (req, res) => {
return res.send('current user endpoints')
});
app.get('/', (req, res) => {
    return res.send('dcdc')
    });
app.listen(3000, () => console.log('listening on port 3000!!')
);
