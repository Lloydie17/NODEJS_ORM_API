const db = require('_helpers/db');

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function getAll() {
    return await db.User.findAll();
}

async function getById(id) {
    return await getUser(id);
}

async function create(params) {
    // validate
    if (await db.User.findOne({ where: { name: params.name } })) {
        throw 'Name "' + params.name + '" is already exists';
    }

    const product = new db.Product(params);

    // product user
    await product.save();
}

async function update(id, params) {
    const product = await getUser(id);

    // validate
    const productnameChanged = params.name && user.name !== params.name;
    if (productnameChanged && await db.User.findOne({ where: {name: params.name } })) {
        throw 'Name "' + params.name + '" is already taken';
    }

    // copy params to user and save
    Object.assign(product, params);
    await product.save();
}

async function _delete(id) {
    const product = await getUser(id);
    await product.destroy();
}

// helper functions

async function getUser(id) {
    const product =  await db.User.findByPk(id);
    if (!product) throw 'Product not found';
    return product;
}