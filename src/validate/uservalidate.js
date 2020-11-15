const Joi = require('@hapi/joi');

const userValidation = (req) => {
    const require = Joi.object({
        fname: Joi.string(),
        lname: Joi.string(),
        username: Joi.string(),
        password: Joi.number()
    });

    return require.validate(req);
};

const userupdateValidation = (req) => {
    const require = Joi.object({
        no:Joi.number().integer().required(),
        fname: Joi.string(),
        lname: Joi.string(),
        username: Joi.string(),
        password: Joi.string()
    });

    return require.validate(req);
};




module.exports.userValidation = userValidation;
module.exports.userupdateValidation = userupdateValidation;

