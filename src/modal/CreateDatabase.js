import connection from '../config/connectDB';
require('dotenv').config();

let timeNow = Date.now();

const CreateWingo = async(req, res) => {
    
    // Reset DataBase Wingo
    await connection.execute('DELETE FROM wingo');

    let arr = ['wingo10', 'wingo5', 'wingo3', 'wingo'];

    for (let i = 0; i < arr.length; i++) {
        const sql = "INSERT INTO wingo SET period = ?, game = ?, amount = 6, status = 1, time = ?";
        await connection.execute(sql, ['2022070110000', arr[i], timeNow]);
        const sql_1 = "INSERT INTO wingo SET period = ?, game = ?, amount = 0, status = 0, time = ?";
        await connection.execute(sql_1, ['2022070110001', arr[i], timeNow]);
    }
    console.log("Create Success Database Wingo.");
}
const Create5D = async(req, res) => {
    
    // Reset DataBase 5D
    await connection.execute('DELETE FROM 5d');

    let arr = [10, 5, 3, 1];

    for (let i = 0; i < arr.length; i++) {
        const sql = "INSERT INTO 5d SET period = ?, result = ?, game = ?, status = 1, time = ?";
        await connection.execute(sql, ['2022070110000', '23521', arr[i], timeNow]);
        const sql_1 = "INSERT INTO 5d SET period = ?, result = ?, game = ?, status = 0, time = ?";
        await connection.execute(sql_1, ['2022070110001', '0', arr[i], timeNow]);
    }
    console.log("Create Success Database 5D.");
}

const CreateK3 = async(req, res) => {
    
    // Reset DataBase K3
    await connection.execute('DELETE FROM k3');

    let arr = [10, 5, 3, 1];

    for (let i = 0; i < arr.length; i++) {
        const sql = "INSERT INTO k3 SET period = ?, result = ?, game = ?, status = 1, time = ?";
        await connection.execute(sql, ['2022070110000', '235', arr[i], timeNow]);
        const sql_1 = "INSERT INTO k3 SET period = ?, result = ?, game = ?, status = 0, time = ?";
        await connection.execute(sql_1, ['2022070110001', '0', arr[i], timeNow]);
    }
    console.log("Create Success Database k3.");
    console.log("Please press ctrl + C and enter npm start to run the server.");
}

const Level = async(req, res) => {
    
    // Reset DataBase Level
    await connection.execute('DELETE FROM level');

    await connection.execute("INSERT INTO level SET id = 7, level = 6, f1 = 1, f2 = 0.3, f3 = 0.09, f4 = 0.027");
    await connection.execute("INSERT INTO level SET id = 6, level = 5, f1 = 0.9, f2 = 0.27, f3 = 0.081, f4 = 0.0243");
    await connection.execute("INSERT INTO level SET id = 5, level = 4, f1 = 0.85, f2 = 0.255, f3 = 0.0765, f4 = 0.023");
    await connection.execute("INSERT INTO level SET id = 4, level = 3, f1 = 0.8, f2 = 0.24, f3 = 0.072, f4 = 0.0216");
    await connection.execute("INSERT INTO level SET id = 3, level = 2, f1 = 0.75, f2 = 0.225, f3 = 0.0675, f4 = 0.0203");
    await connection.execute("INSERT INTO level SET id = 2, level = 1, f1 = 0.7, f2 = 0.21, f3 = 0.063, f4 = 0.0189");
    await connection.execute("INSERT INTO level SET id = 1, level = 0, f1 = 0.6, f2 = 0.18, f3 = 0.054, f4 = 0.0162");
    console.log("Create Success Database Level.");
}


const NapRut = async(req, res) => {
    
    // Reset DataBase Level
    await connection.execute('DELETE FROM bank_recharge');
    await connection.execute("INSERT INTO `bank_recharge` (`id`, `name_bank`, `name_user`, `stk`, `type`, `time`) VALUES (NULL, 'MB BANK', 'NGUYEN NHAT LONG', '0800103725300', 'bank', '1655689155500')");
    await connection.execute("INSERT INTO `bank_recharge` (`id`, `name_bank`, `name_user`, `stk`, `type`, `time`) VALUES (NULL, 'MOMO', 'NGUYEN NHAT LONG', '387633464', 'momo', '1655689155500')");
    console.log("Create Success Database NapRut.");
}

const Admin = async(req, res) => {
    
    // Reset DataBase Level
    await connection.execute('DELETE FROM admin');
    await connection.execute("INSERT INTO `admin` (`id`, `wingo1`, `wingo3`, `wingo5`, `wingo10`, `k5d`, `k5d3`, `k5d5`, `k5d10`, `win_rate`, `telegram`, `cskh`, `app`) VALUES (NULL, '-1', '-1', '-1', '-1', '-1', '-1', '-1', '-1', '80', 'https://t.me/josorir', 'https://t.me/basusir', '#')");
    console.log("Create Success Database Admin.");
}
const users = async(req, res) => {
    
    // Reset DataBase Level
    await connection.execute('DELETE FROM users');
    await connection.execute("INSERT INTO `users` (`id`, `id_user`, `phone`, `token`, `name_user`, `password`, `plain_password`, `money`, `total_money`, `roses_f1`, `roses_f`, `roses_today`, `level`, `rank`, `code`, `invite`, `ctv`, `veri`, `otp`, `ip_address`, `status`, `today`, `time`, `time_otp`, `user_level`) VALUES (282, '26289', '9876543210', '3d39f4bd2d702ee0ad607a6915db871c', 'Member93658', '4de93544234adffbb681ed60ffcfb941', 'Admin@1234', 3522, 0, 0, 0, 0, 1, 1, 'uVxnY75353', 'AABBC11223', '000000', 1, '964411', '::1', 1, '2024-02-25 18:41:52', '1708886512413', '0', 1)");
    await connection.execute("INSERT INTO `users` (`id`, `id_user`, `phone`, `token`, `name_user`, `password`, `plain_password`, `money`, `total_money`, `roses_f1`, `roses_f`, `roses_today`, `level`, `rank`, `code`, `invite`, `ctv`, `veri`, `otp`, `ip_address`, `status`, `today`, `time`, `time_otp`, `user_level`) VALUES (283, '26289', '9998887775', '3d39f4bd2d702ee0ad607a6915db871c', 'Member93658', '4de93544234adffbb681ed60ffcfb941', 'Admin@1234', 3522, 0, 0, 0, 0, 1, 1, 'uVxnY75353', 'AAAAA11111', '000000', 1, '964411', '::1', 1, '2024-02-25 18:41:52', '1708886512413', '0', 1)");
    console.log("Create Success Database users.");
}





Admin()
users()
Level()
NapRut()
Create5D();
CreateWingo();
CreateK3()