import bcrypt from 'bcryptjs';

export const hashPwd = async (pwd) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(pwd, salt);
}

export const comparePwd = async (hashedPwd, pwd) => {
    return await bcrypt.compare(pwd, hashedPwd);
}