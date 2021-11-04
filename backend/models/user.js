module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('user', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        name: {
            type: DataTypes.STRING(10),
        },
    });
    return user;
};
