const bcrypt = require('bcryptjs');

module.exports = {
    encode(pass) {
        console.log(pass)
        return bcrypt.hashSync(pass, 10);
    },
    decode(pass, hash) {
        return bcrypt.compareSync(pass, hash);
    }
}