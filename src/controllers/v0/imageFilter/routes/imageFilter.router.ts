import { Router, Request, Response } from 'express';
import { requireAuth } from '../../users/routes/auth.router';
import { isUri } from 'valid-url';
// import * as AWS from '../../../../aws';
import {filterImageFromURL, deleteLocalFiles} from '../../../../util/util';


const router: Router = Router();

router.get('/', requireAuth, async (req: Request, res: Response) => {
    const {image_url} = req.query;
    if (!image_url || !isUri(""+image_url)) {
      return res.status(400).send({ auth: false, message: 'NO Image url or malformed' });
    }
    let filteredpath = await filterImageFromURL(""+image_url);
    res.sendFile(filteredpath, {}, () => deleteLocalFiles([filteredpath]));
});

export const ImageFilterRouter: Router = router;