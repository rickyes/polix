const { Controller,Get } = require('../../../app');

class ShopController extends Controller {
    constructor(){
        super();
    }

    @Get
    getInfo(ctx){
        ctx.body  = {
            shop: 'getInfo'
        }
    }
}