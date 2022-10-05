const Joi = require('joi');
const md5 = require('../utils/md5-pass');
const knl = require('../knl');
const securityConsts = require('../consts/security-consts');

knl.post('group', async(req, resp) => {
    const schema = Joi.object({
        produto : Joi.string().min(1).max(50).required(),
        descrição : Joi.string().min(10).max(200).required()
    })

    knl.validate(req.body, schema);

    const result = await knl.sequelize().models.Usuario.findAll({
        where : {
            username : req.body.username
        }
    });

    knl.createException('0006', '', !knl.objects.isEmptyArray(result));
    knl.createException('0007', '', req.body.password != req.body.cpassword);

    const user = knl.sequelize().models.Usuario.build({
        name : req.body.name,
        username : req.body.username,
        password : md5(req.body.password),
        status   : 1
    });

    await user.save();
    resp.end();
}, securityConsts.USER_TYPE_PUBLIC);