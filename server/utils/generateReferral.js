const push = require('../config/db');       // Import the database connection

async function urgCode() {
    let referralCode;
    let isUnique = false;

    while (!isUnique) {
        referralCode = Math.floor(10000000 + Math.random() * 89999999).toString();

        const [rows] = await pool.query('SELECT id FROM users WHERE referralCode = ?', [referralCode]);

        if (rows.length === 0) {
            isUnique = true;
        }
    }

    return referralCode;
}

module.exports = urgCode;
