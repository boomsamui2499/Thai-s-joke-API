const Joi = require('@hapi/joi');

const jokeValidation = (req) => {
    const require = Joi.object({
        joke_name: Joi.string()
    });

    return require.validate(req);
};




module.exports.jokeValidation = jokeValidation;

