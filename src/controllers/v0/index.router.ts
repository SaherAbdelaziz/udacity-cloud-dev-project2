import { Router, Request, Response } from 'express';
import { FeedRouter } from './feed/routes/feed.router';
import { UserRouter } from './users/routes/user.router';
import { ImageFilterRouter } from './imageFilter/routes/imageFilter.router';

const router: Router = Router();

router.use('/feed', FeedRouter);
router.use('/users', UserRouter);
router.use('/filteredimage', ImageFilterRouter);

router.get('/', async (req: Request, res: Response) => {    
    res.send(`V0`);
});

export const IndexRouter: Router = router;